import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Assessment Test | Know Your Child's Level | TutorExel",
  description:
    "Take our free online assessment to identify your child's strengths and learning gaps. Personalised results and recommendations for Years 2-7.",
  openGraph: {
    title: "Free Assessment Test | Know Your Child's Level | TutorExel",
    description:
      "Take our free online assessment to identify your child's strengths and learning gaps. Personalised results and recommendations for Years 2-7.",
    url: "https://tutorexel.com/free-assessment",
    siteName: "TutorExel",
    locale: "en",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Assessment Test | Know Your Child's Level | TutorExel",
    description:
      "Take our free online assessment to identify your child's strengths and learning gaps. Personalised results and recommendations for Years 2-7.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/free-assessment",
  },
};

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
