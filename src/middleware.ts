/**
 * TutorExel Middleware — Blog redirects
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
  const { pathname } = request.nextUrl;

  // 1. Legacy blog ID redirect
  const blogMatch = pathname.match(/^\/blog\/(\d+)$/);
  if (blogMatch) {
    const slug = oldIdToSlug[blogMatch[1]];
    if (slug) {
      return NextResponse.redirect(new URL(`/blog/${slug}`, request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
