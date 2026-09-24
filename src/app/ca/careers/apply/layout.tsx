import type { Metadata } from "next";
import { getRegionalAlternates } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Apply Now | Teaching Careers | TutorExel",
  description:
    "Join TutorExel as an online tutor. Apply now to teach Students Worldwide in maths, English, piano, or guitar.",
  openGraph: {
    title: "Apply Now | Teaching Careers | TutorExel",
    description:
      "Join TutorExel as an online tutor. Apply now to teach Students Worldwide in maths, English, piano, or guitar.",
    url: "https://tutorexel.com/careers/apply",
    siteName: "TutorExel",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Now | Teaching Careers | TutorExel",
    description:
      "Join TutorExel as an online tutor. Apply now to teach Students Worldwide in maths, English, piano, or guitar.",
  },
  alternates: getRegionalAlternates('/careers/apply', 'ca'),
};

export default function CareersApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
