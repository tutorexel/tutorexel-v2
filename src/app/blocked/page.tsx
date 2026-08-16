/**
 * GeoGuard — Blocked Page
 * Shown to visitors from non-allowed countries.
 * Styled like Cloudflare's "Sorry, you have been blocked" page.
 */

import "./blocked.css";

export const metadata = {
  title: "Sorry, you have been blocked | TutorExel",
  robots: "noindex, nofollow",
};

const SITE_DOMAIN = process.env.GEO_SITE_NAME ?? "tutorexel.com";

export default function BlockedPage() {
  return (
    <div className="blocked">
      {/* Top header bar */}
      <header className="blocked__header">
        <div className="blocked__header-inner">
          <h1 className="blocked__title">Sorry, you have been blocked</h1>
          <p className="blocked__subtitle">
            You are unable to access {SITE_DOMAIN}
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="blocked__main">
        <div className="blocked__browser">
          <div className="blocked__browser-bar">
            <span className="blocked__dot blocked__dot--red" />
            <span className="blocked__dot blocked__dot--yellow" />
            <span className="blocked__dot blocked__dot--green" />
            <div className="blocked__browser-tab" />
          </div>

          <div className="blocked__browser-body">
            <div className="blocked__x-circle">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <h2 className="blocked__heading">Access Denied</h2>
            <p className="blocked__text">
              This service is only available to visitors in{" "}
              <strong>Australia</strong>.
            </p>
            <p className="blocked__text blocked__text--muted">
              If you believe this is an error, please contact us at{" "}
              <a href="mailto:info@tutorexel.com">info@tutorexel.com</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
