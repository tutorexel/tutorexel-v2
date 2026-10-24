/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./canberra.css";

export const metadata: Metadata = {
  title: "Online Tutoring in Canberra, ACT | TutorExel",
  description:
    "Online tutoring in Canberra, ACT. Live maths, English and science for Years 2 to 10 with NAPLAN and ICAS prep. Small groups or 1-on-1. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/online-tutoring/canberra" },
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
        name: "Canberra",
        item: "https://www.tutorexel.com/online-tutoring/canberra",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online tutoring in Canberra",
    provider: {
      "@id": "https://www.tutorexel.com/#organization",
    },
    areaServed: { "@type": "City", name: "Canberra" },
    url: "https://www.tutorexel.com/online-tutoring/canberra",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have tutors based in Canberra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our classes are live and online, so Canberra students learn with qualified teachers from home, with no travel between the town centres.",
        },
      },
      {
        "@type": "Question",
        name: "Do lessons follow Australian Curriculum (ACT)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lessons are mapped to the Australian Curriculum as taught in ACT schools for each Year level, so what your child learns supports what happens at school.",
        },
      },
      {
        "@type": "Question",
        name: "What times are classes in Canberra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Classes run after school on weekdays and on weekends, in Canberra time, which includes daylight saving in summer. Your exact times are confirmed after the free assessment.",
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
          text: "Book a free assessment so we can see where your child is. We then suggest a plan and a time, and you can try a free lesson before you commit. Canberra families also ask us about independent school scholarship preparation, which we can include in your plan.",
        },
      },
    ],
  },
];

export default function AuCanberraCityPage() {
  return (
    <div className="xp xp-au-canberra">
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
              <span aria-current="page">Canberra</span>
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
              Canberra, ACT
            </span>
            <h1 className="hub-title">
              Online Tutoring in <span className="grad">Canberra</span>
            </h1>
            <p className="hub-sub">
              Live maths, English and science lessons for Canberra students in Years 2 to 10, matched
              to the Australian Curriculum as taught in ACT schools. Prep for NAPLAN, ICAS and scholarship
              tests is built in, all from home.
            </p>
            <div className="xd-cta">
              <Link className="btn btn-hi" href="/free-assessment">
                Book a free assessment
              </Link>
              <Link className="btn btn-ghost" href="/pricing">
                View plans
              </Link>
            </div>
          </div>
          <aside className="glance" aria-label="Canberra at a glance">
            <p className="glance-t">Tutoring in Canberra</p>
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
                  <span data-tz="Australia/Sydney">--:--</span> in Canberra
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
                  <b>Curriculum</b>Australian Curriculum (ACT)
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
                  <b>Test prep</b>NAPLAN, ICAS and scholarship tests
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
                  <b>Class format</b>Live online, in small groups or one-to-one
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
              <h2 id="sH">Subjects for Canberra Students</h2>
              <p className="muted">
                Every lesson follows the Australian Curriculum as taught in ACT schools, pitched at your child&apos;s level.
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
                  <span>Number patterns, place value and basic operations, matched to the Australian Curriculum in ACT schools</span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>Fractions, decimals, ratios and multi-step problems, with algebra foundations for the move to high school</span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>Algebra, geometry, statistics and probability, building towards ACT Senior Secondary mathematics courses</span>
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
                  <span>Reading fluency, spelling and sentence writing in line with the Australian Curriculum</span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>Comprehension, paragraph structure and persuasive writing, with grammar practice</span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>Text analysis, essay writing and vocabulary, building towards ACT Senior Secondary English courses</span>
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
                  <span>Curiosity, observation and simple investigations across the primary science strands</span>
                </li>
                <li>
                  <b>Years 5 to 7</b>
                  <span>Forces, living things, Earth and space, with fair-test practice</span>
                </li>
                <li>
                  <b>Years 8 to 10</b>
                  <span>Chemistry, physics and biology foundations that lead into ACT Senior Secondary sciences</span>
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
              <h2 id="eH">Tests Canberra Families Prepare For</h2>
              <p className="muted">
                Preparation sits inside regular lessons, with mock tests as each test date gets closer.
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
            <Link className="exam" href="/exam-prep/naplan">
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
              <span className="exam-who">Sat by all students in Years 3, 5, 7 and 9</span>
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
                  Held each March, sat online
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
              <span className="exam-who">Optional subject tests for Years 2 to 12 that stretch students beyond classroom work</span>
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
                  Usually Terms 2 and 3, entered through schools
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
              <span className="exam-full">Independent school scholarship exams, many set by ACER</span>
              <span className="exam-who">Students sitting scholarship exams for Canberra independent schools</span>
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
                  Dates vary, check each school
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
            <h2 id="tH">Class Times for the Canberra School Day</h2>
            <p className="muted">
              All classes run on Canberra local time. The time there right now is{" "}
              <b data-tz="Australia/Sydney">--:--</b>.
            </p>
            <Link className="btn btn-hi" href="/free-assessment">
              Find a Time That Suits
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
      <section className="sec sec--tint" aria-labelledby="aH">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="aH">Families Across Canberra</h2>
              <p className="muted">
                Online lessons reach every suburb. These are just some of the areas our students log in from.
              </p>
            </div>
          </div>
          <div className="areas">
            {[
              "Belconnen",
              "Gungahlin",
              "Tuggeranong",
              "Woden",
              "Kingston",
              "Braddon",
              "Dickson",
              "Kambah",
              "Weston Creek",
              "Molonglo Valley",
            ].map((suburb) => (
              <span key={suburb} className="area-chip">
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
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="fH">
        <div className="wrap faq-wrap">
          <div>
            <h2 id="fH">Canberra Parents Ask</h2>
            <p className="muted">
              Not sure yet? Message us on WhatsApp and a real person will reply.
            </p>
            <a className="btn btn-wa" href="https://wa.me/61469833028">
              Chat on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Do you have tutors based in Canberra?
                <span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Our classes are live and online, so Canberra students learn with qualified teachers
                from home, with no travel between the town centres.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do lessons follow Australian Curriculum (ACT)?
                <span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Yes. Lessons are mapped to the Australian Curriculum as taught in ACT schools for
                each Year level, so what your child learns supports what happens at school.
              </p>
            </details>
            <details className="faq">
              <summary>
                What times are classes in Canberra?<span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Classes run after school on weekdays and on weekends, in Canberra time, which
                includes daylight saving in summer. Your exact times are confirmed after the free
                assessment.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do you help with NAPLAN?<span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Yes. NAPLAN is sat in Years 3, 5, 7 and 9, and we build practice into regular
                lessons and run mock tests as the test approaches.
              </p>
            </details>
            <details className="faq">
              <summary>
                How do we get started?<span className="faq-ic" aria-hidden="true"></span>
              </summary>
              <p>
                Book a free assessment so we can see where your child is. We then suggest a plan and
                a time, and you can try a free lesson before you commit. Canberra families also ask
                us about independent school scholarship preparation, which we can include in your
                plan.
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
              <h2 id="oH">Not in Canberra?</h2>
              <p>The same live classes, set to your local time, in cities across Australia.</p>
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
              <Link className="cpill" href="/online-tutoring/brisbane">
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
                  <b>Brisbane</b>
                  <span>
                    QLD · <span data-tz="Australia/Brisbane">--:--</span>
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
              <Link className="cpill" href="/online-tutoring/gold-coast">
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
                  <b>Gold Coast</b>
                  <span>
                    QLD · <span data-tz="Australia/Brisbane">--:--</span>
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
              <h2>Ready to Start in Canberra?</h2>
              <p>
                Book a free trial lesson for your child today. No credit card needed.
              </p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/free-trial">
                  Book a Free Trial
                </Link>
                <a className="btn btn-wa" href="https://wa.me/61469833028">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z"></path>
                  </svg>
                  +61 469 833 028
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
