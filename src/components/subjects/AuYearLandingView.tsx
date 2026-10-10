"use client";

import { useState } from "react";
import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import BookTrialButton from "@/components/home/BookTrialButton";
import CTA from "@/components/home/CTA";
import { createBreadcrumbSchema } from "@/utils/schema";
import type { AuYearPageData } from "@/data/au-year-pages";
import "@/app/subjects/[yearId]/[subjectId]/subject-detail.css";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#22C55E" />
      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="detail-outcomes__label-icon" />
  );
}

const termsList: Array<"term-1" | "term-2" | "term-3" | "term-4"> = [
  "term-1",
  "term-2",
  "term-3",
  "term-4",
];

const termLabels: Record<string, string> = {
  "term-1": "Term 1",
  "term-2": "Term 2",
  "term-3": "Term 3",
  "term-4": "Term 4",
};

interface AuYearLandingViewProps {
  data: AuYearPageData;
}

export default function AuYearLandingView({ data }: AuYearLandingViewProps) {
  const [activeSubject, setActiveSubject] = useState<"english" | "maths" | "science">("english");
  const [activeTerm, setActiveTerm] = useState<"term-1" | "term-2" | "term-3" | "term-4">("term-1");

  const termIndex = termsList.indexOf(activeTerm);

  const breadcrumbsSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/" },
    { name: "Subjects", url: "https://www.tutorexel.com/subjects" },
    { name: `Year ${data.yearNum}`, url: data.meta.canonical },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* ===== Hero Banner Section ===== */}
      <section className="detail-banner">
        <div className="detail-banner__decoration detail-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="detail-banner__curve detail-banner__curve--1"
          />
        </div>
        <div className="detail-banner__decoration detail-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="detail-banner__curve detail-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="detail-banner__curve detail-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="detail-banner__content">
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "20px",
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              <RegionLink href="/" region="au" style={{ color: "#4a5568", textDecoration: "none" }}>
                Home
              </RegionLink>
              <span>&gt;</span>
              <RegionLink href="/subjects" region="au" style={{ color: "#4a5568", textDecoration: "none" }}>
                Subjects
              </RegionLink>
              <span>&gt;</span>
              <span style={{ color: "#1a2e3b", fontWeight: 600 }}>Year {data.yearNum}</span>
            </nav>

            <h1 className="detail-banner__title">{data.hero.h1}</h1>
            <p className="detail-banner__subtitle">{data.hero.subheading}</p>

            <div className="detail-banner__actions">
              <BookTrialButton className="btn btn-primary btn-lg">
                {data.hero.primaryBtn}
              </BookTrialButton>
              <RegionLink
                href="/free-assessment"
                region="au"
                className="btn btn-secondary btn-lg"
              >
                {data.hero.secondaryBtn}
              </RegionLink>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Unique Intro Block ===== */}
      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#5a6b78", marginBottom: "20px" }}>
              {data.intro.text}
            </p>
            <div style={{ background: "#f7f5f0", borderRadius: "10px", padding: "20px", marginBottom: "16px", borderLeft: "3px solid #3d8b7a" }}>
              <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a2e3b", marginBottom: "8px" }}>
                Key Topics Covered:
              </p>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "14px", color: "#5a6b78", lineHeight: 1.7 }}>
                <li><strong style={{ color: "#1a2e3b" }}>Maths:</strong> {data.intro.keyTopics.maths}</li>
                <li><strong style={{ color: "#1a2e3b" }}>English:</strong> {data.intro.keyTopics.english}</li>
                <li><strong style={{ color: "#1a2e3b" }}>Science:</strong> {data.intro.keyTopics.science}</li>
              </ul>
            </div>
            <div style={{ background: "#fff5f0", borderRadius: "10px", padding: "20px", borderLeft: "3px solid #d4654a" }}>
              <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a2e3b", marginBottom: "6px" }}>
                Parent Tip:
              </p>
              <p style={{ fontSize: "14px", color: "#5a6b78", lineHeight: 1.6, margin: 0 }}>
                {data.intro.parentTip}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Learning Outcomes Section ===== */}
      <section className="detail-outcomes section">
        <div className="container">
          <div className="detail-outcomes__header">
            <p className="detail-outcomes__label">
              <CircleIcon />
              {data.outcomes.eyebrow}
            </p>
            <h2 className="detail-outcomes__title">
              {data.outcomes.h2}
            </h2>
          </div>

          <div className="detail-outcomes__grid">
            <div className="detail-outcomes__main">
              <div className="detail-outcomes__list">
                {data.outcomes.items.map((outcome, i) => (
                  <div key={i} className="detail-outcomes__item">
                    <CheckIcon />
                    <span className="detail-outcomes__text">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="detail-outcomes__image">
              <Image
                src="/images/subjects/learning_outcomes_image.webp"
                alt={`Year ${data.yearNum} students learning online`}
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Curriculum Table with Subject & Term Toggles ===== */}
      <section id="curriculum" className="detail-curriculum section">
        <div className="container">
          <div className="detail-curriculum__header">
            <p className="detail-curriculum__label">
              <span className="detail-curriculum__star">
                <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} />
              </span>
              {data.curriculum.eyebrow}
            </p>
            <h2 className="detail-curriculum__title">
              {data.curriculum.h2}
            </h2>
          </div>

          {/* Subject Navigation Links Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            {data.curriculum.subjects.map((subj) => (
              <RegionLink
                key={subj.id}
                href={subj.href}
                region="au"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid #d0d7de",
                  background: activeSubject === subj.id ? "#f0f7f5" : "#ffffff",
                  color: activeSubject === subj.id ? "#236c5b" : "#4a5568",
                }}
              >
                Go to Year {data.yearNum} {subj.label} overview &rarr;
              </RegionLink>
            ))}
          </div>

          {/* Subject Switcher Tabs */}
          <div className="detail-curriculum__tabs-wrapper" style={{ marginBottom: "16px" }}>
            <div className="detail-curriculum__tabs">
              {data.curriculum.subjects.map((subj) => (
                <button
                  key={subj.id}
                  onClick={() => setActiveSubject(subj.id)}
                  className={`detail-curriculum__tab ${activeSubject === subj.id ? "detail-curriculum__tab--active" : ""}`}
                >
                  {subj.label}
                </button>
              ))}
            </div>
          </div>

          {/* Term Switcher Tabs */}
          <div className="detail-curriculum__tabs-wrapper">
            <div className="detail-curriculum__tabs">
              {termsList.map((termKey) => (
                <button
                  key={termKey}
                  onClick={() => setActiveTerm(termKey)}
                  className={`detail-curriculum__tab ${activeTerm === termKey ? "detail-curriculum__tab--active" : ""}`}
                >
                  {termLabels[termKey]}
                </button>
              ))}
            </div>
          </div>

          {/* Curriculum Content */}
          <div className="detail-curriculum__content">
            {data.curriculum.subjects.map((subj) =>
              subj.terms.map((term) => {
                const isSelected = activeSubject === subj.id && activeTerm === term.termKey;
                const isLocked = termIndex >= 2;

                return (
                  <div
                    key={`${subj.id}-${term.termKey}`}
                    style={{ display: isSelected ? "block" : "none" }}
                  >
                    <div
                      className={`detail-curriculum__table-container ${isLocked ? "detail-curriculum__table-container--locked" : ""}`}
                      style={{ position: "relative" }}
                    >
                      <table className="detail-curriculum__table">
                        <thead>
                          <tr>
                            <th className="detail-curriculum__th detail-curriculum__th--no">No.</th>
                            <th className="detail-curriculum__th detail-curriculum__th--topic">Topic</th>
                            <th className="detail-curriculum__th detail-curriculum__th--desc">What We Cover</th>
                          </tr>
                        </thead>
                        <tbody>
                          {term.topics.map((item, idx) => (
                            <tr key={idx} className="detail-curriculum__tr">
                              <td className="detail-curriculum__td detail-curriculum__td--no">{item.no}</td>
                              <td className="detail-curriculum__td detail-curriculum__td--topic">{item.topic}</td>
                              <td className="detail-curriculum__td detail-curriculum__td--desc">{item.whatWeCover}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="detail-curriculum__gate-overlay">
                        <div className="detail-curriculum__gate-content">
                          <div className="detail-curriculum__gate-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                          </div>
                          <h3 className="detail-curriculum__gate-title">
                            {data.lockedBox.h2}
                          </h3>
                          <p className="detail-curriculum__gate-text">
                            {data.lockedBox.text}
                          </p>
                          <BookTrialButton className="detail-curriculum__gate-btn">
                            {data.lockedBox.buttonText}
                          </BookTrialButton>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: "18px", textAlign: "center" }}>
                      <RegionLink
                        href={subj.href}
                        region="au"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#236c5b",
                          textDecoration: "underline",
                        }}
                      >
                        Explore detailed Year {data.yearNum} {subj.label} overview &amp; learning plans &rarr;
                      </RegionLink>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* ===== What a Typical Session Looks Like ===== */}
      <section className="detail-session section">
        <div className="container">
          <div className="detail-session__header">
            <p className="detail-session__label">
              <CircleIcon />
              {data.lessonStructure.eyebrow}
            </p>
            <h2 className="detail-session__title">
              {data.lessonStructure.h2}
            </h2>
          </div>

          <div className="detail-session__grid">
            <div className="detail-session__image">
              <Image
                src="/images/subjects/detail-session__image.webp"
                alt="Student in a tutoring session with their tutor"
                width={600}
                height={400}
              />
            </div>
            <div className="detail-session__timeline">
              {data.lessonStructure.steps.map((step, i) => (
                <div key={i} className="detail-timeline-item">
                  <h3 className="detail-timeline-item__title">
                    {step.title} <span className="detail-timeline-item__duration">({step.duration})</span>
                  </h3>
                  <p className="detail-timeline-item__description">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Keep Exploring Section ===== */}
      <section className="detail-explore section">
        <div className="container">
          <div className="detail-explore__header">
            <h2 className="detail-explore__title">{data.keepExploring.h2}</h2>
          </div>

          <div className="detail-explore__grid">
            {data.keepExploring.cards.map((card, i) => (
              <div key={i} className="detail-explore__card">
                <span className="detail-explore__badge">{card.tag}</span>
                <h3 className="detail-explore__card-title">{card.title}</h3>
                <p className="detail-explore__card-description">{card.text}</p>
                <RegionLink href={card.href} region="au" className="detail-explore__btn">
                  {card.buttonText}
                </RegionLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA Section ===== */}
      <CTA
        region="au"
        title={data.finalCta.h2}
        description={data.finalCta.text}
        buttonText={data.finalCta.buttonText}
      />
    </>
  );
}
