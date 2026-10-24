# TutorExel indexing fixes (dev list, 23 Oct 2026)

Based on GSC Page indexing export (23 Oct 2026) and a live crawl of all 354 sitemap URLs.
Paste section by section into Antigravity. Do not change any live URL while doing this.

## P0: ship this week

### 1. robots.txt: stop blocking `/_next/`
Every page loads CSS, JS and all images from `/_next/static` and `/_next/image` (homepage: 139 static refs, 76 image refs). Googlebot is told not to fetch any of them, so it renders an unstyled page with no images.

In `src/app/robots.ts`, in every user-agent group (keep the AI crawler groups):
- Remove `Disallow: /_next/`
- Remove the `enroll`, `thank-you`, `careers/apply`, `free-trial-booking/thank-you` lines (all regions). These pages already carry `noindex`; Google must be able to crawl them to see it. Blocking them is what causes "Blocked by robots.txt" in GSC.
- Keep `Disallow: /api/` and `/admin`.
- Before unblocking, confirm every thank-you page outputs `<meta name="robots" content="noindex">`.

### 2. Sitemap: only indexable, useful URLs
Remove from `sitemap-{au,us,ca,nz}.xml`:
- noindex pages: `/enroll`, `/links` (x4 regions = 8)
- `/co-curricular/{guitar,piano}/enquire` (x4 = 8, 32 words each)
- `/free-trial-booking` (x4 = 4, 19 words)
- Optional: `/privacy`, `/terms`, `/cookies`, `/refund` (x4 = 16). Footer links still reach them.

`<lastmod>`: use the real content-change date per page (data file field or git commit date of the source file). Not build/deploy time.

### 3. hreflang: HTML and sitemap disagree
- Sitemap: full clusters (`xhtml:link`, e.g. 325 in sitemap-au.xml).
- HTML: 257 pages carry only their own hreflang, 97 carry none.

Make HTML output the same reciprocal cluster the sitemap already builds (equivalent pages only, plus `x-default`). Market-unique pages (NAPLAN, city pages, region-only blog posts) keep self only. Different prices or content per region do not block hreflang; it exists for exactly this case and stops Google treating `/about`, `/ca/about`, `/nz/about` (60 to 77% identical) as duplicates.

### 4. Broken and soft-404 redirects
- Remove internal links to `/us|ca|nz/blog/sample-article-*`. They redirect to `/…/blog/students-benefit-from-extra-maths-support-*`, which returns 404.
- Delete the 3 sample posts in the CMS.
- Retired region city pages (`/ca/online-tutoring/sydney`, `/us/…/sydney`, `/nz/…/sydney`) redirect to the region homepage. Google reads redirect-to-home as soft 404. Point them to `/{region}/online-tutoring` (hub) instead, or return 410.
- Confirm every redirect is 301/308, never 307.
- 404 responses currently output a `<link rel="canonical">` (to the URL or its parent). Drop the canonical on 404s.

### 5. Orphan pages
No internal `<a>` link points to:
- 17 AU blog posts (e.g. `/blog/online-tutoring-vs-traditional-tutoring`, `/blog/how-tutorexel-works-diagnostic-test-learning-plan`)
- `/us/blog/why-students-need-more-than-school-support-in-2025`, `/ca/blog/grade-6-math-tutoring-in-ontario`, `/ca/blog/how-online-math-tutoring-helps-canadian-students-excel`
- `/research` (AU), `/cookies` (x4)

Fix: blog listing must render every post as a real `<a href>` in server HTML (no "Show more" button that loads posts client-side), or use crawlable pagination `/blog/page/2`. Link `/research` from About or Results.

## P1: next 2 weeks

### 6. Internal links into the not-indexed pages
235 URLs are "Discovered, currently not indexed" (never crawled): US 75, CA 67, NZ 68, AU 25. By type: subjects 124, utility 40, city 27, exam-prep 24, co-curricular 16, blog 4.
- Region homepage (`/us`, `/ca`, `/nz`): add a server-rendered "Grades and subjects" grid linking every grade hub and grade+subject page directly (1 click from home).
- Each grade+subject page: links to same-grade other subjects, prev/next grade same subject, and the region's matching exam-prep page.
- Each exam-prep page: link the relevant grade pages.
- AU root pages (strongest, already indexed): keep footer links to `/us`, `/ca`, `/nz` homes.

### 7. Thin pages
`/results` (49 words, same on `/us/results`) and `/research` (85 words), plus their CA/NZ copies: expand to 400+ words with real data, or set `noindex` and drop from sitemap.

### 8. City pages
CA and NZ city pages are 65 to 67% identical to each other (US 38%). Add local content per city: school boards, local tests, term dates, a local testimonial, local FAQs.

## Freeze
No more root swaps or slug changes for at least 90 days. Root moved AU to US (26 Sep), back to AU (2 Oct), then US/CA slugs changed year/maths to grade/math (6 Oct). Each wave added a batch of URLs Google now has to re-evaluate.
