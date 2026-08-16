import { NextRequest, NextResponse } from "next/server";
import {
  trashSubmission,
  restoreSubmission,
  permanentDeleteSubmission,
  emptyTrash,
} from "@/lib/submissions-store";
import { isAdminAuthed } from "@/lib/admin-auth";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  if (id === "empty-trash") {
    const removed = await emptyTrash();
    return NextResponse.json({ success: true, removed });
  }

  const permanent = new URL(request.url).searchParams.get("permanent") === "1";
  const ok = permanent
    ? await permanentDeleteSubmission(id)
    : await trashSubmission(id);

  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const ok = await restoreSubmission(id);
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
