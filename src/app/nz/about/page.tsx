import { buildMetadata } from "@/utils/seo";
import AboutView from "@/components/about/AboutView";

export const metadata = buildMetadata({
  path: "/about",
  region: "nz",
});

export default function AboutPage() {
  return <AboutView region="nz" />;
}
