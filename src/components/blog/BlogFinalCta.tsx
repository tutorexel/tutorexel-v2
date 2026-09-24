"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RegionConfig } from "@/data/regions";
import { getRegionalHref } from "@/utils/regionalLinks";

interface BlogFinalCtaProps {
  regionConfig: RegionConfig;
}

export default function BlogFinalCta({ regionConfig }: BlogFinalCtaProps) {
  const [imgError, setImgError] = useState(false);
  const { finalCta, code } = regionConfig;

  return (
    <section className="final" aria-label="Final call to action">
      <div className="wrap">
        <div className="final-card">
          <div className="final-img">
            <div className="final-art" aria-hidden="true">
              <svg className="fa-spark" viewBox="0 0 24 24">
                <path
                  d="M12 0l2.2 8.3L22 5.6l-5.3 6.4L24 16l-8.6-.6L12 24l-3.4-8.6L0 16l7.3-4L2 5.6l7.8 2.7Z"
                  fill="#F7A23B"
                />
              </svg>
              <div className="fa-stat fa-stat--1">
                <b>100%</b>
                <span>Curriculum aligned</span>
              </div>
              <div className="fa-stat fa-stat--2">
                <b>15+ years</b>
                <span>Qualified teachers</span>
              </div>
              <div className="fa-stat fa-stat--3">
                <b>1:1 or small group</b>
                <span>Live online classes</span>
              </div>
            </div>

            {!imgError && (
              <Image
                src="/images/cta/lady_image.webp"
                alt="Happy student learning online with TutorExel"
                width={500}
                height={400}
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <div className="final-txt">
            <h2>{finalCta.heading}</h2>
            <p>{finalCta.lede}</p>

            <div className="final-actions">
              <Link
                className="btn btn-hi"
                href={getRegionalHref(finalCta.btnHref, code)}
              >
                {finalCta.btnText}
              </Link>
              <a
                className="btn btn-wa"
                href={finalCta.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2z" />
                </svg>
                {finalCta.phoneText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
