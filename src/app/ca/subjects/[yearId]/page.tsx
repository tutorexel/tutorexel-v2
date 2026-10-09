import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaGradeLandingView from "@/components/subjects/CaGradeLandingView";
import { CA_GRADE_PAGES_DATA } from "@/data/ca-grade-pages";

export function generateStaticParams() {
  return [2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
    yearId: `grade-${num}`,
  }));
}

type Props = {
  params: Promise<{ yearId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { yearId } = await params;
  const gradeData = CA_GRADE_PAGES_DATA[yearId];

  if (!gradeData) {
    return {};
  }

  return {
    title: gradeData.meta.title,
    description: gradeData.meta.description,
    alternates: {
      canonical: gradeData.meta.canonical,
    },
  };
}

export default async function CaGradeLandingPage({ params }: Props) {
  const { yearId } = await params;
  const gradeData = CA_GRADE_PAGES_DATA[yearId];

  if (!gradeData) {
    notFound();
  }

  return <CaGradeLandingView data={gradeData} />;
}
