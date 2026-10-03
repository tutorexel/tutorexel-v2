import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/subjects",
  region: "us",
});

export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
