"use client";

import Image from 'next/image';
import RegionLink from '@/components/shared/RegionLink';
import { usePathname } from 'next/navigation';
import { REGIONS, type RegionCode } from '@/data/regions';
import { getCurrentRegion } from '@/utils/regionalLinks';
import { AU_HOME_COPY } from '@/data/copy/au-home';
import BookTrialButton from './BookTrialButton';
import './Hero.css';

interface HeroProps {
  region?: RegionCode;
}

export default function Hero({ region }: HeroProps = {}) {
  const pathname = usePathname() || '';
  const currentRegionCode = region || getCurrentRegion(pathname);
  const currentRegion = REGIONS.find((r) => r.code === currentRegionCode) || REGIONS[0];
  const isAu = currentRegionCode === 'au';

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
            <p className="hero__countries-label">Now teaching families in</p>
            <div className="hero__countries">
              <div className="hero__country">
                <Image
                  src={currentRegion.flagUrl}
                  alt={`${currentRegion.label} flag`}
                  width={22}
                  height={15}
                  className="hero__country-flag"
                  unoptimized
                />
                <span className="hero__country-name">{currentRegion.label}</span>
              </div>
            </div>

            {isAu ? (
              <>
                <h1 className="hero__title">
                  {AU_HOME_COPY.hero.titlePrefix}
                  <span className="hero__title-gradient">{AU_HOME_COPY.hero.titleHighlight}</span>
                  <span className="hero__title-star">
                    <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={24} height={24} />
                  </span>
                </h1>
                <p className="hero__description">
                  {AU_HOME_COPY.hero.subtext}
                </p>
                <div className="hero__cta">
                  <BookTrialButton className="hero__btn-primary">
                    {AU_HOME_COPY.hero.primaryCta}
                  </BookTrialButton>
                  <RegionLink href={AU_HOME_COPY.hero.secondaryCtaHref} className="hero__btn-secondary">
                    {AU_HOME_COPY.hero.secondaryCta}
                  </RegionLink>
                </div>
                <div className="hero__social-proof">
                  <div className="hero__avatars">
                    <div className="hero__avatar">
                      <Image src="/avatar-priya.png" alt="Student Priya" width={40} height={40} />
                    </div>
                    <div className="hero__avatar">
                      <Image src="/avatar-rohit.png" alt="Student Rohit" width={40} height={40} />
                    </div>
                    <div className="hero__avatar">
                      <Image src="/avatar-sarah.png" alt="Student Sarah" width={40} height={40} />
                    </div>
                    <div className="hero__avatar">
                      <Image src="/avatar-michael.png" alt="Student Michael" width={40} height={40} />
                    </div>
                    <div className="hero__avatar hero__avatar--count"><span>+9k</span></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="hero__title">
                  Online Tutoring That Gets <span className="hero__title-gradient">Real Results</span>
                  <span className="hero__title-star"><Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={24} height={24} /></span>
                </h1>
                <p className="hero__description">
                  Live Online Classes With Experienced Teachers. Your School Curriculum Aligned learning. Your child deserves Excellence.
                </p>
                <div className="hero__cta">
                  <BookTrialButton className="hero__btn-primary">Book Your FREE Trial Class</BookTrialButton>
                  <RegionLink href="/pricing" className="hero__btn-secondary">Join Now →</RegionLink>
                </div>
                <div className="hero__social-proof">
                  <div className="hero__avatars">
                    <div className="hero__avatar"><img src="https://i.pravatar.cc/40?img=1" alt="" aria-hidden="true" width={40} height={40} /></div>
                    <div className="hero__avatar"><img src="https://i.pravatar.cc/40?img=2" alt="" aria-hidden="true" width={40} height={40} /></div>
                    <div className="hero__avatar"><img src="https://i.pravatar.cc/40?img=3" alt="" aria-hidden="true" width={40} height={40} /></div>
                    <div className="hero__avatar"><img src="https://i.pravatar.cc/40?img=4" alt="" aria-hidden="true" width={40} height={40} /></div>
                    <div className="hero__avatar hero__avatar--count"><span>+9k</span></div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Side - Badges */}
          <div className="hero__image-wrapper">
            {isAu ? (
              <>
                <div className="hero__badge hero__badge--verified">
                  <div className="hero__badge-icon">
                    <Image src="/images/banner/tick_icon.webp" alt="" aria-hidden="true" width={24} height={24} />
                  </div>
                  <div className="hero__badge-content">
                    <span className="hero__badge-title">100%</span>
                    <span className="hero__badge-subtitle">ACARA Aligned</span>
                  </div>
                </div>
                <div className="hero__badge hero__badge--experience">
                  <div className="hero__badge-icon hero__badge-icon--orange">
                    <Image src="/images/banner/book_icon.webp" alt="" aria-hidden="true" width={24} height={24} />
                  </div>
                  <div className="hero__badge-content">
                    <span className="hero__badge-title">15+ Years</span>
                    <span className="hero__badge-subtitle">Teaching Experience</span>
                  </div>
                </div>
                <div className="hero__badge hero__badge--prep">
                  <div className="hero__badge-icon hero__badge-icon--purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="hero__badge-content">
                    <span className="hero__badge-title">Exam-Ready Learning</span>
                    <span className="hero__badge-subtitle">NAPLAN, ICAS &amp; Selective Prep</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="hero__badge hero__badge--verified">
                  <div className="hero__badge-icon">
                    <Image src="/images/banner/tick_icon.webp" alt="" aria-hidden="true" width={24} height={24} />
                  </div>
                  <div className="hero__badge-content">
                    <span className="hero__badge-title">100%</span>
                    <span className="hero__badge-subtitle">Curriculum Aligned</span>
                  </div>
                </div>
                <div className="hero__badge hero__badge--experience">
                  <div className="hero__badge-icon hero__badge-icon--orange">
                    <Image src="/images/banner/book_icon.webp" alt="" aria-hidden="true" width={24} height={24} />
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
              </>
            )}
          </div>
        </div>

        {/* Banner Cards Section */}
        <div className="hero__cards">
          <div className="hero__cards-inner">
            {isAu ? (
              <>
                {/* Live Online Tutoring */}
                <div className="hero-card hero-card--blue">
                  <div className="hero-card__icon hero-card__icon--blue">
                    <Image src="/images/banner/icon-coaching.svg" alt="" aria-hidden="true" width={28} height={28} />
                  </div>
                  <div className="hero-card__content">
                    <h3 className="hero-card__title">Live Online Tutoring</h3>
                    <p className="hero-card__subtitle">Maths, English and Science</p>
                    <RegionLink href="/subjects" className="hero-card__link" aria-label="Learn more about our Maths, English, and Science subjects">See Subjects</RegionLink>
                  </div>
                </div>

                {/* Music Lessons */}
                <div className="hero-card hero-card--green">
                  <div className="hero-card__icon hero-card__icon--green">
                    <Image src="/images/banner/icon-music.svg" alt="" aria-hidden="true" width={25} height={25} />
                  </div>
                  <div className="hero-card__content">
                    <h3 className="hero-card__title">Music Lessons</h3>
                    <p className="hero-card__subtitle">Piano and Guitar</p>
                    <RegionLink href="/co-curricular" className="hero-card__link" aria-label="Learn more about co-curricular Piano and Guitar programs">See Lessons</RegionLink>
                  </div>
                </div>

                {/* Self-Paced Learning */}
                <div className="hero-card hero-card--yellow">
                  <div className="hero-card__icon hero-card__icon--yellow">
                    <Image src="/images/banner/icon-calendar.svg" alt="" aria-hidden="true" width={27} height={27} />
                  </div>
                  <div className="hero-card__content">
                    <h3 className="hero-card__title">Self-Paced Learning</h3>
                    <p className="hero-card__subtitle">eBooks, Worksheets, Mock Tests</p>
                    <RegionLink href="/subscription" className="hero-card__link" aria-label="Learn more about self learning resources">Explore Resources</RegionLink>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Live Online Coaching */}
                <div className="hero-card hero-card--blue">
                  <div className="hero-card__icon hero-card__icon--blue">
                    <Image src="/images/banner/icon-coaching.svg" alt="" aria-hidden="true" width={28} height={28} />
                  </div>
                  <div className="hero-card__content">
                    <h3 className="hero-card__title">Live Online Coaching</h3>
                    <p className="hero-card__subtitle">Mathematics, English, Science</p>
                    <RegionLink href="/subjects" className="hero-card__link" aria-label="Learn more about our Maths, English, and Science subjects">Learn More</RegionLink>
                  </div>
                </div>

                {/* Co-Curricular */}
                <div className="hero-card hero-card--green">
                  <div className="hero-card__icon hero-card__icon--green">
                    <Image src="/images/banner/icon-music.svg" alt="" aria-hidden="true" width={25} height={25} />
                  </div>
                  <div className="hero-card__content">
                    <h3 className="hero-card__title">Co-Curricular</h3>
                    <p className="hero-card__subtitle">Piano, Guitar</p>
                    <RegionLink href="/co-curricular" className="hero-card__link" aria-label="Learn more about co-curricular Piano and Guitar programs">Learn More</RegionLink>
                  </div>
                </div>

                {/* Self Learning */}
                <div className="hero-card hero-card--yellow">
                  <div className="hero-card__icon hero-card__icon--yellow">
                    <Image src="/images/banner/icon-calendar.svg" alt="" aria-hidden="true" width={27} height={27} />
                  </div>
                  <div className="hero-card__content">
                    <h3 className="hero-card__title">Self Learning</h3>
                    <p className="hero-card__subtitle">eBooks, Worksheets & Mock Tests</p>
                    <RegionLink href="/subscription" className="hero-card__link" aria-label="Learn more about self learning resources">Learn More</RegionLink>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

