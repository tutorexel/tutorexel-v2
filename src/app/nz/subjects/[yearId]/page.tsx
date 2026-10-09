import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NzYearLandingView from "@/components/subjects/NzYearLandingView";
import { NZ_YEAR_PAGES_DATA } from "@/data/nz-year-pages";

export function generateStaticParams() {
  return [2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
    yearId: `year-${num}`,
  }));
}

type Props = {
  params: Promise<{ yearId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { yearId } = await params;
  const yearData = NZ_YEAR_PAGES_DATA[yearId];

  if (!yearData) {
    return {};
  }

  return {
    title: yearData.meta.title,
    description: yearData.meta.description,
    alternates: {
      canonical: yearData.meta.canonical,
    },
  };
}

export default async function NzYearLandingPage({ params }: Props) {
  const { yearId } = await params;
  const yearData = NZ_YEAR_PAGES_DATA[yearId];

  if (!yearData) {
    notFound();
  }

  return <NzYearLandingView data={yearData} />;
}
