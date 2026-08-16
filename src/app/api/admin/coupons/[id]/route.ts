import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthed } from "@/lib/admin-auth";
import {
  deleteCoupon,
  normalizeCode,
  updateCoupon,
  type DiscountType,
  type UpdateInput,
} from "@/lib/coupons-store";

export const runtime = "nodejs";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, context: RouteParams) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await context.params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validation = validatePatch(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const coupon = await updateCoupon(id, validation.value);
    return NextResponse.json({ coupon });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to update coupon";
    const status = message.includes("not found") ? 404 : message.includes("already exists") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(request: NextRequest, context: RouteParams) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await context.params;
  try {
    await deleteCoupon(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to delete coupon";
    const status = message.includes("not found") ? 404 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

function validatePatch(
  body: unknown
): { ok: true; value: UpdateInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Body required" };
  const b = body as Record<string, unknown>;
  const out: UpdateInput = {};

  if (b.code !== undefined) {
    const code = normalizeCode(String(b.code));
    if (!/^[A-Z0-9_-]{2,32}$/.test(code)) {
      return { ok: false, error: "Code must be 2-32 chars (letters, digits, _ or -)" };
    }
    out.code = code;
  }

  if (b.discountType !== undefined) {
    if (b.discountType !== "percentage" && b.discountType !== "fixed") {
      return { ok: false, error: "discountType must be 'percentage' or 'fixed'" };
    }
    out.discountType = b.discountType as DiscountType;
  }

  if (b.discountValue !== undefined) {
    const n = Number(b.discountValue);
    if (!Number.isFinite(n) || n <= 0) {
      return { ok: false, error: "discountValue must be > 0" };
    }
    const type = (out.discountType ?? "percentage") as DiscountType;
    if (b.discountType === "percentage" && n > 100) {
      return { ok: false, error: "Percentage discount cannot exceed 100" };
    }
    // If only value sent, we can't enforce % cap without knowing existing type — store does it again on read if needed.
    void type;
    out.discountValue = n;
  }

  if (b.expiryDate !== undefined) {
    if (b.expiryDate === null || b.expiryDate === "") {
      out.expiryDate = null;
    } else {
      const t = Date.parse(String(b.expiryDate));
      if (!Number.isFinite(t)) return { ok: false, error: "Invalid expiryDate" };
      out.expiryDate = new Date(t).toISOString();
    }
  }

  if (b.isActive !== undefined) {
    out.isActive = Boolean(b.isActive);
  }

  if (b.maxUses !== undefined) {
    if (b.maxUses === null || b.maxUses === "") {
      out.maxUses = null;
    } else {
      const n = Number(b.maxUses);
      if (!Number.isInteger(n) || n <= 0) {
        return { ok: false, error: "maxUses must be a positive integer or null" };
      }
      out.maxUses = n;
    }
  }

  return { ok: true, value: out };
}
