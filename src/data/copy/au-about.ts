export interface AboutApproachStep {
  number: number;
  title: string;
  description: string;
}

export interface AuAboutCopy {
  hero: {
    h1: string;
    subtitle: string;
  };
  story: {
    h2: string;
    paragraph1: string;
    highlight: string;
    paragraph2: string;
    quote: string;
  };
  approach: {
    h2: string;
    steps: AboutApproachStep[];
  };
  byTheNumbers: {
    h2: string;
  };
  curriculum: {
    h2: string;
    paragraph1: string;
    paragraph2: string;
    meansTitle: string;
    points: string[];
  };
  testimonials: {
    h2: string;
  };
  cta: {
    h2: string;
    description: string;
    buttonText: string;
    phone: string;
  };
}

export const AU_ABOUT_COPY: AuAboutCopy = {
  hero: {
    h1: "Built by Educators. Trusted by Aussie Families",
    subtitle:
      "TutorExel began with a simple belief: every child deserves structured, personalised learning that genuinely works.",
  },
  story: {
    h2: "Why TutorExel Exists",
    paragraph1:
      "As parents and teachers, we noticed a gap in online tutoring. Most sites simply match your child with a tutor and leave the rest to chance. Lessons follow no set method, nobody checks what is covered, and fees are often due for the whole year upfront.",
    highlight: "TutorExel was built to do it properly.",
    paragraph2:
      "Every lesson is planned around the Australian Curriculum and your child's own school work. Each student has an eBook, quizzes and a term mock test, all in one portal. Parents receive a clear evaluation report each term, so you always know where your child stands.",
    quote:
      "With educators who bring many years of classroom experience, TutorExel offers the personal attention of a private tutor and the structure of a proper learning program, billed monthly in AUD with no lock-in.",
  },
  approach: {
    h2: "What Sets Us Apart",
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
          "Each lesson follows what your child is studying at school. No generic worksheets, just practice that counts.",
      },
      {
        number: 4,
        title: "Clear Progress",
        description:
          "A term mock test and an evaluation report go straight to parents. You will always know how your child is going.",
      },
    ],
  },
  byTheNumbers: {
    h2: "TutorExel at a Glance",
  },
  curriculum: {
    h2: "Built Around Your Child's School Curriculum",
    paragraph1:
      "Every lesson starts with your child's year level, school work and goals. Our tutors adjust the content, pace and practice to support what your child is learning in class.",
    paragraph2:
      "Whether your child is in Year 3 facing NAPLAN, preparing for ICAS, or working towards selective or scholarship entry, TutorExel keeps learning in step with the Australian Curriculum.",
    meansTitle: "What this means for you:",
    points: [
      "Lessons reinforce what your child is covering at school",
      "We prepare students for NAPLAN, ICAS and school assessments",
      "One clear method, so there is no confusion with classroom teaching",
      "Extra help for students who need to catch up or extend",
    ],
  },
  testimonials: {
    h2: "What Aussie Parents Say",
  },
  cta: {
    h2: "Ready to Watch Your Child Thrive?",
    description:
      "Join Australian families who trust TutorExel with their child's learning. Book a free trial lesson today, no credit card needed.",
    buttonText: "Book Online Now",
    phone: "+61 470 330 548",
  },
};
