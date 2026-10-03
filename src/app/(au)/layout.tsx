import RootLayoutBase from "@/components/layout/RootLayoutBase";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/",
  region: "au",
});

export default function AuLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutBase lang="en-AU">{children}</RootLayoutBase>;
}
