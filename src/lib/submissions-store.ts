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

async function read(): Promise<Submission[]> {
  try {
    const raw = await readFile(FILE, "utf-8");
    return JSON.parse(raw) as Submission[];
  } catch {
    return [];
  }
}

async function write(list: Submission[]): Promise<void> {
  await writeFile(FILE, JSON.stringify(list, null, 2), "utf-8");
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
  const list = purgeExpired(await read());
  return list.filter((s) => !s.trashedAt);
}
export async function getTrashedSubmissions(): Promise<Submission[]> {
  const list = purgeExpired(await read());
  return list.filter((s) => !!s.trashedAt);
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
