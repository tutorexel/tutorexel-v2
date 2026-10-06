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

export const LEGAL_PRIVACY_COPY: LegalPageCopy = {
  "hero": {
    "titleHighlight": "Privacy",
    "titleRest": " Policy",
    "subtitle": "Your privacy matters to us. This policy explains how we collect, use, protect and share your information."
  },
  "hasEffectiveDate": false,
  "blocks": [
    {
      "type": "h2",
      "text": "Introduction"
    },
    {
      "type": "p",
      "text": "This Privacy Policy (\"**Policy**\") explains how **TutorExel LLP**, a limited liability partnership (\"**TutorExel**\", \"**we**\", \"**us**\" or \"**our**\"), handles the personal information of parents, guardians, students, tutors, vendors, employees and other users (\"**you**\" or \"**your**\"). It applies to our website www.tutorexel.com (the \"**Website**\"), our learning platform, applications and related digital services (together, the \"**Platform**\"), wherever you live, including Australia, the United States, Canada and New Zealand."
    },
    {
      "type": "p",
      "text": "Read this Policy together with our **Terms & Conditions**. It describes how we collect, store, use, share and protect your Personal Information, the choices and rights you have, and how to raise a concern or complaint. Where the law of your country gives you stronger rights than this Policy, those rights apply."
    },
    {
      "type": "h2",
      "text": "CONSENT"
    },
    {
      "type": "p",
      "text": "By using the Platform and accepting our Terms & Conditions, you agree to the collection, use, storage and transfer of your Personal Information as described in this Policy, to the extent the law allows us to rely on your consent."
    },
    {
      "type": "p",
      "text": "If you do not agree with this Policy, please do not use the Website, the Platform or our services."
    },
    {
      "type": "p",
      "text": "We may update this Policy from time to time to reflect legal, regulatory or operational changes."
    },
    {
      "type": "ul",
      "items": [
        "If you are a **visitor**, an updated Policy takes effect when it is posted on this page.",
        "If you are a **registered user**, we will tell you about material changes and give you a chance to review them before you continue using our services."
      ]
    },
    {
      "type": "p",
      "text": "Continued use of the Platform after an update means you accept the revised Policy, where the law allows."
    },
    {
      "type": "h2",
      "text": "CHILDREN AND STUDENTS"
    },
    {
      "type": "p",
      "text": "Most of our students are school-aged children. We collect a child's Personal Information only from, or with the consent of, a parent or guardian, and only to provide tutoring. Parents and guardians create and manage the account and can review, correct or ask us to delete their child's information at any time."
    },
    {
      "type": "p",
      "text": "We do not knowingly collect Personal Information directly from a child under 13 (or the age set by local law) without verifiable parental consent. If you believe a child has given us information without that consent, contact us and we will delete it promptly. We do not use children's Personal Information for targeted advertising."
    },
    {
      "type": "h2",
      "text": "DEFINITION OF PERSONAL INFORMATION"
    },
    {
      "type": "p",
      "text": "\"**Personal Information**\" means any information that identifies you or can reasonably identify you, on its own or combined with other information. It includes what privacy laws call \"personal information\", \"personal data\" or \"personally identifiable information\", and, where applicable, **sensitive information** as defined by those laws."
    },
    {
      "type": "h2",
      "text": "COLLECTION OF INFORMATION"
    },
    {
      "type": "h3",
      "text": "Visitors"
    },
    {
      "type": "p",
      "text": "You can browse the Website without giving us Personal Information. When you visit, we may automatically collect technical information for security, analytics and operations, including:"
    },
    {
      "type": "ul",
      "items": [
        "IP address",
        "browser type",
        "operating system",
        "device identifiers",
        "referring URLs",
        "pages visited",
        "date and time of access"
      ]
    },
    {
      "type": "p",
      "text": "We use this to understand trends, run the Website, improve security and make it easier to use."
    },
    {
      "type": "h3",
      "text": "Registered Users (Parents, Guardians and Students)"
    },
    {
      "type": "p",
      "text": "We collect Personal Information when you:"
    },
    {
      "type": "ul",
      "items": [
        "register on the Platform;",
        "enrol a student in a course;",
        "ask about our services;",
        "speak with tutors or support teams;",
        "take part in assessments, quizzes or feedback;",
        "contact us by chat, email, phone or messaging apps."
      ]
    },
    {
      "type": "p",
      "text": "We collect Personal Information **only where we have a lawful basis**, such as:"
    },
    {
      "type": "ul",
      "items": [
        "performing a contract with you;",
        "meeting legal or regulatory obligations;",
        "our legitimate business interests;",
        "your consent."
      ]
    },
    {
      "type": "h3",
      "text": "Types of Personal Information We Collect"
    },
    {
      "type": "p",
      "text": "This may include, but is not limited to, the following."
    },
    {
      "type": "label",
      "text": "Contact and account information"
    },
    {
      "type": "ul",
      "items": [
        "Full name",
        "Email address",
        "Phone number",
        "Profile picture",
        "Mailing address",
        "Country, state or province, and city"
      ]
    },
    {
      "type": "label",
      "text": "Identity and verification information"
    },
    {
      "type": "ul",
      "items": [
        "Date of birth",
        "School reports or marks (where needed)",
        "Government-issued identification (only where the law requires it or you choose to give it)"
      ]
    },
    {
      "type": "label",
      "text": "Billing and transaction information"
    },
    {
      "type": "ul",
      "items": [
        "Billing address",
        "Payment references",
        "Invoices and receipts"
      ]
    },
    {
      "type": "p",
      "text": "We do not store full debit or credit card details. Payments are handled by secure third-party payment providers, such as Razorpay or other authorised providers."
    },
    {
      "type": "label",
      "text": "Account credentials"
    },
    {
      "type": "ul",
      "items": [
        "Username",
        "Password (stored in encrypted form)"
      ]
    },
    {
      "type": "label",
      "text": "Academic and preference information"
    },
    {
      "type": "ul",
      "items": [
        "Year or grade level",
        "Subject preferences",
        "Curriculum or syllabus",
        "Assessment results",
        "Progress reports",
        "Learning activity and completion status"
      ]
    },
    {
      "type": "label",
      "text": "Support and interaction information"
    },
    {
      "type": "ul",
      "items": [
        "Chat transcripts",
        "Email correspondence",
        "Call recordings (where applicable)",
        "Feedback, surveys and testimonials"
      ]
    },
    {
      "type": "label",
      "text": "Platform usage and device information"
    },
    {
      "type": "p",
      "text": "We collect information about how you use the Platform, including:"
    },
    {
      "type": "ul",
      "items": [
        "classes attended",
        "worksheets and materials accessed",
        "recorded lessons viewed",
        "search queries",
        "device identifiers",
        "browser and software settings",
        "log files",
        "cookies and similar technologies"
      ]
    },
    {
      "type": "p",
      "text": "This helps us track learning progress, improve lessons, keep the Platform running well and personalise learning."
    },
    {
      "type": "h3",
      "text": "Payments and Financial Transactions"
    },
    {
      "type": "p",
      "text": "For paid services, we may offer payment options such as bank transfer, debit card or credit card, depending on where you live. Card payments are processed by secure third-party payment providers. We:"
    },
    {
      "type": "ul",
      "items": [
        "do not store full card numbers;",
        "do not have access to payment provider credentials;",
        "may keep limited transaction references for accounting and compliance."
      ]
    },
    {
      "type": "h3",
      "text": "Public Display of Information"
    },
    {
      "type": "p",
      "text": "A student's or parent's **first name, profile picture, year level or feedback** may be visible on the Platform or used internally for academic purposes. Any wider public use, such as testimonials or success stories, happens only with consent, as set out in our Terms & Conditions."
    },
    {
      "type": "h2",
      "text": "USAGE AND RETENTION OF INFORMATION"
    },
    {
      "type": "p",
      "text": "We use your Personal Information only as this Policy describes and only where needed to:"
    },
    {
      "type": "ul",
      "items": [
        "deliver the services you asked for;",
        "carry out our contracts with you;",
        "meet legal, regulatory or contractual obligations;",
        "protect our legitimate business interests; or",
        "establish, exercise or defend legal claims."
      ]
    },
    {
      "type": "p",
      "text": "We keep Personal Information only as long as reasonably needed for the purpose it was collected, or as the law requires. When that time ends, we securely delete or de-identify it, unless we must keep it for legal, regulatory, audit or dispute purposes."
    },
    {
      "type": "h3",
      "text": "USE OF PERSONAL INFORMATION"
    },
    {
      "type": "p",
      "text": "We use Personal Information to:"
    },
    {
      "type": "ul",
      "items": [
        "provide, run, analyse and improve our services;",
        "manage enrolments, schedules, assessments, reports and lessons;",
        "personalise learning to each student's level and goals;",
        "contact parents, guardians and students about classes, progress, schedules and Platform updates;",
        "offer customer support and handle queries and complaints;",
        "process payments, issue invoices and keep accounting records;",
        "enforce our Terms & Conditions and policies;",
        "detect, prevent and investigate fraud, unlawful or unauthorised activity;",
        "keep the Platform secure and running."
      ]
    },
    {
      "type": "h3",
      "text": "COMMUNICATION AND MARKETING"
    },
    {
      "type": "p",
      "text": "We may contact you by email, phone, SMS, WhatsApp, Platform notifications or other permitted channels for:"
    },
    {
      "type": "ul",
      "items": [
        "service updates and operational messages;",
        "class reminders, assessments and academic notices;",
        "news about features, courses or offers;",
        "surveys, feedback requests and service improvements;",
        "promotional or marketing messages, where the law allows and, where required, with your consent."
      ]
    },
    {
      "type": "p",
      "text": "You can opt out of promotional messages at any time using the unsubscribe link or by contacting us through our official support channels. Opting out does not stop essential service or transactional messages."
    },
    {
      "type": "h3",
      "text": "LOCATION, DEVICE AND SERVICE ANALYTICS"
    },
    {
      "type": "p",
      "text": "We may use Personal Information and usage data to:"
    },
    {
      "type": "ul",
      "items": [
        "work out your general location;",
        "offer lessons at suitable times for your time zone;",
        "analyse learning patterns and Platform performance;",
        "improve course content and teaching methods;",
        "find internet or device issues that affect access."
      ]
    },
    {
      "type": "p",
      "text": "Where possible we use this information in aggregated or de-identified form, and we do not use it to identify individuals unless needed to deliver the service or meet the law."
    },
    {
      "type": "h2",
      "text": "SHARING AND DISCLOSING PERSONAL INFORMATION"
    },
    {
      "type": "p",
      "text": "We may use third-party companies, agents, consultants, contractors or service providers (\"**Service Providers**\") to perform services for us or help us deliver our services to you. They may help with:"
    },
    {
      "type": "ul",
      "items": [
        "communications and marketing;",
        "hosting, infrastructure and IT;",
        "learning management and video-conferencing tools;",
        "payment processing and reconciliation;",
        "customer support;",
        "analytics and service improvement;",
        "academic reporting and assessment;",
        "surveys and feedback."
      ]
    },
    {
      "type": "p",
      "text": "Service Providers may access Personal Information only as far as needed to do their work for us. We do **not** allow them to use or share it for any other purpose, and they are bound by confidentiality and security obligations."
    },
    {
      "type": "h3",
      "text": "INTERNAL SHARING"
    },
    {
      "type": "p",
      "text": "If you are an employee, tutor, consultant, vendor or supplier, your Personal Information may be shared inside TutorExel on a **need-to-know basis** with relevant teams, such as operations, finance, compliance, human resources or academic staff, for legitimate business, legal or regulatory reasons only."
    },
    {
      "type": "h3",
      "text": "TESTIMONIALS, RESULTS AND PROMOTIONAL DISCLOSURE"
    },
    {
      "type": "p",
      "text": "If you use our services, including a student enrolled by a parent or guardian, we may, **with your consent**, use limited Personal Information such as:"
    },
    {
      "type": "ul",
      "items": [
        "first name;",
        "year or grade level;",
        "testimonials or feedback;",
        "non-sensitive progress indicators or scores;",
        "success stories or learning outcomes,"
      ]
    },
    {
      "type": "p",
      "text": "for academic reporting, marketing, publicity and outreach. This may appear on:"
    },
    {
      "type": "ul",
      "items": [
        "our Website and apps;",
        "social media;",
        "digital advertising;",
        "presentations or educational material."
      ]
    },
    {
      "type": "p",
      "text": "For a student who is a minor, a parent or guardian gives this consent on the student's behalf. You can withdraw it at any time. We never use sensitive information or identity documents for promotion."
    },
    {
      "type": "h3",
      "text": "CROSS-BORDER DATA TRANSFERS"
    },
    {
      "type": "p",
      "text": "TutorExel LLP is a registered company and your Personal Information is processed mainly by the jurisdiction of the country you live in. Our Service Providers may also store or process it in other countries."
    },
    {
      "type": "p",
      "text": "If you use our services from **Australia, the United States, Canada, New Zealand**, the European Economic Area, the United Kingdom or elsewhere, your Personal Information may be transferred to, stored and processed in the countries whose privacy laws may differ from your own. We take reasonable steps to make sure overseas recipients protect your information in line with this Policy and with the privacy laws that apply to you. By using our services you acknowledge and, where the law requires, consent to these transfers."
    },
    {
      "type": "h3",
      "text": "SECURITY OF PERSONAL INFORMATION"
    },
    {
      "type": "p",
      "text": "We use reasonable technical, administrative and organisational safeguards to protect Personal Information, online and offline, from loss, misuse, unauthorised access, disclosure, alteration or destruction. These may include:"
    },
    {
      "type": "ul",
      "items": [
        "SSL encryption and secure connections;",
        "access-controlled servers and databases;",
        "firewalls and network security controls;",
        "restricted internal access on a need-to-know basis;",
        "password encryption and authentication controls."
      ]
    },
    {
      "type": "p",
      "text": "No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If you think your account or Personal Information has been compromised, tell us straight away through our official support channels."
    },
    {
      "type": "h3",
      "text": "NO SALE OF PERSONAL INFORMATION"
    },
    {
      "type": "p",
      "text": "We do not sell or rent your Personal Information, and we do not share it for third parties' own marketing without your explicit consent. We treat protecting your privacy as a core operating principle."
    },
    {
      "type": "h3",
      "text": "DATA STORAGE LOCATION"
    },
    {
      "type": "p",
      "text": "We store and process data on secure servers, protected by suitable physical, technical and administrative safeguards. We may use third-party auditors or providers to support security and compliance. If you do not agree to this, please do not use the Website, apps or services."
    },
    {
      "type": "h3",
      "text": "LAWFUL DISCLOSURE"
    },
    {
      "type": "p",
      "text": "We may disclose Personal Information where required to:"
    },
    {
      "type": "ul",
      "items": [
        "comply with applicable law or regulation;",
        "respond to a court order, subpoena or government request;",
        "enforce our Terms & Conditions or investigate breaches;",
        "protect the rights, property or safety of TutorExel, our users or the public;",
        "prevent fraud, security breaches or unlawful activity."
      ]
    },
    {
      "type": "p",
      "text": "We make such disclosures only as far as the law requires."
    },
    {
      "type": "h2",
      "text": "KEEPING YOUR PERSONAL INFORMATION SECURE"
    },
    {
      "type": "p",
      "text": "We have appropriate technical, administrative and organisational measures to protect Personal Information against accidental or unlawful loss, destruction, alteration, disclosure or access."
    },
    {
      "type": "p",
      "text": "Only authorised staff and Service Providers who are bound by confidentiality handle Personal Information. We have internal procedures to identify, assess and respond to suspected data breaches."
    },
    {
      "type": "p",
      "text": "Where the law requires, we will tell affected people and the relevant regulator about a data breach within the legal timeframe. This includes notifications under Australia's Notifiable Data Breaches scheme, New Zealand's Privacy Act 2020, Canadian privacy laws and U.S. state breach laws."
    },
    {
      "type": "h2",
      "text": "COOKIES"
    },
    {
      "type": "p",
      "text": "We use cookies and similar technologies, which are small files stored on your browser or device, to recognise you, remember your preferences and improve your experience."
    },
    {
      "type": "p",
      "text": "Cookies help us to:"
    },
    {
      "type": "ul",
      "items": [
        "remember login preferences;",
        "analyse usage trends;",
        "personalise content and course suggestions;",
        "improve Platform performance and security."
      ]
    },
    {
      "type": "p",
      "text": "A cookie does not collect Personal Information by itself, and we do not place sensitive Personal Information in cookies. Where the law requires, we ask for your consent before using non-essential cookies."
    },
    {
      "type": "p",
      "text": "You can control or turn off cookies in your browser settings, but this may limit some Platform features."
    },
    {
      "type": "h2",
      "text": "THIRD PARTIES AND LINKS"
    },
    {
      "type": "p",
      "text": "We may share Personal Information with related companies or affiliates where needed for legitimate business purposes and with suitable safeguards. We may also share it with agents, contractors or Service Providers to help with:"
    },
    {
      "type": "ul",
      "items": [
        "delivering services;",
        "processing payments;",
        "analysing data;",
        "customer support;",
        "marketing or communications."
      ]
    },
    {
      "type": "p",
      "text": "We may share information with third parties to prevent fraud, verify security and reduce credit risk. If we merge, are acquired, sell assets or restructure, we may transfer databases containing Personal Information to the relevant party, subject to confidentiality obligations."
    },
    {
      "type": "p",
      "text": "Except as this Policy states, we do not sell or disclose Personal Information to third parties without your consent, unless the law requires us to."
    },
    {
      "type": "p",
      "text": "The Platform may contain ads, links or frames to third-party websites. We are not responsible for their privacy practices or content, and you use them at your own risk. Please read their privacy policies before sharing any Personal Information."
    },
    {
      "type": "h2",
      "text": "CHOICE AND COMMUNICATION PREFERENCES"
    },
    {
      "type": "p",
      "text": "You can choose how we use your Personal Information for communication, including:"
    },
    {
      "type": "ul",
      "items": [
        "marketing communications;",
        "promotional updates;",
        "personalised recommendations;",
        "staying signed in."
      ]
    },
    {
      "type": "p",
      "text": "If you do not want promotional or marketing messages, you can:"
    },
    {
      "type": "ul",
      "items": [
        "unsubscribe using the link in the message;",
        "update your communication preferences; or",
        "contact us by chat, email, WhatsApp or phone to stop promotional messages."
      ]
    },
    {
      "type": "p",
      "text": "Opting out of marketing does not affect service-related, transactional or legally required messages."
    },
    {
      "type": "h2",
      "text": "YOUR RIGHTS IN RELATION TO PERSONAL INFORMATION COLLECTED BY US"
    },
    {
      "type": "p",
      "text": "Subject to applicable law, you may withdraw your consent to our collection, use or processing of your Personal Information at any time by writing to us using the contact details below."
    },
    {
      "type": "p",
      "text": "Please note that:"
    },
    {
      "type": "ul",
      "items": [
        "withdrawing consent applies from that point forward only; and",
        "it may mean we can no longer provide some services."
      ]
    },
    {
      "type": "p",
      "text": "You may ask us to:"
    },
    {
      "type": "ul",
      "items": [
        "give you access to your Personal Information;",
        "review and correct inaccurate or incomplete Personal Information;",
        "delete Personal Information, subject to legal and contractual obligations; or",
        "stop using your information for future processing."
      ]
    },
    {
      "type": "p",
      "text": "We rely on the information you provide in good faith and are not responsible for checking its accuracy."
    },
    {
      "type": "p",
      "text": "**Your rights by region.** Depending on where you live, you may have additional rights:"
    },
    {
      "type": "ul",
      "items": [
        "**Australia:** under the Privacy Act 1988 and the Australian Privacy Principles, you may ask for access to and correction of your information, and may complain to the Office of the Australian Information Commissioner if we do not resolve your concern.",
        "**New Zealand:** under the Privacy Act 2020 and its Information Privacy Principles, you may ask for access to and correction of your information, and may complain to the Office of the Privacy Commissioner.",
        "**Canada:** under the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial laws, you may ask for access, correction and withdrawal of consent, and may complain to the Office of the Privacy Commissioner of Canada or your provincial regulator.",
        "**United States:** depending on your state (for example California), you may have the right to know, access, correct and delete your Personal Information, and not to be treated unfairly for using these rights. We do not sell or share Personal Information for cross-context behavioural advertising."
      ]
    },
    {
      "type": "p",
      "text": "We will not discriminate against you for using your privacy rights. We aim to respond to requests within 30 days, or sooner where local law requires."
    },
    {
      "type": "p",
      "text": "We may limit or refuse a request where the law, a regulator, a court or a law-enforcement authority requires or allows us to."
    },
    {
      "type": "h2",
      "text": "CONDITIONS OF USE"
    },
    {
      "type": "p",
      "text": "We do not promise that the Website, apps, servers or messages sent by us are free of viruses, malware or other harmful components."
    },
    {
      "type": "p",
      "text": "To the maximum extent the law allows, TutorExel is not liable for damages arising from using, or being unable to use, the Website, apps or services, including:"
    },
    {
      "type": "ul",
      "items": [
        "direct or indirect damages;",
        "incidental, punitive or consequential damages;",
        "loss of data, goodwill, business opportunity, income or profits;",
        "damage to property; or",
        "claims of third parties."
      ]
    },
    {
      "type": "p",
      "text": "Your use of the Platform is subject to our Terms & Conditions. Nothing in this Policy limits rights you have under consumer protection or privacy laws that cannot be excluded, including the Australian Consumer Law."
    },
    {
      "type": "h2",
      "text": "CAMERA, MICROPHONE AND RECORDING CONSENT"
    },
    {
      "type": "p",
      "text": "By enrolling in our services, you consent to:"
    },
    {
      "type": "ul",
      "items": [
        "camera and microphone use during online classes; and",
        "recording of classes for teaching, quality checks, training or student revision,"
      ]
    },
    {
      "type": "p",
      "text": "Provided recordings are used in line with this Policy and our Terms & Conditions. Where a student is a minor, a parent or guardian gives this consent. Recordings are visible only to the student's family and authorised TutorExel staff. Contact us if you wish to withdraw consent, and we will discuss the options for your child's lessons. Some regions require all participants to consent to recording, and we ask for this before classes begin."
    },
    {
      "type": "h2",
      "text": "GOVERNING LAW AND JURISDICTION"
    },
    {
      "type": "p",
      "text": "This Policy is governed by the privacy and consumer protection laws that apply where you live: for Australia, the laws of the Australian state or territory where you live; for the United States, the laws of the U.S. state where you live; for Canada, the laws of the Canadian province or territory where you live; and for New Zealand, the laws of New Zealand. Nothing in this Policy removes any right you have under the mandatory laws of your country."
    },
    {
      "type": "p",
      "text": "If you have a concern, please contact us first using the details below, so we can try to resolve it informally and promptly."
    },
    {
      "type": "p",
      "text": "If we cannot resolve it, you may:"
    },
    {
      "type": "ul",
      "items": [
        "complain to the privacy regulator in your country, which is the Office of the Australian Information Commissioner, the Office of the Privacy Commissioner of Canada or your provincial regulator, the New Zealand Office of the Privacy Commissioner, or, in the United States, your state attorney general or the Federal Trade Commission; and",
        "bring a claim in the courts of the state, province or country where you live, which will have jurisdiction over the dispute."
      ]
    },
    {
      "type": "p",
      "text": "Where the law allows, we and you may instead agree to resolve a dispute by mediation or arbitration in your country of residence, in English, under that country's rules."
    }
  ],
  "contactBlock": {
    "title": "Data Protection and Privacy Contact",
    "intro": "Please send questions, concerns or complaints about the handling of Personal Information to:",
    "company": "TutorExel LLP",
    "email": "info@tutorexel.com",
    "responseTime": "We aim to reply to every genuine request or complaint within a reasonable time, and within 30 days unless the law sets a shorter period.",
    "additionalNote": "If you are not satisfied with our response, you may contact the privacy regulator in your country."
  }
};
