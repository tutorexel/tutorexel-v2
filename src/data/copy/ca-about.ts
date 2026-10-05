export interface CaAboutCopy {
  hero: {
    title: string;
    subtitle: string;
    floatingButton: string;
  };
  story: {
    label: string;
    title: string;
    paragraph1: string;
    highlighted: string;
    paragraph2: string;
    quote: string;
  };
  approach: {
    label: string;
    title: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
    }>;
  };
  impact: {
    label: string;
    title: string;
  };
  curriculum: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    meansTitle: string;
    points: string[];
  };
  testimonials: {
    title: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const CA_ABOUT_COPY: CaAboutCopy = {
  hero: {
    title: "Built by Educators. Trusted by Canadian Families",
    subtitle:
      "TutorExel began with a simple belief: every child deserves structured, personalized learning that truly works.",
    floatingButton: "Free Assessment Test",
  },
  story: {
    label: "Our Story",
    title: "Why TutorExel Exists",
    paragraph1:
      "As parents and teachers, we noticed a gap in online tutoring. Most sites simply match your child with a tutor and leave the rest to chance. Lessons follow no set method, nobody checks what is covered, and fees are often due for the whole year upfront.",
    highlighted: "TutorExel was built to do it right.",
    paragraph2:
      "Every lesson is planned around your child's school work and your province's curriculum. Each student gets an eBook, quizzes and a term mock test, all in one portal. Parents receive a clear evaluation report each term, so you always know where your child stands.",
    quote:
      "With educators who bring many years of classroom experience, TutorExel offers the personal attention of a private tutor and the structure of a proper learning program, billed monthly in CAD with no lock-in.",
  },
  approach: {
    label: "Our Approach",
    title: "What Sets Us Apart",
    steps: [
      {
        number: 1,
        title: "Start with an Assessment",
        description:
          "We never guess. Every student begins with a free assessment, so we see exactly where they are strong and where the gaps are.",
      },
      {
        number: 2,
        title: "One Consistent Tutor",
        description:
          "No revolving door of strangers. Your child learns with the same tutor, building trust, confidence and steady progress.",
      },
      {
        number: 3,
        title: "Matched to School",
        description:
          "Each lesson follows what your child is studying in class. No generic worksheets, just practice that counts.",
      },
      {
        number: 4,
        title: "Clear Progress",
        description:
          "A term mock test and an evaluation report go straight to parents. You will always know how your child is doing.",
      },
    ],
  },
  impact: {
    label: "By the Numbers",
    title: "TutorExel at a Glance",
  },
  curriculum: {
    title: "Built Around Your Child's School Curriculum",
    paragraph1:
      "Every lesson starts with your child's grade level, classwork and goals. Our tutors adjust the content, pace and practice to support what your child is learning at school.",
    paragraph2:
      "Whether your child is facing provincial assessments, building skills for enriched or French immersion classes, or preparing for gifted program screening, TutorExel keeps learning in step with what happens in the classroom.",
    meansTitle: "What this means for you:",
    points: [
      "Lessons reinforce what your child is covering in class",
      "We prepare students for provincial assessments, report card marks and school tests",
      "One clear method, so there is no confusion with classroom teaching",
      "Extra help for students who need to catch up or move ahead",
    ],
  },
  testimonials: {
    title: "What Parents Say",
  },
  cta: {
    title: "Ready to Watch Your Child Thrive?",
    description:
      "Join families across Canada who trust TutorExel with their child's learning. Book a free trial lesson today, no credit card needed.",
    buttonText: "Book Online Now",
  },
};
