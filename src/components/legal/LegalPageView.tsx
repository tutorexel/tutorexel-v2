import React from "react";
import Image from "next/image";
import RegionLink from "@/components/shared/RegionLink";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createWebPageSchema } from "@/utils/schema";
import {
  getRegionConfig,
  COMPANY_ADDRESS,
  LEGAL_EFFECTIVE_DATE,
  REGIONAL_REFUND_WHATSAPP,
  type RegionCode,
} from "@/data/regions";
import { getPageMetadataItem } from "@/data/page-metadata";
import type { LegalPageCopy } from "@/data/copy/legal-privacy";
import "@/app/styles/legal.css";

interface LegalPageViewProps {
  copy: LegalPageCopy;
  region: RegionCode;
  pageType: "privacy" | "terms" | "refund";
  pagePath: string;
  breadcrumbTitle: string;
}

function renderFormattedText(
  text: string,
  region: RegionCode,
  pageType: "privacy" | "terms" | "refund"
): React.ReactNode {
  if (!text) return null;

  // Split by bold (**...**)
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);

  return boldParts.map((part, pIdx) => {
    const isBold = part.startsWith("**") && part.endsWith("**");
    const content = isBold ? part.slice(2, -2) : part;

    // Split by link targets
    const linkRegex =
      /(Terms & Conditions|Privacy Policy|Refund and Cancellation Policy|Refund & Cancellation Policy|www\.tutorexel\.com|info@tutorexel\.com)/g;
    const subparts = content.split(linkRegex);

    const renderedSubparts = subparts.map((sub, sIdx) => {
      const key = `${pIdx}-${sIdx}`;
      if (sub === "Terms & Conditions" && pageType !== "terms") {
        return (
          <RegionLink key={key} href="/terms" region={region}>
            Terms &amp; Conditions
          </RegionLink>
        );
      }
      if (sub === "Privacy Policy" && pageType !== "privacy") {
        return (
          <RegionLink key={key} href="/privacy" region={region}>
            Privacy Policy
          </RegionLink>
        );
      }
      if (
        (sub === "Refund and Cancellation Policy" ||
          sub === "Refund & Cancellation Policy") &&
        pageType !== "refund"
      ) {
        return (
          <RegionLink key={key} href="/refund" region={region}>
            Refund and Cancellation Policy
          </RegionLink>
        );
      }
      if (sub === "info@tutorexel.com") {
        return (
          <a key={key} href="mailto:info@tutorexel.com">
            info@tutorexel.com
          </a>
        );
      }
      if (sub === "www.tutorexel.com") {
        return (
          <a key={key} href="https://www.tutorexel.com/">
            www.tutorexel.com
          </a>
        );
      }
      return sub;
    });

    if (isBold) {
      return <strong key={pIdx}>{renderedSubparts}</strong>;
    }
    return <React.Fragment key={pIdx}>{renderedSubparts}</React.Fragment>;
  });
}

export default function LegalPageView({
  copy,
  region,
  pageType,
  pagePath,
  breadcrumbTitle,
}: LegalPageViewProps) {
  const regConfig = getRegionConfig(region);
  const basePath = regConfig.basePath;
  const homeUrl = `https://www.tutorexel.com${basePath}`;
  const pageUrl = `https://www.tutorexel.com${basePath}${pagePath}`;

  const metaItem = getPageMetadataItem(pagePath, region);
  const pageTitle = metaItem?.title || `${breadcrumbTitle} | TutorExel`;
  const pageDescription = metaItem?.description || copy.hero.subtitle;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: homeUrl },
    { name: breadcrumbTitle, url: pageUrl },
  ]);

  const webPageSchema = createWebPageSchema(
    pageTitle,
    pageDescription,
    pageUrl
  );

  const whatsapp = REGIONAL_REFUND_WHATSAPP[region];

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero__decoration legal-hero__decoration--left">
          <Image
            src="/images/about/left-line.webp"
            alt=""
            width={200}
            height={200}
            className="legal-hero__curve legal-hero__curve--1"
          />
        </div>
        <div className="legal-hero__decoration legal-hero__decoration--right">
          <Image
            src="/images/about/star-design.webp"
            alt=""
            width={200}
            height={200}
            className="legal-hero__curve legal-hero__curve--4"
          />
          <Image
            src="/images/about/right-line.webp"
            alt=""
            width={200}
            height={200}
            className="legal-hero__curve legal-hero__curve--3"
          />
        </div>
        <div className="container">
          <div className="legal-hero__content">
            <h1 className="legal-hero__title">
              <span className="legal-hero__title-highlight">
                {copy.hero.titleHighlight}
              </span>
              {copy.hero.titleRest}
            </h1>
            <p className="legal-hero__subtitle">{copy.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-content__wrapper">
            {copy.hasEffectiveDate && (
              <span className="legal-content__updated">
                {`Effective Date: ${LEGAL_EFFECTIVE_DATE}`}
              </span>
            )}

            {copy.blocks.map((block, idx) => {
              if (block.type === "h2" && block.text) {
                return (
                  <h2 key={idx}>
                    {renderFormattedText(block.text, region, pageType)}
                  </h2>
                );
              }
              if (block.type === "h3" && block.text) {
                return (
                  <h3 key={idx}>
                    {renderFormattedText(block.text, region, pageType)}
                  </h3>
                );
              }
              if (block.type === "label" && block.text) {
                return (
                  <p key={idx}>
                    <em>{renderFormattedText(block.text, region, pageType)}</em>
                  </p>
                );
              }
              if (block.type === "ul" && block.items) {
                return (
                  <ul key={idx}>
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {renderFormattedText(item, region, pageType)}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "p" && block.text) {
                return (
                  <p key={idx}>
                    {renderFormattedText(block.text, region, pageType)}
                  </p>
                );
              }
              return null;
            })}

            {/* Bottom Contact Card */}
            {copy.contactBlock && (
              <div className="legal-contact">
                <p className="legal-contact__title">{copy.contactBlock.title}</p>
                <p>{copy.contactBlock.intro}</p>
                {copy.contactBlock.company && (
                  <p>
                    <strong>{copy.contactBlock.company}</strong>
                  </p>
                )}
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${copy.contactBlock.email}`}>
                    {copy.contactBlock.email}
                  </a>
                </p>
                {copy.contactBlock.hasAddress && (
                  <p>
                    <strong>Address:</strong> {COMPANY_ADDRESS}
                  </p>
                )}
                {copy.contactBlock.hasWhatsApp && whatsapp && (
                  <p>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href={whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {whatsapp.number}
                    </a>
                  </p>
                )}
                {copy.contactBlock.responseTime && (
                  <p>{copy.contactBlock.responseTime}</p>
                )}
                {copy.contactBlock.additionalNote && (
                  <p>{copy.contactBlock.additionalNote}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
