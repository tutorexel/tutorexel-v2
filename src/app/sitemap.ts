import type { MetadataRoute } from "next";
import { getAllSlugsForSitemap } from "@/sanity/client";
import { PAGE_AVAILABILITY, INDEX_YEAR_8_10, HREFLANG_MODE, type RegionCode } from "@/data/page-availability";
import { REGION_LOCALE_MAP, type Region } from "@/utils/seo";

const BASE_URL = "https://www.tutorexel.com";

const NOINDEX_PATHS = new Set([
  "/enroll",
  "/login",
  "/thank-you",
  "/free-trial-booking/thank-you",
  "/careers/apply",
  "/home-v1",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // Generate sitemap entries directly from PAGE_AVAILABILITY
  const staticEntries: MetadataRoute.Sitemap = [];

  for (const entry of PAGE_AVAILABILITY) {
    if (NOINDEX_PATHS.has(entry.path)) {
      continue;
    }

    const isYear8to10 = /^\/subjects\/(year|grade)-(8|9|10)\//.test(entry.path);
    if (!INDEX_YEAR_8_10 && isYear8to10) {
      continue;
    }

    const isRoot = entry.path === "/";
    const auUrl = isRoot ? BASE_URL : `${BASE_URL}${entry.path}`;
    const usUrl = isRoot ? `${BASE_URL}/us` : `${BASE_URL}/us${entry.path}`;
    const caUrl = isRoot ? `${BASE_URL}/ca` : `${BASE_URL}/ca${entry.path}`;
    const nzUrl = isRoot ? `${BASE_URL}/nz` : `${BASE_URL}/nz${entry.path}`;

    const urlMap: Record<RegionCode, string> = {
      au: auUrl,
      us: usUrl,
      ca: caUrl,
      nz: nzUrl,
    };

    let clusterLanguages: Record<string, string>;
    if (entry.isMarketUnique || entry.regions.length <= 1) {
      const singleRegion = entry.regions[0] || "au";
      const selfUrl = urlMap[singleRegion];
      clusterLanguages = {
        [REGION_LOCALE_MAP[singleRegion as Region]]: selfUrl,
        "x-default": selfUrl,
      };
    } else {
      clusterLanguages = {
        "en-AU": auUrl,
        "en-US": usUrl,
        "en-CA": caUrl,
        "en-NZ": nzUrl,
        "x-default": auUrl,
      };
    }

    for (const region of entry.regions) {
      const pageUrl = urlMap[region];
      const isAu = region === "au";
      const priority = isRoot ? (isAu ? 1.0 : 0.9) : entry.path.startsWith("/subjects/") ? 0.8 : 0.8;
      const locale = REGION_LOCALE_MAP[region as Region];

      const languages = HREFLANG_MODE === "self"
        ? { [locale]: pageUrl }
        : clusterLanguages;

      staticEntries.push({
        url: pageUrl,
        lastModified,
        changeFrequency: isRoot ? "weekly" : "monthly",
        priority,
        alternates: {
          languages,
        },
      });
    }
  }

  // Dynamic Sanity blog posts mapped by their assigned region
  const sampleSlugs = new Set([
    "sample-article-us",
    "sample-article-ca",
    "sample-article-nz",
  ]);

  const sanityPosts = await getAllSlugsForSitemap();
  const validPosts = sanityPosts.filter((post) => {
    if (!post.slug) return false;
    if (sampleSlugs.has(post.slug)) return false;
    if (/^\d+$/.test(post.slug)) return false;
    return true;
  });

  const blogEntries: MetadataRoute.Sitemap = validPosts.map((post) => {
    const rawRegion = (post.region?.toLowerCase() || "au") as Region;
    const region = (["au", "us", "ca", "nz"].includes(rawRegion) ? rawRegion : "au") as Region;
    const prefix = region === "au" ? "" : `/${region}`;
    const postUrl = `${BASE_URL}${prefix}/blog/${post.slug}`;
    const postDate = post._updatedAt
      ? new Date(post._updatedAt)
      : post.publishedAt
      ? new Date(post.publishedAt)
      : lastModified;

    const locale = REGION_LOCALE_MAP[region];
    const languages = HREFLANG_MODE === "self"
      ? { [locale]: postUrl }
      : {
          [locale]: postUrl,
          "x-default": postUrl,
        };

    return {
      url: postUrl,
      lastModified: postDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages,
      },
    };
  });

  return [...staticEntries, ...blogEntries];
}
