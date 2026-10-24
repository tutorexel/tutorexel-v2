# TutorExel: Google Indexing API + IndexNow (Next.js 16, Vercel)

Drop-in files. Copy `src/` into the repo (paths match the App Router layout) and merge `vercel.json`.

## Read first

- Google's Indexing API is officially only for pages with `JobPosting` or `BroadcastEvent` (livestream) markup. Tutoring, grade and city pages are outside that policy. Google runs spam detection on submissions and can revoke access. A `200` response means "notification received", not "indexed".
- Safest use: set `GOOGLE_INDEXING_INCLUDE=/careers/` so only job pages (with JobPosting schema) go to Google. Leave it unset to send every page at your own risk.
- IndexNow (Bing, Yandex, Naver, Seznam; Bing also feeds Copilot and ChatGPT search) is fully legitimate for all pages. Google ignores it.
- None of this fixes the root causes in `FIXES.md`. Ship those first.

## Files

| File | Purpose |
|---|---|
| `src/lib/indexing/config.ts` | Site URL, daily quota, exclude list, URL normalising |
| `src/lib/indexing/google.ts` | Indexing API client (service account JWT): `publish`, `getMetadata` |
| `src/lib/indexing/indexnow.ts` | IndexNow submit |
| `src/lib/indexing/store.ts` | Dedupe + daily quota counter in the existing Upstash/Vercel KV |
| `src/lib/indexing/sitemap.ts` | Reads `/sitemap.xml` (index + children) with lastmod |
| `src/lib/indexing/submit.ts` | Orchestrator: filter, dedupe, quota, send |
| `src/app/api/indexing/route.ts` | `POST` manual/webhook submit, `GET ?url=` status |
| `src/app/api/cron/indexing/route.ts` | Daily cron: submits new or changed sitemap URLs |
| `src/app/indexnow-key.txt/route.ts` | Serves the IndexNow key file |
| `vercel.json` | Cron at 08:40 UTC (just after Google's midnight PT quota reset) |
| `src/app/robots.ts` | Replacement robots: `/_next/` unblocked, explicit search + AI bot group |
| `src/app/llms.txt/route.ts` | Curated `/llms.txt` (optional, for AI assistants) |
| `src/lib/seo/entity.ts` | Organization + author JSON-LD with correct `sameAs` and one `@id` |
| `AI-VISIBILITY.md` | AI search (GEO) audit and fix list |

## Setup

1. **Google Cloud**: console.cloud.google.com, create project `tutorexel-indexing`.
2. APIs & Services, Library, enable **Web Search Indexing API**.
3. IAM & Admin, Service Accounts, create one (no roles). Keys, Add key, JSON. Download.
4. **Search Console** (tutorexel.com property): Settings, Users and permissions, Add user, paste the service account `client_email`, permission **Owner**. Without Owner every call returns 403.
5. **Install**: `npm i google-auth-library @upstash/redis` (skip Redis if already installed).
6. **Vercel env vars** (Production; mark keys Sensitive):

   | Name | Value |
   |---|---|
   | `GOOGLE_INDEXING_CLIENT_EMAIL` | `client_email` from the JSON |
   | `GOOGLE_INDEXING_PRIVATE_KEY` | `private_key` from the JSON, as-is (with `\n`) |
   | `INDEXING_SECRET` | random 32+ chars, protects `/api/indexing` |
   | `CRON_SECRET` | random 32+ chars, Vercel sends it to the cron route |
   | `INDEXNOW_KEY` | 32 hex chars, e.g. `openssl rand -hex 16` |
   | `GOOGLE_INDEXING_INCLUDE` | optional regex, e.g. `/careers/` |

   KV uses the existing `KV_REST_API_URL` / `KV_REST_API_TOKEN` (or `UPSTASH_REDIS_REST_*`). Without KV it still works, just no dedupe or quota tracking.
7. **Proxy / middleware**: make sure the region logic in `proxy.ts` (or `middleware.ts`) does not redirect `/api/indexing`, `/api/cron/indexing` or `/indexnow-key.txt`. Exclude them in the matcher if needed.
8. Deploy. Check `https://www.tutorexel.com/indexnow-key.txt` returns the key.
9. Bing Webmaster Tools: import the site from Search Console so IndexNow submissions are visible.

## Use

Daily cron (automatic): reads the sitemap, sends URLs never sent or with a newer `<lastmod>`, shortest paths first (region homes and hubs before deep pages), max 200/day to Google. The current 354-URL sitemap clears in 2 runs.

Important: `<lastmod>` must be the real content date. If it changes on every deploy, the cron resends everything and burns the quota.

Manual submit (new blog post, WordPress publish webhook, backlog list):

```bash
curl -X POST https://www.tutorexel.com/api/indexing \
  -H "Authorization: Bearer $INDEXING_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"urls":["https://www.tutorexel.com/us/subjects/grade-5/math","https://www.tutorexel.com/ca/exam-prep/eqao"]}'
```

Options in the body: `"type":"URL_DELETED"` (page must already return 404/410 or noindex), `"force":true` (resend), `"google":false` or `"indexnow":false` (one engine only).

Status of one URL:

```bash
curl "https://www.tutorexel.com/api/indexing?url=https://www.tutorexel.com/us" \
  -H "Authorization: Bearer $INDEXING_SECRET"
```

Headless WordPress (blog move): add a publish/update hook that POSTs the post's front-end URL to `/api/indexing` with the secret.

## Excluded automatically

privacy, terms, cookies, refund, links, enroll, thank-you, admin, `*/enquire`, free-trial-booking, careers/apply, blog sample articles. Edit `EXCLUDE` in `config.ts`.

## Limits (Google, Oct 2026)

200 publish calls/day per Cloud project, 380 requests/min overall. Do not create extra projects or accounts to raise it; Google says that can get access revoked.
