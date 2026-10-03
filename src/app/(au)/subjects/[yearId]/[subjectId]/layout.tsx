import { Metadata } from 'next';
import { buildMetadata } from "@/utils/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ yearId: string; subjectId: string }>;
}): Promise<Metadata> {
  const { yearId, subjectId } = await params;
  return buildMetadata({
    path: `/subjects/${yearId}/${subjectId}`,
    region: 'au',
  });
}

export default function SubjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
