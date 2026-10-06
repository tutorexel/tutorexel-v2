import { buildMetadata } from "@/utils/seo";
import PrivacyView from "@/components/legal/PrivacyView";

export const metadata = buildMetadata({
  path: "/privacy",
  region: "nz",
});

export default function NzPrivacyPolicyPage() {
  return <PrivacyView region="nz" />;
}
