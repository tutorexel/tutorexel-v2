import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/enroll",
          "/thank-you",
          "/_next/",
          "/careers/apply",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/enroll", "/thank-you", "/_next/", "/careers/apply"],
      },
    ],
    sitemap: "https://tutorexel.com/sitemap.xml",
    host: "https://tutorexel.com",
  };
}
