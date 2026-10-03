import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/free-assessment",
  region: "us",
});

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
