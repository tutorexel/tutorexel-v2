/**
 * UTM Parameter Tracking Utility
 * Captures UTM params from URL on first visit, stores in sessionStorage,
 * and provides them for webhook/form submissions.
 */

const UTM_STORAGE_KEY = 'tutorexel_utm';

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export type UTMData = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
};

/**
 * Captures UTM parameters from current URL and stores in sessionStorage.
 * Only captures on first page load with UTM params (doesn't overwrite).
 * Also captures landing page and referrer.
 */
export function captureUTM(): void {
  if (typeof window === 'undefined') return;

  try {
    const params = new URLSearchParams(window.location.search);
    const hasUTM = UTM_PARAMS.some((key) => params.has(key));

    // If URL has UTM params, always store (new campaign click)
    if (hasUTM) {
      const utmData: UTMData = {};
      UTM_PARAMS.forEach((key) => {
        const value = params.get(key);
        if (value) {
          utmData[key] = value;
        }
      });
      utmData.landing_page = window.location.pathname;
      utmData.referrer = document.referrer || undefined;
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
      return;
    }

    // If no UTM in URL but no existing data, store landing page + referrer
    const existing = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!existing) {
      const utmData: UTMData = {
        landing_page: window.location.pathname,
        referrer: document.referrer || undefined,
      };
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
    }
  } catch {
    // sessionStorage not available (private browsing etc.)
  }
}

/**
 * Returns stored UTM data. Used by webhook utility to append to form submissions.
 */
export function getUTMData(): UTMData {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UTMData;
    }
  } catch {
    // Ignore parse errors
  }
  return {};
}

/**
 * Sends UTM data to server for GHL contact update.
 * Call this after a successful form submission.
 */
export async function pushUTMToGHL(email: string): Promise<void> {
  if (typeof window === 'undefined' || !email) return;

  try {
    const utmData = getUTMData();
    // Only push if there's actual UTM data or landing page info
    if (!utmData.utm_source && !utmData.landing_page) return;

    await fetch('/api/update-utm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, ...utmData }),
      keepalive: true,
    });
  } catch {
    // Silent fail - UTM tracking is best-effort
  }
}
