import { Metadata } from 'next';

function getYearLabel(yearId: string): string {
  const num = yearId.replace('year-', '');
  return `Year ${num}`;
}

function getSubjectLabel(subjectId: string): string {
  return subjectId === 'maths' ? 'Maths' : 'English';
}

function getAges(yearId: string): string {
  const ages: Record<string, string> = {
    'year-2': '7-8', 'year-3': '8-9', 'year-4': '9-10',
    'year-5': '10-11', 'year-6': '11-12', 'year-7': '12-13',
  };
  return ages[yearId] || '';
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ yearId: string; subjectId: string }>;
}): Promise<Metadata> {
  const { yearId, subjectId } = await params;
  const year = getYearLabel(yearId);
  const subject = getSubjectLabel(subjectId);
  const ages = getAges(yearId);

  const title = `${year} ${subject} Tutoring | Australian Curriculum Aligned | TutorExel`;
  const description = `Online ${subject} tutoring for ${year} students (Ages ${ages}). 40 structured sessions aligned with the Australian Curriculum (ACARA). 1:1 or small group live classes with qualified tutors.`;
  const url = `https://tutorexel.com/subjects/${yearId}/${subjectId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'TutorExel',
      locale: 'en',
      type: 'website',
      images: [{ url: '/images/banner/og-image.webp', width: 1200, height: 630, alt: `TutorExel - ${year} ${subject} Tutoring` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/banner/og-image.webp'],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function SubjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
