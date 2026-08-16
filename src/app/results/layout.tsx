import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Results & Success Stories | TutorExel",
  description:
    "See real results from TutorExel students. Our Australian curriculum-aligned tutoring delivers measurable improvements in maths and English.",
  openGraph: {
    title: "Student Results & Success Stories | TutorExel",
    description:
      "See real results from TutorExel students. Our Australian curriculum-aligned tutoring delivers measurable improvements in maths and English.",
    url: "https://tutorexel.com/results",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Results & Success Stories | TutorExel",
    description:
      "See real results from TutorExel students. Our Australian curriculum-aligned tutoring delivers measurable improvements in maths and English.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/results",
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
