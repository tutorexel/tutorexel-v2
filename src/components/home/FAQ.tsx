'use client';

import { useState } from 'react';
import Image from 'next/image';
import { createFaqSchema } from '@/utils/schema';
import './FAQ.css';

const faqData = [
  {
    question: 'How do online classes work?',
    answer:
      'Classes are conducted live via Zoom. Each session is interactive — your child will see the teacher and other students, ask questions in real time, and participate in interactive activities. All you need is a laptop and stable internet connection.',
  },
  {
    question: 'What if my child misses a class?',
    answer:
      'We offer make-up sessions for missed classes. Simply inform us in advance and we will reschedule at a convenient time.',
  },
  {
    question: 'Are your teachers qualified?',
    answer:
      'Yes, all our tutors are qualified educators with degrees in education and subject-specific expertise. They are handpicked and trained in our structured curriculum approach.',
  },
  {
    question: 'How many students per class?',
    answer:
      'Our group sessions have a maximum of 3-4 students to ensure personalised attention. We also offer one-on-one sessions for a fully individualised experience.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, you can cancel anytime with 2 weeks notice. There are no long-term contracts or cancellation fees.',
  },
  {
    question: 'When are classes scheduled?',
    answer:
      'Classes are scheduled to suit Australian school timings, typically after school hours and on weekends. You can choose the time slots that work best for your family.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqSchema = createFaqSchema(faqData);

  return (
    <section className="faq section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-header__label section-header__label--no-before">
            <Image src="/images/icons/circle_icon.webp" alt="" className="section-header__label-icon" width={20} height={20} />
            Got Questions?
          </p>
          <h2 className="section-header__title">Frequently Asked Questions</h2>
          <p className="section-header__subtitle">
            Find answers to common questions about our tutoring services.
          </p>
        </div>

        <div className="faq__list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon">
                  <span className="faq__icon-symbol">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </span>
              </button>
              <div className={`faq__answer ${openIndex === index ? 'faq__answer--open' : ''}`}>
                <div className="faq__answer-content">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
