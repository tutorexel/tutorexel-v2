import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/links",
  region: "au",
});

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
