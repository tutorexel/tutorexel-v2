import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/utils/schema";

export const metadata = buildMetadata({
  path: "/pricing",
  region: "ca",
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/ca" },
    { name: "Pricing", url: "https://www.tutorexel.com/ca/pricing" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
