import { normalise } from "@/lib/indexing/config";
import { getMetadata, googleConfigured, type NotificationType } from "@/lib/indexing/google";
import { submit } from "@/lib/indexing/submit";

// Manual / webhook trigger.
// POST  /api/indexing   Authorization: Bearer <INDEXING_SECRET>
//   { "urls": ["https://www.tutorexel.com/us/subjects/grade-5/math"], "type": "URL_UPDATED", "force": false }
// GET   /api/indexing?url=<url>   Authorization: Bearer <INDEXING_SECRET>   (last notification Google received)

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

function authorised(req: Request): boolean {
  const secret = process.env.INDEXING_SECRET;
  return Boolean(secret) && req.headers.get("authorization") === `Bearer ${secret}`;
}

export async function POST(req: Request) {
  if (!authorised(req)) return Response.json({ error: "Unauthorised" }, { status: 401 });

  let body: { urls?: unknown; type?: unknown; force?: unknown; google?: unknown; indexnow?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const urls = Array.isArray(body.urls) ? body.urls.filter((u): u is string => typeof u === "string") : [];
  if (urls.length === 0) return Response.json({ error: "urls[] required" }, { status: 400 });
  if (urls.length > 1000) return Response.json({ error: "Max 1000 urls per call" }, { status: 400 });

  const type: NotificationType = body.type === "URL_DELETED" ? "URL_DELETED" : "URL_UPDATED";
  const summary = await submit(urls.map((url) => ({ url })), {
    type,
    force: body.force === true,
    google: body.google !== false,
    indexnow: body.indexnow !== false,
  });
  return Response.json(summary);
}

export async function GET(req: Request) {
  if (!authorised(req)) return Response.json({ error: "Unauthorised" }, { status: 401 });
  if (!googleConfigured()) return Response.json({ error: "Google credentials not set" }, { status: 500 });
  const raw = new URL(req.url).searchParams.get("url");
  const url = raw ? normalise(raw) : null;
  if (!url) return Response.json({ error: "Valid ?url= on this site required" }, { status: 400 });
  const meta = await getMetadata(url);
  return Response.json(meta.data, { status: meta.status || 500 });
}
