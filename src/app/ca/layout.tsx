import RootLayoutBase from "@/components/layout/RootLayoutBase";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/",
  region: "ca",
});

export default function CaLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutBase lang="en-CA">{children}</RootLayoutBase>;
}
