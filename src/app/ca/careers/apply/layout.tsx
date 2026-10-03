import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/careers/apply",
  region: "ca",
  noindex: true,
});

export default function CareersApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
