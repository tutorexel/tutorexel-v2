import nodemailer from "nodemailer";

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  hostSource: "configured" | "derived" | "missing";
  portSource: "configured" | "default";
}

export function getSmtpConfig(): SmtpConfig {
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";

  let port = 465;
  let portSource: "configured" | "default" = "default";
  if (process.env.SMTP_PORT) {
    const parsed = parseInt(process.env.SMTP_PORT, 10);
    if (!Number.isNaN(parsed)) {
      port = parsed;
      portSource = "configured";
    }
  }

  const secure = port === 465;

  let host = "";
  let hostSource: "configured" | "derived" | "missing" = "missing";

  if (process.env.SMTP_HOST && process.env.SMTP_HOST.trim()) {
    host = process.env.SMTP_HOST.trim();
    hostSource = "configured";
  } else if (user && user.includes("@")) {
    const domain = user.split("@")[1].trim().toLowerCase();
    host = domain === "gmail.com" ? "smtp.gmail.com" : `smtp.${domain}`;
    hostSource = "derived";
  }

  return { host, port, secure, user, pass, hostSource, portSource };
}

export function createTransporter() {
  const config = getSmtpConfig();
  if (!config.user || !config.pass || !config.host) {
    return null;
  }
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

export interface LeadEmailPayload {
  form: string;
  region?: string;
  data: Record<string, unknown>;
  pageUrl?: string;
  replyTo?: string;
}

export async function sendLeadEmail(payload: LeadEmailPayload): Promise<boolean> {
  const region = (payload.region || "au").toUpperCase();
  const formName = payload.form;

  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail || !adminEmail.trim()) {
    console.error(`[Mailer] Cannot send lead email for ${formName} (${region}): ADMIN_EMAIL environment variable is missing`);
    return false;
  }

  const config = getSmtpConfig();
  if (!config.user || !config.pass || !config.host) {
    console.error(`[Mailer] Cannot send lead email for ${formName} (${region}): SMTP credentials (SMTP_USER/SMTP_PASS) not configured`);
    return false;
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error(`[Mailer] Failed to create SMTP transporter for ${formName} (${region})`);
    return false;
  }

  const timestamp = new Date().toISOString();
  const pageUrl = payload.pageUrl || `https://tutorexel.com/${region === "AU" ? "" : region.toLowerCase()}`;
  const replyTo = payload.replyTo || (typeof payload.data.email === "string" ? payload.data.email : undefined);

  const subject = `New lead: ${formName} (${region})`;

  const rows = Object.entries(payload.data)
    .filter(([, v]) => v !== null && v !== undefined && v !== "")
    .map(([k, v]) => `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;color:#374151;">${k}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;color:#111827;">${String(v)}</td></tr>`)
    .join("");

  const textLines = [
    `New lead: ${formName} (${region})`,
    `Form: ${formName}`,
    `Region: ${region}`,
    `Page URL: ${pageUrl}`,
    `Timestamp: ${timestamp}`,
    "",
    "Submission details:",
    ...Object.entries(payload.data)
      .filter(([, v]) => v !== null && v !== undefined && v !== "")
      .map(([k, v]) => `- ${k}: ${String(v)}`),
  ];

  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:#1a2e3b;padding:24px 32px;border-radius:12px 12px 0 0;">
    <h1 style="color:#ffffff;font-size:20px;margin:0;">TutorExel</h1>
    <p style="color:rgba(255,255,255,.7);font-size:13px;margin:4px 0 0;">New Lead: ${formName} (${region})</p>
  </div>
  <div style="background:#ffffff;padding:24px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
    <p style="font-size:14px;color:#374151;margin:0 0 16px;"><strong>Region:</strong> ${region} | <strong>Page:</strong> ${pageUrl} | <strong>Timestamp:</strong> ${timestamp}</p>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">${rows}</table>
  </div>
</div>`;

  try {
    await transporter.sendMail({
      from: config.user,
      to: adminEmail,
      replyTo: replyTo || undefined,
      subject,
      text: textLines.join("\n"),
      html,
    });
    console.log(`[Mailer] Lead email sent for ${formName} (${region}) to ${adminEmail}`);
    return true;
  } catch (err) {
    console.error(`[Mailer] Failed to send lead email for ${formName} (${region}):`, err instanceof Error ? err.message : err);
    return false;
  }
}
