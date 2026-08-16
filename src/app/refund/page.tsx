import { Metadata } from "next";
import Image from "next/image";
import "../styles/legal.css";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | TutorExel",
  description:
    "Understand TutorExel's refund, cancellation, and rescheduling policies for tutoring services.",
};

export default function RefundPolicyPage() {
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
              <span className="legal-hero__title-highlight">Refund</span> &amp; Cancellation Policy
            </h1>
            <p className="legal-hero__subtitle">
              Our fair and transparent policies for cancellations, rescheduling, and refunds.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-content__wrapper">
            <span className="legal-content__updated">Effective Date: 19th January 2026</span>

            <p>
              This Refund and Cancellation Policy (&quot;Policy&quot;) governs all refunds, cancellations, withdrawals, and fee-related disputes in relation to Courses and Services offered by <strong>TutorExel LLP</strong> (&quot;TutorExel&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p>
              This Policy forms an <strong>integral part of TutorExel&apos;s Terms &amp; Conditions</strong> and must be read in conjunction with them. By enrolling in any Course or using any Service, the Parent or Guardian (&quot;you&quot;) agrees to be bound by this Policy.
            </p>

            <h2>1. GENERAL PRINCIPLES</h2>
            <ol>
              <li>
                TutorExel offers <strong>online educational services</strong>, including:
                <ul>
                  <li>live online tutoring classes,</li>
                  <li>co-curricular classes,</li>
                  <li>NAPLAN Bootcamp (live and self-study),</li>
                  <li>assessments, quizzes, recordings, and digital learning material.</li>
                </ul>
              </li>
              <li>
                Due to the <strong>intangible, time-bound, and personalised nature</strong> of these Services, <strong>refunds are limited and conditional</strong>.
              </li>
              <li>
                <strong>No oral assurances, sales discussions, WhatsApp messages, or verbal representations</strong> shall override this written Policy.
              </li>
            </ol>

            <h2>2. COMMENCEMENT OF SERVICES</h2>
            <p>Services shall be deemed to have commenced when any one of the following occurs (whichever is earliest):</p>
            <ul>
              <li>the Student attends the <strong>first live class</strong>;</li>
              <li>access credentials to the Platform, recordings, or learning material are shared;</li>
              <li>any session (live or recorded) is consumed;</li>
              <li>any assessment, worksheet, or digital content is accessed.</li>
              <li>issuance of login credentials for NAPLAN Bootcamp – Self-Study.</li>
            </ul>
            <p>
              Once Services have commenced, <strong>refunds are strictly limited</strong> as outlined below. No refund, extension, credit, or substitution shall be permitted for NAPLAN Bootcamp – Self-Study once login credentials are issued.
            </p>

            <h2>3. CANCELLATION BY PARENT / GUARDIAN</h2>
            <h3>3.1 Before Commencement of Services</h3>
            <p>If a cancellation request is received before Services commence, TutorExel may process a refund after deducting:</p>
            <ul>
              <li>payment gateway charges,</li>
              <li>administrative and onboarding costs,</li>
              <li>taxes already remitted (if applicable).</li>
            </ul>
            <p>Refund eligibility and amount may vary depending on the Course type.</p>

            <h3>3.2 After Commencement of Services</h3>
            <p><strong>No refund</strong> shall be provided for:</p>
            <ul>
              <li>any class already attended,</li>
              <li>any recorded session accessed,</li>
              <li>any learning material, worksheet, assessment, or test accessed,</li>
              <li>any subscription period already started.</li>
            </ul>
            <p>
              For Courses spanning multiple sessions or months (<strong>excluding NAPLAN Bootcamp – Live and Self-Study</strong>), any refund, <strong>if approved</strong>, shall be calculated on a <strong>pro-rata basis</strong> and shall apply <strong>only to unconsumed Services</strong>, at TutorExel&apos;s sole discretion.
            </p>

            <h2>4. COURSE-SPECIFIC REFUND RULES</h2>
            <h3>4.1 Live Online Classes (1:1 or Small Group)</h3>
            <ul>
              <li>Once the first class is attended or access is provided, no refund for consumed sessions.</li>
              <li>Missed classes due to Student absence are non-refundable.</li>
              <li>Make-up classes may be offered at TutorExel&apos;s discretion but do not entitle refund.</li>
              <li>For Live Online Classes (excluding NAPLAN Bootcamp – Live), if a refund is approved after commencement of Services, such refund shall be calculated on a pro-rata basis and shall apply only to unconsumed sessions.</li>
            </ul>

            <h3>4.2 NAPLAN Bootcamp – Live</h3>
            <p>No refund once:</p>
            <ul>
              <li>the bootcamp starts, or</li>
              <li>any live session, mock test, or material is accessed.</li>
            </ul>
            <p>This applies regardless of attendance or performance.</p>

            <h3>4.3 NAPLAN Bootcamp – Self-Study</h3>
            <p>
              For NAPLAN Bootcamp – Self-Study, the sharing of login credentials to access the learning platform, practice material, mock tests, or any related content shall constitute commencement of Services.
            </p>
            <p>
              Once login credentials are issued, the enrolment shall be deemed active and non-refundable, irrespective of whether the Student accesses or consumes the content.
            </p>
            <p>
              Access to all NAPLAN Self-Study materials shall remain valid only until 31 March 2026, after which all access shall automatically expire without notice.
            </p>
            <p>
              TutorExel shall have no obligation to extend access, provide refunds, or offer continued availability of content beyond the stated expiry date under any circumstances.
            </p>

            <h3>4.4 Co-Curricular Classes (Music, Activities, etc.)</h3>
            <ul>
              <li>Same rules as live academic classes apply.</li>
              <li>Trial or demo classes (if any) do not guarantee refund eligibility.</li>
            </ul>

            <h2>5. CANCELLATION BY TUTOREXEL</h2>
            <p>TutorExel may cancel or discontinue a Course or enrolment due to:</p>
            <ul>
              <li>instructor unavailability,</li>
              <li>operational constraints,</li>
              <li>force majeure events,</li>
              <li>regulatory or technical reasons.</li>
            </ul>
            <p>In such cases:</p>
            <ul>
              <li>TutorExel shall refund only the unconsumed portion of Course Fees;</li>
              <li>the refund shall not exceed the total amount paid for that enrolment;</li>
              <li>no additional compensation, damages, or interest shall be payable.</li>
            </ul>

            <h2>6. PAYMENT REVERSALS, CHARGEBACKS &amp; DISPUTES</h2>
            <ul>
              <li>
                Any payment reversal, chargeback, or dispute raised through banks or payment gateways:
                <ul>
                  <li>shall result in immediate suspension of access to Services;</li>
                  <li>may lead to permanent account termination.</li>
                </ul>
              </li>
              <li>TutorExel reserves the right to recover dues, administrative costs, and penalties arising from chargebacks.</li>
            </ul>

            <h2>7. REFUND PROCESSING</h2>
            <ul>
              <li>Approved refunds shall be processed using the original payment method only.</li>
              <li>
                Refund timelines depend on:
                <ul>
                  <li>payment gateway,</li>
                  <li>banking partner,</li>
                  <li>regulatory timelines.</li>
                </ul>
              </li>
              <li>TutorExel does not guarantee immediate refunds and shall not be responsible for delays caused by third parties.</li>
            </ul>

            <h2>8. TAXES &amp; FEES</h2>
            <ul>
              <li>Taxes already deposited with authorities are non-refundable, unless required by law.</li>
              <li>Payment gateway fees and administrative charges are non-refundable.</li>
            </ul>

            <h2>9. NON-TRANSFERABILITY</h2>
            <ul>
              <li>
                Course Fees are non-transferable:
                <ul>
                  <li>between Students,</li>
                  <li>between Courses,</li>
                  <li>between academic years or programs.</li>
                </ul>
              </li>
            </ul>

            <h2>10. EXCLUSIONS</h2>
            <p>No refund shall be granted due to:</p>
            <ul>
              <li>change of mind;</li>
              <li>dissatisfaction with teaching style;</li>
              <li>academic performance or results;</li>
              <li>internet or device issues at the Student&apos;s end;</li>
              <li>scheduling conflicts or personal reasons.</li>
            </ul>

            <h2>11. FINAL AUTHORITY</h2>
            <ul>
              <li>All refund and cancellation decisions rest solely with TutorExel.</li>
              <li>TutorExel&apos;s determination shall be final and binding, subject to applicable law.</li>
            </ul>

            <h2>12. GOVERNING LAW &amp; JURISDICTION</h2>
            <p>This Policy shall be governed by and construed in accordance with the laws of India.</p>
            <p>Any dispute arising under this Policy shall be resolved through:</p>
            <ul>
              <li>arbitration under the Arbitration and Conciliation Act, 1996;</li>
              <li>seat and venue: Ahmedabad, India;</li>
              <li>language: English.</li>
            </ul>
            <p>Courts at Ahmedabad shall have exclusive jurisdiction, subject to arbitration.</p>

            <div className="legal-contact">
              <p className="legal-contact__title">Need to Cancel or Request a Refund?</p>
              <p>Please reach out to us and we will be happy to assist:</p>
              <p><strong>Email:</strong> <a href="mailto:info@tutorexel.com">info@tutorexel.com</a></p>
              <p><svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z"/></svg> <strong>WhatsApp:</strong> <a href="https://wa.me/61470330548">+61 470-330-548</a></p>
              <p><strong>Response time:</strong> Within 2 hours during business hours (Mon-Sat, 9am-8pm AEST)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
