export interface SubjectCopyData {
  hero: {
    h1: string;
    subheading: string;
    text: string;
    primaryCtaText: string;
    secondaryCtaText: string;
  };
  intro: {
    text: string;
    keyTopics: string;
    parentTip: string;
  };
  outcomes: {
    eyebrow: string;
    h2: string;
    items: string[];
    imageAlt: string;
  };
  curriculum: {
    eyebrow: string;
    h2: string;
    terms: Array<{
      termKey: "term1" | "term2" | "term3" | "term4";
      termTitle: string;
      topics: Array<{
        no: string;
        topic: string;
        whatWeCover: string;
      }>;
    }>;
  };
  lockedBox: {
    h2: string;
    text: string;
    buttonText: string;
  };
  lessonStructure: {
    eyebrow: string;
    h2: string;
    steps: Array<{
      title: string;
      duration: string;
      description: string;
    }>;
  };
  keepExploring: {
    h2: string;
    cards: Array<{
      tag: string;
      title: string;
      text: string;
      buttonText: string;
      href: string;
    }>;
  };
  finalCta: {
    h2: string;
    text: string;
    buttonText: string;
    whatsappNumber: string;
  };
}
