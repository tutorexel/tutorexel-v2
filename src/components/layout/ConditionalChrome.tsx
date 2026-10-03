"use client";

/**
 * ConditionalChrome
 * Renders site header/footer/CTA on public pages only.
 * On /admin/* and /blocked routes, renders children standalone
 * so those pages get a clean layout without public navigation.
 */

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import UTMCapture from "./UTMCapture";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/utils/schema";
import { getCurrentRegion } from "@/utils/regionalLinks";

const STANDALONE_PREFIXES = ["/admin", "/blocked"];
const NO_HEADER_PREFIXES: string[] = [];

export default function ConditionalChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const isStandalone = STANDALONE_PREFIXES.some((p) => pathname.startsWith(p));
  const isNoHeader = NO_HEADER_PREFIXES.some((p) => pathname.startsWith(p));
  const currentRegion = getCurrentRegion(pathname);
  const organizationSchema = getOrganizationSchema(currentRegion);

  if (isStandalone) {
    return <main>{children}</main>;
  }

  if (isNoHeader) {
    return (
      <>
        <JsonLd data={organizationSchema} />
        <main>{children}</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <JsonLd data={organizationSchema} />
      <Header />
      <main>{children}</main>
      <Footer />
      <UTMCapture />
      <FloatingCTA />
    </>
  );
}
