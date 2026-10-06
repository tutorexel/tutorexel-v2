export interface CaContactCopy {
  hero: {
    title: string;
    subtitle: string;
    floatingButton: string;
  };
  contactDetails: {
    email: {
      label: string;
      value: string;
      href: string;
    };
    whatsapp: {
      label: string;
      value: string;
      href: string;
    };
    replyTime: {
      label: string;
      value: string;
    };
  };
  form: {
    title: string;
    subtitle: string;
    parentNamePlaceholder: string;
    emailPlaceholder: string;
    mobilePlaceholder: string;
    childNamePlaceholder: string;
    gradeLabel: string;
    grades: string[];
    helpWithLabel: string;
    helpWithOptions: string[];
    hearAboutPlaceholder: string;
    hearAboutOptions: string[];
    messagePlaceholder: string;
    submitButtonText: string;
    termsConsentPrefix: string;
    termsLinkText: string;
    termsConsentMiddle: string;
    privacyLinkText: string;
    termsConsentSuffix: string;
    successTitle: string;
    successMessage: string;
  };
  whatHappensNext: {
    title: string;
    steps: string[];
  };
}

export const CA_CONTACT_COPY: CaContactCopy = {
  hero: {
    title: "Ready to Help Your Child Get Ahead?",
    subtitle:
      "Send us your details and we will be in touch soon. Or contact us directly by email or WhatsApp.",
    floatingButton: "Free Assessment Test",
  },
  contactDetails: {
    email: {
      label: "Email Us",
      value: "info@tutorexel.com",
      href: "mailto:info@tutorexel.com",
    },
    whatsapp: {
      label: "Message Us on WhatsApp",
      value: "+1 (206) 797 7387",
      href: "https://wa.me/12067977387",
    },
    replyTime: {
      label: "Reply Time",
      value: "We usually reply within 2 hours",
    },
  },
  form: {
    title: "Got a Question?",
    subtitle:
      "Ask us anything about lessons, plans or the free trial. We will reply as soon as we can.",
    parentNamePlaceholder: "Parent's Full Name *",
    emailPlaceholder: "Email Address *",
    mobilePlaceholder: "+1 (555) 123-4567",
    childNamePlaceholder: "Child's Full Name *",
    gradeLabel: "Child's Grade Level *",
    grades: [
      "Grade 2",
      "Grade 3",
      "Grade 4",
      "Grade 5",
      "Grade 6",
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
    ],
    helpWithLabel: "What Would You Like Help With? * (select all that apply)",
    helpWithOptions: [
      "Math Tutoring",
      "English Tutoring",
      "Science Tutoring",
      "Piano Lessons",
      "Guitar Lessons",
    ],
    hearAboutPlaceholder: "How did you hear about us?",
    hearAboutOptions: [
      "Google search",
      "Facebook or Instagram",
      "Friend or family",
      "School or community group",
      "Other",
    ],
    messagePlaceholder: "Your Message (Tell Us How We Can Help) *",
    submitButtonText: "Book Your Free Trial Class",
    termsConsentPrefix: "By submitting this form, you agree to our ",
    termsLinkText: "Terms & Conditions",
    termsConsentMiddle: " and ",
    privacyLinkText: "Privacy Policy",
    termsConsentSuffix: ".",
    successTitle: "Thank You!",
    successMessage:
      "Your inquiry has been submitted successfully. Our team will contact you within 2 hours during business hours.",
  },
  whatHappensNext: {
    title: "What Happens Next",
    steps: [
      "We read your enquiry and match your child with a suitable tutor (within 2 hours).",
      "We book a free assessment to see where your child is up to.",
      "Your child joins a free trial class.",
      "You get a clear assessment report and a personalized learning plan.",
      "Happy with it? We start weekly lessons. No lock-in, no pressure to sign up.",
    ],
  },
};
