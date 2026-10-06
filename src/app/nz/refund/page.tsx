import { buildMetadata } from "@/utils/seo";
import RefundView from "@/components/legal/RefundView";

export const metadata = buildMetadata({
  path: "/refund",
  region: "nz",
});

export default function NzRefundPolicyPage() {
  return <RefundView region="nz" />;
}
