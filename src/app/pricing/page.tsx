"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { createFaqSchema } from "@/utils/schema";
import CountrySelector, { COUNTRIES, type Country } from "@/components/shared/CountrySelector";
import "./pricing.css";

type PricingPlan = {
  id: string;
  name: string;
  subtitle: string;
  currency: string;
  amount: string;
  originalAmount?: string;
  period: string;
  popular: boolean;
  borderColor: string;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    id: "live-online-coaching",
    name: "Live Online Coaching",
    subtitle: "Mathematics, English, Science",
    currency: "$",
    amount: "84",
    period: "month per subject",
    popular: true,
    borderColor: "orange",
    features: [
      "1 hour personalized sessions",
      "4 sessions per month per subject",
      "1:1 personalised tutoring available",
      "Group sessions available (max 3 students)",
      "Weekly practice worksheets",
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
    subtitle: "Music & Creative Arts\nPiano & Guitar",
    currency: "$",
    amount: "79",
    period: "month (4 classes)",
    popular: false,
    borderColor: "dark",
    features: [
      "Piano lessons",
      "Guitar lessons",
      "One-on-one instruction",
      "Flexible scheduling",
      "Recorded session access",
      "WhatsApp support",
      "All skill levels welcome",
      "Personalized curriculum",
    ],
  },
  {
    id: "premium-plan",
    name: "Premium Plan",
    subtitle: "Complete Learning Package\n3 Subjects",
    currency: "$",
    amount: "219",
    originalAmount: "299",
    period: "month",
    popular: false,
    borderColor: "dark",
    features: [
      "8 live classes per month",
      "3 Subjects — Maths, English & Science",
      "1:1 personalised tutoring available",
      "Group sessions available (max 3 students)",
      "Recorded session access",
      "Weekly progress reports",
      "WhatsApp support",
    ],
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.333 4L6 11.333 2.667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GreenCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="9" fill="#4CAF50" />
      <path d="M5.5 9L8 11.5L12.5 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="0" x2="12" y2="24" stroke="#E56031" strokeWidth="0.6" />
      <line x1="0" y1="12" x2="24" y2="12" stroke="#E56031" strokeWidth="0.6" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#E56031" strokeWidth="0.6" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="#E56031" strokeWidth="0.6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const includedFeatures = [
  "Free diagnostic assessment before you start",
  "Personalised learning plan based on assessment results",
  "Qualified, trained tutor matched to your child",
  "Structured curriculum aligned to national standards",
  "Regular progress updates and parent communication",
  "Make-up sessions if your child misses a class",
  "Cancel anytime with 2 weeks notice",
];

const faqItems = [
  {
    question: "Is there a minimum commitment?",
    answer:
      "No long-term contracts. You pay monthly in advance and can cancel anytime with 2 weeks notice.",
  },
  {
    question: "What if my child misses a class?",
    answer:
      "We offer make-up sessions for any missed classes. Simply let us know in advance and we will schedule a replacement session at a time that works for your family.",
  },
  {
    question: "Can I switch between plans?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle. Our team will help you find the right fit for your child's needs.",
  },
  {
    question: "Are there sibling discounts?",
    answer:
      "Yes, we offer a 10% discount for each additional sibling enrolled. Contact our team to set up sibling pricing. The discount applies to all plans.",
  },
  {
    question: "Is the assessment really free?",
    answer:
      "Yes, 100% free with no obligation. The diagnostic assessment helps us understand your child's current level and identify learning gaps. You will receive a detailed report regardless of whether you enrol.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, as well as direct bank transfers. Payments are processed securely and you will receive a receipt for every transaction.",
  },
];

// Inner component that uses useSearchParams (needs Suspense boundary)
function PricingPageContent() {
  const searchParams = useSearchParams();
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const [selectedOffering, setSelectedOffering] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const subOptionsRef = useRef<HTMLDivElement>(null);

  // Auto-select plan from query parameter (when coming from Home page)
  useEffect(() => {
    const planParam = searchParams.get("plan");
    const currencyParam = searchParams.get("currency");
    if (planParam && pricingPlans.some((p) => p.id === planParam)) {
      setSelectedOffering(planParam);
      setTimeout(() => {
        subOptionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }

    if (currencyParam) {
      const matchedCountry = COUNTRIES.find((c) => c.currency === currencyParam);
      if (matchedCountry) {
        setSelectedCountry(matchedCountry);
      }
    }
  }, [searchParams]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const handleSelect = (planId: string) => {
    if (selectedOffering === planId) {
      setSelectedOffering(null);
      return;
    }
    setSelectedOffering(planId);
    setTimeout(() => {
      subOptionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      {/* Flash promo strip — Early Enrolments */}
      <div className="pricing-flash" role="region" aria-label="Promotion">
        <div className="container">
          <p className="pricing-flash__text">
            <span className="pricing-flash__pulse" aria-hidden="true"></span>
            Get up to <strong>20% discount</strong> - Enrol Today!
          </p>
        </div>
      </div>

      {/* Banner Section (Same style as Subject page) */}
      <section className="pricing-banner">
        <div className="pricing-banner__decoration pricing-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="pricing-banner__curve pricing-banner__curve--1"
          />
        </div>
        <div className="pricing-banner__decoration pricing-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="pricing-banner__curve pricing-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="pricing-banner__curve pricing-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="pricing-banner__content">
            <h1 className="pricing-banner__title">
              Simple, Transparent{" "}
              <span className="pricing-banner__title-highlight">Pricing</span>{" "}
              <span className="pricing-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="pricing-banner__subtitle">
              No contracts. No hidden fees. Cancel anytime with 2 weeks notice.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Same styling as Home page */}
      <section className="pricing section">
        <div className="container">

          <div className="pricing__country-row">
            <span className="pricing__country-label">Pricing shown for:</span>
            <CountrySelector selected={selectedCountry} onChange={setSelectedCountry} />
          </div>

          <div className="pricing__grid">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card pricing-card--${plan.borderColor} ${selectedOffering === plan.id ? "pricing-card--selected" : ""
                  }`}
              >
                {plan.popular && (
                  <span className="pricing-card__badge">Most Popular</span>
                )}

                <div className="pricing-card__header">
                  <div className="pricing-card__name">{plan.name}</div>
                  <div className="pricing-card__subtitle">{plan.subtitle}</div>
                </div>

                <div className="pricing-card__price-wrapper">
                  {plan.originalAmount && (
                    <div className="pricing-card__original-price">
                      <span className="original-price">{plan.currency}{plan.originalAmount}</span>
                      <span className="discount-badge">Save 27%</span>
                    </div>
                  )}
                  <div className="pricing-card__price">
                    <span className="currency">{plan.currency}</span>
                    <span className="amount">{plan.amount}</span>
                    <span className="period">{selectedCountry.currency}/{plan.period}</span>
                  </div>
                </div>

                <div className="pricing-card__features">
                  {plan.features.map((feature) => (
                    <div className="pricing-card__feature" key={feature}>
                      <span className="feature-check">
                        <CheckIcon />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSelect(plan.id)}
                  className={`pricing-card__button ${selectedOffering === plan.id ? "pricing-card__button--selected" : ""
                    }`}
                >
                  {selectedOffering === plan.id ? "Selected" : "Get Started"}
                </button>
              </div>
            ))}
          </div>

          {/* Sub-Options Section */}
          {selectedOffering && (
            <div ref={subOptionsRef} className="pricing-suboptions">
              <div className="pricing-suboptions__header">
                <h2 className="pricing-suboptions__title">
                  Choose Your{" "}
                  {selectedOffering === "live-online-coaching"
                    ? "Class Type"
                    : selectedOffering === "co-curricular"
                      ? "Activity"
                      : "Plan"}
                </h2>
                <p className="pricing-suboptions__subtitle">
                  {selectedOffering === "live-online-coaching"
                    ? "Select between personalised one-on-one coaching or affordable group sessions."
                    : selectedOffering === "co-curricular"
                      ? "Choose from our music programs — learn Piano, Guitar, or both at a discount."
                      : "Get the complete learning package with both Maths and English included."}
                </p>
              </div>

              {selectedOffering === "live-online-coaching" && (
                <div className="pricing-suboptions__grid">
                  {/* 1:1 Coaching Card */}
                  <div className="pricing-subcard pricing-subcard--teal">
                    <h3 className="pricing-subcard__title">1:1 Coaching</h3>
                    <p className="pricing-subcard__desc">
                      Personalised one-on-one sessions with a dedicated tutor
                    </p>
                    <div className="pricing-subcard__prices">
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$84</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month &mdash; 1 Subject</span>
                      </div>
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$149</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month &mdash; 2 Subjects</span>
                      </div>
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$219</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month &mdash; 3 Subjects</span>
                      </div>
                      <p className="pricing-subcard__note">4 sessions per month per subject</p>
                    </div>
                    <Link
                      href={`/enroll?offering=live-online-coaching&type=one-to-one&currency=${selectedCountry.currency}`}
                      className="pricing-subcard__btn"
                    >
                      Join <ArrowRight />
                    </Link>
                  </div>

                  {/* Group Coaching Card */}
                  <div className="pricing-subcard pricing-subcard--orange">
                    <h3 className="pricing-subcard__title">Group Coaching 3:1</h3>
                    <p className="pricing-subcard__desc">
                      Small group sessions with max 3 students per tutor
                    </p>
                    <div className="pricing-subcard__prices">
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$39</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month &mdash; 1 Subject</span>
                      </div>
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$69</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month &mdash; 2 Subjects</span>
                      </div>
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$99</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month &mdash; 3 Subjects</span>
                      </div>
                      <p className="pricing-subcard__note">4 sessions per month per subject</p>
                    </div>
                    <Link
                      href={`/enroll?offering=live-online-coaching&type=group&currency=${selectedCountry.currency}`}
                      className="pricing-subcard__btn"
                    >
                      Join <ArrowRight />
                    </Link>
                  </div>
                </div>
              )}

              {selectedOffering === "co-curricular" && (
                <div className="pricing-suboptions__grid pricing-suboptions__grid--three">
                  {/* Piano */}
                  <div className="pricing-subcard pricing-subcard--teal">
                    <h3 className="pricing-subcard__title">Piano Lessons</h3>
                    <p className="pricing-subcard__desc">
                      One-on-one piano instruction for all skill levels
                    </p>
                    <div className="pricing-subcard__prices">
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$79</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month (4 classes)</span>
                      </div>
                    </div>
                    <Link
                      href={`/enroll?offering=co-curricular&activity=piano&currency=${selectedCountry.currency}`}
                      className="pricing-subcard__btn"
                    >
                      Join <ArrowRight />
                    </Link>
                  </div>

                  {/* Guitar */}
                  <div className="pricing-subcard pricing-subcard--orange">
                    <h3 className="pricing-subcard__title">Guitar Lessons</h3>
                    <p className="pricing-subcard__desc">
                      One-on-one guitar instruction for all skill levels
                    </p>
                    <div className="pricing-subcard__prices">
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$79</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month (4 classes)</span>
                      </div>
                    </div>
                    <Link
                      href={`/enroll?offering=co-curricular&activity=guitar&currency=${selectedCountry.currency}`}
                      className="pricing-subcard__btn"
                    >
                      Join <ArrowRight />
                    </Link>
                  </div>

                  {/* Both */}
                  <div className="pricing-subcard pricing-subcard--navy">
                    <h3 className="pricing-subcard__title">Piano + Guitar Bundle</h3>
                    <p className="pricing-subcard__desc">
                      Learn both instruments and save with bundle pricing
                    </p>
                    <div className="pricing-subcard__prices">
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$149</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month &mdash; both activities</span>
                      </div>
                    </div>
                    <Link
                      href={`/enroll?offering=co-curricular&activity=both&currency=${selectedCountry.currency}`}
                      className="pricing-subcard__btn"
                    >
                      Join <ArrowRight />
                    </Link>
                  </div>
                </div>
              )}

              {selectedOffering === "premium-plan" && (
                <div className="pricing-suboptions__grid pricing-suboptions__grid--single">
                  <div className="pricing-subcard pricing-subcard--navy">
                    <h3 className="pricing-subcard__title">Complete Learning Package</h3>
                    <p className="pricing-subcard__desc">
                      12 live classes per month covering Maths, English and Science, with recorded
                      session access, monthly reports, and WhatsApp support.
                    </p>
                    <div className="pricing-subcard__prices">
                      <div className="pricing-subcard__original-row">
                        <span className="pricing-subcard__original-amount">$299</span>
                        <span className="pricing-subcard__discount-badge">Save 27%</span>
                      </div>
                      <div className="pricing-subcard__price-row">
                        <span className="pricing-subcard__amount">$219</span>
                        <span className="pricing-subcard__detail">{selectedCountry.currency}/month &mdash; 3 subjects included</span>
                      </div>
                    </div>
                    <Link
                      href={`/enroll?offering=premium-plan&currency=${selectedCountry.currency}`}
                      className="pricing-subcard__btn"
                    >
                      Join <ArrowRight />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Every TutorExel Student Gets */}
      <section className="pricing-includes">
        <div className="pricing-includes__bg"></div>
        <div className="pricing-includes__overlay"></div>
        <div className="container">
          <h2 className="pricing-includes__title">
            Every TutorExel Student Gets
          </h2>
          <div className="pricing-includes__grid">
            <div className="pricing-includes__image-wrapper">
              <Image
                src="/images/pricing/student-tutor.webp"
                alt="Mother and daughter learning together with tablet"
                width={600}
                height={400}
                className="pricing-includes__image"
              />
            </div>

            <div className="pricing-includes__card">
              <ul className="pricing-includes__list">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="pricing-includes__item">
                    <span className="pricing-includes__item-check">
                      <GreenCheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-faq">
        <div className="container">
          <div className="pricing-faq__header">
            <div className="pricing-faq__label">
              <StarIcon />
              <span>Got Questions?</span>
            </div>
            <h2 className="pricing-faq__title">Frequently Asked Questions</h2>
          </div>

          <div className="pricing-faq__list">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`pricing-faq__item ${openFaqIndex === index ? "pricing-faq__item--open" : ""
                  }`}
              >
                <button
                  className="pricing-faq__question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="pricing-faq__question-text">{item.question}</span>
                  <span className="pricing-faq__icon">
                    {openFaqIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="pricing-faq__answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <JsonLd data={createFaqSchema(faqItems)} />

      {/* CTA - Reusing the same component from Home page */}
      <CTA />
    </>
  );
}

// Wrapper component with Suspense boundary for useSearchParams
export default function PricingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricingPageContent />
    </Suspense>
  );
}
