import { buildMetadata } from "@/utils/seo";
import TermsView from "@/components/legal/TermsView";

export const metadata = buildMetadata({
  path: "/terms",
  region: "ca",
});

export default function CaTermsPage() {
  return <TermsView region="ca" />;
}
