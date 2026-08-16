import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guitar Lessons Enquiry | TutorExel",
  description:
    "Enquire about online guitar lessons for your child. Expert instructors, flexible schedule. Book a free trial lesson today.",
  openGraph: {
    title: "Guitar Lessons Enquiry | TutorExel",
    description:
      "Enquire about online guitar lessons for your child. Book a free trial lesson with our expert instructors.",
    url: "https://tutorexel.com/co-curricular/guitar/enquire",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/banner/og-image.webp",
        width: 1200,
        height: 630,
        alt: "TutorExel - Guitar Lessons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guitar Lessons Enquiry | TutorExel",
    description:
      "Enquire about online guitar lessons for your child. Book a free trial lesson.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/co-curricular/guitar/enquire",
  },
};

export default function GuitarEnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
