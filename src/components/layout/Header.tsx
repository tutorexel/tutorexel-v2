"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { trackPhoneClick, trackEnrollClick } from "@/utils/analytics";
import { LOGIN_URL } from "@/utils/externalLinks";
import { getRegionalHref, getCurrentRegion, getSubjectHref, getYearHubHref } from "@/utils/regionalLinks";
import { REGIONS_CONFIG } from "@/data/regions";
import "./Header.css";

interface NavLinkItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  hasDropdown?: boolean;
  auOnly?: boolean;
  regions?: ("au" | "ca" | "us" | "nz")[];
}

const navLinks: NavLinkItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Subjects", href: "/subjects", hasMegaMenu: true },
  { label: "Exam Prep", href: "/exam-prep", regions: ["au", "ca", "nz", "us"], hasDropdown: true },
  { label: "Co-Curricular", href: "/co-curricular", hasDropdown: true },
  { label: "Online Tutoring", href: "/online-tutoring", regions: ["au", "ca", "nz", "us"], hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const auExamPrepItems = [
  { label: "NAPLAN", href: "/naplan-preparation" },
  { label: "ICAS", href: "/exam-prep/icas" },
  { label: "OC Test", href: "/exam-prep/oc-test" },
  { label: "Selective", href: "/exam-prep/selective" },
  { label: "Scholarship", href: "/exam-prep/scholarship" },
];

const caExamPrepItems = [
  { label: "EQAO", href: "/exam-prep/eqao" },
  { label: "OSSLT", href: "/exam-prep/osslt" },
  { label: "Alberta PATs", href: "/exam-prep/pat" },
  { label: "BC FSA", href: "/exam-prep/fsa" },
  { label: "Gifted", href: "/exam-prep/gifted" },
];

const nzExamPrepItems = [
  { label: "PAT", href: "/exam-prep/pat" },
  { label: "e-asTTle", href: "/exam-prep/e-asttle" },
  { label: "ICAS", href: "/exam-prep/icas" },
  { label: "NCEA", href: "/exam-prep/ncea" },
];

const usExamPrepItems = [
  { label: "State Tests", href: "/exam-prep/state-tests" },
  { label: "STAAR (Texas)", href: "/exam-prep/staar" },
  { label: "CAASPP (California)", href: "/exam-prep/caaspp" },
  { label: "FAST (Florida)", href: "/exam-prep/fast" },
  { label: "CogAT (Gifted and Talented)", href: "/exam-prep/cogat" },
  { label: "MAP Growth", href: "/exam-prep/map-growth" },
];

const auOnlineTutoringItems = [
  { label: "Sydney", href: "/online-tutoring/sydney" },
  { label: "Melbourne", href: "/online-tutoring/melbourne" },
  { label: "Brisbane", href: "/online-tutoring/brisbane" },
  { label: "Perth", href: "/online-tutoring/perth" },
  { label: "Adelaide", href: "/online-tutoring/adelaide" },
];

const caOnlineTutoringItems = [
  { label: "Toronto", href: "/online-tutoring/toronto" },
  { label: "Ottawa", href: "/online-tutoring/ottawa" },
  { label: "Mississauga", href: "/online-tutoring/mississauga" },
  { label: "Brampton", href: "/online-tutoring/brampton" },
  { label: "Vancouver", href: "/online-tutoring/vancouver" },
  { label: "Calgary", href: "/online-tutoring/calgary" },
  { label: "Edmonton", href: "/online-tutoring/edmonton" },
];

const nzOnlineTutoringItems = [
  { label: "Auckland", href: "/online-tutoring/auckland" },
  { label: "Wellington", href: "/online-tutoring/wellington" },
  { label: "Christchurch", href: "/online-tutoring/christchurch" },
  { label: "Hamilton", href: "/online-tutoring/hamilton" },
  { label: "Dunedin", href: "/online-tutoring/dunedin" },
];

const usOnlineTutoringItems = [
  { label: "New York", href: "/online-tutoring/new-york" },
  { label: "Los Angeles", href: "/online-tutoring/los-angeles" },
  { label: "San Diego", href: "/online-tutoring/san-diego" },
  { label: "San Jose", href: "/online-tutoring/san-jose" },
  { label: "Chicago", href: "/online-tutoring/chicago" },
  { label: "Houston", href: "/online-tutoring/houston" },
  { label: "Dallas", href: "/online-tutoring/dallas" },
  { label: "Miami", href: "/online-tutoring/miami" },
];

const coCurricularItems = [
  { label: "Piano", href: "/co-curricular/piano" },
  { label: "Guitar", href: "/co-curricular/guitar" },
];



export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "";
  const currentRegion = getCurrentRegion(pathname);
  const config = REGIONS_CONFIG[currentRegion] || REGIONS_CONFIG.au;
  const levelWord = config.yearLabel;
  const mathLabel = config.mathLabel;

  const subjectYears = config.yearLevels.map((lvl) => ({
    year: `${levelWord} ${lvl}`,
    lvl,
  }));

  const toHref = (path: string) => getRegionalHref(path, pathname);

  const isActive = (href: string) => {
    const regionalTarget = toHref(href);
    if (
      regionalTarget === "/" ||
      regionalTarget === "/us" ||
      regionalTarget === "/ca" ||
      regionalTarget === "/nz"
    ) {
      return pathname === regionalTarget || pathname === `${regionalTarget}/`;
    }
    if (href === "/exam-prep" && pathname.startsWith("/naplan-preparation")) {
      return true;
    }
    return pathname.startsWith(regionalTarget);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link href={toHref("/")} className="navbar__logo">
          <Image
            src="/images/banner/Header_Logo.webp"
            alt="TutorExel"
            width={150}
            height={40}
            style={{ height: 40, width: "auto" }}
            priority
          />
        </Link>

        <ul className={`navbar__menu${menuOpen ? " navbar__menu--open" : ""}`}>
          {navLinks
            .filter((link) => {
              if (link.regions) return link.regions.includes(currentRegion);
              if (link.auOnly) return currentRegion === "au";
              return true;
            })
            .map((link) => {
              const isDropdown = Boolean(link.hasDropdown);
              return (
              <li
                key={link.label}
                className={
                  link.hasMegaMenu
                    ? "navbar__item--has-mega"
                    : isDropdown
                      ? "navbar__item--has-dropdown"
                      : ""
                }
              >
                <Link
                  href={toHref(link.href)}
                  className={`navbar__link${isActive(link.href) ? " navbar__link--active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  {(link.hasMegaMenu || isDropdown) && (
                    <svg className="navbar__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </Link>

                {link.hasMegaMenu && (
                  <div className="navbar__mega">
                    <div className="navbar__mega-inner">
                      {subjectYears.map((sy) => (
                        <div key={sy.lvl} className="navbar__mega-col">
                          <Link
                            href={toHref(getYearHubHref(sy.lvl, currentRegion))}
                            className="navbar__mega-year"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sy.year}
                          </Link>
                          <Link
                            href={toHref(getSubjectHref(sy.lvl, "math", currentRegion))}
                            className="navbar__mega-subject"
                            onClick={() => setMenuOpen(false)}
                          >
                            {mathLabel}
                          </Link>
                          <Link
                            href={toHref(getSubjectHref(sy.lvl, "english", currentRegion))}
                            className="navbar__mega-subject"
                            onClick={() => setMenuOpen(false)}
                          >
                            English
                          </Link>
                          <Link
                            href={toHref(getSubjectHref(sy.lvl, "science", currentRegion))}
                            className="navbar__mega-subject"
                            onClick={() => setMenuOpen(false)}
                          >
                            Science
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isDropdown && (
                  <div className="navbar__dropdown">
                    {(link.href === "/exam-prep"
                      ? (currentRegion === "us" ? usExamPrepItems : currentRegion === "ca" ? caExamPrepItems : currentRegion === "nz" ? nzExamPrepItems : auExamPrepItems)
                      : link.href === "/online-tutoring"
                      ? (currentRegion === "us" ? usOnlineTutoringItems : currentRegion === "ca" ? caOnlineTutoringItems : currentRegion === "nz" ? nzOnlineTutoringItems : auOnlineTutoringItems)
                      : coCurricularItems
                    ).map((item) => (
                      <Link
                        key={item.href}
                        href={toHref(item.href)}
                        className={`navbar__dropdown-link${pathname === toHref(item.href) ? " navbar__dropdown-link--active" : ""}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}

          {/* Mobile-only links inside hamburger menu */}
          <li className="navbar__mobile-auth">
            <Link
              href={toHref("/enroll")}
              className="navbar__link"
              onClick={() => { setMenuOpen(false); trackEnrollClick("mobile-menu"); }}
            >
              {config.spellingEnrol} Now
            </Link>
          </li>
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="navbar__actions">
          {config.phone && (
            <a href={config.phoneHref || `tel:${config.phone.replace(/[^0-9+]/g, "")}`} className="navbar__phone" onClick={trackPhoneClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z"/></svg>
              <span>{config.phone}</span>
            </a>
          )}

          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="navbar__login-btn">
            Login
          </a>

          <Link href={toHref("/enroll")} className="navbar__btn" onClick={() => trackEnrollClick("header")}>
            {config.spellingEnrol} Now
          </Link>
        </div>
      </div>
    </header>
  );
}
