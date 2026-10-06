import { buildMetadata } from "@/utils/seo";
import PrivacyView from "@/components/legal/PrivacyView";

export const metadata = buildMetadata({
  path: "/privacy",
  region: "us",
});

export default function UsPrivacyPolicyPage() {
  return <PrivacyView region="us" />;
}
