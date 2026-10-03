import { buildMetadata } from "@/utils/seo";

export const metadata = buildMetadata({
  path: "/free-trial-booking",
  region: "us",
});

export default function FreeTrialBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
