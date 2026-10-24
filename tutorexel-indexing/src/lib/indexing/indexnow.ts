import { SITE_HOST, SITE_URL } from "./config";

// IndexNow: Bing, Yandex, Naver, Seznam, Yep (Bing also feeds Copilot and ChatGPT search). Google does not use it.
// Key file is served by src/app/indexnow-key.txt/route.ts.

export function indexNowConfigured(): boolean {
  return /^[a-zA-Z0-9-]{8,128}$/.test(process.env.INDEXNOW_KEY ?? "");
}

export async function submitIndexNow(urls: string[]): Promise<{ submitted: number; status: number | null }> {
  if (!indexNowConfigured() || urls.length === 0) return { submitted: 0, status: null };
  let lastStatus = 0;
  // Max 10,000 URLs per request.
  for (let i = 0; i < urls.length; i += 10000) {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: SITE_HOST,
        key: process.env.INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/indexnow-key.txt`,
        urlList: urls.slice(i, i + 10000),
      }),
    });
    lastStatus = res.status; // 200 or 202 = accepted
  }
  return { submitted: urls.length, status: lastStatus };
}
