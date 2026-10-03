import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/contact",
  region: "au",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
