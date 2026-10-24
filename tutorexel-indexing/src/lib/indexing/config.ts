// Shared settings for Google Indexing API + IndexNow submissions.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tutorexel.com").replace(/\/$/, "");
export const SITE_HOST = new URL(SITE_URL).host;

// Google default quota: 200 publish calls per day per Cloud project (URL_UPDATED + URL_DELETED combined).
export const GOOGLE_DAILY_LIMIT = Number(process.env.GOOGLE_INDEXING_DAILY_LIMIT ?? 200);

// Optional: only send URLs matching this regex to Google (e.g. "/careers/" for JobPosting pages only).
// Leave unset to send every eligible URL. IndexNow always gets every eligible URL.
export const GOOGLE_INCLUDE = process.env.GOOGLE_INDEXING_INCLUDE ? new RegExp(process.env.GOOGLE_INDEXING_INCLUDE) : null;

// Never submit these (utility, noindex, form steps).
export const EXCLUDE: RegExp[] = [
  /\/(privacy|terms|cookies|refund|links|enroll|thank-you|admin)(\/|$)/,
  /\/enquire$/,
  /\/free-trial-booking(\/|$)/,
  /\/careers\/apply(\/|$)/,
  /\/blog\/sample-article/,
];

export function normalise(raw: string): string | null {
  try {
    const u = new URL(raw.trim(), SITE_URL);
    if (u.host !== SITE_HOST || u.protocol !== "https:") return null;
    u.hash = "";
    u.search = "";
    let out = u.toString();
    if (out.endsWith("/") && u.pathname !== "/") out = out.slice(0, -1);
    if (EXCLUDE.some((re) => re.test(u.pathname))) return null;
    return out;
  } catch {
    return null;
  }
}

// Shorter paths first: region homes and hubs get crawled before deep pages.
export function priority(url: string): number {
  return new URL(url).pathname.split("/").filter(Boolean).length;
}
