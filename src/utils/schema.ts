export const organizationSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "TutorExel",
  url: "https://tutorexel.com",
  logo: "https://tutorexel.com/images/logo.svg",
  description:
    "Australia's leading online tutoring platform aligned with the Australian Curriculum (ACARA). Live online classes in Maths, English, Piano & Guitar.",
  foundingDate: "2009",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  sameAs: [
    "https://www.facebook.com/tutorexel",
    "https://www.instagram.com/tutorexel",
    "https://www.linkedin.com/company/tutorexel",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61-470-330-548",
    contactType: "customer service",
    availableLanguage: "English",
    areaServed: "AU",
  },
};

export const websiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TutorExel",
  url: "https://tutorexel.com",
  publisher: {
    "@type": "EducationalOrganization",
    name: "TutorExel",
  },
};

export function createCourseSchema(
  yearLevel: string,
  subject: string,
  description: string
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${yearLevel} ${subject} Tutoring`,
    description,
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://tutorexel.com",
    },
    educationalLevel: yearLevel,
    inLanguage: "en-AU",
    courseMode: "online",
    offers: {
      "@type": "Offer",
      category: "Online Tutoring",
      priceCurrency: "AUD",
      eligibleRegion: {
        "@type": "Country",
        name: "Australia",
      },
    },
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
  excerpt: string;
  image: string;
  datePublished: string;
  slug: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://tutorexel.com${post.image}`,
    datePublished: post.datePublished,
    author: {
      "@type": "Organization",
      name: "TutorExel",
      url: "https://tutorexel.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TutorExel",
      url: "https://tutorexel.com",
      logo: {
        "@type": "ImageObject",
        url: "https://tutorexel.com/images/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tutorexel.com/blog/${post.slug}`,
    },
  };
}

export function createServiceSchema(
  services: Array<{
    name: string;
    description: string;
    price: string;
    priceSuffix: string;
  }>
): Record<string, unknown>[] {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://tutorexel.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "AUD",
      description: service.priceSuffix,
      eligibleRegion: {
        "@type": "Country",
        name: "Australia",
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

export const reviewSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "TutorExel",
  url: "https://tutorexel.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "My daughter went from struggling with fractions to confidently solving complex problems. Best decision we made for her education!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rajesh Kumar" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "We tried two other tutoring services before TutorExel. The difference is night and day. My son actually looks forward to his classes now.",
    },
  ],
};
