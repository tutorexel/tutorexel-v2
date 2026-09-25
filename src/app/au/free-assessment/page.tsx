"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Send } from "lucide-react";
import { createFaqSchema, createBreadcrumbSchema } from "@/utils/schema";
import { trackAssessmentSubmit } from "@/utils/analytics";
import "./free-assessment.css";

const mathReportData = [
  { label: "Algebra", percentage: 100, status: "Mastery", level: "mastery" },
  { label: "Measurement", percentage: 89, status: "Proficient", level: "proficient" },
  { label: "Number", percentage: 76, status: "Proficient", level: "proficient" },
  { label: "Space", percentage: 50, status: "Developing", level: "developing" },
  { label: "Statistics", percentage: 50, status: "Developing", level: "developing" },
];

const mathInsights = {
  strengths: [
    { name: "Algebra", percentage: 100, desc: "Excellent understanding of algebraic concepts and problem-solving." },
    { name: "Measurement", percentage: 89, desc: "Strong grasp of measurement units, conversions, and applications." },
  ],
  areasForImprovement: [
    { name: "Space", percentage: 50, desc: "Needs development in spatial reasoning and geometry concepts." },
    { name: "Statistics", percentage: 50, desc: "Requires practice with data interpretation and statistical analysis." },
  ],
  recommendation: "Focus areas identified: Space & Statistics. Both topics at 50% — needs consolidation and revision. Recommended: Term 4 syllabus focused on Space and Statistics. Mixed practice + challenging worksheets for overall Level 4 performance; 2–3 sessions per week with structured revision sets and timed drills."
};

const englishReportData = [
  { label: "Reading", percentage: 88, status: "Proficient", level: "proficient" },
  { label: "Grammar & Mechanics", percentage: 88, status: "Proficient", level: "proficient" },
  { label: "Writing Strategies", percentage: 88, status: "Proficient", level: "proficient" },
  { label: "Vocabulary", percentage: 63, status: "Developing", level: "developing" },
  { label: "Reading Comprehension & Literature", percentage: 63, status: "Developing", level: "developing" },
];

const englishInsights = {
  strengths: [
    { name: "Reading", percentage: 88, desc: "Excellent decoding, fluency, and basic comprehension strategies." },
    { name: "Grammar & Mechanics", percentage: 88, desc: "Strong sentence structure, punctuation, and spelling patterns." },
    { name: "Writing Strategies", percentage: 88, desc: "Good grasp of planning, organizing, and expressing ideas." },
  ],
  areasForImprovement: [
    { name: "Vocabulary", percentage: 63, desc: "Needs expansion of word knowledge and context clue skills." },
    { name: "Reading Comprehension & Literature", percentage: 63, desc: "Requires deeper text analysis, inference skills, and literary understanding." },
  ],
  recommendation: "Focus areas: Vocabulary & Reading Comprehension — both at 63% (Developing). Daily vocabulary practice, word mapping, and inference skill activities recommended. For proficient areas, introduce Year 4 concepts to maintain growth and engagement."
};

const levelDefinitions = [
  { level: 1, range: "0 – <25%", label: "Needs Support", desc: "Reteach fundamentals with 1:1 lessons, worked examples, and daily fluency practice.", color: "#c0392b", bg: "#fdecea" },
  { level: 2, range: "25 – <50%", label: "Beginning", desc: "Reteach fundamentals + guided practice. Scaffolded worksheets, exit tickets, short quizzes.", color: "#e67e22", bg: "#fef0e6" },
  { level: 3, range: "50 – <75%", label: "Developing", desc: "Structured recap of core topics, spaced/mixed revision sets, quick checks, timed drills.", color: "#f39c12", bg: "#fef9ec" },
  { level: 4, range: "75 – <90%", label: "Proficient", desc: "Mixed practice + challenging worksheets. Non-routine tasks; start next-year concepts.", color: "#2980b9", bg: "#e8f4fb" },
  { level: 5, range: "90 – 100%", label: "Mastery", desc: "Enrichment & early next-year concepts. Extension problems, projects, peer-teaching.", color: "#00b894", bg: "#e6f9f5" },
];

const howItWorksSteps = [
  {
    number: 1,
    label: "Step 1 - Sign Up",
    title: "Fill in a quick form",
    description:
      "Provide your child's details and we will schedule the assessment at a time that works for you.",
    subItems: [],
  },
  {
    number: 2,
    label: "Step 2 - Take the Assessment",
    title: "20-minute online diagnostic",
    description:
      "Your child completes a structured assessment with a friendly tutor. No pressure, no stress.",
    subItems: [],
  },
  {
    number: 3,
    label: "Step 3 - Get Your Report",
    title: "Within 24 hours, detailed report showing:",
    description: "",
    subItems: [
      "Score breakdown by topic",
      "Strengths and areas of confidence",
      "Specific gaps that need attention",
      "How your child compares to year-level expectations",
      "Personalised recommendations",
    ],
  },
];

const faqItems = [
  {
    question: "How long does the assessment take?",
    answer:
      "The assessment typically takes 20 minutes. It is designed to be engaging and stress-free. Your child will work through a mix of questions covering key areas of their curriculum.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes, completely free with no strings attached. We offer this because it helps us understand your child's needs and gives you valuable insight into their academic standing -- whether you choose to continue with us or not.",
  },
  {
    question: "What happens after I get the report?",
    answer:
      "After reviewing the report, you can choose to discuss the results with one of our education specialists. If you decide to continue, we will create a personalised learning plan. If not, the report is yours to keep with zero obligation.",
  },
  {
    question: "What subjects are assessed?",
    answer:
      "We assess Mathematics and English by default, as these are the two core areas covered in the Australian Curriculum. If you would like an assessment in a specific area, just let us know.",
  },
];

const yearLevels = [
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
];

const subjects = [
  "Maths",
  "English",
  "NAPLAN Preparation",
  "Piano",
  "Guitar",
];

export default function FreeAssessmentPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "+61 ",
    yearLevel: "",
    subject: "",
    preferredTime: "",
  });

  const [openFaq, setOpenFaq] = useState(0);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/free-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        trackAssessmentSubmit(formData.subject, formData.yearLevel);
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const assessmentFaqSchema = createFaqSchema(faqItems);
  const assessmentBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Free Assessment", url: "https://tutorexel.com/free-assessment" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(assessmentFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(assessmentBreadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="assessment-hero">
        <div className="assessment-hero__decoration assessment-hero__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="assessment-hero__curve assessment-hero__curve--1"
          />
        </div>
        <div className="assessment-hero__decoration assessment-hero__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="assessment-hero__curve assessment-hero__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="assessment-hero__curve assessment-hero__curve--3"
          />
        </div>

        <div className="container">
          <div className="assessment-hero__content">
            <h1 className="assessment-hero__title">
              Find Out Exactly{" "}
              <span className="assessment-hero__title-highlight">
                Where Your Child Stands
              </span>
              <span className="assessment-hero__star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="assessment-hero__subtitle">
              Our free diagnostic assessment identifies your child&apos;s
              strengths and gaps against Australian Curriculum standards. No
              cost. No obligation. Just clarity.
            </p>
            <a href="#book-assessment" className="assessment-hero__cta">
              Get Your Free Assessment
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="assessment-how">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Simple Process</p>
            <h2 className="section-header__title">How It Works</h2>
          </div>

          <div className="assessment-how__grid">
            <div className="assessment-how__image">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
                alt="Mother with child learning"
              />
            </div>

            <div className="assessment-how__steps">
              {howItWorksSteps.map((step) => (
                <div key={step.number} className="assessment-step">
                  <div className="assessment-step__number">{step.number}</div>
                  <div>
                    <p className="assessment-step__label">{step.label}</p>
                    <h3 className="assessment-step__title">{step.title}</h3>
                    {step.description && (
                      <p className="assessment-step__description">
                        {step.description}
                      </p>
                    )}
                    {step.subItems.length > 0 && (
                      <div className="assessment-step__sub-list">
                        {step.subItems.map((item, idx) => (
                          <div key={idx} className="assessment-step__sub-item">
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What the Report Looks Like */}
      <section className="assessment-report">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label"><img src="/images/icons/circle_icon.webp" alt="Star Icon" width={20} height={20} /> Sample Report</p>
            <h2 className="section-header__title">
              What the Report Looks Like
            </h2>
          </div>

          <div className="assessment-report__grid">
            {/* Math Assessment Card */}
            <div className="assessment-report__card">
              <div className="assessment-report__header">
                <h3 className="assessment-report__title">Mathematics Assessment</h3>
                <p className="assessment-report__student">Student: Aryan · September 16, 2025</p>
              </div>

              <div className="assessment-report__divider"></div>

              <div className="assessment-report__bars">
                {mathReportData.map((item) => (
                  <div key={item.label} className={`assessment-bar assessment-bar--${item.level}`}>
                    <div className="assessment-bar__header">
                      <span className="assessment-bar__label">{item.label}</span>
                      <div className="assessment-bar__meta">
                        <span className="assessment-bar__percentage">{item.percentage}%</span>
                        <span className="assessment-bar__status">{item.status}</span>
                      </div>
                    </div>
                    <div className="assessment-bar__track">
                      <div className="assessment-bar__fill" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="assessment-report__overall">
                <span className="assessment-report__overall-label">Overall Score</span>
                <span className="assessment-report__overall-score">78%</span>
              </div>

              {/* Strengths and Areas for Improvement */}
              <div className="assessment-report__details-section">
                <h4 className="assessment-report__details-title">Strengths &amp; Areas for Improvement</h4>
                <div className="assessment-report__details-grid">
                  {mathInsights.strengths.map((item, idx) => (
                    <div key={idx} className="assessment-report__detail-chip assessment-report__detail-chip--strength">
                      <div className="assessment-report__chip-label">✓ Strength</div>
                      <div className="assessment-report__chip-name">{item.name} ({item.percentage}%)</div>
                      <div className="assessment-report__chip-desc">{item.desc}</div>
                    </div>
                  ))}
                  {mathInsights.areasForImprovement.map((item, idx) => (
                    <div key={idx} className="assessment-report__detail-chip assessment-report__detail-chip--improve">
                      <div className="assessment-report__chip-label">↑ Improve</div>
                      <div className="assessment-report__chip-name">{item.name} ({item.percentage}%)</div>
                      <div className="assessment-report__chip-desc">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div className="assessment-report__rec-box">
                <div className="assessment-report__rec-title">Recommendation</div>
                <div className="assessment-report__rec-text">{mathInsights.recommendation}</div>
              </div>
            </div>

            {/* English Assessment Card */}
            <div className="assessment-report__card">
              <div className="assessment-report__header">
                <h3 className="assessment-report__title">English Assessment</h3>
                <p className="assessment-report__student">Student: Aryan · Year 3 · September 24, 2025</p>
              </div>

              <div className="assessment-report__divider"></div>

              <div className="assessment-report__bars">
                {englishReportData.map((item) => (
                  <div key={item.label} className={`assessment-bar assessment-bar--${item.level}`}>
                    <div className="assessment-bar__header">
                      <span className="assessment-bar__label">{item.label}</span>
                      <div className="assessment-bar__meta">
                        <span className="assessment-bar__percentage">{item.percentage}%</span>
                        <span className="assessment-bar__status">{item.status}</span>
                      </div>
                    </div>
                    <div className="assessment-bar__track">
                      <div className="assessment-bar__fill" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="assessment-report__overall">
                <span className="assessment-report__overall-label">Overall Score</span>
                <span className="assessment-report__overall-score">78%</span>
              </div>

              {/* Strengths and Areas for Improvement */}
              <div className="assessment-report__details-section">
                <h4 className="assessment-report__details-title">Strengths &amp; Areas for Improvement</h4>
                <div className="assessment-report__details-grid">
                  {englishInsights.strengths.map((item, idx) => (
                    <div key={idx} className="assessment-report__detail-chip assessment-report__detail-chip--strength">
                      <div className="assessment-report__chip-label">✓ Strength</div>
                      <div className="assessment-report__chip-name">{item.name} ({item.percentage}%)</div>
                      <div className="assessment-report__chip-desc">{item.desc}</div>
                    </div>
                  ))}
                  {englishInsights.areasForImprovement.map((item, idx) => (
                    <div key={idx} className="assessment-report__detail-chip assessment-report__detail-chip--improve">
                      <div className="assessment-report__chip-label">↑ Improve</div>
                      <div className="assessment-report__chip-name">{item.name} ({item.percentage}%)</div>
                      <div className="assessment-report__chip-desc">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div className="assessment-report__rec-box">
                <div className="assessment-report__rec-title">Recommendation</div>
                <div className="assessment-report__rec-text">{englishInsights.recommendation}</div>
              </div>
            </div>
          </div>

          {/* Level Definitions */}
          <div className="assessment-levels">
            <h3 className="assessment-levels__title">Level Definitions</h3>
            <div className="assessment-levels__list">
              {levelDefinitions.map((def) => (
                <div key={def.level} className="assessment-levels__item">
                  <div className="assessment-levels__dot" style={{ background: def.bg, color: def.color }}>
                    {def.level}
                  </div>
                  <div className="assessment-levels__content">
                    <span className="assessment-levels__range">{def.range}</span>
                    <span className="assessment-levels__label">{def.label}</span>
                    <p className="assessment-levels__desc">{def.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="book-assessment" className="assessment-form-section">
        <div className="container">
          <div className="assessment-form-section__grid">
            <div className="assessment-form-section__image">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80"
                alt="Mother with child studying"
              />
            </div>

            <div className="assessment-form-card">
              <h2 className="assessment-form-card__title">
                Get Your Free Assessment
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="assessment-form__grid">
                  <div className="assessment-form__field">
                    <label className="assessment-form__label">
                      Parent&apos;s Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      className="assessment-form__input"
                      placeholder="e.g. Sarah Johnson"
                    />
                  </div>

                  <div className="assessment-form__field">
                    <label className="assessment-form__label">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="assessment-form__input"
                      placeholder="e.g. sarah@email.com"
                    />
                  </div>

                  <div className="assessment-form__field">
                    <label className="assessment-form__label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="assessment-form__input"
                      placeholder="e.g. 0412 345 678"
                    />
                  </div>

                  <div className="assessment-form__field">
                    <label className="assessment-form__label">
                      Child&apos;s Year Level *
                    </label>
                    <select
                      required
                      value={formData.yearLevel}
                      onChange={(e) =>
                        setFormData({ ...formData, yearLevel: e.target.value })
                      }
                      className="assessment-form__select"
                    >
                      <option value="" disabled>
                        Select Year Level
                      </option>
                      {yearLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="assessment-form__field">
                    <label className="assessment-form__label">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="assessment-form__select"
                    >
                      <option value="" disabled>
                        Select Subject
                      </option>
                      {subjects.map((subj) => (
                        <option key={subj} value={subj}>
                          {subj}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="assessment-form__field">
                    <label className="assessment-form__label">
                      Preferred Day/Time
                    </label>
                    <input
                      type="text"
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTime: e.target.value,
                        })
                      }
                      className="assessment-form__input"
                      placeholder="e.g. Saturday 10am"
                    />
                  </div>
                </div>

                <button type="submit" className="assessment-form__submit" disabled={submitting}>
                  <Send size={16} />
                  {submitting ? "Sending..." : "Book My Free Assessment"}
                </button>
                {submitted && (
                  <p style={{ color: "#22C55E", textAlign: "center", marginTop: "12px", fontWeight: 600 }}>
                    Thank you! Our team will contact you within 24 hours to schedule the assessment.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="assessment-faq">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Got Questions?</p>
            <h2 className="section-header__title">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="assessment-faq__list">
            {faqItems.map((item, i) => (
              <div key={i} className="assessment-faq__item">
                <button
                  className="assessment-faq__question"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="assessment-faq__question-text">
                    {item.question}
                  </span>
                  <span className="assessment-faq__toggle">
                    {openFaq === i ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="assessment-faq__answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="assessment-cta">
        <div className="container">
          <div className="assessment-cta__content">
            <h2 className="assessment-cta__title">
              What Are You Waiting For?
            </h2>
            <p className="assessment-cta__subtitle">
              It takes 30 seconds to fill the form. Get a clear picture of where
              your child stands today.
            </p>
            <a href="#book-assessment" className="assessment-cta__button">
              Get Your Free Assessment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
