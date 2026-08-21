import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Hub | Tutoring Tips & Parent Guides | TutorExel Blog",
  description:
    "Expert tips on maths, English, NAPLAN preparation, and study skills. Guides for Australian parents to support their child's learning.",
  openGraph: {
    title: "Learning Hub | Tutoring Tips & Parent Guides | TutorExel Blog",
    description:
      "Expert tips on maths, English, NAPLAN preparation, and study skills. Guides for Australian parents to support their child's learning.",
    url: "https://tutorexel.com/blog",
    siteName: "TutorExel",
    locale: "en",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Hub | Tutoring Tips & Parent Guides | TutorExel Blog",
    description:
      "Expert tips on maths, English, NAPLAN preparation, and study skills. Guides for Australian parents to support their child's learning.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
