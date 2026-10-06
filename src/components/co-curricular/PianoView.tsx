"use client";

import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import { REGIONS_CONFIG, type RegionCode } from "@/data/regions";
import { AU_PIANO_COPY } from "@/data/copy/au-piano";
import { CA_PIANO_COPY } from "@/data/copy/ca-piano";
import { NZ_PIANO_COPY } from "@/data/copy/nz-piano";
import { US_PIANO_COPY } from "@/data/copy/us-piano";
import { MusicPageCopy } from "@/data/copy/music-copy-types";
import { createBreadcrumbSchema } from "@/utils/schema";
import JsonLd from "@/components/seo/JsonLd";
import "@/app/co-curricular/piano/piano.css";
import "@/components/home/CTA.css";

const copyByRegion: Record<RegionCode, MusicPageCopy> = {
  au: AU_PIANO_COPY,
  ca: CA_PIANO_COPY,
  nz: NZ_PIANO_COPY,
  us: US_PIANO_COPY,
};

function EducationIcon({ type }: { type: string }) {
  const props = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", stroke: "#FFFFFF", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (type) {
    case "technique":
      return (
        <svg {...props}>
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      );
    case "repertoire":
      return (
        <svg {...props}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "theory":
      return (
        <svg {...props}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "creativity":
      return (
        <svg {...props}>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case "performance":
      return (
        <svg {...props}>
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      );
    default:
      return null;
  }
}

function RequirementIcon({ type, highlighted }: { type: string; highlighted?: boolean }) {
  const color = highlighted ? "#FFFFFF" : "#e56031";

  switch (type) {
    case "piano":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 4v16M10 4v16M14 4v16M18 4v16" />
          <path d="M2 12h20" />
        </svg>
      );
    case "wifi":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      );
    case "device":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "quiet":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PianoView({ region }: { region: RegionCode }) {
  const currentRegion: RegionCode = region || "au";
  const copy = copyByRegion[currentRegion] || AU_PIANO_COPY;
  const regConfig = REGIONS_CONFIG[currentRegion] || REGIONS_CONFIG.au;
  const basePath = currentRegion === "au" ? "" : `/${currentRegion}`;

  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `https://www.tutorexel.com${basePath}` },
    { name: "Co-Curricular", url: `https://www.tutorexel.com${basePath}/co-curricular` },
    { name: "Piano", url: `https://www.tutorexel.com${basePath}/co-curricular/piano` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="piano-hero">
        <div className="piano-hero__decoration piano-hero__decoration--left">
          <Image src="/images/about/left-line.webp" alt="" width={200} height={200} className="piano-hero__curve" />
        </div>

        <div className="piano-hero__decoration piano-hero__decoration--right">
          <Image src="/images/about/star-design.webp" alt="" width={200} height={200} className="piano-hero__stars" />
          <Image src="/images/about/right-line.webp" alt="" width={200} height={200} className="piano-hero__curve-right" />
        </div>

        <div className="container">
          <div className="piano-hero__content">
            <h1 className="piano-hero__title">
              {copy.hero.h1}
            </h1>
            <p className="piano-hero__subtitle">
              {copy.hero.text}
            </p>
            <div className="piano-hero__actions">
              <RegionLink href={copy.hero.primaryCta.href} region={currentRegion} className="btn btn-primary btn-lg">
                {copy.hero.primaryCta.text}
              </RegionLink>
              <RegionLink href={copy.hero.secondaryCta.href} region={currentRegion} className="piano-hero__btn-outline">
                {copy.hero.secondaryCta.text}
              </RegionLink>
            </div>
          </div>
        </div>

        <div className="piano-hero__keys">
          <Image
            src="/images/co-curricular/piano-keys.webp"
            alt={`Piano keys for online music lessons in ${regConfig.countryName}`}
            width={1200}
            height={100}
          />
        </div>
      </section>

      <section className="piano-education">
        <div className="container">
          <div className="piano-education__header">
            <p className="piano-education__label">
              <span className="piano-education__label-star">✦</span>
              {copy.mastery.eyebrow}
            </p>
            <h2 className="piano-education__title">{copy.mastery.h2}</h2>
          </div>

          <div className="piano-education__grid">
            {copy.mastery.cards.slice(0, 3).map((card) => (
              <div key={card.title} className="piano-education__card">
                <div className="piano-education__card-icon">
                  <EducationIcon type={card.icon} />
                </div>
                <h3 className="piano-education__card-title">{card.title}</h3>
                <p className="piano-education__card-desc">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="piano-education__grid piano-education__grid--bottom">
            {copy.mastery.cards.slice(3).map((card) => (
              <div key={card.title} className="piano-education__card">
                <div className="piano-education__card-icon">
                  <EducationIcon type={card.icon} />
                </div>
                <h3 className="piano-education__card-title">{card.title}</h3>
                <p className="piano-education__card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="piano-grades">
        <div className="container">
          <div className="piano-grades__header">
            <p className="piano-grades__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="piano-grades__label-icon" />
              {copy.gradeProgression.eyebrow}
            </p>
            <h2 className="piano-grades__title">{copy.gradeProgression.h2}</h2>
          </div>

          <div className="piano-grades__path">
            {copy.gradeProgression.grades.map((grade, i) => (
              <div key={grade.short} className="piano-grades__node-wrapper">
                <div className="piano-grades__node">
                  <div className="piano-grades__circle">{grade.short}</div>
                  <span className="piano-grades__label-text">{grade.label}</span>
                </div>
                {i < copy.gradeProgression.grades.length - 1 && <div className="piano-grades__connector" />}
              </div>
            ))}
          </div>

          {copy.gradeProgression.note && (
            <p className="piano-grades__note">
              {copy.gradeProgression.note}
            </p>
          )}
        </div>
      </section>

      <section className="piano-lesson">
        <div className="container">
          <div className="piano-lesson__header">
            <p className="piano-lesson__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="piano-lesson__label-icon" />
              {copy.lessonStructure.eyebrow}
            </p>
            <h2 className="piano-lesson__title">{copy.lessonStructure.h2}</h2>
          </div>

          <div className="piano-lesson__grid">
            <div className="piano-lesson__left">
              <div className="piano-lesson__timeline">
                {copy.lessonStructure.timeline.map((item, i) => (
                  <div key={i} className="piano-lesson__item">
                    <div className="piano-lesson__item-dot" />
                    <div className="piano-lesson__item-content">
                      <h4 className="piano-lesson__item-title">{item.title}</h4>
                      <p className="piano-lesson__item-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="piano-lesson__details">
                <h4 className="piano-lesson__details-title">Session details:</h4>
                <div className="piano-lesson__details-grid">
                  {copy.lessonStructure.details.map((detail) => (
                    <div key={detail.label} className="piano-lesson__detail">
                      <span className="piano-lesson__detail-label">{detail.label}</span>
                      <span className="piano-lesson__detail-value">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="piano-lesson__image">
              <Image src={copy.lessonStructure.image.src} alt={copy.lessonStructure.image.alt} width={copy.lessonStructure.image.width} height={copy.lessonStructure.image.height} />
            </div>
          </div>
        </div>
      </section>

      <section className="piano-audience">
        <div className="container">
          <div className="piano-audience__header">
            <p className="piano-audience__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="piano-audience__label-icon" />
              {copy.audience.eyebrow}
            </p>
            <h2 className="piano-audience__title">{copy.audience.h2}</h2>
          </div>

          <div className="piano-audience__grid">
            <div className="piano-audience__image">
              <Image src={copy.audience.image.src} alt={copy.audience.image.alt} width={copy.audience.image.width} height={copy.audience.image.height} />
            </div>
            <div className="piano-audience__list">
              {copy.audience.items.map((item, i) => (
                <div key={i} className="piano-audience__item">
                  <h3 className="piano-audience__item-title">
                    {item.title}
                  </h3>
                  <p className="piano-audience__item-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="piano-requirements">
        <div className="container">
          <div className="piano-requirements__header">
            <h2 className="piano-requirements__title">{copy.requirements.h2}</h2>
          </div>

          <div className="piano-requirements__grid">
            {copy.requirements.items.map((req, i) => (
              <div
                key={i}
                className={`piano-requirements__card${req.highlighted ? " piano-requirements__card--highlighted" : ""}`}
              >
                <div className="piano-requirements__card-icon">
                  <RequirementIcon type={req.icon} highlighted={req.highlighted} />
                </div>
                <p className="piano-requirements__card-label">{req.label}</p>
              </div>
            ))}
          </div>

          {copy.requirements.note && (
            <p className="piano-requirements__note">
              {copy.requirements.note}
            </p>
          )}
        </div>
      </section>

      {copy.testimonials.items && copy.testimonials.items.length > 0 && (
        <section className="piano-testimonials">
          <div className="container">
            <div className="piano-testimonials__header">
              <h2 className="piano-testimonials__title">{copy.testimonials.h2}</h2>
            </div>

            <div className="piano-testimonials__grid">
              {copy.testimonials.items.map((item, i) => (
                <div key={i} className="piano-testimonials__card">
                  <div className="piano-testimonials__card-header">
                    <div className="piano-testimonials__avatar-initials">{item.initials}</div>
                    <div>
                      <h4 className="piano-testimonials__name">{item.name}</h4>
                      <p className="piano-testimonials__role">{item.role}</p>
                    </div>
                  </div>
                  <p className="piano-testimonials__text">{item.text}</p>
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
                alt={`Happy ${regConfig.demonym} student learning piano online from home`}
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
