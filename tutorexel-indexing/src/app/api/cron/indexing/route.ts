import { readSitemap } from "@/lib/indexing/sitemap";
import { submit } from "@/lib/indexing/submit";

// Daily Vercel Cron (see vercel.json). Reads the live sitemap and submits:
//  - Google: URLs never sent, or whose <lastmod> is newer than the last send, up to the daily quota
//  - IndexNow: the same changed set
// Vercel sends "Authorization: Bearer <CRON_SECRET>" automatically when CRON_SECRET is set.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ error: "Unauthorised" }, { status: 401 });
  }

  const items = await readSitemap();
  const summary = await submit(items);
  console.log("[indexing-cron]", JSON.stringify({ ...summary, google: { ...summary.google, failed: summary.google.failed.slice(0, 10) } }));
  return Response.json(summary);
}
