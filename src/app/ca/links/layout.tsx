import { Metadata } from "next";
import { getRegionalAlternates } from "@/utils/seo";

export const metadata: Metadata = {
  title: "TutorExel — Links",
  description: "Australian online tutoring for Year 2-7. Maths, English, Science, Piano, Guitar. Free trial class available.",
  alternates: getRegionalAlternates('/links', 'ca'),
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
