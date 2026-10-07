/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./exam-prep.css";

export const metadata: Metadata = {
  title: "EQAO, FSA, CEMC and Private School Test Prep Online | TutorExel",
  description:
    "Online exam prep for Grades 2 to 10: EQAO, B.C. FSA, gifted screening, CEMC math contests and private school tests. Mock tests and live tutoring. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/ca/exam-prep" },
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
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EQAO, OSSLT and Provincial Test Prep",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "Country", name: "Canada" },
    url: "https://www.tutorexel.com/ca/exam-prep",
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
          text: "No. EQAO and FSA preparation is part of your child's regular math and English lessons, with extra practise and mock tests added as the test date gets closer.",
        },
      },
      {
        "@type": "Question",
        name: "When should my child start preparing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The earlier the better. For EQAO and FSA, start a term or two ahead. For gifted and private school tests, many families start 6 to 12 months before the test date.",
        },
      },
      {
        "@type": "Question",
        name: "Will test prep make my child anxious?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We keep it low pressure. Short practise, friendly tutors and familiar question styles help children feel calm, not stressed.",
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

export default function CaExamPrepHubPage() {
  return (
    <div className="xp xp-ca-hub">
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
            <Link href="/ca/">Home</Link>
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
            Exam prep for Canadian students
          </span>
          <h1 className="hub-title">
            EQAO, FSA, CEMC and Private School <span className="grad">Exam Prep</span>
          </h1>
          <p className="hub-sub">
            Get ready for provincial assessments with live online math and English lessons for
            Grades 2 to 10, plus practice quizzes and timed mock tests that build calm, confident
            test-day habits.
          </p>
          <div className="hero-pills">
            <Link href="/ca/exam-prep/eqao">EQAO</Link>
            <Link href="/ca/exam-prep/fsa">FSA</Link>
            <Link href="/ca/exam-prep/gifted">Gifted Screening</Link>
            <Link href="/ca/free-assessment">CEMC Contests</Link>
            <Link href="/ca/free-assessment">Private School Tests</Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="eH" className="sec">
        <div className="wrap">
          <div className="sec-head sec-head--stack">
            <div>
              <h2 id="eH">Which Test Is Your Child Writing?</h2>
              <p className="muted" id="eStatus">
                Choose a grade level to see which tests apply.
              </p>
            </div>
            <div aria-label="Filter by grade" className="ychips" role="toolbar">
              <button aria-pressed="true" className="ychip" data-y="all">
                All
              </button>
              <button aria-pressed="false" className="ychip" data-y="2">
                Grade 2
              </button>
              <button aria-pressed="false" className="ychip" data-y="3">
                Grade 3
              </button>
              <button aria-pressed="false" className="ychip" data-y="4">
                Grade 4
              </button>
              <button aria-pressed="false" className="ychip" data-y="5">
                Grade 5
              </button>
              <button aria-pressed="false" className="ychip" data-y="6">
                Grade 6
              </button>
              <button aria-pressed="false" className="ychip" data-y="7">
                Grade 7
              </button>
              <button aria-pressed="false" className="ychip" data-y="8">
                Grade 8
              </button>
              <button aria-pressed="false" className="ychip" data-y="9">
                Grade 9
              </button>
              <button aria-pressed="false" className="ychip" data-y="10">
                Grade 10
              </button>
            </div>
          </div>
          <div className="exams" id="exams">
            <Link className="exam" data-y="3 6 9" href="/ca/exam-prep/eqao">
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
                <span className="exam-yrs">Grades 3, 6 and 9</span>
              </span>
              <b className="exam-name">EQAO</b>
              <span className="exam-full">
                Education Quality and Accountability Office provincial assessments (Ontario)
              </span>
              <span className="exam-who">Ontario students in Grades 3, 6 and 9</span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Writing</span>
                <span>Math</span>
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
                  Spring, taken at school
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
            <Link className="exam" data-y="9 10" href="/ca/exam-prep/osslt">
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
                    <path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>
                    <path d="M14 6l4 4"></path>
                  </svg>
                </span>
                <span className="exam-yrs">Grades 9 and 10</span>
              </span>
              <b className="exam-name">OSSLT</b>
              <span className="exam-full">Ontario Secondary School Literacy Test</span>
              <span className="exam-who">Ontario students in Grades 9 and 10</span>
              <span className="exam-tags">
                <span>Reading</span>
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
                  Usually spring of Grade 10
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
            <Link className="exam" data-y="6 9" href="/ca/exam-prep/pat">
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
                <span className="exam-yrs">Grades 6 and 9</span>
              </span>
              <b className="exam-name">Alberta PATs</b>
              <span className="exam-full">Alberta Provincial Achievement Tests</span>
              <span className="exam-who">Alberta students in Grades 6 and 9</span>
              <span className="exam-tags">
                <span>English Language Arts</span>
                <span>Math</span>
                <span>Science</span>
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
                  Spring testing window, Alberta
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
            <Link className="exam" data-y="4 7" href="/ca/exam-prep/fsa">
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
                <span className="exam-yrs">Grades 4 and 7</span>
              </span>
              <b className="exam-name">FSA</b>
              <span className="exam-full">Foundation Skills Assessment (British Columbia)</span>
              <span className="exam-who">B.C. students in Grades 4 and 7</span>
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
                  Fall, taken at school
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
            <Link className="exam" data-y="2 3 4 5 6" href="/ca/exam-prep/gifted">
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
                <span className="exam-yrs">Grades 2 to 6</span>
              </span>
              <b className="exam-name">Gifted Screening</b>
              <span className="exam-full">
                Gifted program screening (for example CCAT or board-set tests)
              </span>
              <span className="exam-who">
                Students being assessed for a school board gifted program
              </span>
              <span className="exam-tags">
                <span>Verbal reasoning</span>
                <span>Quantitative reasoning</span>
                <span>Nonverbal reasoning</span>
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
                  Varies by school board
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
            <Link className="exam" data-y="7 8 9 10" href="/ca/free-assessment">
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
                <span className="exam-yrs">Grades 7 to 10</span>
              </span>
              <b className="exam-name">CEMC Contests</b>
              <span className="exam-full">Waterloo CEMC math contests (Gauss, Pascal, Cayley)</span>
              <span className="exam-who">
                Students who enjoy a math challenge beyond the classroom
              </span>
              <span className="exam-tags">
                <span>Problem solving</span>
                <span>Math</span>
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
                  Spring, written at school
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
            <Link className="exam" data-y="3 4 5 6 7 8 9" href="/ca/free-assessment">
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
                    <path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>
                    <path d="M14 6l4 4"></path>
                  </svg>
                </span>
                <span className="exam-yrs">Grades 3 to 9</span>
              </span>
              <b className="exam-name">Private School Tests</b>
              <span className="exam-full">
                Independent school entrance tests (for example SSAT or school-set exams)
              </span>
              <span className="exam-who">Students applying to private and independent schools</span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Writing</span>
                <span>Math</span>
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
                  Fall and winter
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
                teach every week, so the practise adds up across the whole year.
              </p>
              <div className="spot-actions">
                <Link className="btn btn-hi" href="/ca/free-assessment">
                  Book a Free Assessment
                </Link>
                <Link className="btn btn-ghost" href="/ca/pricing">
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
            <a className="btn btn-wa" href="https://wa.me/12067977387">
              Message Us on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Is exam prep a separate course?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                No. EQAO and FSA preparation is part of your child's regular math and English
                lessons, with extra practise and mock tests added as the test date gets closer.
              </p>
            </details>
            <details className="faq">
              <summary>
                When should my child start preparing?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                The earlier the better. For EQAO and FSA, start a term or two ahead. For gifted and
                private school tests, many families start 6 to 12 months before the test date.
              </p>
            </details>
            <details className="faq">
              <summary>
                Will test prep make my child anxious?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                We keep it low pressure. Short practise, friendly tutors and familiar question
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
                  <span>Aligned to your province's curriculum</span>
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
