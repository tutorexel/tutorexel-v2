export interface MusicHubCard {
  title: string;
  text: string;
  bullets: string[];
  button: { text: string; href: string };
  image: { src: string; alt: string; width: number; height: number };
  highlighted?: boolean;
}

export interface MusicFeatureCard {
  title: string;
  desc: string;
  icon: string;
}

export interface MusicStepItem {
  number: number;
  title: string;
  description: string;
}

export interface MusicHubCopy {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    h1: string;
    text: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
  };
  chooseInstrument: {
    h2: string;
    cards: MusicHubCard[];
  };
  moreThanJustLessons: {
    h2: string;
    cards: MusicFeatureCard[];
  };
  howItWorks: {
    h2: string;
    steps: MusicStepItem[];
    image: { src: string; alt: string; width: number; height: number };
  };
  finalCta: {
    h2: string;
    text: string;
    button: { text: string; href: string };
    whatsapp: { label: string; href: string };
  };
}

export interface MusicEducationCard {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

export interface MusicGradeNode {
  short: string;
  label: string;
}

export interface MusicTimelineItem {
  time?: string;
  title: string;
  description: string;
}

export interface MusicSessionDetail {
  label: string;
  value: string;
}

export interface MusicAudienceItem {
  title: string;
  highlight?: string;
  description: string;
  underlined?: boolean;
}

export interface MusicRequirementItem {
  label: string;
  icon: string;
  highlighted?: boolean;
}

export interface MusicTestimonialItem {
  name: string;
  role: string;
  text: string;
  initials: string;
}

export interface MusicPageCopy {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    h1: string;
    text: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
  };
  mastery: {
    eyebrow: string;
    h2: string;
    cards: MusicEducationCard[];
  };
  gradeProgression: {
    eyebrow: string;
    h2: string;
    grades: MusicGradeNode[];
    note?: string;
  };
  lessonStructure: {
    eyebrow: string;
    h2: string;
    timeline: MusicTimelineItem[];
    details: MusicSessionDetail[];
    image: { src: string; alt: string; width: number; height: number };
  };
  audience: {
    eyebrow: string;
    h2: string;
    items: MusicAudienceItem[];
    image: { src: string; alt: string; width: number; height: number };
  };
  requirements: {
    h2: string;
    items: MusicRequirementItem[];
    note?: string;
  };
  testimonials: {
    h2: string;
    items: MusicTestimonialItem[];
  };
  finalCta: {
    h2: string;
    text?: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  };
}
