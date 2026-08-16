/**
 * GeoGuard — server-side config store
 *
 * Persistence strategy (auto-detected):
 *   1. If a KV/Redis REST store is configured (KV_REST_API_URL + KV_REST_API_TOKEN,
 *      or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN) → use it.
 *      This is REQUIRED on Vercel/serverless, where the filesystem is read-only.
 *   2. Otherwise fall back to geo-config.json on disk (works for local dev).
 *
 * Used by API routes (Node.js runtime). Middleware reads the same KV key directly.
 */

import fs from "fs/promises";
import path from "path";

export interface GeoConfig {
  enabled: boolean;
  siteName: string;
  allowedCountries: string[]; // ISO 3166-1 alpha-2 codes, e.g. ["AU"]
  whitelistedIPs: string[]; // IPv4/IPv6 addresses that bypass geo-block
  testMode: boolean; // simulate a country (for testing on localhost)
  testCountry: string; // country code to simulate when testMode is on
}

const CONFIG_PATH = path.join(process.cwd(), "geo-config.json");

/** Redis key used in the KV store (must match the one read by middleware). */
export const GEO_KV_KEY = "geo-config";

export const DEFAULT_CONFIG: GeoConfig = {
  enabled: true,
  siteName: process.env.GEO_SITE_NAME ?? "This service",
  // Safe fallback used only when no KV/file config exists yet.
  allowedCountries: ["AU", "IN"],
  whitelistedIPs: [],
  testMode: false,
  testCountry: "",
};

// ─── KV (Upstash Redis REST) helpers ─────────────────────────────────────────
const KV_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? "";

export function hasKV(): boolean {
  return !!(KV_URL && KV_TOKEN);
}

async function kvGet(): Promise<GeoConfig | null> {
  const res = await fetch(`${KV_URL}/get/${GEO_KV_KEY}`, {
    headers: { Authorization: `Bearer ${KV_TOKEN}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV get failed (HTTP ${res.status})`);
  const data = (await res.json()) as { result: string | null };
  if (!data.result) return null;
  return JSON.parse(data.result) as GeoConfig;
}

async function kvSet(config: GeoConfig): Promise<void> {
  const res = await fetch(`${KV_URL}/set/${GEO_KV_KEY}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV set failed (HTTP ${res.status})`);
}

// ─── Public API ──────────────────────────────────────────────────────────────
export async function readGeoConfig(): Promise<GeoConfig> {
  if (hasKV()) {
    const stored = await kvGet();
    return stored ? { ...DEFAULT_CONFIG, ...stored } : { ...DEFAULT_CONFIG };
  }

  // Local dev fallback: read from disk.
  try {
    const raw = await fs.readFile(CONFIG_PATH, "utf-8");
    return { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

export async function writeGeoConfig(config: GeoConfig): Promise<void> {
  if (hasKV()) {
    await kvSet(config);
    return;
  }

  // Local dev fallback: write to disk. NOTE: this throws on Vercel/serverless
  // (read-only filesystem) — configure a KV store there (see file header).
  try {
    await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
  } catch (err) {
    throw new Error(
      "Could not persist GeoGuard config. On Vercel/serverless the filesystem is " +
        "read-only — add a KV/Redis store and set KV_REST_API_URL + KV_REST_API_TOKEN. " +
        `(underlying error: ${(err as Error).message})`
    );
  }
}
