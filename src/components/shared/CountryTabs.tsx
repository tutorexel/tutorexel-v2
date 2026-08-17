"use client";

import Image from "next/image";
import "./CountryTabs.css";

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

export default function CountryTabs({
    selected,
    onChange,
}: {
    selected: Country;
    onChange: (country: Country) => void;
}) {
    return (
        <div className="country-tabs" role="tablist" aria-label="Select your country">
            {COUNTRIES.map((country) => {
                const isActive = country.code === selected.code;
                return (
                    <button
                        key={country.code}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`country-tabs__tab ${isActive ? "country-tabs__tab--active" : ""}`}
                        onClick={() => onChange(country)}
                    >
                        <Image
                            src={`https://flagcdn.com/80x60/${country.code}.png`}
                            alt=""
                            width={18}
                            height={13}
                            className="country-tabs__flag"
                            unoptimized
                        />
                        <span className="country-tabs__name">{country.name}</span>
                    </button>
                );
            })}
        </div>
    );
}