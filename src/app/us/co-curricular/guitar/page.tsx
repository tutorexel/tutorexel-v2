import { buildMetadata } from "@/utils/seo";
import GuitarView from "@/components/co-curricular/GuitarView";

export const metadata = buildMetadata({
  path: "/co-curricular/guitar",
  region: "us",
});

export default function GuitarPage() {
  return <GuitarView region="us" />;
}
