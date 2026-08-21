import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/home/CTA";
import BookTrialButton from "@/components/home/BookTrialButton";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/utils/schema";
import { cities } from "@/data/cities";
import "./[city]/city.css";

export const metadata: Metadata = {
  title: "Online Tutoring Across Worldwide | TutorExel",
  description:
    "Expert online tutoring for Students Worldwide in Years 2-7. ACARA-aligned Maths, English & Science programs available in Sydney, Melbourne, Brisbane, Perth, Adelaide and across Australia. From $39/month.",
  openGraph: {
    title: "Online Tutoring Across Worldwide | TutorExel",
    description:
      "Expert online tutoring for Students Worldwide in Years 2-7. ACARA-aligned Maths, English & Science programs available in Sydney, Melbourne, Brisbane, Perth, Adelaide and across Australia. From $39/month.",
    url: "https://tutorexel.com/online-tutoring",
    siteName: "TutorExel",
    locale: "en",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Tutoring Across Worldwide | TutorExel",
    description:
      "Expert online tutoring for Australian students in Years 2-7. ACARA-aligned Maths, English & Science programs available in Sydney, Melbourne, Brisbane, Perth, Adelaide and across Australia. From $39/month.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/online-tutoring",
  },
};

export default function OnlineTutoringPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Online Tutoring", url: "https://tutorexel.com/online-tutoring" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ===== Banner Section ===== */}
      <section className="ot-banner">
        <div className="ot-banner__decoration ot-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="ot-banner__curve ot-banner__curve--1"
          />
        </div>
        <div className="ot-banner__decoration ot-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="ot-banner__curve ot-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="ot-banner__curve ot-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="ot-banner__content">
            <h1 className="ot-banner__title">
              Online Tutoring{" "}
              <br />
              Across{" "}
              <span className="ot-banner__title-highlight">Australia</span>{" "}
              <span className="ot-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="ot-banner__subtitle">
              Expert online Maths, English and Science tutoring for students in Years 2-7, available nationwide. ACARA-aligned programs delivered live by expert tutors.
            </p>
            <div className="ot-banner__actions">
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

      {/* ===== City List Section ===== */}
      <section className="ot-cities section">
        <div className="container">
          <div className="ot-cities__header">
            <p className="ot-cities__label">
              <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="ot-cities__label-icon" />
              Find Your City
            </p>
            <h2 className="ot-cities__title">Online Tutoring in Your City</h2>
            <p className="ot-cities__subtitle">
              TutorExel delivers expert online tutoring to students across Worldwide. Choose your city to learn more about our programs in your area.
            </p>
          </div>

          <div className="ot-cities__grid">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/online-tutoring/${city.slug}`}
                className="ot-cities__card"
              >
                <div className="ot-cities__card-header">
                  <span className="ot-cities__card-name">{city.name}</span>
                  <span className="ot-cities__card-state">{city.stateShort}</span>
                </div>
                <p className="ot-cities__card-description">{city.description}</p>
                <span className="ot-cities__card-link">
                  View {city.name} tutoring <span className="ot-cities__card-link-arrow">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <CTA />
    </>
  );
}
