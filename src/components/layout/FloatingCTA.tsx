"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FREE_ASSESSMENT_URL } from "@/utils/externalLinks";
import "./FloatingCTA.css";

export default function FloatingCTA() {
  const [showJoinNow, setShowJoinNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowJoinNow(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="floating-cta-stack">
      <Link
        href="/pricing"
        className={"floating-cta floating-cta--join" + (showJoinNow ? " floating-cta--visible" : "")}
      >
        <span className="floating-cta__text">Join Now</span>
        <span className="floating-cta__arrow">→</span>
      </Link>
      <a
        href={FREE_ASSESSMENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta floating-cta--visible"
      >
        <span className="floating-cta__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 14l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="floating-cta__text">Free Assessment Test</span>
      </a>
    </div>
  );
}
