import { buildMetadata } from "@/utils/seo";
import ContactView from "@/components/contact/ContactView";

export const metadata = buildMetadata({
  path: "/contact",
  region: "ca",
});

export default function ContactPage() {
  return <ContactView region="ca" />;
}
