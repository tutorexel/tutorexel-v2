import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { cities } from "@/data/cities";

const BASE_URL = "https://tutorexel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static pages with high priority (key pages)
  const keyPages = [
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
    "/naplan-preparation",
  ];

  // Blog listing page
  const blogIndex = "/blog";

  // Legal / low-priority pages
  const legalPages = ["/privacy", "/terms", "/refund", "/cookies", "/links"];

  // Dynamic subject pages — all year/subject combinations
  const years = ["year-2", "year-3", "year-4", "year-5", "year-6", "year-7"];
  const subjects = ["maths", "english"];

  const subjectEntries: MetadataRoute.Sitemap = years.flatMap((year) =>
    subjects.map((subject) => ({
      url: `${BASE_URL}/subjects/${year}/${subject}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  // Dynamic blog post pages — using slugs
  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // Homepage
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Key pages
    ...keyPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // Blog listing
    {
      url: `${BASE_URL}${blogIndex}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Dynamic subject pages
    ...subjectEntries,

    // Dynamic blog posts
    ...blogEntries,

    // Online tutoring index page
    {
      url: `${BASE_URL}/online-tutoring`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    // Dynamic city pages
    ...cities.map((city) => ({
      url: `${BASE_URL}/online-tutoring/${city.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Research pages
    {
      url: `${BASE_URL}/research`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/research/australian-tutoring-report-2026`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    // Legal / low-priority pages
    ...legalPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
