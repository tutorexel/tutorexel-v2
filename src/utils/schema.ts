import { REGIONS_CONFIG, COMPANY_POSTAL_ADDRESS, ORGANIZATION_IMAGE, type RegionCode } from "@/data/regions";
import { REGION_LOCALE_MAP, type Region } from "@/utils/seo";

export function getOrganizationSchema(region: RegionCode = "au"): Record<string, unknown> {
  const config = REGIONS_CONFIG[region] || REGIONS_CONFIG.au;

  const descriptions: Record<RegionCode, string> = {
    au: "Australia's leading online tutoring platform aligned with the Australian Curriculum (ACARA). Live online classes in Maths, English, Piano & Guitar.",
    us: "Dedicated online tutoring platform for American students. Live interactive classes in Math, English, and Science aligned to US state standards.",
    ca: "Dedicated online tutoring platform for Canadian students. Live interactive classes in Math, English, and Science aligned to provincial curricula.",
    nz: "Dedicated online tutoring platform for New Zealand students. Live interactive classes in Maths, English, and Science aligned to the NZC framework.",
  };

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TutorExel",
    url: "https://www.tutorexel.com",
    logo: "https://www.tutorexel.com/images/logo.svg",
    image: ORGANIZATION_IMAGE,
    description: descriptions[region] || descriptions.au,
    foundingDate: "2009",
    address: COMPANY_POSTAL_ADDRESS,
    areaServed: {
      "@type": "Country",
      name: config.countryName,
    },
    sameAs: [
      "https://www.facebook.com/tutorexel",
      "https://www.instagram.com/tutorexel",
      "https://www.linkedin.com/company/tutorexel",
    ],
  };

  const telephone = config.phoneE164 || (config.phone ? `+${config.phone.replace(/[^0-9]/g, "")}` : null);

  if (telephone) {
    schema.telephone = telephone;
    schema.contactPoint = {
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: config.code.toUpperCase(),
      availableLanguage: "English",
    };
  }

  return schema;
}

export const organizationSchema: Record<string, unknown> = getOrganizationSchema("au");

export const websiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TutorExel",
  url: "https://www.tutorexel.com",
  publisher: {
    "@type": "EducationalOrganization",
    name: "TutorExel",
  },
};

export function createCourseSchema(
  yearLevel: string,
  subject: string,
  description: string,
  region: RegionCode = "au"
): Record<string, unknown> {
  const config = REGIONS_CONFIG[region] || REGIONS_CONFIG.au;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${yearLevel} ${subject} Tutoring`,
    description,
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    educationalLevel: yearLevel,
    inLanguage: config.locale,
    courseMode: "online",
    ...(region !== "us" && {
      offers: {
        "@type": "Offer",
        category: "Online Tutoring",
        priceCurrency: config.currency,
        eligibleRegion: {
          "@type": "Country",
          name: config.countryName,
        },
      },
    }),
  };
}

export function createFaqSchema(
  faqs: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createBlogPostingSchema(post: {
  title: string;
  excerpt?: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  region?: RegionCode;
  author?: string;
}): Record<string, unknown> {
  const region = post.region || "au";
  const prefix = region === "au" ? "" : `/${region}`;
  const canonicalUrl = `https://www.tutorexel.com${prefix}/blog/${post.slug}`;
  const inLanguage = REGION_LOCALE_MAP[region as Region] || "en-AU";

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || "",
    image: post.image.startsWith("http") ? post.image : `https://www.tutorexel.com${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage,
    author: {
      "@type": "Organization",
      name: post.author || "TutorExel",
      url: "https://www.tutorexel.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tutorexel.com/images/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };
}


export function createServiceSchema(
  services: Array<{
    name: string;
    description: string;
    price: string;
    priceSuffix: string;
  }>,
  region: RegionCode = "au"
): Record<string, unknown>[] {
  const config = REGIONS_CONFIG[region] || REGIONS_CONFIG.au;

  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: {
      "@type": "Country",
      name: config.countryName,
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: config.currency,
      description: service.priceSuffix,
      eligibleRegion: {
        "@type": "Country",
        name: config.countryName,
      },
    },
  }));
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
