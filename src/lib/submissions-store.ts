/**
 * Form submissions store
 *
 * Persistence strategy (auto-detected, mirrors geo-store.ts):
 *   1. If a KV/Redis REST store is configured (KV_REST_API_URL + KV_REST_API_TOKEN,
 *      or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN) → use it.
 *      This is REQUIRED on Vercel/serverless, where the filesystem is read-only.
 *   2. Otherwise fall back to submissions.json on disk (works for local dev).
 *
 * The whole submission list is stored as a single JSON value under one key.
 */

import { readFile, writeFile } from "fs/promises";
import path from "path";

export type SubmissionType =
  | "free-trial"
  | "contact"
  | "enroll"
  | "free-assessment"
  | "careers"
  | "co-curricular"
  | "calendly";

export interface Submission {
  id: string;
  type: SubmissionType;
  timestamp: string;
  trashedAt?: string;
  data: Record<string, string | number | boolean | null | undefined>;
}

const FILE = path.join(process.cwd(), "submissions.json");
const TRASH_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

/** Redis key used in the KV store. */
export const SUBMISSIONS_KV_KEY = "submissions";

// ─── KV (Upstash Redis REST) helpers ─────────────────────────────────────────
const KV_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? "";

export function hasKV(): boolean {
  return !!(KV_URL && KV_TOKEN);
}

async function kvGet(): Promise<Submission[] | null> {
  const res = await fetch(`${KV_URL}/get/${SUBMISSIONS_KV_KEY}`, {
    headers: { Authorization: `Bearer ${KV_TOKEN}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV get failed (HTTP ${res.status})`);
  const data = (await res.json()) as { result: string | null };
  if (!data.result) return null;
  return JSON.parse(data.result) as Submission[];
}

async function kvSet(list: Submission[]): Promise<void> {
  const res = await fetch(`${KV_URL}/set/${SUBMISSIONS_KV_KEY}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV set failed (HTTP ${res.status})`);
}

// ─── Storage abstraction ──────────────────────────────────────────────────────
async function read(): Promise<Submission[]> {
  if (hasKV()) {
    try {
      return (await kvGet()) ?? [];
    } catch {
      return [];
    }
  }

  // Local dev fallback: read from disk.
  try {
    const raw = await readFile(FILE, "utf-8");
    return JSON.parse(raw) as Submission[];
  } catch {
    return [];
  }
}

async function write(list: Submission[]): Promise<void> {
  if (hasKV()) {
    await kvSet(list);
    return;
  }

  // Local dev fallback: write to disk. On Vercel/serverless the filesystem is
  // read-only, so swallow the error here — a read (GET) must never 500 because
  // of a failed write-back. Real persistence on Vercel requires a KV store.
  try {
    await writeFile(FILE, JSON.stringify(list, null, 2), "utf-8");
  } catch {
    /* read-only filesystem (e.g. serverless without KV) — ignore */
  }
}

function purgeExpired(list: Submission[]): Submission[] {
  const now = Date.now();
  return list.filter(
    (s) => !s.trashedAt || now - new Date(s.trashedAt).getTime() < TRASH_TTL_MS
  );
}

export async function logSubmission(
  type: SubmissionType,
  data: Record<string, string | number | boolean | null | undefined>
): Promise<Submission> {
  const list = purgeExpired(await read());
  const entry: Submission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    type,
    timestamp: new Date().toISOString(),
    data,
  };
  list.unshift(entry);
  await write(list);
  return entry;
}

export async function getAllSubmissions(): Promise<Submission[]> {
  const list = await read();
  const purged = purgeExpired(list);
  if (purged.length !== list.length) await write(purged);
  return purged.filter((s) => !s.trashedAt);
}

export async function getTrashedSubmissions(): Promise<Submission[]> {
  const list = await read();
  const purged = purgeExpired(list);
  if (purged.length !== list.length) await write(purged);
  return purged.filter((s) => !!s.trashedAt);
}

export async function trashSubmission(id: string): Promise<boolean> {
  const list = await read();
  const idx = list.findIndex((s) => s.id === id);
  if (idx === -1) return false;
  list[idx].trashedAt = new Date().toISOString();
  await write(list);
  return true;
}

export async function restoreSubmission(id: string): Promise<boolean> {
  const list = await read();
  const idx = list.findIndex((s) => s.id === id);
  if (idx === -1) return false;
  delete list[idx].trashedAt;
  await write(list);
  return true;
}

export async function permanentDeleteSubmission(id: string): Promise<boolean> {
  const list = await read();
  const filtered = list.filter((s) => s.id !== id);
  if (filtered.length === list.length) return false;
  await write(filtered);
  return true;
}

export async function emptyTrash(): Promise<number> {
  const list = await read();
  const active = list.filter((s) => !s.trashedAt);
  const removed = list.length - active.length;
  await write(active);
  return removed;
}

export async function deleteSubmission(id: string): Promise<boolean> {
  return trashSubmission(id);
}
