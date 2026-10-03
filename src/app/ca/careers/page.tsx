import { buildMetadata } from "@/utils/seo";
import CareerView from "@/components/careers/CareerView";

export const metadata = buildMetadata({
  path: "/careers",
  region: "ca",
});

export default function CareersPage() {
  return <CareerView region="ca" />;
}
