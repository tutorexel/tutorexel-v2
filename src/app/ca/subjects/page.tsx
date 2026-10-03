import { buildMetadata } from "@/utils/seo";
import SubjectsView from "@/components/subjects/SubjectsView";

export const metadata = buildMetadata({
  path: "/subjects",
  region: "ca",
});

export default function SubjectsPage() {
  return <SubjectsView region="ca" />;
}
