import { buildMetadata } from "@/utils/seo";
import RefundView from "@/components/legal/RefundView";

export const metadata = buildMetadata({
  path: "/refund",
  region: "ca",
});

export default function CaRefundPolicyPage() {
  return <RefundView region="ca" />;
}
