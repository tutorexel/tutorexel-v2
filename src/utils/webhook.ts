/**
 * Webhook Utility - Secure frontend webhook caller
 * Handles enrollment data submission to external webhook
 */

import { getUTMData } from './utm';

type WebhookPayload = Record<string, unknown>;

/**
 * Sanitizes a string value by trimming whitespace and removing potentially harmful characters
 */
function sanitizeString(value: string): string {
  return value.trim().replace(/[<>]/g, '');
}

/**
 * Recursively sanitizes all string values in an object
 */
function sanitizeObject(obj: WebhookPayload): WebhookPayload {
  const sanitized: WebhookPayload = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item =>
        typeof item === 'string' ? sanitizeString(item) : item
      );
    } else if (value !== null && typeof value === 'object') {
      sanitized[key] = sanitizeObject(value as WebhookPayload);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

/**
 * Cleans payload by removing null, undefined, empty strings, and empty arrays
 */
function cleanPayload(payload: WebhookPayload): WebhookPayload {
  const cleaned: WebhookPayload = {};

  for (const [key, value] of Object.entries(payload)) {
    // Skip null, undefined, empty strings
    if (value === null || value === undefined || value === '') {
      continue;
    }

    // Skip empty arrays
    if (Array.isArray(value) && value.length === 0) {
      continue;
    }

    // Recursively clean nested objects
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      const cleanedNested = cleanPayload(value as WebhookPayload);
      if (Object.keys(cleanedNested).length > 0) {
        cleaned[key] = cleanedNested;
      }
      continue;
    }

    cleaned[key] = value;
  }

  return cleaned;
}

/**
 * Generic webhook sender
 */
async function sendWebhook(webhookUrl: string | undefined, data: WebhookPayload, source: string): Promise<boolean> {
  // Validate webhook URL exists and is HTTPS
  if (!webhookUrl) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Webhook] URL not configured');
    }
    return false;
  }

  if (!webhookUrl.startsWith('https://')) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Webhook] URL must be HTTPS');
    }
    return false;
  }

  try {
    // Sanitize input data
    const sanitizedData = sanitizeObject(data);

    // Clean payload - remove empty values
    const cleanedPayload = cleanPayload(sanitizedData);

    // Add timestamp, source, and UTM tracking data
    const utmData = getUTMData();
    const payload = {
      ...cleanedPayload,
      submittedAt: new Date().toISOString(),
      source,
      ...(utmData.utm_source && { utm_source: utmData.utm_source }),
      ...(utmData.utm_medium && { utm_medium: utmData.utm_medium }),
      ...(utmData.utm_campaign && { utm_campaign: utmData.utm_campaign }),
      ...(utmData.utm_term && { utm_term: utmData.utm_term }),
      ...(utmData.utm_content && { utm_content: utmData.utm_content }),
      ...(utmData.landing_page && { landing_page: utmData.landing_page }),
      ...(utmData.referrer && { referrer: utmData.referrer }),
    };

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(webhookUrl, {
      keepalive: true,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }

    return true;
  } catch (error) {
    // Silent error handling for production
    // Only log in development mode
    if (process.env.NODE_ENV === 'development') {
      console.error('[Webhook] Error:', error instanceof Error ? error.message : 'Unknown error');
    }
    return false;
  }
}

/**
 * Sends enrollment data to webhook
 */
export async function sendEnrollmentWebhook(data: WebhookPayload): Promise<boolean> {
  return sendWebhook(
    process.env.NEXT_PUBLIC_ENROLL_WEBHOOK_URL,
    data,
    'tutorexel-website-enroll'
  );
}

/**
 * Sends book free trial data to webhook
 */
export async function sendBookTrialWebhook(data: WebhookPayload): Promise<boolean> {
  return sendWebhook(
    process.env.NEXT_PUBLIC_BOOK_TRIAL_WEBHOOK_URL,
    data,
    'tutorexel-website-book-trial'
  );
}

/**
 * Sends contact us form data to webhook
 */
export async function sendContactWebhook(data: WebhookPayload): Promise<boolean> {
  return sendWebhook(
    process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL,
    data,
    'tutorexel-website-contact'
  );
}

/**
 * Sends careers apply form data to webhook
 */
export async function sendCareersWebhook(data: WebhookPayload): Promise<boolean> {
  return sendWebhook(
    process.env.NEXT_PUBLIC_CAREERS_WEBHOOK_URL,
    data,
    'tutorexel-website-careers'
  );
}

/**
 * Sends piano enquiry form data to webhook
 */
export async function sendPianoEnquiryWebhook(data: WebhookPayload): Promise<boolean> {
  return sendWebhook(
    process.env.NEXT_PUBLIC_PIANO_ENQUIRY_WEBHOOK_URL,
    data,
    'tutorexel-website-piano-enquiry'
  );
}

/**
 * Sends guitar enquiry form data to webhook
 */
export async function sendGuitarEnquiryWebhook(data: WebhookPayload): Promise<boolean> {
  return sendWebhook(
    process.env.NEXT_PUBLIC_GUITAR_ENQUIRY_WEBHOOK_URL,
    data,
    'tutorexel-website-guitar-enquiry'
  );
}
