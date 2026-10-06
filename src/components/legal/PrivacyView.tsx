import { LEGAL_PRIVACY_COPY } from "@/data/copy/legal-privacy";
import LegalPageView from "./LegalPageView";
import type { RegionCode } from "@/data/regions";

export default function PrivacyView({ region }: { region: RegionCode }) {
  return (
    <LegalPageView
      copy={LEGAL_PRIVACY_COPY}
      region={region}
      pageType="privacy"
      pagePath="/privacy"
      breadcrumbTitle="Privacy Policy"
    />
  );
}
