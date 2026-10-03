import { CALENDLY_URL } from "@/utils/externalLinks";
import "./free-trial-booking.css";

export default function FreeTrialBookingPage() {
  return (
    <section className="booking-page">
      <div className="booking-page__header">
        <h1 className="booking-page__title">Book Your Free Trial Class</h1>
        <p className="booking-page__subtitle">
          Select a convenient date and time for your child&apos;s 30-minute interactive session.
        </p>
      </div>
      <div className="booking-page__widget-wrapper">
        <iframe
          src={CALENDLY_URL}
          className="booking-page__iframe"
          title="Book a free trial class"
          loading="lazy"
          scrolling="no"
        />
      </div>
    </section>
  );
}
