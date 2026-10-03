import { buildMetadata } from "@/utils/seo";
import PianoView from "@/components/co-curricular/PianoView";

export const metadata = buildMetadata({
  path: "/co-curricular/piano",
  region: "us",
});

export default function PianoPage() {
  return <PianoView region="us" />;
}
