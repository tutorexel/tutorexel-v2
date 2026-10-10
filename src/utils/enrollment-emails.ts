import { createTransporter, getSmtpConfig, sendLeadEmail } from "@/utils/mailer";
import { getRegionConfig, REGIONAL_REFUND_WHATSAPP, type RegionCode } from "@/data/regions";

export interface EnrollmentEmailParams {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  yearGroup: string;
  offering: string;
  classType?: string;
  subjects?: string;
  activities?: string;
  planDetails?: string;
  amount: number;
  currency: string;
  region: RegionCode;
  paymentUrl?: string | null;
  referenceId?: string;
  couponCode?: string | null;
  discountAmount?: number;
}

function getSpellingEnrolment(region: RegionCode): string {
  return region === "us" ? "Enrollment" : "Enrolment";
}

function getSpellingPersonalised(region: RegionCode): string {
  return region === "us" || region === "ca" ? "personalized" : "personalised";
}

function getSubjectDisplay(subjects: string | undefined, region: RegionCode): string {
  if (!subjects) return "";
  const isUsCa = region === "us" || region === "ca";
  if (isUsCa) {
    return subjects.replace(/\bMaths\b/g, "Math");
  }
  return subjects.replace(/\bMath\b/g, "Maths");
}

function getYearGroupDisplay(yearGroup: string, region: RegionCode): string {
  const regConfig = getRegionConfig(region);
  const numMatch = yearGroup.match(/\d+/);
  if (numMatch) {
    return `${regConfig.yearLabel} ${numMatch[0]}`;
  }
  return yearGroup;
}

export function buildWelcomeEmailHtml(params: EnrollmentEmailParams): string {
  const regConfig = getRegionConfig(params.region);
  const whatsapp = REGIONAL_REFUND_WHATSAPP[params.region];
  const enrolmentWord = getSpellingEnrolment(params.region);
  const personalisedWord = getSpellingPersonalised(params.region);
  const formattedYear = getYearGroupDisplay(params.yearGroup, params.region);
  const formattedSubjects = getSubjectDisplay(params.subjects, params.region);
  const period = params.offering.toLowerCase().includes("co-curricular") && params.activities && !params.activities.includes(",")
    ? "/session"
    : "/month";
  const feeDisplay = `${params.currency} $${params.amount}${period}`;

  const contactRows: string[] = [];
  if (regConfig.phoneText) {
    contactRows.push(`<tr><td style="padding:6px 0;color:#5a6b78;font-size:14px;"><strong>Phone:</strong> <a href="${regConfig.phoneHref}" style="color:#d4654a;text-decoration:none;">${regConfig.phoneText}</a></td></tr>`);
  }
  if (whatsapp?.number) {
    contactRows.push(`<tr><td style="padding:6px 0;color:#5a6b78;font-size:14px;"><strong>WhatsApp:</strong> <a href="${whatsapp.href}" style="color:#25D366;text-decoration:none;">${whatsapp.number}</a></td></tr>`);
  }
  contactRows.push(`<tr><td style="padding:6px 0;color:#5a6b78;font-size:14px;"><strong>Email:</strong> <a href="mailto:info@tutorexel.com" style="color:#d4654a;text-decoration:none;">info@tutorexel.com</a></td></tr>`);

  const choiceRows: string[] = [
    `<tr><td style="padding:8px 12px;background:#f7f5f0;font-weight:600;color:#1a2e3b;width:35%;border:1px solid #efe9df;">Student</td><td style="padding:8px 12px;border:1px solid #efe9df;color:#1a2e3b;">${params.studentName}</td></tr>`,
    `<tr><td style="padding:8px 12px;background:#f7f5f0;font-weight:600;color:#1a2e3b;border:1px solid #efe9df;">${regConfig.yearLabel} Level</td><td style="padding:8px 12px;border:1px solid #efe9df;color:#1a2e3b;">${formattedYear}</td></tr>`,
    `<tr><td style="padding:8px 12px;background:#f7f5f0;font-weight:600;color:#1a2e3b;border:1px solid #efe9df;">Programme</td><td style="padding:8px 12px;border:1px solid #efe9df;color:#1a2e3b;">${params.offering}</td></tr>`,
  ];

  if (params.classType) {
    choiceRows.push(`<tr><td style="padding:8px 12px;background:#f7f5f0;font-weight:600;color:#1a2e3b;border:1px solid #efe9df;">Class Type</td><td style="padding:8px 12px;border:1px solid #efe9df;color:#1a2e3b;">${params.classType}</td></tr>`);
  }
  if (formattedSubjects) {
    choiceRows.push(`<tr><td style="padding:8px 12px;background:#f7f5f0;font-weight:600;color:#1a2e3b;border:1px solid #efe9df;">Subject(s)</td><td style="padding:8px 12px;border:1px solid #efe9df;color:#1a2e3b;">${formattedSubjects}</td></tr>`);
  }
  if (params.activities) {
    choiceRows.push(`<tr><td style="padding:8px 12px;background:#f7f5f0;font-weight:600;color:#1a2e3b;border:1px solid #efe9df;">Activity</td><td style="padding:8px 12px;border:1px solid #efe9df;color:#1a2e3b;">${params.activities}</td></tr>`);
  }
  choiceRows.push(`<tr><td style="padding:8px 12px;background:#f7f5f0;font-weight:600;color:#1a2e3b;border:1px solid #efe9df;">Fee</td><td style="padding:8px 12px;border:1px solid #efe9df;color:#1a2e3b;font-weight:700;">${feeDisplay}</td></tr>`);

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${enrolmentWord} Received</title>
</head>
<body style="margin:0;padding:24px 12px;background-color:#f7f5f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #efe9df;">
    <div style="background:#1a2e3b;padding:28px 32px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px;">TutorExel</h1>
      <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:14px;">${enrolmentWord} Confirmation</p>
    </div>
    <div style="padding:32px;">
      <h2 style="color:#1a2e3b;font-size:20px;margin:0 0 16px;font-weight:600;">Thank you, ${params.parentName}!</h2>
      <p style="color:#5a6b78;font-size:15px;line-height:1.6;margin:0 0 20px;">
        We have received your ${enrolmentWord.toLowerCase()} for <strong>${params.studentName}</strong>. Our team will get back to you within 24 hours to confirm your ${enrolmentWord.toLowerCase()} and arrange next steps.
      </p>

      <div style="margin:24px 0;">
        <h3 style="color:#1a2e3b;font-size:16px;margin:0 0 12px;font-weight:600;">Your Selection Summary</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${choiceRows.join("")}
        </table>
      </div>

      <div style="background:#fcfbf9;border-left:4px solid #d4654a;padding:16px 20px;margin:24px 0;border-radius:4px;">
        <h4 style="color:#1a2e3b;font-size:15px;margin:0 0 8px;font-weight:600;">What happens next?</h4>
        <ol style="margin:0;padding-left:20px;color:#5a6b78;font-size:14px;line-height:1.6;">
          <li style="margin-bottom:6px;">Our academic coordinator will contact you within 24 hours to confirm your timetable.</li>
          <li style="margin-bottom:6px;">We match ${params.studentName} with their dedicated tutor.</li>
          <li>You will receive a ${personalisedWord} learning plan and session details.</li>
        </ol>
      </div>

      <div style="margin:28px 0 0;padding-top:20px;border-top:1px solid #efe9df;">
        <p style="color:#1a2e3b;font-size:14px;margin:0 0 10px;font-weight:600;">Need assistance sooner? Reach our team:</p>
        <table style="width:100%;border-collapse:collapse;">
          ${contactRows.join("")}
        </table>
      </div>

      <p style="color:#5a6b78;font-size:15px;line-height:1.6;margin:28px 0 0;">
        Warm regards,<br>
        <strong style="color:#1a2e3b;">The TutorExel Team</strong>
      </p>
    </div>
    <div style="background:#f7f5f0;padding:16px 32px;text-align:center;border-top:1px solid #efe9df;">
      <p style="color:#8a9aa8;font-size:12px;margin:0;">
        TutorExel &bull; <a href="https://tutorexel.com" style="color:#8a9aa8;text-decoration:none;">tutorexel.com</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

export function buildWelcomeEmailText(params: EnrollmentEmailParams): string {
  const regConfig = getRegionConfig(params.region);
  const whatsapp = REGIONAL_REFUND_WHATSAPP[params.region];
  const enrolmentWord = getSpellingEnrolment(params.region);
  const personalisedWord = getSpellingPersonalised(params.region);
  const formattedYear = getYearGroupDisplay(params.yearGroup, params.region);
  const formattedSubjects = getSubjectDisplay(params.subjects, params.region);
  const period = params.offering.toLowerCase().includes("co-curricular") && params.activities && !params.activities.includes(",")
    ? "/session"
    : "/month";
  const feeDisplay = `${params.currency} $${params.amount}${period}`;

  const lines = [
    `TutorExel - ${enrolmentWord} Confirmation`,
    "",
    `Thank you, ${params.parentName}!`,
    "",
    `We have received your ${enrolmentWord.toLowerCase()} for ${params.studentName}.`,
    `Our team will get back to you within 24 hours to confirm your ${enrolmentWord.toLowerCase()} and arrange next steps.`,
    "",
    "Selection Summary:",
    `- Student: ${params.studentName}`,
    `- ${regConfig.yearLabel} Level: ${formattedYear}`,
    `- Programme: ${params.offering}`,
    params.classType ? `- Class Type: ${params.classType}` : null,
    formattedSubjects ? `- Subject(s): ${formattedSubjects}` : null,
    params.activities ? `- Activity: ${params.activities}` : null,
    `- Fee: ${feeDisplay}`,
    "",
    "What happens next:",
    `1. Our academic coordinator will contact you within 24 hours to confirm your timetable.`,
    `2. We match ${params.studentName} with their dedicated tutor.`,
    `3. You will receive a ${personalisedWord} learning plan and session details.`,
    "",
    "Need assistance sooner? Contact us:",
    regConfig.phoneText ? `Phone: ${regConfig.phoneText}` : null,
    whatsapp?.number ? `WhatsApp: ${whatsapp.number} (${whatsapp.href})` : null,
    "Email: info@tutorexel.com",
    "",
    "Warm regards,",
    "The TutorExel Team",
  ].filter(Boolean);

  return lines.join("\n");
}

export function buildTeamNotificationHtml(params: EnrollmentEmailParams): string {
  const rows = [
    `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;width:35%;">Region</td><td style="padding:8px 12px;border:1px solid #e5e7eb;"><strong>${params.region.toUpperCase()}</strong> (${params.currency})</td></tr>`,
    `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Parent Name</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.parentName}</td></tr>`,
    `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Email</td><td style="padding:8px 12px;border:1px solid #e5e7eb;"><a href="mailto:${params.email}">${params.email}</a></td></tr>`,
    `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Phone</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.phone}</td></tr>`,
    `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Student Name</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.studentName}</td></tr>`,
    `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Year / Grade</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.yearGroup}</td></tr>`,
    `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Offering</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.offering}</td></tr>`,
    params.classType ? `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Class Type</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.classType}</td></tr>` : "",
    params.subjects ? `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Subjects</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.subjects}</td></tr>` : "",
    params.activities ? `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Activities</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.activities}</td></tr>` : "",
    params.planDetails ? `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Plan Details</td><td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-line;">${params.planDetails}</td></tr>` : "",
    params.couponCode ? `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Coupon Code</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.couponCode} (${params.discountAmount ? `-$${params.discountAmount}` : ""})</td></tr>` : "",
    `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Charge Amount</td><td style="padding:8px 12px;border:1px solid #e5e7eb;"><strong>${params.currency} $${params.amount}</strong></td></tr>`,
    params.referenceId ? `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;">Reference ID</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${params.referenceId}</td></tr>` : "",
    params.paymentUrl ? `<tr><td style="padding:8px 12px;background:#fff7ed;border:1px solid #fed7aa;font-weight:600;color:#c2410c;">Payment Link (for team)</td><td style="padding:8px 12px;border:1px solid #fed7aa;"><a href="${params.paymentUrl}" style="color:#ea580c;word-break:break-all;font-weight:600;">${params.paymentUrl}</a><br><span style="font-size:12px;color:#7c2d12;">(Share with customer only after confirming enrolment)</span></td></tr>` : "",
  ].filter(Boolean).join("");

  return `<div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:620px;margin:0 auto;">
    <div style="background:#1a2e3b;padding:24px 32px;border-radius:12px 12px 0 0;">
      <h1 style="color:#ffffff;font-size:20px;margin:0;">TutorExel Admin</h1>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin:4px 0 0;">New Enrolment Received [${params.region.toUpperCase()}]</p>
    </div>
    <div style="background:#ffffff;padding:28px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
      <p style="font-size:14px;color:#374151;margin:0 0 16px;">A new enrolment was submitted for <strong>${params.studentName}</strong> (${params.region.toUpperCase()}).</p>
      <table style="width:100%;border-collapse:collapse;font-size:13px;">${rows}</table>
      <p style="font-size:12px;color:#9ca3af;margin:20px 0 0;">View in admin portal at <a href="https://tutorexel.com/admin/submissions" style="color:#FF6B35;">tutorexel.com/admin/submissions</a></p>
    </div>
  </div>`;
}

export async function sendEnrollmentWelcomeEmail(params: EnrollmentEmailParams): Promise<boolean> {
  const config = getSmtpConfig();
  if (!config.user || !config.pass || !config.host) {
    console.error(`[Mailer] Cannot send customer welcome email for enroll (${params.region.toUpperCase()}): SMTP credentials not configured`);
    return false;
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error(`[Mailer] Failed to create SMTP transporter for customer welcome email (${params.region.toUpperCase()})`);
    return false;
  }

  const enrolmentWord = getSpellingEnrolment(params.region);
  const subject = `Your ${enrolmentWord} with TutorExel - ${params.studentName}`;
  const html = buildWelcomeEmailHtml(params);
  const text = buildWelcomeEmailText(params);

  try {
    await transporter.sendMail({
      from: config.user,
      to: params.email,
      subject,
      html,
      text,
    });

    console.log(`[Mailer] Customer welcome email sent to ${params.email} for enroll (${params.region.toUpperCase()})`);
    return true;
  } catch (err) {
    console.error(`[Mailer] Exception sending customer welcome email to ${params.email} (${params.region.toUpperCase()}):`, err);
    return false;
  }
}

export async function sendEnrollmentTeamNotification(params: EnrollmentEmailParams): Promise<boolean> {
  const data: Record<string, unknown> = {
    parentName: params.parentName,
    email: params.email,
    phone: params.phone,
    studentName: params.studentName,
    studentGrade: params.yearGroup,
    offering: params.offering,
  };
  if (params.classType) data.classType = params.classType;
  if (params.subjects) data.subjects = params.subjects;
  if (params.activities) data.activities = params.activities;
  if (params.planDetails) data.planDetails = params.planDetails;
  if (params.couponCode) data.couponCode = `${params.couponCode}${params.discountAmount ? ` (-$${params.discountAmount})` : ""}`;
  data.chargeAmount = `${params.currency} $${params.amount}`;
  if (params.referenceId) data.referenceId = params.referenceId;
  if (params.paymentUrl) data.paymentUrl = params.paymentUrl;

  const pageUrl = `https://tutorexel.com/${params.region === "au" ? "" : params.region}/enroll`;

  return sendLeadEmail({
    form: "enroll",
    region: params.region,
    data,
    pageUrl,
    replyTo: params.email,
  });
}

