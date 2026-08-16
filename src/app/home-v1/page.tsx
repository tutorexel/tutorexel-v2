import type { Metadata } from "next";
import HeroV1 from '@/components/home/HeroV1';
import HowItWorks from '@/components/home/HowItWorks';
import YearLevels from '@/components/home/YearLevels';
import '@/app/subjects/subjects.css';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: "TutorExel v1 Preview - 1-on-1 Australian Tutoring From $28/class",
  description:
    "Preview build. Live personal 1-on-1 tutoring for Years 2-7 with qualified Australian teachers. Just $28/class. First class is free.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://tutorexel.com",
  },
};

export default function HomeV1() {
  return (
    <>
      <HeroV1 />
      <YearLevels />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
