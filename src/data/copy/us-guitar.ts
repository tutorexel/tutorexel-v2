import { MusicPageCopy } from "./music-copy-types";

export const US_GUITAR_COPY: MusicPageCopy = {
  meta: {
    title: "Online Guitar Lessons USA | Trinity Syllabus | TutorExel",
    description: "Live one-on-one online guitar lessons for U.S. students aged 8 and up, Initial to Grade 8 on the Trinity College London syllabus. Book a free trial lesson.",
  },
  hero: {
    h1: "Online Guitar Lessons in the USA, Trinity College London Syllabus",
    text: "Graded guitar lessons from Initial to Grade 8, live and one-on-one with qualified teachers. Taught online for students across the U.S. aged 8 and up.",
    primaryCta: {
      text: "Book Your Free Trial Lesson",
      href: "/co-curricular/guitar/enquire",
    },
    secondaryCta: {
      text: "Join Now",
      href: "/enroll",
    },
  },
  mastery: {
    eyebrow: "What Your Child Will Learn",
    h2: "A Complete Guitar Education",
    cards: [
      {
        title: "Technique",
        description:
          "Build solid finger placement, strumming patterns, clean chord changes and picking technique from the very first lesson.",
        icon: "technique",
      },
      {
        title: "Repertoire",
        description:
          "Learn pieces across classical, pop, rock and folk, matched to your child's grade and the music they love.",
        icon: "repertoire",
      },
      {
        title: "Theory and Musicianship",
        description:
          "Read notation, learn scales, keys and time signatures, and train your ears alongside the practical work.",
        icon: "theory",
      },
      {
        title: "Creativity",
        description:
          "Grow improvisation and songwriting skills, and play with the confidence to make music that is yours.",
        icon: "creativity",
      },
      {
        title: "Performance Skills",
        description:
          "Get ready to play for others, from the school talent show to a family gathering, with tips on pacing and settling nerves.",
        icon: "performance",
      },
    ],
  },
  gradeProgression: {
    eyebrow: "Grade Progression Path",
    h2: "Your Journey from Beginner to Advanced",
    grades: [
      { short: "IG", label: "Initial Grade" },
      { short: "1", label: "Grade 1" },
      { short: "2", label: "Grade 2" },
      { short: "3", label: "Grade 3" },
      { short: "4", label: "Grade 4" },
      { short: "5", label: "Grade 5" },
      { short: "6", label: "Grade 6" },
      { short: "7", label: "Grade 7" },
      { short: "8", label: "Grade 8" },
    ],
    note: "These are Trinity music grades, not school grades.",
  },
  lessonStructure: {
    eyebrow: "Lesson Structure",
    h2: "What a Typical Lesson Looks Like",
    timeline: [
      {
        time: "10 min",
        title: "Warm-up",
        description:
          "Scales, finger exercises and technique drills to build dexterity and muscle memory.",
      },
      {
        time: "20 min",
        title: "Repertoire",
        description:
          "Working on set pieces, refining accuracy, dynamics and expression.",
      },
      {
        time: "15 min",
        title: "Theory",
        description:
          "Music theory, sight-reading and ear training exercises.",
      },
      {
        time: "15 min",
        title: "Creative Time",
        description:
          "Improvising, songwriting or exploring a piece your child has chosen.",
      },
    ],
    details: [
      { label: "Duration", value: "60 minutes" },
      { label: "Format", value: "One-on-one online" },
      { label: "Frequency", value: "Weekly" },
      { label: "Homework", value: "Student practice assignments" },
    ],
    image: {
      src: "/images/co-curricular/guitar-how-it-works.png",
      alt: "Typical one-on-one online guitar lesson for U.S. students",
      width: 600,
      height: 400,
    },
  },
  audience: {
    eyebrow: "Who Is This For",
    h2: "Guitar Lessons for Everyone",
    items: [
      {
        title: "Complete Beginners (Ages 8+)",
        highlight: "(Ages 8+)",
        description:
          "Never held a guitar? Perfect. We start with the basics: how to hold it, your first chords and simple tunes to play for the family.",
      },
      {
        title: "Students Already Learning",
        highlight: "Already Learning",
        description:
          "Already taking lessons but need more structure? We find the right level and fill in any gaps.",
      },
      {
        title: "Students Preparing for Exams",
        highlight: "Preparing for Exams",
        description:
          "Working towards a Trinity College London guitar exam? Our teachers know the syllabus well and help your child get exam-ready.",
      },
      {
        title: "Adult Learners",
        highlight: "Learners",
        description:
          "It is never too late. Adults are welcome, whether you are picking up a guitar for the first time or coming back after a break.",
      },
    ],
    image: {
      src: "/images/co-curricular/guitar-student.webp",
      alt: "U.S. student learning guitar online with a private teacher",
      width: 600,
      height: 400,
    },
  },
  requirements: {
    h2: "What You Will Need",
    items: [
      {
        label: "A guitar and a pick",
        icon: "guitar",
      },
      {
        label: "A stable internet connection",
        icon: "wifi",
        highlighted: true,
      },
      {
        label: "A device with a camera",
        icon: "device",
      },
      {
        label: "A quiet practice space",
        icon: "quiet",
      },
    ],
  },
  testimonials: {
    h2: "What Parents Say",
    items: [],
  },
  finalCta: {
    h2: "Hear the Difference",
    text: "Book a free trial lesson and see whether our guitar program is the right fit for your child.",
    primaryButton: {
      text: "Book Free Assessment",
      href: "/co-curricular/guitar/enquire",
    },
    secondaryButton: {
      text: "Contact Us",
      href: "/contact",
    },
  },
};
