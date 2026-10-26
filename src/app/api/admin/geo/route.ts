/**
 * GeoGuard: Admin CRUD API
 * Protected by admin authentication.
 *
 * GET  /api/admin/geo          -> returns full config
 * POST /api/admin/geo          -> mutate config (actions below)
 *
 * POST actions:
 *   { action: "toggle" }
 *   { action: "add-ip",          ip: "1.2.3.4" }
 *   { action: "remove-ip",       ip: "1.2.3.4" }
 *   { action: "add-country",     code: "US" }
 *   { action: "remove-country",  code: "US" }
 *   { action: "update-site",     siteName: "My Site" }
 */

import { NextRequest, NextResponse } from "next/server";
import { readGeoConfig, writeGeoConfig } from "@/lib/geo-store";
import { isAdminAuthed, isStateChangeAllowed } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const config = await readGeoConfig();
  return NextResponse.json(config);
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isStateChangeAllowed(request)) {
    return NextResponse.json(
      { error: "Security check failed: missing required action header" },
      { status: 403 }
    );
  }

  let body: {
    action: string;
    ip?: string;
    code?: string;
    siteName?: string;
  };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  let config;
  try {
    config = await readGeoConfig();
  } catch (err) {
    return NextResponse.json(
      { error: `Could not read config: ${(err as Error).message}` },
      { status: 500 }
    );
  }

  switch (body.action) {
    case "toggle":
      config.enabled = !config.enabled;
      break;

    case "add-ip": {
      const ip = body.ip?.trim();
      if (!ip) return NextResponse.json({ error: "IP required" }, { status: 400 });
      if (!config.whitelistedIPs.includes(ip)) config.whitelistedIPs.push(ip);
      break;
    }

    case "remove-ip": {
      const ip = body.ip?.trim();
      if (!ip) return NextResponse.json({ error: "IP required" }, { status: 400 });
      config.whitelistedIPs = config.whitelistedIPs.filter((i) => i !== ip);
      break;
    }

    case "add-country": {
      const code = body.code?.toUpperCase().trim();
      if (!code) return NextResponse.json({ error: "Country code required" }, { status: 400 });
      if (!config.allowedCountries.includes(code)) config.allowedCountries.push(code);
      break;
    }

    case "remove-country": {
      const code = body.code?.toUpperCase().trim();
      if (!code) return NextResponse.json({ error: "Country code required" }, { status: 400 });
      config.allowedCountries = config.allowedCountries.filter((c) => c !== code);
      break;
    }

    case "update-site": {
      if (body.siteName) config.siteName = body.siteName;
      break;
    }

    case "toggle-test-mode":
      config.testMode = !config.testMode;
      break;

    case "set-test-country": {
      const code = body.code?.toUpperCase().trim() ?? "";
      config.testCountry = code;
      break;
    }

    default:
      return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }

  try {
    await writeGeoConfig(config);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
  return NextResponse.json({ success: true, config });
}
