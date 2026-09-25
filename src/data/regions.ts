export type RegionCode = "au" | "us" | "ca" | "nz";

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
  name: string;
  countryName: string;
  demonym: string;
  currency: string;
  currencySymbol: string;
  yearLabel: string;
  yearLevels: number[];
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
    name: "Australia",
    countryName: "Australia",
    demonym: "Australian",
    currency: "AUD",
    currencySymbol: "$",
    yearLabel: "Year",
    yearLevels: [2, 3, 4, 5, 6, 7],
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
      title: "Choose Your Plan",
      discountText: "Get up to 20% discount - Enrol Today!",
      subtitle: "No contracts. No hidden fees. Cancel anytime.",
      footnote: "Prices shown in AUD. See pricing for USA, Canada and New Zealand",
      plans: [
        {
          id: "live-online-coaching",
          name: "Live Online Coaching",
          subtitle: "Mathematics, English, Science",
          badge: "Most Popular",
          featured: true,
          themeCategory: "inside",
          amount: 84,
          periodText: "AUD/month per subject",
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
            "WhatsApp support",
          ],
        },
        {
          id: "co-curricular",
          name: "Co-Curricular",
          subtitle: "Music & Creative Arts, Piano & Guitar",
          featured: false,
          themeCategory: "study",
          amount: 79,
          periodText: "AUD/month (4 classes)",
          features: [
            "Piano lessons",
            "Guitar lessons",
            "One-on-one instruction",
            "Flexible scheduling",
            "Recorded session access",
          ],
          moreFeatures: [
            "WhatsApp support",
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
          amount: 219,
          originalAmount: 299,
          discountBadge: "Save 27%",
          periodText: "AUD/month",
          features: [
            "12 live classes per month",
            "3 Subjects: Maths, English & Science",
            "1:1 personalised tutoring available",
            "Group sessions available (max 3 students)",
            "Recorded session access",
          ],
          moreFeatures: [
            "Weekly progress reports",
            "WhatsApp support",
          ],
        },
      ],
    },
    finalCta: {
      heading: "Ready to See Your Child Excel?",
      lede: "Join hundreds of Australian families who trust TutorExel for their children's education. Book your FREE trial class today, no credit card required.",
      btnText: "Book Online Now",
      btnHref: "/enroll",
      phoneText: "+61 470-330-548",
      phoneHref: "https://wa.me/61470330548",
    },
  },

  us: {
    code: "us",
    name: "USA",
    countryName: "United States",
    demonym: "American",
    currency: "USD",
    currencySymbol: "$",
    yearLabel: "Grade",
    yearLevels: [2, 3, 4, 5, 6, 7],
    hero: {
      title: "TutorExel",
      titleHighlight: "Learning Hub",
      subtitle:
        "Tips, guides, and insights for American parents and students. From SAT/ACT preparation to everyday study strategies.",
      searchPlaceholder: "Search guides, e.g. SAT, ACT, math foundations",
      popularTags: ["SAT & ACT", "Choosing a tutor", "One-on-one vs group", "Study habits"],
    },
    spotlight: {
      title: "Getting ready for SAT, ACT and State Benchmarks",
      lede: "What standardized assessments measure, where students lose marks, and how steady practice through the year beats last-minute cramming.",
      assessmentBtnText: "Take the free assessment",
      assessmentBtnHref: "/free-assessment",
      programBtnText: "Test prep programs",
      programBtnHref: "/free-trial",
      subTitle: "Practice by grade level",
      practiceLinks: [
        { label: "Grade 3 Math", href: "/subjects/year-3/maths" },
        { label: "Grade 5 Math", href: "/subjects/year-5/maths" },
        { label: "Grade 5 English", href: "/subjects/year-5/english" },
        { label: "Grade 7 English", href: "/subjects/year-7/english" },
      ],
      railTitle: "How steady prep builds test-day confidence",
      railSteps: [
        {
          step: "1",
          title: "Know the format",
          desc: "From multiple choice to structured responses, nothing feels unfamiliar.",
        },
        {
          step: "2",
          title: "Build strategies",
          desc: "Eliminating distractors, pacing questions, and double-checking work.",
        },
        {
          step: "3",
          title: "Close the gaps",
          desc: "Diagnostic tests highlight where extra support is needed early on.",
        },
        {
          step: "4",
          title: "Walk in calm",
          desc: "Consistent practice under timed conditions replaces test anxiety with confidence.",
        },
      ],
    },
    pricing: {
      title: "Choose Your Plan",
      discountText: "Get up to 20% discount - Enrol Today!",
      subtitle: "No contracts. No hidden fees. Cancel anytime.",
      footnote: "Prices shown in USD. See pricing for Australia, Canada and New Zealand",
      plans: [
        {
          id: "live-online-coaching",
          name: "Live Online Coaching",
          subtitle: "Mathematics, English, Science",
          badge: "Most Popular",
          featured: true,
          themeCategory: "inside",
          amount: 84,
          periodText: "USD/month per subject",
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
            "WhatsApp support",
          ],
        },
        {
          id: "co-curricular",
          name: "Co-Curricular",
          subtitle: "Music & Creative Arts, Piano & Guitar",
          featured: false,
          themeCategory: "study",
          amount: 79,
          periodText: "USD/month (4 classes)",
          features: [
            "Piano lessons",
            "Guitar lessons",
            "One-on-one instruction",
            "Flexible scheduling",
            "Recorded session access",
          ],
          moreFeatures: [
            "WhatsApp support",
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
          amount: 219,
          originalAmount: 299,
          discountBadge: "Save 27%",
          periodText: "USD/month",
          features: [
            "12 live classes per month",
            "3 Subjects: Maths, English & Science",
            "1:1 personalised tutoring available",
            "Group sessions available (max 3 students)",
            "Recorded session access",
          ],
          moreFeatures: [
            "Weekly progress reports",
            "WhatsApp support",
          ],
        },
      ],
    },
    finalCta: {
      heading: "Ready to See Your Child Excel?",
      lede: "Join hundreds of American families who trust TutorExel for their children's education. Book your FREE trial class today, no credit card required.",
      btnText: "Book Online Now",
      btnHref: "/enroll",
      phoneText: "+61 470-330-548",
      phoneHref: "https://wa.me/61470330548",
    },
  },

  ca: {
    code: "ca",
    name: "Canada",
    countryName: "Canada",
    demonym: "Canadian",
    currency: "CAD",
    currencySymbol: "$",
    yearLabel: "Grade",
    yearLevels: [2, 3, 4, 5, 6, 7],
    hero: {
      title: "TutorExel",
      titleHighlight: "Learning Hub",
      subtitle:
        "Tips, guides, and insights for Canadian parents and students. From EQAO preparation to everyday study strategies.",
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
        { label: "Grade 3 Math", href: "/subjects/year-3/maths" },
        { label: "Grade 5 Math", href: "/subjects/year-5/maths" },
        { label: "Grade 5 English", href: "/subjects/year-5/english" },
        { label: "Grade 7 English", href: "/subjects/year-7/english" },
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
    pricing: {
      title: "Choose Your Plan",
      discountText: "Get up to 20% discount - Enrol Today!",
      subtitle: "No contracts. No hidden fees. Cancel anytime.",
      footnote: "Prices shown in CAD. See pricing for Australia, USA and New Zealand",
      plans: [
        {
          id: "live-online-coaching",
          name: "Live Online Coaching",
          subtitle: "Mathematics, English, Science",
          badge: "Most Popular",
          featured: true,
          themeCategory: "inside",
          amount: 84,
          periodText: "CAD/month per subject",
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
            "WhatsApp support",
          ],
        },
        {
          id: "co-curricular",
          name: "Co-Curricular",
          subtitle: "Music & Creative Arts, Piano & Guitar",
          featured: false,
          themeCategory: "study",
          amount: 79,
          periodText: "CAD/month (4 classes)",
          features: [
            "Piano lessons",
            "Guitar lessons",
            "One-on-one instruction",
            "Flexible scheduling",
            "Recorded session access",
          ],
          moreFeatures: [
            "WhatsApp support",
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
          amount: 219,
          originalAmount: 299,
          discountBadge: "Save 27%",
          periodText: "CAD/month",
          features: [
            "12 live classes per month",
            "3 Subjects: Maths, English & Science",
            "1:1 personalised tutoring available",
            "Group sessions available (max 3 students)",
            "Recorded session access",
          ],
          moreFeatures: [
            "Weekly progress reports",
            "WhatsApp support",
          ],
        },
      ],
    },
    finalCta: {
      heading: "Ready to See Your Child Excel?",
      lede: "Join hundreds of Canadian families who trust TutorExel for their children's education. Book your FREE trial class today, no credit card required.",
      btnText: "Book Online Now",
      btnHref: "/enroll",
      phoneText: "+61 470-330-548",
      phoneHref: "https://wa.me/61470330548",
    },
  },

  nz: {
    code: "nz",
    name: "New Zealand",
    countryName: "New Zealand",
    demonym: "New Zealand",
    currency: "NZD",
    currencySymbol: "$",
    yearLabel: "Year",
    yearLevels: [2, 3, 4, 5, 6, 7],
    hero: {
      title: "TutorExel",
      titleHighlight: "Learning Hub",
      subtitle:
        "Tips, guides, and insights for New Zealand parents and students. From NCEA preparation to everyday study strategies.",
      searchPlaceholder: "Search guides, e.g. NCEA, numeracy, literacy",
      popularTags: ["NCEA & Literacy", "Choosing a tutor", "One-on-one vs group", "Study habits"],
    },
    spotlight: {
      title: "Getting ready for NCEA and Curriculum Standards",
      lede: "Mastering numeracy and literacy standards, tracking progress, and building strong study foundations early on.",
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
          desc: "Understanding curriculum assessment criteria and question formats early.",
        },
        {
          step: "2",
          title: "Build strategies",
          desc: "Developing clear problem-solving routines and reasoning skills.",
        },
        {
          step: "3",
          title: "Close the gaps",
          desc: "Regular diagnostic milestones show where extra support is needed.",
        },
        {
          step: "4",
          title: "Walk in calm",
          desc: "Continuous term-by-term practice ensures steady, confident growth.",
        },
      ],
    },
    pricing: {
      title: "Choose Your Plan",
      discountText: "Get up to 20% discount - Enrol Today!",
      subtitle: "No contracts. No hidden fees. Cancel anytime.",
      footnote: "Prices shown in NZD. See pricing for Australia, USA and Canada",
      plans: [
        {
          id: "live-online-coaching",
          name: "Live Online Coaching",
          subtitle: "Mathematics, English, Science",
          badge: "Most Popular",
          featured: true,
          themeCategory: "inside",
          amount: 84,
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
            "WhatsApp support",
          ],
        },
        {
          id: "co-curricular",
          name: "Co-Curricular",
          subtitle: "Music & Creative Arts, Piano & Guitar",
          featured: false,
          themeCategory: "study",
          amount: 79,
          periodText: "NZD/month (4 classes)",
          features: [
            "Piano lessons",
            "Guitar lessons",
            "One-on-one instruction",
            "Flexible scheduling",
            "Recorded session access",
          ],
          moreFeatures: [
            "WhatsApp support",
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
          amount: 219,
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
            "WhatsApp support",
          ],
        },
      ],
    },
    finalCta: {
      heading: "Ready to See Your Child Excel?",
      lede: "Join hundreds of New Zealand families who trust TutorExel for their children's education. Book your FREE trial class today, no credit card required.",
      btnText: "Book Online Now",
      btnHref: "/enroll",
      phoneText: "+61 470-330-548",
      phoneHref: "https://wa.me/61470330548",
    },
  },
};

export function getRegionConfig(regionCode: string = "us"): RegionConfig {
  const code = (regionCode.toLowerCase() as RegionCode);
  return REGIONS_CONFIG[code] || REGIONS_CONFIG.us;
}
