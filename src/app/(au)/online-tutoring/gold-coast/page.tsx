/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./gold-coast.css";

export const metadata: Metadata = {
  title: "Online Tutoring in Gold Coast, QLD | TutorExel",
  description:
    "Online tutoring in Gold Coast, QLD. Live maths, English and science for Years 2 to 10 with NAPLAN and ICAS prep. Small groups or 1-on-1. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/online-tutoring/gold-coast" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tutorexel.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Online Tutoring",
        item: "https://www.tutorexel.com/online-tutoring",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gold Coast",
        item: "https://www.tutorexel.com/online-tutoring/gold-coast",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online tutoring in Gold Coast",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "City", name: "Gold Coast" },
    url: "https://www.tutorexel.com/online-tutoring/gold-coast",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have tutors based in Gold Coast?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our classes are live and online, so Gold Coast students learn with qualified teachers from home, with no travel up and down the coast.",
        },
      },
      {
        "@type": "Question",
        name: "Do lessons follow Australian Curriculum (Queensland)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lessons are mapped to the Australian Curriculum as taught in Queensland for each Year level, so what your child learns supports what happens at school.",
        },
      },
      {
        "@type": "Question",
        name: "What times are classes in Gold Coast?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Classes run after school on weekdays and on weekends, in Gold Coast time (AEST). Queensland does not use daylight saving. Your exact times are confirmed after the free assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with NAPLAN?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. NAPLAN is sat in Years 3, 5, 7 and 9, and we build practice into regular lessons and run mock tests as the test approaches.",
        },
      },
      {
        "@type": "Question",
        name: "How do we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book a free assessment so we can see where your child is. We then suggest a plan and a time, and you can try a free lesson before you commit. Gold Coast families also ask us about scholarship preparation, which we can include in your plan.",
        },
      },
    ],
  },
];

export default function AuGoldCoastCityPage() {
  return (
    <div className="xp xp-au-gold-coast">
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <section className="xd-hero">
        <svg
          className="bb-line bb-line--right"
          viewBox="0 0 200 300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 120c40-40 120-90 150-60s-40 80-30 130 60 60 70 110"
            stroke="#FFD9B8"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
        </svg>
        <div className="wrap xd-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/online-tutoring">Online Tutoring</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Brisbane</span>
            </nav>
            <span className="eyebrow">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>{" "}
              Gold Coast, QLD
            </span>
            <h1 className="hub-title">
              Online Tutoring in <span className="grad">Brisbane</span>
            </h1>
            <p className="hub-sub">
              Live maths, English and science tutoring for Brisbane students in Years 2 to 10.
              Aligned to the Australian Curriculum (QLD), with NAPLAN, ICAS and Scholarship Tests
              prep built in, all from home.
            </p>
            <div className="xd-cta">
              <Link className="btn btn-hi" href="/free-assessment">
                Book a free assessment
              </Link>
              <Link className="btn btn-ghost" href="/pricing">
                See plans
              </Link>
            </div>
          </div>
          <aside className="glance" aria-label="Brisbane at a glance">
            <p className="glance-t">Tutoring in Gold Coast</p>
            <ul className="xfacts">
              <li>
                <span className="xf-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                </span>
                <span>
                  <b>Local time</b>
                  <span data-tz="Australia/Brisbane">--:--</span> in Gold Coast
                </span>
              </li>
              <li>
                <span className="xf-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5"></path>
                  </svg>
                </span>
                <span>
                  <b>Curriculum</b>Australian Curriculum (QLD)
                </span>
              </li>
              <li>
                <span className="xf-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 4h6M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 12l2.5 2.5L16 9"></path>
                  </svg>
                </span>
                <span>
                  <b>Test prep</b>NAPLAN, ICAS and Scholarship Tests
                </span>
              </li>
              <li>
                <span className="xf-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M13.5 20c.3-2.8 2.1-4.5 4.5-4.5 2.2 0 4 1.8 4 4.5"></path>
                  </svg>
                </span>
                <span>
                  <b>Class format</b>Small groups or one-on-one, live online
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="sec" aria-labelledby="sH">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="sH">Subjects for Brisbane students</h2>
              <p className="muted">
                Every lesson follows the Australian Curriculum (QLD), pitched at your child’s level.
              </p>
            </div>
          </div>
          <div className="subjs">
            <article className="subj">
              <div className="dom-head">
                <span className="tile-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
                  </svg>
                </span>
                <h3>Maths</h3>
              </div>
              <ul className="subj-list">
                <li>
                  <b>Years 2 to 4</b>
                  <span>Number facts, place value and early problem solving</span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>Fractions, decimals, ratios and multi-step problems</span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>Algebra, geometry, data and test-ready reasoning</span>
                </li>
              </ul>
            </article>
            <article className="subj">
              <div className="dom-head">
                <span className="tile-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>
                    <path d="M14 6l4 4"></path>
                  </svg>
                </span>
                <h3>English</h3>
              </div>
              <ul className="subj-list">
                <li>
                  <b>Years 2 to 4</b>
                  <span>Reading fluency, spelling and sentence writing</span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>Comprehension, paragraphing and persuasive writing</span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>Text analysis, essays and sophisticated vocabulary</span>
                </li>
              </ul>
            </article>
            <article className="subj">
              <div className="dom-head">
                <span className="tile-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
                  </svg>
                </span>
                <h3>Science</h3>
              </div>
              <ul className="subj-list">
                <li>
                  <b>Years 2 to 4</b>
                  <span>Curiosity, observation and simple experiments</span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>Forces, living things, Earth and space</span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>Chemistry, physics and biology foundations</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section className="sec sec--tint" aria-labelledby="eH">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="eH">Tests Brisbane families prepare for</h2>
              <p className="muted">
                Prep is built into regular lessons, with mock tests as each test gets closer.
              </p>
            </div>
            <Link className="see-all" href="/exam-prep">
              All exam prep{" "}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </Link>
          </div>
          <div className="exams">
            <Link className="exam" href="/naplan-preparation">
              <span className="exam-top">
                <span className="topic-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 4h6M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 12l2.5 2.5L16 9"></path>
                  </svg>
                </span>
              </span>
              <b className="exam-name">NAPLAN</b>
              <span className="exam-full">National Assessment Program, Literacy and Numeracy</span>
              <span className="exam-who">Every Australian student in Years 3, 5, 7 and 9</span>
              <span className="exam-foot">
                <span>
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Usually March, online
                </span>
                <span className="exam-go">
                  Prep plan{" "}
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </span>
            </Link>
            <Link className="exam" href="/exam-prep/icas">
              <span className="exam-top">
                <span className="topic-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
                  </svg>
                </span>
              </span>
              <b className="exam-name">ICAS</b>
              <span className="exam-full">
                International Competitions and Assessments for Schools
              </span>
              <span className="exam-who">Students who want to stretch beyond the classroom</span>
              <span className="exam-foot">
                <span>
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Mid-year, through your school
                </span>
                <span className="exam-go">
                  Prep plan{" "}
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </span>
            </Link>
            <Link className="exam" href="/exam-prep/scholarship">
              <span className="exam-top">
                <span className="topic-ic">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>
                    <path d="M14 6l4 4"></path>
                  </svg>
                </span>
              </span>
              <b className="exam-name">Scholarship Tests</b>
              <span className="exam-full">ACER and school scholarship exams</span>
              <span className="exam-who">Students sitting independent school scholarships</span>
              <span className="exam-foot">
                <span>
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Usually early in the year
                </span>
                <span className="exam-go">
                  Prep plan{" "}
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="tH">
        <div className="wrap times">
          <div>
            <h2 id="tH">Class times that fit the Brisbane school day</h2>
            <p className="muted">
              Every class is scheduled in Gold Coast local time. It is{" "}
              <b data-tz="Australia/Brisbane">--:--</b> there right now.
            </p>
            <Link className="btn btn-hi" href="/free-assessment">
              Find a time that suits
            </Link>
          </div>
          <div className="tcard">
            <div className="trow">
              <span className="tlabel">
                <svg
                  className=""
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>{" "}
                Weekdays after school
              </span>
              <div className="slots">
                <span className="slot">4:00 pm</span>
                <span className="slot">5:00 pm</span>
                <span className="slot">6:00 pm</span>
                <span className="slot">7:00 pm</span>
              </div>
            </div>
            <div className="trow">
              <span className="tlabel">
                <svg
                  className=""
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
                </svg>{" "}
                Weekend mornings
              </span>
              <div className="slots">
                <span className="slot">9:00 am</span>
                <span className="slot">10:30 am</span>
                <span className="slot">12:00 pm</span>
                <span className="slot">2:00 pm</span>
              </div>
            </div>
            <p className="tnote">
              Sample times. Your exact schedule is set after the free assessment.
            </p>
          </div>
        </div>
      </section>
      <section className="sec sec--tint" aria-labelledby="aH">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="aH">Families across Brisbane</h2>
              <p className="muted">
                Online means every suburb is covered. These are just some of the areas we teach.
              </p>
            </div>
          </div>
          <div className="areas">
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Sunnybank
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Indooroopilly
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Chermside
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Carindale
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Springfield
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              North Lakes
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Toowong
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Logan
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Redcliffe
            </span>
            <span className="area-chip">
              <svg
                className=""
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Mount Gravatt
            </span>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="fH">
        <div className="wrap faq-wrap">
          <div>
            <h2 id="fH">Brisbane parents ask</h2>
            <p className="muted">
              Still unsure? Message us on WhatsApp and a real person will reply.
            </p>
            <a className="btn btn-wa" href="https://wa.me/61470330548">
              Chat on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Do you have tutors based in Gold Coast?
                <span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Our classes are live and online, so Brisbane students learn with qualified teachers
                from home, with no travel across town.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do lessons follow Australian Curriculum (Queensland)?
                <span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Yes. Lessons for Brisbane students are aligned to the Australian Curriculum (QLD),
                so tutoring supports what is taught at school.
              </p>
            </details>
            <details className="faq">
              <summary>
                What times are classes in Gold Coast?
                <span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Classes run after school on weekdays and on weekend mornings, all scheduled in
                Brisbane local time.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do you help with NAPLAN?<span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Yes. We prepare Brisbane students for NAPLAN, ICAS and Scholarship Tests, with
                test-style practice built into regular lessons.
              </p>
            </details>
            <details className="faq">
              <summary>
                How do we get started?<span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Book the free assessment. We find where your child stands, build a learning plan and
                match you with a class.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="oH">
        <div className="wrap">
          <div className="cswitch">
            <div className="cs-l">
              <span className="cs-ic">
                <svg
                  className=""
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>
                </svg>
              </span>
              <h2 id="oH">Not in Gold Coast?</h2>
              <p>Same live classes, set to your local time, in every city across Australia.</p>
              <Link className="cs-all" href="/online-tutoring">
                See all cities{" "}
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </Link>
            </div>
            <div className="cs-r">
              <Link className="cpill" href="/online-tutoring/sydney">
                <span className="cp-pin">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Sydney</b>
                  <span>
                    NSW · <span data-tz="Australia/Sydney">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <Link className="cpill" href="/online-tutoring/melbourne">
                <span className="cp-pin">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Melbourne</b>
                  <span>
                    VIC · <span data-tz="Australia/Melbourne">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <Link className="cpill" href="/online-tutoring/perth">
                <span className="cp-pin">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Perth</b>
                  <span>
                    WA · <span data-tz="Australia/Perth">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <Link className="cpill" href="/online-tutoring/adelaide">
                <span className="cp-pin">
                  <svg
                    className=""
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Adelaide</b>
                  <span>
                    SA · <span data-tz="Australia/Adelaide">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="final">
        <div className="wrap">
          <div className="final-card">
            <div className="final-img">
              <div className="final-art" aria-hidden="true">
                <svg className="fa-spark" viewBox="0 0 24 24">
                  <path
                    d="M12 0l2.2 8.3L22 5.6l-5.3 6.4L24 16l-8.6-.6L12 24l-3.4-8.6L0 16l7.3-4L2 5.6l7.8 2.7Z"
                    fill="#F7A23B"
                  ></path>
                </svg>
                <div className="fa-stat fa-stat--1">
                  <b>100%</b>
                  <span>Curriculum aligned</span>
                </div>
                <div className="fa-stat fa-stat--2">
                  <b>15+ years</b>
                  <span>Qualified teachers</span>
                </div>
                <div className="fa-stat fa-stat--3">
                  <b>1:1 or small group</b>
                  <span>Live online classes</span>
                </div>
              </div>
              <img
                src="/images/cta/lady_image.webp"
                alt="Happy student learning online"
                loading="lazy"
              />
            </div>
            <div className="final-txt">
              <h2>Ready to See Your Child Excel?</h2>
              <p>
                Join hundreds of Australian families who trust TutorExel for their children's
                education. Book your FREE trial class today, no credit card required.
              </p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/enroll">
                  Book Online Now
                </Link>
                <a className="btn btn-wa" href="https://wa.me/61470330548">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z"></path>
                  </svg>
                  +61 470-330-548
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExamPrepInteractions />
    </div>
  );
}
