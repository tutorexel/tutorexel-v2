import { buildMetadata } from "@/utils/seo";
import RefundView from "@/components/legal/RefundView";

export const metadata = buildMetadata({
  path: "/refund",
  region: "us",
});

export default function UsRefundPolicyPage() {
  return <RefundView region="us" />;
}
