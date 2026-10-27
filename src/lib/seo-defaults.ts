export const DEFAULT_ROBOTS_TXT = `User-agent: Googlebot
User-agent: Google-Extended
User-agent: Bingbot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: GPTBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Applebot
User-agent: Applebot-Extended
User-agent: DuckAssistBot
User-agent: Amazonbot
User-agent: Meta-ExternalAgent
User-agent: MistralAI-User
User-agent: CCBot
Allow: /
Allow: /_next/static/
Disallow: /api/
Disallow: /admin
Disallow: /admin/

User-agent: *
Allow: /
Allow: /_next/static/
Disallow: /api/
Disallow: /admin
Disallow: /admin/

Host: https://www.tutorexel.com
Sitemap: https://www.tutorexel.com/sitemap.xml
`;

export const DEFAULT_LLMS_TXT = `# TutorExel

> Live online tutoring for school students in Australia, the United States, Canada and New Zealand. Maths, English and Science, taught 1-on-1 or in small groups by qualified tutors and aligned to each country's school curriculum, plus exam preparation and piano and guitar lessons.

Each region has its own section with local grade or year names, curriculum standards and tests:
- Australia: site root (/), Years 2 to 10, Australian Curriculum
- United States: /us, Grades 2 to 10, Common Core and state standards
- Canada: /ca, Grades 2 to 10, provincial curricula
- New Zealand: /nz, Years 2 to 10, New Zealand Curriculum

Each grade and subject page describes a 40-session course with term-by-term topics. Families can book a free assessment or a free trial lesson.

## Australia
- [Home](https://www.tutorexel.com/)
- [Subjects by year](https://www.tutorexel.com/subjects)
- [Year 5 Maths example](https://www.tutorexel.com/subjects/year-5/maths)
- [Exam prep](https://www.tutorexel.com/exam-prep): NAPLAN, ICAS, OC, Selective, Scholarship
- [NAPLAN preparation](https://www.tutorexel.com/exam-prep/naplan)
- [Online tutoring by city](https://www.tutorexel.com/online-tutoring)
- [Pricing](https://www.tutorexel.com/pricing)
- [Free assessment](https://www.tutorexel.com/free-assessment)

## United States
- [Home](https://www.tutorexel.com/us)
- [Subjects by grade](https://www.tutorexel.com/us/subjects)
- [5th Grade Math example](https://www.tutorexel.com/us/subjects/grade-5/math)
- [Test prep](https://www.tutorexel.com/us/exam-prep): STAAR, MAP Growth, CAASPP, FAST, CogAT, state tests
- [Online tutoring by city](https://www.tutorexel.com/us/online-tutoring)
- [Pricing](https://www.tutorexel.com/us/pricing)

## Canada
- [Home](https://www.tutorexel.com/ca)
- [Subjects by grade](https://www.tutorexel.com/ca/subjects)
- [Test prep](https://www.tutorexel.com/ca/exam-prep): EQAO, OSSLT, FSA, PAT, gifted testing
- [EQAO preparation](https://www.tutorexel.com/ca/exam-prep/eqao)
- [Online tutoring by city](https://www.tutorexel.com/ca/online-tutoring)
- [Pricing](https://www.tutorexel.com/ca/pricing)

## New Zealand
- [Home](https://www.tutorexel.com/nz)
- [Subjects by year](https://www.tutorexel.com/nz/subjects)
- [Exam prep](https://www.tutorexel.com/nz/exam-prep): NCEA, e-asTTle, PAT, ICAS
- [Online tutoring by city](https://www.tutorexel.com/nz/online-tutoring)
- [Pricing](https://www.tutorexel.com/nz/pricing)

## Company
- [About](https://www.tutorexel.com/about)
- [Contact](https://www.tutorexel.com/contact)
- [Blog](https://www.tutorexel.com/blog)

## Optional
- [Sitemap](https://www.tutorexel.com/sitemap.xml)
`;

/**
 * Checks if robots.txt text contains a rule that disallows root under wildcard user-agent.
 */
export function isBlockingAllCrawlers(text: string): boolean {
  const lines = text.split(/\r?\n/);
  let inWildcardAgent = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const uaMatch = line.match(/^User-agent:\s*(.+)$/i);
    if (uaMatch) {
      const agent = uaMatch[1].trim();
      if (agent === "*") {
        inWildcardAgent = true;
      } else {
        inWildcardAgent = false;
      }
      continue;
    }

    if (inWildcardAgent) {
      // Check for Disallow: / or Disallow: / (with optional whitespace)
      if (/^Disallow:\s*\/\s*$/i.test(line)) {
        return true;
      }
    }
  }

  return false;
}
