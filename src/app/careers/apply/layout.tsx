import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | Teaching Careers | TutorExel",
  description:
    "Join TutorExel as an online tutor. Apply now to teach Australian students in maths, English, piano, or guitar.",
  openGraph: {
    title: "Apply Now | Teaching Careers | TutorExel",
    description:
      "Join TutorExel as an online tutor. Apply now to teach Australian students in maths, English, piano, or guitar.",
    url: "https://tutorexel.com/careers/apply",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Now | Teaching Careers | TutorExel",
    description:
      "Join TutorExel as an online tutor. Apply now to teach Australian students in maths, English, piano, or guitar.",
  },
  alternates: {
    canonical: "https://tutorexel.com/careers/apply",
  },
};

export default function CareersApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
