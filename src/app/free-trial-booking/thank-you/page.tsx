import { Metadata } from "next";
import Link from "next/link";
import "../../thank-you/thank-you.css";

export const metadata: Metadata = {
  title: "Trial Booked Successfully | TutorExel",
  description:
    "Your free trial class has been booked successfully. Our team will confirm your session shortly.",
  robots: "noindex",
};

export default function FreeTrialThankYouPage() {
  return (
    <section className="thank-you">
      <div className="thank-you__content">
        <div className="thank-you__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
        </div>

        <h1 className="thank-you__title">Trial Booked!</h1>

        <p className="thank-you__message">
          Your free trial class has been booked successfully. A member of our
          team will contact you within <strong>24 hours</strong> to confirm
          the session details.
        </p>

        <div className="thank-you__info-card">
          <h3>What Happens Next?</h3>
          <ul>
            <li>We will confirm your session time via email or WhatsApp</li>
            <li>Your child will attend a <strong>30-minute live session</strong></li>
            <li>Absolutely <strong>no obligation</strong> to continue</li>
          </ul>
        </div>

        <p className="thank-you__message">
          If you have any questions, feel free to WhatsApp us at:
        </p>

        <a
          href="https://wa.me/61470330548"
          className="thank-you__whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z" />
          </svg>
          <span>+61 470-330-548</span>
        </a>

        <p className="thank-you__hint">
          In the meantime, you might want to explore our blog for helpful
          learning tips or check out our curriculum details.
        </p>

        <div className="thank-you__actions">
          <Link href="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
          <Link href="/blog" className="btn btn-secondary btn-lg">
            Visit Our Blog
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
