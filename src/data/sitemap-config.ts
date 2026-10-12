import { PAGE_AVAILABILITY, INDEX_YEAR_8_10, type RegionCode, type PageAvailabilityConfig } from "@/data/page-availability";
import { REGION_LOCALE_MAP, type Region } from "@/utils/seo";
import { getAllSlugsForSitemap } from "@/sanity/client";

export const STATIC_LAST_MODIFIED = "2026-10-13T00:00:00+10:00";
export const SITEMAP_BASE_URL = "https://www.tutorexel.com";

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

function getRegionalUrl(path: string, region: RegionCode): string {
  const isRoot = path === "/";
  if (region === "au") {
    return isRoot ? SITEMAP_BASE_URL : `${SITEMAP_BASE_URL}${path}`;
  }
  return isRoot ? `${SITEMAP_BASE_URL}/${region}` : `${SITEMAP_BASE_URL}/${region}${path}`;
}

export function buildEntriesFromAvailability(entries: PageAvailabilityConfig[]): SitemapUrlEntry[] {
  const result: SitemapUrlEntry[] = [];

  for (const entry of entries) {
    if (EXCLUDED_PATHS.has(entry.path)) {
      continue;
    }

    const isYear8to10 = /^\/subjects\/(year|grade)-(8|9|10)(\/|$)/.test(entry.path);
    if (!INDEX_YEAR_8_10 && isYear8to10) {
      continue;
    }

    const clusterLanguages: Record<string, string> = {};
    for (const reg of entry.regions) {
      const locale = REGION_LOCALE_MAP[reg as Region];
      clusterLanguages[locale] = getRegionalUrl(entry.path, reg);
    }

    const defaultRegion = entry.regions.includes("au") ? "au" : entry.regions[0] || "au";
    clusterLanguages["x-default"] = getRegionalUrl(entry.path, defaultRegion);

    const images = PAGE_IMAGES_MAP[entry.path] || [];

    for (const region of entry.regions) {
      const pageUrl = getRegionalUrl(entry.path, region);
      result.push({
        loc: pageUrl,
        lastmod: STATIC_LAST_MODIFIED,
        images,
        alternates: clusterLanguages,
      });
    }
  }

  return result;
}

export function getPageSitemapUrls(): SitemapUrlEntry[] {
  const staticPageEntries = PAGE_AVAILABILITY.filter((entry) => {
    if (EXCLUDED_PATHS.has(entry.path)) return false;
    if (entry.path.startsWith("/subjects")) return false;
    if (entry.path.startsWith("/exam-prep")) return false;
    if (entry.path.startsWith("/co-curricular")) return false;
    if (entry.path.startsWith("/online-tutoring")) return false;
    if (entry.path === "/blog" || entry.path.startsWith("/blog/")) return false;
    return true;
  });

  return buildEntriesFromAvailability(staticPageEntries);
}

export function getSubjectSitemapUrls(): SitemapUrlEntry[] {
  const subjectEntries = PAGE_AVAILABILITY.filter((entry) => entry.path.startsWith("/subjects"));
  return buildEntriesFromAvailability(subjectEntries);
}

export function getExamPrepSitemapUrls(): SitemapUrlEntry[] {
  const examPrepEntries = PAGE_AVAILABILITY.filter((entry) => entry.path.startsWith("/exam-prep"));
  return buildEntriesFromAvailability(examPrepEntries);
}

export function getCoCurricularSitemapUrls(): SitemapUrlEntry[] {
  const coCurricularEntries = PAGE_AVAILABILITY.filter((entry) => entry.path.startsWith("/co-curricular"));
  return buildEntriesFromAvailability(coCurricularEntries);
}

export function getOnlineTutoringSitemapUrls(): SitemapUrlEntry[] {
  const onlineTutoringEntries = PAGE_AVAILABILITY.filter((entry) => entry.path.startsWith("/online-tutoring"));
  return buildEntriesFromAvailability(onlineTutoringEntries);
}

export async function getBlogSitemapUrls(): Promise<SitemapUrlEntry[]> {
  const blogIndexEntries = PAGE_AVAILABILITY.filter((entry) => entry.path === "/blog");
  const result: SitemapUrlEntry[] = buildEntriesFromAvailability(blogIndexEntries);

  const sampleSlugs = new Set([
    "sample-article-us",
    "sample-article-ca",
    "sample-article-nz",
  ]);

  const sanityPosts = await getAllSlugsForSitemap();
  const validPosts = sanityPosts.filter((post) => {
    if (!post.slug) return false;
    if (post.noindex) return false;
    if (sampleSlugs.has(post.slug)) return false;
    if (/^\d+$/.test(post.slug)) return false;
    return true;
  });

  for (const post of validPosts) {
    const rawRegion = (post.region?.toLowerCase() || "au") as Region;
    const region = (["au", "us", "ca", "nz"].includes(rawRegion) ? rawRegion : "au") as Region;
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

    const locale = REGION_LOCALE_MAP[region];
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

  return result;
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
