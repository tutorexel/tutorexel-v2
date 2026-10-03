import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/contact",
  region: "nz",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
