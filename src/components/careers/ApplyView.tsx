"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import RegionLink from "@/components/shared/RegionLink";
import { useRegion } from "@/hooks/useRegion";
import { type RegionCode } from "@/utils/regionalLinks";
import "@/app/careers/apply/apply.css";

const phonePrefixes: Record<RegionCode, string> = {
  au: "+61 ",
  us: "+1 ",
  ca: "+1 ",
  nz: "+64 ",
};

export default function ApplyView({ region: propRegion }: { region?: RegionCode }) {
  const { region: clientRegion } = useRegion();
  const region: RegionCode = propRegion || clientRegion;
  const isYearRegion = region === "au" || region === "nz";
  const yearOrGrade = isYearRegion ? "Years" : "Grades";

  const subjectOptions = [
    `Primary Mathematics (${yearOrGrade} 2 to 6)`,
    `Secondary Mathematics (${yearOrGrade} 7 to 10)`,
    `Primary English (${yearOrGrade} 2 to 6)`,
    `Secondary English (${yearOrGrade} 7 to 10)`,
    "Piano",
    "Guitar",
  ];

  const availabilityOptions = [
    "Weekday Mornings (10 AM to 2 PM, your local time)",
    "Weekends",
  ];

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: phonePrefixes[region] || "+61 ",
    location: "",
    subjects: [] as string[],
    qualification: "",
    yearsExperience: "",
    currentRole: "",
    hasWebcam: "",
    hasQuietSpace: "",
    internetSpeed: "",
    availability: [] as string[],
    coverLetter: "",
    cv: null as File | null,
    agreedTerms: false,
  });

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const handleAvailabilityToggle = (slot: string) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.includes(slot)
        ? prev.availability.filter((a) => a !== slot)
        : [...prev.availability, slot],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const submitData = new FormData();
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("location", formData.location);
      submitData.append("subjects", JSON.stringify(formData.subjects));
      submitData.append("qualification", formData.qualification);
      submitData.append("yearsExperience", formData.yearsExperience);
      submitData.append("currentRole", formData.currentRole);
      submitData.append("hasWebcam", formData.hasWebcam);
      submitData.append("hasQuietSpace", formData.hasQuietSpace);
      submitData.append("internetSpeed", formData.internetSpeed);
      submitData.append("availability", JSON.stringify(formData.availability));
      submitData.append("coverLetter", formData.coverLetter);
      if (formData.cv) {
        submitData.append("cv", formData.cv);
      }
      submitData.append("region", region);

      const res = await fetch("/api/careers-apply", {
        method: "POST",
        body: submitData,
      });

      if (res.ok) {
        setSubmitting(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error("Careers apply submit failed:", res.status, errorData);
        setSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Careers apply submit exception:", err);
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="apply-hero">
        <div className="apply-hero__decoration apply-hero__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="apply-hero__curve apply-hero__curve--1"
          />
        </div>
        <div className="apply-hero__decoration apply-hero__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="apply-hero__curve apply-hero__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="apply-hero__curve apply-hero__curve--3"
          />
        </div>

        <div className="container">
          <div className="apply-hero__content">
            {!submitted && (
              <RegionLink href="/careers" region={region} className="apply-hero__back">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                </svg>
                ← Back to Careers
              </RegionLink>
            )}
            <h1 className="apply-hero__title">
              {submitted ? (
                <>Thank <span className="apply-hero__highlight">You</span></>
              ) : (
                <>Apply to <span className="apply-hero__highlight">Teach</span></>
              )}
              <span className="apply-hero__star">
                <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </h1>
            <p className="apply-hero__subtitle">
              {submitted
                ? "Thank you for applying to join TutorExel! We have received your application and will review it carefully. You can expect to hear from us within 24 Hours."
                : "Fill in the short form below. We read every application and will contact you if your profile suits one of our current roles."
              }
            </p>
            {submitted && (
              <RegionLink href="/careers" region={region} className="btn btn-primary btn-lg" style={{ marginTop: 20 }}>
                Back to Careers
              </RegionLink>
            )}
          </div>
        </div>
      </section>

      {!submitted && (
        <section className="apply-form-section">
          <form onSubmit={handleSubmit} className="apply-form">
            <div className="apply-form__section">
              <div className="apply-form__section-header">
                <div className="apply-form__section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h2 className="apply-form__section-title">Personal Details</h2>
              </div>

              <div className="apply-form__grid">
                <div>
                  <label className="apply-form__label">Full Name *</label>
                  <input type="text" required className="apply-form__input" placeholder="e.g. Sarah Mitchell"
                    value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                </div>
                <div>
                  <label className="apply-form__label">Email Address *</label>
                  <input type="email" required className="apply-form__input" placeholder="sarah@example.com"
                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <label className="apply-form__label">Phone Number *</label>
                  <input type="tel" required className="apply-form__input" placeholder={phonePrefixes[region] || "+61 "}
                    value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <label className="apply-form__label">City &amp; Country *</label>
                  <input type="text" required className="apply-form__input" placeholder="e.g. Sydney, Australia"
                    value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                </div>
              </div>
            </div>

            <hr className="apply-form__divider" />

            <div className="apply-form__section">
              <div className="apply-form__section-header">
                <div className="apply-form__section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M6 2v20" />
                  </svg>
                </div>
                <h2 className="apply-form__section-title">Your Teaching Background</h2>
              </div>

              <div>
                <label className="apply-form__label">Subjects You Can Teach * (tick all that apply)</label>
                <div className="apply-form__checkbox-grid">
                  {subjectOptions.map((subj) => (
                    <label key={subj} className="apply-form__checkbox-item">
                      <input type="checkbox" checked={formData.subjects.includes(subj)}
                        onChange={() => handleSubjectToggle(subj)} />
                      <span>{subj}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="apply-form__grid" style={{ marginTop: "var(--spacing-5)" }}>
                <div>
                  <label className="apply-form__label">Highest Qualification *</label>
                  <select required className="apply-form__select" value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}>
                    <option value="">Choose your qualification</option>
                    <option value="Bachelor's degree">Bachelor&apos;s degree</option>
                    <option value="Master's degree">Master&apos;s degree</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="Teaching certificate or diploma">Teaching certificate or diploma</option>
                    <option value="Music qualification (for Piano or Guitar)">Music qualification (for Piano or Guitar)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="apply-form__label">Years of Teaching Experience *</label>
                  <select required className="apply-form__select" value={formData.yearsExperience}
                    onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}>
                    <option value="">Choose your experience</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1 to 2 years">1 to 2 years</option>
                    <option value="3 to 5 years">3 to 5 years</option>
                    <option value="6 to 10 years">6 to 10 years</option>
                    <option value="More than 10 years">More than 10 years</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: "var(--spacing-5)" }}>
                <label className="apply-form__label">Current Job or Role</label>
                <input type="text" className="apply-form__input" placeholder="School Teacher, Private Tutor"
                  value={formData.currentRole} onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })} />
              </div>
            </div>

            <hr className="apply-form__divider" />

            <div className="apply-form__section">
              <div className="apply-form__section-header">
                <div className="apply-form__section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                </div>
                <h2 className="apply-form__section-title">Your Setup and Schedule</h2>
              </div>

              <div className="apply-form__radio-group">
                <label className="apply-form__label">Do you have a working webcam and microphone? *</label>
                <div className="apply-form__radio-options">
                  <label className="apply-form__radio-item">
                    <input type="radio" name="hasWebcam" value="yes" required
                      checked={formData.hasWebcam === "yes"} onChange={(e) => setFormData({ ...formData, hasWebcam: e.target.value })} />
                    <span>Yes</span>
                  </label>
                  <label className="apply-form__radio-item">
                    <input type="radio" name="hasWebcam" value="no"
                      checked={formData.hasWebcam === "no"} onChange={(e) => setFormData({ ...formData, hasWebcam: e.target.value })} />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div className="apply-form__radio-group" style={{ marginTop: "var(--spacing-4)" }}>
                <label className="apply-form__label">Do you have a quiet, dedicated space for online teaching? *</label>
                <div className="apply-form__radio-options">
                  <label className="apply-form__radio-item">
                    <input type="radio" name="hasQuietSpace" value="yes" required
                      checked={formData.hasQuietSpace === "yes"} onChange={(e) => setFormData({ ...formData, hasQuietSpace: e.target.value })} />
                    <span>Yes</span>
                  </label>
                  <label className="apply-form__radio-item">
                    <input type="radio" name="hasQuietSpace" value="no"
                      checked={formData.hasQuietSpace === "no"} onChange={(e) => setFormData({ ...formData, hasQuietSpace: e.target.value })} />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div className="apply-form__grid" style={{ marginTop: "var(--spacing-5)" }}>
                <div>
                  <label className="apply-form__label">Internet Speed *</label>
                  <select required className="apply-form__select" value={formData.internetSpeed}
                    onChange={(e) => setFormData({ ...formData, internetSpeed: e.target.value })}>
                    <option value="">Choose your speed</option>
                    <option value="Under 10 Mbps">Under 10 Mbps</option>
                    <option value="10 to 25 Mbps">10 to 25 Mbps</option>
                    <option value="25 to 50 Mbps">25 to 50 Mbps</option>
                    <option value="Over 50 Mbps">Over 50 Mbps</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: "var(--spacing-5)" }}>
                <label className="apply-form__label">When Can You Teach? * (tick all that apply)</label>
                <div className="apply-form__checkbox-grid">
                  {availabilityOptions.map((slot) => (
                    <label key={slot} className="apply-form__checkbox-item">
                      <input type="checkbox" checked={formData.availability.includes(slot)}
                        onChange={() => handleAvailabilityToggle(slot)} />
                      <span>{slot}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <hr className="apply-form__divider" />

            <div className="apply-form__section">
              <div className="apply-form__section-header">
                <div className="apply-form__section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                </div>
                <h2 className="apply-form__section-title">CV &amp; Cover Letter</h2>
              </div>

              <div>
                <label className="apply-form__label">Upload Your CV *</label>
                <label className="apply-form__upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                  {formData.cv ? formData.cv.name : "Choose file (PDF, DOC, DOCX)"}
                  <input type="file" accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData({ ...formData, cv: e.target.files?.[0] || null })} />
                </label>
              </div>

              <div style={{ marginTop: "var(--spacing-5)" }}>
                <label className="apply-form__label">Cover Letter / Why You Want to Join TutorExel</label>
                <textarea rows={5} className="apply-form__textarea"
                  placeholder="Tell us about yourself, your teaching philosophy, and why you would be a great fit for TutorExel..."
                  value={formData.coverLetter} onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })} />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", margin: "16px 0" }}>
              <input
                type="checkbox"
                required
                checked={formData.agreedTerms}
                onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                style={{ marginTop: "3px", accentColor: "#d4654a" }}
              />
              <span style={{ fontSize: "13px", color: "#5a6b78", lineHeight: 1.5 }}>
                I agree to the{" "}
                <RegionLink href="/terms" region={region} target="_blank" style={{ color: "#d4654a", textDecoration: "none" }}>Terms &amp; Conditions</RegionLink>{" "}
                and{" "}
                <RegionLink href="/privacy" region={region} target="_blank" style={{ color: "#d4654a", textDecoration: "none" }}>Privacy Policy</RegionLink>
              </span>
            </div>

            <button type="submit" className="apply-form__submit" disabled={submitting}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
              </svg>
              {submitting ? "Sending..." : "Send My Application"}
            </button>

            <p className="apply-form__note">
              We read every application and reply to shortlisted candidates.
            </p>
          </form>
        </section>
      )}
    </>
  );
}
