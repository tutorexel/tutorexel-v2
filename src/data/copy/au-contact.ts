export interface AuContactCopy {
  hero: {
    h1: string;
    subtitle: string;
  };
  details: {
    email: string;
    emailHref: string;
    whatsappText: string;
    whatsappHref: string;
    replyTime: string;
    replyTimeLabel: string;
    emailLabel: string;
    whatsappLabel: string;
    addressLabel: string;
  };
  form: {
    h2: string;
    subtitle: string;
    parentNamePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    childNamePlaceholder: string;
    yearLevelLabel: string;
    yearLevels: string[];
    interestsLabel: string;
    interests: string[];
    hearAboutDefault: string;
    hearAboutOptions: string[];
    messagePlaceholder: string;
    submitButton: string;
    consentTextBefore: string;
    termsText: string;
    consentTextMiddle: string;
    privacyText: string;
    consentTextAfter: string;
  };
  whatHappensNext: {
    h2: string;
    steps: string[];
  };
}

export const AU_CONTACT_COPY: AuContactCopy = {
  hero: {
    h1: "Ready to Help Your Child Get Ahead?",
    subtitle:
      "Send us your details and we will be in touch soon. Or contact us directly by email or WhatsApp.",
  },
  details: {
    email: "info@tutorexel.com",
    emailHref: "mailto:info@tutorexel.com",
    whatsappText: "+61 470 330 548",
    whatsappHref: "https://wa.me/61470330548",
    replyTime: "We usually reply within 2 hours",
    replyTimeLabel: "Reply Time",
    emailLabel: "Email Us",
    whatsappLabel: "Message Us on WhatsApp",
    addressLabel: "Address",
  },
  form: {
    h2: "Got a Question?",
    subtitle:
      "Ask us anything about lessons, plans or the free trial. We will reply as soon as we can.",
    parentNamePlaceholder: "Parent's Full Name *",
    emailPlaceholder: "Email Address *",
    phonePlaceholder: "+61 4XX XXX XXX",
    childNamePlaceholder: "Child's Full Name *",
    yearLevelLabel: "Child's Year Level *",
    yearLevels: [
      "Year 2",
      "Year 3",
      "Year 4",
      "Year 5",
      "Year 6",
      "Year 7",
      "Year 8",
      "Year 9",
      "Year 10",
    ],
    interestsLabel: "What Would You Like Help With? * (select all that apply)",
    interests: [
      "Maths Tutoring",
      "English Tutoring",
      "Science Tutoring",
      "Piano Lessons",
      "Guitar Lessons",
    ],
    hearAboutDefault: "How Did You Hear About Us?",
    hearAboutOptions: [
      "Google search",
      "Facebook or Instagram",
      "Friend or family",
      "School or community group",
      "Other",
    ],
    messagePlaceholder: "Your Message (Tell Us How We Can Help) *",
    submitButton: "Book Your Free Trial Class",
    consentTextBefore: "By submitting this form, you agree to our ",
    termsText: "Terms & Conditions",
    consentTextMiddle: " and ",
    privacyText: "Privacy Policy",
    consentTextAfter: ".",
  },
  whatHappensNext: {
    h2: "What Happens Next",
    steps: [
      "We read your enquiry and match your child with a suitable tutor (within 2 hours).",
      "We book a free assessment to see where your child is up to.",
      "Your child joins a free trial class.",
      "You get a clear assessment report and a personalised learning plan.",
      "Happy with it? We start weekly lessons. No lock-in, no pressure to sign up.",
    ],
  },
};
