import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/free-trial",
  region: "nz",
});

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
