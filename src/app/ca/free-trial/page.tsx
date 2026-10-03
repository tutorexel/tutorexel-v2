import { buildMetadata } from "@/utils/seo";
import FreeTrialView from "@/components/free-trial/FreeTrialView";

export const metadata = buildMetadata({
  path: "/free-trial",
  region: "ca",
});

export default function FreeTrialPage() {
  return <FreeTrialView region="ca" />;
}
