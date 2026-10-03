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

export function getAuSubjectCopy(yearId: string, subjectId: string): SubjectCopyData | null {
  return AU_SUBJECT_COPY[yearId]?.[subjectId] ?? null;
}
