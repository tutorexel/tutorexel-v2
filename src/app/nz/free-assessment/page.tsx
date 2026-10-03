import { buildMetadata } from "@/utils/seo";
import FreeAssessmentView from "@/components/free-assessment/FreeAssessmentView";

export const metadata = buildMetadata({
  path: "/free-assessment",
  region: "nz",
});

export default function FreeAssessmentPage() {
  return <FreeAssessmentView region="nz" />;
}
