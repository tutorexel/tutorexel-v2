import { Metadata } from "next";
import { getRegionalAlternates } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Online Piano Lessons - Trinity College London Syllabus | TutorExel",
  description:
    "Learn piano online with qualified tutors following the Trinity College London syllabus. From beginner to Grade 8. Ages 5+. Book a free trial lesson.",
  openGraph: {
    title: "Online Piano Lessons - Trinity College London Syllabus | TutorExel",
    description:
      "Learn piano online with qualified tutors following the Trinity College London syllabus. From beginner to Grade 8. Ages 5+. Book a free trial lesson.",
    url: "https://tutorexel.com/co-curricular/piano",
    siteName: "TutorExel",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Piano Lessons - Trinity College London Syllabus | TutorExel",
    description:
      "Learn piano online with qualified tutors following the Trinity College London syllabus. From beginner to Grade 8. Ages 5+. Book a free trial lesson.",
  },
  alternates: getRegionalAlternates('/co-curricular/piano', 'ca'),
};

export default function PianoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
