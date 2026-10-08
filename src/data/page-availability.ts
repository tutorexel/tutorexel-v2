export type RegionCode = "au" | "us" | "ca" | "nz";

export const INDEX_YEAR_8_10 = true;

export const HREFLANG_MODE: "cluster" | "self" = "self";

export interface PageAvailabilityConfig {
  path: string;
  regions: RegionCode[];
  isMarketUnique?: boolean;
}

export function normalizeCleanPath(rawPath: string): string {
  let path = (rawPath || "").trim();
  if (path.startsWith("http://") || path.startsWith("https://")) {
    try {
      const url = new URL(path);
      path = url.pathname;
    } catch {
      path = path.replace(/^https?:\/\/[^\/]+/, "");
    }
  }
  // Strip regional prefix
  path = path.replace(/^\/(au|us|ca|nz)(\/|$)/i, "$2");
  if (path === "" || path === "/") return "/";
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.endsWith("/") && path.length > 1) path = path.slice(0, -1);
  return path;
}

export const PAGE_AVAILABILITY: PageAvailabilityConfig[] = [
  // Shared Core Pages (all 4 regions)
  { path: "/", regions: ["au", "us", "ca", "nz"] },
  { path: "/about", regions: ["au", "us", "ca", "nz"] },
  { path: "/pricing", regions: ["au", "us", "ca", "nz"] },
  { path: "/contact", regions: ["au", "us", "ca", "nz"] },
  { path: "/careers", regions: ["au", "us", "ca", "nz"] },
  { path: "/careers/apply", regions: ["au", "us", "ca", "nz"] },
  { path: "/enroll", regions: ["au", "us", "ca", "nz"] },
  { path: "/free-assessment", regions: ["au", "us", "ca", "nz"] },
  { path: "/free-trial", regions: ["au", "us", "ca", "nz"] },
  { path: "/free-trial-booking", regions: ["au", "us", "ca", "nz"] },
  { path: "/free-trial-booking/thank-you", regions: ["au", "us", "ca", "nz"] },
  { path: "/thank-you", regions: ["au", "us", "ca", "nz"] },
  { path: "/login", regions: ["au", "us", "ca", "nz"] },
  { path: "/links", regions: ["au", "us", "ca", "nz"] },
  { path: "/privacy", regions: ["au", "us", "ca", "nz"] },
  { path: "/terms", regions: ["au", "us", "ca", "nz"] },
  { path: "/refund", regions: ["au", "us", "ca", "nz"] },
  { path: "/cookies", regions: ["au", "us", "ca", "nz"] },
  { path: "/results", regions: ["au", "us", "ca", "nz"] },
  { path: "/subscription", regions: ["au", "us", "ca", "nz"] },
  { path: "/blog", regions: ["au", "us", "ca", "nz"] },
  { path: "/subjects", regions: ["au", "us", "ca", "nz"] },
  { path: "/co-curricular", regions: ["au", "us", "ca", "nz"] },
  { path: "/co-curricular/guitar", regions: ["au", "us", "ca", "nz"] },
  { path: "/co-curricular/guitar/enquire", regions: ["au", "us", "ca", "nz"] },
  { path: "/co-curricular/piano", regions: ["au", "us", "ca", "nz"] },
  { path: "/co-curricular/piano/enquire", regions: ["au", "us", "ca", "nz"] },
  { path: "/home-v1", regions: ["au", "us", "ca", "nz"] },

  // Subject detail pages: Years 2-10 across English, Maths, Science for AU and NZ
  ...[2, 3, 4, 5, 6, 7, 8, 9, 10].flatMap((y) => [
    { path: `/subjects/year-${y}/english`, regions: ["au", "nz"] as RegionCode[] },
    { path: `/subjects/year-${y}/maths`, regions: ["au", "nz"] as RegionCode[] },
    { path: `/subjects/year-${y}/science`, regions: ["au", "nz"] as RegionCode[] },
  ]),

  // Subject detail pages: Grades 2-10 across English, Math, Science for CA and US
  ...[2, 3, 4, 5, 6, 7, 8, 9, 10].flatMap((y) => [
    { path: `/subjects/grade-${y}/english`, regions: ["ca", "us"] as RegionCode[] },
    { path: `/subjects/grade-${y}/math`, regions: ["ca", "us"] as RegionCode[] },
    { path: `/subjects/grade-${y}/science`, regions: ["ca", "us"] as RegionCode[] },
  ]),

  // Exam Prep & Tutoring Hubs (AU, CA, NZ)
  { path: "/exam-prep", regions: ["au", "ca", "nz"] },
  { path: "/online-tutoring", regions: ["au", "ca", "nz"] },

  // Market-Unique Australian Pages
  { path: "/exam-prep/icas", regions: ["au", "nz"] },
  { path: "/exam-prep/oc-test", regions: ["au"], isMarketUnique: true },
  { path: "/exam-prep/selective", regions: ["au"], isMarketUnique: true },
  { path: "/exam-prep/scholarship", regions: ["au"], isMarketUnique: true },
  { path: "/naplan-preparation", regions: ["au"], isMarketUnique: true },
  { path: "/online-tutoring/sydney", regions: ["au"], isMarketUnique: true },
  { path: "/online-tutoring/melbourne", regions: ["au"], isMarketUnique: true },
  { path: "/online-tutoring/brisbane", regions: ["au"], isMarketUnique: true },
  { path: "/online-tutoring/perth", regions: ["au"], isMarketUnique: true },
  { path: "/online-tutoring/adelaide", regions: ["au"], isMarketUnique: true },
  { path: "/research", regions: ["au"], isMarketUnique: true },
  { path: "/research/australian-tutoring-report-2026", regions: ["au"], isMarketUnique: true },

  // Canadian Pages
  { path: "/exam-prep/eqao", regions: ["ca"], isMarketUnique: true },
  { path: "/exam-prep/osslt", regions: ["ca"], isMarketUnique: true },
  { path: "/exam-prep/pat", regions: ["ca", "nz"] },
  { path: "/exam-prep/fsa", regions: ["ca"], isMarketUnique: true },
  { path: "/exam-prep/gifted", regions: ["ca"], isMarketUnique: true },

  // New Zealand Pages
  { path: "/exam-prep/e-asttle", regions: ["nz"], isMarketUnique: true },
  { path: "/exam-prep/ncea", regions: ["nz"], isMarketUnique: true },
];

export function getPageAvailability(rawPath: string): RegionCode[] {
  const cleanPath = normalizeCleanPath(rawPath);
  if (cleanPath.startsWith("/blog/") && cleanPath !== "/blog") {
    return [];
  }
  const entry = PAGE_AVAILABILITY.find((p) => p.path === cleanPath);
  return entry ? entry.regions : ["au"];
}

export function isPathMarketUnique(rawPath: string): boolean {
  const cleanPath = normalizeCleanPath(rawPath);
  if (cleanPath.startsWith("/blog/") && cleanPath !== "/blog") {
    return true;
  }
  const entry = PAGE_AVAILABILITY.find((p) => p.path === cleanPath);
  return entry?.isMarketUnique || false;
}
