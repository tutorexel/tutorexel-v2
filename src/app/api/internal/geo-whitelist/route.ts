/**
 * GeoGuard — Internal API
 * Called by middleware to fetch whitelist + config.
 * Protected by GEO_INTERNAL_SECRET env var.
 * Never expose this route publicly.
 */

import { NextRequest, NextResponse } from "next/server";
import { readGeoConfig } from "@/lib/geo-store";

export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-geo-secret");
  if (!secret || secret !== process.env.GEO_INTERNAL_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const config = await readGeoConfig();

  return NextResponse.json({
    enabled: config.enabled,
    allowedCountries: config.allowedCountries,
    ips: config.whitelistedIPs,
    testMode: config.testMode,
    testCountry: config.testCountry,
  });
}
