import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrol Now | Start Online Tutoring | TutorExel",
  description:
    "Enrol your child in TutorExel's online tutoring programmes. Choose from Maths, English, Piano, Guitar, or our all-inclusive Premium Plan.",
  openGraph: {
    title: "Enrol Now | Start Online Tutoring | TutorExel",
    description:
      "Enrol your child in TutorExel's online tutoring programmes. Choose from Maths, English, Piano, Guitar, or our all-inclusive Premium Plan.",
    url: "https://tutorexel.com/enroll",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrol Now | Start Online Tutoring | TutorExel",
    description:
      "Enrol your child in TutorExel's online tutoring programmes. Choose from Maths, English, Piano, Guitar, or our all-inclusive Premium Plan.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/enroll",
  },
};

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
