"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getCurrentRegion } from '@/utils/regionalLinks';
import { REGIONS_CONFIG, type RegionCode } from '@/data/regions';
import { AU_HOME_COPY } from '@/data/copy/au-home';
import { CA_HOME_COPY } from '@/data/copy/ca-home';
import BookTrialButton from './BookTrialButton';
import './CTA.css';

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z" /></svg>
  );
}

interface CTAProps {
  region?: RegionCode;
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CTA({ region, title, description, buttonText }: CTAProps) {
  const pathname = usePathname() || '';
  const currentRegion = region || getCurrentRegion(pathname);
  const config = REGIONS_CONFIG[currentRegion] || REGIONS_CONFIG.au;
  const isAuHome = currentRegion === 'au' && (pathname === '/' || pathname === '');
  const isCaHome = currentRegion === 'ca' && (pathname === '/ca' || pathname === '/ca/');

  const resolvedTitle = title || (isCaHome
    ? CA_HOME_COPY.cta.title
    : isAuHome
    ? AU_HOME_COPY.cta.title
    : "Ready to See Your Child Excel?");
  const resolvedDescription = description || (isCaHome
    ? CA_HOME_COPY.cta.description
    : isAuHome
    ? AU_HOME_COPY.cta.description
    : `Join hundreds of ${config.demonym} families who trust TutorExel for their children's education. Book your FREE trial class today, no credit card required.`);
  const resolvedButtonText = buttonText || (isCaHome
    ? CA_HOME_COPY.cta.buttonText
    : isAuHome
    ? AU_HOME_COPY.cta.buttonText
    : "Book Online Now");

  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__grid">
          <div className="cta__image-wrapper">
            <Image
              src="/images/cta/lady_image.webp"
              alt="Happy student learning online"
              className="cta__image"
              width={600}
              height={500}
            />
          </div>

          <div className="cta__content">
            <h2 className="cta__title">
              {resolvedTitle}
            </h2>
            <p className="cta__description">
              {resolvedDescription}
            </p>
            <div className="cta__actions">
              <BookTrialButton className="cta__btn">
                {resolvedButtonText}
              </BookTrialButton>
              {config.phone && (
                <a href={`https://wa.me/${config.phone.replace(/[^0-9]/g, '')}`} className="cta__phone">
                  <span className="cta__phone-icon">
                    <PhoneIcon />
                  </span>
                  {config.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Image src="/images/cta/vector.webp" alt="" className="cta__vector" width={400} height={200} />
    </section>
  );
}
