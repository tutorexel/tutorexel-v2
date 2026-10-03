import type { Metadata } from "next";
import { getPageAvailability, isPathMarketUnique, INDEX_YEAR_8_10, HREFLANG_MODE, type RegionCode } from "@/data/page-availability";
import { getPageMetadataItem } from "@/data/page-metadata";

export type Region = "au" | "us" | "ca" | "nz";

const BASE_URL = "https://www.tutorexel.com";

export const REGION_LOCALE_MAP: Record<Region, string> = {
  us: "en-US",
  au: "en-AU",
  ca: "en-CA",
  nz: "en-NZ",
};

export const REGION_OG_LOCALE_MAP: Record<Region, string> = {
  us: "en_US",
  au: "en_AU",
  ca: "en_CA",
  nz: "en_NZ",
};

/**
 * Normalizes a raw path by removing domain, regional prefixes,
 * and standardizing slashes.
 * e.g. "/au/about" -> "/about", "/" -> ""
 */
export function normalizePath(rawPath: string): string {
  let path = (rawPath || "").trim();

  // Strip protocol and domain if full URL was provided
  if (path.startsWith("http://") || path.startsWith("https://")) {
    try {
      const url = new URL(path);
      path = url.pathname;
    } catch {
      path = path.replace(/^https?:\/\/[^\/]+/, "");
    }
  }

  // Remove regional prefixes if already present in path (/au, /us, /ca, /nz)
  path = path.replace(/^\/(au|us|ca|nz)(\/|$)/i, "$2");

  // Normalize leading/trailing slashes
  if (path === "/" || path === "") {
    return "";
  }

  if (!path.startsWith("/")) {
    path = `/${path}`;
  }
  if (path.endsWith("/") && path.length > 1) {
    path = path.slice(0, -1);
  }
  return path;
}

/**
 * Checks whether a normalized path is a market-unique page.
 * Market-unique pages exist only in one locale (e.g. AU) and do not have
 * 200-status equivalents in other regions.
 */
export function isMarketUniqueRoute(normalizedPath: string): boolean {
  return isPathMarketUnique(normalizedPath);
}

/**
 * Builds reciprocal hreflang and self-referencing canonical metadata for Next.js.
 * 
 * Shared pages:
 *  - en-AU: https://www.tutorexel.com{path}
 *  - en-US: https://www.tutorexel.com/us{path}
 *  - en-CA: https://www.tutorexel.com/ca{path}
 *  - en-NZ: https://www.tutorexel.com/nz{path}
 *  - x-default: https://www.tutorexel.com{path}
 * 
 * Market-unique and region-specific blog posts:
 *  - self-reference their own locale only
 *  - x-default pointing to AU root URL if available, else self
 */
export function getRegionalAlternates(
  rawPath: string,
  region: Region = "au",
  customAvailableRegions?: Region[]
) {
  const path = normalizePath(rawPath);
  const isRoot = path === "" || path === "/";

  // Rule: unified no trailing slash everywhere
  const auUrl = isRoot ? BASE_URL : `${BASE_URL}${path}`;
  const usUrl = isRoot ? `${BASE_URL}/us` : `${BASE_URL}/us${path}`;
  const caUrl = isRoot ? `${BASE_URL}/ca` : `${BASE_URL}/ca${path}`;
  const nzUrl = isRoot ? `${BASE_URL}/nz` : `${BASE_URL}/nz${path}`;

  const urlMap: Record<Region, string> = {
    au: auUrl,
    us: usUrl,
    ca: caUrl,
    nz: nzUrl,
  };

  const selfUrl = urlMap[region];
  const locale = REGION_LOCALE_MAP[region];

  if (HREFLANG_MODE === "self") {
    return {
      canonical: selfUrl,
      languages: {
        [locale]: selfUrl,
      },
    };
  }

  const availableRegions = (customAvailableRegions && customAvailableRegions.length > 0)
    ? customAvailableRegions
    : (getPageAvailability(path) as Region[]);

  const isUnique = isPathMarketUnique(path) || availableRegions.length <= 1;

  if (isUnique) {
    const locale = REGION_LOCALE_MAP[region];
    return {
      canonical: selfUrl,
      languages: {
        [locale]: selfUrl,
        "x-default": availableRegions.includes("au") ? auUrl : selfUrl,
      },
    };
  }

  const languages: Record<string, string> = {};
  for (const r of availableRegions) {
    languages[REGION_LOCALE_MAP[r]] = urlMap[r];
  }
  languages["x-default"] = availableRegions.includes("au") ? auUrl : selfUrl;

  return {
    canonical: selfUrl,
    languages,
  };
}

export interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path: string;
  region?: Region;
  noindex?: boolean;
  ogImageAlt?: string;
  customAvailableRegions?: Region[];
}

export const INDEXABLE_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

export const NOINDEX_ROBOTS = {
  index: false,
  follow: true,
};

export function buildMetadata({
  title,
  description,
  path,
  region = "au",
  noindex = false,
  ogImageAlt,
  customAvailableRegions,
}: BuildMetadataOptions): Metadata {
  const metaItem = getPageMetadataItem(path, region);
  const finalTitle = title || metaItem?.title || "TutorExel";
  const finalDescription = description || metaItem?.description || "";
  const alternates = getRegionalAlternates(path, region, customAvailableRegions);
  const locale = REGION_LOCALE_MAP[region];
  const url = alternates.canonical;

  const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: finalTitle,
    description: finalDescription,
    alternates,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url,
      siteName: "TutorExel",
      locale: REGION_OG_LOCALE_MAP[region],
      type: "website",
      images: [
        {
          url: "/images/banner/og-image.webp",
          width: 1200,
          height: 630,
          alt: ogImageAlt || `TutorExel - ${finalTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: ["/images/banner/og-image.webp"],
    },
  };

  const normalized = normalizePath(path);
  const isYear8to10Subject = /^\/subjects\/year-(8|9|10)\/(maths|english|science)$/.test(normalized);
  const shouldNoindex = noindex || (!INDEX_YEAR_8_10 && isYear8to10Subject);

  if (shouldNoindex) {
    metadata.robots = NOINDEX_ROBOTS;
  } else {
    metadata.robots = INDEXABLE_ROBOTS;
  }

  return metadata;
}

