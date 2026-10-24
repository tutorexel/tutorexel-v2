// One Organization entity, referenced everywhere by @id.
// Use organizationJsonLd(region) in the root layout (replaces the current EducationalOrganization block),
// and orgRef in WebSite.publisher, BlogPosting.publisher, Course.provider and Service.provider.
// Items marked CONFIRM need the client's sign-off before going live.

export const SITE = "https://www.tutorexel.com";
export const ORG_ID = `${SITE}/#organization`;

export type Region = "au" | "us" | "ca" | "nz";

// Verified live 24 Oct 2026. The current sameAs (instagram.com/tutorexel, facebook.com/tutorexel,
// linkedin.com/company/tutorexel) point to an unrelated account, a personal profile and a dead page.
const SAME_AS = [
  "https://www.linkedin.com/company/tutor-exel",
  "https://www.instagram.com/tutorexellearning/",
  "https://www.facebook.com/profile.php?id=61579444003084",
  "https://www.localsearch.com.au/profile/tutorexel/cmob4ebes002e02l18304hamn",
  // Add when live: Trustpilot / ProductReview.com.au / YouTube channel / Google Business Profile
];

const PHONES: Record<Region, string> = {
  au: "+61-469-833-028",
  nz: "+61-469-833-028",
  us: "+1-206-797-7387",
  ca: "+1-206-797-7387",
};

const COUNTRY: Record<Region, string> = {
  au: "Australia",
  us: "United States",
  ca: "Canada",
  nz: "New Zealand",
};

export const orgRef = { "@id": ORG_ID };

export function organizationJsonLd(region: Region = "au") {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: "TutorExel",
    url: SITE,
    logo: `${SITE}/images/logo.svg`,
    image: `${SITE}/images/og-hero.jpg`,
    description:
      "Live online tutoring in Maths, English and Science for school students in Australia, the United States, Canada and New Zealand, delivered 1-on-1 or in small groups and aligned to each country's curriculum.",
    // foundingDate removed: "2009" is not stated on the site and public records show TutorExel LLP incorporated in 2026. CONFIRM before re-adding.
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Statham View",
      addressLocality: "Cranbourne West",
      addressRegion: "VIC",
      postalCode: "3977",
      addressCountry: "AU",
    },
    areaServed: Object.values(COUNTRY).map((name) => ({ "@type": "Country", name })),
    contactPoint: (Object.entries(PHONES) as [Region, string][]).map(([r, telephone]) => ({
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: r.toUpperCase(),
      availableLanguage: "English",
    })),
    telephone: PHONES[region] ?? PHONES.au,
    knowsAbout: [
      "Mathematics tutoring",
      "English tutoring",
      "Science tutoring",
      "NAPLAN preparation",
      "ICAS preparation",
      "Selective school test preparation",
      "EQAO preparation",
      "OSSLT preparation",
      "STAAR preparation",
      "MAP Growth preparation",
      "NCEA support",
      "e-asTTle preparation",
    ],
    sameAs: SAME_AS,
  };
}

// Real people as authors. Create /about/team/<slug> pages with photo, qualifications and LinkedIn.
export interface Author {
  name: string;
  slug: string;
  jobTitle: string; // e.g. "Head of Mathematics, B.Ed (Secondary Maths)"
  linkedin?: string;
}

export function authorJsonLd(a: Author) {
  return {
    "@type": "Person",
    "@id": `${SITE}/about/team/${a.slug}#person`,
    name: a.name,
    jobTitle: a.jobTitle,
    url: `${SITE}/about/team/${a.slug}`,
    worksFor: orgRef,
    ...(a.linkedin ? { sameAs: [a.linkedin] } : {}),
  };
}
