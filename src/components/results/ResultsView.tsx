"use client";

import RegionLink from "@/components/shared/RegionLink";
import { type RegionCode } from "@/data/regions";
import "@/app/results/results.css";

const stats = [
  { value: "500+", label: "Students taught", variant: "orange" as const },
  {
    value: "15+",
    label: "Years of teaching experience",
    variant: "dark" as const,
  },
  {
    value: "92%",
    label: "Students with improved grades",
    variant: "orange" as const,
  },
  { value: "4.8/5", label: "Average parent rating", variant: "orange" as const },
];

export default function ResultsView({ region }: { region: RegionCode }) {
  return (
    <>
      <section className="results-hero">
        <div className="container">
          <div className="results-hero__content">
            <h1 className="results-hero__title">
              Real Learners. Real Growth.{" "}
              <span className="results-hero__title-highlight">Real Wins.</span>
            </h1>
            <p className="results-hero__subtitle">
              See how structured, curriculum-matched tutoring helps students in Australia,
              the USA, Canada and New Zealand build confidence and lift their results.
            </p>
          </div>
        </div>
      </section>

      <section className="results-stats">
        <div className="container">
          <div className="results-stats__grid">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`results-stats__card results-stats__card--${stat.variant}`}
              >
                <div className="results-stats__value">{stat.value}</div>
                <div className="results-stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies and testimonials hidden per instructions until content supplied */}

      <section className="results-cta">
        <div className="container">
          <h2 className="results-cta__title">
            Your Child&apos;s Success Story Starts Here
          </h2>
          <div className="results-cta__actions">
            <RegionLink
              href="/free-trial"
              region={region}
              className="btn btn-primary btn-lg"
            >
              Book a Free Trial
            </RegionLink>
            <RegionLink
              href="/free-assessment"
              region={region}
              className="btn btn-outline-white btn-lg"
            >
              Get a Free Assessment
            </RegionLink>
          </div>
        </div>
      </section>
    </>
  );
}
