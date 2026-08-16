import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Trial Class | TutorExel",
  description:
    "Try TutorExel free. Book a no-obligation trial class for your child. Experience our Australian curriculum-aligned online tutoring firsthand.",
  openGraph: {
    title: "Book a Free Trial Class | TutorExel",
    description:
      "Try TutorExel free. Book a no-obligation trial class for your child. Experience our Australian curriculum-aligned online tutoring firsthand.",
    url: "https://tutorexel.com/free-trial",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Trial Class | TutorExel",
    description:
      "Try TutorExel free. Book a no-obligation trial class for your child. Experience our Australian curriculum-aligned online tutoring firsthand.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/free-trial",
  },
};

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
