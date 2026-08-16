"use client";

import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/home/CTA';
import { FREE_ASSESSMENT_URL } from '@/utils/externalLinks';
import BookTrialButton from '@/components/home/BookTrialButton';
import { createBreadcrumbSchema } from '@/utils/schema';
import './subjects.css';

const structuredSteps = [
  {
    number: 1,
    title: 'Assessment',
    description: 'Your child takes a free diagnostic test so we know exactly where to start.',
  },
  {
    number: 2,
    title: 'Custom Plan',
    description: 'We create a personalised learning plan aligned to their year level and curriculum.',
  },
  {
    number: 3,
    title: '40 Structured Sessions',
    description: '4 terms of 10 sessions each - covering every curriculum standard for their year.',
  },
  {
    number: 4,
    title: 'Track Progress',
    description: 'Term tests, progress reports, and parent updates keep everyone on the same page.',
  },
];

const learningFeatures = [
  {
    title: 'ACARA Aligned:',
    description: 'Every session maps to the Australian National Curriculum',
  },
  {
    title: 'Small Groups or 1-on-1:',
    description: 'Maximum 3 students per group, or private sessions',
  },
  {
    title: 'Weekly Practice:',
    description: 'Worksheets sent after every session for reinforcement',
  },
  {
    title: 'Term Tests:',
    description: 'Formal assessments every term to measure growth',
  },
  {
    title: 'Mega Exams:',
    description: "Biannual comprehensive exams that benchmark your child's progress",
  },
];

const yearLevels = [
  {
    year: 2,
    ages: '7-8',
    description: 'Maths: Number & place value, addition, subtraction, fractions, 2D shapes, patterns. English: Phonics, reading comprehension, narrative writing, grammar basics, spelling patterns.',
  },
  {
    year: 3,
    ages: '8-9',
    description: 'Maths: Place value to 1000, regrouping, skip counting, angles, symmetry, chance. English: Reading fluency, informative writing, parts of speech, persuasive language, poetry.',
    featured: true,
  },
  {
    year: 4,
    ages: '9-10',
    description: 'Maths: Multiplication & division strategies, fractions, money, 3D objects, capacity, data interpretation. English: Creative writing, text types, verb tenses, inference, context clues.',
  },
  {
    year: 5,
    ages: '10-11',
    description: 'Maths: Multi-digit operations, decimals, perimeter & area, probability, financial maths. English: Persuasive writing, critical thinking, literature study, media literacy, report writing.',
  },
  {
    year: 6,
    ages: '11-12',
    description: 'Maths: Fractions & decimals, algebra, geometry, data analysis, multi-step problem solving. English: Narrative & persuasive essays, advanced grammar, research skills, reading analysis.',
  },
  {
    year: 7,
    ages: '12-13',
    description: 'Maths: Integers, ratios, equations, coordinate geometry, statistics. English: Analytical writing, literary analysis, complex text types, advanced punctuation, oral presentations.',
  },
];

export default function SubjectsPage() {
  const subjectsBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Subjects", url: "https://tutorexel.com/subjects" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subjectsBreadcrumbSchema) }}
      />
      {/* ===== Banner Section (Same as About page) ===== */}
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
              What is{' '}
              <span className="subject-banner__title-highlight">Live Online Coaching?</span>{' '}
              <span className="subject-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="subject-banner__subtitle">
              Real-time, interactive tutoring sessions where your child learns one-to-one or in groups with a qualified Australian curriculum tutor. Not pre-recorded videos. Not worksheets. A real teacher, live, focused entirely on your child.
            </p>

            <div className="subject-banner__features">
              <div className="subject-banner__feature-card">
                <h3 className="subject-banner__feature-title">1:1 or Small Group</h3>
                <p className="subject-banner__feature-desc">Personalised 1:1 sessions or small groups of max 3 students per tutor</p>
              </div>
              <div className="subject-banner__feature-card">
                <h3 className="subject-banner__feature-title">60-Minute Live Sessions</h3>
                <p className="subject-banner__feature-desc">4 structured sessions per month per subject with a dedicated tutor</p>
              </div>
              <div className="subject-banner__feature-card">
                <h3 className="subject-banner__feature-title">ACARA Curriculum Aligned</h3>
                <p className="subject-banner__feature-desc">Every lesson mapped to the Australian National Curriculum standards</p>
              </div>
            </div>

            <div className="subject-banner__checklist">
              <span className="subject-banner__check-item">{"✓"} Structured lesson plans</span>
              <span className="subject-banner__check-item">{"✓"} Weekly practice worksheets</span>
              <span className="subject-banner__check-item">{"✓"} Progress reports for parents</span>
              <span className="subject-banner__check-item">{"✓"} Free diagnostic assessment</span>
              <span className="subject-banner__check-item">{"✓"} Qualified tutors well versed with Australian curriculum</span>
              <span className="subject-banner__check-item">{"✓"} Flexible scheduling</span>
            </div>

            <div className="subject-banner__actions">
              <a href={FREE_ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Book Free Assessment Test
              </a>
              <Link href="/pricing" className="btn btn-outline btn-lg">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ===== Year Level Section ===== */}
      <section className="subject-years section">
        <div className="container">
          <div className="subject-years__header">
            <p className="subject-years__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="subject-years__label-icon" />
              Choose Your Year Level
            </p>
            <h2 className="subject-years__title">Select Your Child&apos;s Year Level</h2>
            <p className="subject-years__subtitle">
              Each year level includes Maths and English programs, structured across 4 terms with 10 sessions each.
            </p>
          </div>

          <div className="subject-years__grid">
            {yearLevels.map((level) => (
              <div
                key={level.year}
                className={`subject-years__card ${level.featured ? 'subject-years__card--featured' : ''}`}
              >
                <div className="subject-years__card-header">
                  <span className={`subject-years__card-year ${level.featured ? 'subject-years__card-year--featured' : ''}`}>
                    YEAR {level.year}
                  </span>
                  <span className="subject-years__card-ages">(Ages {level.ages})</span>
                </div>
                <p className="subject-years__card-description">{level.description}</p>
                <div className="subject-years__card-buttons">
                  <Link
                    href={`/subjects/year-${level.year}/english`}
                    className="subject-years__card-btn subject-years__card-btn--english"
                  >
                    English
                  </Link>
                  <Link
                    href={`/subjects/year-${level.year}/maths`}
                    className="subject-years__card-btn subject-years__card-btn--maths"
                  >
                    Maths
                  </Link>
                  <Link
                    href={`/subjects/year-${level.year}/science`}
                    className="subject-years__card-btn subject-years__card-btn--science"
                  >
                    Science
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Structured Learning Section ===== */}
      <section className="subject-structured">
        <div className="container">
          <div className="subject-structured__grid">
            <div className="subject-structured__left">
              <p className="subject-structured__label">
                <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="subject-structured__label-icon" />
                How Our Curriculum Works
              </p>
              <h2 className="subject-structured__title">
                Structured Learning<br />That Delivers Results
              </h2>
              <div className="subject-structured__image">
                <Image
                  src="/images/subjects/structured-learning-woman.webp"
                  alt="Professional tutor pointing"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div className="subject-structured__right">
              <div className="subject-structured__cards">
                {structuredSteps.map((step) => (
                  <div className="subject-structured__card" key={step.number}>
                    <div className="subject-structured__card-number">{step.number}</div>
                    <h3 className="subject-structured__card-title">{step.title}</h3>
                    <p className="subject-structured__card-description">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ===== CTA Section (Same as Home page) ===== */}
      <CTA />
    </>
  );
}
