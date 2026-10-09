/**
 * Regional navigation link utilities.
 * Handles the URL architecture where:
 * - Australia (au) is at the root "/"
 * - USA (us) is at "/us"
 * - Canada (ca) is at "/ca"
 * - New Zealand (nz) is at "/nz"
 */

export type RegionCode = "au" | "us" | "ca" | "nz";

/**
 * Root routes known to exist across all regions (AU, US, CA, NZ).
 */
export const SHARED_BASE_ROUTES = new Set([
  "/",
  "/about",
  "/subjects",
  "/co-curricular",
  "/pricing",
  "/blog",
  "/contact",
  "/enroll",
  "/results",
  "/careers",
  "/privacy",
  "/terms",
  "/refund",
  "/free-assessment",
  "/free-trial",
  "/free-trial-booking",
  "/subscription",
  "/cookies",
  "/home-v1",
  "/links",
  "/login",
  "/thank-you",
  "/exam-prep",
  "/online-tutoring",
]);

/**
 * Market-unique routes that only exist in Australia.
 */
export const AU_ONLY_BASE_ROUTES = new Set([
  "/naplan-preparation",
]);

export const REGIONAL_SUPPORTED_BASE_ROUTES = SHARED_BASE_ROUTES;

/**
 * Detects current region from the pathname or a raw region code.
 * Root /... is "au", while /us/..., /ca/..., /nz/... correspond to their respective regions.
 */
export function getRegionFromPathname(pathname: string = ""): RegionCode {
  const clean = (pathname || "").trim().toLowerCase();
  if (clean === "us" || clean === "/us" || clean.startsWith("/us/") || clean.startsWith("/us?")) {
    return "us";
  }
  if (clean === "ca" || clean === "/ca" || clean.startsWith("/ca/") || clean.startsWith("/ca?")) {
    return "ca";
  }
  if (clean === "nz" || clean === "/nz" || clean.startsWith("/nz/") || clean.startsWith("/nz?")) {
    return "nz";
  }
  return "au";
}

/**
 * Legacy alias for getRegionFromPathname.
 */
export const getCurrentRegion = getRegionFromPathname;

/**
 * Extracts the region from route params (useful in Server Components and Layouts).
 */
export function getRegionFromParams(
  params?: Record<string, unknown> | { region?: string } | string | null
): RegionCode {
  if (!params) return "au";
  if (typeof params === "string") {
    return getRegionFromPathname(params);
  }
  if (typeof params === "object" && "region" in params && typeof params.region === "string") {
    return getRegionFromPathname(params.region);
  }
  return "au";
}

/**
 * Returns the equivalent URL in the target region for a given pathname.
 * If the route is market-unique to Australia and target is not Australia,
 * it returns the target region's home page.
 */
export function getEquivalentRegionalUrl(
  pathname: string = "/",
  targetRegion: string | RegionCode
): string {
  const target = (targetRegion || "au").toLowerCase() as RegionCode;
  let cleanPath = (pathname || "/").trim();

  // Strip existing regional prefixes: /us, /ca, /nz, /au
  cleanPath = cleanPath.replace(/^\/(us|ca|nz|au)(\/|$)/i, "$2");
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }
  if (cleanPath.endsWith("/") && cleanPath.length > 1) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Convert year/grade slugs between regions:
  if (target === "ca" || target === "us") {
    cleanPath = cleanPath
      .replace(/\/subjects\/year-(\d+)\/(maths|math)/i, "/subjects/grade-$1/math")
      .replace(/\/subjects\/year-(\d+)\/([^/?#]+)/i, "/subjects/grade-$1/$2")
      .replace(/\/subjects\/grade-(\d+)\/maths/i, "/subjects/grade-$1/math")
      .replace(/\/subjects\/year-(\d+)/i, "/subjects/grade-$1")
      .replace(/\/year-(\d+)/i, "/grade-$1");
  } else {
    cleanPath = cleanPath
      .replace(/\/subjects\/grade-(\d+)\/(math|maths)/i, "/subjects/year-$1/maths")
      .replace(/\/subjects\/grade-(\d+)\/([^/?#]+)/i, "/subjects/year-$1/$2")
      .replace(/\/subjects\/year-(\d+)\/math\b/i, "/subjects/year-$1/maths")
      .replace(/\/subjects\/grade-(\d+)/i, "/subjects/year-$1")
      .replace(/\/grade-(\d+)/i, "/year-$1");
  }

  // Check if this is an AU-only market-unique route
  const isAuOnly = Array.from(AU_ONLY_BASE_ROUTES).some(
    (prefix) => cleanPath === prefix || cleanPath.startsWith(`${prefix}/`)
  );

  // If this is an AU-only route and the target region is not Australia,
  // there is no equivalent page in the target region, so return that region's home.
  if (isAuOnly && target !== "au") {
    return `/${target}`;
  }

  // Research is supported in AU and US only
  if ((cleanPath === "/research" || cleanPath.startsWith("/research/")) && target !== "au" && target !== "us") {
    return `/${target}`;
  }

  // For Australia: root URL has no prefix
  if (target === "au") {
    return cleanPath || "/";
  }

  return cleanPath === "/" ? `/${target}` : `/${target}${cleanPath}`;
}

/**
 * Checks whether a given internal path is supported in regional directories.
 */
export function isRouteSupportedInRegion(
  path: string,
  region: RegionCode | string = "au"
): boolean {
  if (!path || path === "/" || path === "") return true;
  const match = path.match(/^(\/[^/?#]+)/);
  if (!match) return false;
  const baseSegment = match[1].toLowerCase();
  if (SHARED_BASE_ROUTES.has(baseSegment)) return true;
  const reg = getRegionFromPathname(region);
  if (baseSegment === "/research") return reg === "au" || reg === "us";
  if (reg === "au" && AU_ONLY_BASE_ROUTES.has(baseSegment)) return true;
  return false;
}

/**
 * Transforms an internal link href to include the target region prefix.
 * 
 * Rules:
 * - External links (http, https), protocols (mailto:, tel:), //, and anchors (#) are untouched.
 * - System routes (/api, /admin, /blocked) are untouched.
 * - Australia (au) has basePath "" (root paths without prefix).
 * - USA (us) has basePath "/us".
 * - Canada (ca) has basePath "/ca".
 * - New Zealand (nz) has basePath "/nz".
 * - Never double-prefix (e.g. /ca/about with region ca remains /ca/about).
 * - Market-unique AU routes stay at root (no /ca or /nz prefix).
 * - Preserves query strings, hash fragments, and trailing slashes.
 */
export function getRegionalHref(
  path: string,
  regionOrPathname: RegionCode | string = "au"
): string {
  if (!path) return path;

  // Leave external links, protocols, anchors, and system paths untouched
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("sms:") ||
    path.startsWith("#") ||
    path.startsWith("//") ||
    path.startsWith("/api") ||
    path.startsWith("/admin") ||
    path.startsWith("/blocked")
  ) {
    return path;
  }

  const region = getRegionFromPathname(regionOrPathname);

  // Separate hash fragment
  const hashIndex = path.indexOf("#");
  let hash = "";
  let pathWithoutHash = path;
  if (hashIndex !== -1) {
    hash = path.slice(hashIndex);
    pathWithoutHash = path.slice(0, hashIndex);
  }

  // Separate query string
  const queryIndex = pathWithoutHash.indexOf("?");
  let query = "";
  let cleanPath = pathWithoutHash;
  if (queryIndex !== -1) {
    query = pathWithoutHash.slice(queryIndex);
    cleanPath = pathWithoutHash.slice(0, queryIndex);
  }

  // Check if original had trailing slash (for paths longer than "/")
  const hasTrailingSlash = cleanPath.length > 1 && cleanPath.endsWith("/");

  // Ensure path starts with "/"
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  // Strip existing regional prefixes (/us, /ca, /nz, /au) to prevent double-prefixing
  let strippedPath = cleanPath.replace(/^\/(us|ca|nz|au)(\/|$)/i, "$2");
  if (!strippedPath.startsWith("/")) {
    strippedPath = `/${strippedPath}`;
  }
  // If strippedPath is just "/" or empty
  if (strippedPath === "" || strippedPath === "//") {
    strippedPath = "/";
  }

  // Remove trailing slash temporarily for routing logic
  let normalizedPath = strippedPath;
  if (normalizedPath.length > 1 && normalizedPath.endsWith("/")) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  // Region-aware slug normalization on internal path
  if (region === "ca" || region === "us") {
    normalizedPath = normalizedPath
      .replace(/\/subjects\/year-(\d+)\/(maths|math)/i, "/subjects/grade-$1/math")
      .replace(/\/subjects\/year-(\d+)\/([^/?#]+)/i, "/subjects/grade-$1/$2")
      .replace(/\/subjects\/grade-(\d+)\/maths/i, "/subjects/grade-$1/math")
      .replace(/\/subjects\/year-(\d+)/i, "/subjects/grade-$1")
      .replace(/^\/year-(\d+)/i, region === "us" ? "/subjects/grade-$1" : "/grade-$1")
      .replace(/^\/grade-(\d+)/i, region === "us" ? "/subjects/grade-$1" : "/grade-$1");
  } else {
    normalizedPath = normalizedPath
      .replace(/\/subjects\/grade-(\d+)\/(math|maths)/i, "/subjects/year-$1/maths")
      .replace(/\/subjects\/grade-(\d+)\/([^/?#]+)/i, "/subjects/year-$1/$2")
      .replace(/\/subjects\/year-(\d+)\/math\b/i, "/subjects/year-$1/maths")
      .replace(/\/subjects\/grade-(\d+)/i, "/subjects/year-$1")
      .replace(/^\/grade-(\d+)/i, "/year-$1");
  }

  // Market-unique AU routes only exist at root
  const isAuOnly = Array.from(AU_ONLY_BASE_ROUTES).some(
    (prefix) => normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`)
  );
  if (isAuOnly) {
    let finalPath = normalizedPath;
    if (hasTrailingSlash && finalPath !== "/") {
      finalPath = `${finalPath}/`;
    }
    return `${finalPath}${query}${hash}`;
  }

  // Base path map
  const basePathMap: Record<RegionCode, string> = {
    au: "",
    us: "/us",
    ca: "/ca",
    nz: "/nz",
  };
  const basePath = basePathMap[region] ?? "";

  let finalPath = "";
  if (basePath === "") {
    // Australia: root paths
    finalPath = normalizedPath;
  } else {
    // Non-AU regions
    if (normalizedPath === "/" || normalizedPath === "") {
      finalPath = basePath;
    } else {
      finalPath = `${basePath}${normalizedPath}`;
    }
  }

  if (hasTrailingSlash && finalPath !== "/" && !finalPath.endsWith("/")) {
    finalPath = `${finalPath}/`;
  }

  return `${finalPath}${query}${hash}`;
}

/**
 * Slug helpers for region-aware Grade / Year and Math / Maths slugs.
 * - AU and NZ use "year-N" and "maths"
 * - CA and US use "grade-N" and "math"
 */
export function getYearSlug(year: number | string, regionOrPathname: RegionCode | string = "au"): string {
  const reg = getRegionFromPathname(regionOrPathname);
  const match = String(year).match(/\d+/);
  const num = match ? match[0] : year;
  return (reg === "ca" || reg === "us") ? `grade-${num}` : `year-${num}`;
}

export function getMathSlug(regionOrPathname: RegionCode | string = "au"): string {
  const reg = getRegionFromPathname(regionOrPathname);
  return (reg === "ca" || reg === "us") ? "math" : "maths";
}

export function getSubjectSlug(subject: string, regionOrPathname: RegionCode | string = "au"): string {
  if (subject === "math" || subject === "maths") {
    return getMathSlug(regionOrPathname);
  }
  return subject;
}

export function getSubjectHref(
  year: number | string,
  subject: string,
  regionOrPathname: RegionCode | string = "au"
): string {
  return `/subjects/${getYearSlug(year, regionOrPathname)}/${getSubjectSlug(subject, regionOrPathname)}`;
}

export function getYearHubHref(year: number | string, regionOrPathname: RegionCode | string = "au"): string {
  const reg = getRegionFromPathname(regionOrPathname);
  const match = String(year).match(/\d+/);
  const num = match ? match[0] : year;
  if (reg === "us") {
    return `/subjects/grade-${num}`;
  }
  return reg === "ca" ? `/grade-${num}` : `/year-${num}`;
}
