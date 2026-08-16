import Link from 'next/link';
import Image from 'next/image';

const yearLevels = [
  { year: 2, ages: '7-8', description: 'Maths: Number & place value, addition, subtraction, fractions, 2D shapes, patterns. English: Phonics, reading comprehension, narrative writing, grammar basics, spelling patterns. Science: Living things, materials, weather, observation skills.' },
  { year: 3, ages: '8-9', description: 'Maths: Place value to 1000, regrouping, skip counting, angles, symmetry, chance. English: Reading fluency, informative writing, parts of speech, persuasive language, poetry. Science: Life cycles, soil & rocks, heat energy, states of matter.', featured: true },
  { year: 4, ages: '9-10', description: 'Maths: Multiplication & division strategies, fractions, money, 3D objects, capacity, data interpretation. English: Creative writing, text types, verb tenses, inference, context clues. Science: Food chains, ecosystems, water cycle, forces & materials.' },
  { year: 5, ages: '10-11', description: 'Maths: Multi-digit operations, decimals, perimeter & area, probability, financial maths. English: Persuasive writing, critical thinking, literature study, media literacy, report writing. Science: Adaptations, erosion, light, particle model.' },
  { year: 6, ages: '11-12', description: 'Maths: Fractions & decimals, algebra, geometry, data analysis, multi-step problem solving. English: Narrative & persuasive essays, advanced grammar, research skills, reading analysis. Science: Habitats, Earth & space, electrical circuits, material changes.' },
  { year: 7, ages: '12-13', description: 'Maths: Integers, ratios, equations, coordinate geometry, statistics. English: Analytical writing, literary analysis, complex text types, advanced punctuation, oral presentations. Science: Classification, ecosystems, forces, particle theory, mixtures.' },
];

export default function YearLevels() {
  return (
    <section className="subject-years section">
      <div className="container">
        <div className="subject-years__header">
          <p className="subject-years__label">
            <Image src="/images/icons/circle_icon.webp" alt="" width={20} height={20} className="subject-years__label-icon" />
            Choose Your Year Level
          </p>
          <h2 className="subject-years__title">Select Your Child&apos;s Year Level</h2>
          <p className="subject-years__subtitle">
            Each year level includes Maths, English and Science programs, structured across 4 terms with 10 sessions each.
          </p>
        </div>

        <div className="subject-years__grid">
          {yearLevels.map((level) => (
            <div key={level.year} className={`subject-years__card ${level.featured ? 'subject-years__card--featured' : ''}`}>
              <div className="subject-years__card-header">
                <span className={`subject-years__card-year ${level.featured ? 'subject-years__card-year--featured' : ''}`}>
                  YEAR {level.year}
                </span>
                <span className="subject-years__card-ages">(Ages {level.ages})</span>
              </div>
              <p className="subject-years__card-description">{level.description}</p>
              <div className="subject-years__card-buttons">
                <Link href={`/subjects/year-${level.year}/english`} className="subject-years__card-btn subject-years__card-btn--english">
                  English
                </Link>
                <Link href={`/subjects/year-${level.year}/maths`} className="subject-years__card-btn subject-years__card-btn--maths">
                  Maths
                </Link>
                <Link href={`/subjects/year-${level.year}/science`} className="subject-years__card-btn subject-years__card-btn--science">
                  Science
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
