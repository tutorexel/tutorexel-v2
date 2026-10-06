import { LEGAL_TERMS_COPY } from "@/data/copy/legal-terms";
import LegalPageView from "./LegalPageView";
import type { RegionCode } from "@/data/regions";

export default function TermsView({ region }: { region: RegionCode }) {
  return (
    <LegalPageView
      copy={LEGAL_TERMS_COPY}
      region={region}
      pageType="terms"
      pagePath="/terms"
      breadcrumbTitle="Terms & Conditions"
    />
  );
}
