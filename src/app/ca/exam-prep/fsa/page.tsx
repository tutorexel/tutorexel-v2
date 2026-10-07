/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./fsa.css";

export const metadata: Metadata = {
  title: "BC FSA Test Prep Online | Grades 4 and 7 | TutorExel",
  description:
    "Online FSA prep for British Columbia students in Grades 4 and 7. B.C. curriculum reading, writing and numeracy lessons with practice. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/ca/exam-prep/fsa" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tutorexel.com/ca/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Exam Prep",
        item: "https://www.tutorexel.com/ca/exam-prep",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "BC FSA",
        item: "https://www.tutorexel.com/ca/exam-prep/fsa",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BC FSA preparation",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "Country", name: "Canada" },
    url: "https://www.tutorexel.com/ca/exam-prep/fsa",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does the FSA count toward my child's report card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The FSA is a snapshot of skills and does not count toward report card marks. It helps schools and families see how students are doing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you follow the B.C. curriculum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our lessons follow the B.C. curriculum for each grade.",
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
        name: "Is the FSA online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The FSA is written online, so on-screen practice helps.",
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

export default function CaBcFsaPage() {
  return (
    <div className="xp xp-ca-fsa">
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
              <Link href="/ca/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/ca/exam-prep">Exam Prep</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">BC FSA</span>
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
              Grades 4 and 7
            </span>
            <h1 className="hub-title">
              Online <span className="grad">FSA Prep</span> for B.C. Students
            </h1>
            <p className="hub-sub">
              Live online prep for the Foundation Skills Assessment in Grades 4 and 7. B.C.
              curriculum reading, writing and numeracy lessons, practised in the online format.
            </p>
            <div className="xd-cta">
              <Link className="btn btn-hi" href="/ca/free-assessment">
                Book a Free Assessment
              </Link>
              <Link className="btn btn-ghost" href="/ca/pricing">
                View Plans
              </Link>
            </div>
          </div>
          <aside aria-label="BC FSA at a Glance" className="glance">
            <p className="glance-t">BC FSA at a Glance</p>
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
                  <b>When</b>Fall testing window, British Columbia
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
                  <b>Format</b>Online assessment
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
                  <b>Subjects</b>Reading, Writing and Numeracy
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
                  <b>Results</b>Emerging, On Track or Extending
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
              <h2 id="dH">What the FSA Measures</h2>
              <p className="muted">
                The FSA checks core skills from the B.C. curriculum. We teach the skills, then
                practise the format.
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
                    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0"></path>
                  </svg>
                </span>
                <h3>Reading</h3>
              </div>
              <p className="dom-what">Understanding and responding to texts.</p>
              <ul className="dom-list">
                <li>Main idea and inference</li>
                <li>Making connections</li>
                <li>Short written answers</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Weekly reading with open-response practice.
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
              <p className="dom-what">Writing for a purpose, with clear ideas.</p>
              <ul className="dom-list">
                <li>Organizing ideas</li>
                <li>Developing with details</li>
                <li>Spelling and grammar</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Short writing tasks with feedback against the scoring guide.
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
              <p className="dom-what">B.C. curriculum math and problem solving.</p>
              <ul className="dom-list">
                <li>Number and operations</li>
                <li>Patterns and algebra</li>
                <li>Data and reasoning</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Curriculum-aligned lessons with mixed FSA-style practice.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="yH" className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head sec-head--stack">
            <div>
              <h2 id="yH">What to Focus on by Grade</h2>
              <p className="muted">Pick your child's grade and try a question.</p>
            </div>
            <div aria-label="What to focus on by grade" className="ytabs" role="tablist">
              <button aria-controls="yp0" aria-selected="true" className="ytab" id="yt0" role="tab">
                Grade 4
              </button>
              <button
                aria-controls="yp1"
                aria-selected="false"
                className="ytab"
                id="yt1"
                role="tab"
                tabIndex={-1}
              >
                Grade 7
              </button>
            </div>
          </div>
          <div aria-labelledby="yt0" className="ypanel" id="yp0" role="tabpanel">
            <div className="yp-l">
              <h3>Grade 4</h3>
              <p>The first FSA. Comfort with the online format matters.</p>
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
                  Reading and short responses
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
                  Multiplication and place value
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
                  Simple patterns
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">What is 7 × 6?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>36
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">B</span>42
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">C</span>48
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>49
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is B (42).
              </p>
            </div>
          </div>
          <div aria-labelledby="yt1" className="ypanel" hidden id="yp1" role="tabpanel">
            <div className="yp-l">
              <h3>Grade 7</h3>
              <p>Longer texts, multi-step numeracy and organized writing.</p>
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
                  Reading with evidence
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
                  Fractions, decimals and percents
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
              <p className="q-text">What is 25% of 48?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>10
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">B</span>12
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">C</span>14
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>16
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is B (12).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="lH" className="sec">
        <div className="wrap lv-wrap">
          <div>
            <h2 id="lH">Understanding FSA Results</h2>
            <p className="muted">Results are reported on a three-step scale for each skill.</p>
            <Link className="btn btn-hi" href="/ca/free-assessment">
              See Where Your Child Sits
            </Link>
          </div>
          <ol className="levels">
            <li style={{ "--c": "#1E8E5A", "--bg": "#E4F5EC" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Extending</b>
              <span>Goes beyond the grade-level expectations.</span>
            </li>
            <li style={{ "--c": "#2E7DD1", "--bg": "#E6F0FB" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>On Track</b>
              <span>Meets the grade-level expectations.</span>
            </li>
            <li style={{ "--c": "#C98A12", "--bg": "#FDF3DC" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Emerging</b>
              <span>Still developing the grade-level expectations.</span>
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
            <Link className="see-all" href="/ca/exam-prep">
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
            <Link className="rel" href="/ca/exam-prep/eqao">
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
                <b>EQAO</b>
                <span>Education Quality and Accountability Office assessments (Ontario)</span>
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
            <Link className="rel" href="/ca/exam-prep/osslt">
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
                <b>OSSLT</b>
                <span>Ontario Secondary School Literacy Test</span>
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
            <Link className="rel" href="/ca/exam-prep/pat">
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
                <b>Alberta PATs</b>
                <span>Alberta Provincial Achievement Tests</span>
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
            <Link className="rel" href="/ca/exam-prep/gifted">
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
                <b>Gifted Testing</b>
                <span>CCAT and gifted identification</span>
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
            <h2 id="fH">BC FSA Questions From Parents</h2>
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
                Does the FSA count toward my child's report card?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                No. The FSA is a snapshot of skills and does not count toward report card marks. It
                helps schools and families see how students are doing.
              </p>
            </details>
            <details className="faq">
              <summary>
                Do you follow the B.C. curriculum?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>Yes. Our lessons follow the B.C. curriculum for each grade.</p>
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
                Is the FSA online?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>Yes. The FSA is written online, so on-screen practice helps.</p>
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
                  <span>Aligned to the B.C. curriculum</span>
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
                Join Canadian families who trust TutorExel with their child's learning. Book a free
                trial class today, no credit card needed.
              </p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/ca/enroll">
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
