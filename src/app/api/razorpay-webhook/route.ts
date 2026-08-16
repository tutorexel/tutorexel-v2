import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PAYMENT_WEBHOOK_URL = process.env.RAZORPAY_PAYMENT_WEBHOOK_URL;

function verifySignature(body: string, signature: string): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret || !signature) return false;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    );
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-razorpay-signature") || "";

    // Verify webhook signature
    if (!verifySignature(rawBody, signature)) {
      console.error("Razorpay webhook: invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    // Handle payment_link.paid event
    if (event.event === "payment_link.paid") {
      const paymentLink = event.payload?.payment_link?.entity;
      const payment = event.payload?.payment?.entity;

      if (paymentLink && payment) {
        const webhookData = {
          event: "payment_completed",
          paymentId: payment.id,
          paymentLinkId: paymentLink.id,
          amount: payment.amount / 100, // Convert paise to dollars
          currency: payment.currency,
          status: payment.status,
          method: payment.method,
          email: payment.email || paymentLink.customer?.email,
          phone: payment.contact || paymentLink.customer?.contact,
          customerName: paymentLink.customer?.name,
          // Notes from payment link creation (enrollment data)
          studentName: paymentLink.notes?.studentName,
          yearGroup: paymentLink.notes?.yearGroup,
          offering: paymentLink.notes?.offering,
          parentName: paymentLink.notes?.parentName,
          paidAt: new Date().toISOString(),
          source: "razorpay-tutorexel",
        };

        // Forward payment status to GHL webhook
        if (PAYMENT_WEBHOOK_URL) {
          const ghlResponse = await fetch(PAYMENT_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(webhookData),
          });

          if (!ghlResponse.ok) {
            console.error("GHL webhook failed:", ghlResponse.status);
          }
        }
      }
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Razorpay webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
