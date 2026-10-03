import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/co-curricular/piano",
  region: "au",
});

export default function PianoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
