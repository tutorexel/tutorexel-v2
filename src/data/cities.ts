export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateShort: string;
  population: string;
  schoolCount: string;
  description: string;
  localFact: string;
}

export const cities: CityData[] = [
  {
    slug: "sydney",
    name: "Sydney",
    state: "New South Wales",
    stateShort: "NSW",
    population: "5.3 million",
    schoolCount: "2,200+",
    description: "As Australia's largest city, Sydney families face intense academic competition. TutorExel provides structured online tutoring aligned to the NSW curriculum, helping students from Parramatta to the Northern Beaches achieve their potential.",
    localFact: "Sydney students consistently perform above the national NAPLAN average, but competition for selective school places means many families seek additional tutoring support.",
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    state: "Victoria",
    stateShort: "VIC",
    population: "5.1 million",
    schoolCount: "2,300+",
    description: "Melbourne's education-focused culture drives strong demand for quality tutoring. TutorExel delivers ACARA-aligned online sessions to students across Melbourne, from the CBD to the outer suburbs.",
    localFact: "Victoria's education system is one of the highest-performing in Australia, with Melbourne families particularly engaged in supplementary education for their children.",
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    state: "Queensland",
    stateShort: "QLD",
    population: "2.6 million",
    schoolCount: "1,300+",
    description: "Brisbane families benefit from TutorExel's structured online tutoring without the commute across the sprawling city. Our ACARA-aligned programs help Queensland students build confidence in Maths and English.",
    localFact: "Queensland's unique schooling structure means students transition to high school in Year 7, making strong primary school foundations especially important.",
  },
  {
    slug: "perth",
    name: "Perth",
    state: "Western Australia",
    stateShort: "WA",
    population: "2.1 million",
    schoolCount: "800+",
    description: "Perth's geographic isolation makes online tutoring particularly valuable. TutorExel connects WA students with expert tutors without being limited by local availability.",
    localFact: "Western Australia follows the Australian Curriculum with some state-specific adaptations, and TutorExel's ACARA-aligned content ensures full coverage of WA requirements.",
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    state: "South Australia",
    stateShort: "SA",
    population: "1.4 million",
    schoolCount: "600+",
    description: "Adelaide families trust TutorExel for consistent, high-quality online tutoring. Our structured programs help South Australian students excel in Maths and English from Year 2 to Year 7.",
    localFact: "South Australia's education system emphasises strong literacy and numeracy foundations, aligning perfectly with TutorExel's structured approach to tutoring.",
  },
];
