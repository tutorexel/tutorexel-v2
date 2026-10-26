import { SITE_HOST, SITE_URL } from "./config";

// IndexNow: Bing, Yandex, Naver, Seznam, Yep (Bing also feeds Copilot and ChatGPT search). Google does not use it.
// Key file is served by src/app/indexnow-key.txt/route.ts.

export function indexNowConfigured(): boolean {
  return /^[a-zA-Z0-9-]{8,128}$/.test(process.env.INDEXNOW_KEY ?? "");
}

export interface IndexNowResult {
  submitted: number;
  status: number | null;
  responseBody?: string;
  error?: string;
}

export async function submitIndexNow(urls: string[]): Promise<IndexNowResult> {
  if (!indexNowConfigured() || urls.length === 0) {
    return {
      submitted: 0,
      status: null,
      ...(!indexNowConfigured() ? { error: "INDEXNOW_KEY not configured" } : {}),
    };
  }

  let lastStatus: number | null = null;
  let responseBody: string | undefined;
  let lastError: string | undefined;

  // Max 10,000 URLs per request.
  for (let i = 0; i < urls.length; i += 10000) {
    const chunk = urls.slice(i, i + 10000);
    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          host: SITE_HOST,
          key: process.env.INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/indexnow-key.txt`,
          urlList: chunk,
        }),
      });
      lastStatus = res.status; // 200 or 202 = accepted, 4xx = error
      if (res.status >= 400) {
        try {
          responseBody = await res.text();
        } catch {
          // Ignore read error
        }
        break;
      }
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      break;
    }
  }

  return {
    submitted: lastError ? 0 : urls.length,
    status: lastStatus,
    ...(responseBody ? { responseBody } : {}),
    ...(lastError ? { error: lastError } : {}),
  };
}
