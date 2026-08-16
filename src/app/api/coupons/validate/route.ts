import { NextRequest, NextResponse } from "next/server";
import { findActiveByCode } from "@/lib/coupons-store";
import { applyCoupon } from "@/lib/coupons-apply";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const ip = clientIp(request.headers);
  const rl = rateLimit(`coupon-validate:${ip}`, 20, 20 / 60); // 20 req / 60s
  if (!rl.ok) {
    return NextResponse.json(
      { valid: false, message: "Too many requests. Please slow down." },
      { status: 429, headers: { "Retry-After": String(Math.ceil(rl.retryAfterMs / 1000)) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ valid: false, message: "Invalid request" }, { status: 400 });
  }

  const b = (body ?? {}) as Record<string, unknown>;
  const code = typeof b.code === "string" ? b.code : "";
  const cartTotal = Number(b.cartTotal);

  if (!code || !Number.isFinite(cartTotal) || cartTotal <= 0) {
    return NextResponse.json(
      { valid: false, message: "Code and cartTotal are required." },
      { status: 400 }
    );
  }

  const coupon = await findActiveByCode(code);
  const result = applyCoupon(coupon, cartTotal);

  if (!result.ok) {
    return NextResponse.json({ valid: false, message: result.message });
  }

  return NextResponse.json({
    valid: true,
    code: coupon!.code,
    discountType: coupon!.discountType,
    discountValue: coupon!.discountValue,
    discountAmount: result.discountAmount,
    finalAmount: result.finalAmount,
    message: "Coupon applied.",
  });
}
