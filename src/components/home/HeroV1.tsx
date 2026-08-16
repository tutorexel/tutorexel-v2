import Link from 'next/link';
import './HeroV1.css';

export default function HeroV1() {
  return (
    <section className="hero-v1">
      {/* Soft gradient accents */}
      <div className="hero-v1__bg" aria-hidden="true">
        <div className="hero-v1__glow hero-v1__glow--1"></div>
        <div className="hero-v1__glow hero-v1__glow--2"></div>
      </div>

      <div className="container">
        <div className="hero-v1__inner">

          <span className="hero-v1__eyebrow">
            <span className="hero-v1__eyebrow-pulse">
              <span className="hero-v1__eyebrow-dot"></span>
              <span className="hero-v1__eyebrow-ring"></span>
            </span>
            <span>Live 1-on-1 Australian Tutoring</span>
            <span className="hero-v1__eyebrow-divider"></span>
            <span className="hero-v1__eyebrow-years">Years 2–7</span>
          </span>

          <h1 className="hero-v1__title">
            <span className="hero-v1__title-line">
              Finally, 1-on-1 tutoring
            </span>
            <span className="hero-v1__title-line hero-v1__title-accent">
              you can actually afford.
            </span>
          </h1>

          <p className="hero-v1__subtitle">
            Live personal classes with qualified Australian teachers. Just <span className="hero-v1__price-chip">$28 per class</span>, and your first class is free.
          </p>

          <div className="hero-v1__compare">
            <div className="hero-v1__compare-item hero-v1__compare-item--them">
              <span className="hero-v1__compare-label">Typical 1-on-1 tutor</span>
              <span className="hero-v1__compare-price">
                <span className="hero-v1__compare-strike">$75+</span>
                <span className="hero-v1__compare-unit">/hour</span>
              </span>
            </div>
            <div className="hero-v1__compare-vs">vs</div>
            <div className="hero-v1__compare-item hero-v1__compare-item--us">
              <span className="hero-v1__compare-label">TutorExel 1-on-1</span>
              <span className="hero-v1__compare-price hero-v1__compare-price--us">
                <span>$28</span>
                <span className="hero-v1__compare-unit">/class</span>
              </span>
            </div>
          </div>

          <div className="hero-v1__cta-wrap">
            <Link href="/free-trial" className="hero-v1__cta">
              <span className="hero-v1__cta-shine" aria-hidden="true"></span>
              <span className="hero-v1__cta-label">Book My Child&apos;s Free Class</span>
              <span className="hero-v1__cta-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <p className="hero-v1__cta-note">Takes 30 seconds. No credit card needed.</p>
          </div>

          <ul className="hero-v1__reassurance">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              <span>No credit card</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              <span>Cancel anytime</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              <span>Genuinely free first class</span>
            </li>
          </ul>

          <div className="hero-v1__trust">
            <div className="hero-v1__trust-item">
              <span className="hero-v1__trust-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7v6c0 5 4 9 9 11 5-2 9-6 9-11V7l-9-5z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <div className="hero-v1__trust-text">
                <span className="hero-v1__trust-value">100%</span>
                <span className="hero-v1__trust-label">Australian Curriculum</span>
              </div>
            </div>
            <div className="hero-v1__trust-divider"></div>
            <div className="hero-v1__trust-item">
              <span className="hero-v1__trust-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </span>
              <div className="hero-v1__trust-text">
                <span className="hero-v1__trust-value">Qualified</span>
                <span className="hero-v1__trust-label">Teachers Only</span>
              </div>
            </div>
            <div className="hero-v1__trust-divider"></div>
            <div className="hero-v1__trust-item">
              <span className="hero-v1__trust-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 1 1 10 0v4" />
                </svg>
              </span>
              <div className="hero-v1__trust-text">
                <span className="hero-v1__trust-value">No Lock-in</span>
                <span className="hero-v1__trust-label">Cancel Anytime</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="hero-v1__marquee" aria-hidden="true">
        <div className="hero-v1__marquee-track">
          <span className="hero-v1__marquee-item">Year 2 Maths</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 3 English</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 4 Maths</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 5 English</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 6 Maths</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 7 English</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Piano Lessons</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Guitar Lessons</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">NAPLAN Prep</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 2 Maths</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 3 English</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 4 Maths</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 5 English</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 6 Maths</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Year 7 English</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Piano Lessons</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">Guitar Lessons</span>
          <span className="hero-v1__marquee-sep">•</span>
          <span className="hero-v1__marquee-item">NAPLAN Prep</span>
          <span className="hero-v1__marquee-sep">•</span>
        </div>
      </div>
    </section>
  );
}
