import { NextRequest, NextResponse } from "next/server";
import { logSubmission } from "@/lib/submissions-store";
import { sendNotificationEmail } from "@/utils/send-notification-email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { parentName, email, phone, childName, yearLevel, interests, hearAbout, message } = body;

    if (!parentName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = {
      parentName,
      email,
      phone,
      ...(childName && { childName }),
      ...(yearLevel && { yearLevel }),
      ...(interests && { interests: Array.isArray(interests) ? interests.join(", ") : interests }),
      ...(hearAbout && { hearAbout }),
      ...(message && { message }),
    };

    logSubmission("contact", data).catch(() => {});
    sendNotificationEmail("contact", data).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 500 });
  }
}
