"use client";

import Link from "next/link";
import Image from "next/image";

import "./guitar.css";

/* ---- Data ---- */

const educationCards = [
  {
    title: "Technique",
    description:
      "Build proper finger positioning, strumming patterns, chord transitions, and picking techniques from day one.",
    highlighted: false,
    icon: "technique",
  },
  {
    title: "Repertoire",
    description:
      "Learn a diverse range of pieces across genres — classical, pop, rock, and folk — matched to your grade level.",
    highlighted: true,
    icon: "repertoire",
  },
  {
    title: "Theory & Musicianship",
    description:
      "Understand music notation, scales, keys, time signatures, and ear training alongside practical skills.",
    highlighted: false,
    icon: "theory",
  },
  {
    title: "Creativity",
    description:
      "Develop improvisation and songwriting skills. Express yourself musically with confidence and originality.",
    highlighted: false,
    icon: "creativity",
  },
  {
    title: "Performance Skills",
    description:
      "Build confidence performing for others. Learn stage presence, pacing, and how to manage performance nerves.",
    highlighted: false,
    icon: "performance",
  },
];

const grades = [
  { short: "IG", label: "Initial Grade" },
  { short: "1", label: "Grade 1" },
  { short: "2", label: "Grade 2" },
  { short: "3", label: "Grade 3" },
  { short: "4", label: "Grade 4" },
  { short: "5", label: "Grade 5" },
  { short: "6", label: "Grade 6" },
  { short: "7", label: "Grade 7" },
  { short: "8", label: "Grade 8" },
];

const lessonItems = [
  { time: "10 min", title: "Warm-up", description: "Scales, finger exercises, and technique drills to build dexterity and muscle memory." },
  { time: "20 min", title: "Repertoire", description: "Working through set pieces, refining expression, dynamics, and accuracy." },
  { time: "15 min", title: "Theory", description: "Music theory, sight-reading, and aural training exercises." },
  { time: "15 min", title: "Creative Time", description: "Improvisation, songwriting, or exploring a piece of the student's choice." },
];

const lessonDetails = [
  { label: "Duration", value: "60 minutes" },
  { label: "Format", value: "One-on-one online" },
  { label: "Frequency", value: "Weekly" },
  { label: "Homework", value: "Student practice assignments" },
];

const audiences = [
  {
    title: "Complete Beginners (Ages 8+)",
    description:
      "Never touched a guitar? Perfect. We start from absolute basics — how to hold the guitar, first chords, and simple tunes.",
    underlined: true,
  },
  {
    title: "Students Already Learning",
    description:
      "If your child is already learning guitar but needs more structure, we place them at the right level and fill in any gaps.",
    underlined: true,
  },
  {
    title: "Students Preparing for Exams",
    description:
      "Preparing for Trinity College London graded exams? Our tutors know the syllabus inside out and will get your child exam-ready.",
    underlined: true,
  },
  {
    title: "Adult Learners",
    description:
      "It is never too late to learn. We welcome adult students who want to pick up the guitar or return to playing after a break.",
    underlined: false,
  },
];

const requirements = [
  { label: "A guitar pick", highlighted: false, icon: "pick" },
  { label: "A stable internet connection", highlighted: true, icon: "wifi" },
  { label: "A device with camera", highlighted: false, icon: "device" },
  { label: "A quiet practice space", highlighted: false, icon: "quiet" },
];

/* ---- Icons ---- */

function EducationIcon({ type }: { type: string }) {
  switch (type) {
    case "technique":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11.99 16.5-3.54 2.13a1 1 0 0 1-1.5-1.07l.88-4.01-3.11-2.7a1 1 0 0 1 .56-1.74l4.12-.35 1.6-3.84a1 1 0 0 1 1.81 0l1.6 3.84 4.12.35a1 1 0 0 1 .56 1.74l-3.11 2.7.88 4.01a1 1 0 0 1-1.5 1.07z" />
        </svg>
      );
    case "repertoire":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "theory":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          <path d="M8 7h6M8 11h8" />
        </svg>
      );
    case "creativity":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386z" />
        </svg>
      );
    case "performance":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      );
    default:
      return null;
  }
}

function RequirementIcon({ type }: { type: string }) {
  switch (type) {
    case "pick":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m20 8-4.2-2.1a3 3 0 0 0-2.7 0L9 8" />
          <path d="M12 2v6.5" />
          <path d="M6 10c-1.1 2-2 4.5-2 7 0 3 2 5 4.5 5s3.5-1.5 4-3c.5-1.5.5-3 0-4.5" />
          <path d="M18 10c1.1 2 2 4.5 2 7 0 3-2 5-4.5 5S12 20.5 12 19" />
        </svg>
      );
    case "wifi":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      );
    case "device":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "quiet":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      );
    default:
      return null;
  }
}

/* ---- Page ---- */

export default function GuitarPage() {
  return (
    <>
      {/* Hero */}
      <section className="guitar-hero">
        <div className="guitar-hero__decoration guitar-hero__decoration--left">
          <Image src="/images/about/left-line.webp" alt="" width={200} height={200} className="guitar-hero__curve" />
        </div>
        <div className="guitar-hero__decoration guitar-hero__decoration--right">
          <Image src="/images/about/star-design.webp" alt="" width={200} height={200} className="guitar-hero__stars" />
          <Image src="/images/about/right-line.webp" alt="" width={200} height={200} className="guitar-hero__curve-right" />
        </div>
        <div className="container">
          <div className="guitar-hero__content">
            <h1 className="guitar-hero__title">
              Online <span className="guitar-hero__title-highlight">Guitar Lessons</span> Trinity
              College London Syllabus <span className="guitar-hero__title-star"><Image src="/images/banner/Vector-2.webp" alt="" width={20} height={20} /></span>
            </h1>
            <p className="guitar-hero__subtitle">
              Structured, graded guitar education from Initial to Grade 8. Live one-on-one lessons with qualified tutors. For students aged 8 and up.
            </p>
            <div className="guitar-hero__actions">
              <Link href="/co-curricular/guitar/enquire" className="btn btn-primary btn-lg">
                Book Your Free Trial Lesson
              </Link>
              <Link href="/pricing" className="guitar-hero__btn-outline">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A Complete Guitar Education */}
      <section className="education">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">What Your Child Will Learn</p>
            <h2 className="section-header__title">A Complete Guitar Education</h2>
          </div>

          <div className="education__grid">
            {educationCards.slice(0, 3).map((card) => (
              <div
                className={`education-card${card.highlighted ? " education-card--highlighted" : ""}`}
                key={card.title}
              >
                <div className="education-card__icon">
                  <EducationIcon type={card.icon} />
                </div>
                <h3 className="education-card__title">{card.title}</h3>
                <p className="education-card__desc">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="education__grid--bottom">
            {educationCards.slice(3).map((card) => (
              <div
                className={`education-card${card.highlighted ? " education-card--highlighted" : ""}`}
                key={card.title}
              >
                <div className="education-card__icon">
                  <EducationIcon type={card.icon} />
                </div>
                <h3 className="education-card__title">{card.title}</h3>
                <p className="education-card__desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Progression Path */}
      <section className="grade-progression">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Grade Progression Path</p>
            <h2 className="section-header__title">Your Journey from Beginner to Advanced</h2>
          </div>

          <div className="grade-path">
            {grades.map((grade, i) => (
              <div key={grade.short} style={{ display: "flex", alignItems: "center" }}>
                <div className="grade-node">
                  <div className="grade-node__circle">{grade.short}</div>
                  <span className="grade-node__label">{grade.label}</span>
                </div>
                {i < grades.length - 1 && <div className="grade-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a Typical Lesson Looks Like */}
      <section className="lesson-structure">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Lesson Structure</p>
            <h2 className="section-header__title">What a Typical Lesson Looks Like</h2>
          </div>

          <div className="lesson-structure__layout">
            <div>
              <div className="lesson-timeline">
                {lessonItems.map((item) => (
                  <div className="lesson-item" key={item.title}>
                    <div className="lesson-item__time">
                      <span className="lesson-item__time-icon">&#128339;</span>
                      {item.time}
                    </div>
                    <div className="lesson-item__content">
                      <h4 className="lesson-item__title">{item.title}</h4>
                      <p className="lesson-item__desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lesson-details">
                {lessonDetails.map((detail) => (
                  <div className="lesson-detail" key={detail.label}>
                    <span className="lesson-detail__label">{detail.label}</span>
                    <span className="lesson-detail__value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lesson-structure__image">
              <img
                src="/images/co-curricular/what_a_typical_guitar.webp"
                alt="Student playing guitar during online lesson"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guitar Lessons for Everyone */}
      <section className="audience">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-header__label">Who Is This For</p>
            <h2 className="section-header__title">Guitar Lessons for Everyone</h2>
          </div>

          <div className="audience__layout">
            <div className="audience__image">
              <img
                src="/images/co-curricular/guitar_lessons_for_everyone.webp"
                alt="Student learning guitar"
              />
            </div>
            <div className="audience__list">
              {audiences.map((item) => (
                <div className="audience-item" key={item.title}>
                  <h3
                    className="audience-item__title"
                    style={!item.underlined ? { textDecoration: "none" } : undefined}
                  >
                    {item.title}
                  </h3>
                  <p className="audience-item__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Than Just Lessons - Requirements */}
      <section className="requirements">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-header__title">What You Will Need</h2>
          </div>

          <div className="requirements__grid">
            {requirements.map((req) => (
              <div
                className={`requirement-card${req.highlighted ? " requirement-card--highlighted" : ""}`}
                key={req.label}
              >
                <div className="requirement-card__icon">
                  <RequirementIcon type={req.icon} />
                </div>
                <p className="requirement-card__label">{req.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guitar Testimonials */}
      <section style={{padding:'48px 0',background:'#f7f5f0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'28px'}}>
            <h2 style={{fontFamily:'var(--font-poppins)',fontSize:'28px',fontWeight:700,color:'#1a2e3b'}}>What Parents Are Saying</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'20px',maxWidth:'800px',margin:'0 auto'}}>
            <div style={{background:'#fff',borderRadius:'12px',padding:'24px',border:'1px solid #efe9df'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'14px'}}>
                <div style={{width:'42px',height:'42px',borderRadius:'50%',background:'#d4654a',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'14px'}}>RK</div>
                <div>
                  <div style={{fontWeight:600,fontSize:'15px',color:'#1a2e3b'}}>Ravi K.</div>
                  <div style={{fontSize:'12px',color:'#8a9aa8'}}>Father of 10-year-old, Brisbane</div>
                </div>
              </div>
              <p style={{fontSize:'14px',color:'#5a6b78',lineHeight:1.6,fontStyle:'italic'}}>{"My son always wanted to learn guitar but we couldn't find a good teacher nearby. TutorExel matched him with a brilliant tutor who teaches online. He's now playing full songs after just 4 months and loves every session."}</p>
            </div>
            <div style={{background:'#fff',borderRadius:'12px',padding:'24px',border:'1px solid #efe9df'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'14px'}}>
                <div style={{width:'42px',height:'42px',borderRadius:'50%',background:'#3d8b7a',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'14px'}}>ST</div>
                <div>
                  <div style={{fontWeight:600,fontSize:'15px',color:'#1a2e3b'}}>Sarah T.</div>
                  <div style={{fontSize:'12px',color:'#8a9aa8'}}>Mother of 13-year-old, Sydney</div>
                </div>
              </div>
              <p style={{fontSize:'14px',color:'#5a6b78',lineHeight:1.6,fontStyle:'italic'}}>{"The guitar lessons follow the Trinity College syllabus which gives my daughter a clear path to work towards. Her tutor is encouraging and really adapts to her pace. She just completed her Initial Grade exam with distinction."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="music-cta">
        <div className="container">
          <h2 className="music-cta__title">Hear the Difference</h2>
          <div className="music-cta__actions">
            <Link href="/co-curricular/guitar/enquire" className="btn btn-primary btn-lg">
              Book Free Assessment
            </Link>
            <Link href="/contact" className="music-cta__btn--outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
