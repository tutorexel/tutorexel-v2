import { MusicHubCopy } from "./music-copy-types";

export const US_CO_CURRICULAR_COPY: MusicHubCopy = {
  meta: {
    title: "Online Music Lessons USA | Piano and Guitar | TutorExel",
    description: "Live one-on-one piano and guitar lessons for students across the U.S., following the Trinity College London syllabus. Initial to Grade 8. Book a free trial.",
  },
  hero: {
    h1: "Learn Music from Home Anywhere in the U.S.",
    text: "Piano and guitar lessons that follow the Trinity College London syllabus. Live one-on-one online classes with qualified teachers, in every time zone.",
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
        text: "Learn piano from your first notes to advanced pieces with graded lessons that follow the Trinity College London syllabus. A weekly 60-minute one-on-one class with a qualified teacher.",
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
          alt: "Online piano lessons for U.S. students following the Trinity syllabus",
          width: 600,
          height: 400,
        },
        highlighted: false,
      },
      {
        title: "Guitar",
        text: "Go from first chords to confident playing with a graded program that follows the Trinity College London syllabus, taught one-on-one and tailored to your child.",
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
          alt: "Online guitar lessons for U.S. students following the Trinity syllabus",
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
        title: "Qualified Teachers",
        desc: "Our music teachers are experienced, qualified and passionate about teaching. Great players are not always great teachers. Ours are both.",
        icon: "tutors",
      },
      {
        title: "Structured Progression",
        desc: "Every student follows the Trinity College London syllabus with clear grade milestones, so you always know where your child stands.",
        icon: "progression",
      },
      {
        title: "Flexible Scheduling",
        desc: "One-on-one lessons fit around school, sports and the rest of your family's week. No carpool, no commute, no waiting rooms.",
        icon: "scheduling",
      },
      {
        title: "Internationally Recognized Certification",
        desc: "Trinity has operated in the U.S. since the 1930s. Students who choose to sit Trinity exams earn internationally recognized certificates.",
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
      alt: "Friendly TutorExel team member inviting U.S. families to book a free music trial",
      width: 800,
      height: 800,
    },
  },
  finalCta: {
    h2: "Ready to Hear Your Child Shine?",
    text: "Join the hundreds of American families who trust TutorExel with their child's learning. Book your FREE trial lesson today, no credit card needed.",
    button: {
      text: "Book Online Now",
      href: "/free-trial",
    },
  },
};
