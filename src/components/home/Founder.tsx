import Image from 'next/image';
import './Founder.css';

const credentials = [
  "Founder & Head of Curriculum, TutorExel",
  "Background in strategy, technology, and education initiatives",
  "Experience in curriculum planning and program design",
  "Focus on ACARA-aligned learning programs",
];

export default function Founder() {
  return (
    <section className="founder">
      <div className="container">
        <div className="founder__grid">
          {/* Left: Content Card */}
          <div className="founder__content">
            <p className="founder__label">Founder & Head of Curriculum</p>
            <h2 className="founder__name">Viresh Sharma</h2>

            {/* Intro Paragraph */}
            <p className="founder__bio">
              Viresh Sharma leads TutorExel as the Founder and Head of Curriculum,
              bringing together a strong foundation in education strategy and a clear
              vision for student success. His leadership drives the platform&apos;s
              commitment to delivering structured, high-quality tutoring aligned with
              the Australian curriculum.
            </p>

            {/* Philosophy Highlight */}
            <div className="founder__quote">
              <p className="founder__quote-text">
                &ldquo;Clarity, consistency, and measurable progress for every learner.&rdquo;
              </p>
            </div>

            {/* Platform Vision */}
            <p className="founder__bio">
              At TutorExel, learning is outcome-focused. The platform is built around a
              structured model that ensures every session contributes to tangible academic
              growth. With programs carefully mapped to the Australian Curriculum (ACARA),
              students receive targeted support designed to build confidence and capability
              across Maths and English.
            </p>

            {/* Credentials */}
            <div className="founder__credentials-list">
              {credentials.map((item, index) => (
                <div className="founder__credential-item" key={index}>
                  <span className="founder__credential-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#FF6B35"/>
                      <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="founder__image">
            <Image
              src="/images/how-it-works/viresh_sharma_image.webp"
              alt="Viresh Sharma - Founder & Head of Curriculum at TutorExel"
              className="founder__img"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
