import { NextRequest, NextResponse } from "next/server";
import { logSubmission } from "@/lib/submissions-store";
import { sendNotificationEmail } from "@/utils/send-notification-email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { parentName, email, phone, yearLevel, subject } = body;

    if (!parentName || !email || !phone || !yearLevel || !subject) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = { parentName, email, phone, yearLevel, subject };

    logSubmission("free-trial", data).catch(() => {});
    sendNotificationEmail("free-trial", data).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Free trial form error:", error);
    return NextResponse.json({ error: "Failed to book trial" }, { status: 500 });
  }
}
