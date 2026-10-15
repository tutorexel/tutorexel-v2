/**
 * Shared pricing logic for the enrollment flow.
 * Used by both the enroll page (client) and /api/enroll (server) so the
 * server can re-derive totals instead of trusting client input.
 */

import { getRegionalPricing } from "@/data/pricing";

export type Offering = "live-online-coaching" | "co-curricular" | "premium-plan" | "";
export type ClassType = "one-to-one" | "group" | "";

export interface PricingInput {
  offering: Offering;
  classType?: ClassType;
  subjects?: { Mathematics?: boolean; English?: boolean; Science?: boolean };
  activities?: { piano?: boolean; guitar?: boolean };
  region?: string;
}

export interface PricingResult {
  /** Whole-currency amount (e.g. AUD dollars). null when selection is incomplete. */
  total: number | null;
  /** "/month" or "/session" - append next to the amount in the UI. */
  period: "/month" | "/session" | "";
}

export function computePricing(input: PricingInput, regionCode?: string): PricingResult {
  const region = (regionCode || input.region || "").toLowerCase();
  const pricingData = getRegionalPricing(region);
  const { offering, classType, subjects, activities } = input;

  if (offering === "live-online-coaching") {
    if (!classType) return { total: null, period: "/month" };
    const subjectCount = [subjects?.Mathematics, subjects?.English, subjects?.Science].filter(Boolean).length;
    if (subjectCount === 0) return { total: null, period: "/month" };
    if (classType === "one-to-one") {
      // 1:1 pricing: 1 subject = tutoring amount ($84 or NZ$92), 2 subjects = $149, 3 subjects = premium ($241)
      const price = subjectCount === 3 ? pricingData.premium.amountNumber : subjectCount === 2 ? 149 : pricingData.tutoring.amountNumber;
      return { total: price, period: "/month" };
    }
    if (classType === "group") {
      // Group pricing: $39/1 subject, $69/2 subjects, $99/3 subjects
      const price = subjectCount === 3 ? 99 : subjectCount === 2 ? 69 : 39;
      return { total: price, period: "/month" };
    }
    return { total: null, period: "/month" };
  }

  if (offering === "co-curricular") {
    const activityCount = [activities?.piano, activities?.guitar].filter(Boolean).length;
    if (activityCount === 0) return { total: null, period: "/session" };
    return {
      total: activityCount === 1 ? pricingData.music.amountNumber : 149,
      period: activityCount === 1 ? "/session" : "/month",
    };
  }

  if (offering === "premium-plan") {
    return { total: pricingData.premium.amountNumber, period: "/month" };
  }

  return { total: null, period: "" };
}
