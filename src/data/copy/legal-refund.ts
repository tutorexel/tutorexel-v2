export interface LegalBlock {
  type: "h2" | "h3" | "p" | "label" | "ul";
  text?: string;
  items?: string[];
}

export interface LegalContactBlock {
  title: string;
  intro: string;
  company?: string;
  email: string;
  hasAddress?: boolean;
  hasWhatsApp?: boolean;
  responseTime?: string;
  additionalNote?: string;
}

export interface LegalPageCopy {
  hero: {
    titleHighlight: string;
    titleRest: string;
    subtitle: string;
  };
  hasEffectiveDate: boolean;
  blocks: LegalBlock[];
  contactBlock?: LegalContactBlock;
}

export const LEGAL_REFUND_COPY: LegalPageCopy = {
  "hero": {
    "titleHighlight": "Refund",
    "titleRest": " & Cancellation Policy",
    "subtitle": "Our fair and transparent policies for cancellations, rescheduling and refunds."
  },
  "hasEffectiveDate": true,
  "blocks": [
    {
      "type": "p",
      "text": "This Refund and Cancellation Policy (\"**Policy**\") sets out how refunds, cancellations, withdrawals and related disputes work for Courses and Services offered by **TutorExel LLP** (\"TutorExel\", \"we\", \"us\" or \"our\") to families in Australia, the USA, Canada and New Zealand."
    },
    {
      "type": "p",
      "text": "This Policy is an **integral part of TutorExel's Terms & Conditions** and should be read together with them. By enrolling in any Course or using any Service, the Parent or Guardian (\"you\") agrees to be bound by this Policy."
    },
    {
      "type": "h2",
      "text": "1. GENERAL PRINCIPLES"
    },
    {
      "type": "p",
      "text": "TutorExel offers **online educational services**, including:"
    },
    {
      "type": "ul",
      "items": [
        "live online tutoring classes;",
        "co-curricular (music) classes;",
        "exam preparation programs (live and self-study);",
        "assessments, quizzes, recordings and digital learning material."
      ]
    },
    {
      "type": "p",
      "text": "Because these services are **time-bound and personalised to each student**, refunds are **limited and conditional**, as set out in this Policy."
    },
    {
      "type": "p",
      "text": "Statements by sales, academic or support staff, WhatsApp messages or other verbal assurances **do not override** this written Policy."
    },
    {
      "type": "p",
      "text": "**Your legal rights.** Nothing in this Policy limits any right you have under consumer protection law where you live, including the Australian Consumer Law, New Zealand's Consumer Guarantees Act 1993 and Fair Trading Act 1986, Canadian federal and provincial consumer protection laws, and U.S. federal and state consumer protection laws. You may be entitled to a refund or other remedy if a Service is not provided with due care and skill, is not as described, or cannot be provided."
    },
    {
      "type": "h2",
      "text": "2. COMMENCEMENT OF SERVICES"
    },
    {
      "type": "p",
      "text": "Services are treated as having started when any one of the following happens, whichever is first:"
    },
    {
      "type": "ul",
      "items": [
        "the Student attends the **first live class**;",
        "login details to the Platform, recordings or learning material are shared;",
        "any session (live or recorded) is used;",
        "any assessment, worksheet or digital content is accessed;",
        "login credentials are issued for an exam preparation self-study program."
      ]
    },
    {
      "type": "p",
      "text": "Once Services have started, **refunds are limited** as set out below. No refund, extension, credit or substitution applies to a self-study program once login credentials are issued, except as the law requires."
    },
    {
      "type": "h2",
      "text": "3. CANCELLATION BY PARENT OR GUARDIAN"
    },
    {
      "type": "h3",
      "text": "3.1 Before Services start"
    },
    {
      "type": "p",
      "text": "If we receive a cancellation request before Services start, TutorExel may process a refund after deducting:"
    },
    {
      "type": "ul",
      "items": [
        "payment gateway charges;",
        "administrative and onboarding costs;",
        "taxes already paid to the authorities (if applicable)."
      ]
    },
    {
      "type": "p",
      "text": "Refund eligibility and the amount may vary depending on the Course type."
    },
    {
      "type": "h3",
      "text": "3.2 After Services start"
    },
    {
      "type": "p",
      "text": "**No refund** is given for:"
    },
    {
      "type": "ul",
      "items": [
        "any class already attended;",
        "any recorded session already accessed;",
        "any learning material, worksheet, assessment or test already accessed;",
        "any subscription period already started."
      ]
    },
    {
      "type": "p",
      "text": "For Courses spanning multiple sessions or months (excluding live and self-study exam preparation programs), any refund, if approved, is calculated on a **pro-rata basis** and applies **only to unconsumed sessions**, at TutorExel's discretion, subject to your legal rights."
    },
    {
      "type": "h3",
      "text": "3.3 Monthly plans"
    },
    {
      "type": "p",
      "text": "Monthly plans renew each month and are paid in advance. You may cancel at any time by giving **2 weeks' written notice** through email or our official support channels. The plan then ends at the end of the billing period that covers the notice. Fees already paid for lessons that have been delivered are not refundable."
    },
    {
      "type": "h2",
      "text": "4. COURSE-SPECIFIC REFUND RULES"
    },
    {
      "type": "h3",
      "text": "4.1 Live Online Classes (one-on-one or small group)"
    },
    {
      "type": "ul",
      "items": [
        "Once the first class is attended or access is provided, no refund is given for classes already taken.",
        "Classes missed because the Student is absent are non-refundable.",
        "Make-up classes may be offered at TutorExel's discretion but do not create a right to a refund.",
        "For live classes (excluding exam preparation programs), if a refund is approved after Services start, it is calculated pro-rata and applies only to unconsumed sessions."
      ]
    },
    {
      "type": "h3",
      "text": "4.2 Exam Preparation Programs (Live)"
    },
    {
      "type": "p",
      "text": "No refund once:"
    },
    {
      "type": "ul",
      "items": [
        "the program starts; or",
        "any live session, mock test or material is accessed."
      ]
    },
    {
      "type": "p",
      "text": "This applies whatever the level of attendance or performance."
    },
    {
      "type": "h3",
      "text": "4.3 Exam Preparation Programs (Self-Study)"
    },
    {
      "type": "p",
      "text": "For self-study programs, sharing login credentials for the learning platform, practice material, mock tests or any related content counts as the start of Services."
    },
    {
      "type": "p",
      "text": "Once login credentials are issued, the enrolment is treated as active and non-refundable, whether or not the Student accesses or uses the content."
    },
    {
      "type": "p",
      "text": "Access to self-study materials stays valid only for the access period stated when you enrol, after which all access ends automatically without notice."
    },
    {
      "type": "p",
      "text": "TutorExel has no duty to extend access, give refunds or offer continued access to content beyond the stated access period in any circumstances, except as the law requires."
    },
    {
      "type": "h3",
      "text": "4.4 Co-Curricular Classes (Music and Activities)"
    },
    {
      "type": "ul",
      "items": [
        "The same rules as for live online classes apply.",
        "Free trial or demo classes (if any) do not guarantee refund eligibility."
      ]
    },
    {
      "type": "h2",
      "text": "5. CANCELLATION BY TUTOREXEL"
    },
    {
      "type": "p",
      "text": "TutorExel may cancel or stop a Course or enrolment because of:"
    },
    {
      "type": "ul",
      "items": [
        "instructor unavailability;",
        "operational constraints;",
        "force majeure events;",
        "regulatory or technical reasons."
      ]
    },
    {
      "type": "p",
      "text": "In such cases:"
    },
    {
      "type": "ul",
      "items": [
        "TutorExel will refund only the unconsumed portion of the Course Fees, or offer a suitable replacement lesson or credit if you prefer;",
        "the refund will not exceed the total amount paid for that enrolment;",
        "no additional compensation, damages or interest will be payable, except as the law requires."
      ]
    },
    {
      "type": "h2",
      "text": "6. PAYMENT REVERSALS, CHARGEBACKS AND DISPUTES"
    },
    {
      "type": "p",
      "text": "Any payment reversal, chargeback or dispute raised through banks or payment gateways:"
    },
    {
      "type": "ul",
      "items": [
        "results in immediate suspension of access to Services; and",
        "may lead to permanent account termination."
      ]
    },
    {
      "type": "p",
      "text": "Please contact us first so we can fix a billing problem quickly. TutorExel may recover dues, administrative costs and penalties arising from chargebacks."
    },
    {
      "type": "h2",
      "text": "7. REFUND PROCESSING"
    },
    {
      "type": "p",
      "text": "Approved refunds are paid using the **original payment method only**. Refund timelines depend on:"
    },
    {
      "type": "ul",
      "items": [
        "the payment gateway;",
        "the banking partner;",
        "regulatory timelines."
      ]
    },
    {
      "type": "p",
      "text": "TutorExel does not guarantee immediate refunds and is not responsible for delays caused by third parties."
    },
    {
      "type": "h2",
      "text": "8. TAXES AND FEES"
    },
    {
      "type": "p",
      "text": "Taxes already paid to authorities (such as GST, HST or sales tax) are non-refundable, unless the law requires otherwise. Payment gateway fees and administrative charges are non-refundable."
    },
    {
      "type": "h2",
      "text": "9. NON-TRANSFERABILITY"
    },
    {
      "type": "p",
      "text": "Course Fees are non-transferable:"
    },
    {
      "type": "ul",
      "items": [
        "between Students;",
        "between Courses;",
        "between academic years or programs."
      ]
    },
    {
      "type": "h2",
      "text": "10. EXCLUSIONS"
    },
    {
      "type": "p",
      "text": "No refund is given because of:"
    },
    {
      "type": "ul",
      "items": [
        "change of mind;",
        "dissatisfaction with teaching style;",
        "academic performance or results;",
        "internet or device problems on the Student's side;",
        "scheduling conflicts or personal reasons."
      ]
    },
    {
      "type": "p",
      "text": "These exclusions do not apply where consumer law gives you a right to a remedy."
    },
    {
      "type": "h2",
      "text": "11. FINAL AUTHORITY"
    },
    {
      "type": "p",
      "text": "Refund and cancellation decisions rest with TutorExel. TutorExel's decision is final and binding, subject to applicable law and your right to take a complaint to a consumer protection agency or a court."
    },
    {
      "type": "h2",
      "text": "12. GOVERNING LAW AND JURISDICTION"
    },
    {
      "type": "p",
      "text": "This Policy is governed by the laws that apply where you live: for Australia, the laws of the Australian state or territory where you live; for the United States, the laws of the U.S. state where you live; for Canada, the laws of the Canadian province or territory where you live; and for New Zealand, the laws of New Zealand. Nothing in this clause removes any right you have under the mandatory consumer protection laws of your country."
    },
    {
      "type": "p",
      "text": "If you have a concern, please contact us first so we can try to resolve it fairly and promptly. If we cannot, either of us may bring a claim in the courts of the state, province or country where you live, and those courts will have jurisdiction. Where you and TutorExel both agree, a dispute may instead be resolved by mediation or arbitration in your country of residence, in English."
    }
  ],
  "contactBlock": {
    "title": "Need to Cancel or Request a Refund?",
    "intro": "Please reach out to us and we will be happy to help.",
    "email": "info@tutorexel.com",
    "hasWhatsApp": true,
    "responseTime": "Within 2 business days"
  }
};
