import Image from 'next/image';
import Link from 'next/link';
import BookTrialButton from './BookTrialButton';
import './Hero.css';

type Country = {
  code: string; // ISO 3166-1 alpha-2, lowercase — used for flagcdn.com
  name: string;
};

const COUNTRIES: Country[] = [
  { code: "au", name: "Australia" },
  { code: "us", name: "USA" },
  { code: "ca", name: "Canada" },
  { code: "nz", name: "New Zealand" },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Preload hero background image for faster LCP */}
      <link rel="preload" as="image" href="/images/banner/bg-banner.webp" type="image/webp" />
      {/* Left decorative wave */}
      <div className="hero__decoration hero__decoration--wave">
        <Image src="/images/banner/vector-1.webp" alt="" className="decorative-wave-img" width={400} height={400} priority />
      </div>
      {/* Decorative star */}
      <div className="hero__decoration hero__decoration--star">
        <Image src="/images/banner/Vector.webp" alt="" className="decorative-star-img" width={24} height={24} />
      </div>
      {/* Right background image */}
      <div className="hero__bg-image"></div>

      <div className="container">
        <div className="hero__grid">
          {/* Left Content */}
          <div className="hero__content">
            <p className="hero__countries-label">Now teaching families across</p>
            <div className="hero__countries">
              {COUNTRIES.map((country) => (
                <div className="hero__country" key={country.code}>
                  <Image
                    src={`https://flagcdn.com/80x60/${country.code}.png`}
                    alt={`${country.name} flag`}
                    width={18}
                    height={13}
                    className="hero__country-flag"
                    unoptimized
                  />
                  <span className="hero__country-name">{country.name}</span>
                </div>
              ))}
            </div>
            <h1 className="hero__title">
              Online Tutoring That Gets <span className="hero__title-gradient">Real Results</span>
              <span className="hero__title-star"><Image src="/images/banner/Vector-2.webp" alt="Star" width={24} height={24} /></span>
            </h1>
            <p className="hero__description">
              Live Online Classes With Experienced Teachers. Your School Curriculum Aligned learning. Your child deserves Excellence.
            </p>
            <div className="hero__cta">
              <BookTrialButton className="hero__btn-primary">Book Your FREE Trial Class</BookTrialButton>
              <a href="/pricing" className="hero__btn-secondary">Join Now →</a>
            </div>


            <div className="hero__social-proof">
              <div className="hero__avatars">
                <div className="hero__avatar"><img src="https://i.pravatar.cc/40?img=1" alt="User" /></div>
                <div className="hero__avatar"><img src="https://i.pravatar.cc/40?img=2" alt="User" /></div>
                <div className="hero__avatar"><img src="https://i.pravatar.cc/40?img=3" alt="User" /></div>
                <div className="hero__avatar"><img src="https://i.pravatar.cc/40?img=4" alt="User" /></div>
                <div className="hero__avatar hero__avatar--count"><span>+9k</span></div>
              </div>
            </div>

          </div>

          {/* Right Side - Badges */}
          <div className="hero__image-wrapper">
            <div className="hero__badge hero__badge--verified">
              <div className="hero__badge-icon">
                <Image src="/images/banner/tick_icon.webp" alt="Verified" width={24} height={24} />
              </div>
              <div className="hero__badge-content">
                <span className="hero__badge-title">100%</span>
                <span className="hero__badge-subtitle">Curriculum Aligned</span>
              </div>
            </div>
            <div className="hero__badge hero__badge--experience">
              <div className="hero__badge-icon hero__badge-icon--orange">
                <Image src="/images/banner/book_icon.webp" alt="Experience" width={24} height={24} />
              </div>
              <div className="hero__badge-content">
                <span className="hero__badge-title">15+ Years</span>
                <span className="hero__badge-subtitle">Qualified Teachers</span>
              </div>
            </div>
            <div className="hero__badge hero__badge--prep">
              <div className="hero__badge-icon hero__badge-icon--purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="hero__badge-content">
                <span className="hero__badge-title">Academic Excellence</span>
                <span className="hero__badge-subtitle">School &amp; Competitive Exam Prep</span>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Cards Section */}
        <div className="hero__cards">
          <div className="hero__cards-inner">
            {/* Live Online Coaching */}
            <div className="hero-card hero-card--blue">
              <div className="hero-card__icon hero-card__icon--blue">
                <Image src="/images/banner/icon-coaching.svg" alt="Coaching" width={28} height={28} />
              </div>
              <div className="hero-card__content">
                <h3 className="hero-card__title">Live Online Coaching</h3>
                <p className="hero-card__subtitle">Mathematics, English, Science</p>
                <Link href="/subjects" className="hero-card__link" aria-label="Learn more about our Maths and English subjects">Learn More</Link>
              </div>
            </div>

            {/* Co-Curricular */}
            <div className="hero-card hero-card--green">
              <div className="hero-card__icon hero-card__icon--green">
                <Image src="/images/banner/icon-music.svg" alt="Music" width={25} height={25} />
              </div>
              <div className="hero-card__content">
                <h3 className="hero-card__title">Co-Curricular</h3>
                <p className="hero-card__subtitle">Piano, Guitar</p>
                <Link href="/co-curricular" className="hero-card__link" aria-label="Learn more about co-curricular Piano and Guitar programs">Learn More</Link>
              </div>
            </div>

            {/* Self Learning */}
            <div className="hero-card hero-card--yellow">
              <div className="hero-card__icon hero-card__icon--yellow">
                <Image src="/images/banner/icon-calendar.svg" alt="Calendar" width={27} height={27} />
              </div>
              <div className="hero-card__content">
                <h3 className="hero-card__title">Self Learning</h3>
                <p className="hero-card__subtitle">eBooks, Worksheets & Mock Tests</p>
                <Link href="/subscription" className="hero-card__link" aria-label="Learn more about self learning resources">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
