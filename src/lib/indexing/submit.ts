import { GOOGLE_DAILY_LIMIT, GOOGLE_INCLUDE, normalise, priority } from "./config";
import { googleConfigured, publish, type GoogleResult, type NotificationType } from "./google";
import { indexNowConfigured, submitIndexNow } from "./indexnow";
import { addUsage, getSent, markSent, usedToday } from "./store";

export interface SubmitItem {
  url: string;
  lastmod?: string; // from sitemap; used to skip unchanged pages
}

export interface SubmitOptions {
  type?: NotificationType;
  force?: boolean; // resend even if already sent with the same lastmod
  google?: boolean;
  indexnow?: boolean;
  ignoreGoogleInclude?: boolean; // send all URLs to Google, bypassing /careers/ filter
}

export interface SubmitSummary {
  received: number;
  eligible: number;
  google: {
    sent: number;
    ok: number;
    failed: GoogleResult[];
    results: GoogleResult[];
    skippedAlreadySent: number;
    deferredByQuota: number;
    quotaUsedToday: number;
  };
  indexnow: { submitted: number; status: number | null };
}

export async function submit(items: SubmitItem[], opts: SubmitOptions = {}): Promise<SubmitSummary> {
  const type = opts.type ?? "URL_UPDATED";
  const useGoogle = opts.google !== false && googleConfigured();
  const useIndexNow = opts.indexnow !== false && indexNowConfigured();

  // Normalise, dedupe, keep newest lastmod per URL.
  const map = new Map<string, string | undefined>();
  for (const it of items) {
    const u = normalise(it.url);
    if (u) map.set(u, it.lastmod ?? map.get(u));
  }
  const eligible = [...map.keys()].sort((a, b) => priority(a) - priority(b));

  const summary: SubmitSummary = {
    received: items.length,
    eligible: eligible.length,
    google: {
      sent: 0,
      ok: 0,
      failed: [],
      results: [],
      skippedAlreadySent: 0,
      deferredByQuota: 0,
      quotaUsedToday: 0,
    },
    indexnow: { submitted: 0, status: null },
  };

  if (useGoogle) {
    const sent = await getSent(eligible);
    const queue = eligible.filter((u) => {
      if (!opts.ignoreGoogleInclude && GOOGLE_INCLUDE && !GOOGLE_INCLUDE.test(u)) return false;
      if (opts.force || type === "URL_DELETED") return true;
      const prev = sent.get(u);
      const lm = map.get(u);
      const fresh = !prev || (lm ? new Date(lm) > new Date(prev) : false);
      if (!fresh) summary.google.skippedAlreadySent++;
      return fresh;
    });

    const remaining = Math.max(0, GOOGLE_DAILY_LIMIT - (await usedToday()));
    const batch = queue.slice(0, remaining);
    summary.google.deferredByQuota = queue.length - batch.length;

    const done: { url: string; stamp: string }[] = [];
    for (let i = 0; i < batch.length; i += 5) {
      const results = await Promise.all(batch.slice(i, i + 5).map((u) => publish(u, type)));
      for (const r of results) {
        summary.google.sent++;
        summary.google.results.push(r);
        if (r.ok) {
          summary.google.ok++;
          done.push({ url: r.url, stamp: map.get(r.url) ?? new Date().toISOString() });
        } else {
          summary.google.failed.push(r);
        }
      }
      // 429 = quota exhausted on Google's side; stop and let the next run continue.
      if (results.some((r) => r.status === 429)) {
        summary.google.deferredByQuota += Math.max(0, batch.length - (i + 5));
        break;
      }
    }
    await addUsage(summary.google.sent);
    await markSent(done);
    summary.google.quotaUsedToday = await usedToday();
  }

  if (useIndexNow) {
    summary.indexnow = await submitIndexNow(eligible);
  }

  return summary;
}
