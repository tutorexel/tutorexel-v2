import { NextRequest, NextResponse } from "next/server";
import { logSubmission } from "@/lib/submissions-store";
import { sendLeadEmail } from "@/utils/mailer";
import { sendContactWebhook } from "@/utils/webhook";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { parentName, email, phone, childName, yearLevel, interests, hearAbout, message, region: rawRegion } = body;

    if (!parentName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const region = (rawRegion || "au").toLowerCase();
    const data = {
      region,
      parentName,
      email,
      phone,
      ...(childName && { childName }),
      ...(yearLevel && { yearLevel }),
      ...(interests && { interests: Array.isArray(interests) ? interests.join(", ") : interests }),
      ...(hearAbout && { hearAbout }),
      ...(message && { message }),
    };

    // 1. Save to store
    try {
      await logSubmission("contact", data);
    } catch (err) {
      console.error(`[contact ${region.toUpperCase()}] Failed to save submission to store:`, err);
    }

    // 2. Send email
    try {
      await sendLeadEmail({
        form: "contact",
        region,
        data,
        pageUrl: `https://tutorexel.com/${region === "au" ? "" : region}/contact`,
        replyTo: email,
      });
    } catch (err) {
      console.error(`[contact ${region.toUpperCase()}] Failed to send lead email:`, err);
    }

    // 3. Call webhook
    try {
      await sendContactWebhook(data);
    } catch (err) {
      console.error(`[contact ${region.toUpperCase()}] Failed to call webhook:`, err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 500 });
  }
}
