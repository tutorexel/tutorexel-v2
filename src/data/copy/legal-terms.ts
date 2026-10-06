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

export const LEGAL_TERMS_COPY: LegalPageCopy = {
  "hero": {
    "titleHighlight": "Terms",
    "titleRest": " & Conditions",
    "subtitle": "Please read these terms carefully before using our services."
  },
  "hasEffectiveDate": true,
  "blocks": [
    {
      "type": "h2",
      "text": "Introduction"
    },
    {
      "type": "p",
      "text": "TutorExel LLP, a limited liability partnership (hereinafter \"**TutorExel**\", \"**we**\", \"**us**\" or \"**our**\"), provides online educational services, including live online tutoring classes in English, Mathematics and Science, co-curricular (music) lessons, exam preparation programs (live and self-study), doubt-clearing sessions, assessments, quizzes, recorded sessions and related learning material (the \"**Services**\")."
    },
    {
      "type": "p",
      "text": "The Services are available through www.tutorexel.com and other websites through which TutorExel offers them (together, the \"**Site**\"), and through TutorExel's white-labelled learning platform and one or more third-party learning management systems, video-conferencing platforms and related technologies (together, the \"**Applications**\")."
    },
    {
      "type": "p",
      "text": "By accessing or using the Site, the Applications or the Services, by downloading, accessing or posting any content from or on the Site through the Applications, you confirm that you have read, understood and agree to be bound by these terms and to receive the Services (\"**Terms of Service**\" or \"**Terms**\"), whether or not you have registered on the Site or Applications."
    },
    {
      "type": "p",
      "text": "By clicking \"I Agree\", \"Submit\", \"Enrol\", \"Pay Now\", or by otherwise accessing or using the Site, the Applications or the Services, you expressly acknowledge that you have read, understood and agreed to be bound by these Terms, the Privacy Policy and all other applicable policies of TutorExel."
    },
    {
      "type": "p",
      "text": "If you do not agree to these Terms, you must stop accessing and using the Site, the Applications and the Services immediately."
    },
    {
      "type": "p",
      "text": "Please read these Terms carefully before you access or use the Site, the Applications or the Services, because they contain important information about your legal rights, remedies, responsibilities and obligations."
    },
    {
      "type": "p",
      "text": "If you do not agree, you have no right to access or use the Site, the Applications, the Services or the Collective Content (defined below)."
    },
    {
      "type": "p",
      "text": "If you access or use the Site, the Applications or the Services, these Terms form a binding legal agreement between you and TutorExel."
    },
    {
      "type": "h2",
      "text": "Definitions"
    },
    {
      "type": "p",
      "text": "In addition to other words and expressions defined elsewhere in these Terms, unless the context requires otherwise, the following capitalised terms have these meanings wherever used in these Terms:"
    },
    {
      "type": "ul",
      "items": [
        "\"**Courses**\" means educational courses, programs and learning modules offered by TutorExel through the Site or Applications, including live online classes, co-curricular lessons and exam preparation programs.",
        "\"**Course Fees**\" means the amounts payable by a Parent or Guardian to enrol a Student in a Course.",
        "\"**Collective Content**\" means TutorExel Content and Member Content together.",
        "\"**Content**\" means text, graphics, images, worksheets, assessments, quizzes, software (other than the Applications), audio, video, information or other material made available through the Site, the Applications or the Services.",
        "\"**Member**\" means a person who completes TutorExel's account registration process, including Parents or Guardians enrolling Students, as described under \"**Account Registration**\" below.",
        "\"**Member Content**\" means all Content that a Member posts, uploads, submits, transmits or otherwise makes available through the Site, the Applications or the Services.",
        "\"**Payment Method**\" means a way of paying Course Fees, including an authorised online payment gateway, bank transfer or any other method approved by TutorExel.",
        "\"**Student**\" means a minor enrolled in a Course. Where the Student is a minor, references to the Student include the Parent or Guardian who enrols the Student.",
        "\"**Tax**\" or \"**Taxes**\" means any goods and services tax (GST or HST), sales tax, use tax, value-added tax or other indirect or withholding tax that TutorExel may be required by law to collect and pay to the relevant tax authority.",
        "\"**TutorExel Content**\" means all Content that TutorExel makes available through the Site, the Applications, the Services or official TutorExel communication channels, including Content licensed from third parties, but not Member Content."
      ]
    },
    {
      "type": "h2",
      "text": "Terms of Service"
    },
    {
      "type": "p",
      "text": "TutorExel believes that every user of the Site, the Applications and the Services should be able to give informed consent before giving any information needed to use them."
    },
    {
      "type": "p",
      "text": "By registering with TutorExel, you expressly agree to TutorExel's collection, processing, storage, disclosure and handling of your information, including the personal information of the Student, in line with TutorExel's Privacy Policy, as updated from time to time."
    },
    {
      "type": "p",
      "text": "Such processing may include collecting, storing, using, sharing, transferring and disclosing information. It may take place outside the country where you live, as described in the Privacy Policy, and you acknowledge that your information may be transferred, processed and stored in accordance with applicable privacy laws."
    },
    {
      "type": "p",
      "text": "You also grant TutorExel permission to use anonymised academic information, feedback, testimonials, first name, year or grade level and non-sensitive performance indicators for academic reporting, service improvement, advertising and promotion across TutorExel's platforms and communication channels. Where the Student is a minor, this permission is given by the Parent or Guardian, and you can withdraw it at any time by contacting us."
    },
    {
      "type": "p",
      "text": "By using the Site, the Applications or the Services, you agree to follow and be legally bound by these Terms, whether or not you become a registered Member. These Terms govern your access to and use of the Site, the Applications, the Services and all Collective Content and form a legal agreement between you and TutorExel."
    },
    {
      "type": "p",
      "text": "You also authorise TutorExel to contact you by calls, SMS, email, WhatsApp and platform notifications to provide the Services and share information about existing or new offerings, to the extent permitted by law. Where the law requires your consent for marketing messages, we will ask for it, and you can opt out at any time. Opting out does not stop service messages. Telephone and messaging do-not-contact registers will be respected."
    },
    {
      "type": "p",
      "text": "In addition, some areas of the Site or Applications, or some Services, may be subject to additional terms, guidelines or policies. If there is a conflict between these Terms and any additional terms for a specific Service, the additional terms prevail for that Service."
    },
    {
      "type": "p",
      "text": "If you do not agree to these Terms, you have no right to get or continue to use the Site, the Applications or the Services. Use that breaches these Terms may expose you to civil and, where applicable, criminal liability."
    },
    {
      "type": "h2",
      "text": "Platform Nature"
    },
    {
      "type": "p",
      "text": "The Site, the Applications and the Services together form an online educational platform through which Students can learn about and enrol in Courses that TutorExel offers directly."
    },
    {
      "type": "p",
      "text": "TutorExel may rely on third-party platforms, including video-conferencing, learning management, payment and communication services."
    },
    {
      "type": "p",
      "text": "TutorExel does not control, and is not liable for, outages, data loss, security breaches or service interruptions caused by those third-party platforms, except where the law says otherwise."
    },
    {
      "type": "p",
      "text": "TutorExel provides the Courses from start to finish. It is not responsible for Members' compliance with agreements with third parties, or with laws and regulations outside TutorExel's reasonable control. TutorExel may, at any time and without prior notice, suspend or disable access to the Site, the Applications or the Services for any reason it considers objectionable, unlawful or in breach of these Terms."
    },
    {
      "type": "h2",
      "text": "Eligibility"
    },
    {
      "type": "p",
      "text": "You may use the Site, the Applications and the Services only if you are able to form a legally binding contract under the laws of the country, state, province or territory where you live."
    },
    {
      "type": "p",
      "text": "The Services are meant for Students under eighteen (18) years of age, who must be enrolled only by their Parent or legal Guardian. A minor who accesses or uses the Site, the Applications or the Services without valid parental authorisation breaches these Terms."
    },
    {
      "type": "p",
      "text": "By registering an account or enrolling a Student, the Parent or Guardian states and confirms that:"
    },
    {
      "type": "ul",
      "items": [
        "they are at least eighteen (18) years old, or the age of majority where they live, if higher;",
        "they are legally able to enter binding contracts where they live; and",
        "they have full legal authority to enrol the Student and to accept these Terms on the Student's behalf."
      ]
    },
    {
      "type": "p",
      "text": "TutorExel may suspend or terminate any account where eligibility, authority or identity information is found to be false, misleading or fraudulent. This will not give rise to a refund, except where the law requires one."
    },
    {
      "type": "p",
      "text": "By accessing or using the Site, the Applications or the Services, the Parent or Guardian states and confirms that they are legally able and authorised to accept these Terms on the Student's behalf."
    },
    {
      "type": "h2",
      "text": "Usage of Site, Applications, or Services"
    },
    {
      "type": "p",
      "text": "You may use the Site, the Applications and the Services to enrol in Courses offered by TutorExel. You may browse the Site as a visitor, but to enroll in any Course or use restricted features, you must register and create a TutorExel account."
    },
    {
      "type": "p",
      "text": "TutorExel's responsibilities are limited to making the Courses available through the Site and the Applications, unless expressly stated otherwise."
    },
    {
      "type": "h2",
      "text": "Account Registration"
    },
    {
      "type": "p",
      "text": "TutorExel will create and offer a range of online Courses through the Site and the Applications. Details of each Course, including subject, year or grade level, number of sessions, delivery format, class schedules, pricing and applicable academic or financial rules, will be shown on the Site or given to the Parent or Guardian when they enrol."
    },
    {
      "type": "p",
      "text": "Courses may be delivered on TutorExel's own platform or through third-party learning management systems and video-conferencing tools chosen by TutorExel. TutorExel may change the structure, schedule, content, instructors or delivery methods of a Course for academic, operational or technical reasons, without creating any right to a refund, except as stated in the applicable refund policy or as required by law."
    },
    {
      "type": "p",
      "text": "TutorExel is not responsible for a Student's compliance with obligations set by third parties, including internet service providers and hardware, software or platform providers used to access the Services."
    },
    {
      "type": "p",
      "text": "TutorExel may, at any time, suspend or disable access to the Platform or Services for any Student or Member whose conduct is considered unlawful, disruptive, abusive or in breach of these Terms or TutorExel's internal standards."
    },
    {
      "type": "h2",
      "text": "Instructor Relationship and Independent Status"
    },
    {
      "type": "p",
      "text": "All instructors engaged by TutorExel to deliver Courses are engaged as independent contractors or service providers. Nothing in these Terms creates an employer-employee, agency, partnership, joint venture or fiduciary relationship between TutorExel and any instructor, except where the law of the instructor's location says otherwise."
    },
    {
      "type": "p",
      "text": "Instructors act on their own behalf and not as agents of TutorExel. TutorExel does not control instructors' conduct outside the scope of delivering online classes through the Platform and is not responsible for any offline or unauthorised interactions."
    },
    {
      "type": "p",
      "text": "Instructors must not represent themselves as partners, agents or authorised representatives of TutorExel beyond the scope of the Services delivered through the Platform, or use TutorExel's intellectual property without authorisation."
    },
    {
      "type": "h2",
      "text": "Enrolment Requirements"
    },
    {
      "type": "p",
      "text": "When enrolling in a Course, the Parent or Guardian may need to provide or verify certain information, including contact details, Student details and platform access credentials. Failing to give accurate and complete information may delay, suspend or cancel the enrollment."
    },
    {
      "type": "p",
      "text": "TutorExel may refuse or cancel an enrolment where eligibility requirements are not met or where enrolment information is found to be inaccurate or misleading."
    },
    {
      "type": "h2",
      "text": "No Endorsement"
    },
    {
      "type": "p",
      "text": "By using the Site, the Applications or the Services, you acknowledge and agree that TutorExel does not endorse, guarantee or take responsibility for the actions or omissions of any other Member, Student, instructor or third party."
    },
    {
      "type": "p",
      "text": "Any legal remedy or liability arising from the actions or omissions of other Members or third parties is limited to a claim against the person or entity responsible for those actions or omissions, to the extent the law allows. This does not limit TutorExel's responsibility for its own conduct or any rights you have under consumer protection law."
    },
    {
      "type": "h2",
      "text": "Payment Terms"
    },
    {
      "type": "p",
      "text": "If an enrolment request is made for any Course through the Site, the Applications or other communication channels, TutorExel will confirm, reject or place that request on hold within a reasonable period. Where enrolment is not confirmed, any amount collected will be refunded in line with TutorExel's Refund and Cancellation Policy."
    },
    {
      "type": "p",
      "text": "Course Fees payable will be clearly shown to the Parent or Guardian before enrolment is confirmed, in the currency of the country where the Course is sold (Australian, United States, Canadian or New Zealand dollars). TutorExel may collect Course Fees on a monthly subscription basis, as a one-time payment, or as specified for the relevant Course."
    },
    {
      "type": "p",
      "text": "Payments may be made through authorised payment gateways or by direct bank transfer, as shown on the invoice. TutorExel does not store or process card or banking credentials directly."
    },
    {
      "type": "p",
      "text": "Access to Courses, recorded sessions, learning materials and platform credentials will be provided only after TutorExel has received and verified payment."
    },
    {
      "type": "p",
      "text": "TutorExel may suspend or limit access to the Services where payments are reversed, disputed, delayed or charged back."
    },
    {
      "type": "h2",
      "text": "Invoices and Taxes"
    },
    {
      "type": "p",
      "text": "TutorExel will issue system-generated invoices for Course Fees paid, including applicable Taxes, in line with the tax laws of the country where the Course is sold. Parents or Guardians are responsible for making sure their billing details are accurate."
    },
    {
      "type": "p",
      "text": "Any statutory taxes, including goods and services tax (GST or HST) or sales tax, will be applied as required at the rates in force."
    },
    {
      "type": "h2",
      "text": "Payment Confirmation"
    },
    {
      "type": "p",
      "text": "Once enrolment is confirmed and payment is received, TutorExel will send a confirmation by email, WhatsApp or platform notification, summarising the enrolment details."
    },
    {
      "type": "p",
      "text": "Access to the Platform and Services will be provided only after payment is successfully verified."
    },
    {
      "type": "h2",
      "text": "Cancellations and Refunds"
    },
    {
      "type": "p",
      "text": "All refunds, cancellations and withdrawals are governed by TutorExel's Refund and Cancellation Policy, which forms part of these Terms."
    },
    {
      "type": "p",
      "text": "No oral statements, messages or assurances from sales, academic or support staff change or override the written refund policy."
    },
    {
      "type": "p",
      "text": "If a Student (through the Parent or Guardian) wishes to cancel a confirmed enrolment, the cancellation and refund policy that applies to that Course applies. No refund will be made for classes, sessions or learning material already provided or accessed, except where the law requires it."
    },
    {
      "type": "p",
      "text": "TutorExel's ability to refund Course Fees or other amounts depends on the terms of the applicable Refund and Cancellation Policy, the nature of the Course (live classes, co-curricular lessons, or exam preparation programs) and the stage at which cancellation is requested. Details of refunds and cancellations are available on the Site or through official communication channels, and Parents or Guardians should review them carefully before enrolling."
    },
    {
      "type": "p",
      "text": "Any refund that TutorExel approves will be started in line with its payment processing timelines and methods. TutorExel does not guarantee immediate processing of refunds and is not responsible for delays caused by banks, payment gateways or third-party processors."
    },
    {
      "type": "p",
      "text": "If TutorExel cancels a confirmed enrolment for any Course, TutorExel will refund the Course Fees paid for that enrolment, subject to verification and adjustment. The refund will not exceed the total amount the Parent or Guardian actually paid for that Course."
    },
    {
      "type": "p",
      "text": "**Your consumer rights.** Our Services come with guarantees and rights that cannot be excluded under consumer protection laws, including the Australian Consumer Law, New Zealand's Consumer Guarantees Act 1993 and Fair Trading Act 1986, Canadian federal and provincial consumer protection laws, and U.S. federal and state consumer protection laws. Nothing in these Terms limits those rights, including any right to a remedy or refund where the Services are not provided with due care and skill, or are not as described."
    },
    {
      "type": "h2",
      "text": "Taxes"
    },
    {
      "type": "p",
      "text": "You understand and acknowledge that governmental authorities may require TutorExel to collect Taxes on the Course Fees paid for the Services and to pay those Taxes to the proper tax authorities."
    },
    {
      "type": "p",
      "text": "Tax laws and requirements vary by jurisdiction, and Taxes may be calculated as a percentage of the Course Fees or in another way the law requires. All Course Fees shown or communicated may be exclusive or inclusive of Taxes, as stated, and any applicable Taxes will be paid by the Parent or Guardian. Where consumer law requires prices to include Tax, TutorExel will show them that way."
    },
    {
      "type": "p",
      "text": "TutorExel will issue system-generated invoices in line with the tax laws that apply to the sale, including GST, HST or sales tax where applicable."
    },
    {
      "type": "h2",
      "text": "User Conduct"
    },
    {
      "type": "p",
      "text": "You understand and agree that you are solely responsible for complying with all applicable laws, rules, regulations and tax obligations in connection with your use of the Site, the Applications, the Services or the Collective Content."
    },
    {
      "type": "p",
      "text": "In connection with your use of the Site, the Applications, the Services or the Collective Content, you agree that you will not, directly or indirectly:"
    },
    {
      "type": "ul",
      "items": [
        "violate any local, state, provincial, national or international law, regulation or court order, including tax regulations;",
        "use any manual or automated means, including scripts, bots, crawlers or scraping tools, to access, extract or misuse any part of the Platform;",
        "access, use or expose TutorExel Content in a way that is inconsistent with these Terms, the Privacy Policy or the rights of other users;",
        "use the Platform or Services for any unauthorised commercial purpose, or in a way that falsely implies endorsement, partnership or affiliation with TutorExel;",
        "dilute, tarnish or harm the TutorExel brand, including by misusing trademarks, trade names or domain names, or using confusingly similar identifiers;",
        "copy, store, distribute or otherwise access any Content except as expressly permitted by these Terms;",
        "infringe the intellectual property, privacy, contractual or other legal rights of TutorExel or any third party;",
        "interfere with or damage the Site, the Applications or the Services through malicious code, denial-of-service attacks or similar means;",
        "transmit or submit personal information of others without proper authorisation;",
        "engage in unsolicited communications, spam or unauthorised promotions through the Platform;",
        "harass, stalk, abuse or collect personal information of any other user beyond legitimate educational purposes;",
        "create more than one account for the same Student or register an account on behalf of another person without authorisation;",
        "solicit users for third-party services that compete with TutorExel without written approval;",
        "impersonate any person or entity or misrepresent your affiliation;",
        "get around TutorExel's payment mechanisms or make payments outside authorised channels;",
        "post, upload or transmit any content that is unlawful, misleading, abusive, obscene, discriminatory, violent or otherwise objectionable;",
        "systematically extract data to build databases or compilations;",
        "try to access non-public areas of the Platform or breach security measures;",
        "reverse engineer, decompile or try to find the source code of any software used by TutorExel; or",
        "advocate, encourage or help any third party in doing any of the above."
      ]
    },
    {
      "type": "p",
      "text": "Any breach of this section is a material breach of these Terms."
    },
    {
      "type": "p",
      "text": "TutorExel may investigate and take appropriate action, including suspending or ending accounts, without refund where the law allows, and pursue the remedies available under the law."
    },
    {
      "type": "h2",
      "text": "Monitoring, Access, and Disclosure"
    },
    {
      "type": "p",
      "text": "TutorExel may access, keep and disclose any information about Members or Students if the law requires it, or if TutorExel reasonably believes this is needed to:"
    },
    {
      "type": "ul",
      "items": [
        "(i) comply with legal processes or government requests;",
        "(ii) enforce or administer these Terms or related policies;",
        "(iii) prevent fraud, abuse or security risks; or",
        "(iv) protect the rights, property or safety of TutorExel, its users or the public."
      ]
    },
    {
      "type": "p",
      "text": "You acknowledge that TutorExel has no obligation to monitor user activity or review Member Content, but keeps the right to do so for operational, compliance, security or investigative purposes."
    },
    {
      "type": "p",
      "text": "TutorExel may, at any time and without prior notice, remove or disable access to any Content that it considers objectionable, unlawful or harmful to the Platform or Services."
    },
    {
      "type": "h2",
      "text": "Child Safety Policy"
    },
    {
      "type": "p",
      "text": "This Child Safety Policy applies to everyone connected with TutorExel, including:"
    },
    {
      "type": "ul",
      "items": [
        "employees, instructors, consultants and contractors of TutorExel;",
        "partner organisations or service providers engaged by TutorExel;",
        "Students enrolled and their Parents or Guardians;",
        "prospective Students reached through marketing or sales activities;",
        "any other persons or entities officially connected with TutorExel's activities."
      ]
    },
    {
      "type": "p",
      "text": "TutorExel is committed to a safe and respectful online learning environment for children. Where TutorExel has no direct control over a person alleged to have engaged in inappropriate conduct, including cases of child abuse, TutorExel will give reasonable cooperation and help to Parents or Guardians in approaching the appropriate authorities, without taking on personal liability for those acts."
    },
    {
      "type": "h3",
      "text": "Expected Behaviour"
    },
    {
      "type": "p",
      "text": "Everyone connected with TutorExel is expected to:"
    },
    {
      "type": "ul",
      "items": [
        "listen to children respectfully and without judgement;",
        "treat all children with dignity and empathy, without discrimination;",
        "use appropriate language and behaviour in all interactions, including online communication;",
        "create a safe environment that lets children express themselves;",
        "get written parental consent before capturing or using any images or videos of children;",
        "keep the personal information of children and guardians confidential;",
        "make sure all educational content is age-appropriate and culturally appropriate."
      ]
    },
    {
      "type": "h3",
      "text": "Prohibited Behaviour"
    },
    {
      "type": "p",
      "text": "No person connected with TutorExel shall:"
    },
    {
      "type": "ul",
      "items": [
        "engage in or support emotional, physical, sexual or online abuse of children;",
        "use or encourage the use of alcohol, drugs or intoxicants in interactions with children;",
        "develop exploitative personal or financial relationships with children;",
        "share inappropriate, pornographic, violent or harmful content;",
        "use language or behaviour that is abusive, intimidating, discriminatory or sexually inappropriate."
      ]
    },
    {
      "type": "h3",
      "text": "Reporting Misconduct"
    },
    {
      "type": "p",
      "text": "Anyone who becomes aware of inappropriate conduct involving a child is encouraged to report it to the appropriate authorities in their country and then tell TutorExel with relevant details. Where the law requires a report (for example mandatory reporting laws that apply in your state, province or country), that law applies. Reporting does not oblige TutorExel to take action beyond what the law requires, nor does it create liability on TutorExel's part."
    },
    {
      "type": "h2",
      "text": "Privacy"
    },
    {
      "type": "p",
      "text": "To provide the Services, TutorExel collects certain personal information of Parents, Guardians and Students. The collection, use, storage, processing and disclosure of that information is governed by TutorExel's Privacy Policy, which forms part of these Terms. Parents and Guardians are advised to read the Privacy Policy carefully before using the Site, the Applications or the Services."
    },
    {
      "type": "p",
      "text": "By accessing or using the Site, the Applications or the Services, you acknowledge the processing of personal information in line with TutorExel's Privacy Policy, as updated from time to time. This processing may include collecting, storing, using, sharing and disclosing information, in line with applicable privacy laws."
    },
    {
      "type": "p",
      "text": "You agree that TutorExel may disclose personal information given to it, including information entered on the Site or Applications, if required to do so by law, regulation, court order or government request, or as otherwise permitted by the Privacy Policy."
    },
    {
      "type": "p",
      "text": "As the Services are mainly offered to minor Students, enrolment and account creation must be done by a Parent or Guardian who is legally able to contract. You are responsible for keeping your account credentials confidential and for preventing unauthorised access to your account. TutorExel is not liable for any loss or damage arising from unauthorised use of your account, except where the law says otherwise."
    },
    {
      "type": "p",
      "text": "TutorExel keeps personal data only as long as needed to provide the Services, meet legal obligations, resolve disputes and enforce agreements."
    },
    {
      "type": "p",
      "text": "Parents and Guardians may ask for access to, correction of or deletion of personal data in line with applicable law by contacting TutorExel through official channels."
    },
    {
      "type": "h2",
      "text": "Intellectual Property Ownership and Rights Notices"
    },
    {
      "type": "p",
      "text": "The Site, the Applications, the Services and all Collective Content are protected by applicable copyright, trademark and other intellectual property laws. You acknowledge and agree that the Site, the Applications, the Services and the Collective Content, including all associated intellectual property rights, are the exclusive property of TutorExel LLP and/or its licensors."
    },
    {
      "type": "p",
      "text": "You must not remove, alter, obscure or misuse any copyright, trademark, service mark or other proprietary notices that appear on or with the Site, the Applications, the Services or the Collective Content."
    },
    {
      "type": "p",
      "text": "All trademarks, service marks, logos, trade names and proprietary designations of TutorExel used in connection with the Site, the Applications, the Services or TutorExel Content are trademarks or registered trademarks of TutorExel. Any third-party trademarks on the Platform are used only for identification and remain the property of their respective owners."
    },
    {
      "type": "p",
      "text": "As a Member, you acknowledge and agree that you are bound by any additional guidelines, policies or rules that apply to your use of the Services, including TutorExel's branding and usage guidelines, as updated from time to time."
    },
    {
      "type": "h2",
      "text": "Additional Terms"
    },
    {
      "type": "p",
      "text": "TutorExel offers multiple products and Services, including but not limited to live academic tutoring, co-curricular programs and exam preparation offerings. Some products, features or Services may be subject to additional terms, conditions or requirements."
    },
    {
      "type": "p",
      "text": "Where such additional terms apply, they form part of these Terms and govern your use of the relevant product or Service. If there is a conflict, the additional terms for the specific Service prevail to the extent of the conflict."
    },
    {
      "type": "h2",
      "text": "Application License"
    },
    {
      "type": "p",
      "text": "Subject to your compliance with these Terms, TutorExel grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Site or Applications on devices you own or control, solely for your personal, non-commercial use in connection with the Services."
    },
    {
      "type": "p",
      "text": "This license does not allow you to copy, modify, distribute, sell, lease, sublicense or otherwise exploit the Site or Applications, except as expressly permitted by these Terms."
    },
    {
      "type": "h2",
      "text": "TutorExel Content and Member Content License"
    },
    {
      "type": "p",
      "text": "Subject to your compliance with these Terms, TutorExel grants you a limited, non-exclusive, non-transferable license to access and view TutorExel Content solely for personal, non-commercial educational purposes."
    },
    {
      "type": "p",
      "text": "You may access and view Member Content only to the extent the Platform and these Terms allow. You must not sublicense, redistribute or commercially exploit any such Content."
    },
    {
      "type": "p",
      "text": "Except as expressly permitted, you must not copy, adapt, modify, prepare derivative works of, distribute, publicly display, publicly perform, transmit, broadcast or otherwise exploit the Site, the Applications, the Services or the Collective Content. No rights or licenses are granted by implication or otherwise."
    },
    {
      "type": "h2",
      "text": "Member Content"
    },
    {
      "type": "p",
      "text": "TutorExel may, in its sole discretion, allow Members to post, upload, submit or transmit content, feedback, comments or testimonials (\"**Member Content**\")."
    },
    {
      "type": "p",
      "text": "By making any Member Content available through the Site, the Applications, the Services or TutorExel's promotional channels, you grant TutorExel a worldwide, perpetual, non-exclusive, royalty-free license, with the right to sublicense, to use, copy, adapt, modify, distribute, display, perform, publish, transmit and otherwise use that Member Content for the purpose of operating, promoting and marketing the Services. Where the law gives you a right to withdraw a consent or a moral right in your content, nothing here removes it. For testimonials that name a Student, we will ask the Parent or Guardian first."
    },
    {
      "type": "p",
      "text": "TutorExel does not claim ownership of Member Content. However, you acknowledge that TutorExel's use of such content may continue even after your account or these Terms end, except where you have withdrawn consent or the law requires removal."
    },
    {
      "type": "p",
      "text": "You state and confirm that:"
    },
    {
      "type": "ul",
      "items": [
        "(i) you own or have all necessary rights, consents and permissions to grant the above license; and",
        "(ii) the Member Content and its use by TutorExel will not infringe any third-party rights or break any applicable law."
      ]
    },
    {
      "type": "p",
      "text": "You are solely responsible for all Member Content you provide."
    },
    {
      "type": "h2",
      "text": "Hyperlinks"
    },
    {
      "type": "p",
      "text": "The Site and Applications may contain links to third-party websites or resources. You acknowledge and agree that TutorExel is not responsible or liable for the availability, accuracy, content, products or services of those third-party websites or resources."
    },
    {
      "type": "p",
      "text": "The inclusion of any link does not imply endorsement by TutorExel. You access such third-party resources entirely at your own risk."
    },
    {
      "type": "h2",
      "text": "Feedback"
    },
    {
      "type": "p",
      "text": "TutorExel welcomes feedback, comments and suggestions about the Services (\"**Feedback**\"). By giving Feedback, you agree that it becomes the sole and exclusive property of TutorExel."
    },
    {
      "type": "p",
      "text": "You assign to TutorExel all rights, title and interest in and to that Feedback, including all intellectual property rights, and, where the law allows, waive any moral rights in it. TutorExel may use Feedback without restriction or obligation to you."
    },
    {
      "type": "h2",
      "text": "Copyright Policy"
    },
    {
      "type": "p",
      "text": "TutorExel respects intellectual property rights and expects users to do the same. TutorExel reserves the right to suspend or end the accounts of users who repeatedly infringe, or are reasonably believed to be infringing, the copyright or other intellectual property rights of others."
    },
    {
      "type": "p",
      "text": "If you believe any Content infringes your intellectual property rights, you may notify TutorExel with enough detail to identify the material. TutorExel may remove or disable access to that Content without prior notice."
    },
    {
      "type": "h2",
      "text": "Term and Termination"
    },
    {
      "type": "h3",
      "text": "Term"
    },
    {
      "type": "p",
      "text": "These Terms remain in effect for as long as you access or use the Site, the Applications or the Services, unless ended by you or TutorExel in line with these Terms."
    },
    {
      "type": "h3",
      "text": "Termination for Convenience"
    },
    {
      "type": "p",
      "text": "You may end your account at any time by written notice to TutorExel. On termination, any active enrolments will be cancelled, and any refunds will be governed by the applicable refund policy and the law."
    },
    {
      "type": "p",
      "text": "TutorExel may end these Terms for convenience by giving notice through registered communication channels."
    },
    {
      "type": "h3",
      "text": "Termination for Breach, Suspension, and Other Measures"
    },
    {
      "type": "p",
      "text": "TutorExel may immediately end or suspend access to the Site, the Applications or the Services without notice if:"
    },
    {
      "type": "ul",
      "items": [
        "(i) you breach these Terms or related policies;",
        "(ii) you give inaccurate, fraudulent or incomplete information;",
        "(iii) you break applicable laws or third-party rights; or",
        "(iv) TutorExel reasonably believes this is necessary to protect its interests, users or the public."
      ]
    },
    {
      "type": "p",
      "text": "TutorExel may also restrict access, cancel enrolments or suspend accounts temporarily or permanently where it considers this necessary."
    },
    {
      "type": "p",
      "text": "Where appropriate and practical, TutorExel may give an opportunity to fix non-material breaches."
    },
    {
      "type": "h3",
      "text": "Consequences of Termination"
    },
    {
      "type": "p",
      "text": "On termination:"
    },
    {
      "type": "ul",
      "items": [
        "TutorExel may cancel enrolments and notify affected Students or Parents;",
        "refunds, if any, will be governed solely by the refund policy and the law;",
        "you will not be entitled to compensation for cancelled enrolments, except as the law requires;",
        "TutorExel is not obliged to delete or return Member Content, subject to the Privacy Policy;",
        "you may not re-register or access the Services through other accounts."
      ]
    },
    {
      "type": "h3",
      "text": "Survival"
    },
    {
      "type": "p",
      "text": "If you or TutorExel end this Agreement, the clauses of these Terms that by their nature are meant to continue after termination, including those about intellectual property, disclaimers, limitation of liability, indemnification, governing law and dispute resolution, remain in full force and effect."
    },
    {
      "type": "h2",
      "text": "Disclaimers"
    },
    {
      "type": "p",
      "text": "If you choose to access or use the Site, the Applications, the Services or the Collective Content, you do so entirely at your own risk, to the extent the law allows. You acknowledge that TutorExel has no obligation to run background, credential or character checks on any Member, instructor or user of the Platform, though TutorExel may, at its sole discretion and to the extent permitted by law, run such checks."
    },
    {
      "type": "p",
      "text": "If TutorExel chooses to run any background or verification checks, TutorExel expressly disclaims any warranties, express or implied, that such checks will identify past or future misconduct, or guarantee that any user will not engage in misconduct in the future."
    },
    {
      "type": "p",
      "text": "To the extent the law allows, the Site, the Applications, the Services and the Collective Content are provided on an \"as is\" and \"as available\" basis, without warranty of any kind, express or implied. Without limiting the foregoing, TutorExel disclaims all warranties of merchantability, fitness for a particular purpose, quiet enjoyment and non-infringement, and any warranties arising out of course of dealing or usage of trade."
    },
    {
      "type": "p",
      "text": "TutorExel does not warrant that the Site, the Applications, the Services or Collective Content, including any Courses, classes, instructors, Students, learning outcomes or educational materials, will meet your requirements or be uninterrupted, timely, secure or error-free. TutorExel does not promise any particular exam result, mark, grade or school or scholarship outcome. TutorExel makes no representations or warranties about the quality, accuracy, completeness, reliability or suitability of any Services or Content provided, other than those required by law."
    },
    {
      "type": "p",
      "text": "No advice or information, oral or written, obtained from TutorExel or through the Site, the Applications, the Services or Collective Content creates any warranty not expressly stated in these Terms."
    },
    {
      "type": "p",
      "text": "You are solely responsible for communications and interactions with other users of the Platform, including instructors, Students, Parents and Guardians. TutorExel does not verify statements made by users or independently review the conduct of any Course or interaction. TutorExel disclaims liability for any act or omission of any Student, instructor, Parent, Guardian or other third party, to the extent the law allows."
    },
    {
      "type": "p",
      "text": "**Nothing in these Terms excludes, restricts or modifies any right or remedy, or any guarantee, warranty or condition, that cannot lawfully be excluded, restricted or modified under consumer protection law in your country.** Where such a right applies and TutorExel is allowed to limit its liability, TutorExel's liability is limited, at its option, to supplying the Services again or paying the cost of having them supplied again."
    },
    {
      "type": "h2",
      "text": "Limitation of Liability"
    },
    {
      "type": "p",
      "text": "To the maximum extent permitted by applicable law, you acknowledge and agree that the entire risk arising out of your access to and use of the Site, the Applications, the Services and the Collective Content, your enrolment in any Course and any interactions with other users, whether online or offline, remains solely with you."
    },
    {
      "type": "p",
      "text": "To the maximum extent permitted by law, neither TutorExel LLP nor any person or entity involved in creating, producing or delivering the Site, the Applications, the Services or the Collective Content will be liable for any indirect, incidental, special, exemplary or consequential damages, including loss of profits, loss of data, loss of goodwill, service interruption, computer damage, system failure or the cost of substitute products or services, or for personal injury, emotional distress or other damages arising out of or connected with these Terms."
    },
    {
      "type": "p",
      "text": "This limit applies regardless of the legal theory under which liability is asserted, whether in contract, tort (including negligence), strict liability or otherwise, and even if TutorExel has been told of the possibility of such damages, or if a limited remedy is found to have failed of its essential purpose."
    },
    {
      "type": "p",
      "text": "To the maximum extent permitted by law, TutorExel's total liability arising out of or connected with these Terms, the Services or any Course enrolment will not exceed the total amount of Course Fees paid or payable by you to TutorExel in the three (3) months immediately before the event giving rise to the claim."
    },
    {
      "type": "p",
      "text": "You acknowledge that these limitations of liability are fundamental elements of the basis of the bargain between you and TutorExel. They do not apply to liability that cannot be limited by law, including liability for fraud, for death or personal injury caused by negligence, or for breach of consumer guarantees."
    },
    {
      "type": "h2",
      "text": "Indemnification"
    },
    {
      "type": "p",
      "text": "To the extent permitted by law, you agree to release, defend, indemnify and hold harmless TutorExel LLP, its affiliates, partners, officers, employees, instructors, consultants and agents from and against any and all claims, liabilities, damages, losses, costs and expenses, including reasonable legal and accounting fees, arising out of or in any way connected with:"
    },
    {
      "type": "ul",
      "items": [
        "your access to or use of the Site, the Applications, the Services or the Collective Content;",
        "your violation of these Terms or any applicable law;",
        "your Member Content;",
        "your interaction with any other Member, Student, instructor, Parent or Guardian; or",
        "your enrolment in, participation in or attendance of any Course."
      ]
    },
    {
      "type": "h2",
      "text": "Entire Agreement"
    },
    {
      "type": "p",
      "text": "Except as supplemented by additional TutorExel policies, guidelines, standards or terms applicable to specific products or Services, these Terms make up the entire and exclusive agreement between you and TutorExel about the Site, the Applications, the Services and the Collective Content, and replace all prior or contemporaneous oral or written agreements or understandings about it."
    },
    {
      "type": "h2",
      "text": "Notices"
    },
    {
      "type": "p",
      "text": "Any notices or communications permitted or required under these Terms must be in writing and may be given by TutorExel by:"
    },
    {
      "type": "ul",
      "items": [
        "email to the registered email address you gave; or",
        "posting a notice on the Site or through the Applications."
      ]
    },
    {
      "type": "p",
      "text": "Notices sent by email are deemed received on the date of transmission."
    },
    {
      "type": "h2",
      "text": "Governing Law and Jurisdiction"
    },
    {
      "type": "p",
      "text": "These Terms and your use of the Services are governed by the laws that apply where you live: for Australia, the laws of the Australian state or territory where you live; for the United States, the laws of the U.S. state where you live; for Canada, the laws of the Canadian province or territory where you live; and for New Zealand, the laws of New Zealand. Nothing in this clause removes any right you have under the mandatory consumer protection laws of your country."
    },
    {
      "type": "p",
      "text": "If you have a concern or dispute, please contact us first using the details below, so we can try to resolve it fairly and promptly."
    },
    {
      "type": "p",
      "text": "If we cannot resolve it, either of us may bring a claim in the courts of the state, province or country where you live, and those courts will have jurisdiction. Where the law allows and you and TutorExel both agree, a dispute may instead be resolved by mediation or arbitration in your country of residence, in English, under that country's rules."
    },
    {
      "type": "p",
      "text": "Each party bears its own legal costs, unless a court or the agreed mediator or arbitrator decides otherwise or the law says otherwise."
    },
    {
      "type": "h2",
      "text": "No Waiver"
    },
    {
      "type": "p",
      "text": "TutorExel's failure to enforce any right or provision of these Terms is not a waiver of that right or provision. A waiver is effective only if made in writing and signed by an authorised representative of TutorExel. Using any remedy does not stop the use of any other remedy available under the law or these Terms."
    },
    {
      "type": "p",
      "text": "If any provision of these Terms is held to be invalid or unenforceable by a competent court, that provision will be enforced to the maximum extent permissible, and the remaining provisions remain in full force and effect."
    },
    {
      "type": "h2",
      "text": "Miscellaneous"
    },
    {
      "type": "p",
      "text": "**Assignment.** You may not transfer or assign your rights or obligations under these Terms without TutorExel's written consent. TutorExel may assign these Terms in connection with a merger, acquisition, sale of assets or restructuring, with notice to you where the law requires."
    },
    {
      "type": "p",
      "text": "**Force Majeure.** TutorExel is not liable for any delay or failure to perform caused by events beyond its reasonable control, including natural disasters, bushfires, floods, severe weather, power or internet outages, pandemics, strikes, government action or failures of third-party platforms. Where a paid lesson cannot be delivered for such a reason, TutorExel will offer a make-up lesson or a fair refund for the lesson not delivered."
    },
    {
      "type": "p",
      "text": "**Changes to these Terms.** We may update these Terms from time to time. We will post the updated Terms on this page with a new effective date, and tell registered Members of material changes before they take effect. Continued use after the effective date means you accept the updated Terms, where the law allows."
    },
    {
      "type": "p",
      "text": "**Language.** These Terms are written in English, and the English version prevails over any translation."
    }
  ],
  "contactBlock": {
    "title": "Contact Us",
    "intro": "For questions about these Terms, please contact:",
    "company": "TutorExel LLP",
    "email": "info@tutorexel.com",
    "hasAddress": true,
    "responseTime": "We aim to reply within a reasonable time and within 30 days unless the law sets a shorter period."
  }
};
