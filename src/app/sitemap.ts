import type { MetadataRoute } from "next";
import { getAllSlugsForSitemap } from "@/sanity/client";
import { cities } from "@/data/cities";

const BASE_URL = "https://tutorexel.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // Common key pages supported across regions
  const commonPages = [
    "/about",
    "/subjects",
    "/pricing",
    "/contact",
    "/free-trial",
    "/free-assessment",
    "/enroll",
    "/results",
    "/co-curricular",
    "/co-curricular/piano",
    "/co-curricular/guitar",
    "/subscription",
    "/careers",
    "/careers/apply",
  ];

  const legalPages = ["/privacy", "/terms", "/refund", "/cookies", "/links"];

  // Dynamic subject pages — all year/subject combinations
  const years = ["year-2", "year-3", "year-4", "year-5", "year-6", "year-7"];
  const subjects = ["maths", "english"];

  const subjectEntries: MetadataRoute.Sitemap = ["", "/au", "/ca", "/nz"].flatMap((prefix) =>
    years.flatMap((year) =>
      subjects.map((subject) => ({
        url: `${BASE_URL}${prefix}/subjects/${year}/${subject}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
    )
  );

  // Dynamic blog post pages from Sanity (per region)
  const sanityPosts = await getAllSlugsForSitemap();
  const blogEntries: MetadataRoute.Sitemap = sanityPosts.map((post) => {
    const postUrl =
      post.region && post.region !== "us"
        ? `${BASE_URL}/${post.region}/blog/${post.slug}`
        : `${BASE_URL}/blog/${post.slug}`;

    return {
      url: postUrl,
      lastModified: post._updatedAt ? new Date(post._updatedAt) : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [
    // ── US (Root) Pages ───────────────────────────────────────
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...commonPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/online-tutoring`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/research`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...legalPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),

    // ── AU (/au) Pages ────────────────────────────────────────
    {
      url: `${BASE_URL}/au`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...commonPages.map((path) => ({
      url: `${BASE_URL}/au${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/au/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/au/naplan-preparation`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/au/online-tutoring`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...cities.map((city) => ({
      url: `${BASE_URL}/au/online-tutoring/${city.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/au/research`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/au/research/australian-tutoring-report-2026`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...legalPages.map((path) => ({
      url: `${BASE_URL}/au${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),

    // ── CA (/ca) Pages ────────────────────────────────────────
    {
      url: `${BASE_URL}/ca`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...commonPages.map((path) => ({
      url: `${BASE_URL}/ca${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/ca/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...legalPages.map((path) => ({
      url: `${BASE_URL}/ca${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),

    // ── NZ (/nz) Pages ────────────────────────────────────────
    {
      url: `${BASE_URL}/nz`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...commonPages.map((path) => ({
      url: `${BASE_URL}/nz${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/nz/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...legalPages.map((path) => ({
      url: `${BASE_URL}/nz${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),

    // ── Dynamic Subject Pages ─────────────────────────────────
    ...subjectEntries,

    // ── Dynamic Blog Posts (Sanity) ───────────────────────────
    ...blogEntries,
  ];
}
