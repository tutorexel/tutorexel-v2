import { buildMetadata } from "@/utils/seo";
import ThankYouView from "@/components/thank-you/ThankYouView";

export const metadata = buildMetadata({
  path: "/thank-you",
  region: "nz",
  noindex: true,
});

export default function ThankYouPage() {
  return <ThankYouView region="nz" />;
}
