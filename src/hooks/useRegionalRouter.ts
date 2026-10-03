"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { getRegionalHref, getRegionFromPathname, type RegionCode } from "@/utils/regionalLinks";

/**
 * Client router wrapper that automatically applies regional prefixes
 * to router.push and router.replace.
 */
export function useRegionalRouter() {
  const router = useRouter();
  const pathname = usePathname() || "";
  const region = getRegionFromPathname(pathname);

  const push = useCallback(
    (href: string, options?: Parameters<typeof router.push>[1]) => {
      const target = getRegionalHref(href, region);
      return router.push(target, options);
    },
    [router, region]
  );

  const replace = useCallback(
    (href: string, options?: Parameters<typeof router.replace>[1]) => {
      const target = getRegionalHref(href, region);
      return router.replace(target, options);
    },
    [router, region]
  );

  return {
    ...router,
    push,
    replace,
    region,
  };
}

export default useRegionalRouter;
