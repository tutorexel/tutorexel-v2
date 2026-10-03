import RootLayoutBase from "@/components/layout/RootLayoutBase";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/",
  region: "nz",
});

export default function NzLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutBase lang="en-NZ">{children}</RootLayoutBase>;
}
