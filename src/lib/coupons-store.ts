/**
 * Coupons — server-side store.
 *
 * Persistence strategy (auto-detected, mirrors geo-store.ts):
 *   1. If a KV/Redis REST store is configured (KV_REST_API_URL + KV_REST_API_TOKEN,
 *      or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN) → use it.
 *      This is REQUIRED on Vercel/serverless, where the filesystem is read-only.
 *   2. Otherwise fall back to coupons.json on disk (works for local dev).
 *
 * In-process mutex serialises writes so concurrent requests can't lose updates
 * (adequate for current volume).
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

/** Redis key used in the KV store. */
export const COUPONS_KV_KEY = "coupons";

// ─── KV (Upstash Redis REST) helpers ─────────────────────────────────────────
const KV_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? "";

function hasKV(): boolean {
  return !!(KV_URL && KV_TOKEN);
}

async function kvGet(): Promise<StoreShape | null> {
  const res = await fetch(`${KV_URL}/get/${COUPONS_KV_KEY}`, {
    headers: { Authorization: `Bearer ${KV_TOKEN}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV get failed (HTTP ${res.status})`);
  const data = (await res.json()) as { result: string | null };
  if (!data.result) return null;
  return JSON.parse(data.result) as StoreShape;
}

async function kvSet(store: StoreShape): Promise<void> {
  const res = await fetch(`${KV_URL}/set/${COUPONS_KV_KEY}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(store),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV set failed (HTTP ${res.status})`);
}

let writeChain: Promise<unknown> = Promise.resolve();

async function readStore(): Promise<StoreShape> {
  if (hasKV()) {
    try {
      const stored = await kvGet();
      return { coupons: Array.isArray(stored?.coupons) ? stored!.coupons : [] };
    } catch {
      return { ...DEFAULT_STORE };
    }
  }

  // Local dev fallback: read from disk.
  try {
    const raw = await fs.readFile(STORE_PATH, "utf-8");
    const parsed = JSON.parse(raw) as Partial<StoreShape>;
    return { coupons: Array.isArray(parsed.coupons) ? parsed.coupons : [] };
  } catch {
    return { ...DEFAULT_STORE };
  }
}

async function writeStore(store: StoreShape): Promise<void> {
  if (hasKV()) {
    await kvSet(store);
    return;
  }

  // Local dev fallback: atomic write via temp file. NOTE: this throws on
  // Vercel/serverless (read-only filesystem) — configure a KV store there.
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
