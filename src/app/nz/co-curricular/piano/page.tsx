import { buildMetadata } from "@/utils/seo";
import PianoView from "@/components/co-curricular/PianoView";

export const metadata = buildMetadata({
  path: "/co-curricular/piano",
  region: "nz",
});

export default function PianoPage() {
  return <PianoView region="nz" />;
}
