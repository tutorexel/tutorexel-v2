import Image from "next/image";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createAboutPageSchema } from "@/utils/schema";
import { getRegionConfig, type RegionCode } from "@/data/regions";
import { AU_ABOUT_COPY } from "@/data/copy/au-about";
import { US_ABOUT_COPY } from "@/data/copy/us-about";
import "@/components/home/HowItWorks.css";
import "@/app/about/about.css";

const approachSteps = [
  {
    number: 1,
    title: "Assessment First",
    description:
      "We never guess. Every student starts with a free diagnostic assessment so we understand exactly where they are and where the gaps lie.",
  },
  {
    number: 2,
    title: "Dedicated Tutor",
    description:
      "Not a rotating roster. Your child works with the same educator each week, building confidence, rapport, and actual momentum.",
  },
  {
    number: 3,
    title: "Curriculum-Aligned",
    description:
      "Every lesson is mapped to what is being taught at school. No generic worksheets. We reinforce and extend what matters most.",
  },
  {
    number: 4,
    title: "Transparent Progress",
    description:
      "Weekly session notes and monthly progress reports delivered directly to parents. You will always know how your child is doing.",
  },
];

const stats = [
  { number: "95", symbol: "%", label: "Grade Improvement" },
  { number: "10,000", symbol: "+", label: "Sessions Delivered" },
  { number: "4.9", symbol: " / 5", label: "Parent Rating" },
  { number: "100", symbol: "%", label: "Curriculum-Aligned" },
];

const acaraPoints = [
  "Lessons directly reinforce what your child is learning at school",
  "We prepare students for upcoming assessments, exams, and milestones",
  "No confusion from conflicting methods - we teach the way their school expects",
  "Seamless support for students needing catch-up or extension",
];

const heroAvatars = [
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=59",
  "https://i.pravatar.cc/100?img=25",
  "https://i.pravatar.cc/100?img=47",
];

export default function AboutView({ region }: { region: RegionCode }) {
  const isAu = region === "au";
  const isUs = region === "us";
  const regConfig = getRegionConfig(region);
  const basePath = regConfig.basePath;

  const aboutPageSchema = isAu
    ? createAboutPageSchema("https://www.tutorexel.com/about")
    : isUs
    ? createAboutPageSchema("https://www.tutorexel.com/us/about")
    : null;

  const aboutBreadcrumbSchema = isAu
    ? createBreadcrumbSchema([
        { name: "Home", url: `https://www.tutorexel.com${basePath}` },
        { name: "About Us", url: `https://www.tutorexel.com${basePath}/about` },
      ])
    : isUs
    ? createBreadcrumbSchema([
        { name: "Home", url: "https://www.tutorexel.com/us" },
        { name: "About Us", url: "https://www.tutorexel.com/us/about" },
      ])
    : createBreadcrumbSchema([
        { name: "Home", url: `https://www.tutorexel.com${basePath}` },
        { name: "About", url: `https://www.tutorexel.com${basePath}/about` },
      ]);

  const activeSteps = isAu
    ? AU_ABOUT_COPY.approach.steps
    : isUs
    ? US_ABOUT_COPY.ourApproach.steps
    : approachSteps;
  const activeCurriculumPoints = isAu
    ? AU_ABOUT_COPY.curriculum.points
    : isUs
    ? US_ABOUT_COPY.curriculum.points
    : acaraPoints;

  return (
    <>
      {aboutPageSchema && <JsonLd data={aboutPageSchema} />}
      <JsonLd data={aboutBreadcrumbSchema} />

      {/* Hero Section */}
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
              {isAu ? (
                <>
                  Built by Educators. Trusted{" "}
                  <br />
                  by{" "}
                  <span className="about-hero__title-highlight">Aussie Families</span>{" "}
                  <span className="about-hero__title-star">
                    <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
                  </span>
                </>
              ) : isUs ? (
                <>
                  Built by Educators. Trusted{" "}
                  <br />
                  by{" "}
                  <span className="about-hero__title-highlight">American Families</span>{" "}
                  <span className="about-hero__title-star">
                    <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
                  </span>
                </>
              ) : (
                <>
                  Built by Educators. Trusted{" "}
                  <br />
                  by{" "}
                  <span className="about-hero__title-highlight">Families Worldwide</span>{" "}
                  <span className="about-hero__title-star">
                    <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
                  </span>
                </>
              )}
            </h1>
            <p className="about-hero__subtitle">
              {isAu
                ? AU_ABOUT_COPY.hero.subtitle
                : isUs
                ? US_ABOUT_COPY.hero.subtitle
                : "We started TutorExel with one belief: every child deserves structured, personalised learning that actually works."}
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

      {/* Our Story Section */}
      <section className="about-story about-story--compact section">
        <div className="container">
          <div className="about-story__content">
            <div className="about-story__card">
              <p className="about-story__label">
                <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="about-story__label-icon" />
                Our Story
              </p>
              <h2 className="about-story__title">
                {isAu ? AU_ABOUT_COPY.story.h2 : isUs ? US_ABOUT_COPY.ourStory.title : "Why TutorExel Exists"}
              </h2>
              <p className="about-story__text">
                {isAu
                  ? AU_ABOUT_COPY.story.paragraph1
                  : isUs
                  ? US_ABOUT_COPY.ourStory.p1
                  : "As parents and educators, we saw a gap in online tutoring. Most platforms are marketplaces: they connect you with random tutors and hope for the best. There is no consistency, no structure, and no accountability."}
              </p>
              <p className="about-story__text about-story__text--bold about-story__text--italic">
                {isAu ? AU_ABOUT_COPY.story.highlight : isUs ? US_ABOUT_COPY.ourStory.highlight : "TutorExel was built to be different."}
              </p>
              <p className="about-story__text">
                {isAu
                  ? AU_ABOUT_COPY.story.paragraph2
                  : isUs
                  ? US_ABOUT_COPY.ourStory.p2
                  : "We hire, train, and manage every educator on our platform. We align every lesson to your child's own school curriculum - whatever system they are learning under. And we track every student's progress so parents always know exactly where their child stands."}
              </p>
              <div className="about-story__founder-quote">
                <p className="about-story__text">
                  {isAu ? (
                    AU_ABOUT_COPY.story.quote
                  ) : isUs ? (
                    US_ABOUT_COPY.ourStory.quote
                  ) : (
                    <>
                      With a team of educators bringing over <strong>15 years of combined teaching experience</strong>, TutorExel combines the personal attention of a private tutor with the structure of a professional learning system.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works__grid">
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
                <h2 className="how-it-works__title">
                  {isAu ? AU_ABOUT_COPY.approach.h2 : isUs ? US_ABOUT_COPY.ourApproach.title : "How We Do Things Differently"}
                </h2>
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

            <div className="how-it-works__steps">
              {activeSteps.map((step) => (
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

      {/* Impact / Stats Section */}
      <section className="about-impact section">
        <div className="container">
          <div className="about-impact__header">
            <p className="about-impact__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="about-impact__label-icon" />
              By the Numbers
            </p>
            <h2 className="about-impact__title">
              {isAu ? AU_ABOUT_COPY.byTheNumbers.h2 : isUs ? US_ABOUT_COPY.byTheNumbers.title : "The TutorExel Impact"}
            </h2>
          </div>
          <div className="about-impact__grid">
            {stats.map((stat, index) => (
              <div
                key={stat.number}
                className={`about-impact__stat ${index === 1 ? "about-impact__stat--active" : ""}`}
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

      {/* Curriculum Alignment Section */}
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
                {isAu ? AU_ABOUT_COPY.curriculum.h2 : isUs ? US_ABOUT_COPY.curriculum.title : "Structured to Match Your Child's School Curriculum"}
              </h2>
              <p className="about-curriculum__text">
                {isAu
                  ? AU_ABOUT_COPY.curriculum.paragraph1
                  : isUs
                  ? US_ABOUT_COPY.curriculum.p1
                  : "Every TutorExel session starts with understanding your child's school curriculum, grade/year level, learning goals, and academic needs. Our tutors tailor lessons, pacing, and practice to complement what your child is learning at school."}
              </p>
              <p className="about-curriculum__text">
                {isAu
                  ? AU_ABOUT_COPY.curriculum.paragraph2
                  : isUs
                  ? US_ABOUT_COPY.curriculum.p2
                  : "Whether your child studies in Australia, the USA, Canada, or New Zealand, we help ensure that learning with TutorExel stays relevant to their school journey."}
              </p>
              <p className="about-curriculum__means-title">
                {isAu ? AU_ABOUT_COPY.curriculum.meansTitle : isUs ? US_ABOUT_COPY.curriculum.meansTitle : "This means:"}
              </p>
              <div className="about-curriculum__list">
                {activeCurriculumPoints.map((item) => (
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

      {/* Testimonials Section */}
      <Testimonials region={region} />

      {/* CTA Section */}
      <CTA
        region={region}
        title={isAu ? AU_ABOUT_COPY.cta.h2 : isUs ? US_ABOUT_COPY.cta.title : undefined}
        description={isAu ? AU_ABOUT_COPY.cta.description : isUs ? US_ABOUT_COPY.cta.description : undefined}
        buttonText={isAu ? AU_ABOUT_COPY.cta.buttonText : isUs ? US_ABOUT_COPY.cta.buttonText : undefined}
      />
    </>
  );
}

