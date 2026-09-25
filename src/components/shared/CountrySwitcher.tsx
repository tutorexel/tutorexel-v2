"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./CountrySwitcher.css";

export type RegionCode = "AU" | "US" | "CA" | "NZ";

interface CountryConfig {
  code: RegionCode;
  name: string;
  flag: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Inline SVG Flags (High-definition, crisp at any resolution)       */
/* ------------------------------------------------------------------ */

function FlagAU() {
  return (
    <svg viewBox="0 0 640 480" width="20" height="15" style={{ borderRadius: "2px", flexShrink: 0 }}>
      <clipPath id="cs-au-c"><path d="M0 0h640v480H0z"/></clipPath>
      <clipPath id="cs-au-u"><path d="M0 0h320v240H0z"/></clipPath>
      <g clipPath="url(#cs-au-c)">
        <path fill="#00008b" d="M0 0h640v480H0z"/>
        <g clipPath="url(#cs-au-u)">
          <path fill="#00247d" d="M0 0h320v240H0z"/>
          <path stroke="#fff" strokeWidth="24" d="M0 0l320 240m0-240L0 240"/>
          <path stroke="#cf142b" strokeWidth="16" d="M0 0l320 240m0-240L0 240"/>
          <path stroke="#fff" strokeWidth="40" d="M160 0v240M0 120h320"/>
          <path stroke="#cf142b" strokeWidth="24" d="M160 0v240M0 120h320"/>
        </g>
        {/* Commonwealth 7-pointed star */}
        <polygon fill="#fff" points="160,280 167,314 195,294 180,326 213,338 180,350 195,382 167,362 160,396 153,362 125,382 140,350 107,338 140,326 125,294 153,314"/>
        {/* Southern Cross stars */}
        <circle cx="480" cy="100" r="14" fill="#fff"/>
        <circle cx="540" cy="180" r="14" fill="#fff"/>
        <circle cx="480" cy="380" r="14" fill="#fff"/>
        <circle cx="420" cy="220" r="14" fill="#fff"/>
        <circle cx="505" cy="260" r="10" fill="#fff"/>
      </g>
    </svg>
  );
}

function FlagUS() {
  return (
    <svg viewBox="0 0 640 480" width="20" height="15" style={{ borderRadius: "2px", flexShrink: 0 }}>
      <g fill="#bd3d44">
        <path d="M0 0h640v480H0z"/>
        <path stroke="#fff" strokeWidth="37" d="M0 55h640m0 74H0m0 74h640m0 74H0m0 74h640m0 74H0"/>
      </g>
      <path fill="#192f5d" d="M0 0h260v260H0z"/>
      <g fill="#fff">
        <circle cx="35" cy="30" r="8"/>
        <circle cx="95" cy="30" r="8"/>
        <circle cx="155" cy="30" r="8"/>
        <circle cx="215" cy="30" r="8"/>
        <circle cx="65" cy="65" r="8"/>
        <circle cx="125" cy="65" r="8"/>
        <circle cx="185" cy="65" r="8"/>
        <circle cx="35" cy="100" r="8"/>
        <circle cx="95" cy="100" r="8"/>
        <circle cx="155" cy="100" r="8"/>
        <circle cx="215" cy="100" r="8"/>
        <circle cx="65" cy="135" r="8"/>
        <circle cx="125" cy="135" r="8"/>
        <circle cx="185" cy="135" r="8"/>
        <circle cx="35" cy="170" r="8"/>
        <circle cx="95" cy="170" r="8"/>
        <circle cx="155" cy="170" r="8"/>
        <circle cx="215" cy="170" r="8"/>
        <circle cx="65" cy="205" r="8"/>
        <circle cx="125" cy="205" r="8"/>
        <circle cx="185" cy="205" r="8"/>
        <circle cx="35" cy="240" r="8"/>
        <circle cx="95" cy="240" r="8"/>
        <circle cx="155" cy="240" r="8"/>
        <circle cx="215" cy="240" r="8"/>
      </g>
    </svg>
  );
}

function FlagCA() {
  return (
    <svg viewBox="0 0 640 480" width="20" height="15" style={{ borderRadius: "2px", flexShrink: 0 }}>
      <path fill="#d52b1e" d="M0 0h640v480H0z"/>
      <path fill="#fff" d="M160 0h320v480H160z"/>
      <path fill="#d52b1e" d="M320 85l18 42 36-12-14 36 38 12-32 30 18 36-40-6-10 32-14-32-40 6 18-36-32-30 38-12-14-36 36 12z M314 260h12v70h-12z"/>
    </svg>
  );
}

function FlagNZ() {
  return (
    <svg viewBox="0 0 640 480" width="20" height="15" style={{ borderRadius: "2px", flexShrink: 0 }}>
      <defs>
        <clipPath id="cs-nz-u"><path d="M0 0h320v240H0z"/></clipPath>
      </defs>
      <path fill="#00247d" d="M0 0h640v480H0z"/>
      <g clipPath="url(#cs-nz-u)">
        <path fill="#00247d" d="M0 0h320v240H0z"/>
        <path stroke="#fff" strokeWidth="24" d="M0 0l320 240m0-240L0 240"/>
        <path stroke="#cc142b" strokeWidth="16" d="M0 0l320 240m0-240L0 240"/>
        <path stroke="#fff" strokeWidth="40" d="M160 0v240M0 120h320"/>
        <path stroke="#cc142b" strokeWidth="24" d="M160 0v240M0 120h320"/>
      </g>
      {/* 4 Red stars with white border */}
      <circle cx="480" cy="110" r="16" fill="#fff"/>
      <circle cx="480" cy="110" r="11" fill="#cc142b"/>
      <circle cx="550" cy="190" r="14" fill="#fff"/>
      <circle cx="550" cy="190" r="9" fill="#cc142b"/>
      <circle cx="480" cy="370" r="18" fill="#fff"/>
      <circle cx="480" cy="370" r="13" fill="#cc142b"/>
      <circle cx="420" cy="240" r="14" fill="#fff"/>
      <circle cx="420" cy="240" r="9" fill="#cc142b"/>
    </svg>
  );
}

const COUNTRIES: CountryConfig[] = [
  { code: "US", name: "United States", flag: <FlagUS /> },
  { code: "AU", name: "Australia", flag: <FlagAU /> },
  { code: "CA", name: "Canada", flag: <FlagCA /> },
  { code: "NZ", name: "New Zealand", flag: <FlagNZ /> },
];

/**
 * Derives the target URL for a region given the current pathname.
 * Swaps /au, /us, /ca, /nz prefix with target region prefix (US has no prefix).
 */
export function getRegionalUrl(pathname: string, targetRegion: RegionCode): string {
  let cleanPath = pathname || "/";
  const match = cleanPath.match(/^\/(au|us|ca|nz)(\/.*)?$/i);
  if (match) {
    cleanPath = match[2] || "/";
  }
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  const prefix = targetRegion === "US" ? "" : `/${targetRegion.toLowerCase()}`;
  const suffix = cleanPath === "/" ? "" : cleanPath;
  const url = `${prefix}${suffix}`;
  return url || "/";
}

/**
 * Detects current region from pathname.
 */
export function getCurrentRegion(pathname: string): RegionCode {
  const match = pathname.match(/^\/(au|ca|nz)(\/.*)?$/i);
  if (match) {
    return match[1].toUpperCase() as RegionCode;
  }
  return "US";
}

export default function CountrySwitcher() {
  const pathname = usePathname() || "";
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Hide on admin or blocked routes
  if (pathname.startsWith("/admin") || pathname.startsWith("/blocked")) {
    return null;
  }

  const currentRegion = getCurrentRegion(pathname);
  const activeCountry = COUNTRIES.find((c) => c.code === currentRegion) || COUNTRIES[0];

  return (
    <div className="country-switcher" ref={containerRef}>
      {/* Expanded Dropdown Options */}
      {isOpen && (
        <div className="country-switcher__dropdown" role="listbox" aria-label="Select Country">
          {COUNTRIES.map((country) => {
            const isActive = country.code === currentRegion;
            const targetHref = getRegionalUrl(pathname, country.code);

            return (
              <Link
                key={country.code}
                href={targetHref}
                className={`country-switcher__option ${isActive ? "country-switcher__option--active" : ""}`}
                role="option"
                aria-selected={isActive}
                onClick={() => setIsOpen(false)}
              >
                <span className="country-switcher__flag-wrapper">{country.flag}</span>
                <span className="country-switcher__option-name">{country.name}</span>
                {isActive && (
                  <span className="country-switcher__option-check" aria-hidden="true">
                    ✓
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        type="button"
        className="country-switcher__pill"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Select Country (Currently ${activeCountry.name})`}
      >
        <span className="country-switcher__flag-wrapper">{activeCountry.flag}</span>
        <span className="country-switcher__code">{activeCountry.code}</span>
        <span className={`country-switcher__chevron ${isOpen ? "country-switcher__chevron--open" : ""}`} aria-hidden="true">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  );
}
