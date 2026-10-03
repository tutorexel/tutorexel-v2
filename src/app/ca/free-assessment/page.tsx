import { buildMetadata } from "@/utils/seo";
import FreeAssessmentView from "@/components/free-assessment/FreeAssessmentView";

export const metadata = buildMetadata({
  path: "/free-assessment",
  region: "ca",
});

export default function FreeAssessmentPage() {
  return <FreeAssessmentView region="ca" />;
}
