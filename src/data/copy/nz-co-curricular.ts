import { MusicHubCopy } from "./music-copy-types";

export const NZ_CO_CURRICULAR_COPY: MusicHubCopy = {
  meta: {
    title: "Online Music Lessons NZ | Piano and Guitar | TutorExel",
    description: "Live one-on-one piano and guitar lessons for Kiwi students, following the Trinity College London syllabus. Initial to Grade 8. Book a free trial lesson.",
  },
  hero: {
    h1: "Learn Music at Home in NZ",
    text: "Piano and guitar lessons that follow the Trinity College London syllabus. Live one-on-one online classes with qualified tutors, wherever you are in NZ.",
    primaryCta: {
      text: "Book a Free Trial Lesson",
      href: "/free-trial",
    },
    secondaryCta: {
      text: "Join Now",
      href: "/enroll",
    },
  },
  chooseInstrument: {
    h2: "Choose Your Instrument",
    cards: [
      {
        title: "Piano",
        text: "Learn piano from first notes to advanced pieces with graded lessons that follow the Trinity College London syllabus. A weekly 60-minute one-on-one class with a qualified tutor.",
        bullets: [
          "Ages 5 and above",
          "Initial Grade through Grade 8",
          "Optional Trinity exam preparation",
        ],
        button: {
          text: "Explore Piano Lessons",
          href: "/co-curricular/piano",
        },
        image: {
          src: "/images/co-curricular/piano-student.png",
          alt: "Online piano lessons for Kiwi students following the Trinity syllabus",
          width: 600,
          height: 400,
        },
        highlighted: false,
      },
      {
        title: "Guitar",
        text: "Go from your first chords to confident playing with a graded programme that follows the Trinity College London syllabus, taught one-on-one and tailored to your child.",
        bullets: [
          "Ages 8 and above",
          "Initial Grade through Grade 8",
          "Optional Trinity exam preparation",
        ],
        button: {
          text: "Explore Guitar Lessons",
          href: "/co-curricular/guitar",
        },
        image: {
          src: "/images/co-curricular/guitar-student.webp",
          alt: "Online guitar lessons for Kiwi students following the Trinity syllabus",
          width: 600,
          height: 400,
        },
        highlighted: true,
      },
    ],
  },
  moreThanJustLessons: {
    h2: "More Than Just Music Lessons",
    cards: [
      {
        title: "Qualified Tutors",
        desc: "Our music tutors are experienced, qualified and passionate about teaching. Great players are not always great teachers. Ours are both.",
        icon: "tutors",
      },
      {
        title: "Structured Progression",
        desc: "Every student follows the Trinity College London syllabus with clear grade milestones, so you always know where your child is up to.",
        icon: "progression",
      },
      {
        title: "Flexible Scheduling",
        desc: "One-on-one lessons fit around your family's week, school terms and sport. No driving across town, no waiting rooms.",
        icon: "scheduling",
      },
      {
        title: "Internationally Recognised Certification",
        desc: "Trinity has examined in New Zealand since 1895. Students who choose to sit Trinity exams earn internationally recognised certificates.",
        icon: "certification",
      },
    ],
  },
  howItWorks: {
    h2: "How TutorExel Works",
    steps: [
      {
        number: 1,
        title: "Free Trial",
        description: "Your child tries a free introductory lesson. No obligation.",
      },
      {
        number: 2,
        title: "Placement",
        description: "We check where they are now and start them at the right grade.",
      },
      {
        number: 3,
        title: "Weekly Lessons",
        description: "A 60-minute one-on-one lesson each week, with guided practice for home.",
      },
      {
        number: 4,
        title: "Grade Progression",
        description: "Your child moves through the Trinity grades at their own pace.",
      },
    ],
    image: {
      src: "/images/co-curricular/how_it_works_image.webp",
      alt: "Kiwi student learning music online with a private tutor",
      width: 800,
      height: 800,
    },
  },
  finalCta: {
    h2: "Ready to Hear Your Child Shine?",
    text: "Join the hundreds of Kiwi families who trust TutorExel with their child's learning. Book your FREE trial lesson today, no credit card needed.",
    button: {
      text: "Book Online Now",
      href: "/free-trial",
    },
  },
};
