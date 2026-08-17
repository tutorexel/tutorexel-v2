"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export type Country = {
    code: string; // ISO 3166-1 alpha-2, lowercase — used for flagcdn.com
    name: string;
    currency: string; // ISO 4217 currency code
};

export const COUNTRIES: Country[] = [
    { code: "au", name: "Australia", currency: "AUD" },
    { code: "us", name: "USA", currency: "USD" },
    { code: "ca", name: "Canada", currency: "CAD" },
    { code: "nz", name: "New Zealand", currency: "NZD" },
];

function ChevronIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function CountrySelector({
    selected,
    onChange,
}: {
    selected: Country;
    onChange: (country: Country) => void;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="country-selector" ref={ref}>
            <button
                type="button"
                className="country-selector__trigger"
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <Image
                    src={`https://flagcdn.com/w40/${selected.code}.png`}
                    alt=""
                    width={18}
                    height={13}
                    className="country-selector__flag"
                    unoptimized
                />
                <span className="country-selector__name">{selected.name}</span>
                <span className={`country-selector__chevron ${open ? "country-selector__chevron--open" : ""}`}>
                    <ChevronIcon />
                </span>
            </button>

            {open && (
                <ul className="country-selector__menu" role="listbox">
                    {COUNTRIES.map((country) => (
                        <li key={country.code} role="option" aria-selected={country.code === selected.code}>
                            <button
                                type="button"
                                className={`country-selector__option ${country.code === selected.code ? "country-selector__option--active" : ""
                                    }`}
                                onClick={() => {
                                    onChange(country);
                                    setOpen(false);
                                }}
                            >
                                <Image
                                    src={`https://flagcdn.com/w40/${country.code}.png`}
                                    alt=""
                                    width={18}
                                    height={13}
                                    className="country-selector__flag"
                                    unoptimized
                                />
                                <span className="country-selector__name">{country.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}