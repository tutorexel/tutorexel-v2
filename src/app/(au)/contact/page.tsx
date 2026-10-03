import { buildMetadata } from "@/utils/seo";
import ContactView from "@/components/contact/ContactView";

export const metadata = buildMetadata({
  path: "/contact",
  region: "au",
});

export default function ContactPage() {
  return <ContactView region="au" />;
}
