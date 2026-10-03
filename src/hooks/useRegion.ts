"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getRegionFromPathname, getRegionalHref, type RegionCode } from "@/utils/regionalLinks";
import { getRegionConfig, type RegionConfig } from "@/data/regions";

export interface UseRegionReturn {
  region: RegionCode;
  basePath: string;
  config: RegionConfig;
  getHref: (path: string) => string;
}

/**
 * Client hook providing current region context, configuration, and link helper.
 */
export function useRegion(): UseRegionReturn {
  const pathname = usePathname() || "";
  const region = useMemo(() => getRegionFromPathname(pathname), [pathname]);
  const config = useMemo(() => getRegionConfig(region), [region]);
  const basePath = config.basePath;

  const getHref = useMemo(() => {
    return (path: string) => getRegionalHref(path, region);
  }, [region]);

  return {
    region,
    basePath,
    config,
    getHref,
  };
}

export default useRegion;
