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
      // Online Tutoring
      {
        source: "/us/online-tutoring",
        destination: "/online-tutoring",
        permanent: true,
      },
      {
        source: "/us/online-tutoring/:path*",
        destination: "/online-tutoring/:path*",
        permanent: true,
      },
      {
        source: "/ca/online-tutoring",
        destination: "/online-tutoring",
        permanent: true,
      },
      {
        source: "/ca/online-tutoring/:path*",
        destination: "/online-tutoring/:path*",
        permanent: true,
      },
      {
        source: "/nz/online-tutoring",
        destination: "/online-tutoring",
        permanent: true,
      },
      {
        source: "/nz/online-tutoring/:path*",
        destination: "/online-tutoring/:path*",
        permanent: true,
      },
      // Research
      {
        source: "/us/research",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/us/research/:path*",
        destination: "/research/:path*",
        permanent: true,
      },
      {
        source: "/ca/research",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/ca/research/:path*",
        destination: "/research/:path*",
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
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ca/year-:year/:subject(maths|english|science)",
        destination: "/ca/subjects/year-:year/:subject",
      },
      {
        source: "/ca/year-:year",
        destination: "/ca/subjects/year-:year/maths",
      },
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
