import { Metadata } from "next";
import Image from "next/image";
import "../styles/legal.css";

export const metadata: Metadata = {
  title: "Cookie Policy | TutorExel",
  description:
    "Learn about the cookies TutorExel uses on its website and how you can manage your cookie preferences.",
  openGraph: {
    title: "Cookie Policy | TutorExel",
    description:
      "Learn about the cookies TutorExel uses on its website and how you can manage your cookie preferences.",
    url: "https://tutorexel.com/cookies",
    siteName: "TutorExel",
    locale: "en",
    type: "website",
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | TutorExel",
    description:
      "Learn about the cookies TutorExel uses on its website and how you can manage your cookie preferences.",
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: "https://tutorexel.com/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero__decoration legal-hero__decoration--left">
          <Image src="/images/about/left-line.webp" alt="" width={200} height={200} className="legal-hero__curve legal-hero__curve--1" />
        </div>
        <div className="legal-hero__decoration legal-hero__decoration--right">
          <Image src="/images/about/star-design.webp" alt="" width={200} height={200} className="legal-hero__curve legal-hero__curve--4" />
          <Image src="/images/about/right-line.webp" alt="" width={200} height={200} className="legal-hero__curve legal-hero__curve--3" />
        </div>
        <div className="container">
          <div className="legal-hero__content">
            <h1 className="legal-hero__title">
              <span className="legal-hero__title-highlight">Cookie</span> Policy
            </h1>
            <p className="legal-hero__subtitle">
              How we use cookies to improve your experience on our website.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-content__wrapper">
            <span className="legal-content__updated">Last updated: 1 February 2026</span>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>TutorExel uses cookies for the following purposes:</p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas. The website cannot function correctly without these cookies.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website. This helps us improve our website structure, content, and user experience. Information collected includes:
            </p>
            <ul>
              <li>Pages visited and time spent on each page</li>
              <li>How you arrived at our website (search engine, direct link, etc.)</li>
              <li>Your general geographic location (city/country level)</li>
              <li>Device type, browser, and operating system</li>
            </ul>
            <p>This data is aggregated and anonymised. It does not personally identify you.</p>

            <h3>Functional Cookies</h3>
            <p>
              These cookies remember your preferences and choices (such as form data you have previously entered) to provide a more personalised experience.
            </p>

            <h2>3. Third-Party Cookies</h2>
            <p>Some cookies on our website are set by third-party services we use, including:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website usage statistics</li>
              <li><strong>Google Fonts:</strong> For loading custom fonts</li>
            </ul>
            <p>
              These third parties have their own privacy and cookie policies. We encourage you to review them.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul>
              <li>View what cookies are stored on your device</li>
              <li>Delete individual or all cookies</li>
              <li>Block cookies from specific or all websites</li>
              <li>Set preferences for certain types of cookies</li>
            </ul>
            <p>
              Please note that disabling cookies may affect the functionality of our website and your ability to use certain features.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Any updates will be posted on this page with an updated date.
            </p>

            <div className="legal-contact">
              <p className="legal-contact__title">Questions About Cookies?</p>
              <p>If you have any questions about our use of cookies, please contact us:</p>
              <p><strong>Email:</strong> <a href="mailto:info@tutorexel.com">info@tutorexel.com</a></p>
              <p><svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z"/></svg> <strong>WhatsApp:</strong> <a href="https://wa.me/61470330548">+61 470-330-548</a></p>
              <p><strong>Website:</strong> <a href="https://tutorexel.com/contact">www.tutorexel.com/contact</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
