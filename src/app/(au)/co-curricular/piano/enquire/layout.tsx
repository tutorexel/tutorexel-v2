import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/co-curricular/piano/enquire",
  region: "au",
});

export default function PianoEnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
