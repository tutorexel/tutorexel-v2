/**
 * Coupons — server-side JSON file store.
 * Persists at coupons.json in the project root (matching geo-store pattern).
 * In-process mutex serialises writes so concurrent requests can't lose updates
 * (single pm2 fork — adequate for current volume).
 */

import fs from "fs/promises";
import path from "path";

export type DiscountType = "percentage" | "fixed";

export interface Coupon {
  id: string;
  code: string; // canonical form: uppercase
  discountType: DiscountType;
  discountValue: number; // percentage: 0-100; fixed: whole-currency units
  expiryDate: string | null; // ISO datetime, e.g. "2026-12-31T23:59:59.000Z"
  isActive: boolean;
  usageCount: number;
  maxUses: number | null; // null = unlimited
  createdAt: string;
  updatedAt: string;
}

interface StoreShape {
  coupons: Coupon[];
}

const STORE_PATH = path.join(process.cwd(), "coupons.json");
const DEFAULT_STORE: StoreShape = { coupons: [] };

let writeChain: Promise<unknown> = Promise.resolve();

async function readStore(): Promise<StoreShape> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf-8");
    const parsed = JSON.parse(raw) as Partial<StoreShape>;
    return { coupons: Array.isArray(parsed.coupons) ? parsed.coupons : [] };
  } catch {
    return { ...DEFAULT_STORE };
  }
}

async function writeStore(store: StoreShape): Promise<void> {
  const tmp = STORE_PATH + ".tmp";
  await fs.writeFile(tmp, JSON.stringify(store, null, 2), "utf-8");
  await fs.rename(tmp, STORE_PATH);
}

/** Serialises any read-modify-write cycle so concurrent updates don't clobber each other. */
function withWriteLock<T>(fn: () => Promise<T>): Promise<T> {
  const next = writeChain.then(fn, fn);
  // Prevent rejected predecessors from poisoning the chain.
  writeChain = next.catch(() => undefined);
  return next;
}

function newId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function nowIso(): string {
  return new Date().toISOString();
}

export function normalizeCode(code: string): string {
  return code.trim().toUpperCase();
}

export async function listCoupons(): Promise<Coupon[]> {
  const store = await readStore();
  return store.coupons.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function findActiveByCode(code: string): Promise<Coupon | null> {
  const norm = normalizeCode(code);
  const store = await readStore();
  return store.coupons.find((c) => c.code === norm) ?? null;
}

export interface CreateInput {
  code: string;
  discountType: DiscountType;
  discountValue: number;
  expiryDate?: string | null;
  isActive?: boolean;
  maxUses?: number | null;
}

export async function createCoupon(input: CreateInput): Promise<Coupon> {
  return withWriteLock(async () => {
    const store = await readStore();
    const code = normalizeCode(input.code);
    if (store.coupons.some((c) => c.code === code)) {
      throw new Error("Coupon code already exists");
    }
    const coupon: Coupon = {
      id: newId(),
      code,
      discountType: input.discountType,
      discountValue: input.discountValue,
      expiryDate: input.expiryDate ?? null,
      isActive: input.isActive ?? true,
      usageCount: 0,
      maxUses: input.maxUses ?? null,
      createdAt: nowIso(),
      updatedAt: nowIso(),
    };
    store.coupons.push(coupon);
    await writeStore(store);
    return coupon;
  });
}

export interface UpdateInput {
  code?: string;
  discountType?: DiscountType;
  discountValue?: number;
  expiryDate?: string | null;
  isActive?: boolean;
  maxUses?: number | null;
}

export async function updateCoupon(id: string, input: UpdateInput): Promise<Coupon> {
  return withWriteLock(async () => {
    const store = await readStore();
    const idx = store.coupons.findIndex((c) => c.id === id);
    if (idx === -1) throw new Error("Coupon not found");
    const existing = store.coupons[idx];

    let nextCode = existing.code;
    if (typeof input.code === "string") {
      nextCode = normalizeCode(input.code);
      if (nextCode !== existing.code && store.coupons.some((c) => c.code === nextCode)) {
        throw new Error("Coupon code already exists");
      }
    }

    const updated: Coupon = {
      ...existing,
      code: nextCode,
      discountType: input.discountType ?? existing.discountType,
      discountValue: input.discountValue ?? existing.discountValue,
      expiryDate: input.expiryDate === undefined ? existing.expiryDate : input.expiryDate,
      isActive: input.isActive ?? existing.isActive,
      maxUses: input.maxUses === undefined ? existing.maxUses : input.maxUses,
      updatedAt: nowIso(),
    };
    store.coupons[idx] = updated;
    await writeStore(store);
    return updated;
  });
}

export async function deleteCoupon(id: string): Promise<void> {
  return withWriteLock(async () => {
    const store = await readStore();
    const next = store.coupons.filter((c) => c.id !== id);
    if (next.length === store.coupons.length) throw new Error("Coupon not found");
    store.coupons = next;
    await writeStore(store);
  });
}

/** Atomically increments usageCount; returns the updated coupon or throws if not found. */
export async function incrementUsage(id: string): Promise<Coupon> {
  return withWriteLock(async () => {
    const store = await readStore();
    const idx = store.coupons.findIndex((c) => c.id === id);
    if (idx === -1) throw new Error("Coupon not found");
    const c = store.coupons[idx];
    const updated: Coupon = { ...c, usageCount: c.usageCount + 1, updatedAt: nowIso() };
    store.coupons[idx] = updated;
    await writeStore(store);
    return updated;
  });
}
