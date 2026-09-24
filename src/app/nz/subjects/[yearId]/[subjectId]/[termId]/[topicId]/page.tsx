"use client";

import { useState, use } from "react";
import { questionData } from "@/data/questionData";
import "./practice-test.css";

type PageProps = {
  params: Promise<{
    yearId: string;
    subjectId: string;
    termId: string;
    topicId: string;
  }>;
};

type Question = {
  question: string;
  options: string[];
  answer: string;
  explain?: string;
};

type TopicData = {
  name: string;
  questions: Question[];
};

type UserAnswers = Record<number, string>;

const getTopicData = (
  yearKey: string,
  subjectId: string,
  termId: string,
  topicId: string
): TopicData | undefined => {
  const data = questionData as Record<string, Record<string, Record<string, Record<string, TopicData>>>>;
  return data?.[yearKey]?.[subjectId]?.[termId]?.[topicId];
};

export default function PracticeTestPage({ params }: PageProps) {
  const { yearId, subjectId, termId, topicId } = use(params);
  const yearKey = yearId.replace("-", "");

  const topicData = getTopicData(yearKey, subjectId, termId, topicId);

  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [showPopup, setShowPopup] = useState(true);

  if (!topicData || topicData.questions.length === 0) {
    return (
      <div className="practice-test">
        <div className="container">
          <div className="practice-test__not-found">
            <h1>Practice Test Not Found</h1>
            <p>Sorry, we couldn&apos;t find content for this practice test yet.</p>
          </div>
        </div>
      </div>
    );
  }

  const questions = topicData.questions;

  const handleSelect = (qIndex: number, option: string) => {
    setUserAnswers((prev) => ({ ...prev, [qIndex]: option }));
    setShowPopup(true);
  };

  const allAnswered = Object.keys(userAnswers).length === questions.length;

  return (
    <div className="practice-test">
      <div className="container">
        <div className="practice-test__container">
          <h2 className="practice-test__title">Practice Test</h2>

          <div className="practice-test__questions">
            {questions.map((q, index) => {
              const userChoice = userAnswers[index];

              return (
                <div key={index} className="question-block">
                  <h4 className="question-block__title">
                    Q{index + 1}. {q.question}
                  </h4>

                  <div className="question-block__options">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = opt === userChoice;
                      const isCorrectAnswer = opt === q.answer;

                      return (
                        <div
                          key={optIndex}
                          className={`option-item
                            ${isCorrectAnswer && userChoice ? "option-item--correct" : ""}
                            ${isSelected && !isCorrectAnswer ? "option-item--wrong" : ""}
                          `}
                          onClick={() => handleSelect(index, opt)}
                        >
                          <div className="option-item__circle"></div>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {userChoice && (
                    <div className="question-block__explanation">
                      <strong>Explanation: </strong>
                      {q.explain || "No explanation available."}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {allAnswered && showPopup && (
            <>
              <div className="practice-test__overlay"></div>
              <div className="practice-test__popup">
                <button
                  className="practice-test__popup-close"
                  onClick={() => setShowPopup(false)}
                >
                  ×
                </button>

                <div className="practice-test__popup-content">
                  <div className="practice-test__popup-icon">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h2 className="practice-test__popup-title">Well Done!</h2>
                  <p className="practice-test__popup-text">
                    You have completed all questions in this practice test.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
