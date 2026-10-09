export interface UsCurriculumTopic {
  no: string;
  topic: string;
  whatWeCover: string;
}

export interface UsCurriculumTerm {
  termKey: "term-1" | "term-2" | "term-3" | "term-4";
  termTitle: string;
  topics: UsCurriculumTopic[];
}

export interface UsCurriculumSubject {
  id: "english" | "math" | "science";
  label: string;
  href: string;
  terms: UsCurriculumTerm[];
}

export interface UsLessonStep {
  stepNum: string;
  title: string;
  duration: string;
  description: string;
}

export interface UsExploreCard {
  tag: string;
  title: string;
  text: string;
  buttonText: string;
  href: string;
}

export interface UsGradePageData {
  gradeNum: number;
  yearId: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    h1: string;
    subheading: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  intro: {
    text: string;
    keyTopics: {
      math: string;
      english: string;
      science: string;
    };
    parentTip: string;
  };
  outcomes: {
    eyebrow: string;
    h2: string;
    items: string[];
  };
  curriculum: {
    eyebrow: string;
    h2: string;
    subjects: UsCurriculumSubject[];
  };
  lockedBox: {
    h2: string;
    text: string;
    buttonText: string;
  };
  lessonStructure: {
    eyebrow: string;
    h2: string;
    steps: UsLessonStep[];
  };
  keepExploring: {
    h2: string;
    cards: UsExploreCard[];
  };
  finalCta: {
    h2: string;
    text: string;
    buttonText: string;
    phone: string;
    phoneHref: string;
  };
}

export const US_GRADE_PAGES_DATA: Record<string, UsGradePageData> = {
  "grade-2": {
    "gradeNum": 2,
    "yearId": "grade-2",
    "meta": {
      "title": "- Description: Online Grade 2 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "description": "Online Grade 2 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-2"
    },
    "hero": {
      "h1": "Grade 2 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards for Grade 2. Taught 1-on-1 or in small groups by qualified tutors who personalize every lesson.",
      "primaryBtn": "Try a Free Grade 2 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 2 is where kids turn early skills into real confidence in reading, writing, number sense and science. We build all three with hands-on activities, visual aids and familiar moments, from recess to the school lunch line.",
      "keyTopics": {
        "math": "place value to 1000, add and subtract within 100, money, time, fractions.",
        "english": "phonics, fluency, sentences, stories, opinion writing.",
        "science": "plants, habitats, materials, forces."
      },
      "parentTip": "Keep it short and fun. Read together for ten minutes, count coins from the piggy bank and ask what your child noticed outside. We make sure each idea sticks."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 2, Your Child Will...",
      "items": [
        "Read, write and compare three-digit numbers to 1000 with confidence",
        "Add and subtract within 100 with strategies, and explain their thinking",
        "Read fluently, spell common words and write clear stories and opinions",
        "Retell stories and answer questions using details from the text",
        "Explain what plants need and how animals live in different habitats",
        "Plan a fair test and use evidence to explain what happened and why"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 2 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-2/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Phonics: Vowel Teams and Long Vowels",
                  "whatWeCover": "Decode words with long vowel spellings and vowel teams such as ai, ea and oa, and read them in short passages."
                },
                {
                  "no": "02",
                  "topic": "Reading Fluency and Expression",
                  "whatWeCover": "Read grade-level text aloud with accuracy, pace and expression, and reread to fix mistakes."
                },
                {
                  "no": "03",
                  "topic": "Key Details in Stories",
                  "whatWeCover": "Ask and answer who, what, where, when, why and how questions to show understanding of key details in a story."
                },
                {
                  "no": "04",
                  "topic": "Retelling Stories and Fables",
                  "whatWeCover": "Retell fables and folktales from diverse cultures, and explain the central message or lesson."
                },
                {
                  "no": "05",
                  "topic": "Nouns: Common, Proper and Irregular Plurals",
                  "whatWeCover": "Use collective nouns and irregular plurals such as feet, children and mice, and capitalize proper nouns."
                },
                {
                  "no": "06",
                  "topic": "Complete Sentences and Punctuation",
                  "whatWeCover": "Write complete sentences with capital letters and ending marks, and fix fragments and run-ons."
                },
                {
                  "no": "07",
                  "topic": "Spelling Patterns and Word Study",
                  "whatWeCover": "Spell grade-level words with common patterns and irregular spellings, and use word lists and sound-it-out strategies."
                },
                {
                  "no": "08",
                  "topic": "Speaking and Listening: Sharing Time",
                  "whatWeCover": "Take turns in conversations, listen to a partner and share stories in complete sentences with a clear voice."
                },
                {
                  "no": "09",
                  "topic": "Writing Narrative: Personal Stories",
                  "whatWeCover": "Write a story about a real event, such as a field trip, with a beginning, middle, end and time-order words."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Characters and Their Responses",
                  "whatWeCover": "Describe how characters respond to events and challenges in a story, using details from the text."
                },
                {
                  "no": "02",
                  "topic": "Point of View and Dialogue",
                  "whatWeCover": "Notice who is telling the story, and read dialogue aloud using different voices for different characters."
                },
                {
                  "no": "03",
                  "topic": "Verbs and Past Tense",
                  "whatWeCover": "Use regular and irregular past tense verbs, such as ran, ate and went, to write about what already happened."
                },
                {
                  "no": "04",
                  "topic": "Adjectives and Adverbs",
                  "whatWeCover": "Add adjectives and adverbs to sentences to show how things look, feel and move, and choose the best describing word."
                },
                {
                  "no": "05",
                  "topic": "Prefixes and Suffixes",
                  "whatWeCover": "Use prefixes such as un- and re- and suffixes such as -ful and -less to work out the meaning of new words."
                },
                {
                  "no": "06",
                  "topic": "Informational Text: Main Topic and Details",
                  "whatWeCover": "Find the main topic of a text and its key details, and use headings, captions and bold words to locate facts."
                },
                {
                  "no": "07",
                  "topic": "Text Features and Reading for Facts",
                  "whatWeCover": "Use a table of contents, glossary and diagrams to find facts quickly in nonfiction books."
                },
                {
                  "no": "08",
                  "topic": "Opinion Writing",
                  "whatWeCover": "Write an opinion piece with a topic sentence, reasons and a closing sentence, such as the best recess game."
                },
                {
                  "no": "09",
                  "topic": "Fluency and Reading Aloud",
                  "whatWeCover": "Practice reading poems and short passages aloud with smooth pacing, and talk about what the author wants to say."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Comparing Two Versions of a Story",
                  "whatWeCover": "Compare two versions of the same story, such as Cinderella tales from different cultures, and discuss what changes."
                },
                {
                  "no": "02",
                  "topic": "Poetry: Rhyme, Rhythm and Repetition",
                  "whatWeCover": "Read and write short poems, noticing rhyme, rhythm and repeated lines that create feeling."
                },
                {
                  "no": "03",
                  "topic": "Compound Words and Contractions",
                  "whatWeCover": "Build compound words, form contractions such as can't and didn't, and use apostrophes correctly in writing."
                },
                {
                  "no": "04",
                  "topic": "Informative Writing",
                  "whatWeCover": "Write a short informational piece with a topic, facts and a concluding sentence, using what you learned from books."
                },
                {
                  "no": "05",
                  "topic": "Reading Informational Text: Author's Purpose",
                  "whatWeCover": "Explain why an author wrote a text, and describe the specific points that support the main idea."
                },
                {
                  "no": "06",
                  "topic": "Word Meaning and Context Clues",
                  "whatWeCover": "Use sentence clues, pictures and root words to figure out unknown words, and check meaning in a dictionary."
                },
                {
                  "no": "07",
                  "topic": "Shades of Meaning",
                  "whatWeCover": "Tell apart closely related verbs and adjectives such as walk, stroll and march, and pick the most exact word."
                },
                {
                  "no": "08",
                  "topic": "Research Project: Read and Write",
                  "whatWeCover": "Gather facts from several books on one topic, such as state parks, and write a short report together."
                },
                {
                  "no": "09",
                  "topic": "Revising and Editing Writing",
                  "whatWeCover": "Reread writing to add details, fix capital letters, ending marks and spelling, and share it with a partner."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Using Illustrations and Text Together",
                  "whatWeCover": "Use pictures, diagrams and words together to understand a text, and explain how they work as a team."
                },
                {
                  "no": "02",
                  "topic": "Sentence Types and Simple, Compound Sentences",
                  "whatWeCover": "Write telling, asking and exclaiming sentences, and join two ideas with and, but or so in a compound sentence."
                },
                {
                  "no": "03",
                  "topic": "Writing Stories With Description",
                  "whatWeCover": "Write a story with a clear sequence, a problem and solution, and descriptive details about characters and setting."
                },
                {
                  "no": "04",
                  "topic": "Writing Opinion Pieces With Linking Words",
                  "whatWeCover": "Use linking words such as because, and, also and another reason to connect opinions to reasons."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary Building: Synonyms and Antonyms",
                  "whatWeCover": "Sort and use synonyms and antonyms, and use new words in speaking and writing across all school subjects."
                },
                {
                  "no": "06",
                  "topic": "Reading Longer Chapter Books",
                  "whatWeCover": "Read an early chapter book, track characters and plot across chapters and keep a reading log of favorite parts."
                },
                {
                  "no": "07",
                  "topic": "Giving a Short Talk",
                  "whatWeCover": "Prepare and present a short talk with a clear opening and facts, speaking in complete sentences to the class."
                },
                {
                  "no": "08",
                  "topic": "Reading Review: Fiction and Nonfiction",
                  "whatWeCover": "Revisit story elements, main topic, key details and text features with mixed passages of both types."
                },
                {
                  "no": "09",
                  "topic": "Grade 3 Readiness: Reading and Writing",
                  "whatWeCover": "Strengthen stamina, handwriting and paragraph writing, and get comfortable with the first state reading tests in Grade 3."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-2/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Adding and Subtracting Within 20",
                  "whatWeCover": "Add and subtract within 20 using doubles, make-a-ten and fact families, building toward quick recall of sums."
                },
                {
                  "no": "02",
                  "topic": "Place Value to 1000",
                  "whatWeCover": "Build three-digit numbers with base-ten blocks and explain what the hundreds, tens and ones digits are worth."
                },
                {
                  "no": "03",
                  "topic": "Counting by 5s, 10s and 100s",
                  "whatWeCover": "Skip count from any starting number to 1000, linking the patterns to nickels, dimes and number lines."
                },
                {
                  "no": "04",
                  "topic": "Reading and Writing Numbers to 1000",
                  "whatWeCover": "Read and write numbers in standard form, word form and expanded form, such as 400 + 30 + 6."
                },
                {
                  "no": "05",
                  "topic": "Comparing Three-Digit Numbers",
                  "whatWeCover": "Compare numbers with the symbols greater than, less than and equal to, and order sets from least to greatest."
                },
                {
                  "no": "06",
                  "topic": "Odd and Even Numbers",
                  "whatWeCover": "Sort numbers into odd and even by pairing objects, and write an even number as a sum of two equal addends."
                },
                {
                  "no": "07",
                  "topic": "Mental Math: 10 More and 100 More",
                  "whatWeCover": "Add or subtract 10 or 100 in your head, and explain how the digits change without counting one by one."
                },
                {
                  "no": "08",
                  "topic": "One-Step Word Problems Within 100",
                  "whatWeCover": "Solve adding, taking from, putting together and comparing stories using drawings, equations and a symbol for the unknown."
                },
                {
                  "no": "09",
                  "topic": "Reading Picture Graphs and Bar Graphs",
                  "whatWeCover": "Collect data, draw a picture graph or bar graph, and answer how many more and how many less questions."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Adding Two-Digit Numbers",
                  "whatWeCover": "Add within 100 using place value, number lines and regrouping, such as pizza slices sold at the school lunch sale."
                },
                {
                  "no": "02",
                  "topic": "Subtracting Two-Digit Numbers",
                  "whatWeCover": "Subtract within 100 by trading a ten for ten ones, and check each answer with addition."
                },
                {
                  "no": "03",
                  "topic": "Two-Step Word Problems",
                  "whatWeCover": "Solve two-step stories within 100, such as Little League snack sales, and write an equation with a letter or box for the unknown."
                },
                {
                  "no": "04",
                  "topic": "Adding Up to Four Two-Digit Numbers",
                  "whatWeCover": "Add three or four two-digit numbers using place value, friendly numbers and the properties of addition."
                },
                {
                  "no": "05",
                  "topic": "Adding Within 1000",
                  "whatWeCover": "Add three-digit numbers with base-ten blocks, drawings and written methods, composing a new ten or hundred when needed."
                },
                {
                  "no": "06",
                  "topic": "Subtracting Within 1000",
                  "whatWeCover": "Subtract three-digit numbers by decomposing a hundred or ten, and explain each step using place value."
                },
                {
                  "no": "07",
                  "topic": "Equal Groups and Arrays",
                  "whatWeCover": "Arrange objects in up to five rows and five columns, and write the sum of equal addends that matches the array."
                },
                {
                  "no": "08",
                  "topic": "Mental Strategies Within 100",
                  "whatWeCover": "Add and subtract two-digit numbers mentally by making tens, using doubles and breaking numbers apart."
                },
                {
                  "no": "09",
                  "topic": "Counting Coins: Quarters, Dimes, Nickels and Pennies",
                  "whatWeCover": "Count mixed coins and bills to solve dollar and cents problems, using the dollar sign and cent sign correctly."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Measuring Length in Inches and Feet",
                  "whatWeCover": "Measure objects with rulers and yardsticks in inches and feet, and choose the right tool and unit for the job."
                },
                {
                  "no": "02",
                  "topic": "Measuring in Centimeters and Meters",
                  "whatWeCover": "Measure in metric units, estimate lengths and explain why a longer unit gives a smaller number."
                },
                {
                  "no": "03",
                  "topic": "Comparing Lengths and Number Line Diagrams",
                  "whatWeCover": "Find how much longer one object is than another, and show whole number sums and differences on a number line."
                },
                {
                  "no": "04",
                  "topic": "Telling Time to Five Minutes",
                  "whatWeCover": "Read analog and digital clocks to the nearest five minutes and use a.m. and p.m., from recess to bedtime."
                },
                {
                  "no": "05",
                  "topic": "Line Plots",
                  "whatWeCover": "Measure several objects to the nearest whole unit and show the data on a line plot with a number line scale."
                },
                {
                  "no": "06",
                  "topic": "Solving Length Word Problems",
                  "whatWeCover": "Use addition and subtraction within 100 to solve stories about lengths, such as road trip maps and playground distances."
                },
                {
                  "no": "07",
                  "topic": "Money Word Problems",
                  "whatWeCover": "Solve dollar and cents problems, such as making change at a lemonade stand, using drawings and equations."
                },
                {
                  "no": "08",
                  "topic": "Time and Calendar Reasoning",
                  "whatWeCover": "Use calendars and clocks to work out how long events take and how many days or weeks are in a month."
                },
                {
                  "no": "09",
                  "topic": "Reasoning With Measurement Data",
                  "whatWeCover": "Read and make graphs of measurement data, and write number sentences to answer questions about the results."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Identifying and Drawing Shapes",
                  "whatWeCover": "Recognize and draw triangles, quadrilaterals, pentagons, hexagons and cubes by counting their sides, angles and faces."
                },
                {
                  "no": "02",
                  "topic": "Partitioning Rectangles Into Rows and Columns",
                  "whatWeCover": "Split a rectangle into equal squares, count them and connect the picture to repeated addition."
                },
                {
                  "no": "03",
                  "topic": "Halves, Thirds and Fourths",
                  "whatWeCover": "Divide circles and rectangles into two, three or four equal shares, and name them as halves, thirds or fourths."
                },
                {
                  "no": "04",
                  "topic": "Equal Shares of Different Shapes",
                  "whatWeCover": "See that equal shares can look different, and explain why two halves of the same pizza are the same size."
                },
                {
                  "no": "05",
                  "topic": "Fluency Practice: Facts Within 20",
                  "whatWeCover": "Build fast, accurate recall of all addition and subtraction facts within 20, and know sums of two one-digit numbers from memory."
                },
                {
                  "no": "06",
                  "topic": "Fluency Practice: Add and Subtract Within 100",
                  "whatWeCover": "Add and subtract within 100 with accuracy, and choose a strategy that fits the numbers."
                },
                {
                  "no": "07",
                  "topic": "Place Value and Number Sense Review",
                  "whatWeCover": "Revisit counting, comparing and expanded form to 1000, and explain thinking with models and words."
                },
                {
                  "no": "08",
                  "topic": "Problem-Solving Strategies",
                  "whatWeCover": "Use drawing, tables and working backward to solve multi-step stories, and explain each choice to a partner."
                },
                {
                  "no": "09",
                  "topic": "Math Practices and Grade 3 Readiness",
                  "whatWeCover": "Get ready for Grade 3 with early multiplication ideas, fractions on a number line and clear math explanations."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-2/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Properties of Materials",
                  "whatWeCover": "Describe and test materials by color, texture, hardness and flexibility, and sort them by their properties."
                },
                {
                  "no": "02",
                  "topic": "Choosing the Right Material",
                  "whatWeCover": "Pick materials for a job, such as a rain boot or a lunch box, based on tests of their properties."
                },
                {
                  "no": "03",
                  "topic": "Solids, Liquids and Gases",
                  "whatWeCover": "Observe how matter can be solid or liquid, and see how heating and cooling can change it, as with melting ice."
                },
                {
                  "no": "04",
                  "topic": "Reversible and Irreversible Changes",
                  "whatWeCover": "Compare changes that can be undone, such as melting, with those that cannot, such as baking or burning."
                },
                {
                  "no": "05",
                  "topic": "Building With Small Pieces",
                  "whatWeCover": "See how small pieces can be put together to make new objects, such as bricks, blocks and clay shapes."
                },
                {
                  "no": "06",
                  "topic": "Asking Questions and Making Observations",
                  "whatWeCover": "Ask testable questions, use senses and tools to observe, and record results in tables and drawings."
                },
                {
                  "no": "07",
                  "topic": "Planning a Simple Investigation",
                  "whatWeCover": "Plan a fair test with one change, make predictions and share results with a partner using clear science words."
                },
                {
                  "no": "08",
                  "topic": "Using Data and Evidence",
                  "whatWeCover": "Look at simple data and charts, and use the evidence to support a claim about what happened."
                },
                {
                  "no": "09",
                  "topic": "Safe Science and Tools",
                  "whatWeCover": "Use rulers, hand lenses and thermometers safely, and follow lab rules during hands-on science activities."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "What Plants Need to Grow",
                  "whatWeCover": "Investigate how plants need sunlight and water to grow, using bean seeds and a sunny or dark spot."
                },
                {
                  "no": "02",
                  "topic": "Seed Dispersal",
                  "whatWeCover": "Explore how wind, water and animals move seeds, from maple helicopters to burrs on a dog's fur."
                },
                {
                  "no": "03",
                  "topic": "Pollination and Plant Parts",
                  "whatWeCover": "Name the roots, stem, leaves and flowers, and see how bees and other animals help plants make seeds."
                },
                {
                  "no": "04",
                  "topic": "Plant Life Cycles",
                  "whatWeCover": "Order the stages of a plant life cycle from seed to adult plant, and compare plants such as sunflowers and pumpkins."
                },
                {
                  "no": "05",
                  "topic": "Animal Life Cycles",
                  "whatWeCover": "Compare life cycles such as butterflies, frogs and chickens, and describe how young animals look different from adults."
                },
                {
                  "no": "06",
                  "topic": "Habitats Around Us",
                  "whatWeCover": "Explore forests, deserts, oceans and wetlands in the United States, and the animals and plants that live in each."
                },
                {
                  "no": "07",
                  "topic": "Food Chains in a Habitat",
                  "whatWeCover": "Draw simple food chains showing how energy passes from plants to animals in a pond, forest or backyard."
                },
                {
                  "no": "08",
                  "topic": "Biodiversity: Many Kinds of Life",
                  "whatWeCover": "Compare the variety of plants and animals in two different habitats, such as a city park and a state park."
                },
                {
                  "no": "09",
                  "topic": "Modeling Plant and Animal Interdependence",
                  "whatWeCover": "Build models showing how animals depend on plants, and plants on animals, for food, shelter and seed spreading."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Earth Events: Fast and Slow",
                  "whatWeCover": "Compare fast changes, such as volcanoes and floods, with slow ones, such as erosion, and give real examples."
                },
                {
                  "no": "02",
                  "topic": "Wind and Water Change the Land",
                  "whatWeCover": "Model how wind and moving water change the land, using sand and a stream table to build and wear down hills."
                },
                {
                  "no": "03",
                  "topic": "Slowing Erosion: Design Solutions",
                  "whatWeCover": "Design and test ways to slow erosion, such as plants or rocks, and compare which solution works better."
                },
                {
                  "no": "04",
                  "topic": "Landforms Around the World",
                  "whatWeCover": "Identify mountains, valleys, canyons and plains, and find them on maps of the United States."
                },
                {
                  "no": "05",
                  "topic": "Bodies of Water",
                  "whatWeCover": "Map oceans, rivers, lakes and ponds, and tell where water is solid or liquid in different places."
                },
                {
                  "no": "06",
                  "topic": "Reading Simple Maps",
                  "whatWeCover": "Use maps and models to show the shape and kind of land and water in an area, including a map key."
                },
                {
                  "no": "07",
                  "topic": "Weather and Seasons",
                  "whatWeCover": "Track daily weather and describe how it changes with the seasons, from snow days to summer heat."
                },
                {
                  "no": "08",
                  "topic": "Rocks, Soil and Sand",
                  "whatWeCover": "Sort rocks and soil by size, color and texture, and talk about how rocks break into smaller pieces."
                },
                {
                  "no": "09",
                  "topic": "Natural Hazards and Staying Safe",
                  "whatWeCover": "Learn how people plan for events like hurricanes, tornadoes and wildfires, and how to stay safe at school and home."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Engineering Design: Ask, Imagine, Plan",
                  "whatWeCover": "Define a problem in a clear way, sketch solutions and decide which plan to build first."
                },
                {
                  "no": "02",
                  "topic": "Build, Test and Improve",
                  "whatWeCover": "Build a model, test it and make it better, such as a bridge made from craft sticks, then explain what changed."
                },
                {
                  "no": "03",
                  "topic": "Comparing Designs",
                  "whatWeCover": "Compare two designs for the same problem, such as two paper airplanes, and use data to say which works best."
                },
                {
                  "no": "04",
                  "topic": "Pushes, Pulls and Motion",
                  "whatWeCover": "Observe how pushes and pulls change an object's motion, using ramps, balls and toy cars."
                },
                {
                  "no": "05",
                  "topic": "Sound and Light",
                  "whatWeCover": "Explore how sound is made by vibration and how light travels, using rubber bands, flashlights and shadows."
                },
                {
                  "no": "06",
                  "topic": "Magnets and Forces",
                  "whatWeCover": "Test what magnets stick to, and compare the strength of pushes and pulls over a distance."
                },
                {
                  "no": "07",
                  "topic": "Our Sun and Earth",
                  "whatWeCover": "Describe how the Sun warms land and water, and why we have day and night."
                },
                {
                  "no": "08",
                  "topic": "Science Fair Practice",
                  "whatWeCover": "Choose a question, do a simple test, record the results and share a short talk with the class."
                },
                {
                  "no": "09",
                  "topic": "Science Review and Grade 3 Readiness",
                  "whatWeCover": "Revisit the big ideas of Grade 2 and get ready for Grade 3 science, including how state science tests work in Grade 5."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own."
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 3 Tutoring",
          "text": "Grade 3 is the first year of state testing. Get ready with Math, English and Science, 40 live lessons per subject.",
          "buttonText": "View Grade 3",
          "href": "/us/subjects/grade-3"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-3": {
    "gradeNum": 3,
    "yearId": "grade-3",
    "meta": {
      "title": "Grade 3 Tutoring USA | Math, English, Science",
      "description": "Online Grade 3 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-3"
    },
    "hero": {
      "h1": "Grade 3 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards and ready for Grade 3 state tests. Taught in personalized 1-on-1 or small group classes by qualified tutors.",
      "primaryBtn": "Try a Free Grade 3 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 3 is the first state-tested year, and the jump to multiplication, fractions and longer texts can feel big. We build confidence through hands-on practice and familiar examples, from recess and school lunch to Little League.",
      "keyTopics": {
        "math": "multiplication and division, fractions, area and perimeter, time.",
        "english": "reading comprehension, narrative and opinion writing, grammar.",
        "science": "forces, life cycles, habitats, weather."
      },
      "parentTip": "Practice math facts for ten minutes a day, like quarters and dimes at the store. Read together each night and ask your child to retell the story. We keep every idea steady before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 3, Your Child Will...",
      "items": [
        "Multiply and divide within 100 with fluency and explain the strategy",
        "Understand fractions as parts of a whole and place them on a number line",
        "Read grade level texts closely and answer questions using text evidence",
        "Write clear narratives, opinions and reports with correct grammar and spelling",
        "Explain how forces and magnets change the motion of objects",
        "Describe life cycles, habitats and weather patterns using evidence"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 3 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-3/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Key Details in Stories",
                  "whatWeCover": "Read grade level stories, ask and answer questions, and point to key details in the text as evidence."
                },
                {
                  "no": "02",
                  "topic": "Central Message and Theme",
                  "whatWeCover": "Retell fables and folktales from different cultures and explain the lesson or central message."
                },
                {
                  "no": "03",
                  "topic": "Characters and Their Actions",
                  "whatWeCover": "Describe how characters' traits, motivations and feelings shape the events of a story."
                },
                {
                  "no": "04",
                  "topic": "Narrative Writing: Story Beginnings",
                  "whatWeCover": "Plan and write a story with a clear setting, characters and an opening that hooks the reader."
                },
                {
                  "no": "05",
                  "topic": "Narrative Writing: Events and Endings",
                  "whatWeCover": "Sequence events with transition words, add dialogue and details, and finish with a satisfying ending."
                },
                {
                  "no": "06",
                  "topic": "Nouns and Plural Nouns",
                  "whatWeCover": "Identify nouns and form regular and irregular plurals, such as dog to dogs and mouse to mice."
                },
                {
                  "no": "07",
                  "topic": "Verbs and Verb Tenses",
                  "whatWeCover": "Use action verbs and form simple past, present and future tenses correctly in sentences."
                },
                {
                  "no": "08",
                  "topic": "Phonics and Spelling Patterns",
                  "whatWeCover": "Use syllable types, common spelling rules and word families to read and spell longer words."
                },
                {
                  "no": "09",
                  "topic": "Reading Fluency and Read Aloud",
                  "whatWeCover": "Practice reading aloud with accuracy, expression and pace, then discuss the text with a partner."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Main Idea and Key Details",
                  "whatWeCover": "Find the main idea of an informational text and the details that support it."
                },
                {
                  "no": "02",
                  "topic": "Text Features",
                  "whatWeCover": "Use headings, captions, diagrams, glossaries and maps to locate information quickly."
                },
                {
                  "no": "03",
                  "topic": "Asking and Answering Questions",
                  "whatWeCover": "Refer to the text to answer who, what, where, when, why and how questions with evidence."
                },
                {
                  "no": "04",
                  "topic": "Cause and Effect and Sequence",
                  "whatWeCover": "Describe how events, ideas and steps connect in history, science and technical texts."
                },
                {
                  "no": "05",
                  "topic": "Opinion Writing",
                  "whatWeCover": "Introduce a topic, state an opinion, give reasons and use linking words like because and also."
                },
                {
                  "no": "06",
                  "topic": "Adjectives and Adverbs",
                  "whatWeCover": "Choose adjectives and adverbs that make writing more precise and interesting."
                },
                {
                  "no": "07",
                  "topic": "Conjunctions and Complete Sentences",
                  "whatWeCover": "Combine ideas with and, but, or and so, and fix run-on sentences and fragments."
                },
                {
                  "no": "08",
                  "topic": "Capitalization and Punctuation",
                  "whatWeCover": "Use capital letters, commas in addresses and dates, and quotation marks in dialogue."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Discussions and Sharing",
                  "whatWeCover": "Take part in group talks, follow agreed rules, ask questions and build on what others say."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Word Meaning with Context Clues",
                  "whatWeCover": "Use sentence clues, definitions and examples to work out the meaning of unknown words."
                },
                {
                  "no": "02",
                  "topic": "Prefixes and Suffixes",
                  "whatWeCover": "Use affixes such as un, re, pre, ful and less to figure out and build new words."
                },
                {
                  "no": "03",
                  "topic": "Roots and Word Families",
                  "whatWeCover": "Spot Greek and Latin roots and related words to grow vocabulary and spelling."
                },
                {
                  "no": "04",
                  "topic": "Literal and Nonliteral Language",
                  "whatWeCover": "Explain similes, metaphors and idioms such as raining cats and dogs in context."
                },
                {
                  "no": "05",
                  "topic": "Point of View",
                  "whatWeCover": "Tell the difference between your own point of view and the narrator's or a character's."
                },
                {
                  "no": "06",
                  "topic": "Informative Writing",
                  "whatWeCover": "Write a short report that introduces a topic, groups related facts and ends with a conclusion."
                },
                {
                  "no": "07",
                  "topic": "Research and Note Taking",
                  "whatWeCover": "Gather facts from books and trusted websites, take notes and sort them into categories."
                },
                {
                  "no": "08",
                  "topic": "Possessives and Contractions",
                  "whatWeCover": "Form and use possessive nouns, pronouns and contractions such as it's and its correctly."
                },
                {
                  "no": "09",
                  "topic": "Reading Stories in a Series",
                  "whatWeCover": "Compare books by the same author or about the same characters and settings."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry and Rhyme",
                  "whatWeCover": "Read poems, notice stanzas, rhyme and rhythm, and describe how they create meaning."
                },
                {
                  "no": "02",
                  "topic": "Drama and Reader's Theater",
                  "whatWeCover": "Read scenes aloud, tell prose from poems and plays, and explain how dialogue moves the story."
                },
                {
                  "no": "03",
                  "topic": "Illustrations and Meaning",
                  "whatWeCover": "Explain how pictures and visuals add to the mood and message of a text."
                },
                {
                  "no": "04",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare the themes, settings and plots of two stories, and two texts on the same topic."
                },
                {
                  "no": "05",
                  "topic": "Writing About Reading",
                  "whatWeCover": "Write short responses that use text evidence, as practiced for state reading tests."
                },
                {
                  "no": "06",
                  "topic": "Revising and Editing",
                  "whatWeCover": "Plan, revise and edit drafts with a checklist, and learn how to use feedback from peers and tutors."
                },
                {
                  "no": "07",
                  "topic": "Handwriting, Cursive and Keyboarding",
                  "whatWeCover": "Practice neat handwriting and cursive letters, and build early keyboarding skills for typed responses."
                },
                {
                  "no": "08",
                  "topic": "Presenting and Speaking Clearly",
                  "whatWeCover": "Give a short talk with eye contact, a clear voice and relevant facts and details."
                },
                {
                  "no": "09",
                  "topic": "Independent Reading and Book Talks",
                  "whatWeCover": "Choose books at the right level, track reading progress and share a recommendation."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-3/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Equal Groups and Multiplication",
                  "whatWeCover": "Describe equal groups as multiplication, such as 4 groups of 6 cupcakes, and write the matching equation."
                },
                {
                  "no": "02",
                  "topic": "Arrays and Rows",
                  "whatWeCover": "Build arrays with counters, count rows and columns, and see why 3 x 5 and 5 x 3 give the same total."
                },
                {
                  "no": "03",
                  "topic": "Multiplication on the Number Line",
                  "whatWeCover": "Show equal jumps on a number line to model multiplication and connect repeated addition to products."
                },
                {
                  "no": "04",
                  "topic": "Sharing and Grouping: Division",
                  "whatWeCover": "Split items into equal shares or equal groups, such as 24 stickers among 4 friends, and write the division."
                },
                {
                  "no": "05",
                  "topic": "Multiplication and Division Fact Families",
                  "whatWeCover": "Link three numbers into related multiplication and division facts and use them to find unknown numbers."
                },
                {
                  "no": "06",
                  "topic": "Facts for 2, 5 and 10",
                  "whatWeCover": "Build fast recall of the 2s, 5s and 10s with skip counting, quarters and dimes, and quick games."
                },
                {
                  "no": "07",
                  "topic": "Properties of Multiplication",
                  "whatWeCover": "Use the commutative and distributive properties to break hard facts into easier ones, like 6 x 4 as 5 x 4 plus 1 x 4."
                },
                {
                  "no": "08",
                  "topic": "Facts for 3 and 4",
                  "whatWeCover": "Learn the 3s and 4s through doubling, arrays and patterns until recall feels automatic."
                },
                {
                  "no": "09",
                  "topic": "Word Problems with Equal Groups",
                  "whatWeCover": "Read multiplication and division stories, draw a model, and solve using a letter for the unknown."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Facts for 6 and 7",
                  "whatWeCover": "Use known facts and strategies such as 5 plus one more group to master the 6s and 7s."
                },
                {
                  "no": "02",
                  "topic": "Facts for 8 and 9",
                  "whatWeCover": "Learn the 8s by doubling the 4s and spot the finger and digit patterns that make the 9s easy."
                },
                {
                  "no": "03",
                  "topic": "Division Facts Within 100",
                  "whatWeCover": "Use multiplication facts to solve division, such as 56 divided by 7, and explain the connection."
                },
                {
                  "no": "04",
                  "topic": "Finding the Unknown",
                  "whatWeCover": "Solve equations like 8 x __ = 48 and 63 divided by __ = 9 using fact families and models."
                },
                {
                  "no": "05",
                  "topic": "Patterns in the Multiplication Table",
                  "whatWeCover": "Explore patterns in the times table, including even and odd products, and explain why they work."
                },
                {
                  "no": "06",
                  "topic": "Multiplying by Multiples of 10",
                  "whatWeCover": "Multiply one-digit numbers by 10, 20, 30 and so on using place value, such as 7 x 40."
                },
                {
                  "no": "07",
                  "topic": "Two-Step Word Problems",
                  "whatWeCover": "Solve problems that need two operations, like buying snacks at a ball game, and check answers for sense."
                },
                {
                  "no": "08",
                  "topic": "Estimating and Rounding in Problems",
                  "whatWeCover": "Estimate sums and products by rounding and decide whether an answer is reasonable."
                },
                {
                  "no": "09",
                  "topic": "Order of Operations and Equations",
                  "whatWeCover": "Write equations for stories, using a letter for the unknown, and solve them step by step."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to 1,000",
                  "whatWeCover": "Read, write and compare numbers to 1,000 in standard, word and expanded form."
                },
                {
                  "no": "02",
                  "topic": "Rounding to the Nearest 10 and 100",
                  "whatWeCover": "Round whole numbers using number lines and place value, such as 468 to 470 and 500."
                },
                {
                  "no": "03",
                  "topic": "Adding Within 1,000",
                  "whatWeCover": "Add three-digit numbers with place value strategies and the standard algorithm, and check by estimating."
                },
                {
                  "no": "04",
                  "topic": "Subtracting Within 1,000",
                  "whatWeCover": "Subtract three-digit numbers with regrouping across tens and hundreds, and check using addition."
                },
                {
                  "no": "05",
                  "topic": "Unit Fractions",
                  "whatWeCover": "Understand a fraction as equal parts of a whole, such as 1/4 of a pizza, and name unit fractions."
                },
                {
                  "no": "06",
                  "topic": "Fractions on a Number Line",
                  "whatWeCover": "Place fractions like 3/4 on a number line from 0 to 1 and see each as a distance from zero."
                },
                {
                  "no": "07",
                  "topic": "Equivalent Fractions",
                  "whatWeCover": "Use models and number lines to show that fractions like 1/2 and 2/4 name the same amount."
                },
                {
                  "no": "08",
                  "topic": "Comparing Fractions",
                  "whatWeCover": "Compare fractions with the same numerator or denominator using models and the signs for greater than and less than."
                },
                {
                  "no": "09",
                  "topic": "Fractions as Whole Numbers",
                  "whatWeCover": "Show whole numbers as fractions, such as 3 as 3/1, and find fractions that equal 1."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Telling Time to the Minute",
                  "whatWeCover": "Read analog and digital clocks to the nearest minute and write times for school and activities."
                },
                {
                  "no": "02",
                  "topic": "Elapsed Time",
                  "whatWeCover": "Find how long something lasts, like recess or a movie, using number lines and time intervals."
                },
                {
                  "no": "03",
                  "topic": "Liquid Volume and Mass",
                  "whatWeCover": "Measure liquid volume in liters and mass in grams and kilograms, and solve one-step word problems."
                },
                {
                  "no": "04",
                  "topic": "Perimeter",
                  "whatWeCover": "Find the perimeter of polygons by adding side lengths, including problems with an unknown side."
                },
                {
                  "no": "05",
                  "topic": "Area by Tiling",
                  "whatWeCover": "Cover shapes with unit squares, count them, and explain area as the space inside a shape."
                },
                {
                  "no": "06",
                  "topic": "Area of Rectangles",
                  "whatWeCover": "Multiply side lengths to find area, and link area to the multiplication facts and arrays."
                },
                {
                  "no": "07",
                  "topic": "Same Area, Different Perimeter",
                  "whatWeCover": "Compare rectangles with equal area but different perimeters, and solve real-life problems such as a garden bed."
                },
                {
                  "no": "08",
                  "topic": "Shapes and Their Attributes",
                  "whatWeCover": "Sort quadrilaterals such as rhombuses, rectangles and squares by their sides and angles."
                },
                {
                  "no": "09",
                  "topic": "Dividing Shapes and Data Graphs",
                  "whatWeCover": "Split shapes into equal parts with unit fractions and read scaled picture graphs and bar graphs."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-3/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Forces: Pushes and Pulls",
                  "whatWeCover": "Investigate how pushes and pulls change how objects move, using toy cars, ramps and playground equipment."
                },
                {
                  "no": "02",
                  "topic": "Balanced and Unbalanced Forces",
                  "whatWeCover": "Explain how balanced forces keep an object still and unbalanced forces change its motion."
                },
                {
                  "no": "03",
                  "topic": "Patterns of Motion",
                  "whatWeCover": "Observe and measure motion such as a swing or a pendulum and predict what happens next."
                },
                {
                  "no": "04",
                  "topic": "Gravity and Friction",
                  "whatWeCover": "Test how gravity and friction affect how far and how fast objects slide, roll and fall."
                },
                {
                  "no": "05",
                  "topic": "Magnets and Their Poles",
                  "whatWeCover": "Explore how magnets attract and repel, and which materials they pick up."
                },
                {
                  "no": "06",
                  "topic": "Magnetic Forces at a Distance",
                  "whatWeCover": "Test how strength and distance change magnetic force and design a simple magnet use."
                },
                {
                  "no": "07",
                  "topic": "Static Electricity",
                  "whatWeCover": "Observe how rubbed balloons and other objects push or pull without touching."
                },
                {
                  "no": "08",
                  "topic": "Fair Tests and Variables",
                  "whatWeCover": "Plan a fair test, change one variable, collect data and draw a conclusion from it."
                },
                {
                  "no": "09",
                  "topic": "Engineering: Solve a Motion Problem",
                  "whatWeCover": "Design, build and improve a simple device, like a ball launcher, to meet a goal."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Life Cycles of Plants and Animals",
                  "whatWeCover": "Compare life cycles of plants, frogs, butterflies and mammals, from birth to adulthood and reproduction."
                },
                {
                  "no": "02",
                  "topic": "Life Cycle Patterns",
                  "whatWeCover": "Describe how all living things share stages of birth, growth, reproduction and death."
                },
                {
                  "no": "03",
                  "topic": "Traits Passed from Parents",
                  "whatWeCover": "Explain how plants and animals inherit traits from their parents, such as fur color or leaf shape."
                },
                {
                  "no": "04",
                  "topic": "Variation Within a Species",
                  "whatWeCover": "Observe differences among individuals of the same kind and how they affect survival."
                },
                {
                  "no": "05",
                  "topic": "Traits and the Environment",
                  "whatWeCover": "Show how food, water and sunlight also shape traits, such as plant height or body size."
                },
                {
                  "no": "06",
                  "topic": "Animal Groups and Social Behavior",
                  "whatWeCover": "Explore how herds, packs and flocks help animals find food and stay safe."
                },
                {
                  "no": "07",
                  "topic": "Plant and Animal Adaptations",
                  "whatWeCover": "Link features such as thick fur, long roots and camouflage to how living things survive."
                },
                {
                  "no": "08",
                  "topic": "Analyzing Data from Observations",
                  "whatWeCover": "Record observations in tables and graphs and use the data to support a claim."
                },
                {
                  "no": "09",
                  "topic": "Engineering: Model a Life Cycle",
                  "whatWeCover": "Build a model or diagram of a life cycle and explain each stage clearly."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Habitats Across the United States",
                  "whatWeCover": "Compare habitats such as forests, deserts, wetlands and coasts and the living things in each."
                },
                {
                  "no": "02",
                  "topic": "Surviving in a Habitat",
                  "whatWeCover": "Explain how some organisms survive well in a given habitat while others struggle."
                },
                {
                  "no": "03",
                  "topic": "Food Chains and Food Webs",
                  "whatWeCover": "Trace the flow of energy from the sun through plants to animals in a food web."
                },
                {
                  "no": "04",
                  "topic": "Changing Environments",
                  "whatWeCover": "Investigate how drought, fire, flooding and human activity change habitats and the animals living there."
                },
                {
                  "no": "05",
                  "topic": "Fossils and Earth's Past",
                  "whatWeCover": "Use fossils to learn about plants and animals that lived long ago and the places they lived."
                },
                {
                  "no": "06",
                  "topic": "Extinction and Conservation",
                  "whatWeCover": "Discuss why species disappear and how state parks and wildlife refuges help protect them."
                },
                {
                  "no": "07",
                  "topic": "Rocks, Soil and Habitats",
                  "whatWeCover": "Describe how soil and rocks support living things in different environments."
                },
                {
                  "no": "08",
                  "topic": "Argue from Evidence",
                  "whatWeCover": "Use evidence to argue which solution best helps a habitat or a species."
                },
                {
                  "no": "09",
                  "topic": "Engineering: Protect a Habitat",
                  "whatWeCover": "Design a solution to a problem, like a wildlife crossing, and test how well it works."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Weather Patterns",
                  "whatWeCover": "Record daily temperature, precipitation and wind and describe patterns across a month or a season."
                },
                {
                  "no": "02",
                  "topic": "Reading Weather Data",
                  "whatWeCover": "Use tables, graphs and maps to describe typical weather in different parts of the country."
                },
                {
                  "no": "03",
                  "topic": "Climate Regions",
                  "whatWeCover": "Compare climates in places such as Florida, Arizona, Alaska and the Midwest."
                },
                {
                  "no": "04",
                  "topic": "Seasons and Weather",
                  "whatWeCover": "Explain how changing weather through the seasons affects plants, animals and people."
                },
                {
                  "no": "05",
                  "topic": "Weather Hazards",
                  "whatWeCover": "Learn about hurricanes, tornadoes, blizzards and floods and how communities plan for them."
                },
                {
                  "no": "06",
                  "topic": "Reducing Weather Hazards",
                  "whatWeCover": "Design and compare solutions, like storm shelters or flood barriers, that lower the impact of severe weather."
                },
                {
                  "no": "07",
                  "topic": "Weather Forecasts and Tools",
                  "whatWeCover": "Use thermometers, rain gauges and wind vanes, and read forecasts to plan a day."
                },
                {
                  "no": "08",
                  "topic": "Science Skills for State Tests",
                  "whatWeCover": "Practice reading charts, drawing conclusions and answering science questions ahead of Grade 5 state testing."
                },
                {
                  "no": "09",
                  "topic": "Engineering: Weather Solutions",
                  "whatWeCover": "Build and test a model that handles wind or rain, then improve the design."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own"
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 4 Tutoring",
          "text": "Build on Grade 3 with Math, English and Science, 40 live lessons per subject aligned to US state standards.",
          "buttonText": "View Grade 4",
          "href": "/us/subjects/grade-4"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-4": {
    "gradeNum": 4,
    "yearId": "grade-4",
    "meta": {
      "title": "Grade 4 Tutoring USA | Math, English, Science",
      "description": "Online Grade 4 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-4"
    },
    "hero": {
      "h1": "Grade 4 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards. Taught in personalized 1-on-1 or small group classes by qualified tutors.",
      "primaryBtn": "Try a Free Grade 4 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 4 is where math gets big: multi-digit numbers, fractions and longer writing. Our program builds confidence through hands-on practice and familiar US examples, from school lunch to Little League.",
      "keyTopics": {
        "math": "place value, multi-digit multiplication, fractions, decimals, angles.",
        "english": "opinion and narrative writing, text evidence.",
        "science": "energy, waves, Earth's surface."
      },
      "parentTip": "Ten minutes a day works best. Read together at bedtime, let your child count change at the store and ask what they noticed on your last road trip."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 4, Your Child Will...",
      "items": [
        "Multiply and divide multi-digit numbers and explain the strategy used",
        "Compare, add and subtract fractions, and connect them to decimals",
        "Write opinion, informative and narrative pieces with clear organization",
        "Use text evidence to explain themes, main ideas and author's reasons",
        "Explain how energy moves through collisions, circuits, sound and light",
        "Describe how rocks and landforms change, and how animals use structures to survive"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 4 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-4/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Close Reading of Stories",
                  "whatWeCover": "Read grade level fiction, refer to details and examples in the text, and explain what the text says directly."
                },
                {
                  "no": "02",
                  "topic": "Theme and Summarizing",
                  "whatWeCover": "Find the theme of a story or poem from details, and write a short summary without opinions."
                },
                {
                  "no": "03",
                  "topic": "Characters, Setting and Events",
                  "whatWeCover": "Describe a character, setting or event in depth, drawing on specific details such as thoughts, words and actions."
                },
                {
                  "no": "04",
                  "topic": "Point of View in Stories",
                  "whatWeCover": "Compare first person and third person narration and explain how each changes what the reader learns."
                },
                {
                  "no": "05",
                  "topic": "Opinion Writing: Introduction and Reasons",
                  "whatWeCover": "Write an opinion piece with a clear point of view, such as the best recess game, supported by reasons."
                },
                {
                  "no": "06",
                  "topic": "Opinion Writing: Evidence and Conclusion",
                  "whatWeCover": "Link opinions and reasons with words like because and for example, and finish with a strong conclusion."
                },
                {
                  "no": "07",
                  "topic": "Nouns, Pronouns and Verbs",
                  "whatWeCover": "Use relative pronouns and adverbs, and form and use progressive verb tenses in clear sentences."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary: Word Parts and Context",
                  "whatWeCover": "Use context clues, prefixes, suffixes and Greek and Latin roots to work out unfamiliar words."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Class Discussions",
                  "whatWeCover": "Come to discussions prepared, follow agreed rules and build on what classmates say with respect."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Informational Text Structures",
                  "whatWeCover": "Identify how a text is organized, such as cause and effect, compare and contrast, or sequence."
                },
                {
                  "no": "02",
                  "topic": "Main Idea and Key Details",
                  "whatWeCover": "Determine the main idea of a nonfiction text and explain how key details support it."
                },
                {
                  "no": "03",
                  "topic": "Text Features and Graphics",
                  "whatWeCover": "Use headings, captions, charts and diagrams to find information quickly and explain how they help."
                },
                {
                  "no": "04",
                  "topic": "Comparing Two Accounts",
                  "whatWeCover": "Compare a firsthand and a secondhand account of the same event, such as a pioneer diary and a history book."
                },
                {
                  "no": "05",
                  "topic": "Informative Writing: Planning and Drafting",
                  "whatWeCover": "Plan an informative piece with a topic statement, facts, definitions and details in logical order."
                },
                {
                  "no": "06",
                  "topic": "Informative Writing: Revising and Editing",
                  "whatWeCover": "Strengthen a draft with linking words, precise language and a conclusion, then edit for errors."
                },
                {
                  "no": "07",
                  "topic": "Sentences: Fragments and Run-ons",
                  "whatWeCover": "Produce complete sentences, fix fragments and run-ons, and use frequently confused words correctly."
                },
                {
                  "no": "08",
                  "topic": "Spelling and Word Study",
                  "whatWeCover": "Spell grade level words correctly, using syllable patterns, roots and a dictionary to check."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Reports and Presentations",
                  "whatWeCover": "Give a short, organized report with facts and details, speaking clearly at an understandable pace."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry and Drama",
                  "whatWeCover": "Explain the difference between poems, plays and prose, and refer to structural elements like verse, stanza and cast."
                },
                {
                  "no": "02",
                  "topic": "Figurative Language",
                  "whatWeCover": "Explain the meaning of similes, metaphors, idioms and proverbs, and use them in your own writing."
                },
                {
                  "no": "03",
                  "topic": "Comparing Stories and Myths",
                  "whatWeCover": "Compare themes and patterns of events in stories, myths and traditional literature from different cultures."
                },
                {
                  "no": "04",
                  "topic": "Narrative Writing: Plot and Characters",
                  "whatWeCover": "Plan a story with a problem, rising action and resolution, and develop characters through dialogue."
                },
                {
                  "no": "05",
                  "topic": "Narrative Writing: Descriptive Details",
                  "whatWeCover": "Use sensory details and precise words to show events, then write a strong ending."
                },
                {
                  "no": "06",
                  "topic": "Punctuation: Commas and Quotation Marks",
                  "whatWeCover": "Use commas and quotation marks correctly to mark dialogue and direct speech."
                },
                {
                  "no": "07",
                  "topic": "Capitalization and Formal Language",
                  "whatWeCover": "Capitalize titles and proper nouns, and choose between formal and informal language for the situation."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary: Synonyms, Antonyms and Multiple Meanings",
                  "whatWeCover": "Choose precise words, and use reference tools to explore word relationships and shades of meaning."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Retelling and Reading Aloud",
                  "whatWeCover": "Read prose and poetry aloud with accuracy, expression and appropriate pace to support meaning."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Fluency and Stamina",
                  "whatWeCover": "Read longer grade level passages with accuracy and expression, building the stamina used on state reading tests."
                },
                {
                  "no": "02",
                  "topic": "Drawing Inferences",
                  "whatWeCover": "Support inferences with quotations and details, and explain what the text suggests but does not say."
                },
                {
                  "no": "03",
                  "topic": "Author's Purpose and Reasons",
                  "whatWeCover": "Explain how an author uses reasons and evidence to support particular points in a text."
                },
                {
                  "no": "04",
                  "topic": "Integrating Information from Two Texts",
                  "whatWeCover": "Combine information from two texts on the same topic to write or speak about the subject knowledgeably."
                },
                {
                  "no": "05",
                  "topic": "Research Projects",
                  "whatWeCover": "Gather information from books and trusted online sources, take notes and list sources for a short project."
                },
                {
                  "no": "06",
                  "topic": "Writing from Sources",
                  "whatWeCover": "Write a response that draws on evidence from the text, using short quotes and paraphrase correctly."
                },
                {
                  "no": "07",
                  "topic": "Test Strategies for Reading Questions",
                  "whatWeCover": "Practice multiple choice and written response questions in the style of state tests, with time management tips."
                },
                {
                  "no": "08",
                  "topic": "Grammar and Usage Review",
                  "whatWeCover": "Review verb tenses, pronouns, punctuation and capitalization through editing tasks and short writing."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Book Talks",
                  "whatWeCover": "Present a book talk with a clear opinion and supporting details, then answer questions from listeners."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year with games and worked examples, then sit an end-of-year test with feedback shared in the parent report."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-4/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to 1,000,000",
                  "whatWeCover": "Read, write and compare multi-digit numbers using base ten ideas, such as 10 times as much as the digit to its right."
                },
                {
                  "no": "02",
                  "topic": "Rounding Whole Numbers",
                  "whatWeCover": "Round numbers to any place up to 100,000 using number lines, such as rounding a ballpark crowd count."
                },
                {
                  "no": "03",
                  "topic": "Comparing and Ordering Large Numbers",
                  "whatWeCover": "Use greater than, less than and equal signs to compare numbers in the thousands, like state park visitor counts."
                },
                {
                  "no": "04",
                  "topic": "Adding Multi-Digit Numbers",
                  "whatWeCover": "Add numbers up to 1,000,000 with the standard algorithm, and check answers with estimation."
                },
                {
                  "no": "05",
                  "topic": "Subtracting Multi-Digit Numbers",
                  "whatWeCover": "Subtract across zeros and regroup with confidence, then check the answer using addition."
                },
                {
                  "no": "06",
                  "topic": "Multi-Step Word Problems",
                  "whatWeCover": "Solve problems with several operations, using bar models and equations with a letter for the unknown."
                },
                {
                  "no": "07",
                  "topic": "Factors and Multiples",
                  "whatWeCover": "Find all factor pairs for numbers to 100, and decide whether a number is a multiple of a given one."
                },
                {
                  "no": "08",
                  "topic": "Prime and Composite Numbers",
                  "whatWeCover": "Sort numbers to 100 as prime or composite, and explain how you know using factor lists."
                },
                {
                  "no": "09",
                  "topic": "Number and Shape Patterns",
                  "whatWeCover": "Generate a pattern from a rule, such as add 3, and notice features the rule does not state directly."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Multiplication as Comparison",
                  "whatWeCover": "Tell the difference between 3 times as many and 3 more, and write equations for each situation."
                },
                {
                  "no": "02",
                  "topic": "Multiplying by Multiples of 10",
                  "whatWeCover": "Use place value and the multiplication facts to find products like 6 x 70 and 8 x 500."
                },
                {
                  "no": "03",
                  "topic": "Multiplying 2 to 4 Digit Numbers by 1 Digit",
                  "whatWeCover": "Multiply using area models, partial products and the standard algorithm, with estimates to check."
                },
                {
                  "no": "04",
                  "topic": "Multiplying Two 2-Digit Numbers",
                  "whatWeCover": "Use area models and partial products to find products such as 34 x 26, then connect them to the algorithm."
                },
                {
                  "no": "05",
                  "topic": "Dividing by 1 Digit Numbers",
                  "whatWeCover": "Divide multi-digit numbers using place value, equations and rectangular arrays."
                },
                {
                  "no": "06",
                  "topic": "Division with Remainders",
                  "whatWeCover": "Solve division problems with remainders, and decide when to round up or drop the remainder, like fitting kids in vans."
                },
                {
                  "no": "07",
                  "topic": "Interpreting Remainders in Word Problems",
                  "whatWeCover": "Make sense of what a remainder means in the story, from packing boxes to sharing trading cards."
                },
                {
                  "no": "08",
                  "topic": "Multiplication and Division Problem Solving",
                  "whatWeCover": "Solve multi-step problems using all four operations, and test answers for reasonableness."
                },
                {
                  "no": "09",
                  "topic": "Order of Operations Introduction",
                  "whatWeCover": "Write equations to match a story with two steps, and see why the order of the steps matters."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Equivalent Fractions",
                  "whatWeCover": "Use fraction models and number lines to show why 1/2 equals 2/4, and generate equivalent fractions."
                },
                {
                  "no": "02",
                  "topic": "Comparing Fractions",
                  "whatWeCover": "Compare fractions with different numerators and denominators using benchmarks like 1/2 and common denominators."
                },
                {
                  "no": "03",
                  "topic": "Adding Fractions with Like Denominators",
                  "whatWeCover": "Add fractions as joining parts of the same whole, and decompose a fraction into a sum of unit fractions."
                },
                {
                  "no": "04",
                  "topic": "Subtracting Fractions with Like Denominators",
                  "whatWeCover": "Subtract fractions with models and equations, such as sharing pizza slices after the game."
                },
                {
                  "no": "05",
                  "topic": "Mixed Numbers and Improper Fractions",
                  "whatWeCover": "Convert between mixed numbers and fractions, and add and subtract mixed numbers with like denominators."
                },
                {
                  "no": "06",
                  "topic": "Multiplying a Fraction by a Whole Number",
                  "whatWeCover": "Show 3 x 2/5 as repeated addition, and solve word problems such as cups of flour in a recipe."
                },
                {
                  "no": "07",
                  "topic": "Fractions with Denominators 10 and 100",
                  "whatWeCover": "Rewrite tenths as hundredths and add fractions like 3/10 + 4/100 using equivalent fractions."
                },
                {
                  "no": "08",
                  "topic": "Decimal Notation for Fractions",
                  "whatWeCover": "Write fractions with denominators 10 and 100 as decimals, and show them on a number line."
                },
                {
                  "no": "09",
                  "topic": "Comparing Decimals and Money",
                  "whatWeCover": "Compare decimals to hundredths, connect them to dollars and cents, and use quarters and dimes to model them."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Measurement Units and Conversions",
                  "whatWeCover": "Convert within one system of units, such as feet to inches, pounds to ounces and gallons to quarts."
                },
                {
                  "no": "02",
                  "topic": "Time, Money and Measurement Problems",
                  "whatWeCover": "Solve problems with elapsed time, money and distances, like planning a road trip schedule."
                },
                {
                  "no": "03",
                  "topic": "Perimeter and Area of Rectangles",
                  "whatWeCover": "Use the formulas for perimeter and area, and find a missing side length from a known area."
                },
                {
                  "no": "04",
                  "topic": "Points, Lines, Rays and Angles",
                  "whatWeCover": "Draw and identify points, lines, line segments, rays, and right, acute and obtuse angles."
                },
                {
                  "no": "05",
                  "topic": "Measuring Angles with a Protractor",
                  "whatWeCover": "Measure and draw angles in degrees, and add angle measures to find an unknown angle."
                },
                {
                  "no": "06",
                  "topic": "Parallel and Perpendicular Lines",
                  "whatWeCover": "Find parallel and perpendicular lines in shapes and in real places, like city streets and baseball diamonds."
                },
                {
                  "no": "07",
                  "topic": "Classifying Two-Dimensional Shapes",
                  "whatWeCover": "Sort triangles and quadrilaterals by their sides and angles, and name right triangles."
                },
                {
                  "no": "08",
                  "topic": "Lines of Symmetry",
                  "whatWeCover": "Find and draw lines of symmetry in shapes and letters, and spot symmetry in nature and logos."
                },
                {
                  "no": "09",
                  "topic": "Line Plots and Data with Fractions",
                  "whatWeCover": "Make line plots with fractional measurements, then answer questions using addition and subtraction of fractions."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year with games and worked examples, then sit an end-of-year test with feedback shared in the parent report."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-4/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Scientific Questions and Fair Tests",
                  "whatWeCover": "Ask testable questions, plan fair tests with controlled variables and record measurements in tables."
                },
                {
                  "no": "02",
                  "topic": "Energy and Its Forms",
                  "whatWeCover": "Describe energy as the ability to cause motion, sound, heat or light, using examples from playgrounds and kitchens."
                },
                {
                  "no": "03",
                  "topic": "Energy Transfer in Collisions",
                  "whatWeCover": "Explain how energy moves from one object to another when objects collide, like a bat hitting a ball."
                },
                {
                  "no": "04",
                  "topic": "Speed and Energy",
                  "whatWeCover": "Investigate how speed relates to the energy of an object, using ramps and toy cars."
                },
                {
                  "no": "05",
                  "topic": "Heat and Temperature",
                  "whatWeCover": "Show how heat moves from warmer to cooler objects, and measure temperature changes accurately."
                },
                {
                  "no": "06",
                  "topic": "Electric Circuits",
                  "whatWeCover": "Build simple circuits with bulbs and batteries, and tell conductors from insulators."
                },
                {
                  "no": "07",
                  "topic": "Energy Sources",
                  "whatWeCover": "Compare renewable and nonrenewable energy sources, including solar, wind and fossil fuels."
                },
                {
                  "no": "08",
                  "topic": "Energy and Design Problems",
                  "whatWeCover": "Design a device that converts energy from one form to another, test it and improve it."
                },
                {
                  "no": "09",
                  "topic": "Using Models in Science",
                  "whatWeCover": "Make diagrams and models to explain a science idea and say what the model leaves out."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Waves and Motion",
                  "whatWeCover": "Describe waves with amplitude and wavelength, using ripples in a pond and a jump rope."
                },
                {
                  "no": "02",
                  "topic": "Sound and Vibration",
                  "whatWeCover": "Investigate how vibrations make sound, and how pitch and volume change."
                },
                {
                  "no": "03",
                  "topic": "Light and Reflection",
                  "whatWeCover": "Explain how light travels in straight lines and reflects off surfaces such as mirrors."
                },
                {
                  "no": "04",
                  "topic": "How We See",
                  "whatWeCover": "Describe how light reaching the eye lets us see objects, and why we cannot see in total darkness."
                },
                {
                  "no": "05",
                  "topic": "Patterns and Information Transfer",
                  "whatWeCover": "Use patterns of waves and light to send messages, such as Morse code and flashing lights."
                },
                {
                  "no": "06",
                  "topic": "Plant Structures and Functions",
                  "whatWeCover": "Describe how roots, stems, leaves and flowers help plants survive, grow and reproduce."
                },
                {
                  "no": "07",
                  "topic": "Animal Structures and Senses",
                  "whatWeCover": "Link animal body parts and senses to survival, from eagle eyesight to bat echolocation."
                },
                {
                  "no": "08",
                  "topic": "Internal and External Structures",
                  "whatWeCover": "Compare how internal and external structures help animals and plants meet their needs."
                },
                {
                  "no": "09",
                  "topic": "Taking in and Processing Information",
                  "whatWeCover": "Explain how senses and the brain work together so animals can respond to their surroundings."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Rocks and Their Features",
                  "whatWeCover": "Identify common rocks and minerals, and describe how they are classified and used."
                },
                {
                  "no": "02",
                  "topic": "Weathering and Erosion",
                  "whatWeCover": "Investigate how wind, water and ice break down rock and move sediment, such as a river carving a canyon."
                },
                {
                  "no": "03",
                  "topic": "Deposition and Landforms",
                  "whatWeCover": "Explain how moving sediment builds landforms like deltas, dunes and beaches."
                },
                {
                  "no": "04",
                  "topic": "Fossils and Earth History",
                  "whatWeCover": "Use fossils and rock layers to describe how environments changed over time."
                },
                {
                  "no": "05",
                  "topic": "Maps of Earth's Features",
                  "whatWeCover": "Read maps to find patterns in mountains, ocean trenches, volcanoes and earthquakes."
                },
                {
                  "no": "06",
                  "topic": "Earthquakes and Volcanoes",
                  "whatWeCover": "Describe where earthquakes and volcanoes occur and how they change the land."
                },
                {
                  "no": "07",
                  "topic": "Natural Hazards",
                  "whatWeCover": "Compare solutions for reducing harm from earthquakes, floods and storms, such as safe building designs."
                },
                {
                  "no": "08",
                  "topic": "Natural Resources",
                  "whatWeCover": "Explain how humans use energy, water and land, and how resources can be conserved."
                },
                {
                  "no": "09",
                  "topic": "Engineering Design Challenge",
                  "whatWeCover": "Define a problem, build and test a solution, compare results and improve the design."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Ecosystems and Food Webs",
                  "whatWeCover": "Trace the flow of energy through food chains and food webs, from the sun to producers, consumers and decomposers."
                },
                {
                  "no": "02",
                  "topic": "Habitats and Adaptations",
                  "whatWeCover": "Explain how traits and behaviors help organisms survive in deserts, forests and oceans."
                },
                {
                  "no": "03",
                  "topic": "Human Impact on Environments",
                  "whatWeCover": "Evaluate how people change habitats and what we can do to protect state parks and wildlife."
                },
                {
                  "no": "04",
                  "topic": "Weather and Climate Patterns",
                  "whatWeCover": "Read weather data and maps to describe patterns, and tell weather from climate."
                },
                {
                  "no": "05",
                  "topic": "Water Cycle Review",
                  "whatWeCover": "Describe evaporation, condensation and precipitation, and how the water cycle shapes local weather."
                },
                {
                  "no": "06",
                  "topic": "Energy, Waves and Information Review",
                  "whatWeCover": "Review energy transfer, sound and light with hands-on demonstrations and short quizzes."
                },
                {
                  "no": "07",
                  "topic": "Earth's Changing Surface Review",
                  "whatWeCover": "Review weathering, erosion, fossils and landforms using photos, maps and diagrams."
                },
                {
                  "no": "08",
                  "topic": "Science Test Skills",
                  "whatWeCover": "Practice reading graphs, tables and diagrams, and writing short science answers in the style of state tests."
                },
                {
                  "no": "09",
                  "topic": "Science Fair Project",
                  "whatWeCover": "Plan, run and present a small investigation, and share the results with evidence."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year with games and worked examples, then sit an end-of-year test with feedback shared in the parent report."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own"
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 5 Tutoring",
          "text": "Prepare for state tests with Grade 5 Math, English and Science, 40 live lessons per subject.",
          "buttonText": "View Grade 5",
          "href": "/us/subjects/grade-5"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-5": {
    "gradeNum": 5,
    "yearId": "grade-5",
    "meta": {
      "title": "Grade 5 Tutoring USA | Math, English, Science",
      "description": "Online Grade 5 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-5"
    },
    "hero": {
      "h1": "Grade 5 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards for Grade 5. Taught in personalized 1-on-1 or small group classes by qualified tutors.",
      "primaryBtn": "Try a Free Grade 5 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 5 is where fractions, decimals and longer reading meet the state test. We build all three subjects with hands-on practice and familiar US examples, from school lunch totals to Little League and state parks.",
      "keyTopics": {
        "math": "decimals, fractions, volume, coordinate plane.",
        "english": "reading evidence, writing, grammar.",
        "science": "matter, ecosystems, Earth systems, space. Ready for state tests."
      },
      "parentTip": "Grade 5 science is tested in most states. Cook with your child to practice fractions, and talk about weather, plants and the night sky together."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 5, Your Child Will...",
      "items": [
        "Add, subtract, multiply and divide decimals and fractions accurately",
        "Calculate volume and plot points on the coordinate plane",
        "Cite text evidence to support answers about stories and articles",
        "Write organized opinion, narrative and informative pieces",
        "Explain how matter changes and is conserved using models and data",
        "Describe ecosystems, Earth's systems and the sky using science words"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 5 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-5/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Comprehension: Main Idea and Details",
                  "whatWeCover": "Find the main idea of a passage, pick out key details and summarize in your own words, citing the text."
                },
                {
                  "no": "02",
                  "topic": "Quoting Accurately from the Text",
                  "whatWeCover": "Quote exact words to support answers and inferences, and explain how the evidence proves the point."
                },
                {
                  "no": "03",
                  "topic": "Story Elements and Theme",
                  "whatWeCover": "Describe characters, setting and plot, and explain how the events of a story build toward its theme."
                },
                {
                  "no": "04",
                  "topic": "Point of View in Stories",
                  "whatWeCover": "Tell first person from third person, and explain how the narrator's view shapes what readers learn."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary: Context Clues",
                  "whatWeCover": "Work out unfamiliar words using context clues, and check meanings in a dictionary or glossary."
                },
                {
                  "no": "06",
                  "topic": "Prefixes, Suffixes and Root Words",
                  "whatWeCover": "Break words into prefixes, suffixes and Greek and Latin roots to figure out meanings and spell with confidence."
                },
                {
                  "no": "07",
                  "topic": "Parts of Speech Review",
                  "whatWeCover": "Name nouns, verbs, adjectives, adverbs and pronouns in sentences, and use them correctly in writing."
                },
                {
                  "no": "08",
                  "topic": "Writing a Strong Paragraph",
                  "whatWeCover": "Write a topic sentence, add supporting details and finish with a conclusion, using transition words."
                },
                {
                  "no": "09",
                  "topic": "Speaking and Listening: Class Discussion",
                  "whatWeCover": "Prepare for a discussion, build on classmates' ideas and ask questions that move the talk forward."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Informational Text Structures",
                  "whatWeCover": "Spot cause and effect, compare and contrast, problem and solution, and sequence in nonfiction articles."
                },
                {
                  "no": "02",
                  "topic": "Using Text Features",
                  "whatWeCover": "Use headings, captions, diagrams, charts and the index to find facts quickly."
                },
                {
                  "no": "03",
                  "topic": "Comparing Two Texts on One Topic",
                  "whatWeCover": "Compare how two articles present the same event, such as a national park or a space mission, and note the differences."
                },
                {
                  "no": "04",
                  "topic": "Opinion Writing",
                  "whatWeCover": "State an opinion, support it with reasons and facts, and link them with words like because and for example."
                },
                {
                  "no": "05",
                  "topic": "Verb Tenses and Perfect Tenses",
                  "whatWeCover": "Use past, present and future tenses, and form the perfect tenses such as have walked and had finished."
                },
                {
                  "no": "06",
                  "topic": "Conjunctions, Prepositions and Interjections",
                  "whatWeCover": "Join ideas with conjunctions and correlative pairs, and use prepositional phrases to add detail."
                },
                {
                  "no": "07",
                  "topic": "Commas and Punctuation",
                  "whatWeCover": "Use commas in a series, after introductory phrases and in direct address, and punctuate dialogue and titles."
                },
                {
                  "no": "08",
                  "topic": "Figurative Language",
                  "whatWeCover": "Explain similes, metaphors, idioms and proverbs, and use them to make writing come alive."
                },
                {
                  "no": "09",
                  "topic": "Researching a Topic",
                  "whatWeCover": "Gather facts from books and trusted websites, take notes in your own words and list your sources."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Poetry and Drama",
                  "whatWeCover": "Read poems and short plays, and explain how stanzas, lines and scenes fit together."
                },
                {
                  "no": "02",
                  "topic": "Describing Characters and Their Choices",
                  "whatWeCover": "Compare characters in one story, drawing on their words and actions to explain what they feel and why."
                },
                {
                  "no": "03",
                  "topic": "Narrative Writing: Plan and Draft",
                  "whatWeCover": "Plan a story with a clear beginning, middle and end, using dialogue and description to show events."
                },
                {
                  "no": "04",
                  "topic": "Narrative Writing: Revise and Edit",
                  "whatWeCover": "Revise for sensory details and pacing, then edit for spelling, capitals and punctuation."
                },
                {
                  "no": "05",
                  "topic": "Explaining How Authors Support Their Points",
                  "whatWeCover": "Find the reasons and evidence an author uses, and say which points support which claims."
                },
                {
                  "no": "06",
                  "topic": "Synonyms, Antonyms and Word Choice",
                  "whatWeCover": "Choose precise words, sort words by shades of meaning and use a thesaurus wisely."
                },
                {
                  "no": "07",
                  "topic": "Homophones and Commonly Confused Words",
                  "whatWeCover": "Spell and use their, there and they're, and other tricky pairs, correctly in sentences."
                },
                {
                  "no": "08",
                  "topic": "Giving an Oral Presentation",
                  "whatWeCover": "Speak clearly at a good pace, make eye contact and use a visual aid to share a topic."
                },
                {
                  "no": "09",
                  "topic": "Informative Writing",
                  "whatWeCover": "Introduce a topic, group related facts under headings and write a concluding statement."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Longer Chapter Books",
                  "whatWeCover": "Track plot and characters over many chapters, and summarize each section as you go."
                },
                {
                  "no": "02",
                  "topic": "Integrating Information from Several Sources",
                  "whatWeCover": "Combine facts from two or more texts to write about a topic knowledgeably."
                },
                {
                  "no": "03",
                  "topic": "Writing a Research Report",
                  "whatWeCover": "Turn notes into an organized report with an introduction, body paragraphs and a conclusion."
                },
                {
                  "no": "04",
                  "topic": "Responding to Text with Evidence",
                  "whatWeCover": "Write a response that states a claim, cites text evidence and explains the thinking, as state tests require."
                },
                {
                  "no": "05",
                  "topic": "Sentence Variety and Fluency",
                  "whatWeCover": "Combine short sentences, vary sentence openers and avoid run-ons and fragments."
                },
                {
                  "no": "06",
                  "topic": "Academic and Domain-Specific Vocabulary",
                  "whatWeCover": "Learn the key words used in science, social studies and math, and use them in speaking and writing."
                },
                {
                  "no": "07",
                  "topic": "Grammar and Editing Practice",
                  "whatWeCover": "Fix errors in capitalization, punctuation, spelling and usage in short passages, as in state test items."
                },
                {
                  "no": "08",
                  "topic": "Reading Fluency and Expression",
                  "whatWeCover": "Practice reading aloud with accuracy, pace and expression, then reflect on how it sounds."
                },
                {
                  "no": "09",
                  "topic": "Reading Test Strategies",
                  "whatWeCover": "Practice multiple-choice and written-response questions on paired passages, and learn to manage time."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-5/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to Millions and Decimals",
                  "whatWeCover": "Read, write and compare whole numbers and decimals, and see that each place is ten times the one to its right."
                },
                {
                  "no": "02",
                  "topic": "Powers of 10 and Exponents",
                  "whatWeCover": "Use exponents to write powers of 10, and multiply and divide by 10, 100 and 1,000 by shifting digits."
                },
                {
                  "no": "03",
                  "topic": "Rounding and Comparing Decimals",
                  "whatWeCover": "Compare decimals to thousandths using less than, greater than and equal to, and round to any place."
                },
                {
                  "no": "04",
                  "topic": "Multi-Digit Multiplication",
                  "whatWeCover": "Multiply by two-digit numbers using the standard algorithm, and estimate to check, such as school lunch totals."
                },
                {
                  "no": "05",
                  "topic": "Division with Two-Digit Divisors",
                  "whatWeCover": "Divide up to four-digit numbers by two-digit numbers, using area models, place value and remainders."
                },
                {
                  "no": "06",
                  "topic": "Adding and Subtracting Decimals",
                  "whatWeCover": "Add and subtract decimals to hundredths with money, such as dollars and cents, and check answers by estimating."
                },
                {
                  "no": "07",
                  "topic": "Multiplying Decimals",
                  "whatWeCover": "Multiply decimals to hundredths using models and the standard algorithm, and place the decimal point sensibly."
                },
                {
                  "no": "08",
                  "topic": "Dividing Decimals",
                  "whatWeCover": "Divide decimals by whole numbers and decimals using place value and the relationship to multiplication."
                },
                {
                  "no": "09",
                  "topic": "Word Problems with Whole Numbers and Decimals",
                  "whatWeCover": "Solve multi-step problems about prices, distances and road trips, and explain each step."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Equivalent Fractions and Common Denominators",
                  "whatWeCover": "Find equivalent fractions and rename fractions with the same denominator to compare and add them."
                },
                {
                  "no": "02",
                  "topic": "Adding Fractions and Mixed Numbers",
                  "whatWeCover": "Add fractions and mixed numbers with unlike denominators, using models and benchmark fractions to check."
                },
                {
                  "no": "03",
                  "topic": "Subtracting Fractions and Mixed Numbers",
                  "whatWeCover": "Subtract fractions and mixed numbers with unlike denominators, regrouping when needed."
                },
                {
                  "no": "04",
                  "topic": "Fractions as Division",
                  "whatWeCover": "Understand that a over b means a divided by b, and share items such as pizzas or granola bars equally."
                },
                {
                  "no": "05",
                  "topic": "Multiplying a Fraction by a Whole Number",
                  "whatWeCover": "Find a fraction of a quantity, such as three fourths of 12 players, with area models and number lines."
                },
                {
                  "no": "06",
                  "topic": "Multiplying Fractions and Mixed Numbers",
                  "whatWeCover": "Multiply fractions and mixed numbers, and see why a product can be smaller or larger than a factor."
                },
                {
                  "no": "07",
                  "topic": "Fraction Scaling",
                  "whatWeCover": "Explain how multiplying by a number greater than or less than 1 changes the size of a product."
                },
                {
                  "no": "08",
                  "topic": "Dividing with Unit Fractions",
                  "whatWeCover": "Divide a whole number by a unit fraction and a unit fraction by a whole number, using pictures and stories."
                },
                {
                  "no": "09",
                  "topic": "Fraction Word Problems",
                  "whatWeCover": "Solve real problems with recipes, trail mix and Little League snacks, and justify the operation chosen."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Order of Operations",
                  "whatWeCover": "Evaluate expressions with parentheses, brackets and braces, and follow the order of operations."
                },
                {
                  "no": "02",
                  "topic": "Writing and Interpreting Expressions",
                  "whatWeCover": "Write expressions from words, such as add 8 then multiply by 2, and describe expressions without evaluating them."
                },
                {
                  "no": "03",
                  "topic": "Numerical Patterns and Rules",
                  "whatWeCover": "Generate two number patterns from given rules and compare how the terms relate."
                },
                {
                  "no": "04",
                  "topic": "The Coordinate Plane",
                  "whatWeCover": "Plot ordered pairs in the first quadrant using x and y coordinates, and read points on a map grid."
                },
                {
                  "no": "05",
                  "topic": "Graphing Patterns and Real-World Problems",
                  "whatWeCover": "Graph ordered pairs from patterns and use the graph to answer questions about the situation."
                },
                {
                  "no": "06",
                  "topic": "Converting Measurement Units",
                  "whatWeCover": "Convert inches, feet and yards, cups and gallons, and ounces and pounds within the customary system, and meters and liters in the metric system."
                },
                {
                  "no": "07",
                  "topic": "Line Plots with Fractions",
                  "whatWeCover": "Make and read line plots with fractional data, such as rainfall or plant heights, and solve related problems."
                },
                {
                  "no": "08",
                  "topic": "Mean, Median and Reasoning with Data",
                  "whatWeCover": "Read tables and graphs, and use data to answer questions and solve multi-step problems."
                },
                {
                  "no": "09",
                  "topic": "Mixed Problem Solving",
                  "whatWeCover": "Practice multi-step problems that combine decimals, fractions and measurement units."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Classifying Two-Dimensional Figures",
                  "whatWeCover": "Sort quadrilaterals and triangles into categories and explain how the properties of each class overlap."
                },
                {
                  "no": "02",
                  "topic": "Angles and Properties of Shapes",
                  "whatWeCover": "Identify right, acute and obtuse angles and use the properties of shapes to solve problems."
                },
                {
                  "no": "03",
                  "topic": "Volume and Unit Cubes",
                  "whatWeCover": "Understand volume as the number of unit cubes that fill a solid, and pack boxes to count them."
                },
                {
                  "no": "04",
                  "topic": "Volume Formulas",
                  "whatWeCover": "Find the volume of rectangular prisms using length times width times height, and add volumes of composite solids."
                },
                {
                  "no": "05",
                  "topic": "Real-World Volume Problems",
                  "whatWeCover": "Solve problems about fish tanks, sandboxes and moving boxes using volume formulas."
                },
                {
                  "no": "06",
                  "topic": "Perimeter, Area and Surface Ideas",
                  "whatWeCover": "Review perimeter and area of rectangles, and connect them to volume and measurement problems."
                },
                {
                  "no": "07",
                  "topic": "Test Preparation: Numbers and Operations",
                  "whatWeCover": "Review decimals, fractions and the standard algorithms with test-style questions on the state test format."
                },
                {
                  "no": "08",
                  "topic": "Test Preparation: Algebraic Thinking, Geometry and Data",
                  "whatWeCover": "Practice expressions, the coordinate plane, geometry and data in multi-step, multi-part questions."
                },
                {
                  "no": "09",
                  "topic": "Problem Solving and Math Practices",
                  "whatWeCover": "Persevere with multi-step problems, check reasonableness and explain strategies in words and pictures."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-5/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Working Like a Scientist",
                  "whatWeCover": "Ask testable questions, plan fair tests, control variables and keep clear records."
                },
                {
                  "no": "02",
                  "topic": "Measuring and Using Tools",
                  "whatWeCover": "Use thermometers, scales, rulers and graduated cylinders in metric units, and record data accurately."
                },
                {
                  "no": "03",
                  "topic": "Particles of Matter",
                  "whatWeCover": "Model matter as tiny particles too small to see, and use observations to show that air is matter."
                },
                {
                  "no": "04",
                  "topic": "States of Matter",
                  "whatWeCover": "Describe the properties of solids, liquids and gases, and what happens during melting, freezing and evaporation."
                },
                {
                  "no": "05",
                  "topic": "Conservation of Matter",
                  "whatWeCover": "Show that the total weight of matter stays the same after dissolving, mixing or changing state."
                },
                {
                  "no": "06",
                  "topic": "Properties of Materials",
                  "whatWeCover": "Test materials for hardness, conductivity, magnetism, solubility and reflectivity, and choose them for a job."
                },
                {
                  "no": "07",
                  "topic": "Mixtures and Solutions",
                  "whatWeCover": "Mix substances such as salt, sand and baking soda, and separate mixtures by filtering, sieving and evaporating."
                },
                {
                  "no": "08",
                  "topic": "Physical and Chemical Changes",
                  "whatWeCover": "Compare changes such as ice melting with changes such as baking a cake or rusting that make new substances."
                },
                {
                  "no": "09",
                  "topic": "Reading Science Graphs and Tables",
                  "whatWeCover": "Read, build and explain data tables and graphs from investigations."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Energy from the Sun",
                  "whatWeCover": "Trace how the Sun's energy reaches plants, then moves to animals through food."
                },
                {
                  "no": "02",
                  "topic": "Plants and Photosynthesis",
                  "whatWeCover": "Explain how plants use sunlight, water and air to make food and grow."
                },
                {
                  "no": "03",
                  "topic": "Food Chains and Food Webs",
                  "whatWeCover": "Build food chains and webs for forests, ponds and deserts, naming producers, consumers and decomposers."
                },
                {
                  "no": "04",
                  "topic": "Matter Cycles in Ecosystems",
                  "whatWeCover": "Follow how matter moves among plants, animals, decomposers and the environment."
                },
                {
                  "no": "05",
                  "topic": "Ecosystems Across the United States",
                  "whatWeCover": "Compare ecosystems such as prairies, wetlands and forests, and the living things that depend on them."
                },
                {
                  "no": "06",
                  "topic": "Where Plants Get Their Materials",
                  "whatWeCover": "Investigate the idea that plant growth comes mostly from air and water, not soil."
                },
                {
                  "no": "07",
                  "topic": "Human Impact on Ecosystems",
                  "whatWeCover": "Weigh how people use land, water and resources, and how communities protect state parks and wildlife."
                },
                {
                  "no": "08",
                  "topic": "Designing a Model Ecosystem",
                  "whatWeCover": "Plan and build a simple model, such as a terrarium, and explain what each part does."
                },
                {
                  "no": "09",
                  "topic": "Ecosystems Review Questions",
                  "whatWeCover": "Practice test-style questions on food webs, energy and matter cycles."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Earth's Four Spheres",
                  "whatWeCover": "Describe the geosphere, hydrosphere, atmosphere and biosphere, and how they interact."
                },
                {
                  "no": "02",
                  "topic": "Water on Earth",
                  "whatWeCover": "Compare the amounts of salt water, fresh water, ice and groundwater, and display them in graphs."
                },
                {
                  "no": "03",
                  "topic": "The Water Cycle",
                  "whatWeCover": "Model evaporation, condensation and precipitation, and follow a raindrop from cloud to river."
                },
                {
                  "no": "04",
                  "topic": "Weathering and Erosion",
                  "whatWeCover": "Investigate how wind, water and ice change landforms such as canyons and the Mississippi delta."
                },
                {
                  "no": "05",
                  "topic": "Protecting Earth's Resources",
                  "whatWeCover": "Research ways communities save water, soil and energy, and design a solution for a local problem."
                },
                {
                  "no": "06",
                  "topic": "Weather and Climate",
                  "whatWeCover": "Tell weather from climate and read forecasts, maps and graphs."
                },
                {
                  "no": "07",
                  "topic": "Natural Hazards",
                  "whatWeCover": "Learn how scientists study storms, floods, earthquakes and wildfires, and how communities prepare."
                },
                {
                  "no": "08",
                  "topic": "Engineering a Solution",
                  "whatWeCover": "Define a problem, test design ideas and improve a model, using criteria and constraints."
                },
                {
                  "no": "09",
                  "topic": "Earth Systems Review Questions",
                  "whatWeCover": "Practice test-style questions on Earth's spheres, water and resources."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Gravity and Falling Objects",
                  "whatWeCover": "Show that gravity pulls objects toward Earth's center, and test falling objects."
                },
                {
                  "no": "02",
                  "topic": "Day and Night",
                  "whatWeCover": "Explain day and night as Earth rotates, and model it with a lamp and globe."
                },
                {
                  "no": "03",
                  "topic": "Shadows and the Sun's Path",
                  "whatWeCover": "Track how shadows change over a day, and link them to the position of the Sun."
                },
                {
                  "no": "04",
                  "topic": "Seasons and Seasonal Star Patterns",
                  "whatWeCover": "Explain the changing seasons and why different constellations appear in the sky at different times of year."
                },
                {
                  "no": "05",
                  "topic": "Stars and Our Sun",
                  "whatWeCover": "Compare the Sun with other stars, and explain why stars look different in brightness and distance."
                },
                {
                  "no": "06",
                  "topic": "The Moon and the Solar System",
                  "whatWeCover": "Describe the Moon's phases and the planets in our solar system, using scale models."
                },
                {
                  "no": "07",
                  "topic": "State Science Test Practice: Physical and Life Science",
                  "whatWeCover": "Practice multiple-choice and constructed-response items on matter, energy and ecosystems."
                },
                {
                  "no": "08",
                  "topic": "State Science Test Practice: Earth and Space Science",
                  "whatWeCover": "Practice items on Earth systems, space and engineering design, using data tables and diagrams."
                },
                {
                  "no": "09",
                  "topic": "Investigation Skills and Science Writing",
                  "whatWeCover": "Write a clear claim, evidence and reasoning for an investigation, as state science tests require."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own"
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 6 Tutoring",
          "text": "Move on to ratios, essays and life science with Grade 6 Math, English and Science, 40 live lessons each.",
          "buttonText": "View Grade 6",
          "href": "/us/subjects/grade-6"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-6": {
    "gradeNum": 6,
    "yearId": "grade-6",
    "meta": {
      "title": "Grade 6 Tutoring USA | Math, English, Science",
      "description": "Online Grade 6 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-6"
    },
    "hero": {
      "h1": "Grade 6 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards. Taught in personalized 1-on-1 or small group classes by qualified tutors, from ratios to cells.",
      "primaryBtn": "Try a Free Grade 6 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 6 is the start of middle school, with more teachers, more homework and bigger ideas. Our program builds Math, English and Science confidence with real examples, from sports stats to state parks.",
      "keyTopics": {
        "math": "ratios, rates, percent, fraction division, integers, expressions, equations, statistics.",
        "english": "themes, arguments, informative writing.",
        "science": "cells, energy, Earth systems, space."
      },
      "parentTip": "Middle school brings new routines. Help your child use a planner, check grades weekly and talk through one tricky problem a night. We make sure each idea sticks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 6, Your Child Will...",
      "items": [
        "Solve ratio, rate and percent problems using tables and graphs",
        "Divide fractions, work with negative numbers and write equations",
        "Write clear arguments and informative essays supported by evidence",
        "Analyze themes, characters and point of view in grade level texts",
        "Explain how cells, body systems and plants carry out life functions",
        "Describe energy, weather and the Sun, Earth and Moon using models"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 6 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-6/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Literature: Theme and Central Idea",
                  "whatWeCover": "Read short stories and identify the theme, citing specific details from the text as evidence."
                },
                {
                  "no": "02",
                  "topic": "Character Development and Plot",
                  "whatWeCover": "Trace how characters change and how the plot moves through conflict to resolution in a middle school novel."
                },
                {
                  "no": "03",
                  "topic": "Point of View and Narrators",
                  "whatWeCover": "Compare first person and third person narration and explain how point of view shapes what readers know."
                },
                {
                  "no": "04",
                  "topic": "Narrative Writing: Personal Stories",
                  "whatWeCover": "Plan and write a personal narrative with a clear setting, sequence, dialogue and descriptive details."
                },
                {
                  "no": "05",
                  "topic": "Parts of Speech and Pronouns",
                  "whatWeCover": "Use pronouns correctly in subject, object and possessive cases, and fix shifts in number and person."
                },
                {
                  "no": "06",
                  "topic": "Intensive Pronouns and Sentence Clarity",
                  "whatWeCover": "Use words like myself and themselves for emphasis, and revise sentences to avoid vague pronoun references."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary: Context Clues and Word Parts",
                  "whatWeCover": "Use context clues, Greek and Latin roots, prefixes and suffixes to work out the meaning of unfamiliar words."
                },
                {
                  "no": "08",
                  "topic": "Speaking: Class Discussions",
                  "whatWeCover": "Prepare for discussions by reading ahead, build on classmates' ideas and respond with clear, polite arguments."
                },
                {
                  "no": "09",
                  "topic": "Figurative Language",
                  "whatWeCover": "Explain similes, metaphors, personification and idioms, and how they add meaning to a text."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Informational Text: Main Idea",
                  "whatWeCover": "Find the central idea of an article and summarize it in your own words, without personal opinions."
                },
                {
                  "no": "02",
                  "topic": "Text Structure and Features",
                  "whatWeCover": "Spot cause and effect, compare and contrast and sequence structures, and use headings, captions and graphs to find information."
                },
                {
                  "no": "03",
                  "topic": "Author's Purpose and Evidence",
                  "whatWeCover": "Analyze how an author uses facts, examples and reasons to support a point in an article or speech."
                },
                {
                  "no": "04",
                  "topic": "Argument Writing: Claims and Reasons",
                  "whatWeCover": "Write a clear claim and support it with reasons and evidence on a topic like school start times or homework."
                },
                {
                  "no": "05",
                  "topic": "Argument Writing: Counterclaims and Revising",
                  "whatWeCover": "Add a fair counterclaim, use transition words and revise an argument for a strong conclusion."
                },
                {
                  "no": "06",
                  "topic": "Sentence Variety and Punctuation",
                  "whatWeCover": "Vary sentence length and structure, and punctuate with commas, parentheses and dashes in lists and nonrestrictive elements."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary: Connotation and Nuance",
                  "whatWeCover": "Tell the difference between words with similar meanings, such as thin, slender and scrawny, and choose the best one."
                },
                {
                  "no": "08",
                  "topic": "Research Skills: Finding Sources",
                  "whatWeCover": "Search for credible print and online sources, take notes and keep track of where each fact came from."
                },
                {
                  "no": "09",
                  "topic": "Citing Sources and Avoiding Plagiarism",
                  "whatWeCover": "Quote and paraphrase accurately, create a simple works cited list and explain why giving credit matters."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry: Structure and Meaning",
                  "whatWeCover": "Read poems by American poets and explain how stanzas, line breaks and rhythm add to meaning."
                },
                {
                  "no": "02",
                  "topic": "Comparing Texts Across Genres",
                  "whatWeCover": "Compare a story, a poem and a nonfiction text on the same topic and explain how each treats the subject."
                },
                {
                  "no": "03",
                  "topic": "Myths, Legends and Folktales",
                  "whatWeCover": "Read myths and folktales from many cultures and identify the lessons and traditions they share."
                },
                {
                  "no": "04",
                  "topic": "Informative Writing: Explaining a Topic",
                  "whatWeCover": "Write a multi-paragraph informative piece with a clear introduction, organized body and formal style."
                },
                {
                  "no": "05",
                  "topic": "Writing with Precise Language",
                  "whatWeCover": "Use precise nouns, strong verbs and domain-specific words to explain ideas clearly to the reader."
                },
                {
                  "no": "06",
                  "topic": "Grammar Review: Agreement and Consistency",
                  "whatWeCover": "Review subject-verb agreement, verb tense consistency and pronoun-antecedent agreement in your own writing."
                },
                {
                  "no": "07",
                  "topic": "Spelling and Conventions",
                  "whatWeCover": "Spell grade level words correctly, including tricky homophones and commonly confused words like affect and effect."
                },
                {
                  "no": "08",
                  "topic": "Speaking: Presenting Research",
                  "whatWeCover": "Present findings with eye contact, a clear voice and visuals, and answer questions from the audience."
                },
                {
                  "no": "09",
                  "topic": "Writing Process: Planning and Revising",
                  "whatWeCover": "Use a checklist to plan, draft, revise and edit, and give peers helpful feedback on their writing."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Complex Novels",
                  "whatWeCover": "Read a grade level novel closely, keeping a reading log and tracking how setting and characters shape the story."
                },
                {
                  "no": "02",
                  "topic": "Analyzing Characters and Relationships",
                  "whatWeCover": "Explain how characters' choices and relationships drive the plot, using quotes from the text to back up claims."
                },
                {
                  "no": "03",
                  "topic": "Evidence and Inference",
                  "whatWeCover": "Make inferences from the text and cite two or more pieces of strong evidence to support each idea."
                },
                {
                  "no": "04",
                  "topic": "Written Response to Reading",
                  "whatWeCover": "Write short constructed responses and longer essays about texts, as seen on state ELA tests."
                },
                {
                  "no": "05",
                  "topic": "Analyzing Speeches and Media",
                  "whatWeCover": "Evaluate arguments in speeches, ads and videos, and tell the difference between fact and opinion."
                },
                {
                  "no": "06",
                  "topic": "Standard English Conventions",
                  "whatWeCover": "Edit for capitalization, punctuation and spelling, and use grammar rules in formal writing."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary Building for Tests",
                  "whatWeCover": "Practice academic words and word relationships that often appear on state tests and MAP Growth."
                },
                {
                  "no": "08",
                  "topic": "Speaking: Debates and Reading Aloud",
                  "whatWeCover": "Take part in a short class debate and read aloud with expression, pacing and clear pronunciation."
                },
                {
                  "no": "09",
                  "topic": "Reading Stamina and Test Strategies",
                  "whatWeCover": "Build stamina with longer passages and practice test strategies like annotating, eliminating choices and managing time."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-6/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Ratios and Ratio Language",
                  "whatWeCover": "Describe the relationship between two quantities with ratios such as 3 to 2, using recess games and recipes as examples."
                },
                {
                  "no": "02",
                  "topic": "Equivalent Ratios and Tables",
                  "whatWeCover": "Build tables of equivalent ratios and graph them, such as 2 cups of juice for every 3 cups of soda water."
                },
                {
                  "no": "03",
                  "topic": "Unit Rates",
                  "whatWeCover": "Find rates like cost per pound or miles per hour, and compare prices at the grocery store to find the better buy."
                },
                {
                  "no": "04",
                  "topic": "Rate Problems",
                  "whatWeCover": "Solve problems with unit rates, such as speed on a road trip or the price of one ticket, using tables and double number lines."
                },
                {
                  "no": "05",
                  "topic": "Percent as a Rate per 100",
                  "whatWeCover": "Understand percent as a rate per 100 and find a percent of a quantity, such as 20 percent off a $40 jersey."
                },
                {
                  "no": "06",
                  "topic": "Converting Measurement Units",
                  "whatWeCover": "Convert units like feet to inches and quarts to gallons using ratio reasoning, with cooking and sports examples."
                },
                {
                  "no": "07",
                  "topic": "Multi-Digit Division",
                  "whatWeCover": "Divide multi-digit whole numbers fluently using the standard algorithm, and check answers by multiplying."
                },
                {
                  "no": "08",
                  "topic": "Adding and Subtracting Decimals",
                  "whatWeCover": "Add and subtract multi-digit decimals fluently, using dollars and cents and sports times as contexts."
                },
                {
                  "no": "09",
                  "topic": "Multiplying and Dividing Decimals",
                  "whatWeCover": "Multiply and divide multi-digit decimals with the standard algorithms, and estimate to check that answers make sense."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Dividing Fractions: Models",
                  "whatWeCover": "Use area models and tape diagrams to show what it means to divide a fraction by a fraction, such as 3/4 divided by 1/2."
                },
                {
                  "no": "02",
                  "topic": "Dividing Fractions: Algorithm",
                  "whatWeCover": "Divide fractions and mixed numbers using reciprocals, and explain why the method works."
                },
                {
                  "no": "03",
                  "topic": "Fraction Word Problems",
                  "whatWeCover": "Solve real problems with fraction division, such as how many 3/4 cup servings are in a bag of trail mix."
                },
                {
                  "no": "04",
                  "topic": "Greatest Common Factor",
                  "whatWeCover": "Find the greatest common factor of two numbers up to 100, and use it to factor out sums like 36 + 48."
                },
                {
                  "no": "05",
                  "topic": "Least Common Multiple",
                  "whatWeCover": "Find the least common multiple of two numbers up to 12 and use it to solve scheduling problems."
                },
                {
                  "no": "06",
                  "topic": "Positive and Negative Numbers",
                  "whatWeCover": "Use integers to describe temperature, elevation and bank balances, and explain what zero means in each case."
                },
                {
                  "no": "07",
                  "topic": "Rational Numbers on the Number Line",
                  "whatWeCover": "Place integers, fractions and decimals on number lines, and find opposites and absolute values."
                },
                {
                  "no": "08",
                  "topic": "Ordering and Comparing Rational Numbers",
                  "whatWeCover": "Compare and order rational numbers, and write statements like -3 is less than -1 to describe real situations."
                },
                {
                  "no": "09",
                  "topic": "The Coordinate Plane",
                  "whatWeCover": "Plot points in all four quadrants, find reflections across axes and find distances along lines using absolute value."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Whole Number Exponents",
                  "whatWeCover": "Write and evaluate expressions with exponents, such as 3 squared and 2 cubed, and use the order of operations."
                },
                {
                  "no": "02",
                  "topic": "Writing Algebraic Expressions",
                  "whatWeCover": "Translate words into expressions using variables, such as 5 more than a number or 3 times the cost."
                },
                {
                  "no": "03",
                  "topic": "Evaluating and Reading Expressions",
                  "whatWeCover": "Evaluate expressions by substituting values, and name the parts: terms, coefficients, factors and sums."
                },
                {
                  "no": "04",
                  "topic": "Equivalent Expressions",
                  "whatWeCover": "Use the distributive and commutative properties to write equivalent expressions and prove they match."
                },
                {
                  "no": "05",
                  "topic": "One-Step Equations",
                  "whatWeCover": "Solve equations like x + 7 = 15 and 4x = 36 using inverse operations and balance models."
                },
                {
                  "no": "06",
                  "topic": "Inequalities",
                  "whatWeCover": "Write and graph inequalities such as x greater than 5, and decide which values make them true."
                },
                {
                  "no": "07",
                  "topic": "Independent and Dependent Variables",
                  "whatWeCover": "Use equations, tables and graphs to show how one quantity changes with another, such as distance and time."
                },
                {
                  "no": "08",
                  "topic": "Area of Triangles and Quadrilaterals",
                  "whatWeCover": "Find the area of triangles, parallelograms and trapezoids by composing and decomposing shapes."
                },
                {
                  "no": "09",
                  "topic": "Area of Polygons on a Grid",
                  "whatWeCover": "Find the area of composite polygons and shapes on the coordinate plane, such as a school playground map."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Volume of Rectangular Prisms",
                  "whatWeCover": "Find the volume of prisms with fractional edge lengths, using unit cubes and the formula V = l x w x h."
                },
                {
                  "no": "02",
                  "topic": "Nets and Surface Area",
                  "whatWeCover": "Use nets to find the surface area of cubes, prisms and pyramids, such as the wrapping paper needed for a box."
                },
                {
                  "no": "03",
                  "topic": "Statistical Questions",
                  "whatWeCover": "Tell the difference between statistical and non-statistical questions, and plan how to collect data that varies."
                },
                {
                  "no": "04",
                  "topic": "Dot Plots, Histograms and Box Plots",
                  "whatWeCover": "Display data on dot plots, histograms and box plots, and describe the shape, center and spread."
                },
                {
                  "no": "05",
                  "topic": "Mean and Median",
                  "whatWeCover": "Find the mean and median of a data set and decide which one better describes a typical value."
                },
                {
                  "no": "06",
                  "topic": "Mean Absolute Deviation and IQR",
                  "whatWeCover": "Measure variability with mean absolute deviation and the interquartile range, and compare two data sets."
                },
                {
                  "no": "07",
                  "topic": "Interpreting Data in Context",
                  "whatWeCover": "Describe what data tells us about a situation, such as game scores or daily step counts, using the right measures."
                },
                {
                  "no": "08",
                  "topic": "Ratio, Percent and Algebra Review",
                  "whatWeCover": "Mix ratio, percent, rate and equation problems in multi-step questions that look like state test items."
                },
                {
                  "no": "09",
                  "topic": "Problem Solving for State Tests",
                  "whatWeCover": "Practice multi-step word problems, show your work clearly and use strategies for timed state and MAP Growth style questions."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-6/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Scientific Method and Safe Labs",
                  "whatWeCover": "Plan investigations with testable questions, variables and safe lab habits, and record data clearly."
                },
                {
                  "no": "02",
                  "topic": "Cells: The Basic Unit of Life",
                  "whatWeCover": "Describe cells as the building blocks of living things, and tell the difference between plant and animal cells."
                },
                {
                  "no": "03",
                  "topic": "Cell Parts and Functions",
                  "whatWeCover": "Name the nucleus, cell membrane, cytoplasm, mitochondria and chloroplasts, and explain what each one does."
                },
                {
                  "no": "04",
                  "topic": "Single-Celled and Multicellular Organisms",
                  "whatWeCover": "Compare one-celled organisms like amoebas with multicellular ones and explain how cells work together."
                },
                {
                  "no": "05",
                  "topic": "Body Systems",
                  "whatWeCover": "Explain how the circulatory, respiratory and digestive systems work together to keep a body alive."
                },
                {
                  "no": "06",
                  "topic": "Using a Microscope",
                  "whatWeCover": "Observe slides of onion skin and pond water, make labeled drawings and compare magnifications."
                },
                {
                  "no": "07",
                  "topic": "Classifying Living Things",
                  "whatWeCover": "Sort organisms into groups using shared traits, and use simple keys to identify them."
                },
                {
                  "no": "08",
                  "topic": "Plant Structure and Photosynthesis",
                  "whatWeCover": "Describe how plants make food from sunlight, water and carbon dioxide, and where each step happens."
                },
                {
                  "no": "09",
                  "topic": "Genes and Inherited Traits",
                  "whatWeCover": "Explore how traits pass from parents to offspring, using examples from pets and families."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Matter and Particles",
                  "whatWeCover": "Use the particle model to describe solids, liquids and gases and how thermal energy changes their motion."
                },
                {
                  "no": "02",
                  "topic": "Changes of State",
                  "whatWeCover": "Explain melting, freezing, evaporation and condensation, and graph temperature changes during heating."
                },
                {
                  "no": "03",
                  "topic": "Heat and Energy Transfer",
                  "whatWeCover": "Describe conduction, convection and radiation using examples like a campfire or a hot car seat."
                },
                {
                  "no": "04",
                  "topic": "Forms of Energy",
                  "whatWeCover": "Identify kinetic, potential, thermal and chemical energy in everyday objects and show how energy changes form."
                },
                {
                  "no": "05",
                  "topic": "Energy Resources",
                  "whatWeCover": "Compare renewable and nonrenewable resources like solar, wind, coal and natural gas, and weigh their costs and benefits."
                },
                {
                  "no": "06",
                  "topic": "Forces and Motion",
                  "whatWeCover": "Describe how balanced and unbalanced forces change motion, using examples from playground equipment."
                },
                {
                  "no": "07",
                  "topic": "Speed and Graphing Motion",
                  "whatWeCover": "Measure speed with distance and time, and read and draw distance time graphs."
                },
                {
                  "no": "08",
                  "topic": "Work and Simple Machines",
                  "whatWeCover": "Show how levers, ramps and pulleys make work easier, and test them with simple experiments."
                },
                {
                  "no": "09",
                  "topic": "Engineering Design Challenges",
                  "whatWeCover": "Use the engineering design process to build and test a simple device, such as a model bridge or a catapult."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Earth's Layers and Plate Tectonics",
                  "whatWeCover": "Describe Earth's layers and how moving plates cause earthquakes, volcanoes and mountains."
                },
                {
                  "no": "02",
                  "topic": "Rocks and the Rock Cycle",
                  "whatWeCover": "Classify igneous, sedimentary and metamorphic rocks and explain how one type can change into another."
                },
                {
                  "no": "03",
                  "topic": "Weathering, Erosion and Deposition",
                  "whatWeCover": "Explain how wind, water and ice shape landforms, using examples such as the Grand Canyon."
                },
                {
                  "no": "04",
                  "topic": "The Water Cycle",
                  "whatWeCover": "Describe how water moves between oceans, air, land and living things, and the role of the sun."
                },
                {
                  "no": "05",
                  "topic": "Weather and Air Masses",
                  "whatWeCover": "Explain how air masses, fronts and pressure create weather, and read a simple weather map."
                },
                {
                  "no": "06",
                  "topic": "Climate and Climate Zones",
                  "whatWeCover": "Compare weather and climate, and describe how latitude, oceans and mountains affect climate across the United States."
                },
                {
                  "no": "07",
                  "topic": "Natural Hazards",
                  "whatWeCover": "Explain how hurricanes, tornadoes, floods and wildfires form, and how communities prepare using forecasts."
                },
                {
                  "no": "08",
                  "topic": "Earth's Atmosphere and Oceans",
                  "whatWeCover": "Describe the layers of the atmosphere and how ocean currents and the greenhouse effect affect Earth's temperature."
                },
                {
                  "no": "09",
                  "topic": "Human Impact on Earth Systems",
                  "whatWeCover": "Explore how people affect land, air and water, and discuss ways to protect state parks and local ecosystems."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Sun, Earth and Moon System",
                  "whatWeCover": "Model day, night, seasons and moon phases, and explain them using Earth's rotation, tilt and orbit."
                },
                {
                  "no": "02",
                  "topic": "Eclipses and Tides",
                  "whatWeCover": "Explain how the positions of the Sun, Earth and Moon cause eclipses and ocean tides."
                },
                {
                  "no": "03",
                  "topic": "The Solar System",
                  "whatWeCover": "Compare the planets and other objects in the solar system, and describe how gravity keeps them in orbit."
                },
                {
                  "no": "04",
                  "topic": "Stars and Galaxies",
                  "whatWeCover": "Describe stars, constellations and galaxies, and how scientists measure distances in space."
                },
                {
                  "no": "05",
                  "topic": "Space Exploration",
                  "whatWeCover": "Explore NASA missions and telescopes, and explain how technology helps us learn about space."
                },
                {
                  "no": "06",
                  "topic": "Ecosystems and Food Webs",
                  "whatWeCover": "Describe producers, consumers and decomposers, and trace how energy moves through food chains and webs."
                },
                {
                  "no": "07",
                  "topic": "Populations and Limiting Factors",
                  "whatWeCover": "Explain how food, water, space and predators affect populations, using examples like deer in a state forest."
                },
                {
                  "no": "08",
                  "topic": "Biodiversity and Conservation",
                  "whatWeCover": "Explain why biodiversity matters and discuss ways to protect endangered species and habitats."
                },
                {
                  "no": "09",
                  "topic": "Science Fair Investigation",
                  "whatWeCover": "Plan, run and present a fair test, using data tables, graphs and conclusions based on evidence."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own"
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 7 Tutoring",
          "text": "Build on Grade 6 with proportional reasoning, essay writing and life science, aligned to state standards.",
          "buttonText": "View Grade 7",
          "href": "/us/subjects/grade-7"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-7": {
    "gradeNum": 7,
    "yearId": "grade-7",
    "meta": {
      "title": "Grade 7 Tutoring USA | Math, English, Science",
      "description": "Online Grade 7 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-7"
    },
    "hero": {
      "h1": "Grade 7 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards for Grade 7. Taught in personalized 1-on-1 or small group classes by qualified tutors.",
      "primaryBtn": "Try a Free Grade 7 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 7 is a big step in middle school. Students tackle ratios, integers and early algebra, write arguments and analyze literature, and study cells and genetics. We use real examples, from sales tax to state parks.",
      "keyTopics": {
        "math": "ratios, integers, percents, equations and geometry.",
        "english": "argument writing, literature and grammar.",
        "science": "cells, genetics, ecosystems and Earth science."
      },
      "parentTip": "Ask your teen to explain one idea each week, like a discount at the mall or a plant cell. Teaching it back shows what has stuck and what needs more practice."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 7, Your Child Will...",
      "items": [
        "Compute with integers and fractions and solve ratio and percent problems",
        "Write and solve equations and inequalities to model real situations",
        "Write clear arguments and informative essays backed by text evidence",
        "Analyze themes, characters and structure in grade-level texts",
        "Explain how cells, genes and traits connect to heredity and evolution",
        "Model ecosystems and Earth systems using data and evidence"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 7 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-7/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Literature: Theme and Central Idea",
                  "whatWeCover": "Identify a theme in a story or poem, track how it develops and support the idea with text evidence."
                },
                {
                  "no": "02",
                  "topic": "Characters, Setting and Plot",
                  "whatWeCover": "Analyze how setting and plot events shape characters, and explain how a character changes across a story."
                },
                {
                  "no": "03",
                  "topic": "Citing Textual Evidence",
                  "whatWeCover": "Choose the strongest quotes to support a claim and learn to explain how each piece of evidence proves the point."
                },
                {
                  "no": "04",
                  "topic": "Informational Text: Main Idea and Details",
                  "whatWeCover": "Summarize articles and identify how key details develop a central idea, using examples from news and science writing."
                },
                {
                  "no": "05",
                  "topic": "Point of View and Author's Purpose",
                  "whatWeCover": "Compare how narrators and authors present events, and explain how point of view shapes what readers understand."
                },
                {
                  "no": "06",
                  "topic": "Narrative Writing: Plan and Draft",
                  "whatWeCover": "Plan a personal or fictional narrative with a clear sequence, a strong opening and well-chosen details."
                },
                {
                  "no": "07",
                  "topic": "Narrative Writing: Dialogue and Pacing",
                  "whatWeCover": "Use dialogue, description and pacing techniques to bring a story to life, and revise for clarity and voice."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary: Context Clues and Word Parts",
                  "whatWeCover": "Work out unfamiliar words using context clues, Greek and Latin roots, prefixes and suffixes."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Sharing a Personal Story",
                  "whatWeCover": "Practice telling a short narrative aloud with eye contact, clear volume and pacing, then reflect on feedback."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Argument Writing: Claims and Reasons",
                  "whatWeCover": "Write a clear claim about a topic like school start times and back it up with logical reasons and evidence."
                },
                {
                  "no": "02",
                  "topic": "Argument Writing: Counterclaims",
                  "whatWeCover": "Acknowledge opposing views, respond with evidence and organize an argument essay with strong transitions."
                },
                {
                  "no": "03",
                  "topic": "Evaluating Arguments in Texts",
                  "whatWeCover": "Decide if an author's reasoning is sound and separate relevant evidence from weak or unsupported claims."
                },
                {
                  "no": "04",
                  "topic": "Grammar: Phrases and Clauses",
                  "whatWeCover": "Identify and use prepositional phrases, independent clauses and dependent clauses to write varied, precise sentences."
                },
                {
                  "no": "05",
                  "topic": "Grammar: Simple, Compound and Complex Sentences",
                  "whatWeCover": "Combine ideas using coordinating and subordinating conjunctions, and fix run-ons and fragments in drafts."
                },
                {
                  "no": "06",
                  "topic": "Punctuation and Commas",
                  "whatWeCover": "Use commas to separate coordinate adjectives and to set off introductory elements, and revise for correct conventions."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary: Connotation and Figurative Language",
                  "whatWeCover": "Explain how word choice, similes, metaphors and idioms create tone and meaning in prose and poetry."
                },
                {
                  "no": "08",
                  "topic": "Reading Poetry",
                  "whatWeCover": "Analyze how structure, rhyme, rhythm and imagery shape meaning in poems from classic and modern American poets."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Class Discussion and Debate",
                  "whatWeCover": "Prepare for a discussion by reading ahead, then build on others' ideas, ask questions and respond respectfully."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Informational Writing: Organizing Ideas",
                  "whatWeCover": "Plan an explanatory essay with a clear thesis, grouped ideas and a logical structure supported by facts and definitions."
                },
                {
                  "no": "02",
                  "topic": "Informational Writing: Evidence and Transitions",
                  "whatWeCover": "Develop paragraphs with relevant facts and examples, and use transitions to connect ideas smoothly."
                },
                {
                  "no": "03",
                  "topic": "Research Skills: Finding Reliable Sources",
                  "whatWeCover": "Search for credible sources, take notes without copying, and learn how to cite sources in a simple format."
                },
                {
                  "no": "04",
                  "topic": "Comparing Texts Across Genres",
                  "whatWeCover": "Compare a fictional story with a historical account of the same period, and describe how each treats facts and ideas."
                },
                {
                  "no": "05",
                  "topic": "Analyzing Structure in Nonfiction",
                  "whatWeCover": "Examine how the parts of an article, such as headings, sequence and cause and effect, build a central idea."
                },
                {
                  "no": "06",
                  "topic": "Reading Drama: Scripts and Staging",
                  "whatWeCover": "Read short plays, analyze how dialogue and stage directions reveal character, and perform a scene aloud."
                },
                {
                  "no": "07",
                  "topic": "Writing Summaries and Responses",
                  "whatWeCover": "Write objective summaries of fiction and nonfiction, then craft a short written response with personal insight."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary: Academic and Domain Words",
                  "whatWeCover": "Build subject-area vocabulary from science, social studies and math, and use new words accurately in writing."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Presenting Research",
                  "whatWeCover": "Deliver a short presentation with a clear main idea, supporting facts and a visual aid, and answer audience questions."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Novel Study: Characters and Conflict",
                  "whatWeCover": "Read a grade-level novel and analyze how conflicts drive the plot and how characters respond and change."
                },
                {
                  "no": "02",
                  "topic": "Novel Study: Theme and Symbols",
                  "whatWeCover": "Trace themes across chapters and explain how symbols, motifs and imagery develop the central message."
                },
                {
                  "no": "03",
                  "topic": "Writing About Literature",
                  "whatWeCover": "Write a literary analysis paragraph with a clear claim, embedded quotations and explanation of the evidence."
                },
                {
                  "no": "04",
                  "topic": "Revising and Editing Essays",
                  "whatWeCover": "Revise for focus, organization and style, then edit for grammar and spelling using a personal checklist."
                },
                {
                  "no": "05",
                  "topic": "Timed Writing for State Tests",
                  "whatWeCover": "Plan, draft and polish a short response in a limited time, using strategies for state writing assessments."
                },
                {
                  "no": "06",
                  "topic": "Reading Test Skills",
                  "whatWeCover": "Practice multiple-choice and evidence-based questions, paired passages and annotation strategies for state reading tests and MAP Growth."
                },
                {
                  "no": "07",
                  "topic": "Grammar Review: Common Errors",
                  "whatWeCover": "Review subject-verb agreement, pronoun use, verb tense and modifiers, and apply them when editing."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary Review and Word Study",
                  "whatWeCover": "Revisit roots, affixes and context clues from the year, and use them to tackle tough passages."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Final Presentation",
                  "whatWeCover": "Present a favorite book or project to the group with confidence, then give and receive kind, specific feedback."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-7/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Adding and Subtracting Integers",
                  "whatWeCover": "Add and subtract positive and negative numbers using number lines and chips, such as a temperature drop from 5 to negative 8 degrees."
                },
                {
                  "no": "02",
                  "topic": "Multiplying and Dividing Integers",
                  "whatWeCover": "Learn the sign rules for products and quotients and apply them to real situations like debts, elevators and game scores."
                },
                {
                  "no": "03",
                  "topic": "Rational Numbers and Decimals",
                  "whatWeCover": "Convert fractions to decimals, including repeating decimals, and compute with positive and negative rational numbers."
                },
                {
                  "no": "04",
                  "topic": "Operations with Fractions",
                  "whatWeCover": "Add, subtract, multiply and divide fractions and mixed numbers, including negative values, in recipes and measurement problems."
                },
                {
                  "no": "05",
                  "topic": "Absolute Value and Distance",
                  "whatWeCover": "Use absolute value to find distance on a number line and explain opposites, such as elevations above and below sea level."
                },
                {
                  "no": "06",
                  "topic": "Order of Operations with Rational Numbers",
                  "whatWeCover": "Evaluate multi-step expressions with integers, fractions and decimals, and check work using estimation."
                },
                {
                  "no": "07",
                  "topic": "Real-World Rational Number Problems",
                  "whatWeCover": "Solve multi-step problems about money, temperature and sports statistics, showing work with equations and number lines."
                },
                {
                  "no": "08",
                  "topic": "Ratios and Unit Rates",
                  "whatWeCover": "Write ratios and compute unit rates with fractions, such as miles per hour on a road trip or price per ounce."
                },
                {
                  "no": "09",
                  "topic": "Comparing Rates and Best Buys",
                  "whatWeCover": "Compare unit prices at the grocery store and decide which deal is better using clear mathematical reasoning."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Proportional Relationships in Tables",
                  "whatWeCover": "Decide if two quantities are proportional by testing for a constant ratio in tables and real-world data."
                },
                {
                  "no": "02",
                  "topic": "Proportional Relationships in Graphs",
                  "whatWeCover": "Graph proportional relationships, read the unit rate from the point (1, r) and explain what the origin means."
                },
                {
                  "no": "03",
                  "topic": "Equations for Proportional Relationships",
                  "whatWeCover": "Write equations of the form y = kx to model situations like earning dollars per hour and solve for unknowns."
                },
                {
                  "no": "04",
                  "topic": "Percent Problems",
                  "whatWeCover": "Solve percent problems with a proportion or equation, including finding the part, the whole and the percent."
                },
                {
                  "no": "05",
                  "topic": "Sales Tax, Tips and Discounts",
                  "whatWeCover": "Calculate sales tax, tips and markdowns using percents, and find the final price of items at the mall or a restaurant."
                },
                {
                  "no": "06",
                  "topic": "Markups, Commissions and Fees",
                  "whatWeCover": "Apply percents to markups, commissions and fees, and compare the results with mental math and estimation."
                },
                {
                  "no": "07",
                  "topic": "Simple Interest and Percent Change",
                  "whatWeCover": "Use simple interest and percent increase and decrease to model savings accounts, population growth and price changes."
                },
                {
                  "no": "08",
                  "topic": "Scale Drawings and Maps",
                  "whatWeCover": "Use scale factors to find actual lengths and areas from maps and blueprints, like a trail map of a state park."
                },
                {
                  "no": "09",
                  "topic": "Constructing Scale Drawings",
                  "whatWeCover": "Redraw a figure at a different scale and explain how lengths and areas change, using grid paper."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Expressions with Variables",
                  "whatWeCover": "Write and read algebraic expressions, and see how terms, coefficients and constants describe a real situation."
                },
                {
                  "no": "02",
                  "topic": "Simplifying Expressions",
                  "whatWeCover": "Combine like terms and apply the distributive property to rewrite expressions in equivalent forms."
                },
                {
                  "no": "03",
                  "topic": "Factoring and Expanding Linear Expressions",
                  "whatWeCover": "Add, subtract, factor and expand linear expressions, and explain why two expressions are equivalent."
                },
                {
                  "no": "04",
                  "topic": "Solving Two-Step Equations",
                  "whatWeCover": "Solve equations of the form px + q = r with rational numbers, and check solutions by substituting."
                },
                {
                  "no": "05",
                  "topic": "Solving Equations with Parentheses",
                  "whatWeCover": "Solve equations like p(x + q) = r, and compare an arithmetic solution with an algebraic one."
                },
                {
                  "no": "06",
                  "topic": "Writing Equations from Word Problems",
                  "whatWeCover": "Translate real-world stories, such as buying tickets plus a service fee, into equations and solve them."
                },
                {
                  "no": "07",
                  "topic": "Solving Inequalities",
                  "whatWeCover": "Solve and graph inequalities of the form px + q greater than r, and interpret the solution in context."
                },
                {
                  "no": "08",
                  "topic": "Inequalities in Context",
                  "whatWeCover": "Model limits like budgets and speed limits with inequalities, and decide which values make sense."
                },
                {
                  "no": "09",
                  "topic": "Equations and Inequalities Review",
                  "whatWeCover": "Mix equation and inequality problems, choose a strategy and explain each step to build algebra confidence."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Angle Relationships",
                  "whatWeCover": "Find unknown angles using supplementary, complementary, vertical and adjacent relationships, and write equations to solve."
                },
                {
                  "no": "02",
                  "topic": "Drawing Geometric Shapes",
                  "whatWeCover": "Draw triangles from given angles or side lengths with a ruler and protractor, and decide when a triangle is possible."
                },
                {
                  "no": "03",
                  "topic": "Circles: Circumference and Area",
                  "whatWeCover": "Use pi to find the circumference and area of circles, with examples like pizzas, bike wheels and sprinklers."
                },
                {
                  "no": "04",
                  "topic": "Area of Composite Figures",
                  "whatWeCover": "Break complex shapes into rectangles, triangles and circles to find area, such as a school playground plan."
                },
                {
                  "no": "05",
                  "topic": "Volume and Surface Area of Prisms",
                  "whatWeCover": "Find the volume and surface area of prisms and pyramids using nets, and apply them to boxes and tents."
                },
                {
                  "no": "06",
                  "topic": "Cross Sections of Solids",
                  "whatWeCover": "Describe the two-dimensional shapes made by slicing prisms and pyramids, using models and drawings."
                },
                {
                  "no": "07",
                  "topic": "Probability and Chance",
                  "whatWeCover": "Find the probability of simple events, express it as a fraction, decimal or percent, and judge how likely an event is."
                },
                {
                  "no": "08",
                  "topic": "Compound Events and Simulations",
                  "whatWeCover": "Use lists, tables and tree diagrams to find probabilities of compound events, and run simple simulations with coins and spinners."
                },
                {
                  "no": "09",
                  "topic": "Statistics: Sampling and Inference",
                  "whatWeCover": "Learn how random samples let us make predictions about a population, and compare two data sets using mean and spread."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-7/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Introduction to Scientific Investigation",
                  "whatWeCover": "Ask testable questions, control variables and record data in tables, using safe lab habits and clear measurement."
                },
                {
                  "no": "02",
                  "topic": "Cells: The Building Blocks of Life",
                  "whatWeCover": "Compare living and nonliving things, identify the parts of a cell and use microscopes or models to see how cells work."
                },
                {
                  "no": "03",
                  "topic": "Plant and Animal Cells",
                  "whatWeCover": "Compare plant and animal cells, including the cell wall, chloroplasts and nucleus, and explain what each part does."
                },
                {
                  "no": "04",
                  "topic": "Cell Processes: Transport and Energy",
                  "whatWeCover": "Explore how cells take in nutrients, use energy and remove waste through diffusion and osmosis."
                },
                {
                  "no": "05",
                  "topic": "Photosynthesis and Respiration",
                  "whatWeCover": "Model how plants turn sunlight, water and carbon dioxide into food, and how cells release energy from it."
                },
                {
                  "no": "06",
                  "topic": "From Cells to Organisms",
                  "whatWeCover": "Describe how cells form tissues, organs and organ systems, from single-celled life to complex organisms."
                },
                {
                  "no": "07",
                  "topic": "Body Systems Working Together",
                  "whatWeCover": "Explain how the circulatory, respiratory and digestive systems interact to keep the body healthy."
                },
                {
                  "no": "08",
                  "topic": "The Nervous System and Senses",
                  "whatWeCover": "Trace how the brain, nerves and sense organs gather and process information from the environment."
                },
                {
                  "no": "09",
                  "topic": "Matter and Its Properties",
                  "whatWeCover": "Classify substances by physical and chemical properties, and describe particles in solids, liquids and gases."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Heredity: Genes and Traits",
                  "whatWeCover": "Explain how genes on chromosomes pass traits from parents to offspring, with examples from plants and pets."
                },
                {
                  "no": "02",
                  "topic": "Punnett Squares and Probability",
                  "whatWeCover": "Use Punnett squares to predict inherited traits, and connect dominant and recessive alleles to probability."
                },
                {
                  "no": "03",
                  "topic": "Sexual and Asexual Reproduction",
                  "whatWeCover": "Compare how organisms reproduce and how each type affects genetic variation in a population."
                },
                {
                  "no": "04",
                  "topic": "Mutations and Genetic Variation",
                  "whatWeCover": "Describe how changes in DNA can alter traits and why variation helps populations survive."
                },
                {
                  "no": "05",
                  "topic": "Natural Selection and Adaptation",
                  "whatWeCover": "Explain how traits that improve survival become more common over time, using Galapagos finches and peppered moths."
                },
                {
                  "no": "06",
                  "topic": "Evidence of Evolution",
                  "whatWeCover": "Use fossils, anatomy and similar DNA sequences to show how species are related and have changed over time."
                },
                {
                  "no": "07",
                  "topic": "Selective Breeding and Biotechnology",
                  "whatWeCover": "Discuss how humans choose traits in crops and animals, and weigh benefits and risks of modern genetic technology."
                },
                {
                  "no": "08",
                  "topic": "Classification of Living Things",
                  "whatWeCover": "Sort organisms into groups using shared features, and read simple branching diagrams of life on Earth."
                },
                {
                  "no": "09",
                  "topic": "Ecosystems: Biotic and Abiotic Factors",
                  "whatWeCover": "Identify living and nonliving parts of an ecosystem and explain how each affects population size."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Energy Flow in Ecosystems",
                  "whatWeCover": "Trace energy through food chains and food webs, from producers to consumers and decomposers."
                },
                {
                  "no": "02",
                  "topic": "Matter Cycles: Carbon and Nitrogen",
                  "whatWeCover": "Follow carbon and nitrogen as they move between organisms, air, water and soil in ecosystem cycles."
                },
                {
                  "no": "03",
                  "topic": "Populations and Limiting Factors",
                  "whatWeCover": "Explain how food, water, space and predators limit population growth, using data from wildlife in state parks."
                },
                {
                  "no": "04",
                  "topic": "Relationships in Ecosystems",
                  "whatWeCover": "Compare competition, predation and symbiosis, and give examples such as bees and flowers or wolves and elk."
                },
                {
                  "no": "05",
                  "topic": "Human Impact on Ecosystems",
                  "whatWeCover": "Evaluate how habitat loss, pollution and invasive species change ecosystems, and design solutions to protect biodiversity."
                },
                {
                  "no": "06",
                  "topic": "Biodiversity and Conservation",
                  "whatWeCover": "Examine why varied ecosystems are resilient, and propose ways communities can protect local habitats."
                },
                {
                  "no": "07",
                  "topic": "Weather and Climate Basics",
                  "whatWeCover": "Distinguish weather from climate, read weather maps and explain how air masses and ocean currents shape local conditions."
                },
                {
                  "no": "08",
                  "topic": "The Water Cycle and Climate Change",
                  "whatWeCover": "Model how water moves through Earth's systems, and explain how greenhouse gases affect global temperatures."
                },
                {
                  "no": "09",
                  "topic": "Designing Solutions to Environmental Problems",
                  "whatWeCover": "Use the engineering design process to define a problem, test ideas and improve a solution, such as reducing school waste."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Earth's Layers and Plate Tectonics",
                  "whatWeCover": "Describe Earth's interior and how moving plates cause earthquakes, volcanoes and mountain building."
                },
                {
                  "no": "02",
                  "topic": "Rocks and the Rock Cycle",
                  "whatWeCover": "Classify igneous, sedimentary and metamorphic rocks, and explain how they change over time."
                },
                {
                  "no": "03",
                  "topic": "Weathering, Erosion and Deposition",
                  "whatWeCover": "Explain how wind, water and ice shape landforms, from the Grand Canyon to river deltas."
                },
                {
                  "no": "04",
                  "topic": "Fossils and Earth's History",
                  "whatWeCover": "Use fossils and rock layers to place events on the geologic time scale and infer past environments."
                },
                {
                  "no": "05",
                  "topic": "Natural Resources and Energy Use",
                  "whatWeCover": "Compare renewable and nonrenewable resources and discuss how people use energy in homes and communities."
                },
                {
                  "no": "06",
                  "topic": "Natural Hazards and Prediction",
                  "whatWeCover": "Study hurricanes, tornadoes, wildfires and earthquakes, and explain how scientists forecast and prepare for them."
                },
                {
                  "no": "07",
                  "topic": "Chemical Reactions in Everyday Life",
                  "whatWeCover": "Identify signs of chemical reactions, such as rusting and baking, and show that mass is conserved."
                },
                {
                  "no": "08",
                  "topic": "Engineering Challenge: Design and Test",
                  "whatWeCover": "Build and test a model that solves a real-world problem, and use data to improve it."
                },
                {
                  "no": "09",
                  "topic": "Science Skills for State Tests",
                  "whatWeCover": "Practice reading graphs, analyzing data and writing short evidence-based answers for middle school science assessments."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for summer break."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own"
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 8 Tutoring",
          "text": "Prepare for high school with Grade 8 Math, English and Science, 40 live lessons per subject aligned to state standards.",
          "buttonText": "View Grade 8",
          "href": "/us/subjects/grade-8"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-8": {
    "gradeNum": 8,
    "yearId": "grade-8",
    "meta": {
      "title": "Grade 8 Tutoring USA | Math, English, Science",
      "description": "Online Grade 8 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-8"
    },
    "hero": {
      "h1": "Grade 8 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards. Pre-Algebra or Algebra I placement and PSAT 8/9 readiness, in 1-on-1 or small group classes with qualified tutors.",
      "primaryBtn": "Try a Free Grade 8 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 8 is the bridge to high school. Students master linear equations and functions, analyze texts and build arguments, and prepare for the state science test, with real examples from road trips to roller coasters.",
      "keyTopics": {
        "math": "linear equations, functions, systems, the Pythagorean Theorem.",
        "english": "analysis, argument writing, grammar.",
        "science": "forces, energy, genetics, Earth systems."
      },
      "parentTip": "Ask your teen to explain one problem a night out loud. Teaching it back shows what has stuck, and we use that insight to prepare for Algebra I and high school."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 8, Your Child Will...",
      "items": [
        "Solve linear equations and systems, and graph lines with confidence",
        "Use functions and the Pythagorean Theorem to solve real world problems",
        "Analyze texts closely and cite strong evidence to support a claim",
        "Write clear arguments and essays with correct grammar and conventions",
        "Explain forces, energy and genetics using evidence and data",
        "Read graphs and plan investigations ready for the state science test"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 8 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-8/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Complex Literary Texts",
                  "whatWeCover": "Read short stories and novel excerpts closely, tracking how setting, plot and character develop across a text."
                },
                {
                  "no": "02",
                  "topic": "Citing Textual Evidence",
                  "whatWeCover": "Choose the strongest quotes to support an analysis, and explain how each one proves the point being made."
                },
                {
                  "no": "03",
                  "topic": "Theme and Central Idea",
                  "whatWeCover": "Trace how a theme develops over a story or article and write a short summary that avoids personal opinion."
                },
                {
                  "no": "04",
                  "topic": "Narrative Writing",
                  "whatWeCover": "Plan and write a story with a clear point of view, dialogue, pacing and descriptive details."
                },
                {
                  "no": "05",
                  "topic": "Sentence Variety: Phrases and Clauses",
                  "whatWeCover": "Use verbal phrases, and independent and dependent clauses, to build sentences that flow and vary in length."
                },
                {
                  "no": "06",
                  "topic": "Verbals: Gerunds, Participles and Infinitives",
                  "whatWeCover": "Identify and use verbals, and fix common errors such as dangling and misplaced modifiers."
                },
                {
                  "no": "07",
                  "topic": "Context Clues and Word Roots",
                  "whatWeCover": "Use context, Greek and Latin roots, and affixes to work out unfamiliar words in grade level texts."
                },
                {
                  "no": "08",
                  "topic": "Active and Passive Voice",
                  "whatWeCover": "Recognize both voices, explain when each works best and revise sentences for clarity."
                },
                {
                  "no": "09",
                  "topic": "Discussion Skills: Speaking and Listening",
                  "whatWeCover": "Prepare for a group discussion, build on classmates' ideas and respond to questions with evidence."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Informational Texts",
                  "whatWeCover": "Break down articles and speeches, and follow how a writer organizes ideas, claims and supporting details."
                },
                {
                  "no": "02",
                  "topic": "Analyzing Arguments and Claims",
                  "whatWeCover": "Spot an author's claim, check whether the reasoning is sound and notice when evidence is weak or off topic."
                },
                {
                  "no": "03",
                  "topic": "Argumentative Writing",
                  "whatWeCover": "Write a claim with reasons, evidence and counterarguments, using a formal tone and clear transitions."
                },
                {
                  "no": "04",
                  "topic": "Research and Reliable Sources",
                  "whatWeCover": "Gather facts from several sources, judge their credibility and record them using a simple citation format."
                },
                {
                  "no": "05",
                  "topic": "Informative Writing",
                  "whatWeCover": "Write an explanatory essay with a strong introduction, organized body paragraphs and a thoughtful conclusion."
                },
                {
                  "no": "06",
                  "topic": "Figurative Language and Tone",
                  "whatWeCover": "Explain how metaphor, irony, allusion and word choice shape meaning and tone in a text."
                },
                {
                  "no": "07",
                  "topic": "Punctuation: Commas, Dashes and Ellipses",
                  "whatWeCover": "Use commas, semicolons, colons and ellipses to show pauses, lists and omissions accurately."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary: Connotation and Nuance",
                  "whatWeCover": "Compare words with similar meanings and choose the one with the right emotional shade for the sentence."
                },
                {
                  "no": "09",
                  "topic": "Presenting with Evidence",
                  "whatWeCover": "Deliver a short oral presentation with clear eye contact, pacing and visuals that support the main points."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Analyzing Poetry",
                  "whatWeCover": "Read poems for structure, sound and imagery, and explain how form helps to deliver the poet's message."
                },
                {
                  "no": "02",
                  "topic": "Point of View and Perspective",
                  "whatWeCover": "Compare how different narrators see the same event, and how that shapes what readers believe."
                },
                {
                  "no": "03",
                  "topic": "Comparing a Text and Its Adaptation",
                  "whatWeCover": "Compare a story with a film or stage version and explain what the creators kept, changed and why."
                },
                {
                  "no": "04",
                  "topic": "Reading Drama",
                  "whatWeCover": "Read scenes from a play, noting stage directions, dialogue and how a character's words reveal motives."
                },
                {
                  "no": "05",
                  "topic": "Writing About Literature",
                  "whatWeCover": "Write a literary analysis that states a thesis, uses quotes smoothly and explains their meaning."
                },
                {
                  "no": "06",
                  "topic": "Revising and Editing",
                  "whatWeCover": "Revise drafts for organization, word choice and style, then proofread for spelling and conventions."
                },
                {
                  "no": "07",
                  "topic": "Verb Mood and Tense",
                  "whatWeCover": "Use indicative, imperative, conditional and subjunctive moods correctly, and keep verb tense consistent."
                },
                {
                  "no": "08",
                  "topic": "Academic Vocabulary and Word Relationships",
                  "whatWeCover": "Build precise vocabulary through analogies, synonyms and antonyms, and use new words in writing."
                },
                {
                  "no": "09",
                  "topic": "Speaking with Confidence",
                  "whatWeCover": "Practice clear delivery, tone and body language through short talks and peer feedback."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Close Reading for Standardized Tests",
                  "whatWeCover": "Practice reading passages and answering multiple choice and evidence based questions in the style of state tests."
                },
                {
                  "no": "02",
                  "topic": "Analyzing Structure and Word Choice",
                  "whatWeCover": "Explain how a text's structure and key word choices shape its meaning, emphasis and style."
                },
                {
                  "no": "03",
                  "topic": "Timed Writing and Short Responses",
                  "whatWeCover": "Plan and write a clear response in a limited time, with a claim, evidence and brief reasoning."
                },
                {
                  "no": "04",
                  "topic": "Grammar and Usage Skills Check",
                  "whatWeCover": "Review pronoun agreement, parallel structure, modifiers and common usage errors found on state tests."
                },
                {
                  "no": "05",
                  "topic": "PSAT 8/9 Reading and Writing Readiness",
                  "whatWeCover": "Try PSAT 8/9 style passages and questions, and learn pacing and answer elimination strategies."
                },
                {
                  "no": "06",
                  "topic": "Reading Across Texts",
                  "whatWeCover": "Compare two texts on the same topic and explain where the authors agree, differ or add new information."
                },
                {
                  "no": "07",
                  "topic": "Narrative and Memoir Project",
                  "whatWeCover": "Write a polished personal narrative that uses reflection, sensory detail and carefully chosen words."
                },
                {
                  "no": "08",
                  "topic": "Getting Ready for High School Reading",
                  "whatWeCover": "Preview high school reading habits, including annotating, note taking and keeping a reading log."
                },
                {
                  "no": "09",
                  "topic": "Seminar and Portfolio Presentation",
                  "whatWeCover": "Present a favorite piece of writing from the year and answer questions from the tutor and classmates."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-8/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Rational and Irrational Numbers",
                  "whatWeCover": "Sort numbers into rational and irrational sets, and place square roots such as the square root of 2 on a number line."
                },
                {
                  "no": "02",
                  "topic": "Exponents and Scientific Notation",
                  "whatWeCover": "Apply integer exponent rules and write very large or small numbers, such as the distance to the Sun, in scientific notation."
                },
                {
                  "no": "03",
                  "topic": "Square Roots and Cube Roots",
                  "whatWeCover": "Solve equations such as x squared equals 49 and x cubed equals 27, and estimate roots that are not perfect."
                },
                {
                  "no": "04",
                  "topic": "Solving Linear Equations in One Variable",
                  "whatWeCover": "Solve equations with variables on both sides, fractions and the distributive property, and check each answer."
                },
                {
                  "no": "05",
                  "topic": "Equations with One, None or Many Solutions",
                  "whatWeCover": "Decide when an equation has one solution, no solution or infinitely many, and explain how you know."
                },
                {
                  "no": "06",
                  "topic": "Proportional Relationships and Unit Rate",
                  "whatWeCover": "Compare speeds, prices per ounce and other rates using tables, graphs and equations."
                },
                {
                  "no": "07",
                  "topic": "Slope and the Equation y = mx",
                  "whatWeCover": "Find slope from a graph, table or two points, and link it to a constant rate of change."
                },
                {
                  "no": "08",
                  "topic": "Slope Intercept Form: y = mx + b",
                  "whatWeCover": "Graph lines and write equations from a slope and y intercept, using examples like a phone plan with a monthly fee."
                },
                {
                  "no": "09",
                  "topic": "Comparing Linear Functions",
                  "whatWeCover": "Compare two linear functions shown as tables, graphs or equations, and decide which grows faster."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Functions: Inputs and Outputs",
                  "whatWeCover": "Define a function, use function notation and decide whether a table, graph or mapping shows a function."
                },
                {
                  "no": "02",
                  "topic": "Linear and Nonlinear Functions",
                  "whatWeCover": "Tell linear from nonlinear functions using graphs and tables, and describe how each one changes."
                },
                {
                  "no": "03",
                  "topic": "Building Functions from Real Situations",
                  "whatWeCover": "Write a function from a story, such as the cost of a road trip, and interpret its slope and intercept."
                },
                {
                  "no": "04",
                  "topic": "Describing Graphs of Functions",
                  "whatWeCover": "Read a graph that shows increasing, decreasing, constant, maximum or minimum behavior and tell its story."
                },
                {
                  "no": "05",
                  "topic": "Systems of Equations by Graphing",
                  "whatWeCover": "Graph two lines to find where they meet and explain what the solution means in context."
                },
                {
                  "no": "06",
                  "topic": "Systems of Equations by Substitution",
                  "whatWeCover": "Solve a system by substitution, and check that the answer works in both equations."
                },
                {
                  "no": "07",
                  "topic": "Systems of Equations by Elimination",
                  "whatWeCover": "Add or subtract equations to cancel a variable, and choose the best method for each system."
                },
                {
                  "no": "08",
                  "topic": "Real World Systems",
                  "whatWeCover": "Set up and solve problems such as comparing two gym memberships or ticket prices at a concert."
                },
                {
                  "no": "09",
                  "topic": "Linear Inequalities Review",
                  "whatWeCover": "Solve and graph one variable inequalities, and show solutions on a number line."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Transformations on the Coordinate Plane",
                  "whatWeCover": "Translate, reflect and rotate figures on the plane, and describe each move using coordinates."
                },
                {
                  "no": "02",
                  "topic": "Dilations and Similar Figures",
                  "whatWeCover": "Dilate figures from a center, use scale factors and decide when two figures are similar."
                },
                {
                  "no": "03",
                  "topic": "Congruence and Angle Relationships",
                  "whatWeCover": "Use transformations to show congruence, and find missing angles formed by parallel lines and a transversal."
                },
                {
                  "no": "04",
                  "topic": "Angle Sums in Triangles",
                  "whatWeCover": "Prove that the angles of a triangle add to 180 degrees and find exterior angles in everyday diagrams."
                },
                {
                  "no": "05",
                  "topic": "The Pythagorean Theorem",
                  "whatWeCover": "Use a squared plus b squared equals c squared to find missing sides of right triangles and test for right angles."
                },
                {
                  "no": "06",
                  "topic": "Pythagorean Theorem in Real Life",
                  "whatWeCover": "Apply the theorem to ladders, TV screen sizes and distances on the coordinate plane."
                },
                {
                  "no": "07",
                  "topic": "Volume of Cylinders, Cones and Spheres",
                  "whatWeCover": "Use formulas to find the volume of cylinders, cones and spheres, such as an ice cream cone or a water tank."
                },
                {
                  "no": "08",
                  "topic": "Surface Area and Composite Solids",
                  "whatWeCover": "Find surface area of prisms and cylinders, and combine shapes to measure real objects."
                },
                {
                  "no": "09",
                  "topic": "Geometry Problem Solving",
                  "whatWeCover": "Mix transformations, angles, volume and the Pythagorean Theorem in multi step problems."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Scatter Plots and Association",
                  "whatWeCover": "Build scatter plots, describe positive, negative or no association and spot clusters and outliers."
                },
                {
                  "no": "02",
                  "topic": "Lines of Best Fit",
                  "whatWeCover": "Draw a line of best fit, write its equation and use it to make predictions, such as height versus shoe size."
                },
                {
                  "no": "03",
                  "topic": "Two Way Tables and Relative Frequency",
                  "whatWeCover": "Organize categorical data in two way tables and compare relative frequencies of survey results."
                },
                {
                  "no": "04",
                  "topic": "State Test Math Practice",
                  "whatWeCover": "Work through multi step, multiple choice and technology enhanced items in the style of state tests."
                },
                {
                  "no": "05",
                  "topic": "Algebra Readiness: Expressions and Polynomials",
                  "whatWeCover": "Simplify expressions, combine like terms and meet exponent rules and basic polynomial ideas used in Algebra I."
                },
                {
                  "no": "06",
                  "topic": "Algebra Readiness: Solving and Graphing",
                  "whatWeCover": "Review solving equations and graphing lines, and preview inequalities and quadratics ahead of Algebra I."
                },
                {
                  "no": "07",
                  "topic": "PSAT 8/9 Math Readiness",
                  "whatWeCover": "Practice PSAT 8/9 style questions on algebra, data and geometry, with tips on pacing and calculator use."
                },
                {
                  "no": "08",
                  "topic": "Problem Solving and Math Modeling",
                  "whatWeCover": "Turn real situations, like planning a budget or a school fundraiser, into models and defend the answer."
                },
                {
                  "no": "09",
                  "topic": "Getting Ready for High School Math",
                  "whatWeCover": "Build study habits, note taking and error review routines for Algebra I, Geometry and beyond."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-8/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Scientific Practices and Investigations",
                  "whatWeCover": "Plan investigations, control variables, collect data and use evidence to support a claim."
                },
                {
                  "no": "02",
                  "topic": "Atoms, Molecules and the Periodic Table",
                  "whatWeCover": "Describe atoms, elements and compounds, and use the periodic table to predict how elements behave."
                },
                {
                  "no": "03",
                  "topic": "Chemical Reactions and Conservation of Mass",
                  "whatWeCover": "Identify signs of a reaction and show that atoms and total mass stay the same in a balanced equation."
                },
                {
                  "no": "04",
                  "topic": "States of Matter and Thermal Energy",
                  "whatWeCover": "Explain how particles move in solids, liquids and gases, and how heat changes them."
                },
                {
                  "no": "05",
                  "topic": "Properties of Matter",
                  "whatWeCover": "Compare density, melting point and solubility, and use properties to identify unknown substances."
                },
                {
                  "no": "06",
                  "topic": "Forces and Newton's First Law",
                  "whatWeCover": "Describe balanced and unbalanced forces and explain inertia using seat belts and sliding objects."
                },
                {
                  "no": "07",
                  "topic": "Newton's Second Law: Force, Mass and Acceleration",
                  "whatWeCover": "Relate force, mass and acceleration with simple calculations and data from ramp and cart experiments."
                },
                {
                  "no": "08",
                  "topic": "Newton's Third Law and Collisions",
                  "whatWeCover": "Explain action and reaction pairs, from rocket launches to bumper cars, and predict outcomes of collisions."
                },
                {
                  "no": "09",
                  "topic": "Motion Graphs: Speed and Velocity",
                  "whatWeCover": "Read and draw distance time graphs, and calculate speed, velocity and acceleration."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Energy: Kinetic and Potential",
                  "whatWeCover": "Compare kinetic and potential energy, and track energy changes in roller coasters and swings."
                },
                {
                  "no": "02",
                  "topic": "Energy Transfer and Conservation",
                  "whatWeCover": "Show how energy moves between objects and changes form, including losses as heat."
                },
                {
                  "no": "03",
                  "topic": "Waves: Light and Sound",
                  "whatWeCover": "Describe wavelength, frequency and amplitude, and how waves reflect, refract and carry energy."
                },
                {
                  "no": "04",
                  "topic": "Electromagnetic Spectrum and Information",
                  "whatWeCover": "Compare radio, visible and X ray waves, and explain how waves send information in phones and Wi-Fi."
                },
                {
                  "no": "05",
                  "topic": "Electricity and Magnetism",
                  "whatWeCover": "Build simple circuits and explore how electric currents and magnetic fields interact."
                },
                {
                  "no": "06",
                  "topic": "Gravity and the Solar System",
                  "whatWeCover": "Use gravity to explain orbits, tides and the motion of planets, moons and the Sun."
                },
                {
                  "no": "07",
                  "topic": "Seasons, Moon Phases and Eclipses",
                  "whatWeCover": "Model Earth's tilt and the Sun, Moon and Earth system to explain seasons, phases and eclipses."
                },
                {
                  "no": "08",
                  "topic": "Stars, Galaxies and the Universe",
                  "whatWeCover": "Explore the life of stars, galaxy types and evidence for the Big Bang and an expanding universe."
                },
                {
                  "no": "09",
                  "topic": "Engineering Design Challenge",
                  "whatWeCover": "Design, test and improve a solution to a problem, such as a protective package for an egg drop."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Cells and Heredity: DNA and Genes",
                  "whatWeCover": "Describe how genes and chromosomes carry traits from parents to children, using Punnett squares."
                },
                {
                  "no": "02",
                  "topic": "Mutations and Variation",
                  "whatWeCover": "Explain how changes in DNA can alter traits and how variation appears in a population."
                },
                {
                  "no": "03",
                  "topic": "Natural Selection and Adaptation",
                  "whatWeCover": "Use evidence to explain how traits that help survival become more common over many generations."
                },
                {
                  "no": "04",
                  "topic": "Evidence for Evolution: Fossils and Anatomy",
                  "whatWeCover": "Compare fossils, anatomy and DNA to build and read simple evolutionary trees."
                },
                {
                  "no": "05",
                  "topic": "Human Impact on Populations",
                  "whatWeCover": "Look at how habitat loss, invasive species and selective breeding affect living things."
                },
                {
                  "no": "06",
                  "topic": "Ecosystems and Energy Flow",
                  "whatWeCover": "Follow energy through food webs, and track how carbon and nitrogen cycle through an ecosystem."
                },
                {
                  "no": "07",
                  "topic": "Photosynthesis and Cellular Respiration",
                  "whatWeCover": "Compare how plants make food and how cells release energy, with a focus on inputs and outputs."
                },
                {
                  "no": "08",
                  "topic": "Body Systems and Homeostasis",
                  "whatWeCover": "Explain how organ systems work together to keep the body stable during exercise and rest."
                },
                {
                  "no": "09",
                  "topic": "Genetics and Biotechnology Debate",
                  "whatWeCover": "Weigh the benefits and risks of tools such as gene editing and crop engineering, using evidence."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Earth Systems and Plate Tectonics",
                  "whatWeCover": "Use maps and evidence to explain moving plates, earthquakes, volcanoes and mountain building."
                },
                {
                  "no": "02",
                  "topic": "Rock Cycle and Earth History",
                  "whatWeCover": "Trace how rocks form and change, and use rock layers and fossils to read Earth's past."
                },
                {
                  "no": "03",
                  "topic": "Weather, Climate and Water Cycle",
                  "whatWeCover": "Explain air masses, fronts and ocean currents, and the difference between weather and climate."
                },
                {
                  "no": "04",
                  "topic": "Climate Change and Human Activity",
                  "whatWeCover": "Examine data on greenhouse gases, temperature and sea level, and discuss solutions."
                },
                {
                  "no": "05",
                  "topic": "Natural Resources and Sustainability",
                  "whatWeCover": "Compare renewable and nonrenewable energy, and evaluate ways to use resources wisely."
                },
                {
                  "no": "06",
                  "topic": "State Science Test Practice",
                  "whatWeCover": "Practice data tables, graphs, scenario questions and short responses in the style of state science tests."
                },
                {
                  "no": "07",
                  "topic": "Reading Scientific Data and Graphs",
                  "whatWeCover": "Interpret graphs, spot trends and draw conclusions supported by data, as required on the Grade 8 science test."
                },
                {
                  "no": "08",
                  "topic": "Science Fair Style Investigation",
                  "whatWeCover": "Plan and complete a full investigation, from question and hypothesis to a clear report."
                },
                {
                  "no": "09",
                  "topic": "Getting Ready for High School Science",
                  "whatWeCover": "Preview Biology, Physical Science and Earth Science, and build lab and note taking habits."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the summer break."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own"
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 9 Tutoring",
          "text": "Start high school strong with Grade 9 Math, English and Science, 40 live lessons per subject.",
          "buttonText": "View Grade 9",
          "href": "/us/subjects/grade-9"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-9": {
    "gradeNum": 9,
    "yearId": "grade-9",
    "meta": {
      "title": "Grade 9 Tutoring USA | Math, English, Science",
      "description": "Online Grade 9 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-9"
    },
    "hero": {
      "h1": "Grade 9 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards. Taught in personalized 1-on-1 or small group classes by qualified tutors for a strong start to high school.",
      "primaryBtn": "Try a Free Grade 9 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 9 is the first step of high school, where grades start to count toward GPA and college plans. Our program builds Algebra I, Biology and English skills with real-world examples, from school budgets to state parks.",
      "keyTopics": {
        "math": "linear equations, systems, polynomials, quadratics.",
        "english": "literary analysis, argument writing, PSAT 8/9 reading.",
        "science": "cells, genetics, evolution, ecology."
      },
      "parentTip": "Help your teen set up a weekly planner and check grades together each month. Early habits in Grade 9 shape GPA, credits and confidence for the next three years."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 9, Your Child Will...",
      "items": [
        "Solve and graph linear equations, inequalities and systems with confidence",
        "Factor, graph and solve quadratic equations and model real situations",
        "Analyze literature and write clear, evidence-based arguments and essays",
        "Read closely for PSAT 8/9 and use correct grammar, vocabulary and style",
        "Explain how cells, DNA and inheritance work using biology vocabulary",
        "Design controlled experiments and use data to explain evolution and ecosystems"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 9 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-9/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Literature: Theme and Central Idea",
                  "whatWeCover": "Read short stories and identify theme, supporting details and how a central idea develops across a text."
                },
                {
                  "no": "02",
                  "topic": "Characterization and Point of View",
                  "whatWeCover": "Analyze how authors reveal character through words, actions and thoughts, and how point of view shapes what readers know."
                },
                {
                  "no": "03",
                  "topic": "Citing Textual Evidence",
                  "whatWeCover": "Choose strong quotes to support a claim, and explain in your own words how the evidence proves the point."
                },
                {
                  "no": "04",
                  "topic": "Parts of Speech and Sentence Structure",
                  "whatWeCover": "Review clauses, phrases and sentence types, and use varied structures to make writing smoother and more precise."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary: Context Clues and Word Roots",
                  "whatWeCover": "Work out unfamiliar words using context, Greek and Latin roots, prefixes and suffixes, and build a personal word bank."
                },
                {
                  "no": "06",
                  "topic": "Narrative Writing: Personal Essay",
                  "whatWeCover": "Plan, draft and revise a personal narrative with a clear opening, vivid details and a reflective ending."
                },
                {
                  "no": "07",
                  "topic": "Grammar in Writing: Punctuation and Agreement",
                  "whatWeCover": "Fix common errors with commas, semicolons, apostrophes and subject-verb agreement in your own drafts."
                },
                {
                  "no": "08",
                  "topic": "Speaking: Class Discussions",
                  "whatWeCover": "Prepare for and join a discussion with evidence, active listening and respectful questions, as in a Socratic seminar."
                },
                {
                  "no": "09",
                  "topic": "Reading Informational Text: Main Idea and Structure",
                  "whatWeCover": "Find the main idea of articles and essays and explain how headings, order and structure support the author's purpose."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry: Figurative Language and Tone",
                  "whatWeCover": "Read poems closely, explain similes, metaphors and imagery and describe how word choice creates tone and mood."
                },
                {
                  "no": "02",
                  "topic": "Reading a Novel: Plot and Conflict",
                  "whatWeCover": "Track plot, conflict and turning points in a grade-level novel, and keep a reading journal of questions and predictions."
                },
                {
                  "no": "03",
                  "topic": "Setting, Symbolism and Mood",
                  "whatWeCover": "Explain how setting, symbols and mood add meaning to a story, and support ideas with evidence from the text."
                },
                {
                  "no": "04",
                  "topic": "Argument Writing: Claims and Reasoning",
                  "whatWeCover": "Write a clear claim, back it with reasons and evidence and address a counterclaim, using topics from school and community life."
                },
                {
                  "no": "05",
                  "topic": "Evaluating Sources and Evidence",
                  "whatWeCover": "Judge whether sources are credible, spot bias and decide which facts best support an argument."
                },
                {
                  "no": "06",
                  "topic": "Rhetoric: Appeals and Author's Purpose",
                  "whatWeCover": "Identify ethos, pathos and logos in speeches and ads, and explain how an author's purpose shapes the message."
                },
                {
                  "no": "07",
                  "topic": "Paragraph Craft: Transitions and Cohesion",
                  "whatWeCover": "Organize ideas with strong topic sentences, transitions and concluding statements so each paragraph flows into the next."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary: Academic and Domain Words",
                  "whatWeCover": "Learn high-frequency academic words from PSAT-style reading passages and use them correctly in speaking and writing."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Informative Presentations",
                  "whatWeCover": "Plan and deliver a short presentation with a clear structure, steady pace, eye contact and helpful visuals."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Drama: Reading a Play",
                  "whatWeCover": "Read scenes from a play, study dialogue and stage directions and explain how drama reveals character and theme."
                },
                {
                  "no": "02",
                  "topic": "Shakespeare: Language and Meaning",
                  "whatWeCover": "Unpack Shakespearean language from a grade-level play, paraphrase key lines and discuss why the story still matters."
                },
                {
                  "no": "03",
                  "topic": "Informational Writing: Explaining a Topic",
                  "whatWeCover": "Research and write an explanatory essay with a thesis, organized body paragraphs and accurate, cited information."
                },
                {
                  "no": "04",
                  "topic": "Research Skills and Citing Sources",
                  "whatWeCover": "Search for reliable information, take notes without plagiarizing and cite sources in a simple MLA style."
                },
                {
                  "no": "05",
                  "topic": "Analyzing Nonfiction: Memoir and Speeches",
                  "whatWeCover": "Read memoirs and famous American speeches and explain how structure and word choice build the author's message."
                },
                {
                  "no": "06",
                  "topic": "Sentence Combining and Style",
                  "whatWeCover": "Combine short sentences, use parallel structure and cut wordiness to give writing a stronger, clearer voice."
                },
                {
                  "no": "07",
                  "topic": "Revising and Editing Your Writing",
                  "whatWeCover": "Use a checklist to revise for ideas and organization, then edit for grammar and spelling, with peer feedback."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary: Connotation and Nuance",
                  "whatWeCover": "Choose between words with similar meanings and explain how connotation changes the tone of a sentence."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Debate and Respectful Disagreement",
                  "whatWeCover": "Take a side on a topic, build evidence-based points and respond to opposing views politely in a class debate."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Comparing Texts Across Genres",
                  "whatWeCover": "Compare a story, a poem and a nonfiction piece on the same theme and explain how each genre shapes the message."
                },
                {
                  "no": "02",
                  "topic": "Literary Analysis Essay",
                  "whatWeCover": "Write a multi-paragraph essay with a thesis that analyzes how an author uses craft to develop a theme."
                },
                {
                  "no": "03",
                  "topic": "Reading Skills for PSAT 8/9 and State Tests",
                  "whatWeCover": "Practice evidence-based reading questions on passages, including paired texts, charts and vocabulary in context."
                },
                {
                  "no": "04",
                  "topic": "Writing and Language: Standard English Conventions",
                  "whatWeCover": "Practice the grammar, punctuation and sentence-boundary questions common on the PSAT 8/9 and state tests."
                },
                {
                  "no": "05",
                  "topic": "Writing and Language: Expression of Ideas",
                  "whatWeCover": "Revise passages for organization, transitions, concision and tone, as in PSAT 8/9 style questions."
                },
                {
                  "no": "06",
                  "topic": "Timed Writing and Stamina",
                  "whatWeCover": "Plan and write a short response under time, with a quick outline, a clear thesis and a final proofread."
                },
                {
                  "no": "07",
                  "topic": "Reading Independently: Building a Reading Life",
                  "whatWeCover": "Choose books you enjoy, set a weekly reading goal and write short responses that show growing understanding."
                },
                {
                  "no": "08",
                  "topic": "Speaking: Presenting Your Portfolio",
                  "whatWeCover": "Select your best pieces, reflect on your growth as a reader and writer and present them with confidence."
                },
                {
                  "no": "09",
                  "topic": "Preparing for Grade 10 English",
                  "whatWeCover": "Preview high school expectations in Grade 10 English, from longer texts to research writing, and set goals for the summer."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-9/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Variables, Expressions and Order of Operations",
                  "whatWeCover": "Translate words into algebraic expressions, evaluate them with substitution and apply the order of operations to problems like split restaurant bills."
                },
                {
                  "no": "02",
                  "topic": "Properties of Real Numbers",
                  "whatWeCover": "Use the commutative, associative and distributive properties to simplify expressions and explain why each step is valid."
                },
                {
                  "no": "03",
                  "topic": "Solving One-Step and Two-Step Equations",
                  "whatWeCover": "Isolate the variable using inverse operations and check each solution by substituting it back into the original equation."
                },
                {
                  "no": "04",
                  "topic": "Multi-Step Equations and Variables on Both Sides",
                  "whatWeCover": "Solve equations that need distributing and combining like terms, and spot those with no solution or infinitely many solutions."
                },
                {
                  "no": "05",
                  "topic": "Literal Equations and Formulas",
                  "whatWeCover": "Rearrange formulas such as perimeter, area and distance equals rate times time to solve for any chosen variable."
                },
                {
                  "no": "06",
                  "topic": "Ratios, Rates and Proportions",
                  "whatWeCover": "Solve proportion problems with unit rates, such as miles per gallon on a road trip or price per ounce at the store."
                },
                {
                  "no": "07",
                  "topic": "Percent Problems",
                  "whatWeCover": "Work with percent change, discounts, sales tax and tips, and write equations to model each situation."
                },
                {
                  "no": "08",
                  "topic": "Solving and Graphing Inequalities",
                  "whatWeCover": "Solve one-step and multi-step inequalities, graph the solutions on a number line and flip the sign when needed."
                },
                {
                  "no": "09",
                  "topic": "Compound Inequalities and Absolute Value Equations",
                  "whatWeCover": "Solve and graph and/or inequalities and absolute value equations, and explain what the answers mean in context."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and equation games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Relations and Functions",
                  "whatWeCover": "Tell functions from relations using tables, mapping diagrams and the vertical line test, and use function notation like f(x)."
                },
                {
                  "no": "02",
                  "topic": "Slope and Rate of Change",
                  "whatWeCover": "Find slope from graphs, tables and two points, and interpret it as a rate of change in real situations."
                },
                {
                  "no": "03",
                  "topic": "Slope-Intercept Form",
                  "whatWeCover": "Graph lines from y = mx + b and write equations from a graph, a table or a story about earning and saving money."
                },
                {
                  "no": "04",
                  "topic": "Point-Slope and Standard Form",
                  "whatWeCover": "Write the equation of a line from a point and a slope, and convert between point-slope, slope-intercept and standard form."
                },
                {
                  "no": "05",
                  "topic": "Parallel and Perpendicular Lines",
                  "whatWeCover": "Use slopes to decide whether lines are parallel or perpendicular, and write equations for lines that meet given conditions."
                },
                {
                  "no": "06",
                  "topic": "Arithmetic Sequences",
                  "whatWeCover": "Find the common difference, write explicit and recursive rules and connect arithmetic sequences to linear functions."
                },
                {
                  "no": "07",
                  "topic": "Scatter Plots and Lines of Best Fit",
                  "whatWeCover": "Plot two-variable data, draw a line of best fit, describe correlation and use the line to make predictions."
                },
                {
                  "no": "08",
                  "topic": "Graphing Linear Inequalities",
                  "whatWeCover": "Graph linear inequalities in two variables on the coordinate plane, shade the correct region and test points to check."
                },
                {
                  "no": "09",
                  "topic": "Transformations of Linear Functions",
                  "whatWeCover": "Describe how changing m and b shifts, stretches or reflects a line, and compare linear models across different forms."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with graphing games and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Systems of Equations by Graphing",
                  "whatWeCover": "Solve systems by graphing, decide whether they have one, none or infinitely many solutions and check answers in both equations."
                },
                {
                  "no": "02",
                  "topic": "Systems by Substitution",
                  "whatWeCover": "Solve systems by substituting one expression into the other, using situations like comparing two phone plans."
                },
                {
                  "no": "03",
                  "topic": "Systems by Elimination",
                  "whatWeCover": "Add or subtract equations to eliminate a variable, and choose the best method for each system."
                },
                {
                  "no": "04",
                  "topic": "Systems of Linear Inequalities",
                  "whatWeCover": "Graph the solution region of a system of inequalities and use it to answer budget and constraint problems."
                },
                {
                  "no": "05",
                  "topic": "Exponent Rules",
                  "whatWeCover": "Apply the product, quotient and power rules, and work with zero and negative exponents and scientific notation."
                },
                {
                  "no": "06",
                  "topic": "Adding and Subtracting Polynomials",
                  "whatWeCover": "Name polynomials by degree and terms, then add and subtract them by combining like terms accurately."
                },
                {
                  "no": "07",
                  "topic": "Multiplying Polynomials",
                  "whatWeCover": "Multiply monomials, binomials and trinomials using the distributive property, area models and the FOIL method."
                },
                {
                  "no": "08",
                  "topic": "Special Products of Binomials",
                  "whatWeCover": "Recognize and expand perfect squares and the difference of squares, and use them as shortcuts for mental math."
                },
                {
                  "no": "09",
                  "topic": "Factoring Out the Greatest Common Factor",
                  "whatWeCover": "Find the GCF of terms, factor it out of a polynomial and check the result by multiplying back."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with algebra puzzles and worked examples, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Factoring Trinomials",
                  "whatWeCover": "Factor trinomials of the form x squared plus bx plus c and ax squared plus bx plus c, using patterns and the grouping method."
                },
                {
                  "no": "02",
                  "topic": "Solving Quadratics by Factoring",
                  "whatWeCover": "Use the zero product property to solve quadratic equations and connect the solutions to the x-intercepts of a graph."
                },
                {
                  "no": "03",
                  "topic": "Graphing Quadratic Functions",
                  "whatWeCover": "Graph parabolas, find the vertex and axis of symmetry and describe how a, b and c change the shape."
                },
                {
                  "no": "04",
                  "topic": "Solving Quadratics with Square Roots and Completing the Square",
                  "whatWeCover": "Solve quadratics by taking square roots and by completing the square, and know when each method works best."
                },
                {
                  "no": "05",
                  "topic": "The Quadratic Formula and the Discriminant",
                  "whatWeCover": "Apply the quadratic formula and use the discriminant to predict how many real solutions an equation has."
                },
                {
                  "no": "06",
                  "topic": "Quadratic Models in Real Life",
                  "whatWeCover": "Model the height of a thrown ball or the area of a state park fence with quadratics, and interpret the key features."
                },
                {
                  "no": "07",
                  "topic": "Exponential Growth and Decay",
                  "whatWeCover": "Write and graph exponential functions to model compound interest, population change and a phone losing value over time."
                },
                {
                  "no": "08",
                  "topic": "Comparing Linear, Quadratic and Exponential Models",
                  "whatWeCover": "Compare how each type of function grows, choose the best model for a data set and explain why."
                },
                {
                  "no": "09",
                  "topic": "Algebra I Review and State Test Practice",
                  "whatWeCover": "Pull the year together with mixed problems in the style of state end-of-course exams, and build strategies for multi-step questions."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the summer break."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-9/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "What Is Biology? Scientific Inquiry",
                  "whatWeCover": "Learn how scientists ask questions, design controlled experiments and use data, and review lab safety and measurement."
                },
                {
                  "no": "02",
                  "topic": "Characteristics of Living Things",
                  "whatWeCover": "Explain what makes something alive, including cells, growth, reproduction, energy use and response to the environment."
                },
                {
                  "no": "03",
                  "topic": "The Chemistry of Life",
                  "whatWeCover": "Describe atoms, molecules, water's special properties and pH, and why they matter for living things."
                },
                {
                  "no": "04",
                  "topic": "Biomolecules",
                  "whatWeCover": "Compare carbohydrates, lipids, proteins and nucleic acids and link each to its function in the body and in foods."
                },
                {
                  "no": "05",
                  "topic": "Enzymes and Chemical Reactions",
                  "whatWeCover": "Explain how enzymes speed up reactions and how temperature and pH affect them, using lab and kitchen examples."
                },
                {
                  "no": "06",
                  "topic": "Cell Theory and Cell Types",
                  "whatWeCover": "State the cell theory and compare prokaryotic and eukaryotic cells, and plant and animal cells, under the microscope."
                },
                {
                  "no": "07",
                  "topic": "Organelles and Their Jobs",
                  "whatWeCover": "Match organelles such as the nucleus, mitochondria and chloroplasts to their roles, using the factory analogy."
                },
                {
                  "no": "08",
                  "topic": "The Cell Membrane and Transport",
                  "whatWeCover": "Explain diffusion, osmosis and active transport, and predict what happens to cells in different solutions."
                },
                {
                  "no": "09",
                  "topic": "Using Microscopes and Lab Skills",
                  "whatWeCover": "Prepare slides, use a microscope correctly, draw labeled diagrams and record observations in a lab notebook."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Energy and ATP",
                  "whatWeCover": "Explain how cells store and release energy with ATP and why every living thing needs a constant supply."
                },
                {
                  "no": "02",
                  "topic": "Photosynthesis",
                  "whatWeCover": "Describe how plants capture light to make glucose and oxygen, and test how light and carbon dioxide change the rate."
                },
                {
                  "no": "03",
                  "topic": "Cellular Respiration",
                  "whatWeCover": "Explain how cells break down glucose to release energy, and compare aerobic respiration and fermentation."
                },
                {
                  "no": "04",
                  "topic": "The Cell Cycle and Mitosis",
                  "whatWeCover": "Order the stages of mitosis, explain why cells divide and discuss how uncontrolled division relates to cancer."
                },
                {
                  "no": "05",
                  "topic": "Meiosis and Sexual Reproduction",
                  "whatWeCover": "Compare meiosis with mitosis and explain how it produces gametes and genetic variety."
                },
                {
                  "no": "06",
                  "topic": "DNA Structure and Replication",
                  "whatWeCover": "Describe the double helix, base pairing and how DNA copies itself before a cell divides."
                },
                {
                  "no": "07",
                  "topic": "From DNA to Protein",
                  "whatWeCover": "Follow the steps of transcription and translation, and explain how a mutation can change a protein."
                },
                {
                  "no": "08",
                  "topic": "Gene Expression and Cell Differentiation",
                  "whatWeCover": "Explain why cells in one body have the same DNA but different jobs, and how genes are switched on and off."
                },
                {
                  "no": "09",
                  "topic": "Biotechnology and Ethics",
                  "whatWeCover": "Explore DNA fingerprinting, GMOs and CRISPR, and discuss the benefits, risks and ethical questions."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Mendel and Basic Genetics",
                  "whatWeCover": "Use Mendel's pea plant experiments to explain dominant and recessive alleles, genotype and phenotype."
                },
                {
                  "no": "02",
                  "topic": "Punnett Squares and Probability",
                  "whatWeCover": "Predict offspring ratios with monohybrid and dihybrid Punnett squares and use probability to explain results."
                },
                {
                  "no": "03",
                  "topic": "Beyond Mendel: Complex Inheritance",
                  "whatWeCover": "Explore incomplete dominance, codominance, multiple alleles and sex-linked traits, such as blood types and color blindness."
                },
                {
                  "no": "04",
                  "topic": "Pedigrees and Human Genetics",
                  "whatWeCover": "Read pedigree charts to trace traits through families and discuss genetic disorders and genetic counseling."
                },
                {
                  "no": "05",
                  "topic": "Evidence for Evolution",
                  "whatWeCover": "Examine fossils, anatomy, DNA and embryos as evidence that species change over time."
                },
                {
                  "no": "06",
                  "topic": "Natural Selection and Adaptation",
                  "whatWeCover": "Explain variation, selection and adaptation using examples like peppered moths, antibiotic resistance and Darwin's finches."
                },
                {
                  "no": "07",
                  "topic": "Speciation and the History of Life",
                  "whatWeCover": "Describe how new species form, read a simple phylogenetic tree and place major events on Earth's timeline."
                },
                {
                  "no": "08",
                  "topic": "Classification and Taxonomy",
                  "whatWeCover": "Sort organisms into the three domains and six kingdoms, and use a dichotomous key to identify them."
                },
                {
                  "no": "09",
                  "topic": "Human Evolution and Fossil Evidence",
                  "whatWeCover": "Look at fossil and genetic evidence for human origins and discuss how scientists test and revise ideas."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Ecosystems and Energy Flow",
                  "whatWeCover": "Describe producers, consumers and decomposers and trace energy through food chains, food webs and energy pyramids."
                },
                {
                  "no": "02",
                  "topic": "Biomes of North America",
                  "whatWeCover": "Compare the climate, plants and animals of biomes from tundra to desert, with examples from US national parks."
                },
                {
                  "no": "03",
                  "topic": "Population Ecology",
                  "whatWeCover": "Explain population growth, carrying capacity and limiting factors, and read graphs of growth in real populations."
                },
                {
                  "no": "04",
                  "topic": "Nutrient Cycles",
                  "whatWeCover": "Follow the carbon, nitrogen and water cycles through living and nonliving parts of an ecosystem."
                },
                {
                  "no": "05",
                  "topic": "Human Impact and Conservation",
                  "whatWeCover": "Discuss habitat loss, invasive species and climate change, and look at how conservation efforts protect species."
                },
                {
                  "no": "06",
                  "topic": "Body Systems and Homeostasis",
                  "whatWeCover": "Explain how the nervous, circulatory, respiratory and other systems work together to keep the body stable."
                },
                {
                  "no": "07",
                  "topic": "Infectious Disease and the Immune System",
                  "whatWeCover": "Describe how bacteria and viruses cause disease, how the body fights back and how vaccines protect communities."
                },
                {
                  "no": "08",
                  "topic": "Science Practices: Data and Graphs",
                  "whatWeCover": "Analyze data tables and graphs, identify variables and write conclusions that use evidence, as on state science tests."
                },
                {
                  "no": "09",
                  "topic": "Biology Review and Next Steps",
                  "whatWeCover": "Connect the big ideas of the year, practice end-of-course style questions and preview Grade 10 science."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the summer break."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own"
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 10 Tutoring",
          "text": "Build on Grade 9 with Geometry, English 10 and Chemistry, plus PSAT 10 readiness, in 40 live lessons per subject.",
          "buttonText": "View Grade 10",
          "href": "/us/subjects/grade-10"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-10": {
    "gradeNum": 10,
    "yearId": "grade-10",
    "meta": {
      "title": "Grade 10 Tutoring USA | Math, English, Science",
      "description": "Online Grade 10 tutoring in the USA for Math, English and Science. Live 1-on-1 or small group lessons aligned to US state standards. Book a free trial class.",
      "canonical": "https://www.tutorexel.com/us/subjects/grade-10"
    },
    "hero": {
      "h1": "Grade 10 Math, English and Science Tutoring in the USA",
      "subheading": "Forty live online lessons per subject, aligned to US state standards. Geometry or Algebra II, Chemistry and PSAT 10, SAT and ACT readiness, in 1-on-1 or small group classes.",
      "primaryBtn": "Try a Free Grade 10 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 10 is a big step toward college. Our program builds proof skills, Algebra II, chemistry and strong writing, with SAT, ACT and end-of-course exam practice woven in, using real contexts from road trips to state parks.",
      "keyTopics": {
        "math": "Geometry proofs, trigonometry, Algebra II.",
        "english": "argument, rhetoric, SAT and ACT reading and writing.",
        "science": "chemistry, stoichiometry, genetics, PSAT 10 and end-of-course prep."
      },
      "parentTip": "Spring PSAT 10 and state tests come fast. Plan 20 minutes of practice each evening, review mistakes together and keep a notebook of formulas. We build habits that reduce stress."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 10, Your Child Will...",
      "items": [
        "Write clear geometric proofs and use similarity and trigonometry",
        "Solve quadratic, polynomial and exponential problems in Algebra II",
        "Write argumentative and analytical essays with strong textual evidence",
        "Read tough passages and answer SAT and ACT style questions accurately",
        "Balance equations and use moles to predict amounts in reactions",
        "Use data to explain gas laws, energy and heredity in lab reports"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Aligned to US state standards.",
      "h2": "Grade 10 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/us/subjects/grade-10/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Closely: Literary Fiction",
                  "whatWeCover": "Annotate short stories and novel excerpts for plot, character and theme, and cite strong textual evidence in every claim."
                },
                {
                  "no": "02",
                  "topic": "Author's Craft and Style",
                  "whatWeCover": "Analyze diction, syntax, imagery and tone, and explain how an author's choices shape meaning for the reader."
                },
                {
                  "no": "03",
                  "topic": "Point of View and Narrative Structure",
                  "whatWeCover": "Compare narrators, flashbacks and shifts in time, and explain how structure builds tension and theme."
                },
                {
                  "no": "04",
                  "topic": "Reading Informational Texts",
                  "whatWeCover": "Identify central ideas, evidence and reasoning in articles and speeches, and summarize them without personal opinion."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary in Context for the PSAT 10",
                  "whatWeCover": "Use context clues, word parts and connotation to define unfamiliar words, as tested on the PSAT 10 and SAT."
                },
                {
                  "no": "06",
                  "topic": "Grammar Review: Sentence Boundaries",
                  "whatWeCover": "Fix run-ons, comma splices and fragments, and join clauses with semicolons, colons and conjunctions."
                },
                {
                  "no": "07",
                  "topic": "Punctuation and Conventions",
                  "whatWeCover": "Use commas, apostrophes, semicolons and colons correctly, the way the SAT and ACT English sections test them."
                },
                {
                  "no": "08",
                  "topic": "The Literary Analysis Essay",
                  "whatWeCover": "Plan and draft a thesis-driven essay with a clear claim, body paragraphs built on evidence and a strong conclusion."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Class Discussion Skills",
                  "whatWeCover": "Lead a small group discussion, build on others' ideas and support a viewpoint with evidence in a calm, clear voice."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Poetry and Drama",
                  "whatWeCover": "Read poems and scenes aloud, then analyze figurative language, form, speaker and dramatic tension."
                },
                {
                  "no": "02",
                  "topic": "Shakespeare in Close Reading",
                  "whatWeCover": "Work through key scenes from a Shakespeare play, translating Elizabethan language and tracing motifs and themes."
                },
                {
                  "no": "03",
                  "topic": "Rhetoric and Persuasive Techniques",
                  "whatWeCover": "Identify ethos, pathos and logos in speeches and ads, and evaluate how well an argument is built."
                },
                {
                  "no": "04",
                  "topic": "Evaluating Arguments and Claims",
                  "whatWeCover": "Separate fact from opinion, spot logical fallacies and judge whether evidence supports a writer's claim."
                },
                {
                  "no": "05",
                  "topic": "Writing an Argumentative Essay",
                  "whatWeCover": "Take a position on a school or community issue, address counterclaims and support it with credible sources."
                },
                {
                  "no": "06",
                  "topic": "Research Skills and Citing Sources",
                  "whatWeCover": "Find reliable sources, take notes, avoid plagiarism and cite evidence in MLA style."
                },
                {
                  "no": "07",
                  "topic": "Paired Passages and Cross-Text Questions",
                  "whatWeCover": "Compare two texts on one topic, as on the SAT, and answer questions about shared ideas and differing views."
                },
                {
                  "no": "08",
                  "topic": "Sentence Variety and Concision",
                  "whatWeCover": "Revise wordy or repetitive sentences, vary openings and lengths, and keep the writer's voice clear."
                },
                {
                  "no": "09",
                  "topic": "Presenting Research Aloud",
                  "whatWeCover": "Deliver a short research talk with eye contact, pacing and visuals, then answer audience questions."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading the SAT and PSAT 10 Passages",
                  "whatWeCover": "Practice the Reading and Writing section with short passages, learning to find the best evidence fast."
                },
                {
                  "no": "02",
                  "topic": "Words in Context and Text Structure",
                  "whatWeCover": "Answer SAT style questions on word choice, the function of a sentence and the overall structure of a passage."
                },
                {
                  "no": "03",
                  "topic": "Transitions and Rhetorical Synthesis",
                  "whatWeCover": "Pick transitions that fit logic and combine notes into a clear sentence that meets a stated writing goal."
                },
                {
                  "no": "04",
                  "topic": "Standard English Conventions Drill",
                  "whatWeCover": "Review subject-verb agreement, pronoun reference, verb tense and modifiers with timed practice sets."
                },
                {
                  "no": "05",
                  "topic": "ACT English and Reading Strategies",
                  "whatWeCover": "Build pacing and accuracy for the ACT English and Reading sections, from the four passage types to time limits."
                },
                {
                  "no": "06",
                  "topic": "Nonfiction Study: Memoir and Essay",
                  "whatWeCover": "Read a memoir or essay collection by an American author and write a reflective response on voice and message."
                },
                {
                  "no": "07",
                  "topic": "The Personal Narrative",
                  "whatWeCover": "Write a vivid narrative about a real moment, using scene, dialogue and reflection to show growth."
                },
                {
                  "no": "08",
                  "topic": "Analyzing Multiple Perspectives",
                  "whatWeCover": "Read texts on a debated topic such as school start times and weigh each author's evidence and purpose."
                },
                {
                  "no": "09",
                  "topic": "Class Debate and Discussion",
                  "whatWeCover": "Prepare for and join a structured debate, listening closely and responding to opposing points respectfully."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading an American Novel",
                  "whatWeCover": "Study a classic or modern American novel, tracking character change, setting, symbols and the big ideas."
                },
                {
                  "no": "02",
                  "topic": "Synthesis Writing from Multiple Sources",
                  "whatWeCover": "Combine ideas from several texts into one clear, well-organized essay with accurate citations."
                },
                {
                  "no": "03",
                  "topic": "Timed Writing: Essays Under Pressure",
                  "whatWeCover": "Plan, write and revise a strong essay in 40 minutes, using a repeatable outline and a quick edit checklist."
                },
                {
                  "no": "04",
                  "topic": "Advanced Vocabulary and Word Roots",
                  "whatWeCover": "Learn Greek and Latin roots and high-value academic words to read tougher texts and write precisely."
                },
                {
                  "no": "05",
                  "topic": "Style and Tone in Writing",
                  "whatWeCover": "Match tone to audience in emails, applications and reports, and avoid slang, clichés and vague phrasing."
                },
                {
                  "no": "06",
                  "topic": "Writing for College and Careers",
                  "whatWeCover": "Draft a résumé, a short personal statement and a polite professional email as first steps toward applications."
                },
                {
                  "no": "07",
                  "topic": "Reading Across Genres: Science and History",
                  "whatWeCover": "Read science articles and historical documents, including U.S. founding texts, and summarize claims and evidence."
                },
                {
                  "no": "08",
                  "topic": "State Test and End-of-Course Review",
                  "whatWeCover": "Revisit the skills assessed by state ELA tests and end-of-course exams, with practice questions and feedback."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Interview and Presentation Skills",
                  "whatWeCover": "Practice a mock interview and a short formal presentation, working on clear answers, posture and tone."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/us/subjects/grade-10/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Geometry Foundations and Reasoning",
                  "whatWeCover": "Use points, lines, planes and angle relationships, and write clear reasons for each step of a geometric argument."
                },
                {
                  "no": "02",
                  "topic": "Parallel Lines, Transversals and Proof",
                  "whatWeCover": "Prove angle relationships on parallel lines and write two-column and paragraph proofs for triangle facts."
                },
                {
                  "no": "03",
                  "topic": "Congruent Triangles",
                  "whatWeCover": "Use SSS, SAS, ASA and AAS to prove triangles congruent, then apply CPCTC to find missing parts."
                },
                {
                  "no": "04",
                  "topic": "Transformations and Symmetry",
                  "whatWeCover": "Describe and perform translations, reflections and rotations on the coordinate plane, and link them to congruence."
                },
                {
                  "no": "05",
                  "topic": "Triangle Properties and Special Segments",
                  "whatWeCover": "Work with medians, altitudes, bisectors and the triangle inequality, and find centers like the centroid."
                },
                {
                  "no": "06",
                  "topic": "Similarity and Dilations",
                  "whatWeCover": "Prove triangles similar with AA, SAS and SSS, and use scale factors to solve problems with maps and models."
                },
                {
                  "no": "07",
                  "topic": "Coordinate Geometry",
                  "whatWeCover": "Use distance, midpoint and slope to classify shapes and prove properties of polygons on the coordinate plane."
                },
                {
                  "no": "08",
                  "topic": "Quadrilaterals and Polygons",
                  "whatWeCover": "Prove and use properties of parallelograms, rectangles, rhombi and trapezoids, and find interior angle sums."
                },
                {
                  "no": "09",
                  "topic": "Area and Perimeter Applications",
                  "whatWeCover": "Find area and perimeter of composite figures, such as a baseball infield or a backyard deck, in square feet."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked problems, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "The Pythagorean Theorem and Its Converse",
                  "whatWeCover": "Find missing sides, test for right triangles and solve practical problems such as ladder and ramp heights."
                },
                {
                  "no": "02",
                  "topic": "Special Right Triangles",
                  "whatWeCover": "Use side ratios in 45 degree and 30, 60 degree triangles, and simplify radical answers without a calculator."
                },
                {
                  "no": "03",
                  "topic": "Right Triangle Trigonometry",
                  "whatWeCover": "Use sine, cosine and tangent to find sides and angles, with the calculator set to degree mode."
                },
                {
                  "no": "04",
                  "topic": "Angles of Elevation and Depression",
                  "whatWeCover": "Solve real problems with trigonometry, from the height of a flagpole to the angle of a wheelchair ramp."
                },
                {
                  "no": "05",
                  "topic": "Circles: Arcs, Chords and Angles",
                  "whatWeCover": "Find arc length and measures of central, inscribed and tangent angles, and use chord and tangent theorems."
                },
                {
                  "no": "06",
                  "topic": "Equations of Circles and Sectors",
                  "whatWeCover": "Write and graph circle equations by completing the square, and find sector area and arc length."
                },
                {
                  "no": "07",
                  "topic": "Surface Area and Volume",
                  "whatWeCover": "Calculate surface area and volume of prisms, cylinders, pyramids, cones and spheres, including water tanks and silos."
                },
                {
                  "no": "08",
                  "topic": "Probability and Counting",
                  "whatWeCover": "Use sample spaces, combinations, permutations and conditional probability with cards, dice and spinners."
                },
                {
                  "no": "09",
                  "topic": "Geometric Modeling and Design",
                  "whatWeCover": "Apply density, unit rates and cost to design problems, such as fencing a pen or covering a field with sod."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked problems, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Algebra Review and Functions",
                  "whatWeCover": "Review linear equations and function notation, and describe domain, range and key features of graphs."
                },
                {
                  "no": "02",
                  "topic": "Quadratic Functions and Equations",
                  "whatWeCover": "Solve quadratics by factoring, completing the square and the quadratic formula, and graph the parabola."
                },
                {
                  "no": "03",
                  "topic": "Complex Numbers",
                  "whatWeCover": "Add, subtract, multiply and divide complex numbers, and use i to solve quadratics with no real solutions."
                },
                {
                  "no": "04",
                  "topic": "Polynomial Operations and Factoring",
                  "whatWeCover": "Add, multiply and divide polynomials, and factor sums and differences of cubes and higher-degree expressions."
                },
                {
                  "no": "05",
                  "topic": "Polynomial Functions and Zeros",
                  "whatWeCover": "Use the remainder and factor theorems to find zeros, then sketch graphs showing end behavior and multiplicity."
                },
                {
                  "no": "06",
                  "topic": "Radical and Rational Exponents",
                  "whatWeCover": "Simplify roots, convert between radical and exponent form, and solve radical equations while checking for extraneous solutions."
                },
                {
                  "no": "07",
                  "topic": "Systems of Equations and Inequalities",
                  "whatWeCover": "Solve linear and nonlinear systems by graphing, substitution and elimination, and model them in word problems."
                },
                {
                  "no": "08",
                  "topic": "Absolute Value, Piecewise and Inverse Functions",
                  "whatWeCover": "Graph absolute value and piecewise functions, find inverses and compose functions with tables and equations."
                },
                {
                  "no": "09",
                  "topic": "Transformations of Functions",
                  "whatWeCover": "Shift, stretch and reflect parent graphs, and write an equation from a described change."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked problems, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Exponential Functions and Growth",
                  "whatWeCover": "Model growth and decay such as savings with compound interest or a cooling drink, and compare with linear change."
                },
                {
                  "no": "02",
                  "topic": "Logarithms and Their Properties",
                  "whatWeCover": "Convert between exponential and log form, use log laws and solve exponential equations."
                },
                {
                  "no": "03",
                  "topic": "Rational Expressions and Equations",
                  "whatWeCover": "Simplify, multiply and add rational expressions, solve rational equations and find asymptotes and holes."
                },
                {
                  "no": "04",
                  "topic": "Sequences and Series",
                  "whatWeCover": "Write rules for arithmetic and geometric sequences and find sums, with applications such as loan payments and savings."
                },
                {
                  "no": "05",
                  "topic": "Trigonometric Functions and the Unit Circle",
                  "whatWeCover": "Use radians, the unit circle and the graphs of sine and cosine, including amplitude and period."
                },
                {
                  "no": "06",
                  "topic": "Statistics: Data and the Normal Curve",
                  "whatWeCover": "Use mean, standard deviation and the normal curve, and read data from surveys, samples and experiments."
                },
                {
                  "no": "07",
                  "topic": "SAT and PSAT 10 Math Strategies",
                  "whatWeCover": "Practice Algebra, Advanced Math, Problem Solving and Geometry questions with Desmos and timing strategies."
                },
                {
                  "no": "08",
                  "topic": "ACT Math and End-of-Course Review",
                  "whatWeCover": "Work through ACT style math sets and review Algebra II and Geometry end-of-course exam topics."
                },
                {
                  "no": "09",
                  "topic": "Math in Real Life: Money and Data",
                  "whatWeCover": "Apply functions to budgets, car loans, and sports statistics, and explain results with clear reasoning."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/us/subjects/grade-10/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Safety, Measurement and the Scientific Method",
                  "whatWeCover": "Review lab safety, SI units and significant figures, then design an investigation with variables and controls."
                },
                {
                  "no": "02",
                  "topic": "Atomic Structure and the Periodic Table",
                  "whatWeCover": "Model protons, neutrons and electrons, and use the periodic table to predict element properties and trends."
                },
                {
                  "no": "03",
                  "topic": "Electron Configuration and Periodic Trends",
                  "whatWeCover": "Write electron configurations and explain trends in atomic radius, ionization energy and electronegativity."
                },
                {
                  "no": "04",
                  "topic": "Ionic and Covalent Bonding",
                  "whatWeCover": "Compare how ionic and covalent bonds form, and draw Lewis structures for common compounds such as water and salt."
                },
                {
                  "no": "05",
                  "topic": "Molecular Shape and Polarity",
                  "whatWeCover": "Predict shapes with VSEPR, decide whether molecules are polar and link polarity to properties like boiling point."
                },
                {
                  "no": "06",
                  "topic": "Naming Compounds and Writing Formulas",
                  "whatWeCover": "Name ionic and molecular compounds and write formulas, including those with polyatomic ions."
                },
                {
                  "no": "07",
                  "topic": "Chemical Reactions and Balancing Equations",
                  "whatWeCover": "Classify reaction types and balance equations to show conservation of mass, using kitchen and rust examples."
                },
                {
                  "no": "08",
                  "topic": "Moles and Molar Mass",
                  "whatWeCover": "Convert between grams, moles and particles, and calculate molar mass of compounds."
                },
                {
                  "no": "09",
                  "topic": "Data Analysis in the Lab",
                  "whatWeCover": "Plot lab data, find patterns and write a claim, evidence and reasoning response in the NGSS style."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Stoichiometry",
                  "whatWeCover": "Use mole ratios in balanced equations to predict amounts of reactants and products, in grams."
                },
                {
                  "no": "02",
                  "topic": "Limiting Reactants and Percent Yield",
                  "whatWeCover": "Find the limiting reactant, theoretical yield and percent yield for reactions such as baking soda and vinegar."
                },
                {
                  "no": "03",
                  "topic": "States of Matter and Phase Changes",
                  "whatWeCover": "Explain solids, liquids and gases with particle models and read heating curves for water."
                },
                {
                  "no": "04",
                  "topic": "Gas Laws",
                  "whatWeCover": "Use Boyle's, Charles's and the combined gas law to explain tire pressure, balloons and weather."
                },
                {
                  "no": "05",
                  "topic": "Solutions and Concentration",
                  "whatWeCover": "Calculate molarity, explain solubility and compare how saturated and unsaturated solutions behave."
                },
                {
                  "no": "06",
                  "topic": "Acids, Bases and pH",
                  "whatWeCover": "Use the pH scale, indicators and neutralization to explain antacids, lemon juice and household cleaners."
                },
                {
                  "no": "07",
                  "topic": "Thermochemistry and Energy Changes",
                  "whatWeCover": "Compare endothermic and exothermic reactions, and use calorimetry to calculate heat in joules."
                },
                {
                  "no": "08",
                  "topic": "Reaction Rates and Equilibrium",
                  "whatWeCover": "Test how temperature, concentration and catalysts change rates, and describe equilibrium with Le Chatelier's principle."
                },
                {
                  "no": "09",
                  "topic": "Investigation: Designing a Chemistry Lab",
                  "whatWeCover": "Plan, run and report a small investigation, such as comparing hand warmers, with graphs and error analysis."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Nuclear Chemistry and Radioactivity",
                  "whatWeCover": "Compare fission, fusion and decay, use half-life to date samples and discuss uses in medicine and energy."
                },
                {
                  "no": "02",
                  "topic": "Organic Chemistry Basics",
                  "whatWeCover": "Name simple hydrocarbons, draw functional groups and link structure to the fuels, plastics and foods we use."
                },
                {
                  "no": "03",
                  "topic": "Biochemistry: Macromolecules",
                  "whatWeCover": "Describe carbohydrates, lipids, proteins and nucleic acids, and how enzymes speed up reactions in the body."
                },
                {
                  "no": "04",
                  "topic": "Oxidation, Reduction and Electrochemistry",
                  "whatWeCover": "Track electron transfer in redox reactions and explain how batteries and corrosion work."
                },
                {
                  "no": "05",
                  "topic": "Forces and Motion Review",
                  "whatWeCover": "Review Newton's laws, velocity and acceleration, and graph motion for sprinters and cars on a road trip."
                },
                {
                  "no": "06",
                  "topic": "Energy, Work and Power",
                  "whatWeCover": "Use kinetic and potential energy, work and power to explain roller coasters, bikes and household devices."
                },
                {
                  "no": "07",
                  "topic": "Waves, Light and Sound",
                  "whatWeCover": "Describe wavelength, frequency and amplitude, and explain reflection, refraction and how sound travels."
                },
                {
                  "no": "08",
                  "topic": "Electricity and Circuits",
                  "whatWeCover": "Build series and parallel circuits, and use Ohm's law to link voltage, current and resistance."
                },
                {
                  "no": "09",
                  "topic": "Careers and Courses: Chemistry to Physics",
                  "whatWeCover": "Look at how science connects to nursing, engineering and technology, and choose a path for next year."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with hands-on questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Genetics and Heredity",
                  "whatWeCover": "Use Punnett squares, dominant and recessive traits and pedigrees to predict inheritance."
                },
                {
                  "no": "02",
                  "topic": "DNA, Genes and Protein Synthesis",
                  "whatWeCover": "Describe DNA structure, replication, transcription and translation, and how mutations can change a trait."
                },
                {
                  "no": "03",
                  "topic": "Evolution and Natural Selection",
                  "whatWeCover": "Explain how variation and selection drive adaptation, using fossil and DNA evidence from real species."
                },
                {
                  "no": "04",
                  "topic": "Ecosystems and Energy Flow",
                  "whatWeCover": "Trace energy and matter through food webs and cycles, and study populations in a state park or wetland."
                },
                {
                  "no": "05",
                  "topic": "Earth Systems and Climate",
                  "whatWeCover": "Explain greenhouse gases, ocean currents and weather patterns, and weigh evidence on climate change."
                },
                {
                  "no": "06",
                  "topic": "Human Impact and Sustainability",
                  "whatWeCover": "Evaluate solutions to water, energy and waste problems, using data from local and national sources."
                },
                {
                  "no": "07",
                  "topic": "Science Reading for the ACT and SAT",
                  "whatWeCover": "Read charts, experiments and conflicting viewpoints, as in the ACT Science section, with timed practice."
                },
                {
                  "no": "08",
                  "topic": "State Science Test and End-of-Course Review",
                  "whatWeCover": "Revisit NGSS or state science standards in chemistry, physics and biology, with practice questions."
                },
                {
                  "no": "09",
                  "topic": "Capstone Investigation",
                  "whatWeCover": "Complete a student-led investigation, from question to poster, and present findings to the tutor."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break."
                }
              ]
            }
          ]
        }
      ]
    },
    "lockedBox": {
      "h2": "Try a Free Lesson to See the Full Program",
      "text": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed.",
      "buttonText": "Claim the Free Trial Lesson"
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental math, word or science question, plus a recap of the last session"
        },
        {
          "stepNum": "2",
          "title": "Core Teaching",
          "duration": "25 min",
          "description": "The new idea from the lesson eBook, explained with examples and guided practice"
        },
        {
          "stepNum": "3",
          "title": "Guided Practice",
          "duration": "15 min",
          "description": "Your child works through tasks with the tutor close by to help"
        },
        {
          "stepNum": "4",
          "title": "Independent Practice",
          "duration": "10 min",
          "description": "Your child completes the in-class quiz on their own"
        },
        {
          "stepNum": "5",
          "title": "Wrap-up",
          "duration": "5 min",
          "description": "A short summary, two take-home quizzes and a preview of the next lesson"
        }
      ]
    },
    "keepExploring": {
      "h2": "Explore More",
      "cards": [
        {
          "tag": "EXAMS",
          "title": "Exam Preparation",
          "text": "Explore TutorExel's US exam prep hub for state tests, MAP Growth and CogAT, with targeted practice.",
          "buttonText": "View Exam Prep",
          "href": "/us/exam-prep"
        },
        {
          "tag": "PRICING",
          "title": "Clear USD Pricing",
          "text": "Simple monthly plans in U.S. dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/us/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the American families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  }
};
