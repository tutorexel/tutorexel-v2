"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface NaplanFaqProps {
  faqData: FaqItem[];
}

export default function NaplanFaq({ faqData }: NaplanFaqProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="naplan-faq__list">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`naplan-faq__item ${openIndex === index ? "naplan-faq__item--open" : ""}`}
        >
          <button
            className="naplan-faq__question"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="naplan-faq__question-text">{item.question}</span>
            <span className="naplan-faq__icon">
              <span className="naplan-faq__icon-symbol">
                {openIndex === index ? "\u2212" : "+"}
              </span>
            </span>
          </button>
          <div
            className={`naplan-faq__answer ${openIndex === index ? "naplan-faq__answer--open" : ""}`}
          >
            <div className="naplan-faq__answer-content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
