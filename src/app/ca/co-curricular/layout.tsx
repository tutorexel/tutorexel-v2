import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/co-curricular",
  region: "ca",
});

export default function CoCurricularLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
