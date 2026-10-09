"use client";

import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import { type RegionCode } from "@/data/regions";
import "@/app/links/links.css";

const FREE_ASSESSMENT_URL = "https://api.superintech.com/widget/form/N9Q0e7X5vI9j1v3B2J5Y";
const BOOK_TRIAL_URL = "https://api.superintech.com/widget/bookings/free-trial-booking-website";

const heroLinks = [
  {
    href: BOOK_TRIAL_URL,
    icon: "🎯",
    iconClass: "icon-primary",
    badge: "Most Popular",
    title: "Book a Free Trial Class",
    subtitle: "30-min live session · No obligation",
    primary: true,
    external: true,
    pulse: true,
  },
  {
    href: FREE_ASSESSMENT_URL,
    icon: "📝",
    iconClass: "icon-teal",
    badge: "Free",
    title: "Free Diagnostic Assessment",
    subtitle: "Discover your child's learning gaps in 20 mins",
    primary: false,
    external: true,
    pulse: true,
  },
];

const exploreLinks = [
  {
    href: "/pricing",
    icon: "💰",
    iconClass: "icon-amber",
    title: "Join Now",
    subtitle: "From $39/month · No lock-in contracts",
  },
  {
    href: "/subjects",
    icon: "📚",
    iconClass: "icon-blue",
    title: "Our Subjects",
    subtitle: "Maths · English · Science · Years 2-7",
  },
  {
    href: "/co-curricular",
    icon: "🎹",
    iconClass: "icon-purple",
    title: "Co-Curricular Activities",
    subtitle: "Piano · Guitar Lessons",
  },
  {
    href: "/results",
    icon: "⭐",
    iconClass: "icon-yellow",
    title: "Results & Success Stories",
    subtitle: "See real results from real families",
  },
  {
    href: "/blog",
    icon: "✏️",
    iconClass: "icon-dark",
    title: "Learning Hub: Free Tips",
    subtitle: "Study tips · Parent guides · Resources",
  },
];

const moreLinks = [
  {
    href: "/about",
    icon: "👋",
    iconClass: "icon-light",
    title: "About TutorExel",
    subtitle: "Our story and teaching approach",
  },
  {
    href: "/contact",
    icon: "📞",
    iconClass: "icon-light",
    title: "Contact Us",
    subtitle: "Get in touch with our team",
  },
  {
    href: "/enroll",
    icon: "✅",
    iconClass: "icon-primary",
    title: "Enroll Now",
    subtitle: "Start your child's learning journey",
  },
  {
    href: "/careers",
    icon: "💼",
    iconClass: "icon-light",
    title: "Join Our Team",
    subtitle: "Become a TutorExel tutor",
  },
];

const socialLinks = [
  {
    title: "Facebook",
    href: "https://facebook.com/tutorexel",
    iconType: "facebook",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/tutorexel",
    iconType: "instagram",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/company/tutorexel",
    iconType: "linkedin",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/61470330548",
    iconType: "whatsapp",
  },
];

const stats = [
  { num: "4.9★", label: "Parent Rating" },
  { num: "95%", label: "Grade Boost" },
  { num: "10k+", label: "Classes Given" },
];

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case "facebook":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LinksView({ region }: { region: RegionCode }) {
  const addUTM = (url: string, campaign: string) => {
    if (url.startsWith("http")) {
      const sep = url.includes("?") ? "&" : "?";
      return `${url}${sep}utm_source=linkinbio&utm_medium=social&utm_campaign=${campaign}`;
    }
    return url;
  };

  const renderLink = (link: (typeof heroLinks)[0] | (typeof exploreLinks)[0], index: number) => {
    const isHero = "primary" in link;
    const isExternal = "external" in link && link.external;
    const isPulse = "pulse" in link && link.pulse;

    const className = [
      "link-card",
      isHero && link.primary ? "link-card--primary" : "",
      isHero && !link.primary ? "link-card--teal" : "",
      isPulse ? "link-card--pulse" : "",
    ]
      .filter(Boolean)
      .join(" ");

    const content = (
      <>
        <div className={`link-card__icon ${link.iconClass}`}>{link.icon}</div>
        <div className="link-card__content">
          <div className="link-card__title">
            {"badge" in link && link.badge && <span className="link-badge">{link.badge}</span>}
            {link.title}
          </div>
          <div className="link-card__subtitle">{link.subtitle}</div>
        </div>
        <div className="link-card__arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </>
    );

    if (isExternal) {
      return (
        <a
          key={index}
          href={addUTM(link.href, link.title.toLowerCase().replace(/ /g, "_"))}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      );
    }

    return (
      <RegionLink
        key={index}
        href={link.href}
        region={region}
        className={className}
      >
        {content}
      </RegionLink>
    );
  };

  return (
    <div className="links-page">
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="links-wrapper">
        <div className="links-profile">
          <div className="links-logo">
            <Image src="/images/banner/Header_Logo.webp" alt="TutorExel" width={180} height={50} priority />
          </div>
          <h1 className="sr-only">TutorExel Quick Links and Resources</h1>

          <p className="links-profile__desc">
            🎓 Online tutoring for Years 2-7<br />
            Maths · English · Science · Piano · Guitar<br />
            Curriculum-aligned · Free assessment · From $39/month
          </p>

          <div className="links-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="links-stat">
                <div className="links-stat__num">{stat.num}</div>
                <div className="links-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="links-list">
          {heroLinks.map((link, i) => renderLink(link, i))}
        </div>

        <div className="links-section-label">Explore TutorExel</div>
        <div className="links-list">
          {exploreLinks.map((link, i) => renderLink(link, i))}
        </div>

        <div className="links-section-label">More</div>
        <div className="links-list">
          {moreLinks.map((link, i) => renderLink(link, i))}
        </div>

        <div className="links-section-label">Follow Us</div>
        <div className="links-social">
          {socialLinks
            .filter((link) => link.iconType !== "whatsapp" || region === "au" || region === "us")
            .map((link, i) => {
              const href =
                link.iconType === "whatsapp" && region === "us"
                  ? "https://wa.me/12067977387"
                  : link.href;
              return (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="links-social__btn" title={link.title}>
                  <SocialIcon type={link.iconType} />
                </a>
              );
            })}
        </div>

        <div className="links-footer">
          <p>© 2026 TutorExel · <RegionLink href="/" region={region}>tutorexel.com</RegionLink></p>
          <p>Online tutoring excellence</p>
        </div>
      </div>
    </div>
  );
}
