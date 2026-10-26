import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthed, isStateChangeAllowed } from "@/lib/admin-auth";
import { safeRedisGet, safeRedisSet } from "@/lib/admin-redis";
import { getRegionSitemapUrls } from "@/data/sitemap-config";
import type { RegionCode } from "@/data/page-availability";
import { submitIndexNow } from "@/lib/indexing/indexnow";

export const runtime = "nodejs";

const VALID_REGIONS: RegionCode[] = ["au", "us", "ca", "nz"];

export async function GET(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const rawRegion = (searchParams.get("region")?.toLowerCase() || "au") as RegionCode;
  const region: RegionCode = VALID_REGIONS.includes(rawRegion) ? rawRegion : "au";

  try {
    const [urls, excludedPaths, customUrls] = await Promise.all([
      getRegionSitemapUrls(region),
      safeRedisGet<string[]>("seo:sitemap:excluded", []),
      safeRedisGet<Array<{ loc: string; lastmod: string }>>(`seo:sitemap:custom:${region}`, []),
    ]);

    return NextResponse.json({
      region,
      urls,
      excludedPaths: excludedPaths || [],
      customUrls: customUrls || [],
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message || "Failed to load sitemap data" },
      { status: 500 }
    );
  }
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
    action: "toggle-exclusion" | "add-custom-url" | "remove-custom-url" | "submit-region-indexnow";
    path?: string;
    excluded?: boolean;
    region?: RegionCode;
    loc?: string;
    lastmod?: string;
  };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { action } = body;

  if (action === "toggle-exclusion") {
    const path = body.path?.trim();
    if (!path) {
      return NextResponse.json({ error: "Path/URL is required" }, { status: 400 });
    }

    const current = (await safeRedisGet<string[]>("seo:sitemap:excluded", [])) || [];
    let updated: string[];

    if (body.excluded) {
      updated = Array.from(new Set([...current, path]));
    } else {
      updated = current.filter((p) => p !== path);
    }

    await safeRedisSet("seo:sitemap:excluded", updated);
    return NextResponse.json({ success: true, excludedPaths: updated });
  }

  if (action === "add-custom-url") {
    const rawRegion = (body.region?.toLowerCase() || "au") as RegionCode;
    const region: RegionCode = VALID_REGIONS.includes(rawRegion) ? rawRegion : "au";
    const loc = body.loc?.trim();

    if (!loc) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
      const u = new URL(loc);
      if (!u.hostname.endsWith("tutorexel.com")) {
        return NextResponse.json({ error: "URL must be on tutorexel.com" }, { status: 400 });
      }
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }

    const lastmod = body.lastmod?.trim() || new Date().toISOString();
    const current =
      (await safeRedisGet<Array<{ loc: string; lastmod: string }>>(
        `seo:sitemap:custom:${region}`,
        []
      )) || [];

    // Deduplicate by loc
    const filtered = current.filter((c) => c.loc !== loc);
    filtered.push({ loc, lastmod });

    await safeRedisSet(`seo:sitemap:custom:${region}`, filtered);
    return NextResponse.json({ success: true, customUrls: filtered });
  }

  if (action === "remove-custom-url") {
    const rawRegion = (body.region?.toLowerCase() || "au") as RegionCode;
    const region: RegionCode = VALID_REGIONS.includes(rawRegion) ? rawRegion : "au";
    const loc = body.loc?.trim();

    if (!loc) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const current =
      (await safeRedisGet<Array<{ loc: string; lastmod: string }>>(
        `seo:sitemap:custom:${region}`,
        []
      )) || [];

    const updated = current.filter((c) => c.loc !== loc);
    await safeRedisSet(`seo:sitemap:custom:${region}`, updated);
    return NextResponse.json({ success: true, customUrls: updated });
  }

  if (action === "submit-region-indexnow") {
    const rawRegion = (body.region?.toLowerCase() || "au") as RegionCode;
    const region: RegionCode = VALID_REGIONS.includes(rawRegion) ? rawRegion : "au";

    const urls = await getRegionSitemapUrls(region);
    const locs = urls.map((u) => u.loc);

    const result = await submitIndexNow(locs);
    return NextResponse.json({ success: true, count: locs.length, indexnow: result });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
