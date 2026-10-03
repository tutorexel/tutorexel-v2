import { buildMetadata } from "@/utils/seo";
import PricingView from "@/components/pricing/PricingView";

export const metadata = buildMetadata({
  path: "/pricing",
  region: "ca",
});

export default function PricingPage() {
  return <PricingView region="ca" />;
}
