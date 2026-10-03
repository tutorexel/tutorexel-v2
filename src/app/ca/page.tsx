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
  region: "ca",
});

export default function Home() {
  return (
    <>
      <Hero region="ca" />
      <YearLevels region="ca" />
      <HowItWorks region="ca" />
      <Testimonials region="ca" />
      <Pricing region="ca" />
      <FAQ region="ca" />
      <CTA region="ca" />
    </>
  );
}
