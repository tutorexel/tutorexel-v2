import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE = "https://services.leadconnectorhq.com";

// Map UTM field names to GHL custom field IDs
const UTM_FIELD_MAP: Record<string, string> = {
  utm_source: "Jb9iyebdqmkAlI9UQEXV",
  utm_medium: "btk4aUG2SZUnrcKxTrhX",
  utm_campaign: "uNWo4p4FgyqZWMVewkd5",
  utm_content: "0AyHj4wYL2Piex4kfJc1",
  utm_term: "k0kXZazCVKae3NTIcCTY",
  landing_page: "rROEFtpcLmxNGrOERxIc",
  referrer: "VDgscyQqWQFmH0G6KjI2",
};

async function findContactByEmail(email: string): Promise<string | null> {
  try {
    const res = await fetch(
      `${GHL_BASE}/contacts/?query=${encodeURIComponent(email)}&locationId=${GHL_LOCATION_ID}`,
      {
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          Version: "2021-07-28",
          Accept: "application/json",
        },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const contacts = data.contacts || [];
    const match = contacts.find(
      (c: { email?: string }) => c.email?.toLowerCase() === email.toLowerCase()
    );
    return match?.id || null;
  } catch {
    return null;
  }
}

async function updateContactUTM(
  contactId: string,
  utmData: Record<string, string>
): Promise<boolean> {
  try {
    const customFields = Object.entries(utmData)
      .filter(([key, val]) => UTM_FIELD_MAP[key] && val)
      .map(([key, val]) => ({ id: UTM_FIELD_MAP[key], field_value: val }));

    if (customFields.length === 0) return true;

    const res = await fetch(`${GHL_BASE}/contacts/${contactId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customFields }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      return NextResponse.json({ error: "GHL not configured" }, { status: 500 });
    }

    const body = await request.json();
    const { email, utm_source, utm_medium, utm_campaign, utm_content, utm_term, landing_page, referrer } = body;

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Wait briefly for the webhook workflow to create the contact first
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const contactId = await findContactByEmail(email);
    if (!contactId) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    const utmData: Record<string, string> = {};
    if (utm_source) utmData.utm_source = utm_source;
    if (utm_medium) utmData.utm_medium = utm_medium;
    if (utm_campaign) utmData.utm_campaign = utm_campaign;
    if (utm_content) utmData.utm_content = utm_content;
    if (utm_term) utmData.utm_term = utm_term;
    if (landing_page) utmData.landing_page = landing_page;
    if (referrer) utmData.referrer = referrer;

    const updated = await updateContactUTM(contactId, utmData);

    return NextResponse.json({ success: updated });
  } catch (error) {
    console.error("UTM update error:", error);
    return NextResponse.json({ error: "Failed to update UTM" }, { status: 500 });
  }
}
