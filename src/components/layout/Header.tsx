"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { trackPhoneClick, trackEnrollClick } from "@/utils/analytics";
import { LOGIN_URL } from "@/utils/externalLinks";
import "./Header.css";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Subjects", href: "/subjects", hasMegaMenu: true },
  { label: "Co-Curricular", href: "/co-curricular", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const coCurricularItems = [
  { label: "Piano", href: "/co-curricular/piano" },
  { label: "Guitar", href: "/co-curricular/guitar" },
];

const subjectYears = [
  { year: "Year 2", id: "year-2" },
  { year: "Year 3", id: "year-3" },
  { year: "Year 4", id: "year-4" },
  { year: "Year 5", id: "year-5" },
  { year: "Year 6", id: "year-6" },
  { year: "Year 7", id: "year-7" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link href="/" className="navbar__logo">
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
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={
                link.hasMegaMenu
                  ? "navbar__item--has-mega"
                  : link.hasDropdown
                    ? "navbar__item--has-dropdown"
                    : ""
              }
            >
              <Link
                href={link.href}
                className={`navbar__link${isActive(link.href) ? " navbar__link--active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {(link.hasMegaMenu || link.hasDropdown) && (
                  <svg className="navbar__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </Link>

              {link.hasMegaMenu && (
                <div className="navbar__mega">
                  <div className="navbar__mega-inner">
                    {subjectYears.map((sy) => (
                      <div key={sy.id} className="navbar__mega-col">
                        <Link
                          href={`/subjects/${sy.id}/maths`}
                          className="navbar__mega-year"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sy.year}
                        </Link>
                        <Link
                          href={`/subjects/${sy.id}/maths`}
                          className="navbar__mega-subject"
                          onClick={() => setMenuOpen(false)}
                        >
                          Maths
                        </Link>
                        <Link
                          href={`/subjects/${sy.id}/english`}
                          className="navbar__mega-subject"
                          onClick={() => setMenuOpen(false)}
                        >
                          English
                        </Link>
                        <Link
                          href={`/subjects/${sy.id}/science`}
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

              {link.hasDropdown && (
                <div className="navbar__dropdown">
                  {coCurricularItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="navbar__dropdown-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}

          {/* Mobile-only links inside hamburger menu */}
          <li className="navbar__mobile-auth">
            <Link
              href="/enroll"
              className="navbar__link"
              onClick={() => { setMenuOpen(false); trackEnrollClick("mobile-menu"); }}
            >
              Enroll Now
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
          <a href="https://wa.me/61470330548" className="navbar__phone" onClick={trackPhoneClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z"/></svg>
            <span>+61 470-330-548</span>
          </a>

          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="navbar__login-btn">
            Login
          </a>

          <Link href="/enroll" className="navbar__btn" onClick={() => trackEnrollClick("header")}>
            Enroll Now
          </Link>
        </div>
      </div>
    </header>
  );
}
