/**
 * Pricing data across regions.
 * AU, US, CA use default pricing ($84, $79, $241).
 * NZ has a per-region override:
 * - Live Online Tutoring: NZ$92/month per subject
 * - Music Lessons: NZ$84/month (4 classes)
 * - Premium Plan: NZ$241/month (original NZ$299, Save 19%)
 */

export const DEFAULT_PRICING_DATA = {
  tutoring: {
    id: "live-online-coaching",
    name: "Live Online Tutoring",
    subtitleAU: "Maths, English, Science",
    subtitleUS: "Math, English, Science",
    amount: "84",
    amountNumber: 84,
  },
  music: {
    id: "co-curricular",
    name: "Music Lessons",
    subtitle: "Piano and Guitar",
    amount: "79",
    amountNumber: 79,
    classes: 4,
  },
  premium: {
    id: "premium-plan",
    name: "Premium Plan",
    subtitle: "Complete Learning Package, 3 Subjects",
    amount: "241",
    amountNumber: 241,
    originalAmount: "299",
    originalAmountNumber: 299,
    discountBadge: "SAVE 19%",
    discountBadgeTitleCase: "Save 19%",
  },
} as const;

export const NZ_PRICING_DATA = {
  tutoring: {
    id: "live-online-coaching",
    name: "Live Online Tutoring",
    subtitleAU: "Maths, English, Science",
    subtitleUS: "Math, English, Science",
    amount: "92",
    amountNumber: 92,
  },
  music: {
    id: "co-curricular",
    name: "Music Lessons",
    subtitle: "Piano and Guitar",
    amount: "84",
    amountNumber: 84,
    classes: 4,
  },
  premium: {
    id: "premium-plan",
    name: "Premium Plan",
    subtitle: "Complete Learning Package, 3 Subjects",
    amount: "241",
    amountNumber: 241,
    originalAmount: "299",
    originalAmountNumber: 299,
    discountBadge: "SAVE 19%",
    discountBadgeTitleCase: "Save 19%",
  },
} as const;

export function getRegionalPricing(region?: string) {
  if (region && region.toLowerCase() === "nz") {
    return NZ_PRICING_DATA;
  }
  return DEFAULT_PRICING_DATA;
}

export const PRICING_DATA = DEFAULT_PRICING_DATA;
