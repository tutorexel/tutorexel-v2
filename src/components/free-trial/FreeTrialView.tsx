"use client";

import Image from "next/image";
import {
  ClipboardCheck,
  BookOpen,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { CALENDLY_URL } from "@/utils/externalLinks";
import { type RegionCode } from "@/data/regions";
import "@/app/free-trial/free-trial.css";

export default function FreeTrialView({ region }: { region: RegionCode }) {
  const isGrade = region === "us" || region === "ca";
  const levelLabel = isGrade ? "grade level" : "year level";

  const trialPhases = [
    {
      icon: ClipboardCheck,
      title: "Quick Check-In",
      time: "10 min",
      description:
        "The tutor chats with your child to understand their level, how they like to learn and where they find things tricky.",
      highlight: false,
    },
    {
      icon: BookOpen,
      title: "Live Lesson",
      time: "40 min",
      description: `A real lesson on a topic that suits your child's ${levelLabel}. See first hand how our structured approach works.`,
      highlight: true,
    },
    {
      icon: MessageSquare,
      title: "Feedback and Plan",
      time: "10 min",
      description:
        "The tutor shares what they noticed: strengths, gaps and a suggested plan. You are under no obligation to continue.",
      highlight: false,
    },
  ];

  const noRiskPromises = [
    "We never ask for payment details",
    "You are never obliged to continue",
    "No pushy sales calls, ever",
    "Your child's feedback and plan are yours to keep, free",
  ];

  return (
    <>
      <section className="trial-hero" id="book-trial">
        <div className="trial-hero__decoration trial-hero__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="trial-hero__curve trial-hero__curve--1"
          />
        </div>
        <div className="trial-hero__decoration trial-hero__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="trial-hero__curve trial-hero__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="trial-hero__curve trial-hero__curve--3"
          />
        </div>

        <div className="container">
          <div className="trial-hero__content">
            <h1 className="trial-hero__title">
              Try TutorExel Free for One Full Hour
            </h1>
            <p className="trial-hero__subtitle">
              Book a free 1-hour trial. Your child joins a real lesson with a
              qualified tutor, and you get an honest view of where they are at.
              No risk, no pressure.
            </p>
          </div>

          <div className="trial-hero__widget">
            <iframe
              src={CALENDLY_URL}
              className="trial-hero__iframe"
              title="Book a free trial class"
              loading="lazy"
              scrolling="no"
            />
          </div>
        </div>
      </section>

      <section className="trial-phases">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">What Happens</p>
            <h2 className="section-header__title">
              One Hour That Shows You Everything
            </h2>
            <p className="section-header__subtitle">
              Your free trial is a real lesson, not a sales pitch. It shows you exactly how we teach.
            </p>
          </div>

          <div className="trial-phases__grid">
            {trialPhases.map((phase) => (
              <div
                key={phase.title}
                className={`trial-phase-card ${
                  phase.highlight ? "trial-phase-card--highlight" : ""
                }`}
              >
                <div className="trial-phase-card__icon">
                  <phase.icon size={28} />
                </div>
                <h3 className="trial-phase-card__title">{phase.title}</h3>
                <p className="trial-phase-card__time">{phase.time}</p>
                <p className="trial-phase-card__description">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials block hidden per instructions until verified reviews supplied */}

      <section className="trial-norisk">
        <div className="container">
          <div className="trial-norisk__grid">
            <div className="trial-norisk__image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students studying together"
              />
            </div>

            <div>
              <h2 className="trial-norisk__title">
                Zero Risk. Here&apos;s Our Promise.
              </h2>
              <p className="trial-norisk__subtitle">
                We are confident in our tutoring, so there are no tricks and no pressure to sign up.
              </p>
              <ul className="trial-norisk__list">
                {noRiskPromises.map((promise, i) => (
                  <li key={i} className="trial-norisk__item">
                    <CheckCircle
                      size={24}
                      className="trial-norisk__item-icon"
                    />
                    <span className="trial-norisk__item-text">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="trial-cta">
        <div className="container">
          <div className="trial-cta__content">
            <h2 className="trial-cta__title">Your Child&apos;s First Lesson Is on Us</h2>
            <p className="trial-cta__subtitle">
              Booking takes about 30 seconds. Pick a time and see what great tutoring feels like.
            </p>
            <a href="#book-trial" className="trial-cta__button">
              Book My Free Trial Lesson
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
