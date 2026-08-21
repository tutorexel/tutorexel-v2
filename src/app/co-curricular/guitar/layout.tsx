import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Guitar Lessons - Trinity College London Syllabus | TutorExel",
  description:
    "Learn guitar online with qualified tutors following the Trinity College London syllabus. From beginner to Grade 8. Ages 8+. Book a free trial lesson.",
  openGraph: {
    title: "Online Guitar Lessons - Trinity College London Syllabus | TutorExel",
    description:
      "Learn guitar online with qualified tutors following the Trinity College London syllabus. From beginner to Grade 8. Ages 8+. Book a free trial lesson.",
    url: "https://tutorexel.com/co-curricular/guitar",
    siteName: "TutorExel",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Guitar Lessons - Trinity College London Syllabus | TutorExel",
    description:
      "Learn guitar online with qualified tutors following the Trinity College London syllabus. From beginner to Grade 8. Ages 8+. Book a free trial lesson.",
  },
  alternates: {
    canonical: "https://tutorexel.com/co-curricular/guitar",
  },
};

export default function GuitarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
