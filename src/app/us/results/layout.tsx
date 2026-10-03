import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/results",
  region: "us",
});

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
