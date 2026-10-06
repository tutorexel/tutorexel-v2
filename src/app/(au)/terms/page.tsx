import { buildMetadata } from "@/utils/seo";
import TermsView from "@/components/legal/TermsView";

export const metadata = buildMetadata({
  path: "/terms",
  region: "au",
});

export default function TermsPage() {
  return <TermsView region="au" />;
}
