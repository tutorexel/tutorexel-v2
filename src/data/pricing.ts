/**
 * Single source of truth for pricing across all regions (AU, US, CA, NZ).
 * Edit this file to update pricing everywhere across the site.
 */

export const PRICING_DATA = {
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
