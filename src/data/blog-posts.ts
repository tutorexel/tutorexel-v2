export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: BlogContentBlock[];
}

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; variant: "tip" | "warning" | "info"; title: string; text: string };

export const blogCategories = [
  "All",
  "Maths Tips",
  "English Tips",
  "Study Skills",
  "Parent Guides",
  "Music",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-australian-curriculum-acara",
    title: "Understanding the Australian Curriculum: A Parent's Guide to ACARA",
    excerpt:
      "What is ACARA? How does the Australian curriculum work? And how can you tell if your child is meeting the standards?",
    category: "Parent Guides",
    date: "December 20, 2024",
    readTime: "3 min read",
    author: "TutorExel Team",
    image:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&h=400&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "As your child progresses through school, you may have heard the term ACARA — the Australian Curriculum, Assessment and Reporting Authority. But what does it actually mean for your child's education?",
      },
      {
        type: "paragraph",
        text: "ACARA develops and maintains the Australian Curriculum, which outlines what all young Australians should learn as they progress through schooling. It covers key learning areas including English, Mathematics, Science, and more.",
      },
      {
        type: "heading2",
        text: "What Does ACARA Cover?",
      },
      {
        type: "paragraph",
        text: "The Australian Curriculum is organised into learning areas and is structured around three dimensions: curriculum content, general capabilities, and cross-curriculum priorities.",
      },
      {
        type: "list",
        items: [
          "English and Mathematics are core learning areas from Foundation to Year 10",
          "Science, Humanities and Social Sciences are integrated from early years",
          "The Arts, Technologies, Health and PE are also covered",
          "General capabilities like literacy, numeracy, and critical thinking are embedded across all areas",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Parent Tip",
        text: "You can visit the ACARA website to see exactly what your child should be learning at each year level. This is a great way to identify if they are on track or need extra support.",
      },
      {
        type: "heading2",
        text: "How TutorExel Aligns With ACARA",
      },
      {
        type: "paragraph",
        text: "At TutorExel, every session is mapped directly to the ACARA curriculum standards for your child's year level. This means there are no gaps between what they learn with us and what they learn at school.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Why This Matters",
        text: "When tutoring is aligned to the national curriculum, your child builds on school learning rather than learning disconnected content. This leads to faster, more lasting improvement.",
      },
    ],
  },
  {
    slug: "year-5-maths-what-your-child-should-know",
    title: "Year 5 Maths: What Your Child Should Know By End Of Year",
    excerpt:
      "As your child progresses through Year 5 Maths curriculum, use this checklist to see where they should be and identify gaps to work on.",
    category: "Maths Tips",
    date: "November 14, 2022",
    readTime: "2 min read",
    author: "TutorExel Team",
    image:
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=400&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Year 5 is a pivotal year in Australian primary mathematics. It is where students transition from concrete concepts to more abstract thinking. Here is a comprehensive checklist of what your child should be comfortable with by the end of Year 5.",
      },
      {
        type: "heading2",
        text: "Number & Place Value",
      },
      {
        type: "paragraph",
        text: "By Year 5, students should be able to read, write, and order numbers to millions. They should understand place value to partition numbers and use this understanding in calculations.",
      },
      {
        type: "list",
        items: [
          "Read and write numbers up to millions",
          "Understand place value for each digit",
          "Round numbers to the nearest 10, 100, and 1000",
          "Compare and order large numbers using place value",
        ],
      },
      {
        type: "heading2",
        text: "Operations",
      },
      {
        type: "heading3",
        text: "Addition & Subtraction",
      },
      {
        type: "paragraph",
        text: "Students should be fluent with mental strategies and written algorithms for larger numbers. They should be able to solve multi-step word problems involving addition and subtraction.",
      },
      {
        type: "heading3",
        text: "Multiplication & Division",
      },
      {
        type: "paragraph",
        text: "Multiplication fact fluency is expected by Year 5. Students should know their times tables up to 12x12 and use efficient written methods for multiplication and division.",
      },
      {
        type: "list",
        items: [
          "Recall multiplication facts to 12 x 12",
          "Use written methods for multi-digit multiplication",
          "Divide by single-digit numbers with remainders",
          "Solve multi-step word problems",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Red Flag",
        text: "If your child still relies on finger counting for basic multiplication facts, this is a sign they need additional practice. Without fact fluency, more advanced topics become extremely difficult.",
      },
      {
        type: "heading2",
        text: "Fractions & Decimals",
      },
      {
        type: "paragraph",
        text: "This is where many students start to feel overwhelmed. But fractions and decimals are critical for Year 6 and beyond. Your child should be able to compare and order fractions with different denominators.",
      },
      {
        type: "list",
        items: [
          "Compare and order fractions with different denominators",
          "Add and subtract fractions with the same denominator",
          "Understand the relationship between fractions and decimals",
          "Round decimals to one decimal place",
        ],
      },
      {
        type: "heading2",
        text: "Measurement",
      },
      {
        type: "paragraph",
        text: "Students should be comfortable converting between common metric units and calculating perimeter and area of simple shapes.",
      },
      {
        type: "heading2",
        text: "Geometry & Space",
      },
      {
        type: "paragraph",
        text: "By Year 5, students should be able to identify and describe 2D and 3D shapes, understand angles, and work with simple coordinates.",
      },
      {
        type: "heading2",
        text: "Statistics & Probability",
      },
      {
        type: "paragraph",
        text: "Students should be able to read and interpret data from tables and graphs, and understand basic probability concepts like likely, unlikely, certain, and impossible.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Why This Matters",
        text: "Year 5 maths forms the foundation for Year 6 NAPLAN and high school mathematics. Gaps left unaddressed now will compound and become much harder to fix later.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Parent Tip",
        text: "Use this checklist to have a conversation with your child. Ask them to rate their confidence in each area from 1 to 5. This gives you a quick snapshot of where they might need extra help.",
      },
    ],
  },
  {
    slug: "online-tutoring-vs-in-person",
    title: "Online Tutoring vs In-Person: Which is Better for Your Child?",
    excerpt:
      "We compare the benefits of online tutoring and in-person tutoring to help you make the right choice for your family.",
    category: "Parent Guides",
    date: "December 20, 2024",
    readTime: "3 min read",
    author: "TutorExel Team",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "The debate between online and in-person tutoring is one many parents face. Both have their merits, but understanding the differences can help you make an informed decision.",
      },
      {
        type: "heading2",
        text: "Convenience & Flexibility",
      },
      {
        type: "paragraph",
        text: "Online tutoring eliminates travel time and allows students to learn from the comfort of their home. Sessions can be scheduled around your family's routine.",
      },
      {
        type: "heading2",
        text: "Quality of Instruction",
      },
      {
        type: "paragraph",
        text: "With platforms like TutorExel, online tutoring matches or exceeds the quality of in-person sessions through structured curriculum delivery and real-time interaction.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Parent Tip",
        text: "Try a free online session before committing. Most children adapt to the online format within the first session and often prefer it to in-person tutoring.",
      },
    ],
  },
  {
    slug: "signs-your-child-might-need-a-tutor",
    title: "7 Signs Your Child Might Need a Tutor",
    excerpt:
      "It is not always obvious. Here are the subtle signs that your child could benefit from additional academic support.",
    category: "Parent Guides",
    date: "December 20, 2024",
    readTime: "2 min read",
    author: "TutorExel Team",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Not every child who needs a tutor is \"failing\". Sometimes the signs are subtle: a dip in confidence, avoidance of homework, or reluctance to discuss school.",
      },
      {
        type: "heading2",
        text: "1. Declining Grades",
      },
      {
        type: "paragraph",
        text: "A gradual or sudden drop in marks can signal gaps in understanding that are compounding over time.",
      },
      {
        type: "heading2",
        text: "2. Homework Battles",
      },
      {
        type: "paragraph",
        text: "If homework has become a nightly struggle, it may indicate your child does not fully understand the material being covered in class.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Red Flag",
        text: "If your child frequently says \"I hate maths\" or \"I am dumb at reading\", these emotional responses often mask genuine learning gaps that need addressing.",
      },
    ],
  },
  {
    slug: "help-child-with-maths-homework",
    title: "How to Help Your Child with Maths Homework (Without Doing it for Them)",
    excerpt:
      "Practical strategies for parents who want to support their child's maths learning at home.",
    category: "Study Skills",
    date: "December 20, 2024",
    readTime: "3 min read",
    author: "TutorExel Team",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "It can be tempting to just give your child the answer when they are stuck on maths homework. But research shows that guided discovery is far more effective for long-term learning.",
      },
      {
        type: "heading2",
        text: "Ask Questions Instead of Giving Answers",
      },
      {
        type: "paragraph",
        text: "When your child is stuck, try asking: \"What do you know about this problem?\" or \"Can you draw a picture to help you understand?\"",
      },
      {
        type: "heading2",
        text: "Create a Positive Homework Environment",
      },
      {
        type: "paragraph",
        text: "A dedicated, quiet space with minimal distractions helps children focus and associate homework with productive learning.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Parent Tip",
        text: "Set a timer for 20-minute focused blocks. Children concentrate better in short bursts with breaks in between.",
      },
    ],
  },
  {
    slug: "australian-curriculum-parents-guide-acara-part-2",
    title: "Understanding the Australian Curriculum: A Parent's Guide to ACARA (Part 2)",
    excerpt:
      "What is ACARA? How does the Australian curriculum work? And how can you tell if your child is meeting the standards?",
    category: "Parent Guides",
    date: "December 20, 2024",
    readTime: "3 min read",
    author: "TutorExel Team",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "ACARA sets the framework that all Australian schools follow. Understanding this framework empowers you as a parent to track your child's academic progress and identify areas that need attention.",
      },
      {
        type: "heading2",
        text: "Key Learning Areas",
      },
      {
        type: "paragraph",
        text: "The curriculum covers English, Mathematics, Science, Humanities and Social Sciences, The Arts, Technologies, Health and Physical Education, and Languages.",
      },
      {
        type: "heading2",
        text: "Achievement Standards",
      },
      {
        type: "paragraph",
        text: "Each year level has specific achievement standards that describe the quality of learning students should typically demonstrate.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Why This Matters",
        text: "Understanding achievement standards helps you set realistic expectations and have informed conversations with your child's teachers about their progress.",
      },
    ],
  },
];
