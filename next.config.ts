import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
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
  async redirects() {
    return [
      // Old US paths redirect to root (US is now root)
      {
        source: "/us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/us/:path*",
        destination: "/:path*",
        permanent: true,
      },
      // AU-only paths redirect to /au/
      {
        source: "/naplan-preparation",
        destination: "/au/naplan-preparation",
        permanent: true,
      },
      {
        source: "/naplan-preparation/:path*",
        destination: "/au/naplan-preparation/:path*",
        permanent: true,
      },
      {
        source: "/online-tutoring/:city",
        destination: "/au/online-tutoring/:city",
        permanent: true,
      },
      {
        source: "/research/australian-tutoring-report-2026",
        destination: "/au/research/australian-tutoring-report-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
