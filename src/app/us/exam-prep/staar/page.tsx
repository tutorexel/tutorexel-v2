/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./staar.css";

export const metadata: Metadata = {
  title: "STAAR Test Prep Online Texas | Grades 3 to 8 | TutorExel",
  description:
    "Online STAAR test prep for Texas students in Grades 3 to 8. TEKS-aligned math and reading lessons, practice tests and mock tests. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/us/exam-prep/staar" },
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
        name: "Exam Prep",
        item: "https://www.tutorexel.com/us/exam-prep",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "STAAR",
        item: "https://www.tutorexel.com/us/exam-prep/staar",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "STAAR preparation",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "Country", name: "USA" },
    url: "https://www.tutorexel.com/us/exam-prep/staar",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the STAAR test online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. STAAR is given online and includes question types beyond multiple choice, so on-screen practice helps.",
        },
      },
      {
        "@type": "Question",
        name: "Do you follow the TEKS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our lessons follow the TEKS for each grade, including math and Reading Language Arts.",
        },
      },
      {
        "@type": "Question",
        name: "When should we start preparing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A couple of months before the test window is a good start, with a little practice each week.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help if my child did not meet grade level?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We start with a free assessment to find the gaps, then build a plan to close them.",
        },
      },
      {
        "@type": "Question",
        name: "How will I know if my child is improving?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regular quiz results and parent reports show progress skill by skill.",
        },
      },
    ],
  },
];

export default function UsStaarPage() {
  return (
    <div className="xp xp-us-staar">
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
              <Link href="/us/exam-prep">Exam Prep</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">STAAR</span>
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
                <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
              </svg>{" "}
              Grades 3 to 8
            </span>
            <h1 className="hub-title">
              Online <span className="grad">STAAR Test Prep</span> for Texas Students
            </h1>
            <p className="hub-sub">
              Live online STAAR prep for Texas students in Grades 3 to 8. TEKS-aligned math and
              reading lessons, plus practice with the same question types students see on test day.
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
          <aside aria-label="STAAR at a Glance" className="glance">
            <p className="glance-t">STAAR at a Glance</p>
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
                  <b>When</b>Spring testing window, Texas
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
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>
                  </svg>
                </span>
                <span>
                  <b>Format</b>Online, with several question types beyond multiple choice
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
                  <b>Subjects</b>Math and Reading Language Arts, plus Science and Social Studies in
                  some grades
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
                    <path d="M6 2h9l5 5v15H6z"></path>
                    <path d="M14 2v6h6M9 13h8M9 17h6"></path>
                  </svg>
                </span>
                <span>
                  <b>Results</b>Four performance levels for each subject
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
      <section aria-labelledby="dH" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="dH">What STAAR Measures</h2>
              <p className="muted">
                STAAR is built on the TEKS. We teach the skills first, then practice the question
                formats.
              </p>
            </div>
          </div>
          <div className="doms" style={{ "--n": "3" } as CSSProperties}>
            <article className="dom">
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
              <p className="dom-what">TEKS math skills for each grade.</p>
              <ul className="dom-list">
                <li>Number and operations</li>
                <li>Algebraic reasoning</li>
                <li>Data analysis and financial literacy</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>TEKS-aligned lessons, with practice on the gridded and
                multi-select items used on the test.
              </p>
            </article>
            <article className="dom">
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
                    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0"></path>
                  </svg>
                </span>
                <h3>Reading Language Arts</h3>
              </div>
              <p className="dom-what">Reading, responding to and writing about texts.</p>
              <ul className="dom-list">
                <li>Comprehension across genres</li>
                <li>Vocabulary and author's craft</li>
                <li>Constructed responses</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Close reading, with short and extended response practice.
              </p>
            </article>
            <article className="dom">
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
                <h3>Writing in RLA</h3>
              </div>
              <p className="dom-what">Written responses to reading, scored on a rubric.</p>
              <ul className="dom-list">
                <li>A clear central idea</li>
                <li>Text evidence</li>
                <li>Conventions</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Timed responses with feedback that follows the rubric.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="yH" className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head sec-head--stack">
            <div>
              <h2 id="yH">What to Focus on by Grade Band</h2>
              <p className="muted">Pick a grade band and try a question.</p>
            </div>
            <div aria-label="What to focus on by grade band" className="ytabs" role="tablist">
              <button aria-controls="yp0" aria-selected="true" className="ytab" id="yt0" role="tab">
                Grades 3 to 5
              </button>
              <button
                aria-controls="yp1"
                aria-selected="false"
                className="ytab"
                id="yt1"
                role="tab"
                tabIndex={-1}
              >
                Grades 6 to 8
              </button>
            </div>
          </div>
          <div aria-labelledby="yt0" className="ypanel" id="yp0" role="tabpanel">
            <div className="yp-l">
              <h3>Grades 3 to 5</h3>
              <p>Build the base for STAAR math and reading.</p>
              <ul className="ticks">
                <li>
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
                  Place value and fractions
                </li>
                <li>
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
                  Main idea and key details
                </li>
                <li>
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
                  Short written responses
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">What is 8 × 7?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>54
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">B</span>56
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">C</span>58
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>64
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is B (56).
              </p>
            </div>
          </div>
          <div aria-labelledby="yt1" className="ypanel" hidden id="yp1" role="tabpanel">
            <div className="yp-l">
              <h3>Grades 6 to 8</h3>
              <p>Move to ratios, algebra and longer texts.</p>
              <ul className="ticks">
                <li>
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
                  Ratios, fractions and early algebra
                </li>
                <li>
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
                  Text evidence and inference
                </li>
                <li>
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
                  Extended written responses
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">What is 3/4 + 1/8?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>4/12
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">B</span>7/8
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">C</span>1
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>5/6
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is B (7/8).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="lH" className="sec">
        <div className="wrap lv-wrap">
          <div>
            <h2 id="lH">Understanding STAAR Results</h2>
            <p className="muted">STAAR reports four performance levels for each subject.</p>
            <Link className="btn btn-hi" href="/us/free-assessment">
              See Where Your Child Sits
            </Link>
          </div>
          <ol className="levels">
            <li style={{ "--c": "#1E8E5A", "--bg": "#E4F5EC" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Masters Grade Level</b>
              <span>Expected to succeed in the next grade with little or no support.</span>
            </li>
            <li style={{ "--c": "#2E7DD1", "--bg": "#E6F0FB" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Meets Grade Level</b>
              <span>A strong chance of success in the next grade.</span>
            </li>
            <li style={{ "--c": "#C98A12", "--bg": "#FDF3DC" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Approaches Grade Level</b>
              <span>Likely to succeed with targeted support.</span>
            </li>
            <li style={{ "--c": "#C93A3A", "--bg": "#FCE6E4" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Did Not Meet Grade Level</b>
              <span>Unlikely to succeed without significant support.</span>
            </li>
          </ol>
        </div>
      </section>
      <section aria-labelledby="rH" className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="rH">Other Tests We Prepare For</h2>
            </div>
            <Link className="see-all" href="/us/exam-prep">
              All Exam Prep{" "}
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
          <div className="rels">
            <Link className="rel" href="/us/exam-prep/state-tests">
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
              <span>
                <b>State Tests</b>
                <span>Your state's math and reading tests</span>
              </span>
              <span className="rel-go">
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
            <Link className="rel" href="/us/exam-prep/caaspp">
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
              <span>
                <b>CAASPP</b>
                <span>California Smarter Balanced assessments</span>
              </span>
              <span className="rel-go">
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
            <Link className="rel" href="/us/exam-prep/fast">
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
                  <path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>
                  <path d="M14 6l4 4"></path>
                </svg>
              </span>
              <span>
                <b>FAST</b>
                <span>Florida Assessment of Student Thinking</span>
              </span>
              <span className="rel-go">
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
            <Link className="rel" href="/us/exam-prep/cogat">
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
              <span>
                <b>CogAT</b>
                <span>Cognitive Abilities Test for gifted screening</span>
              </span>
              <span className="rel-go">
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
            <Link className="rel" href="/us/exam-prep/map-growth">
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
              <span>
                <b>MAP Growth</b>
                <span>NWEA MAP Growth (RIT scores)</span>
              </span>
              <span className="rel-go">
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
      </section>
      <section aria-labelledby="fH" className="sec">
        <div className="wrap faq-wrap">
          <div>
            <h2 id="fH">STAAR Questions From Parents</h2>
            <p className="muted">
              Not sure where to start? Message us on WhatsApp and a real person will reply.
            </p>
            <a className="btn btn-wa" href="https://wa.me/12067977387">
              Message Us on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Is the STAAR test online?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. STAAR is given online and includes question types beyond multiple choice, so
                on-screen practice helps.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do you follow the TEKS?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. Our lessons follow the TEKS for each grade, including math and Reading Language
                Arts.
              </p>
            </details>
            <details className="faq">
              <summary>
                When should we start preparing?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                A couple of months before the test window is a good start, with a little practice
                each week.
              </p>
            </details>
            <details className="faq">
              <summary>
                Can you help if my child did not meet grade level?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. We start with a free assessment to find the gaps, then build a plan to close
                them.
              </p>
            </details>
            <details className="faq">
              <summary>
                How will I know if my child is improving?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>Regular quiz results and parent reports show progress skill by skill.</p>
            </details>
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
                  <span>Aligned to the Texas TEKS</span>
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
              <h2>Ready to See Your Child Excel?</h2>
              <p>
                Join American families who trust TutorExel with their child's learning. Book a free
                trial class today, no credit card needed.
              </p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/us/enroll">
                  Book Online Now
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
