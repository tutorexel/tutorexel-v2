"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { REGIONS, REGIONS_CONFIG, COMPANY_ADDRESS } from "@/data/regions";
import { useFreeTrialModal } from "./FreeTrialModalProvider";
import { FREE_ASSESSMENT_URL } from "@/utils/externalLinks";
import { getRegionalHref, getCurrentRegion, getYearHubHref } from "@/utils/regionalLinks";
import ProvinceChips from "@/components/shared/ProvinceChips";
import "./Footer.css";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61579444003084&rdid=qshk54k5w9JwWLWL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Za9NLXEqM%2F#", icon: "/images/footer/Facebook.webp" },
  { name: "Instagram", href: "https://www.instagram.com/tutorexellearning?igsh=MWNrejdyMWtyd2lsOQ%3D%3D%20https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Za9NLXEqM%2F", icon: "/images/footer/Instragarm.webp" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/tutor-exel", icon: "/images/footer/Linkedin.webp" },
  // { name: "Twitter", href: "#", icon: "/images/footer/Twitter.webp" },
  // { name: "YouTube", href: "#", icon: "/images/footer/YouTube.webp" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Subjects", href: "/subjects" },
  { label: "Co-Curricular", href: "/co-curricular" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "Blog", href: "/blog" },
];

const supportLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Cancellation Policy", href: "/refund" },
];

const usExamPrepFooterItems = [
  { label: "State Tests", href: "/exam-prep/state-tests" },
  { label: "STAAR (Texas)", href: "/exam-prep/staar" },
  { label: "CAASPP (California)", href: "/exam-prep/caaspp" },
  { label: "FAST (Florida)", href: "/exam-prep/fast" },
  { label: "CogAT (Gifted and Talented)", href: "/exam-prep/cogat" },
  { label: "MAP Growth", href: "/exam-prep/map-growth" },
];

const usOnlineTutoringFooterItems = [
  { label: "New York", href: "/online-tutoring/new-york" },
  { label: "Los Angeles", href: "/online-tutoring/los-angeles" },
  { label: "San Diego", href: "/online-tutoring/san-diego" },
  { label: "San Jose", href: "/online-tutoring/san-jose" },
  { label: "Chicago", href: "/online-tutoring/chicago" },
  { label: "Houston", href: "/online-tutoring/houston" },
  { label: "Dallas", href: "/online-tutoring/dallas" },
  { label: "Miami", href: "/online-tutoring/miami" },
];

const caExamPrepFooterItems = [
  { label: "EQAO", href: "/exam-prep/eqao" },
  { label: "OSSLT", href: "/exam-prep/osslt" },
  { label: "Alberta PATs", href: "/exam-prep/pat" },
  { label: "BC FSA", href: "/exam-prep/fsa" },
  { label: "Gifted", href: "/exam-prep/gifted" },
];

const caOnlineTutoringFooterItems = [
  { label: "Toronto", href: "/online-tutoring/toronto" },
  { label: "Ottawa", href: "/online-tutoring/ottawa" },
  { label: "Mississauga", href: "/online-tutoring/mississauga" },
  { label: "Brampton", href: "/online-tutoring/brampton" },
  { label: "Vancouver", href: "/online-tutoring/vancouver" },
  { label: "Calgary", href: "/online-tutoring/calgary" },
  { label: "Edmonton", href: "/online-tutoring/edmonton" },
];

const nzExamPrepFooterItems = [
  { label: "PAT", href: "/exam-prep/pat" },
  { label: "e-asTTle", href: "/exam-prep/e-asttle" },
  { label: "ICAS", href: "/exam-prep/icas" },
  { label: "NCEA", href: "/exam-prep/ncea" },
];

const nzOnlineTutoringFooterItems = [
  { label: "Auckland", href: "/online-tutoring/auckland" },
  { label: "Wellington", href: "/online-tutoring/wellington" },
  { label: "Christchurch", href: "/online-tutoring/christchurch" },
  { label: "Hamilton", href: "/online-tutoring/hamilton" },
  { label: "Tauranga", href: "/online-tutoring/tauranga" },
  { label: "Dunedin", href: "/online-tutoring/dunedin" },
];

const auExamPrepFooterItems = [
  { label: "NAPLAN", href: "/naplan-preparation" },
  { label: "ICAS", href: "/exam-prep/icas" },
  { label: "OC Test", href: "/exam-prep/oc-test" },
  { label: "Selective", href: "/exam-prep/selective" },
  { label: "Scholarship", href: "/exam-prep/scholarship" },
];

const auOnlineTutoringFooterItems = [
  { label: "Sydney", href: "/online-tutoring/sydney" },
  { label: "Melbourne", href: "/online-tutoring/melbourne" },
  { label: "Brisbane", href: "/online-tutoring/brisbane" },
  { label: "Perth", href: "/online-tutoring/perth" },
  { label: "Adelaide", href: "/online-tutoring/adelaide" },
  { label: "Gold Coast", href: "/online-tutoring/gold-coast" },
  { label: "Canberra", href: "/online-tutoring/canberra" },
];

export default function Footer() {
  const { open: openTrialModal } = useFreeTrialModal();
  const pathname = usePathname() || "";
  const toHref = (path: string) => getRegionalHref(path, pathname);

  const currentRegionCode = getCurrentRegion(pathname);
  const currentRegion = REGIONS.find((r) => r.code === currentRegionCode) || REGIONS[0];
  const config = REGIONS_CONFIG[currentRegionCode] || REGIONS_CONFIG.au;

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className={`footer__grid${currentRegionCode === "us" ? " footer__grid--us" : currentRegionCode === "ca" ? " footer__grid--ca" : currentRegionCode === "nz" ? " footer__grid--nz" : " footer__grid--au"}`}>
            {/* Brand Column */}
            <div className="footer__brand">
              <Link href={toHref("/")} className="footer__logo">
                <Image
                  src="/images/footer/footer-logo.webp"
                  alt="TutorExel"
                  className="footer__logo-img"
                  width={150}
                  height={40}
                />
              </Link>
              <p className="footer__description">
                Online Tutoring Across excellence. Helping
                students achieve their full potential through {config.spellingPersonalised},
                curriculum-aligned education.
              </p>
              {currentRegionCode !== "ca" && (
                <div className="footer__countries">
                  <div className="footer__country">
                    <Image
                      src={currentRegion.flagUrl}
                      alt={`${currentRegion.label} flag`}
                      width={22}
                      height={15}
                      className="footer__country-flag"
                      unoptimized
                    />
                    <span className="footer__country-name">{currentRegion.label}</span>
                  </div>
                </div>
              )}
              {currentRegionCode === "ca" && (
                <div className="footer__provinces">
                  <ProvinceChips />
                </div>
              )}
              <div className="footer__social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="social-link"
                    aria-label={social.name}
                  >
                    <Image src={social.icon} alt={social.name} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links">
              <h4 className="footer__links-title">Quick Links</h4>
              <div className="footer__links-list">
                {quickLinks.map((link) => (
                  <Link key={link.label} href={toHref(link.href)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* US-only: Exam Prep & Online Tutoring */}
            {currentRegionCode === "us" && (
              <>
                <div className="footer__links">
                  <h4 className="footer__links-title">Exam Prep</h4>
                  <div className="footer__links-list">
                    {usExamPrepFooterItems.map((item) => (
                      <Link key={item.href} href={toHref(item.href)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="footer__links">
                  <h4 className="footer__links-title">Online Tutoring</h4>
                  <div className="footer__links-list">
                    {usOnlineTutoringFooterItems.map((item) => (
                      <Link key={item.href} href={toHref(item.href)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* CA-only: Exam Prep & Online Tutoring */}
            {currentRegionCode === "ca" && (
              <>
                <div className="footer__links">
                  <h4 className="footer__links-title">Exam Prep</h4>
                  <div className="footer__links-list">
                    {caExamPrepFooterItems.map((item) => (
                      <Link key={item.href} href={toHref(item.href)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="footer__links">
                  <h4 className="footer__links-title">Online Tutoring</h4>
                  <div className="footer__links-list">
                    {caOnlineTutoringFooterItems.map((item) => (
                      <Link key={item.href} href={toHref(item.href)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* NZ-only: Exam Prep & Online Tutoring */}
            {currentRegionCode === "nz" && (
              <>
                <div className="footer__links">
                  <h4 className="footer__links-title">Exam Prep</h4>
                  <div className="footer__links-list">
                    {nzExamPrepFooterItems.map((item) => (
                      <Link key={item.href} href={toHref(item.href)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="footer__links">
                  <h4 className="footer__links-title">Online Tutoring</h4>
                  <div className="footer__links-list">
                    {nzOnlineTutoringFooterItems.map((item) => (
                      <Link key={item.href} href={toHref(item.href)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* AU: Exam Prep & Online Tutoring */}
            {currentRegionCode === "au" && (
              <>
                <div className="footer__links">
                  <h4 className="footer__links-title">Exam Prep</h4>
                  <div className="footer__links-list">
                    {auExamPrepFooterItems.map((item) => (
                      <Link key={item.href} href={toHref(item.href)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="footer__links">
                  <h4 className="footer__links-title">Online Tutoring</h4>
                  <div className="footer__links-list">
                    {auOnlineTutoringFooterItems.map((item) => (
                      <Link key={item.href} href={toHref(item.href)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Support */}
            <div className="footer__links">
              <h4 className="footer__links-title">Support</h4>
              <div className="footer__links-list">
                {/* Free Trial - Opens Calendly modal */}
                <button
                  type="button"
                  onClick={openTrialModal}
                  className="footer__link-button"
                >
                  Free Trial
                </button>
                {/* Free Assessment - External link (new tab) */}
                <a
                  href={FREE_ASSESSMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Free Assessment
                </a>
                {supportLinks.map((link) => (
                  <Link key={link.label} href={toHref(link.href)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="footer__links">
              <h4 className="footer__links-title">Legal</h4>
              <div className="footer__links-list">
                {legalLinks.map((link) => (
                  <Link key={link.label} href={toHref(link.href)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {config.yearLevels && config.yearLevels.length > 0 && (
            <div className="footer__grades-row">
              <span className="footer__grades-label">
                {config.yearLabel === "Grade" ? "Grades:" : "Years:"}
              </span>
              <div className="footer__grades-links">
                {config.yearLevels.map((lvl) => (
                  <Link
                    key={lvl}
                    href={toHref(getYearHubHref(lvl, currentRegionCode))}
                    className="footer__grade-link"
                  >
                    {config.yearLabel} {lvl}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Copyright - Outside container for full width background */}
      <div className="footer__bottom">
        <div className="container">
          <address className="footer__address">
            {COMPANY_ADDRESS}
          </address>
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} TutorExel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
