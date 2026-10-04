import Image from "next/image";
import "./ProvinceChips.css";

export interface ProvinceInfo {
  code: string;
  name: string;
  flag: string;
  alt: string;
}

export const CANADIAN_PROVINCES: ProvinceInfo[] = [
  {
    code: "ON",
    name: "Ontario",
    flag: "/flags/ca/on.svg",
    alt: "Ontario flag",
  },
  {
    code: "BC",
    name: "British Columbia",
    flag: "/flags/ca/bc.svg",
    alt: "British Columbia flag",
  },
  {
    code: "AB",
    name: "Alberta",
    flag: "/flags/ca/ab.svg",
    alt: "Alberta flag",
  },
  {
    code: "QC",
    name: "Quebec",
    flag: "/flags/ca/qc.svg",
    alt: "Quebec flag",
  },
  {
    code: "MB",
    name: "Manitoba",
    flag: "/flags/ca/mb.svg",
    alt: "Manitoba flag",
  },
];

interface ProvinceChipsProps {
  className?: string;
}

export default function ProvinceChips({ className = "" }: ProvinceChipsProps) {
  return (
    <div className={`province-chips ${className}`.trim()}>
      {CANADIAN_PROVINCES.map((prov) => (
        <div
          key={prov.code}
          className="province-chip"
          aria-label={prov.name}
        >
          <Image
            src={prov.flag}
            alt={prov.alt}
            width={20}
            height={14}
            className="province-chip__flag"
            unoptimized
          />
          <span className="province-chip__code">{prov.code}</span>
        </div>
      ))}
    </div>
  );
}
