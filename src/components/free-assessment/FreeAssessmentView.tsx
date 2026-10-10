"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Send } from "lucide-react";
import { createFaqSchema, createBreadcrumbSchema } from "@/utils/schema";
import { trackAssessmentSubmit } from "@/utils/analytics";
import { getRegionConfig, type RegionCode } from "@/data/regions";
import "@/app/free-assessment/free-assessment.css";

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
  recommendation: "Focus areas identified: Space & Statistics. Both topics at 50%: needs consolidation and revision. Recommended: Term 4 syllabus focused on Space and Statistics. Mixed practice + challenging worksheets for overall Level 4 performance; 2-3 sessions per week with structured revision sets and timed drills."
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
  recommendation: "Focus areas: Vocabulary & Reading Comprehension: both at 63% (Developing). Daily vocabulary practice, word mapping, and inference skill activities recommended. For proficient areas, introduce Year 4 concepts to maintain growth and engagement."
};

const levelDefinitions = [
  { level: 1, range: "0 - <25%", label: "Needs Support", desc: "Reteach fundamentals with 1:1 lessons, worked examples, and daily fluency practice.", color: "#c0392b", bg: "#fdecea" },
  { level: 2, range: "25 - <50%", label: "Beginning", desc: "Reteach fundamentals + guided practice. Scaffolded worksheets, exit tickets, short quizzes.", color: "#e67e22", bg: "#fef0e6" },
  { level: 3, range: "50 - <75%", label: "Developing", desc: "Structured recap of core topics, spaced/mixed revision sets, quick checks, timed drills.", color: "#f39c12", bg: "#fef9ec" },
  { level: 4, range: "75 - <90%", label: "Proficient", desc: "Mixed practice + challenging worksheets. Non-routine tasks; start next-year concepts.", color: "#2980b9", bg: "#e8f4fb" },
  { level: 5, range: "90 - 100%", label: "Mastery", desc: "Enrichment & early next-year concepts. Extension problems, projects, peer-teaching.", color: "#00b894", bg: "#e6f9f5" },
];

const howItWorksSteps = [
  {
    number: 1,
    label: "Step 1",
    title: "SIGN UP",
    description:
      "Fill in a quick form. Tell us about your child and we will arrange the assessment for a time that suits your family.",
    subItems: [],
  },
  {
    number: 2,
    label: "Step 2",
    title: "TAKE THE ASSESSMENT",
    description:
      "A 20-minute online diagnostic. Your child works through a structured assessment with a friendly tutor. It is relaxed, with no pressure.",
    subItems: [],
  },
  {
    number: 3,
    label: "Step 3",
    title: "GET YOUR REPORT",
    description: "Within 24 hours, a detailed report showing:",
    subItems: [
      "Score breakdown by topic",
      "Your child's strengths and where they feel confident",
      "Specific gaps that need attention",
      "How your child compares with expected levels for their grade or year",
      "Tailored recommendations for next steps",
    ],
  },
];

const faqItems = [
  {
    question: "How long does the assessment take?",
    answer:
      "About 20 minutes. It is designed to be engaging and stress-free. Your child answers a mix of questions on the key areas of their school curriculum.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. The assessment and the report cost nothing, and there is no obligation to book lessons afterwards.",
  },
  {
    question: "What happens after I get the report?",
    answer:
      "You can read it in your own time, or ask our team to walk you through it. If you would like support, we can suggest a lesson plan that matches your child's results.",
  },
  {
    question: "What subjects are assessed?",
    answer:
      "We assess Maths (Math in the USA and Canada) and English for Years or Grades 2 to 10.",
  },
];

const phonePrefixes: Record<RegionCode, string> = {
  au: "+61 ",
  us: "+1 ",
  ca: "+1 ",
  nz: "+64 ",
};

export default function FreeAssessmentView({ region }: { region: RegionCode }) {
  const regConfig = getRegionConfig(region);
  const basePath = regConfig.basePath;
  const yearLevels = regConfig.yearLevels.map(
    (lvl) => `${regConfig.yearLabel} ${lvl}`
  );
  const isMathsRegion = region === "au" || region === "nz";
  const mathLabel = isMathsRegion ? "Maths" : "Math";
  const subjectsList = [mathLabel, "English", `Both ${mathLabel} and English`];

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: phonePrefixes[region] || "+61 ",
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
    { name: "Home", url: `https://www.tutorexel.com${basePath}` },
    { name: "Free Assessment", url: `https://www.tutorexel.com${basePath}/free-assessment` },
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
              Discover Exactly{" "}
              <span className="assessment-hero__title-highlight">
                How Your Child Is Doing
              </span>
              <span className="assessment-hero__star">
                <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </h1>
            <p className="assessment-hero__subtitle">
              Our free diagnostic assessment shows your child&apos;s strengths and gaps against their school curriculum. It costs nothing and there is no obligation to continue.
            </p>
            <a href="#book-assessment" className="assessment-hero__cta">
              Book My Free Assessment
            </a>
          </div>
        </div>
      </section>

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

      <section className="assessment-report">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label"><img src="/images/icons/circle_icon.webp" alt="" aria-hidden="true" width={20} height={20} /> Sample Report</p>
            <h2 className="section-header__title">
              What the Report Looks Like
            </h2>
          </div>

          <div className="assessment-report__grid">
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

              <div className="assessment-report__rec-box">
                <div className="assessment-report__rec-title">Recommendation</div>
                <div className="assessment-report__rec-text">{mathInsights.recommendation}</div>
              </div>
            </div>

            <div className="assessment-report__card">
              <div className="assessment-report__header">
                <h3 className="assessment-report__title">English Assessment</h3>
                <p className="assessment-report__student">Student: Aryan · September 24, 2025</p>
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

              <div className="assessment-report__rec-box">
                <div className="assessment-report__rec-title">Recommendation</div>
                <div className="assessment-report__rec-text">{englishInsights.recommendation}</div>
              </div>
            </div>
          </div>

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
                Book Your Free Assessment
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
                      Child&apos;s {regConfig.yearLabel} Level *
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
                        Select {regConfig.yearLabel} Level
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
                      {subjectsList.map((subj) => (
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
                    Thank you! Your assessment request is in. We will contact you shortly to confirm a time.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

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

      <section className="assessment-cta">
        <div className="container">
          <div className="assessment-cta__content">
            <h2 className="assessment-cta__title">
              Ready to See the Full Picture?
            </h2>
            <p className="assessment-cta__subtitle">
              The form takes about 30 seconds. Book now and know exactly where your child stands.
            </p>
            <a href="#book-assessment" className="assessment-cta__button">
              Book My Free Assessment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
