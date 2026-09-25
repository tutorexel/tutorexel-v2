"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { sendCareersWebhook } from "@/utils/webhook";
import "./apply.css";

const subjectOptions = [
  "Primary Maths (Years 2-6)",
  "Secondary Maths (Years 7-10)",
  "Primary English (Years 2-6)",
  "Secondary English (Years 7-10)",
  "Piano",
  "Guitar",
];

const availabilityOptions = [
  "Weekday Mornings (10 AM - 2 PM)",
  "Weekends",
];

export default function ApplyPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const webhookCalledRef = useRef(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "+61 ",
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
      // Create FormData to send file
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

      const res = await fetch("/api/careers-apply", {
        method: "POST",
        body: submitData,
      });

      if (res.ok) {
        const data = await res.json();

        // Send to webhook only once
        if (!webhookCalledRef.current) {
          webhookCalledRef.current = true;
          sendCareersWebhook({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            subjects: formData.subjects,
            qualification: formData.qualification,
            yearsExperience: formData.yearsExperience,
            currentRole: formData.currentRole,
            hasWebcam: formData.hasWebcam,
            hasQuietSpace: formData.hasQuietSpace,
            internetSpeed: formData.internetSpeed,
            availability: formData.availability,
            coverLetter: formData.coverLetter,
            cvUrl: data.cvUrl || "",
          }).catch(() => {});
        }

        setSubmitting(false);
        setSubmitted(true);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Hero */}
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
              <Link href="/careers" className="apply-hero__back">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                </svg>
                Back to Careers
              </Link>
            )}
            <h1 className="apply-hero__title">
              {submitted ? (
                <>Thank <span className="apply-hero__highlight">You</span></>
              ) : (
                <>Join Our <span className="apply-hero__highlight">Team</span></>
              )}
              <span className="apply-hero__star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="apply-hero__subtitle">
              {submitted
                ? "Thank you for applying to join TutorExel! We have received your application and will review it carefully. You can expect to hear from us within 24 Hours."
                : "Complete the application form below. We review every application and will be in touch within 24 hours if your profile matches our current openings."
              }
            </p>
            {submitted && (
              <Link href="/careers" className="btn btn-primary btn-lg" style={{ marginTop: 20 }}>
                Back to Careers
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {!submitted && (
      <section className="apply-form-section">
        <form onSubmit={handleSubmit} className="apply-form">
          {/* Section 1: Basic Details */}
          <div className="apply-form__section">
            <div className="apply-form__section-header">
              <div className="apply-form__section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="apply-form__section-title">Basic Details</h2>
            </div>

            <div className="apply-form__grid">
              <div>
                <label className="apply-form__label">Full Name *</label>
                <input type="text" required className="apply-form__input" placeholder="e.g. John Smith"
                  value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
              </div>
              <div>
                <label className="apply-form__label">Email Address *</label>
                <input type="email" required className="apply-form__input" placeholder="e.g. john@email.com"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label className="apply-form__label">Phone Number *</label>
                <input type="tel" required className="apply-form__input" placeholder="e.g. 0412 345 678"
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div>
                <label className="apply-form__label">Location (City/State) *</label>
                <input type="text" required className="apply-form__input" placeholder="e.g. Sydney, NSW"
                  value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-5)' }}>
              <label className="apply-form__label">Subjects You Can Teach *</label>
              <div className="apply-form__chips">
                {subjectOptions.map((subject) => (
                  <label key={subject} className={`apply-form__chip ${formData.subjects.includes(subject) ? 'apply-form__chip--active' : ''}`}>
                    <input type="checkbox" checked={formData.subjects.includes(subject)} onChange={() => handleSubjectToggle(subject)} />
                    {subject}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <hr className="apply-form__divider" />

          {/* Section 2: Education & Experience */}
          <div className="apply-form__section">
            <div className="apply-form__section-header">
              <div className="apply-form__section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 10 3 12 0v-5" />
                </svg>
              </div>
              <h2 className="apply-form__section-title">Education & Experience</h2>
            </div>

            <div className="apply-form__grid">
              <div>
                <label className="apply-form__label">Highest Qualification *</label>
                <select required className="apply-form__select" value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}>
                  <option value="" disabled>Select qualification</option>
                  <option value="bachelors-education">Bachelor of Education</option>
                  <option value="masters-education">Master of Education</option>
                  <option value="bachelors-other">Bachelor&apos;s Degree (other field)</option>
                  <option value="masters-other">Master&apos;s Degree (other field)</option>
                  <option value="diploma">Diploma in Education</option>
                  <option value="music-qualification">Music Degree/Diploma</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="apply-form__label">Years of Teaching Experience *</label>
                <select required className="apply-form__select" value={formData.yearsExperience}
                  onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}>
                  <option value="" disabled>Select experience</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div className="apply-form__grid--full">
                <label className="apply-form__label">Current Role / Position</label>
                <input type="text" className="apply-form__input" placeholder="e.g. Year 5 Teacher at XYZ School"
                  value={formData.currentRole} onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })} />
              </div>
            </div>
          </div>

          <hr className="apply-form__divider" />

          {/* Section 3: Technology */}
          <div className="apply-form__section">
            <div className="apply-form__section-header">
              <div className="apply-form__section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              </div>
              <h2 className="apply-form__section-title">Technology Requirements</h2>
            </div>

            <div className="apply-form__grid">
              <div>
                <label className="apply-form__label">Do you have a laptop or iPad? *</label>
                <select required className="apply-form__select" value={formData.hasWebcam}
                  onChange={(e) => setFormData({ ...formData, hasWebcam: e.target.value })}>
                  <option value="" disabled>Select</option>
                  <option value="laptop">Laptop</option>
                  <option value="ipad">iPad</option>
                </select>
              </div>
              <div>
                <label className="apply-form__label">Do you have a quiet teaching space? *</label>
                <select required className="apply-form__select" value={formData.hasQuietSpace}
                  onChange={(e) => setFormData({ ...formData, hasQuietSpace: e.target.value })}>
                  <option value="" disabled>Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="apply-form__grid--full">
                <label className="apply-form__label">Internet connection quality *</label>
                <select required className="apply-form__select" value={formData.internetSpeed}
                  onChange={(e) => setFormData({ ...formData, internetSpeed: e.target.value })}>
                  <option value="" disabled>Select</option>
                  <option value="excellent">Excellent (fibre/NBN)</option>
                  <option value="good">Good (reliable broadband)</option>
                  <option value="average">Average (sometimes drops)</option>
                  <option value="poor">Poor (frequent issues)</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-5)' }}>
              <label className="apply-form__label">Availability *</label>
              <div className="apply-form__chips">
                {availabilityOptions.map((slot) => (
                  <label key={slot} className={`apply-form__chip ${formData.availability.includes(slot) ? 'apply-form__chip--active' : ''}`}>
                    <input type="checkbox" checked={formData.availability.includes(slot)} onChange={() => handleAvailabilityToggle(slot)} />
                    {slot}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <hr className="apply-form__divider" />

          {/* Section 4: CV & Cover Letter */}
          <div className="apply-form__section">
            <div className="apply-form__section-header">
              <div className="apply-form__section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
                </svg>
              </div>
              <h2 className="apply-form__section-title">CV & Cover Letter</h2>
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

            <div style={{ marginTop: 'var(--spacing-5)' }}>
              <label className="apply-form__label">Cover Letter / Why You Want to Join TutorExel</label>
              <textarea rows={5} className="apply-form__textarea"
                placeholder="Tell us about yourself, your teaching philosophy, and why you would be a great fit for TutorExel..."
                value={formData.coverLetter} onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })} />
            </div>
          </div>

          <div style={{display:'flex',alignItems:'flex-start',gap:'8px',margin:'16px 0'}}>
            <input
              type="checkbox"
              required
              checked={formData.agreedTerms}
              onChange={(e) => setFormData({...formData, agreedTerms: e.target.checked})}
              style={{marginTop:'3px',accentColor:'#d4654a'}}
            />
            <span style={{fontSize:'13px',color:'#5a6b78',lineHeight:1.5}}>
              I agree to the{" "}
              <a href="/terms" target="_blank" style={{color:'#d4654a',textDecoration:'none'}}>Terms &amp; Conditions</a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" style={{color:'#d4654a',textDecoration:'none'}}>Privacy Policy</a>
            </span>
          </div>

          <button type="submit" className="apply-form__submit" disabled={submitting}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
            </svg>
            {submitting ? "Submitting..." : "Submit Application"}
          </button>

          <p className="apply-form__note">
            We review all applications and respond within 24 hours.
          </p>
        </form>
      </section>
      )}
    </>
  );
}
