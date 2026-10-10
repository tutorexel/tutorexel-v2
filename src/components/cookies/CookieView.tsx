import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import { type RegionCode } from "@/data/regions";
import "@/app/styles/legal.css";

const whatsappData: Record<RegionCode, { href: string; label: string }> = {
  au: { href: "https://wa.me/61470330548", label: "+61 470 330 548" },
  nz: { href: "https://wa.me/61470330548", label: "+61 470 330 548" },
  us: { href: "https://wa.me/12067977387", label: "+1 (206) 797-7387" },
  ca: { href: "https://wa.me/12067977387", label: "+1 (206) 797-7387" },
};

export default function CookieView({ region = "au" }: { region?: RegionCode }) {
  const whatsapp = whatsappData[region] || whatsappData.au;

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
              What cookies we use, why we use them and how you can control them.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-content__wrapper">
            <span className="legal-content__updated">Last updated: 6 October 2026</span>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that a website places on your computer, tablet or phone when you visit. They allow the site to identify your device, remember your settings and measure how the site is used. Similar technologies, such as pixels and local storage, work in comparable ways and are also covered by this policy.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              TutorExel, operated by TutorExel LLP, uses cookies for the purposes described below.
            </p>

            <h3>Essential Cookies</h3>
            <p>
              Essential cookies are required for the website to operate. They support core functions such as page navigation, security and access to secure areas. The website cannot work properly without them, so they are set automatically.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We use analytics cookies, including those provided by Google Analytics, to learn how visitors use our website. This helps us improve its structure, content and usability. The information collected may include:
            </p>
            <ul>
              <li>The pages you view and the time you spend on each</li>
              <li>The source of your visit, such as a search engine or a direct link</li>
              <li>Your approximate location, at city or country level</li>
              <li>Your device type, browser and operating system</li>
            </ul>
            <p>
              This information is aggregated and is not used to identify you directly. Where the law requires it, we set analytics cookies only after you have given consent.
            </p>

            <h3>Functional Cookies</h3>
            <p>
              Functional cookies remember choices you make, such as details you have previously entered in a form, so that we can tailor your experience. Without them, some features may work less smoothly.
            </p>

            <h2>3. Third-Party Cookies</h2>
            <p>
              Some cookies on our website are placed by third-party services that we use. These include:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> website usage statistics and reporting</li>
              <li><strong>Google Fonts:</strong> delivery of the typefaces used on our pages. This service may receive your IP address when your browser requests the fonts.</li>
            </ul>
            <p>
              These providers operate under their own privacy and cookie policies, which we encourage you to read. We do not control how third parties use the information they collect.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul>
              <li>See which cookies are stored on your device</li>
              <li>Delete some or all cookies</li>
              <li>Block cookies from particular websites or from all websites</li>
              <li>Choose settings for particular types of cookies</li>
            </ul>
            <p>
              Blocking or deleting cookies may limit how parts of our website work. You may also opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on. Where applicable law requires it, we will treat a Global Privacy Control signal from your browser as a request to opt out.
            </p>
            <p>
              Residents of Australia, the United States, Canada and New Zealand may have rights over personal information, including information collected through cookies. These rights, and how to exercise them, are explained in our <RegionLink href="/privacy" region={region}>Privacy Policy</RegionLink>.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in the cookies we use, in technology or in the law. The current version will always be published on this page with a revised &quot;Last updated&quot; date.
            </p>

            <h2>Cookies We Use</h2>
            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #e2e8f0" }}>
                    <th style={{ padding: "12px 16px" }}>Cookie</th>
                    <th style={{ padding: "12px 16px" }}>Provider</th>
                    <th style={{ padding: "12px 16px" }}>Purpose</th>
                    <th style={{ padding: "12px 16px" }}>Typical duration</th>
                    <th style={{ padding: "12px 16px" }}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #edf2f7" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>_ga</td>
                    <td style={{ padding: "12px 16px" }}>Google Analytics</td>
                    <td style={{ padding: "12px 16px" }}>Distinguishes visitors to produce usage statistics</td>
                    <td style={{ padding: "12px 16px" }}>Up to 2 years</td>
                    <td style={{ padding: "12px 16px" }}>Analytics</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #edf2f7" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>_ga_&lt;container ID&gt;</td>
                    <td style={{ padding: "12px 16px" }}>Google Analytics</td>
                    <td style={{ padding: "12px 16px" }}>Maintains session state</td>
                    <td style={{ padding: "12px 16px" }}>Up to 2 years</td>
                    <td style={{ padding: "12px 16px" }}>Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="legal-contact">
              <p className="legal-contact__title">Questions About Cookies?</p>
              <p>If you have questions about this policy or our use of cookies, please contact us:</p>
              <p><strong>Email:</strong> <a href="mailto:info@tutorexel.com">info@tutorexel.com</a></p>
              <p>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px" }}>
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z"/>
                </svg>
                <strong>WhatsApp:</strong> <a href={whatsapp.href}>{whatsapp.label}</a>
              </p>
              <p><strong>Website:</strong> <RegionLink href="/contact" region={region}>www.tutorexel.com/contact</RegionLink></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
