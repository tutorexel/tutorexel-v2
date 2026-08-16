"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  BookOpen,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Testimonials from "@/components/home/Testimonials";
import { CALENDLY_URL } from "@/utils/externalLinks";
import "./free-trial.css";

const trialPhases = [
  {
    icon: ClipboardCheck,
    title: "Quick Assessment",
    time: "10 min",
    description:
      "Your child's tutor will have a friendly conversation to understand their current level, learning style, and any areas of difficulty.",
    highlight: false,
  },
  {
    icon: BookOpen,
    title: "Live Lesson",
    time: "40 min",
    description:
      "A real teaching session covering a topic relevant to your child's year level. See exactly how our structured approach works.",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "Feedback & Plan",
    time: "10 min",
    description:
      "The tutor will share their observations with you — strengths, gaps, and a recommended plan. There is absolutely no obligation to continue.",
    highlight: false,
  },
];

const noRiskPromises = [
  "No payment details required",
  "No obligation to continue",
  "No pushy sales calls",
  "The assessment report is yours to keep -- free",
];

export default function FreeTrialPage() {
  return (
    <>
      {/* Hero */}
      <section className="trial-hero">
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
              Your{" "}
              <span className="trial-hero__title-highlight">
                Child&apos;s First Lesson
              </span>{" "}
              is Completely Free
              <span className="trial-hero__star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="trial-hero__subtitle">
              Experience a full 60-minute live session with one of our qualified
              tutors. See our structured approach, get a diagnostic assessment,
              and decide if TutorExel is the right fit.
            </p>
          </div>

          {/* Booking Calendar directly in hero */}
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

      {/* 60 Minutes That Could Change Everything */}
      <section className="trial-phases">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">What Happens</p>
            <h2 className="section-header__title">
              60 Minutes That Could Change Everything
            </h2>
            <p className="section-header__subtitle">
              Your free trial is not a sales pitch. It is a real teaching session
              designed to show you exactly how we work.
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

      {/* Testimonials */}
      <Testimonials />

      {/* Absolutely No Risk */}
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
                Absolutely No Risk. Here&apos;s Our Promise.
              </h2>
              <p className="trial-norisk__subtitle">
                We believe in our tutoring so much that we do not need to trick
                you into signing up.
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

      {/* Final CTA */}
      <section className="trial-cta">
        <div className="container">
          <div className="trial-cta__content">
            <h2 className="trial-cta__title">What Are You Waiting For?</h2>
            <p className="trial-cta__subtitle">
              It takes 30 seconds to book a slot. Your child&apos;s first step
              towards academic excellence starts now.
            </p>
            <a href="#book-trial" className="trial-cta__button">
              Book Your Free Trial Lesson
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
