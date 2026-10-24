import { buildMetadata } from "@/utils/seo";
import ApplyView from "@/components/careers/ApplyView";

export const metadata = buildMetadata({
  path: "/careers/apply",
  region: "ca",
  noindex: true,
});

export default function CareersApplyPage() {
  return <ApplyView region="ca" />;
}
