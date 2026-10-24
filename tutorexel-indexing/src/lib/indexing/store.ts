import { Redis } from "@upstash/redis";

// Uses the Upstash / Vercel KV store already connected to the project.
// Tracks what was sent (dedupe) and the daily Google quota. Works without KV, just without dedupe.

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const kv = url && token ? new Redis({ url, token }) : null;

// Google's quota resets at midnight Pacific Time.
function quotaDay(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles" }).format(new Date());
}

const quotaKey = () => `idx:google:quota:${quotaDay()}`;
const sentKey = (u: string) => `idx:google:sent:${u}`;

export async function usedToday(): Promise<number> {
  if (!kv) return 0;
  return Number((await kv.get<number>(quotaKey())) ?? 0);
}

export async function addUsage(n: number): Promise<void> {
  if (!kv || n <= 0) return;
  const key = quotaKey();
  await kv.incrby(key, n);
  await kv.expire(key, 60 * 60 * 48);
}

// Returns the lastmod (or submit time) recorded for each URL, null if never sent.
export async function getSent(urls: string[]): Promise<Map<string, string | null>> {
  const out = new Map<string, string | null>();
  if (!kv || urls.length === 0) {
    urls.forEach((u) => out.set(u, null));
    return out;
  }
  for (let i = 0; i < urls.length; i += 100) {
    const chunk = urls.slice(i, i + 100);
    const vals = await kv.mget<(string | null)[]>(...chunk.map(sentKey));
    chunk.forEach((u, j) => out.set(u, vals[j] ?? null));
  }
  return out;
}

export async function markSent(entries: { url: string; stamp: string }[]): Promise<void> {
  if (!kv || entries.length === 0) return;
  const p = kv.pipeline();
  entries.forEach((e) => p.set(sentKey(e.url), e.stamp));
  await p.exec();
}
