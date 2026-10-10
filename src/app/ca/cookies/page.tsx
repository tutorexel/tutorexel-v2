import { buildMetadata } from "@/utils/seo";
import CookieView from "@/components/cookies/CookieView";

export const metadata = buildMetadata({
  path: "/cookies",
  region: "ca",
});

export default function CookiePolicyPage() {
  return <CookieView region="ca" />;
}
