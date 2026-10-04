"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import RegionLink from "@/components/shared/RegionLink";
import { useRegion } from "@/hooks/useRegion";
import { useRegionalRouter } from "@/hooks/useRegionalRouter";
import { subjectsData } from "@/data/subjectsData";
import { getSubjectData } from "@/data/years";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import BookTrialButton from "@/components/home/BookTrialButton";
import { createCourseSchema, createBreadcrumbSchema } from "@/utils/schema";
import { type RegionCode } from "@/utils/regionalLinks";
import { getRegionConfig } from "@/data/regions";
import { getSubjectCopy } from "@/data/copy/au-subject-copy";
import "@/app/subjects/[yearId]/[subjectId]/subject-detail.css";

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
    parentTip: "Encourage your child to ask 'why' and 'how' questions during daily activities - curiosity is the foundation of science learning.",
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
    parentTip: "Encourage your child to explain 'why something happens' - this builds strong scientific thinking.",
  },
  "year-6-science": {
    intro: "Year 6 Science focuses on systems, energy, and scientific investigation skills. Students develop the ability to analyse, experiment, and explain scientific concepts clearly.",
    keyTopics: "Habitats and environmental changes, Earth and space systems, electrical circuits, reversible and irreversible changes.",
    parentTip: "Let your child explore simple circuits or experiments at home - hands-on learning works best.",
  },
  "year-7-science": {
    intro: "Year 7 Science builds strong scientific thinking and introduces advanced concepts across all core areas. Students move from basic understanding to analysis, reasoning, and application.",
    keyTopics: "Classification of living things, ecosystems and food webs, Earth-Sun-Moon systems, forces, particle theory, mixtures and separation techniques.",
    parentTip: "Encourage your child to question and challenge concepts - this is key to developing analytical thinking.",
  },
  "year-8-maths": {
    intro: "Year 8 maths deepens algebraic thinking, linear relationships, and geometric reasoning. Our structured program ensures students master essential concepts such as Pythagoras' theorem, ratios, and rates with confidence.",
    keyTopics: "Ratios and rates, algebra, linear equations, Pythagoras' theorem, area and volume, probability.",
    parentTip: "Year 8 builds the algebraic foundations required for senior maths pathways. Regular practice prevents gaps from widening.",
  },
  "year-8-english": {
    intro: "Year 8 English focuses on critical analysis, persuasive writing, and novel study. Our program prepares students for the higher expectations of high school English and builds toward Year 9 NAPLAN.",
    keyTopics: "Persuasive writing, text analysis, novel study, grammar, building towards Year 9 NAPLAN.",
    parentTip: "Encourage discussion of themes and author perspectives in books and media to sharpen analytical thinking.",
  },
  "year-8-science": {
    intro: "Year 8 Science explores cellular biology, body systems, chemical mixtures, energy transformations, and geological processes, developing rigorous scientific investigation skills.",
    keyTopics: "Cells, body systems, mixtures and compounds, energy, rock cycle.",
    parentTip: "Connecting scientific concepts like energy transfer and body systems to daily health and technology fosters genuine engagement.",
  },
  "year-9-maths": {
    intro: "Year 9 maths introduces advanced algebraic techniques, trigonometry, and non-linear relationships, while reinforcing key numeracy skills for NAPLAN and senior school preparation.",
    keyTopics: "Expanding and factorising, indices, linear graphs, trigonometry, statistics, NAPLAN numeracy.",
    parentTip: "Year 9 is a critical NAPLAN year. Consistent practice with multi-step problem solving builds fluency and confidence under test conditions.",
  },
  "year-9-english": {
    intro: "Year 9 English demands sophisticated textual comparison, refined persuasive arguments, and mastery of language conventions to achieve top results in NAPLAN and secondary school assessments.",
    keyTopics: "Persuasive writing, comparing texts, language conventions, NAPLAN writing.",
    parentTip: "Comparative essay writing requires students to balance evidence from multiple texts. Practising structured outlines makes a major difference.",
  },
  "year-9-science": {
    intro: "Year 9 Science investigates atomic theory, chemical reactions, ecosystems, body systems, and energy transfer, fostering analytical reasoning and evidence-based inquiry.",
    keyTopics: "Ecosystems, body systems, atomic structure, chemical reactions, energy transfer.",
    parentTip: "Understanding the atomic model and chemical equations gives students a significant head start in senior chemistry and biology.",
  },
  "year-10-maths": {
    intro: "Year 10 maths prepares students for senior secondary mathematics pathways through comprehensive coverage of quadratics, trigonometry, indices, and financial maths.",
    keyTopics: "Quadratics, indices, trigonometry, statistics, financial maths, senior maths pathways.",
    parentTip: "Year 10 performance determines senior subject selections. Early support keeps all senior pathways open.",
  },
  "year-10-english": {
    intro: "Year 10 English focuses on analytical and persuasive essay writing, comparative literature study, and high-level critical thinking to ensure senior English readiness.",
    keyTopics: "Analytical and persuasive essays, comparing texts, senior English readiness.",
    parentTip: "Senior English requires sustained essay writing under timed conditions. Developing strong thesis statements is vital.",
  },
  "year-10-science": {
    intro: "Year 10 Science covers genetics and evolutionary theory, cosmology and the Big Bang, chemical reactions, and the laws of motion and forces, laying the ground for senior sciences.",
    keyTopics: "Genetics and evolution, the Big Bang, chemical reactions, motion and forces.",
    parentTip: "Year 10 is the bridge to senior Physics, Chemistry, and Biology. Mastering quantitative problem solving now builds lasting confidence.",
  },
};

function getYearLabel(yearId: string): string {
  const yearNum = yearId.replace("year-", "");
  return `Year ${yearNum}`;
}

export interface SubjectDetailViewProps {
  region?: RegionCode;
}

export default function SubjectDetailView({ region }: SubjectDetailViewProps) {
  const params = useParams<{ yearId: string; subjectId: string }>();
  const router = useRegionalRouter();
  const { getHref, region: currentRegion } = useRegion();
  const yearId = params.yearId;
  const subjectId = params.subjectId;

  const effectiveRegion = region || currentRegion || "au";
  const isAu = effectiveRegion === "au";

  // Determine active subject
  const [activeSubject, setActiveSubject] = useState<"maths" | "english" | "science">(
    subjectId === "english" ? "english" : subjectId === "science" ? "science" : "maths"
  );

  const auCopy = getSubjectCopy(effectiveRegion, yearId, activeSubject);

  // Get year data
  const yearData = (subjectsData as Record<string, Record<string, unknown>>)[yearId];

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

  const regConfig = getRegionConfig(effectiveRegion);
  const levelWord = regConfig.yearLabel;
  const mathLabel = regConfig.mathLabel;

  // Fallback for invalid params
  if (!yearData || !data) {
    notFound();
  }

  const yearNum = yearId.replace("year-", "");
  const yearLabel = `${levelWord} ${yearNum}`;
  const subjectLabel = activeSubject === "maths" ? mathLabel : activeSubject === "science" ? "Science" : "English";

  const courseSchema = createCourseSchema(
    yearLabel,
    subjectLabel,
    `40 structured ${subjectLabel} tutoring sessions for ${yearLabel} students, aligned with the school curriculum. Delivered live through 1-on-1 or small group online sessions.`,
    regConfig.code
  );

  const rootUrl = "https://www.tutorexel.com";
  const homeHref = getHref("/");
  const homeUrl = homeHref === "/" ? rootUrl : `${rootUrl}${homeHref}`;
  const breadcrumbItems = effectiveRegion === "ca"
    ? [
        { name: "Home", url: homeUrl },
        { name: yearLabel, url: `${rootUrl}${getHref(`/subjects/${yearId}/maths`)}` },
        { name: subjectLabel, url: `${rootUrl}${getHref(`/subjects/${yearId}/${activeSubject}`)}` },
      ]
    : [
        { name: "Home", url: homeUrl },
        { name: "Subjects", url: `${rootUrl}${getHref("/subjects")}` },
        { name: yearLabel, url: `${rootUrl}${getHref(`/subjects/${yearId}/maths`)}` },
        { name: subjectLabel, url: `${rootUrl}${getHref(`/subjects/${yearId}/${activeSubject}`)}` },
      ];
  const subjectBreadcrumbSchema = createBreadcrumbSchema(breadcrumbItems);

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

  // Get learning outcomes from years.ts
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
      {/* ===== Banner Section ===== */}
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
              {auCopy ? (
                auCopy.hero.h1
              ) : (
                <>
                  {yearLabel}, {subjectLabel},{" "}
                  <span className="detail-banner__title-highlight">Tutoring</span>
                  {" "}Curriculum{" "}
                  <span className="detail-banner__title-highlight">Aligned</span>
                  <span className="detail-banner__title-star">
                    <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
                  </span>
                </>
              )}
            </h1>
            <p className="detail-banner__subtitle">
              {auCopy
                ? auCopy.hero.text
                : `40 structured online tutoring sessions covering the complete ${yearLabel} ${subjectLabel} school curriculum. Delivered live through personalised 1-on-1 or small group sessions with qualified tutors.`}
            </p>
            <div className="detail-banner__actions">
              <RegionLink href="/free-trial" region={region} className="btn btn-primary btn-lg">
                {auCopy ? auCopy.hero.primaryCtaText : "Start Your Free Trial Now"}
              </RegionLink>
              {auCopy?.hero.secondaryCtaText && (
                <RegionLink
                  href="/free-assessment"
                  region={region}
                  className="btn btn-secondary btn-lg"
                  style={{ marginLeft: "12px" }}
                >
                  {auCopy.hero.secondaryCtaText}
                </RegionLink>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Unique Year+Subject Introduction ===== */}
      {(() => {
        const key = `${yearId}-${activeSubject}`;
        const intro = subjectIntros[key];
        const resolvedIntro = auCopy ? auCopy.intro.text : intro?.intro;
        const resolvedKeyTopics = auCopy ? auCopy.intro.keyTopics : intro?.keyTopics;
        const resolvedParentTip = auCopy ? auCopy.intro.parentTip : intro?.parentTip;
        if (!resolvedIntro) return null;
        return (
          <section style={{ padding: '40px 0' }}>
            <div className="container">
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#5a6b78', marginBottom: '20px' }}>{resolvedIntro}</p>
                <div style={{ background: '#f7f5f0', borderRadius: '10px', padding: '20px', marginBottom: '16px', borderLeft: '3px solid #3d8b7a' }}>
                  <p style={{ fontWeight: 700, fontSize: '14px', color: '#1a2e3b', marginBottom: '6px' }}>Key Topics Covered:</p>
                  <p style={{ fontSize: '14px', color: '#5a6b78', lineHeight: 1.6 }}>{resolvedKeyTopics}</p>
                </div>
                <div style={{ background: '#fff5f0', borderRadius: '10px', padding: '20px', borderLeft: '3px solid #d4654a' }}>
                  <p style={{ fontWeight: 700, fontSize: '14px', color: '#1a2e3b', marginBottom: '6px' }}>Parent Tip:</p>
                  <p style={{ fontSize: '14px', color: '#5a6b78', lineHeight: 1.6 }}>{resolvedParentTip}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ===== Learning Outcomes Section ===== */}
      <section className="detail-outcomes section">
        <div className="container">
          <div className="detail-outcomes__header">
            <p className="detail-outcomes__label">
              <CircleIcon />
              {auCopy ? auCopy.outcomes.eyebrow : "What Your Child Will Master"}
            </p>
            <h2 className="detail-outcomes__title">
              {auCopy ? auCopy.outcomes.h2 : `By the End of ${yearLabel} ${subjectLabel}, Your Child Will...`}
            </h2>
          </div>

          <div className="detail-outcomes__grid">
            <div className="detail-outcomes__main">
              <div className="detail-outcomes__list">
                {(auCopy ? auCopy.outcomes.items.map((t) => ({ text: t })) : learningOutcomes).map((outcome, i) => (
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
                alt={auCopy ? auCopy.outcomes.imageAlt : `${yearLabel} ${subjectLabel} student learning`}
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
          <div className="detail-curriculum__header">
            <p className="detail-curriculum__label">
              <span className="detail-curriculum__star">
                <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} />
              </span>
              {auCopy ? auCopy.curriculum.eyebrow : "4 terms. 10 sessions each. Every curriculum standard covered."}
            </p>
            <h2 className="detail-curriculum__title">
              {auCopy ? auCopy.curriculum.h2 : `Complete ${yearLabel} ${subjectLabel} Curriculum`}
            </h2>
          </div>

          {/* Subject Toggle */}
          <div className="detail-curriculum__toggle">
            <button
              onClick={() => handleSubjectToggle("english")}
              className={`detail-curriculum__toggle-btn${activeSubject === "english" ? " detail-curriculum__toggle-btn--active" : ""}`}
            >
              English
            </button>
            <button
              onClick={() => handleSubjectToggle("maths")}
              className={`detail-curriculum__toggle-btn${activeSubject === "maths" ? " detail-curriculum__toggle-btn--active" : ""}`}
            >
              {mathLabel}
            </button>
            <button
              onClick={() => handleSubjectToggle("science")}
              className={`detail-curriculum__toggle-btn${activeSubject === "science" ? " detail-curriculum__toggle-btn--active" : ""}`}
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
                  className={`detail-curriculum__tab${activeTerm === term ? " detail-curriculum__tab--active" : ""}`}
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

          {/* Table Card */}
          {auCopy ? (
            <div className="detail-curriculum__all-terms">
              {auCopy.curriculum.terms.map((termObj) => {
                const isCurrent = activeTerm === termObj.termKey;
                return (
                  <div
                    key={termObj.termKey}
                    className={`detail-curriculum__term-panel${isCurrent ? " detail-curriculum__term-panel--active" : ""}`}
                    style={{ display: isCurrent ? "block" : "none" }}
                  >
                    <h3
                      className="sr-only"
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "1px",
                        padding: 0,
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        border: 0,
                      }}
                    >
                      {termObj.termTitle}
                    </h3>
                    <div className="detail-curriculum__gated-wrapper">
                      <div className="detail-curriculum__table-card">
                        <table className="detail-curriculum__table">
                          <thead>
                            <tr>
                              <th>No.</th>
                              <th>Topic</th>
                              <th>What We Cover</th>
                            </tr>
                          </thead>
                          <tbody>
                            {termObj.topics.map((topic, i) => (
                              <tr
                                key={i}
                                className={`${i % 2 === 0 ? "row-light" : "row-white"}${i >= 2 ? " gated-row" : ""}`}
                              >
                                <td>{topic.no}</td>
                                <td>{topic.topic}</td>
                                <td>{topic.whatWeCover}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Gated overlay - locked box */}
                      <div className="detail-curriculum__gate-overlay">
                        <div className="detail-curriculum__gate-content">
                          <div className="detail-curriculum__gate-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                          </div>
                          <h3 className="detail-curriculum__gate-title">
                            {auCopy.lockedBox.h2}
                          </h3>
                          <p className="detail-curriculum__gate-text">
                            {auCopy.lockedBox.text}
                          </p>
                          <BookTrialButton className="detail-curriculum__gate-btn">
                            {auCopy.lockedBox.buttonText}
                          </BookTrialButton>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : currentTermData.topics && currentTermData.topics.length > 0 ? (
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

              {/* Gated overlay - fades over blurred rows */}
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
          ) : (
            <div className="detail-curriculum__empty-state" style={{
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              padding: "40px 24px",
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto",
            }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1A2E3B", marginBottom: "12px" }}>
                Curriculum Structure
              </h3>
              <p style={{ fontSize: "15px", color: "#5A6B78", lineHeight: 1.7, marginBottom: "24px" }}>
                Our {yearLabel} {subjectLabel} program spans 4 school terms with 10 structured sessions each, fully aligned to the Australian Curriculum. Detailed term-by-term weekly topic schedules are provided upon enrolment.
              </p>
              <BookTrialButton className="btn btn-primary btn-lg">
                Book Your Free Trial Lesson
              </BookTrialButton>
            </div>
          )}

        </div>
      </section>

      {/* ===== What a Typical Session Looks Like ===== */}
      <section className="detail-session section">
        <div className="container">
          <div className="detail-session__header">
            <p className="detail-session__label">
              <CircleIcon />
              {auCopy ? auCopy.lessonStructure.eyebrow : "Every TutorExel session follows a proven structure"}
            </p>
            <h2 className="detail-session__title">
              {auCopy ? auCopy.lessonStructure.h2 : "What a Typical Session Looks Like"}
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
              {(auCopy ? auCopy.lessonStructure.steps : sessionTimeline).map((step, i) => (
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

      {/* ===== Testimonials ===== */}
      {regConfig.showTestimonials && <Testimonials region={effectiveRegion} />}

      {/* ===== Explore More ===== */}
      <section className="detail-explore section">
        <div className="container">
          <div className="detail-explore__header">
            <h2 className="detail-explore__title">{auCopy ? auCopy.keepExploring.h2 : "Explore More"}</h2>
          </div>

          <div className="detail-explore__grid">
            {auCopy ? (
              auCopy.keepExploring.cards.map((card, i) => (
                <div key={i} className="detail-explore__card">
                  <span className="detail-explore__badge">{card.tag}</span>
                  <h3 className="detail-explore__card-title">{card.title}</h3>
                  <p className="detail-explore__card-description">{card.text}</p>
                  <RegionLink href={card.href} region={region} className="detail-explore__btn">
                    {card.buttonText}
                  </RegionLink>
                </div>
              ))
            ) : (
              <>
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
                  <RegionLink
                    href={`/subjects/${yearId}/${otherSubjectId}`}
                    region={region}
                    className="detail-explore__btn"
                  >
                    Know more
                  </RegionLink>
                </div>

                <div className="detail-explore__card">
                  <span className="detail-explore__badge">
                    PRICING
                  </span>
                  <h3 className="detail-explore__card-title">Transparent Pricing</h3>
                  <p className="detail-explore__card-description">
                    See our clear, straightforward pricing plans for all year levels.
                    No hidden fees, no lock-in contracts - just great value tutoring.
                  </p>
                  <RegionLink
                    href="/pricing"
                    region={region}
                    className="detail-explore__btn"
                  >
                    Know more
                  </RegionLink>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <CTA
        region={region}
        title={auCopy?.finalCta.h2}
        description={auCopy?.finalCta.text}
        buttonText={auCopy?.finalCta.buttonText}
      />
    </>
  );
}
