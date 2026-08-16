import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get Started with TutorExel",
  description:
    "Contact TutorExel for online tutoring enquiries. Book your child's free trial class. We respond within 2 hours during business hours.",
  openGraph: {
    title: "Contact Us | Get Started with TutorExel",
    description:
      "Contact TutorExel for online tutoring enquiries. Book your child's free trial class. We respond within 2 hours during business hours.",
    url: "https://tutorexel.com/contact",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get Started with TutorExel",
    description:
      "Contact TutorExel for online tutoring enquiries. Book your child's free trial class. We respond within 2 hours during business hours.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
