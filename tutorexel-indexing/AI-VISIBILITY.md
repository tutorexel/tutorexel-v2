# TutorExel: AI search visibility (GEO) audit, 24 Oct 2026

Live checks on tutorexel.com, Google (AU/US/CA), Bing, Brave and Perplexity.

## 1. What decides whether an AI answer cites you

| Engine | Where it gets pages | What that means for TutorExel |
|---|---|---|
| Google AI Overviews / AI Mode | Google's normal index and ranking. Google says no special optimisation, schema or llms.txt is needed; the page must be indexed and eligible for a snippet. Uses query fan-out (many sub-queries). | Every page stuck in "Discovered, not indexed" cannot be cited. The indexing fixes come first. |
| ChatGPT search | OpenAI's own index (OAI-SearchBot) blended with external sources incl. Bing | Need OAI-SearchBot access and Bing indexing. |
| Microsoft Copilot | Bing | Bing indexing. |
| Claude | Brave Search (+ turbopuffer) | Brave indexing. |
| Perplexity | Own index (PerplexityBot) | PerplexityBot access, specific facts. |

Signals that drive citations across all of them:
1. Being indexed in each engine (Google, Bing, Brave) and ranking for the sub-queries.
2. Brand mentions on other sites: listicles, review platforms, Reddit, YouTube, directories. Mentions come from authority; citations come from depth.
3. Extractable specific facts: price per session in local currency, session length, group size, hours, contract terms, tutor qualifications. AI answers quote competitors' numbers (Tutero "$65/hr, no contracts", eTutorWorld "$27.80/session", Cluey "7am to 10pm, 7 days").
4. One consistent entity: same name, address, phone, founding facts and social profiles everywhere.
5. Real expertise: named authors with credentials, original data, cited sources.
6. Server-rendered, crawlable HTML (AI crawlers mostly do not run JavaScript).

## 2. TutorExel today

| Area | Status | Finding |
|---|---|---|
| Server-rendered content | OK | All page text is in the HTML (median 1,111 words); fast. |
| AI crawler access | Partly OK | AI bots fall under the `*` group, so allowed, but the explicit AI groups decided on 13 Oct are not live and `/_next/` is still blocked. Vercel Firewall bot rules not checked from here. |
| Google AI Overviews | Proven possible | `/ca/blog/grade-6-math-tutoring-in-ontario` ranks #2 on Google Canada for "online tutoring for EQAO grade 6 math" and TutorExel is named in the AI Overview, even though the post is orphaned and 317 words. Not cited for the AU Year 5 maths or US 5th grade math queries tested. |
| Bing (Copilot, part of ChatGPT) | Fail | `site:tutorexel.com` returns unrelated companies; a "tutorexel" brand search does not show tutorexel.com in the top 10. The site is effectively not in Bing. |
| Brave (Claude) | Partial | ~20 pages, mostly AU; some old non-www URLs and a dead `/prep-zone/naplan/primary` (404). |
| Perplexity | Not cited | EQAO test query cited TVO Mathify and a tutor quoting $50/hr. |
| Organization schema `sameAs` | Wrong | `instagram.com/tutorexel` is an unrelated Indonesian Excel-template seller; `facebook.com/tutorexel` is a personal profile; `linkedin.com/company/tutorexel` does not exist. Real profiles: linkedin.com/company/tutor-exel, instagram.com/tutorexellearning, Facebook page id 61579444003084. |
| Address | Typo | "Crambourne West" sitewide (footer + schema); Localsearch has "Cranbourne West". |
| Founding date | Conflict | Schema says 2009, not stated anywhere on the site; public records list TutorExel LLP as incorporated in 2026. Confirm with client. |
| Regional facts | Inconsistent | US pages show the AU address and NSW testimonials; CA blog boilerplate says "Years 2 to 7" and "Personalised"/"Maths" while the homepage says "Years 2 to 10". |
| Authors | Weak | Blog author is the Organization "TutorExel Team"; no named educators, credentials or author pages. |
| Original data | Thin | `/research` ("2026 Australian Tutoring Report") is 85 words; `/results` is 49 words. |
| Third-party presence | Thin | Only LinkedIn, Instagram, Facebook, Localsearch and company-registry pages. No reviews platform, no listicle mentions. Brand results also show look-alikes (TutorXcel, Tutorix) and a Play Store app named TutorExel (check if it is yours). |
| llms.txt | Missing | 404. Optional. |

## 3. Fixes

### Dev (this sprint)
1. Ship `FIXES.md` P0 first. Unindexed pages are invisible to every AI engine.
2. Replace `src/app/robots.ts` with the one in this package (unblocks `/_next/`, explicit AI bot group).
3. Vercel: Firewall, Bot Management. Make sure AI bots are not challenged or denied (Log or Allow).
4. Replace the Organization JSON-LD with `src/lib/seo/entity.ts` (`organizationJsonLd(region)`): correct `sameAs`, one `@id` referenced by WebSite, BlogPosting, Course and Service, address fixed, all 4 countries in `areaServed`, `foundingDate` removed until confirmed.
5. Fix "Crambourne" to "Cranbourne" in the footer.
6. Regional footer: US/CA/NZ pages show their own phone and no AU street address (or label it "Head office, Australia").
7. Add `src/app/llms.txt/route.ts`. Exclude `/llms.txt`, `/robots.txt`, `/indexnow-key.txt`, `/api/*` from the region proxy.
8. 301 `/prep-zone/*` to `/exam-prep/naplan` (and any other old URLs Brave still lists).
9. Deploy the IndexNow part of the indexing package and add the site to Bing Webmaster Tools (import from GSC, submit sitemap).

### SEO / content team
1. Facts block on every hub, pricing, grade and exam page, in plain text near the top: price per session in local currency, session length, 1-on-1 vs group size, tutor qualifications, lesson hours, contract/cancellation terms, free assessment details. Same numbers everywhere.
2. Answer-first structure: first paragraph answers the page's main question in 2 to 3 sentences; H2s phrased as the questions parents ask; short tables (topics by term, test dates, score bands).
3. Named authors: 3 to 5 real tutors/educators with author pages (photo, qualifications, LinkedIn), bylines and "Reviewed by" on blog and exam pages. Use `authorJsonLd()`.
4. Original data: turn `/research` into a real report per country (survey of enrolled families, assessment results, before/after scores). This is the kind of page AI answers cite.
5. Comparison pages per country, honest and factual: "Best online tutoring in Australia (2026): compared" with a price/format table that includes TutorExel. Google's AU AI Overview cited Kinetic Education's own comparison page as the source for Tutero and Cluey.
6. Localise: US/CA pages use US/CA spelling and grade terms, local testimonials, and the right level range. Fix the "Years 2 to 7" boilerplate.
7. Expand the test pages that already work (EQAO, OSSLT, STAAR, NAPLAN) and link the CA EQAO blog post from `/ca/exam-prep/eqao` and the CA home.

### Off-site (brand mentions)
1. Reviews on a third-party platform per market: ProductReview.com.au (AU), Trustpilot (US/CA/NZ). Ask every family after the 4th session.
2. Get included in existing "best online tutoring in [country/city]" listicles and directories (outreach to the sites AI answers already cite).
3. YouTube: short explainers per test (NAPLAN, EQAO, STAAR, NCEA) with full transcripts. YouTube is the most-cited source in AI Overviews.
4. Reddit/Quora: genuine answers from a named tutor in parenting and education threads; no link spam.
5. Update Instagram/Facebook/LinkedIn bios with the same name, description, website and phone as the site.

### Measure
1. GA4: custom channel "AI assistants" matching referrers chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com, claude.ai.
2. Monthly prompt check: 20 prompts per country (grade + subject + test + city), record whether TutorExel is named or cited in Google AI Overview, ChatGPT, Perplexity, Copilot.
3. Bing Webmaster Tools and GSC performance for the same pages.

## 4. Skip
- Separate "AI versions" or Markdown copies of pages (Google calls this unnecessary).
- Special "AI schema". Keep schema accurate and matching visible text.
- FAQ schema for rich results (Google stopped showing FAQ rich results in May 2026). Keep the visible FAQs; they help extraction.
