'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Curriculum.css';

const curriculumData = [
  {
    year: 2,
    description: 'Large class sizes make your child just one face in the crowd; we prioritize individual attention, reinforcing concepts.',
    subjects: ['English', 'Maths', 'Science'],
  },
  {
    year: 3,
    description: 'Strengthen core concepts with deeper practice in addition, times tables, reading, writing, and comprehension.',
    subjects: ['English', 'Maths', 'Science'],
  },
  {
    year: 4,
    description: 'Develop confidence in problem-solving and language usage: basic algebra, grammar, and creative writing skills.',
    subjects: ['English', 'Maths', 'Science'],
  },
  {
    year: 5,
    description: 'Bridge primary to middle school with structured concepts from basic reading, advanced grammar, and writing skills.',
    subjects: ['English', 'Maths', 'Science'],
  },
  {
    year: 6,
    description: 'Build strong fundamentals for middle school mathematics and English – fractions, decimals, creative writing strategies, and narrative writing.',
    subjects: ['English', 'Maths', 'Science'],
  },
  {
    year: 7,
    description: 'Enhance logical thinking and communication skills. Includes algebra, geometry, grammar, and writing fluency.',
    subjects: ['English', 'Maths', 'Science'],
  },
];

export default function Curriculum() {
  const [activeYear, setActiveYear] = useState<number>(2);

  return (
    <section className="curriculum section">
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-header__label section-header__label--no-before">
            <Image src="/images/icons/circle_icon.webp" alt="" className="section-header__label-icon" width={20} height={20} />
            Choose Your Year Level
          </p>
          <h2 className="section-header__title">Australian Aligned Curriculum</h2>
          <p className="section-header__subtitle">
            Click on the subject to explore our comprehensive revision syllabus perfectly aligned with the Australian curriculum.
          </p>
        </div>

        <div className="curriculum__grid">
          {curriculumData.map((item) => (
            <div
              key={item.year}
              className={`curriculum__card ${activeYear === item.year ? 'curriculum__card--active' : ''}`}
              onMouseEnter={() => setActiveYear(item.year)}
            >
              <div className="curriculum__card-header">
                <span className="curriculum__year-badge">Year {item.year}</span>
              </div>
              <p className="curriculum__card-description">{item.description}</p>
              <div className="curriculum__subjects">
                {item.subjects.map((subject) => (
                  <Link
                    key={subject}
                    href={`/subjects/year-${item.year}/${subject.toLowerCase()}`}
                    className={`curriculum__subject-btn ${
                      subject === 'English'
                        ? 'curriculum__subject-btn--english'
                        : 'curriculum__subject-btn--maths'
                    }`}
                  >
                    {subject}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
