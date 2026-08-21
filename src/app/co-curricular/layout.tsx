import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Curricular Music Lessons | TutorExel",
  description:
    "Learn Piano and Guitar online from home. Trinity College London syllabus. Qualified tutors, structured progression, and globally recognised certification.",
  openGraph: {
    title: "Co-Curricular Music Lessons | TutorExel",
    description:
      "Learn Piano and Guitar online from home. Trinity College London syllabus. Qualified tutors, structured progression, and globally recognised certification.",
    url: "https://tutorexel.com/co-curricular",
    siteName: "TutorExel",
    locale: "en",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Co-Curricular Music Lessons | TutorExel",
    description:
      "Learn Piano and Guitar online from home. Trinity College London syllabus. Qualified tutors, structured progression, and globally recognised certification.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/co-curricular",
  },
};

export default function CoCurricularLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
