import { buildMetadata } from "@/utils/seo";
import SubjectsView from "@/components/subjects/SubjectsView";

export const metadata = buildMetadata({
  path: "/subjects",
  region: "au",
});

export default function SubjectsPage() {
  return <SubjectsView region="au" />;
}
