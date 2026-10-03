import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/co-curricular/guitar/enquire",
  region: "nz",
});

export default function GuitarEnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
