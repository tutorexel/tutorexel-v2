import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/co-curricular/guitar",
  region: "nz",
});

export default function GuitarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
