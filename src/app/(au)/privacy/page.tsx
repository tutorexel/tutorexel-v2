import { buildMetadata } from "@/utils/seo";
import PrivacyView from "@/components/legal/PrivacyView";

export const metadata = buildMetadata({
  path: "/privacy",
  region: "au",
});

export default function PrivacyPolicyPage() {
  return <PrivacyView region="au" />;
}
