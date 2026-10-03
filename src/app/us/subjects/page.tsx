import { buildMetadata } from "@/utils/seo";
import SubjectsView from "@/components/subjects/SubjectsView";

export const metadata = buildMetadata({
  path: "/subjects",
  region: "us",
});

export default function SubjectsPage() {
  return <SubjectsView region="us" />;
}
