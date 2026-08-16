import { NextRequest, NextResponse } from "next/server";
import { findActiveByCode } from "@/lib/coupons-store";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

/**
 * Public coupon preview — returns the coupon's discount type & value if it's
 * currently usable (active, not expired, under usage limit). Used by the
 * pricing page to render discounted prices on each plan card without needing
 * a cart total.
 *
 * Does NOT increment usageCount.
 */
export async function GET(request: NextRequest) {
  const ip = clientIp(request.headers);
  const rl = rateLimit(`coupon-preview:${ip}`, 30, 30 / 60); // 30 req / 60s
  if (!rl.ok) {
    return NextResponse.json(
      { valid: false, message: "Too many requests." },
      { status: 429, headers: { "Retry-After": String(Math.ceil(rl.retryAfterMs / 1000)) } }
    );
  }

  const code = request.nextUrl.searchParams.get("code") || "";
  if (!code.trim()) {
    return NextResponse.json({ valid: false, message: "Code required." }, { status: 400 });
  }

  const coupon = await findActiveByCode(code);
  if (!coupon) {
    return NextResponse.json({ valid: false, message: "Coupon code not found." });
  }
  if (!coupon.isActive) {
    return NextResponse.json({ valid: false, message: "This coupon is currently disabled." });
  }
  if (coupon.expiryDate && Date.now() > Date.parse(coupon.expiryDate)) {
    return NextResponse.json({ valid: false, message: "This coupon has expired." });
  }
  if (coupon.maxUses != null && coupon.usageCount >= coupon.maxUses) {
    return NextResponse.json({ valid: false, message: "This coupon has reached its usage limit." });
  }

  return NextResponse.json({
    valid: true,
    code: coupon.code,
    discountType: coupon.discountType,
    discountValue: coupon.discountValue,
  });
}
