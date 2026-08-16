import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import BookTrialButton from "@/components/home/BookTrialButton";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createFaqSchema } from "@/utils/schema";
import NaplanFaq from "./NaplanFaq";
import "./naplan.css";

export const metadata: Metadata = {
  title: "NAPLAN Preparation | Expert Online Tutoring | TutorExel",
  description:
    "Prepare your child for NAPLAN with expert online tutoring aligned to the Australian Curriculum. Targeted practice for Year 3, Year 5 & Year 7 in Maths, Reading, Writing & Language Conventions.",
  openGraph: {
    title: "NAPLAN Preparation | Expert Online Tutoring | TutorExel",
    description:
      "Prepare your child for NAPLAN with expert online tutoring aligned to the Australian Curriculum. Targeted practice for Year 3, Year 5 & Year 7 in Maths, Reading, Writing & Language Conventions.",
    url: "https://tutorexel.com/naplan-preparation",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAPLAN Preparation | Expert Online Tutoring | TutorExel",
    description:
      "Prepare your child for NAPLAN with expert online tutoring aligned to the Australian Curriculum. Targeted practice for Year 3, Year 5 & Year 7 in Maths, Reading, Writing & Language Conventions.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/naplan-preparation",
  },
};

const faqData = [
  {
    question: "When is NAPLAN in 2026?",
    answer:
      "NAPLAN 2026 is scheduled for March 2026 (Weeks 7-8 of Term 1) for students in Years 3, 5, 7, and 9 across Australia.",
  },
  {
    question: "How do I prepare my child for NAPLAN?",
    answer:
      "The best way to prepare your child for NAPLAN is through structured, consistent practice that targets their specific weak areas. Start with a diagnostic assessment to identify gaps, then work through targeted exercises in reading, writing, language conventions, and numeracy. Building confidence through NAPLAN-style practice tests is also essential so your child knows what to expect on test day.",
  },
  {
    question: "Is NAPLAN tutoring worth it?",
    answer:
      "Yes, NAPLAN tutoring is worth it when it is structured and targeted. Students who receive focused preparation typically show significant improvement in their results. At TutorExel, our students benefit from personalised learning plans, regular practice tests, and progress tracking - leading to measurable gains in both confidence and performance.",
  },
  {
    question: "What subjects are tested in NAPLAN?",
    answer:
      "NAPLAN tests four key areas: Reading, Writing, Language Conventions (which covers Spelling, Grammar and Punctuation), and Numeracy. These assessments are designed to measure how students are progressing in literacy and numeracy skills against national benchmarks.",
  },
  {
    question: "Can online tutoring help with NAPLAN?",
    answer:
      "Yes, online tutoring is highly effective for NAPLAN preparation. TutorExel's approach combines live, interactive sessions with expert tutors, personalised learning plans tailored to your child's gaps, and NAPLAN-style practice tests - all delivered conveniently from home. Our structured online programs ensure consistent, curriculum-aligned preparation that builds real skills, not just test tricks.",
  },
];

const yearLevelCards = [
  {
    year: 3,
    ages: "8-9",
    description:
      "Year 3 is your child's first NAPLAN assessment. Build a strong foundation in literacy and numeracy with targeted preparation.",
    maths: "Number & Place Value, Addition & Subtraction, Shapes, Measurement, Data & Graphs",
    english: "Reading Comprehension, Narrative Writing, Spelling, Grammar & Punctuation",
  },
  {
    year: 5,
    ages: "10-11",
    description:
      "Year 5 NAPLAN expects deeper reasoning and more complex writing. Ensure your child is ready for this step up.",
    maths: "Fractions & Decimals, Multiplication & Division, Algebra Patterns, Geometry, Statistics",
    english: "Inferential Reading, Persuasive Writing, Vocabulary, Sentence Structure, Spelling Patterns",
  },
  {
    year: 7,
    ages: "12-13",
    description:
      "Year 7 NAPLAN assesses high school readiness. Prepare your child for more advanced literacy and numeracy challenges.",
    maths: "Algebra, Ratios & Rates, Equations, Geometry & Measurement, Probability & Data Analysis",
    english: "Analytical Reading, Argumentative Writing, Advanced Grammar, Spelling Conventions, Vocabulary in Context",
  },
];

const prepareSteps = [
  {
    number: 1,
    title: "Free Diagnostic Assessment",
    description:
      "Your child takes a comprehensive diagnostic test so we identify exactly where the gaps are before NAPLAN.",
  },
  {
    number: 2,
    title: "Targeted Practice on Weak Areas",
    description:
      "We create a personalised plan focusing on your child's specific weaknesses in reading, writing, and numeracy.",
  },
  {
    number: 3,
    title: "NAPLAN-Style Practice Tests",
    description:
      "Regular practice tests in NAPLAN format so your child builds familiarity, speed, and confidence for test day.",
  },
  {
    number: 4,
    title: "Progress Tracking & Reports",
    description:
      "Detailed progress reports and parent updates so you always know how your child is improving.",
  },
];

export default function NaplanPreparationPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "NAPLAN Preparation", url: "https://tutorexel.com/naplan-preparation" },
  ]);

  const faqSchema = createFaqSchema(faqData);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ===== Banner Section ===== */}
      <section className="naplan-banner">
        <div className="naplan-banner__decoration naplan-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="naplan-banner__curve naplan-banner__curve--1"
          />
        </div>
        <div className="naplan-banner__decoration naplan-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="naplan-banner__curve naplan-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="naplan-banner__curve naplan-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="naplan-banner__content">
            <h1 className="naplan-banner__title">
              NAPLAN Preparation{" "}
              <br />
              <span className="naplan-banner__title-highlight">Made Simple</span>{" "}
              <span className="naplan-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="naplan-banner__subtitle">
              Expert online tutoring aligned to the Australian Curriculum. Targeted NAPLAN preparation for Year 3, Year 5, and Year 7 students with personalised learning plans and practice tests.
            </p>
            <div className="naplan-banner__actions">
              <BookTrialButton className="btn btn-primary btn-lg">
                Book Free Assessment
              </BookTrialButton>
              <Link href="/pricing" className="btn btn-outline btn-lg">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What is NAPLAN Section ===== */}
      <section className="naplan-what section">
        <div className="container">
          <div className="naplan-what__header">
            <p className="naplan-what__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="naplan-what__label-icon" />
              Understanding NAPLAN
            </p>
            <h2 className="naplan-what__title">What Is NAPLAN?</h2>
          </div>

          <div className="naplan-what__content">
            <p className="naplan-what__answer">
              NAPLAN (National Assessment Program - Literacy and Numeracy) is Australia&apos;s annual standardised test for students in Years 3, 5, 7, and 9. It assesses reading, writing, language conventions (spelling, grammar and punctuation), and numeracy skills against national benchmarks.
            </p>
            <p className="naplan-what__details">
              Conducted online in March each year, NAPLAN helps parents, teachers, and schools understand how students are progressing in essential literacy and numeracy skills. Results are reported against national proficiency standards, giving families a clear picture of where their child stands compared to expected levels.
            </p>
            <p className="naplan-what__details">
              While NAPLAN is not a pass-or-fail test, strong results indicate that your child has the foundational skills needed for their year level. Preparation is key - students who practise regularly and address their weak areas tend to perform significantly better and feel more confident on test day.
            </p>
            <p className="naplan-what__details">
              Learn more about why national assessments matter in our guide:{" "}
              <Link href="/blog/why-national-assessments-matter-naplan-icas" className="naplan-what__link">
                Why National Assessments Like NAPLAN &amp; ICAS Matter
              </Link>
              . You can also read our practical tips on{" "}
              <Link href="/blog/stress-to-strategy-naplan-icas-prep-saves-time" className="naplan-what__link">
                turning NAPLAN stress into strategy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===== Year Level Cards Section ===== */}
      <section className="naplan-years">
        <div className="container">
          <div className="naplan-years__header">
            <p className="naplan-years__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="naplan-years__label-icon" />
              NAPLAN Year Levels
            </p>
            <h2 className="naplan-years__title">Prepare for Every NAPLAN Year</h2>
            <p className="naplan-years__subtitle">
              NAPLAN is sat in Years 3, 5, and 7. Choose your child&apos;s year level to see what&apos;s tested and start preparing.
            </p>
          </div>

          <div className="naplan-years__grid">
            {yearLevelCards.map((level) => (
              <div key={level.year} className="naplan-years__card">
                <div className="naplan-years__card-header">
                  <span className="naplan-years__card-year">YEAR {level.year}</span>
                  <span className="naplan-years__card-ages">(Ages {level.ages})</span>
                </div>
                <p className="naplan-years__card-description">{level.description}</p>
                <div className="naplan-years__card-subjects">
                  <div className="naplan-years__card-subject-group">
                    <p className="naplan-years__card-subject-title">Numeracy:</p>
                    <p className="naplan-years__card-subject-list">{level.maths}</p>
                  </div>
                  <div className="naplan-years__card-subject-group">
                    <p className="naplan-years__card-subject-title">Literacy:</p>
                    <p className="naplan-years__card-subject-list">{level.english}</p>
                  </div>
                </div>
                <div className="naplan-years__card-buttons">
                  <div className="naplan-years__card-links">
                    <Link
                      href={`/subjects/year-${level.year}/english`}
                      className="naplan-years__card-btn naplan-years__card-btn--english"
                    >
                      English
                    </Link>
                    <Link
                      href={`/subjects/year-${level.year}/maths`}
                      className="naplan-years__card-btn naplan-years__card-btn--maths"
                    >
                      Maths
                    </Link>
                  </div>
                  <BookTrialButton className="naplan-years__card-btn naplan-years__card-btn--cta">
                    Prepare Now
                  </BookTrialButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How We Prepare Section ===== */}
      <section className="naplan-prepare">
        <div className="container">
          <div className="naplan-prepare__header">
            <p className="naplan-prepare__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="naplan-prepare__label-icon" />
              Our NAPLAN Preparation Process
            </p>
            <h2 className="naplan-prepare__title">How We Prepare Your Child for NAPLAN</h2>
            <p className="naplan-prepare__subtitle">
              A proven 4-step approach that identifies gaps, builds skills, and delivers measurable improvement.
            </p>
          </div>

          <div className="naplan-prepare__grid">
            {prepareSteps.map((step) => (
              <div className="naplan-prepare__card" key={step.number}>
                <div className="naplan-prepare__card-number">{step.number}</div>
                <h3 className="naplan-prepare__card-title">{step.title}</h3>
                <p className="naplan-prepare__card-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="naplan-faq section">
        <div className="container">
          <div className="naplan-faq__header">
            <p className="naplan-faq__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="naplan-faq__label-icon" />
              NAPLAN Questions Answered
            </p>
            <h2 className="naplan-faq__title">Frequently Asked Questions About NAPLAN</h2>
            <p className="naplan-faq__subtitle">
              Find answers to the most common questions parents ask about NAPLAN preparation and tutoring.
            </p>
          </div>

          <NaplanFaq faqData={faqData} />
        </div>
      </section>

      {/* ===== Internal Links Section ===== */}
      <section className="naplan-links">
        <div className="container">
          <div className="naplan-links__content">
            <h2 className="naplan-links__title">Explore Related Resources</h2>
            <div className="naplan-links__grid">
              <Link href="/subjects/year-3/maths" className="naplan-links__link">Year 3 Maths</Link>
              <Link href="/subjects/year-3/english" className="naplan-links__link">Year 3 English</Link>
              <Link href="/subjects/year-5/maths" className="naplan-links__link">Year 5 Maths</Link>
              <Link href="/subjects/year-5/english" className="naplan-links__link">Year 5 English</Link>
              <Link href="/subjects/year-7/maths" className="naplan-links__link">Year 7 Maths</Link>
              <Link href="/subjects/year-7/english" className="naplan-links__link">Year 7 English</Link>
              <Link href="/free-assessment" className="naplan-links__link">Free Assessment</Link>
              <Link href="/pricing" className="naplan-links__link">Pricing</Link>
              <Link href="/blog/why-national-assessments-matter-naplan-icas" className="naplan-links__link">Why NAPLAN Matters</Link>
              <Link href="/blog/stress-to-strategy-naplan-icas-prep-saves-time" className="naplan-links__link">NAPLAN Prep Strategy</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <CTA />
    </>
  );
}
