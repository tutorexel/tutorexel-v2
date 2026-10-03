import { buildMetadata } from "@/utils/seo";
import FreeTrialThankYouView from "@/components/thank-you/FreeTrialThankYouView";

export const metadata = buildMetadata({
  path: "/free-trial-booking/thank-you",
  region: "nz",
  noindex: true,
});

export default function FreeTrialThankYouPage() {
  return <FreeTrialThankYouView region="nz" />;
}
