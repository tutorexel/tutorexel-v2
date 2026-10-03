'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import RegionLink from '@/components/shared/RegionLink';
import { getCurrentRegion } from '@/utils/regionalLinks';
import { type RegionCode } from '@/data/regions';
import { AU_HOME_COPY } from '@/data/copy/au-home';
import { COUNTRIES, type Country } from '@/components/shared/CountryTabs';
import './Pricing.css';

interface PricingProps {
  region?: RegionCode;
}

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
    id: 'live-online-coaching',
    name: 'Live Online Coaching',
    subtitle: 'Mathematics, English, Science',
    currency: '$',
    amount: '84',
    period: 'month per subject',
    popular: true,
    borderColor: 'orange',
    features: [
      '1 hour personalized sessions',
      '4 sessions per month per subject',
      '1:1 personalised tutoring available',
      'Group sessions available (max 3 students)',
      'Weekly practice worksheets',
      'Free assessment & report',
      'Regular progress tests',
      'Flexible scheduling',
      'Recorded session access',
      'WhatsApp support',
    ],
  },
  {
    id: 'co-curricular',
    name: 'Co-Curricular',
    subtitle: 'Music & Creative Arts\nPiano & Guitar',
    currency: '$',
    amount: '79',
    period: 'month (4 classes)',
    popular: false,
    borderColor: 'dark',
    features: [
      'Piano lessons',
      'Guitar lessons',
      'One-on-one instruction',
      'Flexible scheduling',
      'Recorded session access',
      'WhatsApp support',
      'All skill levels welcome',
      'Personalized curriculum',
    ],
  },
  {
    id: 'premium-plan',
    name: 'Premium Plan',
    subtitle: 'Complete Learning Package\n3 Subjects',
    currency: '$',
    amount: '219',
    originalAmount: '299',
    period: 'month',
    popular: false,
    borderColor: 'dark',
    features: [
      '12 live classes per month',
      '3 Subjects - Maths, English & Science',
      '1:1 personalised tutoring available',
      'Group sessions available (max 3 students)',
      'Recorded session access',
      'Weekly progress reports',
      'WhatsApp support',
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

export default function Pricing({ region }: PricingProps = {}) {
  const pathname = usePathname() || '';
  const currentRegion = region || getCurrentRegion(pathname);
  const isAu = currentRegion === 'au';
  const initialCountry = COUNTRIES.find((c) => c.code === currentRegion) || COUNTRIES[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(initialCountry);

  useEffect(() => {
    const current = COUNTRIES.find((c) => c.code === currentRegion) || COUNTRIES[0];
    setSelectedCountry(current);
  }, [currentRegion]);

  if (isAu) {
    return (
      <section className="pricing section">
        <div className="pricing__bg"></div>
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label section-header__label--no-before">
              <Image src="/images/icons/circle_icon.webp" alt="" className="section-header__label-icon" width={20} height={20} />
              {AU_HOME_COPY.pricing.eyebrow}
            </p>
            <h2 className="section-header__title">{AU_HOME_COPY.pricing.title}</h2>
            <div className="pricing__discount-badge">
              <span className="pricing__discount-pulse" aria-hidden="true"></span>
              {AU_HOME_COPY.pricing.line1}
            </div>
            <p className="section-header__subtitle">
              {AU_HOME_COPY.pricing.line2}
            </p>
          </div>

          <div className="pricing__grid">
            {AU_HOME_COPY.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card pricing-card--${plan.borderColor}`}
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
                      <span className="discount-badge">{plan.discountBadge}</span>
                    </div>
                  )}
                  <div className="pricing-card__price">
                    <span className="currency">{plan.currency}</span>
                    <span className="amount">{plan.amount}</span>
                    <span className="period">{plan.period}</span>
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

                <RegionLink href={plan.ctaHref} className="pricing-card__button">
                  {plan.ctaText}
                </RegionLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pricing section">
      <div className="pricing__bg"></div>
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-header__label section-header__label--no-before">
            <Image src="/images/icons/circle_icon.webp" alt="" className="section-header__label-icon" width={20} height={20} />
            Simple Pricing
          </p>
          <h2 className="section-header__title">Choose Your Plan</h2>
          <div className="pricing__discount-badge">
            <span className="pricing__discount-pulse" aria-hidden="true"></span>
            Get up to <strong>20% discount</strong> - Enrol Today!
          </div>
          <p className="section-header__subtitle">
            No contracts. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="pricing__grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card pricing-card--${plan.borderColor}`}
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

              <RegionLink href={`/pricing?plan=${plan.id}&currency=${selectedCountry.currency}`} className="pricing-card__button">
                Get Started
              </RegionLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
