import { REGIONS_CONFIG } from "@/data/regions";

export interface CaPricingPlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  featured?: boolean;
  amount: number;
  originalAmount?: number;
  discountBadge?: string;
  periodText: string;
  formattedPrice: string;
  features: string[];
  buttonText: string;
}

export interface CaPricingCopy {
  hero: {
    title: string;
    subtitle: string;
    floatingButton: string;
    regionBadge: string;
  };
  plans: CaPricingPlan[];
  included: {
    title: string;
    features: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const caConfig = REGIONS_CONFIG.ca.pricing;
const caPlans = caConfig.plans;

const plan1Config = caPlans.find((p) => p.id === "live-online-coaching") || caPlans[0];
const plan2Config = caPlans.find((p) => p.id === "co-curricular") || caPlans[1];
const plan3Config = caPlans.find((p) => p.id === "premium-plan") || caPlans[2];

const plan1Amount = plan1Config?.amount ?? 84;
const plan2Amount = plan2Config?.amount ?? 79;
const plan3Amount = plan3Config?.amount ?? 219;
const plan3OriginalAmount = plan3Config?.originalAmount ?? 299;
const plan3DiscountPercent = plan3OriginalAmount && plan3Amount
  ? Math.round((1 - plan3Amount / plan3OriginalAmount) * 100)
  : undefined;
const plan3DiscountBadge = plan3DiscountPercent ? `Save ${plan3DiscountPercent}%` : undefined;

export const CA_PRICING_COPY: CaPricingCopy = {
  hero: {
    title: "Clear, Fair Pricing",
    subtitle: "No long-term contracts. No surprise fees. Pay monthly in CAD and cancel with 2 weeks' notice.",
    floatingButton: "Free Assessment Test",
    regionBadge: "Canada",
  },
  plans: [
    {
      id: "live-online-coaching",
      name: "Live Online Coaching",
      subtitle: "Math, English, Science",
      badge: "Most Popular",
      featured: true,
      amount: plan1Amount,
      periodText: "CAD per month, per subject",
      formattedPrice: `$${plan1Amount} CAD per month, per subject`,
      features: [
        "Weekly 1-hour live lessons",
        "4 lessons a month, matched to your child's provincial curriculum",
        "One-on-one tutoring available",
        "Small group option (max 3 students)",
        "Weekly practice worksheets",
        "Free assessment and report",
        "Regular progress quizzes",
        "Flexible timing around school and activities",
        "Recorded lessons to rewatch",
        "WhatsApp support",
      ],
      buttonText: "Get Started",
    },
    {
      id: "co-curricular",
      name: "Co-Curricular",
      subtitle: "Music and Creative Arts, Piano and Guitar",
      featured: false,
      amount: plan2Amount,
      periodText: "CAD per month (4 lessons)",
      formattedPrice: `$${plan2Amount} CAD per month (4 lessons)`,
      features: [
        "Piano lessons",
        "Guitar lessons",
        "One-on-one teaching",
        "Flexible lesson times",
        "Recorded lessons to rewatch",
        "WhatsApp support",
        "Every skill level welcome",
        "Personalized learning path",
      ],
      buttonText: "Get Started",
    },
    {
      id: "premium-plan",
      name: "Premium Plan",
      subtitle: "Complete Learning Package, 3 Subjects",
      featured: false,
      amount: plan3Amount,
      originalAmount: plan3OriginalAmount,
      discountBadge: plan3DiscountBadge,
      periodText: "CAD per month",
      formattedPrice: `$${plan3Amount} CAD per month`,
      features: [
        "12 live lessons a month",
        "3 subjects: Math, English and Science",
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
    title: "What Every TutorExel Student Gets",
    features: [
      "A free diagnostic assessment before you begin",
      "A personalized learning plan built from the results",
      "A qualified, trained tutor matched to your child",
      "Lessons matched to your child's provincial curriculum",
      "Regular progress updates and parent communication",
      "Make-up lessons if your child misses a class",
      "Cancel anytime with 2 weeks' notice",
    ],
  },
  faqs: [
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
  cta: {
    title: "Ready to Watch Your Child Thrive?",
    description:
      "Join families across Canada who trust TutorExel with their child's learning. Book your FREE trial lesson today, no credit card needed.",
    buttonText: "Book Online Now",
  },
};
