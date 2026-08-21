import { Metadata } from 'next';
import Image from 'next/image';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/utils/schema';
import '@/components/home/HowItWorks.css';
import './about.css';

export const metadata: Metadata = {
  title: 'About Us | TutorExel',
  description:
    'Built by educators, trusted by Australian families. Learn about TutorExel\'s mission, approach, and the team behind quality online tutoring.',
  openGraph: {
    title: 'About Us | TutorExel',
    description:
      'Built by educators, trusted by Australian families. Learn about TutorExel\'s mission, approach, and the team behind quality online tutoring.',
    url: 'https://tutorexel.com/about',
    siteName: 'TutorExel',
    locale: 'en',
    type: 'website',
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | TutorExel',
    description:
      'Built by educators, trusted by Australian families. Learn about TutorExel\'s mission, approach, and the team behind quality online tutoring.',
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: 'https://tutorexel.com/about',
  },
};

function StarIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
        fill="#FF6B35"
      />
    </svg>
  );
}

const approachSteps = [
  {
    number: 1,
    title: 'Assessment First',
    description:
      'We never guess. Every student starts with a free diagnostic assessment so we understand exactly where they are and where the gaps lie.',
  },
  {
    number: 2,
    title: 'Personalised Learning Plans',
    description:
      'Based on the assessment, we create a custom plan for your child \u2013 targeting their specific weaknesses while building on their strengths.',
  },
  {
    number: 3,
    title: 'Consistent Quality',
    description:
      'Every tutor follows our structured teaching methods and curriculum guides. Your child gets the same high standard in every session.',
  },
  {
    number: 4,
    title: 'Ongoing Communication',
    description:
      'Regular progress reports, term tests, and parent updates. You are never left wondering how your child is doing.',
  },
];

const stats = [
  { number: '500', symbol: '+', label: 'Students Taught' },
  { number: '15', symbol: '+', label: 'Years of Teaching Experience' },
  { number: '92', symbol: '%', label: 'Students Showed Improved Grades' },
  { number: '4.8', symbol: '/5', label: 'Average Parent Rating' },
];

const acaraPoints = [
  'No gaps between what they learn with us and what they learn at school',
  'Topics are covered in the right order and at the right depth',
  'Assessment benchmarks match national expectations',
];

const heroAvatars = [
  'https://i.pravatar.cc/100?img=11',
  'https://i.pravatar.cc/100?img=32',
  'https://i.pravatar.cc/100?img=33',
  'https://i.pravatar.cc/100?img=47',
];

export default function AboutPage() {
  const aboutBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "About", url: "https://tutorexel.com/about" },
  ]);

  return (
    <>
      <JsonLd data={aboutBreadcrumbSchema} />
      {/* ===== Hero Section ===== */}
      <section className="about-hero">
        <div className="about-hero__decoration about-hero__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="about-hero__curve about-hero__curve--1"
          />
        </div>
        <div className="about-hero__decoration about-hero__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="about-hero__curve about-hero__curve--4"
          />

          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="about-hero__curve about-hero__curve--3"
          />

        </div>

        <div className="container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">
              Built by Educators. Trusted{' '}
              <br />
              by{' '}
              <span className="about-hero__title-highlight">Families Worldwide</span>{' '}
              <span className="about-hero__title-star"><Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} /></span>
            </h1>
            <p className="about-hero__subtitle">
              We started TutorExel with one belief - every child deserves structured, personalised learning that actually works.
            </p>
            <div className="about-hero__avatars">
              {heroAvatars.map((src, i) => (
                <div className="about-hero__avatar" key={i}>
                  <img src={src} alt="Parent" />
                </div>
              ))}
              <div className="about-hero__avatar about-hero__avatar--count">
                <span>+9k</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Our Story Section ===== */}
      <section className="about-story about-story--compact section">
        <div className="container">
          <div className="about-story__content">
            <div className="about-story__card">
              <p className="about-story__label">
                <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="about-story__label-icon" />
                Our Story
              </p>
              <h2 className="about-story__title">Why TutorExel Exists</h2>
              <p className="about-story__text">
                As parents and educators, we saw a gap in online tutoring. Most platforms are marketplaces - they connect you with random tutors and hope for the best. There is no consistency, no structure, and no accountability.
              </p>
              <p className="about-story__text about-story__text--bold about-story__text--italic">
                TutorExel was built to be different.
              </p>
              <p className="about-story__text">
                We hire, train, and manage every educator on our platform. We align every lesson to your child's own school curriculum - whatever system they're learning under. And we track every student&apos;s progress so parents always know exactly where their child stands.
              </p>
              <div className="about-story__founder-quote">
                <p className="about-story__text">
                  With a team of educators bringing over <strong>15 years of combined teaching experience</strong>, TutorExel combines the personal attention of a private tutor with the structure of a professional learning system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Our Approach Section (Same layout as HowItWorks) ===== */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works__grid">
            {/* Left Column */}
            <div className="how-it-works__left">
              <div className="how-it-works__header">
                <div className="how-it-works__label">
                  <Image
                    src="/images/icons/circle_icon.webp"
                    alt=""
                    width={20}
                    height={20}
                    className="how-it-works__label-icon"
                  />
                  Our Approach
                </div>
                <h2 className="how-it-works__title">How We Do Things Differently</h2>
              </div>
              <div className="how-it-works__image">
                <Image
                  src="/images/about/How_We_Do_Things_Differently_image.webp"
                  alt="Professional tutor"
                  width={600}
                  height={400}
                  className="how-it-works__img"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="how-it-works__steps">
              {approachSteps.map((step) => (
                <div className="step-card" key={step.number}>
                  <div className="step-card__number">{step.number}</div>
                  <h3 className="step-card__title">{step.title}</h3>
                  <p className="step-card__description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Impact / Stats Section ===== */}
      <section className="about-impact section">
        <div className="container">
          <div className="about-impact__header">
            <p className="about-impact__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="about-impact__label-icon" />
              By the Numbers
            </p>
            <h2 className="about-impact__title">The TutorExel Impact</h2>
          </div>
          <div className="about-impact__grid">
            {stats.map((stat, index) => (
              <div
                key={stat.number}
                className={`about-impact__stat ${index === 1 ? 'about-impact__stat--active' : ''}`}
              >
                <span className="about-impact__stat-value">
                  {stat.number}<span className="about-impact__stat-symbol">{stat.symbol}</span>
                </span>
                <span className="about-impact__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== ACARA Alignment Section ===== */}
      <section className="about-curriculum">
        <div className="container">
          <div className="about-curriculum__grid">
            <div className="about-curriculum__image">
              <Image
                src="/images/about/curriculum-section-image.webp"
                alt="Student holding tablet with TutorExel"
                width={600}
                height={400}
              />
            </div>
            <div className="about-curriculum__content">
              <h2 className="about-curriculum__title">
                Structured to Match Your Child's School Curriculum
              </h2>
              <p className="about-curriculum__text">
                Every TutorExel session starts with understanding exactly what your child's school expects — their curriculum, grade/year level, and learning goals. For Australian families, that means every lesson is mapped to the ACARA framework. For families in other countries, our tutors tailor lesson plans and pacing to match your child's own school.
              </p>
              <p className="about-curriculum__means-title">This means:</p>
              <div className="about-curriculum__list">
                {acaraPoints.map((item) => (
                  <div className="about-curriculum__list-item" key={item}>
                    <svg className="about-curriculum__check-icon" width="33" height="33" viewBox="0 0 33 33" fill="none">
                      <circle cx="16.5" cy="16.5" r="12" fill="#10B981" />
                      <path d="M14.5 21.5L9.5 16.5L11 15L14.5 18.5L22 11L23.5 12.5L14.5 21.5Z" fill="white" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <Testimonials />

      {/* ===== CTA Section (Same as Home page) ===== */}
      <CTA />
    </>
  );
}
