import { notFound } from "next/navigation";
import SubjectDetailView from "@/components/subjects/SubjectDetailView";
import { subjectsData } from "@/data/subjectsData";
import { getAllSubjectParams } from "@/data/years";

export function generateStaticParams() {
  return getAllSubjectParams("ca");
}

type Props = {
  params: Promise<{ yearId: string; subjectId: string }>;
};

export default async function CaSubjectDetailPage({ params }: Props) {
  const { yearId, subjectId } = await params;
  const yearNum = parseInt(yearId.replace("grade-", "").replace("year-", ""), 10);
  if (isNaN(yearNum) || yearNum < 2 || yearNum > 10) {
    notFound();
  }
  if (!["math", "english", "science"].includes(subjectId)) {
    notFound();
  }
  const yearKey = `year-${yearNum}`;
  const subjectKey = subjectId === "math" ? "maths" : subjectId;
  const yearData = (subjectsData as Record<string, Record<string, unknown>>)[yearKey];
  if (!yearData || !yearData[subjectKey]) {
    notFound();
  }
  return <SubjectDetailView region="ca" />;
}

