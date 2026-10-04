'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getCurrentRegion } from '@/utils/regionalLinks';
import { type RegionCode } from '@/data/regions';
import { AU_HOME_COPY } from '@/data/copy/au-home';
import { CA_HOME_COPY } from '@/data/copy/ca-home';
import { NZ_HOME_COPY } from '@/data/copy/nz-home';
import { US_HOME_COPY } from '@/data/copy/us-home';
import './HowItWorks.css';

interface HowItWorksProps {
  region?: RegionCode;
}

const defaultSteps = [
  {
    number: 1,
    title: 'Book Free Assessment',
    description:
      'We start with a quick diagnostic assessment to find areas for improvement.',
  },
  {
    number: 2,
    title: 'Get Custom Plan',
    description:
      "Based on the assessment, we create a personalised learning plan for your child's needs and goals.",
  },
  {
    number: 3,
    title: 'Join Live Classes',
    description:
      'Start with engaging, real-time sessions in small groups (max 4 students) or one-on-one.',
  },
  {
    number: 4,
    title: 'Track Progress',
    description:
      'See how your child is improving with regular reports and feedback every term to track progress over time.',
  },
];

export default function HowItWorks({ region }: HowItWorksProps = {}) {
  const pathname = usePathname() || '';
  const currentRegion = region || getCurrentRegion(pathname);
  const isAu = currentRegion === 'au';
  const isCa = currentRegion === 'ca';
  const isNz = currentRegion === 'nz';
  const isUs = currentRegion === 'us';

  const steps = isUs
    ? US_HOME_COPY.howItWorks.steps
    : isNz
    ? NZ_HOME_COPY.howItWorks.steps
    : isCa
    ? CA_HOME_COPY.howItWorks.steps
    : isAu
    ? AU_HOME_COPY.howItWorks.steps
    : defaultSteps;

  const eyebrow = isUs
    ? US_HOME_COPY.howItWorks.eyebrow
    : isNz
    ? NZ_HOME_COPY.howItWorks.eyebrow
    : isCa
    ? CA_HOME_COPY.howItWorks.eyebrow
    : isAu
    ? AU_HOME_COPY.howItWorks.eyebrow
    : 'Simple Process';

  const title = isUs
    ? US_HOME_COPY.howItWorks.title
    : isNz
    ? NZ_HOME_COPY.howItWorks.title
    : isCa
    ? CA_HOME_COPY.howItWorks.title
    : isAu
    ? AU_HOME_COPY.howItWorks.title
    : 'How TutorExel Works';

  const intro = isUs
    ? US_HOME_COPY.howItWorks.intro
    : isNz
    ? NZ_HOME_COPY.howItWorks.intro
    : isCa
    ? CA_HOME_COPY.howItWorks.intro
    : isAu
    ? AU_HOME_COPY.howItWorks.intro
    : 'Get started in 4 easy steps. Your child could be learning with us this week.';

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__grid">
          {/* Left Column */}
          <div className="how-it-works__left">
            <div className="how-it-works__header">
              <div className="how-it-works__label">
                <Image
                  src="/images/icons/circle_icon.webp"
                  alt=""
                  className="how-it-works__label-icon"
                  width={20}
                  height={20}
                />
                {eyebrow}
              </div>
              <h2 className="how-it-works__title">
                {title}
              </h2>
              <p className="how-it-works__subtitle">
                {intro}
              </p>
            </div>
            <div className="how-it-works__image">
              <Image
                src="/images/how-it-works/tutorExel_work_image.webp"
                alt="Online tutoring process and student learning workflow"
                className="how-it-works__img"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="how-it-works__steps">
            {steps.map((step) => (
              <div className="step-card" key={step.number}>
                <div className="step-card__number">{step.number}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
