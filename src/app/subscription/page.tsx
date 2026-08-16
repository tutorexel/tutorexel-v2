import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import CTA from "@/components/home/CTA";
import "./subscription.css";

export const metadata: Metadata = {
  title: "Self Learning - eBooks, Worksheets & Mock Tests | TutorExel",
  description: "Self-paced learning resources for Years 2-7. Curriculum-aligned eBooks, practice worksheets, and mock tests. Subscribe monthly and learn at your own pace.",
  openGraph: {
    title: "Self Learning - eBooks, Worksheets & Mock Tests | TutorExel",
    description: "Self-paced learning resources for Years 2-7. Curriculum-aligned eBooks, practice worksheets, and mock tests.",
    url: "https://tutorexel.com/subscription",
    siteName: "TutorExel",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Learning - eBooks, Worksheets & Mock Tests | TutorExel",
    description: "Self-paced learning resources for Years 2-7. Curriculum-aligned eBooks, practice worksheets, and mock tests.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/subscription",
  },
};

const resources = [
  {
    icon: "\uD83D\uDCD8",
    title: "eBooks",
    description: "Comprehensive study guides for Maths and English, aligned to the Australian Curriculum. Each eBook covers a full term of content with clear explanations and worked examples.",
    features: ["Year 2-7 coverage", "Term-by-term structure", "Clear explanations", "Worked examples"],
  },
  {
    icon: "\uD83D\uDCDD",
    title: "Practice Worksheets",
    description: "Structured worksheets designed to reinforce concepts taught in the curriculum. Graded by difficulty so your child progresses at the right pace.",
    features: ["Lesson-by-lesson practice", "Graded difficulty levels", "Answer keys included", "Online practice format"],
  },
  {
    icon: "\uD83D\uDCCB",
    title: "Mock Tests",
    description: "NAPLAN-style practice tests and term assessments that mirror real exam conditions. Track your child's readiness and identify areas that need more attention.",
    features: ["NAPLAN-style format", "Timed practice tests", "Detailed answer guides", "Progress benchmarking"],
  },
];

const yearLevels = ["Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7"];

const benefits = [
  { title: "Learn at Your Own Pace", desc: "No schedules. No pressure. Your child works through materials whenever it suits them." },
  { title: "ACARA Curriculum Aligned", desc: "Every resource maps directly to what your child is learning at school." },
  { title: "Supplement Live Tutoring", desc: "Use alongside TutorExel live sessions or as standalone self-study material." },
  { title: "New Content Monthly", desc: "Fresh worksheets and mock tests added every month to keep learning current." },
  { title: "Instant Access", desc: "Download and start immediately. No waiting for a tutor or scheduling sessions." },
  { title: "Affordable", desc: "A fraction of the cost of live tutoring, with access to a full library of resources." },
];

export default function SubscriptionPage() {
  return (
    <>
      {/* Banner */}
      <section className="subscription-banner">
        <div className="subscription-banner__decoration subscription-banner__decoration--left">
          <Image src="/images/about/left-line.webp" alt="" width={200} height={200} className="subscription-banner__curve subscription-banner__curve--1" />
        </div>
        <div className="subscription-banner__decoration subscription-banner__decoration--right">
          <Image src="/images/about/star-design.webp" alt="" width={200} height={200} className="subscription-banner__curve subscription-banner__curve--4" />
          <Image src="/images/about/right-line.webp" alt="" width={200} height={200} className="subscription-banner__curve subscription-banner__curve--3" />
        </div>

        <div className="container">
          <div className="subscription-banner__content">
            <h1 className="subscription-banner__title">
              Self{" "}
              <span className="subscription-banner__title-highlight">Learning</span>{" "}
              <span className="subscription-banner__title-star">
                <Image src="/images/banner/Vector-2.webp" alt="Star" width={20} height={20} />
              </span>
            </h1>
            <p className="subscription-banner__subtitle">
              Curriculum-aligned eBooks, worksheets, and mock tests for <span style={{whiteSpace:"nowrap"}}>Years 2-7.</span>
            </p>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',marginTop:'20px',background:'rgba(212,101,74,0.1)',padding:'10px 24px',borderRadius:'24px',border:'1px solid rgba(212,101,74,0.2)'}}>
              <span style={{fontSize:'14px',color:'#d4654a',fontWeight:600}}>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section style={{padding:'48px 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'32px'}}>
            <p style={{fontSize:'13px',fontWeight:600,color:'#d4654a',textTransform:'uppercase',letterSpacing:'1px',marginBottom:'8px'}}>What You Get</p>
            <h2 style={{fontFamily:'var(--font-poppins)',fontSize:'32px',fontWeight:700,color:'#1a2e3b',marginBottom:'12px'}}>Everything Your Child Needs to Study Independently</h2>
            <p style={{fontSize:'15px',color:'#5a6b78',maxWidth:'600px',margin:'0 auto'}}>
              A complete self-study toolkit built around the Australian National Curriculum. New resources added every month.
            </p>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'20px'}}>
            {resources.map((r) => (
              <div key={r.title} style={{background:'#fff',border:'1px solid #efe9df',borderRadius:'12px',padding:'28px',transition:'box-shadow .2s'}}>
                <div style={{fontSize:'36px',marginBottom:'12px'}}>{r.icon}</div>
                <h3 style={{fontSize:'20px',fontWeight:700,color:'#1a2e3b',marginBottom:'8px'}}>{r.title}</h3>
                <p style={{fontSize:'14px',color:'#5a6b78',lineHeight:1.6,marginBottom:'16px'}}>{r.description}</p>
                <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
                  {r.features.map((f) => (
                    <div key={f} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'13px',color:'#5a6b78'}}>
                      <span style={{color:'#4CAF50',fontSize:'16px'}}>{"\u2713"}</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year Levels */}
      <section style={{padding:'48px 0',background:'#f7f5f0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'28px'}}>
            <h2 style={{fontFamily:'var(--font-poppins)',fontSize:'28px',fontWeight:700,color:'#1a2e3b',marginBottom:'8px'}}>Available for Years 2-7</h2>
            <p style={{fontSize:'14px',color:'#5a6b78'}}>Resources for both Maths and English at every year level</p>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}>
            {yearLevels.map((y) => (
              <div key={y} style={{background:'#fff',border:'1px solid #e4e0d8',borderRadius:'8px',padding:'14px 24px',fontWeight:600,fontSize:'15px',color:'#1a2e3b'}}>
                {y}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Self Learning */}
      <section style={{padding:'48px 0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'32px'}}>
            <p style={{fontSize:'13px',fontWeight:600,color:'#3d8b7a',textTransform:'uppercase',letterSpacing:'1px',marginBottom:'8px'}}>Why Self Learning?</p>
            <h2 style={{fontFamily:'var(--font-poppins)',fontSize:'28px',fontWeight:700,color:'#1a2e3b'}}>Study Smarter, Not Harder</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'16px',maxWidth:'900px',margin:'0 auto'}}>
            {benefits.map((b) => (
              <div key={b.title} style={{background:'#f7f5f0',borderRadius:'10px',padding:'20px',borderLeft:'3px solid #3d8b7a'}}>
                <div style={{fontWeight:700,fontSize:'15px',color:'#1a2e3b',marginBottom:'4px'}}>{b.title}</div>
                <div style={{fontSize:'13px',color:'#5a6b78',lineHeight:1.6}}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{padding:'48px 0',background:'#f7f5f0',color:'#1a2e3b'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'32px'}}>
            <h2 style={{fontFamily:'var(--font-poppins)',fontSize:'28px',fontWeight:700,marginBottom:'8px'}}>How It Works</h2>
            <p style={{fontSize:'14px',color:'#5a6b78'}}>Three simple steps to get started</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'20px',maxWidth:'750px',margin:'0 auto'}}>
            <div style={{textAlign:'center'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'#d4654a',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',fontSize:'20px',fontWeight:700}}>1</div>
              <h3 style={{fontSize:'16px',fontWeight:700,marginBottom:'4px'}}>Subscribe</h3>
              <p style={{fontSize:'13px',color:'#5a6b78'}}>Choose your plan and get instant access to the full resource library</p>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'#3d8b7a',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',fontSize:'20px',fontWeight:700}}>2</div>
              <h3 style={{fontSize:'16px',fontWeight:700,marginBottom:'4px'}}>Download</h3>
              <p style={{fontSize:'13px',color:'#5a6b78'}}>Pick your year level and subject. Download eBooks, worksheets, and tests.</p>
            </div>
            <div style={{textAlign:'center'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'#c4963a',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',fontSize:'20px',fontWeight:700}}>3</div>
              <h3 style={{fontSize:'16px',fontWeight:700,marginBottom:'4px'}}>Learn & Practice</h3>
              <p style={{fontSize:'13px',color:'#5a6b78'}}>Work through materials at your own pace. Track progress with mock tests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
