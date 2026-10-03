import { buildMetadata } from "@/utils/seo";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/utils/schema";
import CTA from "@/components/home/CTA";
import "./australian-tutoring-report-2026/report.css";

export const metadata = buildMetadata({
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
            <h1 className="research-hero__title">Research &amp; Reports</h1>
            <p className="research-hero__subtitle">
              Data-driven insights on the Australian tutoring industry. Explore our research reports on market trends, parent preferences, and the future of online education.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Reports Grid ===== */}
      <section className="research-reports">
        <div className="container">
          <div className="research-reports__grid">
            <Link href="/research/australian-tutoring-report-2026" className="research-reports__card">
              <span className="research-reports__card-badge">Research Report</span>
              <h2 className="research-reports__card-title">2026 State of Tutoring in Australia</h2>
              <p className="research-reports__card-description">
                Comprehensive research report on the Australian tutoring industry. Market size ($1.2B+), growth trends, parent preferences, online vs in-person data, NAPLAN impact analysis, year level demand, and pricing landscape.
              </p>
              <span className="research-reports__card-meta">Published March 2025 &middot; Updated for 2026 &middot; By TutorExel Research</span>
              <span className="research-reports__card-link">
                Read Full Report &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <CTA />
    </>
  );
}
