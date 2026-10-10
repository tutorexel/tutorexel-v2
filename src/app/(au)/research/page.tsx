import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/utils/schema";
import CTA from "@/components/home/CTA";
import { buildMetadata } from "@/utils/seo";
import "./research.css";

export const metadata: Metadata = buildMetadata({
  path: "/research",
  region: "au",
});

export default function ResearchPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.tutorexel.com" },
    { name: "Research", url: "https://www.tutorexel.com/research" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ===== Hero Section ===== */}
      <section className="research-hero">
        <div className="container">
          <div className="research-hero__content">
            <h1 className="research-hero__title">Tutoring Research</h1>
            <p className="research-hero__subtitle">
              Evidence-based findings on how Australian families approach tutoring. Browse our reports on demand, costs, parent priorities and the rise of online learning.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Reports Grid ===== */}
      <section className="research-reports">
        <div className="container">
          <div className="research-reports__grid">
            <Link href="/research/australian-tutoring-report-2026" className="research-reports__card">
              <span className="research-reports__card-badge">RESEARCH REPORT</span>
              <h2 className="research-reports__card-title">2026 Australian Tutoring Report</h2>
              <p className="research-reports__card-description">
                Data-driven insights on Australian tutoring demand, pricing, parent preferences, online learning adoption, and NAPLAN preparation trends.
              </p>
              <span className="research-reports__card-meta">
                Published 2026 &middot; By TutorExel Research
              </span>
              <span className="research-reports__card-link">
                Read the Full Report &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <CTA
        region="au"
        title="Help Your Child Thrive"
        description="Families across Australia choose TutorExel to build confidence in maths, English and science. Book a free trial lesson today. No credit card needed."
        buttonText="Book a Free Trial"
      />
    </>
  );
}
