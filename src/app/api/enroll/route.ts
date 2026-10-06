import { NextRequest, NextResponse } from "next/server";
import { computePricing, type ClassType, type Offering } from "@/lib/pricing";
import { findActiveByCode, incrementUsage } from "@/lib/coupons-store";
import { applyCoupon } from "@/lib/coupons-apply";
import { logSubmission } from "@/lib/submissions-store";
import { getRegionConfig, type RegionCode } from "@/data/regions";
import {
  sendEnrollmentWelcomeEmail,
  sendEnrollmentTeamNotification,
  type EnrollmentEmailParams,
} from "@/utils/enrollment-emails";

/**
 * Formats a phone number for Razorpay without overriding existing country codes.
 * If no leading '+' is present, applies the region calling code.
 */
function formatPhoneForRazorpay(phone: string, region: RegionCode): string {
  if (!phone) return "";
  let cleaned = phone.replace(/[^\d+]/g, "");

  if (!cleaned.startsWith("+")) {
    const regionCallingCodes: Record<RegionCode, string> = {
      au: "+61",
      us: "+1",
      ca: "+1",
      nz: "+64",
    };
    const prefix = regionCallingCodes[region] || "+61";
    if (cleaned.startsWith("0")) {
      cleaned = prefix + cleaned.substring(1);
    } else {
      cleaned = prefix + cleaned;
    }
  }

  // Strip leading zero after Australian country code if present (+610412... -> +61412...)
  if (cleaned.startsWith("+610")) {
    cleaned = "+61" + cleaned.substring(4);
  }

  return cleaned;
}

/**
 * Generates a deterministic reference_id for deduplication.
 * Same email + amount + currency + day -> same reference_id.
 * Razorpay rejects duplicate reference_ids, which we catch to return the existing link.
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
 * Used when Razorpay rejects a duplicate reference_id so we return the existing link.
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
  currency: string;
  region: RegionCode;
  description: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  studentName: string;
  yearGroup: string;
  offering: string;
}): Promise<{ paymentUrl: string | null; referenceId: string }> {
  const currency = params.currency;
  const referenceId = generateReferenceId(params.customerEmail, params.amount, currency);

  const auth = getRazorpayAuthHeader();
  if (!auth) {
    console.error("[Razorpay] credentials not configured");
    return { paymentUrl: null, referenceId };
  }

  const regConfig = getRegionConfig(params.region);
  const callbackUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://tutorexel.com.au"}${regConfig.basePath}/thank-you`;
  const formattedPhone = formatPhoneForRazorpay(params.customerPhone, params.region);

  const requestBody = {
    amount: Math.round(params.amount * 100),
    currency,
    accept_partial: false,
    reference_id: referenceId,
    description: params.description,
    reminder_enable: false,
    customer: {
      name: params.customerName,
      email: params.customerEmail,
      contact: formattedPhone,
    },
    notify: {
      sms: false,
      email: false,
    },
    notes: {
      studentName: params.studentName,
      yearGroup: params.yearGroup,
      offering: params.offering,
      parentName: params.customerName,
      email: params.customerEmail,
      region: params.region,
      currency: params.currency,
      displayAmount: `${params.currency} ${params.amount}`,
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
    const description = data?.error?.description?.toLowerCase?.() || "";
    const isDuplicate = description.includes("already exists");

    if (isDuplicate) {
      const existingUrl = await fetchPaymentLinkByReferenceId(referenceId);
      if (existingUrl) {
        console.log("[Razorpay] Returning existing link for", referenceId);
        return { paymentUrl: existingUrl, referenceId };
      }
    }

    console.error("[Razorpay] API error:", JSON.stringify(data));
    return { paymentUrl: null, referenceId };
  }

  return { paymentUrl: data.short_url, referenceId };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      region: rawRegion,
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
      region?: string;
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

    // Validate region strictly server-side
    const validRegions: RegionCode[] = ["au", "us", "ca", "nz"];
    const region: RegionCode = validRegions.includes((rawRegion || "").toLowerCase() as RegionCode)
      ? ((rawRegion || "").toLowerCase() as RegionCode)
      : "au";
    const regConfig = getRegionConfig(region);
    const currency = regConfig.currency;

    // Derive authoritative price server-side from user selection
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
      serverTotal = typeof clientTotal === "number" && clientTotal > 0 ? clientTotal : null;
    } else if (typeof clientTotal === "number" && Math.abs(serverTotal - clientTotal) > 0.01) {
      console.warn(
        "[Enroll] client/server total mismatch - using server value.",
        { clientTotal, serverTotal, email, offering, region }
      );
    }

    // Server-side coupon re-validation
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

    // Build subject and activity lists
    const activityList = pricingSelection?.activities
      ? Object.entries(pricingSelection.activities)
          .filter(([, v]) => v)
          .map(([k]) => k.charAt(0).toUpperCase() + k.slice(1))
          .join(", ")
      : null;
    const subjectList = pricingSelection?.subjects
      ? Object.entries(pricingSelection.subjects)
          .filter(([, v]) => v)
          .map(([k]) => k.charAt(0).toUpperCase() + k.slice(1))
          .join(", ")
      : null;

    const enrollData = {
      region,
      currency,
      parentName,
      email,
      phone,
      studentName,
      yearGroup,
      offering,
      ...(planDetails ? { planDetails } : {}),
      ...(subjectList ? { subjects: subjectList } : {}),
      ...(activityList ? { activities: activityList } : {}),
      ...(validatedCouponCode ? { couponCode: validatedCouponCode } : couponCode ? { couponCode } : {}),
      ...(serverTotal != null ? { originalPrice: `${currency} $${serverTotal}` } : {}),
      ...(discountAmount > 0 ? { discount: `-${currency} $${discountAmount.toFixed(2)}` } : {}),
      ...(chargeAmount != null ? { finalPrice: `${currency} $${chargeAmount}` } : {}),
    };

    // Log submission to database store
    logSubmission("enroll", enrollData).catch((err) => {
      console.error("[Enroll] Database log submission failed:", err);
    });

    // Create Razorpay Payment Link (with customer notification disabled)
    let paymentUrl: string | null = null;
    let paymentError: string | null = null;
    let referenceId = generateReferenceId(email, chargeAmount || 0, currency);

    if (chargeAmount && chargeAmount > 0) {
      const description = [
        `TutorExel - ${offering}`,
        planDetails ? `(${planDetails.replace(/\n/g, ", ")})` : "",
        couponNote ? `[Coupon: ${couponNote}]` : "",
      ]
        .filter(Boolean)
        .join(" ")
        .trim();

      const linkResult = await createRazorpayPaymentLink({
        amount: chargeAmount,
        currency,
        region,
        description,
        customerName: parentName,
        customerEmail: email,
        customerPhone: phone || "",
        studentName,
        yearGroup,
        offering,
      });

      paymentUrl = linkResult.paymentUrl;
      referenceId = linkResult.referenceId;

      if (!paymentUrl) {
        paymentError = "Payment link creation failed. Check server logs.";
        console.error(
          "[Enroll] Payment link creation returned null.",
          { chargeAmount, currency, region, email, offering }
        );
      } else if (validatedCouponId) {
        try {
          await incrementUsage(validatedCouponId);
        } catch (err) {
          console.warn("[Enroll] failed to increment coupon usage", err);
        }
      }
    } else {
      paymentError = `chargeAmount is ${JSON.stringify(chargeAmount)} - skipped payment link creation`;
      console.warn("[Enroll] Skipped Razorpay -", { chargeAmount });
    }

    // Send customer welcome email and internal team notification email
    const emailParams: EnrollmentEmailParams = {
      parentName,
      email,
      phone: phone || "",
      studentName,
      yearGroup,
      offering,
      classType: pricingSelection?.classType
        ? pricingSelection.classType === "one-to-one"
          ? "One-to-One Session"
          : "Group Class (3:1)"
        : undefined,
      subjects: subjectList || undefined,
      activities: activityList || undefined,
      planDetails: planDetails || undefined,
      amount: chargeAmount || serverTotal || 0,
      currency,
      region,
      paymentUrl,
      referenceId,
      couponCode: validatedCouponCode || undefined,
      discountAmount,
    };

    await Promise.allSettled([
      sendEnrollmentWelcomeEmail(emailParams),
      sendEnrollmentTeamNotification(emailParams),
    ]);

    return NextResponse.json({
      success: true,
      paymentUrl,
      paymentError,
      currency,
      receiptId: referenceId,
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
