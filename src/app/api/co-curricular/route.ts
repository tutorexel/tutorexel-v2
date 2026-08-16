import { NextRequest, NextResponse } from "next/server";
import { logSubmission } from "@/lib/submissions-store";
import { sendNotificationEmail } from "@/utils/send-notification-email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { instrument, parentName, email, phone, studentName, yearLevel, preferredTime, additionalNotes } = body;

    if (!parentName || !email || !phone || !studentName || !yearLevel) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = { instrument, parentName, email, phone, studentName, yearLevel, preferredTime, additionalNotes };

    logSubmission("co-curricular", data).catch(() => {});
    sendNotificationEmail("co-curricular", data).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Co-curricular enquiry error:", error);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}
