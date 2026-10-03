import { buildMetadata } from "@/utils/seo";
import CareerView from "@/components/careers/CareerView";

export const metadata = buildMetadata({
  path: "/careers",
  region: "nz",
});

export default function CareersPage() {
  return <CareerView region="nz" />;
}
