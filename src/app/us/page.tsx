import { buildMetadata } from "@/utils/seo";
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';

import YearLevels from '@/components/home/YearLevels';
import '@/app/subjects/subjects.css';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export const metadata = buildMetadata({
  path: "/",
  region: "us",
});

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
