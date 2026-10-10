import { buildMetadata } from "@/utils/seo";
import CookieView from "@/components/cookies/CookieView";

export const metadata = buildMetadata({
  path: "/cookies",
  region: "au",
});

export default function CookiePolicyPage() {
  return <CookieView region="au" />;
}
