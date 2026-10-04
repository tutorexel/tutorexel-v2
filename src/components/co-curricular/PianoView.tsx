"use client";

import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import { type RegionCode } from "@/data/regions";
import { AU_PIANO_COPY } from "@/data/copy/au-piano";
import { CA_PIANO_COPY } from "@/data/copy/ca-piano";
import { NZ_PIANO_COPY } from "@/data/copy/nz-piano";
import { US_PIANO_COPY } from "@/data/copy/us-piano";
import { createBreadcrumbSchema } from "@/utils/schema";
import JsonLd from "@/components/seo/JsonLd";
import "@/app/co-curricular/piano/piano.css";

const educationCards = [
  {
    title: "Technique",
    description:
      "Correct hand position, posture, scales, arpeggios, and finger independence. We build strong technical foundations from day one.",
    iconType: "technique",
  },
  {
    title: "Repertoire",
    description:
      "Performance pieces from the Trinity College London piano syllabus. Students learn music they enjoy while meeting grade requirements.",
    iconType: "repertoire",
  },
  {
    title: "Theory & Musicianship",
    description:
      "Reading sheet music, understanding rhythm, dynamics, tempo, and musical expression. The skills that turn notes into music",
    iconType: "theory",
  },
  {
    title: "Creativity",
    description:
      "Improvisation, chord progressions, and basic composition. We encourage students to express themselves, not just follow instructions.",
    iconType: "creativity",
  },
  {
    title: "Performance Skills",
    description:
      "Building confidence to perform in front of others. Optional mock performance sessions prepare students for Trinity exams and recitals",
    iconType: "performance",
  },
];

const grades = [
  { number: "IG", label: "INITIAL" },
  { number: "1", label: "GRADE 1" },
  { number: "2", label: "GRADE 2" },
  { number: "3", label: "GRADE 3" },
  { number: "4", label: "GRADE 4" },
  { number: "5", label: "GRADE 5" },
  { number: "6", label: "GRADE 6" },
  { number: "7", label: "GRADE 7" },
  { number: "8", label: "GRADE 8" },
];

const lessonTimeline = [
  {
    title: "Warm up",
    description: "Scales, arpeggios, and finger exercises to develop strength, agility, and warm up the hands.",
  },
  {
    title: "Repertoire",
    description: "Working through Trinity set pieces, focusing on expression, accuracy, dynamics, and musical phrasing.",
  },
  {
    title: "Theory",
    description: "Music theory concepts, sight-reading practice, and aural training exercises.",
  },
  {
    title: "Creative time",
    description: "Free exploration, improvisation, or a piece of the student's choice to keep lessons fun and inspiring.",
  },
];

const sessionDetails = [
  { label: "Duration", value: "60 minutes" },
  { label: "Format", value: "One-on-one online" },
  { label: "Frequency", value: "Weekly" },
  { label: "Homework", value: "Student practice assignments" },
];

const audiences = [
  {
    title: "Complete Beginners",
    highlight: "Ages 5+",
    description:
      "Never played piano before? We start from the very beginning: hand position, reading notes, and playing your first melodies.",
  },
  {
    title: "Students Already",
    highlight: "Learning",
    description:
      "If your child is learning piano but needs more structure or a clearer progression path, we will assess their level and build from there.",
  },
  {
    title: "Students Preparing for",
    highlight: "Exams",
    description:
      "Getting ready for Trinity College London piano exams? Our tutors know the syllabus thoroughly and prepare students with precision.",
  },
  {
    title: "Adult",
    highlight: "Learners",
    description:
      "Always wanted to learn piano? It is never too late. We welcome adults who are starting fresh or returning after years away from the keys.",
  },
];

const requirements = [
  {
    label: "A piano or keyboard with at least 61 weighted/semi-weighted keys",
    icon: "piano",
  },
  {
    label: "A stable internet connection",
    icon: "wifi",
    highlighted: true,
  },
  {
    label: "A device with a camera, or phone on stand",
    icon: "device",
  },
  {
    label: "A quiet practice space",
    icon: "quiet",
  },
];

const testimonials = [
  {
    name: "Anita M.",
    role: "Mother of 9-year-old, Sydney",
    text: "My daughter has been taking piano lessons with TutorExel for 6 months now. She went from not knowing a single note to playing her first Trinity piece confidently. The tutor is incredibly patient and makes every lesson fun.",
    initials: "AM",
  },
  {
    name: "David L.",
    role: "Father of 11-year-old, Melbourne",
    text: "We tried in-person piano lessons but the commute was killing us. TutorExel's online piano sessions are just as effective. My son just passed his Grade 2 Trinity exam and is already preparing for Grade 3.",
    initials: "DL",
  },
];

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

function AuPianoView() {
  const copy = AU_PIANO_COPY;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com" },
    { name: "Co-Curricular", url: "https://www.tutorexel.com/co-curricular" },
    { name: "Piano", url: "https://www.tutorexel.com/co-curricular/piano" },
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
              <RegionLink href={copy.hero.primaryCta.href} region="au" className="btn btn-primary btn-lg">
                {copy.hero.primaryCta.text}
              </RegionLink>
              <RegionLink href={copy.hero.secondaryCta.href} region="au" className="piano-hero__btn-outline">
                {copy.hero.secondaryCta.text}
              </RegionLink>
            </div>
          </div>
        </div>

        <div className="piano-hero__keys">
          <Image src="/images/co-curricular/piano-keys.webp" alt="Piano keys for online music lessons in Australia" width={1200} height={100} />
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

      <section className="piano-cta">
        <div className="container">
          <div className="piano-cta__content">
            <h2 className="piano-cta__title">{copy.finalCta.h2}</h2>
            {copy.finalCta.text && (
              <p className="piano-cta__subtitle">
                {copy.finalCta.text}
              </p>
            )}
            <div className="piano-cta__actions">
              <RegionLink href={copy.finalCta.primaryButton.href} region="au" className="btn btn-primary btn-lg">
                {copy.finalCta.primaryButton.text}
              </RegionLink>
              <RegionLink href={copy.finalCta.secondaryButton.href} region="au" className="piano-cta__btn-outline">
                {copy.finalCta.secondaryButton.text}
              </RegionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CaPianoView() {
  const copy = CA_PIANO_COPY;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/ca" },
    { name: "Co-Curricular", url: "https://www.tutorexel.com/ca/co-curricular" },
    { name: "Piano", url: "https://www.tutorexel.com/ca/co-curricular/piano" },
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
              <RegionLink href={copy.hero.primaryCta.href} region="ca" className="btn btn-primary btn-lg">
                {copy.hero.primaryCta.text}
              </RegionLink>
              <RegionLink href={copy.hero.secondaryCta.href} region="ca" className="piano-hero__btn-outline">
                {copy.hero.secondaryCta.text}
              </RegionLink>
            </div>
          </div>
        </div>

        <div className="piano-hero__keys">
          <Image src="/images/co-curricular/piano-keys.webp" alt="Piano keys for online music lessons in Canada" width={1200} height={100} />
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
            <div className="piano-grades__line" />
            <div className="piano-grades__grid">
              {copy.gradeProgression.grades.map((grade) => (
                <div key={grade.short} className="piano-grades__node">
                  <div className="piano-grades__circle">
                    <span className="piano-grades__number">{grade.short}</span>
                  </div>
                  <span className="piano-grades__step-label">{grade.label}</span>
                </div>
              ))}
            </div>
          </div>

          {copy.gradeProgression.note && (
            <p className="piano-grades__note">
              {copy.gradeProgression.note}
            </p>
          )}
        </div>
      </section>

      <section className="piano-structure">
        <div className="container">
          <div className="piano-structure__header">
            <p className="piano-structure__label">
              <span className="piano-structure__label-star">✦</span>
              {copy.lessonStructure.eyebrow}
            </p>
            <h2 className="piano-structure__title">{copy.lessonStructure.h2}</h2>
          </div>

          <div className="piano-structure__grid">
            <div className="piano-structure__timeline">
              {copy.lessonStructure.timeline.map((item, i) => (
                <div key={i} className="piano-structure__timeline-item">
                  <div className="piano-structure__timeline-dot" />
                  <div className="piano-structure__timeline-body">
                    <h3 className="piano-structure__timeline-title">{item.title}</h3>
                    <p className="piano-structure__timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="piano-structure__sidebar">
              <div className="piano-structure__image-wrapper">
                <Image
                  src={copy.lessonStructure.image.src}
                  alt={copy.lessonStructure.image.alt}
                  width={copy.lessonStructure.image.width}
                  height={copy.lessonStructure.image.height}
                  className="piano-structure__image"
                />
              </div>

              <div className="piano-structure__details">
                {copy.lessonStructure.details.map((detail, i) => (
                  <div key={i} className="piano-structure__detail-card">
                    <p className="piano-structure__detail-label">{detail.label}</p>
                    <p className="piano-structure__detail-value">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="piano-audience">
        <div className="container">
          <div className="piano-audience__header">
            <p className="piano-audience__label">
              <span className="piano-audience__label-star">✦</span>
              {copy.audience.eyebrow}
            </p>
            <h2 className="piano-audience__title">{copy.audience.h2}</h2>
          </div>

          <div className="piano-audience__grid">
            <div className="piano-audience__image-wrapper">
              <Image
                src={copy.audience.image.src}
                alt={copy.audience.image.alt}
                width={copy.audience.image.width}
                height={copy.audience.image.height}
                className="piano-audience__image"
              />
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

      <section className="piano-testimonials">
        <div className="container">
          <div className="piano-testimonials__header">
            <h2 className="piano-testimonials__title">{AU_PIANO_COPY.testimonials.h2}</h2>
          </div>

          <div className="piano-testimonials__grid">
            {AU_PIANO_COPY.testimonials.items.map((item, i) => (
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

      <section className="piano-cta">
        <div className="container">
          <div className="piano-cta__content">
            <h2 className="piano-cta__title">{copy.finalCta.h2}</h2>
            {copy.finalCta.text && (
              <p className="piano-cta__subtitle">
                {copy.finalCta.text}
              </p>
            )}
            <div className="piano-cta__actions">
              <RegionLink href={copy.finalCta.primaryButton.href} region="ca" className="btn btn-primary btn-lg">
                {copy.finalCta.primaryButton.text}
              </RegionLink>
              <RegionLink href={copy.finalCta.secondaryButton.href} region="ca" className="piano-cta__btn-outline">
                {copy.finalCta.secondaryButton.text}
              </RegionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function NzPianoView() {
  const copy = NZ_PIANO_COPY;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/nz" },
    { name: "Music Lessons", url: "https://www.tutorexel.com/nz/co-curricular" },
    { name: "Piano", url: "https://www.tutorexel.com/nz/co-curricular/piano" },
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
              <RegionLink href={copy.hero.primaryCta.href} region="nz" className="btn btn-primary btn-lg">
                {copy.hero.primaryCta.text}
              </RegionLink>
              <RegionLink href={copy.hero.secondaryCta.href} region="nz" className="piano-hero__btn-outline">
                {copy.hero.secondaryCta.text}
              </RegionLink>
            </div>
          </div>
        </div>

        <div className="piano-hero__keys">
          <Image src="/images/co-curricular/piano-keys.webp" alt="" width={1200} height={100} />
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
              <span className="piano-grades__label-star">✦</span>
              {copy.gradeProgression.eyebrow}
            </p>
            <h2 className="piano-grades__title">{copy.gradeProgression.h2}</h2>
          </div>

          <div className="piano-grades__timeline">
            {copy.gradeProgression.grades.map((grade, index) => (
              <div key={grade.short} className="piano-grades__step">
                <div className="piano-grades__step-circle">{grade.short}</div>
                <span className="piano-grades__step-label">{grade.label}</span>
                {index < copy.gradeProgression.grades.length - 1 && <div className="piano-grades__step-line" />}
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

      <section className="piano-structure">
        <div className="container">
          <div className="piano-structure__grid">
            <div className="piano-structure__content">
              <p className="piano-structure__label">
                <span className="piano-structure__label-star">✦</span>
                {copy.lessonStructure.eyebrow}
              </p>
              <h2 className="piano-structure__title">{copy.lessonStructure.h2}</h2>

              <div className="piano-structure__timeline">
                {copy.lessonStructure.timeline.map((item, index) => (
                  <div key={item.title} className="piano-structure__timeline-item">
                    <div className="piano-structure__timeline-number">{index + 1}</div>
                    <div className="piano-structure__timeline-content">
                      <h3 className="piano-structure__timeline-title">{item.title}</h3>
                      <p className="piano-structure__timeline-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="piano-structure__details">
                {copy.lessonStructure.details.map((detail) => (
                  <div key={detail.label} className="piano-structure__detail">
                    <span className="piano-structure__detail-label">{detail.label}</span>
                    <span className="piano-structure__detail-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="piano-structure__image">
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

      <section className="piano-audience">
        <div className="container">
          <div className="piano-audience__grid">
            <div className="piano-audience__image">
              <Image
                src={copy.audience.image.src}
                alt={copy.audience.image.alt}
                width={copy.audience.image.width}
                height={copy.audience.image.height}
              />
            </div>

            <div className="piano-audience__content">
              <p className="piano-audience__label">
                <span className="piano-audience__label-star">✦</span>
                {copy.audience.eyebrow}
              </p>
              <h2 className="piano-audience__title">{copy.audience.h2}</h2>

              <div className="piano-audience__list">
                {copy.audience.items.map((item) => (
                  <div key={item.title} className="piano-audience__item">
                    <h3 className="piano-audience__item-title">
                      {item.title}
                    </h3>
                    <p className="piano-audience__item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
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
            {copy.requirements.items.map((item) => (
              <div
                key={item.label}
                className={`piano-requirements__card ${
                  item.highlighted ? "piano-requirements__card--highlighted" : ""
                }`}
              >
                <div className="piano-requirements__card-icon">
                  <RequirementIcon type={item.icon} />
                </div>
                <p className="piano-requirements__card-label">{item.label}</p>
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

      <section className="piano-testimonials">
        <div className="container">
          <div className="piano-testimonials__header">
            <h2 className="piano-testimonials__title">{AU_PIANO_COPY.testimonials.h2}</h2>
          </div>

          <div className="piano-testimonials__grid">
            {AU_PIANO_COPY.testimonials.items.map((item, i) => (
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

      <section className="piano-cta">
        <div className="container">
          <div className="piano-cta__content">
            <h2 className="piano-cta__title">{copy.finalCta.h2}</h2>
            {copy.finalCta.text && (
              <p className="piano-cta__subtitle">
                {copy.finalCta.text}
              </p>
            )}
            <div className="piano-cta__actions">
              <RegionLink href={copy.finalCta.primaryButton.href} region="nz" className="btn btn-primary btn-lg">
                {copy.finalCta.primaryButton.text}
              </RegionLink>
              <RegionLink href={copy.finalCta.secondaryButton.href} region="nz" className="piano-cta__btn-outline">
                {copy.finalCta.secondaryButton.text}
              </RegionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function UsPianoView() {
  const copy = US_PIANO_COPY;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com/us" },
    { name: "Music Lessons", url: "https://www.tutorexel.com/us/co-curricular" },
    { name: "Piano", url: "https://www.tutorexel.com/us/co-curricular/piano" },
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
              <RegionLink href={copy.hero.primaryCta.href} region="us" className="btn btn-primary btn-lg">
                {copy.hero.primaryCta.text}
              </RegionLink>
              <RegionLink href={copy.hero.secondaryCta.href} region="us" className="piano-hero__btn-outline">
                {copy.hero.secondaryCta.text}
              </RegionLink>
            </div>
          </div>
        </div>

        <div className="piano-hero__keys">
          <Image src="/images/co-curricular/piano-keys.webp" alt="" width={1200} height={100} />
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
              <span className="piano-grades__label-star">✦</span>
              {copy.gradeProgression.eyebrow}
            </p>
            <h2 className="piano-grades__title">{copy.gradeProgression.h2}</h2>
          </div>

          <div className="piano-grades__timeline">
            {copy.gradeProgression.grades.map((grade, index) => (
              <div key={grade.short} className="piano-grades__step">
                <div className="piano-grades__step-circle">{grade.short}</div>
                <span className="piano-grades__step-label">{grade.label}</span>
                {index < copy.gradeProgression.grades.length - 1 && <div className="piano-grades__step-line" />}
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

      <section className="piano-structure">
        <div className="container">
          <div className="piano-structure__grid">
            <div className="piano-structure__content">
              <p className="piano-structure__label">
                <span className="piano-structure__label-star">✦</span>
                {copy.lessonStructure.eyebrow}
              </p>
              <h2 className="piano-structure__title">{copy.lessonStructure.h2}</h2>

              <div className="piano-structure__timeline">
                {copy.lessonStructure.timeline.map((item, index) => (
                  <div key={item.title} className="piano-structure__timeline-item">
                    <div className="piano-structure__timeline-number">{index + 1}</div>
                    <div className="piano-structure__timeline-content">
                      <h3 className="piano-structure__timeline-title">{item.title}</h3>
                      <p className="piano-structure__timeline-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="piano-structure__details">
                {copy.lessonStructure.details.map((detail) => (
                  <div key={detail.label} className="piano-structure__detail">
                    <span className="piano-structure__detail-label">{detail.label}</span>
                    <span className="piano-structure__detail-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="piano-structure__image">
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

      <section className="piano-audience">
        <div className="container">
          <div className="piano-audience__grid">
            <div className="piano-audience__image">
              <Image
                src={copy.audience.image.src}
                alt={copy.audience.image.alt}
                width={copy.audience.image.width}
                height={copy.audience.image.height}
              />
            </div>

            <div className="piano-audience__content">
              <p className="piano-audience__label">
                <span className="piano-audience__label-star">✦</span>
                {copy.audience.eyebrow}
              </p>
              <h2 className="piano-audience__title">{copy.audience.h2}</h2>

              <div className="piano-audience__list">
                {copy.audience.items.map((item) => (
                  <div key={item.title} className="piano-audience__item">
                    <h3 className="piano-audience__item-title">
                      {item.title}
                    </h3>
                    <p className="piano-audience__item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
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
            {copy.requirements.items.map((item) => (
              <div
                key={item.label}
                className={`piano-requirements__card ${
                  item.highlighted ? "piano-requirements__card--highlighted" : ""
                }`}
              >
                <div className="piano-requirements__card-icon">
                  <RequirementIcon type={item.icon} />
                </div>
                <p className="piano-requirements__card-label">{item.label}</p>
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

      <section className="piano-testimonials">
        <div className="container">
          <div className="piano-testimonials__header">
            <h2 className="piano-testimonials__title">{AU_PIANO_COPY.testimonials.h2}</h2>
          </div>

          <div className="piano-testimonials__grid">
            {AU_PIANO_COPY.testimonials.items.map((item, i) => (
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

      <section className="piano-cta">
        <div className="container">
          <div className="piano-cta__content">
            <h2 className="piano-cta__title">{copy.finalCta.h2}</h2>
            {copy.finalCta.text && (
              <p className="piano-cta__subtitle">
                {copy.finalCta.text}
              </p>
            )}
            <div className="piano-cta__actions">
              <RegionLink href={copy.finalCta.primaryButton.href} region="us" className="btn btn-primary btn-lg">
                {copy.finalCta.primaryButton.text}
              </RegionLink>
              <RegionLink href={copy.finalCta.secondaryButton.href} region="us" className="piano-cta__btn-outline">
                {copy.finalCta.secondaryButton.text}
              </RegionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PianoView({ region }: { region: RegionCode }) {
  if (region === "au") {
    return <AuPianoView />;
  }
  if (region === "ca") {
    return <CaPianoView />;
  }
  if (region === "nz") {
    return <NzPianoView />;
  }
  if (region === "us") {
    return <UsPianoView />;
  }

  return (
    <>
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
              Online <span className="piano-hero__title-highlight">Piano Lessons</span> Trinity
              College London Syllabus <span className="piano-hero__title-star"><Image src="/images/banner/Vector-2.webp" alt="" width={20} height={20} /></span>
            </h1>
            <p className="piano-hero__subtitle">
              Structured one-on-one piano instruction for beginners to advanced students. Learn from home with qualified tutors who make every lesson count.
            </p>
            <div className="piano-hero__actions">
              <RegionLink href="/co-curricular/piano/enquire" region={region} className="btn btn-primary btn-lg">
                Book Your Free Trial Lesson
              </RegionLink>
              <RegionLink href="/pricing" region={region} className="piano-hero__btn-outline">
                Join Now
              </RegionLink>
            </div>
          </div>
        </div>

        <div className="piano-hero__keys">
          <Image src="/images/co-curricular/piano-keys.webp" alt="" width={1200} height={100} />
        </div>
      </section>

      <section className="piano-education">
        <div className="container">
          <div className="piano-education__header">
            <p className="piano-education__label">
              <span className="piano-education__label-star">✦</span>
              What Your Child Will Master
            </p>
            <h2 className="piano-education__title">A Complete Piano Education</h2>
          </div>

          <div className="piano-education__grid">
            {educationCards.slice(0, 3).map((card) => (
              <div key={card.title} className="piano-education__card">
                <div className="piano-education__card-icon">
                  <EducationIcon type={card.iconType} />
                </div>
                <h3 className="piano-education__card-title">{card.title}</h3>
                <p className="piano-education__card-desc">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="piano-education__grid piano-education__grid--bottom">
            {educationCards.slice(3).map((card) => (
              <div key={card.title} className="piano-education__card">
                <div className="piano-education__card-icon">
                  <EducationIcon type={card.iconType} />
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
              Grade Progression Path
            </p>
            <h2 className="piano-grades__title">Your Journey from Beginner to Advanced</h2>
          </div>

          <div className="piano-grades__path">
            {grades.map((grade, i) => (
              <div key={grade.number} className="piano-grades__node-wrapper">
                <div className="piano-grades__node">
                  <div className="piano-grades__circle">{grade.number}</div>
                  <span className="piano-grades__label-text">{grade.label}</span>
                </div>
                {i < grades.length - 1 && <div className="piano-grades__connector" />}
              </div>
            ))}
          </div>

          <p className="piano-grades__note">
            Each student progresses at their own pace. Parents receive regular progress updates. Our tutors monitor readiness before recommending students for official Trinity College exams. Exams are optional: many students enjoy learning without the pressure of formal assessment.
          </p>
        </div>
      </section>

      <section className="piano-lesson">
        <div className="container">
          <div className="piano-lesson__header">
            <p className="piano-lesson__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="piano-lesson__label-icon" />
              Lesson Structure
            </p>
            <h2 className="piano-lesson__title">What a Typical Lesson Looks Like</h2>
          </div>

          <div className="piano-lesson__grid">
            <div className="piano-lesson__left">
              <div className="piano-lesson__timeline">
                {lessonTimeline.map((item, i) => (
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
                  {sessionDetails.map((detail) => (
                    <div key={detail.label} className="piano-lesson__detail">
                      <span className="piano-lesson__detail-label">{detail.label}</span>
                      <span className="piano-lesson__detail-value">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="piano-lesson__image">
              <Image src="/images/co-curricular/what_a_typical.webp" alt="Piano lesson in progress" width={600} height={400} />
            </div>
          </div>
        </div>
      </section>

      <section className="piano-audience">
        <div className="container">
          <div className="piano-audience__header">
            <p className="piano-audience__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="piano-audience__label-icon" />
              Who Is This For
            </p>
            <h2 className="piano-audience__title">Piano Lessons for Everyone</h2>
          </div>

          <div className="piano-audience__grid">
            <div className="piano-audience__image">
              <Image src="/images/co-curricular/piano-student_1.webp" alt="Student learning piano" width={600} height={400} />
            </div>
            <div className="piano-audience__list">
              {audiences.map((item, i) => (
                <div key={i} className="piano-audience__item">
                  <h3 className="piano-audience__item-title">
                    {item.title} <span className="piano-audience__item-highlight">{item.highlight}</span>
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
            <h2 className="piano-requirements__title">More Than Just Lessons</h2>
          </div>

          <div className="piano-requirements__grid">
            {requirements.map((req, i) => (
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

          <p className="piano-requirements__note">
            Don&apos;t have a piano yet? We can recommend affordable options to get started.
          </p>
        </div>
      </section>

      <section className="piano-testimonials">
        <div className="container">
          <div className="piano-testimonials__header">
            <h2 className="piano-testimonials__title">What Parents Are Saying</h2>
          </div>

          <div className="piano-testimonials__grid">
            {testimonials.map((item, i) => (
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

      <section className="piano-cta">
        <div className="container">
          <div className="piano-cta__content">
            <h2 className="piano-cta__title">Hear the Difference</h2>
            <p className="piano-cta__subtitle">
              Book a free trial lesson and see if your child is the right fit for our piano program.
            </p>
            <div className="piano-cta__actions">
              <RegionLink href="/co-curricular/piano/enquire" region={region} className="btn btn-primary btn-lg">
                Book Free Assessment
              </RegionLink>
              <RegionLink href="/contact" region={region} className="piano-cta__btn-outline">
                Contact Us
              </RegionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
