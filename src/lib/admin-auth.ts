import type { NextRequest } from "next/server";

/**
 * Validates an admin password from the `x-admin-password` header.
 * Coupons admin uses COUPONS_ADMIN_PASSWORD; falls back to GEO_ADMIN_PASSWORD
 * so a single shared password works out of the box.
 */
export function isAdminAuthed(request: NextRequest): boolean {
  const header = request.headers.get("x-admin-password");
  if (!header) return false;
  const expected = process.env.COUPONS_ADMIN_PASSWORD || process.env.GEO_ADMIN_PASSWORD;
  if (!expected) return false;
  return safeEqual(header, expected);
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
