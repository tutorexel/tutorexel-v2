import { CALENDLY_URL } from "@/utils/externalLinks";
import "./free-trial-booking.css";

export default function FreeTrialBookingPage() {
  return (
    <section className="booking-page">
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
