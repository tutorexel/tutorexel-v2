import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/blog",
  region: "us",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
