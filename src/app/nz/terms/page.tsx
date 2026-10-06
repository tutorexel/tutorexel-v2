import { buildMetadata } from "@/utils/seo";
import TermsView from "@/components/legal/TermsView";

export const metadata = buildMetadata({
  path: "/terms",
  region: "nz",
});

export default function NzTermsPage() {
  return <TermsView region="nz" />;
}
