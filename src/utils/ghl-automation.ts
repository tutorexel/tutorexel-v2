/**
 * GHL Automation - Server-side only
 * Handles pipeline creation, field updates, and email sending via Resend
 * Called from API routes after form submission
 */

import { Resend } from 'resend';

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE = 'https://services.leadconnectorhq.com';

const PIPELINE_ID = 'qg4Yygdgr2v6lsJcRGJR';
const STAGES = {
  NEW_LEAD: '1f56d23a-5a3f-4694-bb12-1b9923cd0a1e',
  TRIAL_BOOKED: '87dd746e-e1a6-472f-9724-37b89afa5758',
  TRIAL_DONE: '600fb818-d08e-4cd6-ad96-91603d66a637',
  FOLLOW_UP: 'a92bc44f-38cc-4aa7-a036-48951060dda3',
  ENROLLED: '2e179036-7143-4a0f-9ea4-7c4326704267',
  LOST: '0b7f1c74-13fc-4f1a-8181-eff5f18b2058',
};

const FIELD_IDS = {
  LEAD_SOURCE: 'kH9bn8idjSJmP2TrKeho',
  LEAD_STATUS: 'wRG1wP118rrS0bqH8V3k',
  CHILD_NAME: 'S2oQz7L9l4PSQg0CjuXm',
  STUDENT_YEAR: '02ETwlqaDUrl01MfQv6g',
  INTEREST: 'ZufxsSfq3CyueX7rC2aj',
  PLAN_TYPE: 'cck5TZmncnVxJMNW01FF',
};

function ghlHeaders() {
  return {
    Authorization: `Bearer ${GHL_API_KEY}`,
    Version: '2021-07-28',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
}

export async function findContact(email: string): Promise<string | null> {
  try {
    const res = await fetch(
      `${GHL_BASE}/contacts/?query=${encodeURIComponent(email)}&locationId=${GHL_LOCATION_ID}`,
      { headers: ghlHeaders() }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const match = data.contacts?.find(
      (c: { email?: string }) => c.email?.toLowerCase() === email.toLowerCase()
    );
    return match?.id || null;
  } catch {
    return null;
  }
}

export async function updateContactFields(
  contactId: string,
  fields: Array<{ id: string; field_value: string }>
): Promise<boolean> {
  try {
    const res = await fetch(`${GHL_BASE}/contacts/${contactId}`, {
      method: 'PUT',
      headers: ghlHeaders(),
      body: JSON.stringify({ customFields: fields }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function createOpportunity(
  contactId: string,
  name: string,
  stageId: string,
  source: string
): Promise<string | null> {
  try {
    const res = await fetch(`${GHL_BASE}/opportunities/`, {
      method: 'POST',
      headers: ghlHeaders(),
      body: JSON.stringify({
        pipelineId: PIPELINE_ID,
        locationId: GHL_LOCATION_ID,
        name,
        pipelineStageId: stageId,
        contactId,
        status: 'open',
        source,
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.opportunity?.id || null;
  } catch {
    return null;
  }
}

/**
 * Send email via Resend API.
 * Replaces the old GHL-based email sending.
 */
export async function sendEmail(
  toEmail: string,
  subject: string,
  htmlBody: string
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || 'TutorExel <noreply@tutorexel.com>';

  if (!apiKey) {
    console.error('[Resend] API key not configured');
    return false;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: toEmail,
      subject,
      html: htmlBody,
    });

    if (error) {
      console.error('[Resend] Send error:', error);
      return false;
    }

    return true;
  } catch (err) {
    console.error('[Resend] Error:', err);
    return false;
  }
}

// ─── Email Templates ───

function trialConfirmationEmail(parentName: string, childYear: string, subject: string): string {
  const firstName = parentName.split(' ')[0];
  return `<div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a2e3b"><div style="background:linear-gradient(135deg,#1a2e3b,#2a4a5e);padding:32px;border-radius:12px 12px 0 0;text-align:center"><h1 style="color:#fff;font-size:24px;margin:0">TutorExel</h1><p style="color:rgba(255,255,255,.7);font-size:14px;margin:8px 0 0">Excel in Learning, From Home</p></div><div style="background:#fff;padding:32px;border:1px solid #e4e0d8;border-top:none"><h2 style="color:#1a2e3b;font-size:20px;margin:0 0 16px">Thank You, ${firstName}!</h2><p style="font-size:15px;line-height:1.6;color:#5a6b78">We have received your free trial request for <strong>${subject}</strong> (${childYear}). Our team is already working on matching your child with the perfect tutor.</p><div style="background:#f7f5f0;border-radius:8px;padding:20px;margin:20px 0"><p style="font-size:14px;font-weight:600;color:#1a2e3b;margin:0 0 12px">What happens next:</p><ol style="font-size:14px;color:#5a6b78;line-height:1.8;padding-left:20px;margin:0"><li>We will contact you within <strong>2 hours</strong> to confirm a suitable time</li><li>Your child will attend a <strong>60-minute live session</strong> with their tutor</li><li>You will receive a <strong>detailed assessment report</strong> after the session</li><li>Absolutely <strong>no obligation</strong> to continue</li></ol></div><p style="font-size:15px;line-height:1.6;color:#5a6b78">If you have any questions, reply to this email or WhatsApp us at <strong>+61 470-330-548</strong>.</p><p style="font-size:15px;color:#5a6b78;margin-top:24px">Warm regards,<br><strong>The TutorExel Team</strong></p></div><div style="text-align:center;padding:16px;font-size:12px;color:#8a9aa8"><p>TutorExel | Australian Online Tutoring Excellence</p><p><a href="https://tutorexel.com" style="color:#d4654a;text-decoration:none">tutorexel.com</a></p></div></div>`;
}

function contactConfirmationEmail(parentName: string): string {
  const firstName = parentName.split(' ')[0];
  return `<div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a2e3b"><div style="background:linear-gradient(135deg,#1a2e3b,#2a4a5e);padding:32px;border-radius:12px 12px 0 0;text-align:center"><h1 style="color:#fff;font-size:24px;margin:0">TutorExel</h1><p style="color:rgba(255,255,255,.7);font-size:14px;margin:8px 0 0">Excel in Learning, From Home</p></div><div style="background:#fff;padding:32px;border:1px solid #e4e0d8;border-top:none"><h2 style="color:#1a2e3b;font-size:20px;margin:0 0 16px">Thanks for Reaching Out, ${firstName}!</h2><p style="font-size:15px;line-height:1.6;color:#5a6b78">We have received your inquiry and will get back to you within <strong>2 hours</strong> during business hours (Monday-Saturday, 9am-8pm AEST).</p><p style="font-size:15px;line-height:1.6;color:#5a6b78">In the meantime, you might find these helpful:</p><div style="margin:20px 0"><a href="https://tutorexel.com/free-trial" style="display:inline-block;background:#d4654a;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-right:8px">Book a Free Trial</a> <a href="https://tutorexel.com/pricing" style="display:inline-block;background:#f7f5f0;color:#1a2e3b;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;border:1px solid #e4e0d8">View Pricing</a></div><p style="font-size:15px;color:#5a6b78;margin-top:24px">Warm regards,<br><strong>The TutorExel Team</strong></p></div><div style="text-align:center;padding:16px;font-size:12px;color:#8a9aa8"><p>TutorExel | Australian Online Tutoring Excellence</p><p><a href="https://tutorexel.com" style="color:#d4654a;text-decoration:none">tutorexel.com</a></p></div></div>`;
}

function enrollmentWelcomeEmail(parentName: string, offering: string, amount: string): string {
  const firstName = parentName.split(' ')[0];
  return `<div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a2e3b"><div style="background:linear-gradient(135deg,#1a2e3b,#2a4a5e);padding:32px;border-radius:12px 12px 0 0;text-align:center"><h1 style="color:#fff;font-size:24px;margin:0">TutorExel</h1><p style="color:rgba(255,255,255,.7);font-size:14px;margin:8px 0 0">Excel in Learning, From Home</p></div><div style="background:#fff;padding:32px;border:1px solid #e4e0d8;border-top:none"><h2 style="color:#1a2e3b;font-size:20px;margin:0 0 16px">Welcome to TutorExel, ${firstName}!</h2><p style="font-size:15px;line-height:1.6;color:#5a6b78">Thank you for enrolling in our <strong>${offering}</strong> programme ($${amount}/month). We are excited to have your family join TutorExel!</p><div style="background:#f7f5f0;border-radius:8px;padding:20px;margin:20px 0"><p style="font-size:14px;font-weight:600;color:#1a2e3b;margin:0 0 12px">Next steps:</p><ol style="font-size:14px;color:#5a6b78;line-height:1.8;padding-left:20px;margin:0"><li>Our team will contact you within <strong>24 hours</strong> to complete payment setup</li><li>We will match your child with their dedicated tutor</li><li>You will receive a <strong>personalised learning plan</strong></li><li>First session will be scheduled at your preferred time</li></ol></div><p style="font-size:15px;line-height:1.6;color:#5a6b78">Questions? Reply to this email or WhatsApp us at <strong>+61 470-330-548</strong>.</p><p style="font-size:15px;color:#5a6b78;margin-top:24px">Warm regards,<br><strong>The TutorExel Team</strong></p></div><div style="text-align:center;padding:16px;font-size:12px;color:#8a9aa8"><p>TutorExel | Australian Online Tutoring Excellence</p><p><a href="https://tutorexel.com" style="color:#d4654a;text-decoration:none">tutorexel.com</a></p></div></div>`;
}

// ─── Main Automation Functions (run async, don't block the response) ───

export async function processTrialLead(data: {
  parentName: string; email: string; yearLevel: string; subject: string;
}): Promise<void> {
  if (!GHL_API_KEY) return;
  await new Promise((r) => setTimeout(r, 3000));
  const contactId = await findContact(data.email);
  if (!contactId) return;
  await updateContactFields(contactId, [
    { id: FIELD_IDS.LEAD_SOURCE, field_value: 'free-trial' },
    { id: FIELD_IDS.LEAD_STATUS, field_value: 'new' },
  ]);
  await createOpportunity(contactId, `Free Trial - ${data.parentName}`, STAGES.NEW_LEAD, 'free-trial');

  // Send confirmation email via Resend
  await sendEmail(
    data.email,
    'Your Free Trial Request — TutorExel',
    trialConfirmationEmail(data.parentName, data.yearLevel, data.subject)
  );
}

export async function processContactLead(data: {
  parentName: string; email: string;
}): Promise<void> {
  if (!GHL_API_KEY) return;
  await new Promise((r) => setTimeout(r, 3000));
  const contactId = await findContact(data.email);
  if (!contactId) return;
  await updateContactFields(contactId, [
    { id: FIELD_IDS.LEAD_SOURCE, field_value: 'contact-form' },
    { id: FIELD_IDS.LEAD_STATUS, field_value: 'new' },
  ]);
  await createOpportunity(contactId, `Inquiry - ${data.parentName}`, STAGES.NEW_LEAD, 'contact-form');

  // Send confirmation email via Resend
  await sendEmail(
    data.email,
    'We Received Your Inquiry — TutorExel',
    contactConfirmationEmail(data.parentName)
  );
}

export async function processEnrollment(data: {
  parentName: string; email: string; offering: string; amount: string;
}): Promise<void> {
  if (!GHL_API_KEY) return;
  await new Promise((r) => setTimeout(r, 3000));
  const contactId = await findContact(data.email);
  if (!contactId) return;
  await updateContactFields(contactId, [
    { id: FIELD_IDS.LEAD_SOURCE, field_value: 'enrollment' },
    { id: FIELD_IDS.LEAD_STATUS, field_value: 'enrolled' },
  ]);
  await createOpportunity(contactId, `Enrollment - ${data.parentName}`, STAGES.ENROLLED, 'enrollment');

  // Send welcome email via Resend
  await sendEmail(
    data.email,
    'Welcome to TutorExel!',
    enrollmentWelcomeEmail(data.parentName, data.offering, data.amount)
  );
}
