import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthed, isStateChangeAllowed } from "@/lib/admin-auth";
import { checkRedisStatus } from "@/lib/admin-redis";
import { googleConfigured } from "@/lib/indexing/google";
import { indexNowConfigured } from "@/lib/indexing/indexnow";
import { readSitemap } from "@/lib/indexing/sitemap";
import {
  getSubmissionHistory,
  logSubmissions,
  usedToday,
  type SubmissionRecord,
} from "@/lib/indexing/store";
import { submit, type SubmitItem, type SubmitOptions } from "@/lib/indexing/submit";
import { GOOGLE_DAILY_LIMIT, SITE_HOST } from "@/lib/indexing/config";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [quota, history, redisOk] = await Promise.all([
    usedToday(),
    getSubmissionHistory(),
    checkRedisStatus(),
  ]);

  return NextResponse.json({
    googleConfigured: googleConfigured(),
    indexNowConfigured: indexNowConfigured(),
    quotaUsedToday: quota,
    dailyLimit: GOOGLE_DAILY_LIMIT,
    history,
    redisConnected: redisOk,
  });
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
    urls?: string[];
    force?: boolean;
    google?: boolean;
    ignoreGoogleInclude?: boolean;
    type?: "URL_UPDATED" | "URL_DELETED";
    runCron?: boolean;
  };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const {
    urls = [],
    force = false,
    google = false,
    ignoreGoogleInclude = false,
    type = "URL_UPDATED",
    runCron = false,
  } = body;

  let itemsToSubmit: SubmitItem[] = [];

  if (runCron) {
    // Exact same logic as the daily cron
    itemsToSubmit = await readSitemap();
  } else {
    if (!urls || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }

    // Validate URLs: must belong to tutorexel.com
    for (const rawUrl of urls) {
      const trimmed = rawUrl.trim();
      if (!trimmed) continue;
      try {
        const u = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
        if (!u.hostname.endsWith("tutorexel.com")) {
          return NextResponse.json(
            { error: `URL must belong to tutorexel.com: ${trimmed}` },
            { status: 400 }
          );
        }
        itemsToSubmit.push({ url: u.toString() });
      } catch {
        return NextResponse.json(
          { error: `Invalid URL format: ${trimmed}` },
          { status: 400 }
        );
      }
    }
  }

  const submitOpts: SubmitOptions = {
    force,
    google,
    ignoreGoogleInclude,
    type,
    indexnow: true,
  };

  const summary = await submit(itemsToSubmit, submitOpts);

  // Build submission records for history
  const timestamp = new Date().toISOString();
  const records: SubmissionRecord[] = [];

  // Map Google per-URL results
  const googleResultsMap = new Map<string, { ok: boolean; status: number; error?: string }>();
  if (summary.google.results) {
    for (const res of summary.google.results) {
      googleResultsMap.set(res.url, res);
    }
  }

  // Create log entries for submitted URLs (up to 50)
  for (const item of itemsToSubmit.slice(0, 50)) {
    const gRes = googleResultsMap.get(item.url);
    let engine: "IndexNow" | "Google" | "Both" = "IndexNow";
    if (google && gRes) {
      engine = "Both";
    } else if (google && !indexNowConfigured()) {
      engine = "Google";
    }

    let statusText = "";
    if (summary.indexnow.submitted > 0) {
      statusText += `IndexNow: ${summary.indexnow.status || 200}`;
    }
    if (gRes) {
      statusText += `${statusText ? " | " : ""}Google: ${gRes.ok ? 200 : gRes.status}${gRes.error ? ` (${gRes.error})` : ""}`;
    } else if (google) {
      statusText += `${statusText ? " | " : ""}Google: Skipped or queued`;
    }

    records.push({
      url: item.url,
      time: timestamp,
      engine,
      status: statusText || "Processed",
    });
  }

  if (records.length > 0) {
    await logSubmissions(records);
  }

  const [updatedQuota, history] = await Promise.all([
    usedToday(),
    getSubmissionHistory(),
  ]);

  return NextResponse.json({
    success: true,
    summary,
    quotaUsedToday: updatedQuota,
    history,
  });
}
