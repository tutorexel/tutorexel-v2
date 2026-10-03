import { notFound } from "next/navigation";
import SubjectDetailView from "@/components/subjects/SubjectDetailView";
import { subjectsData } from "@/data/subjectsData";
import { getAllSubjectParams } from "@/data/years";

export function generateStaticParams() {
  return getAllSubjectParams("nz");
}

type Props = {
  params: Promise<{ yearId: string; subjectId: string }>;
};

export default async function NzSubjectDetailPage({ params }: Props) {
  const { yearId, subjectId } = await params;
  const yearNum = parseInt(yearId.replace("year-", ""), 10);
  if (isNaN(yearNum) || yearNum < 2 || yearNum > 7) {
    notFound();
  }
  const yearData = (subjectsData as Record<string, Record<string, unknown>>)[yearId];
  if (!yearData || !yearData[subjectId]) {
    notFound();
  }
  return <SubjectDetailView region="nz" />;
}

