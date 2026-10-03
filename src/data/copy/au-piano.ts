import { MusicPageCopy } from "./music-copy-types";

export const AU_PIANO_COPY: MusicPageCopy = {
  meta: {
    title: "Online Piano Lessons Australia | Trinity Grades | TutorExel",
    description: "Live one-on-one online piano lessons for Aussie children and adults, Initial to Grade 8 on the Trinity College London syllabus. Book a free trial lesson.",
  },
  hero: {
    h1: "Online Piano Lessons in Australia, Trinity College London Syllabus",
    text: "Graded one-on-one piano lessons for beginners to advanced students. Learn at home, anywhere in Australia, with qualified tutors who make every lesson count.",
    primaryCta: {
      text: "Book Your Free Trial Lesson",
      href: "/co-curricular/piano/enquire",
    },
    secondaryCta: {
      text: "Join Now",
      href: "/enroll",
    },
  },
  mastery: {
    eyebrow: "What Your Child Will Master",
    h2: "A Complete Piano Education",
    cards: [
      {
        title: "Technique",
        description:
          "Good hand position, posture, scales, arpeggios and finger independence. We build strong technical foundations from the first lesson.",
        icon: "technique",
      },
      {
        title: "Repertoire",
        description:
          "Pieces from the Trinity College London piano syllabus. Students play music they enjoy while meeting the requirements for their grade.",
        icon: "repertoire",
      },
      {
        title: "Theory and Musicianship",
        description:
          "Reading notation, rhythm, dynamics, tempo and expression. The skills that turn notes into music.",
        icon: "theory",
      },
      {
        title: "Creativity",
        description:
          "Improvisation, chord progressions and simple composition. We help students make music of their own, not just follow the page.",
        icon: "creativity",
      },
      {
        title: "Performance Skills",
        description:
          "Confidence to play for others, from the school concert to an eisteddfod or a family get-together. Optional mock performances prepare students for Trinity exams.",
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
    note: "Every student moves at their own pace. Parents get regular progress updates. Our tutors check readiness before recommending an official Trinity College London exam. Exams are optional, and many students simply enjoy learning without the pressure of formal assessment.",
  },
  lessonStructure: {
    eyebrow: "Lesson Structure",
    h2: "What a Typical Lesson Looks Like",
    timeline: [
      {
        title: "Warm-up",
        description:
          "Scales, arpeggios and finger exercises to build strength and agility and get the hands ready.",
      },
      {
        title: "Repertoire",
        description:
          "Working on Trinity set pieces, with a focus on accuracy, dynamics, expression and phrasing.",
      },
      {
        title: "Theory",
        description:
          "Music theory, sight-reading practice and ear training exercises.",
      },
      {
        title: "Creative Time",
        description:
          "Free exploring, improvising or playing a piece your child has chosen, so lessons stay fun and inspiring.",
      },
    ],
    details: [
      { label: "Duration", value: "60 minutes" },
      { label: "Format", value: "One-on-one online" },
      { label: "Frequency", value: "Weekly" },
      { label: "Homework", value: "Student practice assignments" },
    ],
    image: {
      src: "/images/co-curricular/what_a_typical.webp",
      alt: "Typical one-on-one online piano lesson for Australian students",
      width: 600,
      height: 400,
    },
  },
  audience: {
    eyebrow: "Who Is This For",
    h2: "Piano Lessons for Everyone",
    items: [
      {
        title: "Complete Beginners (Ages 5+)",
        highlight: "(Ages 5+)",
        description:
          "Never played before? We begin at the start: hand position, reading notes and playing your first tunes.",
      },
      {
        title: "Students Already Learning",
        highlight: "Already Learning",
        description:
          "Already having lessons but need more structure or a clearer path? We check their level and build from there.",
      },
      {
        title: "Students Preparing for Exams",
        highlight: "Preparing for Exams",
        description:
          "Working towards a Trinity College London piano exam? Our tutors know the syllabus well and prepare students carefully.",
      },
      {
        title: "Adult Learners",
        highlight: "Learners",
        description:
          "Always wanted to play? It is never too late. Perfect for new starters and for anyone coming back to the keys after years away.",
      },
    ],
    image: {
      src: "/images/co-curricular/piano-student_1.webp",
      alt: "Australian student learning piano online from home",
      width: 600,
      height: 400,
    },
  },
  requirements: {
    h2: "What You Will Need",
    items: [
      {
        label: "A piano or keyboard with at least 61 weighted or semi-weighted keys",
        icon: "piano",
      },
      {
        label: "A stable internet connection",
        icon: "wifi",
        highlighted: true,
      },
      {
        label: "A device with a camera, or a phone on a stand",
        icon: "device",
      },
      {
        label: "A quiet practice space",
        icon: "quiet",
      },
    ],
    note: "No piano yet? We can suggest affordable options to get started, including secondhand keyboards on Gumtree or Facebook Marketplace.",
  },
  testimonials: {
    h2: "What Aussie Parents Say",
    items: [
      {
        name: "Anita M.",
        role: "Mother of 9-year-old, Sydney",
        text: "My daughter has been taking piano lessons with TutorExel for 6 months now. She went from not knowing a single note to playing her first Trinity piece confidently. The tutor is incredibly patient and makes every lesson fun.",
        initials: "AM",
      },
      {
        name: "David L.",
        role: "Father of 11-year-old, Melbourne",
        text: "We tried in-person piano lessons but the commute was killing us. TutorExel's online piano sessions are just as effective. My son just passed his Grade 2 Trinity exam and is already preparing for Grade 3.",
        initials: "DL",
      },
    ],
  },
  finalCta: {
    h2: "Hear the Difference",
    text: "Book a free trial lesson and see whether our piano program is the right fit for your child.",
    primaryButton: {
      text: "Book Free Assessment",
      href: "/free-assessment",
    },
    secondaryButton: {
      text: "Contact Us",
      href: "/contact",
    },
  },
};
