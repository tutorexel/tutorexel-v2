import { buildMetadata } from "@/utils/seo";
import LinksView from "@/components/links/LinksView";

export const metadata = buildMetadata({
  path: "/links",
  region: "nz",
  noindex: true,
});

export default function LinksPage() {
  return <LinksView region="nz" />;
}
