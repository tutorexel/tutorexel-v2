export type Region = "au" | "us" | "ca" | "nz";

const BASE_URL = "https://www.tutorexel.com";

/**
 * Builds reciprocal hreflang + self-referencing canonical metadata for Next.js.
 * 
 * Reciprocal hreflang cluster:
 *  - en-US: https://www.tutorexel.com{path}
 *  - en-AU: https://www.tutorexel.com/au{path}
 *  - en-CA: https://www.tutorexel.com/ca{path}
 *  - en-NZ: https://www.tutorexel.com/nz{path}
 *  - x-default: https://www.tutorexel.com{path}
 * 
 * Canonical is self-referencing to the specific region's URL.
 */
export function getRegionalAlternates(rawPath: string, region: Region = "us") {
  let path = rawPath.trim();

  // Strip protocol and domain if full URL was provided
  if (path.startsWith("http://") || path.startsWith("https://")) {
    try {
      const url = new URL(path);
      path = url.pathname;
    } catch {
      // Fallback regex if URL parsing fails
      path = path.replace(/^https?:\/\/[^\/]+/, "");
    }
  }

  // Remove regional prefixes if already present in path (/au, /us, /ca, /nz)
  path = path.replace(/^\/(au|us|ca|nz)(\/|$)/, "$2");

  // Normalize leading/trailing slashes
  if (path === "/" || path === "") {
    path = "";
  } else {
    if (!path.startsWith("/")) {
      path = `/${path}`;
    }
    // Remove trailing slash for consistency
    if (path.endsWith("/") && path.length > 1) {
      path = path.slice(0, -1);
    }
  }

  const usUrl = `${BASE_URL}${path}`;
  const auUrl = `${BASE_URL}/au${path}`;
  const caUrl = `${BASE_URL}/ca${path}`;
  const nzUrl = `${BASE_URL}/nz${path}`;

  const canonicalMap: Record<Region, string> = {
    au: auUrl,
    us: usUrl,
    ca: caUrl,
    nz: nzUrl,
  };

  return {
    canonical: canonicalMap[region],
    languages: {
      "en-US": usUrl,
      "en-AU": auUrl,
      "en-CA": caUrl,
      "en-NZ": nzUrl,
      "x-default": usUrl,
    },
  };
}
