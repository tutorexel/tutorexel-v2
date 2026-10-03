"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { REGIONS } from "@/data/regions";
import { getCurrentRegion } from "@/utils/regionalLinks";
import "./CountryTabs.css";

export type Country = {
  code: string; // ISO 3166-1 alpha-2, lowercase, used for flagcdn.com
  name: string;
  currency: string; // ISO 4217 currency code
};

export const COUNTRIES: Country[] = REGIONS.map((r) => ({
  code: r.code,
  name: r.label,
  currency: r.currency,
}));

export default function CountryTabs({
  selected,
  onChange,
}: {
  selected: Country;
  onChange?: (country: Country) => void;
}) {
  const pathname = usePathname() || "";
  const currentRegion = getCurrentRegion(pathname);
  const activeRegion =
    REGIONS.find((r) => r.code === currentRegion) ||
    REGIONS.find((r) => r.code === selected.code.toLowerCase()) ||
    REGIONS[0];

  useEffect(() => {
    if (onChange && selected.code.toLowerCase() !== activeRegion.code.toLowerCase()) {
      onChange({
        code: activeRegion.code,
        name: activeRegion.label,
        currency: activeRegion.currency,
      });
    }
  }, [activeRegion, onChange, selected.code]);

  return (
    <div className="country-tabs country-tabs--single" aria-label="Current country">
      <div className="country-tabs__tab country-tabs__tab--single">
        <Image
          src={activeRegion.flagUrl}
          alt={`${activeRegion.label} flag`}
          width={22}
          height={15}
          className="country-tabs__flag"
          unoptimized
        />
        <span className="country-tabs__name">{activeRegion.label}</span>
      </div>
    </div>
  );
}