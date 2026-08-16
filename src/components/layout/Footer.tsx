"use client";

import Link from "next/link";
import Image from "next/image";
import { useFreeTrialModal } from "./FreeTrialModalProvider";
import { FREE_ASSESSMENT_URL } from "@/utils/externalLinks";
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

export default function Footer() {
  const { open: openTrialModal } = useFreeTrialModal();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <Link href="/" className="footer__logo">
                <Image
                  src="/images/footer/footer-logo.webp"
                  alt="TutorExel"
                  className="footer__logo-img"
                  width={150}
                  height={40}
                />
              </Link>
              <p className="footer__description">
                Australian online tutoring excellence. Helping
                students achieve their full potential through personalised,
                curriculum-aligned education.
              </p>
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
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

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
                  <Link key={link.label} href={link.href}>
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
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Outside container for full width background */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} TutorExel. All rights reserved. Australian tutoring excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
