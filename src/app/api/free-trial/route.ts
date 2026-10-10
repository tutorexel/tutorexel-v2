import { NextRequest, NextResponse } from "next/server";
import { logSubmission } from "@/lib/submissions-store";
import { sendLeadEmail } from "@/utils/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { parentName, email, phone, yearLevel, subject, region: rawRegion } = body;

    if (!parentName || !email || !phone || !yearLevel || !subject) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const region = (rawRegion || "au").toLowerCase();
    const data = { region, parentName, email, phone, yearLevel, subject };

    try {
      await logSubmission("free-trial", data);
    } catch (err) {
      console.error(`[free-trial ${region.toUpperCase()}] Failed to save submission to store:`, err);
    }

    try {
      await sendLeadEmail({
        form: "free-trial",
        region,
        data,
        pageUrl: `https://tutorexel.com/${region === "au" ? "" : region}/free-trial`,
        replyTo: email,
      });
    } catch (err) {
      console.error(`[free-trial ${region.toUpperCase()}] Failed to send lead email:`, err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Free trial form error:", error);
    return NextResponse.json({ error: "Failed to book trial" }, { status: 500 });
  }
}
