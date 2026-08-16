/**
 * TutorExel Middleware — Blog redirects + GeoGuard
 *
 * Uses Node.js runtime so we can read geo-config.json directly from disk
 * instead of making HTTP self-calls (which fail with SSL issues on localhost).
 *
 * Country detection priority:
 *   1. cf-ipcountry    (Cloudflare — zero latency, recommended)
 *   2. x-country-code  (nginx GeoIP2 header)
 *   3. ip-api.com      (HTTP fallback, cached per IP for 1h)
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

// ─── Blog redirect map ───────────────────────────────────────────────────────
const oldIdToSlug: Record<string, string> = {
  "1": "introducing-tutorexel-personalised-online-tutoring",
  "2": "how-tutorexel-works-diagnostic-test-learning-plan",
  "3": "why-australian-students-need-more-than-school-support",
  "4": "why-national-assessments-matter-naplan-icas",
  "5": "tutorexel-approach-structured-lessons-worksheets",
  "6": "personalised-tutoring-builds-confidence-not-just-grades",
  "7": "monthly-report-cards-help-parents-track-progress",
  "8": "parents-guide-choosing-right-online-tutor",
  "9": "online-tutoring-vs-traditional-tutoring",
  "10": "benefits-of-group-classes-collaborative-learning",
  "11": "tutorexel-online-methodology-lms-interactive-learning",
  "12": "keeping-tutoring-stress-free-health-learning-screen-time",
  "13": "parents-guide-how-tutorexel-keeps-you-informed",
  "14": "every-4th-class-counts-regular-tests-make-learning-stick",
  "15": "open-books-open-learning-transparency-at-tutorexel",
  "16": "beyond-class-hours-extra-practice-independent-learners",
  "17": "strong-foundations-first-dont-rush-learning",
  "18": "stress-to-strategy-naplan-icas-prep-saves-time",
  "19": "one-on-one-vs-small-group-tutoring",
  "20": "affordable-flexible-from-home-why-parents-love-tutorexel",
  "21": "one-login-zero-hassle-all-in-one-portal",
  "22": "risk-free-tutoring-free-trial-refund-policy",
};

// ─── GeoGuard types ──────────────────────────────────────────────────────────
interface GeoConfigData {
  enabled: boolean;
  allowedCountries: string[];
  whitelistedIPs: string[];
  testMode: boolean;
  testCountry: string;
}

const DEFAULT_CONFIG: GeoConfigData = {
  enabled: true,
  // Safe fallback used only when no KV/file config exists yet.
  allowedCountries: ["AU", "IN"],
  whitelistedIPs: [],
  testMode: false,
  testCountry: "",
};

// ─── Config reader ───────────────────────────────────────────────────────────
// Reads from the same KV store the admin API writes to (REQUIRED on Vercel —
// the filesystem is read-only there). Falls back to geo-config.json for local
// dev. Cached in-memory for a short TTL so we don't hit KV on every request.
const KV_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? "";
const GEO_KV_KEY = "geo-config";
const CACHE_TTL_MS = 30_000;

let configCache: { data: GeoConfigData; expiresAt: number } | null = null;

function normalizeConfig(parsed: Partial<GeoConfigData>): GeoConfigData {
  return {
    enabled: parsed.enabled ?? DEFAULT_CONFIG.enabled,
    allowedCountries: parsed.allowedCountries ?? DEFAULT_CONFIG.allowedCountries,
    whitelistedIPs: parsed.whitelistedIPs ?? DEFAULT_CONFIG.whitelistedIPs,
    testMode: parsed.testMode ?? DEFAULT_CONFIG.testMode,
    testCountry: (parsed.testCountry ?? DEFAULT_CONFIG.testCountry).toUpperCase(),
  };
}

async function readGeoConfig(): Promise<GeoConfigData> {
  const now = Date.now();
  if (configCache && configCache.expiresAt > now) {
    return configCache.data;
  }

  // 1. KV store (production / Vercel)
  if (KV_URL && KV_TOKEN) {
    try {
      const res = await fetch(`${KV_URL}/get/${GEO_KV_KEY}`, {
        headers: { Authorization: `Bearer ${KV_TOKEN}` },
        cache: "no-store",
      });
      if (res.ok) {
        const data = (await res.json()) as { result: string | null };
        const parsed = data.result ? (JSON.parse(data.result) as Partial<GeoConfigData>) : {};
        const config = normalizeConfig(parsed);
        configCache = { data: config, expiresAt: now + CACHE_TTL_MS };
        return config;
      }
    } catch {
      // KV unreachable → fall through to file/defaults
    }
  }

  // 2. Local dev fallback: read from disk
  try {
    const configPath = path.join(process.cwd(), "geo-config.json");
    const raw = fs.readFileSync(configPath, "utf-8");
    const config = normalizeConfig(JSON.parse(raw) as Partial<GeoConfigData>);
    configCache = { data: config, expiresAt: now + CACHE_TTL_MS };
    return config;
  } catch {
    // Nothing configured yet → defaults (site blocks everything except AU)
    return DEFAULT_CONFIG;
  }
}

// ─── Country lookup via HTTP ip-api.com (free, no CF/nginx needed) ───────────
const ipCountryCache = new Map<string, { country: string; expiresAt: number }>();

async function lookupCountry(ip: string): Promise<string | null> {
  if (!ip || ip === "::1" || ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("10.")) {
    return null;
  }

  const now = Date.now();
  const cached = ipCountryCache.get(ip);
  if (cached && cached.expiresAt > now) return cached.country;

  // ip-api.com free tier requires HTTP (not HTTPS). 45 req/min limit — plenty since we cache.
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=countryCode`, {
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const data = (await res.json()) as { countryCode?: string };
      const country = data.countryCode ?? null;
      if (country) {
        ipCountryCache.set(ip, { country, expiresAt: now + 3_600_000 }); // 1h
      }
      return country;
    }
  } catch {
    // timeout or rate limit
  }
  return null;
}

// ─── Middleware ──────────────────────────────────────────────────────────────
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Legacy blog ID redirect (runs before geo-check)
  const blogMatch = pathname.match(/^\/blog\/(\d+)$/);
  if (blogMatch) {
    const slug = oldIdToSlug[blogMatch[1]];
    if (slug) {
      return NextResponse.redirect(new URL(`/blog/${slug}`, request.url), 301);
    }
  }

  // 2. Always allow: GeoGuard routes, API routes (webhooks), static assets
  if (
    pathname.startsWith("/blocked") ||
    pathname.startsWith("/admin/geo") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    /\.(ico|png|jpg|jpeg|webp|svg|css|js|woff2?|ttf|otf|map|txt|xml|json)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 3. Read geo config (KV in production, file in local dev)
  const config = await readGeoConfig();

  // 4. If geo-blocking disabled in admin → allow everyone
  if (!config.enabled) {
    return NextResponse.next();
  }

  // 5. Resolve visitor IP
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ??
    "";

  const isLocal = isLocalIP(ip);

  // 6. Local/private IPs (dev environment) bypass geo-check UNLESS test mode is on.
  //    Test mode is for explicitly testing geo-blocking from localhost.
  if (isLocal && !(config.testMode && config.testCountry)) {
    return NextResponse.next();
  }

  // 7. Whitelisted IPs bypass geo-block
  if (ip && config.whitelistedIPs.includes(ip)) {
    return NextResponse.next();
  }

  // 8. Detect country (test mode overrides real detection for debugging)
  const country = config.testMode && config.testCountry
    ? config.testCountry
    : (request.headers.get("cf-ipcountry") ??
       request.headers.get("x-country-code") ??
       (ip ? await lookupCountry(ip) : null));

  // 9. No country detected → block (fail closed for security in production)
  if (!country) {
    return NextResponse.redirect(new URL("/blocked", request.url));
  }

  // 10. Country not in allowed list → block
  if (!config.allowedCountries.includes(country.toUpperCase())) {
    return NextResponse.redirect(new URL("/blocked", request.url));
  }

  return NextResponse.next();
}

function isLocalIP(ip: string): boolean {
  if (!ip) return true;
  if (ip === "::1" || ip === "::ffff:127.0.0.1") return true;
  if (ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("10.")) return true;
  if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(ip)) return true;
  return false;
}

// Node.js runtime required for fs access.
export const config = {
  runtime: "nodejs",
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
