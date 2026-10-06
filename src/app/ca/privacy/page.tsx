import { buildMetadata } from "@/utils/seo";
import PrivacyView from "@/components/legal/PrivacyView";

export const metadata = buildMetadata({
  path: "/privacy",
  region: "ca",
});

export default function CaPrivacyPolicyPage() {
  return <PrivacyView region="ca" />;
}
