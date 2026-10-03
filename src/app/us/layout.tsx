import RootLayoutBase from "@/components/layout/RootLayoutBase";
import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/",
  region: "us",
});

export default function UsLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutBase lang="en-US">{children}</RootLayoutBase>;
}
