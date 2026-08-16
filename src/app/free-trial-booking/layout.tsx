import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Trial Class | TutorExel",
  description:
    "Book your free trial class with TutorExel. Choose a convenient time slot and experience Australian curriculum-aligned online tutoring.",
  openGraph: {
    title: "Book a Free Trial Class | TutorExel",
    description:
      "Book your free trial class with TutorExel. Choose a convenient time slot and experience Australian curriculum-aligned online tutoring.",
    url: "https://tutorexel.com/free-trial-booking",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Book a Free Trial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Trial Class | TutorExel",
    description:
      "Book your free trial class with TutorExel. Choose a convenient time slot and experience Australian curriculum-aligned online tutoring.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/free-trial-booking",
  },
};

export default function FreeTrialBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
