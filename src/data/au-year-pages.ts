export interface AuCurriculumTopic {
  no: string;
  topic: string;
  whatWeCover: string;
}

export interface AuCurriculumTerm {
  termKey: "term-1" | "term-2" | "term-3" | "term-4";
  termTitle: string;
  topics: AuCurriculumTopic[];
}

export interface AuCurriculumSubject {
  id: "english" | "maths" | "science";
  label: string;
  href: string;
  terms: AuCurriculumTerm[];
}

export interface AuLessonStep {
  stepNum: string;
  title: string;
  duration: string;
  description: string;
}

export interface AuExploreCard {
  tag: string;
  title: string;
  text: string;
  buttonText: string;
  href: string;
}

export interface AuYearPageData {
  yearNum: number;
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
      maths: string;
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
    subjects: AuCurriculumSubject[];
  };
  lockedBox: {
    h2: string;
    text: string;
    buttonText: string;
  };
  lessonStructure: {
    eyebrow: string;
    h2: string;
    steps: AuLessonStep[];
  };
  keepExploring: {
    h2: string;
    cards: AuExploreCard[];
  };
  finalCta: {
    h2: string;
    text: string;
    buttonText: string;
    phone: string;
    phoneHref: string;
  };
}

export const AU_YEAR_PAGES_DATA: Record<string, AuYearPageData> = {
  "year-2": {
    "yearNum": 2,
    "yearId": "year-2",
    "meta": {
      "title": "Year 2 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 2 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-2"
    },
    "hero": {
      "h1": "Year 2 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum. Taught in personalised 1-on-1 or small group classes by qualified tutors.",
      "primaryBtn": "Try a Free Year 2 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 2 is where children turn early skills into real confidence in reading, writing, numbers and curiosity. Our structured program builds all three through hands-on activities, visual aids and familiar Australian examples, from the school canteen to the backyard.",
      "keyTopics": {
        "maths": "place value to 1000, addition and subtraction, equal groups, fractions, money.",
        "english": "phonics, sentences, recounts and stories.",
        "science": "life cycles, habitats, materials and forces."
      },
      "parentTip": "Little and often works best at this age. Read together for ten minutes, count the coins in the piggy bank and ask what your child noticed in the garden. We make sure each idea sticks before moving on."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 2, Your Child Will...",
      "items": [
        "Read, write and order numbers to 1000 with confidence",
        "Add and subtract using efficient strategies, and explain how they work",
        "Read fluently, spell common words and write clear sentences and short stories",
        "Retell and respond to texts, including stories by Australian authors",
        "Describe how living things grow and where they live, using science words",
        "Plan a simple fair test and explain what happened and why"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 2 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-2/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Phonics Review: Blends and Digraphs",
                  "whatWeCover": "Revise consonant blends and digraphs such as sh, ch, th and ck, and use them to read and spell new words."
                },
                {
                  "no": "02",
                  "topic": "Long Vowel Spelling Patterns",
                  "whatWeCover": "Learn common spellings for long vowel sounds, such as ai, ay, ee, ea, oa and ow, with word sorts and short dictation."
                },
                {
                  "no": "03",
                  "topic": "Reading Fluency and Expression",
                  "whatWeCover": "Practise reading aloud with accuracy, pace and expression, using punctuation as a guide."
                },
                {
                  "no": "04",
                  "topic": "Building Complete Sentences",
                  "whatWeCover": "Write sentences that begin with a capital letter and end with a full stop, question mark or exclamation mark."
                },
                {
                  "no": "05",
                  "topic": "Nouns: Naming Words",
                  "whatWeCover": "Find common and proper nouns in texts and use them to add detail, including the names of Australian places."
                },
                {
                  "no": "06",
                  "topic": "Adjectives: Describing Words",
                  "whatWeCover": "Choose precise adjectives to describe people, places and things, and build noun groups such as a tall, shady gum tree."
                },
                {
                  "no": "07",
                  "topic": "Writing a Personal Recount",
                  "whatWeCover": "Plan and write a recount of a real event, using time words such as first, then and finally."
                },
                {
                  "no": "08",
                  "topic": "High-Frequency and Sight Words",
                  "whatWeCover": "Read and spell the most common Year 2 words using look, say, cover, write, check routines."
                },
                {
                  "no": "09",
                  "topic": "Comprehension: Finding the Answer",
                  "whatWeCover": "Answer who, what, where and when questions by locating information directly in a short text."
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
                  "topic": "Verbs: Past, Present and Future",
                  "whatWeCover": "Spot action verbs and change them to show when something happens, including common irregular verbs such as ran and saw."
                },
                {
                  "no": "02",
                  "topic": "Joining Ideas with Conjunctions",
                  "whatWeCover": "Link sentences using and, but, so and because to add, contrast and explain ideas."
                },
                {
                  "no": "03",
                  "topic": "Narrative Structure",
                  "whatWeCover": "Learn the beginning, problem and ending of a story, and sequence events in a simple story map."
                },
                {
                  "no": "04",
                  "topic": "Characters and Settings",
                  "whatWeCover": "Describe who is in a story and where it happens, using senses and feelings to bring them to life."
                },
                {
                  "no": "05",
                  "topic": "Spelling: Adding ing and ed",
                  "whatWeCover": "Add ing and ed to base words, including the rules for doubling letters and dropping a silent e."
                },
                {
                  "no": "06",
                  "topic": "Plurals and Word Families",
                  "whatWeCover": "Make plurals with s and es, notice common exceptions and sort words into families by shared patterns."
                },
                {
                  "no": "07",
                  "topic": "Comprehension: Reading Between the Lines",
                  "whatWeCover": "Use clues in the text and pictures to work out how characters feel and why events happen."
                },
                {
                  "no": "08",
                  "topic": "Poetry, Rhyme and Rhythm",
                  "whatWeCover": "Read and perform poems, spot rhyme and repeated sounds, and write a short poem with a clear pattern."
                },
                {
                  "no": "09",
                  "topic": "Writing an Imaginative Narrative",
                  "whatWeCover": "Plan, draft and share a short story with a clear beginning, middle and end."
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
                  "topic": "Information Reports",
                  "whatWeCover": "Learn how a report is organised, then research and write facts about an Australian animal or place."
                },
                {
                  "no": "02",
                  "topic": "Non-Fiction Text Features",
                  "whatWeCover": "Use headings, labels, captions, contents pages and glossaries to find information quickly."
                },
                {
                  "no": "03",
                  "topic": "Procedures: How-To Writing",
                  "whatWeCover": "Write clear step-by-step instructions with a goal, a list of materials and numbered steps."
                },
                {
                  "no": "04",
                  "topic": "Opinion Writing",
                  "whatWeCover": "Share a point of view and back it up with two or three reasons, using words such as because and I believe."
                },
                {
                  "no": "05",
                  "topic": "Speaking and Listening",
                  "whatWeCover": "Retell a story or share news in a clear voice, take turns in a group and ask a speaker questions."
                },
                {
                  "no": "06",
                  "topic": "Punctuation: Commas and Apostrophes",
                  "whatWeCover": "Use commas in lists and apostrophes in simple contractions such as don't and it's."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary: Synonyms and Word Meanings",
                  "whatWeCover": "Swap everyday words for stronger choices and work out new word meanings from context."
                },
                {
                  "no": "08",
                  "topic": "Comprehension: Main Idea and Details",
                  "whatWeCover": "Find the main idea of a text and pick out the details that support it."
                },
                {
                  "no": "09",
                  "topic": "Australian and First Nations Stories",
                  "whatWeCover": "Read stories by Australian authors and illustrators, including First Nations stories, and talk about the ideas and places they share."
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
                  "topic": "Editing and Proofreading",
                  "whatWeCover": "Check writing for capital letters, punctuation and spelling, and improve a draft using a simple checklist."
                },
                {
                  "no": "02",
                  "topic": "Organising Writing into Paragraphs",
                  "whatWeCover": "Group related ideas together, use topic sentences and keep writing in a logical order."
                },
                {
                  "no": "03",
                  "topic": "Writing with Detail",
                  "whatWeCover": "Use adjectives, adverbs and simple similes to make writing more interesting and precise."
                },
                {
                  "no": "04",
                  "topic": "Author's Purpose and Comparing Texts",
                  "whatWeCover": "Decide whether a text aims to entertain, inform or persuade, and compare two texts on the same topic."
                },
                {
                  "no": "05",
                  "topic": "Spelling Patterns Review",
                  "whatWeCover": "Revisit the year's spelling rules and tricky words using games and short quizzes."
                },
                {
                  "no": "06",
                  "topic": "Reading Unseen Texts",
                  "whatWeCover": "Read new passages with confidence, using strategies such as re-reading and predicting when a word is unfamiliar."
                },
                {
                  "no": "07",
                  "topic": "Creative Writing Workshop",
                  "whatWeCover": "Write freely from a picture or story starter, then share and celebrate the finished piece."
                },
                {
                  "no": "08",
                  "topic": "Presenting and Reading Aloud",
                  "whatWeCover": "Prepare and present a short talk or reading to build confidence and clear speech."
                },
                {
                  "no": "09",
                  "topic": "Year 3 and NAPLAN Readiness",
                  "whatWeCover": "Preview the skills Year 3 brings, including NAPLAN-style reading and language conventions questions, in a relaxed way."
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
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-2/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Counting and Numbers to 1000",
                  "whatWeCover": "Count forwards and backwards from any number to 1000, using number lines, hundred charts and everyday objects."
                },
                {
                  "no": "02",
                  "topic": "Place Value: Hundreds, Tens and Ones",
                  "whatWeCover": "Build three-digit numbers with blocks and place value charts, and explain what each digit is worth."
                },
                {
                  "no": "03",
                  "topic": "Partitioning Three-Digit Numbers",
                  "whatWeCover": "Break numbers into hundreds, tens and ones in more than one way, such as 345 as 300 + 40 + 5 or 200 + 140 + 5."
                },
                {
                  "no": "04",
                  "topic": "Comparing and Ordering Numbers",
                  "whatWeCover": "Use the words and signs for greater than, less than and equal to, and order sets of numbers from smallest to largest."
                },
                {
                  "no": "05",
                  "topic": "Skip Counting by 2s, 5s and 10s",
                  "whatWeCover": "Count in steps from different starting points and spot the patterns, linking them to coins and clock faces."
                },
                {
                  "no": "06",
                  "topic": "Number Lines and Estimating",
                  "whatWeCover": "Place numbers on open number lines, estimate where a number sits between two landmarks and explain the thinking."
                },
                {
                  "no": "07",
                  "topic": "Addition Strategies to 100",
                  "whatWeCover": "Add using jump strategies, doubles, near doubles and make-a-ten, then check answers by counting on."
                },
                {
                  "no": "08",
                  "topic": "Subtraction Strategies to 100",
                  "whatWeCover": "Subtract by counting back, jumping along a number line and using the link between addition and subtraction."
                },
                {
                  "no": "09",
                  "topic": "Odd and Even Numbers",
                  "whatWeCover": "Sort numbers into odd and even by pairing and sharing, and notice which digits decide the type."
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
                  "topic": "Addition with Regrouping",
                  "whatWeCover": "Add two-digit numbers where tens need to be regrouped, using blocks first and then written methods."
                },
                {
                  "no": "02",
                  "topic": "Subtraction with Regrouping",
                  "whatWeCover": "Subtract two-digit numbers by trading tens for ones, and check answers using addition."
                },
                {
                  "no": "03",
                  "topic": "Fact Families and Inverse Operations",
                  "whatWeCover": "Use three numbers to build related addition and subtraction facts and see how they connect."
                },
                {
                  "no": "04",
                  "topic": "Missing Numbers and Number Sentences",
                  "whatWeCover": "Solve number sentences with a missing part, such as 14 + __ = 20, and show the balance with pictures."
                },
                {
                  "no": "05",
                  "topic": "Equal Groups",
                  "whatWeCover": "Make and describe equal groups, and write the matching repeated addition sentence."
                },
                {
                  "no": "06",
                  "topic": "Arrays and Multiplication",
                  "whatWeCover": "Arrange objects in rows and columns, count them efficiently and describe the array in two ways."
                },
                {
                  "no": "07",
                  "topic": "Sharing and Grouping: Division",
                  "whatWeCover": "Share a collection equally and group it into sets, linking both ideas to division stories."
                },
                {
                  "no": "08",
                  "topic": "Multiplication Facts for 2, 5 and 10",
                  "whatWeCover": "Build quick recall of the 2, 5 and 10 times tables through skip counting, arrays and games."
                },
                {
                  "no": "09",
                  "topic": "Number Patterns",
                  "whatWeCover": "Continue, create and describe growing and shrinking patterns, and explain the rule in words."
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
                  "topic": "Halves and Quarters",
                  "whatWeCover": "Fold, cut and shade shapes and collections to show halves and quarters, and name them correctly."
                },
                {
                  "no": "02",
                  "topic": "Eighths and Fractions of a Collection",
                  "whatWeCover": "Extend to eighths, and find a half or a quarter of a set of objects such as 8 grapes or 12 stickers."
                },
                {
                  "no": "03",
                  "topic": "Australian Money: Coins and Notes",
                  "whatWeCover": "Recognise Australian coins and notes, and order them by value, using real or play money."
                },
                {
                  "no": "04",
                  "topic": "Money: Adding and Giving Change",
                  "whatWeCover": "Add amounts and work out change with coins in shop role plays, such as a canteen order."
                },
                {
                  "no": "05",
                  "topic": "Measuring Length",
                  "whatWeCover": "Measure with informal units and then a ruler in centimetres, and compare which objects are longer or shorter."
                },
                {
                  "no": "06",
                  "topic": "Mass and Capacity",
                  "whatWeCover": "Compare the mass of objects with balance scales and the capacity of containers by filling and pouring."
                },
                {
                  "no": "07",
                  "topic": "Time: O'clock and Half Past",
                  "whatWeCover": "Read and show o'clock and half past on analogue clocks, and match them to daily routines."
                },
                {
                  "no": "08",
                  "topic": "Time: Quarter Past, Quarter To and the Calendar",
                  "whatWeCover": "Read the quarter hour, and use a calendar to find days, weeks and months."
                },
                {
                  "no": "09",
                  "topic": "Time and Measurement Problems",
                  "whatWeCover": "Solve short word problems that mix time, length and money in everyday Australian contexts."
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
                  "topic": "Properties of 2D Shapes",
                  "whatWeCover": "Describe sides and corners of triangles, squares, rectangles, circles and hexagons, and sort shapes by features."
                },
                {
                  "no": "02",
                  "topic": "3D Objects",
                  "whatWeCover": "Name cubes, prisms, pyramids, cones, spheres and cylinders, and describe their faces, edges and corners."
                },
                {
                  "no": "03",
                  "topic": "Symmetry and Transformations",
                  "whatWeCover": "Spot lines of symmetry and show slides, flips and turns using shapes and pattern blocks."
                },
                {
                  "no": "04",
                  "topic": "Position, Maps and Grids",
                  "whatWeCover": "Give and follow directions on simple maps and grids, using words like left, right, above and between."
                },
                {
                  "no": "05",
                  "topic": "Collecting Data",
                  "whatWeCover": "Ask a question, collect answers with tally marks and organise the results in a table."
                },
                {
                  "no": "06",
                  "topic": "Picture Graphs and Column Graphs",
                  "whatWeCover": "Build and read picture graphs and column graphs, and answer questions about the data."
                },
                {
                  "no": "07",
                  "topic": "Chance Events",
                  "whatWeCover": "Describe events as certain, likely, unlikely or impossible, and test chance with coins and spinners."
                },
                {
                  "no": "08",
                  "topic": "Maths Word Problems",
                  "whatWeCover": "Break a word problem into steps, choose an operation and check that the answer makes sense."
                },
                {
                  "no": "09",
                  "topic": "Problem Solving Challenges",
                  "whatWeCover": "Tackle open-ended puzzles and investigations that bring the year's number, measurement and shape skills together."
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
          "href": "/subjects/year-2/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Thinking Like a Scientist",
                  "whatWeCover": "Learn to observe closely, ask questions and make simple predictions before testing an idea."
                },
                {
                  "no": "02",
                  "topic": "Living and Non-Living Things",
                  "whatWeCover": "Sort things into living, once living and never living, and explain the signs of life."
                },
                {
                  "no": "03",
                  "topic": "Animal Features",
                  "whatWeCover": "Compare external features such as fur, feathers, scales and beaks, and how each one helps an animal."
                },
                {
                  "no": "04",
                  "topic": "Plants: Parts and Needs",
                  "whatWeCover": "Name the main parts of a plant and test what plants need to grow, including water, light and air."
                },
                {
                  "no": "05",
                  "topic": "Animal Life Cycles",
                  "whatWeCover": "Follow the stages of a life cycle, such as a frog or a butterfly, and put the stages in order."
                },
                {
                  "no": "06",
                  "topic": "Plant Life Cycles",
                  "whatWeCover": "Explore how seeds grow into plants that make new seeds, with a classroom bean experiment."
                },
                {
                  "no": "07",
                  "topic": "Australian Animals and Their Young",
                  "whatWeCover": "Look at how kangaroos, koalas and other native animals grow, and how young animals are like and unlike adults."
                },
                {
                  "no": "08",
                  "topic": "Growing and Changing",
                  "whatWeCover": "Compare how living things change over time, including how people grow from babies."
                },
                {
                  "no": "09",
                  "topic": "Recording Observations",
                  "whatWeCover": "Use drawings, tables and simple measurements to record what you see and share it clearly."
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
                  "topic": "What Is a Habitat?",
                  "whatWeCover": "Learn that living things live where their needs are met, and describe a habitat using words such as shelter and food."
                },
                {
                  "no": "02",
                  "topic": "Food, Water, Shelter and Air",
                  "whatWeCover": "Match animals and plants to the things they need, and see what happens when a need is missing."
                },
                {
                  "no": "03",
                  "topic": "Australian Habitats",
                  "whatWeCover": "Compare the bush, desert, rainforest, reef and wetland, and the living things found in each."
                },
                {
                  "no": "04",
                  "topic": "Who Eats What?",
                  "whatWeCover": "Build simple food chains and see how living things depend on each other."
                },
                {
                  "no": "05",
                  "topic": "Looking After Habitats",
                  "whatWeCover": "Discuss how people can protect local animals and plants, from litter clean-ups to native gardens."
                },
                {
                  "no": "06",
                  "topic": "Local Habitat Investigation",
                  "whatWeCover": "Observe a local habitat, such as a backyard or park, and record the living things found there."
                },
                {
                  "no": "07",
                  "topic": "Sorting and Classifying",
                  "whatWeCover": "Group living things using features that can be seen, and make a simple sorting key."
                },
                {
                  "no": "08",
                  "topic": "Habitats and Change",
                  "whatWeCover": "Explore how seasons, fire and flood can change a place and how living things respond."
                },
                {
                  "no": "09",
                  "topic": "Sharing Science Findings",
                  "whatWeCover": "Present findings in a poster or short talk, using science words with confidence."
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
                  "topic": "Properties of Materials",
                  "whatWeCover": "Describe materials as hard, soft, flexible, waterproof or see-through and test them with simple tools."
                },
                {
                  "no": "02",
                  "topic": "Solids and Liquids",
                  "whatWeCover": "Sort materials into solids and liquids and compare how each one behaves when poured or squeezed."
                },
                {
                  "no": "03",
                  "topic": "Mixing Materials for a Purpose",
                  "whatWeCover": "See how combining materials can make something new and useful, such as mixing paint colours or making dough."
                },
                {
                  "no": "04",
                  "topic": "Mixing and Dissolving",
                  "whatWeCover": "Test what dissolves in water and what does not, and predict results before trying."
                },
                {
                  "no": "05",
                  "topic": "Making a Fair Test",
                  "whatWeCover": "Change one thing at a time and keep everything else the same to get a reliable result."
                },
                {
                  "no": "06",
                  "topic": "Everyday Objects and Their Materials",
                  "whatWeCover": "Link an object's job to the materials it is made from, from raincoats to lunch boxes."
                },
                {
                  "no": "07",
                  "topic": "Materials That Change",
                  "whatWeCover": "Observe simple changes such as ice melting, chocolate softening and washing drying, and talk about what causes them."
                },
                {
                  "no": "08",
                  "topic": "Reuse and Recycle",
                  "whatWeCover": "Explore how materials can be reused or recycled, and sort items the way household recycling bins do."
                },
                {
                  "no": "09",
                  "topic": "Design a Useful Mixture",
                  "whatWeCover": "Plan, make and test a mixture for a job, such as slime, play dough or bubble mixture."
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
                  "topic": "Pushes and Pulls",
                  "whatWeCover": "Identify pushes and pulls in daily life, from opening a door to kicking a footy."
                },
                {
                  "no": "02",
                  "topic": "Fast, Slow and Changing Direction",
                  "whatWeCover": "Change how hard something is pushed or pulled and compare how its speed and direction change."
                },
                {
                  "no": "03",
                  "topic": "Changing Shape",
                  "whatWeCover": "Squash, stretch, bend and twist different materials to see how forces can change their shape."
                },
                {
                  "no": "04",
                  "topic": "Ramps and Rolling",
                  "whatWeCover": "Test how slopes and surfaces affect how far a toy car travels, and record the results."
                },
                {
                  "no": "05",
                  "topic": "Water as a Resource",
                  "whatWeCover": "Explore where water comes from, how people use it and why it matters in the Australian climate."
                },
                {
                  "no": "06",
                  "topic": "Soil, Rocks and Other Resources",
                  "whatWeCover": "Describe how soil, rocks, wood and metals are used, and where they come from."
                },
                {
                  "no": "07",
                  "topic": "Using Resources Wisely",
                  "whatWeCover": "Look at simple ways to save water and energy at home and at school."
                },
                {
                  "no": "08",
                  "topic": "Weather and Seasons",
                  "whatWeCover": "Record the weather across the term, link it to the seasons, and hear how First Nations seasonal knowledge describes the year."
                },
                {
                  "no": "09",
                  "topic": "Mini Science Investigation",
                  "whatWeCover": "Choose a question, plan a fair test, collect results and share a conclusion."
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
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "NEXT YEAR",
          "title": "Year 3 Tutoring",
          "text": "Build on Year 2 with Year 3 Maths, English and Science, 40 live lessons per subject mapped to the Australian Curriculum.",
          "buttonText": "View Year 3",
          "href": "/subjects/year-3"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  },
  "year-3": {
    "yearNum": 3,
    "yearId": "year-3",
    "meta": {
      "title": "Year 3 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 3 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-3"
    },
    "hero": {
      "h1": "Year 3 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum. Year 3 includes first NAPLAN prep, taught 1-on-1 or in small groups by qualified tutors.",
      "primaryBtn": "Try a Free Year 3 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 3 is the first NAPLAN year, and children gain real independence in reading, writing, number and science. Our hands-on lessons use familiar Australian examples, from footy scores to the backyard garden.",
      "keyTopics": {
        "maths": "place value to 10 000, times tables, fractions, time.",
        "english": "NAPLAN-style reading, spelling, narrative and persuasive writing.",
        "science": "classification, day and night, heat."
      },
      "parentTip": "Short, regular practice wins. Read together each night, practise times tables in the car or at tea, and try one NAPLAN-style quiz a week."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 3, Your Child Will...",
      "items": [
        "Read, write and round numbers to 10 000 with confidence",
        "Recall multiplication facts and use them to solve everyday problems",
        "Write clear narrative and persuasive texts with correct punctuation",
        "Answer NAPLAN-style reading questions by finding and inferring meaning",
        "Sort living things using observable features and a simple key",
        "Explain day and night and how heat moves, using evidence from tests"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 3 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-3/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "NAPLAN Reading: Finding and Inferring",
                  "whatWeCover": "Answer NAPLAN-style reading questions by finding information directly in a text and working out what the author means."
                },
                {
                  "no": "02",
                  "topic": "Spelling Patterns and NAPLAN Conventions",
                  "whatWeCover": "Learn common spelling patterns and practise the spelling and proofreading questions found in the NAPLAN conventions test."
                },
                {
                  "no": "03",
                  "topic": "Sentences: Simple and Compound",
                  "whatWeCover": "Write complete sentences with a subject and verb, and join ideas with and, but, or and so."
                },
                {
                  "no": "04",
                  "topic": "Verbs and Tense",
                  "whatWeCover": "Identify action, saying and thinking verbs, and keep past, present and future tense consistent in writing."
                },
                {
                  "no": "05",
                  "topic": "Nouns, Adjectives and Noun Groups",
                  "whatWeCover": "Build rich noun groups such as the old red ute, and choose precise adjectives to describe people and places."
                },
                {
                  "no": "06",
                  "topic": "Punctuation: Capitals, Commas and Apostrophes",
                  "whatWeCover": "Use capital letters, commas in lists and apostrophes for contractions and possession, such as Mum's car."
                },
                {
                  "no": "07",
                  "topic": "Narrative Writing: Plan and Draft",
                  "whatWeCover": "Plan a story with characters, a setting and a problem, then draft a clear beginning, middle and end."
                },
                {
                  "no": "08",
                  "topic": "Persuasive Writing",
                  "whatWeCover": "Share an opinion on a topic, such as a longer lunch break, and support it with clear reasons and a strong ending."
                },
                {
                  "no": "09",
                  "topic": "Reading Fluency and Comprehension",
                  "whatWeCover": "Read short texts aloud with accuracy and expression, then answer comprehension questions in the NAPLAN style."
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
                  "topic": "Adverbs and Prepositional Phrases",
                  "whatWeCover": "Add detail about how, when and where something happens, using adverbs and phrases such as under the verandah."
                },
                {
                  "no": "02",
                  "topic": "Paragraphs and Topic Sentences",
                  "whatWeCover": "Group related ideas into paragraphs, start each with a topic sentence and keep the writing in logical order."
                },
                {
                  "no": "03",
                  "topic": "Characters, Settings and Plot",
                  "whatWeCover": "Describe how characters feel and change, and how setting and events shape a story from start to finish."
                },
                {
                  "no": "04",
                  "topic": "Direct Speech and Speech Marks",
                  "whatWeCover": "Write dialogue with speech marks, new lines for new speakers and verbs such as whispered and replied."
                },
                {
                  "no": "05",
                  "topic": "Spelling: Prefixes and Suffixes",
                  "whatWeCover": "Add prefixes such as un and re, and suffixes such as ful and less, and see how they change a word's meaning."
                },
                {
                  "no": "06",
                  "topic": "Poetry and Figurative Language",
                  "whatWeCover": "Read and write poems that use rhyme, rhythm, similes and sound words, and talk about the pictures they create."
                },
                {
                  "no": "07",
                  "topic": "Comprehension: Main Idea and Purpose",
                  "whatWeCover": "Identify the main idea of a text and decide whether the author wants to entertain, inform or persuade."
                },
                {
                  "no": "08",
                  "topic": "Retelling and Oral Presentations",
                  "whatWeCover": "Retell a story or share an idea in a clear voice, using eye contact, pace and expression."
                },
                {
                  "no": "09",
                  "topic": "Writing an Imaginative Narrative",
                  "whatWeCover": "Draft, edit and share a story with a problem and solution, using detail and dialogue to hold the reader's interest."
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
                  "topic": "Australian and First Nations Literature",
                  "whatWeCover": "Read stories and poems by Australian and First Nations authors, and discuss the ideas, places and cultures they share."
                },
                {
                  "no": "02",
                  "topic": "Information Reports",
                  "whatWeCover": "Research an Australian animal or place and write a report with a general statement, facts and a conclusion."
                },
                {
                  "no": "03",
                  "topic": "Procedures and Instructions",
                  "whatWeCover": "Write clear instructions with a goal, materials and numbered steps, such as making a damper or a paper plane."
                },
                {
                  "no": "04",
                  "topic": "Opinion and Review Writing",
                  "whatWeCover": "Write a review of a book or film, giving a rating and reasons, and use words such as however and therefore."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary: Synonyms and Context",
                  "whatWeCover": "Choose stronger words, find synonyms and antonyms, and work out unfamiliar words using clues in the text."
                },
                {
                  "no": "06",
                  "topic": "Complex Sentences and Conjunctions",
                  "whatWeCover": "Link ideas with when, if, because and although to build longer sentences that are clear and varied."
                },
                {
                  "no": "07",
                  "topic": "Visual Texts and Images",
                  "whatWeCover": "Read pictures, diagrams and captions alongside words, and explain how images add meaning to a text."
                },
                {
                  "no": "08",
                  "topic": "Spelling: Homophones and Tricky Words",
                  "whatWeCover": "Tell apart homophones such as their and there, and learn tricky words using memory strategies and short quizzes."
                },
                {
                  "no": "09",
                  "topic": "Editing and Proofreading",
                  "whatWeCover": "Check a draft for spelling, punctuation and sense, and improve it using a simple editing checklist."
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
                  "topic": "Narrative Writing Workshop",
                  "whatWeCover": "Combine plot, dialogue and description to write a polished story from a picture or story starter."
                },
                {
                  "no": "02",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare two texts on the same topic, noting similarities and differences in purpose, language and ideas."
                },
                {
                  "no": "03",
                  "topic": "Reading Unseen Texts",
                  "whatWeCover": "Read new passages with confidence using strategies such as re-reading, predicting and using context for tricky words."
                },
                {
                  "no": "04",
                  "topic": "Pronouns and Referring Words",
                  "whatWeCover": "Use pronouns such as he, she, they and it to avoid repetition, and make clear who or what each one refers to."
                },
                {
                  "no": "05",
                  "topic": "Letters and Writing for an Audience",
                  "whatWeCover": "Write a letter or email with a clear greeting, purpose and sign off, and adjust tone for the reader."
                },
                {
                  "no": "06",
                  "topic": "Reader's Theatre and Drama",
                  "whatWeCover": "Perform a short script aloud, using voice and expression to show feelings and bring characters to life."
                },
                {
                  "no": "07",
                  "topic": "Spelling: Syllables and Word Building",
                  "whatWeCover": "Break words into syllables, build longer words from smaller parts and revisit the year's spelling rules."
                },
                {
                  "no": "08",
                  "topic": "Presenting and Speaking",
                  "whatWeCover": "Prepare and deliver a short talk on a favourite topic with a clear opening, key points and a closing."
                },
                {
                  "no": "09",
                  "topic": "Year 4 Readiness",
                  "whatWeCover": "Preview the reading, writing and grammar skills of Year 4 in a relaxed way, and set goals for next year."
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
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-3/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to 10 000",
                  "whatWeCover": "Build and read four-digit numbers with blocks and place value charts, and say what each digit is worth."
                },
                {
                  "no": "02",
                  "topic": "Ordering and Comparing Numbers",
                  "whatWeCover": "Compare and order numbers to 10 000 using number lines, and explain the choice using place value language."
                },
                {
                  "no": "03",
                  "topic": "Rounding and Estimating",
                  "whatWeCover": "Round numbers to the nearest ten, hundred and thousand, and use estimates to check that answers make sense."
                },
                {
                  "no": "04",
                  "topic": "Addition Strategies",
                  "whatWeCover": "Add two- and three-digit numbers using partitioning, jump strategies and written methods, such as totalling a family road trip."
                },
                {
                  "no": "05",
                  "topic": "Subtraction Strategies",
                  "whatWeCover": "Subtract using counting back, compensation and written methods, and check each answer with the inverse operation."
                },
                {
                  "no": "06",
                  "topic": "Number Patterns and Rules",
                  "whatWeCover": "Continue and describe number patterns that grow or shrink, and state the rule used to get from one term to the next."
                },
                {
                  "no": "07",
                  "topic": "Multiplication Facts for 2, 5 and 10",
                  "whatWeCover": "Build fast recall of the 2, 5 and 10 times tables with arrays, skip counting and quick fire games."
                },
                {
                  "no": "08",
                  "topic": "Multiplication Facts for 3 and 4",
                  "whatWeCover": "Learn the 3 and 4 times tables using doubling, arrays and patterns, and link them to real groups and sets."
                },
                {
                  "no": "09",
                  "topic": "NAPLAN Numeracy Skills",
                  "whatWeCover": "Practise NAPLAN-style number questions, including multiple choice and short answer, with tips for reading and checking each item."
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
                  "topic": "Multiplication Strategies",
                  "whatWeCover": "Multiply by using arrays, partitioning and doubling, and solve word problems with equal groups."
                },
                {
                  "no": "02",
                  "topic": "Division as Sharing and Grouping",
                  "whatWeCover": "Share and group collections equally and write division sentences, such as sharing 24 sausage rolls at a school fete."
                },
                {
                  "no": "03",
                  "topic": "Multiplication and Division Fact Families",
                  "whatWeCover": "Use one set of facts to build four related number sentences and solve for missing numbers."
                },
                {
                  "no": "04",
                  "topic": "Missing Numbers and Number Sentences",
                  "whatWeCover": "Find unknown values in addition, subtraction, multiplication and division sentences using balance ideas and inverse operations."
                },
                {
                  "no": "05",
                  "topic": "Unit Fractions",
                  "whatWeCover": "Name and show halves, thirds, quarters, fifths and eighths of shapes and collections, using correct fraction language."
                },
                {
                  "no": "06",
                  "topic": "Fractions on a Number Line",
                  "whatWeCover": "Place fractions with the same denominator on a number line and count in unit fractions, such as one quarter, two quarters."
                },
                {
                  "no": "07",
                  "topic": "Fractions of a Collection",
                  "whatWeCover": "Find a fraction of a small set, such as one quarter of 12 lamingtons, using sharing and drawings."
                },
                {
                  "no": "08",
                  "topic": "Australian Money and Rounding",
                  "whatWeCover": "Add and subtract amounts of money, work out change and round totals to the nearest five cents, as the shops do."
                },
                {
                  "no": "09",
                  "topic": "Solving Money and Number Problems",
                  "whatWeCover": "Choose an operation, solve multi-step word problems about money and groups, and check that the answer is reasonable."
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
                  "topic": "Length: Metres, Centimetres and Millimetres",
                  "whatWeCover": "Measure and compare lengths with a ruler and tape, choosing the best unit and estimating before measuring."
                },
                {
                  "no": "02",
                  "topic": "Mass: Grams and Kilograms",
                  "whatWeCover": "Use kitchen scales to measure and compare mass, and solve problems with grams and kilograms."
                },
                {
                  "no": "03",
                  "topic": "Capacity: Litres and Millilitres",
                  "whatWeCover": "Measure and compare the capacity of containers in litres and millilitres, from drink bottles to buckets."
                },
                {
                  "no": "04",
                  "topic": "Time to the Minute",
                  "whatWeCover": "Read analogue and digital clocks to the minute, and use am and pm to describe everyday events."
                },
                {
                  "no": "05",
                  "topic": "Time Durations and Timetables",
                  "whatWeCover": "Work out how long events take and read simple timetables, such as a bus or school day timetable."
                },
                {
                  "no": "06",
                  "topic": "Calendars and Time Facts",
                  "whatWeCover": "Use calendars to find dates, months and seasons, and convert between minutes and hours."
                },
                {
                  "no": "07",
                  "topic": "Area with Informal Units",
                  "whatWeCover": "Compare and measure surfaces by covering them with square tiles and counting the units, then explain the result."
                },
                {
                  "no": "08",
                  "topic": "Temperature and Measurement Problems",
                  "whatWeCover": "Read temperatures on a thermometer and solve everyday problems that mix length, mass, capacity and time."
                },
                {
                  "no": "09",
                  "topic": "Choosing the Right Measure",
                  "whatWeCover": "Decide which unit and tool suit each task, and justify choices using real Australian examples."
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
                  "topic": "Properties of 2D Shapes",
                  "whatWeCover": "Describe the sides and angles of triangles, quadrilaterals and other polygons, and sort shapes by their features."
                },
                {
                  "no": "02",
                  "topic": "3D Objects and Their Nets",
                  "whatWeCover": "Name prisms, pyramids, cylinders, cones and spheres, count faces, edges and vertices, and match objects to their nets."
                },
                {
                  "no": "03",
                  "topic": "Angles in Everyday Life",
                  "whatWeCover": "Compare angles with a right angle, and identify angles that are smaller or larger in shapes and the environment."
                },
                {
                  "no": "04",
                  "topic": "Symmetry, Flips, Slides and Turns",
                  "whatWeCover": "Find lines of symmetry and create patterns using flips, slides and turns on grids."
                },
                {
                  "no": "05",
                  "topic": "Maps and Grid References",
                  "whatWeCover": "Read simple maps, give directions and locate places using grid references, such as a map of the school grounds."
                },
                {
                  "no": "06",
                  "topic": "Collecting and Organising Data",
                  "whatWeCover": "Plan a question, collect data in tally charts and tables, and decide how best to display the results."
                },
                {
                  "no": "07",
                  "topic": "Picture and Column Graphs",
                  "whatWeCover": "Build and read picture graphs and column graphs with scales, and answer questions about what the data shows."
                },
                {
                  "no": "08",
                  "topic": "Chance and Probability",
                  "whatWeCover": "Run chance experiments with coins, dice and spinners, and describe outcomes as equally likely or not equally likely."
                },
                {
                  "no": "09",
                  "topic": "Problem Solving Challenges",
                  "whatWeCover": "Tackle open puzzles and investigations that combine number, measurement and shape skills from across the year."
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
          "href": "/subjects/year-3/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Asking Questions and Making Predictions",
                  "whatWeCover": "Observe closely, pose testable questions and make predictions before trying an idea."
                },
                {
                  "no": "02",
                  "topic": "Fair Tests and Measuring",
                  "whatWeCover": "Change one variable at a time, keep other things the same and take careful measurements with simple tools."
                },
                {
                  "no": "03",
                  "topic": "Grouping Living Things",
                  "whatWeCover": "Sort living things into groups using features you can observe, and explain the reasons for each group."
                },
                {
                  "no": "04",
                  "topic": "Classifying Plants",
                  "whatWeCover": "Group plants by features such as leaves, flowers, seeds and stems, and look at Australian natives such as eucalypts and wattles."
                },
                {
                  "no": "05",
                  "topic": "Classifying Animals",
                  "whatWeCover": "Compare animals with and without backbones, and sort mammals, birds, reptiles, amphibians and fish by their features."
                },
                {
                  "no": "06",
                  "topic": "Making a Classification Key",
                  "whatWeCover": "Build a simple branching key using yes and no questions to identify living things from a set."
                },
                {
                  "no": "07",
                  "topic": "Australian Animals and Their Features",
                  "whatWeCover": "Study unique Australian animals such as the koala, echidna and kookaburra, and link their features to the way they live."
                },
                {
                  "no": "08",
                  "topic": "Minibeasts and Insects",
                  "whatWeCover": "Search the garden for insects, spiders and other minibeasts, and classify what you find using a key."
                },
                {
                  "no": "09",
                  "topic": "Recording and Sharing Results",
                  "whatWeCover": "Record observations in tables and simple graphs, and share what the evidence shows."
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
                  "topic": "Our Spinning Earth",
                  "whatWeCover": "Learn that Earth rotates once a day, and use a globe and torch to model why we see day and night."
                },
                {
                  "no": "02",
                  "topic": "Day and Night Models",
                  "whatWeCover": "Build and test a model of Earth and the Sun to show how day turns into night in Australia."
                },
                {
                  "no": "03",
                  "topic": "Shadows and Light",
                  "whatWeCover": "Explore how shadows form when light is blocked, and test how the size of a shadow changes."
                },
                {
                  "no": "04",
                  "topic": "The Sun's Path Across the Sky",
                  "whatWeCover": "Track where the Sun appears over the day and describe how its position changes."
                },
                {
                  "no": "05",
                  "topic": "Shadow Length Through the Day",
                  "whatWeCover": "Measure a shadow at different times of day and record how its length and direction change."
                },
                {
                  "no": "06",
                  "topic": "Sundials and Telling Time",
                  "whatWeCover": "Make a simple sundial and see how people used the Sun's movement to tell the time."
                },
                {
                  "no": "07",
                  "topic": "First Nations Sky Knowledge",
                  "whatWeCover": "Hear how First Nations Australians read the sky, such as the Emu in the Sky story, and what it tells them about the seasons."
                },
                {
                  "no": "08",
                  "topic": "Investigating Shadows",
                  "whatWeCover": "Plan and carry out a fair test about shadows, and use evidence to explain the results."
                },
                {
                  "no": "09",
                  "topic": "Communicating Earth and Sun Ideas",
                  "whatWeCover": "Present findings using diagrams and science words, such as rotate, orbit and shadow."
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
                  "topic": "Sources of Heat",
                  "whatWeCover": "Identify where heat comes from, including the Sun, fire, electricity and friction, and where we use it every day."
                },
                {
                  "no": "02",
                  "topic": "Friction and Heat",
                  "whatWeCover": "Rub hands, wood and other materials together to feel how movement can make things warmer."
                },
                {
                  "no": "03",
                  "topic": "Measuring Hot and Cold",
                  "whatWeCover": "Use a thermometer to measure temperature in degrees Celsius and record results in a table."
                },
                {
                  "no": "04",
                  "topic": "How Heat Moves",
                  "whatWeCover": "See how heat travels from a warmer object to a cooler one, and predict what happens to a hot drink left to cool."
                },
                {
                  "no": "05",
                  "topic": "Conductors and Insulators",
                  "whatWeCover": "Test which materials, such as metal, wood and foam, let heat pass through easily and which slow it down."
                },
                {
                  "no": "06",
                  "topic": "Staying Warm and Cool",
                  "whatWeCover": "Explore how clothing, shade and buildings help people stay comfortable in the Australian summer and winter."
                },
                {
                  "no": "07",
                  "topic": "The Sun's Heat",
                  "whatWeCover": "Compare how sunny and shady spots warm up, and talk about sun safety on hot Australian days."
                },
                {
                  "no": "08",
                  "topic": "Heat Investigation",
                  "whatWeCover": "Plan a fair test about heat, such as which cup keeps water warm longest, and share a conclusion."
                },
                {
                  "no": "09",
                  "topic": "Using Heat Safely",
                  "whatWeCover": "Discuss how to stay safe around hot objects, kitchens and bushfire risk, and how to use heat sensibly."
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
                  "topic": "Heating and Cooling Changes",
                  "whatWeCover": "Explore how heating and cooling can change the properties of materials, such as hardness, shape and colour."
                },
                {
                  "no": "02",
                  "topic": "Melting and Freezing",
                  "whatWeCover": "Watch ice, chocolate and wax melt and set, and record the temperature at which changes happen."
                },
                {
                  "no": "03",
                  "topic": "Evaporation and Condensation",
                  "whatWeCover": "Observe water drying from a surface and forming droplets on a cold glass, and explain what is happening."
                },
                {
                  "no": "04",
                  "topic": "Cooking Changes",
                  "whatWeCover": "Look at how baking, boiling and toasting change food, and which changes cannot be reversed."
                },
                {
                  "no": "05",
                  "topic": "Reversible and Irreversible Changes",
                  "whatWeCover": "Sort changes into those that can be undone, such as melting, and those that cannot, such as burning."
                },
                {
                  "no": "06",
                  "topic": "Cooling and Setting",
                  "whatWeCover": "Test how cooling makes jelly and wax set, and compare how fast different materials change."
                },
                {
                  "no": "07",
                  "topic": "Changes in Everyday Life",
                  "whatWeCover": "Spot heating and cooling changes at home, from a kettle boiling to puddles drying after rain."
                },
                {
                  "no": "08",
                  "topic": "Mini Science Investigation",
                  "whatWeCover": "Choose a question, plan a fair test, collect results and share a conclusion with evidence."
                },
                {
                  "no": "09",
                  "topic": "Science Review and Showcase",
                  "whatWeCover": "Revisit the year's big ideas on living things, Earth and Sun, heat and changing materials, and share a favourite discovery."
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
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "NEXT YEAR",
          "title": "Year 4 Tutoring",
          "text": "Build on Year 3 with Year 4 Maths, English and Science, 40 live lessons per subject mapped to the Australian Curriculum.",
          "buttonText": "View Year 4",
          "href": "/subjects/year-4"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  },
  "year-4": {
    "yearNum": 4,
    "yearId": "year-4",
    "meta": {
      "title": "Year 4 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 4 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-4"
    },
    "hero": {
      "h1": "Year 4 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum. Taught in personalised 1-on-1 or small group classes by qualified tutors.",
      "primaryBtn": "Try a Free Year 4 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 4 is where children tackle bigger numbers, longer texts and deeper ideas. Our program builds confidence in all three subjects with Australian examples, from the footy ladder to bushfire recovery.",
      "keyTopics": {
        "maths": "place value to 10 000, multiplication and division, fractions, decimals, area and angles.",
        "english": "narratives, persuasive texts, reports.",
        "science": "adaptations, materials, landforms, forces."
      },
      "parentTip": "Ask your child to explain one thing they learned each week. Teaching it back to you, mum or dad, is the best way to lock it in."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 4, Your Child Will...",
      "items": [
        "Read, write and round numbers up to 10 000 with confidence",
        "Multiply, divide and use fractions and decimals to solve everyday problems",
        "Write well-organised narratives and reports using complex sentences",
        "Read for meaning, infer ideas and respond to Australian and First Nations texts",
        "Classify living things and explain how adaptations help them survive",
        "Plan a fair test and explain how forces, materials and landforms behave"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 4 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-4/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Fluency and Comprehension Strategies",
                  "whatWeCover": "Read chapter-book passages with accuracy and expression, and use predicting, questioning and summarising to understand them."
                },
                {
                  "no": "02",
                  "topic": "Narrative Structure and Plot",
                  "whatWeCover": "Map the orientation, complication, resolution and ending of a story, and see how authors build suspense."
                },
                {
                  "no": "03",
                  "topic": "Characters and Settings",
                  "whatWeCover": "Describe how characters think, feel and change, and how a setting such as the outback or a beach shapes the story."
                },
                {
                  "no": "04",
                  "topic": "Paragraphs and Topic Sentences",
                  "whatWeCover": "Organise writing into paragraphs, begin each with a clear topic sentence and keep ideas in a logical order."
                },
                {
                  "no": "05",
                  "topic": "Noun Groups and Adjectives",
                  "whatWeCover": "Build detailed noun groups that add description, such as the old wooden boat with a faded blue sail."
                },
                {
                  "no": "06",
                  "topic": "Verb Groups and Adverbs",
                  "whatWeCover": "Choose strong verbs and use adverbs to show how, when and where actions happen, and keep verb tense consistent."
                },
                {
                  "no": "07",
                  "topic": "Complex Sentences and Conjunctions",
                  "whatWeCover": "Join ideas with conjunctions such as although, while and because, and use main and dependent clauses."
                },
                {
                  "no": "08",
                  "topic": "Spelling: Prefixes and Suffixes",
                  "whatWeCover": "Learn how prefixes and suffixes change word meanings, and spell words such as unhappy, careful and enjoyment."
                },
                {
                  "no": "09",
                  "topic": "Writing an Imaginative Narrative",
                  "whatWeCover": "Plan, draft and share a story with a strong opening, a clear problem and a satisfying ending."
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
                  "topic": "Dialogue and Speech Punctuation",
                  "whatWeCover": "Punctuate direct speech with inverted commas, commas and new lines for each speaker, and use it to bring characters to life."
                },
                {
                  "no": "02",
                  "topic": "Apostrophes for Contractions and Possession",
                  "whatWeCover": "Use apostrophes correctly in contractions such as didn't and in possessives such as the dog's lead."
                },
                {
                  "no": "03",
                  "topic": "Comprehension: Inferring Meaning",
                  "whatWeCover": "Use clues in the text and illustrations to work out feelings and motives, and back up answers with evidence."
                },
                {
                  "no": "04",
                  "topic": "Information Reports",
                  "whatWeCover": "Learn the structure of a report, with a classification and descriptive paragraphs, then write one on an Australian animal."
                },
                {
                  "no": "05",
                  "topic": "Text Features and Research Skills",
                  "whatWeCover": "Use headings, diagrams, indexes and glossaries to locate facts, and check that sources are reliable."
                },
                {
                  "no": "06",
                  "topic": "Note-Taking and Summarising",
                  "whatWeCover": "Pick out key words and main ideas, and turn notes into a short summary in your own words."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary: Synonyms and Homophones",
                  "whatWeCover": "Choose more precise words, and tell apart homophones such as their, there and they're in writing."
                },
                {
                  "no": "08",
                  "topic": "Poetry and Imagery",
                  "whatWeCover": "Read and write poems that use rhyme, rhythm and images, including similes and sensory language."
                },
                {
                  "no": "09",
                  "topic": "Presenting an Information Talk",
                  "whatWeCover": "Prepare and deliver a short talk with clear speech, eye contact and simple visual aids."
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
                  "topic": "Persuasive Texts: Structure",
                  "whatWeCover": "Learn how a persuasive text opens with a clear position, builds arguments and closes with a strong conclusion."
                },
                {
                  "no": "02",
                  "topic": "Fact and Opinion",
                  "whatWeCover": "Sort statements into fact and opinion, and spot how writers use opinion to influence readers in ads and articles."
                },
                {
                  "no": "03",
                  "topic": "Modality and Persuasive Language",
                  "whatWeCover": "Use words such as must, might and definitely to adjust how strongly a writer states a view."
                },
                {
                  "no": "04",
                  "topic": "Writing a Persuasive Text",
                  "whatWeCover": "Plan and write a persuasive piece on a topic such as school uniforms or a longer lunch break, with reasons and evidence."
                },
                {
                  "no": "05",
                  "topic": "Australian and First Nations Literature",
                  "whatWeCover": "Read stories and poems by Australian and First Nations authors, and discuss the ideas, places and cultures they share."
                },
                {
                  "no": "06",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare how two texts on a similar theme use characters, setting and language in different ways."
                },
                {
                  "no": "07",
                  "topic": "Figurative Language",
                  "whatWeCover": "Spot and use similes, metaphors and personification to make descriptions more vivid."
                },
                {
                  "no": "08",
                  "topic": "Spelling: Word Origins and Roots",
                  "whatWeCover": "Explore common base words and roots to spell and work out the meaning of longer words."
                },
                {
                  "no": "09",
                  "topic": "Responding to Literature",
                  "whatWeCover": "Write a short response that gives an opinion about a book or poem and supports it with details from the text."
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
                  "topic": "Editing and Proofreading",
                  "whatWeCover": "Check writing for punctuation, spelling and sense, and improve a draft using a checklist and a peer review."
                },
                {
                  "no": "02",
                  "topic": "Writing a Cohesive Narrative",
                  "whatWeCover": "Use linking words and paragraph breaks so a story flows, and keep the point of view and tense consistent."
                },
                {
                  "no": "03",
                  "topic": "Visual and Multimodal Texts",
                  "whatWeCover": "Read picture books, posters and websites, and describe how images, layout and words work together."
                },
                {
                  "no": "04",
                  "topic": "Speaking and Discussion Skills",
                  "whatWeCover": "Take part in group discussions by listening, building on others' ideas and giving reasons for your view."
                },
                {
                  "no": "05",
                  "topic": "Reading Unseen Texts",
                  "whatWeCover": "Read new passages with confidence, using strategies such as re-reading and checking context to work out unfamiliar words."
                },
                {
                  "no": "06",
                  "topic": "Author's Choices",
                  "whatWeCover": "Notice how word choices, sentence length and structure shape the way a reader feels and thinks."
                },
                {
                  "no": "07",
                  "topic": "Spelling Patterns Review",
                  "whatWeCover": "Revisit the year's spelling rules, tricky words and word endings using games and short quizzes."
                },
                {
                  "no": "08",
                  "topic": "Year 5 and NAPLAN Readiness",
                  "whatWeCover": "Preview Year 5 skills, including NAPLAN-style reading and language conventions questions, in a relaxed and encouraging way."
                },
                {
                  "no": "09",
                  "topic": "Creative Writing Workshop",
                  "whatWeCover": "Write freely from a picture or story starter, then share and celebrate the finished piece."
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
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-4/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to 10 000",
                  "whatWeCover": "Read, write and build numbers up to 10 000, and explain what each digit is worth using place value charts and blocks."
                },
                {
                  "no": "02",
                  "topic": "Partitioning and Renaming Numbers",
                  "whatWeCover": "Break four-digit numbers into thousands, hundreds, tens and ones in different ways, such as 3 450 as 34 hundreds and 5 tens."
                },
                {
                  "no": "03",
                  "topic": "Comparing and Ordering Numbers",
                  "whatWeCover": "Compare and order four-digit numbers using greater than and less than signs, and place them on number lines."
                },
                {
                  "no": "04",
                  "topic": "Rounding and Estimating",
                  "whatWeCover": "Round numbers to the nearest ten, hundred and thousand, and use estimates to check whether an answer is reasonable."
                },
                {
                  "no": "05",
                  "topic": "Addition Strategies",
                  "whatWeCover": "Add three-digit and four-digit numbers using partitioning, compensation and written methods, with Australian examples such as crowd sizes at the footy."
                },
                {
                  "no": "06",
                  "topic": "Subtraction Strategies",
                  "whatWeCover": "Subtract larger numbers using counting on, renaming and written methods, and check answers with addition."
                },
                {
                  "no": "07",
                  "topic": "Multiplication Facts to 10 by 10",
                  "whatWeCover": "Build quick recall of times tables through arrays, skip counting and games, and link each fact to its matching division fact."
                },
                {
                  "no": "08",
                  "topic": "Multiples and Factors",
                  "whatWeCover": "Find multiples of numbers, list the factors of a number and spot patterns in multiplication tables."
                },
                {
                  "no": "09",
                  "topic": "Mental Strategies for Multiplying",
                  "whatWeCover": "Use doubling, halving and the distributive idea to multiply mentally, such as working out 6 x 14 by splitting 14 into 10 and 4."
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
                  "topic": "Multiplying by a One-Digit Number",
                  "whatWeCover": "Multiply two-digit and three-digit numbers by a single digit using area models and written methods."
                },
                {
                  "no": "02",
                  "topic": "Division with Remainders",
                  "whatWeCover": "Divide numbers equally, work out what is left over and decide how to treat a remainder in a story problem."
                },
                {
                  "no": "03",
                  "topic": "Unknown Quantities and Number Sentences",
                  "whatWeCover": "Find the missing number in equations such as 5 x __ = 35 and 48 = __ + 19, and explain how you know."
                },
                {
                  "no": "04",
                  "topic": "Properties of Number Operations",
                  "whatWeCover": "Use the order and grouping properties to make calculations easier, and see why they work for addition and multiplication."
                },
                {
                  "no": "05",
                  "topic": "Unit Fractions and Equivalent Fractions",
                  "whatWeCover": "Show halves, quarters, fifths and tenths, and find equivalent fractions using fraction walls and number lines."
                },
                {
                  "no": "06",
                  "topic": "Ordering and Comparing Fractions",
                  "whatWeCover": "Compare and order fractions with related denominators, and place fractions on number lines between zero and two."
                },
                {
                  "no": "07",
                  "topic": "Adding and Subtracting Fractions",
                  "whatWeCover": "Add and subtract fractions with the same denominator, including mixed numbers, using diagrams and number lines."
                },
                {
                  "no": "08",
                  "topic": "Tenths, Hundredths and Decimals",
                  "whatWeCover": "Link fractions to decimal notation, and read and write tenths and hundredths on place value charts and number lines."
                },
                {
                  "no": "09",
                  "topic": "Money and Rounding to the Nearest Five Cents",
                  "whatWeCover": "Solve Australian money problems with decimals, and round totals to the nearest five cents the way shops do."
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
                  "topic": "Length and Converting Units",
                  "whatWeCover": "Measure in millimetres, centimetres, metres and kilometres, and convert between units using everyday objects and distances."
                },
                {
                  "no": "02",
                  "topic": "Perimeter",
                  "whatWeCover": "Measure and calculate the distance around squares, rectangles and irregular shapes, such as the edge of a backyard."
                },
                {
                  "no": "03",
                  "topic": "Area",
                  "whatWeCover": "Find the area of shapes using square centimetres and square metres, and compare shapes that cover the same space."
                },
                {
                  "no": "04",
                  "topic": "Capacity and Volume",
                  "whatWeCover": "Measure and compare capacity using millilitres and litres, and estimate how many cups fill a bottle or bucket."
                },
                {
                  "no": "05",
                  "topic": "Mass",
                  "whatWeCover": "Weigh objects in grams and kilograms, read different scales and solve problems such as a recipe or a school bag."
                },
                {
                  "no": "06",
                  "topic": "Time: 12-Hour and 24-Hour",
                  "whatWeCover": "Read and write time in am and pm and in 24-hour time, and convert between the two using a clock face."
                },
                {
                  "no": "07",
                  "topic": "Timetables and Elapsed Time",
                  "whatWeCover": "Read timetables for buses, trains and school events, and work out how long something takes using time units."
                },
                {
                  "no": "08",
                  "topic": "Reading Scales and Temperature",
                  "whatWeCover": "Read scales on rulers, jugs and thermometers accurately, including Australian summer and winter temperatures in degrees Celsius."
                },
                {
                  "no": "09",
                  "topic": "Measurement Word Problems",
                  "whatWeCover": "Solve multi-step problems that mix length, mass, capacity and time in real Australian situations."
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
                  "topic": "Angles",
                  "whatWeCover": "Compare angles with a right angle, and sort them as smaller than, equal to or greater than a right angle."
                },
                {
                  "no": "02",
                  "topic": "Properties of 2D Shapes",
                  "whatWeCover": "Classify triangles and quadrilaterals by sides and angles, and describe how shapes such as rectangles and rhombuses differ."
                },
                {
                  "no": "03",
                  "topic": "3D Objects and Nets",
                  "whatWeCover": "Describe prisms and pyramids by their faces, edges and vertices, and match each solid to its flat net."
                },
                {
                  "no": "04",
                  "topic": "Symmetry and Transformations",
                  "whatWeCover": "Find lines of symmetry and show slides, flips and turns, then create patterns by repeating a shape."
                },
                {
                  "no": "05",
                  "topic": "Maps and Grid References",
                  "whatWeCover": "Use grid references and compass directions to locate places on a map, and describe a route between them."
                },
                {
                  "no": "06",
                  "topic": "Collecting and Organising Data",
                  "whatWeCover": "Plan a survey, collect responses and sort data into tables, using questions that suit a Year 4 class."
                },
                {
                  "no": "07",
                  "topic": "Column Graphs and Dot Plots",
                  "whatWeCover": "Build and read column graphs and dot plots with scales, and answer questions about what the data shows."
                },
                {
                  "no": "08",
                  "topic": "Chance and Probability",
                  "whatWeCover": "List the outcomes of chance events, decide whether they are equally likely and test them with dice and spinners."
                },
                {
                  "no": "09",
                  "topic": "Problem Solving Challenges",
                  "whatWeCover": "Tackle open-ended puzzles and investigations that bring together number, measurement, space and data skills from the year."
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
          "href": "/subjects/year-4/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Working Like a Scientist",
                  "whatWeCover": "Ask testable questions, make predictions and plan a fair test, changing one variable and keeping others the same."
                },
                {
                  "no": "02",
                  "topic": "Classifying Living Things",
                  "whatWeCover": "Group living things using observable features, and build a classification key for plants and animals."
                },
                {
                  "no": "03",
                  "topic": "Vertebrates and Invertebrates",
                  "whatWeCover": "Sort animals into groups such as mammals, birds, reptiles and insects, and describe what sets each group apart."
                },
                {
                  "no": "04",
                  "topic": "Structural Features and Adaptations",
                  "whatWeCover": "Explain how features such as webbed feet, camouflage and thick fur help living things survive in their environment."
                },
                {
                  "no": "05",
                  "topic": "Australian Animal Adaptations",
                  "whatWeCover": "Investigate how koalas, echidnas, frill-necked lizards and other native animals are suited to their habitats."
                },
                {
                  "no": "06",
                  "topic": "Food Chains",
                  "whatWeCover": "Build food chains with producers, consumers and decomposers, using Australian bush and reef examples."
                },
                {
                  "no": "07",
                  "topic": "Food Webs",
                  "whatWeCover": "Link several food chains into a web and predict what happens if one living thing is removed."
                },
                {
                  "no": "08",
                  "topic": "Bushfire, Flood and Drought",
                  "whatWeCover": "Explore how events such as bushfire, flood and drought affect living things and how ecosystems recover."
                },
                {
                  "no": "09",
                  "topic": "Caring for Living Things",
                  "whatWeCover": "Discuss how people protect native animals and plants, from wildlife corridors to local conservation projects."
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
                  "topic": "Natural and Processed Materials",
                  "whatWeCover": "Sort materials into natural and processed, and trace everyday items back to the raw materials they came from."
                },
                {
                  "no": "02",
                  "topic": "Physical Properties of Materials",
                  "whatWeCover": "Describe materials as hard, flexible, strong, absorbent or waterproof, and test each property with simple equipment."
                },
                {
                  "no": "03",
                  "topic": "Choosing Materials for a Purpose",
                  "whatWeCover": "Match materials to jobs, such as why raincoats, cricket bats and drink bottles use different materials."
                },
                {
                  "no": "04",
                  "topic": "Testing Strength and Flexibility",
                  "whatWeCover": "Plan a fair test to compare how strong or bendy different materials are, and record measurements in a table."
                },
                {
                  "no": "05",
                  "topic": "Absorbency and Waterproofing",
                  "whatWeCover": "Test which materials soak up water and which repel it, and decide what suits a towel, a tent or a boot."
                },
                {
                  "no": "06",
                  "topic": "Wood, Metal and Fabric",
                  "whatWeCover": "Compare how timber, metals and fabrics are made and used, and why each is chosen for particular products."
                },
                {
                  "no": "07",
                  "topic": "From Raw Material to Product",
                  "whatWeCover": "Follow how cotton becomes a T-shirt or wool becomes a jumper, noting each processing step."
                },
                {
                  "no": "08",
                  "topic": "Sustainable Material Choices",
                  "whatWeCover": "Consider how reusing, recycling and choosing renewable materials can reduce waste in Australian homes and schools."
                },
                {
                  "no": "09",
                  "topic": "Design and Test a Product",
                  "whatWeCover": "Design a simple product, choose suitable materials, test it and suggest how to improve it."
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
                  "topic": "Earth's Structure and Surface",
                  "whatWeCover": "Describe the layers of the Earth and how the surface is made of land, water and moving plates."
                },
                {
                  "no": "02",
                  "topic": "Weathering",
                  "whatWeCover": "Observe how wind, rain, ice and temperature slowly break rock into smaller pieces, using simple models."
                },
                {
                  "no": "03",
                  "topic": "Erosion and Deposition",
                  "whatWeCover": "Investigate how water and wind carry soil and sand away, and how landforms such as dunes and deltas form."
                },
                {
                  "no": "04",
                  "topic": "Earthquakes",
                  "whatWeCover": "Learn what causes earthquakes, how they are measured and how the land changes after one."
                },
                {
                  "no": "05",
                  "topic": "Volcanoes",
                  "whatWeCover": "Explore how volcanoes erupt and the landforms they build, including the volcanic history of parts of Australia."
                },
                {
                  "no": "06",
                  "topic": "Rocks and Soil",
                  "whatWeCover": "Sort rocks and soils by their properties and describe how they form and why they matter to farming."
                },
                {
                  "no": "07",
                  "topic": "Natural Disasters in Australia",
                  "whatWeCover": "Compare how floods, cyclones and bushfires change the land, and how communities prepare and respond."
                },
                {
                  "no": "08",
                  "topic": "Landforms and Changing Coastlines",
                  "whatWeCover": "Study how beaches, gorges and cliffs are shaped over time, using Australian landmarks as examples."
                },
                {
                  "no": "09",
                  "topic": "First Nations Knowledge of Country",
                  "whatWeCover": "Hear how First Nations Peoples have observed and cared for the land over thousands of years, and what that teaches about change."
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
                  "topic": "Contact and Non-Contact Forces",
                  "whatWeCover": "Sort forces into those that need touching and those that act at a distance, with examples from play and sport."
                },
                {
                  "no": "02",
                  "topic": "Gravity and Falling Objects",
                  "whatWeCover": "Investigate how gravity pulls objects to Earth, and test whether shape and mass change how fast things fall."
                },
                {
                  "no": "03",
                  "topic": "Friction",
                  "whatWeCover": "Compare how different surfaces slow a moving object, and design a test using ramps, shoes or toy cars."
                },
                {
                  "no": "04",
                  "topic": "Magnetism",
                  "whatWeCover": "Find which materials a magnet attracts, and explore how magnetic force acts through air, paper and water."
                },
                {
                  "no": "05",
                  "topic": "Magnets: Attract and Repel",
                  "whatWeCover": "Explore magnetic poles, predict how two magnets will interact and make a simple magnetic game."
                },
                {
                  "no": "06",
                  "topic": "Forces in Sport and Play",
                  "whatWeCover": "Explain forces in cricket, swimming and cycling, linking pushes, pulls, gravity and friction to movement."
                },
                {
                  "no": "07",
                  "topic": "Measuring Forces",
                  "whatWeCover": "Use a spring scale to measure forces, record results in tables and graphs and describe the pattern."
                },
                {
                  "no": "08",
                  "topic": "Planning a Force Investigation",
                  "whatWeCover": "Choose a question, control variables, collect results and decide whether the evidence supports the prediction."
                },
                {
                  "no": "09",
                  "topic": "Science Showcase",
                  "whatWeCover": "Present an investigation as a poster or short talk, using science words and evidence to share conclusions."
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
      "text": "Text",
      "buttonText": "Experience our structured approach first hand. Your child's first lesson is completely free, with no credit card needed."
    },
    "lessonStructure": {
      "eyebrow": "Every One-Hour Lesson Follows a Proven Structure",
      "h2": "What a Typical Lesson Looks Like",
      "steps": [
        {
          "stepNum": "1",
          "title": "Warm-up",
          "duration": "5 min",
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "NEXT YEAR",
          "title": "Year 5 Tutoring",
          "text": "Build on Year 4 with Year 5 Maths, English and Science, 40 live lessons per subject mapped to the Australian Curriculum.",
          "buttonText": "View Year 5",
          "href": "/subjects/year-5"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  },
  "year-5": {
    "yearNum": 5,
    "yearId": "year-5",
    "meta": {
      "title": "Year 5 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 5 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-5"
    },
    "hero": {
      "h1": "Year 5 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum for Year 5 and NAPLAN. 1-on-1 or small group with qualified tutors.",
      "primaryBtn": "Try a Free Year 5 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 5 is a big step up, with NAPLAN in Term 1 and more demanding fractions, decimals, writing and science. Our tutors build confidence so your child can enjoy Year 5.",
      "keyTopics": {
        "maths": "place value, fractions, decimals, area and angles.",
        "english": "persuasive and narrative writing, grammar and spelling.",
        "science": "adaptations, states of matter and light."
      },
      "parentTip": "Ask your child to explain one thing they learnt each week, such as how they solved a fraction problem. Teaching it back builds strong recall."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 5, Your Child Will...",
      "items": [
        "Calculate with larger whole numbers, fractions and decimals accurately",
        "Measure area, perimeter, volume and angles and solve real problems",
        "Write clear persuasive and narrative texts with correct punctuation",
        "Analyse texts and use evidence to support opinions confidently",
        "Plan fair tests and record results using scientific language",
        "Explain adaptations, states of matter and how light behaves"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 5 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-5/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Comprehension: Finding Evidence",
                  "whatWeCover": "Read short texts and answer literal and inferential questions, using evidence from the text to support each answer."
                },
                {
                  "no": "02",
                  "topic": "Spelling Patterns and Rules",
                  "whatWeCover": "Learn common spelling rules for suffixes, prefixes and tricky letter patterns, and use them to spell NAPLAN style words."
                },
                {
                  "no": "03",
                  "topic": "Punctuation Essentials",
                  "whatWeCover": "Use capital letters, commas in lists and clauses, apostrophes and speech marks accurately in sentences and short texts."
                },
                {
                  "no": "04",
                  "topic": "Sentence Types and Clauses",
                  "whatWeCover": "Build simple, compound and complex sentences with conjunctions, and spot the main clause in each one."
                },
                {
                  "no": "05",
                  "topic": "Parts of Speech",
                  "whatWeCover": "Identify nouns, verbs, adjectives and adverbs, and expand noun groups to add detail to writing."
                },
                {
                  "no": "06",
                  "topic": "Persuasive Writing for NAPLAN",
                  "whatWeCover": "Plan and write a persuasive text with a clear position, strong reasons and a firm conclusion, within a set time."
                },
                {
                  "no": "07",
                  "topic": "Narrative Writing Structure",
                  "whatWeCover": "Plan a narrative with a clear orientation, complication and resolution, and build character and setting with vivid description."
                },
                {
                  "no": "08",
                  "topic": "Editing and Proofreading",
                  "whatWeCover": "Check writing for spelling, punctuation and grammar errors, and improve word choice and sentence flow."
                },
                {
                  "no": "09",
                  "topic": "Language Conventions Practice",
                  "whatWeCover": "Work through NAPLAN style conventions questions on spelling, grammar and punctuation, and learn quick checking strategies."
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
                  "topic": "Novel Study: Characters and Plot",
                  "whatWeCover": "Read a class novel suitable for Year 5 and explore how characters change and how plot events build the story."
                },
                {
                  "no": "02",
                  "topic": "Figurative Language",
                  "whatWeCover": "Spot and use similes, metaphors, personification and alliteration, and explain the effect they have on a reader."
                },
                {
                  "no": "03",
                  "topic": "Poetry: Rhyme, Rhythm and Imagery",
                  "whatWeCover": "Read and write poems that use rhyme, rhythm and imagery, including bush ballads and free verse about Australian places."
                },
                {
                  "no": "04",
                  "topic": "Aboriginal and Torres Strait Islander Stories",
                  "whatWeCover": "Read stories and picture books by First Nations authors and discuss the connection to Country and cultural perspectives."
                },
                {
                  "no": "05",
                  "topic": "Adverbials and Descriptive Language",
                  "whatWeCover": "Use adverbs and adverbial phrases to show when, where and how, and make writing more precise and engaging."
                },
                {
                  "no": "06",
                  "topic": "Paragraphs and Cohesion",
                  "whatWeCover": "Organise ideas into paragraphs with topic sentences, and link them using connectives and pronoun references."
                },
                {
                  "no": "07",
                  "topic": "Writing Imaginative Texts",
                  "whatWeCover": "Draft and edit a short imaginative story that uses setting, dialogue and figurative language with purpose."
                },
                {
                  "no": "08",
                  "topic": "Spelling: Prefixes, Suffixes and Word Origins",
                  "whatWeCover": "Explore how prefixes, suffixes and Latin and Greek roots shape word meaning, and apply them to spelling."
                },
                {
                  "no": "09",
                  "topic": "Reading Fluency and Expression",
                  "whatWeCover": "Practise reading aloud with accuracy, pace and expression, and discuss how tone changes the meaning of a text."
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
                  "topic": "Information Reports",
                  "whatWeCover": "Research a topic and write an information report with a clear structure, headings, facts and technical vocabulary."
                },
                {
                  "no": "02",
                  "topic": "Reading Non-Fiction Texts",
                  "whatWeCover": "Use headings, captions, diagrams and glossaries to find information, and summarise the main ideas of a text."
                },
                {
                  "no": "03",
                  "topic": "Author's Purpose and Point of View",
                  "whatWeCover": "Work out why an author wrote a text, and how word choice and images shape the reader's view."
                },
                {
                  "no": "04",
                  "topic": "Persuasive Techniques",
                  "whatWeCover": "Identify emotive language, rhetorical questions and modality in advertisements and opinion pieces, and use them in your own writing."
                },
                {
                  "no": "05",
                  "topic": "Writing a Persuasive Text",
                  "whatWeCover": "Plan, write and edit a persuasive text on a school or community issue, such as saving water in drought."
                },
                {
                  "no": "06",
                  "topic": "Note-Taking and Summarising",
                  "whatWeCover": "Take notes from texts in your own words, and turn them into a short summary with the key ideas in order."
                },
                {
                  "no": "07",
                  "topic": "Multimodal Texts",
                  "whatWeCover": "Analyse how images, layout and sound work with words in posters, websites and short films."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary and Word Choice",
                  "whatWeCover": "Build a stronger vocabulary using synonyms, antonyms and context clues, and choose the best word for the audience."
                },
                {
                  "no": "09",
                  "topic": "Presenting and Speaking",
                  "whatWeCover": "Prepare and deliver a short oral presentation with clear structure, eye contact, volume and pace."
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
                  "topic": "Narrative Writing: Building Tension",
                  "whatWeCover": "Write an exciting narrative with rising action, a clear climax and a satisfying ending, using dialogue and sensory detail."
                },
                {
                  "no": "02",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare two texts on a similar theme, discussing how each handles characters, setting and message."
                },
                {
                  "no": "03",
                  "topic": "Themes and Messages in Literature",
                  "whatWeCover": "Identify themes in picture books, short stories and novels, and support ideas with examples from the text."
                },
                {
                  "no": "04",
                  "topic": "Writing a Response to Literature",
                  "whatWeCover": "Write a structured response that states an opinion about a text and backs it up with quotes and reasons."
                },
                {
                  "no": "05",
                  "topic": "Grammar Review: Tense and Agreement",
                  "whatWeCover": "Review verb tense, subject and verb agreement and pronouns, and fix errors in sentences and paragraphs."
                },
                {
                  "no": "06",
                  "topic": "Spelling Review: Tricky Words",
                  "whatWeCover": "Revise commonly misspelt words, homophones and silent letters, with strategies for checking spelling independently."
                },
                {
                  "no": "07",
                  "topic": "Creative Writing Workshop",
                  "whatWeCover": "Experiment with different forms, such as diary entries, letters and scripts, and share work with feedback from peers."
                },
                {
                  "no": "08",
                  "topic": "Reading and Responding to Media",
                  "whatWeCover": "Discuss how news reports, advertisements and websites inform and influence, and how to question what you read."
                },
                {
                  "no": "09",
                  "topic": "Reading for Pleasure and Goal Setting",
                  "whatWeCover": "Choose books by Australian authors that suit your interests, set reading goals and plan for the break."
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
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-5/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to Millions",
                  "whatWeCover": "Read, write and order whole numbers beyond 10 000, and explain what each digit is worth using place value charts."
                },
                {
                  "no": "02",
                  "topic": "Rounding and Estimating",
                  "whatWeCover": "Round numbers to the nearest ten, hundred and thousand, and estimate answers to check whether a result is sensible."
                },
                {
                  "no": "03",
                  "topic": "Mental Addition and Subtraction",
                  "whatWeCover": "Use partitioning, compensation and jump strategies to add and subtract larger numbers quickly in your head."
                },
                {
                  "no": "04",
                  "topic": "Written Addition and Subtraction",
                  "whatWeCover": "Add and subtract numbers with up to five digits using efficient written methods and check with the inverse operation."
                },
                {
                  "no": "05",
                  "topic": "Multiplication Facts and Strategies",
                  "whatWeCover": "Build fast recall of times tables and use doubling, halving and the distributive property to multiply mentally."
                },
                {
                  "no": "06",
                  "topic": "Multiplying by One and Two Digits",
                  "whatWeCover": "Multiply larger numbers using area models and the standard algorithm, such as 36 x 24 for a netball canteen order."
                },
                {
                  "no": "07",
                  "topic": "Division with Remainders",
                  "whatWeCover": "Divide by one-digit numbers, interpret remainders in context and decide whether to round up or down."
                },
                {
                  "no": "08",
                  "topic": "Factors and Multiples",
                  "whatWeCover": "Find factors and multiples, test divisibility rules and spot prime and composite numbers up to 100."
                },
                {
                  "no": "09",
                  "topic": "NAPLAN Number Problem Solving",
                  "whatWeCover": "Practise NAPLAN style number questions, including multi-step word problems and reading tables, with time-saving tips."
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
                  "topic": "Equivalent Fractions",
                  "whatWeCover": "Use fraction walls and number lines to show equivalent fractions and simplify them, such as 2/4 and 3/6 both equal to 1/2."
                },
                {
                  "no": "02",
                  "topic": "Comparing and Ordering Fractions",
                  "whatWeCover": "Compare fractions with related denominators like halves, quarters and eighths, and place them on number lines."
                },
                {
                  "no": "03",
                  "topic": "Adding and Subtracting Fractions",
                  "whatWeCover": "Add and subtract fractions with the same or related denominators, and record each step clearly."
                },
                {
                  "no": "04",
                  "topic": "Mixed Numbers and Improper Fractions",
                  "whatWeCover": "Convert between mixed numbers and improper fractions, and locate them on a number line."
                },
                {
                  "no": "05",
                  "topic": "Fractions of Quantities",
                  "whatWeCover": "Find unit fractions and other fractions of amounts, such as three quarters of 24 players in a cricket squad."
                },
                {
                  "no": "06",
                  "topic": "Decimals to Thousandths",
                  "whatWeCover": "Read, write and place decimals to thousandths on number lines, and link them to fractions with denominators of 10, 100 and 1000."
                },
                {
                  "no": "07",
                  "topic": "Comparing and Rounding Decimals",
                  "whatWeCover": "Compare and order decimals, and round them to the nearest whole number or tenth in measurement contexts."
                },
                {
                  "no": "08",
                  "topic": "Adding and Subtracting Decimals",
                  "whatWeCover": "Add and subtract decimals using place value and written methods, lining up the decimal point correctly."
                },
                {
                  "no": "09",
                  "topic": "Money, Rounding and Percentages",
                  "whatWeCover": "Work with Australian dollars, use rounding to the nearest five cents and link 10%, 25% and 50% to fractions in sale prices."
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
                  "topic": "Length and Perimeter",
                  "whatWeCover": "Measure and convert between millimetres, centimetres, metres and kilometres, and find the perimeter of shapes such as a school oval."
                },
                {
                  "no": "02",
                  "topic": "Area of Rectangles",
                  "whatWeCover": "Find the area of squares and rectangles in square centimetres and square metres using arrays and multiplication."
                },
                {
                  "no": "03",
                  "topic": "Volume and Capacity",
                  "whatWeCover": "Measure volume with cubic centimetre blocks and capacity in millilitres and litres, and compare the two."
                },
                {
                  "no": "04",
                  "topic": "Mass",
                  "whatWeCover": "Measure and compare mass in grams and kilograms, and solve problems that involve converting between units."
                },
                {
                  "no": "05",
                  "topic": "Time and Duration",
                  "whatWeCover": "Calculate elapsed time in hours and minutes, and solve problems about school days and holidays."
                },
                {
                  "no": "06",
                  "topic": "24-Hour Time and Timetables",
                  "whatWeCover": "Read and write 24-hour time and use bus, train and ferry timetables to plan a journey."
                },
                {
                  "no": "07",
                  "topic": "Temperature and Measurement Scales",
                  "whatWeCover": "Read scales on thermometers, jugs and measuring tapes, and choose the best unit for each measuring job."
                },
                {
                  "no": "08",
                  "topic": "Measurement Problem Solving",
                  "whatWeCover": "Solve multi-step problems that combine length, area, capacity, mass and time in real situations such as building a veggie garden."
                },
                {
                  "no": "09",
                  "topic": "Number Patterns and Rules",
                  "whatWeCover": "Describe and continue number patterns with whole numbers and fractions, and state the rule using words and symbols."
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
                  "topic": "2D Shapes and Their Properties",
                  "whatWeCover": "Classify triangles and quadrilaterals by sides, angles and symmetry, and explain why a shape belongs in each group."
                },
                {
                  "no": "02",
                  "topic": "3D Objects and Nets",
                  "whatWeCover": "Identify prisms and pyramids from their nets, and describe faces, edges and vertices of each object."
                },
                {
                  "no": "03",
                  "topic": "Angles",
                  "whatWeCover": "Estimate and measure angles with a protractor, and classify them as acute, right, obtuse, straight or reflex."
                },
                {
                  "no": "04",
                  "topic": "Transformations and Symmetry",
                  "whatWeCover": "Show translations, reflections and rotations on grids, and describe the symmetry in patterns and logos."
                },
                {
                  "no": "05",
                  "topic": "Coordinates, Maps and Compass Directions",
                  "whatWeCover": "Use the four quadrants and a grid reference on maps of Australian cities, and give directions using compass points."
                },
                {
                  "no": "06",
                  "topic": "Data Collection and Displays",
                  "whatWeCover": "Plan a survey, collect data and display it in tables, column graphs and dot plots, then describe what the data shows."
                },
                {
                  "no": "07",
                  "topic": "Reading and Interpreting Graphs",
                  "whatWeCover": "Read line graphs, tables and column graphs with care, and answer NAPLAN style questions about trends and comparisons."
                },
                {
                  "no": "08",
                  "topic": "Probability and Chance",
                  "whatWeCover": "Describe the chance of events with words and fractions, list outcomes and compare experimental results with predictions."
                },
                {
                  "no": "09",
                  "topic": "Number Sentences and Unknowns",
                  "whatWeCover": "Solve number sentences with an unknown, use the order of operations and check that both sides stay balanced."
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
          "href": "/subjects/year-5/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Working Like a Scientist",
                  "whatWeCover": "Ask testable questions, plan fair tests and learn the roles of variables so that investigations give reliable results."
                },
                {
                  "no": "02",
                  "topic": "Safety and Using Equipment",
                  "whatWeCover": "Use thermometers, measuring cylinders, scales and hand lenses safely, and record measurements accurately."
                },
                {
                  "no": "03",
                  "topic": "Observing and Recording Data",
                  "whatWeCover": "Record observations in tables, sketches and labelled diagrams, and organise results so patterns are easy to see."
                },
                {
                  "no": "04",
                  "topic": "Adaptations of Living Things",
                  "whatWeCover": "Explore how plants and animals have structural features and behaviours that help them survive in their habitats."
                },
                {
                  "no": "05",
                  "topic": "Australian Animal Adaptations",
                  "whatWeCover": "Study Australian animals such as the koala, kangaroo and thorny devil, and explain how their features suit their environments."
                },
                {
                  "no": "06",
                  "topic": "Plant Adaptations",
                  "whatWeCover": "Investigate how plants such as eucalypts, banksias and cacti cope with heat, fire and low rainfall."
                },
                {
                  "no": "07",
                  "topic": "Habitats and Food Webs",
                  "whatWeCover": "Map food chains and webs in an Australian habitat like a rockpool or woodland, and trace energy from the Sun."
                },
                {
                  "no": "08",
                  "topic": "Classifying Living Things",
                  "whatWeCover": "Group living things using observable features and simple classification keys, and justify each choice."
                },
                {
                  "no": "09",
                  "topic": "Science Skills Practice",
                  "whatWeCover": "Practise planning, measuring and drawing conclusions from a mini investigation, with a focus on clear scientific language."
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
                  "topic": "Properties of Solids",
                  "whatWeCover": "Compare solids by hardness, flexibility and strength, and relate these properties to how materials are used."
                },
                {
                  "no": "02",
                  "topic": "Properties of Liquids",
                  "whatWeCover": "Explore how liquids flow, take the shape of their container and differ in viscosity, with simple home experiments."
                },
                {
                  "no": "03",
                  "topic": "Properties of Gases",
                  "whatWeCover": "Show that gases take up space and can be compressed, using balloons, syringes and fizzing reactions."
                },
                {
                  "no": "04",
                  "topic": "Changes of State",
                  "whatWeCover": "Observe melting, freezing, evaporation and condensation, and explain them in terms of heating and cooling."
                },
                {
                  "no": "05",
                  "topic": "Mixtures and Solutions",
                  "whatWeCover": "Make mixtures and solutions, and test what dissolves in water and how temperature affects dissolving."
                },
                {
                  "no": "06",
                  "topic": "Separating Mixtures",
                  "whatWeCover": "Separate mixtures using sieving, filtering, evaporation and magnets, and choose the best method for each mixture."
                },
                {
                  "no": "07",
                  "topic": "Reversible and Irreversible Changes",
                  "whatWeCover": "Sort changes such as melting chocolate and baking damper into reversible and irreversible, and explain the difference."
                },
                {
                  "no": "08",
                  "topic": "Materials and Their Uses",
                  "whatWeCover": "Investigate why materials such as glass, metal and fabric are chosen for particular jobs, including in Australian homes."
                },
                {
                  "no": "09",
                  "topic": "Chemical Science Investigation",
                  "whatWeCover": "Plan and run a fair test on dissolving or states of matter, then present results in a table and a graph."
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
                  "topic": "Sources of Light",
                  "whatWeCover": "Identify natural and artificial light sources, and describe how light travels in straight lines from a source."
                },
                {
                  "no": "02",
                  "topic": "Shadows",
                  "whatWeCover": "Investigate how shadows form, and how the size and shape of a shadow change with the position of the light."
                },
                {
                  "no": "03",
                  "topic": "Reflection of Light",
                  "whatWeCover": "Use mirrors to explore how light reflects, and measure angles as light bounces off smooth surfaces."
                },
                {
                  "no": "04",
                  "topic": "Refraction of Light",
                  "whatWeCover": "Observe how light bends when it moves between air and water, using pencils in glasses and clear containers."
                },
                {
                  "no": "05",
                  "topic": "Absorption, Transparency and Colour",
                  "whatWeCover": "Classify materials as transparent, translucent or opaque, and explore how light is absorbed and why things appear coloured."
                },
                {
                  "no": "06",
                  "topic": "Light and the Rainbow",
                  "whatWeCover": "Split white light into colours using prisms and water, and link this to rainbows seen after a summer shower."
                },
                {
                  "no": "07",
                  "topic": "Sun Safety and Light",
                  "whatWeCover": "Connect sunlight to ultraviolet rays and the Slip, Slop, Slap, Seek and Slide message used across Australia."
                },
                {
                  "no": "08",
                  "topic": "Light in Everyday Technology",
                  "whatWeCover": "Explore how light is used in cameras, glasses, solar panels and torches, and how technology improves lives."
                },
                {
                  "no": "09",
                  "topic": "Light Investigation",
                  "whatWeCover": "Design a fair test on shadows or reflection, collect measurements and explain results using scientific ideas."
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
                  "topic": "Our Solar System",
                  "whatWeCover": "Describe the Sun as a star and the eight planets that orbit it, and compare their size, distance and features."
                },
                {
                  "no": "02",
                  "topic": "Earth's Rotation and Day and Night",
                  "whatWeCover": "Use a globe and torch to model how Earth's spin causes day and night, and why time differs across Australian states."
                },
                {
                  "no": "03",
                  "topic": "Earth's Orbit and the Seasons",
                  "whatWeCover": "Explain how Earth's orbit and tilt lead to the seasons, and compare summer and winter in Australia."
                },
                {
                  "no": "04",
                  "topic": "The Moon and Its Phases",
                  "whatWeCover": "Track the phases of the Moon, and explain what causes them using models and observations."
                },
                {
                  "no": "05",
                  "topic": "Earth's Surface and Landforms",
                  "whatWeCover": "Explore how weathering, erosion and floods change landforms, using examples such as Uluru and the Murray River."
                },
                {
                  "no": "06",
                  "topic": "Natural Events and Their Effects",
                  "whatWeCover": "Investigate bushfires, droughts and cyclones, and how these events affect living things and communities."
                },
                {
                  "no": "07",
                  "topic": "Day and Night Sky Observations",
                  "whatWeCover": "Observe the Southern Cross, the Moon and bright planets, and learn how First Nations Peoples have used the sky for thousands of years."
                },
                {
                  "no": "08",
                  "topic": "Space Exploration and Technology",
                  "whatWeCover": "Learn how telescopes, satellites and probes help us study space, and the role Australia plays in space science."
                },
                {
                  "no": "09",
                  "topic": "Year 5 Science Review Investigation",
                  "whatWeCover": "Pull the year's learning together in an open investigation, then present findings with clear evidence and conclusions."
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
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "NEXT YEAR",
          "title": "Year 6 Tutoring",
          "text": "Build on Year 5 with Year 6 Maths, English and Science, 40 live lessons per subject mapped to the Australian Curriculum.",
          "buttonText": "View Year 6",
          "href": "/subjects/year-6"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  },
  "year-6": {
    "yearNum": 6,
    "yearId": "year-6",
    "meta": {
      "title": "Year 6 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 6 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-6"
    },
    "hero": {
      "h1": "Year 6 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum. 1-on-1 or small group classes with qualified tutors to prepare for high school and selective tests.",
      "primaryBtn": "Try a Free Year 6 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 6 is the final year of primary school, and a big step towards high school. Our program builds confident number, writing and science skills, with Australian examples and selective and scholarship test practice.",
      "keyTopics": {
        "maths": "fractions, decimals, percentages, area, volume, probability.",
        "english": "persuasive and narrative writing, comprehension.",
        "science": "adaptations, chemical change, electricity, hazards."
      },
      "parentTip": "Ask your child to read the news aloud or plan a family budget once a week. It builds the reading, writing and maths skills that high school will need."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 6, Your Child Will...",
      "items": [
        "Calculate with fractions, decimals and percentages in real situations",
        "Solve problems involving area, volume, angles and the Cartesian plane",
        "Write persuasive and narrative texts with clear structure and detail",
        "Analyse texts for viewpoint, tone and meaning using evidence",
        "Explain how living things adapt, using Australian animals and plants",
        "Investigate chemical change, electricity and natural hazards with fair tests"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 6 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-6/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Comprehension: Finding and Inferring",
                  "whatWeCover": "Answer literal and inferential questions by finding evidence in the text, and explain what the author suggests."
                },
                {
                  "no": "02",
                  "topic": "Spelling Rules and Word Origins",
                  "whatWeCover": "Apply spelling rules and explore Greek and Latin roots and borrowed words, including words from Aboriginal languages."
                },
                {
                  "no": "03",
                  "topic": "Sentence Types and Clauses",
                  "whatWeCover": "Build simple, compound and complex sentences, and identify main and subordinate clauses in a text."
                },
                {
                  "no": "04",
                  "topic": "Parts of Speech and Noun Groups",
                  "whatWeCover": "Use nouns, verbs, adjectives and adverbs precisely, and expand noun groups to add detail to writing."
                },
                {
                  "no": "05",
                  "topic": "Punctuation for Meaning",
                  "whatWeCover": "Use commas, apostrophes, colons and speech marks correctly, and see how punctuation changes meaning."
                },
                {
                  "no": "06",
                  "topic": "Narrative Structure and Plot",
                  "whatWeCover": "Plan a story with orientation, complication and resolution, and use story mountains to shape a strong plot."
                },
                {
                  "no": "07",
                  "topic": "Characters, Settings and Mood",
                  "whatWeCover": "Create believable characters and settings, and use show, don't tell techniques to build mood."
                },
                {
                  "no": "08",
                  "topic": "Figurative Language",
                  "whatWeCover": "Spot and use similes, metaphors, personification and alliteration to make writing vivid and memorable."
                },
                {
                  "no": "09",
                  "topic": "Editing and Proofreading",
                  "whatWeCover": "Revise drafts for clarity, sentence variety and accuracy, using a checklist to polish final work."
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
                  "topic": "Persuasive Text Structure",
                  "whatWeCover": "Learn how a persuasive text opens with a clear position, builds arguments with evidence and ends with a strong conclusion."
                },
                {
                  "no": "02",
                  "topic": "Persuasive Language Devices",
                  "whatWeCover": "Identify and use emotive language, rhetorical questions, repetition and strong modality to influence an audience."
                },
                {
                  "no": "03",
                  "topic": "Fact, Opinion and Bias",
                  "whatWeCover": "Separate facts from opinions, and notice how word choices and selected evidence can show bias."
                },
                {
                  "no": "04",
                  "topic": "Cohesion: Connectives and Paragraphs",
                  "whatWeCover": "Link ideas using connectives, topic sentences and reference words so that writing flows logically."
                },
                {
                  "no": "05",
                  "topic": "Word Roots, Prefixes and Suffixes",
                  "whatWeCover": "Break words into parts to work out meanings, and use roots to spell and understand unfamiliar vocabulary."
                },
                {
                  "no": "06",
                  "topic": "Reading and Responding to Poetry",
                  "whatWeCover": "Explore rhythm, imagery and mood in poems by Australian poets, and write a personal response."
                },
                {
                  "no": "07",
                  "topic": "Writing a Persuasive Essay",
                  "whatWeCover": "Plan, draft and edit a persuasive essay on a topic such as school uniforms or screen time."
                },
                {
                  "no": "08",
                  "topic": "Debating and Speaking to Persuade",
                  "whatWeCover": "Build a short speech, use voice and body language well and respond to rebuttals in a class debate."
                },
                {
                  "no": "09",
                  "topic": "Comprehension: Author's Viewpoint",
                  "whatWeCover": "Work out an author's purpose and viewpoint, and explain how language choices position the reader."
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
                  "topic": "Research and Note Taking",
                  "whatWeCover": "Find reliable information from books and websites, and record key ideas in your own words using notes and mind maps."
                },
                {
                  "no": "02",
                  "topic": "Writing Information Reports",
                  "whatWeCover": "Write a well organised report with a classification, description and facts, using technical vocabulary."
                },
                {
                  "no": "03",
                  "topic": "Summarising Texts",
                  "whatWeCover": "Identify the main ideas of a longer text and write a clear summary that leaves out unnecessary detail."
                },
                {
                  "no": "04",
                  "topic": "Multimodal and Digital Texts",
                  "whatWeCover": "Analyse how images, layout, sound and words work together in websites, posters and short videos."
                },
                {
                  "no": "05",
                  "topic": "Australian and First Nations Literature",
                  "whatWeCover": "Read and discuss works by Australian authors and First Nations storytellers, and explore the ideas and perspectives they share."
                },
                {
                  "no": "06",
                  "topic": "Novel Study: Theme and Character",
                  "whatWeCover": "Track how characters change across a novel, and explain themes using evidence from the text."
                },
                {
                  "no": "07",
                  "topic": "Comparing Texts and Perspectives",
                  "whatWeCover": "Compare how two texts treat the same topic or theme, and explain why viewpoints differ."
                },
                {
                  "no": "08",
                  "topic": "Modality, Tone and Point of View",
                  "whatWeCover": "Recognise how modal words, tone and narrative viewpoint shape meaning, and use them in your own writing."
                },
                {
                  "no": "09",
                  "topic": "Selective Test Reading Practice",
                  "whatWeCover": "Practise timed reading passages and multiple-choice questions in the style of selective and scholarship tests."
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
                  "topic": "Timed Writing: Planning in Ten Minutes",
                  "whatWeCover": "Plan a response quickly, then write a structured piece under time pressure, as in selective and scholarship writing tasks."
                },
                {
                  "no": "02",
                  "topic": "Imaginative Writing Workshop",
                  "whatWeCover": "Write an original story from a stimulus, using strong openings, dialogue and an ending that lands."
                },
                {
                  "no": "03",
                  "topic": "Selective Test Reading and Reasoning",
                  "whatWeCover": "Tackle inference, vocabulary and reasoning questions across fiction and non fiction, and learn to eliminate wrong answers."
                },
                {
                  "no": "04",
                  "topic": "Language Conventions Review",
                  "whatWeCover": "Revise grammar, punctuation and spelling in the style used on standardised tests, with short targeted quizzes."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary and Word Relationships",
                  "whatWeCover": "Build an ambitious vocabulary using synonyms, antonyms, analogies and context clues."
                },
                {
                  "no": "06",
                  "topic": "Writing Analytical Paragraphs",
                  "whatWeCover": "Write a paragraph with a point, evidence and explanation, the structure used across high school subjects."
                },
                {
                  "no": "07",
                  "topic": "Presenting a Speech",
                  "whatWeCover": "Prepare and present a short speech, such as a Year 6 farewell, with clear structure and confident delivery."
                },
                {
                  "no": "08",
                  "topic": "Study and Note Taking for High School",
                  "whatWeCover": "Build habits for managing homework, organising folders and taking notes from lessons, ready for a new school."
                },
                {
                  "no": "09",
                  "topic": "Reading Longer and Harder Texts",
                  "whatWeCover": "Stay focused with longer chapters and complex texts, using annotation and questions to keep track of ideas."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break before Year 7."
                }
              ]
            }
          ]
        },
        {
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-6/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to Millions and Decimals",
                  "whatWeCover": "Read, write and order whole numbers beyond a million and decimals to thousandths, using place value charts and number lines."
                },
                {
                  "no": "02",
                  "topic": "Rounding and Estimating",
                  "whatWeCover": "Round large numbers and decimals to the nearest ten, hundred or whole number, and estimate answers before calculating."
                },
                {
                  "no": "03",
                  "topic": "Factors, Multiples and Primes",
                  "whatWeCover": "Find factors and multiples, identify prime and composite numbers, and use divisibility tests to speed up thinking."
                },
                {
                  "no": "04",
                  "topic": "Square and Triangular Numbers",
                  "whatWeCover": "Build square and triangular numbers with dot patterns and spot how they grow, linking them to simple number rules."
                },
                {
                  "no": "05",
                  "topic": "Adding and Subtracting Large Numbers",
                  "whatWeCover": "Use written and mental methods with multi-digit numbers, and check answers using estimation and inverse operations."
                },
                {
                  "no": "06",
                  "topic": "Multiplying Multi-Digit Numbers",
                  "whatWeCover": "Multiply by two-digit numbers using area models and the standard algorithm, and explain each step."
                },
                {
                  "no": "07",
                  "topic": "Dividing with Remainders",
                  "whatWeCover": "Divide larger numbers by one-digit divisors, and decide whether to round up, round down or write a fraction for a remainder."
                },
                {
                  "no": "08",
                  "topic": "Order of Operations",
                  "whatWeCover": "Solve multi-step calculations with brackets, and see why the order of operations gives everyone the same answer."
                },
                {
                  "no": "09",
                  "topic": "Negative Numbers and Integers",
                  "whatWeCover": "Place positive and negative numbers on a number line and solve problems such as temperatures in an Australian winter."
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
                  "topic": "Equivalent Fractions and Mixed Numbers",
                  "whatWeCover": "Find equivalent fractions, convert between improper fractions and mixed numbers, and compare them on a number line."
                },
                {
                  "no": "02",
                  "topic": "Adding and Subtracting Fractions",
                  "whatWeCover": "Add and subtract fractions with related denominators, such as halves, quarters and eighths, using diagrams and written methods."
                },
                {
                  "no": "03",
                  "topic": "Fractions of Quantities",
                  "whatWeCover": "Find unit fractions and other fractions of a quantity, such as three fifths of a 40 minute training session."
                },
                {
                  "no": "04",
                  "topic": "Decimals to Thousandths",
                  "whatWeCover": "Compare and order decimals, and connect tenths, hundredths and thousandths to measurements such as sprint times."
                },
                {
                  "no": "05",
                  "topic": "Operations with Decimals",
                  "whatWeCover": "Add, subtract and multiply decimals by whole numbers, and multiply and divide by 10, 100 and 1000."
                },
                {
                  "no": "06",
                  "topic": "Fractions, Decimals and Percentages",
                  "whatWeCover": "Move between fractions, decimals and percentages, and know common benchmarks such as 50%, 25% and 10%."
                },
                {
                  "no": "07",
                  "topic": "Percentages of a Quantity",
                  "whatWeCover": "Find 10%, 25%, 50% and 75% of amounts, and use them to solve discount and sports score problems."
                },
                {
                  "no": "08",
                  "topic": "Budgets and Financial Plans",
                  "whatWeCover": "Plan a budget using AUD, track income and expenses, and work out savings goals for a class event or camp."
                },
                {
                  "no": "09",
                  "topic": "Number Patterns and Rules",
                  "whatWeCover": "Describe and continue number patterns, find missing terms and write the rule in words and as a number sentence."
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
                  "topic": "Units of Length, Mass and Capacity",
                  "whatWeCover": "Choose and convert between millimetres, centimetres, metres, kilometres, grams, kilograms, millilitres and litres in everyday problems."
                },
                {
                  "no": "02",
                  "topic": "Perimeter and Area",
                  "whatWeCover": "Calculate the perimeter and area of rectangles and composite shapes, such as a netball court or a backyard."
                },
                {
                  "no": "03",
                  "topic": "Volume and Capacity",
                  "whatWeCover": "Find the volume of rectangular prisms by counting cubes, and link cubic centimetres to millilitres."
                },
                {
                  "no": "04",
                  "topic": "Time Zones and 24 Hour Time",
                  "whatWeCover": "Read 24 hour time and compare time zones across Australia, including the effect of daylight saving."
                },
                {
                  "no": "05",
                  "topic": "Timetables and Time Problems",
                  "whatWeCover": "Plan journeys using train and bus timetables, and solve multi-step problems involving elapsed time."
                },
                {
                  "no": "06",
                  "topic": "Angles",
                  "whatWeCover": "Measure and draw angles with a protractor, and find unknown angles on a straight line and at a point."
                },
                {
                  "no": "07",
                  "topic": "The Cartesian Plane",
                  "whatWeCover": "Plot and name points in all four quadrants, and describe the position of shapes using coordinates."
                },
                {
                  "no": "08",
                  "topic": "Transformations and Symmetry",
                  "whatWeCover": "Translate, reflect and rotate shapes on the Cartesian plane, and describe the transformation that has been used."
                },
                {
                  "no": "09",
                  "topic": "Nets, Prisms and Pyramids",
                  "whatWeCover": "Match 3D objects to their nets, and describe faces, edges and vertices of prisms and pyramids."
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
                  "topic": "Collecting and Organising Data",
                  "whatWeCover": "Plan a survey question, collect categorical and numerical data and organise results in tables and tally charts."
                },
                {
                  "no": "02",
                  "topic": "Reading and Comparing Data Displays",
                  "whatWeCover": "Interpret column graphs, dot plots and side by side graphs, and compare two data sets with confidence."
                },
                {
                  "no": "03",
                  "topic": "Misleading Graphs and Data in Media",
                  "whatWeCover": "Spot graphs with broken scales or missing labels, and question data used in news and advertising."
                },
                {
                  "no": "04",
                  "topic": "Probability on a Scale from 0 to 1",
                  "whatWeCover": "Describe the chance of events using fractions, decimals and percentages, and place them on a probability line."
                },
                {
                  "no": "05",
                  "topic": "Chance Experiments and Outcomes",
                  "whatWeCover": "List all possible outcomes with tree diagrams and tables, run experiments with dice and spinners and compare results to predictions."
                },
                {
                  "no": "06",
                  "topic": "Number Sentences and Unknowns",
                  "whatWeCover": "Solve number sentences with an unknown value, and use the equals sign to show that both sides balance."
                },
                {
                  "no": "07",
                  "topic": "Multi-Step Problem Solving",
                  "whatWeCover": "Break longer problems into steps, choose strategies such as drawing a diagram or working backwards, and check answers."
                },
                {
                  "no": "08",
                  "topic": "Selective Test Reasoning Skills",
                  "whatWeCover": "Practise timed, multiple-choice style questions in the style of selective and scholarship tests, building speed and accuracy."
                },
                {
                  "no": "09",
                  "topic": "Preparing for High School Maths",
                  "whatWeCover": "Preview Year 7 ideas such as algebra, ratios and integers, and build the study habits that high school maths needs."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break before Year 7."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/subjects/year-6/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Planning Fair Investigations",
                  "whatWeCover": "Write a testable question, identify variables and plan a fair test, then predict the results before trying it."
                },
                {
                  "no": "02",
                  "topic": "Classifying Living Things",
                  "whatWeCover": "Group living things using observable features and classification keys, from vertebrates and invertebrates to plants."
                },
                {
                  "no": "03",
                  "topic": "Structural Adaptations",
                  "whatWeCover": "Explore body features that help organisms survive, such as camouflage, webbed feet and waxy leaves."
                },
                {
                  "no": "04",
                  "topic": "Behavioural Adaptations",
                  "whatWeCover": "Investigate behaviours such as migration, hibernation and nocturnal activity, and how they help survival."
                },
                {
                  "no": "05",
                  "topic": "Australian Animals in Extreme Environments",
                  "whatWeCover": "See how animals such as the thorny devil, camel and quokka cope with heat, drought and scarce food."
                },
                {
                  "no": "06",
                  "topic": "Plant Adaptations",
                  "whatWeCover": "Compare how gum trees, banksias, cacti and mangroves are suited to their environments."
                },
                {
                  "no": "07",
                  "topic": "Food Webs and Ecosystems",
                  "whatWeCover": "Build food webs, name producers, consumers and decomposers, and predict what happens when one species changes."
                },
                {
                  "no": "08",
                  "topic": "Changing Environments and Survival",
                  "whatWeCover": "Examine how fire, drought and introduced species affect living things, and how some adaptations help populations cope."
                },
                {
                  "no": "09",
                  "topic": "Reporting an Investigation",
                  "whatWeCover": "Record results in tables and graphs, and write a clear conclusion that explains whether the evidence supports the prediction."
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
                  "topic": "States of Matter Review",
                  "whatWeCover": "Revise solids, liquids and gases, and use particle ideas to explain melting, freezing, evaporation and condensation."
                },
                {
                  "no": "02",
                  "topic": "Physical Changes",
                  "whatWeCover": "Investigate changes such as dissolving, cutting and melting, where the substance is the same and no new material forms."
                },
                {
                  "no": "03",
                  "topic": "Chemical Changes",
                  "whatWeCover": "Observe changes that form new substances, such as rusting, burning and baking, and describe what happened."
                },
                {
                  "no": "04",
                  "topic": "Signs of a Chemical Reaction",
                  "whatWeCover": "Look for evidence such as gas bubbles, colour change, heat or light, and use it to justify conclusions."
                },
                {
                  "no": "05",
                  "topic": "Reversible and Irreversible Changes",
                  "whatWeCover": "Sort changes into reversible and irreversible, and give reasons using everyday examples like ice and cooked eggs."
                },
                {
                  "no": "06",
                  "topic": "Mixtures and Separating Methods",
                  "whatWeCover": "Separate mixtures using filtering, sieving, evaporation and magnets, and choose the best method for each mixture."
                },
                {
                  "no": "07",
                  "topic": "Dissolving and Solutions",
                  "whatWeCover": "Test how temperature and stirring affect how fast a solid dissolves, and record results in a fair test."
                },
                {
                  "no": "08",
                  "topic": "Materials Chosen for a Purpose",
                  "whatWeCover": "Explain why materials are chosen for a job, such as recycled plastics, glass and metals in everyday objects."
                },
                {
                  "no": "09",
                  "topic": "Measuring and Graphing Results",
                  "whatWeCover": "Measure accurately, draw line and column graphs and describe patterns in the data from chemical science experiments."
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
                  "topic": "Forms of Energy",
                  "whatWeCover": "Identify light, heat, sound, kinetic, chemical and electrical energy in everyday life, from toasters to torches."
                },
                {
                  "no": "02",
                  "topic": "Energy Transfers and Transformations",
                  "whatWeCover": "Trace how energy moves and changes form, such as chemical energy in food becoming movement."
                },
                {
                  "no": "03",
                  "topic": "Simple Electric Circuits",
                  "whatWeCover": "Build circuits with cells, wires, globes and switches, and draw circuit diagrams using standard symbols."
                },
                {
                  "no": "04",
                  "topic": "Conductors and Insulators",
                  "whatWeCover": "Test which materials let electricity flow, and explain why wires are metal and coated in plastic."
                },
                {
                  "no": "05",
                  "topic": "Series and Parallel Circuits",
                  "whatWeCover": "Compare brightness and behaviour in series and parallel circuits, and predict what happens when a globe is removed."
                },
                {
                  "no": "06",
                  "topic": "Heat and Temperature",
                  "whatWeCover": "Explore how heat travels by conduction, convection and radiation, and why a metal spoon warms up in hot soup."
                },
                {
                  "no": "07",
                  "topic": "Renewable and Non Renewable Energy",
                  "whatWeCover": "Compare solar, wind, hydro, coal and gas as Australian energy sources, and discuss their benefits and limits."
                },
                {
                  "no": "08",
                  "topic": "Electricity at Home and Safety",
                  "whatWeCover": "Learn how electricity reaches Australian homes, how to use it safely and why saving energy matters."
                },
                {
                  "no": "09",
                  "topic": "Designing a Circuit Investigation",
                  "whatWeCover": "Design, build and test a circuit for a purpose, such as a model torch or alarm, and evaluate how well it works."
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
                  "topic": "Layers of the Earth",
                  "whatWeCover": "Describe the crust, mantle and core, and build a model to show what is inside our planet."
                },
                {
                  "no": "02",
                  "topic": "Plate Movement and Earthquakes",
                  "whatWeCover": "Explain how moving tectonic plates cause earthquakes, and why Australia has fewer major quakes than its neighbours."
                },
                {
                  "no": "03",
                  "topic": "Volcanoes and Eruptions",
                  "whatWeCover": "Compare how volcanoes form and erupt, and locate active volcanoes around the Pacific Ring of Fire."
                },
                {
                  "no": "04",
                  "topic": "Floods and Cyclones",
                  "whatWeCover": "Investigate how floods and tropical cyclones develop, and where they most often affect Queensland and northern Australia."
                },
                {
                  "no": "05",
                  "topic": "Bushfires and Land Management",
                  "whatWeCover": "Learn how bushfires start and spread, and how First Nations cultural burning cares for Country."
                },
                {
                  "no": "06",
                  "topic": "Measuring and Predicting Hazards",
                  "whatWeCover": "Read weather maps, rainfall data and warnings, and explain how scientists predict natural events."
                },
                {
                  "no": "07",
                  "topic": "Preparing for Natural Disasters",
                  "whatWeCover": "Create a family emergency plan and explain how communities prepare, respond and recover after a disaster."
                },
                {
                  "no": "08",
                  "topic": "Science Skills for High School",
                  "whatWeCover": "Preview Year 7 science skills, including using lab equipment safely, writing method steps and recording results."
                },
                {
                  "no": "09",
                  "topic": "Writing a Scientific Report",
                  "whatWeCover": "Write a report with an aim, method, results and conclusion, ready for high school science assessments."
                },
                {
                  "no": "10",
                  "topic": "Term 4 Revision and End-of-Year Test",
                  "whatWeCover": "Review the year, then sit an end-of-year test with feedback shared in the parent report and ideas for the break before Year 7."
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
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "NEXT YEAR",
          "title": "Year 7 Tutoring",
          "text": "Build on Year 6 with Year 7 Maths, English and Science, 40 live lessons per subject mapped to the Australian Curriculum.",
          "buttonText": "View Year 7",
          "href": "/subjects/year-7"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  },
  "year-7": {
    "yearNum": 7,
    "yearId": "year-7",
    "meta": {
      "title": "Year 7 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 7 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-7"
    },
    "hero": {
      "h1": "Year 7 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum. Taught in personalised 1-on-1 or small group classes by qualified tutors.",
      "primaryBtn": "Try a Free Year 7 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 7 is a big step, with a new school, more teachers and NAPLAN in Term 1. Our structured program builds Maths, English and Science skills step by step, with familiar Australian examples, from the school canteen to the bush, and steady support.",
      "keyTopics": {
        "maths": "integers, fractions, percentages, algebra, area and probability.",
        "english": "NAPLAN skills, novels, persuasive writing and media.",
        "science": "classification, ecosystems, matter, forces and space."
      },
      "parentTip": "Settling into secondary takes time. Check in about homework each week, practise NAPLAN-style questions in short bursts and celebrate effort, not just marks."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 7, Your Child Will...",
      "items": [
        "Calculate with integers, fractions, decimals and percentages with confidence",
        "Solve one-step and two-step equations and explain each step clearly",
        "Write structured persuasive and narrative texts that meet NAPLAN expectations",
        "Analyse texts, including Australian and First Nations works, using evidence",
        "Classify living things and explain how Australian ecosystems work",
        "Plan a fair test and report results using tables, graphs and conclusions"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 7 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-7/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading Comprehension Strategies",
                  "whatWeCover": "Use skimming, scanning and re-reading to find information, and practise NAPLAN-style reading questions on a range of texts."
                },
                {
                  "no": "02",
                  "topic": "Spelling Rules and Word Origins",
                  "whatWeCover": "Revise prefixes, suffixes, homophones and tricky Year 7 spellings, using word roots to work out unfamiliar words."
                },
                {
                  "no": "03",
                  "topic": "Punctuation for NAPLAN",
                  "whatWeCover": "Use commas, apostrophes, colons, semicolons and speech marks correctly, in the style of NAPLAN language conventions questions."
                },
                {
                  "no": "04",
                  "topic": "Parts of Speech",
                  "whatWeCover": "Identify nouns, verbs, adjectives, adverbs and pronouns, and choose them precisely to sharpen meaning."
                },
                {
                  "no": "05",
                  "topic": "Simple, Compound and Complex Sentences",
                  "whatWeCover": "Build sentences of different lengths and structures using conjunctions and clauses, and fix run-on sentences."
                },
                {
                  "no": "06",
                  "topic": "Paragraphs and Topic Sentences",
                  "whatWeCover": "Organise ideas into clear paragraphs with topic sentences, supporting detail and links between paragraphs."
                },
                {
                  "no": "07",
                  "topic": "NAPLAN Persuasive Writing",
                  "whatWeCover": "Plan and write a persuasive piece with a clear position, strong reasons and a conclusion, within a set time."
                },
                {
                  "no": "08",
                  "topic": "Planning a Narrative",
                  "whatWeCover": "Develop characters, setting and a problem in a story plan, and structure events with a clear orientation, complication and resolution."
                },
                {
                  "no": "09",
                  "topic": "Inference and Author's Message",
                  "whatWeCover": "Read between the lines to work out feelings, motives and the ideas an author wants readers to take away."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing practice, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Novel Study: Characters",
                  "whatWeCover": "Explore how characters are built through actions, dialogue and thoughts, and how they change across a text."
                },
                {
                  "no": "02",
                  "topic": "Setting, Plot and Theme",
                  "whatWeCover": "Analyse how setting and plot events develop big ideas, and support points with evidence from the text."
                },
                {
                  "no": "03",
                  "topic": "Figurative Language",
                  "whatWeCover": "Identify similes, metaphors, personification and alliteration, and explain the effect they have on readers."
                },
                {
                  "no": "04",
                  "topic": "Poetry and Imagery",
                  "whatWeCover": "Read and respond to poems, notice rhythm, rhyme and imagery, and write original poems on a chosen theme."
                },
                {
                  "no": "05",
                  "topic": "Narrative Writing: Building Tension",
                  "whatWeCover": "Use pacing, sentence length and sensory detail to build suspense and craft a strong climax and ending."
                },
                {
                  "no": "06",
                  "topic": "Point of View and Voice",
                  "whatWeCover": "Compare first person and third person narration and write the same scene from different perspectives."
                },
                {
                  "no": "07",
                  "topic": "Dialogue and Punctuation",
                  "whatWeCover": "Write natural dialogue with correct speech marks and use it to reveal character and move the story forward."
                },
                {
                  "no": "08",
                  "topic": "Australian and First Nations Literature",
                  "whatWeCover": "Read short stories and poems by Australian authors, including First Nations writers, and discuss the ideas and perspectives they share."
                },
                {
                  "no": "09",
                  "topic": "Writing a Character Description",
                  "whatWeCover": "Draft and edit a description that shows a character through detail, action and carefully chosen vocabulary."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing practice, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Persuasive Techniques",
                  "whatWeCover": "Spot emotive language, rhetorical questions, statistics and repetition, and explain how writers use them to influence readers."
                },
                {
                  "no": "02",
                  "topic": "Writing a Persuasive Text",
                  "whatWeCover": "Plan and write an argument with a thesis, supporting paragraphs and a firm conclusion on a topic such as school uniforms."
                },
                {
                  "no": "03",
                  "topic": "Media Texts and Advertising",
                  "whatWeCover": "Analyse how advertisements, posters and websites use images, layout and words to appeal to audiences."
                },
                {
                  "no": "04",
                  "topic": "Fact, Opinion and Bias",
                  "whatWeCover": "Separate fact from opinion, spot bias and weigh up how reliable different sources are."
                },
                {
                  "no": "05",
                  "topic": "Researching and Note-Taking",
                  "whatWeCover": "Use keywords to find information, take brief notes in your own words and record the sources you used."
                },
                {
                  "no": "06",
                  "topic": "Writing an Informative Text",
                  "whatWeCover": "Turn research into a clear report with headings, topic sentences and facts organised in a logical order."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary and Word Choice",
                  "whatWeCover": "Build a richer vocabulary using synonyms, connotation and context clues, and apply it to formal writing."
                },
                {
                  "no": "08",
                  "topic": "Speaking and Presenting",
                  "whatWeCover": "Prepare and deliver a short talk with clear structure, confident voice and body language, and respond to questions."
                },
                {
                  "no": "09",
                  "topic": "Listening and Group Discussion",
                  "whatWeCover": "Take part in group discussions, build on others' ideas and give respectful feedback on a spoken presentation."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with reading and writing practice, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Responding to Texts in Paragraphs",
                  "whatWeCover": "Write analytical paragraphs using a point, evidence and explanation structure, with short quotations from the text."
                },
                {
                  "no": "02",
                  "topic": "Short Stories and Themes",
                  "whatWeCover": "Compare how different short stories explore ideas such as friendship, courage and belonging."
                },
                {
                  "no": "03",
                  "topic": "Drama and Scripts",
                  "whatWeCover": "Read and perform short scripts, and explore how stage directions and dialogue show character and action."
                },
                {
                  "no": "04",
                  "topic": "Film and Multimodal Texts",
                  "whatWeCover": "Analyse how images, sound and camera angles work with words to create meaning in film and picture books."
                },
                {
                  "no": "05",
                  "topic": "Editing and Proofreading",
                  "whatWeCover": "Check drafts for spelling, punctuation and sentence errors, and improve clarity and flow using a checklist."
                },
                {
                  "no": "06",
                  "topic": "Reflective and Personal Writing",
                  "whatWeCover": "Write a reflection on a real experience, using a thoughtful voice to explain what was learned."
                },
                {
                  "no": "07",
                  "topic": "Reading Unseen Texts",
                  "whatWeCover": "Read new fiction and non-fiction passages with confidence, using strategies to tackle unfamiliar words and tricky questions."
                },
                {
                  "no": "08",
                  "topic": "Creative Writing Workshop",
                  "whatWeCover": "Write freely from a picture or story starter, then share, give feedback and polish the finished piece."
                },
                {
                  "no": "09",
                  "topic": "Year 8 Readiness",
                  "whatWeCover": "Preview the reading, writing and analysis skills Year 8 builds on, in a relaxed and confidence-building way."
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
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-7/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Integers and the Number Line",
                  "whatWeCover": "Place positive and negative whole numbers on a number line, compare them and use them in contexts such as temperatures and bank balances."
                },
                {
                  "no": "02",
                  "topic": "Adding and Subtracting Integers",
                  "whatWeCover": "Add and subtract positive and negative numbers using number lines and zero pairs, and explain why the rules work."
                },
                {
                  "no": "03",
                  "topic": "Multiplying and Dividing Integers",
                  "whatWeCover": "Multiply and divide integers, spot the sign rules and check answers using inverse operations and estimation."
                },
                {
                  "no": "04",
                  "topic": "Factors, Multiples and Primes",
                  "whatWeCover": "Find factors and multiples, identify prime and composite numbers and use factor trees to break numbers into primes."
                },
                {
                  "no": "05",
                  "topic": "Highest Common Factor and Lowest Common Multiple",
                  "whatWeCover": "Find the highest common factor and lowest common multiple of two numbers and use them to solve timetable and grouping problems."
                },
                {
                  "no": "06",
                  "topic": "Index Notation and Square Numbers",
                  "whatWeCover": "Write repeated multiplication using powers, work with square and cube numbers and find square roots of perfect squares."
                },
                {
                  "no": "07",
                  "topic": "Order of Operations",
                  "whatWeCover": "Apply brackets, indices, multiplication, division, addition and subtraction in the correct order, including with negative numbers."
                },
                {
                  "no": "08",
                  "topic": "NAPLAN Numeracy Skills",
                  "whatWeCover": "Practise NAPLAN-style numeracy questions on number and measurement, with strategies for reading carefully and managing time."
                },
                {
                  "no": "09",
                  "topic": "Number Word Problems",
                  "whatWeCover": "Turn worded problems into number sentences, choose the right operation and check that answers make sense in context."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Fractions on a Number Line",
                  "whatWeCover": "Place proper fractions, improper fractions and mixed numbers on a number line and compare their sizes."
                },
                {
                  "no": "02",
                  "topic": "Equivalent Fractions and Simplifying",
                  "whatWeCover": "Build equivalent fractions, simplify to lowest terms and order fractions with different denominators."
                },
                {
                  "no": "03",
                  "topic": "Adding and Subtracting Fractions",
                  "whatWeCover": "Add and subtract fractions with the same and different denominators, using common denominators and mixed numbers."
                },
                {
                  "no": "04",
                  "topic": "Multiplying and Dividing Fractions",
                  "whatWeCover": "Multiply fractions, find a fraction of a quantity and divide by a fraction using diagrams and reciprocals."
                },
                {
                  "no": "05",
                  "topic": "Decimals and Place Value",
                  "whatWeCover": "Read, write and order decimals to thousandths, and round them to a given number of decimal places."
                },
                {
                  "no": "06",
                  "topic": "Operations with Decimals",
                  "whatWeCover": "Add, subtract, multiply and divide decimals, including multiplying and dividing by 10, 100 and 1000."
                },
                {
                  "no": "07",
                  "topic": "Percentages",
                  "whatWeCover": "Understand percentages as parts of 100 and find simple percentages of quantities, such as 10%, 25% and 50% of an amount."
                },
                {
                  "no": "08",
                  "topic": "Fractions, Decimals and Percentages",
                  "whatWeCover": "Convert between fractions, decimals and percentages and use all three to compare quantities and scores."
                },
                {
                  "no": "09",
                  "topic": "Money, Discounts and GST",
                  "whatWeCover": "Solve Australian money problems with sale discounts, best buys and the 10% GST added to many prices."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Introducing Algebra and Variables",
                  "whatWeCover": "Use letters to stand for unknown numbers and describe simple number rules in words and symbols."
                },
                {
                  "no": "02",
                  "topic": "Algebraic Expressions",
                  "whatWeCover": "Write expressions from worded situations and identify terms, coefficients and constants."
                },
                {
                  "no": "03",
                  "topic": "Substituting into Expressions",
                  "whatWeCover": "Replace variables with numbers to evaluate expressions and formulas, such as the cost of a taxi ride."
                },
                {
                  "no": "04",
                  "topic": "Equivalent Expressions and Simplifying",
                  "whatWeCover": "Collect like terms and use the distributive law to write expressions in simpler, equivalent forms."
                },
                {
                  "no": "05",
                  "topic": "Solving One-Step Equations",
                  "whatWeCover": "Solve equations such as x + 7 = 15 and 3x = 21 using inverse operations and keep both sides balanced."
                },
                {
                  "no": "06",
                  "topic": "Solving Two-Step Equations",
                  "whatWeCover": "Solve equations that need two steps, check solutions by substitution and write equations from word problems."
                },
                {
                  "no": "07",
                  "topic": "Number Patterns and Rules",
                  "whatWeCover": "Continue and describe growing patterns, find the rule linking position and term, and graph simple patterns."
                },
                {
                  "no": "08",
                  "topic": "The Cartesian Plane",
                  "whatWeCover": "Plot and read points in all four quadrants, and plot simple linear relationships from tables of values."
                },
                {
                  "no": "09",
                  "topic": "Algebra Word Problems",
                  "whatWeCover": "Model everyday problems with equations, such as phone plans and fundraiser costs, then solve and interpret the results."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and games, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Perimeter and Area",
                  "whatWeCover": "Find the perimeter and area of rectangles and composite shapes, including the area of a school oval or backyard."
                },
                {
                  "no": "02",
                  "topic": "Area of Triangles and Parallelograms",
                  "whatWeCover": "Develop and use area formulas for triangles and parallelograms by rearranging and comparing shapes."
                },
                {
                  "no": "03",
                  "topic": "Volume and Capacity",
                  "whatWeCover": "Calculate the volume of rectangular prisms and convert between cubic centimetres, millilitres and litres."
                },
                {
                  "no": "04",
                  "topic": "Angles and Angle Relationships",
                  "whatWeCover": "Measure and classify angles, and use angles on a straight line, at a point and vertically opposite."
                },
                {
                  "no": "05",
                  "topic": "Parallel Lines and Transversals",
                  "whatWeCover": "Identify corresponding, alternate and co-interior angles and use them to find unknown angles."
                },
                {
                  "no": "06",
                  "topic": "Triangles and Quadrilaterals",
                  "whatWeCover": "Classify triangles and quadrilaterals by their properties and use angle sums to find missing angles."
                },
                {
                  "no": "07",
                  "topic": "Statistics: Mean, Median and Mode",
                  "whatWeCover": "Calculate and compare measures of centre, and read dot plots, stem-and-leaf plots and column graphs."
                },
                {
                  "no": "08",
                  "topic": "Probability and Chance",
                  "whatWeCover": "List outcomes, describe chance with fractions, decimals and percentages, and compare experimental results with theory."
                },
                {
                  "no": "09",
                  "topic": "Maths Investigations and Year 8 Readiness",
                  "whatWeCover": "Tackle open-ended problems that bring number, algebra, measurement and data together, and preview key Year 8 skills."
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
          "href": "/subjects/year-7/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Working Safely in the Lab",
                  "whatWeCover": "Learn safe practices for equipment, heat and chemicals, and how to read safety symbols and follow instructions."
                },
                {
                  "no": "02",
                  "topic": "Using Scientific Equipment",
                  "whatWeCover": "Use measuring cylinders, thermometers, balances and magnifiers accurately, and read scales with care."
                },
                {
                  "no": "03",
                  "topic": "Fair Tests and Variables",
                  "whatWeCover": "Identify independent, dependent and controlled variables, and plan a fair test that gives reliable results."
                },
                {
                  "no": "04",
                  "topic": "Tables and Graphs",
                  "whatWeCover": "Record results in tables and draw clear line and column graphs with labelled axes and units."
                },
                {
                  "no": "05",
                  "topic": "Classifying Living Things",
                  "whatWeCover": "Group organisms by observable features, and learn how scientists sort life into kingdoms and smaller groups."
                },
                {
                  "no": "06",
                  "topic": "Classification Keys",
                  "whatWeCover": "Build and use dichotomous keys to identify unfamiliar organisms, using local leaves, insects or shells as examples."
                },
                {
                  "no": "07",
                  "topic": "Vertebrates and Invertebrates",
                  "whatWeCover": "Compare vertebrate groups and invertebrates, and explain the features that place an animal in each group."
                },
                {
                  "no": "08",
                  "topic": "Australian Native Species",
                  "whatWeCover": "Classify native animals and plants such as kangaroos, echidnas and eucalypts, and discuss why many are found only in Australia."
                },
                {
                  "no": "09",
                  "topic": "Reporting an Investigation",
                  "whatWeCover": "Write up an experiment with an aim, method, results and conclusion, and suggest ways to improve it."
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
                  "topic": "What Is an Ecosystem?",
                  "whatWeCover": "Describe the living and non-living parts of an ecosystem, and how they depend on each other."
                },
                {
                  "no": "02",
                  "topic": "Food Chains and Food Webs",
                  "whatWeCover": "Draw food chains and webs, and trace how energy flows from the Sun through producers and consumers."
                },
                {
                  "no": "03",
                  "topic": "Producers, Consumers and Decomposers",
                  "whatWeCover": "Explain the roles of each group, including how decomposers return nutrients to the soil."
                },
                {
                  "no": "04",
                  "topic": "Interactions Between Organisms",
                  "whatWeCover": "Compare predation, competition and symbiosis, using examples such as clownfish and anemones on the Great Barrier Reef."
                },
                {
                  "no": "05",
                  "topic": "Australian Ecosystems",
                  "whatWeCover": "Study the bush, desert, rainforest and coastal ecosystems, and the adaptations of the species that live there."
                },
                {
                  "no": "06",
                  "topic": "Introduced Species and Human Impact",
                  "whatWeCover": "Investigate how cane toads, rabbits and land clearing have changed Australian ecosystems and what can be done."
                },
                {
                  "no": "07",
                  "topic": "Bushfires and Recovery",
                  "whatWeCover": "Explore how native plants and animals recover after fire, and how First Nations cultural burning cares for Country."
                },
                {
                  "no": "08",
                  "topic": "Protecting Biodiversity",
                  "whatWeCover": "Discuss how conservation, national parks and community action help protect threatened species."
                },
                {
                  "no": "09",
                  "topic": "Ecosystem Investigation",
                  "whatWeCover": "Plan and run a fieldwork-style study of a local park or schoolyard, then record and present the findings."
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
                  "topic": "The Particle Model of Matter",
                  "whatWeCover": "Use the particle model to describe how particles are arranged and move in solids, liquids and gases."
                },
                {
                  "no": "02",
                  "topic": "States of Matter and Changes of State",
                  "whatWeCover": "Explain melting, freezing, evaporation and condensation using energy and particle movement."
                },
                {
                  "no": "03",
                  "topic": "Pure Substances and Mixtures",
                  "whatWeCover": "Tell pure substances from mixtures, and sort everyday materials into heterogeneous and homogeneous mixtures."
                },
                {
                  "no": "04",
                  "topic": "Solutions and Solubility",
                  "whatWeCover": "Describe solutes, solvents and solutions, and test how temperature and stirring affect dissolving."
                },
                {
                  "no": "05",
                  "topic": "Filtering and Sieving",
                  "whatWeCover": "Separate mixtures such as sand and water using sieves, filters and magnets, and explain why each method works."
                },
                {
                  "no": "06",
                  "topic": "Evaporation and Distillation",
                  "whatWeCover": "Separate dissolved solids and liquids using evaporation and distillation, and connect them to salt harvesting and clean water."
                },
                {
                  "no": "07",
                  "topic": "Chromatography",
                  "whatWeCover": "Separate the coloured parts of inks and dyes using paper chromatography and interpret the results."
                },
                {
                  "no": "08",
                  "topic": "Water Treatment in Australia",
                  "whatWeCover": "Follow the steps that make water safe to drink, and explore how Australia manages scarce water supplies."
                },
                {
                  "no": "09",
                  "topic": "Physical and Chemical Changes",
                  "whatWeCover": "Compare changes that can be reversed with those that form new substances, using clear signs of a chemical change."
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
                  "topic": "The Sun, Earth and Moon System",
                  "whatWeCover": "Model the relative positions and movements of the Sun, Earth and Moon, and describe how they interact."
                },
                {
                  "no": "02",
                  "topic": "Day, Night and Seasons",
                  "whatWeCover": "Explain day and night from Earth's rotation, and seasons from its tilt and orbit, including seasons in the Southern Hemisphere."
                },
                {
                  "no": "03",
                  "topic": "Moon Phases and Eclipses",
                  "whatWeCover": "Sequence the phases of the Moon and explain solar and lunar eclipses using models."
                },
                {
                  "no": "04",
                  "topic": "Tides and Earth's Resources",
                  "whatWeCover": "Link the Moon to tides, and compare renewable and non-renewable resources such as solar, wind, coal and water."
                },
                {
                  "no": "05",
                  "topic": "Contact and Non-Contact Forces",
                  "whatWeCover": "Identify forces that need touch, such as friction, and forces that act at a distance, such as gravity and magnetism."
                },
                {
                  "no": "06",
                  "topic": "Balanced and Unbalanced Forces",
                  "whatWeCover": "Draw force diagrams and explain how balanced and unbalanced forces change the motion of objects."
                },
                {
                  "no": "07",
                  "topic": "Gravity and Friction",
                  "whatWeCover": "Investigate how mass, surfaces and slopes affect motion, such as a trolley rolling down a ramp."
                },
                {
                  "no": "08",
                  "topic": "Science Investigation Project",
                  "whatWeCover": "Design and carry out a full investigation, from question and hypothesis to results, conclusion and evaluation."
                },
                {
                  "no": "09",
                  "topic": "Science in Action",
                  "whatWeCover": "Apply the year's ideas to real Australian examples, from ecosystems and water to the Sun and forces."
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
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "NEXT YEAR",
          "title": "Year 8 Tutoring",
          "text": "Build on Year 7 with Year 8 Maths, English and Science, 40 live lessons per subject mapped to the Australian Curriculum.",
          "buttonText": "View Year 8",
          "href": "/subjects/year-8"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  },
  "year-8": {
    "yearNum": 8,
    "yearId": "year-8",
    "meta": {
      "title": "Year 8 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 8 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-8"
    },
    "hero": {
      "h1": "Year 8 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum. Personalised 1-on-1 or small group classes with qualified tutors build algebra and science reasoning for Year 9.",
      "primaryBtn": "Try a Free Year 8 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 8 is where maths becomes algebra, English moves to analysis and science gets more abstract. Our program builds confidence step by step with clear examples, from footy stats to bushfire science.",
      "keyTopics": {
        "maths": "integers, ratios, algebra, linear graphs, Pythagoras, probability.",
        "english": "persuasion, poetry, novel study, analysis.",
        "science": "cells, chemical reactions, energy, rocks."
      },
      "parentTip": "Ask your teen to explain one idea each week, like solving an equation or a cell diagram. Teaching it back shows us exactly where to help."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 8, Your Child Will...",
      "items": [
        "Solve linear equations and graph straight lines with confidence",
        "Apply ratios, rates and percentages to everyday money problems",
        "Write persuasive and analytical paragraphs backed by evidence",
        "Respond to novels and poems with clear, well supported ideas",
        "Explain how cells, body systems and ecosystems work together",
        "Plan a fair test and explain results using particle and energy models"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 8 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-8/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Narrative Structure and Plot",
                  "whatWeCover": "Examine how authors build a plot through orientation, complication and resolution, and map these features in a short story."
                },
                {
                  "no": "02",
                  "topic": "Character and Point of View",
                  "whatWeCover": "Analyse how characters are developed and how first and third person narration shapes what readers understand."
                },
                {
                  "no": "03",
                  "topic": "Setting, Mood and Atmosphere",
                  "whatWeCover": "Explore how descriptive language creates mood, using extracts that feature Australian landscapes and suburbs."
                },
                {
                  "no": "04",
                  "topic": "Paragraphs and Topic Sentences",
                  "whatWeCover": "Plan and write clear paragraphs with topic sentences, supporting detail and linking words that guide the reader."
                },
                {
                  "no": "05",
                  "topic": "Sentence Structure and Punctuation",
                  "whatWeCover": "Control simple, compound and complex sentences, and punctuate them with commas, semicolons and colons."
                },
                {
                  "no": "06",
                  "topic": "Spelling Strategies and Word Origins",
                  "whatWeCover": "Use prefixes, suffixes and word roots to spell and understand less familiar words, with regular dictation."
                },
                {
                  "no": "07",
                  "topic": "Reading Comprehension: Inference",
                  "whatWeCover": "Use evidence from the text to infer meaning, and explain answers with short, well chosen quotations."
                },
                {
                  "no": "08",
                  "topic": "Writing a Short Narrative",
                  "whatWeCover": "Plan, draft and polish a short story with a strong opening, tension and a purposeful ending."
                },
                {
                  "no": "09",
                  "topic": "Language of Description",
                  "whatWeCover": "Use precise verbs, noun groups and figurative language to make descriptive writing vivid and controlled."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Persuasive Techniques",
                  "whatWeCover": "Identify how writers use emotive language, rhetorical questions and evidence to influence an audience."
                },
                {
                  "no": "02",
                  "topic": "Planning a Persuasive Text",
                  "whatWeCover": "Choose a contention, gather arguments and organise an introduction, body paragraphs and conclusion."
                },
                {
                  "no": "03",
                  "topic": "Writing a Persuasive Essay",
                  "whatWeCover": "Draft and refine a persuasive essay on a youth issue, such as screen time or school uniforms."
                },
                {
                  "no": "04",
                  "topic": "Fact, Opinion and Bias",
                  "whatWeCover": "Separate fact from opinion, and recognise bias and missing viewpoints in news reports and advertisements."
                },
                {
                  "no": "05",
                  "topic": "Analysing Media and Advertising",
                  "whatWeCover": "Examine how images, headlines and layout shape messages in Australian media and online content."
                },
                {
                  "no": "06",
                  "topic": "Speaking: Debating and Presenting",
                  "whatWeCover": "Prepare and deliver a short speech or debate rebuttal with clear structure, volume and eye contact."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary: Tone, Connotation and Nuance",
                  "whatWeCover": "Choose words for their shades of meaning and explain how tone changes across texts."
                },
                {
                  "no": "08",
                  "topic": "Comprehension: Writer's Purpose and Audience",
                  "whatWeCover": "Explain who a text is for, why it was written and how language choices suit its purpose."
                },
                {
                  "no": "09",
                  "topic": "Editing and Proofreading",
                  "whatWeCover": "Revise drafts for clarity, accuracy and flow using a checklist, and give peers useful feedback."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry: Imagery and Sound Devices",
                  "whatWeCover": "Read poems closely, spotting imagery, alliteration, rhythm and rhyme, and explain their effect on the reader."
                },
                {
                  "no": "02",
                  "topic": "Figurative Language",
                  "whatWeCover": "Explain metaphor, simile, personification and symbolism, and use them with purpose in your own writing."
                },
                {
                  "no": "03",
                  "topic": "Australian Poetry and Verse",
                  "whatWeCover": "Explore poems by Australian poets, including First Nations voices, and discuss place, identity and belonging."
                },
                {
                  "no": "04",
                  "topic": "Introduction to the Class Novel",
                  "whatWeCover": "Read a young adult novel, track its themes and characters, and keep a reading journal of key moments."
                },
                {
                  "no": "05",
                  "topic": "Novel Study: Themes and Ideas",
                  "whatWeCover": "Explore big ideas such as courage, belonging and change, and support points with evidence from the novel."
                },
                {
                  "no": "06",
                  "topic": "Responding to Literature",
                  "whatWeCover": "Write a structured response to a text, with a clear thesis, evidence and explanation in every paragraph."
                },
                {
                  "no": "07",
                  "topic": "Texts from Different Cultures",
                  "whatWeCover": "Compare stories from different cultural perspectives and discuss how context shapes ideas and values."
                },
                {
                  "no": "08",
                  "topic": "Creative Writing: Poetry and Prose",
                  "whatWeCover": "Write a poem and a short prose piece, experimenting with voice, imagery and structure."
                },
                {
                  "no": "09",
                  "topic": "Grammar in Context",
                  "whatWeCover": "Check verb tense, subject and verb agreement and pronoun use, and fix common errors in sample paragraphs."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Analysing Visual and Multimodal Texts",
                  "whatWeCover": "Read posters, graphic novels and film stills, and explain how visual choices work with words to create meaning."
                },
                {
                  "no": "02",
                  "topic": "Film and Drama Techniques",
                  "whatWeCover": "Examine camera angles, music and script features, and how they build tension or emotion in short scenes."
                },
                {
                  "no": "03",
                  "topic": "Comparing Two Texts",
                  "whatWeCover": "Compare how two texts treat the same theme, using a simple structure and evidence from each."
                },
                {
                  "no": "04",
                  "topic": "Writing an Analytical Paragraph",
                  "whatWeCover": "Use a point, evidence and explanation structure to write analytical paragraphs about language and ideas."
                },
                {
                  "no": "05",
                  "topic": "Writing an Informative Report",
                  "whatWeCover": "Research a topic, organise findings under headings and write a clear, accurate informative text."
                },
                {
                  "no": "06",
                  "topic": "Writing for Different Audiences",
                  "whatWeCover": "Adapt tone, vocabulary and structure for a letter, a speech and a blog post on the same topic."
                },
                {
                  "no": "07",
                  "topic": "Reading Unseen Texts",
                  "whatWeCover": "Practise reading new fiction and non-fiction passages under time pressure and answering questions with evidence."
                },
                {
                  "no": "08",
                  "topic": "Language Conventions Review",
                  "whatWeCover": "Revise spelling, punctuation and grammar in the style of Year 9 NAPLAN language conventions questions."
                },
                {
                  "no": "09",
                  "topic": "Year 9 Preparation and Writing Workshop",
                  "whatWeCover": "Preview Year 9 English expectations, including NAPLAN-style writing tasks, and polish a portfolio piece."
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
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-8/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Integers and Directed Numbers",
                  "whatWeCover": "Add, subtract, multiply and divide positive and negative numbers, using number lines and contexts such as temperatures and bank balances."
                },
                {
                  "no": "02",
                  "topic": "Index Notation and Prime Factors",
                  "whatWeCover": "Write numbers in index form, find prime factors and use them to work out highest common factors and lowest common multiples."
                },
                {
                  "no": "03",
                  "topic": "Squares, Cubes and Roots",
                  "whatWeCover": "Evaluate squares, cubes and their roots, and estimate square roots between whole numbers without a calculator."
                },
                {
                  "no": "04",
                  "topic": "Fractions, Decimals and Percentages",
                  "whatWeCover": "Convert between fractions, decimals and percentages and compare them, using examples such as footy stats and shop discounts."
                },
                {
                  "no": "05",
                  "topic": "Operations with Fractions",
                  "whatWeCover": "Add, subtract, multiply and divide fractions and mixed numbers, and solve worded problems with clear working."
                },
                {
                  "no": "06",
                  "topic": "Ratios and Rates",
                  "whatWeCover": "Simplify ratios, share quantities in a given ratio and solve rate problems such as speed, fuel use and unit prices."
                },
                {
                  "no": "07",
                  "topic": "Percentage Applications",
                  "whatWeCover": "Calculate percentage increase and decrease, GST, discounts and simple profit and loss in everyday Australian situations."
                },
                {
                  "no": "08",
                  "topic": "Introduction to Algebra: Variables and Expressions",
                  "whatWeCover": "Use letters for unknowns, write expressions from words and substitute values to evaluate them accurately."
                },
                {
                  "no": "09",
                  "topic": "Simplifying Algebraic Expressions",
                  "whatWeCover": "Collect like terms and use the index laws with variables to simplify expressions in several steps."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Expanding and Factorising",
                  "whatWeCover": "Expand brackets using the distributive law and factorise by taking out common factors, checking with substitution."
                },
                {
                  "no": "02",
                  "topic": "Solving Linear Equations",
                  "whatWeCover": "Solve one-step and two-step equations by working backwards, and check each solution by substitution."
                },
                {
                  "no": "03",
                  "topic": "Equations with Brackets and Unknowns on Both Sides",
                  "whatWeCover": "Solve multi-step equations that involve brackets and variables on both sides, keeping the balance in every line."
                },
                {
                  "no": "04",
                  "topic": "Writing Equations from Word Problems",
                  "whatWeCover": "Turn worded situations into equations, solve them and interpret the answer in context."
                },
                {
                  "no": "05",
                  "topic": "The Cartesian Plane and Linear Relationships",
                  "whatWeCover": "Plot points in all four quadrants, build tables of values and graph straight lines from simple rules."
                },
                {
                  "no": "06",
                  "topic": "Gradient and Intercepts",
                  "whatWeCover": "Describe how steep a line is, find where it crosses the axes and link both ideas to real rates of change."
                },
                {
                  "no": "07",
                  "topic": "Number Patterns and Rules",
                  "whatWeCover": "Describe patterns with words and algebraic rules, and use them to predict later terms in a sequence."
                },
                {
                  "no": "08",
                  "topic": "Linear Relationships in Context",
                  "whatWeCover": "Model situations such as a taxi fare or a mobile plan with a rule, a table and a graph."
                },
                {
                  "no": "09",
                  "topic": "Inequalities and Number Properties",
                  "whatWeCover": "Read inequality statements, show solutions on a number line and revise the order of operations."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Perimeter and Area of Rectangles and Triangles",
                  "whatWeCover": "Calculate perimeter and area of rectangles, triangles and composite shapes, with attention to units."
                },
                {
                  "no": "02",
                  "topic": "Area of Parallelograms and Trapeziums",
                  "whatWeCover": "Develop and use area formulas for parallelograms and trapeziums, linking each one to rearranged shapes."
                },
                {
                  "no": "03",
                  "topic": "Circles: Circumference and Area",
                  "whatWeCover": "Explore pi, then calculate circumference and area of circles and parts of circles in practical settings."
                },
                {
                  "no": "04",
                  "topic": "Volume of Prisms",
                  "whatWeCover": "Find the volume of rectangular and triangular prisms, and link volume to capacity in millilitres and litres."
                },
                {
                  "no": "05",
                  "topic": "Surface Area of Prisms",
                  "whatWeCover": "Draw nets of prisms and add up the areas of the faces to find total surface area."
                },
                {
                  "no": "06",
                  "topic": "Angles and Parallel Lines",
                  "whatWeCover": "Identify corresponding, alternate and co-interior angles and use them to find unknown angles with reasons."
                },
                {
                  "no": "07",
                  "topic": "Properties of Triangles and Quadrilaterals",
                  "whatWeCover": "Use angle sums and side properties to find unknown angles and sort triangles and quadrilaterals."
                },
                {
                  "no": "08",
                  "topic": "Congruent Figures and Transformations",
                  "whatWeCover": "Decide when shapes are congruent, and describe translations, reflections and rotations on the Cartesian plane."
                },
                {
                  "no": "09",
                  "topic": "Constructions and Geometric Reasoning",
                  "whatWeCover": "Use rulers, compasses and angle measurers to construct shapes, and give simple reasons for geometric conclusions."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Pythagoras Theorem Introduction",
                  "whatWeCover": "Discover the relationship between the sides of a right-angled triangle and use it to find the hypotenuse."
                },
                {
                  "no": "02",
                  "topic": "Using Pythagoras to Solve Problems",
                  "whatWeCover": "Find missing shorter sides and apply the theorem to ladders, diagonals and distances on grids."
                },
                {
                  "no": "03",
                  "topic": "Collecting and Organising Data",
                  "whatWeCover": "Plan surveys, tell categorical and numerical data apart and organise results in tables and stem-and-leaf plots."
                },
                {
                  "no": "04",
                  "topic": "Mean, Median, Mode and Range",
                  "whatWeCover": "Calculate and compare measures of centre and spread, and decide which one best describes a data set."
                },
                {
                  "no": "05",
                  "topic": "Displaying and Interpreting Data",
                  "whatWeCover": "Draw and read histograms, dot plots and graphs, and comment on shape, outliers and misleading scales."
                },
                {
                  "no": "06",
                  "topic": "Sampling and Bias",
                  "whatWeCover": "Compare a sample with a population, spot sources of bias and explain how fair sampling improves results."
                },
                {
                  "no": "07",
                  "topic": "Probability and Sample Spaces",
                  "whatWeCover": "Describe chance using fractions and percentages, and list outcomes using tables and tree diagrams."
                },
                {
                  "no": "08",
                  "topic": "Complementary Events and Experiments",
                  "whatWeCover": "Use the complement rule, run chance experiments and compare experimental results with theoretical probability."
                },
                {
                  "no": "09",
                  "topic": "Problem Solving and Year 9 Preparation",
                  "whatWeCover": "Apply algebra, measurement and data skills in multi-step problems that preview Year 9 topics."
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
          "href": "/subjects/year-8/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Scientific Inquiry and Lab Safety",
                  "whatWeCover": "Plan safe investigations, identify variables and use equipment correctly, in line with school laboratory rules."
                },
                {
                  "no": "02",
                  "topic": "Cells: The Building Blocks of Life",
                  "whatWeCover": "Use microscopes to observe cells, and compare plant and animal cells and their main organelles."
                },
                {
                  "no": "03",
                  "topic": "From Cells to Organisms",
                  "whatWeCover": "Link cells to tissues, organs and body systems, and explain how each level of organisation supports life."
                },
                {
                  "no": "04",
                  "topic": "Body Systems: Digestive and Circulatory",
                  "whatWeCover": "Trace food through the digestive system and blood through the heart and vessels, and explain how they work together."
                },
                {
                  "no": "05",
                  "topic": "Body Systems: Respiratory and Excretory",
                  "whatWeCover": "Explain how oxygen enters the body, how waste is removed and how these systems depend on one another."
                },
                {
                  "no": "06",
                  "topic": "Classification and Keys",
                  "whatWeCover": "Group living things using features and build dichotomous keys, using Australian plants and animals as examples."
                },
                {
                  "no": "07",
                  "topic": "Ecosystems and Energy Flow",
                  "whatWeCover": "Describe food webs and how energy moves through an Australian ecosystem, from producers to decomposers."
                },
                {
                  "no": "08",
                  "topic": "Photosynthesis and Respiration",
                  "whatWeCover": "Write word equations for photosynthesis and cellular respiration and explain how they connect plants and animals."
                },
                {
                  "no": "09",
                  "topic": "Fair Tests and Data Tables",
                  "whatWeCover": "Design controlled experiments, record results in tables and draw simple conclusions from the data."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "States of Matter and Particle Theory",
                  "whatWeCover": "Use the particle model to explain solids, liquids and gases, and what happens during melting, boiling and freezing."
                },
                {
                  "no": "02",
                  "topic": "Physical and Chemical Changes",
                  "whatWeCover": "Distinguish physical from chemical changes using signs such as colour change, gas and heat."
                },
                {
                  "no": "03",
                  "topic": "Elements, Compounds and Mixtures",
                  "whatWeCover": "Sort substances into elements, compounds and mixtures, and use the periodic table to find key information."
                },
                {
                  "no": "04",
                  "topic": "Separating Mixtures",
                  "whatWeCover": "Choose filtration, evaporation, distillation or chromatography to separate mixtures, with examples from water treatment."
                },
                {
                  "no": "05",
                  "topic": "Acids, Bases and the pH Scale",
                  "whatWeCover": "Test common substances with indicators and place them on the pH scale, including household cleaners and foods."
                },
                {
                  "no": "06",
                  "topic": "Introduction to Chemical Reactions",
                  "whatWeCover": "Describe reactants and products, observe reactions and write word equations for simple examples."
                },
                {
                  "no": "07",
                  "topic": "Conservation of Mass",
                  "whatWeCover": "Show that mass is conserved in a reaction by weighing before and after, and explain why in particle terms."
                },
                {
                  "no": "08",
                  "topic": "Metals, Corrosion and Reactivity",
                  "whatWeCover": "Compare how metals react with water and acids, and explore rust, corrosion and ways to prevent it."
                },
                {
                  "no": "09",
                  "topic": "Chemistry in Everyday Life",
                  "whatWeCover": "Connect reactions to cooking, cleaning, fireworks and fuels, and discuss safe use of household chemicals."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Energy and Its Forms",
                  "whatWeCover": "Describe kinetic, potential, thermal, light, sound and chemical energy and trace transfers in everyday devices."
                },
                {
                  "no": "02",
                  "topic": "Energy Transfers and Transformations",
                  "whatWeCover": "Use flow diagrams to show how energy changes form, and discuss efficiency in appliances and vehicles."
                },
                {
                  "no": "03",
                  "topic": "Heat Transfer",
                  "whatWeCover": "Compare conduction, convection and radiation, and link them to insulation in Australian homes."
                },
                {
                  "no": "04",
                  "topic": "Renewable and Non-renewable Energy",
                  "whatWeCover": "Compare solar, wind, hydro, coal and gas as energy sources, with a focus on Australia's energy mix."
                },
                {
                  "no": "05",
                  "topic": "Forces and Motion",
                  "whatWeCover": "Describe balanced and unbalanced forces, friction, gravity and how they change movement."
                },
                {
                  "no": "06",
                  "topic": "Speed, Distance and Time",
                  "whatWeCover": "Calculate speed, read distance time graphs and solve problems involving cars, cyclists and runners."
                },
                {
                  "no": "07",
                  "topic": "Sound and Light",
                  "whatWeCover": "Explore how sound and light travel, reflect and refract, and how the eye and ear detect them."
                },
                {
                  "no": "08",
                  "topic": "Electrical Circuits",
                  "whatWeCover": "Build series and parallel circuits, draw circuit diagrams and explain current, voltage and resistance simply."
                },
                {
                  "no": "09",
                  "topic": "Physics Investigation",
                  "whatWeCover": "Plan and carry out a fair test on a force or energy question, then report on the results."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Rocks and the Rock Cycle",
                  "whatWeCover": "Classify igneous, sedimentary and metamorphic rocks and explain how they change over time."
                },
                {
                  "no": "02",
                  "topic": "Minerals, Fossils and Geological Time",
                  "whatWeCover": "Explore how fossils form and how Australian landscapes tell stories of deep time."
                },
                {
                  "no": "03",
                  "topic": "Plate Tectonics and Earth Structure",
                  "whatWeCover": "Describe the layers of Earth, plate movement and how earthquakes and volcanoes happen."
                },
                {
                  "no": "04",
                  "topic": "Earth's Resources and Mining",
                  "whatWeCover": "Discuss how Australia uses minerals and fuels, and weigh the benefits and impacts of resource use."
                },
                {
                  "no": "05",
                  "topic": "The Water Cycle and Catchments",
                  "whatWeCover": "Trace water through evaporation, condensation and runoff, and explore river catchments such as the Murray Darling Basin."
                },
                {
                  "no": "06",
                  "topic": "Weather, Climate and Natural Hazards",
                  "whatWeCover": "Compare weather with climate, and explain bushfires, floods and droughts in an Australian setting."
                },
                {
                  "no": "07",
                  "topic": "Earth, Sun and Moon",
                  "whatWeCover": "Explain day and night, seasons, the phases of the Moon and eclipses with models."
                },
                {
                  "no": "08",
                  "topic": "First Nations Knowledge and Science",
                  "whatWeCover": "Learn how First Nations Australians have used observation, fire management and seasonal calendars across millennia."
                },
                {
                  "no": "09",
                  "topic": "Science Communication and Year 9 Preparation",
                  "whatWeCover": "Present findings in a short report and preview Year 9 science, including key skills for senior pathways."
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
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "NEXT YEAR",
          "title": "Year 9 Tutoring",
          "text": "Build on Year 8 with Year 9 Maths, English and Science, 40 live lessons per subject mapped to the Australian Curriculum.",
          "buttonText": "View Year 9",
          "href": "/subjects/year-9"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  },
  "year-9": {
    "yearNum": 9,
    "yearId": "year-9",
    "meta": {
      "title": "Year 9 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 9 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-9"
    },
    "hero": {
      "h1": "Year 9 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum. Personalised 1-on-1 or small group classes with qualified tutors, built for the final NAPLAN year.",
      "primaryBtn": "Try a Free Year 9 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 9 is the final NAPLAN year and the bridge to Year 10 and senior subject choices. We build algebra, essay writing and scientific thinking through hands-on Australian examples, from fuel prices and footy stats to bushfire science.",
      "keyTopics": {
        "maths": "indices, linear equations, Pythagoras and trigonometry, data.",
        "english": "NAPLAN writing, novel study, persuasion.",
        "science": "atoms, reactions, body systems, energy."
      },
      "parentTip": "Book NAPLAN-style practice early in Term 1 so your teen builds exam stamina and confidence before the tests in March, and keep practising through the year."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 9, Your Child Will...",
      "items": [
        "Apply index laws and scientific notation to large and small numbers",
        "Solve linear equations and graph lines using gradient and intercepts",
        "Plan and write persuasive texts that meet NAPLAN marking criteria",
        "Write analytical paragraphs on novels, poems and media texts with evidence",
        "Explain atomic structure and balance word equations for reactions",
        "Describe how body systems work together to keep a person stable"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 9 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-9/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "NAPLAN Reading: Skills and Strategies",
                  "whatWeCover": "Practise skimming, scanning and close reading on NAPLAN-style passages, including multiple choice and short answer questions."
                },
                {
                  "no": "02",
                  "topic": "NAPLAN Writing: Persuasive Essays",
                  "whatWeCover": "Plan and write a persuasive text in 40 minutes, with a clear position, supporting reasons and a strong conclusion."
                },
                {
                  "no": "03",
                  "topic": "NAPLAN Language Conventions: Spelling",
                  "whatWeCover": "Master tricky spelling patterns, prefixes, suffixes, homophones and commonly confused words found in NAPLAN-style tests."
                },
                {
                  "no": "04",
                  "topic": "NAPLAN Language Conventions: Punctuation",
                  "whatWeCover": "Use commas, semicolons, colons, apostrophes and quotation marks correctly, and fix punctuation errors in short passages."
                },
                {
                  "no": "05",
                  "topic": "Grammar and Sentence Structure",
                  "whatWeCover": "Build simple, compound and complex sentences, and control tense, subject-verb agreement and clause order."
                },
                {
                  "no": "06",
                  "topic": "Persuasive Devices and Rhetoric",
                  "whatWeCover": "Identify and use emotive language, rhetorical questions, repetition, statistics and the rule of three to persuade."
                },
                {
                  "no": "07",
                  "topic": "Inference and Comprehension",
                  "whatWeCover": "Read between the lines to infer meaning, purpose and tone, and support each answer with evidence from the text."
                },
                {
                  "no": "08",
                  "topic": "Vocabulary and Word Choice",
                  "whatWeCover": "Build a richer vocabulary through word roots, connotation and context, and swap vague words for precise ones."
                },
                {
                  "no": "09",
                  "topic": "Planning and Editing Under Time",
                  "whatWeCover": "Practise quick planning, drafting and proofreading routines that suit timed writing in class and in tests."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Studying a Novel: Plot and Setting",
                  "whatWeCover": "Read a Year 9 novel and explore how plot, structure and setting build tension and meaning."
                },
                {
                  "no": "02",
                  "topic": "Characters and Relationships",
                  "whatWeCover": "Analyse how authors develop characters through dialogue, action and description, and how their choices drive the story."
                },
                {
                  "no": "03",
                  "topic": "Themes and Big Ideas",
                  "whatWeCover": "Identify the themes in a text, such as identity, justice or belonging, and discuss how the author presents them."
                },
                {
                  "no": "04",
                  "topic": "Literary Devices",
                  "whatWeCover": "Spot and explain the effect of metaphor, symbolism, irony, imagery and foreshadowing in prose and poetry."
                },
                {
                  "no": "05",
                  "topic": "Poetry Analysis",
                  "whatWeCover": "Read poems closely for voice, form, sound and imagery, including poems by Australian poets."
                },
                {
                  "no": "06",
                  "topic": "Introducing Shakespeare",
                  "whatWeCover": "Meet a Shakespeare scene, decode the language and explore how performance choices shape the audience's response."
                },
                {
                  "no": "07",
                  "topic": "Writing an Analytical Paragraph",
                  "whatWeCover": "Use the TEEL structure to write a paragraph with a topic sentence, evidence, explanation and link."
                },
                {
                  "no": "08",
                  "topic": "Writing a Text Response Essay",
                  "whatWeCover": "Plan and write an essay with an introduction, body paragraphs and conclusion that answers the question directly."
                },
                {
                  "no": "09",
                  "topic": "Imaginative Writing: Short Stories",
                  "whatWeCover": "Craft a short story with a strong opening, controlled pacing, vivid description and a satisfying ending."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Analysing Media Texts",
                  "whatWeCover": "Examine news articles, advertisements and online content to see how language and images shape an audience's view."
                },
                {
                  "no": "02",
                  "topic": "Argument and Point of View",
                  "whatWeCover": "Break down an argument into claim, reasons and evidence, and compare how writers present different viewpoints."
                },
                {
                  "no": "03",
                  "topic": "Bias, Fact and Opinion",
                  "whatWeCover": "Tell fact from opinion, spot bias and loaded language, and judge how reliable a source is."
                },
                {
                  "no": "04",
                  "topic": "Visual and Multimodal Texts",
                  "whatWeCover": "Read images, posters, film stills and graphics, and explain how colour, framing and layout create meaning."
                },
                {
                  "no": "05",
                  "topic": "Writing a Speech",
                  "whatWeCover": "Write and deliver a persuasive speech with a clear structure, strong opening and confident voice."
                },
                {
                  "no": "06",
                  "topic": "Research and Referencing",
                  "whatWeCover": "Find reliable sources, take notes in your own words and reference them correctly in a short report."
                },
                {
                  "no": "07",
                  "topic": "Writing a Feature Article",
                  "whatWeCover": "Plan and write a feature article on a current Australian issue, with a hook, balanced detail and a clear angle."
                },
                {
                  "no": "08",
                  "topic": "First Nations Voices and Australian Literature",
                  "whatWeCover": "Read poems, stories and speeches by First Nations and other Australian writers, and discuss the perspectives they share."
                },
                {
                  "no": "09",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare how two texts treat the same theme or issue, using linking words and evidence from both."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Editing and Refining Writing",
                  "whatWeCover": "Edit drafts for clarity, tone, structure and sentence variety, using feedback to lift the final version."
                },
                {
                  "no": "02",
                  "topic": "Creative Writing Workshop",
                  "whatWeCover": "Write from a picture, line of dialogue or news headline, experimenting with voice and point of view."
                },
                {
                  "no": "03",
                  "topic": "Writing About Unseen Texts",
                  "whatWeCover": "Respond to a new poem or extract by finding the main idea, devices and effect, even with no prior knowledge."
                },
                {
                  "no": "04",
                  "topic": "Comparative Text Response",
                  "whatWeCover": "Write a comparative response that weaves two texts together around a shared idea."
                },
                {
                  "no": "05",
                  "topic": "Speaking and Listening",
                  "whatWeCover": "Prepare and present an oral talk, then respond to questions and give useful feedback to others."
                },
                {
                  "no": "06",
                  "topic": "Writing in Exam Conditions",
                  "whatWeCover": "Practise planning, writing and checking a full response in a set time, with marking against clear criteria."
                },
                {
                  "no": "07",
                  "topic": "Reflecting on Your Writing Portfolio",
                  "whatWeCover": "Choose your strongest pieces, reflect on how your writing has grown and set goals for next year."
                },
                {
                  "no": "08",
                  "topic": "Year 10 English Readiness",
                  "whatWeCover": "Preview Year 10 expectations in text analysis and essay writing, and the English choices that follow in senior years."
                },
                {
                  "no": "09",
                  "topic": "Reading for Pleasure and Discussion",
                  "whatWeCover": "Share and recommend books, discuss what makes a text powerful, and build lifelong reading habits."
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
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-9/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Number Skills and NAPLAN Numeracy",
                  "whatWeCover": "Sharpen mental and written calculation, and practise NAPLAN-style numeracy questions with and without a calculator under timed conditions."
                },
                {
                  "no": "02",
                  "topic": "Index Laws",
                  "whatWeCover": "Use the index laws to multiply, divide and raise powers, and explain zero and negative indices with whole number bases."
                },
                {
                  "no": "03",
                  "topic": "Scientific Notation",
                  "whatWeCover": "Write very large and very small numbers in scientific notation, such as the distance to the Moon or the width of a hair."
                },
                {
                  "no": "04",
                  "topic": "Percentages and Percentage Change",
                  "whatWeCover": "Calculate percentage increase and decrease, discounts and GST, using Australian shopping and wage examples."
                },
                {
                  "no": "05",
                  "topic": "Ratios and Rates",
                  "whatWeCover": "Simplify and share quantities in a ratio, and solve rate problems such as fuel use, speed and unit prices."
                },
                {
                  "no": "06",
                  "topic": "Simple and Compound Interest",
                  "whatWeCover": "Compare simple and compound interest on savings and loans, and see why starting early matters with a bank account."
                },
                {
                  "no": "07",
                  "topic": "Algebraic Expressions and Expanding",
                  "whatWeCover": "Simplify expressions and expand brackets using the distributive law, including pairs of binomials."
                },
                {
                  "no": "08",
                  "topic": "Factorising",
                  "whatWeCover": "Factorise expressions by taking out common factors, and check answers by expanding again."
                },
                {
                  "no": "09",
                  "topic": "Solving Linear Equations",
                  "whatWeCover": "Solve equations with brackets and unknowns on both sides, and check each solution by substitution."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Equations with Fractions and Brackets",
                  "whatWeCover": "Solve multi-step linear equations that involve fractions, and write equations from word problems."
                },
                {
                  "no": "02",
                  "topic": "Rearranging Formulas",
                  "whatWeCover": "Change the subject of a formula, such as making r the subject of the area of a circle."
                },
                {
                  "no": "03",
                  "topic": "Linear Relationships and Tables of Values",
                  "whatWeCover": "Build tables of values from a rule and plot the points on the Cartesian plane to see a straight line."
                },
                {
                  "no": "04",
                  "topic": "Gradient",
                  "whatWeCover": "Find the gradient of a line from two points and link it to rise over run and steepness, such as a ramp or road."
                },
                {
                  "no": "05",
                  "topic": "Intercepts and y = mx + c",
                  "whatWeCover": "Read the gradient and y-intercept from an equation, and sketch lines quickly using intercepts."
                },
                {
                  "no": "06",
                  "topic": "Finding the Equation of a Line",
                  "whatWeCover": "Write the equation of a line from its graph, a gradient and a point, or two points."
                },
                {
                  "no": "07",
                  "topic": "Midpoint and Distance",
                  "whatWeCover": "Find the midpoint and length of a line segment on the Cartesian plane using coordinates."
                },
                {
                  "no": "08",
                  "topic": "Linear Inequalities and Modelling",
                  "whatWeCover": "Solve and graph simple inequalities on a number line, and model real situations such as phone plans with linear rules."
                },
                {
                  "no": "09",
                  "topic": "Real-World Linear Graphs",
                  "whatWeCover": "Interpret graphs of distance and time, taxi fares and savings plans, and explain what the gradient means."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Pythagoras' Theorem",
                  "whatWeCover": "Prove and use Pythagoras' theorem to find the hypotenuse and a shorter side of right-angled triangles."
                },
                {
                  "no": "02",
                  "topic": "Pythagoras Problems",
                  "whatWeCover": "Apply Pythagoras to practical problems, such as the length of a ladder against a wall or the diagonal of a sports field."
                },
                {
                  "no": "03",
                  "topic": "Trigonometric Ratios",
                  "whatWeCover": "Name the opposite, adjacent and hypotenuse sides and define sine, cosine and tangent in right-angled triangles."
                },
                {
                  "no": "04",
                  "topic": "Using Trigonometry to Find Sides",
                  "whatWeCover": "Use sin, cos and tan with a calculator to find unknown side lengths, rounding sensibly."
                },
                {
                  "no": "05",
                  "topic": "Using Trigonometry to Find Angles",
                  "whatWeCover": "Use inverse trigonometric functions to find unknown angles and check the answer makes sense."
                },
                {
                  "no": "06",
                  "topic": "Trigonometry in Context",
                  "whatWeCover": "Solve problems with angles of elevation and depression, such as the height of a tree or a cliff."
                },
                {
                  "no": "07",
                  "topic": "Surface Area of Prisms and Cylinders",
                  "whatWeCover": "Find the surface area of prisms and cylinders from nets, and use it for painting and wrapping problems."
                },
                {
                  "no": "08",
                  "topic": "Volume of Prisms and Cylinders",
                  "whatWeCover": "Calculate the volume of prisms and cylinders, and convert between cubic centimetres, millilitres and litres."
                },
                {
                  "no": "09",
                  "topic": "Similar Figures and Scale",
                  "whatWeCover": "Use scale factors in similar shapes to find missing lengths, and read scale drawings and maps."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Sampling and Collecting Data",
                  "whatWeCover": "Compare census and sample methods, spot bias in surveys, and plan questions that give fair data."
                },
                {
                  "no": "02",
                  "topic": "Displaying Data",
                  "whatWeCover": "Build and read histograms, stem-and-leaf plots, dot plots and scatter plots, and choose the best display."
                },
                {
                  "no": "03",
                  "topic": "Measures of Centre",
                  "whatWeCover": "Find the mean, median and mode of data sets, and decide which best describes the data when there are outliers."
                },
                {
                  "no": "04",
                  "topic": "Spread, Quartiles and Box Plots",
                  "whatWeCover": "Calculate the range and interquartile range, and draw and read box plots to describe how data is spread."
                },
                {
                  "no": "05",
                  "topic": "Comparing Data Sets",
                  "whatWeCover": "Compare two data sets using shape, centre and spread, such as rainfall in two Australian cities."
                },
                {
                  "no": "06",
                  "topic": "Probability Review",
                  "whatWeCover": "Describe chance with fractions, decimals and percentages, and compare experimental and theoretical probability."
                },
                {
                  "no": "07",
                  "topic": "Two-Step Probability",
                  "whatWeCover": "List outcomes of two-step events with tables and tree diagrams, and work out the probability of combined events."
                },
                {
                  "no": "08",
                  "topic": "Venn Diagrams and Two-Way Tables",
                  "whatWeCover": "Organise data with Venn diagrams and two-way tables, and use them to find the probability of and, or and not."
                },
                {
                  "no": "09",
                  "topic": "Year 10 Maths Readiness",
                  "whatWeCover": "Bring the year's algebra, measurement and data skills together, and preview the Year 10 topics that lead to senior maths choices."
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
          "href": "/subjects/year-9/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Working Like a Scientist",
                  "whatWeCover": "Plan investigations with a clear question and hypothesis, and follow safe lab practice with Australian school equipment."
                },
                {
                  "no": "02",
                  "topic": "Variables and Fair Tests",
                  "whatWeCover": "Identify independent, dependent and controlled variables, and design experiments that give reliable results."
                },
                {
                  "no": "03",
                  "topic": "Collecting and Graphing Data",
                  "whatWeCover": "Record results in tables, draw line and bar graphs with correct scales and labels, and spot trends and outliers."
                },
                {
                  "no": "04",
                  "topic": "Atoms and Atomic Structure",
                  "whatWeCover": "Describe the protons, neutrons and electrons in an atom, and how models of the atom have changed over time."
                },
                {
                  "no": "05",
                  "topic": "Electrons and Atomic Number",
                  "whatWeCover": "Use atomic number and mass number to work out particles in an atom, and arrange electrons in shells."
                },
                {
                  "no": "06",
                  "topic": "The Periodic Table",
                  "whatWeCover": "Explain how the periodic table is organised in groups and periods, and use it to predict an element's properties."
                },
                {
                  "no": "07",
                  "topic": "Elements, Compounds and Mixtures",
                  "whatWeCover": "Tell elements, compounds and mixtures apart, and read simple chemical formulas such as H2O and CO2."
                },
                {
                  "no": "08",
                  "topic": "Metals, Non-Metals and Properties",
                  "whatWeCover": "Compare the properties of metals and non-metals, including those used in Australian mining and everyday products."
                },
                {
                  "no": "09",
                  "topic": "Ionic and Covalent Bonding Basics",
                  "whatWeCover": "Explain at an introductory level how atoms share or transfer electrons to form compounds."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Physical and Chemical Changes",
                  "whatWeCover": "Compare changes that can be reversed with those that form new substances, using kitchen and lab examples."
                },
                {
                  "no": "02",
                  "topic": "Evidence of Chemical Reactions",
                  "whatWeCover": "Identify colour change, gas, precipitate and temperature change as signs that a chemical reaction has happened."
                },
                {
                  "no": "03",
                  "topic": "Reactants, Products and Word Equations",
                  "whatWeCover": "Write word equations for reactions and name the reactants and products in each."
                },
                {
                  "no": "04",
                  "topic": "Conservation of Mass",
                  "whatWeCover": "Show with experiments and balanced equations that atoms are rearranged but not lost in a reaction."
                },
                {
                  "no": "05",
                  "topic": "Acids and Bases",
                  "whatWeCover": "Test everyday substances with indicators and the pH scale, and describe how acids and bases behave."
                },
                {
                  "no": "06",
                  "topic": "Neutralisation Reactions",
                  "whatWeCover": "Investigate acid and base reactions that form salt and water, such as antacids and garden soil treatment."
                },
                {
                  "no": "07",
                  "topic": "Rates of Reaction",
                  "whatWeCover": "Test how temperature, concentration, surface area and catalysts change how fast a reaction happens."
                },
                {
                  "no": "08",
                  "topic": "Combustion, Rusting and Corrosion",
                  "whatWeCover": "Explore combustion and rusting in Australian settings, such as bushfires and corrosion near the coast."
                },
                {
                  "no": "09",
                  "topic": "Energy in Chemical Reactions",
                  "whatWeCover": "Distinguish exothermic from endothermic reactions and measure temperature changes in experiments."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Cells, Tissues and Organs",
                  "whatWeCover": "Link cells to tissues, organs and body systems, and explain why systems must work together."
                },
                {
                  "no": "02",
                  "topic": "The Nervous System",
                  "whatWeCover": "Trace how the brain, spinal cord and nerves carry messages, and compare voluntary actions with reflexes."
                },
                {
                  "no": "03",
                  "topic": "Senses and Responding to Stimuli",
                  "whatWeCover": "Explore how the eyes, ears and skin detect stimuli and how the body responds quickly."
                },
                {
                  "no": "04",
                  "topic": "The Endocrine System",
                  "whatWeCover": "Describe how hormones such as insulin and adrenaline travel in the blood and control body functions."
                },
                {
                  "no": "05",
                  "topic": "Homeostasis",
                  "whatWeCover": "Explain how the body keeps temperature, water and blood sugar stable through feedback, including in Australian heat."
                },
                {
                  "no": "06",
                  "topic": "Circulatory and Respiratory Systems",
                  "whatWeCover": "Follow blood and air through the body, and explain how the heart, lungs and blood exchange gases."
                },
                {
                  "no": "07",
                  "topic": "Digestive and Excretory Systems",
                  "whatWeCover": "Trace food through the digestive system and describe how the kidneys and skin remove wastes."
                },
                {
                  "no": "08",
                  "topic": "Disease and the Immune System",
                  "whatWeCover": "Compare infectious and non-infectious diseases, and explain how the immune system and vaccines protect us."
                },
                {
                  "no": "09",
                  "topic": "Health, Technology and Medicine",
                  "whatWeCover": "Look at how technology such as imaging, prosthetics and vaccines supports human health in Australia."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Energy Forms and Transformations",
                  "whatWeCover": "Identify forms of energy and follow how energy changes form in devices such as torches, toasters and solar panels."
                },
                {
                  "no": "02",
                  "topic": "Heat Transfer",
                  "whatWeCover": "Compare conduction, convection and radiation, and link each to home design in the Australian climate."
                },
                {
                  "no": "03",
                  "topic": "Energy Conservation and Efficiency",
                  "whatWeCover": "Use the law of conservation of energy and calculate efficiency using energy transfer diagrams."
                },
                {
                  "no": "04",
                  "topic": "Waves, Sound and Light",
                  "whatWeCover": "Describe waves using wavelength, frequency and amplitude, and compare how sound and light travel."
                },
                {
                  "no": "05",
                  "topic": "Plate Tectonics",
                  "whatWeCover": "Explain how Earth's plates move and how the Australian plate shifts north each year."
                },
                {
                  "no": "06",
                  "topic": "Earthquakes and Volcanoes",
                  "whatWeCover": "Link plate boundaries to earthquakes and volcanoes, and compare Australia's stable crust with the Pacific Ring of Fire."
                },
                {
                  "no": "07",
                  "topic": "Ecosystems and Energy Flow",
                  "whatWeCover": "Follow energy through food webs in Australian ecosystems, and explain how changes affect populations."
                },
                {
                  "no": "08",
                  "topic": "Carbon Cycle and Climate",
                  "whatWeCover": "Trace carbon through living things, the air and the oceans, and discuss human influence on Australian climate."
                },
                {
                  "no": "09",
                  "topic": "Science Investigation Project",
                  "whatWeCover": "Choose a question, plan and run a fair test, graph results and share a conclusion in a short scientific report."
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
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "NEXT YEAR",
          "title": "Year 10 Tutoring",
          "text": "Build on Year 9 with Year 10 Maths, English and Science, 40 live lessons per subject mapped to the Australian Curriculum.",
          "buttonText": "View Year 10",
          "href": "/subjects/year-10"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  },
  "year-10": {
    "yearNum": 10,
    "yearId": "year-10",
    "meta": {
      "title": "Year 10 Tutoring Australia | Maths, English, Science",
      "description": "Online Year 10 tutoring in Australia for Maths, English and Science. Live 1-on-1 or small group lessons mapped to the Australian Curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/subjects/year-10"
    },
    "hero": {
      "h1": "Year 10 Maths, English and Science Tutoring in Australia",
      "subheading": "Forty live online lessons per subject, mapped to the Australian Curriculum and senior secondary pathways. Personalised 1-on-1 or small group classes with qualified tutors.",
      "primaryBtn": "Try a Free Year 10 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Year 10 is the bridge to VCE, HSC, QCE, SACE and WACE. Our program builds the skills and confidence for senior study, with Australian examples from home loans and bushfire science to persuasive speeches.",
      "keyTopics": {
        "maths": "indices, compound interest, quadratics, trigonometry, probability.",
        "english": "text analysis, persuasive and creative writing.",
        "science": "genetics, reactions, motion, climate."
      },
      "parentTip": "Ask your teen which Year 11 subjects interest them now, so we can build the right prerequisites before subject selection closes."
    },
    "outcomes": {
      "eyebrow": "By Term 4, Your Child Will...",
      "h2": "By Term 4 of Year 10, Your Child Will...",
      "items": [
        "Solve quadratic equations and graph parabolas with confidence",
        "Apply trigonometry and compound interest to real Australian problems",
        "Write analytical essays with clear contentions and strong evidence",
        "Craft persuasive and imaginative pieces with a distinctive voice",
        "Explain genetics, evolution and chemical reactions using evidence",
        "Analyse motion, energy and climate data to draw sound conclusions"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to the Australian Curriculum.",
      "h2": "Year 10 Curriculum: Maths, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/subjects/year-10/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Reading and Responding to a Novel",
                  "whatWeCover": "Read a Year 10 novel closely, track plot and setting, and respond to the author's ideas in discussion and writing."
                },
                {
                  "no": "02",
                  "topic": "Characters, Relationships and Themes",
                  "whatWeCover": "Analyse how characters are built and how their choices develop central themes and messages."
                },
                {
                  "no": "03",
                  "topic": "Language Techniques and Their Effects",
                  "whatWeCover": "Identify metaphor, symbolism, tone and imagery, and explain how each one shapes meaning for the reader."
                },
                {
                  "no": "04",
                  "topic": "Writing Analytical Paragraphs",
                  "whatWeCover": "Build strong paragraphs with a topic sentence, evidence, explanation and link back to the question."
                },
                {
                  "no": "05",
                  "topic": "Planning a Text Response Essay",
                  "whatWeCover": "Unpack an essay question, form a clear contention and plan an introduction, body paragraphs and conclusion."
                },
                {
                  "no": "06",
                  "topic": "Sentence Structure and Punctuation",
                  "whatWeCover": "Use complex and compound sentences, semicolons, colons and parenthesis to write with control and clarity."
                },
                {
                  "no": "07",
                  "topic": "Vocabulary and Word Choice",
                  "whatWeCover": "Build a precise academic vocabulary and choose words that suit purpose, audience and tone."
                },
                {
                  "no": "08",
                  "topic": "Australian Voices in Literature",
                  "whatWeCover": "Read short texts by Australian authors, including First Nations voices, and discuss place, identity and belonging."
                },
                {
                  "no": "09",
                  "topic": "Editing for Accuracy and Style",
                  "whatWeCover": "Proofread drafts for spelling, grammar and flow, and refine writing to sound sharper and more mature."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Persuasive Writing",
                  "whatWeCover": "Write a convincing argument with a clear contention, strong evidence and persuasive techniques aimed at a defined audience."
                },
                {
                  "no": "02",
                  "topic": "Analysing Persuasive Texts",
                  "whatWeCover": "Break down opinion pieces, speeches and advertisements to see how language and structure persuade readers."
                },
                {
                  "no": "03",
                  "topic": "Media Texts and Bias",
                  "whatWeCover": "Compare news reports, social media posts and editorials, and judge reliability, perspective and bias."
                },
                {
                  "no": "04",
                  "topic": "Speeches and Oral Presentations",
                  "whatWeCover": "Plan and deliver a short speech with clear structure, strong voice and confident body language."
                },
                {
                  "no": "05",
                  "topic": "Shakespeare: Language and Context",
                  "whatWeCover": "Explore a Shakespeare play, its context and key speeches, and unpack how his language builds character and conflict."
                },
                {
                  "no": "06",
                  "topic": "Poetry Analysis",
                  "whatWeCover": "Read a range of poems, including Australian poetry, and write about form, imagery, sound and meaning."
                },
                {
                  "no": "07",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare how two texts treat the same idea, and write a balanced response using linking language."
                },
                {
                  "no": "08",
                  "topic": "Argument and Evidence in Writing",
                  "whatWeCover": "Choose, embed and explain evidence so every point supports the main contention."
                },
                {
                  "no": "09",
                  "topic": "Listening, Questioning and Discussion",
                  "whatWeCover": "Take part in structured discussions, ask probing questions and respond respectfully to different viewpoints."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Imaginative Writing: Narrative Voice",
                  "whatWeCover": "Experiment with first person, third person and shifting perspective to give a story a distinctive voice."
                },
                {
                  "no": "02",
                  "topic": "Imaginative Writing: Structure and Pacing",
                  "whatWeCover": "Control plot, tension and pacing through scene choices, flashbacks and carefully placed twists."
                },
                {
                  "no": "03",
                  "topic": "Descriptive and Reflective Writing",
                  "whatWeCover": "Use sensory detail, figurative language and personal insight to write vivid descriptive and reflective pieces."
                },
                {
                  "no": "04",
                  "topic": "Short Stories and Themes",
                  "whatWeCover": "Read short stories and analyse how setting, symbols and endings deliver a message."
                },
                {
                  "no": "05",
                  "topic": "Film and Visual Texts",
                  "whatWeCover": "Analyse camera angles, colour, sound and composition to show how filmmakers shape audience response."
                },
                {
                  "no": "06",
                  "topic": "Creative Responses to Texts",
                  "whatWeCover": "Write a creative piece inspired by a set text, with a short statement explaining the choices made."
                },
                {
                  "no": "07",
                  "topic": "Research and Evaluating Sources",
                  "whatWeCover": "Locate reliable sources, take notes, reference them correctly and avoid plagiarism in research tasks."
                },
                {
                  "no": "08",
                  "topic": "Writing a Research Report",
                  "whatWeCover": "Turn research into a structured, well-referenced report with headings, evidence and a clear conclusion."
                },
                {
                  "no": "09",
                  "topic": "Drafting, Feedback and Improving",
                  "whatWeCover": "Use tutor feedback to redraft and strengthen a piece, focusing on voice, structure and expression."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Timed Text Response Practice",
                  "whatWeCover": "Plan and write a full text response under timed conditions, with feedback against a marking rubric."
                },
                {
                  "no": "02",
                  "topic": "Unseen Texts and Analysis",
                  "whatWeCover": "Read unfamiliar passages and write quick, accurate analysis of language, tone and purpose."
                },
                {
                  "no": "03",
                  "topic": "Writing Under Time Pressure",
                  "whatWeCover": "Practise planning, drafting and checking in short bursts to build speed without losing quality."
                },
                {
                  "no": "04",
                  "topic": "Comparative and Extended Responses",
                  "whatWeCover": "Write longer responses that compare texts and sustain an argument across several paragraphs."
                },
                {
                  "no": "05",
                  "topic": "Senior English Pathways",
                  "whatWeCover": "Compare senior English options across VCE, HSC, QCE, SACE and WACE, including standard and advanced style courses."
                },
                {
                  "no": "06",
                  "topic": "Subject Selection Planning",
                  "whatWeCover": "Weigh interests, strengths and career goals, and map out English and other Year 11 subject choices."
                },
                {
                  "no": "07",
                  "topic": "Study Skills for Senior School",
                  "whatWeCover": "Build habits for note taking, planning, revising and managing assessment deadlines in Years 11 and 12."
                },
                {
                  "no": "08",
                  "topic": "Reflective Portfolio and Goal Setting",
                  "whatWeCover": "Collect best work from the year, reflect on progress and set clear writing and reading goals."
                },
                {
                  "no": "09",
                  "topic": "Presenting Ideas with Confidence",
                  "whatWeCover": "Deliver a polished final presentation on a topic of choice, using notes, visuals and a clear structure."
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
          "id": "maths",
          "label": "Maths",
          "href": "/subjects/year-10/maths",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Real Numbers, Indices and Scientific Notation",
                  "whatWeCover": "Apply index laws, including negative and fractional indices, and write very large and small numbers in scientific notation."
                },
                {
                  "no": "02",
                  "topic": "Surds and Irrational Numbers",
                  "whatWeCover": "Simplify and combine surds, and rationalise denominators, as an extension step towards senior Mathematics."
                },
                {
                  "no": "03",
                  "topic": "Financial Maths: Compound Interest",
                  "whatWeCover": "Calculate compound interest on savings and loans in dollars, and compare it with simple interest using spreadsheets."
                },
                {
                  "no": "04",
                  "topic": "Financial Maths: Depreciation, GST and Budgets",
                  "whatWeCover": "Work with depreciation, 10 per cent GST and household budgets, using realistic Australian prices and loan examples."
                },
                {
                  "no": "05",
                  "topic": "Expanding and Simplifying Expressions",
                  "whatWeCover": "Expand brackets and binomial products, and simplify algebraic expressions with confidence and accuracy."
                },
                {
                  "no": "06",
                  "topic": "Factorising Algebraic Expressions",
                  "whatWeCover": "Factorise using common factors, differences of two squares and quadratic trinomials, and check by expanding."
                },
                {
                  "no": "07",
                  "topic": "Solving Linear Equations and Inequalities",
                  "whatWeCover": "Solve multi-step equations and inequalities, including those with brackets and fractions, and show each line of working."
                },
                {
                  "no": "08",
                  "topic": "Simultaneous Linear Equations",
                  "whatWeCover": "Solve pairs of linear equations by substitution, elimination and graphing, then apply them to worded problems."
                },
                {
                  "no": "09",
                  "topic": "Algebraic Fractions and Rearranging Formulas",
                  "whatWeCover": "Add and simplify algebraic fractions and change the subject of a formula, skills needed for senior Maths Methods."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Linear Graphs and Gradient",
                  "whatWeCover": "Graph straight lines, find gradient and intercepts, and write equations in the forms y = mx + c and ax + by = c."
                },
                {
                  "no": "02",
                  "topic": "Coordinate Geometry",
                  "whatWeCover": "Use midpoint, distance and gradient to describe lines, and find parallel and perpendicular lines on the Cartesian plane."
                },
                {
                  "no": "03",
                  "topic": "Quadratic Equations: Factorising",
                  "whatWeCover": "Solve quadratic equations by factorising and the null factor law, and check solutions by substitution."
                },
                {
                  "no": "04",
                  "topic": "Quadratic Equations: Formula and Completing the Square",
                  "whatWeCover": "Solve quadratics with the quadratic formula and by completing the square when factorising is not possible."
                },
                {
                  "no": "05",
                  "topic": "Parabolas and Their Graphs",
                  "whatWeCover": "Sketch parabolas, find turning points and intercepts, and connect the graph to its equation."
                },
                {
                  "no": "06",
                  "topic": "Exponential Graphs and Growth",
                  "whatWeCover": "Graph exponential relationships and model growth and decay, such as population change or cooling."
                },
                {
                  "no": "07",
                  "topic": "Circles, Hyperbolas and Other Relationships",
                  "whatWeCover": "Recognise and sketch circles and hyperbolas, and describe how each equation shapes its graph."
                },
                {
                  "no": "08",
                  "topic": "Functions and Transformations",
                  "whatWeCover": "Use function notation, and describe how graphs shift, stretch and reflect when the equation changes."
                },
                {
                  "no": "09",
                  "topic": "Modelling with Algebra",
                  "whatWeCover": "Build equations from real situations such as phone plans and ticket pricing, then use graphs to predict and decide."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Surface Area of Composite Solids",
                  "whatWeCover": "Find the surface area of prisms, cylinders, pyramids, cones and spheres, and of solids made by joining shapes."
                },
                {
                  "no": "02",
                  "topic": "Volume of Composite Solids",
                  "whatWeCover": "Calculate volume of prisms, cylinders, cones, pyramids and spheres, including tanks, silos and swimming pools."
                },
                {
                  "no": "03",
                  "topic": "Pythagoras' Theorem",
                  "whatWeCover": "Use Pythagoras' theorem to find unknown sides in two and three dimensions and to solve practical problems."
                },
                {
                  "no": "04",
                  "topic": "Right-Angled Trigonometry",
                  "whatWeCover": "Use sine, cosine and tangent to find sides and angles in right-angled triangles, with a calculator in degree mode."
                },
                {
                  "no": "05",
                  "topic": "Trigonometry Applications",
                  "whatWeCover": "Solve problems with angles of elevation and depression and with bearings, such as a lookout over a bay."
                },
                {
                  "no": "06",
                  "topic": "Sine Rule, Cosine Rule and Area of Triangles",
                  "whatWeCover": "Extend trigonometry to non-right-angled triangles using the sine rule, cosine rule and area formula."
                },
                {
                  "no": "07",
                  "topic": "Similarity and Congruence",
                  "whatWeCover": "Prove triangles similar or congruent and use scale factors to find lengths, areas and volumes."
                },
                {
                  "no": "08",
                  "topic": "Circle Geometry",
                  "whatWeCover": "Apply angle properties of circles, including angles in a semicircle and in the same segment, to find unknown angles."
                },
                {
                  "no": "09",
                  "topic": "Geometric Reasoning and Proof",
                  "whatWeCover": "Write short logical proofs using angle rules, parallel lines and triangle properties, giving a reason for every step."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Univariate Data and Box Plots",
                  "whatWeCover": "Calculate quartiles and the interquartile range, draw box plots and compare two data sets in context."
                },
                {
                  "no": "02",
                  "topic": "Bivariate Data and Scatter Plots",
                  "whatWeCover": "Plot scatter diagrams, describe the relationship between two variables and fit a line of best fit by eye."
                },
                {
                  "no": "03",
                  "topic": "Time Series and Data Analysis",
                  "whatWeCover": "Read trends in time series data, such as rainfall or house prices, and judge when data is misleading."
                },
                {
                  "no": "04",
                  "topic": "Probability: Venn Diagrams and Two-Way Tables",
                  "whatWeCover": "Use Venn diagrams and two-way tables to find probabilities of unions, intersections and complements."
                },
                {
                  "no": "05",
                  "topic": "Probability: Compound and Conditional Events",
                  "whatWeCover": "Use tree diagrams to find probabilities of multi-step events, with and without replacement, and meet conditional probability."
                },
                {
                  "no": "06",
                  "topic": "Rates of Change: A First Look at Calculus Ideas",
                  "whatWeCover": "Explore average and instantaneous rates of change on graphs as a bridge to senior Maths Methods."
                },
                {
                  "no": "07",
                  "topic": "Senior Maths Pathways",
                  "whatWeCover": "Compare senior Maths options across VCE, HSC, QCE, SACE and WACE, and match the right course to your goals."
                },
                {
                  "no": "08",
                  "topic": "Mixed Problem Solving and Exam Technique",
                  "whatWeCover": "Tackle multi-step problems from every strand, and practise setting out working and managing time."
                },
                {
                  "no": "09",
                  "topic": "Subject Selection Planning",
                  "whatWeCover": "Review strengths and goals, and plan Maths choices for Year 11 with tutor guidance and a clear study plan."
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
          "href": "/subjects/year-10/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Planning Scientific Investigations",
                  "whatWeCover": "Design fair tests with clear variables, collect reliable data and write conclusions that answer the question."
                },
                {
                  "no": "02",
                  "topic": "Cells, DNA and Genes",
                  "whatWeCover": "Link DNA, genes and chromosomes, and explain how the genetic code carries instructions for traits."
                },
                {
                  "no": "03",
                  "topic": "Inheritance and Punnett Squares",
                  "whatWeCover": "Predict inheritance of dominant and recessive traits using Punnett squares and family pedigrees."
                },
                {
                  "no": "04",
                  "topic": "Genetic Technologies",
                  "whatWeCover": "Discuss DNA testing, selective breeding and gene technologies, weighing benefits, risks and ethics."
                },
                {
                  "no": "05",
                  "topic": "Mutation and Variation",
                  "whatWeCover": "Explain how mutations and sexual reproduction create variation within populations of living things."
                },
                {
                  "no": "06",
                  "topic": "Natural Selection",
                  "whatWeCover": "Describe how variation and survival pressures drive natural selection, with Australian examples such as finches and cane toads."
                },
                {
                  "no": "07",
                  "topic": "Evidence for Evolution",
                  "whatWeCover": "Use fossils, anatomy and DNA comparisons to show how species are related, including Australian megafauna."
                },
                {
                  "no": "08",
                  "topic": "Adaptations in Australian Species",
                  "whatWeCover": "Analyse how native plants and animals are adapted to arid, coastal and bushfire prone environments."
                },
                {
                  "no": "09",
                  "topic": "Scientific Data and Graphs",
                  "whatWeCover": "Draw and interpret graphs and tables, and judge the accuracy and reliability of results."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Atomic Structure",
                  "whatWeCover": "Describe protons, neutrons and electrons, and use electron arrangements to explain how atoms behave."
                },
                {
                  "no": "02",
                  "topic": "The Periodic Table",
                  "whatWeCover": "Use the periodic table to predict properties of elements and explain trends across groups and periods."
                },
                {
                  "no": "03",
                  "topic": "Ionic and Covalent Bonding",
                  "whatWeCover": "Compare ionic and covalent bonding and use it to explain the properties of common compounds."
                },
                {
                  "no": "04",
                  "topic": "Types of Chemical Reactions",
                  "whatWeCover": "Classify reactions as synthesis, decomposition, displacement, combustion and precipitation, and spot the signs of each."
                },
                {
                  "no": "05",
                  "topic": "Writing and Balancing Equations",
                  "whatWeCover": "Write word and symbol equations and balance them, showing conservation of mass."
                },
                {
                  "no": "06",
                  "topic": "Acids, Bases and pH",
                  "whatWeCover": "Test with indicators, describe neutralisation and link acids and bases to everyday products such as antacids and cleaners."
                },
                {
                  "no": "07",
                  "topic": "Rates of Reaction",
                  "whatWeCover": "Investigate how temperature, concentration, surface area and catalysts change the speed of a reaction."
                },
                {
                  "no": "08",
                  "topic": "Combustion, Corrosion and Energy Changes",
                  "whatWeCover": "Explain rusting, burning and exothermic and endothermic reactions, and their effects on the environment."
                },
                {
                  "no": "09",
                  "topic": "Chemistry in Australian Industry",
                  "whatWeCover": "Explore how mining, agriculture and water treatment depend on chemical reactions and careful safety practice."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Describing Motion",
                  "whatWeCover": "Use distance, displacement, speed and velocity, and read distance time and velocity time graphs."
                },
                {
                  "no": "02",
                  "topic": "Acceleration and Motion Graphs",
                  "whatWeCover": "Calculate acceleration from data and graphs, and relate the shape of a graph to how an object moves."
                },
                {
                  "no": "03",
                  "topic": "Newton's First and Second Laws",
                  "whatWeCover": "Use inertia and the relationship between force, mass and acceleration to explain everyday motion."
                },
                {
                  "no": "04",
                  "topic": "Newton's Third Law and Momentum",
                  "whatWeCover": "Explain action and reaction pairs, and use momentum to analyse collisions and road safety features."
                },
                {
                  "no": "05",
                  "topic": "Energy Forms and Conservation",
                  "whatWeCover": "Track kinetic, potential and thermal energy through a system and apply the law of conservation of energy."
                },
                {
                  "no": "06",
                  "topic": "Energy Transfer and Efficiency",
                  "whatWeCover": "Calculate efficiency, and compare how well devices and renewable energy systems convert energy."
                },
                {
                  "no": "07",
                  "topic": "Waves and the Electromagnetic Spectrum",
                  "whatWeCover": "Describe wave properties and compare radio, visible, ultraviolet and X ray waves, including uses and risks."
                },
                {
                  "no": "08",
                  "topic": "Heat Transfer and Electricity",
                  "whatWeCover": "Explain conduction, convection and radiation, and use simple circuits to link voltage, current and resistance."
                },
                {
                  "no": "09",
                  "topic": "Physics Investigation",
                  "whatWeCover": "Plan and run a motion or energy experiment, then analyse results and report on sources of error."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Revision and Mock Test",
                  "whatWeCover": "Review the term with worked examples and exam-style questions, then sit a short mock test with feedback shared in the parent report."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "The Big Bang and the Origin of the Universe",
                  "whatWeCover": "Explain evidence for the Big Bang, including expansion and background radiation, and how the universe has changed."
                },
                {
                  "no": "02",
                  "topic": "Stars, Galaxies and the Night Sky",
                  "whatWeCover": "Describe how stars form and change, and place the Sun and Milky Way within the wider universe."
                },
                {
                  "no": "03",
                  "topic": "Earth's Global Systems",
                  "whatWeCover": "Show how the atmosphere, oceans, land and living things interact and exchange energy and matter."
                },
                {
                  "no": "04",
                  "topic": "The Carbon Cycle and Greenhouse Effect",
                  "whatWeCover": "Follow carbon through Earth's systems and explain how the greenhouse effect warms the planet."
                },
                {
                  "no": "05",
                  "topic": "Climate Change and Australia",
                  "whatWeCover": "Examine evidence for climate change and its effects on reefs, bushfires, drought and coastal communities."
                },
                {
                  "no": "06",
                  "topic": "Plate Tectonics and Earth Processes",
                  "whatWeCover": "Link continental drift, earthquakes and volcanoes to the movement of plates and the shape of Australia."
                },
                {
                  "no": "07",
                  "topic": "Senior Science Pathways",
                  "whatWeCover": "Compare senior Biology, Chemistry, Physics and Earth and Environmental Science across VCE, HSC, QCE, SACE and WACE."
                },
                {
                  "no": "08",
                  "topic": "Subject Selection Planning",
                  "whatWeCover": "Match science interests and strengths to Year 11 subject choices, and plan for further study and careers."
                },
                {
                  "no": "09",
                  "topic": "Scientific Report Writing",
                  "whatWeCover": "Write a clear investigation report with aim, method, results, discussion and conclusion."
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
          "description": "A quick mental maths, word or science question, plus a recap of the last session"
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
      "h2": "Keep Exploring TutorExel",
      "cards": [
        {
          "tag": "PREVIOUS YEAR",
          "title": "Year 9 Tutoring",
          "text": "Review Year 9 foundations in Maths, English and Science with our structured curriculum.",
          "buttonText": "View Year 9",
          "href": "/subjects/year-9"
        },
        {
          "tag": "PRICING",
          "title": "Clear AUD Pricing",
          "text": "Simple monthly plans in Australian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Australian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+61 470 330 548",
      "phoneHref": "https://wa.me/61470330548"
    }
  }
};
