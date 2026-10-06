import { buildMetadata } from "@/utils/seo";
import RefundView from "@/components/legal/RefundView";

export const metadata = buildMetadata({
  path: "/refund",
  region: "au",
});

export default function RefundPolicyPage() {
  return <RefundView region="au" />;
}
