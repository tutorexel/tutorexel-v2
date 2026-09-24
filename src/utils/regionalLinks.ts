/**
 * Regional navigation link utilities.
 * Ensures internal links stay within the user's active region (US, CA, NZ),
 * while keeping AU on the root paths without prefix.
 */

export type RegionCode = "AU" | "US" | "CA" | "NZ";

/**
 * Root routes known to exist across all regions (AU, US, CA, NZ).
 */
export const REGIONAL_SUPPORTED_BASE_ROUTES = new Set([
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
  "/naplan-preparation",
  "/online-tutoring",
  "/research",
  "/subscription",
  "/cookies",
  "/home-v1",
  "/links",
  "/login",
  "/thank-you",
]);

/**
 * Detects current region from the pathname.
 * Root /... is "AU", while /us/..., /ca/..., /nz/... correspond to their respective regions.
 */
export function getCurrentRegion(pathname: string = ""): RegionCode {
  const clean = pathname.trim().toLowerCase();
  if (clean === "us" || clean === "ca" || clean === "nz" || clean === "au") {
    return clean.toUpperCase() as RegionCode;
  }
  const match = clean.match(/^\/(us|ca|nz)(\/.*)?$/i);
  if (match) {
    return match[1].toUpperCase() as RegionCode;
  }
  return "AU";
}

/**
 * Checks whether a given internal path is supported in regional directories.
 */
export function isRouteSupportedInRegion(path: string): boolean {
  if (!path || path === "/" || path === "") return true;
  const match = path.match(/^(\/[^\/?#]+)/);
  if (!match) return false;
  const baseSegment = match[1].toLowerCase();
  return REGIONAL_SUPPORTED_BASE_ROUTES.has(baseSegment);
}

/**
 * Transforms an internal link href to include the current region prefix.
 * 
 * Rules:
 * - External links (http, https, mailto, tel), protocols (//), and anchors (#) are NEVER modified.
 * - AU region links are kept at root without prefix (e.g. /about).
 * - US, CA, NZ links are prefixed with /{region} (e.g. /ca/about).
 * - Root "/" becomes "/{region}" for US, CA, NZ.
 * - If a route is NOT in the supported regional routes list, it falls back to the root path
 *   to avoid creating 404s.
 */
export function getRegionalHref(
  href: string,
  pathnameOrRegion: string | RegionCode
): string {
  if (!href) return href;

  // Do NOT prefix external links, protocols, or anchor / hash links
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.startsWith("//")
  ) {
    return href;
  }

  const cleanInput = (pathnameOrRegion || "").trim();
  const upper = cleanInput.toUpperCase();
  const region: RegionCode =
    upper === "AU" || upper === "US" || upper === "CA" || upper === "NZ"
      ? (upper as RegionCode)
      : getCurrentRegion(cleanInput);

  // AU has no prefix: keep root paths
  if (region === "AU") {
    // If it already had a regional prefix, strip it for AU
    const clean = href.replace(/^\/(us|ca|nz)(\/|$)/i, "/");
    return clean || "/";
  }

  const regLower = region.toLowerCase();

  // Check if href already has a regional prefix
  const existingMatch = href.match(/^\/(us|ca|nz)(\/.*)?$/i);
  if (existingMatch) {
    if (existingMatch[1].toLowerCase() === regLower) {
      return href;
    }
    const rest = existingMatch[2] || "";
    return `/${regLower}${rest}` || `/${regLower}`;
  }

  // Check if destination exists for this region; if not, keep root version
  if (!isRouteSupportedInRegion(href)) {
    return href;
  }

  // Root path '/' becomes '/{region}'
  if (href === "/" || href === "") {
    return `/${regLower}`;
  }

  const cleanHref = href.startsWith("/") ? href : `/${href}`;
  return `/${regLower}${cleanHref}`;
}
