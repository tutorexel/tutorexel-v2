import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piano Lessons Enquiry | TutorExel",
  description:
    "Enquire about online piano lessons for your child. Australian curriculum, Trinity-aligned. Book a free trial at a time that suits you.",
  openGraph: {
    title: "Piano Lessons Enquiry | TutorExel",
    description:
      "Enquire about online piano lessons for your child. Book a free trial lesson with our expert instructors.",
    url: "https://tutorexel.com/co-curricular/piano/enquire",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/banner/og-image.webp",
        width: 1200,
        height: 630,
        alt: "TutorExel - Piano Lessons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piano Lessons Enquiry | TutorExel",
    description:
      "Enquire about online piano lessons for your child. Book a free trial lesson.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/co-curricular/piano/enquire",
  },
};

export default function PianoEnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
