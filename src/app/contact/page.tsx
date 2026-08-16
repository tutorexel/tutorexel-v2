"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import { sendContactWebhook } from "@/utils/webhook";
import { pushUTMToGHL } from "@/utils/utm";
import { trackContactSubmit } from "@/utils/analytics";
import "./contact.css";

const yearLevels = [
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
];

const hearAboutOptions = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Friend / Family Referral",
  "School Recommendation",
  "Other",
];

const interests = [
  "Maths Tutoring",
  "English Tutoring",
  "Piano Lessons",
  "Guitar Lessons",
];

const afterSubmitSteps = [
  "We review your form and match your child with the right tutor (within 2 hours).",
  "We schedule a free assessment to understand your child's current level.",
  "Your child attends their first free trial class.",
  "You receive a detailed assessment report and personalised learning plan.",
  "If you are happy, we begin regular sessions. No obligation until you decide.",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "+61 ",
    childName: "",
    yearLevel: "",
    interests: [] as string[],
    hearAbout: "",
    message: "",
    agreedTerms: false,
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const webhookCalledRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Send to webhook only once
        if (!webhookCalledRef.current) {
          webhookCalledRef.current = true;
          sendContactWebhook(formData).catch(() => {});
          pushUTMToGHL(formData.email);
        }
        // Track contact form conversion in GA4
        trackContactSubmit(formData.interests);
        setSubmitting(false);
        setSubmitted(true);
      }
    } catch {
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Banner Section (Same style as Subject page) */}
      <section className="contact-banner">
        <div className="contact-banner__decoration contact-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="contact-banner__curve contact-banner__curve--1"
          />
        </div>
        <div className="contact-banner__decoration contact-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="contact-banner__curve contact-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="contact-banner__curve contact-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="contact-banner__content">
            <h1 className="contact-banner__title">
              Thinking of{" "}
              <span className="contact-banner__title-highlight">
                Excelling Your Child?
              </span>
              <span className="contact-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="contact-banner__subtitle">
              Fill out the form below and we will get back to you. Or reach out directly via email or WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-section__grid">
            {/* Left Column - Contact Info */}
            <div className="contact-info">
              <div className="contact-info__cards">
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="contact-info-card__label">Email Us</p>
                    <p className="contact-info-card__value">
                      <a href="mailto:info@tutorexel.com">info@tutorexel.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z"/></svg>
                  </div>
                  <div>
                    <p className="contact-info-card__label">Message us on WhatsApp</p>
                    <p className="contact-info-card__value">
                      <a href="https://wa.me/61470330548">+61 470-330-548</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="contact-info-card__label">Response Time</p>
                    <p className="contact-info-card__value">
                      We typically respond within 2 hours
                    </p>
                  </div>
                </div>


              </div>


            </div>

            {/* Right Column - Inquiry Form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-form-success">
                  <div className="contact-form-success__icon">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="contact-form-success__title">Thank You!</h2>
                  <p className="contact-form-success__message">
                    Your inquiry has been submitted successfully. Our team will contact you within 2 hours during business hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="contact-form-card__title">Want to Make Inquiry?</h2>
                  <p className="contact-form-card__subtitle">
                    Have a question or need assistance? Fill out the form below, and we&apos;ll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="contact-form__grid">
                      <div className="contact-form__field">
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) =>
                            setFormData({ ...formData, parentName: e.target.value })
                          }
                          className="contact-form__input"
                          placeholder="Parent's Full Name *"
                        />
                      </div>

                      <div className="contact-form__field">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="contact-form__input"
                          placeholder="Email Address *"
                        />
                      </div>

                      <div className="contact-form__field">
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="contact-form__input"
                          placeholder="+61 4XX XXX XXX"
                        />
                      </div>

                      <div className="contact-form__field">
                        <input
                          type="text"
                          value={formData.childName}
                          onChange={(e) =>
                            setFormData({ ...formData, childName: e.target.value })
                          }
                          className="contact-form__input"
                          placeholder="Child's Name"
                        />
                      </div>
                    </div>

                    <div className="contact-form__field contact-form__field--full">
                      <label className="contact-form__label">
                        Child&apos;s Year Level *
                      </label>
                      <select
                        required
                        value={formData.yearLevel}
                        onChange={(e) =>
                          setFormData({ ...formData, yearLevel: e.target.value })
                        }
                        className="contact-form__select"
                      >
                        <option value="" disabled>
                          Select a year level
                        </option>
                        {yearLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Interest Checkboxes */}
                    <div className="contact-form__interests">
                      <span className="contact-form__interests-label">
                        What are you interested in? *
                      </span>
                      <div className="contact-form__interests-grid">
                        {interests.map((interest) => (
                          <label
                            key={interest}
                            className="contact-form__checkbox-label"
                          >
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleInterestToggle(interest)}
                              className="contact-form__checkbox"
                            />
                            <span>{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="contact-form__field contact-form__field--full">
                      <label className="contact-form__label">
                        How did you hear about us?
                      </label>
                      <select
                        value={formData.hearAbout}
                        onChange={(e) =>
                          setFormData({ ...formData, hearAbout: e.target.value })
                        }
                        className="contact-form__select"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {hearAboutOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="contact-form__field contact-form__field--full">
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="contact-form__textarea"
                        placeholder="Your Message (How Can We Help You?) *"
                      />
                    </div>

                    <button type="submit" className="contact-form__submit" disabled={submitting}>
                      {submitting ? "Sending..." : "Book Your Free Trial Class"}
                    </button>

                    <p className="contact-form__terms">
                      By submitting, you agree to our{" "}
                      <Link href="/terms">Terms & Conditions</Link> and{" "}
                      <Link href="/privacy">Privacy Policy</Link>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* After You Submit */}
      <section className="contact-after">
        <div className="contact-after__bg"></div>
        <div className="contact-after__overlay"></div>
        <div className="container">
          <h2 className="contact-after__title">After You Submit</h2>
          <div className="contact-after__grid">
            <div className="contact-after__image">
              <Image
                src="/images/contact/contact_after_submit_image.webp"
                alt="Mother and child studying together"
                width={600}
                height={400}
              />
            </div>

            <div className="contact-after__card">
              <ul className="contact-after__steps">
                {afterSubmitSteps.map((step, i) => (
                  <li key={i} className="contact-after__step">
                    <span className="contact-after__step-icon">
                      <CheckCircle size={22} />
                    </span>
                    <span className="contact-after__step-text">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
