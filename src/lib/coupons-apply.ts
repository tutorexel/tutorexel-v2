import type { Coupon } from "./coupons-store";

export interface ApplyResult {
  ok: boolean;
  /** Reason code so callers/UI can render distinct messages. */
  reason?:
    | "not_found"
    | "inactive"
    | "expired"
    | "limit_reached"
    | "invalid_amount"
    | "invalid_value";
  message?: string;
  /** Whole-currency discount, rounded to 2dp, never negative, never > original. */
  discountAmount?: number;
  /** Whole-currency final price, rounded to 2dp, never negative. */
  finalAmount?: number;
}

const MESSAGES: Record<NonNullable<ApplyResult["reason"]>, string> = {
  not_found: "Coupon code not found.",
  inactive: "This coupon is currently disabled.",
  expired: "This coupon has expired.",
  limit_reached: "This coupon has reached its usage limit.",
  invalid_amount: "Cart total is invalid.",
  invalid_value: "Coupon value is invalid.",
};

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Validates a coupon against a cart total and computes the discount.
 * Pure function — does not touch storage and does not increment usage.
 */
export function applyCoupon(coupon: Coupon | null, cartTotal: number): ApplyResult {
  if (!coupon) return fail("not_found");
  if (!coupon.isActive) return fail("inactive");

  if (coupon.expiryDate) {
    const exp = Date.parse(coupon.expiryDate);
    if (!Number.isFinite(exp)) return fail("expired");
    if (Date.now() > exp) return fail("expired");
  }

  if (coupon.maxUses != null && coupon.usageCount >= coupon.maxUses) {
    return fail("limit_reached");
  }

  if (!Number.isFinite(cartTotal) || cartTotal <= 0) return fail("invalid_amount");

  let discount = 0;
  if (coupon.discountType === "percentage") {
    if (coupon.discountValue < 0 || coupon.discountValue > 100) return fail("invalid_value");
    discount = (cartTotal * coupon.discountValue) / 100;
  } else if (coupon.discountType === "fixed") {
    if (coupon.discountValue < 0) return fail("invalid_value");
    discount = coupon.discountValue;
  } else {
    return fail("invalid_value");
  }

  // Cap so discount never exceeds the cart total.
  discount = Math.min(discount, cartTotal);
  const finalAmount = Math.max(0, cartTotal - discount);

  return {
    ok: true,
    discountAmount: round2(discount),
    finalAmount: round2(finalAmount),
  };
}

function fail(reason: NonNullable<ApplyResult["reason"]>): ApplyResult {
  return { ok: false, reason, message: MESSAGES[reason] };
}
