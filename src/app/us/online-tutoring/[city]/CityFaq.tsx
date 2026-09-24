"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface CityFaqProps {
  faqData: FaqItem[];
}

export default function CityFaq({ faqData }: CityFaqProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="city-faq__list">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`city-faq__item ${openIndex === index ? "city-faq__item--open" : ""}`}
        >
          <button
            className="city-faq__question"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="city-faq__question-text">{item.question}</span>
            <span className="city-faq__icon">
              <span className="city-faq__icon-symbol">
                {openIndex === index ? "\u2212" : "+"}
              </span>
            </span>
          </button>
          <div
            className={`city-faq__answer ${openIndex === index ? "city-faq__answer--open" : ""}`}
          >
            <div className="city-faq__answer-content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
