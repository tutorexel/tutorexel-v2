import { Redis } from "@upstash/redis";

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = url && token ? new Redis({ url, token }) : null;

/**
 * Checks if Redis is configured and reachable.
 * Returns true if ping succeeds, false otherwise.
 */
export async function checkRedisStatus(): Promise<boolean> {
  if (!redis) return false;
  try {
    const res = await redis.ping();
    return res === "PONG" || res === "OK";
  } catch {
    return false;
  }
}

/**
 * Generic safe getter that catches errors and returns fallback
 */
export async function safeRedisGet<T>(key: string, fallback: T): Promise<T> {
  if (!redis) return fallback;
  try {
    const val = await redis.get<T>(key);
    return val ?? fallback;
  } catch {
    return fallback;
  }
}

/**
 * Generic safe setter that catches errors without crashing
 */
export async function safeRedisSet<T>(key: string, value: T, ttlSeconds?: number): Promise<boolean> {
  if (!redis) return false;
  try {
    if (ttlSeconds) {
      await redis.set(key, value, { ex: ttlSeconds });
    } else {
      await redis.set(key, value);
    }
    return true;
  } catch {
    return false;
  }
}
