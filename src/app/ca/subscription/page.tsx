import Image from "next/image";
import { buildMetadata } from "@/utils/seo";
import CTA from "@/components/home/CTA";
import "@/app/subscription/subscription.css";

export const metadata = buildMetadata({
  path: "/subscription",
  region: "ca",
});

const resources = [
  {
    icon: "\uD83D\uDCD8",
    title: "eBooks",
    description:
      "Clear study guides for Math and English, matched to the Ontario and B.C. curricula. Each eBook covers one school term with simple explanations and worked examples.",
    features: [
      "Grades 2 to 10 covered",
      "Organized by school term",
      "Plain-English explanations",
      "Worked examples in every topic",
    ],
  },
  {
    icon: "\uD83D\uDCDD",
    title: "Practice Worksheets",
    description:
      "Worksheets that reinforce what your child learns in class. They start easy and build in difficulty, so progress feels steady and achievable.",
    features: [
      "Practice for every lesson",
      "Three levels of difficulty",
      "Answer keys included",
      "Print or complete online",
    ],
  },
  {
    icon: "\uD83D\uDCCB",
    title: "Mock Tests",
    description:
      "EQAO-style practice for Grades 3 and 6, FSA-style practice for Grades 4 and 7, plus term tests for every grade level. Build test confidence and spot the topics that need more work.",
    features: [
      "EQAO and FSA-style online format",
      "Timed practice tests",
      "Step-by-step answer guides",
      "Term-to-term progress tracking",
    ],
  },
];

const yearLevels = [
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
];

const benefits = [
  {
    title: "Learn at Your Own Pace",
    desc: "No timetable and no pressure. Your child studies whenever it suits your family, from after school to the weekend.",
  },
  {
    title: "Matched to the Curriculum",
    desc: "Every resource follows the Ontario and B.C. curricula, so it lines up with what your child covers at school.",
  },
  {
    title: "Pairs with Live Tutoring",
    desc: "Use it alongside TutorExel live lessons for extra practice, or on its own as a self-study library.",
  },
  {
    title: "New Content Every Month",
    desc: "Fresh worksheets and mock tests arrive each month, so practice keeps pace with the school year.",
  },
  {
    title: "Start Straight Away",
    desc: "Download and begin at once. There is no waiting for a tutor or booking a time.",
  },
  {
    title: "Great Value",
    desc: "Far less than live tutoring, with a full library of resources included.",
  },
];

export default function SubscriptionPage() {
  return (
    <>
      {/* Banner */}
      <section className="subscription-banner">
        <div className="subscription-banner__decoration subscription-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="subscription-banner__curve subscription-banner__curve--1"
          />
        </div>
        <div className="subscription-banner__decoration subscription-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="subscription-banner__curve subscription-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="subscription-banner__curve subscription-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="subscription-banner__content">
            <h1 className="subscription-banner__title">
              Self{" "}
              <span className="subscription-banner__title-highlight">Learning</span>{" "}
              <span className="subscription-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </h1>
            <p className="subscription-banner__subtitle">
              Curriculum eBooks, worksheets and mock tests for Grades 2 to 10.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
                background: "rgba(212,101,74,0.1)",
                padding: "10px 24px",
                borderRadius: "24px",
                border: "1px solid rgba(212,101,74,0.2)",
              }}
            >
              <span style={{ fontSize: "14px", color: "#d4654a", fontWeight: 600 }}>
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section style={{ padding: "48px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#d4654a",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              WHAT YOU GET
            </p>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "32px",
                fontWeight: 700,
                color: "#1a2e3b",
                marginBottom: "12px",
              }}
            >
              Everything Your Child Needs to Study on Their Own
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#5a6b78",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              A self-study toolkit built around the provincial curricula. New resources are added every month.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "20px",
            }}
          >
            {resources.map((r) => (
              <div
                key={r.title}
                style={{
                  background: "#fff",
                  border: "1px solid #efe9df",
                  borderRadius: "12px",
                  padding: "28px",
                  transition: "box-shadow .2s",
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{r.icon}</div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1a2e3b",
                    marginBottom: "8px",
                  }}
                >
                  {r.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#5a6b78",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                  }}
                >
                  {r.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {r.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#5a6b78",
                      }}
                    >
                      <span style={{ color: "#4CAF50", fontSize: "16px" }}>{"✓"}</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available for Grades 2 to 10 */}
      <section style={{ padding: "48px 0", background: "#f7f5f0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "28px",
                fontWeight: 700,
                color: "#1a2e3b",
                marginBottom: "8px",
              }}
            >
              Available for Grades 2 to 10
            </h2>
            <p style={{ fontSize: "14px", color: "#5a6b78" }}>
              Math and English resources at every grade level
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {yearLevels.map((y) => (
              <div
                key={y}
                style={{
                  background: "#fff",
                  border: "1px solid #e4e0d8",
                  borderRadius: "8px",
                  padding: "14px 24px",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#1a2e3b",
                }}
              >
                {y}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Self Learning */}
      <section style={{ padding: "48px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#3d8b7a",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              WHY SELF LEARNING?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "28px",
                fontWeight: 700,
                color: "#1a2e3b",
              }}
            >
              Study Smarter, Not Harder
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "16px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {benefits.map((b) => (
              <div
                key={b.title}
                style={{
                  background: "#f7f5f0",
                  borderRadius: "10px",
                  padding: "20px",
                  borderLeft: "3px solid #3d8b7a",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#1a2e3b",
                    marginBottom: "4px",
                  }}
                >
                  {b.title}
                </div>
                <div style={{ fontSize: "13px", color: "#5a6b78", lineHeight: 1.6 }}>
                  {b.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "48px 0", background: "#f7f5f0", color: "#1a2e3b" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "28px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              How It Works
            </h2>
            <p style={{ fontSize: "14px", color: "#5a6b78" }}>Three simple steps to get started</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              maxWidth: "750px",
              margin: "0 auto",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#d4654a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>
                Subscribe
              </h3>
              <p style={{ fontSize: "13px", color: "#5a6b78" }}>
                Choose a plan and unlock the whole resource library straight away.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#3d8b7a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>
                Download
              </h3>
              <p style={{ fontSize: "13px", color: "#5a6b78" }}>
                Pick your child&apos;s grade level and subject, then download the eBooks, worksheets and tests.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#c4963a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>
                Study and Practise
              </h3>
              <p style={{ fontSize: "13px", color: "#5a6b78" }}>
                Work through the materials at your own pace and use the mock tests to see how your child is going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA region="ca" />
    </>
  );
}
