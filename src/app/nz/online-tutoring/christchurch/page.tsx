/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./christchurch.css";

export const metadata: Metadata = {
  title: "Online Tutoring in Christchurch, NZ | TutorExel",
  description:
    "Online tutoring in Christchurch. Live maths, English and science for Years 2 to 10 with PAT and ICAS prep. Small groups or 1-on-1. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/nz/online-tutoring/christchurch" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tutorexel.com/nz/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Online Tutoring",
        item: "https://www.tutorexel.com/nz/online-tutoring",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Christchurch",
        item: "https://www.tutorexel.com/nz/online-tutoring/christchurch",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online tutoring in Christchurch",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "City", name: "Christchurch" },
    url: "https://www.tutorexel.com/nz/online-tutoring/christchurch",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have tutors based in Christchurch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our classes are live and online, so Christchurch students learn with qualified teachers from home, with no travel across the city.",
        },
      },
      {
        "@type": "Question",
        name: "Do lessons follow the New Zealand Curriculum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lessons are mapped to the New Zealand Curriculum for each Year level, so what your child learns supports what happens at school.",
        },
      },
      {
        "@type": "Question",
        name: "What times are classes in Christchurch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Classes run after school on weekdays and on weekends, in New Zealand time, including daylight saving. Your exact times are confirmed after the free assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with PAT and e-asTTle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build practice for school progress tests into regular lessons and run practice tests as test dates approach. These tests are set by schools, so we practise the skills rather than specific papers.",
        },
      },
      {
        "@type": "Question",
        name: "How do we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book a free assessment so we can see where your child is. We then suggest a plan and a time, and you can try a free lesson before you commit. Christchurch families also ask us about scholarship preparation, which we can include in your plan.",
        },
      },
    ],
  },
];

export default function NzChristchurchCityPage() {
  return (
    <div className="xp xp-nz-christchurch">
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <section className="xd-hero">
        <svg
          aria-hidden="true"
          className="bb-line bb-line--right"
          fill="none"
          viewBox="0 0 200 300"
        >
          <path
            d="M10 120c40-40 120-90 150-60s-40 80-30 130 60 60 70 110"
            stroke="#FFD9B8"
            strokeLinecap="round"
            strokeWidth="3"
          ></path>
        </svg>
        <div className="wrap xd-grid">
          <div>
            <nav aria-label="Breadcrumb" className="crumbs">
              <Link href="/nz/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/nz/online-tutoring">Online Tutoring</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Christchurch</span>
            </nav>
            <span className="eyebrow">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>{" "}
              Christchurch, Canterbury
            </span>
            <h1 className="hub-title">
              Online Tutoring in <span className="grad">Christchurch</span>
            </h1>
            <p className="hub-sub">
              Live maths, English and science lessons for Christchurch students in Years 2 to 10,
              matched to the New Zealand Curriculum. Prep for PAT, ICAS and scholarship tests is
              built in, all from home.
            </p>
            <div className="xd-cta">
              <Link className="btn btn-hi" href="/nz/free-assessment">
                Book a Free Assessment
              </Link>
              <Link className="btn btn-ghost" href="/nz/pricing">
                View Plans
              </Link>
            </div>
          </div>
          <aside aria-label="Christchurch at a glance" className="glance">
            <p className="glance-t">Tutoring in Christchurch</p>
            <ul className="xfacts">
              <li>
                <span className="xf-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                </span>
                <span>
                  <b>Local time</b>
                  <span data-tz="Pacific/Auckland">--:--</span> in Christchurch
                </span>
              </li>
              <li>
                <span className="xf-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5"></path>
                  </svg>
                </span>
                <span>
                  <b>Curriculum</b>New Zealand Curriculum
                </span>
              </li>
              <li>
                <span className="xf-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 4h6M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 12l2.5 2.5L16 9"></path>
                  </svg>
                </span>
                <span>
                  <b>Test prep</b>PAT, ICAS and scholarship tests
                </span>
              </li>
              <li>
                <span className="xf-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M13.5 20c.3-2.8 2.1-4.5 4.5-4.5 2.2 0 4 1.8 4 4.5"></path>
                  </svg>
                </span>
                <span>
                  <b>Class format</b>Live online, in small groups or one-to-one
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
      <section aria-labelledby="sH" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="sH">Subjects for Christchurch Students</h2>
              <p className="muted">
                Every lesson follows the New Zealand Curriculum, pitched at your child's level.
              </p>
            </div>
          </div>
          <div className="subjs">
            <article className="subj">
              <div className="dom-head">
                <span className="tile-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
                  </svg>
                </span>
                <h3>Maths</h3>
              </div>
              <ul className="subj-list">
                <li>
                  <b>Years 2 to 4</b>
                  <span>
                    Number and algebra foundations, place value and multiplication facts, following
                    the New Zealand Curriculum
                  </span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>
                    Fractions, decimals, ratios and early algebra, with geometry, measurement and
                    statistics
                  </span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>
                    Algebra, geometry and statistics at Curriculum Levels 5 and 6, building towards
                    NCEA Level 1 numeracy
                  </span>
                </li>
              </ul>
            </article>
            <article className="subj">
              <div className="dom-head">
                <span className="tile-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
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
                  <span>
                    Reading fluency, spelling and sentence writing, following the New Zealand
                    Curriculum English strands
                  </span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>
                    Comprehension, paragraph structure and persuasive writing, with grammar practice
                  </span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>
                    Text analysis, essay writing and vocabulary, building towards NCEA Level 1
                    literacy
                  </span>
                </li>
              </ul>
            </article>
            <article className="subj">
              <div className="dom-head">
                <span className="tile-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
                  </svg>
                </span>
                <h3>Science</h3>
              </div>
              <ul className="subj-list">
                <li>
                  <b>Years 2 to 4</b>
                  <span>
                    Curiosity, observation and simple investigations across the Living World and
                    Physical World strands
                  </span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>
                    Forces, living things, Earth and space, with local examples such as earthquakes,
                    rivers and the Canterbury Plains
                  </span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>
                    Chemistry, physics and biology foundations, using the Nature of Science strand
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="eH" className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="eH">Tests Christchurch Families Prepare For</h2>
              <p className="muted">
                Preparation sits inside regular lessons, with practice tests as each test date gets
                closer.
              </p>
            </div>
            <Link className="see-all" href="/nz/exam-prep">
              View All Test Prep{" "}
              <svg
                aria-hidden="true"
                fill="none"
                height="16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </Link>
          </div>
          <div className="exams">
            <Link className="exam" href="/nz/exam-prep/pat">
              <span className="exam-top">
                <span className="topic-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5"></path>
                  </svg>
                </span>
              </span>
              <b className="exam-name">PAT and e-asTTle</b>
              <span className="exam-full">Progressive Achievement Tests and e-asTTle</span>
              <span className="exam-who">
                Used by schools to track progress against curriculum levels in Years 3 to 10
              </span>
              <span className="exam-foot">
                <span>
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Set by your school, often in Terms 1 and 4
                </span>
                <span className="exam-go">
                  Prep plan{" "}
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </span>
            </Link>
            <Link className="exam" href="/nz/exam-prep/icas">
              <span className="exam-top">
                <span className="topic-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
                  </svg>
                </span>
              </span>
              <b className="exam-name">ICAS</b>
              <span className="exam-full">
                International Competitions and Assessments for Schools
              </span>
              <span className="exam-who">
                Optional subject tests for Years 2 to 12 that stretch students beyond classroom work
              </span>
              <span className="exam-foot">
                <span>
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Usually Terms 2 and 3, entered through schools
                </span>
                <span className="exam-go">
                  Prep plan{" "}
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </span>
            </Link>
            <Link className="exam" href="/nz/exam-prep">
              <span className="exam-top">
                <span className="topic-ic">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 4h6M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 12l2.5 2.5L16 9"></path>
                  </svg>
                </span>
              </span>
              <b className="exam-name">Scholarship Tests</b>
              <span className="exam-full">Independent school scholarships in Canterbury</span>
              <span className="exam-who">
                Students sitting scholarship tests for Christchurch independent schools
              </span>
              <span className="exam-foot">
                <span>
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                  Dates vary, check each school
                </span>
                <span className="exam-go">
                  Prep plan{" "}
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="tH" className="sec">
        <div className="wrap times">
          <div>
            <h2 id="tH">Class Times for the Christchurch School Day</h2>
            <p className="muted">
              All classes run on Christchurch local time. The time there right now is{" "}
              <b data-tz="Pacific/Auckland">--:--</b>.
            </p>
            <Link className="btn btn-hi" href="/nz/free-assessment">
              Find a Time That Suits
            </Link>
          </div>
          <div className="tcard">
            <div className="trow">
              <span className="tlabel">
                <svg
                  aria-hidden="true"
                  className=""
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
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
                  aria-hidden="true"
                  className=""
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
                </svg>{" "}
                Weekends
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
      <section aria-labelledby="aH" className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="aH">Families Across Christchurch</h2>
              <p className="muted">
                Online lessons reach every suburb. These are just some of the areas our students log
                in from.
              </p>
            </div>
          </div>
          <div className="areas">
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Riccarton
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Fendalton
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Papanui
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Merivale
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Halswell
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Burnside
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Cashmere
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Sumner
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Rolleston
            </span>
            <span className="area-chip">
              <svg
                aria-hidden="true"
                className=""
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                <circle cx="12" cy="9.5" r="2.5"></circle>
              </svg>
              Lincoln
            </span>
          </div>
        </div>
      </section>
      <section aria-labelledby="fH" className="sec">
        <div className="wrap faq-wrap">
          <div>
            <h2 id="fH">Christchurch Parents Ask</h2>
            <p className="muted">
              Not sure yet? Message us on WhatsApp and a real person will reply.
            </p>
            <a className="btn btn-wa" href="https://wa.me/61470330548">
              Chat on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Do you have tutors based in Christchurch?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Our classes are live and online, so Christchurch students learn with qualified
                teachers from home, with no travel across the city.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do lessons follow the New Zealand Curriculum?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. Lessons are mapped to the New Zealand Curriculum for each Year level, so what
                your child learns supports what happens at school.
              </p>
            </details>
            <details className="faq">
              <summary>
                What times are classes in Christchurch?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Classes run after school on weekdays and on weekends, in New Zealand time, including
                daylight saving. Your exact times are confirmed after the free assessment.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do you help with PAT and e-asTTle?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. We build practice for school progress tests into regular lessons and run
                practice tests as test dates approach. These tests are set by schools, so we
                practise the skills rather than specific papers.
              </p>
            </details>
            <details className="faq">
              <summary>
                How do we get started?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Book a free assessment so we can see where your child is. We then suggest a plan and
                a time, and you can try a free lesson before you commit. Christchurch families also
                ask us about scholarship preparation, which we can include in your plan.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section aria-labelledby="oH" className="sec">
        <div className="wrap">
          <div className="cswitch">
            <div className="cs-l">
              <span className="cs-ic">
                <svg
                  aria-hidden="true"
                  className=""
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>
                </svg>
              </span>
              <h2 id="oH">Not in Christchurch?</h2>
              <p>The same live classes, set to your local time, in cities across New Zealand.</p>
              <Link className="cs-all" href="/nz/online-tutoring">
                See all cities{" "}
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </Link>
            </div>
            <div className="cs-r">
              <Link className="cpill" href="/nz/online-tutoring/auckland">
                <span className="cp-pin">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Auckland</b>
                  <span>
                    Auckland · <span data-tz="Pacific/Auckland">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <Link className="cpill" href="/nz/online-tutoring/wellington">
                <span className="cp-pin">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Wellington</b>
                  <span>
                    Wellington · <span data-tz="Pacific/Auckland">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <Link className="cpill" href="/nz/online-tutoring/hamilton">
                <span className="cp-pin">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Hamilton</b>
                  <span>
                    Waikato · <span data-tz="Pacific/Auckland">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <Link className="cpill" href="/nz/online-tutoring/tauranga">
                <span className="cp-pin">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Tauranga</b>
                  <span>
                    Bay of Plenty · <span data-tz="Pacific/Auckland">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                    width="16"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </span>
              </Link>
              <Link className="cpill" href="/nz/online-tutoring/dunedin">
                <span className="cp-pin">
                  <svg
                    aria-hidden="true"
                    className=""
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"></path>
                    <circle cx="12" cy="9.5" r="2.5"></circle>
                  </svg>
                </span>
                <span className="cp-txt">
                  <b>Dunedin</b>
                  <span>
                    Otago · <span data-tz="Pacific/Auckland">--:--</span>
                  </span>
                </span>
                <span className="cp-go">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                    viewBox="0 0 24 24"
                    width="16"
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
              <div aria-hidden="true" className="final-art">
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
                alt="Happy student learning online"
                src="/images/cta/lady_image.webp"
                loading="lazy"
              />
            </div>
            <div className="final-txt">
              <h2>Ready to Start in Christchurch?</h2>
              <p>Book a free trial lesson for your child today. No credit card needed.</p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/nz/enroll">
                  Book a Free Trial
                </Link>
                <a className="btn btn-wa" href="https://wa.me/61470330548">
                  <svg aria-hidden="true" fill="#fff" height="18" viewBox="0 0 24 24" width="18">
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
