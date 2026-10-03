import type { MetadataRoute } from "next";

const disallowed = [
  "/api/",
  "/_next/",
  "/enroll",
  "/us/enroll",
  "/ca/enroll",
  "/nz/enroll",
  "/thank-you",
  "/us/thank-you",
  "/ca/thank-you",
  "/nz/thank-you",
  "/careers/apply",
  "/us/careers/apply",
  "/ca/careers/apply",
  "/nz/careers/apply",
  "/free-trial-booking/thank-you",
  "/us/free-trial-booking/thank-you",
  "/ca/free-trial-booking/thank-you",
  "/nz/free-trial-booking/thank-you",
  "/admin",
  "/admin/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowed,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: disallowed,
      },
    ],
    sitemap: "https://www.tutorexel.com/sitemap.xml",
    host: "https://www.tutorexel.com",
  };
}
