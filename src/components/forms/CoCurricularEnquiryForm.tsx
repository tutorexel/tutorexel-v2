"use client";

/**
 * Shared enquiry form for Piano & Guitar co-curricular activities.
 * Submits to the appropriate GHL webhook based on the `instrument` prop.
 */

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  sendPianoEnquiryWebhook,
  sendGuitarEnquiryWebhook,
} from "@/utils/webhook";
import { pushUTMToGHL } from "@/utils/utm";
import "./co-curricular-enquiry.css";

type Instrument = "Piano" | "Guitar";

interface Props {
  instrument: Instrument;
  accentColor?: string;
}

const YEAR_LEVELS = [
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
];

function CheckIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function CoCurricularEnquiryForm({ instrument }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const webhookCalledRef = useRef(false);

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "+61 ",
    studentName: "",
    yearLevel: "",
    preferredTime: "",
    additionalNotes: "",
  });

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setSubmitError("");

    const payload = {
      instrument,
      parentName: formData.parentName,
      email: formData.email,
      phone: formData.phone,
      studentName: formData.studentName,
      yearLevel: formData.yearLevel,
      preferredTime: formData.preferredTime,
      additionalNotes: formData.additionalNotes,
    };

    try {
      if (!webhookCalledRef.current) {
        webhookCalledRef.current = true;
        const webhookFn =
          instrument === "Piano"
            ? sendPianoEnquiryWebhook
            : sendGuitarEnquiryWebhook;
        const success = await webhookFn(payload);
        if (!success) {
          throw new Error("Submission failed");
        }
      }

      pushUTMToGHL(formData.email);

      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Enquiry submit error:", err);
      webhookCalledRef.current = false;
      setSubmitting(false);
      setSubmitError(
        "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  if (submitted) {
    return (
      <section className="cc-enquiry-section">
        <div className="container">
          <div className="cc-enquiry-success">
            <div className="cc-enquiry-success__icon">
              <CheckIcon />
            </div>
            <h2 className="cc-enquiry-success__title">Enquiry Received!</h2>
            <p className="cc-enquiry-success__message">
              Thank you! Our team will contact you within <strong>24 hours</strong>{" "}
              to discuss {formData.studentName || "your child"}&apos;s{" "}
              {instrument.toLowerCase()} lessons and schedule a free trial class.
            </p>
            <div className="cc-enquiry-success__actions">
              <Link href="/" className="btn btn-secondary btn-lg">
                Back to Home
              </Link>
              <Link
                href={`/co-curricular/${instrument.toLowerCase()}`}
                className="btn btn-primary btn-lg"
              >
                Back to {instrument}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="cc-enquiry-hero">
        <div className="cc-enquiry-hero__decoration cc-enquiry-hero__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="cc-enquiry-hero__curve--1"
          />
        </div>
        <div className="cc-enquiry-hero__decoration cc-enquiry-hero__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="cc-enquiry-hero__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="cc-enquiry-hero__curve--3"
          />
        </div>
        <div className="container">
          <div className="cc-enquiry-hero__content">
            <h1 className="cc-enquiry-hero__title">
              <span className="cc-enquiry-hero__title-highlight">
                {instrument}
              </span>{" "}
              Lessons Enquiry
            </h1>
            <p className="cc-enquiry-hero__subtitle">
              Tell us about your child and we&apos;ll book a free trial{" "}
              {instrument.toLowerCase()} lesson at a time that suits you.
            </p>
          </div>
        </div>
      </section>

      <section className="cc-enquiry-section">
        <div className="container">
          <div className="cc-enquiry-form-wrapper">
            <form onSubmit={handleSubmit} className="cc-enquiry-form">
              <div className="cc-enquiry-form__card">
                <h2 className="cc-enquiry-form__title">
                  Book Your Free {instrument} Trial
                </h2>
                <p className="cc-enquiry-form__subtitle">
                  Fill in the details below — our team will get back to you
                  within 24 hours.
                </p>

                {/* Parent Name + Email */}
                <div className="cc-enquiry-form__row">
                  <div className="cc-enquiry-form__field">
                    <label className="cc-enquiry-form__label">
                      Parent&apos;s Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="cc-enquiry-form__input"
                      placeholder="e.g. Sarah Johnson"
                    />
                  </div>
                  <div className="cc-enquiry-form__field">
                    <label className="cc-enquiry-form__label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="cc-enquiry-form__input"
                      placeholder="e.g. sarah@email.com"
                    />
                  </div>
                </div>

                {/* Phone + Student Name */}
                <div className="cc-enquiry-form__row">
                  <div className="cc-enquiry-form__field">
                    <label className="cc-enquiry-form__label">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="cc-enquiry-form__input"
                      placeholder="e.g. 0412 345 678"
                    />
                  </div>
                  <div className="cc-enquiry-form__field">
                    <label className="cc-enquiry-form__label">
                      Student&apos;s Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      className="cc-enquiry-form__input"
                      placeholder="e.g. Aiden"
                    />
                  </div>
                </div>

                {/* Year Level + Preferred Day/Time */}
                <div className="cc-enquiry-form__row">
                  <div className="cc-enquiry-form__field">
                    <label className="cc-enquiry-form__label">
                      Child&apos;s Year Level *
                    </label>
                    <select
                      name="yearLevel"
                      required
                      value={formData.yearLevel}
                      onChange={handleChange}
                      className="cc-enquiry-form__select"
                    >
                      <option value="" disabled>
                        Select Year Level
                      </option>
                      {YEAR_LEVELS.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="cc-enquiry-form__field">
                    <label className="cc-enquiry-form__label">
                      Preferred Day/Time
                    </label>
                    <input
                      type="text"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="cc-enquiry-form__input"
                      placeholder="e.g. Saturday 10am"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="cc-enquiry-form__group">
                  <label className="cc-enquiry-form__label">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="cc-enquiry-form__textarea"
                    placeholder={`Anything else we should know? e.g. specific goals, previous ${instrument.toLowerCase()} experience, preferred teacher style...`}
                    rows={4}
                  />
                </div>
              </div>

              {submitError && (
                <p className="cc-enquiry-form__error">{submitError}</p>
              )}

              <div className="cc-enquiry-form__terms">
                <label className="cc-enquiry-form__checkbox">
                  <input type="checkbox" name="agreeTerms" required />
                  <span className="cc-enquiry-form__checkbox-label">
                    I agree to the{" "}
                    <Link href="/terms" target="_blank">
                      Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" target="_blank">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="cc-enquiry-form__submit"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Enquiry"}{" "}
                {!submitting && <ArrowIcon />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
