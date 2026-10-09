/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./san-jose.css";

export const metadata: Metadata = {
  title: "Online Tutoring in San Jose, CA | TutorExel",
  description:
    "Online tutoring in San Jose, CA. Live math, English and science for Grades 2 to 10 with state test prep. Small groups or 1-on-1. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/us/online-tutoring/san-jose" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tutorexel.com/us/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Online Tutoring",
        item: "https://www.tutorexel.com/us/online-tutoring",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "San Jose",
        item: "https://www.tutorexel.com/us/online-tutoring/san-jose",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online tutoring in San Jose",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "City", name: "San Jose" },
    url: "https://www.tutorexel.com/us/online-tutoring/san-jose",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have tutors based in San Jose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our classes are live and online, so San Jose students learn with qualified teachers from home, with no travel across Silicon Valley.",
        },
      },
      {
        "@type": "Question",
        name: "Do lessons follow California State Standards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lessons are mapped to the California State Standards for each Grade, so what your child learns supports what happens at school.",
        },
      },
      {
        "@type": "Question",
        name: "What times are classes in San Jose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Classes run after school on weekdays and on weekends, in San Jose time (Pacific Time). Your exact times are confirmed after the free assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with the CAASPP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build practice for state tests into regular lessons and run practice tests as test dates approach. Final scores depend on your child's work and school.",
        },
      },
      {
        "@type": "Question",
        name: "How do we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book a free assessment so we can see where your child is. We then suggest a plan and a time, and you can try a free lesson before you commit. San Jose families also ask us about gifted program and math contest preparation, which we can include in your plan.",
        },
      },
    ],
  },
];

export default function UsSanJoseCityPage() {
  return (
    <div className="xp xp-us-san-jose">
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
              <Link href="/us/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/us/online-tutoring">Online Tutoring</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">San Jose</span>
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
              San Jose, CA
            </span>
            <h1 className="hub-title">
              Online Tutoring in <span className="grad">San Jose</span>
            </h1>
            <p className="hub-sub">
              Live math, English and science lessons for San Jose students in Grades 2 to 10,
              matched to the California State Standards. Prep for the CAASPP, gifted entry, math
              contests, ISEE and SSAT is built in, all from home.
            </p>
            <div className="xd-cta">
              <Link className="btn btn-hi" href="/us/free-assessment">
                Book a Free Assessment
              </Link>
              <Link className="btn btn-ghost" href="/us/pricing">
                View Plans
              </Link>
            </div>
          </div>
          <aside aria-label="San Jose at a glance" className="glance">
            <p className="glance-t">Tutoring in San Jose</p>
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
                  <span data-tz="America/Los_Angeles">--:--</span> in San Jose
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
                  <b>Standards</b>California State Standards
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
                  <b>Test prep</b>CAASPP, gifted entry, math contests, ISEE and SSAT
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
              <h2 id="sH">Subjects for San Jose Students</h2>
              <p className="muted">
                Every lesson follows the California State Standards, pitched at your child's level.
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
                <h3>Math</h3>
              </div>
              <ul className="subj-list">
                <li>
                  <b>Grades 2 to 4</b>
                  <span>
                    Place value, addition and subtraction, and multiplication facts, matched to the
                    California Common Core standards
                  </span>
                </li>
                <li>
                  <b>Grades 5 to 7</b>
                  <span>
                    Fractions, decimals, ratios and pre-algebra, with enrichment problems for strong
                    math students
                  </span>
                </li>
                <li>
                  <b>Grades 8 to 10</b>
                  <span>
                    Algebra 1, Geometry and Algebra 2, aligned to California standards, with
                    contest-style practice on request
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
                  <b>Grades 2 to 4</b>
                  <span>
                    Reading fluency, spelling and sentence writing, matched to the California ELA
                    standards
                  </span>
                </li>
                <li>
                  <b>Grades 5 to 7</b>
                  <span>
                    Comprehension, paragraph structure and persuasive writing, with grammar practice
                  </span>
                </li>
                <li>
                  <b>Grades 8 to 10</b>
                  <span>
                    Text analysis, essay writing and vocabulary, building towards Grade 11 CAASPP
                    readiness
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
                  <b>Grades 2 to 4</b>
                  <span>
                    Curiosity, observation and simple investigations using the California NGSS
                  </span>
                </li>
                <li>
                  <b>Grades 5 to 7</b>
                  <span>
                    Forces, living things, Earth and space, with practice for the Grade 5 and Grade
                    8 CAST science test
                  </span>
                </li>
                <li>
                  <b>Grades 8 to 10</b>
                  <span>
                    Chemistry, physics and biology foundations, aligned to California NGSS
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
              <h2 id="eH">Tests San Jose Families Prepare For</h2>
              <p className="muted">
                Preparation sits inside regular lessons, with practice tests as each test date gets
                closer.
              </p>
            </div>
            <Link className="see-all" href="/us/exam-prep">
              View all test prep{" "}
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
            <Link className="exam" href="/us/exam-prep/caaspp">
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
              <b className="exam-name">CAASPP (Smarter Balanced)</b>
              <span className="exam-full">
                California Assessment of Student Performance and Progress
              </span>
              <span className="exam-who">
                Taken by students in Grades 3 to 8 in English language arts and math
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
                  Usually spring, taken online
                </span>
                <span className="exam-go">
                  View prep plan{" "}
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
            <Link className="exam" href="/us/exam-prep/cogat">
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
                    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0"></path>
                  </svg>
                </span>
              </span>
              <b className="exam-name">Gifted and Enrichment Tests</b>
              <span className="exam-full">
                Gifted programs and math contests across Santa Clara County
              </span>
              <span className="exam-who">
                Students aiming for gifted program entry or math contests such as the AMC 8
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
                  Dates vary, check your district
                </span>
                <span className="exam-go">
                  View prep plan{" "}
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
            <Link className="exam" href="/us/exam-prep">
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
              <b className="exam-name">ISEE and SSAT</b>
              <span className="exam-full">Independent school entrance exams</span>
              <span className="exam-who">Students applying to private and independent schools</span>
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
                  Offered through the year, deadlines vary by school
                </span>
                <span className="exam-go">
                  View prep plan{" "}
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
            <h2 id="tH">Class Times for the San Jose School Day</h2>
            <p className="muted">
              All classes run on San Jose local time (Pacific Time). The time there right now is{" "}
              <b data-tz="America/Los_Angeles">--:--</b>.
            </p>
            <Link className="btn btn-hi" href="/us/free-assessment">
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
              <h2 id="aH">Families Across San Jose</h2>
              <p className="muted">
                Online lessons reach every neighborhood. These are just some of the areas our
                students log in from.
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
              Willow Glen
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
              Evergreen
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
              Cambrian
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
              Almaden Valley
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
              Santa Clara
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
              Cupertino
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
              Sunnyvale
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
              Milpitas
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
              Campbell
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
              Los Gatos
            </span>
          </div>
        </div>
      </section>
      <section aria-labelledby="fH" className="sec">
        <div className="wrap faq-wrap">
          <div>
            <h2 id="fH">San Jose Parents Ask</h2>
            <p className="muted">
              Not sure yet? Message us on WhatsApp and a real person will reply.
            </p>
            <a className="btn btn-wa" href="https://wa.me/12067977387">
              Chat on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Do you have tutors based in San Jose?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Our classes are live and online, so San Jose students learn with qualified teachers
                from home, with no travel across Silicon Valley.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do lessons follow California State Standards?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. Lessons are mapped to the California State Standards for each Grade, so what
                your child learns supports what happens at school.
              </p>
            </details>
            <details className="faq">
              <summary>
                What times are classes in San Jose?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Classes run after school on weekdays and on weekends, in San Jose time (Pacific
                Time). Your exact times are confirmed after the free assessment.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do you help with the CAASPP?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. We build practice for state tests into regular lessons and run practice tests
                as test dates approach. Final scores depend on your child's work and school.
              </p>
            </details>
            <details className="faq">
              <summary>
                How do we get started?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Book a free assessment so we can see where your child is. We then suggest a plan and
                a time, and you can try a free lesson before you commit. San Jose families also ask
                us about gifted program and math contest preparation, which we can include in your
                plan.
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
              <h2 id="oH">Not in San Jose?</h2>
              <p>
                The same live classes, set to your local time, in cities across the United States.
              </p>
              <Link className="cs-all" href="/us/online-tutoring">
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
              <Link className="cpill" href="/us/online-tutoring/new-york">
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
                  <b>New York</b>
                  <span>
                    NY · <span data-tz="America/New_York">--:--</span>
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
              <Link className="cpill" href="/us/online-tutoring/los-angeles">
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
                  <b>Los Angeles</b>
                  <span>
                    CA · <span data-tz="America/Los_Angeles">--:--</span>
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
              <Link className="cpill" href="/us/online-tutoring/san-diego">
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
                  <b>San Diego</b>
                  <span>
                    CA · <span data-tz="America/Los_Angeles">--:--</span>
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
              <Link className="cpill" href="/us/online-tutoring/chicago">
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
                  <b>Chicago</b>
                  <span>
                    IL · <span data-tz="America/Chicago">--:--</span>
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
              <Link className="cpill" href="/us/online-tutoring/houston">
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
                  <b>Houston</b>
                  <span>
                    TX · <span data-tz="America/Chicago">--:--</span>
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
              <Link className="cpill" href="/us/online-tutoring/dallas">
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
                  <b>Dallas</b>
                  <span>
                    TX · <span data-tz="America/Chicago">--:--</span>
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
              <Link className="cpill" href="/us/online-tutoring/miami">
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
                  <b>Miami</b>
                  <span>
                    FL · <span data-tz="America/New_York">--:--</span>
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
              <h2>Ready to Start in San Jose?</h2>
              <p>Book a free trial lesson for your child today. No credit card needed.</p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/us/enroll">
                  Book a Free Trial
                </Link>
                <a className="btn btn-wa" href="https://wa.me/12067977387">
                  <svg aria-hidden="true" fill="#fff" height="18" viewBox="0 0 24 24" width="18">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z"></path>
                  </svg>
                  +1 (206) 797 7387
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExamPrepInteractions unit="Grade" />
    </div>
  );
}
