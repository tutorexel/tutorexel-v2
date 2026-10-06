import { buildMetadata } from "@/utils/seo";
import TermsView from "@/components/legal/TermsView";

export const metadata = buildMetadata({
  path: "/terms",
  region: "us",
});

export default function UsTermsPage() {
  return <TermsView region="us" />;
}
