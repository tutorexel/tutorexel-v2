"use client";

import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import { REGIONS_CONFIG, type RegionCode } from "@/data/regions";
import { AU_CO_CURRICULAR_COPY } from "@/data/copy/au-co-curricular";
import { CA_CO_CURRICULAR_COPY } from "@/data/copy/ca-co-curricular";
import { NZ_CO_CURRICULAR_COPY } from "@/data/copy/nz-co-curricular";
import { US_CO_CURRICULAR_COPY } from "@/data/copy/us-co-curricular";
import { MusicHubCopy } from "@/data/copy/music-copy-types";
import { createBreadcrumbSchema } from "@/utils/schema";
import JsonLd from "@/components/seo/JsonLd";
import "@/app/co-curricular/co-curricular.css";
import "@/components/home/CTA.css";

const copyByRegion: Record<RegionCode, MusicHubCopy> = {
  au: AU_CO_CURRICULAR_COPY,
  ca: CA_CO_CURRICULAR_COPY,
  nz: NZ_CO_CURRICULAR_COPY,
  us: US_CO_CURRICULAR_COPY,
};

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "tutors":
      return (
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E56031"/>
          <path d="M41.158 29.198C41.196 29.301 41.219 29.404 41.219 29.516V29.174L41.158 29.198Z" fill="white"/>
          <path d="M46.328 50.287H46.422L46.375 50.249L46.328 50.287Z" fill="white"/>
          <path d="M24.679 45.074C24.679 42.535 26.297 40.29 28.708 39.481L30.77 38.796C30.883 38.758 30.996 38.742 31.108 38.742V38.656C31.108 38.447 31.172 38.249 31.285 38.078C31.076 37.917 30.872 37.751 30.679 37.558C29.565 36.438 28.96 34.965 28.965 33.406V32.013C28.965 31.944 28.976 31.874 28.992 31.805H25.215C24.031 31.805 23.072 32.763 23.072 33.947V46.805H24.679L24.679 45.074Z" fill="white"/>
          <path d="M34.858 32.571C34.917 32.571 34.981 32.56 35.04 32.538L40.397 30.621C40.606 30.546 40.751 30.342 40.751 30.117V28.424C40.056 28.678 36.178 30.054 35.399 30.331C35.059 30.46 34.657 30.46 34.317 30.331C33.555 30.06 29.634 28.669 28.965 28.424V30.117C28.965 30.342 29.11 30.546 29.318 30.621L34.676 32.538C34.735 32.56 34.799 32.571 34.858 32.571Z" fill="white"/>
          <path d="M26.105 26.261C26.105 26.261 29.249 27.382 29.249 27.382C29.305 27.439 34.611 29.281 34.676 29.325C34.734 29.346 34.795 29.356 34.856 29.356C34.918 29.356 34.978 29.346 35.037 29.325L40.393 27.413C40.417 27.404 40.44 27.394 40.462 27.383L42.892 26.516V29.432C42.901 30.134 43.953 30.138 43.963 29.432C43.964 29.43 43.963 25.758 43.963 25.756C43.961 25.532 43.809 25.337 43.608 25.252L35.036 22.193C34.92 22.151 34.792 22.151 34.676 22.193L26.105 25.252C25.642 25.401 25.637 26.112 26.105 26.261Z" fill="white"/>
          <path d="M34.857 38.233C37.457 38.25 39.692 36.081 39.678 33.412V32.013C38.963 32.273 36.162 33.273 35.398 33.546C35.062 33.675 34.649 33.673 34.31 33.546C33.557 33.276 30.732 32.266 30.035 32.013C30.035 32.013 30.035 33.412 30.035 33.412C30.021 36.081 32.257 38.25 34.857 38.233Z" fill="white"/>
          <path d="M32.178 38.656V39.84C32.175 40.101 32.381 40.288 32.547 40.462C33.442 41.394 34.61 41.447 34.856 41.447C36.218 41.402 36.893 40.785 37.428 40.162C37.619 39.991 37.507 38.989 37.535 38.656C35.897 39.521 33.82 39.517 32.178 38.656Z" fill="white"/>
          <path d="M29.045 40.499C27.073 41.158 25.75 42.996 25.75 45.074V46.805H34.321C34.734 46.805 35.13 46.965 35.436 47.255L35.527 47.34H38.473L38.538 47.281C38.87 46.965 39.266 46.805 39.679 46.805H43.086C42.614 45.994 42.357 45.072 42.357 44.126C42.357 43.352 42.525 42.619 42.821 41.954C42.264 41.297 41.529 40.786 40.67 40.499L38.607 39.813C38.639 40.344 38.291 40.89 37.938 41.201C36.77 42.422 35.286 42.519 34.857 42.519C34.429 42.519 32.945 42.422 31.777 41.201C31.423 40.89 31.075 40.344 31.107 39.813L29.045 40.499Z" fill="white"/>
          <path d="M43.429 47.876H39.679C39.534 47.876 39.4 47.935 39.298 48.031L38.923 48.412H35.077L34.702 48.031C34.6 47.935 34.466 47.876 34.321 47.876H22.536C22.241 47.876 22 48.117 22 48.412C22 50.48 23.682 52.162 25.75 52.162H43.718C43.534 51.843 43.429 51.477 43.429 51.089V47.876Z" fill="white"/>
          <path d="M40.751 32.013V33.412C40.762 34.965 40.151 36.438 39.037 37.558C38.844 37.751 38.641 37.922 38.432 38.083C38.555 38.276 38.625 38.506 38.603 38.742H38.608C38.721 38.742 38.833 38.758 38.946 38.796L41.008 39.481C41.934 39.792 42.74 40.315 43.386 40.984C44.36 39.644 45.936 38.768 47.716 38.768C48.922 38.768 50.033 39.174 50.93 39.85V33.947C50.93 32.763 49.971 31.805 48.787 31.805H40.725C40.741 31.874 40.751 31.944 40.751 32.013Z" fill="white"/>
          <path d="M47.713 48.412C50.08 48.412 51.999 46.493 51.999 44.126C51.999 41.759 50.08 39.84 47.713 39.84C45.347 39.84 43.428 41.759 43.428 44.126C43.428 46.493 45.347 48.412 47.713 48.412Z" fill="white"/>
          <path d="M47.714 49.483C46.954 49.483 46.225 49.322 45.571 49.033C45.186 48.867 44.827 48.658 44.5 48.406V51.09C44.5 51.502 44.73 51.872 45.105 52.054C45.255 52.124 45.416 52.161 45.571 52.161C45.813 52.161 46.048 52.081 46.241 51.926L47.714 50.747L49.188 51.926C49.514 52.183 49.948 52.236 50.323 52.054C50.698 51.872 50.929 51.502 50.929 51.09V48.406C50.602 48.658 50.243 48.867 49.857 49.033C49.204 49.322 48.475 49.483 47.714 49.483Z" fill="white"/>
        </svg>
      );
    case "progression":
      return (
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E56031"/>
          <g clipPath="url(#clip0_progression)">
            <path d="M50.5 49H24.5C24.224 49 24 49.224 24 49.5V51.5C24 51.776 24.224 52 24.5 52H50.5C50.776 52 51 51.776 51 51.5V49.5C51 49.224 50.776 49 50.5 49Z" fill="white"/>
            <path d="M26 48H29V40H26V48Z" fill="white"/>
            <path d="M31 48H34V36H31V48Z" fill="white"/>
            <path d="M36 48H39V32H36V48Z" fill="white"/>
            <path d="M41 48H44V28H41V48Z" fill="white"/>
            <path d="M46 48H49V24H46V48Z" fill="white"/>
            <path d="M49.854 22.146L46.5 25.5L47.207 26.207L49.5 23.914V27H50.5V23.914L52.793 26.207L53.5 25.5L50.146 22.146C49.951 21.951 49.632 21.951 49.854 22.146Z" fill="white"/>
            <circle cx="47" cy="22" r="2" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_progression">
              <rect width="30" height="30" fill="white" transform="translate(23 22)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case "scheduling":
      return (
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E56031"/>
          <g clipPath="url(#clip0_scheduling)">
            <path d="M48.5 25H46V23.5C46 23.224 45.776 23 45.5 23H44.5C44.224 23 44 23.224 44 23.5V25H31V23.5C31 23.224 30.776 23 30.5 23H29.5C29.224 23 29 23.224 29 23.5V25H26.5C25.119 25 24 26.119 24 27.5V49.5C24 50.881 25.119 52 26.5 52H48.5C49.881 52 51 50.881 51 49.5V27.5C51 26.119 49.881 25 48.5 25ZM49 49.5C49 49.776 48.776 50 48.5 50H26.5C26.224 50 26 49.776 26 49.5V32H49V49.5Z" fill="white"/>
            <circle cx="31" cy="37" r="1.5" fill="white"/>
            <circle cx="37.5" cy="37.5" r="1.5" fill="white"/>
            <circle cx="44" cy="37" r="1.5" fill="white"/>
            <circle cx="31" cy="43" r="1.5" fill="white"/>
            <circle cx="37.5" cy="43" r="1.5" fill="white"/>
            <path d="M43.5 40L41.5 42L42.207 42.707L43.5 41.414L45.793 43.707L46.5 43L43.5 40Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_scheduling">
              <rect width="30" height="30" fill="white" transform="translate(23 22)"/>
            </clipPath>
          </defs>
        </svg>
      );
    case "certification":
      return (
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E56031"/>
          <g clipPath="url(#clip0_cert)">
            <path d="M37.5 23C31.701 23 27 27.701 27 33.5C27 37.58 29.31 41.11 32.71 42.89L31 52L37.5 48.5L44 52L42.29 42.89C45.69 41.11 48 37.58 48 33.5C48 27.701 43.299 23 37.5 23ZM37.5 40C33.916 40 31 37.084 31 33.5C31 29.916 33.916 27 37.5 27C41.084 27 44 29.916 44 33.5C44 37.084 41.084 40 37.5 40Z" fill="white"/>
            <path d="M37.5 29C35.019 29 33 31.019 33 33.5C33 35.981 35.019 38 37.5 38C39.981 38 42 35.981 42 33.5C42 31.019 39.981 29 37.5 29Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_cert">
              <rect width="30" height="30" fill="white" transform="translate(23 22)"/>
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return null;
  }
}

function CheckIcon() {
  return (
    <Image
      src="/images/co-curricular/icon-check.svg"
      alt=""
      width={17}
      height={17}
      style={{ objectFit: "contain" }}
    />
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 13.81c-.25.71-1.49 1.37-2.05 1.41-.56.04-1.08.28-3.56-.74-2.98-1.23-4.84-4.27-4.98-4.47-.15-.2-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.44c.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.57.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.07 1.14 1.02 2.11 1.33 2.41 1.48.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.71-.17 1.42z" />
    </svg>
  );
}

export default function CoCurricularView({ region }: { region: RegionCode }) {
  const currentRegion: RegionCode = region || "au";
  const copy = copyByRegion[currentRegion] || AU_CO_CURRICULAR_COPY;
  const regConfig = REGIONS_CONFIG[currentRegion] || REGIONS_CONFIG.au;
  const basePath = currentRegion === "au" ? "" : `/${currentRegion}`;

  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `https://www.tutorexel.com${basePath}` },
    { name: "Co-Curricular", url: `https://www.tutorexel.com${basePath}/co-curricular` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="cocurricular-banner">
        <div className="cocurricular-banner__decoration cocurricular-banner__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="cocurricular-banner__curve cocurricular-banner__curve--1"
          />
        </div>
        <div className="cocurricular-banner__decoration cocurricular-banner__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="cocurricular-banner__curve cocurricular-banner__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="cocurricular-banner__curve cocurricular-banner__curve--3"
          />
        </div>

        <div className="container">
          <div className="cocurricular-banner__content">
            <h1 className="cocurricular-banner__title">
              {copy.hero.h1}
            </h1>
            <p className="cocurricular-banner__subtitle">
              {copy.hero.text}
            </p>
            <div className="cocurricular-banner__actions">
              <RegionLink href={copy.hero.primaryCta.href} region={currentRegion} className="btn btn-primary btn-lg">
                {copy.hero.primaryCta.text}
              </RegionLink>
              <RegionLink href={copy.hero.secondaryCta.href} region={currentRegion} className="btn btn-outline btn-lg">
                {copy.hero.secondaryCta.text}
              </RegionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="instruments">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-header__title">{copy.chooseInstrument.h2}</h2>
          </div>

          <div className="instruments__grid">
            {copy.chooseInstrument.cards.map((inst) => (
              <div className={`instrument-card${inst.highlighted ? " instrument-card--highlighted" : ""}`} key={inst.title}>
                <div className="instrument-card__image">
                  <Image src={inst.image.src} alt={inst.image.alt} width={inst.image.width} height={inst.image.height} />
                </div>
                <div className="instrument-card__body">
                  <h3 className="instrument-card__title">{inst.title}</h3>
                  <p className="instrument-card__desc">{inst.text}</p>
                  <ul className="instrument-card__features">
                    {inst.bullets.map((feature) => (
                      <li className="instrument-card__feature" key={feature}>
                        <span className="instrument-card__feature-icon">
                          <CheckIcon />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="instrument-card__cta">
                    <RegionLink href={inst.button.href} region={currentRegion} className="btn btn-primary btn-lg instrument-card__btn">
                      {inst.button.text}
                    </RegionLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-header__title">{copy.moreThanJustLessons.h2}</h2>
          </div>

          <div className="features__grid">
            {copy.moreThanJustLessons.cards.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-card__icon">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="music-how-it-works">
        <div className="container">
          <div className="music-how-it-works__content">
            <div className="music-how-it-works__left">
              <div className="music-how-it-works__grid">
                {copy.howItWorks.steps.map((step) => (
                  <div className="music-step-card" key={step.number}>
                    <div className="music-step-card__number">{step.number}</div>
                    <h3 className="music-step-card__title">{step.title}</h3>
                    <p className="music-step-card__desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="music-how-it-works__right">
              <h2 className="music-how-it-works__title">{copy.howItWorks.h2}</h2>
              <div className="music-how-it-works__image">
                <Image src={copy.howItWorks.image.src} alt={copy.howItWorks.image.alt} width={copy.howItWorks.image.width} height={copy.howItWorks.image.height} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta__grid">
            <div className="cta__image-wrapper">
              <Image
                src="/images/cta/lady_image.webp"
                alt={`Happy ${regConfig.demonym} student learning music online from home`}
                className="cta__image"
                width={600}
                height={500}
              />
            </div>

            <div className="cta__content">
              <h2 className="cta__title">
                {copy.finalCta.h2}
              </h2>
              <p className="cta__description">
                {copy.finalCta.text}
              </p>
              <div className="cta__actions">
                <RegionLink href={copy.finalCta.button.href} region={currentRegion} className="cta__btn">
                  {copy.finalCta.button.text}
                </RegionLink>
                {copy.finalCta.whatsapp && (
                  <a href={copy.finalCta.whatsapp.href} className="cta__phone">
                    <span className="cta__phone-icon">
                      <PhoneIcon />
                    </span>
                    {copy.finalCta.whatsapp.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <Image src="/images/cta/vector.webp" alt="" className="cta__vector" width={400} height={200} />
      </section>
    </>
  );
}
