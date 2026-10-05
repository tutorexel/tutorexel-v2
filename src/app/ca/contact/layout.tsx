import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createContactPageSchema } from "@/utils/schema";

export const metadata = buildMetadata({
  path: "/contact",
  region: "ca",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageSchema = createContactPageSchema("ca");
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/ca" },
    { name: "Contact", url: "https://www.tutorexel.com/ca/contact" },
  ]);

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
