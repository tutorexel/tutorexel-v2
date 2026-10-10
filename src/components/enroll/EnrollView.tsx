"use client";

import { useState, useMemo, Suspense, useRef, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import RegionLink from "@/components/shared/RegionLink";
import { REGIONS_CONFIG, type RegionCode } from "@/data/regions";
import Image from "next/image";
import { trackEnrollment } from "@/utils/analytics";
import { pushUTMToGHL } from "@/utils/utm";
import { computePricing, type ClassType, type Offering } from "@/lib/pricing";
import { COUNTRIES, type Country } from "@/components/shared/CountryTabs";
import "@/app/enroll/enroll.css";

interface AppliedCoupon {
  code: string;
  discountAmount: number;
  finalAmount: number;
}

const offeringOptions = [
  { value: "live-online-coaching", label: "Live Online Coaching" },
  { value: "co-curricular", label: "Co-Curricular" },
  { value: "premium-plan", label: "Premium Plan" },
];

function CheckCircleIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function EnrollUrlParams({
  onParams,
}: {
  onParams: (params: {
    offering: string;
    type: string;
    activity: string;
    currency: string;
    coupon: string;
  }) => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    onParams({
      offering: searchParams.get("offering") || "",
      type: searchParams.get("type") || "",
      activity: searchParams.get("activity") || "",
      currency: (searchParams.get("currency") || "").toUpperCase(),
      coupon: (searchParams.get("coupon") || "").trim().toUpperCase(),
    });
  }, [searchParams, onParams]);
  return null;
}

const defaultCallingCodes: Record<RegionCode, string> = {
  au: "+61 ",
  us: "+1 ",
  ca: "+1 ",
  nz: "+64 ",
};

function EnrollForm({ region }: { region?: RegionCode }) {
  const currentRegion: RegionCode = region || "au";
  const regConfig = REGIONS_CONFIG[currentRegion] || REGIONS_CONFIG.au;
  const isYearRegion = currentRegion === "au" || currentRegion === "nz";
  const yearLabel = isYearRegion ? "Year" : "Grade";
  const mathLabel = isYearRegion ? "Maths" : "Math";
  const yearGroupOptions = Array.from({ length: 9 }, (_, i) => `${yearLabel} ${i + 2}`);
  const helpWithOptions = [
    mathLabel,
    "English",
    "Science",
    "Piano",
    "Guitar",
    "Exam Preparation",
    "Free Trial Lesson or Assessment",
    "Not Sure Yet",
  ];

  const [couponParam, setCouponParam] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Country / currency selection defaults to current region
  const initialCountry =
    COUNTRIES.find((c) => c.code.toLowerCase() === currentRegion.toLowerCase()) ||
    COUNTRIES[0];
  const [selectedCountry, setSelectedCountry] = useState<Country>(initialCountry);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = COUNTRIES.find((c) => c.code === e.target.value);
    if (country) setSelectedCountry(country);
  };

  // Scroll to top when form is submitted successfully
  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: defaultCallingCodes[currentRegion] || "+61 ",
    studentName: "",
    yearGroup: "",
    helpWith: "",
    offering: "",
    classType: "",
    subjects: {
      Mathematics: false,
      English: false,
      Science: false,
    } as Record<string, boolean>,
    activities: {
      piano: false,
      guitar: false,
    } as Record<string, boolean>,
  });

  const handleUrlParams = useCallback(
    (params: {
      offering: string;
      type: string;
      activity: string;
      currency: string;
      coupon: string;
    }) => {
      if (params.currency) {
        const country = COUNTRIES.find((c) => c.currency === params.currency);
        if (country) setSelectedCountry(country);
      }
      if (params.coupon) {
        setCouponParam(params.coupon);
        setIntendedCoupon(params.coupon);
        setCouponInput(params.coupon);
      }
      if (params.offering || params.type || params.activity) {
        const shouldPreSelect =
          params.offering === "live-online-coaching" &&
          (params.type === "one-to-one" || params.type === "group");
        setFormData((prev) => ({
          ...prev,
          offering: params.offering || prev.offering,
          classType: params.type || prev.classType,
          subjects: shouldPreSelect
            ? { Mathematics: true, English: true, Science: false }
            : prev.subjects,
          activities: {
            piano: params.activity === "piano" || params.activity === "both",
            guitar: params.activity === "guitar" || params.activity === "both",
          },
        }));
      }
    },
    []
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const checked = target.checked;
      if (name === "piano" || name === "guitar") {
        setFormData((prev) => ({
          ...prev,
          activities: { ...prev.activities, [name]: checked },
        }));
      }
    } else {
      // Reset conditional fields when offering changes
      if (name === "offering") {
        setFormData((prev) => ({
          ...prev,
          offering: value,
          classType: "",
          subjects: { Mathematics: false, English: false, Science: false },
          activities: { piano: false, guitar: false },
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  // Dedicated handler for subject checkboxes
  const handleSubjectChange = (subject: "Mathematics" | "English" | "Science") => {
    setFormData((prev) => ({
      ...prev,
      subjects: {
        ...prev.subjects,
        [subject]: !prev.subjects[subject],
      },
    }));
  };

  // Calculate total amount via shared pricing lib (server can use the same fn
  // if it wants to re-derive the amount for the email).
  const pricing = useMemo(
    () =>
      computePricing({
        offering: formData.offering as Offering,
        classType: formData.classType as ClassType,
        subjects: formData.subjects,
        activities: formData.activities,
      }),
    [formData]
  );
  const totalAmount = pricing.total;

  // Coupon state.
  // intendedCoupon is the code we *want* applied  -  starts with the URL param,
  // becomes whatever the user types if they apply manually, becomes "" on remove.
  // A single effect (below) re-validates this against the current cart total
  // every time either changes. With no payment gateway, this discount is
  // informational only  -  it's included in the email so your team can honour
  // it manually when following up with the family.
  const [intendedCoupon, setIntendedCoupon] = useState(couponParam);
  const [couponInput, setCouponInput] = useState(couponParam);
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null);
  const [couponError, setCouponError] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);
  // Hides the "URL coupon" banner permanently once user has actively dismissed it.
  const [autoCouponDismissed, setAutoCouponDismissed] = useState(false);

  // Hydration safety: if useState captured an empty couponParam during SSR but
  // the URL actually has one on the client, sync it in once.
  useEffect(() => {
    if (couponParam && !intendedCoupon && !autoCouponDismissed) {
      setIntendedCoupon(couponParam);
      setCouponInput(couponParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [couponParam]);

  // Single source of truth: whenever the cart total or the intended coupon
  // changes, drop any previously-applied coupon and re-validate against the
  // current total. Cancellation prevents stale fetches from overwriting state.
  useEffect(() => {
    setAppliedCoupon(null);
    setCouponError("");

    if (totalAmount == null || totalAmount <= 0) return;
    if (!intendedCoupon) return;

    let cancelled = false;
    setCouponLoading(true);

    fetch("/api/coupons/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: intendedCoupon, cartTotal: totalAmount }),
    })
      .then(async (r) => {
        const data = (await r.json().catch(() => ({}))) as {
          valid?: boolean;
          code?: string;
          discountAmount?: number;
          finalAmount?: number;
          message?: string;
        };
        if (cancelled) return;
        if (!r.ok || !data.valid) {
          setCouponError(data.message || "Could not apply coupon.");
          return;
        }
        setAppliedCoupon({
          code: data.code || intendedCoupon,
          discountAmount: Number(data.discountAmount ?? 0),
          finalAmount: Number(data.finalAmount ?? totalAmount),
        });
        setCouponInput("");
      })
      .catch(() => {
        if (!cancelled) setCouponError("Network error. Try again.");
      })
      .finally(() => {
        if (!cancelled) setCouponLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [intendedCoupon, totalAmount]);

  function handleApplyCoupon() {
    const code = couponInput.trim().toUpperCase();
    if (!code) {
      setCouponError("Enter a coupon code.");
      return;
    }
    if (totalAmount == null || totalAmount <= 0) {
      setCouponError("Select a programme first.");
      return;
    }
    // Setting the intent triggers the effect above to (re-)apply.
    setIntendedCoupon(code);
  }

  function handleRemoveCoupon() {
    setIntendedCoupon("");
    // appliedCoupon will be cleared by the effect above.
    if (couponParam) setAutoCouponDismissed(true);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (submitting) return;

    setSubmitting(true);
    setSubmitError("");

    const subjects = Object.entries(formData.subjects)
      .filter(([, v]) => v)
      .map(([k]) => k);
    const activities = Object.entries(formData.activities)
      .filter(([, v]) => v)
      .map(([k]) => k);

    // Build plan details string based on offering type
    let planDetails = "";

    if (formData.offering === "live-online-coaching") {
      const classTypeLabel = formData.classType === "one-to-one" ? "One-to-One Session" : "Group Class (3:1)";
      planDetails = `Class Type: ${classTypeLabel}\nSubjects: ${subjects.join(", ")}`;
    } else if (formData.offering === "co-curricular") {
      const activityLabels = activities.map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(", ");
      planDetails = `Activities: ${activityLabels}`;
    } else if (formData.offering === "premium-plan") {
      planDetails = "Complete Learning Package - Maths, English & Science";
    }

    // Format offering name for display
    const offeringLabels: Record<string, string> = {
      "live-online-coaching": "Live Online Coaching",
      "co-curricular": "Co-Curricular",
      "premium-plan": "Premium Plan"
    };

    const submissionData = {
      parentName: formData.parentName,
      email: formData.email,
      phone: formData.phone,
      studentName: formData.studentName,
      yearGroup: formData.yearGroup,
      offering: offeringLabels[formData.offering] || formData.offering,
      planDetails: planDetails,
      totalAmount: totalAmount,
      region: currentRegion,
      // Display-only currency label the user selected  -  the numeric amount is
      // NOT converted, it's the same underlying price shown in every currency.
      displayCurrency: selectedCountry.currency,
      // Informational only  -  no payment is taken here, this just tells your
      // team what discount to honour manually when they follow up.
      couponCode: appliedCoupon ? appliedCoupon.code : null,
      discountAmount: appliedCoupon ? appliedCoupon.discountAmount : null,
      finalAmount: appliedCoupon ? appliedCoupon.finalAmount : null,
      // Raw selection, in case the email template wants to reconstruct details.
      pricingSelection: {
        offering: formData.offering,
        classType: formData.classType,
        subjects: formData.subjects,
        activities: formData.activities,
      },
    };

    try {
      // /api/enroll should simply email the enrolment details to your team  - 
      // no payment link is created or expected here.
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const data = await res.json().catch((err) => {
        console.error("[Enroll] Failed to parse response JSON:", err);
        return {};
      });

      if (!res.ok) {
        console.error("API Error:", data);
        throw new Error("Failed to submit enrolment");
      }

      // Track enrollment/lead conversion in GA4
      trackEnrollment(formData.offering, totalAmount);
      pushUTMToGHL(formData.email);

      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitting(false);
      setSubmitError(
        "Something went wrong. Please try again or contact us directly."
      );
    }
  };

  if (submitted) {
    return (
      <>
        <section className="enroll-hero">
          <div className="enroll-hero__decoration enroll-hero__decoration--left">
            <Image src="/images/about/left-line.webp" alt="" width={200} height={200} className="enroll-hero__curve--1" />
          </div>
          <div className="enroll-hero__decoration enroll-hero__decoration--right">
            <Image src="/images/about/star-design.webp" alt="" width={200} height={200} className="enroll-hero__curve--4" />
            <Image src="/images/about/right-line.webp" alt="" width={200} height={200} className="enroll-hero__curve--3" />
          </div>
          <div className="container">
            <div className="enroll-hero__content">
              <h1 className="enroll-hero__title">
                <span className="enroll-hero__title-highlight">Enroll</span> Now
                <span className="enroll-hero__title-star"><Image src="/images/banner/Vector-2.webp" alt="" width={20} height={20} /></span>
              </h1>
            </div>
          </div>
        </section>

        <section className="enroll-section">
          <div className="container">
            <div className="enroll-success">
              <div className="enroll-success__icon">
                <CheckCircleIcon />
              </div>
              <h2 className="enroll-success__title">Enrolment Submitted</h2>
              <p className="enroll-success__message">
                Thank you! Your details have been received.
                {totalAmount !== null && (
                  <> The fee for the programme is <strong className="enroll-success__fee">{selectedCountry.currency} ${appliedCoupon ? appliedCoupon.finalAmount.toFixed(2) : totalAmount}{formData.offering === "co-curricular" && Object.values(formData.activities).filter(Boolean).length === 1 ? "/session" : "/month"}</strong>.</>
                )} Our team will get back to you within 24 hours to confirm your enrolment and arrange next steps.
              </p>
              <div className="enroll-success__actions">
                <RegionLink href="/" region={region} className="btn btn-secondary btn-lg">
                  Back to Home
                </RegionLink>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Suspense fallback={null}>
        <EnrollUrlParams onParams={handleUrlParams} />
      </Suspense>
      <section className="enroll-hero">
        <div className="enroll-hero__decoration enroll-hero__decoration--left">
          <Image src="/images/about/left-line.webp" alt="" width={200} height={200} className="enroll-hero__curve--1" />
        </div>
        <div className="enroll-hero__decoration enroll-hero__decoration--right">
          <Image src="/images/about/star-design.webp" alt="" width={200} height={200} className="enroll-hero__curve--4" />
          <Image src="/images/about/right-line.webp" alt="" width={200} height={200} className="enroll-hero__curve--3" />
        </div>
        <div className="container">
          <div className="enroll-hero__content">
            <h1 className="enroll-hero__title">
              <span className="enroll-hero__title-highlight">Sign Up</span> Now
              <span className="enroll-hero__title-star"><Image src="/images/banner/Vector-2.webp" alt="" width={20} height={20} /></span>
            </h1>
            <p className="enroll-hero__subtitle">
              Complete the short form below and a member of our team will be in touch within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="enroll-section">
        <div className="container">
          <div className="enroll-form-wrapper">
            <form onSubmit={handleSubmit} className="enroll-form">
              <div className="enroll-form__card">
                <h2 className="enroll-form__title">Let&apos;s Get Started</h2>
                <p className="enroll-form__subtitle">
                  Tell us about your child and pick a learning plan.
                </p>

                {/* Auto-apply coupon banner: shown only when arriving via /enroll?coupon=CODE
                    AND the URL coupon is still the active intent (user hasn't typed a different one). */}
                {couponParam && !autoCouponDismissed && intendedCoupon === couponParam && (
                  <div
                    className={
                      couponError
                        ? "enroll-coupon-banner enroll-coupon-banner--error"
                        : appliedCoupon
                          ? "enroll-coupon-banner enroll-coupon-banner--success"
                          : "enroll-coupon-banner"
                    }
                  >
                    {appliedCoupon ? (
                      <>✓ Coupon <strong>{appliedCoupon.code}</strong> applied  -  you save ${appliedCoupon.discountAmount.toFixed(2)}.</>
                    ) : couponLoading ? (
                      <>Applying coupon <strong>{couponParam}</strong>…</>
                    ) : couponError ? (
                      <>Coupon <strong>{couponParam}</strong>: {couponError}</>
                    ) : totalAmount == null ? (
                      <>🎟️ Coupon <strong>{couponParam}</strong> ready  -  select a programme below to apply.</>
                    ) : (
                      <>🎟️ Coupon <strong>{couponParam}</strong> will be applied automatically.</>
                    )}
                  </div>
                )}

                {/* Parent's Name */}
                <div className="enroll-form__row">
                  <div className="enroll-form__field">
                    <label className="enroll-form__label">
                      Parent or Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="enroll-form__input"
                      placeholder="e.g. Sarah Johnson"
                    />
                  </div>

                  {/* Email */}
                  <div className="enroll-form__field">
                    <label className="enroll-form__label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="enroll-form__input"
                      placeholder="e.g. sarah@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Student Name */}
                <div className="enroll-form__row">
                  <div className="enroll-form__field">
                    <label className="enroll-form__label">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="enroll-form__input"
                      placeholder="e.g. 0412 345 678"
                    />
                  </div>

                  <div className="enroll-form__field">
                    <label className="enroll-form__label">
                      Student&apos;s First Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      className="enroll-form__input"
                      placeholder="e.g. Aiden"
                    />
                  </div>
                </div>

                {/* Year/Grade Level & Country */}
                <div className="enroll-form__row">
                  <div className="enroll-form__field">
                    <label className="enroll-form__label">{yearLabel} Level *</label>
                    <select
                      name="yearGroup"
                      required
                      value={formData.yearGroup}
                      onChange={handleChange}
                      className="enroll-form__select"
                    >
                      <option value="" disabled>
                        Select {yearLabel} Level
                      </option>
                      {yearGroupOptions.map((yr) => (
                        <option key={yr} value={yr}>
                          {yr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="enroll-form__field">
                    <label className="enroll-form__label">Country</label>
                    <select
                      name="country"
                      value={selectedCountry.code}
                      onChange={handleCountryChange}
                      className="enroll-form__select"
                    >
                      {COUNTRIES.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name} ({country.currency})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* What Would You Like Help With */}
                <div className="enroll-form__row">
                  <div className="enroll-form__field">
                    <label className="enroll-form__label">What Would You Like Help With? *</label>
                    <select
                      name="helpWith"
                      value={formData.helpWith}
                      onChange={handleChange}
                      className="enroll-form__select"
                    >
                      <option value="" disabled>
                        Select an Option
                      </option>
                      {helpWithOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Offering */}
                <div className="enroll-form__row">
                  <div className="enroll-form__field">
                    <label className="enroll-form__label">Our Offerings *</label>
                    <select
                      name="offering"
                      required
                      value={formData.offering}
                      onChange={handleChange}
                      className="enroll-form__select"
                    >
                      <option value="" disabled>
                        Select an Offering
                      </option>
                      {offeringOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Conditional: Live Online Coaching */}
                {formData.offering === "live-online-coaching" && (
                  <>
                    <div className="enroll-form__group">
                      <label className="enroll-form__label">
                        Preferred Class Type *
                      </label>
                      <div className="enroll-form__radio-group">
                        <label className="enroll-form__radio">
                          <input
                            type="radio"
                            name="classType"
                            value="one-to-one"
                            checked={formData.classType === "one-to-one"}
                            onChange={handleChange}
                            required
                          />
                          <span className="enroll-form__radio-label">
                            One-to-One Session
                          </span>
                        </label>
                        <label className="enroll-form__radio">
                          <input
                            type="radio"
                            name="classType"
                            value="group"
                            checked={formData.classType === "group"}
                            onChange={handleChange}
                          />
                          <span className="enroll-form__radio-label">
                            Group Class (3:1)
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="enroll-form__group">
                      <label className="enroll-form__label">
                        Subject(s) You&apos;re Interested In *
                      </label>
                      <div className="enroll-form__checkbox-group">
                        <label className="enroll-form__checkbox">
                          <input
                            type="checkbox"
                            name="Mathematics"
                            checked={formData.subjects.Mathematics}
                            onChange={() => handleSubjectChange("Mathematics")}
                          />
                          <span className="enroll-form__checkbox-label">
                            Mathematics
                          </span>
                        </label>
                        <label className="enroll-form__checkbox">
                          <input
                            type="checkbox"
                            name="English"
                            checked={formData.subjects.English}
                            onChange={() => handleSubjectChange("English")}
                          />
                          <span className="enroll-form__checkbox-label">
                            English
                          </span>
                        </label>
                        <label className="enroll-form__checkbox">
                          <input
                            type="checkbox"
                            name="Science"
                            checked={formData.subjects.Science}
                            onChange={() => handleSubjectChange("Science")}
                          />
                          <span className="enroll-form__checkbox-label">
                            Science
                          </span>
                        </label>
                      </div>
                    </div>
                  </>
                )}

                {/* Conditional: Co-Curricular */}
                {formData.offering === "co-curricular" && (
                  <div className="enroll-form__group">
                    <label className="enroll-form__label">
                      Activities You&apos;re Interested In *
                    </label>
                    <div className="enroll-form__checkbox-group">
                      <label className="enroll-form__checkbox">
                        <input
                          type="checkbox"
                          name="piano"
                          checked={formData.activities.piano || false}
                          onChange={handleChange}
                        />
                        <span className="enroll-form__checkbox-label">
                          Piano
                        </span>
                      </label>
                      <label className="enroll-form__checkbox">
                        <input
                          type="checkbox"
                          name="guitar"
                          checked={formData.activities.guitar || false}
                          onChange={handleChange}
                        />
                        <span className="enroll-form__checkbox-label">
                          Guitar
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Conditional: Premium Plan info */}
                {formData.offering === "premium-plan" && (
                  <div className="enroll-form__group">
                    <div className="enroll-form__info-card">
                      Your Premium Plan includes 12 live classes per month covering
                      Mathematics, English and Science, recorded session access, monthly
                      reports, and WhatsApp support.
                    </div>
                  </div>
                )}

                {/* Total Amount */}
                {totalAmount !== null ? (
                  <>
                    {appliedCoupon ? (
                      <div className="enroll-form__breakdown">
                        <div className="enroll-form__breakdown-row">
                          <span>Original Price</span>
                          <span>{selectedCountry.currency} ${totalAmount}</span>
                        </div>
                        <div className="enroll-form__breakdown-row enroll-form__breakdown-row--discount">
                          <span>
                            Coupon (<strong>{appliedCoupon.code}</strong>)
                            <button
                              type="button"
                              className="enroll-form__coupon-remove"
                              onClick={handleRemoveCoupon}
                              aria-label="Remove coupon"
                            >
                              ×
                            </button>
                          </span>
                          <span>−{selectedCountry.currency} ${appliedCoupon.discountAmount.toFixed(2)}</span>
                        </div>
                        <div className="enroll-form__total enroll-form__total--final">
                          <span className="enroll-form__total-label">Final Amount:</span>
                          <span className="enroll-form__total-amount">
                            {selectedCountry.currency} ${appliedCoupon.finalAmount.toFixed(2)}
                            <span className="enroll-form__total-period">
                              {pricing.period}
                            </span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="enroll-form__total">
                        <span className="enroll-form__total-label">Total Amount:</span>
                        <span className="enroll-form__total-amount">
                          {selectedCountry.currency} ${totalAmount}
                          <span className="enroll-form__total-period">
                            {pricing.period}
                          </span>
                        </span>
                      </div>
                    )}

                    {/* Apply Coupon */}
                    {!appliedCoupon && (
                      <div className="enroll-form__coupon">
                        <label className="enroll-form__coupon-label">Have a coupon code?</label>
                        <div className="enroll-form__coupon-row">
                          <input
                            type="text"
                            className="enroll-form__coupon-input"
                            placeholder="Enter coupon code"
                            value={couponInput}
                            onChange={(e) => {
                              setCouponInput(e.target.value.toUpperCase());
                              if (couponError) setCouponError("");
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                handleApplyCoupon();
                              }
                            }}
                            maxLength={32}
                            autoComplete="off"
                            disabled={couponLoading}
                          />
                          <button
                            type="button"
                            className="enroll-form__coupon-apply"
                            onClick={handleApplyCoupon}
                            disabled={couponLoading || !couponInput.trim()}
                          >
                            {couponLoading ? "Applying…" : "Apply"}
                          </button>
                        </div>
                        {couponError && (
                          <p className="enroll-form__coupon-error" role="alert">
                            {couponError}
                          </p>
                        )}
                      </div>
                    )}
                  </>
                ) : formData.offering === "live-online-coaching" && formData.classType ? (
                  <div className="enroll-form__total" style={{ color: '#999', fontSize: '14px' }}>
                    Select subject(s) to see total amount
                  </div>
                ) : null}
              </div>

              {submitError && (
                <p className="enroll-form__error">{submitError}</p>
              )}

              <div className="enroll-form__terms">
                <label className="enroll-form__checkbox">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    required
                  />
                  <span className="enroll-form__checkbox-label">
                    I agree to the{" "}
                    <RegionLink href="/terms" region={region} target="_blank">Terms &amp; Conditions</RegionLink>{" "}
                    and{" "}
                    <RegionLink href="/privacy" region={region} target="_blank">Privacy Policy</RegionLink>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="enroll-form__submit"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit My Details"}{" "}
                {!submitting && <ArrowRight />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default function EnrollView({ region }: { region?: RegionCode }) {
  return <EnrollForm region={region} />;
}