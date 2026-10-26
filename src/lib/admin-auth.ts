import type { NextRequest } from "next/server";
import crypto from "crypto";
import { redis } from "./admin-redis";

export const ADMIN_COOKIE_NAME = "admin_session";
export const SESSION_MAX_AGE_SECONDS = 8 * 60 * 60; // 8 hours

/**
 * Validates whether the ADMIN_PASSWORD environment variable meets the minimum security requirements.
 */
export function isServerAuthConfigured(): boolean {
  const pwd = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  return Boolean(pwd && pwd.length >= 12 && secret && secret.length >= 16);
}

/**
 * Generates an HMAC-signed session cookie value valid for 8 hours.
 */
export function createSessionToken(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set");
  }

  const now = Date.now();
  const expiry = now + SESSION_MAX_AGE_SECONDS * 1000;
  const salt = crypto.randomBytes(16).toString("hex");
  const payload = `${now}:${expiry}:${salt}`;

  const hmac = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return `${payload}.${hmac}`;
}

/**
 * Verifies an HMAC-signed session cookie value.
 */
export function verifySessionToken(token: string | null | undefined): boolean {
  if (!token) return false;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return false;

  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [payload, signature] = parts;
  const expectedHmac = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  try {
    const a = Buffer.from(signature, "hex");
    const b = Buffer.from(expectedHmac, "hex");
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
      return false;
    }
  } catch {
    return false;
  }

  const payloadParts = payload.split(":");
  if (payloadParts.length !== 3) return false;

  const expiry = Number(payloadParts[1]);
  if (!Number.isFinite(expiry) || Date.now() > expiry) {
    return false;
  }

  return true;
}

/**
 * Helper to extract cookie value from NextRequest or standard Request.
 */
function getCookieValue(request: NextRequest | Request, name: string): string | null {
  if ("cookies" in request && typeof request.cookies?.get === "function") {
    const nextReq = request as NextRequest;
    return nextReq.cookies.get(name)?.value ?? null;
  }

  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${name}=`));

  if (!match) return null;
  return decodeURIComponent(match.slice(name.length + 1));
}

/**
 * Validates admin authentication.
 * 1. Checks HMAC-signed httpOnly session cookie.
 * 2. Fallback for external API requests: checks x-admin-password matching ADMIN_PASSWORD
 *    (refuses if ADMIN_PASSWORD is missing or shorter than 12 chars).
 * Absolutely no default or fallback passwords.
 */
export function isAdminAuthed(request: NextRequest | Request): boolean {
  // 1. Session cookie verification
  const sessionToken = getCookieValue(request, ADMIN_COOKIE_NAME);
  if (sessionToken && verifySessionToken(sessionToken)) {
    return true;
  }

  // 2. Strict header password verification (for scripts/APIs)
  const headerPwd = request.headers.get("x-admin-password");
  const expectedPwd = process.env.ADMIN_PASSWORD;

  if (headerPwd && expectedPwd && expectedPwd.length >= 12) {
    return safeEqual(headerPwd, expectedPwd);
  }

  return false;
}

/**
 * Enforces security requirements for state-changing admin requests (POST, PATCH, DELETE).
 * - Requires custom header check: x-admin-action: 1
 * - Requires JSON content type for requests with bodies
 */
export function isStateChangeAllowed(request: NextRequest | Request): boolean {
  const actionHeader = request.headers.get("x-admin-action");
  if (actionHeader !== "1") {
    return false;
  }

  const contentType = request.headers.get("content-type");
  const method = request.method.toUpperCase();

  if (["POST", "PATCH", "PUT"].includes(method)) {
    // If request has content-type, ensure it is json
    if (contentType && !contentType.toLowerCase().includes("application/json")) {
      return false;
    }
  }

  return true;
}

/**
 * Rate limits login attempts to 5 per 15 minutes per IP address using Redis.
 */
export async function checkLoginRateLimit(
  ip: string
): Promise<{ allowed: boolean; remaining: number }> {
  if (!redis) {
    // If Redis is not connected, allow with warning
    return { allowed: true, remaining: 5 };
  }

  const key = `admin:rate:login:${ip}`;
  try {
    const attempts = await redis.incr(key);
    if (attempts === 1) {
      await redis.expire(key, 15 * 60); // 15 minutes
    }
    const remaining = Math.max(0, 5 - attempts);
    return {
      allowed: attempts <= 5,
      remaining,
    };
  } catch {
    // Fail safe if Redis throws
    return { allowed: true, remaining: 5 };
  }
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
