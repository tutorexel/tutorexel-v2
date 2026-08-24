"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { subjectsData } from "@/data/subjectsData";
import { getSubjectData } from "@/data/years";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import BookTrialButton from "@/components/home/BookTrialButton";
import { createCourseSchema, createBreadcrumbSchema } from "@/utils/schema";
import "./subject-detail.css";

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#22C55E" />
      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="detail-outcomes__label-icon" />
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33333 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 3.33333L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Timeline icons */
function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97905 4.39227 5.86048C5.08402 4.74191 6.07355 3.83799 7.25 3.25C8.23176 2.75411 9.31678 2.49714 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.441 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33333 2.5H7.5C8.38405 2.5 9.23189 2.85119 9.85702 3.47631C10.4821 4.10143 10.8333 4.94928 10.8333 5.83333V17.5C10.8333 16.837 10.5699 16.2011 10.1011 15.7322C9.63226 15.2634 8.99637 15 8.33333 15H3.33333V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6667 2.5H12.5C11.616 2.5 10.7681 2.85119 10.143 3.47631C9.51786 4.10143 9.16667 4.94928 9.16667 5.83333V17.5C9.16667 16.837 9.43006 16.2011 9.89891 15.7322C10.3677 15.2634 11.0036 15 11.6667 15H16.6667V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1667 2.50001C14.3856 2.28114 14.6454 2.10752 14.9314 1.98907C15.2173 1.87062 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87062 16.7353 1.98907C17.0213 2.10752 17.281 2.28114 17.5 2.50001C17.7189 2.71888 17.8925 2.97864 18.011 3.26462C18.1294 3.55061 18.1904 3.85707 18.1904 4.16668C18.1904 4.47629 18.1294 4.78275 18.011 5.06874C17.8925 5.35472 17.7189 5.61448 17.5 5.83334L6.25 17.0833L1.66667 18.3333L2.91667 13.75L14.1667 2.50001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.66667V18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.8333 5C15.8333 3.61929 13.2217 2.5 10 2.5C6.77834 2.5 4.16667 3.61929 4.16667 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.16667 5V11.6667C4.16667 13.0474 6.77834 14.1667 10 14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.8333 5V11.6667C15.8333 13.0474 13.2217 14.1667 10 14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 5.83333V10L12.5 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Session timeline data                                              */
/* ------------------------------------------------------------------ */

const sessionTimeline = [
  {
    duration: "5 min",
    title: "Warm-up",
    description: "Quick review of the previous session to reinforce learning",
  },
  {
    duration: "25 min",
    title: "Core Teaching",
    description: "New concept introduction with examples and guided practice",
  },
  {
    duration: "15 min",
    title: "Guided Practice",
    description: "Student works through problems with tutor support",
  },
  {
    duration: "10 min",
    title: "Independent Practice",
    description: "Student applies skills independently",
  },
  {
    duration: "5 min",
    title: "Wrap-up",
    description: "Summary, homework assignment, and preview of next session",
  },
];

/* ------------------------------------------------------------------ */
/*  Helper to get year label                                          */
/* ------------------------------------------------------------------ */


/* Unique intro content per year+subject for SEO differentiation */
const subjectIntros: Record<string, { intro: string; keyTopics: string; parentTip: string }> = {
  "year-2-maths": {
    intro: "Year 2 is where your child builds the critical number sense that everything else depends on. Our structured maths programme focuses on making numbers feel natural through hands-on learning, visual aids, and real-world examples that stick.",
    keyTopics: "Number & place value up to 1000, basic addition & subtraction strategies, introduction to fractions, 2D shapes, simple data collection, and telling time.",
    parentTip: "At this age, confidence matters more than speed. We focus on making sure your child truly understands each concept before moving on.",
  },
  "year-2-english": {
    intro: "Year 2 English is all about building the reading and writing foundations that will carry your child through school. Our programme develops phonics, reading fluency, and early writing skills in a structured, encouraging environment.",
    keyTopics: "Phonics and decoding, reading comprehension, narrative writing, basic grammar and sentence structure, spelling patterns, and building vocabulary through reading.",
    parentTip: "Reading together for just 10 minutes a day makes a measurable difference at this age. Our tutors will recommend the right books for your child's level.",
  },
  "year-3-maths": {
    intro: "Year 3 maths introduces more complex operations and the beginning of formal mathematical reasoning. This is the year multiplication tables become essential, and our programme ensures your child masters them with confidence.",
    keyTopics: "Place value to 10,000, multiplication and division concepts, introduction to fractions and decimals, perimeter, angles, symmetry, and interpreting data from graphs.",
    parentTip: "Year 3 is a NAPLAN testing year. Our sessions naturally build the reasoning skills NAPLAN assesses, without the stress of 'test prep.'",
  },
  "year-3-english": {
    intro: "Year 3 English moves beyond basic literacy into deeper comprehension and more structured writing. Your child will learn to read between the lines and express ideas clearly in different text types.",
    keyTopics: "Reading fluency and comprehension, informative and narrative writing, parts of speech, persuasive language basics, poetry appreciation, and spelling through word families.",
    parentTip: "Year 3 is a NAPLAN year for literacy too. The best preparation is strong reading habits and regular writing practice, both of which we build into every session.",
  },
  "year-4-maths": {
    intro: "Year 4 maths builds on foundations with more challenging operations and introduces concepts that many students find tricky for the first time. This is where gaps from earlier years start to show, and our programme addresses them head-on.",
    keyTopics: "Multi-digit multiplication and division, fractions with different denominators, financial maths and money, 3D objects, location and direction, capacity, volume, and interpreting data.",
    parentTip: "If your child struggled with multiplication in Year 3, Year 4 fractions will be harder. We always check and fill earlier gaps before pushing forward.",
  },
  "year-4-english": {
    intro: "Year 4 English deepens reading comprehension and introduces more creative and analytical writing. Students learn to infer meaning, identify text structures, and write with greater independence.",
    keyTopics: "Creative and persuasive writing, understanding text types and features, verb tenses, making inferences from texts, context clues for vocabulary, and structured paragraphs.",
    parentTip: "Encourage your child to read a variety of text types, not just fiction. News articles, instructions, and even recipes all build different comprehension skills.",
  },
  "year-5-maths": {
    intro: "Year 5 is a pivotal year in maths, bridging primary and middle school concepts. Decimals, percentages, and more complex fractions are introduced, and strong foundations from earlier years become essential.",
    keyTopics: "Decimals and place value, factors and multiples, equivalent fractions, percentages, fraction operations, perimeter and area, probability, and multi-step problem solving.",
    parentTip: "Year 5 is another NAPLAN year. Students who understand the 'why' behind maths operations, not just the 'how,' consistently perform better.",
  },
  "year-5-english": {
    intro: "Year 5 English introduces formal and informal registers, complex sentence structures, and deeper text analysis. Your child will learn to write persuasively, read critically, and express ideas with greater sophistication.",
    keyTopics: "Formal and informal language registers, complex sentences, persuasive and narrative writing, multimodal text analysis, reading comprehension strategies, and NAPLAN literacy preparation.",
    parentTip: "Ask your child to explain what they've read in their own words. If they can summarise and give an opinion, their comprehension is on track.",
  },
  "year-6-maths": {
    intro: "Year 6 maths prepares your child for the transition to high school. Concepts become more abstract, and the ability to think mathematically, rather than just calculate, becomes crucial.",
    keyTopics: "Advanced fractions and decimals, introduction to algebra, geometry and angles, data analysis and statistics, ratio concepts, and complex multi-step problem solving.",
    parentTip: "High school maths starts fast. Students who enter Year 7 with solid Year 6 foundations adapt much better than those who were just 'getting by.'",
  },
  "year-6-english": {
    intro: "Year 6 English focuses on analytical reading, structured essay writing, and preparing students for the more demanding literacy expectations of high school.",
    keyTopics: "Narrative and persuasive essay writing, advanced grammar and sentence structure, research skills, reading analysis and critical thinking, editing and proofreading, and independent reading strategies.",
    parentTip: "Writing regularly outside of school, even a journal or creative story, builds the writing stamina that high school demands.",
  },
  "year-7-maths": {
    intro: "Year 7 marks the start of secondary maths. New concepts like integers, algebraic thinking, and coordinate geometry are introduced, and the pace of learning increases significantly.",
    keyTopics: "Integers and negative numbers, ratios and rates, algebraic expressions and equations, coordinate geometry, statistics and probability, and mathematical reasoning.",
    parentTip: "The transition to high school maths is where many students fall behind. A strong tutor who understands both the curriculum and your child's gaps makes all the difference.",
  },
  "year-7-english": {
    intro: "Year 7 English demands higher-order thinking, analytical writing, and engagement with more complex texts. Students are expected to form and defend arguments, analyse literary techniques, and write with precision.",
    keyTopics: "Analytical and argumentative writing, literary analysis and techniques, complex text types, advanced punctuation and grammar, oral presentations, and media literacy.",
    parentTip: "Encourage your child to read widely and discuss what they read. The ability to articulate an opinion about a text is the single most valuable English skill in high school.",
  },
  "year-2-science": {
    intro: "Year 2 Science is all about building curiosity and understanding the world around your child. Our program introduces basic scientific ideas through observation, simple experiments, and real-life examples in a structured and engaging way.",
    keyTopics: "Living and non-living things, basic life cycles, weather and seasons, materials and their properties, simple forces, and observation skills.",
    parentTip: "Encourage your child to ask 'why' and 'how' questions during daily activities — curiosity is the foundation of science learning.",
  },
  "year-3-science": {
    intro: "Year 3 Science focuses on understanding how living things grow and how the physical world works. Students begin connecting concepts with real-life examples and structured thinking.",
    keyTopics: "Life cycles, soil and rocks, heat and energy, states of matter (basic), and simple scientific investigations.",
    parentTip: "Simple home experiments like observing plants grow can significantly improve understanding.",
  },
  "year-4-science": {
    intro: "Year 4 Science helps students understand ecosystems, forces, and materials in a more structured way. The focus is on connecting scientific concepts with real-world applications.",
    keyTopics: "Food chains, ecosystems, water cycle, forces (push, pull, friction), and properties of materials.",
    parentTip: "Discuss everyday examples like cooking or weather to reinforce concepts naturally.",
  },
  "year-5-science": {
    intro: "Year 5 Science develops deeper understanding of how the natural world works through reasoning and analysis. Students begin exploring scientific explanations and real-world applications.",
    keyTopics: "Adaptations of living things, erosion and Earth changes, light and its behaviour, states of matter and particle model (intro).",
    parentTip: "Encourage your child to explain 'why something happens' — this builds strong scientific thinking.",
  },
  "year-6-science": {
    intro: "Year 6 Science focuses on systems, energy, and scientific investigation skills. Students develop the ability to analyse, experiment, and explain scientific concepts clearly.",
    keyTopics: "Habitats and environmental changes, Earth and space systems, electrical circuits, reversible and irreversible changes.",
    parentTip: "Let your child explore simple circuits or experiments at home — hands-on learning works best.",
  },
  "year-7-science": {
    intro: "Year 7 Science builds strong scientific thinking and introduces advanced concepts across all core areas. Students move from basic understanding to analysis, reasoning, and application.",
    keyTopics: "Classification of living things, ecosystems and food webs, Earth-Sun-Moon systems, forces, particle theory, mixtures and separation techniques.",
    parentTip: "Encourage your child to question and challenge concepts — this is key to developing analytical thinking.",
  },
};


function getYearLabel(yearId: string): string {
  const yearNum = yearId.replace("year-", "");
  return `Year ${yearNum}`;
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function SubjectDetailPage() {
  const params = useParams<{ yearId: string; subjectId: string }>();
  const router = useRouter();
  const yearId = params.yearId;
  const subjectId = params.subjectId;

  // Get year data
  const yearData = (subjectsData as Record<string, Record<string, unknown>>)[yearId];

  // Determine active subject
  const [activeSubject, setActiveSubject] = useState<"maths" | "english" | "science">(
    subjectId === "english" ? "english" : subjectId === "science" ? "science" : "maths"
  );

  // Get subject data
  const data = yearData?.[activeSubject] as {
    pageTitle: string;
    introHeading: string;
    introP1: string;
    introP2: string;
    term1: { title: string; topics: { name: string; description: string }[] };
    term2: { title: string; topics: { name: string; description: string }[] };
    term3: { title: string; topics: { name: string; description: string }[] };
    term4: { title: string; topics: { name: string; description: string }[] };
    sidebar: {
      title: string;
      subtitle: string;
      buttonText: string;
      buttonLink?: string;
      keyAreas: string[];
      description?: string;
    };
  } | undefined;

  // Fallback for invalid params
  if (!yearData || !data) {
    return (
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h1>Subject Not Found</h1>
          <p style={{ marginTop: "var(--spacing-4)" }}>
            The requested subject page could not be found.
          </p>
          <Link href="/subjects" className="btn btn-primary btn-lg" style={{ marginTop: "var(--spacing-6)", display: "inline-flex" }}>
            Back to Subjects
          </Link>
        </div>
      </section>
    );
  }

  const yearLabel = getYearLabel(yearId);
  const subjectLabel = activeSubject === "maths" ? "Maths" : activeSubject === "science" ? "Science" : "English";

  const courseSchema = createCourseSchema(
    yearLabel,
    subjectLabel,
    `40 structured ${subjectLabel} tutoring sessions for ${yearLabel} students, aligned with the school curriculum. Delivered live through 1-on-1 or small group online sessions.`
  );
  const subjectBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://tutorexel.com" },
    { name: "Subjects", url: "https://tutorexel.com/subjects" },
    { name: yearLabel, url: `https://tutorexel.com/subjects/${yearId}/maths` },
    { name: subjectLabel, url: `https://tutorexel.com/subjects/${yearId}/${activeSubject}` },
  ]);

  // Term tabs
  const terms = ["term1", "term2", "term3", "term4"] as const;
  const termLabels = { term1: "Term 1", term2: "Term 2", term3: "Term 3", term4: "Term 4" };
  const [activeTerm, setActiveTerm] = useState<typeof terms[number]>("term1");

  // Handle subject toggle
  const handleSubjectToggle = (subject: "maths" | "english" | "science") => {
    setActiveSubject(subject);
    setActiveTerm("term1");
    router.push(`/subjects/${yearId}/${subject}`, { scroll: false });
  };

  // Get current term data
  const currentTermData = data[activeTerm];

  // Get learning outcomes from years.ts (the "By the End of Year X" bullet points)
  const subjectDataFromYears = getSubjectData(yearId, activeSubject);
  const learningOutcomes = subjectDataFromYears?.learningOutcomes ?? [];

  // Explore More: other subjects in same year
  const otherSubjects = (["maths", "english", "science"] as const).filter(s => s !== activeSubject);
  const otherSubjectId = otherSubjects[0];
  const otherSubjectLabel = otherSubjectId === "maths" ? "Maths" : otherSubjectId === "science" ? "Science" : "English";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subjectBreadcrumbSchema) }}
      />
      {/* ===== Banner Section (Contact page style) ===== */}
      <section className="detail-banner">
        <div className="detail-banner__decoration detail-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="detail-banner__curve detail-banner__curve--1"
          />
        </div>
        <div className="detail-banner__decoration detail-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="detail-banner__curve detail-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="detail-banner__curve detail-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="detail-banner__content">
            <h1 className="detail-banner__title">
              {yearLabel}, {subjectLabel},{" "}
              <span className="detail-banner__title-highlight">Tutoring</span>
              {" "}Curriculum{" "}
              <span className="detail-banner__title-highlight">Aligned</span>
              <span className="detail-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="detail-banner__subtitle">
              40 structured online tutoring sessions covering the complete {yearLabel} {subjectLabel} school curriculum.
              Delivered live through personalised 1-on-1 or small group sessions with qualified tutors.
            </p>
            <div className="detail-banner__actions">
              <Link href="/free-trial" className="btn btn-primary btn-lg">
                Start Your Free Trial Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Unique Year+Subject Introduction ===== */}
      {(() => {
        const key = `${yearId}-${activeSubject}`;
        const intro = subjectIntros[key];
        if (!intro) return null;
        return (
          <section style={{ padding: '40px 0' }}>
            <div className="container">
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#5a6b78', marginBottom: '20px' }}>{intro.intro}</p>
                <div style={{ background: '#f7f5f0', borderRadius: '10px', padding: '20px', marginBottom: '16px', borderLeft: '3px solid #3d8b7a' }}>
                  <p style={{ fontWeight: 700, fontSize: '14px', color: '#1a2e3b', marginBottom: '6px' }}>Key Topics Covered:</p>
                  <p style={{ fontSize: '14px', color: '#5a6b78', lineHeight: 1.6 }}>{intro.keyTopics}</p>
                </div>
                <div style={{ background: '#fff5f0', borderRadius: '10px', padding: '20px', borderLeft: '3px solid #d4654a' }}>
                  <p style={{ fontWeight: 700, fontSize: '14px', color: '#1a2e3b', marginBottom: '6px' }}>Parent Tip:</p>
                  <p style={{ fontSize: '14px', color: '#5a6b78', lineHeight: 1.6 }}>{intro.parentTip}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ===== Learning Outcomes Section ===== */}
      <section className="detail-outcomes section">
        <div className="container">
          {/* Center-aligned header */}
          <div className="detail-outcomes__header">
            <p className="detail-outcomes__label">
              <CircleIcon />
              What Your Child Will Master
            </p>
            <h2 className="detail-outcomes__title">
              By the End of {yearLabel} {subjectLabel}, Your Child Will...
            </h2>
          </div>

          <div className="detail-outcomes__grid">
            <div className="detail-outcomes__main">
              <div className="detail-outcomes__list">
                {learningOutcomes.map((outcome, i) => (
                  <div key={i} className="detail-outcomes__item">
                    <CheckIcon />
                    <span className="detail-outcomes__text">{outcome.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="detail-outcomes__image">
              <Image
                src="/images/subjects/learning_outcomes_image.webp"
                alt={`${yearLabel} ${subjectLabel} student learning`}
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Curriculum Table with Toggle ===== */}
      <section id="curriculum" className="detail-curriculum section">
        <div className="container">
          {/* Header with star icon */}
          <div className="detail-curriculum__header">
            <p className="detail-curriculum__label">
              <span className="detail-curriculum__star"><img src="/images/icons/circle_icon.webp" alt="Star" width={20} height={20} /></span>
              4 terms. 10 sessions each. Every curriculum standard covered.
            </p>
            <h2 className="detail-curriculum__title">
              Complete {yearLabel} {subjectLabel} Curriculum
            </h2>
          </div>

          {/* Subject Toggle */}
          <div className="detail-curriculum__toggle">
            <button
              onClick={() => handleSubjectToggle("english")}
              className={`detail-curriculum__toggle-btn${activeSubject === "english" ? " detail-curriculum__toggle-btn--active" : ""
                }`}
            >
              English
            </button>
            <button
              onClick={() => handleSubjectToggle("maths")}
              className={`detail-curriculum__toggle-btn${activeSubject === "maths" ? " detail-curriculum__toggle-btn--active" : ""
                }`}
            >
              Maths
            </button>
            <button
              onClick={() => handleSubjectToggle("science")}
              className={`detail-curriculum__toggle-btn${activeSubject === "science" ? " detail-curriculum__toggle-btn--active" : ""
                }`}
            >
              Science
            </button>
          </div>

          {/* Term Tabs */}
          <div className="detail-curriculum__tabs-wrapper">
            <div className="detail-curriculum__tabs">
              {terms.map((term) => (
                <button
                  key={term}
                  onClick={() => setActiveTerm(term)}
                  className={`detail-curriculum__tab${activeTerm === term ? " detail-curriculum__tab--active" : ""
                    }`}
                >
                  {termLabels[term]}
                </button>
              ))}
            </div>
            <div className="detail-curriculum__tabs-line">
              <div
                className="detail-curriculum__tabs-line-active"
                style={{
                  left: `${terms.indexOf(activeTerm) * 180}px`,
                  width: '168px'
                }}
              />
            </div>
          </div>

          {/* Table Card — Gated: show first 3 rows, blur the rest */}
          <div className="detail-curriculum__gated-wrapper">
            <div className="detail-curriculum__table-card">
              <table className="detail-curriculum__table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Topic</th>
                    <th>What We Cover</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTermData.topics.map((topic, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "row-light" : "row-white"}${i >= 2 ? " gated-row" : ""}`}>
                      <td>{String(terms.indexOf(activeTerm) * 10 + i + 1).padStart(2, '0')}</td>
                      <td>{topic.name}</td>
                      <td>{topic.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Gated overlay — fades over blurred rows */}
            {currentTermData.topics.length > 2 && (
              <div className="detail-curriculum__gate-overlay">
                <div className="detail-curriculum__gate-content">
                  <div className="detail-curriculum__gate-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h3 className="detail-curriculum__gate-title">
                    Book a Free Trial to See the Full Curriculum
                  </h3>
                  <p className="detail-curriculum__gate-text">
                    Experience our structured teaching approach firsthand.
                    Your child&apos;s first lesson is completely free.
                  </p>
                  <BookTrialButton className="detail-curriculum__gate-btn">
                    Book Your Free Trial Lesson
                  </BookTrialButton>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ===== What a Typical Session Looks Like ===== */}
      <section className="detail-session section">
        <div className="container">
          <div className="detail-session__header">
            <p className="detail-session__label">
              <CircleIcon />
              Every TutorExel session follows a proven structure
            </p>
            <h2 className="detail-session__title">
              What a Typical Session Looks Like
            </h2>
          </div>

          <div className="detail-session__grid">
            <div className="detail-session__image">
              <Image
                src="/images/subjects/detail-session__image.webp"
                alt="Student in a tutoring session with their tutor"
                width={600}
                height={400}
              />
            </div>
            <div className="detail-session__timeline">
              {sessionTimeline.map((step, i) => (
                <div key={i} className="detail-timeline-item">
                  <h3 className="detail-timeline-item__title">
                    {step.title} <span className="detail-timeline-item__duration">({step.duration})</span>
                  </h3>
                  <p className="detail-timeline-item__description">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Testimonials (Same as Home Page) ===== */}
      <Testimonials />

      {/* ===== Explore More ===== */}
      <section className="detail-explore section">
        <div className="container">
          <div className="detail-explore__header">
            <h2 className="detail-explore__title">Explore More</h2>
          </div>

          <div className="detail-explore__grid">
            <div className="detail-explore__card">
              <span className="detail-explore__badge">
                SAME YEAR
              </span>
              <h3 className="detail-explore__card-title">
                {yearLabel} {otherSubjectLabel}
              </h3>
              <p className="detail-explore__card-description">
                Explore the full {yearLabel} {otherSubjectLabel} curriculum with 40
                structured sessions aligned to the school curriculum.
              </p>
              <Link href={`/subjects/${yearId}/${otherSubjectId}`} className="detail-explore__btn">
                Know more
              </Link>
            </div>

            <div className="detail-explore__card">
              <span className="detail-explore__badge">
                PRICING
              </span>
              <h3 className="detail-explore__card-title">Transparent Pricing</h3>
              <p className="detail-explore__card-description">
                See our clear, straightforward pricing plans for all year levels.
                No hidden fees, no lock-in contracts &ndash; just great value tutoring.
              </p>
              <Link href="/pricing" className="detail-explore__btn">
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section (Same as Home Page) ===== */}
      <CTA />
    </>
  );
}
