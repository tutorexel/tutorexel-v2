"use client";

import RegionLink from "@/components/shared/RegionLink";
import Image from "next/image";
import { type RegionCode } from "@/utils/regionalLinks";
import "@/app/careers/careers.css";

const qualificationsList = [
  "A relevant teaching degree or certification, such as a B.Ed, M.Ed or equivalent",
  "Proven experience teaching school-aged students",
  "A confident understanding of the curriculum you will teach",
  "Stable internet and a quiet, distraction-free place to teach",
  "A laptop or desktop with a working webcam and microphone",
  "Patience, energy and real enthusiasm for helping students learn",
];

const whyJoinCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" /><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" /><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" /><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" /><path d="M8.65 22c.21-.66.45-1.32.57-2" /><path d="M14 13.12c0 2.38 0 6.38-1 8.88" /><path d="M2 16h.01" /><path d="M21.8 16c.2-2 .131-5.354 0-6" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Fully Remote",
    description:
      "Teach from wherever suits you. Every lesson runs on Zoom, so there is no commute.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Flexible Schedule",
    description:
      "Pick the time slots that fit your life, including afternoons, evenings and weekends.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Rewarding Work",
    description:
      "See students gain confidence and achieve more because of your teaching.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Fair, Reliable Pay",
    description:
      "Tutors receive competitive hourly rates with dependable, on-schedule payments.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
    title: "Ready-Made Resources",
    description:
      "Spend less time preparing. Curriculum-aligned lesson plans and worksheets are supplied for you.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Supportive Team",
    description:
      "Work alongside fellow educators and get ongoing guidance from our academic team.",
  },
];

const howToApplySteps = [
  {
    number: "01",
    title: "Send Your Application",
    description:
      "Complete the online form with your details, qualifications, teaching experience and CV or resume.",
  },
  {
    number: "02",
    title: "Application Review",
    description:
      "Our team looks over your application promptly. Shortlisted candidates are invited to a brief video interview.",
  },
  {
    number: "03",
    title: "Demo Lesson",
    description:
      "Teach a 15-minute mock session that shows your subject knowledge, teaching style and online communication skills.",
  },
  {
    number: "04",
    title: "Onboarding and Training",
    description:
      "Work through curriculum onboarding, set your availability and get matched with your first students.",
  },
];

export interface CareerViewProps {
  region?: RegionCode;
}

export default function CareerView({ region = "au" }: CareerViewProps) {
  const isYearRegion = region === "au" || region === "nz";
  const yearsOrGrades = isYearRegion ? "Years" : "Grades";
  const yearOrGrade = isYearRegion ? "Year" : "Grade";

  const openings = [
    {
      title: "Online Mathematics Tutor",
      type: "Part-time or Casual",
      subjects: `${yearsOrGrades} 2 to 10 Mathematics`,
      description:
        "Teach structured, curriculum-aligned mathematics lessons to students around the world over Zoom. Solid knowledge of school standards needed.",
    },
    {
      title: "Online English Tutor",
      type: "Part-time or Casual",
      subjects: `${yearsOrGrades} 2 to 10 English`,
      description:
        "Build reading comprehension, writing, grammar and vocabulary skills using TutorExel's structured lesson plans.",
    },
    {
      title: "Online Science Tutor",
      type: "Part-time or Casual",
      subjects: `${yearsOrGrades} 2 to 10 Science`,
      description:
        "Teach structured, curriculum-aligned science lessons to students around the world over Zoom. Solid knowledge of school standards needed.",
    },
    {
      title: "Online Piano Tutor",
      type: "Part-time or Casual",
      subjects: "Trinity College London Syllabus",
      description:
        "Teach piano online in line with the Trinity College London graded syllabus. Performing and teaching experience is required.",
    },
    {
      title: "Online Guitar Tutor",
      type: "Part-time or Casual",
      subjects: "Trinity College London Syllabus",
      description:
        "Guide guitar students of every level online, following the Trinity College London framework.",
    },
  ];

  const whatYouDo = [
    "Run engaging online lessons on Zoom, either one-to-one or in small groups of up to 3 students",
    `Teach from TutorExel's structured curriculum and lesson plans for your assigned ${yearOrGrade} and subject`,
    "Set and mark weekly worksheets that reinforce what was covered in each lesson",
    "Give constructive feedback and record student progress on our online platform",
    "Keep parents informed about their child's progress and achievements",
    "Create a positive, supportive and professional space for learning",
  ];

  return (
    <>
      {/* Banner */}
      <section className="careers-hero">
        <div className="careers-hero__decoration careers-hero__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="careers-hero__curve careers-hero__curve--1"
          />
        </div>
        <div className="careers-hero__decoration careers-hero__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="careers-hero__curve careers-hero__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="careers-hero__curve careers-hero__curve--3"
          />
        </div>

        <div className="container">
          <div className="careers-hero__content">
            <h1 className="careers-hero__title">
              Join Our <span className="careers-hero__highlight">Tutor Team</span>
              <span className="careers-hero__star">
                <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </h1>
            <p className="careers-hero__subtitle">
              Be part of a dedicated team of educators bringing quality tutoring to families around the world. Flexible hours, rewarding work, fully remote.
            </p>
            <RegionLink href="/careers/apply" region={region} className="btn btn-primary btn-lg">
              Apply Today
            </RegionLink>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section careers-openings">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Now Hiring</p>
            <h2 className="section-header__title">
              Available <span className="careers-hero__highlight">Roles</span>
            </h2>
            <p className="section-header__subtitle" style={{ margin: "0 auto" }}>
              We regularly welcome skilled educators to the team. Take a look at where you could fit.
            </p>
          </div>

          <div className="careers-openings__grid">
            {openings.map((opening) => (
              <div key={opening.title} className="careers-opening-card">
                <div className="careers-opening-card__header">
                  <div>
                    <h3 className="careers-opening-card__title">{opening.title}</h3>
                    <p className="careers-opening-card__type">{opening.type}</p>
                  </div>
                  <svg className="careers-opening-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <p className="careers-opening-card__subjects">{opening.subjects}</p>
                <p className="careers-opening-card__desc">{opening.description}</p>
                <RegionLink href="/careers/apply" region={region} className="careers-opening-card__link">
                  Apply to This Role →
                </RegionLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Eligibility</p>
            <h2 className="section-header__title">
              Who We <span className="careers-hero__highlight">Look For</span>
            </h2>
            <p className="section-header__subtitle" style={{ margin: "0 auto" }}>
              Our tutors are qualified, enthusiastic and dedicated to helping students make real progress.
            </p>
          </div>

          <div className="careers-qualifications__card">
            <ul className="careers-qualifications__list">
              {qualificationsList.map((qual) => (
                <li key={qual} className="careers-qualifications__item">
                  <svg className="careers-qualifications__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Tutor with TutorExel */}
      <section className="section careers-why">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Why Join</p>
            <h2 className="section-header__title">
              Why Tutors Love <span className="careers-hero__highlight">TutorExel</span>
            </h2>
            <p className="section-header__subtitle" style={{ margin: "0 auto" }}>
              We take care of the platform, curriculum and student matching so you can concentrate on teaching.
            </p>
          </div>

          <div className="careers-why__grid">
            {whyJoinCards.map((card) => (
              <div key={card.title} className="careers-why-card">
                <div className="careers-why-card__icon">{card.icon}</div>
                <h3 className="careers-why-card__title">{card.title}</h3>
                <p className="careers-why-card__desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="careers-responsibilities">
        <div className="container">
          <h2 className="careers-responsibilities__title">A Tutor&apos;s Role</h2>
          <p className="careers-responsibilities__subtitle">
            Day to day, your main responsibilities will be:
          </p>
          <ul className="careers-responsibilities__list">
            {whatYouDo.map((item) => (
              <li key={item} className="careers-responsibilities__item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Hiring Process</p>
            <h2 className="section-header__title">
              Join in <span className="careers-hero__highlight">4 Steps</span>
            </h2>
          </div>

          <div className="careers-apply__steps">
            {howToApplySteps.map((step) => (
              <div key={step.number} className="careers-apply-step">
                <div className="careers-apply-step__number">{step.number}</div>
                <div>
                  <h3 className="careers-apply-step__title">{step.title}</h3>
                  <p className="careers-apply-step__desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="careers-apply__cta">
            <RegionLink href="/careers/apply" region={region} className="btn btn-primary btn-lg">
              Begin Your Application
            </RegionLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="careers-cta">
        <div className="container">
          <h2 className="careers-cta__title">Ready to Inspire Students?</h2>
          <p className="careers-cta__subtitle">
            Become part of a team of committed educators helping students everywhere reach their goals.
          </p>
          <div className="careers-cta__actions">
            <RegionLink href="/careers/apply" region={region} className="btn btn-primary btn-lg">Apply Today</RegionLink>
            <RegionLink href="/contact" region={region} className="btn btn-outline-white btn-lg">Get in Touch</RegionLink>
          </div>
        </div>
      </section>
    </>
  );
}
