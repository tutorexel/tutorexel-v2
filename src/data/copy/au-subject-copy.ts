import { SubjectCopyData } from "./subject-copy-types";
import { auYear2MathsCopy } from "./au-year-2-maths";
import { auYear2EnglishCopy } from "./au-year-2-english";
import { auYear2ScienceCopy } from "./au-year-2-science";
import { auYear3MathsCopy } from "./au-year-3-maths";
import { auYear3EnglishCopy } from "./au-year-3-english";
import { auYear3ScienceCopy } from "./au-year-3-science";
import { auYear4MathsCopy } from "./au-year-4-maths";
import { auYear4EnglishCopy } from "./au-year-4-english";
import { auYear4ScienceCopy } from "./au-year-4-science";
import { auYear5MathsCopy } from "./au-year-5-maths";
import { auYear5EnglishCopy } from "./au-year-5-english";
import { auYear5ScienceCopy } from "./au-year-5-science";
import { auYear6MathsCopy } from "./au-year-6-maths";
import { auYear6EnglishCopy } from "./au-year-6-english";
import { auYear6ScienceCopy } from "./au-year-6-science";
import { auYear7MathsCopy } from "./au-year-7-maths";
import { auYear7EnglishCopy } from "./au-year-7-english";
import { auYear7ScienceCopy } from "./au-year-7-science";
import { auYear8MathsCopy } from "./au-year-8-maths";
import { auYear8EnglishCopy } from "./au-year-8-english";
import { auYear8ScienceCopy } from "./au-year-8-science";
import { auYear9MathsCopy } from "./au-year-9-maths";
import { auYear9EnglishCopy } from "./au-year-9-english";
import { auYear9ScienceCopy } from "./au-year-9-science";
import { auYear10MathsCopy } from "./au-year-10-maths";
import { auYear10EnglishCopy } from "./au-year-10-english";
import { auYear10ScienceCopy } from "./au-year-10-science";

import { caGrade2MathsCopy } from "./ca-grade-2-maths";
import { caGrade2EnglishCopy } from "./ca-grade-2-english";
import { caGrade2ScienceCopy } from "./ca-grade-2-science";
import { caGrade3MathsCopy } from "./ca-grade-3-maths";
import { caGrade3EnglishCopy } from "./ca-grade-3-english";
import { caGrade3ScienceCopy } from "./ca-grade-3-science";
import { caGrade4MathsCopy } from "./ca-grade-4-maths";
import { caGrade4EnglishCopy } from "./ca-grade-4-english";
import { caGrade4ScienceCopy } from "./ca-grade-4-science";
import { caGrade5MathsCopy } from "./ca-grade-5-maths";
import { caGrade5EnglishCopy } from "./ca-grade-5-english";
import { caGrade5ScienceCopy } from "./ca-grade-5-science";
import { caGrade6MathsCopy } from "./ca-grade-6-maths";
import { caGrade6EnglishCopy } from "./ca-grade-6-english";
import { caGrade6ScienceCopy } from "./ca-grade-6-science";
import { caGrade7MathsCopy } from "./ca-grade-7-maths";
import { caGrade7EnglishCopy } from "./ca-grade-7-english";
import { caGrade7ScienceCopy } from "./ca-grade-7-science";

const AU_SUBJECT_COPY: Record<string, Record<string, SubjectCopyData>> = {
  "year-2": {
    maths: auYear2MathsCopy,
    english: auYear2EnglishCopy,
    science: auYear2ScienceCopy,
  },
  "year-3": {
    maths: auYear3MathsCopy,
    english: auYear3EnglishCopy,
    science: auYear3ScienceCopy,
  },
  "year-4": {
    maths: auYear4MathsCopy,
    english: auYear4EnglishCopy,
    science: auYear4ScienceCopy,
  },
  "year-5": {
    maths: auYear5MathsCopy,
    english: auYear5EnglishCopy,
    science: auYear5ScienceCopy,
  },
  "year-6": {
    maths: auYear6MathsCopy,
    english: auYear6EnglishCopy,
    science: auYear6ScienceCopy,
  },
  "year-7": {
    maths: auYear7MathsCopy,
    english: auYear7EnglishCopy,
    science: auYear7ScienceCopy,
  },
  "year-8": {
    maths: auYear8MathsCopy,
    english: auYear8EnglishCopy,
    science: auYear8ScienceCopy,
  },
  "year-9": {
    maths: auYear9MathsCopy,
    english: auYear9EnglishCopy,
    science: auYear9ScienceCopy,
  },
  "year-10": {
    maths: auYear10MathsCopy,
    english: auYear10EnglishCopy,
    science: auYear10ScienceCopy,
  },
};

const CA_SUBJECT_COPY: Record<string, Record<string, SubjectCopyData>> = {
  "year-2": {
    maths: caGrade2MathsCopy,
    english: caGrade2EnglishCopy,
    science: caGrade2ScienceCopy,
  },
  "year-3": {
    maths: caGrade3MathsCopy,
    english: caGrade3EnglishCopy,
    science: caGrade3ScienceCopy,
  },
  "year-4": {
    maths: caGrade4MathsCopy,
    english: caGrade4EnglishCopy,
    science: caGrade4ScienceCopy,
  },
  "year-5": {
    maths: caGrade5MathsCopy,
    english: caGrade5EnglishCopy,
    science: caGrade5ScienceCopy,
  },
  "year-6": {
    maths: caGrade6MathsCopy,
    english: caGrade6EnglishCopy,
    science: caGrade6ScienceCopy,
  },
  "year-7": {
    maths: caGrade7MathsCopy,
    english: caGrade7EnglishCopy,
    science: caGrade7ScienceCopy,
  },
};

export function getSubjectCopy(
  region: string | undefined,
  year: string | number,
  subject: string
): SubjectCopyData | null {
  const yearKey = typeof year === "number" ? `year-${year}` : year.startsWith("year-") ? year : `year-${year}`;

  if (region === "ca") {
    return CA_SUBJECT_COPY[yearKey]?.[subject] ?? null;
  }
  if (region === "au" || !region) {
    return AU_SUBJECT_COPY[yearKey]?.[subject] ?? null;
  }
  return null;
}

export function getAuSubjectCopy(yearId: string, subjectId: string): SubjectCopyData | null {
  return getSubjectCopy("au", yearId, subjectId);
}

