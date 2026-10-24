// Serves https://www.tutorexel.com/llms.txt (curated map of the site for AI tools).
// Google does not use llms.txt for Search; low cost, optional for other assistants and browser agents.
// Keep the facts here identical to what the pages say. Exclude this path from the region proxy/middleware.

export const dynamic = "force-static";

const S = "https://www.tutorexel.com";

const body = `# TutorExel

> Live online tutoring for school students in Australia, the United States, Canada and New Zealand. Maths, English and Science, taught 1-on-1 or in small groups by qualified tutors and aligned to each country's school curriculum, plus exam preparation and piano and guitar lessons.

Each region has its own section with local grade or year names, curriculum standards and tests:
- Australia: site root (/), Years 2 to 10, Australian Curriculum
- United States: /us, Grades 2 to 10, Common Core and state standards
- Canada: /ca, Grades 2 to 10, provincial curricula
- New Zealand: /nz, Years 2 to 10, New Zealand Curriculum

Each grade and subject page describes a 40-session course with term-by-term topics. Families can book a free assessment or a free trial lesson.

## Australia
- [Home](${S}/): overview, how it works, plans
- [Subjects by year](${S}/subjects)
- [Year 5 Maths example](${S}/subjects/year-5/maths)
- [Exam prep](${S}/exam-prep): NAPLAN, ICAS, OC, Selective, Scholarship
- [NAPLAN preparation](${S}/exam-prep/naplan)
- [Online tutoring by city](${S}/online-tutoring)
- [Pricing](${S}/pricing)
- [Free assessment](${S}/free-assessment)

## United States
- [Home](${S}/us)
- [Subjects by grade](${S}/us/subjects)
- [5th Grade Math example](${S}/us/subjects/grade-5/math)
- [Test prep](${S}/us/exam-prep): STAAR, MAP Growth, CAASPP, FAST, CogAT, state tests
- [Online tutoring by city](${S}/us/online-tutoring)
- [Pricing](${S}/us/pricing)

## Canada
- [Home](${S}/ca)
- [Subjects by grade](${S}/ca/subjects)
- [Test prep](${S}/ca/exam-prep): EQAO, OSSLT, FSA, PAT, gifted testing
- [EQAO preparation](${S}/ca/exam-prep/eqao)
- [Online tutoring by city](${S}/ca/online-tutoring)
- [Pricing](${S}/ca/pricing)

## New Zealand
- [Home](${S}/nz)
- [Subjects by year](${S}/nz/subjects)
- [Exam prep](${S}/nz/exam-prep): NCEA, e-asTTle, PAT, ICAS
- [Online tutoring by city](${S}/nz/online-tutoring)
- [Pricing](${S}/nz/pricing)

## Company
- [About](${S}/about)
- [Contact](${S}/contact)
- [Blog](${S}/blog)

## Optional
- [Sitemap](${S}/sitemap.xml)
`;

export function GET() {
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
