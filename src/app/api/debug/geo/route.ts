/**
 * Geo debug endpoint.
 * Visit /api/debug/geo?password=XXX to trace the middleware flow and see
 * exactly where geo-blocking is failing.
 */

import { NextRequest, NextResponse } from "next/server";
import { readGeoConfig } from "@/lib/geo-store";

export async function GET(request: NextRequest) {
  const pwd =
    request.headers.get("x-admin-password") ||
    request.nextUrl.searchParams.get("password") ||
    "";
  if (!pwd || pwd !== process.env.GEO_ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const trace: Record<string, unknown> = {};

  // ─── Step 1: IP Detection ─────────────────────────────────────────
  const cfIP = request.headers.get("cf-connecting-ip");
  const realIP = request.headers.get("x-real-ip");
  const forwardedFor = request.headers.get("x-forwarded-for");
  const resolvedIP =
    cfIP ?? realIP ?? (forwardedFor ?? "").split(",")[0].trim() ?? "";

  trace.step1_ipDetection = {
    "cf-connecting-ip": cfIP,
    "x-real-ip": realIP,
    "x-forwarded-for": forwardedFor,
    resolvedIP,
    isLocal: isLocalIP(resolvedIP),
  };

  // ─── Step 2: Read config from disk ───────────────────────────────
  let configRead: {
    status: string;
    config?: unknown;
    error?: string;
  };
  try {
    const config = await readGeoConfig();
    configRead = { status: "success", config };
  } catch (err) {
    configRead = {
      status: "error",
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }

  trace.step2_configRead = configRead;

  // ─── Step 3: Country Detection ───────────────────────────────────
  const cfCountry = request.headers.get("cf-ipcountry");
  const nginxCountry = request.headers.get("x-country-code");

  let ipApiCountry: string | null = null;
  let ipApiError: string | null = null;

  if (resolvedIP && !isLocalIP(resolvedIP)) {
    try {
      const res = await fetch(
        `http://ip-api.com/json/${resolvedIP}?fields=countryCode`,
        { signal: AbortSignal.timeout(3000) }
      );
      if (res.ok) {
        const data = (await res.json()) as { countryCode?: string };
        ipApiCountry = data.countryCode ?? null;
        if (!ipApiCountry) ipApiError = "API returned no countryCode";
      } else {
        ipApiError = `HTTP ${res.status}`;
      }
    } catch (err) {
      ipApiError = err instanceof Error ? err.message : "Unknown error";
    }
  } else {
    ipApiError = "Skipped (IP is local/private)";
  }

  const finalCountry = cfCountry ?? nginxCountry ?? ipApiCountry ?? null;

  trace.step3_countryDetection = {
    "cf-ipcountry": cfCountry,
    "x-country-code": nginxCountry,
    "ip-api.com (HTTP)": ipApiCountry,
    "ip-api.com error": ipApiError,
    finalCountry,
  };

  // ─── Step 4: Simulate middleware decision ────────────────────────
  const configData = configRead.status === "success"
    ? (configRead.config as {
        enabled?: boolean;
        allowedCountries?: string[];
        whitelistedIPs?: string[];
        testMode?: boolean;
        testCountry?: string;
      })
    : null;

  let decision = "UNKNOWN";
  const reasons: string[] = [];

  if (!configData) {
    decision = "ALLOW (config read failed — using defaults)";
    reasons.push("Could not read GeoGuard config (KV store / geo-config.json).");
  } else if (!configData.enabled) {
    decision = "ALLOW (geo-blocking is OFF in admin panel)";
    reasons.push("Geo-blocking is disabled. Turn it ON in /admin/geo.");
  } else {
    const allowed = configData.allowedCountries ?? ["AU"];
    const ips = configData.whitelistedIPs ?? [];

    if (resolvedIP && ips.includes(resolvedIP)) {
      decision = "ALLOW (IP whitelisted)";
      reasons.push(`Your IP ${resolvedIP} is in the whitelist.`);
    } else {
      const effectiveCountry =
        configData.testMode && configData.testCountry
          ? configData.testCountry.toUpperCase()
          : finalCountry;

      if (!effectiveCountry) {
        decision = "BLOCK (no country detected — fail closed)";
        reasons.push("No country could be detected from any source.");
      } else if (allowed.map((c) => c.toUpperCase()).includes(effectiveCountry)) {
        decision = `ALLOW (country ${effectiveCountry} is allowed)`;
      } else {
        decision = `BLOCK (country ${effectiveCountry} not in ${JSON.stringify(allowed)})`;
      }
    }
  }

  trace.step4_decision = { decision, reasons };

  return NextResponse.json(trace, {
    headers: { "Cache-Control": "no-store" },
  });
}

function isLocalIP(ip: string): boolean {
  if (!ip || ip === "::1") return true;
  if (ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("10.")) return true;
  if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(ip)) return true;
  return false;
}
