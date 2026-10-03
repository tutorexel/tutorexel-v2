"use client";

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { getRegionalHref, type RegionCode } from "@/utils/regionalLinks";

export interface RegionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  region?: RegionCode | string;
  children?: React.ReactNode;
}

/**
 * Region-aware Link component wrapping next/link.
 * Automatically resolves internal links to include the current active region prefix
 * unless explicitly overridden via the region prop.
 */
export const RegionLink = forwardRef<HTMLAnchorElement, RegionLinkProps>(
  function RegionLink({ href, region, ...props }, ref) {
    const pathname = usePathname() || "";
    const activeRegion = region || pathname;

    let targetHref = href;
    if (typeof href === "string") {
      targetHref = getRegionalHref(href, activeRegion);
    } else if (href && typeof href === "object" && typeof href.pathname === "string") {
      targetHref = {
        ...href,
        pathname: getRegionalHref(href.pathname, activeRegion),
      };
    }

    return <Link ref={ref} href={targetHref} {...props} />;
  }
);

RegionLink.displayName = "RegionLink";

export default RegionLink;
