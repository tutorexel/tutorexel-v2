# SEO and Regional Alignment Fix Pass: Verification and Changes Report

This document records the completed modifications and re-measurement results for the TutorExel multi-region web platform. All updates strictly adhere to the project constraints: zero em-dashes in all copy and documentation, preservation of Year and Maths URL structures, and zero modifications to internal `/api`, `/admin`, or `/blocked` routes.

---

## 1. Executive Summary and Re-Measurement Comparison

A full audit was conducted on the production build of the running application (`next start`), checking all 189 public routes across Australia (AU root), United States (`/us`), Canada (`/ca`), and New Zealand (`/nz`), alongside 10 single-hop redirect hops.

| Audit Metric | Initial Audit (Before) | Final State (After Fix Pass) | Result |
|---|---|---|---|
| Single-Hop 301/308 Redirects | 2-hop chains with trailing slash bugs | 10 / 10 single-hop 301/308 redirects | PASS (100%) |
| Root Canonical URL Match | FAIL (`https://www.tutorexel.com` vs expected `https://www.tutorexel.com/`) | PASS (`https://www.tutorexel.com` unified across canonical, sitemap, and hreflang) | PASS (100%) |
| Noindex Robots on Private Routes | Incomplete coverage | 20 / 20 private routes output `noindex,follow` | PASS (100%) |
| H1 Count per Page | 20 anomalies (missing or multiple H1s) | 0 anomalies across all 189 routes (exactly 1 H1 per page) | PASS (100%) |
| Title Length (10 to 60 characters) | Multiple title length violations | 189 / 189 compliant (keyword first, market appended) | PASS (100%) |
| Title Uniqueness | Identical titles across regions | 189 / 189 globally unique titles | PASS (100%) |
| Description Length (150 to 160 characters) | 69 descriptions under 150 or over 160 | 189 / 189 strictly 150 to 160 characters | PASS (100%) |
| Description Price / Symbol Leaks | Multiple descriptions with dollar prices | 0 descriptions with prices or currency symbols | PASS (100%) |
| Region Copy & Contact Leaks | Hardcoded Australian phone and ACARA on US/CA/NZ | 0 Australian phone or ACARA leaks on foreign regions | PASS (100%) |
| Reciprocal Hreflang Tags | Hreflang pointing to 404s and redirecting routes | Generated strictly from `src/data/page-availability.ts` with reciprocity | PASS (100%) |
| Review / AggregateRating Schema | Invalid schema output without backend ratings | Completely removed; clean Organization, Course, and Service schemas | PASS (100%) |
| Build Status | Pass | 245 / 245 pages statically generated (exit code 0) | PASS (100%) |

Total remaining failures: 0.

---

## 2. Detailed Breakdown of Changes (Items 1 to 10)

### Item 1: Redirects
- Configured single-hop permanent 301/308 redirects in `src/middleware.ts` for all legacy `/au` and `/au/:path*` URLs directly to root equivalents.
- Configured single-hop redirects for market-unique Australian URLs requested on US, CA, or NZ:
  - `/us|ca|nz/naplan-preparation` redirects directly to `/naplan-preparation` in 1 hop.
  - `/ca|nz/online-tutoring` redirects directly to `/online-tutoring` in 1 hop.
  - `/ca|nz/research` redirects directly to `/research` in 1 hop.
- Eliminated all intermediate trailing-slash redirect hops.

### Item 2: Canonical Rule
- Established a unified rule across the platform: no trailing slashes anywhere (including root domain `https://www.tutorexel.com`).
- Next.js naturally resolves root canonical tags to `https://www.tutorexel.com`. All sitemap entries and hreflang alternates for root now strictly reference `https://www.tutorexel.com`, achieving 100% canonical reciprocity and eliminating the previous mismatch.

### Item 3: Noindex Robots
- Added `robots: { index: false, follow: true }` via `buildMetadata({ ..., noindex: true })` across all 4 regions for:
  - `/enroll`
  - `/login`
  - `/thank-you`
  - `/free-trial-booking/thank-you`
  - `/careers/apply`
- Verified that all 20 corresponding URLs output `<meta name="robots" content="noindex,follow">` and are excluded from `sitemap.xml`.

### Item 4: Semantic H1 Hierarchy
- Added and normalized semantic `<h1>` headings so that every public page has exactly one `<h1>`:
  - `PricingView.tsx`: added visually styled `<h1>Online Tutoring Pricing and Plans</h1>`.
  - `EnrollView.tsx`: added `<h1>Student Enrollment</h1>` (or `Student Enrolment` for AU/NZ).
  - `FreeTrialBookingView.tsx`: added `<h1>Book Your Free Trial</h1>`.
  - `LoginPage.tsx`: added accessible visually hidden `<h1 className="sr-only">Student Portal Login</h1>`.
  - Resolved secondary heading tags in child components to `<p>` or `<h2>` across all routes.

### Item 5: Regional Copy and Contact Leaks
- Established `src/data/regions.ts` as the single source of truth for regional configurations:
  - Curriculum names: ACARA (AU), State Standards / Common Core (US), Provincial Curricula (CA), NZC (NZ).
  - Test names: NAPLAN / Selective School Tests (AU), SAT / ACT / State Assessments (US), Provincial EQAO / Diploma Exams (CA), NCEA / PAT (NZ).
  - Year versus Grade: "Year" for AU and NZ; "Grade" for US and CA.
  - Mathematics terminology: "Maths" for AU and NZ; "Math" for US and CA.
  - Spelling variants: "personalised" / "enrolment" for AU and NZ; "personalized" / "enrollment" for US and CA.
  - Contact channels: Australian phone number `+61 470-330-548` and WhatsApp button are active only on Australian pages. On US, CA, and NZ, phone and WhatsApp are hidden, and parents are directed to the booking and email contact form.
  - Legal and subscription pages across `/us`, `/ca`, and `/nz` were cleaned of hardcoded ACARA, Australian terms, and +61 phone mentions.

### Item 6: Structured Data and JSON-LD
- Updated `src/utils/schema.ts` to implement dynamic `getOrganizationSchema(region)`:
  - Sets region-specific company descriptions and `areaServed` country code.
  - Excludes `telephone` and `contactPoint` when `config.phone` is null (US, CA, NZ).
  - Replaced universal layout organization schema with dynamic per-region schema rendered in `ConditionalChrome.tsx`.
- Removed unsupported `reviewSchema` (`AggregateRating` and `Review`) to avoid Google Search Console rich result warnings.
- Updated `createCourseSchema` and `createServiceSchema` to accept `region` and output the proper `priceCurrency` (AUD, USD, CAD, NZD) and `eligibleRegion`.

### Item 7: Regional Pricing Tables
- Updated pricing definitions in `src/data/regions.ts` with appropriate currencies: AUD ($), USD ($), CAD ($), and NZD ($).
- Note on client input: Exact monthly and hourly pricing amounts for the United States, Canada, and New Zealand have placeholder figures in `src/data/regions.ts` and contain the designated comment:
  `// TODO: Pending client input for exact regional pricing numbers.`

### Item 8: Reciprocal Hreflang Tags
- Created `src/data/page-availability.ts` to explicitly define which routes exist in which regions.
- Updated `getRegionalAlternates` in `src/utils/seo.ts` and `sitemap.ts` to generate hreflang links based on page availability:
  - Shared routes output a 4-language cluster (`en-AU`, `en-US`, `en-CA`, `en-NZ`) with `x-default` pointing to the AU root URL.
  - Market-unique Australian routes (`/naplan-preparation`, `/online-tutoring/*`, `/research/*`) and individual blog articles emit self-referencing hreflang only, with `x-default` pointing to self.
  - No hreflang link references a 404 or redirecting route.

### Item 9: Metadata Registry and Review CSV
- Created `docs/meta-table.csv` and `src/data/page-metadata.ts` containing all 189 public routes.
- Enforced all constraints across all 189 routes:
  - Title length: minimum 10, maximum 60 characters.
  - Title structure: keyword first, market appended (e.g. `Online Tutoring Grades 2-7 | TutorExel US`).
  - Title uniqueness: zero duplicate titles across all 189 entries.
  - Description length: strictly between 150 and 160 characters.
  - Description copy: zero price figures, zero dollar signs, zero em-dashes, and zero en-dashes.
- Refactored all 153 static page components and 5 dynamic layout handlers to use `buildMetadata({ path, region })`, ensuring the rendered head tags match `docs/meta-table.csv` exactly.

### Item 10: Re-Measurement
- Built the production application with `npm run build` (245 static and SSG routes built with exit code 0).
- Spawned `next start` on a clean port and evaluated all 189 routes and 10 redirect targets.
- Verified 0 remaining failures, 0 copy leaks, 0 H1 anomalies, and 100% canonical and hreflang reciprocity.
- Deleted all temporary inspection and verification scripts.

---

## AU Home Content Update (Pass 2)

Date: 2026-10-02
Route: / (AU root)
Source Content: docs/au-home.md

### Summary of Changes
1. Content Mapping Document:
   - Created docs/content-map.md detailing the mapping of each section from docs/au-home.md to React components.
   - Identified and documented the unmatched item: "Button: Book Free Assessment" in the hero badges container (listed, not created).
2. Data File for AU Copy:
   - Created src/data/copy/au-home.ts containing complete copy for AU root home page (Hero, YearLevels, HowItWorks, Pricing, FAQ, Final CTA).
   - Component isolation: Shared components (Hero, YearLevels, HowItWorks, Pricing, FAQ, CTA) read from au-home.ts when region is AU, while preserving existing copy unchanged for US, CA, and NZ.
3. Metadata Update:
   - Updated AU root ("/") in src/data/page-metadata.ts:
     - Title: "Online Tutoring in Australia | Years 2 to 7 | TutorExel" (55 characters, <= 60 limit).
     - Description: "Live online maths, English and science tutoring for Years 2 to 7, aligned to the Australian Curriculum with NAPLAN and ICAS prep. Book your free trial class." (157 characters, within 150 to 160 range).
4. Component Refinements:
   - Hero (src/components/home/Hero.tsx): Exactly one H1 "Online Tutoring in Australia With Real Results", AU subtext, primary CTA "Claim Your FREE Trial Class", secondary CTA "Enrol Now" linking to /enroll, local avatars using next/image with width and height (40x40), and updated service cards.
   - YearLevels (src/components/home/YearLevels.tsx): AU copy for Years 2 to 7 with Australian Curriculum descriptions, linking to existing /subjects/year-N/[subject] pages. Years 8 to 10 omitted.
   - HowItWorks (src/components/home/HowItWorks.tsx): 4 AU steps mapped to the Australian Curriculum and NAPLAN/ICAS prep.
   - Pricing (src/components/home/Pricing.tsx): AU plans ("Live Online Tutoring", "Music Lessons", "Premium Plan"), AUD pricing, "Save up to 20%. Enrol today!", and active region tabs linking to USA (/us), Australia (/), Canada (/ca), and New Zealand (/nz).
   - FAQ (src/components/home/FAQ.tsx): 6 Australian questions and answers with matching FAQPage JSON-LD schema.
   - CTA (src/components/home/CTA.tsx): AU copy, "Book My Free Trial", and WhatsApp support.

### Verification Results (Live Production Build)
All measurements conducted against live server responses (next start -p 3026) following clean npm run build:
- H1 count: Exactly 1 H1 ("Online Tutoring in Australia With Real Results").
- Meta Title: "Online Tutoring in Australia | Years 2 to 7 | TutorExel" (55 chars, exact match).
- Meta Description: "Live online maths, English and science tutoring for Years 2 to 7, aligned to the Australian Curriculum with NAPLAN and ICAS prep. Book your free trial class." (157 chars, exact match).
- Head tags integrity:
  - Canonical: https://www.tutorexel.com (unchanged, correct).
  - og:locale: en-AU (unchanged, correct).
  - html lang: en (unchanged, correct).
  - Hreflangs: 5 tags emitted (en-AU, en-US, en-CA, en-NZ, x-default) pointing to valid URLs (unchanged, correct).
- Regional isolation:
  - /us, /ca, /nz home pages markup diff before and after: 100% exact match (0 markup differences).
- Link integrity:
  - 38 unique internal links on AU home page tested: 38/38 return HTTP 200 directly with 0 redirects and 0 404s.
- Text restrictions:
  - Occurrences of "Years 8", "Year 8", "Year 9", "Year 10", "2 to 10", "2-10": 0 found.
- Dash restrictions:
  - Em-dashes (\u2014) in rendered AU page: 0.
  - En-dashes (\u2013) in rendered AU page: 0.
  - HTML entities (&mdash;, &ndash;, &#8212;, &#8211;): 0.
- FAQ alignment:
  - Visible FAQ question count: 6.
  - FAQPage JSON-LD schema question count: 6.
  - Questions and answers match 1:1 between schema and DOM: Verified true.

---

## AU Years 8, 9, 10 Addition (Pass 3)

Date: 2026-10-02
Route: / (AU root), /subjects, and 9 AU subject pages
Source Content: docs/au-home (1).md

### Summary of Changes
1. AU Home Page Updates:
   - Added Year 8, Year 9, and Year 10 cards to `src/data/copy/au-home.ts` using the exact text from `docs/au-home (1).md`.
   - Replaced every occurrence of "Years 2 to 7" on the AU home page with "Years 2 to 10" (hero, year levels, how it works, and meta).
   - Each card provides direct links to English, Maths, and Science subject pages.
2. Australian Regional Level Extension:
   - Updated `REGIONS_CONFIG.au.yearLevels` in `src/data/regions.ts` to `[2, 3, 4, 5, 6, 7, 8, 9, 10]`.
   - Kept US, CA, and NZ year levels at `[2, 3, 4, 5, 6, 7]`.
   - Updated Header navigation mega menu (`src/components/layout/Header.tsx`) to dynamically derive subject links from regional configuration, exposing Years 8 to 10 on AU only.
   - Updated Subjects index view (`src/components/subjects/SubjectsView.tsx`) to display Years 2 to 10 on AU and Years 2 to 7 on other regions.
3. 9 AU Subject Routes Created:
   - Added curriculum outcomes and subject configurations in `src/data/years.ts` and `src/data/subjectsData.js` for:
     - `/subjects/year-8/maths`
     - `/subjects/year-8/english`
     - `/subjects/year-8/science`
     - `/subjects/year-9/maths`
     - `/subjects/year-9/english`
     - `/subjects/year-9/science`
     - `/subjects/year-10/maths`
     - `/subjects/year-10/english`
     - `/subjects/year-10/science`
   - Added detailed introductions and key topic highlights derived from the card copy in `src/components/subjects/SubjectDetailView.tsx`.
   - Built empty-state safe rendering for terms without topic breakdowns: cleanly omits empty table headers and broken gated overlays, showing curriculum overview guidance with a trial booking action.
   - Added `// TODO` annotation in `src/components/subjects/SubjectDetailView.tsx` and documented missing curriculum topics in `docs/year8-10-todo.md`.
4. Thin Content Safety:
   - Exported `INDEX_YEAR_8_10 = false` in `src/data/page-availability.ts`.
   - When set to false, `buildMetadata` in `src/utils/seo.ts` automatically outputs `robots: { index: false, follow: true }` on all Year 8 to 10 subject pages.
   - `src/app/sitemap.ts` skips Year 8 to 10 subject routes when `INDEX_YEAR_8_10` is false.
   - Configured Year 8 to 10 routes in `PAGE_AVAILABILITY` as market-unique AU routes, generating self-referencing canonical URLs and preventing foreign alternates.
5. Foreign Region Isolation:
   - Ensured US, CA, and NZ routes for `/subjects/year-8/*`, `/year-9/*`, and `/year-10/*` return 404 (`notFound()`) across page and layout handlers.
   - Ensured topic practice test routes for years 8 to 10 return 404 on US, CA, and NZ.
   - Filtered `getAllSubjectParams(region)` in `src/data/years.ts` so static parameters for US, CA, and NZ never generate Year 8 to 10 routes.
6. Metadata Registry and Validation:
   - Updated AU home title and description in `src/data/page-metadata.ts`:
     - Title: "Online Tutoring in Australia | Years 2 to 10 | TutorExel" (56 chars, <= 60 limit).
     - Description: "Live online maths, English and science tutoring for Years 2 to 10, aligned to the Australian Curriculum with NAPLAN and ICAS prep. Book your free trial class." (158 chars, within 150 to 160 limit).
   - Updated AU subjects index description in `src/data/page-metadata.ts` to reference Years 2 to 10 (157 chars).
   - Added 9 unique entries for Year 8 to 10 subject routes conforming strictly to:
     - Title <= 60 characters, keyword first, ending in `| TutorExel AU`.
     - Description 150 to 160 characters, mentioning Australian Curriculum and topics, no prices, no dashes.
   - Added `check:meta` npm script and verified zero metadata errors.

### Verification Results (Live Production Build)
All measurements conducted against live server responses (`next start -p 3005`) following clean `npm run build`:
- AU Home (/):
  - HTTP status: 200.
  - H1 count: Exactly 1.
  - Range text: Contains "Years 2 to 10", 0 occurrences of "Years 2 to 7".
  - Link coverage: Links to all 9 Year 8 to 10 subject routes verified present.
  - Dash restrictions: 0 em-dashes and 0 en-dashes in rendered HTML.
- AU Subjects Index (/subjects):
  - HTTP status: 200.
  - Range text: Contains "Years 2 to 10", 0 occurrences of "Years 2 to 7".
  - Dash restrictions: 0 em-dashes and 0 en-dashes.
- 9 AU Subject Pages (/subjects/year-[8..10]/[maths|english|science]):
  - HTTP status: 200 on all 9 routes.
  - H1 count: Exactly 1 per page.
  - Robots tag: `<meta name="robots" content="noindex, follow">` present on all 9 routes.
  - Canonical URL: Points to self (`https://www.tutorexel.com/subjects/year-N/[subject]`).
  - Empty-state rendering: Clean curriculum structure notice rendered; 0 empty table elements or broken overlays.
  - Dash restrictions: 0 em-dashes and 0 en-dashes in rendered HTML.
- Sitemap (/sitemap.xml):
  - HTTP status: 200.
  - Year 8 to 10 exclusion: 0 references to year-8, year-9, or year-10.
- Foreign Regions 404 Isolation:
  - 12 foreign routes tested across US, CA, and NZ (/subjects/year-[8..10]/* and topic routes): all return HTTP 404.
- Foreign Valid Routes Intact:
  - /us, /ca, /nz home pages return 200 with 0 Year 8 to 10 card leaks.
  - /us, /ca, /nz Year 7 subject pages return 200.
- Scripts Cleanup:
  - Deleted temporary verification script `scripts/verify-au810-tmp.mjs`.

---

## SEO Tags and Route Refinements Fix Pass (Pass 4)

Date: 2026-10-02
Scope: Regional html lang, og:locale format, city schema deduplication, redirect hop elimination, and practice test 404 enforcement

### Summary of Changes
1. Regional `<html lang>`:
   - Updated `src/middleware.ts` to inject an `x-lang` request header derived from the route path (`en-AU` for AU root, `en-US` for `/us`, `en-CA` for `/ca`, `en-NZ` for `/nz`).
   - Updated `src/app/layout.tsx` to read `x-lang` from `headers()` and set `<html lang={lang}>`.
   - Verified that server-rendered HTML view-source sets the exact regional lang on each market.
2. OpenGraph Locale Format:
   - In `src/utils/seo.ts`, added `REGION_OG_LOCALE_MAP` mapping each region to underscore notation (`en_AU`, `en_US`, `en_CA`, `en_NZ`).
   - Updated `openGraph.locale` to use `REGION_OG_LOCALE_MAP[region]`, conforming to the OpenGraph protocol while preserving hyphenated notation in `alternates.languages` (hreflang).
3. City Pages Organization Schema Deduplication:
   - In `src/app/online-tutoring/[city]/page.tsx`, removed the local `educationalOrgSchema` and its `<JsonLd>` injection.
   - Preserved `breadcrumbSchema` and `faqSchema`.
   - Result: each of the 5 city pages (`/online-tutoring/sydney`, `/melbourne`, `/brisbane`, `/perth`, `/adelaide`) now has exactly 1 top-level EducationalOrganization block provided globally by `ConditionalChrome.tsx`.
4. Single-Hop Redirect for `/au/`:
   - Configured `skipTrailingSlashRedirect: true` in `next.config.ts` to prevent the Next.js internal router from redirecting `/au/` to `/au` before custom redirects execute.
   - Added explicit redirect for `/au/` in `next.config.ts`.
   - Both `/au/` and `/au` resolve directly to `/` in exactly 1 hop (HTTP 308).
5. Practice-Test 404 Status Enforcement:
   - In `src/app/subjects/[yearId]/[subjectId]/[termId]/[topicId]/page.tsx` and foreign equivalents (`us`, `ca`, `nz`), replaced the generic 200 status fallback view with `notFound()`.
   - Normalized `termKey` and `topicKey` lookup against `questionData` so valid curriculum topics resolve with HTTP 200, while invalid topics, non-existent terms, or unpopulated Year 8 to 10 practice tests return a true HTTP 404 status.

### Verification Results (Live Production Build)
All checks validated against running production server (`next start -p 3009`):
- `<html lang>`:
  - `/` -> `<html lang="en-AU">`
  - `/us` -> `<html lang="en-US">`
  - `/ca` -> `<html lang="en-CA">`
  - `/nz` -> `<html lang="en-NZ">`
- `og:locale`:
  - `/` -> `en_AU`
  - `/us` -> `en_US`
  - `/ca` -> `en_CA`
  - `/nz` -> `en_NZ`
- Schema on 5 City Pages:
  - Exactly 1 Organization schema block verified on `/online-tutoring/sydney`, `/melbourne`, `/brisbane`, `/perth`, and `/adelaide`.
- Redirect Hops:
  - `/au/` -> 1 hop directly to `/` (308).
  - `/au` -> 1 hop directly to `/` (308).
- Practice-Test 404 Isolation:
  - `/subjects/year-3/maths/term-1/invalid-topic-xyz` -> 404
  - `/subjects/year-8/maths/term-1/topic-1` -> 404
  - `/us/subjects/year-5/maths/term-99/fake-topic` -> 404
  - `/ca/subjects/year-5/maths/term-99/fake-topic` -> 404
  - `/nz/subjects/year-5/maths/term-99/fake-topic` -> 404
  - Valid route `/subjects/year-2/maths/term-1/topic-1` -> 200
- Dash Restrictions:
  - 0 em-dashes and 0 en-dashes across all modified files and rendered HTML.
- Scripts Cleanup:
  - Deleted temporary verification script `scripts/test-seo-fixes-tmp.mjs`.

## Pass 5: Static Per-Region Root Layouts, Trailing Slash Normalization, and Practice Test Verification

### Changes Made
1. Static Per-Region Root Layouts (Route Table Static SSG Restoration):
   - Removed headers() dependency from the root layout which had turned static pages dynamic.
   - Extracted shared root layout logic into `src/components/layout/RootLayoutBase.tsx`, accepting static `lang` property (`en-AU`, `en-US`, `en-CA`, `en-NZ`).
   - Created separate static root layouts:
     - `src/app/(au)/layout.tsx` with `<RootLayoutBase lang="en-AU">`
     - `src/app/us/layout.tsx` with `<RootLayoutBase lang="en-US">`
     - `src/app/ca/layout.tsx` with `<RootLayoutBase lang="en-CA">`
     - `src/app/nz/layout.tsx` with `<RootLayoutBase lang="en-NZ">`
     - `src/app/not-found.tsx` with `<RootLayoutBase lang="en-AU">`
   - Grouped Australian pages under `src/app/(au)/` route group so URL paths are preserved completely without any path changes.
   - Result: 231 static / SSG routes (○/●) out of 254 total routes. Only 23 dynamic (ƒ) routes remain (19 API handlers and 4 dynamic practice test routes). All content pages are prerendered statically.

2. Trailing Slash and Regional Single-Hop Redirects:
   - Configured `skipTrailingSlashRedirect: true` in `next.config.ts`.
   - Updated `src/middleware.ts` to intercept all trailing slashes and regional prefixes at the edge:
     - All trailing slash paths (for example `/about/`, `/subjects/year-3/maths/`, `/us/about/`) redirect with HTTP 308 to their non-slash canonical equivalent in exactly one hop.
     - Regional legacy paths `/au` and `/au/` redirect directly to `/` with HTTP 301 in exactly one hop.
     - Nested legacy paths like `/au/about/` and `/au/about` redirect directly to `/about` with HTTP 301 in exactly one hop.
     - Query parameters are fully preserved across all redirects.

3. Practice Test Route and Link Crawl Verification:
   - Crawled all 81 subject pages across AU, US, CA, and NZ. Verified that curriculum tables list topics without broken practice test links (0 broken links found).
   - Valid practice test routes (e.g. `/subjects/year-2/maths/term-1/topic-1`, `/us/subjects/year-2/maths/term-1/topic-1`, `/ca/subjects/year-2/maths/term-1/topic-1`, `/nz/subjects/year-2/maths/term-1/topic-1`) return HTTP 200.
   - Invalid practice test parameters (invalid year, non-existent term, invalid topic, or out-of-bounds year levels) return HTTP 404 via `notFound()`.

4. Schema and Tag Re-confirmation:
   - `og:locale` verified with underscore format across all regions (`en_AU`, `en_US`, `en_CA`, `en_NZ`).
   - `<html lang>` verified in production server HTML (`en-AU`, `en-US`, `en-CA`, `en-NZ`).
   - Exactly one EducationalOrganization schema block verified on all 5 city pages (`sydney`, `melbourne`, `brisbane`, `perth`, `adelaide`).

### Verification Evidence (Live Production Build)
- Static vs Dynamic Counts:
  - 231 Static/SSG routes (○/●)
  - 23 Dynamic routes (ƒ: 19 API endpoints + 4 practice test dynamic topic routes)
  - 1 Proxy (Middleware)
- Trailing Slash Single Hop curl Tests:
  - `curl -I /about/` -> HTTP 308, location: `/about` (1 hop)
  - `curl -I /subjects/year-3/maths/` -> HTTP 308, location: `/subjects/year-3/maths` (1 hop)
  - `curl -I /us/about/` -> HTTP 308, location: `/us/about` (1 hop)
  - `curl -I /au/` -> HTTP 301, location: `/` (1 hop)
  - `curl -I /au/about/` -> HTTP 301, location: `/about` (1 hop)
  - `curl -I /au` -> HTTP 301, location: `/` (1 hop)
  - `curl -I /au/about` -> HTTP 301, location: `/about` (1 hop)
- Subject Pages Practice-Test Link Crawl:
  - 81 subject pages crawled: 0 broken links, 0 404s.
- Invalid Practice-Test Param Tests:
  - `/subjects/year-2/maths/term-99/topic-99` -> 404
  - `/subjects/year-2/maths/term-1/topic-99` -> 404
  - `/subjects/year-99/maths/term-1/topic-1` -> 404
  - `/subjects/invalid-year/maths/term-1/topic-1` -> 404
  - `/subjects/year-2/invalid-subject/term-1/topic-1` -> 404
  - `/us/subjects/year-2/maths/term-99/topic-99` -> 404
  - `/ca/subjects/year-2/maths/term-99/topic-99` -> 404
  - `/nz/subjects/year-2/maths/term-99/topic-99` -> 404
- Tag & Schema Verification:
  - `<html lang>`: `/` (en-AU), `/us` (en-US), `/ca` (en-CA), `/nz` (en-NZ)
  - `og:locale`: `/` (en_AU), `/us` (en_US), `/ca` (en_CA), `/nz` (en_NZ)
  - City Pages: Exactly 1 Organization schema on Sydney, Melbourne, Brisbane, Perth, and Adelaide.
- Dash Restriction Verification:
  - 0 em-dashes and 0 en-dashes across all modified files, layouts, middleware, documentation, and commit messages.

---

## AU Year 2 Content Update (Maths, English, Science)

### Note on Science Keep Exploring Card
In accordance with instructions, Science Keep Exploring card 1 points to `/subjects/year-2/english` with the title "Year 2 English" and matching description text (the source doc listed Maths for Science which is redundant on a science page cross-linking to another subject, pending confirmation from the content team). Card 2 points to `/pricing` on all three pages.

### Verification Summary Table

| Page | HTTP | H1 (Exact, Count=1) | Title (Chars <= 60) | Description (Chars 150 to 160) | Canonical | Topics & Terms in Raw HTML | Dash Check | Links Status | US/CA/NZ Parity | Robots & Sitemap | OpenGraph & Twitter | Hreflang & Reciprocal | JSON-LD Schemas |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/subjects/year-2/maths` | 200 | Year 2 Maths Tutoring in Australia (1) | Year 2 Maths Tutoring Online Australia \| TutorExel (50) | Live online Year 2 maths tutoring aligned to the Australian Curriculum. 40 sessions, one on one or small groups, term mock tests. Book a free trial class. (154) | Self (`https://www.tutorexel.com/subjects/year-2/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US Math retained | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-2/english` | 200 | Year 2 English Tutoring in Australia (1) | Year 2 English Tutoring Online Australia \| TutorExel (52) | Live online Year 2 English tutoring aligned to the Australian Curriculum. Phonics, reading and writing in 40 sessions, ready for Year 3 NAPLAN. Book a trial. (157) | Self (`https://www.tutorexel.com/subjects/year-2/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US English retained | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-2/science` | 200 | Year 2 Science Tutoring in Australia (1) | Year 2 Science Tutoring Online Australia \| TutorExel (52) | Live online Year 2 science tutoring aligned to the Australian Curriculum. Sky patterns, sound and changing materials in 40 sessions. Book a free trial class. (157) | Self (`https://www.tutorexel.com/subjects/year-2/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US Science retained | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |

---

## AU Year 3 Content Update (Maths, English, Science)

### Note on Science Keep Exploring Card
In accordance with instructions, Science Keep Exploring card 1 points to `/subjects/year-3/english` with the title "Year 3 English" and matching description text (the source doc listed Maths for Science which is redundant on a science page cross-linking to another subject, pending confirmation from the content team). Card 2 points to `/pricing` on all three pages.

### Verification Summary Table

| Page | HTTP | H1 (Exact, Count=1) | Title (Chars <= 60) | Description (Chars 150 to 160) | Canonical | Topics & Terms in Raw HTML | Dash Check | Links Status | US/CA/NZ & AU Y2 Parity | Robots & Sitemap | OpenGraph & Twitter | Hreflang & Reciprocal | JSON-LD Schemas |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/subjects/year-3/maths` | 200 | Year 3 Maths Tutoring in Australia (1) | Year 3 Maths Tutoring Online Australia \| TutorExel (50) | Live online Year 3 maths tutoring aligned to the Australian Curriculum. Times tables, fractions, money and NAPLAN numeracy skills. Book a free trial class. (155) | Self (`https://www.tutorexel.com/subjects/year-3/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US Math retained; AU Year 2 100% identical | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-3/english` | 200 | Year 3 English Tutoring in Australia (1) | Year 3 English Tutoring Online Australia \| TutorExel (52) | Live online Year 3 English tutoring aligned to the Australian Curriculum. Reading, writing, spelling and grammar built for NAPLAN. Book a free trial class. (155) | Self (`https://www.tutorexel.com/subjects/year-3/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US English retained; AU Year 2 100% identical | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-3/science` | 200 | Year 3 Science Tutoring in Australia (1) | Year 3 Science Tutoring Online Australia \| TutorExel (52) | Live online Year 3 science tutoring aligned to the Australian Curriculum. Life cycles, soils, heat and states of matter in 40 sessions. Book a free trial. (154) | Self (`https://www.tutorexel.com/subjects/year-3/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US Science retained; AU Year 2 100% identical | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |

---

## AU Year 4 Content Update (Maths, English, Science)

### Note on Science Keep Exploring Card
In accordance with instructions, Science Keep Exploring card 1 points to `/subjects/year-4/english` with the title "Year 4 English" and matching description text (the source doc listed Maths for Science which is redundant on a science page cross-linking to another subject, pending confirmation from the content team). Card 2 points to `/pricing` on all three pages.

### Verification Summary Table

| Page | HTTP | H1 (Exact, Count=1) | Title (Chars <= 60) | Description (Chars 150 to 160) | Canonical | Topics & Terms in Raw HTML | Dash Check | Links Status | US/CA/NZ & AU Y2/Y3 Parity | Robots & Sitemap | OpenGraph & Twitter | Hreflang & Reciprocal | JSON-LD Schemas |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/subjects/year-4/maths` | 200 | Year 4 Maths Tutoring in Australia (1) | Year 4 Maths Tutoring Online Australia \| TutorExel (50) | Live online Year 4 maths tutoring aligned to the Australian Curriculum. Decimals, fractions and times tables for Year 5 NAPLAN. Book a free trial class. (152) | Self (`https://www.tutorexel.com/subjects/year-4/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US Math retained; AU Year 2 and Year 3 100% identical | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-4/english` | 200 | Year 4 English Tutoring in Australia (1) | Year 4 English Tutoring Online Australia \| TutorExel (52) | Live online Year 4 English tutoring aligned to the Australian Curriculum. Reading, writing, grammar and spelling for Year 5 NAPLAN. Book a free trial class. (156) | Self (`https://www.tutorexel.com/subjects/year-4/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US English retained; AU Year 2 and Year 3 100% identical | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-4/science` | 200 | Year 4 Science Tutoring in Australia (1) | Year 4 Science Tutoring Online Australia \| TutorExel (52) | Live online Year 4 science tutoring aligned to the Australian Curriculum. Food chains, the water cycle, forces and materials in 40 sessions. Book a free trial. (159) | Self (`https://www.tutorexel.com/subjects/year-4/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | Unchanged HTML structure; US Science retained; AU Year 2 and Year 3 100% identical | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |

---

## AU Years 5 to 10 Content Update (Maths, English, Science)

### Metadata Alignment
All 18 titles and descriptions from the source markdown files (docs/au-year-5.md through docs/au-year-10.md) met length constraints (titles 49 to 53 characters, descriptions 151 to 158 characters) and are exact matches to the source Meta sections with 0 wording changes and 0 duplicates.

### Verification Summary Table

| Page | HTTP | H1 (Exact, Count=1) | Title (Chars <= 60) | Description (Chars 150 to 160) | Canonical | Topics & Terms in Raw HTML | Dash Check | Links Status | Hreflang & Reciprocal | Robots & Sitemap | OpenGraph & Twitter | JSON-LD Schemas |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/subjects/year-5/maths` | 200 | Year 5 Maths Tutoring in Australia (1) | Year 5 Maths Tutoring Online Australia \| TutorExel (50) | Live online Year 5 maths tutoring aligned to the Australian Curriculum. Decimals to thousandths, fractions and percentages for NAPLAN. Book a free trial. (153) | Self (`https://www.tutorexel.com/subjects/year-5/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-5/english` | 200 | Year 5 English Tutoring in Australia (1) | Year 5 English Tutoring Online Australia \| TutorExel (52) | Live online Year 5 English tutoring aligned to the Australian Curriculum. Reading, persuasive writing, grammar and spelling for NAPLAN. Book a free trial. (154) | Self (`https://www.tutorexel.com/subjects/year-5/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-5/science` | 200 | Year 5 Science Tutoring in Australia (1) | Year 5 Science Tutoring Online Australia \| TutorExel (52) | Live online Year 5 science tutoring aligned to the Australian Curriculum. Adaptations, erosion, light and states of matter in 40 sessions. Book a free trial. (157) | Self (`https://www.tutorexel.com/subjects/year-5/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-6/maths` | 200 | Year 6 Maths Tutoring in Australia (1) | Year 6 Maths Tutoring Online Australia \| TutorExel (50) | Live online Year 6 maths tutoring aligned to the Australian Curriculum. Integers, fractions, percentages and algebra for Year 7. Book a free trial class. (153) | Self (`https://www.tutorexel.com/subjects/year-6/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-6/english` | 200 | Year 6 English Tutoring in Australia (1) | Year 6 English Tutoring Online Australia \| TutorExel (52) | Live online Year 6 English tutoring aligned to the Australian Curriculum. Essay writing, grammar and reading analysis for Year 7. Book a free trial class. (155) | Self (`https://www.tutorexel.com/subjects/year-6/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-6/science` | 200 | Year 6 Science Tutoring in Australia (1) | Year 6 Science Tutoring Online Australia \| TutorExel (52) | Live online Year 6 science tutoring aligned to the Australian Curriculum. Habitats, Earth and space, circuits and chemical change. Book a free trial class. (155) | Self (`https://www.tutorexel.com/subjects/year-6/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-7/maths` | 200 | Year 7 Maths Tutoring in Australia (1) | Year 7 Maths Tutoring Online Australia \| TutorExel (50) | Live online Year 7 maths tutoring aligned to the Australian Curriculum. Integers, ratios, algebra, percentages and NAPLAN numeracy skills. Book a free trial. (157) | Self (`https://www.tutorexel.com/subjects/year-7/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-7/english` | 200 | Year 7 English Tutoring in Australia (1) | Year 7 English Tutoring Online Australia \| TutorExel (52) | Live online Year 7 English tutoring aligned to the Australian Curriculum. Analytical writing, literature, grammar and NAPLAN skills. Book a free trial class. (158) | Self (`https://www.tutorexel.com/subjects/year-7/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-7/science` | 200 | Year 7 Science Tutoring in Australia (1) | Year 7 Science Tutoring Online Australia \| TutorExel (52) | Live online Year 7 science tutoring aligned to the Australian Curriculum. Classification, ecosystems, forces and particle theory. Book a free trial class. (154) | Self (`https://www.tutorexel.com/subjects/year-7/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU, en-US, en-CA, en-NZ, x-default (all 200, reciprocal) | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-8/maths` | 200 | Year 8 Maths Tutoring in Australia (1) | Year 8 Maths Tutoring Online Australia \| TutorExel (50) | Live online Year 8 maths tutoring aligned to the Australian Curriculum. Integers, linear algebra, Pythagoras, ratios and probability. Book a free trial. (151) | Self (`https://www.tutorexel.com/subjects/year-8/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-8/english` | 200 | Year 8 English Tutoring in Australia (1) | Year 8 English Tutoring Online Australia \| TutorExel (52) | Live online Year 8 English tutoring aligned to the Australian Curriculum. Analytical reading, persuasive writing and literature. Book a free trial class. (153) | Self (`https://www.tutorexel.com/subjects/year-8/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-8/science` | 200 | Year 8 Science Tutoring in Australia (1) | Year 8 Science Tutoring Online Australia \| TutorExel (52) | Live online Year 8 science tutoring aligned to the Australian Curriculum. Cells, organ systems, plate tectonics, energy and matter. Book a free trial class. (155) | Self (`https://www.tutorexel.com/subjects/year-8/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-9/maths` | 200 | Year 9 Maths Tutoring in Australia (1) | Year 9 Maths Tutoring Online Australia \| TutorExel (50) | Live online Year 9 maths tutoring aligned to the Australian Curriculum. Quadratics, trigonometry, exponents and probability for NAPLAN. Book a free trial. (154) | Self (`https://www.tutorexel.com/subjects/year-9/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-9/english` | 200 | Year 9 English Tutoring in Australia (1) | Year 9 English Tutoring Online Australia \| TutorExel (52) | Live online Year 9 English tutoring aligned to the Australian Curriculum. Analytical writing, representation and NAPLAN writing. Book a free trial class. (154) | Self (`https://www.tutorexel.com/subjects/year-9/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-9/science` | 200 | Year 9 Science Tutoring in Australia (1) | Year 9 Science Tutoring Online Australia \| TutorExel (52) | Live online Year 9 science tutoring aligned to the Australian Curriculum. Body regulation, the carbon cycle, atoms and chemical reactions. Book a free trial. (157) | Self (`https://www.tutorexel.com/subjects/year-9/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-10/maths` | 200 | Year 10 Maths Tutoring in Australia (1) | Year 10 Maths Tutoring Online Australia \| TutorExel (51) | Live online Year 10 maths tutoring aligned to the Australian Curriculum. Simultaneous equations, trigonometry and senior pathways. Book a free trial class. (155) | Self (`https://www.tutorexel.com/subjects/year-10/maths`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-10/english` | 200 | Year 10 English Tutoring in Australia (1) | Year 10 English Tutoring Online Australia \| TutorExel (53) | Live online Year 10 English tutoring aligned to the Australian Curriculum. Sustained argument, literary analysis and senior pathways. Book a free trial. (152) | Self (`https://www.tutorexel.com/subjects/year-10/english`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |
| `/subjects/year-10/science` | 200 | Year 10 Science Tutoring in Australia (1) | Year 10 Science Tutoring Online Australia \| TutorExel (53) | Live online Year 10 science tutoring aligned to the Australian Curriculum. Genetics, evolution, the Big Bang, Newton's laws and chemistry. Book a free trial. (157) | Self (`https://www.tutorexel.com/subjects/year-10/science`) | 40 / 40 topics, 4 / 4 term headings | 0 em-dashes, 0 en-dashes | All links 200, 0 broken, 0 redirects | en-AU (self), x-default (AU root URL) only | Indexable, present in sitemap.xml | og:title/desc match; og:url match; og:locale en_AU; html lang en-AU | 1 Organization; Breadcrumbs on root domain; Course priceCurrency AUD, inLanguage en-AU; 0 AggregateRating/Review |

### Regression Check Results

1. **AU Years 2, 3 and 4 Pages**:
   - `/subjects/year-2/maths`: HTTP 200, H1 "Year 2 Maths Tutoring in Australia", rendered HTML structure completely unchanged.
   - `/subjects/year-3/maths`: HTTP 200, H1 "Year 3 Maths Tutoring in Australia", rendered HTML structure completely unchanged.
   - `/subjects/year-4/maths`: HTTP 200, H1 "Year 4 Maths Tutoring in Australia", rendered HTML structure completely unchanged.

2. **Foreign Region Pages (Years 5, 6 and 7)**:
   - `/us/subjects/year-5/maths`, `/us/subjects/year-6/maths`, `/us/subjects/year-7/maths`: HTTP 200, US Grade structure unchanged.
   - `/ca/subjects/year-5/maths`, `/ca/subjects/year-6/maths`, `/ca/subjects/year-7/maths`: HTTP 200, Canada Grade structure unchanged.
   - `/nz/subjects/year-5/maths`, `/nz/subjects/year-6/maths`, `/nz/subjects/year-7/maths`: HTTP 200, NZ Year structure unchanged.

3. **Foreign Region Isolation (Years 8, 9 and 10)**:
   - All 36 URLs tested across US, CA, and NZ (/subjects/year-8/*, /year-9/*, /year-10/* across maths, english, science and practice test routes) return HTTP 404 cleanly.

4. **AU Home Page**:
   - `/`: HTTP 200, single H1, exact content unchanged.

5. **Sitemap Integrity**:
   - Sitemap `/sitemap.xml`: Contains exactly 27 AU `/subjects/year-*` URLs (covering Years 2 through 10 across Maths, English, Science).
   - Zero redirecting or broken URLs found.

---

## AU Co-Curricular (Music Hub, Piano, Guitar) Content Update

Date: 2026-10-03
Routes: `/co-curricular`, `/co-curricular/piano`, `/co-curricular/guitar`
Source Content: `docs/au-co-curricular.md`

### Button Destinations

All buttons use `RegionLink` or `getRegionalHref`. The final destination of every button on the Australian co-curricular pages is listed below:

#### 1. Co-Curricular Hub (`/co-curricular`)
- Hero Primary Button: "Book a Free Trial Lesson" -> `/free-trial`
- Hero Secondary Button: "Join Now" -> `/enroll`
- Subject Card Piano Button: "Explore Piano Lessons" -> `/co-curricular/piano`
- Subject Card Guitar Button: "Explore Guitar Lessons" -> `/co-curricular/guitar`
- Syllabus Card Button: "Explore Piano Lessons" -> `/co-curricular/piano`
- Syllabus Card Button: "Explore Guitar Lessons" -> `/co-curricular/guitar`
- Next Steps Card 1 Button: "Book Online Now" -> `/free-trial`
- Next Steps Card 2 Button: "Book Free Assessment" -> `/free-assessment`
- Next Steps Card 3 Button: "Contact Us" -> `/contact`
- Final CTA Primary Button: "Book a Free Trial Lesson" -> `/free-trial`
- Final CTA Secondary Button: "Join Now" -> `/enroll`
- Australian WhatsApp Link: "Chat on WhatsApp" -> `https://wa.me/61470330548`

#### 2. Piano Lessons Page (`/co-curricular/piano`)
- Hero Primary Button: "Book Your Free Trial Lesson" -> `/co-curricular/piano/enquire`
- Hero Secondary Button: "Join Now" -> `/enroll`
- Mid-Page Assessment Card Button: "Book Free Assessment" -> `/free-assessment`
- Mid-Page Contact Card Button: "Contact Us" -> `/contact`
- Final CTA Primary Button: "Book Your Free Trial Lesson" -> `/co-curricular/piano/enquire`
- Final CTA Secondary Button: "Join Now" -> `/enroll`
- Australian WhatsApp Link: "Chat on WhatsApp" -> `https://wa.me/61470330548`
- Floating Action Button: "Book Free Assessment" -> `/free-assessment`

#### 3. Guitar Lessons Page (`/co-curricular/guitar`)
- Hero Primary Button: "Book Your Free Trial Lesson" -> `/co-curricular/guitar/enquire`
- Hero Secondary Button: "Join Now" -> `/enroll`
- Mid-Page Assessment Card Button: "Book Free Assessment" -> `/free-assessment`
- Mid-Page Contact Card Button: "Contact Us" -> `/contact`
- Final CTA Primary Button: "Book Your Free Trial Lesson" -> `/co-curricular/guitar/enquire`
- Final CTA Secondary Button: "Join Now" -> `/enroll`
- Australian WhatsApp Link: "Chat on WhatsApp" -> `https://wa.me/61470330548`
- Floating Action Button: "Book Free Assessment" -> `/free-assessment`

### Metadata Alignment
All 3 titles and descriptions from `docs/au-co-curricular.md` Meta sections are exact matches with 0 changes and 0 duplicates:
- `/co-curricular`: Title "Online Music Lessons Australia | Piano, Guitar | TutorExel" (59 chars, <= 60 limit), Description "Live one-on-one online music lessons in Australia. Trinity College London syllabus for piano and guitar, Grade Initial to Grade 8. Book your free trial class." (159 chars, in 150 to 160 range).
- `/co-curricular/piano`: Title "Online Piano Lessons Australia | Trinity Grades | TutorExel" (59 chars, <= 60 limit), Description "Online piano lessons across Australia for Grade Initial to Grade 8 Trinity College London exams. One-on-one live classes from home. Book your free trial lesson." (160 chars, in 150 to 160 range).
- `/co-curricular/guitar`: Title "Online Guitar Lessons Australia | Trinity Grades | TutorExel" (60 chars, <= 60 limit), Description "Live online guitar lessons across Australia. Classical, plectrum and acoustic guitar for Trinity College London grades from home. Book your free trial lesson." (157 chars, in 150 to 160 range).

### Verification Summary Table

| Page | HTTP | H1 (Exact, Count=1) | Title (Chars <= 60) | Description (Chars 150 to 160) | Canonical | Robots & Sitemap | OpenGraph & Twitter | Hreflang & Reciprocal | JSON-LD Schemas | Dash Check | Links Status | Foreign Region Parity |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/co-curricular` | 200 | Learn Music from Home Across Australia (1) | Online Music Lessons Australia \| Piano, Guitar \| TutorExel (59) | Live one-on-one online music lessons in Australia. Trinity College London syllabus for piano and guitar, Grade Initial to Grade 8. Book your free trial class. (159) | Self (`https://www.tutorexel.com/co-curricular`) | Indexable, present in sitemap.xml | og:title/desc and twitter:title/desc match; og:url equals canonical; og:locale en_AU; html lang en-AU | en-AU (self), en-US, en-CA, en-NZ, x-default (AU); reciprocal 200 on all foreign pages | 1 Organization; BreadcrumbList on root domain (`Home > Co-Curricular`); 0 AggregateRating/Review; 0 Course schema with price | 0 em-dashes, 0 en-dashes | All buttons and links return HTTP 200 directly; 0 broken links; 0 redirects | US, CA, and NZ `/co-curricular` rendered HTML completely unchanged |
| `/co-curricular/piano` | 200 | Online Piano Lessons in Australia, Trinity College London Syllabus (1) | Online Piano Lessons Australia \| Trinity Grades \| TutorExel (59) | Online piano lessons across Australia for Grade Initial to Grade 8 Trinity College London exams. One-on-one live classes from home. Book your free trial lesson. (160) | Self (`https://www.tutorexel.com/co-curricular/piano`) | Indexable, present in sitemap.xml | og:title/desc and twitter:title/desc match; og:url equals canonical; og:locale en_AU; html lang en-AU | en-AU (self), en-US, en-CA, en-NZ, x-default (AU); reciprocal 200 on all foreign pages | 1 Organization; BreadcrumbList on root domain (`Home > Co-Curricular > Piano`); 0 AggregateRating/Review; 0 Course schema with price | 0 em-dashes, 0 en-dashes | All buttons and links return HTTP 200 directly; 0 broken links; 0 redirects | US, CA, and NZ `/co-curricular/piano` rendered HTML completely unchanged |
| `/co-curricular/guitar` | 200 | Online Guitar Lessons in Australia, Trinity College London Syllabus (1) | Online Guitar Lessons Australia \| Trinity Grades \| TutorExel (60) | Live online guitar lessons across Australia. Classical, plectrum and acoustic guitar for Trinity College London grades from home. Book your free trial lesson. (157) | Self (`https://www.tutorexel.com/co-curricular/guitar`) | Indexable, present in sitemap.xml | og:title/desc and twitter:title/desc match; og:url equals canonical; og:locale en_AU; html lang en-AU | en-AU (self), en-US, en-CA, en-NZ, x-default (AU); reciprocal 200 on all foreign pages | 1 Organization; BreadcrumbList on root domain (`Home > Co-Curricular > Guitar`); 0 AggregateRating/Review; 0 Course schema with price | 0 em-dashes, 0 en-dashes | All buttons and links return HTTP 200 directly; 0 broken links; 0 redirects | US, CA, and NZ `/co-curricular/guitar` rendered HTML completely unchanged |

### Regression Check Results

1. **Foreign Region Parity (/us, /ca, /nz)**:
   - `/us/co-curricular`, `/ca/co-curricular`, `/nz/co-curricular`: HTTP 200, HTML structure and content completely unchanged.
   - `/us/co-curricular/piano`, `/ca/co-curricular/piano`, `/nz/co-curricular/piano`: HTTP 200, HTML structure and content completely unchanged.
   - `/us/co-curricular/guitar`, `/ca/co-curricular/guitar`, `/nz/co-curricular/guitar`: HTTP 200, HTML structure and content completely unchanged.
   - Foreign regions show no Australian WhatsApp links or AU phone numbers.
   - Foreign region pages list the reciprocal `en-AU` link pointing back to `https://www.tutorexel.com/co-curricular...`.

2. **Australian Home and Academic Pages Unchanged**:
   - AU Home page (`/`): HTTP 200, exactly 1 H1, content unchanged.
   - AU Year 2 to 10 Subject Pages (e.g. `/subjects/year-2/maths`): HTTP 200, exactly 1 H1, curriculum tables and content unchanged.
   - Co-curricular enquiry routes (`/co-curricular/piano/enquire` and `/co-curricular/guitar/enquire`): HTTP 200, forms intact and untouched.

---

## Hreflang Configuration: Self-Only Mode

Date: 2026-10-03
Scope: All routes across all regions (AU root, `/us`, `/ca`, `/nz`) and `sitemap.xml`

### Implementation Summary
1. Added `export const HREFLANG_MODE: "cluster" | "self" = "self";` in `src/data/page-availability.ts`.
2. Updated `getRegionalAlternates` in `src/utils/seo.ts`:
   - When `HREFLANG_MODE === "self"`: each page emits exactly one hreflang for its own region and canonical URL (`en-AU` on AU, `en-US` under `/us`, `en-CA` under `/ca`, `en-NZ` under `/nz`), with zero other region URLs and no `x-default`.
   - When `HREFLANG_MODE === "cluster"`: preserves full previous behavior (reciprocal alternates across available regions plus `x-default`).
3. Updated `sitemap.ts`:
   - When `HREFLANG_MODE === "self"`: each entry in `sitemap.xml` emits exactly one alternate matching its own region URL and locale, without `x-default`.
   - When `HREFLANG_MODE === "cluster"`: preserves full previous cluster alternates.
4. Preserved: canonical URLs, `og:locale` format (using underscore), `html lang` format (using hyphen), and robots meta directives.

### One-Line Restore Instruction
To restore the previous cluster hreflang behavior across all pages and sitemap, edit `src/data/page-availability.ts`:
```ts
export const HREFLANG_MODE: "cluster" | "self" = "cluster";
```

### Production Build Verification Results

- Total URLs in `sitemap.xml` checked: 202
- Hreflang tag count: 202 / 202 pages emit exactly 1 hreflang tag (100% PASS).
- Hreflang locale accuracy: 202 / 202 match region (`en-AU`, `en-US`, `en-CA`, `en-NZ`) with 0 underscores (100% PASS).
- Hreflang href parity: 202 / 202 match the page's canonical URL exactly (100% PASS).
- Elimination of x-default: 202 / 202 pages have zero `x-default` tags (100% PASS).
- Sitemap alternate parity: 202 / 202 sitemap entries match on-page tags exactly in href and hreflang (100% PASS).
- HTML lang attribute: 202 / 202 pages output proper regional hyphenated lang (`en-AU`, `en-US`, `en-CA`, `en-NZ`) (100% PASS).
- OpenGraph locale:
  - 178 / 202 static and subject pages output regional `og:locale` (`en_AU`, `en_US`, `en_CA`, `en_NZ`) (PASS).
  - 24 / 202 blog article pages retain existing hardcoded `og:locale` of "en" in their respective slug handlers (preserved per instruction 3 to leave og:locale unchanged).
- Failures on hreflang / canonical / sitemap alternates: 0


---

## Blog Metadata, Explicit Robots Tag, and Image Alt Verification Report

Date: 2026-10-03
Scope: All routes across all regions (AU root, /us, /ca, /nz), sitemap.xml, blog handlers, and image accessibility.

### 1. Robots Meta Tag Verification

- Total Public Sitemap URLs Checked: 202
  - Exactly one <meta name="robots" content="index, follow">: 202 / 202 (100% PASS)
  - Exactly one <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1">: 202 / 202 (100% PASS)
  - Duplicate or conflicting robots tags: 0 (100% PASS)
- Private and Sample URLs Checked: 27
  - Routes: /enroll, /login, /thank-you, /free-trial-booking/thank-you, /careers/apply, /home-v1 (in AU, /us, /ca, /nz) plus /us/blog/sample-article-us, /ca/blog/sample-article-ca, /nz/blog/sample-article-nz
  - Exactly one <meta name="robots" content="noindex, follow">: 27 / 27 (100% PASS)
  - Googlebot meta tag omitted: 27 / 27 (100% PASS)
  - Excluded from sitemap.xml: 27 / 27 (100% PASS)

### 2. Blog Posts Audit Table

| Region | Slug | Title | Canonical | Robots | og:locale | og:url | Hreflang Count | BlogPosting Schema? | datePublished | dateModified | inLanguage |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CA | how-online-math-tutoring-helps-canadian-students-excel | How Online Math Tutoring Helps Canadian Students Excel | TutorExel | https://www.tutorexel.com/ca/blog/how-online-math-tutoring-helps-canadian-students-excel | index, follow | en_CA | https://www.tutorexel.com/ca/blog/how-online-math-tutoring-helps-canadian-students-excel | 1 | Yes | 2026-09-23 | 2026-09-23 | en-CA |
| CA | grade-6-math-tutoring-in-ontario | Grade 6 Math Tutoring in Ontario | Online EQAO Prep | TutorExel | https://www.tutorexel.com/ca/blog/grade-6-math-tutoring-in-ontario | index, follow | en_CA | https://www.tutorexel.com/ca/blog/grade-6-math-tutoring-in-ontario | 1 | Yes | 2026-09-23 | 2026-09-23 | en-CA |
| AU | affordable-flexible-from-home-why-parents-love-tutorexel | Affordable, Flexible, and From Home  -  Why Parents Love TutorExel | TutorExel | https://www.tutorexel.com/blog/affordable-flexible-from-home-why-parents-love-tutorexel | index, follow | en_AU | https://www.tutorexel.com/blog/affordable-flexible-from-home-why-parents-love-tutorexel | 1 | Yes | 2025-03-04 | 2025-03-04 | en-AU |
| AU | benefits-of-group-classes-collaborative-learning | The Benefits of Group Classes and Collaborative Learning | TutorExel | https://www.tutorexel.com/blog/benefits-of-group-classes-collaborative-learning | index, follow | en_AU | https://www.tutorexel.com/blog/benefits-of-group-classes-collaborative-learning | 1 | Yes | 2025-01-14 | 2025-01-14 | en-AU |
| AU | beyond-class-hours-extra-practice-independent-learners | Beyond Class Hours  -  How Extra Practice Builds Independent Learners | TutorExel | https://www.tutorexel.com/blog/beyond-class-hours-extra-practice-independent-learners | index, follow | en_AU | https://www.tutorexel.com/blog/beyond-class-hours-extra-practice-independent-learners | 1 | Yes | 2025-02-09 | 2025-02-09 | en-AU |
| AU | every-4th-class-counts-regular-tests-make-learning-stick | Every 4th Class Counts  -  Why Regular Tests Make Learning Stick | TutorExel | https://www.tutorexel.com/blog/every-4th-class-counts-regular-tests-make-learning-stick | index, follow | en_AU | https://www.tutorexel.com/blog/every-4th-class-counts-regular-tests-make-learning-stick | 1 | Yes | 2025-02-09 | 2025-02-09 | en-AU |
| AU | how-tutorexel-works-diagnostic-test-learning-plan | How TutorExel Works: From Free Diagnostic Test to Tailored Learning Plan | TutorExel | https://www.tutorexel.com/blog/how-tutorexel-works-diagnostic-test-learning-plan | index, follow | en_AU | https://www.tutorexel.com/blog/how-tutorexel-works-diagnostic-test-learning-plan | 1 | Yes | 2024-12-19 | 2024-12-19 | en-AU |
| AU | introducing-tutorexel-personalised-online-tutoring | Introducing TutorExel: Personalised Online Tutoring for Students | TutorExel | https://www.tutorexel.com/blog/introducing-tutorexel-personalised-online-tutoring | index, follow | en_AU | https://www.tutorexel.com/blog/introducing-tutorexel-personalised-online-tutoring | 1 | Yes | 2024-12-19 | 2024-12-19 | en-AU |
| AU | keeping-tutoring-stress-free-health-learning-screen-time | Keeping Tutoring Stress-Free: Balancing Health, Learning, and Screen Time | TutorExel | https://www.tutorexel.com/blog/keeping-tutoring-stress-free-health-learning-screen-time | index, follow | en_AU | https://www.tutorexel.com/blog/keeping-tutoring-stress-free-health-learning-screen-time | 1 | Yes | 2025-01-14 | 2025-01-14 | en-AU |
| AU | monthly-report-cards-help-parents-track-progress | How Our Monthly Report Cards Help Parents Track Real Progress | TutorExel | https://www.tutorexel.com/blog/monthly-report-cards-help-parents-track-progress | index, follow | en_AU | https://www.tutorexel.com/blog/monthly-report-cards-help-parents-track-progress | 1 | Yes | 2025-01-14 | 2025-01-14 | en-AU |
| AU | one-login-zero-hassle-all-in-one-portal | One Login, Zero Hassle  -  Why Parents Love Our All-in-One Portal | TutorExel | https://www.tutorexel.com/blog/one-login-zero-hassle-all-in-one-portal | index, follow | en_AU | https://www.tutorexel.com/blog/one-login-zero-hassle-all-in-one-portal | 1 | Yes | 2025-03-04 | 2025-03-04 | en-AU |
| AU | one-on-one-vs-small-group-tutoring | One-on-One vs. Small Group Tutoring  -  Helping Parents Choose What’s Best | TutorExel | https://www.tutorexel.com/blog/one-on-one-vs-small-group-tutoring | index, follow | en_AU | https://www.tutorexel.com/blog/one-on-one-vs-small-group-tutoring | 1 | Yes | 2025-03-04 | 2025-03-04 | en-AU |
| AU | online-tutoring-vs-traditional-tutoring | Online Tutoring vs Traditional Tutoring: Which Works Best for Today’s Students? | TutorExel | https://www.tutorexel.com/blog/online-tutoring-vs-traditional-tutoring | index, follow | en_AU | https://www.tutorexel.com/blog/online-tutoring-vs-traditional-tutoring | 1 | Yes | 2025-01-14 | 2025-01-14 | en-AU |
| AU | open-books-open-learning-transparency-at-tutorexel | Open Books, Open Learning  -  Why Transparency Matters at TutorExel | TutorExel | https://www.tutorexel.com/blog/open-books-open-learning-transparency-at-tutorexel | index, follow | en_AU | https://www.tutorexel.com/blog/open-books-open-learning-transparency-at-tutorexel | 1 | Yes | 2025-02-09 | 2025-02-09 | en-AU |
| AU | parents-guide-choosing-right-online-tutor | A Parent’s Guide: Choosing the Right Online Tutor for Your Child | TutorExel | https://www.tutorexel.com/blog/parents-guide-choosing-right-online-tutor | index, follow | en_AU | https://www.tutorexel.com/blog/parents-guide-choosing-right-online-tutor | 1 | Yes | 2025-01-14 | 2025-01-14 | en-AU |
| AU | parents-guide-how-tutorexel-keeps-you-informed | A Parent’s Guide to Clarity  -  How TutorExel Keeps You Informed About Your Child’s Learning | TutorExel | https://www.tutorexel.com/blog/parents-guide-how-tutorexel-keeps-you-informed | index, follow | en_AU | https://www.tutorexel.com/blog/parents-guide-how-tutorexel-keeps-you-informed | 1 | Yes | 2025-02-09 | 2025-02-09 | en-AU |
| AU | personalised-tutoring-builds-confidence-not-just-grades | Why Personalised Tutoring Builds Confidence, Not Just Grades | TutorExel | https://www.tutorexel.com/blog/personalised-tutoring-builds-confidence-not-just-grades | index, follow | en_AU | https://www.tutorexel.com/blog/personalised-tutoring-builds-confidence-not-just-grades | 1 | Yes | 2024-12-19 | 2024-12-19 | en-AU |
| AU | risk-free-tutoring-free-trial-refund-policy | Risk-Free Tutoring  -  How Our Free Trial and Refund Policy Build Parent Trust | TutorExel | https://www.tutorexel.com/blog/risk-free-tutoring-free-trial-refund-policy | index, follow | en_AU | https://www.tutorexel.com/blog/risk-free-tutoring-free-trial-refund-policy | 1 | Yes | 2025-03-04 | 2025-03-04 | en-AU |
| AU | stress-to-strategy-naplan-icas-prep-saves-time | From Stress to Strategy  -  How Built-In NAPLAN &amp; ICAS Prep Saves Parents Time | TutorExel | https://www.tutorexel.com/blog/stress-to-strategy-naplan-icas-prep-saves-time | index, follow | en_AU | https://www.tutorexel.com/blog/stress-to-strategy-naplan-icas-prep-saves-time | 1 | Yes | 2025-03-04 | 2025-03-04 | en-AU |
| AU | strong-foundations-first-dont-rush-learning | Strong Foundations First  -  Why We Don’t Rush Learning at TutorExel | TutorExel | https://www.tutorexel.com/blog/strong-foundations-first-dont-rush-learning | index, follow | en_AU | https://www.tutorexel.com/blog/strong-foundations-first-dont-rush-learning | 1 | Yes | 2025-02-09 | 2025-02-09 | en-AU |
| AU | tutorexel-approach-structured-lessons-worksheets | The TutorExel Approach: Structured Lessons, Worksheets, and Personal Guidance | TutorExel | https://www.tutorexel.com/blog/tutorexel-approach-structured-lessons-worksheets | index, follow | en_AU | https://www.tutorexel.com/blog/tutorexel-approach-structured-lessons-worksheets | 1 | Yes | 2024-12-19 | 2024-12-19 | en-AU |
| AU | tutorexel-online-methodology-lms-interactive-learning | Inside TutorExel’s Online Methodology: How Our LMS Makes Learning Interactive | TutorExel | https://www.tutorexel.com/blog/tutorexel-online-methodology-lms-interactive-learning | index, follow | en_AU | https://www.tutorexel.com/blog/tutorexel-online-methodology-lms-interactive-learning | 1 | Yes | 2025-01-14 | 2025-01-14 | en-AU |
| AU | why-australian-students-need-more-than-school-support | Why Students Need More Than School Support in 2025 | TutorExel | https://www.tutorexel.com/blog/why-australian-students-need-more-than-school-support | index, follow | en_AU | https://www.tutorexel.com/blog/why-australian-students-need-more-than-school-support | 1 | Yes | 2024-12-19 | 2024-12-19 | en-AU |
| AU | why-national-assessments-matter-naplan-icas | Why National Assessments Matter (NAPLAN and ICAS) | TutorExel | https://www.tutorexel.com/blog/why-national-assessments-matter-naplan-icas | index, follow | en_AU | https://www.tutorexel.com/blog/why-national-assessments-matter-naplan-icas | 1 | Yes | 2024-12-19 | 2024-12-19 | en-AU |
| US | sample-article-us | Why US Students Need Personalized Math Support in 2025 | TutorExel | https://www.tutorexel.com/us/blog/sample-article-us | noindex, follow | en_US | https://www.tutorexel.com/us/blog/sample-article-us | 1 | Yes | 2026-09-24 | 2026-09-24 | en-US |
| CA | sample-article-ca | Why Canadian Students Need More Than Classroom Lessons in 2025 | TutorExel | https://www.tutorexel.com/ca/blog/sample-article-ca | noindex, follow | en_CA | https://www.tutorexel.com/ca/blog/sample-article-ca | 1 | Yes | 2026-09-24 | 2026-09-24 | en-CA |
| NZ | sample-article-nz | Why New Zealand Students Benefit from Extra Maths Support in 2025 | TutorExel | https://www.tutorexel.com/nz/blog/sample-article-nz | noindex, follow | en_NZ | https://www.tutorexel.com/nz/blog/sample-article-nz | 1 | Yes | 2026-09-24 | 2026-09-24 | en-NZ |

### 3. Content Team Action Items: Title and Description Length Adjustments

The following blog posts have titles longer than 60 characters or meta descriptions outside the recommended 150 to 160 character range. These should be reviewed by the content team in Sanity CMS:

| Region | Slug | Title Length | Title | Desc Length | Meta Description |
|---|---|---|---|---|---|
| CA | how-online-math-tutoring-helps-canadian-students-excel | 66 | How Online Math Tutoring Helps Canadian Students Excel | TutorExel | 139 | Discover how personalised online math tutoring supports Canadian students across every grade, from foundational skills to exam preparation. |
| CA | grade-6-math-tutoring-in-ontario | 63 | Grade 6 Math Tutoring in Ontario | Online EQAO Prep | TutorExel | 157 | Online Grade 6 math tutoring for Ontario students. Curriculum-aligned 1-on-1 lessons, EQAO preparation, and weekly progress reports. Book a free trial today. |
| AU | affordable-flexible-from-home-why-parents-love-tutorexel | 76 | Affordable, Flexible, and From Home  -  Why Parents Love TutorExel | TutorExel | 99 | Affordable pricing without lowering quality. Learn from home  -  safe, comfortable, no wasted travel. |
| AU | benefits-of-group-classes-collaborative-learning | 68 | The Benefits of Group Classes and Collaborative Learning | TutorExel | 163 | At TutorExel, we offer both one-to-one and group classes, because we know that every child benefits differently depending on their learning style and personality.  |
| AU | beyond-class-hours-extra-practice-independent-learners | 79 | Beyond Class Hours  -  How Extra Practice Builds Independent Learners | TutorExel | 115 | At TutorExel, each session includes: In-class worksheets for reinforcement. Take-home worksheets to apply concepts. |
| AU | every-4th-class-counts-regular-tests-make-learning-stick | 74 | Every 4th Class Counts  -  Why Regular Tests Make Learning Stick | TutorExel | 93 | A single “big test” approach may measure performance, but it doesn’t always support learning. |
| AU | how-tutorexel-works-diagnostic-test-learning-plan | 84 | How TutorExel Works: From Free Diagnostic Test to Tailored Learning Plan | TutorExel | 117 | At TutorExel, we know that no two children learn in exactly the same way. Some need more time to understand concepts, |
| AU | introducing-tutorexel-personalised-online-tutoring | 76 | Introducing TutorExel: Personalised Online Tutoring for Students | TutorExel | 75 | Welcome to TutorExel, your go-to platform for personalised online tutoring! |
| AU | keeping-tutoring-stress-free-health-learning-screen-time | 85 | Keeping Tutoring Stress-Free: Balancing Health, Learning, and Screen Time | TutorExel | 180 | We believe tutoring should never be a burden. Our model is designed to be structured yet flexible, ensuring children get the academic support they need without sacrificing health,  |
| AU | monthly-report-cards-help-parents-track-progress | 73 | How Our Monthly Report Cards Help Parents Track Real Progress | TutorExel | 110 | Many tutoring services provide worksheets, tests, and classes, but very few offer clear, consistent feedback.  |
| AU | one-login-zero-hassle-all-in-one-portal | 75 | One Login, Zero Hassle  -  Why Parents Love Our All-in-One Portal | TutorExel | 120 | If you’ve ever tried to keep track of your child’s learning across multiple platforms, you know how exhausting it can be |
| AU | one-on-one-vs-small-group-tutoring | 84 | One-on-One vs. Small Group Tutoring  -  Helping Parents Choose What’s Best | TutorExel | 139 | One-on-One Tutoring Strengths: personalised attention, flexible pace, gap-filling. Considerations: less peer interaction, can feel intense. |
| AU | online-tutoring-vs-traditional-tutoring | 91 | Online Tutoring vs Traditional Tutoring: Which Works Best for Today’s Students? | TutorExel | 191 | Tutoring has always played an important role in helping students catch up, stay on track, or excel beyond the classroom. Traditionally, tutoring meant sitting across the table from a teacher, |
| AU | open-books-open-learning-transparency-at-tutorexel | 77 | Open Books, Open Learning  -  Why Transparency Matters at TutorExel | TutorExel | 100 | TutorExel takes a different stand: education should be transparent. Lesson slides are always shared. |
| AU | parents-guide-choosing-right-online-tutor | 76 | A Parent’s Guide: Choosing the Right Online Tutor for Your Child | TutorExel | 202 | Every parent wants the best for their child’s education. Whether it’s catching up on missed concepts, preparing for NAPLAN or ICAS, or extending beyond the classroom, tutoring can make a big difference. |
| AU | parents-guide-how-tutorexel-keeps-you-informed | 102 | A Parent’s Guide to Clarity  -  How TutorExel Keeps You Informed About Your Child’s Learning | TutorExel | 190 | This is not because parents don’t care  -  but because communication often comes in fragments. Schools are stretched, and the real details of curriculum progress are rarely shared consistently |
| AU | personalised-tutoring-builds-confidence-not-just-grades | 72 | Why Personalised Tutoring Builds Confidence, Not Just Grades | TutorExel | 175 | When parents look for tutoring, the first thought is often: “I want my child’s marks to improve.” And while grades are important, they are only one part of the bigger picture. |
| AU | risk-free-tutoring-free-trial-refund-policy | 88 | Risk-Free Tutoring  -  How Our Free Trial and Refund Policy Build Parent Trust | TutorExel | 148 | Traditional tutoring often demands upfront payments, locking parents in before they even know if it’s the right fit. No wonder families feel nervous |
| AU | stress-to-strategy-naplan-icas-prep-saves-time | 92 | From Stress to Strategy  -  How Built-In NAPLAN &amp; ICAS Prep Saves Parents Time | TutorExel | 101 | The stress is real. Children feel pressured, parents feel helpless, and the cycle repeats every year. |
| AU | strong-foundations-first-dont-rush-learning | 78 | Strong Foundations First  -  Why We Don’t Rush Learning at TutorExel | TutorExel | 72 | Memorisation without understanding. Gaps that grow into major obstacles. |
| AU | tutorexel-approach-structured-lessons-worksheets | 89 | The TutorExel Approach: Structured Lessons, Worksheets, and Personal Guidance | TutorExel | 161 | Tutoring is not new, but the way it is delivered makes all the difference. Some students attend traditional coaching centres where classes are large and general. |
| AU | tutorexel-online-methodology-lms-interactive-learning | 89 | Inside TutorExel’s Online Methodology: How Our LMS Makes Learning Interactive | TutorExel | 150 | At TutorExel, we’ve built something different. Our Learning Management System (LMS) is at the heart of how we deliver lessons, practice, and feedback. |
| AU | why-australian-students-need-more-than-school-support | 62 | Why Students Need More Than School Support in 2025 | TutorExel | 171 | From national assessments like NAPLAN and ICAS to rapidly changing digital skills and higher academic competition, students need more than just classroom lessons to thrive |
| AU | why-national-assessments-matter-naplan-icas | 61 | Why National Assessments Matter (NAPLAN and ICAS) | TutorExel | 188 | For many families across Australia, NAPLAN and ICAS are more than just school tests. They are benchmarks that measure how well a student is performing compared to their peers and highlight |
| US | sample-article-us | 66 | Why US Students Need Personalized Math Support in 2025 | TutorExel | 157 | Discover why US elementary and middle school students need structured math tutoring beyond the classroom to succeed in state tests and Common Core standards. |
| CA | sample-article-ca | 74 | Why Canadian Students Need More Than Classroom Lessons in 2025 | TutorExel | 146 | Learn how Canadian elementary students benefit from personalized online math tutoring, provincial curriculum alignment, and EQAO test preparation. |
| NZ | sample-article-nz | 77 | Why New Zealand Students Benefit from Extra Maths Support in 2025 | TutorExel | 131 | Discover why New Zealand primary and intermediate students need structured maths tutoring to thrive under the refreshed curriculum. |

### 4. Image Verification on 12 Representative Pages

| Page | Path | Total Images | Descriptive Alt | Decorative (alt="") | Missing Alt Attribute | Status |
|---|---|---|---|---|---|---|
| AU home | / | 35 | 19 | 16 | 0 | PASS |
| AU year 5 | /year-5 | 6 | 6 | 0 | 0 | PASS |
| AU pricing | /pricing | 14 | 9 | 5 | 0 | PASS |
| AU piano | /co-curricular/piano | 15 | 9 | 6 | 0 | PASS |
| AU guitar | /co-curricular/guitar | 11 | 8 | 3 | 0 | PASS |
| AU contact | /contact | 11 | 7 | 4 | 0 | PASS |
| AU blog | /blog | 19 | 19 | 0 | 0 | PASS |
| AU post (affordable-flexible-from-home-why-parents-love-tutorexel) | /blog/affordable-flexible-from-home-why-parents-love-tutorexel | 11 | 11 | 0 | 0 | PASS |
| US home | /us | 32 | 12 | 20 | 0 | PASS |
| CA pricing | /ca/pricing | 14 | 9 | 5 | 0 | PASS |
| NZ guitar | /nz/co-curricular/guitar | 12 | 8 | 4 | 0 | PASS |
| US post (sample-article-us) | /us/blog/sample-article-us | 8 | 8 | 0 | 0 | PASS |

- Images with missing alt attribute across all tested pages: 0 (100% PASS)
- Decorative icons, background curves, stars and badges properly set to alt="" with aria-hidden="true".
- Brand logo alt tags verified as "TutorExel" across Header, Footer, and Links pages.

---

## Pre-Deploy Cleanup and Verification Pass (2026-10-03)

### Phase 1: Git Hygiene
- Added ignore rules to `.gitignore`: `*.tsbuildinfo`, `.vercel`, `coverage`, `*.log`, `*.tmp`, `.claude`.
- Removed tracked build cache and local databases from git cache (`git rm --cached tsconfig.tsbuildinfo`).
- Deleted legacy, duplicate, and empty files:
  - `docs/au-home (1).md` (duplicate file)
  - `scripts/inspect-post.mjs` (0-byte scratch script)
  - `wordpress-book-trial-snippet.html` (legacy snippet)
  - `wordpress-webhook-book-trial.js` (legacy script)
- Committed untracked AU content draft sources: `docs/au-co-curricular.md`, `docs/au-year-4.md` through `docs/au-year-10.md`, and `docs/PREDEPLOY-AUDIT.md`.
- Evaluated `.agents/`: Contains local project rules and workflow instructions (`tutorexel-rules.md`, `tutorexcel.md`). Left untracked per instructions.

### Phase 2: Admin and Crawlers
- Updated `src/app/robots.ts` to disallow `/admin` and `/admin/` for all user agents and Googlebot, preserving all existing disallows and sitemap host.
- Added `robots: { index: false, follow: false }` metadata via `src/app/(au)/admin/layout.tsx` to ensure all `/admin/*` pages emit `<meta name="robots" content="noindex, nofollow"/>`.

### Phase 3: Security Headers and Preview Noindex
- Configured HTTP security headers in `next.config.ts` for all routes (`/:path*`):
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Frame-Options: SAMEORIGIN`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- Added preview deployment guard in `src/middleware.ts`: When `process.env.VERCEL_ENV === "preview"`, the middleware attaches `X-Robots-Tag: noindex, nofollow` to the response. Production and local environments are unaffected.

### Phase 4: Environment Example and Lint Fixes
- Created `.env.example` with 28 required environment variable keys used in code, with empty values and one-line descriptions.
- Added `!.env.example` exception in `.gitignore`.
- Fixed all 10 `react/no-unescaped-entities` errors in `AboutView.tsx`, `ApplyView.tsx`, `PianoView.tsx`, and `SubjectsView.tsx` by escaping quotes with `&apos;` without changing visible copy.

### Phase 5: Verification Results
- `npx tsc --noEmit`: Exit code 0 (clean).
- `npm run check:meta`: Exit code 0 (PASS, all metadata valid, no dashes, correct lengths).
- `npm run build`: Exit code 0 (254 static/SSG pages generated).
- Production Server Header Verification:
  - `/`: 200, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
  - `/pricing`: 200, all 4 security headers confirmed.
  - `/api/debug/geo`: 401, all 4 security headers confirmed.
  - `/robots.txt`: 200, confirmed `/admin` and `/admin/` present in disallow lists.
  - `/admin/geo`: 200, `<meta name="robots" content="noindex, nofollow"/>` verified.
  - `/admin/coupon`: 200, `<meta name="robots" content="noindex, nofollow"/>` verified.
- Preview Environment Verification:
  - Run with `VERCEL_ENV=preview`: `X-Robots-Tag: noindex, nofollow` present on `/`.
  - Run without variable: `X-Robots-Tag` absent on `/`.
- Spot Check on Core Pages:
  - `/`: 200, canonical `https://www.tutorexel.com`, robots `index, follow`, hreflang `en-AU`.
  - `/subjects/year-3/maths`: 200, canonical `https://www.tutorexel.com/subjects/year-3/maths`, robots `index, follow`, hreflang `en-AU`.
  - `/us`: 200, canonical `https://www.tutorexel.com/us`, robots `index, follow`, hreflang `en-US`.
  - `/blog`: 200, canonical `https://www.tutorexel.com/blog`, robots `index, follow`, hreflang `en-AU`.
  - `/sitemap.xml`: 200, valid sitemap payload.
- Repository State:
  - `tsconfig.tsbuildinfo` and `submissions.json` untracked and ignored.
  - Recorded dead code and unused assets in `docs/CLEANUP-LATER.md`.

---

## Canada Content Update: Music Pages Button Destinations

### 1. Canada Co-Curricular Hub (/ca/co-curricular)
- Hero Primary CTA: "Book a Free Trial Lesson" -> `/ca/free-trial`
- Hero Secondary CTA: "Join Now" -> `/ca/enroll`
- Instrument Card 1: "Explore Piano Lessons" -> `/ca/co-curricular/piano`
- Instrument Card 2: "Explore Guitar Lessons" -> `/ca/co-curricular/guitar`
- Final CTA Button: "Book Online Now" -> `/ca/free-trial`
- Phone and WhatsApp: Omitted entirely (no Canadian phone or WhatsApp exists)

### 2. Canada Piano Page (/ca/co-curricular/piano)
- Hero Primary CTA: "Book Your Free Trial Lesson" -> `/ca/co-curricular/piano/enquire`
- Hero Secondary CTA: "Join Now" -> `/ca/enroll`
- Final CTA Primary Button: "Book Free Assessment" -> `/ca/free-assessment`
- Final CTA Secondary Button: "Contact Us" -> `/ca/contact`
- Testimonials Block: Omitted entirely (hidden on /ca)

### 3. Canada Guitar Page (/ca/co-curricular/guitar)
- Hero Primary CTA: "Book Your Free Trial Lesson" -> `/ca/co-curricular/guitar/enquire`
- Hero Secondary CTA: "Join Now" -> `/ca/enroll`
- Final CTA Primary Button: "Book Free Assessment" -> `/ca/free-assessment`
- Final CTA Secondary Button: "Contact Us" -> `/ca/contact`
- Testimonials Block: Omitted entirely (hidden on /ca)

---

## Canada Content Update: Phase 5 Verification Report

Date: 2026-10-04
Target Pages:
1. /ca (Canada Home)
2. /ca/co-curricular (Canada Music Hub)
3. /ca/co-curricular/piano (Canada Piano)
4. /ca/co-curricular/guitar (Canada Guitar)
5. /ca/subjects/year-2/maths (Grade 2 Math)
6. /ca/subjects/year-2/english (Grade 2 English)
7. /ca/subjects/year-2/science (Grade 2 Science)

### 1. Build and Static Generation
- Command: `npm run build`
- Result: Exit code 0 (254 static and SSG pages generated in 15.6s).
- All 7 Canadian target routes pre-rendered statically without build or type errors.

### 2. Comprehensive 7-Page Verification Table

| Route | Status | H1 Matches Doc | Title (<=60 chars) | Meta Desc (150-160 chars) | Canonical Self | Robots | OpenGraph Locale & Lang | Hreflang Tags | JSON-LD Schemas | Leak Scan Count | Phone / WhatsApp | Testimonials Block | Image Alts Missing | Topics & Terms in HTML |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/ca` | 200 | Yes (1 H1) | Yes (54 chars) | Yes (160 chars) | `https://www.tutorexel.com/ca` | `index, follow` | `en_CA` / `en-CA` | 1 (`en-CA`) | EducationalOrg (no phone), FAQPage | 0 | 0 | None (omitted) | 0 | N/A |
| `/ca/co-curricular` | 200 | Yes (1 H1) | Yes (58 chars) | Yes (156 chars) | `https://www.tutorexel.com/ca/co-curricular` | `index, follow` | `en_CA` / `en-CA` | 1 (`en-CA`) | EducationalOrg, Breadcrumbs | 0 | 0 | None (omitted) | 0 | N/A |
| `/ca/co-curricular/piano` | 200 | Yes (1 H1) | Yes (58 chars) | Yes (151 chars) | `https://www.tutorexel.com/ca/co-curricular/piano` | `index, follow` | `en_CA` / `en-CA` | 1 (`en-CA`) | EducationalOrg, Breadcrumbs | 0 | 0 | None (omitted) | 0 | N/A |
| `/ca/co-curricular/guitar` | 200 | Yes (1 H1) | Yes (59 chars) | Yes (152 chars) | `https://www.tutorexel.com/ca/co-curricular/guitar` | `index, follow` | `en_CA` / `en-CA` | 1 (`en-CA`) | EducationalOrg, Breadcrumbs | 0 | 0 | None (omitted) | 0 | N/A |
| `/ca/subjects/year-2/maths` | 200 | Yes (1 H1) | Yes (47 chars) | Yes (156 chars) | `https://www.tutorexel.com/ca/subjects/year-2/maths` | `index, follow` | `en_CA` / `en-CA` | 1 (`en-CA`) | EducationalOrg, Breadcrumbs, Course (CAD, en-CA) | 0 | 0 | None (omitted) | 0 | 40 topics, 4 terms |
| `/ca/subjects/year-2/english` | 200 | Yes (1 H1) | Yes (50 chars) | Yes (160 chars) | `https://www.tutorexel.com/ca/subjects/year-2/english` | `index, follow` | `en_CA` / `en-CA` | 1 (`en-CA`) | EducationalOrg, Breadcrumbs, Course (CAD, en-CA) | 0 | 0 | None (omitted) | 0 | 40 topics, 4 terms |
| `/ca/subjects/year-2/science` | 200 | Yes (1 H1) | Yes (50 chars) | Yes (160 chars) | `https://www.tutorexel.com/ca/subjects/year-2/science` | `index, follow` | `en_CA` / `en-CA` | 1 (`en-CA`) | EducationalOrg, Breadcrumbs, Course (CAD, en-CA) | 0 | 0 | None (omitted) | 0 | 40 topics, 4 terms |

### 3. Leak Scan Details
- Tested strings on rendered text: "Australian", "NAPLAN", "ACARA", "NSW", "AUD", "+61", "personalised", "programme", "Maths", "Year 2" or any "Year N", "SAT", "ACT", "["
- Result: 0 matches found across all 7 pages.
- Zero Australian phone numbers (+61, 1300, 1800) and zero WhatsApp links on all 7 pages.
- Zero em-dashes and zero en-dashes across all files and rendered output.

### 4. Link Integrity
- 38 unique internal links found on the 7 Canadian pages tested on live production build.
- 38 / 38 return HTTP status < 400 (0 broken links).

### 5. Regression Check
- AU Root (`/`): HTTP 200 (AU copy preserved).
- AU Subject (`/subjects/year-2/maths`): HTTP 200 (Australian curriculum preserved).
- AU Piano (`/co-curricular/piano`): HTTP 200 (AU copy and pricing preserved).
- US Root (`/us`): HTTP 200 (US copy preserved).
- US Subject (`/us/subjects/year-2/maths`): HTTP 200 (US copy preserved).
- US Piano (`/us/co-curricular/piano`): HTTP 200 (US copy preserved).
- NZ Root (`/nz`): HTTP 200 (NZ copy preserved).
- NZ Subject (`/nz/subjects/year-2/maths`): HTTP 200 (NZ copy preserved).
- NZ Piano (`/nz/co-curricular/piano`): HTTP 200 (NZ copy preserved).
- Canada Year 3 Math (`/ca/subjects/year-3/maths`): HTTP 200.

### 6. Sitemap and Robots
- `sitemap.xml`: HTTP 200, contains all 7 Canadian routes with `https://www.tutorexel.com` host.
- `robots.txt`: HTTP 200, allows all 7 Canadian routes (only disallowing `/ca/enroll`, `/ca/thank-you`, `/ca/careers/apply`, `/ca/free-trial-booking/thank-you`, and `/admin/`).

