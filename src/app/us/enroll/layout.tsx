import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/enroll",
  region: "us",
  noindex: true,
});

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
