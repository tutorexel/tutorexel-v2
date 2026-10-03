import { buildMetadata } from "@/utils/seo";
import CoCurricularView from "@/components/co-curricular/CoCurricularView";

export const metadata = buildMetadata({
  path: "/co-curricular",
  region: "ca",
});

export default function CoCurricularPage() {
  return <CoCurricularView region="ca" />;
}
