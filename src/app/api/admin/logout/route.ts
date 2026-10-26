import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isStateChangeAllowed } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isStateChangeAllowed(request)) {
    return NextResponse.json(
      { error: "Security check failed: missing required action header" },
      { status: 403 }
    );
  }

  const response = NextResponse.json({ success: true, message: "Logged out" });

  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  return response;
}
