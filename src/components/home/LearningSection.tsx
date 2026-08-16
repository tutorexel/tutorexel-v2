import Image from 'next/image';
import './LearningSection.css';

const subjects = [
  {
    title: 'Mathematics',
    image: '/images/learning/mathematics_image.webp',
    badge: 'Years 2-7',
    topics: [
      'Number & Algebra',
      'Measurement & Geometry',
      'Statistics & Probability',
      'Problem-Solving Strategies',
      'Mental Math Techniques',
      'NAPLAN Maths Preparation',
    ],
  },
  {
    title: 'English',
    image: '/images/learning/english_image.webp',
    badge: 'Years 2-7',
    topics: [
      'Reading Comprehension',
      'Creative & Persuasive Writing',
      'Grammar & Punctuation',
      'Spelling & Vocabulary',
      'Critical Analysis',
      'NAPLAN Literacy Preparation',
    ],
  },
];

export default function LearningSection() {
  return (
    <section className="learning-section">
      <div className="container">
        <div className="learning-section__grid">
          {/* Left Sidebar */}
          <div className="learning-section__sidebar">
            <div className="learning-section__label">
              <Image src="/images/icons/white_circle_icon.webp" alt="" className="learning-section__label-icon" width={20} height={20} />
              Our Curriculum
            </div>
            <h2 className="learning-section__title">What Your Child<br />Will Learn</h2>
            <p className="learning-section__description">
              Our curriculum is carefully aligned with the Australian National Curriculum,
              ensuring your child builds strong foundations and excels in key subject areas
              from Years 2 through 7.
            </p>
          </div>

          {/* Right: Subject Cards */}
          <div className="learning-section__cards">
            {subjects.map((subject) => (
              <div className="subject-card" key={subject.title}>
                <div className="subject-card__image-wrapper">
                  <Image
                    src={subject.image}
                    alt={subject.title}
                    className="subject-card__image"
                    width={500}
                    height={300}
                  />
                  <span className="subject-card__badge">{subject.badge}</span>
                </div>
                <div className="subject-card__content">
                  <h3 className="subject-card__title">{subject.title}</h3>
                  <div className="subject-card__topics">
                    {subject.topics.map((topic) => (
                      <div className="subject-card__topic" key={topic}>
                        <Image
                          src="/images/learning/tick.webp"
                          alt=""
                          className="subject-card__tick"
                          width={20}
                          height={20}
                        />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
