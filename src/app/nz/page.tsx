import { buildMetadata } from "@/utils/seo";
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import YearLevels from '@/components/home/YearLevels';
import '@/app/subjects/subjects.css';
import Pricing from '@/components/home/Pricing';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';

export const metadata = buildMetadata({
  path: "/",
  region: "nz",
});

export default function Home() {
  return (
    <>
      <Hero region="nz" />
      <YearLevels region="nz" />
      <HowItWorks region="nz" />
      <Pricing region="nz" />
      <FAQ region="nz" />
      <CTA region="nz" />
    </>
  );
}
