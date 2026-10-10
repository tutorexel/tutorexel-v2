import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AuYearLandingView from "@/components/subjects/AuYearLandingView";
import { AU_YEAR_PAGES_DATA } from "@/data/au-year-pages";

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
  const yearData = AU_YEAR_PAGES_DATA[yearId];

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

export default async function AuYearLandingPage({ params }: Props) {
  const { yearId } = await params;
  const yearData = AU_YEAR_PAGES_DATA[yearId];

  if (!yearData) {
    notFound();
  }

  return <AuYearLandingView data={yearData} />;
}
