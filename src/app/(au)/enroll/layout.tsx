import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/enroll",
  region: "au",
  noindex: true,
});

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
