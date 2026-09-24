import Image from "next/image";
import "./enquire.css";

const BOOKING_URL = "https://api.superintech.com/widget/bookings/free-trial-guitar-and-piana-booking";

export default function PianoEnquiryPage() {
  return (
    <>
      <section className="cc-booking-hero">
        <div className="cc-booking-hero__decoration cc-booking-hero__decoration--left">
          <Image src="/images/about/left-line.webp" alt="" width={200} height={200} />
        </div>
        <div className="cc-booking-hero__decoration cc-booking-hero__decoration--right">
          <Image src="/images/about/star-design.webp" alt="" width={200} height={200} />
          <Image src="/images/about/right-line.webp" alt="" width={200} height={200} />
        </div>
        <div className="container">
          <div className="cc-booking-hero__content">
            <h1 className="cc-booking-hero__title">
              Book Your Free{" "}
              <span className="cc-booking-hero__highlight">Piano</span>{" "}
              Trial Lesson
            </h1>
            <p className="cc-booking-hero__subtitle">
              Pick a time that works for you and your child. Our team will confirm
              your free trial piano lesson within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="cc-booking-section">
        <div className="container">
          <div className="cc-booking__widget">
            <iframe
              src={BOOKING_URL}
              className="cc-booking__iframe"
              title="Book a free piano trial lesson"
              loading="lazy"
              scrolling="no"
            />
          </div>
        </div>
      </section>
    </>
  );
}
