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

const CANONICAL_HOST = "www.tutorexel.com";
const CANONICAL_KEY_LOCATION = "https://www.tutorexel.com/indexnow-key.txt";

function toWwwUrl(raw: string): string {
  try {
    const u = new URL(raw);
    if (u.hostname === "tutorexel.com" || u.hostname === "www.tutorexel.com") {
      u.hostname = CANONICAL_HOST;
      u.protocol = "https:";
    }
    return u.toString();
  } catch {
    return raw;
  }
}

export async function submitIndexNow(urls: string[]): Promise<IndexNowResult> {
  if (!indexNowConfigured() || urls.length === 0) {
    return {
      submitted: 0,
      status: null,
      ...(!indexNowConfigured() ? { error: "INDEXNOW_KEY not configured" } : {}),
    };
  }

  const wwwUrls = urls.map(toWwwUrl);
  let lastStatus: number | null = null;
  let responseBody: string | undefined;
  let lastError: string | undefined;

  // Max 10,000 URLs per request.
  for (let i = 0; i < wwwUrls.length; i += 10000) {
    const chunk = wwwUrls.slice(i, i + 10000);
    const postBody = JSON.stringify({
      host: CANONICAL_HOST,
      key: process.env.INDEXNOW_KEY,
      keyLocation: CANONICAL_KEY_LOCATION,
      urlList: chunk,
    });

    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: postBody,
      });

      lastStatus = res.status; // 200 or 202 = accepted, 4xx = error
      if (res.status >= 400) {
        try {
          responseBody = await res.text();
        } catch {
          // Ignore read error
        }

        // Fallback: on 403 SiteVerificationNotCompleted, retry once against https://www.bing.com/indexnow
        const isSiteVerificationError =
          res.status === 403 &&
          Boolean(
            responseBody &&
              responseBody.toLowerCase().includes("siteverificationnotcompleted")
          );

        if (isSiteVerificationError) {
          try {
            const bingRes = await fetch("https://www.bing.com/indexnow", {
              method: "POST",
              headers: { "Content-Type": "application/json; charset=utf-8" },
              body: postBody,
            });
            lastStatus = bingRes.status;
            if (bingRes.status >= 400) {
              try {
                responseBody = await bingRes.text();
              } catch {
                // Ignore read error
              }
            } else {
              responseBody = undefined;
            }
          } catch (retryErr) {
            lastError = retryErr instanceof Error ? retryErr.message : String(retryErr);
          }
        }

        if (lastStatus && lastStatus >= 400) {
          break;
        }
      }
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      break;
    }
  }

  return {
    submitted: lastError ? 0 : wwwUrls.length,
    status: lastStatus,
    ...(responseBody ? { responseBody } : {}),
    ...(lastError ? { error: lastError } : {}),
  };
}
