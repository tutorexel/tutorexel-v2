/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import ExamPrepInteractions from "@/components/exam-prep/ExamPrepInteractions";
import "./online-tutoring.css";

export const metadata: Metadata = {
  title: "Online Tutoring in Canada by City | TutorExel",
  description:
    "Live online math, English and science tutoring for Grades 2 to 10 across Toronto, Ottawa, Mississauga, Brampton, Vancouver, Calgary and Edmonton. Book a trial.",
  alternates: { canonical: "https://www.tutorexel.com/ca/online-tutoring" },
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
        name: "Online Tutoring",
        item: "https://www.tutorexel.com/ca/online-tutoring",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online tutoring in Canada",
    provider: {
      "@type": "EducationalOrganization",
      name: "TutorExel",
      url: "https://www.tutorexel.com",
    },
    areaServed: { "@type": "Country", name: "Canada" },
    url: "https://www.tutorexel.com/ca/online-tutoring",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does TutorExel teach in my city?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lessons run live online, so any family in Canada can join from home. The seven cities above have their own guides, and we also teach students in Winnipeg, Halifax, Saskatoon, Victoria and smaller communities.",
        },
      },
      {
        "@type": "Question",
        name: "What time are lessons held?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lessons run after school and on weekends, set to your local time zone, so a student in Vancouver and a student in Toronto each get a time that suits their day.",
        },
      },
      {
        "@type": "Question",
        name: "Is the teaching aligned to our provincial curriculum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lessons follow your province's curriculum and school grade, for example the Ontario Curriculum and the B.C. Curriculum.",
        },
      },
      {
        "@type": "Question",
        name: "How large are the groups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lessons are one-on-one or in small groups of up to 3 students.",
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

export default function CaOnlineTutoringCitiesPage() {
  return (
    <div className="xp xp-ca-cities">
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
            <span aria-current="page">Online Tutoring</span>
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
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"></path>
            </svg>{" "}
            Live online lessons for every Canadian province
          </span>
          <h1 className="hub-title">
            Online Tutoring for Families <span className="grad">Across Canada</span>
          </h1>
          <p className="hub-sub">
            Live math, English and science lessons for Grades 2 to 10, matched to your province.
            Pick your city to see how lessons fit your school week.
          </p>
          <label className="search hub-search" htmlFor="cq">
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
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-4-4"></path>
            </svg>
            <span className="sr">Search for your city</span>
            <input autoComplete="off" id="cq" placeholder="Search for your city" type="search" />
          </label>
          <ul className="hero-stats">
            <li>
              <span className="hs-ic">
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
              <span>
                <b>7</b> city guides
              </span>
            </li>
            <li>
              <span className="hs-ic">
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
                Grades <b>2 to 10</b>
              </span>
            </li>
            <li>
              <span className="hs-ic">
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
                Lessons in <b>your time zone</b>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section aria-labelledby="cH" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 id="cH">Pick Your City</h2>
              <p className="muted" id="cStatus">
                7 cities
              </p>
            </div>
            <div aria-label="Filter by province" className="atabs" role="toolbar">
              <button aria-pressed="true" className="atab" data-a="all">
                All
              </button>
              <button aria-pressed="false" className="atab" data-a="ON">
                ON
              </button>
              <button aria-pressed="false" className="atab" data-a="BC">
                BC
              </button>
              <button aria-pressed="false" className="atab" data-a="AB">
                AB
              </button>
            </div>
          </div>
          <div className="cities" id="cities">
            <Link
              className="city"
              data-area="ON"
              data-name="toronto on"
              href="/ca/online-tutoring/toronto"
            >
              <span className="city-top">
                <span className="city-pin">
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
                <span className="city-area">ON</span>
              </span>
              <b className="city-name">Toronto</b>
              <span className="city-desc">
                Ontario Curriculum lessons, with EQAO practice for Grades 3, 6 and 9.
              </span>
              <span className="city-foot">
                <span className="city-time">
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
                  <span data-tz="America/Toronto">--:--</span> local
                </span>
                <span className="city-go">
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
            <Link
              className="city"
              data-area="BC"
              data-name="vancouver bc"
              href="/ca/online-tutoring/vancouver"
            >
              <span className="city-top">
                <span className="city-pin">
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
                <span className="city-area">BC</span>
              </span>
              <b className="city-name">Vancouver</b>
              <span className="city-desc">
                B.C. Curriculum lessons, with Foundation Skills Assessment practice for Grades 4 and
                7.
              </span>
              <span className="city-foot">
                <span className="city-time">
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
                  <span data-tz="America/Vancouver">--:--</span> local
                </span>
                <span className="city-go">
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
            <Link
              className="city"
              data-area="AB"
              data-name="calgary ab"
              href="/ca/online-tutoring/calgary"
            >
              <span className="city-top">
                <span className="city-pin">
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
                <span className="city-area">AB</span>
              </span>
              <b className="city-name">Calgary</b>
              <span className="city-desc">
                Alberta school grades covered, with math and English built around the provincial
                program of studies.
              </span>
              <span className="city-foot">
                <span className="city-time">
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
                  <span data-tz="America/Edmonton">--:--</span> local
                </span>
                <span className="city-go">
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
            <Link
              className="city"
              data-area="AB"
              data-name="edmonton ab"
              href="/ca/online-tutoring/edmonton"
            >
              <span className="city-top">
                <span className="city-pin">
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
                <span className="city-area">AB</span>
              </span>
              <b className="city-name">Edmonton</b>
              <span className="city-desc">
                Alberta school grades covered, with math and English built around the provincial
                program of studies.
              </span>
              <span className="city-foot">
                <span className="city-time">
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
                  <span data-tz="America/Edmonton">--:--</span> local
                </span>
                <span className="city-go">
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
            <Link
              className="city"
              data-area="ON"
              data-name="ottawa on"
              href="/ca/online-tutoring/ottawa"
            >
              <span className="city-top">
                <span className="city-pin">
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
                <span className="city-area">ON</span>
              </span>
              <b className="city-name">Ottawa</b>
              <span className="city-desc">
                Ontario Curriculum lessons, with EQAO practice for Grades 3, 6 and 9.
              </span>
              <span className="city-foot">
                <span className="city-time">
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
                  <span data-tz="America/Toronto">--:--</span> local
                </span>
                <span className="city-go">
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
            <Link
              className="city"
              data-area="ON"
              data-name="mississauga on"
              href="/ca/online-tutoring/mississauga"
            >
              <span className="city-top">
                <span className="city-pin">
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
                <span className="city-area">ON</span>
              </span>
              <b className="city-name">Mississauga</b>
              <span className="city-desc">
                Ontario Curriculum lessons, with EQAO practice for Grades 3, 6 and 9.
              </span>
              <span className="city-foot">
                <span className="city-time">
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
                  <span data-tz="America/Toronto">--:--</span> local
                </span>
                <span className="city-go">
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
            <Link
              className="city"
              data-area="ON"
              data-name="brampton on"
              href="/ca/online-tutoring/brampton"
            >
              <span className="city-top">
                <span className="city-pin">
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
                <span className="city-area">ON</span>
              </span>
              <b className="city-name">Brampton</b>
              <span className="city-desc">
                Ontario Curriculum lessons, with EQAO practice for Grades 3, 6 and 9.
              </span>
              <span className="city-foot">
                <span className="city-time">
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
                  <span data-tz="America/Toronto">--:--</span> local
                </span>
                <span className="city-go">
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
            <div className="city city--any">
              <span className="city-pin city-pin--solid">
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
              <b className="city-name">Can't Find Your City?</b>
              <span className="city-desc">
                Families in Montreal, Winnipeg, Halifax, Saskatoon, Victoria and smaller communities
                learn with us too. Every lesson is live and online.
              </span>
              <Link className="btn btn-hi" href="/ca/free-assessment">
                Book a Free Assessment
              </Link>
            </div>
          </div>
          <p className="empty-msg" hidden id="cEmpty">
            No city page matches that search yet, but we still teach you online.{" "}
            <Link href="/ca/free-assessment">Book a free assessment</Link>.
          </p>
        </div>
      </section>
      <section aria-labelledby="wH" className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="wH">
              Why Canadian Families Choose Online Tutoring Over Travelling to a Centre
            </h2>
          </div>
          <div className="tiles4">
            <div className="tile4">
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
                  <path d="M5 16h14M6 16l1.5-6h9L18 16M7 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                </svg>
              </span>
              <b>No After-School Traffic</b>
              <p>
                Lessons start at home, so your evenings stay calm and there is no drive between
                school, hockey practice and a tutoring centre.
              </p>
            </div>
            <div className="tile4">
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
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M13.5 20c.3-2.8 2.1-4.5 4.5-4.5 2.2 0 4 1.8 4 4.5"></path>
                </svg>
              </span>
              <b>One-on-One or Small Groups</b>
              <p>
                Your child gets real attention from a qualified tutor, never lost in a crowded room.
              </p>
            </div>
            <div className="tile4">
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
                  <rect height="12" rx="2" width="13" x="3" y="6"></rect>
                  <path d="m16 10 5-3v10l-5-3"></path>
                </svg>
              </span>
              <b>Every Lesson Recorded</b>
              <p>
                Missed a class or want to go over a tricky topic again? Replay any session when it
                suits you.
              </p>
            </div>
            <div className="tile4">
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
              <b>Progress You Can See</b>
              <p>
                Regular quizzes and parent reports show what your child has mastered and what is
                next.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="fH" className="sec">
        <div className="wrap faq-wrap">
          <div>
            <h2 id="fH">Parent Questions, Answered</h2>
            <p className="muted">
              Still unsure? Message us on WhatsApp and a real person will get back to you.
            </p>
            <a className="btn btn-wa" href="https://wa.me/12067977387">
              Message Us on WhatsApp
            </a>
          </div>
          <div className="faqs">
            <details className="faq" open>
              <summary>
                Does TutorExel teach in my city?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. Lessons run live online, so any family in Canada can join from home. The five
                cities above have their own guides, and we also teach students in Winnipeg, Halifax,
                Saskatoon, Victoria and smaller communities.
              </p>
            </details>
            <details className="faq">
              <summary>
                What time are lessons held?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Lessons run after school and on weekends, set to your local time zone, so a student
                in Vancouver and a student in Toronto each get a time that suits their day.
              </p>
            </details>
            <details className="faq">
              <summary>
                Is the teaching aligned to our provincial curriculum?
                <span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>
                Yes. Lessons follow your province's curriculum and school grade, for example the
                Ontario Curriculum and the B.C. Curriculum.
              </p>
            </details>
            <details className="faq">
              <summary>
                How large are the groups?<span aria-hidden="true" className="faq-ic"></span>
              </summary>
              <p>Lessons are one-on-one or in small groups of up to 3 students.</p>
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
