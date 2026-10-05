import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  createContactPageSchema,
  createBreadcrumbSchema,
} from "@/utils/schema";

export const metadata = buildMetadata({
  path: "/contact",
  region: "us",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageSchema = createContactPageSchema(
    "https://www.tutorexel.com/us/contact"
  );
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/us" },
    { name: "Contact", url: "https://www.tutorexel.com/us/contact" },
  ]);

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}

