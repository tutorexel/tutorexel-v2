/**
 * Per-IP token-bucket rate limiter (in-memory).
 * Adequate for the single-fork pm2 deployment.
 */

interface Bucket {
  tokens: number;
  lastRefill: number;
}

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  ok: boolean;
  retryAfterMs: number;
}

export function rateLimit(
  key: string,
  capacity: number,
  refillPerSecond: number
): RateLimitResult {
  const now = Date.now();
  const b = buckets.get(key) ?? { tokens: capacity, lastRefill: now };

  const elapsed = (now - b.lastRefill) / 1000;
  b.tokens = Math.min(capacity, b.tokens + elapsed * refillPerSecond);
  b.lastRefill = now;

  if (b.tokens >= 1) {
    b.tokens -= 1;
    buckets.set(key, b);
    return { ok: true, retryAfterMs: 0 };
  }

  buckets.set(key, b);
  const need = 1 - b.tokens;
  const retryAfterMs = Math.ceil((need / refillPerSecond) * 1000);
  return { ok: false, retryAfterMs };
}

export function clientIp(headers: Headers): string {
  return (
    headers.get("cf-connecting-ip") ||
    headers.get("x-real-ip") ||
    (headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    "unknown"
  );
}
