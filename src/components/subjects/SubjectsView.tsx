import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import CTA from "@/components/home/CTA";
import { FREE_ASSESSMENT_URL } from "@/utils/externalLinks";
import { createBreadcrumbSchema } from "@/utils/schema";
import { getSubjectHref, getYearHubHref } from "@/utils/regionalLinks";
import { getRegionConfig, type RegionCode } from "@/data/regions";
import { AU_HOME_COPY } from "@/data/copy/au-home";
import { CA_HOME_COPY } from "@/data/copy/ca-home";
import { NZ_HOME_COPY } from "@/data/copy/nz-home";
import { US_HOME_COPY } from "@/data/copy/us-home";
import "@/app/subjects/subjects.css";

const defaultYearLevels = [
  {
    year: 2,
    ages: "7-8",
    description: "Maths: Number & place value, addition, subtraction, fractions, 2D shapes, patterns. English: Phonics, reading comprehension, narrative writing, grammar basics, spelling patterns.",
  },
  {
    year: 3,
    ages: "8-9",
    description: "Maths: Place value to 1000, regrouping, skip counting, angles, symmetry, chance. English: Reading fluency, informative writing, parts of speech, persuasive language, poetry.",
    featured: true,
  },
  {
    year: 4,
    ages: "9-10",
    description: "Maths: Multiplication & division strategies, fractions, money, 3D objects, capacity, data interpretation. English: Creative writing, text types, verb tenses, inference, context clues.",
  },
  {
    year: 5,
    ages: "10-11",
    description: "Maths: Multi-digit operations, decimals, perimeter & area, probability, financial maths. English: Persuasive writing, critical thinking, literature study, media literacy, report writing.",
  },
  {
    year: 6,
    ages: "11-12",
    description: "Maths: Fractions & decimals, algebra, geometry, data analysis, multi-step problem solving. English: Narrative & persuasive essays, advanced grammar, research skills, reading analysis.",
  },
  {
    year: 7,
    ages: "12-13",
    description: "Maths: Integers, ratios, equations, coordinate geometry, statistics. English: Analytical writing, literary analysis, complex text types, advanced punctuation, oral presentations.",
  },
];

export default function SubjectsView({ region }: { region: RegionCode }) {
  const regConfig = getRegionConfig(region);
  const basePath = regConfig.basePath;
  const yearPrefix = regConfig.yearLabel.toUpperCase();
  const isAu = region === "au";
  const isCa = region === "ca";
  const isNz = region === "nz";
  const isUs = region === "us";

  const displayedYearLevels = isUs
    ? US_HOME_COPY.yearLevels.years
    : isNz
    ? NZ_HOME_COPY.yearLevels.years
    : isCa
    ? CA_HOME_COPY.yearLevels.years
    : isAu
    ? AU_HOME_COPY.yearLevels.years
    : defaultYearLevels;

  const subjectsBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: `https://www.tutorexel.com${basePath}` },
    { name: "Subjects", url: `https://www.tutorexel.com${basePath}/subjects` },
  ]);

  const heroSubtitle = isUs
    ? "Math, English and Science programs built to match what your child is learning at school, delivered as 40 live sessions across 4 quarters."
    : isCa
    ? "Math, English and Science programs built to match what your child is learning at school, delivered as 40 live sessions across 4 terms."
    : isNz
    ? "Maths, English and Science programmes built to match what your child is learning at school, delivered as 40 live sessions across 4 terms."
    : "Maths, English and Science programs built to match what your child is learning at school, delivered as 40 live sessions across 4 terms.";

  const curriculumCardDesc = isUs
    ? "Every lesson follows Common Core and state standards, matched to your child's grade level"
    : isCa
    ? "Every lesson follows your provincial curriculum, matched to your child's grade level"
    : isNz
    ? "Every lesson follows the New Zealand Curriculum, matched to your child's Year level"
    : "Every lesson follows the Australian Curriculum, matched to your child's Year level";

  const structuredSteps = isUs
    ? [
        {
          number: 1,
          title: "Assessment",
          description: "A free diagnostic test shows us where your child is up to, so we start in the right place.",
        },
        {
          number: 2,
          title: "Custom Plan",
          description: "We build a personalized learning plan around your child's grade level and your child's school curriculum.",
        },
        {
          number: 3,
          title: "40 Structured Sessions",
          description: "4 quarters of 10 sessions each, covering Common Core and state curriculum standards.",
        },
        {
          number: 4,
          title: "Track Progress",
          description: "Quarterly tests, progress reports, and parent updates keep everyone on the same page.",
        },
      ]
    : isCa
    ? [
        {
          number: 1,
          title: "Assessment",
          description: "A free diagnostic test shows us where your child is up to, so we start in the right place.",
        },
        {
          number: 2,
          title: "Custom Plan",
          description: "We build a personalized learning plan around your child's grade level and your child's school curriculum.",
        },
        {
          number: 3,
          title: "40 Structured Sessions",
          description: "4 terms of 10 sessions each, covering the full year of your provincial curriculum.",
        },
        {
          number: 4,
          title: "Track Progress",
          description: "Term tests, progress reports and parent updates keep everyone on the same page.",
        },
      ]
    : [
        {
          number: 1,
          title: "Assessment",
          description: "Your child takes a free diagnostic test so we know exactly where to start.",
        },
        {
          number: 2,
          title: "Custom Plan",
          description: `We create a ${regConfig.spellingPersonalised} learning plan aligned to their year level and curriculum.`,
        },
        {
          number: 3,
          title: "40 Structured Sessions",
          description: "4 terms of 10 sessions each: covering every curriculum standard for their year.",
        },
        {
          number: 4,
          title: "Track Progress",
          description: "Term tests, progress reports, and parent updates keep everyone on the same page.",
        },
      ];

  const learningFeatures = isUs
    ? [
        {
          title: "Curriculum Aligned:",
          description: "Every session maps to Common Core and state curriculum standards.",
        },
        {
          title: "Small Groups or 1-on-1:",
          description: "Up to 3 students per group, or private sessions.",
        },
        {
          title: "Weekly Practice:",
          description: "Worksheets sent after every session to lock in learning.",
        },
        {
          title: "Quarterly Tests:",
          description: "Assessments every quarter to measure growth and mastery.",
        },
        {
          title: "Comprehensive Reviews:",
          description: "Regular evaluations that benchmark your child's progress against grade standards.",
        },
      ]
    : isCa
    ? [
        {
          title: "Curriculum Aligned:",
          description: "Every session maps to your provincial curriculum.",
        },
        {
          title: "Small Groups or 1-on-1:",
          description: "Up to 3 students per group, or private sessions.",
        },
        {
          title: "Weekly Practice:",
          description: "Worksheets sent after every session to lock in learning.",
        },
        {
          title: "Term Tests:",
          description: "Formal assessments every term to measure growth.",
        },
        {
          title: "Comprehensive Reviews:",
          description: "Evaluations that benchmark your child's progress against provincial standards.",
        },
      ]
    : [
        {
          title: "Curriculum Aligned:",
          description: `Every session maps to your child's curriculum standards`,
        },
        {
          title: "Small Groups or 1-on-1:",
          description: "Maximum 3 students per group, or private sessions",
        },
        {
          title: "Weekly Practice:",
          description: "Worksheets sent after every session for reinforcement",
        },
        {
          title: "Term Tests:",
          description: "Formal assessments every term to measure growth",
        },
        {
          title: "Comprehensive Reviews:",
          description: "Biannual comprehensive reviews that benchmark your child's progress",
        },
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subjectsBreadcrumbSchema) }}
      />
      <section className="subject-banner">
        <div className="subject-banner__decoration subject-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="subject-banner__curve subject-banner__curve--1"
          />
        </div>
        <div className="subject-banner__decoration subject-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="subject-banner__curve subject-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="subject-banner__curve subject-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="subject-banner__content">
            <h1 className="subject-banner__title">
              {isUs || isCa ? (
                <>
                  Complete{" "}
                  <span className="subject-banner__title-highlight">
                    Curriculum Tutoring
                  </span>{" "}
                  for Grades 2 to 10
                </>
              ) : (
                <>
                  Complete{" "}
                  <span className="subject-banner__title-highlight">
                    Curriculum Tutoring
                  </span>{" "}
                  for Years 2 to 10
                </>
              )}
              <span className="subject-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </h1>
            <p className="subject-banner__subtitle">{heroSubtitle}</p>

            <div className="subject-banner__features">
              <div className="subject-banner__feature-card">
                <h3 className="subject-banner__feature-title">Small Groups or 1-on-1</h3>
                <p className="subject-banner__feature-desc">
                  Up to 3 students per group for {regConfig.spellingPersonalised} attention, or private 1-on-1 sessions
                </p>
              </div>
              <div className="subject-banner__feature-card">
                <h3 className="subject-banner__feature-title">60-Minute Live Sessions</h3>
                <p className="subject-banner__feature-desc">
                  4 structured sessions a month per subject with a dedicated tutor
                </p>
              </div>
              <div className="subject-banner__feature-card">
                <h3 className="subject-banner__feature-title">Curriculum-Aligned Learning</h3>
                <p className="subject-banner__feature-desc">{curriculumCardDesc}</p>
              </div>
            </div>

            <div className="subject-banner__checklist">
              <span className="subject-banner__check-item">{"\u2713"} Structured lesson plans</span>
              <span className="subject-banner__check-item">{"\u2713"} Weekly practice worksheets</span>
              <span className="subject-banner__check-item">{"\u2713"} Progress reports for parents</span>
              <span className="subject-banner__check-item">{"\u2713"} Free diagnostic assessment</span>
              <span className="subject-banner__check-item">{"\u2713"} Qualified tutors who adapt lessons to your child&apos;s school curriculum</span>
              <span className="subject-banner__check-item">{"\u2713"} Flexible scheduling</span>
            </div>

            <div className="subject-banner__actions">
              <a href={FREE_ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Book a Free Assessment
              </a>
              <RegionLink href="/pricing" region={region} className="btn btn-outline btn-lg">
                Join Now
              </RegionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="subject-years section">
        <div className="container">
          <div className="subject-years__header">
            <p className="subject-years__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="subject-years__label-icon" />
              Choose Your {regConfig.yearLabel} Level
            </p>
            <h2 className="subject-years__title">
              Find Your Child&apos;s {regConfig.yearLabel} Level
            </h2>
            <p className="subject-years__subtitle">
              {isUs
                ? "Every level includes Math, English and Science programs, across 4 quarters of 10 sessions each."
                : isCa
                ? "Every level includes Math, English and Science programs, across 4 terms of 10 sessions each."
                : isNz
                ? "Every level includes Maths, English and Science programmes, across 4 terms of 10 sessions each."
                : "Each level includes Maths, English, and Science programs, structured across 4 terms with 10 sessions each."}
            </p>
          </div>

          <div className="subject-years__grid">
            {displayedYearLevels.map((level) => (
              <div
                key={level.year}
                className={`subject-years__card ${level.featured ? "subject-years__card--featured" : ""}`}
              >
                <div className="subject-years__card-header">
                  <RegionLink
                    href={getYearHubHref(level.year, region)}
                    region={region}
                    className={`subject-years__card-year ${level.featured ? "subject-years__card-year--featured" : ""}`}
                    style={{ textDecoration: "none" }}
                  >
                    {yearPrefix} {level.year}
                  </RegionLink>
                  <span className="subject-years__card-ages">(Ages {level.ages})</span>
                </div>
                <p className="subject-years__card-description">{level.description}</p>
                <div className="subject-years__card-buttons">
                  <RegionLink
                    href={getSubjectHref(level.year, "english", region)}
                    region={region}
                    className="subject-years__card-btn subject-years__card-btn--english"
                  >
                    English
                  </RegionLink>
                  <RegionLink
                    href={getSubjectHref(level.year, "math", region)}
                    region={region}
                    className="subject-years__card-btn subject-years__card-btn--maths"
                  >
                    {regConfig.mathLabel}
                  </RegionLink>
                  <RegionLink
                    href={getSubjectHref(level.year, "science", region)}
                    region={region}
                    className="subject-years__card-btn subject-years__card-btn--science"
                  >
                    Science
                  </RegionLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="subject-structured">
        <div className="container">
          <div className="subject-structured__grid">
            <div className="subject-structured__left">
              <p className="subject-structured__label">
                <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="subject-structured__label-icon" />
                How It Works
              </p>
              <h2 className="subject-structured__title">
                {isCa ? "Built for Real Progress" : "Structured for Real Results"}
              </h2>
              <div className="subject-structured__steps">
                {structuredSteps.map((step) => (
                  <div key={step.number} className="subject-structured__step">
                    <div className="subject-structured__step-number">{step.number}</div>
                    <div className="subject-structured__step-content">
                      <h4 className="subject-structured__step-title">{step.title}</h4>
                      <p className="subject-structured__step-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="subject-structured__right">
              <div className="subject-structured__card">
                <h3 className="subject-structured__card-title">Every Session Includes</h3>
                <div className="subject-structured__features">
                  {learningFeatures.map((feat) => (
                    <div key={feat.title} className="subject-structured__feature">
                      <span className="subject-structured__feature-check">{"✓"}</span>
                      <div>
                        <strong>{feat.title}</strong> {feat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA region={region} />
    </>
  );
}
