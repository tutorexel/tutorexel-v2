import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
  skipTrailingSlashRedirect: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    cpus: 4,
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // AU-only pages redirected from US, CA, and NZ directly to root
      // NAPLAN
      {
        source: "/us/naplan-preparation",
        destination: "/naplan-preparation",
        permanent: true,
      },
      {
        source: "/us/naplan-preparation/:path*",
        destination: "/naplan-preparation/:path*",
        permanent: true,
      },
      {
        source: "/ca/naplan-preparation",
        destination: "/naplan-preparation",
        permanent: true,
      },
      {
        source: "/ca/naplan-preparation/:path*",
        destination: "/naplan-preparation/:path*",
        permanent: true,
      },
      {
        source: "/nz/naplan-preparation",
        destination: "/naplan-preparation",
        permanent: true,
      },
      {
        source: "/nz/naplan-preparation/:path*",
        destination: "/naplan-preparation/:path*",
        permanent: true,
      },

      {
        source: "/nz/research",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/nz/research/:path*",
        destination: "/research/:path*",
        permanent: true,
      },
      // CA Grade and Math redirects
      {
        source: "/ca/subjects/year-:year/maths/:term/:topic",
        destination: "/ca/subjects/grade-:year/math/:term/:topic",
        permanent: true,
      },
      {
        source: "/ca/subjects/year-:year/math/:term/:topic",
        destination: "/ca/subjects/grade-:year/math/:term/:topic",
        permanent: true,
      },
      {
        source: "/ca/subjects/grade-:year/maths/:term/:topic",
        destination: "/ca/subjects/grade-:year/math/:term/:topic",
        permanent: true,
      },
      {
        source: "/ca/subjects/year-:year/:subject(english|science)/:term/:topic",
        destination: "/ca/subjects/grade-:year/:subject/:term/:topic",
        permanent: true,
      },
      {
        source: "/ca/subjects/year-:year/maths",
        destination: "/ca/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/ca/subjects/year-:year/math",
        destination: "/ca/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/ca/subjects/grade-:year/maths",
        destination: "/ca/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/ca/subjects/year-:year/:subject(english|science)",
        destination: "/ca/subjects/grade-:year/:subject",
        permanent: true,
      },
      {
        source: "/ca/subjects/year-:year",
        destination: "/ca/subjects/grade-:year",
        permanent: true,
      },
      {
        source: "/ca/year-:year/maths",
        destination: "/ca/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/ca/year-:year/math",
        destination: "/ca/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/ca/year-:year/:subject(english|science)",
        destination: "/ca/subjects/grade-:year/:subject",
        permanent: true,
      },
      {
        source: "/ca/year-:year",
        destination: "/ca/grade-:year",
        permanent: true,
      },

      // US Grade and Math redirects
      {
        source: "/us/subjects/year-:year/maths/:term/:topic",
        destination: "/us/subjects/grade-:year/math/:term/:topic",
        permanent: true,
      },
      {
        source: "/us/subjects/year-:year/math/:term/:topic",
        destination: "/us/subjects/grade-:year/math/:term/:topic",
        permanent: true,
      },
      {
        source: "/us/subjects/grade-:year/maths/:term/:topic",
        destination: "/us/subjects/grade-:year/math/:term/:topic",
        permanent: true,
      },
      {
        source: "/us/subjects/year-:year/:subject(english|science)/:term/:topic",
        destination: "/us/subjects/grade-:year/:subject/:term/:topic",
        permanent: true,
      },
      {
        source: "/us/subjects/year-:year/maths",
        destination: "/us/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/us/subjects/year-:year/math",
        destination: "/us/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/us/subjects/grade-:year/maths",
        destination: "/us/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/us/subjects/year-:year/:subject(english|science)",
        destination: "/us/subjects/grade-:year/:subject",
        permanent: true,
      },
      {
        source: "/us/subjects/year-:year",
        destination: "/us/subjects/grade-:year",
        permanent: true,
      },
      {
        source: "/us/year-:year/maths",
        destination: "/us/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/us/year-:year/math",
        destination: "/us/subjects/grade-:year/math",
        permanent: true,
      },
      {
        source: "/us/year-:year/:subject(english|science)",
        destination: "/us/subjects/grade-:year/:subject",
        permanent: true,
      },
      {
        source: "/us/year-:year",
        destination: "/us/grade-:year",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // US Grade rewrites
      {
        source: "/us/grade-:grade/:subject(math|english|science)",
        destination: "/us/subjects/grade-:grade/:subject",
      },
      {
        source: "/us/grade-:grade",
        destination: "/us/subjects/grade-:grade",
      },
      // CA Grade rewrites
      {
        source: "/ca/grade-:grade/:subject(math|english|science)",
        destination: "/ca/subjects/grade-:grade/:subject",
      },
      {
        source: "/ca/grade-:grade",
        destination: "/ca/subjects/grade-:grade",
      },
      // Existing NZ Year rewrites
      {
        source: "/nz/year-:year/:subject(maths|english|science)",
        destination: "/nz/subjects/year-:year/:subject",
      },
      {
        source: "/nz/year-:year",
        destination: "/nz/subjects/year-:year/maths",
      },
      // Existing AU Year rewrites
      {
        source: "/year-:year/:subject(maths|english|science)",
        destination: "/subjects/year-:year/:subject",
      },
      {
        source: "/year-:year",
        destination: "/subjects/year-:year/maths",
      },
    ];
  },
};

export default nextConfig;
