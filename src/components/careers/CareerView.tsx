"use client";

import RegionLink from "@/components/shared/RegionLink";
import Image from "next/image";
import { type RegionCode } from "@/utils/regionalLinks";
import "@/app/careers/careers.css";

const openings = [
  {
    title: "Online Maths Tutor",
    type: "Part-time / Casual",
    subjects: "Years 2-7 Mathematics",
    description:
      "Deliver structured, curriculum-aligned Maths sessions to Students Worldwide via Zoom. Strong knowledge of school standards required.",
  },
  {
    title: "Online English Tutor",
    type: "Part-time / Casual",
    subjects: "Years 2-7 English",
    description:
      "Teach English comprehension, writing, grammar, and vocabulary following TutorExel's structured lesson plans.",
  },
  {
    title: "Online Piano Tutor",
    type: "Part-time / Casual",
    subjects: "Trinity College London Syllabus",
    description:
      "Deliver online piano lessons following the Trinity College London graded syllabus. Performance and teaching experience required.",
  },
  {
    title: "Online Guitar Tutor",
    type: "Part-time / Casual",
    subjects: "Trinity College London Syllabus",
    description:
      "Teach guitar online to students of all levels following the Trinity College London framework.",
  },
];

const qualifications = [
  "A relevant teaching qualification (B.Ed, M.Ed, or equivalent)",
  "Experience teaching primary or secondary students",
  "Strong knowledge of the school curriculum",
  "Reliable internet connection and a quiet teaching space",
  "A laptop or computer with a working camera and microphone",
  "Patience, enthusiasm, and a genuine passion for education",
];

const whyJoinCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" /><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" /><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" /><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" /><path d="M8.65 22c.21-.66.45-1.32.57-2" /><path d="M14 13.12c0 2.38 0 6.38-1 8.88" /><path d="M2 16h.01" /><path d="M21.8 16c.2-2 .131-5.354 0-6" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "100% Remote",
    description:
      "Work from anywhere. All sessions are conducted via Zoom. No commuting required.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Flexible Hours",
    description:
      "Choose the time slots that work for you. Afternoons, evenings, and weekends are available.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Meaningful Work",
    description:
      "Make a real difference in students' lives. Watch them grow in confidence and achievement.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Competitive Pay",
    description:
      "We value our tutors and offer competitive hourly rates with reliable, on-time payments.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
    title: "Lesson Materials Provided",
    description:
      "Save time on prep. We provide comprehensive, curriculum-aligned lesson plans and worksheets.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Supportive Community",
    description:
      "Join a collaborative network of passionate educators with ongoing support from our academic team.",
  },
];

const whatYouDo = [
  "Conduct engaging 1-on-1 or small group (max 3 students) online tutoring sessions via Zoom",
  "Follow TutorExel's structured curriculum and lesson plans for your assigned year level and subject",
  "Assign and review weekly worksheets to reinforce concepts taught in class",
  "Provide constructive feedback and track student progress through our online platform",
  "Communicate with parents regarding their child's learning journey and milestones",
  "Maintain a positive, encouraging, and professional learning environment",
];

const howToApplySteps = [
  {
    number: "01",
    title: "Submit Your Application",
    description:
      "Fill out our online application form with your details, qualifications, teaching experience, and CV.",
  },
  {
    number: "02",
    title: "Initial Screening",
    description:
      "Our team reviews your application within 24 hours. Selected candidates are invited for a short video interview.",
  },
  {
    number: "03",
    title: "Demo Lesson",
    description:
      "Deliver a 15-minute mock teaching session to demonstrate your subject knowledge, teaching style, and online communication.",
  },
  {
    number: "04",
    title: "Onboarding & Training",
    description:
      "Complete our curriculum onboarding, set up your schedule, and get matched with your first students.",
  },
];

export interface CareerViewProps {
  region?: RegionCode;
}

export default function CareerView({ region }: CareerViewProps) {
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
              Teach With <span className="careers-hero__highlight">TutorExel</span>
              <span className="careers-hero__star">
                <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </h1>
            <p className="careers-hero__subtitle">
              Join a team of passionate educators making quality tutoring accessible to globally families. Flexible hours, meaningful work, 100% remote.
            </p>
            <RegionLink href="/careers/apply" region={region} className="btn btn-primary btn-lg">
              Apply Now
            </RegionLink>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section careers-openings">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Open Positions</p>
            <h2 className="section-header__title">
              Current <span className="careers-hero__highlight">Openings</span>
            </h2>
            <p className="section-header__subtitle" style={{ margin: "0 auto" }}>
              We are always looking for talented educators to join our team. See what is available.
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
                  Apply for this role
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
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
            <p className="section-header__label">Requirements</p>
            <h2 className="section-header__title">
              What We <span className="careers-hero__highlight">Look For</span>
            </h2>
            <p className="section-header__subtitle" style={{ margin: "0 auto" }}>
              We hire educators who are qualified, passionate, and committed to making a difference.
            </p>
          </div>

          <div className="careers-qualifications__card">
            <ul className="careers-qualifications__list">
              {qualifications.map((qual) => (
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
            <p className="section-header__label">Benefits</p>
            <h2 className="section-header__title">
              Why Teach With <span className="careers-hero__highlight">TutorExel</span>
            </h2>
            <p className="section-header__subtitle" style={{ margin: "0 auto" }}>
              We provide the platform, the students, and the curriculum. You focus on what you do best: teaching.
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
          <h2 className="careers-responsibilities__title">What You&apos;ll Do</h2>
          <p className="careers-responsibilities__subtitle">
            As a TutorExel tutor, your responsibilities include:
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
            <p className="section-header__label">Application Process</p>
            <h2 className="section-header__title">
              How to <span className="careers-hero__highlight">Apply</span>
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
              Start Your Application
            </RegionLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="careers-cta">
        <div className="container">
          <h2 className="careers-cta__title">Ready to Make a Difference?</h2>
          <p className="careers-cta__subtitle">
            Join our team of dedicated educators and help Students Worldwide achieve their potential.
          </p>
          <div className="careers-cta__actions">
            <RegionLink href="/careers/apply" region={region} className="btn btn-primary btn-lg">Apply Now</RegionLink>
            <RegionLink href="/contact" region={region} className="btn btn-outline-white btn-lg">Contact Us</RegionLink>
          </div>
        </div>
      </section>
    </>
  );
}
