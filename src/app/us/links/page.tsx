import { buildMetadata } from "@/utils/seo";
import LinksView from "@/components/links/LinksView";

export const metadata = buildMetadata({
  path: "/links",
  region: "us",
  noindex: true,
});

export default function LinksPage() {
  return <LinksView region="us" />;
}
