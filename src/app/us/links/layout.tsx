import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/links",
  region: "us",
});

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
