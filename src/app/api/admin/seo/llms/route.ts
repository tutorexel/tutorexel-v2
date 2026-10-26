import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthed, isStateChangeAllowed } from "@/lib/admin-auth";
import { safeRedisGet, safeRedisSet } from "@/lib/admin-redis";
import { DEFAULT_LLMS_TXT } from "@/lib/seo-defaults";
import type { FileVersion } from "../robots/route";

export const runtime = "nodejs";

const MAX_SIZE_BYTES = 20 * 1024; // 20 KB

export async function GET(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [current, history] = await Promise.all([
    safeRedisGet<string>("seo:llms:current", DEFAULT_LLMS_TXT),
    safeRedisGet<FileVersion[]>("seo:llms:history", []),
  ]);

  return NextResponse.json({
    current: current || DEFAULT_LLMS_TXT,
    defaultText: DEFAULT_LLMS_TXT,
    history: history || [],
  });
}

export async function POST(request: NextRequest) {
  if (!isAdminAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isStateChangeAllowed(request)) {
    return NextResponse.json(
      { error: "Security check failed: missing required action header" },
      { status: 403 }
    );
  }

  let body: {
    action: "save" | "reset" | "restore";
    text?: string;
    restoreIndex?: number;
  };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const history = (await safeRedisGet<FileVersion[]>("seo:llms:history", [])) || [];

  if (body.action === "reset") {
    const newVersion: FileVersion = {
      text: DEFAULT_LLMS_TXT,
      savedAt: new Date().toISOString(),
      note: "Reset to default",
    };
    const updatedHistory = [newVersion, ...history].slice(0, 10);

    await safeRedisSet("seo:llms:current", DEFAULT_LLMS_TXT);
    await safeRedisSet("seo:llms:history", updatedHistory);

    return NextResponse.json({
      success: true,
      current: DEFAULT_LLMS_TXT,
      history: updatedHistory,
    });
  }

  if (body.action === "restore") {
    const idx = body.restoreIndex ?? -1;
    if (idx < 0 || idx >= history.length) {
      return NextResponse.json({ error: "Invalid history version index" }, { status: 400 });
    }

    const restored = history[idx];
    const newVersion: FileVersion = {
      text: restored.text,
      savedAt: new Date().toISOString(),
      note: `Restored from version ${history.length - idx}`,
    };
    const updatedHistory = [newVersion, ...history].slice(0, 10);

    await safeRedisSet("seo:llms:current", restored.text);
    await safeRedisSet("seo:llms:history", updatedHistory);

    return NextResponse.json({
      success: true,
      current: restored.text,
      history: updatedHistory,
    });
  }

  if (body.action === "save") {
    const text = body.text ?? "";
    const byteLength = Buffer.byteLength(text, "utf8");

    if (byteLength > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { error: `llms.txt exceeds 20 KB limit (${byteLength} bytes)` },
        { status: 400 }
      );
    }

    const newVersion: FileVersion = {
      text,
      savedAt: new Date().toISOString(),
    };
    const updatedHistory = [newVersion, ...history].slice(0, 10);

    await safeRedisSet("seo:llms:current", text);
    await safeRedisSet("seo:llms:history", updatedHistory);

    return NextResponse.json({
      success: true,
      current: text,
      history: updatedHistory,
    });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
