import { LEGAL_REFUND_COPY } from "@/data/copy/legal-refund";
import LegalPageView from "./LegalPageView";
import type { RegionCode } from "@/data/regions";

export default function RefundView({ region }: { region: RegionCode }) {
  return (
    <LegalPageView
      copy={LEGAL_REFUND_COPY}
      region={region}
      pageType="refund"
      pagePath="/refund"
      breadcrumbTitle="Refund & Cancellation Policy"
    />
  );
}
