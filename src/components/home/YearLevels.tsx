"use client";

import RegionLink from '@/components/shared/RegionLink';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getCurrentRegion } from '@/utils/regionalLinks';
import { REGIONS_CONFIG, type RegionCode } from '@/data/regions';
import { AU_HOME_COPY } from '@/data/copy/au-home';
import { CA_HOME_COPY } from '@/data/copy/ca-home';

interface YearLevelsProps {
  region?: RegionCode;
}

export default function YearLevels({ region }: YearLevelsProps) {
  const pathname = usePathname() || '';
  const currentRegion = region || getCurrentRegion(pathname);
  const config = REGIONS_CONFIG[currentRegion] || REGIONS_CONFIG.au;
  const isAu = currentRegion === 'au';
  const isCa = currentRegion === 'ca';

  const levelWord = config.yearLabel;
  const mathLabel = config.mathLabel;

  const defaultYearLevels = [
    {
      year: 2,
      ages: '7-8',
      description: `${mathLabel}: Number & place value, addition, subtraction, fractions, 2D shapes, patterns. English: Phonics, reading comprehension, narrative writing, grammar basics, spelling patterns. Science: Living things, materials, weather, observation skills.`,
    },
    {
      year: 3,
      ages: '8-9',
      description: `${mathLabel}: Place value to 1000, regrouping, skip counting, angles, symmetry, chance. English: Reading fluency, informative writing, parts of speech, persuasive language, poetry. Science: Life cycles, soil & rocks, heat energy, states of matter.`,
      featured: true,
    },
    {
      year: 4,
      ages: '9-10',
      description: `${mathLabel}: Multiplication & division strategies, fractions, money, 3D objects, capacity, data interpretation. English: Creative writing, text types, verb tenses, inference, context clues. Science: Food chains, ecosystems, water cycle, forces & materials.`,
    },
    {
      year: 5,
      ages: '10-11',
      description: `${mathLabel}: Multi-digit operations, decimals, perimeter & area, probability, financial ${mathLabel.toLowerCase()}. English: Persuasive writing, critical thinking, literature study, media literacy, report writing. Science: Adaptations, erosion, light, particle model.`,
    },
    {
      year: 6,
      ages: '11-12',
      description: `${mathLabel}: Fractions & decimals, algebra, geometry, data analysis, multi-step problem solving. English: Narrative & persuasive essays, advanced grammar, research skills, reading analysis. Science: Habitats, Earth & space, electrical circuits, material changes.`,
    },
    {
      year: 7,
      ages: '12-13',
      description: `${mathLabel}: Integers, ratios, equations, coordinate geometry, statistics. English: Analytical writing, literary analysis, complex text types, advanced punctuation, oral presentations. Science: Classification, ecosystems, forces, particle theory, mixtures.`,
    },
  ];

  const yearLevels = isCa
    ? CA_HOME_COPY.yearLevels.years
    : isAu
    ? AU_HOME_COPY.yearLevels.years
    : defaultYearLevels;

  const eyebrowText = isCa
    ? CA_HOME_COPY.yearLevels.eyebrow
    : isAu
    ? AU_HOME_COPY.yearLevels.eyebrow
    : `Choose Your ${levelWord} Level`;

  const titleText = isCa
    ? CA_HOME_COPY.yearLevels.title
    : isAu
    ? AU_HOME_COPY.yearLevels.title
    : `Select Your Child's ${levelWord} Level`;

  const introText = isCa
    ? CA_HOME_COPY.yearLevels.intro
    : isAu
    ? AU_HOME_COPY.yearLevels.intro
    : `Each ${levelWord.toLowerCase()} level includes ${mathLabel}, English and Science programs, structured across 4 terms with 10 sessions each.`;

  return (
    <section className="subject-years section">
      <div className="container">
        <div className="subject-years__header">
          <p className="subject-years__label">
            <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="subject-years__label-icon" />
            {eyebrowText}
          </p>
          <h2 className="subject-years__title">
            {titleText}
          </h2>
          <p className="subject-years__subtitle">
            {introText}
          </p>
        </div>

        <div className="subject-years__grid">
          {yearLevels.map((level) => {
            const showButtons = !('hasButtons' in level) || level.hasButtons !== false;
            return (
              <div key={level.year} className={`subject-years__card ${level.featured ? 'subject-years__card--featured' : ''}`}>
                <div className="subject-years__card-header">
                  <span className={`subject-years__card-year ${level.featured ? 'subject-years__card-year--featured' : ''}`}>
                    {levelWord.toUpperCase()} {level.year}
                  </span>
                  <span className="subject-years__card-ages">(Ages {level.ages})</span>
                </div>
                <p className="subject-years__card-description">{level.description}</p>
                {showButtons ? (
                  <div className="subject-years__card-buttons">
                    <RegionLink href={`/subjects/year-${level.year}/english`} className="subject-years__card-btn subject-years__card-btn--english">
                      English
                    </RegionLink>
                    <RegionLink href={`/subjects/year-${level.year}/maths`} className="subject-years__card-btn subject-years__card-btn--maths">
                      {mathLabel}
                    </RegionLink>
                    <RegionLink href={`/subjects/year-${level.year}/science`} className="subject-years__card-btn subject-years__card-btn--science">
                      Science
                    </RegionLink>
                  </div>
                ) : (
                  /* TODO: Grade {level.year} subject pages do not exist yet */
                  null
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
