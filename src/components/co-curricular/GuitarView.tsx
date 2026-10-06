"use client";

import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import { REGIONS_CONFIG, type RegionCode } from "@/data/regions";
import { AU_GUITAR_COPY } from "@/data/copy/au-guitar";
import { CA_GUITAR_COPY } from "@/data/copy/ca-guitar";
import { NZ_GUITAR_COPY } from "@/data/copy/nz-guitar";
import { US_GUITAR_COPY } from "@/data/copy/us-guitar";
import { MusicPageCopy } from "@/data/copy/music-copy-types";
import { createBreadcrumbSchema } from "@/utils/schema";
import JsonLd from "@/components/seo/JsonLd";
import "@/app/co-curricular/guitar/guitar.css";
import "@/components/home/CTA.css";

const copyByRegion: Record<RegionCode, MusicPageCopy> = {
  au: AU_GUITAR_COPY,
  ca: CA_GUITAR_COPY,
  nz: NZ_GUITAR_COPY,
  us: US_GUITAR_COPY,
};

function EducationIcon({ type }: { type: string }) {
  switch (type) {
    case "technique":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11.99 16.5-3.54 2.13a1 1 0 0 1-1.5-1.07l.88-4.01-3.11-2.7a1 1 0 0 1 .56-1.74l4.12-.35 1.6-3.84a1 1 0 0 1 1.81 0l1.6 3.84 4.12.35a1 1 0 0 1 .56 1.74l-3.11 2.7.88 4.01a1 1 0 0 1-1.5 1.07z" />
        </svg>
      );
    case "repertoire":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "theory":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          <path d="M8 7h6M8 11h8" />
        </svg>
      );
    case "creativity":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386z" />
        </svg>
      );
    case "performance":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      );
    default:
      return null;
  }
}

function RequirementIcon({ type }: { type: string }) {
  switch (type) {
    case "pick":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m20 8-4.2-2.1a3 3 0 0 0-2.7 0L9 8" />
          <path d="M12 2v6.5" />
          <path d="M6 10c-1.1 2-2 4.5-2 7 0 3 2 5 4.5 5s3.5-1.5 4-3c.5-1.5.5-3 0-4.5" />
          <path d="M18 10c1.1 2 2 4.5 2 7 0 3-2 5-4.5 5S12 20.5 12 19" />
        </svg>
      );
    case "wifi":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      );
    case "device":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "quiet":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      );
    default:
      return null;
  }
}

export default function GuitarView({ region }: { region: RegionCode }) {
  const currentRegion: RegionCode = region || "au";
  const copy = copyByRegion[currentRegion] || AU_GUITAR_COPY;
  const regConfig = REGIONS_CONFIG[currentRegion] || REGIONS_CONFIG.au;
  const basePath = currentRegion === "au" ? "" : `/${currentRegion}`;

  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `https://www.tutorexel.com${basePath}` },
    { name: "Co-Curricular", url: `https://www.tutorexel.com${basePath}/co-curricular` },
    { name: "Guitar", url: `https://www.tutorexel.com${basePath}/co-curricular/guitar` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="guitar-hero">
        <div className="guitar-hero__decoration guitar-hero__decoration--left">
          <Image src="/images/about/left-line.webp" alt="" width={200} height={200} className="guitar-hero__curve" />
        </div>
        <div className="guitar-hero__decoration guitar-hero__decoration--right">
          <Image src="/images/about/star-design.webp" alt="" width={200} height={200} className="guitar-hero__stars" />
          <Image src="/images/about/right-line.webp" alt="" width={200} height={200} className="guitar-hero__curve-right" />
        </div>
        <div className="container">
          <div className="guitar-hero__content">
            <h1 className="guitar-hero__title">
              {copy.hero.h1}
            </h1>
            <p className="guitar-hero__subtitle">
              {copy.hero.text}
            </p>
            <div className="guitar-hero__actions">
              <RegionLink href={copy.hero.primaryCta.href} region={currentRegion} className="btn btn-primary btn-lg">
                {copy.hero.primaryCta.text}
              </RegionLink>
              <RegionLink href={copy.hero.secondaryCta.href} region={currentRegion} className="guitar-hero__btn-outline">
                {copy.hero.secondaryCta.text}
              </RegionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="education">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">{copy.mastery.eyebrow}</p>
            <h2 className="section-header__title">{copy.mastery.h2}</h2>
          </div>

          <div className="education__grid">
            {copy.mastery.cards.slice(0, 3).map((card) => (
              <div
                className={`education-card${card.highlighted ? " education-card--highlighted" : ""}`}
                key={card.title}
              >
                <div className="education-card__icon">
                  <EducationIcon type={card.icon} />
                </div>
                <h3 className="education-card__title">{card.title}</h3>
                <p className="education-card__desc">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="education__grid--bottom">
            {copy.mastery.cards.slice(3).map((card) => (
              <div
                className={`education-card${card.highlighted ? " education-card--highlighted" : ""}`}
                key={card.title}
              >
                <div className="education-card__icon">
                  <EducationIcon type={card.icon} />
                </div>
                <h3 className="education-card__title">{card.title}</h3>
                <p className="education-card__desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grade-progression">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">{copy.gradeProgression.eyebrow}</p>
            <h2 className="section-header__title">{copy.gradeProgression.h2}</h2>
          </div>

          <div className="grade-path">
            {copy.gradeProgression.grades.map((grade, i) => (
              <div key={grade.short} style={{ display: "flex", alignItems: "center" }}>
                <div className="grade-node">
                  <div className="grade-node__circle">{grade.short}</div>
                  <span className="grade-node__label">{grade.label}</span>
                </div>
                {i < copy.gradeProgression.grades.length - 1 && <div className="grade-connector" />}
              </div>
            ))}
          </div>

          {copy.gradeProgression.note && (
            <p style={{ textAlign: "center", color: "#515151", fontSize: "14px", marginTop: "24px" }}>
              {copy.gradeProgression.note}
            </p>
          )}
        </div>
      </section>

      <section className="lesson-structure">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">{copy.lessonStructure.eyebrow}</p>
            <h2 className="section-header__title">{copy.lessonStructure.h2}</h2>
          </div>

          <div className="lesson-structure__layout">
            <div>
              <div className="lesson-timeline">
                {copy.lessonStructure.timeline.map((item) => (
                  <div className="lesson-item" key={item.title}>
                    <div className="lesson-item__time">
                      <span className="lesson-item__time-icon">&#128339;</span>
                      {item.time}
                    </div>
                    <div className="lesson-item__content">
                      <h4 className="lesson-item__title">{item.title}</h4>
                      <p className="lesson-item__desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lesson-details">
                {copy.lessonStructure.details.map((detail) => (
                  <div className="lesson-detail" key={detail.label}>
                    <span className="lesson-detail__label">{detail.label}</span>
                    <span className="lesson-detail__value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lesson-structure__image">
              <Image
                src={copy.lessonStructure.image.src}
                alt={copy.lessonStructure.image.alt}
                width={copy.lessonStructure.image.width}
                height={copy.lessonStructure.image.height}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="audience">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">{copy.audience.eyebrow}</p>
            <h2 className="section-header__title">{copy.audience.h2}</h2>
          </div>

          <div className="audience__layout">
            <div className="audience__image">
              <Image
                src={copy.audience.image.src}
                alt={copy.audience.image.alt}
                width={copy.audience.image.width}
                height={copy.audience.image.height}
              />
            </div>
            <div className="audience__list">
              {copy.audience.items.map((item) => (
                <div className="audience-item" key={item.title}>
                  <h3 className="audience-item__title">
                    {item.title}
                  </h3>
                  <p className="audience-item__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="requirements">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-header__title">{copy.requirements.h2}</h2>
          </div>

          <div className="requirements__grid">
            {copy.requirements.items.map((req) => (
              <div
                className={`requirement-card${req.highlighted ? " requirement-card--highlighted" : ""}`}
                key={req.label}
              >
                <div className="requirement-card__icon">
                  <RequirementIcon type={req.icon} />
                </div>
                <p className="requirement-card__label">{req.label}</p>
              </div>
            ))}
          </div>

          {copy.requirements.note && (
            <p style={{ textAlign: "center", color: "#515151", fontSize: "14px", marginTop: "24px" }}>
              {copy.requirements.note}
            </p>
          )}
        </div>
      </section>

      {copy.testimonials.items && copy.testimonials.items.length > 0 && (
        <section style={{ padding: "48px 0", background: "#f7f5f0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <h2 style={{ fontFamily: "var(--font-poppins)", fontSize: "28px", fontWeight: 700, color: "#1a2e3b" }}>{copy.testimonials.h2}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
              {copy.testimonials.items.map((item) => (
                <div key={item.name} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid #efe9df" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: item.initials === "RK" ? "#d4654a" : "#3d8b7a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px" }}>{item.initials}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "15px", color: "#1a2e3b" }}>{item.name}</div>
                      <div style={{ fontSize: "12px", color: "#8a9aa8" }}>{item.role}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: "14px", color: "#5a6b78", lineHeight: 1.6, fontStyle: "italic" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta section">
        <div className="container">
          <div className="cta__grid">
            <div className="cta__image-wrapper">
              <Image
                src="/images/cta/lady_image.webp"
                alt={`Happy ${regConfig.demonym} student learning guitar online from home`}
                className="cta__image"
                width={600}
                height={500}
              />
            </div>

            <div className="cta__content">
              <h2 className="cta__title">
                {copy.finalCta.h2}
              </h2>
              {copy.finalCta.text && (
                <p className="cta__description">
                  {copy.finalCta.text}
                </p>
              )}
              <div className="cta__actions">
                <RegionLink href={copy.finalCta.primaryButton.href} region={currentRegion} className="cta__btn">
                  {copy.finalCta.primaryButton.text}
                </RegionLink>
                {copy.finalCta.secondaryButton && (
                  <RegionLink href={copy.finalCta.secondaryButton.href} region={currentRegion} className="cta__btn cta__btn--outline">
                    {copy.finalCta.secondaryButton.text}
                  </RegionLink>
                )}
              </div>
            </div>
          </div>
        </div>
        <Image src="/images/cta/vector.webp" alt="" className="cta__vector" width={400} height={200} />
      </section>
    </>
  );
}
