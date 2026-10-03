import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/free-assessment",
  region: "au",
});

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
