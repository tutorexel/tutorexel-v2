/**
 * Tiny client helper for previewing a coupon's effect on a displayed price.
 * Mirrors the server-side math in `coupons-apply.ts`. Not authoritative — the
 * server still re-validates and re-computes at payment time.
 */

export interface CouponPreview {
  valid: true;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
}

export interface DiscountedPrice {
  hasDiscount: boolean;
  /** The original price the user would have paid (cents-safe, 2dp). */
  original: number;
  /** The new price with this coupon applied (never < 0). */
  final: number;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function previewDiscount(price: number, coupon: CouponPreview | null): DiscountedPrice {
  const original = round2(price);
  if (!coupon || !Number.isFinite(price) || price <= 0) {
    return { hasDiscount: false, original, final: original };
  }

  let discount = 0;
  if (coupon.discountType === "percentage") {
    if (coupon.discountValue <= 0 || coupon.discountValue > 100) {
      return { hasDiscount: false, original, final: original };
    }
    discount = (price * coupon.discountValue) / 100;
  } else if (coupon.discountType === "fixed") {
    if (coupon.discountValue <= 0) return { hasDiscount: false, original, final: original };
    discount = Math.min(coupon.discountValue, price);
  }

  if (discount <= 0) return { hasDiscount: false, original, final: original };
  return { hasDiscount: true, original, final: round2(Math.max(0, price - discount)) };
}

export function formatDiscountSummary(coupon: CouponPreview): string {
  return coupon.discountType === "percentage"
    ? `${coupon.discountValue}% off`
    : `$${coupon.discountValue} off`;
}
