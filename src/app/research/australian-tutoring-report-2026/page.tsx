import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import BookTrialButton from "@/components/home/BookTrialButton";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/utils/schema";
import "./report.css";

export const metadata: Metadata = {
  title: "2026 State of Tutoring in Australia Report | TutorExel Research",
  description:
    "Comprehensive research report on the Australian tutoring industry in 2026. Market size, trends, parent preferences, online vs in-person data, and NAPLAN impact analysis.",
  openGraph: {
    title: "2026 State of Tutoring in Australia Report | TutorExel Research",
    description:
      "Comprehensive research report on the Australian tutoring industry in 2026. Market size, trends, parent preferences, online vs in-person data, and NAPLAN impact analysis.",
    url: "https://tutorexel.com/research/australian-tutoring-report-2026",
    siteName: "TutorExel",
    locale: "en",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 State of Tutoring in Australia Report | TutorExel Research",
    description:
      "Comprehensive research report on the Australian tutoring industry in 2026. Market size, trends, parent preferences, online vs in-person data, and NAPLAN impact analysis.",
  },
  alternates: {
    canonical: "https://tutorexel.com/research/australian-tutoring-report-2026",
  },
};

const reportSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "2026 State of Tutoring in Australia",
  description:
    "Comprehensive research report on the Australian tutoring industry in 2026. Market size, trends, parent preferences, online vs in-person data, and NAPLAN impact analysis.",
  datePublished: "2025-03-01",
  author: {
    "@type": "Organization",
    name: "TutorExel",
  },
  publisher: {
    "@type": "Organization",
    name: "TutorExel",
    url: "https://tutorexel.com",
  },
  about: {
    "@type": "Thing",
    name: "Australian Tutoring Industry",
  },
};

const tocItems = [
  { number: "1", id: "market-overview", label: "Market Overview" },
  { number: "2", id: "online-tutoring-shift", label: "The Online Tutoring Shift" },
  { number: "3", id: "what-parents-look-for", label: "What Parents Look For" },
  { number: "4", id: "naplan-assessment-trends", label: "NAPLAN and Assessment Trends" },
  { number: "5", id: "year-level-demand", label: "Year Level Demand" },
  { number: "6", id: "pricing-landscape", label: "Pricing Landscape" },
  { number: "7", id: "key-trends-2026", label: "Key Trends for 2026" },
  { number: "8", id: "methodology", label: "Methodology" },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3 4.3L6 11.6L2.7 8.3L3.7 7.3L6 9.6L12.3 3.3L13.3 4.3Z" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AustralianTutoringReport2026Page() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Research", url: "https://tutorexel.com/research" },
    { name: "2026 Australian Tutoring Report", url: "https://tutorexel.com/research/australian-tutoring-report-2026" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={reportSchema} />

      {/* ===== Banner Section ===== */}
      <section className="report-banner">
        <div className="report-banner__decoration report-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="report-banner__curve report-banner__curve--1"
          />
        </div>
        <div className="report-banner__decoration report-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="report-banner__curve report-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="report-banner__curve report-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="report-banner__content">
            <span className="report-banner__badge">Research Report</span>
            <h1 className="report-banner__title">
              2026 State of Tutoring{" "}
              <span className="report-banner__title-highlight">in Australia</span>
            </h1>
            <p className="report-banner__subtitle">
              A comprehensive look at the Australian tutoring market, parent preferences, and the shift to online learning.
            </p>
            <div className="report-banner__meta">
              <span className="report-banner__meta-item">
                <span className="report-banner__meta-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 2H3C2.4 2 2 2.4 2 3V13C2 13.6 2.4 14 3 14H13C13.6 14 14 13.6 14 13V3C14 2.4 13.6 2 13 2ZM12 12H4V5H12V12Z" fill="#757575" /></svg>
                </span>
                Published: March 2025
              </span>
              <span className="report-banner__meta-item">
                <span className="report-banner__meta-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1C4.1 1 1 4.1 1 8C1 11.9 4.1 15 8 15C11.9 15 15 11.9 15 8C15 4.1 11.9 1 8 1ZM8 13C5.2 13 3 10.8 3 8C3 5.2 5.2 3 8 3C10.8 3 13 5.2 13 8C13 10.8 10.8 13 8 13ZM8.5 4.5H7V9L11 11.3L11.8 10L8.5 8.2V4.5Z" fill="#757575" /></svg>
                </span>
                Updated for 2026
              </span>
              <span className="report-banner__meta-item">
                <span className="report-banner__meta-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1C4.7 1 2 3.7 2 7C2 10.3 4.7 13 8 13C11.3 13 14 10.3 14 7C14 3.7 11.3 1 8 1ZM10.5 9.5L9.5 10.5L8 9L6.5 10.5L5.5 9.5L7 8L5.5 6.5L6.5 5.5L8 7L9.5 5.5L10.5 6.5L9 8L10.5 9.5Z" fill="#757575" /></svg>
                </span>
                By TutorExel Research
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Table of Contents ===== */}
      <section className="report-toc">
        <div className="container">
          <div className="report-toc__inner">
            <h2 className="report-toc__title">Table of Contents</h2>
            <ol className="report-toc__list">
              {tocItems.map((item) => (
                <li key={item.id} className="report-toc__item">
                  <span className="report-toc__number">{item.number}.</span>
                  <a href={`#${item.id}`} className="report-toc__link">{item.label}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== Section 1: Market Overview ===== */}
      <section id="market-overview" className="report-section">
        <div className="container">
          <div className="report-section__inner">
            <span className="report-section__label">Section 1</span>
            <h2 className="report-section__title">Market Overview</h2>
            <p className="report-section__text">
              The Australian tutoring industry continues to experience strong growth in 2026, driven by increasing parental investment in education, the mainstream adoption of online learning, and a growing demand for curriculum-aligned support outside the classroom.
            </p>

            <div className="report-stat__grid">
              <div className="report-stat__card report-stat__card--orange">
                <div className="report-stat__value">$1.2B+</div>
                <div className="report-stat__label">Australian tutoring market value (2024)</div>
              </div>
              <div className="report-stat__card report-stat__card--green">
                <div className="report-stat__value">~6%</div>
                <div className="report-stat__label">Compound annual growth rate (CAGR)</div>
              </div>
              <div className="report-stat__card report-stat__card--orange">
                <div className="report-stat__value">1 in 7</div>
                <div className="report-stat__label">Australian students (14%) receive private tutoring</div>
              </div>
              <div className="report-stat__card report-stat__card--green">
                <div className="report-stat__value">$1.5B</div>
                <div className="report-stat__label">Projected market size by 2027</div>
              </div>
            </div>

            <div className="report-highlight">
              The online tutoring segment is growing at approximately 15% annually, significantly outpacing the overall market growth rate. This reflects a structural shift in how Australian families access educational support.
            </div>

            <p className="report-section__text">
              Australia&apos;s tutoring market is one of the most established in the Asia-Pacific region. With approximately 14% of students receiving private tutoring, the market is well-penetrated but continues to grow as families seek more specialised and accessible learning support.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 2: The Online Tutoring Shift ===== */}
      <section id="online-tutoring-shift" className="report-section report-section--alt">
        <div className="container">
          <div className="report-section__inner">
            <span className="report-section__label">Section 2</span>
            <h2 className="report-section__title">The Online Tutoring Shift</h2>
            <p className="report-section__text">
              The shift to online and hybrid tutoring, initially accelerated by the pandemic, has become a permanent feature of the Australian education landscape. What was once a temporary measure is now the preferred mode of tutoring for the majority of Australian parents.
            </p>

            <div className="report-highlight">
              67% of Australian parents now prefer online or hybrid tutoring, up from just 23% pre-pandemic. This represents a fundamental change in how families approach supplementary education.
            </div>

            <p className="report-section__text">
              Parents consistently cite several key benefits when explaining their preference for online tutoring:
            </p>

            <ul className="report-data-list">
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--orange"><CheckIcon /></span>
                <span><span className="report-data-list__strong">No commute (78% of parents):</span> Eliminating travel time is the most frequently cited advantage, saving families an average of 2-4 hours per week.</span>
              </li>
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--orange"><CheckIcon /></span>
                <span><span className="report-data-list__strong">Flexible scheduling (72%):</span> Online sessions can be booked around school, sports, and family commitments with greater ease.</span>
              </li>
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--orange"><CheckIcon /></span>
                <span><span className="report-data-list__strong">Access to better tutors (65%):</span> Geography is no longer a barrier. Families in regional and rural Australia can access the same quality tutors as those in Sydney or Melbourne.</span>
              </li>
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--green"><CheckIcon /></span>
                <span><span className="report-data-list__strong">Cost savings of $50-100/month:</span> When factoring in transport costs, parking, and time, online tutoring delivers meaningful savings for Australian families.</span>
              </li>
            </ul>

            <div className="report-highlight report-highlight--green">
              Student engagement metrics show comparable or better learning outcomes in online settings, particularly when sessions are interactive, small-group, and use digital tools that enhance participation.
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 3: What Parents Look For ===== */}
      <section id="what-parents-look-for" className="report-section">
        <div className="container">
          <div className="report-section__inner">
            <span className="report-section__label">Section 3</span>
            <h2 className="report-section__title">What Parents Look For</h2>
            <p className="report-section__text">
              Understanding parent priorities is critical for any tutoring provider. Australian parents are increasingly informed consumers who research and compare options carefully before committing to a tutoring service.
            </p>
            <p className="report-section__text">
              The following factors are ranked by how frequently Australian parents cite them as important when choosing a tutoring provider:
            </p>

            <ol className="report-ranked-list">
              <li className="report-ranked-list__item">
                <span className="report-ranked-list__rank">#1</span>
                <span className="report-ranked-list__text"><strong>Curriculum alignment</strong> - Lessons must match what is taught at school, aligned to ACARA standards.</span>
                <span className="report-ranked-list__percentage">82%</span>
              </li>
              <li className="report-ranked-list__item">
                <span className="report-ranked-list__rank">#2</span>
                <span className="report-ranked-list__text"><strong>Qualified tutors</strong> - Parents want educators with verified teaching qualifications and experience.</span>
                <span className="report-ranked-list__percentage">79%</span>
              </li>
              <li className="report-ranked-list__item">
                <span className="report-ranked-list__rank">#3</span>
                <span className="report-ranked-list__text"><strong>Progress tracking and reporting</strong> - Regular updates on what their child is learning and how they are improving.</span>
                <span className="report-ranked-list__percentage">71%</span>
              </li>
              <li className="report-ranked-list__item">
                <span className="report-ranked-list__rank">#4</span>
                <span className="report-ranked-list__text"><strong>Flexible scheduling</strong> - The ability to book, reschedule, and manage sessions around family life.</span>
                <span className="report-ranked-list__percentage">68%</span>
              </li>
              <li className="report-ranked-list__item">
                <span className="report-ranked-list__rank">#5</span>
                <span className="report-ranked-list__text"><strong>Affordable pricing</strong> - Value for money, with transparent pricing and no hidden fees.</span>
                <span className="report-ranked-list__percentage">64%</span>
              </li>
            </ol>

            <p className="report-section__text">
              These findings are consistent across metro and regional Australia, though regional families place even higher value on online access and flexible scheduling due to limited local options.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 4: NAPLAN and Assessment Trends ===== */}
      <section id="naplan-assessment-trends" className="report-section report-section--alt">
        <div className="container">
          <div className="report-section__inner">
            <span className="report-section__label">Section 4</span>
            <h2 className="report-section__title">NAPLAN and Assessment Trends</h2>
            <p className="report-section__text">
              NAPLAN (National Assessment Program - Literacy and Numeracy) remains one of the primary drivers of tutoring demand in Australia. The annual assessment, now conducted fully online, creates a predictable cycle of enrolment and preparation activity each year.
            </p>

            <div className="report-stat__grid">
              <div className="report-stat__card report-stat__card--orange">
                <div className="report-stat__value">30-50 pts</div>
                <div className="report-stat__label">Average NAPLAN score improvement for tutored students</div>
              </div>
              <div className="report-stat__card report-stat__card--green">
                <div className="report-stat__value">43%</div>
                <div className="report-stat__label">of parents seek tutoring specifically for NAPLAN preparation</div>
              </div>
            </div>

            <div className="report-highlight">
              Peak tutoring enrolment period is January to March each year, aligned with NAPLAN testing which typically takes place in March (Weeks 7-8 of Term 1). Demand can increase by up to 40% during this period compared to mid-year.
            </div>

            <p className="report-section__text">
              The data shows that structured, consistent preparation - rather than last-minute cramming - delivers the best results. Students who begin NAPLAN-focused tutoring at least 8 weeks before the test show the most significant score improvements.
            </p>

            <Link href="/naplan-preparation" className="report-section__link">
              Learn about TutorExel&apos;s NAPLAN Preparation Program <span className="report-section__link-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Year Level Demand ===== */}
      <section id="year-level-demand" className="report-section">
        <div className="container">
          <div className="report-section__inner">
            <span className="report-section__label">Section 5</span>
            <h2 className="report-section__title">Year Level Demand</h2>
            <p className="report-section__text">
              Tutoring demand varies significantly across year levels, with key transition points and assessment years driving the highest volumes of enquiries. Understanding these patterns helps families plan ahead.
            </p>

            <div className="report-stat__grid report-stat__grid--3">
              <div className="report-stat__card report-stat__card--orange">
                <div className="report-stat__value">39%</div>
                <div className="report-stat__label">Year 5 - highest demand (bridge to high school)</div>
              </div>
              <div className="report-stat__card report-stat__card--green">
                <div className="report-stat__value">24%</div>
                <div className="report-stat__label">Year 3 - first NAPLAN year</div>
              </div>
              <div className="report-stat__card report-stat__card--orange">
                <div className="report-stat__value">18%</div>
                <div className="report-stat__label">Year 7 - high school transition</div>
              </div>
            </div>

            <p className="report-section__text">
              Year 5 consistently generates the highest volume of tutoring enquiries, driven by two factors: it is a NAPLAN assessment year, and it represents the crucial bridge period before high school. Parents recognise that gaps in foundational skills at this stage can compound significantly in secondary education.
            </p>
            <p className="report-section__text">
              Year 3, as the first NAPLAN assessment year, sees a spike in demand from parents who want to ensure their child is tracking at or above national benchmarks early. Year 7, the high school transition year, is the fastest-growing segment as families seek to prepare students for the increased academic rigour of secondary school.
            </p>

            <div className="report-section__text">
              <strong>Explore our year level programs:</strong>
            </div>
            <ul className="report-data-list">
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--orange"><ArrowIcon /></span>
                <span><Link href="/subjects/year-3/maths" className="report-section__link">Year 3 Maths</Link> &nbsp;|&nbsp; <Link href="/subjects/year-3/english" className="report-section__link">Year 3 English</Link></span>
              </li>
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--orange"><ArrowIcon /></span>
                <span><Link href="/subjects/year-5/maths" className="report-section__link">Year 5 Maths</Link> &nbsp;|&nbsp; <Link href="/subjects/year-5/english" className="report-section__link">Year 5 English</Link></span>
              </li>
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--orange"><ArrowIcon /></span>
                <span><Link href="/subjects/year-7/maths" className="report-section__link">Year 7 Maths</Link> &nbsp;|&nbsp; <Link href="/subjects/year-7/english" className="report-section__link">Year 7 English</Link></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Section 6: Pricing Landscape ===== */}
      <section id="pricing-landscape" className="report-section report-section--alt">
        <div className="container">
          <div className="report-section__inner">
            <span className="report-section__label">Section 6</span>
            <h2 className="report-section__title">Pricing Landscape</h2>
            <p className="report-section__text">
              Tutoring pricing in Australia varies significantly depending on format, subject, year level, and provider type. The following data provides a snapshot of the current pricing environment for families evaluating their options.
            </p>

            <div className="report-stat__grid">
              <div className="report-stat__card report-stat__card--orange">
                <div className="report-stat__value">$60-80/hr</div>
                <div className="report-stat__label">Average cost of 1:1 private tutoring in Australia</div>
              </div>
              <div className="report-stat__card report-stat__card--green">
                <div className="report-stat__value">$30-50/hr</div>
                <div className="report-stat__label">Average cost of group tutoring sessions</div>
              </div>
            </div>

            <ul className="report-data-list">
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--green"><CheckIcon /></span>
                <span><span className="report-data-list__strong">Online platforms are typically 20-30% cheaper</span> than equivalent in-person tutoring, due to lower overhead costs and the ability to serve students across wider geographic areas.</span>
              </li>
              <li className="report-data-list__item">
                <span className="report-data-list__icon report-data-list__icon--green"><CheckIcon /></span>
                <span><span className="report-data-list__strong">Subscription and monthly models</span> are becoming increasingly popular, offering families predictable costs and encouraging consistent attendance.</span>
              </li>
            </ul>

            <div className="report-highlight report-highlight--green">
              TutorExel pricing: from $39/month for group sessions and $84/month for 1:1 tutoring. Designed to make quality, curriculum-aligned tutoring accessible to more Australian families.
            </div>

            <Link href="/pricing" className="report-section__link">
              View TutorExel&apos;s full pricing details <span className="report-section__link-arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Section 7: Key Trends for 2026 ===== */}
      <section id="key-trends-2026" className="report-section">
        <div className="container">
          <div className="report-section__inner">
            <span className="report-section__label">Section 7</span>
            <h2 className="report-section__title">Key Trends for 2026</h2>
            <p className="report-section__text">
              The Australian tutoring market is being shaped by several emerging trends in 2026. Providers and families who understand these shifts will be best positioned to deliver and receive the most effective learning support.
            </p>

            <ol className="report-trend-list">
              <li className="report-trend-list__item">
                <span className="report-trend-list__number">1</span>
                <span className="report-trend-list__text"><strong>AI-assisted learning tools supplementing tutor sessions.</strong> Adaptive learning platforms and AI-powered practice tools are being used alongside live tutoring to personalise homework and revision activities between sessions.</span>
              </li>
              <li className="report-trend-list__item">
                <span className="report-trend-list__number">2</span>
                <span className="report-trend-list__text"><strong>Increased demand for STEM tutoring.</strong> Maths and science tutoring enquiries are growing faster than other subjects, driven by parental awareness of STEM career opportunities and the updated School Curriculum emphasis on digital literacy.</span>
              </li>
              <li className="report-trend-list__item">
                <span className="report-trend-list__number">3</span>
                <span className="report-trend-list__text"><strong>Growth in co-curricular online education.</strong> Music (piano, guitar), arts, and coding are seeing increased demand through online platforms, as families consolidate their child&apos;s extracurricular activities into convenient, home-based formats.</span>
              </li>
              <li className="report-trend-list__item">
                <span className="report-trend-list__number">4</span>
                <span className="report-trend-list__text"><strong>Parents demanding more transparency and progress data.</strong> Regular reporting, parent dashboards, and data-driven insights into student progress are becoming table stakes. Providers without robust tracking are losing ground.</span>
              </li>
              <li className="report-trend-list__item">
                <span className="report-trend-list__number">5</span>
                <span className="report-trend-list__text"><strong>Shift from &quot;remedial&quot; to &quot;enrichment&quot; tutoring mindset.</strong> Tutoring is no longer seen as only for struggling students. A growing proportion of parents are seeking tutoring to extend and challenge high-performing students, reflecting a broader cultural shift toward proactive educational investment.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== Section 8: Methodology ===== */}
      <section id="methodology" className="report-section report-section--alt">
        <div className="container">
          <div className="report-section__inner">
            <span className="report-section__label">Section 8</span>
            <h2 className="report-section__title">Methodology</h2>

            <div className="report-methodology">
              <p className="report-methodology__title">About This Report</p>
              <p className="report-methodology__text">
                This report combines publicly available education data from Australian government sources (including ACARA and the Australian Bureau of Statistics), industry analysis from education research firms, and insights from TutorExel&apos;s experience serving 500+ Australian students across Years 2 to 7. Where specific figures are cited, they represent the best available estimates drawn from multiple data sources. This report is intended to provide a useful overview of the Australian tutoring market for parents, educators, and industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Report CTA Section ===== */}
      <section className="report-cta">
        <div className="container">
          <div className="report-cta__inner">
            <h2 className="report-cta__title">Want to See How TutorExel Delivers on What Australian Parents Want?</h2>
            <p className="report-cta__text">
              Curriculum-aligned tutoring, qualified educators, transparent progress tracking, and flexible scheduling - all from $39/month. See for yourself with a free assessment.
            </p>
            <div className="report-cta__actions">
              <BookTrialButton className="report-cta__btn report-cta__btn--primary">
                Book Free Assessment
              </BookTrialButton>
              <Link href="/pricing" className="report-cta__btn report-cta__btn--outline">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA Section ===== */}
      <CTA />
    </>
  );
}
