import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/contact",
  region: "ca",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
