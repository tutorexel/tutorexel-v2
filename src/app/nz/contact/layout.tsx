import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createContactPageSchema } from "@/utils/schema";

export const metadata = buildMetadata({
  path: "/contact",
  region: "nz",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageSchema = createContactPageSchema(
    "https://www.tutorexel.com/nz/contact",
    "Questions about online tutoring for your child in Years 2 to 10? Contact TutorExel by form, email or WhatsApp and book a free trial class. We reply in 2 hours."
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/nz" },
    { name: "Contact", url: "https://www.tutorexel.com/nz/contact" },
  ]);

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
