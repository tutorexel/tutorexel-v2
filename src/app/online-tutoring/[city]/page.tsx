import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import BookTrialButton from "@/components/home/BookTrialButton";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createFaqSchema } from "@/utils/schema";
import { cities, CityData } from "@/data/cities";
import CityFaq from "./CityFaq";
import "./city.css";

function getCityData(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

function getFaqData(city: CityData) {
  return [
    {
      question: `How much does tutoring cost in ${city.name}?`,
      answer: `TutorExel offers online tutoring for ${city.name} students from $39/month for group sessions (max 3 students) or $84/month for 1-on-1. Both plans include 4 sessions per month per subject.`,
    },
    {
      question: `Is online tutoring effective for ${city.name} students?`,
      answer: `Yes. Online tutoring eliminates commute time across ${city.name} and provides the same quality of instruction as in-person sessions. TutorExel's structured programs, live interactive sessions, and regular progress tracking ensure ${city.name} students receive consistent, high-quality education from the comfort of home.`,
    },
    {
      question: `Do you follow the ${city.state} curriculum?`,
      answer: `Yes. TutorExel's programs are fully aligned to the Australian National Curriculum (ACARA), which is used across all ${city.state} schools. Our structured sessions cover every curriculum standard for Years 2-7 in both Maths, English and Science, ensuring ${city.name} students are learning exactly what they need for school success.`,
    },
  ];
}

const howItWorksSteps = [
  {
    number: 1,
    title: "Free Assessment",
    description:
      "Your child takes a free diagnostic test so we know exactly where to start.",
  },
  {
    number: 2,
    title: "Custom Plan",
    description:
      "We create a personalised learning plan aligned to their year level and curriculum.",
  },
  {
    number: 3,
    title: "Live Sessions",
    description:
      "Weekly live online sessions with expert tutors - small groups or 1-on-1.",
  },
  {
    number: 4,
    title: "Track Progress",
    description:
      "Term tests, progress reports, and parent updates keep everyone on the same page.",
  },
];

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityData(slug);

  if (!city) {
    return {
      title: "City Not Found | TutorExel",
    };
  }

  const title = `Online Tutoring in ${city.name} | Maths, English & Science | TutorExel`;
  const description = `Expert online tutoring for ${city.name} students in Years 2-7. ACARA-aligned Maths, English & Science. Small groups or 1-on-1. From $39/month. Book a free assessment.`;
  const url = `https://tutorexel.com/online-tutoring/${city.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "TutorExel",
      locale: "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityData(slug);

  if (!city) {
    notFound();
  }

  const faqData = getFaqData(city);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Online Tutoring", url: "https://tutorexel.com/online-tutoring" },
    {
      name: city.name,
      url: `https://tutorexel.com/online-tutoring/${city.slug}`,
    },
  ]);

  const faqSchema = createFaqSchema(faqData);

  const educationalOrgSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `TutorExel - Online Tutoring ${city.name}`,
    description: `Expert online tutoring for ${city.name} students in Years 2-7. ACARA-aligned Maths, English & Science programs delivered live by expert tutors.`,
    url: `https://tutorexel.com/online-tutoring/${city.slug}`,
    areaServed: { "@type": "City", name: city.name },
    serviceType: "Online Tutoring",
    provider: { "@type": "Organization", name: "TutorExel" },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={educationalOrgSchema} />

      {/* ===== Banner Section ===== */}
      <section className="city-banner">
        <div className="city-banner__decoration city-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="city-banner__curve city-banner__curve--1"
          />
        </div>
        <div className="city-banner__decoration city-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="city-banner__curve city-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="city-banner__curve city-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="city-banner__content">
            <h1 className="city-banner__title">
              Online Tutoring in{" "}
              <br />
              <span className="city-banner__title-highlight">{city.name}</span>{" "}
              <span className="city-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="city-banner__subtitle">
              Expert online Maths, English and Science tutoring for {city.name} students in Years 2-7.
              ACARA-aligned programs delivered live, tailored to the {city.state} curriculum.
            </p>
            <div className="city-banner__actions">
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

      {/* ===== Why Choose Online Tutoring Section ===== */}
      <section className="city-why section">
        <div className="container">
          <div className="city-why__header">
            <p className="city-why__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="city-why__label-icon" />
              Online Tutoring in {city.name}
            </p>
            <h2 className="city-why__title">Why Choose Online Tutoring in {city.name}?</h2>
          </div>

          <div className="city-why__content">
            <p className="city-why__description">
              {city.description}
            </p>
            <p className="city-why__fact">
              <strong>Did you know?</strong> {city.localFact}
            </p>
          </div>
        </div>
      </section>

      {/* ===== What We Offer Section ===== */}
      <section className="city-offer">
        <div className="container">
          <div className="city-offer__header">
            <p className="city-offer__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="city-offer__label-icon" />
              Our Programs
            </p>
            <h2 className="city-offer__title">What We Offer {city.name} Students</h2>
            <p className="city-offer__subtitle">
              Structured online tutoring programs aligned to the Australian National Curriculum for {city.state} students.
            </p>
          </div>

          <div className="city-offer__grid">
            <div className="city-offer__card">
              <div className="city-offer__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="city-offer__card-title">Maths Tutoring</h3>
              <p className="city-offer__card-description">
                Years 2-7 Maths tutoring fully aligned to ACARA. From number sense and operations to algebra and geometry - building strong mathematical foundations for {city.name} students.
              </p>
              <Link href="/subjects" className="city-offer__card-btn">
                View Maths Programs
              </Link>
            </div>

            <div className="city-offer__card">
              <div className="city-offer__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="city-offer__card-title">English Tutoring</h3>
              <p className="city-offer__card-description">
                Years 2-7 English tutoring covering reading comprehension, creative and persuasive writing, grammar, spelling, and vocabulary - developing confident communicators.
              </p>
              <Link href="/subjects" className="city-offer__card-btn">
                View English Programs
              </Link>
            </div>

            <div className="city-offer__card">
              <div className="city-offer__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="city-offer__card-title">NAPLAN Preparation</h3>
              <p className="city-offer__card-description">
                Targeted NAPLAN preparation for Years 3, 5, and 7. Practice tests, gap analysis, and focused tutoring to help {city.name} students perform their best.
              </p>
              <Link href="/naplan-preparation" className="city-offer__card-btn">
                NAPLAN Prep Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How It Works Section ===== */}
      <section className="city-how">
        <div className="container">
          <div className="city-how__header">
            <p className="city-how__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="city-how__label-icon" />
              Getting Started
            </p>
            <h2 className="city-how__title">How It Works</h2>
            <p className="city-how__subtitle">
              A proven 4-step approach to help {city.name} students achieve measurable results.
            </p>
          </div>

          <div className="city-how__grid">
            {howItWorksSteps.map((step) => (
              <div className="city-how__card" key={step.number}>
                <div className="city-how__card-number">{step.number}</div>
                <h3 className="city-how__card-title">{step.title}</h3>
                <p className="city-how__card-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== City Education Stats Section ===== */}
      <section className="city-stats">
        <div className="container">
          <div className="city-stats__header">
            <p className="city-stats__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="city-stats__label-icon" />
              {city.name} Education
            </p>
            <h2 className="city-stats__title">{city.name} Education Stats</h2>
          </div>

          <div className="city-stats__grid">
            <div className="city-stats__card">
              <div className="city-stats__card-value">{city.population}</div>
              <div className="city-stats__card-label">Population</div>
            </div>
            <div className="city-stats__card">
              <div className="city-stats__card-value">{city.schoolCount}</div>
              <div className="city-stats__card-label">Schools in {city.name}</div>
            </div>
            <div className="city-stats__card">
              <div className="city-stats__card-value">Years 2-7</div>
              <div className="city-stats__card-label">Year Levels Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="city-faq section">
        <div className="container">
          <div className="city-faq__header">
            <p className="city-faq__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="city-faq__label-icon" />
              Common Questions
            </p>
            <h2 className="city-faq__title">Online Tutoring in {city.name} - FAQs</h2>
            <p className="city-faq__subtitle">
              Find answers to the most common questions {city.name} parents ask about online tutoring.
            </p>
          </div>

          <CityFaq faqData={faqData} />
        </div>
      </section>

      {/* ===== Internal Links Section ===== */}
      <section className="city-links">
        <div className="container">
          <div className="city-links__content">
            <h2 className="city-links__title">Explore More</h2>
            <div className="city-links__grid">
              <Link href="/subjects" className="city-links__link">All Subjects</Link>
              <Link href="/pricing" className="city-links__link">Pricing</Link>
              <Link href="/free-assessment" className="city-links__link">Free Assessment</Link>
              <Link href="/naplan-preparation" className="city-links__link">NAPLAN Preparation</Link>
              <Link href="/online-tutoring" className="city-links__link">All Cities</Link>
              {cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/online-tutoring/${c.slug}`}
                    className="city-links__link"
                  >
                    Online Tutoring {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <CTA />
    </>
  );
}
