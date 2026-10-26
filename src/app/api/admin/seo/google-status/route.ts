import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthed } from "@/lib/admin-auth";
import { getMetadata, googleConfigured } from "@/lib/indexing/google";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!googleConfigured()) {
    return NextResponse.json(
      {
        error:
          "Google Indexing API is not configured. GOOGLE_INDEXING_CLIENT_EMAIL and GOOGLE_INDEXING_PRIVATE_KEY must be set.",
      },
      { status: 400 }
    );
  }

  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url")?.trim();

  if (!targetUrl) {
    return NextResponse.json({ error: "URL query parameter is required" }, { status: 400 });
  }

  try {
    const result = await getMetadata(targetUrl);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to query Google metadata";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
