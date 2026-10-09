/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./exam-prep.css";

export const metadata: Metadata = {
  title: "State Test, MAP, SHSAT and ISEE Prep Online | TutorExel",
  description:
    "Online exam prep for Grades 2 to 10: state tests, MAP Growth, gifted programs, SHSAT and ISEE. Mock tests and live tutoring. Book a free assessment.",
  alternates: { canonical: "https://www.tutorexel.com/us/exam-prep" },
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
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Test Prep for State Tests and Gifted Screening",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "Country", name: "USA" },
    url: "https://www.tutorexel.com/us/exam-prep",
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
          text: "No. State test and MAP Growth preparation is part of your child's regular math and English lessons, with extra practice and mock tests added as the test date gets closer.",
        },
      },
      {
        "@type": "Question",
        name: "When should my child start preparing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The earlier the better. For state tests, start a term ahead. For SHSAT, ISEE and SSAT, many families start 6 to 12 months before the test date.",
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

export default function UsExamPrepHubPage() {
  return (
    <div className="xp xp-us-hub">
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
            <Link href="/us/">Home</Link>
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
            Exam prep for American students
          </span>
          <h1 className="hub-title">
            State Test, MAP, SHSAT and ISEE <span className="grad">Exam Prep</span>
          </h1>
          <p className="hub-sub">
            Get ready for state tests and MAP Growth with live online math and English lessons for
            Grades 2 to 10, plus practice quizzes and timed mock tests that build calm, confident
            test-day habits.
          </p>
          <div className="hero-pills">
            <Link href="/us/exam-prep/state-tests">State Tests</Link>
            <Link href="/us/exam-prep/map-growth">MAP Growth</Link>
            <Link href="/us/exam-prep/cogat">Gifted and Talented</Link>
            <Link href="/us/free-assessment">SHSAT</Link>
            <Link href="/us/free-assessment">ISEE and SSAT</Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="eH" className="sec">
        <div className="wrap">
          <div className="sec-head sec-head--stack">
            <div>
              <h2 id="eH">Which Test Is Your Child Taking?</h2>
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
            <Link className="exam" data-y="3 4 5 6 7 8" href="/us/exam-prep/state-tests">
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
                <span className="exam-yrs">Grades 3 to 8</span>
              </span>
              <b className="exam-name">State Tests</b>
              <span className="exam-full">
                Annual state assessments (for example NY State Tests, CAASPP, STAAR, FAST)
              </span>
              <span className="exam-who">Every public school student in Grades 3 to 8</span>
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
            <Link className="exam" data-y="3 4 5 6 7 8" href="/us/exam-prep/staar">
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
                <span className="exam-yrs">Grades 3 to 8</span>
              </span>
              <b className="exam-name">STAAR</b>
              <span className="exam-full">State of Texas Assessments of Academic Readiness</span>
              <span className="exam-who">Texas students in Grades 3 to 8</span>
              <span className="exam-tags">
                <span>Math</span>
                <span>Reading Language Arts</span>
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
                  Spring testing window, Texas
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
            <Link className="exam" data-y="3 4 5 6 7 8" href="/us/exam-prep/caaspp">
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
                <span className="exam-yrs">Grades 3 to 8</span>
              </span>
              <b className="exam-name">CAASPP</b>
              <span className="exam-full">California Smarter Balanced assessments</span>
              <span className="exam-who">California students in Grades 3 to 8</span>
              <span className="exam-tags">
                <span>Math</span>
                <span>English Language Arts</span>
                <span>Performance Tasks</span>
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
                  Spring testing window, California
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
            <Link className="exam" data-y="3 4 5 6 7 8 9 10" href="/us/exam-prep/fast">
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
                <span className="exam-yrs">Grades 3 to 10</span>
              </span>
              <b className="exam-name">FAST</b>
              <span className="exam-full">Florida Assessment of Student Thinking</span>
              <span className="exam-who">Florida students in Grades 3 to 10</span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Math</span>
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
                  Fall, winter and spring
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
            <Link className="exam" data-y="2 3 4 5 6 7 8 9 10" href="/us/exam-prep/map-growth">
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
                <span className="exam-yrs">Grades 2 to 10</span>
              </span>
              <b className="exam-name">MAP Growth</b>
              <span className="exam-full">NWEA MAP Growth</span>
              <span className="exam-who">Students whose school uses MAP to track progress</span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Language usage</span>
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
                  Fall, winter and spring, taken at school
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
            <Link className="exam" data-y="2 3 4 5 6" href="/us/exam-prep/cogat">
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
              <b className="exam-name">Gifted and Talented</b>
              <span className="exam-full">Gifted and Talented screening (for example CogAT)</span>
              <span className="exam-who">Students applying for a gifted program</span>
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
                  Varies by district
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
            <Link className="exam" data-y="8 9" href="/us/free-assessment">
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
                <span className="exam-yrs">Grades 8 and 9</span>
              </span>
              <b className="exam-name">SHSAT</b>
              <span className="exam-full">Specialized High Schools Admissions Test</span>
              <span className="exam-who">
                New York City students applying to specialized high schools
              </span>
              <span className="exam-tags">
                <span>Reading</span>
                <span>Math</span>
                <span>Revising and editing</span>
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
                  Fall of Grade 8 or 9
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
            <Link className="exam" data-y="3 4 5 6 7 8 9" href="/us/free-assessment">
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
                <span className="exam-yrs">Grades 3 to 9</span>
              </span>
              <b className="exam-name">ISEE and SSAT</b>
              <span className="exam-full">
                Independent School Entrance Exam and Secondary School Admission Test
              </span>
              <span className="exam-who">Students applying to private and independent schools</span>
              <span className="exam-tags">
                <span>Verbal reasoning</span>
                <span>Reading</span>
                <span>Quantitative reasoning</span>
                <span>Math</span>
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
                  Fall and winter test dates
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
                teach every week, so the practice adds up across the whole year.
              </p>
              <div className="spot-actions">
                <Link className="btn btn-hi" href="/us/free-assessment">
                  Book a Free Assessment
                </Link>
                <Link className="btn btn-ghost" href="/us/pricing">
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
                <span>Every topic is practiced in the format your child will meet on the day.</span>
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
                <span>Practice under real conditions so test day feels familiar, not scary.</span>
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
                No. State test and MAP Growth preparation is part of your child's regular math and
                English lessons, with extra practice and mock tests added as the test date gets
                closer.
              </p>
            </details>
            <details className="faq">
              <summary>
                When should my child start preparing?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                The earlier the better. For state tests, start a term ahead. For SHSAT, ISEE and
                SSAT, many families start 6 to 12 months before the test date.
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
                  <span>Aligned to your state standards</span>
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
