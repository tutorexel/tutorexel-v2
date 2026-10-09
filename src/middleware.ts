/**
 * TutorExel Middleware - Blog redirects
 * GeoGuard geo-blocking removed so all regions (AU, US, CA, NZ) and search crawlers are public.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

  let response: NextResponse | null = null;

  // 1. Handle trailing slashes and /au redirects in a single hop
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const clean = pathname.slice(0, -1);
    if (clean === "/au") {
      response = NextResponse.redirect(new URL("/" + search, request.url), 301);
    } else if (clean.startsWith("/au/")) {
      response = NextResponse.redirect(new URL((clean.slice(3) || "/") + search, request.url), 301);
    } else {
      response = NextResponse.redirect(new URL(clean + search, request.url), 308);
    }
  } else if (pathname === "/au") {
    // 2. Legacy /au paths (no trailing slash) redirect straight to AU root equivalent (single-hop 301)
    response = NextResponse.redirect(new URL("/" + search, request.url), 301);
  } else if (pathname.startsWith("/au/")) {
    response = NextResponse.redirect(new URL((pathname.slice(3) || "/") + search, request.url), 301);
  } else {
    // 3. Market-unique Australian routes accessed under /us, /ca, /nz redirect straight to AU root
    // Note: US has its own /us/research page.
    let marketUniqueMatch = pathname.match(/^\/(us|ca|nz)(\/(?:naplan-preparation)(?:\/.*)?)$/i);
    if (!marketUniqueMatch) {
      marketUniqueMatch = pathname.match(/^\/(ca|nz)(\/(?:research)(?:\/.*)?)$/i);
    }
    if (marketUniqueMatch) {
      let target = marketUniqueMatch[2];
      if (target.endsWith("/") && target.length > 1) {
        target = target.slice(0, -1);
      }
      response = NextResponse.redirect(new URL(target + search, request.url), 301);
    } else {
      // 4. Redirect /us/grade-N to /us/subjects/grade-N
      const usGradeMatch = pathname.match(/^\/us\/grade-(\d+)$/i);
      if (usGradeMatch) {
        response = NextResponse.redirect(new URL(`/us/subjects/grade-${usGradeMatch[1]}` + search, request.url), 301);
      }

      // 5. Legacy blog ID redirect (these 22 legacy posts are Australian articles)
      const blogMatch = pathname.match(/^\/(?:au\/)?blog\/(\d+)$/);
      if (blogMatch) {
        const slug = oldIdToSlug[blogMatch[1]];
        if (slug) {
          response = NextResponse.redirect(new URL(`/blog/${slug}` + search, request.url), 301);
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
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
