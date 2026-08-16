import { NextRequest, NextResponse } from "next/server";
import { getAllSubmissions, getTrashedSubmissions, logSubmission } from "@/lib/submissions-store";
import { isAdminAuthed } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const [submissions, trashed] = await Promise.all([getAllSubmissions(), getTrashedSubmissions()]);
  return NextResponse.json({ submissions, trashed });
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json();
  const { entries } = body as { entries: Array<{ type: string; data: Record<string, string> }> };
  if (!Array.isArray(entries) || entries.length === 0) {
    return NextResponse.json({ error: "No entries" }, { status: 400 });
  }
  const imported = [];
  for (const e of entries) {
    const entry = await logSubmission(e.type as never, e.data);
    imported.push(entry);
  }
  return NextResponse.json({ imported: imported.length });
}
