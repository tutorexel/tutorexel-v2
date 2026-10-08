/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./exam-prep.css";

export const metadata: Metadata = {
  title: "PAT, e-asTTle, ICAS and Scholarship Test Prep Online | TutorExel",
  description:
    "Online exam prep for Years 2 to 10: PAT, e-asTTle, ICAS, scholarship tests and NCEA literacy and numeracy. Mock tests and live tutoring. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/nz/exam-prep" },
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
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NCEA, e-asTTle and PAT Prep",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "Country", name: "New Zealand" },
    url: "https://www.tutorexel.com/nz/exam-prep",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is exam prep a separate course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. PAT and e-asTTle preparation is part of your child's regular maths and English lessons, with extra practice and mock tests added as the test date gets closer.",
        },
      },
      {
        "@type": "Question",
        name: "When should my child start preparing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The earlier the better. For PAT and e-asTTle, start a term ahead. For scholarship tests, many families start 6 to 12 months before the test date.",
        },
      },
      {
        "@type": "Question",
        name: "Will test prep make my child anxious?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We keep it low pressure. Short practice, friendly tutors and familiar question styles help children feel calm, not stressed.",
        },
      },
      {
        "@type": "Question",
        name: "How will I know if it is working?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You get regular quiz results and parent reports that show progress skill by skill, so you can see what is improving.",
        },
      },
      {
        "@type": "Question",
        name: "How do we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book a free assessment. We find where your child is up to, then you join a free trial class. No credit card needed.",
        },
      },
    ],
  },
];

export default function NzExamPrepHubPage() {
  return (
    <div className="xp xp-nz-hub">
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <section className="hub-hero">
        <svg aria-hidden="true" className="bb-line bb-line--left" fill="none" viewBox="0 0 200 260">
          <path
            d="M-20 60c40-30 70 10 60 60s-40 90 10 110 60-60 80-120 50-40 70-10"
            stroke="#FFD9B8"
            strokeLinecap="round"
            strokeWidth="3"
          ></path>
        </svg>
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
        <div className="wrap hub-hero-in">
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href="/nz/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Exam Prep</span>
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
            Exam prep for Kiwi students
          </span>
          <h1 className="hub-title">
            PAT, e-asTTle, ICAS and Scholarship <span className="grad">Exam Prep</span>
          </h1>
          <p className="hub-sub">
            Get ready for PAT and e-asTTle with live online maths and English lessons for Years 2 to
            10, plus practice quizzes and timed mock tests that build calm, confident test-day
            habits.
          </p>
          <div className="hero-pills">
            <Link href="/nz/exam-prep/pat">PAT</Link>
            <Link href="/nz/exam-prep/e-asttle">e-asTTle</Link>
            <Link href="/nz/exam-prep/icas">ICAS</Link>
            <Link href="/nz/free-assessment">Scholarship Tests</Link>
            <Link href="/nz/exam-prep/ncea">NCEA Literacy and Numeracy</Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="eH" className="sec">
        <div className="wrap">
          <div className="sec-head sec-head--stack">
            <div>
              <h2 id="eH">Which Test Is Your Child Sitting?</h2>
              <p className="muted" id="eStatus">
                Choose a year level to see which tests apply.
              </p>
            </div>
            <div aria-label="Filter by year" className="ychips" role="toolbar">
              <button aria-pressed="true" className="ychip" data-y="all">
                All
              </button>
              <button aria-pressed="false" className="ychip" data-y="2">
                Year 2
              </button>
              <button aria-pressed="false" className="ychip" data-y="3">
                Year 3
              </button>
              <button aria-pressed="false" className="ychip" data-y="4">
                Year 4
              </button>
              <button aria-pressed="false" className="ychip" data-y="5">
                Year 5
              </button>
              <button aria-pressed="false" className="ychip" data-y="6">
                Year 6
              </button>
              <button aria-pressed="false" className="ychip" data-y="7">
                Year 7
              </button>
              <button aria-pressed="false" className="ychip" data-y="8">
                Year 8
              </button>
              <button aria-pressed="false" className="ychip" data-y="9">
                Year 9
              </button>
              <button aria-pressed="false" className="ychip" data-y="10">
                Year 10
              </button>
            </div>
          </div>
          <div className="exams" id="exams">
            <Link className="exam" data-y="3 4 5 6 7 8 9 10" href="/nz/exam-prep/pat">
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
                <span className="exam-yrs">Years 3 to 10</span>
              </span>
              <b className="exam-name">PAT</b>
              <span className="exam-full">Progressive Achievement Tests (NZCER)</span>
              <span className="exam-who">Students whose school uses PAT to track progress</span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Vocabulary</span>
                <span>Maths</span>
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
                  Usually once or twice a year, at school
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
            <Link className="exam" data-y="4 5 6 7 8 9 10" href="/nz/exam-prep/e-asttle">
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
                <span className="exam-yrs">Years 4 to 10</span>
              </span>
              <b className="exam-name">e-asTTle</b>
              <span className="exam-full">e-asTTle online assessment tool</span>
              <span className="exam-who">
                Students whose school uses e-asTTle for reading, writing and maths
              </span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Writing</span>
                <span>Maths</span>
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
                  Set by each school
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
            <Link className="exam" data-y="2 3 4 5 6 7 8 9 10" href="/nz/exam-prep/icas">
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
                    <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
                  </svg>
                </span>
                <span className="exam-yrs">Years 2 to 10</span>
              </span>
              <b className="exam-name">ICAS</b>
              <span className="exam-full">
                International Competitions and Assessments for Schools
              </span>
              <span className="exam-who">
                Students who enjoy a challenge beyond the usual classroom work
              </span>
              <span className="exam-tags">
                <span>English</span>
                <span>Maths</span>
                <span>Science</span>
                <span>Writing</span>
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
                  Mid-year, sat through your child's school
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
            <Link className="exam" data-y="6 7 8 9" href="/nz/free-assessment">
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
                    <path d="M12 3l2.4 5.6L20 9.3l-4.4 3.9 1.3 5.9L12 16l-4.9 3.1 1.3-5.9L4 9.3l5.6-.7L12 3Z"></path>
                  </svg>
                </span>
                <span className="exam-yrs">Years 6 to 9</span>
              </span>
              <b className="exam-name">Scholarship Tests</b>
              <span className="exam-full">Independent school scholarship and entry exams</span>
              <span className="exam-who">
                Students applying for scholarships or places at independent schools
              </span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Written expression</span>
                <span>Maths</span>
                <span>Reasoning</span>
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
                  Usually early in the year
                </span>
                <span className="exam-go">
                  Ask us{" "}
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
            <Link className="exam" data-y="9 10" href="/nz/exam-prep/ncea">
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
                <span className="exam-yrs">Years 9 and 10</span>
              </span>
              <b className="exam-name">NCEA Literacy and Numeracy</b>
              <span className="exam-full">NCEA Literacy and Numeracy co-requirement</span>
              <span className="exam-who">
                Students getting ready for the NCEA literacy and numeracy standard
              </span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Writing</span>
                <span>Numeracy</span>
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
                  Co-requisite tests from Year 10
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
      <section aria-labelledby="bH" className="spot">
        <div className="wrap">
          <div className="spot-grid">
            <div>
              <h2 id="bH">Test Prep Built Into Every Lesson</h2>
              <p className="lede">
                There is no separate cram course. The skills these tests reward are the ones we
                teach every week, so the practice adds up across the whole year.
              </p>
              <div className="spot-actions">
                <Link className="btn btn-hi" href="/nz/free-assessment">
                  Book a Free Assessment
                </Link>
                <Link className="btn btn-ghost" href="/nz/pricing">
                  View Plans
                </Link>
              </div>
            </div>
            <div className="bfeats">
              <div className="bfeat">
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
                <b>Test-Style Questions</b>
                <span>Every topic is practised in the format your child will meet on the day.</span>
              </div>
              <div className="bfeat">
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
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                </span>
                <b>Timed Mock Tests</b>
                <span>Practise under real conditions so test day feels familiar, not scary.</span>
              </div>
              <div className="bfeat">
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
                <b>Gap Tracking</b>
                <span>A short quiz every fourth lesson shows what needs another look.</span>
              </div>
              <div className="bfeat">
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
                    <path d="M6 2h9l5 5v15H6z"></path>
                    <path d="M14 2v6h6M9 13h8M9 17h6"></path>
                  </svg>
                </span>
                <b>Parent Reports</b>
                <span>Clear updates on progress, skill by skill.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="fH" className="sec">
        <div className="wrap faq-wrap">
          <div>
            <h2 id="fH">Parent Questions, Answered</h2>
            <p className="muted">Not sure which test applies to your child? Ask us on WhatsApp.</p>
            <a className="btn btn-wa" href="https://wa.me/61470330548">
              Message Us on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Is exam prep a separate course?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                No. PAT and e-asTTle preparation is part of your child's regular maths and English
                lessons, with extra practice and mock tests added as the test date gets closer.
              </p>
            </details>
            <details className="faq">
              <summary>
                When should my child start preparing?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                The earlier the better. For PAT and e-asTTle, start a term ahead. For scholarship
                tests, many families start 6 to 12 months before the test date.
              </p>
            </details>
            <details className="faq">
              <summary>
                Will test prep make my child anxious?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                We keep it low pressure. Short practice, friendly tutors and familiar question
                styles help children feel calm, not stressed.
              </p>
            </details>
            <details className="faq">
              <summary>
                How will I know if it is working?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                You get regular quiz results and parent reports that show progress skill by skill,
                so you can see what is improving.
              </p>
            </details>
            <details className="faq">
              <summary>
                How do we get started?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Book a free assessment. We find where your child is up to, then you join a free
                trial class. No credit card needed.
              </p>
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
                Join Kiwi families who trust TutorExel with their child's learning. Book a free
                trial class today, no credit card needed.
              </p>
              <div className="final-actions">
                <Link className="btn btn-hi" href="/nz/enroll">
                  Book Online Now
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
