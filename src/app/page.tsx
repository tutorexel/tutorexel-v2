import type { Metadata } from "next";
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';

import YearLevels from '@/components/home/YearLevels';
import '@/app/subjects/subjects.css';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: "TutorExel - #1 Online Tutoring in Australia",
  description:
    "Australia's top online tutoring with experienced teachers and curriculum-aligned live classes. Maths, English, Science & Music. Free trial available.",
  openGraph: {
    title: "TutorExel - #1 Online Tutoring in Australia",
    description:
      "Australia's top online tutoring with experienced teachers and curriculum-aligned live classes. Maths, English, Science & Music. Free trial available.",
    url: "https://tutorexel.com",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TutorExel - #1 Online Tutoring in Australia",
    description:
      "Australia's top online tutoring with experienced teachers and curriculum-aligned live classes. Maths, English, Science & Music. Free trial available.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <YearLevels />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
