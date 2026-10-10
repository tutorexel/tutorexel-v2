import type { SubmissionType } from "@/lib/submissions-store";
import { sendLeadEmail } from "@/utils/mailer";

export async function sendNotificationEmail(
  type: SubmissionType,
  data: Record<string, string | number | boolean | null | undefined>,
  region = "au",
  pageUrl?: string
): Promise<void> {
  const replyTo = typeof data.email === "string" ? data.email : undefined;
  await sendLeadEmail({
    form: type,
    region,
    data,
    pageUrl,
    replyTo,
  });
}
