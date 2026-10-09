export type RegionCode = "au" | "us" | "ca" | "nz";

export const COMPANY_ADDRESS = "17 Statham View, Crambourne West, Victoria 3977, Australia";

export interface CompanyPostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export const COMPANY_POSTAL_ADDRESS: CompanyPostalAddress = {
  "@type": "PostalAddress",
  streetAddress: "17 Statham View",
  addressLocality: "Crambourne West",
  addressRegion: "VIC",
  postalCode: "3977",
  addressCountry: "AU",
};

export const ORGANIZATION_IMAGE = "https://www.tutorexel.com/images/og-hero.jpg";

export const LEGAL_EFFECTIVE_DATE = "6 October 2026";

export const REGIONAL_REFUND_WHATSAPP: Record<RegionCode, { number: string; href: string }> = {
  au: {
    number: "+61 470 330 548",
    href: "https://wa.me/61470330548",
  },
  us: {
    number: "+1 (206) 797 7387",
    href: "https://wa.me/12067977387",
  },
  ca: {
    number: "+1 (206) 797 7387",
    href: "https://wa.me/12067977387",
  },
  nz: {
    number: "+61 470-330-548",
    href: "https://wa.me/61470330548",
  },
};

export interface PricingPlanConfig {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  featured?: boolean;
  themeCategory: "inside" | "study" | "parents";
  amount: number;
  originalAmount?: number;
  discountBadge?: string;
  periodText: string;
  features: string[];
  moreFeatures: string[];
}

export interface RegionSpotlightLink {
  label: string;
  href: string;
}

export interface RegionSpotlightStep {
  step: string;
  title: string;
  desc: string;
}

export interface RegionConfig {
  code: RegionCode;
  basePath: string;
  label: string;
  flag: string;
  flagUrl: string;
  locale: string;
  phone: string | null;
  phoneText: string;
  phoneHref: string;
  phoneE164: string | null;
  curriculumLabel: string;
  testNames: string[];
  name: string;
  countryName: string;
  demonym: string;
  currency: string;
  currencySymbol: string;
  yearLabel: string;
  mathLabel: string;
  spellingPersonalised: string;
  spellingEnrol: string;
  showTestimonials: boolean;
  yearLevels: number[];
  homePricing?: {
    tutoring: { amount: string; currency: string; period: string };
    music: { amount: string; currency: string; period: string };
    premium: { amount: string; originalAmount?: string; discountBadge?: string; currency: string; period: string };
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    popularTags: string[];
  };
  spotlight: {
    title: string;
    lede: string;
    assessmentBtnText: string;
    assessmentBtnHref: string;
    programBtnText: string;
    programBtnHref: string;
    subTitle: string;
    practiceLinks: RegionSpotlightLink[];
    railTitle: string;
    railSteps: RegionSpotlightStep[];
  };
  pricing: {
    title: string;
    discountText: string;
    subtitle: string;
    plans: PricingPlanConfig[];
    footnote: string;
  };
  finalCta: {
    heading: string;
    lede: string;
    btnText: string;
    btnHref: string;
    phoneText: string;
    phoneHref: string;
  };
}

export const REGIONS_CONFIG: Record<RegionCode, RegionConfig> = {
  au: {
    code: "au",
    basePath: "",
    label: "Australia",
    flag: "au",
    flagUrl: "https://flagcdn.com/80x60/au.png",
    locale: "en-AU",
    phone: "+61 470-330-548",
    phoneText: "+61 470-330-548",
    phoneHref: "https://wa.me/61470330548",
    phoneE164: "+61470330548",
    curriculumLabel: "Australian Curriculum (ACARA)",
    testNames: ["NAPLAN", "ICAS"],
    name: "Australia",
    countryName: "Australia",
    demonym: "Australian",
    currency: "AUD",
    currencySymbol: "$",
    yearLabel: "Year",
    mathLabel: "Maths",
    spellingPersonalised: "personalised",
    spellingEnrol: "Enrol",
    showTestimonials: true,
    yearLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    hero: {
      title: "TutorExel",
      titleHighlight: "Learning Hub",
      subtitle:
        "Tips, guides, and insights for Australian parents and students. From NAPLAN preparation to everyday study strategies.",
      searchPlaceholder: "Search guides, e.g. NAPLAN, group classes",
      popularTags: ["NAPLAN & ICAS", "Choosing a tutor", "One-on-one vs group", "Study habits"],
    },
    spotlight: {
      title: "Getting ready for NAPLAN and ICAS",
      lede: "What the tests measure, where students lose marks, and how steady practice through the year beats last-minute cramming.",
      assessmentBtnText: "Take the free assessment",
      assessmentBtnHref: "/free-assessment",
      programBtnText: "NAPLAN prep program",
      programBtnHref: "/naplan-preparation",
      subTitle: "Practice by year level",
      practiceLinks: [
        { label: "Year 3 Maths", href: "/subjects/year-3/maths" },
        { label: "Year 5 Maths", href: "/subjects/year-5/maths" },
        { label: "Year 5 English", href: "/subjects/year-5/english" },
        { label: "Year 7 English", href: "/subjects/year-7/english" },
      ],
      railTitle: "How steady prep builds test-day confidence",
      railSteps: [
        {
          step: "1",
          title: "Know the format",
          desc: "Multiple choice to extended writing, nothing feels new on the day.",
        },
        {
          step: "2",
          title: "Build strategies",
          desc: "Eliminating wrong answers, managing time and double-checking work.",
        },
        {
          step: "3",
          title: "Close the gaps",
          desc: "Practice tests show where extra support is needed, early.",
        },
        {
          step: "4",
          title: "Walk in calm",
          desc: "Regular practice under test conditions replaces anxiety with confidence.",
        },
      ],
    },
    pricing: {
      title: "Pick the Right Plan",
      discountText: "Save up to 20%. Enrol today!",
      subtitle: "Pay monthly in AUD. No lock-in. Cancel anytime.",
      footnote: "Prices shown in AUD. See pricing for USA, Canada and New Zealand",
      plans: [
        {
          id: "live-online-coaching",
          name: "Live Online Tutoring",
          subtitle: "Maths, English, Science",
          badge: "Most Popular",
          featured: true,
          themeCategory: "inside",
          amount: 84,
          periodText: "AUD/month per subject",
          features: [
            "1-hour personalised live lessons",
            "4 lessons per month, per subject",
            "1:1 tutoring available",
            "Small groups available (max 3 students)",
            "Weekly practice worksheets",
          ],
          moreFeatures: [
            "Free assessment and progress report",
            "Regular term progress tests",
            "After-school and weekend times",
            "Recorded lesson access",
            "WhatsApp support",
          ],
        },
        {
          id: "co-curricular",
          name: "Music Lessons",
          subtitle: "Piano and Guitar",
          featured: false,
          themeCategory: "study",
          amount: 79,
          periodText: "AUD/month (4 classes)",
          features: [
            "Piano lessons",
            "Guitar lessons",
            "One-on-one tuition",
            "Flexible lesson times",
            "Recorded lesson access",
          ],
          moreFeatures: [
            "WhatsApp support",
            "Beginners to advanced welcome",
            "Personalised music plan",
          ],
        },
        {
          id: "premium-plan",
          name: "Premium Plan",
          subtitle: "Complete Learning Package, 3 Subjects",
          featured: false,
          themeCategory: "parents",
          amount: 219,
          originalAmount: 299,
          discountBadge: "SAVE 27%",
          periodText: "AUD/month",
          features: [
            "12 live classes per month",
            "All 3 subjects: Maths, English and Science",
            "1:1 tutoring available",
            "Small groups available (max 3 students)",
            "Recorded lesson access",
          ],
          moreFeatures: [
            "Weekly progress reports",
            "WhatsApp support",
          ],
        },
      ],
    },
    finalCta: {
      heading: "Ready to Help Your Child Excel?",
      lede: "Join the Australian families who trust TutorExel with their child's learning. Book your FREE trial class today, no credit card required.",
      btnText: "Book My Free Trial",
      btnHref: "/free-trial",
      phoneText: "+61 470-330-548",
      phoneHref: "https://wa.me/61470330548",
    },
  },

  us: {
    code: "us",
    basePath: "/us",
    label: "USA",
    flag: "us",
    flagUrl: "https://flagcdn.com/80x60/us.png",
    locale: "en-US",
    phone: "+1 (206) 797 7387",
    phoneText: "+1 (206) 797 7387",
    phoneHref: "https://wa.me/12067977387",
    phoneE164: "+12067977387",
    curriculumLabel: "US Common Core & State Standards",
    testNames: ["State Assessments", "Standardized Tests"],
    name: "USA",
    countryName: "United States",
    demonym: "American",
    currency: "USD",
    currencySymbol: "$",
    yearLabel: "Grade",
    mathLabel: "Math",
    spellingPersonalised: "personalized",
    spellingEnrol: "Enroll",
    showTestimonials: true,
    yearLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    hero: {
      title: "TutorExel",
      titleHighlight: "Learning Hub",
      subtitle:
        "Practical tips, guides and advice for US parents and students, from state test and MAP Growth preparation to everyday study habits.",
      searchPlaceholder: "Search guides, e.g. state tests, math foundations",
      popularTags: ["State Standards", "Choosing a tutor", "One-on-one vs group", "Study habits"],
    },
    spotlight: {
      title: "Getting ready for State Assessments",
      lede: "What state standards measure, where students lose marks, and how steady practice through the year beats last-minute cramming.",
      assessmentBtnText: "Take the free assessment",
      assessmentBtnHref: "/free-assessment",
      programBtnText: "Academic programs",
      programBtnHref: "/pricing",
      subTitle: "Practice by grade level",
      practiceLinks: [
        { label: "Grade 3 Math", href: "/subjects/grade-3/math" },
        { label: "Grade 5 Math", href: "/subjects/grade-5/math" },
        { label: "Grade 5 English", href: "/subjects/grade-5/english" },
        { label: "Grade 7 English", href: "/subjects/grade-7/english" },
      ],
      railTitle: "How steady prep builds test-day confidence",
      railSteps: [
        {
          step: "1",
          title: "Know the format",
          desc: "Multiple choice to written response, nothing feels unfamiliar on test day.",
        },
        {
          step: "2",
          title: "Build strategies",
          desc: "Eliminating wrong answers, managing time and double-checking work.",
        },
        {
          step: "3",
          title: "Close the gaps",
          desc: "Practice assessments show where extra support is needed early.",
        },
        {
          step: "4",
          title: "Walk in calm",
          desc: "Regular practice under testing conditions replaces anxiety with confidence.",
        },
      ],
    },
    // TODO: Pending client input for exact regional pricing numbers.
    pricing: {
      title: "Choose Your Plan",
      discountText: "Get up to 20% discount - Enroll Today!",
      subtitle: "No contracts. No hidden fees. Cancel anytime.",
      footnote: "Prices shown in USD. See pricing for Australia, Canada and New Zealand",
      plans: [
        {
          id: "live-online-coaching",
          name: "Live Online Coaching",
          subtitle: "Math, English, Science",
          badge: "Most Popular",
          featured: true,
          themeCategory: "inside",
          amount: 84, // TODO: Replace with US market rate once provided by client
          periodText: "USD/month per subject",
          features: [
            "1 hour personalized sessions",
            "4 sessions per month per subject",
            "1:1 personalized tutoring available",
            "Group sessions available (max 3 students)",
            "Weekly practice worksheets",
          ],
          moreFeatures: [
            "Free assessment & report",
            "Regular progress tests",
            "Flexible scheduling",
            "Recorded session access",
            "Email support",
          ],
        },
        {
          id: "co-curricular",
          name: "Co-Curricular",
          subtitle: "Music & Creative Arts, Piano & Guitar",
          featured: false,
          themeCategory: "study",
          amount: 79, // TODO: Replace with US market rate once provided by client
          periodText: "USD/month (4 classes)",
          features: [
            "Piano lessons",
            "Guitar lessons",
            "One-on-one instruction",
            "Flexible scheduling",
            "Recorded session access",
          ],
          moreFeatures: [
            "Email support",
            "All skill levels welcome",
            "Personalized curriculum",
          ],
        },
        {
          id: "premium-plan",
          name: "Premium Plan",
          subtitle: "Complete Learning Package, 3 Subjects",
          featured: false,
          themeCategory: "parents",
          amount: 219, // TODO: Replace with US market rate once provided by client
          originalAmount: 299,
          discountBadge: "Save 27%",
          periodText: "USD/month",
          features: [
            "12 live classes per month",
            "3 Subjects: Math, English & Science",
            "1:1 personalized tutoring available",
            "Group sessions available (max 3 students)",
            "Recorded session access",
          ],
          moreFeatures: [
            "Weekly progress reports",
            "Email support",
          ],
        },
      ],
    },
    finalCta: {
      heading: "Ready to Help Your Child Excel?",
      lede: "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      btnText: "Book My Free Trial",
      btnHref: "/free-trial",
      phoneText: "+1 (206) 797 7387",
      phoneHref: "https://wa.me/12067977387",
    },
  },

  ca: {
    code: "ca",
    basePath: "/ca",
    label: "Canada",
    flag: "ca",
    flagUrl: "https://flagcdn.com/80x60/ca.png",
    locale: "en-CA",
    phone: "+1 (206) 797 7387",
    phoneText: "+1 (206) 797 7387",
    phoneHref: "https://wa.me/12067977387",
    phoneE164: "+12067977387",
    curriculumLabel: "Canadian Provincial Curricula",
    testNames: ["EQAO", "Provincial Assessments"],
    name: "Canada",
    countryName: "Canada",
    demonym: "Canadian",
    currency: "CAD",
    currencySymbol: "$",
    yearLabel: "Grade",
    mathLabel: "Math",
    spellingPersonalised: "personalized",
    spellingEnrol: "Enrol",
    showTestimonials: true,
    yearLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    hero: {
      title: "TutorExel",
      titleHighlight: "Learning Hub",
      subtitle:
        "Tips, guides, and insights for Canadian parents and students. From provincial assessment prep to everyday study strategies.",
      searchPlaceholder: "Search guides, e.g. EQAO, Ontario curriculum, math",
      popularTags: ["EQAO Prep", "Choosing a tutor", "One-on-one vs group", "Study habits"],
    },
    spotlight: {
      title: "Getting ready for EQAO and Provincial Assessments",
      lede: "Understanding provincial curriculum benchmarks, building problem-solving strategies, and steady practice through the school year.",
      assessmentBtnText: "Take the free assessment",
      assessmentBtnHref: "/free-assessment",
      programBtnText: "Tutoring programs",
      programBtnHref: "/pricing",
      subTitle: "Practice by grade level",
      practiceLinks: [
        { label: "Grade 3 Math", href: "/subjects/grade-3/math" },
        { label: "Grade 5 Math", href: "/subjects/grade-5/math" },
        { label: "Grade 5 English", href: "/subjects/grade-5/english" },
        { label: "Grade 7 English", href: "/subjects/grade-7/english" },
      ],
      railTitle: "How steady prep builds test-day confidence",
      railSteps: [
        {
          step: "1",
          title: "Know the format",
          desc: "Familiarity with multiple choice and short-answer prompts prevents surprises.",
        },
        {
          step: "2",
          title: "Build strategies",
          desc: "Learning to break down word problems and show complete working.",
        },
        {
          step: "3",
          title: "Close the gaps",
          desc: "Diagnostic checks pinpoint key areas needing reinforcement.",
        },
        {
          step: "4",
          title: "Walk in calm",
          desc: "Consistent practice through the terms replaces anxiety with mastery.",
        },
      ],
    },
    // TODO: Pending client input for exact regional pricing numbers.
    pricing: {
      title: "Choose Your Plan",
      discountText: "Get up to 20% discount - Enroll Today!",
      subtitle: "No contracts. No hidden fees. Cancel anytime.",
      footnote: "Prices shown in CAD. See pricing for Australia, USA and New Zealand",
      plans: [
        {
          id: "live-online-coaching",
          name: "Live Online Coaching",
          subtitle: "Math, English, Science",
          badge: "Most Popular",
          featured: true,
          themeCategory: "inside",
          amount: 84, // TODO: Replace with CA market rate once provided by client
          periodText: "CAD/month per subject",
          features: [
            "1 hour personalized sessions",
            "4 sessions per month per subject",
            "1:1 personalized tutoring available",
            "Group sessions available (max 3 students)",
            "Weekly practice worksheets",
          ],
          moreFeatures: [
            "Free assessment & report",
            "Regular progress tests",
            "Flexible scheduling",
            "Recorded session access",
            "Email support",
          ],
        },
        {
          id: "co-curricular",
          name: "Co-Curricular",
          subtitle: "Music & Creative Arts, Piano & Guitar",
          featured: false,
          themeCategory: "study",
          amount: 79, // TODO: Replace with CA market rate once provided by client
          periodText: "CAD/month (4 classes)",
          features: [
            "Piano lessons",
            "Guitar lessons",
            "One-on-one instruction",
            "Flexible scheduling",
            "Recorded session access",
          ],
          moreFeatures: [
            "Email support",
            "All skill levels welcome",
            "Personalized curriculum",
          ],
        },
        {
          id: "premium-plan",
          name: "Premium Plan",
          subtitle: "Complete Learning Package, 3 Subjects",
          featured: false,
          themeCategory: "parents",
          amount: 219, // TODO: Replace with CA market rate once provided by client
          originalAmount: 299,
          discountBadge: "Save 27%",
          periodText: "CAD/month",
          features: [
            "12 live classes per month",
            "3 Subjects: Math, English & Science",
            "1:1 personalized tutoring available",
            "Group sessions available (max 3 students)",
            "Recorded session access",
          ],
          moreFeatures: [
            "Weekly progress reports",
            "Email support",
          ],
        },
      ],
    },
    finalCta: {
      heading: "Ready to See Your Child Excel?",
      lede: "Join hundreds of Canadian families who trust TutorExel for their children's education. Book your FREE trial class today, no credit card required.",
      btnText: "Book Online Now",
      btnHref: "/enroll",
      phoneText: "+1 (206) 797 7387",
      phoneHref: "https://wa.me/12067977387",
    },
  },

  nz: {
    code: "nz",
    basePath: "/nz",
    label: "New Zealand",
    flag: "nz",
    flagUrl: "https://flagcdn.com/80x60/nz.png",
    locale: "en-NZ",
    phone: "+61 470 330 548",
    phoneText: "+61 470 330 548",
    phoneHref: "https://wa.me/61470330548",
    phoneE164: "+61470330548",
    curriculumLabel: "New Zealand Curriculum (NZC)",
    testNames: ["PAT", "NZC Assessments"],
    name: "New Zealand",
    countryName: "New Zealand",
    demonym: "New Zealand",
    currency: "NZD",
    currencySymbol: "$",
    yearLabel: "Year",
    mathLabel: "Maths",
    spellingPersonalised: "personalised",
    spellingEnrol: "Enrol",
    showTestimonials: true,
    yearLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    homePricing: {
      tutoring: {
        amount: "92",
        currency: "NZ$",
        period: "NZD/month per subject",
      },
      music: {
        amount: "87",
        currency: "NZ$",
        period: "NZD/month (4 classes)",
      },
      premium: {
        amount: "241",
        originalAmount: "329",
        discountBadge: "SAVE 27%",
        currency: "NZ$",
        period: "NZD/month",
      },
    },
    hero: {
      title: "TutorExel",
      titleHighlight: "Learning Hub",
      subtitle:
        "Tips, guides, and insights for Kiwi parents and students. From NZ curriculum support to everyday study habits.",
      searchPlaceholder: "Search guides, e.g. PAT, NZ curriculum, maths",
      popularTags: ["NZC Framework", "Choosing a tutor", "One-on-one vs group", "Study habits"],
    },
    spotlight: {
      title: "Getting ready for NZ Curriculum Assessments",
      lede: "Understanding NZC curriculum benchmarks, building problem-solving strategies, and steady practice through the school year.",
      assessmentBtnText: "Take the free assessment",
      assessmentBtnHref: "/free-assessment",
      programBtnText: "Tutoring programs",
      programBtnHref: "/pricing",
      subTitle: "Practice by year level",
      practiceLinks: [
        { label: "Year 3 Maths", href: "/subjects/year-3/maths" },
        { label: "Year 5 Maths", href: "/subjects/year-5/maths" },
        { label: "Year 5 English", href: "/subjects/year-5/english" },
        { label: "Year 7 English", href: "/subjects/year-7/english" },
      ],
      railTitle: "How steady prep builds test-day confidence",
      railSteps: [
        {
          step: "1",
          title: "Know the format",
          desc: "Familiarity with assessment styles and question types builds comfort.",
        },
        {
          step: "2",
          title: "Build strategies",
          desc: "Developing clear problem-solving steps and checking calculations.",
        },
        {
          step: "3",
          title: "Close the gaps",
          desc: "Targeted practice reveals concept gaps before term assessments.",
        },
        {
          step: "4",
          title: "Walk in calm",
          desc: "Consistent practice through the terms replaces anxiety with mastery.",
        },
      ],
    },
    // TODO: Pending client input for exact regional pricing numbers.
    pricing: {
      title: "Choose Your Plan",
      discountText: "Get up to 20% discount - Enrol Today!",
      subtitle: "No contracts. No hidden fees. Cancel anytime.",
      footnote: "Prices shown in NZD. See pricing for Australia, USA and Canada",
      plans: [
        {
          id: "live-online-coaching",
          name: "Live Online Coaching",
          subtitle: "Maths, English, Science",
          badge: "Most Popular",
          featured: true,
          themeCategory: "inside",
          amount: 84, // TODO: Replace with NZ market rate once provided by client
          periodText: "NZD/month per subject",
          features: [
            "1 hour personalized sessions",
            "4 sessions per month per subject",
            "1:1 personalised tutoring available",
            "Group sessions available (max 3 students)",
            "Weekly practice worksheets",
          ],
          moreFeatures: [
            "Free assessment & report",
            "Regular progress tests",
            "Flexible scheduling",
            "Recorded session access",
            "Email support",
          ],
        },
        {
          id: "co-curricular",
          name: "Co-Curricular",
          subtitle: "Music & Creative Arts, Piano & Guitar",
          featured: false,
          themeCategory: "study",
          amount: 79, // TODO: Replace with NZ market rate once provided by client
          periodText: "NZD/month (4 classes)",
          features: [
            "Piano lessons",
            "Guitar lessons",
            "One-on-one instruction",
            "Flexible scheduling",
            "Recorded session access",
          ],
          moreFeatures: [
            "Email support",
            "All skill levels welcome",
            "Personalized curriculum",
          ],
        },
        {
          id: "premium-plan",
          name: "Premium Plan",
          subtitle: "Complete Learning Package, 3 Subjects",
          featured: false,
          themeCategory: "parents",
          amount: 219, // TODO: Replace with NZ market rate once provided by client
          originalAmount: 299,
          discountBadge: "Save 27%",
          periodText: "NZD/month",
          features: [
            "12 live classes per month",
            "3 Subjects: Maths, English & Science",
            "1:1 personalised tutoring available",
            "Group sessions available (max 3 students)",
            "Recorded session access",
          ],
          moreFeatures: [
            "Weekly progress reports",
            "Email support",
          ],
        },
      ],
    },
    finalCta: {
      heading: "Ready to See Your Child Excel?",
      lede: "Join hundreds of New Zealand families who trust TutorExel for their children's education. Book your FREE trial class today, no credit card required.",
      btnText: "Book Online Now",
      btnHref: "/enroll",
      phoneText: "+61 470 330 548",
      phoneHref: "https://wa.me/61470330548",
    },
  },
};

export const REGIONS: RegionConfig[] = Object.values(REGIONS_CONFIG);

export function getRegionConfig(regionCode: string = "au"): RegionConfig {
  const code = (regionCode.toLowerCase() as RegionCode);
  return REGIONS_CONFIG[code] || REGIONS_CONFIG.au;
}

export {
  getYearSlug,
  getMathSlug,
  getSubjectSlug,
  getSubjectHref,
  getYearHubHref,
} from "@/utils/regionalLinks";
