"use client";

import React from "react";
import Link from "next/link";
import { RegionConfig } from "@/data/regions";
import { getRegionalHref } from "@/utils/regionalLinks";

interface BlogPricingProps {
  regionConfig: RegionConfig;
}

export default function BlogPricing({ regionConfig }: BlogPricingProps) {
  const { pricing, currency, currencySymbol, code } = regionConfig;

  return (
    <section className="explore" aria-labelledby="exH">
      <div className="wrap">
        <div className="plans-head">
          <h2 id="exH">{pricing.title}</h2>
          <div className="plan-discount">
            <span className="pulse" aria-hidden="true"></span>
            {pricing.discountText}
          </div>
          <p>{pricing.subtitle}</p>
        </div>

        <div className="plans">
          {pricing.plans.map((plan) => {
            const planHref = getRegionalHref(
              `/pricing?plan=${plan.id}&currency=${currency}`,
              code
            );

            return (
              <article
                key={plan.id}
                className={`plan ${plan.featured ? "plan--feat" : ""}`}
                data-cat={plan.themeCategory}
              >
                {plan.badge && <span className="plan-badge">{plan.badge}</span>}

                <div className="plan-top">
                  <span className="topic-ic">
                    {plan.id === "live-online-coaching" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Zm2 14h13" />
                      </svg>
                    )}
                    {plan.id === "co-curricular" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18V5l11-2v13M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm11-2a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z" />
                      </svg>
                    )}
                    {plan.id === "premium-plan" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z" />
                      </svg>
                    )}
                  </span>
                  <div className="plan-id">
                    <b className="plan-name">{plan.name}</b>
                    <span className="plan-sub">{plan.subtitle}</span>
                  </div>
                </div>

                <div className="plan-price">
                  {plan.originalAmount ? (
                    <span className="plan-old">
                      <s>
                        {currencySymbol}
                        {plan.originalAmount}
                      </s>
                      {plan.discountBadge && <em>{plan.discountBadge}</em>}
                    </span>
                  ) : (
                    <span className="plan-old plan-old--ghost" aria-hidden="true">
                      &nbsp;
                    </span>
                  )}
                  <span className="plan-amt">
                    <sup>{currencySymbol}</sup>
                    {plan.amount}
                  </span>
                  <span className="plan-per">{plan.periodText}</span>
                </div>

                <ul className="plan-feats">
                  {plan.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>

                {plan.moreFeatures && plan.moreFeatures.length > 0 && (
                  <details className="plan-more">
                    <summary>+{plan.moreFeatures.length} more included</summary>
                    <ul className="plan-feats">
                      {plan.moreFeatures.map((mFeat) => (
                        <li key={mFeat}>{mFeat}</li>
                      ))}
                    </ul>
                  </details>
                )}

                <Link className="plan-btn" href={planHref}>
                  Get Started{" "}
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
            );
          })}
        </div>

        <p className="plans-foot">
          {pricing.footnote.split(". ")[0]}.{" "}
          <Link href={getRegionalHref("/pricing", code)}>
            {pricing.footnote.split(". ")[1] || "See pricing for other countries"}
          </Link>
        </p>
      </div>
    </section>
  );
}
