import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  createFaqSchema,
  createBreadcrumbSchema,
  createServiceSchema,
} from "@/utils/schema";

export const metadata = buildMetadata({
  path: "/pricing",
  region: "au",
});

const pricingFaqItems = [
  {
    question: "Is there a minimum commitment?",
    answer:
      "No long-term contracts. You pay monthly in advance and can cancel anytime with 2 weeks notice.",
  },
  {
    question: "What if my child misses a class?",
    answer:
      "We offer make-up sessions for any missed classes. Simply let us know in advance and we will schedule a replacement session at a time that works for your family.",
  },
  {
    question: "Can I switch between plans?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle. Our team will help you find the right fit for your child's needs.",
  },
  {
    question: "Are there sibling discounts?",
    answer:
      "Yes, we offer a 10% discount for each additional sibling enrolled. Contact our team to set up sibling pricing. The discount applies to all plans.",
  },
  {
    question: "Is the assessment really free?",
    answer:
      "Yes, 100% free with no obligation. The diagnostic assessment helps us understand your child's current level and identify learning gaps. You will receive a detailed report regardless of whether you enrol.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, as well as direct bank transfers. Payments are processed securely and you will receive a receipt for every transaction.",
  },
];

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = createFaqSchema(pricingFaqItems);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com" },
    { name: "Pricing", url: "https://www.tutorexel.com/pricing" },
  ]);
  const serviceSchemas = createServiceSchema([
    {
      name: "Live Online Maths & English Tutoring - Group (3:1)",
      description:
        "Small group online tutoring sessions (max 3 students) for Years 2-7, aligned to the Australian Curriculum (ACARA). Includes weekly practice worksheets, progress tests, and free diagnostic assessment.",
      price: "55",
      priceSuffix: "per month per subject",
    },
    {
      name: "Live Online Maths & English Tutoring - 1:1",
      description:
        "Personalised one-on-one online tutoring for Years 2-7, aligned to the Australian Curriculum (ACARA). Includes weekly practice worksheets, progress tests, and free diagnostic assessment.",
      price: "109",
      priceSuffix: "per month per subject",
    },
    {
      name: "Premium Plan - Complete Learning Package",
      description:
        "12 live classes per month covering Maths, English and Science for Years 2-7. Includes recorded session access, weekly progress reports, and WhatsApp support.",
      price: "249",
      priceSuffix: "per month",
    },
  ]);

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {serviceSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      {children}
    </>
  );
}
