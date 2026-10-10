/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./naplan-preparation.css";

export const metadata: Metadata = {
  title: "NAPLAN Preparation Online Australia | Years 3, 5, 7, 9 | TutorExel",
  description:
    "Online NAPLAN preparation for Years 3, 5, 7 and 9. Live maths and English lessons, practice tests and parent reports. Book a free assessment today.",
  alternates: { canonical: "https://www.tutorexel.com/naplan-preparation" },
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
        name: "Exam Prep",
        item: "https://www.tutorexel.com/exam-prep",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "NAPLAN",
        item: "https://www.tutorexel.com/naplan-preparation",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NAPLAN preparation",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "Country", name: "Australia" },
    url: "https://www.tutorexel.com/naplan-preparation",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does my child need to prepare for NAPLAN?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NAPLAN is not a pass or fail test and is not used for school entry. A little regular practice helps students feel calm and know what to expect.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between NAPLAN and ICAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NAPLAN is sat by every student in Years 3, 5, 7 and 9. ICAS is optional and stretches students beyond the curriculum.",
        },
      },
      {
        "@type": "Question",
        name: "Can my child opt out?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parents can ask the school about withdrawal or exemption. Speak with your child's school first.",
        },
      },
      {
        "@type": "Question",
        name: "When should we start preparing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A term before the March window is a good start, with a little practice each week.",
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

export default function NaplanPreparationPage() {
  return (
    <div className="xp xp-naplan">
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
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/exam-prep">Exam Prep</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">NAPLAN</span>
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
                <path d="M9 4h6M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 12l2.5 2.5L16 9"></path>
              </svg>{" "}
              Years 3, 5, 7 and 9
            </span>
            <h1 className="hub-title">
              Online <span className="grad">NAPLAN Preparation</span> for Australian Students
            </h1>
            <p className="hub-sub">
              Help your child feel calm and ready for NAPLAN in Years 3, 5, 7 and 9. Live online
              lessons build the reading, writing and numeracy skills the tests measure.
            </p>
            <div className="xd-cta">
              <Link className="btn btn-hi" href="/free-assessment">
                Book a Free Assessment
              </Link>
              <Link className="btn btn-ghost" href="/pricing">
                View Plans
              </Link>
            </div>
          </div>
          <aside aria-label="NAPLAN at a Glance" className="glance">
            <p className="glance-t">NAPLAN at a Glance</p>
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
                  <b>When</b>March each year, sat at school
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
                  <b>Format</b>Online, with tests that adapt to how your child is going. Some Year 3
                  students may write on paper
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
                  <b>Domains</b>Reading, Writing, Language conventions, Numeracy
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
                  <b>Results</b>A proficiency level for each domain: Exceeding, Strong, Developing
                  or Needs additional support
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
              <h2 id="dH">The NAPLAN Tests We Prepare Students For</h2>
              <p className="muted">
                NAPLAN checks core skills from the Australian Curriculum, so steady practice beats
                last-minute cramming.
              </p>
            </div>
          </div>
          <div className="doms" style={{ "--n": "4" } as CSSProperties}>
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
                <h3>Reading</h3>
              </div>
              <p className="dom-what">Understanding texts, from stories to information pieces.</p>
              <ul className="dom-list">
                <li>Finding and using details in a text</li>
                <li>Working out what is implied</li>
                <li>Vocabulary in context</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Weekly reading across unfamiliar text types, with a chat about
                how to find each answer.
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
                <h3>Writing</h3>
              </div>
              <p className="dom-what">One writing task, a narrative or persuasive piece.</p>
              <ul className="dom-list">
                <li>Ideas and a clear point of view</li>
                <li>Structure and paragraphing</li>
                <li>Sentence variety and word choice</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Timed prompts with feedback on structure and ideas, practised
                in the same format as the test.
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
                    <path d="M9 4h6M8 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M8 12l2.5 2.5L16 9"></path>
                  </svg>
                </span>
                <h3>Language Conventions</h3>
              </div>
              <p className="dom-what">Spelling, grammar and punctuation.</p>
              <ul className="dom-list">
                <li>Spelling common and tricky words</li>
                <li>Sentence structure and grammar</li>
                <li>Punctuation, including commas and apostrophes</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Short, regular practice, so rules become habits.
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
                    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
                  </svg>
                </span>
                <h3>Numeracy</h3>
              </div>
              <p className="dom-what">
                Number, algebra, measurement, geometry, statistics and probability.
              </p>
              <ul className="dom-list">
                <li>Multi-step word problems</li>
                <li>Reading graphs and tables</li>
                <li>Using a calculator wisely where allowed</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Test-style questions practised for every strand, with a focus
                on showing working.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="yH" className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head sec-head--stack">
            <div>
              <h2 id="yH">What to Focus on in Each NAPLAN Year</h2>
              <p className="muted">
                NAPLAN is set in Years 3, 5, 7 and 9. Choose your child's year and try a question.
              </p>
            </div>
            <div aria-label="What to focus on in each year" className="ytabs" role="tablist">
              <button aria-controls="yp0" aria-selected="true" className="ytab" id="yt0" role="tab">
                Year 3
              </button>
              <button
                aria-controls="yp1"
                aria-selected="false"
                className="ytab"
                id="yt1"
                role="tab"
                tabIndex={-1}
              >
                Year 5
              </button>
              <button
                aria-controls="yp2"
                aria-selected="false"
                className="ytab"
                id="yt2"
                role="tab"
                tabIndex={-1}
              >
                Year 7
              </button>
              <button
                aria-controls="yp3"
                aria-selected="false"
                className="ytab"
                id="yt3"
                role="tab"
                tabIndex={-1}
              >
                Year 9
              </button>
            </div>
          </div>
          <div aria-labelledby="yt0" className="ypanel" id="yp0" role="tabpanel">
            <div className="yp-l">
              <h3>Year 3</h3>
              <p>The first NAPLAN. Focus on confident reading and simple, clear writing.</p>
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
                  Reading questions slowly and fully
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
                  Using full stops and capital letters correctly
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
                  Counting, place value and simple word problems
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">What is 48 + 27?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>65
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">B</span>73
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">C</span>75
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>85
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is C (75).
              </p>
            </div>
          </div>
          <div aria-labelledby="yt1" className="ypanel" hidden id="yp1" role="tabpanel">
            <div className="yp-l">
              <h3>Year 5</h3>
              <p>Texts get longer and maths needs more than one step.</p>
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
                  Using evidence from a text
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
                  Fractions, decimals and measurement
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
                  Planning a short piece of writing
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">What is 3/4 of 24?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>6
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">B</span>12
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">C</span>18
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>20
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is C (18).
              </p>
            </div>
          </div>
          <div aria-labelledby="yt2" className="ypanel" hidden id="yp2" role="tabpanel">
            <div className="yp-l">
              <h3>Year 7</h3>
              <p>The move to secondary school brings more reasoning and a wider range of texts.</p>
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
                  Inference and author's purpose
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
                  Ratios, percentages and early algebra
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
                  Writing a clear, structured argument
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">What is 20% of 150?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>20
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">B</span>25
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">C</span>30
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>35
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is C (30).
              </p>
            </div>
          </div>
          <div aria-labelledby="yt3" className="ypanel" hidden id="yp3" role="tabpanel">
            <div className="yp-l">
              <h3>Year 9</h3>
              <p>Questions need careful reasoning, strong grammar and organised writing.</p>
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
                  Algebra and reasoning with data
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
                  Analysing the writer's tone and techniques
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
                  Writing with a clear voice and evidence
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">Solve for x: 2x − 6 = 14</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>5
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">B</span>8
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">C</span>10
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>12
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is C (10).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="lH" className="sec">
        <div className="wrap lv-wrap">
          <div>
            <h2 id="lH">Understanding NAPLAN Results</h2>
            <p className="muted">
              NAPLAN is not a pass or fail test. Results show your child's skills against national
              proficiency levels for their year.
            </p>
            <Link className="btn btn-hi" href="/free-assessment">
              See Where Your Child Sits
            </Link>
          </div>
          <ol className="levels">
            <li style={{ "--c": "#1E8E5A", "--bg": "#E4F5EC" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Exceeding</b>
              <span>Skills are above what is expected for the year level.</span>
            </li>
            <li style={{ "--c": "#2E7DD1", "--bg": "#E6F0FB" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Strong</b>
              <span>Skills meet the expected level for the year.</span>
            </li>
            <li style={{ "--c": "#C98A12", "--bg": "#FDF3DC" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Developing</b>
              <span>Skills are on the way to the expected level.</span>
            </li>
            <li style={{ "--c": "#C93A3A", "--bg": "#FCE6E4" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Needs additional support</b>
              <span>Skills are below the expected level, and extra help may be useful.</span>
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
            <Link className="see-all" href="/exam-prep">
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
            <Link className="rel" href="/exam-prep/icas">
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
                  <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
                </svg>
              </span>
              <span>
                <b>ICAS</b>
                <span>International Competitions and Assessments for Schools</span>
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
            <Link className="rel" href="/exam-prep/oc-test">
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
                <b>OC Test</b>
                <span>NSW Opportunity Class Placement Test</span>
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
            <Link className="rel" href="/exam-prep/selective">
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
                <b>Selective Test</b>
                <span>Selective High School Placement Test</span>
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
            <Link className="rel" href="/exam-prep/scholarship">
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
                <b>Scholarship Tests</b>
                <span>ACER and school scholarship exams</span>
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
            <h2 id="fH">NAPLAN Questions From Parents</h2>
            <p className="muted">
              Not sure where to start? Message us on WhatsApp and a real person will reply.
            </p>
            <a className="btn btn-wa" href="https://wa.me/61470330548">
              Message Us on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Does my child need to prepare for NAPLAN?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                NAPLAN is not a pass or fail test and is not used for school entry. A little regular
                practice helps students feel calm and know what to expect.
              </p>
            </details>
            <details className="faq">
              <summary>
                What is the difference between NAPLAN and ICAS?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                NAPLAN is sat by every student in Years 3, 5, 7 and 9. ICAS is optional and
                stretches students beyond the curriculum.
              </p>
            </details>
            <details className="faq">
              <summary>
                Can my child opt out?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Parents can ask the school about withdrawal or exemption. Speak with your child's
                school first.
              </p>
            </details>
            <details className="faq">
              <summary>
                When should we start preparing?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                A term before the March window is a good start, with a little practice each week.
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
                  <span>Aligned to the Australian Curriculum</span>
                </div>
                <div className="fa-stat fa-stat--2">
                  <b>15+ years</b>
                  <span>Combined teaching experience</span>
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
                Join Australian families who trust TutorExel with their child's learning. Book a
                free trial class today, no credit card needed.
              </p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/enroll">
                  Book Online Now
                </Link>
                <a className="btn btn-wa" href="https://wa.me/61470330548">
                  <svg aria-hidden="true" fill="#fff" height="18" viewBox="0 0 24 24" width="18">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z"></path>
                  </svg>
                  +61 470 330 548
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
