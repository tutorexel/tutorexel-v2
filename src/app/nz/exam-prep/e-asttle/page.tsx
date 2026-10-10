/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./e-asttle.css";

export const metadata: Metadata = {
  title: "e-asTTle Preparation Online NZ | Years 2 to 10 | TutorExel",
  description:
    "Online e-asTTle preparation for Years 2 to 10. Reading, writing and maths tutoring matched to the NZ Curriculum levels. Book a free assessment today.",
  alternates: { canonical: "https://www.tutorexel.com/nz/exam-prep/e-asttle" },
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
        name: "Exam Prep",
        item: "https://www.tutorexel.com/nz/exam-prep",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "e-asTTle",
        item: "https://www.tutorexel.com/nz/exam-prep/e-asttle",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "e-asTTle preparation",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "Country", name: "New Zealand" },
    url: "https://www.tutorexel.com/nz/exam-prep/e-asttle",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should we share e-asTTle results with you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. They help us target lessons from the first week.",
        },
      },
      {
        "@type": "Question",
        name: "What level should my child be at?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on their Year level. Your child's teacher can tell you the expected level. We also run a free assessment.",
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
        name: "Is e-asTTle a high-stakes test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. e-asTTle is a teaching tool that shows where to focus next. It does not decide placement or results.",
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

export default function NzEAsttlePage() {
  return (
    <div className="xp xp-nz-easttle">
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
              <Link href="/nz/exam-prep">Exam Prep</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">e-asTTle</span>
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
                <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
              </svg>{" "}
              Years 2 to 10
            </span>
            <h1 className="hub-title">
              Online <span className="grad">e-asTTle Support</span> for New Zealand Students
            </h1>
            <p className="hub-sub">
              Live online reading, writing and maths tutoring that helps lift e-asTTle results. We
              use your child's curriculum level to target exactly what to teach next.
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
          <aside aria-label="e-asTTle at a Glance" className="glance">
            <p className="glance-t">e-asTTle at a Glance</p>
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
                  <b>When</b>Through the school year, set by your child's school
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
                  <b>Format</b>Online, set by your school
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
                  <b>Subjects</b>Reading, Writing and Maths
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
                  <b>Results</b>Curriculum levels with sub-levels
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
              <h2 id="dH">What e-asTTle Measures</h2>
              <p className="muted">
                e-asTTle shows where your child sits against the New Zealand Curriculum levels.
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
              <p className="dom-what">Understanding texts at each curriculum level.</p>
              <ul className="dom-list">
                <li>Finding information</li>
                <li>Inference</li>
                <li>Vocabulary</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Reading practice pitched at the next sub-level up.
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
              <p className="dom-what">Writing marked against a rubric.</p>
              <ul className="dom-list">
                <li>Ideas and structure</li>
                <li>Language resources</li>
                <li>Spelling and punctuation</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Rubric-based feedback that shows how to move up a level.
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
                <h3>Maths</h3>
              </div>
              <p className="dom-what">Number, algebra, geometry and statistics.</p>
              <ul className="dom-list">
                <li>Number knowledge</li>
                <li>Problem solving</li>
                <li>Measurement and data</li>
              </ul>
              <p className="dom-how">
                <b>How we prepare</b>Targeted lessons for the strands flagged in your child's
                report.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="yH" className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head sec-head--stack">
            <div>
              <h2 id="yH">What to Focus on by Year Band</h2>
              <p className="muted">Pick a year band and try a question.</p>
            </div>
            <div aria-label="What to focus on by year band" className="ytabs" role="tablist">
              <button aria-controls="yp0" aria-selected="true" className="ytab" id="yt0" role="tab">
                Years 2 to 6
              </button>
              <button
                aria-controls="yp1"
                aria-selected="false"
                className="ytab"
                id="yt1"
                role="tab"
                tabIndex={-1}
              >
                Years 7 to 10
              </button>
            </div>
          </div>
          <div aria-labelledby="yt0" className="ypanel" id="yp0" role="tabpanel">
            <div className="yp-l">
              <h3>Years 2 to 6</h3>
              <p>Build foundations across curriculum levels 1 to 3.</p>
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
                  Number facts
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
                  Reading for meaning
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
                  Sentences and paragraphs
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">What is 9 × 7?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>56
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">B</span>63
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">C</span>72
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>81
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is B (63).
              </p>
            </div>
          </div>
          <div aria-labelledby="yt1" className="ypanel" hidden id="yp1" role="tabpanel">
            <div className="yp-l">
              <h3>Years 7 to 10</h3>
              <p>Work towards curriculum levels 4 and 5.</p>
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
                  Fractions, ratios and algebra
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
                  Reading between the lines
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
                  Writing for a purpose and an audience
                </li>
              </ul>
            </div>
            <div className="qcard">
              <span className="q-tag">Try a sample question</span>
              <p className="q-text">What is 15% of 60?</p>
              <div className="qopts">
                <button className="qopt" data-ok="0">
                  <span className="qk">A</span>6
                </button>
                <button className="qopt" data-ok="1">
                  <span className="qk">B</span>9
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">C</span>12
                </button>
                <button className="qopt" data-ok="0">
                  <span className="qk">D</span>15
                </button>
              </div>
              <p className="q-why" hidden>
                The correct answer is B (9).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="lH" className="sec">
        <div className="wrap lv-wrap">
          <div>
            <h2 id="lH">Understanding e-asTTle Levels</h2>
            <p className="muted">
              Results show a curriculum level and sub-level. For example, 3P means Proficient at
              Level 3.
            </p>
            <Link className="btn btn-hi" href="/nz/free-assessment">
              See Where Your Child Sits
            </Link>
          </div>
          <ol className="levels">
            <li style={{ "--c": "#1E8E5A", "--bg": "#E4F5EC" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Advanced (A)</b>
              <span>Secure at the curriculum level and ready to move up.</span>
            </li>
            <li style={{ "--c": "#2E7DD1", "--bg": "#E6F0FB" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Proficient (P)</b>
              <span>Working well within the level.</span>
            </li>
            <li style={{ "--c": "#C98A12", "--bg": "#FDF3DC" } as CSSProperties}>
              <span className="lv-bar"></span>
              <b>Basic (B)</b>
              <span>Just starting to work at the level.</span>
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
            <Link className="see-all" href="/nz/exam-prep">
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
            <Link className="rel" href="/nz/exam-prep/ncea">
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
                <b>NCEA Readiness</b>
                <span>Literacy and numeracy co-requisites, then NCEA</span>
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
            <Link className="rel" href="/nz/exam-prep/pat">
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
                <b>PAT</b>
                <span>Progressive Achievement Tests (NZCER)</span>
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
            <Link className="rel" href="/nz/exam-prep/icas">
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
          </div>
        </div>
      </section>
      <section aria-labelledby="fH" className="sec">
        <div className="wrap faq-wrap">
          <div>
            <h2 id="fH">e-asTTle Questions From Parents</h2>
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
                Should we share e-asTTle results with you?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>Yes. They help us target lessons from the first week.</p>
            </details>
            <details className="faq">
              <summary>
                What level should my child be at?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                It depends on their Year level. Your child's teacher can tell you the expected
                level. We also run a free assessment.
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
                Is e-asTTle a high-stakes test?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                No. e-asTTle is a teaching tool that shows where to focus next. It does not decide
                placement or results.
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
                  <span>Aligned to the New Zealand Curriculum</span>
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
                Join New Zealand families who trust TutorExel with their child's learning. Book a
                free trial class today, no credit card needed.
              </p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/nz/enroll">
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
