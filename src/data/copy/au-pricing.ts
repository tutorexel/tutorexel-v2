export interface PricingPlanCopy {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  currency: string;
  amount: string;
  originalAmount?: string;
  discountBadge?: string;
  period: string;
  popular: boolean;
  borderColor: string;
  features: string[];
  buttonText: string;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

export interface AuPricingCopy {
  hero: {
    h1: string;
    subtitle: string;
  };
  regionBadge: string;
  plans: PricingPlanCopy[];
  included: {
    h2: string;
    features: string[];
  };
  faq: {
    h2: string;
    items: PricingFaqItem[];
  };
  cta: {
    h2: string;
    description: string;
    buttonText: string;
    phone: string;
  };
}

export const AU_PRICING_COPY: AuPricingCopy = {
  hero: {
    h1: "Clear, Fair Pricing",
    subtitle: "No lock-in. No surprise fees. Pay monthly in AUD and cancel with 2 weeks' notice.",
  },
  regionBadge: "Australia (AUD)",
  plans: [
    {
      id: "live-online-coaching",
      name: "Live Online Coaching",
      subtitle: "Maths, English, Science",
      badge: "Most Popular",
      currency: "$",
      amount: "84",
      period: "per month, per subject",
      popular: true,
      borderColor: "orange",
      features: [
        "Weekly 1-hour live lessons",
        "4 lessons a month, matched to the Australian Curriculum",
        "One-on-one tutoring available",
        "Small group option (max 3 students)",
        "Weekly practice worksheets",
        "Free assessment and report",
        "Regular progress quizzes",
        "Flexible timing around school and sport",
        "Recorded lessons to rewatch",
        "WhatsApp support",
      ],
      buttonText: "Get Started",
    },
    {
      id: "co-curricular",
      name: "Co-Curricular",
      subtitle: "Music and Creative Arts, Piano and Guitar",
      currency: "$",
      amount: "79",
      period: "per month (4 lessons)",
      popular: false,
      borderColor: "dark",
      features: [
        "Piano lessons",
        "Guitar lessons",
        "One-on-one teaching",
        "Flexible lesson times",
        "Recorded lessons to rewatch",
        "WhatsApp support",
        "Every skill level welcome",
        "Personalised learning path",
      ],
      buttonText: "Get Started",
    },
    {
      id: "premium-plan",
      name: "Premium Plan",
      subtitle: "Complete Learning Package, 3 Subjects",
      currency: "$",
      amount: "219",
      originalAmount: "299",
      discountBadge: "Save 27%",
      period: "per month",
      popular: false,
      borderColor: "dark",
      features: [
        "12 live lessons a month",
        "3 subjects: Maths, English and Science",
        "One-on-one tutoring available",
        "Small group option (max 3 students)",
        "Recorded lessons to rewatch",
        "Weekly progress reports",
        "WhatsApp support",
      ],
      buttonText: "Get Started",
    },
  ],
  included: {
    h2: "What Every TutorExel Student Gets",
    features: [
      "A free diagnostic assessment before you begin",
      "A personalised learning plan built from the results",
      "A qualified, trained tutor matched to your child",
      "Lessons mapped to the Australian Curriculum (ACARA)",
      "Regular progress updates and parent communication",
      "Make-up lessons if your child misses a class",
      "Cancel anytime with 2 weeks' notice",
    ],
  },
  faq: {
    h2: "Frequently Asked Questions",
    items: [
      {
        question: "Is there a minimum commitment?",
        answer:
          "No lock-in contracts. You pay monthly in advance and can cancel anytime with 2 weeks' notice.",
      },
      {
        question: "What if my child misses a class?",
        answer:
          "No stress. We arrange a make-up lesson, and every lesson is recorded so your child can catch up on anything they missed.",
      },
      {
        question: "Can I switch between plans?",
        answer:
          "Yes. Message us and we will move your child to a different plan from the next billing month.",
      },
      {
        question: "Is the assessment really free?",
        answer:
          "Yes, completely free. Book a free assessment and trial lesson with no credit card needed and no obligation.",
      },
    ],
  },
  cta: {
    h2: "Ready to Watch Your Child Thrive?",
    description:
      "Join Australian families who trust TutorExel with their child's learning. Book your FREE trial lesson today, no credit card needed.",
    buttonText: "Book Online Now",
    phone: "+61 470 330 548",
  },
};
