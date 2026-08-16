"use client";

import Link from "next/link";
import Testimonials from "@/components/home/Testimonials";
import BookTrialButton from "@/components/home/BookTrialButton";
import "./results.css";

const stats = [
  { value: "500+", label: "Students Taught", variant: "orange" as const },
  {
    value: "15+",
    label: "Years of Teaching Experience",
    variant: "dark" as const,
  },
  {
    value: "92%",
    label: "Students Showed Improved Grades",
    variant: "orange" as const,
  },
  { value: "4.8/5", label: "Average Parent Rating", variant: "orange" as const },
];

const successStories = [
  {
    title: "From Struggling to Confident in One Term",
    student: "Year 5 Maths",
    sections: [
      {
        label: "Student",
        text: "Aarav was falling behind in Year 5 Maths, particularly in fractions and decimals. He had lost confidence and was starting to avoid maths homework altogether. His parents were worried about the upcoming NAPLAN tests.",
      },
      {
        label: "What We Did",
        text: "We started with a diagnostic assessment to pinpoint exact gaps. His tutor created a custom plan focusing on visual fraction models, step-by-step decimal operations, and daily practice worksheets. Sessions were structured but encouraging.",
      },
      {
        label: "Result",
        text: "Within one term, Aarav moved from a C to a B+ in Maths. By the end of two terms, he was consistently scoring in the top third of his class and actually asked to do extra maths problems at home.",
      },
    ],
    quote:
      "We could not believe the change. He went from dreading maths to being excited about it. TutorExel gave him the structure and confidence he needed.",
    author: "- Priya S., Sydney",
  },
  {
    title: "Year 7 English Turnaround",
    student: "Year 7 English",
    sections: [
      {
        label: "Student",
        text: "Maya was struggling with reading comprehension and creative writing in Year 7 English. Her school reports flagged her as needing additional support, and she was reluctant to participate in class discussions.",
      },
      {
        label: "What We Did",
        text: "Her tutor introduced a structured reading programme with levelled texts, vocabulary building activities, and guided essay writing. Sessions included real-time feedback on paragraph structure and expression.",
      },
      {
        label: "Result",
        text: "After 15 weeks, Maya improved her reading comprehension by two grade levels. She started participating more in class discussions and her teacher noticed a marked improvement in her written responses and essay structure.",
      },
    ],
    quote:
      "The improvement has been remarkable. Maya now reads for pleasure and actually enjoys writing essays, which is something we never thought we would see. The tutors genuinely care about her progress.",
    author: "- Parent, Melbourne",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="results-hero">
        <div className="container">
          <h1 className="results-hero__title">
            Real{" "}
            <span className="results-hero__title-gradient">Results</span> from
            Real{" "}
            <span className="results-hero__title-gradient">Families</span>
            <span className="results-hero__star">&#10022;</span>
          </h1>
          <p className="results-hero__subtitle">
            These are not made-up numbers. These are actual outcomes from
            Australian students who learned with TutorExel.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="results-stats">
        <div className="container">
          <div className="results-stats__grid">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`results-stats__item results-stats__item--${stat.variant}`}
              >
                <div className="results-stats__number">{stat.value}</div>
                <div className="results-stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="results-stories">
        <div className="container">
          <div className="results-stories__header">
            <p className="results-stories__label">Success Stories</p>
            <h2 className="results-stories__title">
              Students Who Excelled
            </h2>
          </div>

          <div className="results-stories__list">
            {successStories.map((story) => (
              <div key={story.title} className="story-card">
                <h3 className="story-card__title">{story.title}</h3>
                <p className="story-card__student">{story.student}</p>

                <div className="story-card__sections">
                  {story.sections.map((section) => (
                    <div key={section.label} className="story-card__section">
                      <div className="story-card__section-dot" />
                      <div className="story-card__section-content">
                        <div className="story-card__section-label">
                          {section.label}
                        </div>
                        <p className="story-card__section-text">
                          {section.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="story-card__quote">
                  <span className="story-card__quote-mark">&ldquo;</span>
                  <p className="story-card__quote-text">{story.quote}</p>
                  <p className="story-card__quote-author">{story.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="results-cta">
        <div className="container">
          <h2 className="results-cta__title">
            Your Child Could Be Our Next Success Story
          </h2>
          <div className="results-cta__actions">
            <BookTrialButton className="btn btn-primary btn-lg">
              Book Free Trial Class
            </BookTrialButton>
            <Link
              href="/free-assessment"
              className="btn btn-outline-white btn-lg"
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
