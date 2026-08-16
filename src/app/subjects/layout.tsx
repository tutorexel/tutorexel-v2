import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subjects | TutorExel - Australian Curriculum Aligned Tutoring',
  description:
    'Australian aligned curriculum for Year 2 to Year 7. Maths and English tutoring structured around the ACARA national curriculum.',
  openGraph: {
    title: 'Subjects | TutorExel - Australian Curriculum Aligned Tutoring',
    description:
      'Australian aligned curriculum for Year 2 to Year 7. Maths and English tutoring structured around the ACARA national curriculum.',
    url: 'https://tutorexel.com/subjects',
    siteName: 'TutorExel',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: "/images/banner/og-image.webp", width: 1200, height: 630, alt: "TutorExel - Australian Online Tutoring" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subjects | TutorExel - Australian Curriculum Aligned Tutoring',
    description:
      'Australian aligned curriculum for Year 2 to Year 7. Maths and English tutoring structured around the ACARA national curriculum.',
    images: ["/images/banner/og-image.webp"],
  },
  alternates: {
    canonical: 'https://tutorexel.com/subjects',
  },
};

export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
