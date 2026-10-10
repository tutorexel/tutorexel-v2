import { NextRequest, NextResponse } from "next/server";
import { logSubmission } from "@/lib/submissions-store";
import { sendLeadEmail } from "@/utils/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { parentName, email, phone, yearLevel, subject, preferredTime, region: rawRegion } = body;

    if (!parentName || !email || !phone || !yearLevel || !subject) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const region = (rawRegion || "au").toLowerCase();
    const data = {
      region,
      parentName,
      email,
      phone,
      yearLevel,
      subject,
      ...(preferredTime && { preferredTime }),
    };

    // 1. Save to store
    try {
      await logSubmission("free-assessment", data);
    } catch (err) {
      console.error(`[free-assessment ${region.toUpperCase()}] Failed to save submission to store:`, err);
    }

    // 2. Send email
    try {
      await sendLeadEmail({
        form: "free-assessment",
        region,
        data,
        pageUrl: `https://tutorexel.com/${region === "au" ? "" : region}/free-assessment`,
        replyTo: email,
      });
    } catch (err) {
      console.error(`[free-assessment ${region.toUpperCase()}] Failed to send lead email:`, err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Assessment form error:", error);
    return NextResponse.json({ error: "Failed to book assessment" }, { status: 500 });
  }
}
