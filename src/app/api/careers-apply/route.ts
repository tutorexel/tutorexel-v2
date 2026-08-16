import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { logSubmission } from "@/lib/submissions-store";
import { sendNotificationEmail } from "@/utils/send-notification-email";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const location = formData.get("location") as string;
    const qualificationRaw = formData.get("qualification") as string;
    const QUAL_LABELS: Record<string, string> = {
      "bachelors-education": "Bachelor's of Education",
      "bachelors-other": "Bachelor's Degree (Other)",
      "masters-education": "Master's of Education",
      "masters-other": "Master's Degree (Other)",
      "phd": "PhD",
      "diploma": "Diploma of Teaching",
      "cert-iv": "Certificate IV in Training & Assessment",
      "other": "Other",
    };
    const qualification = QUAL_LABELS[qualificationRaw] || qualificationRaw;
    const yearsExperience = formData.get("yearsExperience") as string;
    const currentRole = formData.get("currentRole") as string;
    const hasLaptopOrIpad = formData.get("hasWebcam") as string;
    const hasQuietSpace = formData.get("hasQuietSpace") as string;
    const internetSpeed = formData.get("internetSpeed") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const subjectsRaw = formData.get("subjects") as string;
    const availabilityRaw = formData.get("availability") as string;
    const cvFile = formData.get("cv") as File | null;

    if (!fullName || !email || !phone || !location || !qualificationRaw || !yearsExperience) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Parse JSON arrays sent as strings
    let subjectsList = "";
    try { subjectsList = JSON.parse(subjectsRaw || "[]").join(", "); } catch { subjectsList = subjectsRaw || ""; }

    let availabilityStr = "";
    try {
      const avail = JSON.parse(availabilityRaw || "[]");
      if (Array.isArray(avail)) {
        availabilityStr = avail.join(", ");
      } else {
        availabilityStr = Object.entries(avail).filter(([, v]) => v).map(([k]) => k).join(", ");
      }
    } catch { availabilityStr = availabilityRaw || ""; }

    let cvUrl = "";
    if (cvFile && cvFile.size > 0) {
      const bytes = await cvFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadsDir = path.join(process.cwd(), "public", "uploads", "cv");
      await mkdir(uploadsDir, { recursive: true });
      const timestamp = Date.now();
      const safeName = fullName.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
      const ext = path.extname(cvFile.name);
      const filename = `${safeName}_${timestamp}${ext}`;
      await writeFile(path.join(uploadsDir, filename), buffer);
      const host = request.headers.get("host") || "localhost:3000";
      const isLocal = host.includes("localhost") || host.includes("127.0.0.1");
      const protocol = isLocal ? "http" : "https";
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
      cvUrl = `${baseUrl}/uploads/cv/${filename}`;
    }

    const data = {
      fullName, email, phone, location, qualification, yearsExperience,
      ...(currentRole && { currentRole }),
      ...(subjectsList && { subjects: subjectsList }),
      ...(availabilityStr && { availability: availabilityStr }),
      ...(hasLaptopOrIpad && { hasLaptopOrIpad }),
      ...(hasQuietSpace && { hasQuietSpace }),
      ...(internetSpeed && { internetSpeed }),
      ...(coverLetter && { coverLetter }),
      ...(cvUrl && { cvUrl }),
    };

    logSubmission("careers", data).catch(() => {});
    sendNotificationEmail("careers", data).catch(() => {});

    return NextResponse.json({ success: true, cvUrl });
  } catch (error) {
    console.error("Careers apply form error:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
