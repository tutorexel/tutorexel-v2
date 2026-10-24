import { PAGE_AVAILABILITY, INDEX_YEAR_8_10, type RegionCode } from "@/data/page-availability";
import { REGION_LOCALE_MAP, type Region } from "@/utils/seo";
import { getAllSlugsForSitemap } from "@/lib/blog-data";

export const STATIC_LAST_MODIFIED = "2026-10-13T00:00:00+10:00";
export const SITEMAP_BASE_URL = "https://www.tutorexel.com";

const PAGE_LASTMOD_MAP: Record<string, string> = {
  "/privacy": "2026-10-06T00:00:00Z",
  "/terms": "2026-10-06T00:00:00Z",
  "/refund": "2026-10-06T00:00:00Z",
  "/cookies": "2026-10-06T00:00:00Z",
  "/research": "2026-03-01T00:00:00Z",
  "/research/australian-tutoring-report-2026": "2026-03-01T00:00:00Z",
};

export const SITEMAP_RESPONSE_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
};

const EXCLUDED_PATHS = new Set([
  "/login",
  "/thank-you",
  "/free-trial-booking/thank-you",
  "/careers/apply",
  "/home-v1",
  "/enroll",
  "/links",
  "/co-curricular/guitar/enquire",
  "/co-curricular/piano/enquire",
  "/free-trial-booking",
]);

const PAGE_IMAGES_MAP: Record<string, string[]> = {
  "/": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/about": [`${SITEMAP_BASE_URL}/images/about/curriculum-section-image.webp`],
  "/pricing": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/contact": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/careers": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/free-assessment": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/free-trial": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/free-trial-booking": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/results": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/subscription": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/co-curricular": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/co-curricular/guitar": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/co-curricular/guitar/enquire": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/co-curricular/piano": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/co-curricular/piano/enquire": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/blog": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/subjects": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/exam-prep": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
  "/online-tutoring": [`${SITEMAP_BASE_URL}/images/og-hero.jpg`],
};

export interface SitemapUrlEntry {
  loc: string;
  lastmod: string;
  images: string[];
  alternates: Record<string, string>;
}

export function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function getRegionalUrl(path: string, region: RegionCode): string {
  const isRoot = path === "/";
  if (region === "au") {
    return isRoot ? SITEMAP_BASE_URL : `${SITEMAP_BASE_URL}${path}`;
  }
  return isRoot ? `${SITEMAP_BASE_URL}/${region}` : `${SITEMAP_BASE_URL}/${region}${path}`;
}

export async function getRegionSitemapUrls(region: RegionCode): Promise<SitemapUrlEntry[]> {
  const result: SitemapUrlEntry[] = [];

  // 1. Static and registered pages from PAGE_AVAILABILITY for this region
  for (const entry of PAGE_AVAILABILITY) {
    if (!entry.regions.includes(region)) {
      continue;
    }

    if (EXCLUDED_PATHS.has(entry.path)) {
      continue;
    }

    const isYear8to10 = /^\/subjects\/(year|grade)-(8|9|10)(\/|$)/.test(entry.path);
    if (!INDEX_YEAR_8_10 && isYear8to10) {
      continue;
    }

    const isUnique = entry.regions.length <= 1;
    const clusterLanguages: Record<string, string> = {};
    if (isUnique) {
      const locale = REGION_LOCALE_MAP[region as Region];
      clusterLanguages[locale] = getRegionalUrl(entry.path, region);
    } else {
      for (const reg of entry.regions) {
        const locale = REGION_LOCALE_MAP[reg as Region];
        clusterLanguages[locale] = getRegionalUrl(entry.path, reg);
      }
      const defaultRegion = entry.regions.includes("au") ? "au" : entry.regions[0] || "au";
      clusterLanguages["x-default"] = getRegionalUrl(entry.path, defaultRegion);
    }

    const pageUrl = getRegionalUrl(entry.path, region);
    const images = PAGE_IMAGES_MAP[entry.path] || [];

    const pageLastmod = PAGE_LASTMOD_MAP[entry.path] || STATIC_LAST_MODIFIED;

    result.push({
      loc: pageUrl,
      lastmod: pageLastmod,
      images,
      alternates: clusterLanguages,
    });
  }

  // 2. Dynamic Sanity blog posts assigned to this region
  const sampleSlugs = new Set([
    "sample-article-us",
    "sample-article-ca",
    "sample-article-nz",
  ]);

  try {
    const sanityPosts = await getAllSlugsForSitemap();
    const validPosts = sanityPosts.filter((post) => {
      if (!post.slug) return false;
      if (post.noindex) return false;
      if (sampleSlugs.has(post.slug)) return false;
      if (/^\d+$/.test(post.slug)) return false;

      const rawRegion = (post.region?.toLowerCase() || "au") as RegionCode;
      const normalizedRegion: RegionCode = (["au", "us", "ca", "nz"].includes(rawRegion)
        ? rawRegion
        : "au") as RegionCode;
      return normalizedRegion === region;
    });

    for (const post of validPosts) {
      const prefix = region === "au" ? "" : `/${region}`;
      const postUrl = `${SITEMAP_BASE_URL}${prefix}/blog/${post.slug}`;

      let lastmod = STATIC_LAST_MODIFIED;
      if (post._updatedAt) {
        try {
          const d = new Date(post._updatedAt);
          if (!isNaN(d.getTime())) {
            lastmod = d.toISOString();
          }
        } catch {
          lastmod = STATIC_LAST_MODIFIED;
        }
      } else if (post.publishedAt) {
        try {
          const d = new Date(post.publishedAt);
          if (!isNaN(d.getTime())) {
            lastmod = d.toISOString();
          }
        } catch {
          lastmod = STATIC_LAST_MODIFIED;
        }
      }

      const locale = REGION_LOCALE_MAP[region as Region];
      const alternates: Record<string, string> = {
        [locale]: postUrl,
        "x-default": postUrl,
      };

      const images: string[] = [];
      if (post.imageUrl) {
        images.push(post.imageUrl);
      } else {
        images.push(`${SITEMAP_BASE_URL}/images/og-hero.jpg`);
      }

      result.push({
        loc: postUrl,
        lastmod,
        images,
        alternates,
      });
    }
  } catch (err) {
    console.warn(`[Sitemap] Failed to fetch blog posts for region ${region}:`, err);
  }

  return result;
}

export function getMaxLastmod(urls: SitemapUrlEntry[]): string {
  let maxDate = STATIC_LAST_MODIFIED;
  for (const item of urls) {
    if (item.lastmod > maxDate) {
      maxDate = item.lastmod;
    }
  }
  return maxDate;
}

export function renderUrlSetXml(urls: SitemapUrlEntry[]): string {
  const urlNodes = urls.map((u) => {
    const alternateNodes = Object.entries(u.alternates)
      .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(href)}" />`)
      .join("\n");

    const imageNodes = u.images
      .map((img) => `    <image:image>\n      <image:loc>${escapeXml(img)}</image:loc>\n    </image:image>`)
      .join("\n");

    return `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${escapeXml(u.lastmod)}</lastmod>
${alternateNodes ? alternateNodes + "\n" : ""}${imageNodes ? imageNodes + "\n" : ""}  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlNodes}
</urlset>
`;
}

export interface SitemapIndexEntry {
  loc: string;
  lastmod: string;
}

export function renderSitemapIndexXml(sitemaps: SitemapIndexEntry[]): string {
  const sitemapNodes = sitemaps.map((s) => `  <sitemap>
    <loc>${escapeXml(s.loc)}</loc>
    <lastmod>${escapeXml(s.lastmod)}</lastmod>
  </sitemap>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNodes}
</sitemapindex>
`;
}
