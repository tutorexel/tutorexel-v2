/**
 * Razorpay diagnostic endpoint.
 * Tests payment link creation with current config.
 * Visit: /api/debug/razorpay?password=Admin@123
 */

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const pwd = request.nextUrl.searchParams.get("password") || "";
  if (!pwd || pwd !== process.env.GEO_ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  const currency = process.env.RAZORPAY_CURRENCY || "AUD";

  const checks: Record<string, unknown> = {
    keyId: keyId ? keyId.substring(0, 15) + "..." : "NOT SET",
    mode: keyId?.includes("test") ? "TEST" : "LIVE",
    currency,
    keySecretSet: !!keySecret,
  };

  if (!keyId || !keySecret) {
    checks.result = "FAILED — keys not configured";
    return NextResponse.json(checks, { headers: { "Cache-Control": "no-store" } });
  }

  // Try creating a test payment link
  const auth = "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");
  const referenceId = `diag_${Date.now()}`;

  try {
    const res = await fetch("https://api.razorpay.com/v1/payment_links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify({
        amount: 100, // $1 test
        currency,
        accept_partial: false,
        reference_id: referenceId,
        description: "Diagnostic test — safe to ignore",
        customer: {
          name: "Diagnostic",
          email: "test@test.com",
          contact: "+61400000000",
        },
      }),
    });

    const data = await res.json();

    checks.apiStatus = res.status;
    checks.paymentLinkCreated = !!data.short_url;
    checks.paymentUrl = data.short_url || null;
    checks.error = data.error || null;
    checks.result = data.short_url ? "SUCCESS — Razorpay working" : "FAILED — see error";
  } catch (err) {
    checks.result = "FAILED — network error";
    checks.error = err instanceof Error ? err.message : "Unknown";
  }

  return NextResponse.json(checks, { headers: { "Cache-Control": "no-store" } });
}
