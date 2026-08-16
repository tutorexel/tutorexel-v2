import type { SubmissionType } from "@/lib/submissions-store";

const NOTIFY_TO = "vijayinder@superintech.com";
const FROM = "TutorExel Notifications <noreply@tutorexel.com>";

const LABELS: Record<SubmissionType, string> = {
  "free-trial": "Free Trial Booking",
  contact: "Contact Enquiry",
  enroll: "Enrolment",
  "free-assessment": "Free Assessment",
  careers: "Career Application",
  "co-curricular": "Co-Curricular Enquiry",
  calendly: "Calendly Booking",
};

function buildHtml(type: SubmissionType, data: Record<string, string | number | boolean | null | undefined>): string {
  const rows = Object.entries(data)
    .filter(([, v]) => v !== null && v !== undefined && v !== "")
    .map(([k, v]) => `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;color:#374151;font-size:13px;">${k}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;color:#111827;font-size:13px;">${String(v)}</td></tr>`)
    .join("");
  return `<div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;"><div style="background:#1a2e3b;padding:24px 32px;border-radius:12px 12px 0 0;"><h1 style="color:#fff;font-size:20px;margin:0;">TutorExel</h1><p style="color:rgba(255,255,255,.65);font-size:13px;margin:4px 0 0;">New Form Submission</p></div><div style="background:#fff;padding:28px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;"><p style="font-size:14px;color:#6b7280;margin:0 0 16px;">A new <strong style="color:#111827;">${LABELS[type]}</strong> was submitted.</p><table style="width:100%;border-collapse:collapse;">${rows}</table><p style="font-size:12px;color:#9ca3af;margin:20px 0 0;">View all at <a href="https://tutorexel.com/admin/submissions" style="color:#FF6B35;">tutorexel.com/admin/submissions</a></p></div></div>`;
}

export async function sendNotificationEmail(type: SubmissionType, data: Record<string, string | number | boolean | null | undefined>): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [NOTIFY_TO], subject: `[TutorExel] New ${LABELS[type]} - ${data.parentName || data.fullName || ""}`, html: buildHtml(type, data) }),
    });
  } catch { /* non-blocking */ }
}
