import { JWT } from "google-auth-library";

// Google Indexing API v3.
// Docs: https://developers.google.com/search/apis/indexing-api/v3/using-api
// Officially supported only for pages with JobPosting or BroadcastEvent (in VideoObject) markup.

export type NotificationType = "URL_UPDATED" | "URL_DELETED";

export interface GoogleResult {
  url: string;
  ok: boolean;
  status: number;
  error?: string;
}

const SCOPE = "https://www.googleapis.com/auth/indexing";
const PUBLISH = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const METADATA = "https://indexing.googleapis.com/v3/urlNotifications/metadata";

let client: JWT | null = null;

export function googleConfigured(): boolean {
  return Boolean(process.env.GOOGLE_INDEXING_CLIENT_EMAIL && process.env.GOOGLE_INDEXING_PRIVATE_KEY);
}

function getClient(): JWT {
  if (client) return client;
  const email = process.env.GOOGLE_INDEXING_CLIENT_EMAIL;
  const key = process.env.GOOGLE_INDEXING_PRIVATE_KEY;
  if (!email || !key) throw new Error("GOOGLE_INDEXING_CLIENT_EMAIL / GOOGLE_INDEXING_PRIVATE_KEY not set");
  // Vercel stores the key with literal "\n"; turn them back into newlines.
  client = new JWT({ email, key: key.replace(/\\n/g, "\n"), scopes: [SCOPE] });
  return client;
}

function errorInfo(e: unknown): { status: number; message: string } {
  const err = e as { response?: { status?: number; data?: { error?: { message?: string } } }; message?: string };
  return {
    status: err.response?.status ?? 0,
    message: err.response?.data?.error?.message ?? err.message ?? "Unknown error",
  };
}

export async function publish(url: string, type: NotificationType = "URL_UPDATED"): Promise<GoogleResult> {
  try {
    const res = await getClient().request({ url: PUBLISH, method: "POST", data: { url, type } });
    return { url, ok: true, status: res.status };
  } catch (e) {
    const { status, message } = errorInfo(e);
    return { url, ok: false, status, error: message };
  }
}

// Shows the last notification Google received for a URL. Not proof of indexing.
export async function getMetadata(url: string): Promise<{ status: number; data: unknown }> {
  try {
    const res = await getClient().request({ url: `${METADATA}?url=${encodeURIComponent(url)}`, method: "GET" });
    return { status: res.status, data: res.data };
  } catch (e) {
    const { status, message } = errorInfo(e);
    return { status, data: { error: message } };
  }
}
