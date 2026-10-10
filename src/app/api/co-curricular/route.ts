import { NextRequest, NextResponse } from "next/server";
import { logSubmission } from "@/lib/submissions-store";
import { sendLeadEmail } from "@/utils/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { instrument, parentName, email, phone, studentName, yearLevel, preferredTime, additionalNotes, region: rawRegion } = body;

    if (!parentName || !email || !phone || !studentName || !yearLevel) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const region = (rawRegion || "au").toLowerCase();
    const data = { region, instrument, parentName, email, phone, studentName, yearLevel, preferredTime, additionalNotes };

    try {
      await logSubmission("co-curricular", data);
    } catch (err) {
      console.error(`[co-curricular ${region.toUpperCase()}] Failed to save submission to store:`, err);
    }

    try {
      await sendLeadEmail({
        form: "co-curricular",
        region,
        data,
        pageUrl: `https://tutorexel.com/${region === "au" ? "" : region}/co-curricular`,
        replyTo: email,
      });
    } catch (err) {
      console.error(`[co-curricular ${region.toUpperCase()}] Failed to send lead email:`, err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Co-curricular enquiry error:", error);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}
