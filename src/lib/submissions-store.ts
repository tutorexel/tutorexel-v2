/**
 * Form Submissions — KV store persistence.
 *
 * Persistence strategy:
 *   1. Primary: Upstash / Vercel KV REST store (KV_REST_API_URL + KV_REST_API_TOKEN
 *      or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN).
 *      Matches the pattern used in geo-store.ts and persists across Vercel serverless invocations.
 *   2. Fallback: In-memory store (initialized from local submissions.json if present),
 *      with no serverless disk writes that would fail with EROFS on Vercel.
 */

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

export const SUBMISSIONS_KV_KEY = "submissions";
const TRASH_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// ─── KV (Upstash Redis REST) helpers (matching geo-store pattern) ─────────────
const getKvUrl = () =>
  process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL ?? "";
const getKvToken = () =>
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN ?? "";

export function hasKV(): boolean {
  return !!(getKvUrl() && getKvToken());
}

async function kvGet(): Promise<Submission[] | null> {
  const url = getKvUrl();
  const token = getKvToken();
  if (!url || !token) return null;

  const res = await fetch(`${url}/get/${SUBMISSIONS_KV_KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`KV get failed (HTTP ${res.status})`);
  const data = (await res.json()) as { result: unknown };
  if (!data || data.result === null || data.result === undefined) return null;
  if (typeof data.result === "string") {
    try {
      return JSON.parse(data.result) as Submission[];
    } catch {
      return [];
    }
  }
  if (Array.isArray(data.result)) {
    return data.result as Submission[];
  }
  return null;
}

async function kvSet(list: Submission[]): Promise<void> {
  const url = getKvUrl();
  const token = getKvToken();
  if (!url || !token) {
    throw new Error(
      "KV store not configured. Set KV_REST_API_URL and KV_REST_API_TOKEN."
    );
  }

  const res = await fetch(`${url}/set/${SUBMISSIONS_KV_KEY}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV set failed (HTTP ${res.status})`);
}

// ─── Concurrency lock (in-process mutex matching coupons-store pattern) ───────
let writeChain: Promise<unknown> = Promise.resolve();

function withWriteLock<T>(fn: () => Promise<T>): Promise<T> {
  const next = writeChain.then(fn, fn);
  writeChain = next.catch(() => undefined);
  return next;
}

// ─── Local fallback seed (read-only, never writes to disk) ───────────────────
async function loadLocalSeed(): Promise<Submission[]> {
  try {
    const { readFile } = await import("fs/promises");
    const { join } = await import("path");
    const file = join(process.cwd(), "submissions.json");
    const raw = await readFile(file, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Submission[]) : [];
  } catch {
    return [];
  }
}

let memoryStore: Submission[] | null = null;

async function read(): Promise<Submission[]> {
  if (hasKV()) {
    try {
      const stored = await kvGet();
      if (stored !== null) return stored;

      // KV key does not exist yet: check for local seed to migrate
      const seed = await loadLocalSeed();
      if (seed.length > 0) {
        await kvSet(seed).catch(() => {});
      }
      return seed;
    } catch (err) {
      console.error("[submissions-store] Failed to read from KV:", err);
    }
  }

  // In-memory fallback (when KV is not configured)
  if (memoryStore === null) {
    memoryStore = await loadLocalSeed();
  }
  return memoryStore;
}

async function write(list: Submission[]): Promise<void> {
  if (hasKV()) {
    await kvSet(list);
    return;
  }
  memoryStore = list;
}

export function purgeExpired(list: Submission[]): Submission[] {
  const now = Date.now();
  return list.filter(
    (s) => !s.trashedAt || now - new Date(s.trashedAt).getTime() < TRASH_TTL_MS
  );
}

// ─── Public Store API ────────────────────────────────────────────────────────
export async function logSubmission(
  type: SubmissionType,
  data: Record<string, string | number | boolean | null | undefined>
): Promise<Submission> {
  return withWriteLock(async () => {
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
  });
}

export async function getAllSubmissions(): Promise<Submission[]> {
  const list = purgeExpired(await read());
  return list.filter((s) => !s.trashedAt);
}

export async function getTrashedSubmissions(): Promise<Submission[]> {
  const list = purgeExpired(await read());
  return list.filter((s) => !!s.trashedAt);
}

export async function trashSubmission(id: string): Promise<boolean> {
  return withWriteLock(async () => {
    const list = await read();
    const idx = list.findIndex((s) => s.id === id);
    if (idx === -1) return false;
    list[idx].trashedAt = new Date().toISOString();
    await write(list);
    return true;
  });
}

export async function restoreSubmission(id: string): Promise<boolean> {
  return withWriteLock(async () => {
    const list = await read();
    const idx = list.findIndex((s) => s.id === id);
    if (idx === -1) return false;
    delete list[idx].trashedAt;
    await write(list);
    return true;
  });
}

export async function permanentDeleteSubmission(id: string): Promise<boolean> {
  return withWriteLock(async () => {
    const list = await read();
    const filtered = list.filter((s) => s.id !== id);
    if (filtered.length === list.length) return false;
    await write(filtered);
    return true;
  });
}

export async function emptyTrash(): Promise<number> {
  return withWriteLock(async () => {
    const list = await read();
    const active = list.filter((s) => !s.trashedAt);
    const removed = list.length - active.length;
    await write(active);
    return removed;
  });
}

export async function deleteSubmission(id: string): Promise<boolean> {
  return trashSubmission(id);
}
