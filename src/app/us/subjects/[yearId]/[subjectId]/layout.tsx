import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from "@/utils/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ yearId: string; subjectId: string }>;
}): Promise<Metadata> {
  const { yearId, subjectId } = await params;
  const yearNum = parseInt(yearId.replace("year-", ""), 10);
  if (isNaN(yearNum) || yearNum < 2 || yearNum > 7) {
    notFound();
  }
  return buildMetadata({
    path: `/subjects/${yearId}/${subjectId}`,
    region: 'us',
  });
}

export default function SubjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
