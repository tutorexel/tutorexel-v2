import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  SESSION_MAX_AGE_SECONDS,
  checkLoginRateLimit,
  createSessionToken,
  isStateChangeAllowed,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  // Custom header check for state change
  if (!isStateChangeAllowed(request)) {
    return NextResponse.json(
      { error: "Security check failed: missing required action header" },
      { status: 403 }
    );
  }

  // Check rate limit per IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";

  const rate = await checkLoginRateLimit(ip);
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many login attempts. Please try again after 15 minutes." },
      { status: 429 }
    );
  }

  // Parse JSON body
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { password } = body;
  if (!password) {
    return NextResponse.json({ error: "Password is required" }, { status: 400 });
  }

  // Verify server configuration
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!expectedPassword || expectedPassword.trim().length === 0) {
    return NextResponse.json(
      {
        error:
          "Admin authentication is not configured. ADMIN_PASSWORD must be set.",
      },
      { status: 500 }
    );
  }

  if (!sessionSecret || sessionSecret.length < 16) {
    return NextResponse.json(
      {
        error:
          "Admin authentication is not configured. ADMIN_SESSION_SECRET must be set and at least 16 characters long.",
      },
      { status: 500 }
    );
  }

  // Compare passwords safely
  if (password !== expectedPassword) {
    return NextResponse.json({ error: "Invalid admin password" }, { status: 401 });
  }

  // Generate session token
  const token = createSessionToken();

  const response = NextResponse.json({ success: true, message: "Logged in successfully" });

  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_MAX_AGE_SECONDS,
    path: "/",
  });

  return response;
}
