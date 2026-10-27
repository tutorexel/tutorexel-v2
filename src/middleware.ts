/**
 * TutorExel Middleware - Blog redirects
 * GeoGuard geo-blocking removed so all regions (AU, US, CA, NZ) and search crawlers are public.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PAGE_AVAILABILITY, type RegionCode } from "@/data/page-availability";

// ─── Blog redirect map ───────────────────────────────────────────────────────
const oldIdToSlug: Record<string, string> = {
  "1": "introducing-tutorexel-personalised-online-tutoring",
  "2": "how-tutorexel-works-diagnostic-test-learning-plan",
  "3": "why-australian-students-need-more-than-school-support",
  "4": "why-national-assessments-matter-naplan-icas",
  "5": "tutorexel-approach-structured-lessons-worksheets",
  "6": "personalised-tutoring-builds-confidence-not-just-grades",
  "7": "monthly-report-cards-help-parents-track-progress",
  "8": "parents-guide-choosing-right-online-tutor",
  "9": "online-tutoring-vs-traditional-tutoring",
  "10": "benefits-of-group-classes-collaborative-learning",
  "11": "tutorexel-online-methodology-lms-interactive-learning",
  "12": "keeping-tutoring-stress-free-health-learning-screen-time",
  "13": "parents-guide-how-tutorexel-keeps-you-informed",
  "14": "every-4th-class-counts-regular-tests-make-learning-stick",
  "15": "open-books-open-learning-transparency-at-tutorexel",
  "16": "beyond-class-hours-extra-practice-independent-learners",
  "17": "strong-foundations-first-dont-rush-learning",
  "18": "stress-to-strategy-naplan-icas-prep-saves-time",
  "19": "one-on-one-vs-small-group-tutoring",
  "20": "affordable-flexible-from-home-why-parents-love-tutorexel",
  "21": "one-login-zero-hassle-all-in-one-portal",
  "22": "risk-free-tutoring-free-trial-refund-policy",
};

// ─── Middleware ──────────────────────────────────────────────────────────────
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const isPreview = process.env.VERCEL_ENV === "preview";

  // 301 Redirect old type-based sitemaps to /sitemap.xml
  if (
    pathname === "/page-sitemap.xml" ||
    pathname === "/subject-sitemap.xml" ||
    pathname === "/exam-prep-sitemap.xml" ||
    pathname === "/co-curricular-sitemap.xml" ||
    pathname === "/online-tutoring-sitemap.xml" ||
    pathname === "/blog-sitemap.xml"
  ) {
    return NextResponse.redirect(new URL("/sitemap.xml", request.url), 301);
  }

  // Bypass regional sitemaps, sitemap index, and sitemap stylesheet
  if (
    pathname === "/sitemap.xml" ||
    pathname === "/sitemap.xsl" ||
    pathname.startsWith("/sitemap-")
  ) {
    return NextResponse.next();
  }

  const cleanPath = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  // 1. Specific 301 redirects

  // Exception: Canadian math blog on AU path maps to CA
  if (cleanPath === "/au/blog/how-online-math-tutoring-helps-canadian-students-excel") {
    return NextResponse.redirect(new URL("/ca/blog/how-online-math-tutoring-helps-canadian-students-excel" + search, request.url), 301);
  }

  // Sample articles redirect to their region's blog index
  const sampleArticleMatch = cleanPath.match(/^\/(?:(au|nz|ca|us)\/)?blog\/sample-article.*$/);
  if (sampleArticleMatch) {
    const reg = sampleArticleMatch[1]?.toLowerCase();
    const target = reg && reg !== "au" ? `/${reg}/blog` : "/blog";
    return NextResponse.redirect(new URL(target + search, request.url), 301);
  }

  // Out-of-region assessment blog posts redirect to their region's blog index
  if (cleanPath === "/nz/blog/stress-to-strategy-naplan-icas-prep-saves-time") {
    return NextResponse.redirect(new URL("/nz/blog" + search, request.url), 301);
  }
  if (cleanPath === "/ca/blog/why-national-assessments-matter-naplan-icas") {
    return NextResponse.redirect(new URL("/ca/blog" + search, request.url), 301);
  }

  // Specific path redirects
  if (cleanPath === "/term-condition") {
    return NextResponse.redirect(new URL("/terms" + search, request.url), 301);
  }
  if (cleanPath === "/prep-zone/naplan") {
    return NextResponse.redirect(new URL("/exam-prep/naplan" + search, request.url), 301);
  }
  if (cleanPath === "/subjects/science") {
    return NextResponse.redirect(new URL("/subjects" + search, request.url), 301);
  }

  // Legacy blog ID redirect (these 22 legacy posts are Australian articles)
  const blogMatch = cleanPath.match(/^\/(?:au\/)?blog\/(\d+)$/);
  if (blogMatch) {
    const slug = oldIdToSlug[blogMatch[1]];
    if (slug) {
      return NextResponse.redirect(new URL(`/blog/${slug}` + search, request.url), 301);
    }
  }

  // /au and /au/* redirect to the same path without /au (single-hop 301)
  if (cleanPath === "/au") {
    return NextResponse.redirect(new URL("/" + search, request.url), 301);
  }
  if (cleanPath.startsWith("/au/")) {
    const rest = cleanPath.slice(3) || "/";
    if (rest === "/term-condition") {
      return NextResponse.redirect(new URL("/terms" + search, request.url), 301);
    }
    if (rest === "/prep-zone/naplan") {
      return NextResponse.redirect(new URL("/exam-prep/naplan" + search, request.url), 301);
    }
    if (rest === "/subjects/science") {
      return NextResponse.redirect(new URL("/subjects" + search, request.url), 301);
    }
    return NextResponse.redirect(new URL(rest + search, request.url), 301);
  }

  // Redirect /us/grade-N and /ca/grade-N to /subjects/grade-N, and /nz/year-N to /nz/subjects/year-N
  const usGradeMatch = cleanPath.match(/^\/us\/grade-(\d+)$/i);
  if (usGradeMatch) {
    return NextResponse.redirect(new URL(`/us/subjects/grade-${usGradeMatch[1]}` + search, request.url), 301);
  }
  const caGradeMatch = cleanPath.match(/^\/ca\/grade-(\d+)$/i);
  if (caGradeMatch) {
    return NextResponse.redirect(new URL(`/ca/subjects/grade-${caGradeMatch[1]}` + search, request.url), 301);
  }
  const nzYearMatch = cleanPath.match(/^\/nz\/year-(\d+)$/i);
  if (nzYearMatch) {
    return NextResponse.redirect(new URL(`/nz/subjects/year-${nzYearMatch[1]}` + search, request.url), 301);
  }

  let response: NextResponse | null = null;

  // Trailing slash redirect for normal paths (308 redirect)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    response = NextResponse.redirect(new URL(cleanPath + search, request.url), 308);
  } else {
    // Check if region-prefixed URL is not registered for that region (307 redirect to region homepage)
    const regionMatch = pathname.match(/^\/(us|ca|nz)(\/.*)?$/i);
    if (regionMatch) {
      const region = regionMatch[1].toLowerCase() as RegionCode;
      const rest = regionMatch[2] || "/";
      let clean = rest;
      if (clean.endsWith("/") && clean.length > 1) {
        clean = clean.slice(0, -1);
      }
      if (
        clean !== "/" &&
        !clean.startsWith("/api") &&
        !clean.startsWith("/_next") &&
        !clean.startsWith("/admin") &&
        !clean.startsWith("/blocked")
      ) {
        const entry = PAGE_AVAILABILITY.find((p) => p.path === clean);
        if (entry && !entry.regions.includes(region)) {
          response = NextResponse.redirect(new URL(`/${region}` + search, request.url), 307);
        }
      }
    }
  }

  if (!response) {
    response = NextResponse.next();
  }

  if (isPreview) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|llms\\.txt|indexnow-key\\.txt|sitemap\\.xml|sitemap\\.xsl|sitemap-.*\\.xml|api/.*).*)",
  ],
};
