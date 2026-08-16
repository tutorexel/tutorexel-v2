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

  if (isStandalone) {
    return <main>{children}</main>;
  }

  if (isNoHeader) {
    return (
      <>
        <main>{children}</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <UTMCapture />
      <FloatingCTA />
    </>
  );
}
