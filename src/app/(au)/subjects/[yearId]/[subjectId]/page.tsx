import { notFound } from "next/navigation";
import SubjectDetailView from "@/components/subjects/SubjectDetailView";
import { subjectsData } from "@/data/subjectsData";
import { getAllSubjectParams } from "@/data/years";

export function generateStaticParams() {
  return getAllSubjectParams("au");
}

type Props = {
  params: Promise<{ yearId: string; subjectId: string }>;
};

export default async function SubjectDetailPage({ params }: Props) {
  const { yearId, subjectId } = await params;
  const yearData = (subjectsData as Record<string, Record<string, unknown>>)[yearId];
  if (!yearData || !yearData[subjectId]) {
    notFound();
  }
  return <SubjectDetailView region="au" />;
}

