import { buildMetadata } from "@/utils/seo";
import Image from "next/image";
import "@/app/styles/legal.css";

export const metadata = buildMetadata({
  path: "/cookies",
  region: "nz",
});

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
              
              <p><strong>Website:</strong> <a href="https://www.tutorexel.com/nz/contact">www.tutorexel.com/contact</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
