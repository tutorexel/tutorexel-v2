import { NextRequest, NextResponse } from "next/server";
import { logSubmission } from "@/lib/submissions-store";
import { sendNotificationEmail } from "@/utils/send-notification-email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { parentName, email, phone, yearLevel, subject, preferredTime } = body;

    if (!parentName || !email || !phone || !yearLevel || !subject) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = {
      parentName,
      email,
      phone,
      yearLevel,
      subject,
      ...(preferredTime && { preferredTime }),
    };

    logSubmission("free-assessment", data).catch(() => {});
    sendNotificationEmail("free-assessment", data).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Assessment form error:", error);
    return NextResponse.json({ error: "Failed to book assessment" }, { status: 500 });
  }
}
