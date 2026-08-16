// GA4 Event Tracking Utility
// Measurement ID: G-C2VFSLJF3K

type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

// ─── Core event helper ───
export function trackEvent({ action, category, label, value }: GtagEvent) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// ─── Conversion Events ───

/** Enrolment form submitted successfully */
export function trackEnrollment(offering: string, amount: number | null) {
  gtag("event", "purchase", {
    currency: "AUD",
    value: amount ?? 0,
    items: [{ item_name: offering }],
  });
  trackEvent({
    action: "form_submit",
    category: "enrollment",
    label: offering,
    value: amount ?? 0,
  });
}

/** Contact form submitted */
export function trackContactSubmit(interests: string[]) {
  gtag("event", "generate_lead", {
    currency: "AUD",
    value: 10,
  });
  trackEvent({
    action: "form_submit",
    category: "contact",
    label: interests.join(", "),
  });
}

/** Free assessment form submitted */
export function trackAssessmentSubmit(subject: string, yearLevel: string) {
  gtag("event", "generate_lead", {
    currency: "AUD",
    value: 20,
  });
  trackEvent({
    action: "form_submit",
    category: "free_assessment",
    label: `${subject} - ${yearLevel}`,
  });
}

/** Free trial modal opened (Calendly booking) */
export function trackTrialBookingClick(source: string) {
  trackEvent({
    action: "begin_checkout",
    category: "free_trial",
    label: source,
  });
}

/** WhatsApp / Phone click */
export function trackPhoneClick() {
  trackEvent({
    action: "click",
    category: "contact",
    label: "whatsapp_header",
  });
}

/** Enroll Now button click (header CTA) */
export function trackEnrollClick(source: string) {
  trackEvent({
    action: "click",
    category: "cta",
    label: `enroll_now_${source}`,
  });
}

/** Blog post read */
export function trackBlogRead(slug: string, category: string) {
  trackEvent({
    action: "view_item",
    category: "blog",
    label: `${category}: ${slug}`,
  });
}

/** Page scroll depth (for engagement tracking) */
export function trackScrollDepth(depth: number) {
  trackEvent({
    action: "scroll",
    category: "engagement",
    label: `${depth}%`,
    value: depth,
  });
}
