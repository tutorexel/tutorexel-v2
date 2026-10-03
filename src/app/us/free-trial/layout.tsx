import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/free-trial",
  region: "us",
});

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
