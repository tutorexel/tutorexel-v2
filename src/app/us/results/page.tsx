import { buildMetadata } from "@/utils/seo";
import ResultsView from "@/components/results/ResultsView";

export const metadata = buildMetadata({
  path: "/results",
  region: "us",
});

export default function ResultsPage() {
  return <ResultsView region="us" />;
}
