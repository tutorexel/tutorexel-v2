import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthed } from "@/lib/admin-auth";
import {
  createCoupon,
  listCoupons,
  normalizeCode,
  type DiscountType,
} from "@/lib/coupons-store";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const coupons = await listCoupons();
  return NextResponse.json({ coupons });
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validation = validateCreate(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const coupon = await createCoupon(validation.value);
    return NextResponse.json({ coupon }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create coupon";
    const status = message.includes("already exists") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

interface CreatePayload {
  code: string;
  discountType: DiscountType;
  discountValue: number;
  expiryDate: string | null;
  isActive: boolean;
  maxUses: number | null;
}

function validateCreate(
  body: unknown
): { ok: true; value: CreatePayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Body required" };
  const b = body as Record<string, unknown>;

  const codeRaw = typeof b.code === "string" ? b.code : "";
  const code = normalizeCode(codeRaw);
  if (!code) return { ok: false, error: "Code required" };
  if (!/^[A-Z0-9_-]{2,32}$/.test(code)) {
    return { ok: false, error: "Code must be 2-32 chars (letters, digits, _ or -)" };
  }

  const discountType = b.discountType;
  if (discountType !== "percentage" && discountType !== "fixed") {
    return { ok: false, error: "discountType must be 'percentage' or 'fixed'" };
  }

  const discountValue = Number(b.discountValue);
  if (!Number.isFinite(discountValue) || discountValue <= 0) {
    return { ok: false, error: "discountValue must be > 0" };
  }
  if (discountType === "percentage" && discountValue > 100) {
    return { ok: false, error: "Percentage discount cannot exceed 100" };
  }

  let expiryDate: string | null = null;
  if (b.expiryDate) {
    const t = Date.parse(String(b.expiryDate));
    if (!Number.isFinite(t)) return { ok: false, error: "Invalid expiryDate" };
    expiryDate = new Date(t).toISOString();
  }

  const isActive = b.isActive !== false; // default true

  let maxUses: number | null = null;
  if (b.maxUses !== undefined && b.maxUses !== null && b.maxUses !== "") {
    const n = Number(b.maxUses);
    if (!Number.isInteger(n) || n <= 0) {
      return { ok: false, error: "maxUses must be a positive integer" };
    }
    maxUses = n;
  }

  return { ok: true, value: { code, discountType, discountValue, expiryDate, isActive, maxUses } };
}
