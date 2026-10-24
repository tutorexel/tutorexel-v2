import { buildMetadata } from "@/utils/seo";
import EnrollView from "@/components/enroll/EnrollView";

export const metadata = buildMetadata({
  path: "/enroll",
  region: "au",
  noindex: true,
});

export default function EnrollPage() {
  return <EnrollView region="au" />;
}
