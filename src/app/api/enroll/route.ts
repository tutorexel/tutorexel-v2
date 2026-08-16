import { NextRequest, NextResponse } from "next/server";
import { computePricing, type ClassType, type Offering } from "@/lib/pricing";
import { findActiveByCode, incrementUsage } from "@/lib/coupons-store";
import { applyCoupon } from "@/lib/coupons-apply";
import { logSubmission } from "@/lib/submissions-store";
import { sendNotificationEmail } from "@/utils/send-notification-email";

/**
 * Formats a phone number into Razorpay-compatible E.164 format.
 * Handles common Australian input formats like:
 *   "+61 0412 345 678"  → "+61412345678"
 *   "0412345678"        → "+61412345678"
 */
function formatPhoneForRazorpay(phone: string): string {
  if (!phone) return "";
  let cleaned = phone.replace(/[^\d+]/g, "");

  if (!cleaned.startsWith("+")) {
    if (cleaned.startsWith("61")) cleaned = "+" + cleaned;
    else if (cleaned.startsWith("0")) cleaned = "+61" + cleaned.substring(1);
    else cleaned = "+61" + cleaned;
  }

  // Strip leading zero after +61: "+610412..." → "+61412..."
  if (cleaned.startsWith("+610")) cleaned = "+61" + cleaned.substring(4);

  return cleaned;
}

/**
 * Generates a deterministic reference_id for deduplication.
 * Same email + amount + currency + day → same reference_id.
 * Razorpay rejects duplicate reference_ids, which we catch to return the existing link.
 * Currency is included so switching between INR (test) and AUD (live) creates fresh links.
 */
function generateReferenceId(email: string, amount: number, currency: string): string {
  const today = new Date().toISOString().split("T")[0].replace(/-/g, ""); // YYYYMMDD
  const emailSlug = email.toLowerCase().replace(/[^a-z0-9]/g, "_").substring(0, 16);
  return `te_${emailSlug}_${amount}${currency.toLowerCase()}_${today}`.substring(0, 40);
}

function getRazorpayAuthHeader(): string | null {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return null;
  return "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");
}

/**
 * Fetches an existing payment link by reference_id.
 * Used when Razorpay rejects a duplicate reference_id — we return the existing link.
 */
async function fetchPaymentLinkByReferenceId(referenceId: string): Promise<string | null> {
  const auth = getRazorpayAuthHeader();
  if (!auth) return null;

  const response = await fetch(
    `https://api.razorpay.com/v1/payment_links?reference_id=${encodeURIComponent(referenceId)}`,
    { headers: { Authorization: auth } }
  );

  if (!response.ok) return null;
  const data = await response.json();
  return data.payment_links?.[0]?.short_url || null;
}

async function createRazorpayPaymentLink(params: {
  amount: number;
  description: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  studentName: string;
  yearGroup: string;
  offering: string;
}): Promise<string | null> {
  const auth = getRazorpayAuthHeader();
  if (!auth) {
    console.error("[Razorpay] credentials not configured");
    return null;
  }

  const callbackUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://tutorexel.com.au"}/thank-you`;
  const formattedPhone = formatPhoneForRazorpay(params.customerPhone);

  // Currency controlled via env: use INR for testing (Indian test cards work),
  // AUD for production (requires International Payments enabled on Razorpay).
  const currency = process.env.RAZORPAY_CURRENCY || "AUD";
  const referenceId = generateReferenceId(params.customerEmail, params.amount, currency);

  const requestBody = {
    amount: Math.round(params.amount * 100),
    currency,
    accept_partial: false,
    reference_id: referenceId,
    description: params.description,
    reminder_enable: true,
    customer: {
      name: params.customerName,
      email: params.customerEmail,
      contact: formattedPhone,
    },
    notify: {
      sms: true,
      email: true,
    },
    notes: {
      studentName: params.studentName,
      yearGroup: params.yearGroup,
      offering: params.offering,
      parentName: params.customerName,
      email: params.customerEmail,
      displayAmountAUD: String(params.amount),
    },
    callback_url: callbackUrl,
    callback_method: "get",
  };

  const response = await fetch("https://api.razorpay.com/v1/payment_links", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    // Razorpay returns "payment link with given reference_id: ... already exists"
    // when the reference_id has been used before. We fetch and reuse that link.
    const description = data?.error?.description?.toLowerCase?.() || "";
    const isDuplicate = description.includes("already exists");

    if (isDuplicate) {
      const existingUrl = await fetchPaymentLinkByReferenceId(referenceId);
      if (existingUrl) {
        console.log("[Razorpay] Returning existing link for", referenceId);
        return existingUrl;
      }
    }

    console.error("[Razorpay] API error:", JSON.stringify(data));
    return null;
  }

  return data.short_url;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      parentName,
      email,
      phone,
      studentName,
      yearGroup,
      offering,
      planDetails,
      totalAmount: clientTotal,
      couponCode,
      pricingSelection,
    } = body as {
      parentName?: string;
      email?: string;
      phone?: string;
      studentName?: string;
      yearGroup?: string;
      offering?: string;
      planDetails?: string;
      totalAmount?: number;
      couponCode?: string | null;
      pricingSelection?: {
        offering?: Offering;
        classType?: ClassType;
        subjects?: { Mathematics?: boolean; English?: boolean; Science?: boolean };
        activities?: { piano?: boolean; guitar?: boolean };
      };
    };

    if (!parentName || !email || !studentName || !yearGroup || !offering) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log submission and notify
    // Derive the authoritative price server-side from the user's selection.
    // Fall back to the client total only if pricingSelection is missing (older client).
    let serverTotal: number | null = null;
    if (pricingSelection && typeof pricingSelection === "object") {
      const result = computePricing({
        offering: pricingSelection.offering as Offering,
        classType: pricingSelection.classType as ClassType,
        subjects: pricingSelection.subjects,
        activities: pricingSelection.activities,
      });
      serverTotal = result.total;
    }

    if (serverTotal == null) {
      // No pricingSelection — accept the client total as-is for backwards compatibility.
      serverTotal = typeof clientTotal === "number" && clientTotal > 0 ? clientTotal : null;
    } else if (typeof clientTotal === "number" && Math.abs(serverTotal - clientTotal) > 0.01) {
      console.warn(
        "[Enroll] client/server total mismatch — using server value.",
        { clientTotal, serverTotal, email, offering }
      );
    }

    // Server-side coupon re-validation. Even if the client applied a discount,
    // we re-validate here and ignore any client-side discountAmount.
    let validatedCouponCode: string | null = null;
    let validatedCouponId: string | null = null;
    let discountAmount = 0;
    let finalAmount: number | null = serverTotal;
    let couponNote: string | null = null;

    if (couponCode && serverTotal != null && serverTotal > 0) {
      const coupon = await findActiveByCode(String(couponCode));
      const result = applyCoupon(coupon, serverTotal);
      if (result.ok && coupon) {
        validatedCouponCode = coupon.code;
        validatedCouponId = coupon.id;
        discountAmount = result.discountAmount ?? 0;
        finalAmount = result.finalAmount ?? serverTotal;
        couponNote = `${coupon.code}: ${
          coupon.discountType === "percentage"
            ? `${coupon.discountValue}% off`
            : `$${coupon.discountValue} off`
        }`;
      } else {
        console.warn("[Enroll] coupon rejected at payment", { couponCode, reason: result.reason });
      }
    }

    const chargeAmount = finalAmount;
    const amount = String(chargeAmount || 99);

    // Log submission with full pricing data
    const activityList = pricingSelection?.activities
      ? Object.entries(pricingSelection.activities).filter(([, v]) => v).map(([k]) => k.charAt(0).toUpperCase() + k.slice(1)).join(", ")
      : null;
    const subjectList = pricingSelection?.subjects
      ? Object.entries(pricingSelection.subjects).filter(([, v]) => v).map(([k]) => k.charAt(0).toUpperCase() + k.slice(1)).join(", ")
      : null;
    const enrollData = {
      parentName, email, phone, studentName, yearGroup, offering,
      ...(planDetails ? { planDetails } : {}),
      ...(subjectList ? { subjects: subjectList } : {}),
      ...(activityList ? { activities: activityList } : {}),
      ...(validatedCouponCode ? { couponCode: validatedCouponCode } : couponCode ? { couponCode } : {}),
      ...(serverTotal != null ? { originalPrice: `$${serverTotal}` } : {}),
      ...(discountAmount > 0 ? { discount: `-$${discountAmount.toFixed(2)}` } : {}),
      ...(chargeAmount != null ? { finalPrice: `$${chargeAmount}` } : {}),
    };
    logSubmission("enroll", enrollData).catch(() => {});
    sendNotificationEmail("enroll", enrollData).catch(() => {});

    // Run GHL automation async (don't block the response)

    // Create Razorpay Payment Link with the discounted amount
    let paymentUrl: string | null = null;
    let paymentError: string | null = null;

    if (chargeAmount && chargeAmount > 0) {
      const description = [
        `TutorExel - ${offering}`,
        planDetails ? `(${planDetails.replace(/\n/g, ", ")})` : "",
        couponNote ? `[Coupon: ${couponNote}]` : "",
      ]
        .filter(Boolean)
        .join(" ")
        .trim();

      paymentUrl = await createRazorpayPaymentLink({
        amount: chargeAmount,
        description,
        customerName: parentName,
        customerEmail: email,
        customerPhone: phone || "",
        studentName,
        yearGroup,
        offering,
      });

      if (!paymentUrl) {
        paymentError = "Payment link creation failed. Check server logs.";
        console.error(
          "[Enroll] Payment link creation returned null.",
          { chargeAmount, email, offering }
        );
      } else if (validatedCouponId) {
        // Only burn a coupon use if the link was actually created.
        try {
          await incrementUsage(validatedCouponId);
        } catch (err) {
          console.warn("[Enroll] failed to increment coupon usage", err);
        }
      }
    } else {
      paymentError = `chargeAmount is ${JSON.stringify(chargeAmount)} — skipped payment link creation`;
      console.error("[Enroll] Skipped Razorpay —", { chargeAmount });
    }

    return NextResponse.json({
      success: true,
      paymentUrl,
      paymentError,
      // Echo back the values the server actually used, so the UI can reconcile.
      serverTotal,
      discountAmount,
      finalAmount: chargeAmount,
      appliedCouponCode: validatedCouponCode,
    });
  } catch (error) {
    console.error("Enrolment error:", error);
    return NextResponse.json({ error: "Failed to process enrolment" }, { status: 500 });
  }
}
