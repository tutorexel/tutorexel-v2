import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createFaqSchema,
  createBreadcrumbSchema,
  createServiceSchema,
} from "@/utils/schema";

export const metadata: Metadata = {
  title: "Pricing | Affordable Online Tutoring Plans | TutorExel",
  description:
    "Simple, transparent pricing for online tutoring. From $39/month for group classes to $219/month premium plans. Maths, English, Science, Piano & Guitar for Years 2-7.",
  openGraph: {
    title: "Pricing | Affordable Online Tutoring Plans | TutorExel",
    description:
      "Simple, transparent pricing for online tutoring. From $39/month for group classes to $219/month premium plans. Maths, English, Science, Piano & Guitar for Years 2-7.",
    url: "https://tutorexel.com/pricing",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Affordable Online Tutoring Plans | TutorExel",
    description:
      "Simple, transparent pricing for online tutoring. From $39/month for group classes to $219/month premium plans. Maths, English, Science, Piano & Guitar for Years 2-7.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/pricing",
  },
};

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
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Pricing", url: "https://tutorexel.com/pricing" },
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
