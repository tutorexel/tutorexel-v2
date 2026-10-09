export interface CaCurriculumTopic {
  no: string;
  topic: string;
  whatWeCover: string;
}

export interface CaCurriculumTerm {
  termKey: "term-1" | "term-2" | "term-3" | "term-4";
  termTitle: string;
  topics: CaCurriculumTopic[];
}

export interface CaCurriculumSubject {
  id: "english" | "math" | "science";
  label: string;
  href: string;
  terms: CaCurriculumTerm[];
}

export interface CaLessonStep {
  stepNum: string;
  title: string;
  duration: string;
  description: string;
}

export interface CaExploreCard {
  tag: string;
  title: string;
  text: string;
  buttonText: string;
  href: string;
}

export interface CaGradePageData {
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
    subjects: CaCurriculumSubject[];
  };
  lockedBox: {
    h2: string;
    text: string;
    buttonText: string;
  };
  lessonStructure: {
    eyebrow: string;
    h2: string;
    steps: CaLessonStep[];
  };
  keepExploring: {
    h2: string;
    cards: CaExploreCard[];
  };
  finalCta: {
    h2: string;
    text: string;
    buttonText: string;
    phone: string;
    phoneHref: string;
  };
}

export const CA_GRADE_PAGES_DATA: Record<string, CaGradePageData> = {
  "grade-2": {
    "gradeNum": 2,
    "yearId": "grade-2",
    "meta": {
      "title": "Grade 2 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 2 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-2"
    },
    "hero": {
      "h1": "Grade 2 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from phonics to life cycles.",
      "primaryBtn": "Try a Free Grade 2 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 2 is where children turn early skills into confident reading, writing, number sense and curiosity. Our structured program builds all three through hands-on activities, visual aids and familiar Canadian examples, from loonies and toonies to the backyard.",
      "keyTopics": {
        "math": "place value to 200, add and subtract, arrays, time, money and shapes.",
        "english": "phonics, fluent reading, and narrative and informative writing.",
        "science": "animal life cycles, solids and liquids, water and air, and simple machines."
      },
      "parentTip": "Little and often works best at this age. Read together for ten minutes, count a jar of loonies and toonies and ask what your child noticed outside. We make sure each idea clicks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 2, Your Child Will...",
      "items": [
        "Read, write and compare numbers to 200 with confidence",
        "Add and subtract fluently within 100 and solve problems within 200",
        "Read grade-level stories and nonfiction with fluency and understanding",
        "Write narrative, opinion and informative pieces with a clear structure",
        "Describe how animals grow and change and what they need to live",
        "Plan a fair test and design a simple solution to a problem"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 2 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-2/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Formal and Informal Language",
                  "whatWeCover": "Explore how our words change with the situation, such as chatting with a friend, speaking to a teacher or writing a thank-you note."
                },
                {
                  "no": "02",
                  "topic": "Purpose and Audience",
                  "whatWeCover": "Work out whether an author wants to tell a story, share facts or give an opinion, and who the text was written for."
                },
                {
                  "no": "03",
                  "topic": "Writing an Informative Paragraph",
                  "whatWeCover": "Introduce a topic, add facts and definitions and finish with a closing sentence in a short paragraph on a familiar topic."
                },
                {
                  "no": "04",
                  "topic": "Capitals, Commas and Handwriting",
                  "whatWeCover": "Capitalize holidays such as Canada Day and Thanksgiving, names and places, use commas in greetings and closings and build neat, fluent handwriting."
                },
                {
                  "no": "05",
                  "topic": "Giving an Opinion About Texts",
                  "whatWeCover": "Share what you think about a book or text, using words like because and and to give reasons."
                },
                {
                  "no": "06",
                  "topic": "Compound Sentences",
                  "whatWeCover": "Join two ideas with and, but and so to make smoother sentences, and rearrange simple sentences."
                },
                {
                  "no": "07",
                  "topic": "Characters and Settings",
                  "whatWeCover": "Discuss who is in a story and where it takes place, and ask who, what, where, when, why and how."
                },
                {
                  "no": "08",
                  "topic": "Narrative Writing: Beginning, Middle and End",
                  "whatWeCover": "Write a short story or recount with time-order words, details about feelings and a clear ending."
                },
                {
                  "no": "09",
                  "topic": "Listening, Turn-Taking and Responding",
                  "whatWeCover": "Take turns in conversation, listen closely, follow multistep directions and ask questions to understand."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise language, reading, writing and speaking. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Long and Short Vowels",
                  "whatWeCover": "Tell long vowels from short vowels in one-syllable words and read and spell them."
                },
                {
                  "no": "02",
                  "topic": "Vowel Teams",
                  "whatWeCover": "Learn spelling-sound patterns for vowel teams such as ai, ee, oa and ow when reading and writing."
                },
                {
                  "no": "03",
                  "topic": "Two-Syllable Words",
                  "whatWeCover": "Split two-syllable words into parts to decode them, including words with long vowels."
                },
                {
                  "no": "04",
                  "topic": "Prefixes and Suffixes",
                  "whatWeCover": "Use common prefixes and suffixes such as un-, re-, -ful and -less to read words and work out their meanings."
                },
                {
                  "no": "05",
                  "topic": "Irregular and High-Frequency Words",
                  "whatWeCover": "Read and spell grade-level words with unusual patterns, such as said, friend and through."
                },
                {
                  "no": "06",
                  "topic": "Spelling Patterns",
                  "whatWeCover": "Apply known spelling patterns to new words, including Canadian spellings such as colour and neighbour, and check with a dictionary."
                },
                {
                  "no": "07",
                  "topic": "Reading with Fluency",
                  "whatWeCover": "Read grade-level text with accuracy, a steady pace and expression across repeated readings."
                },
                {
                  "no": "08",
                  "topic": "Rereading and Self-Correcting",
                  "whatWeCover": "Check meaning as you read, reread tricky sentences and fix mistakes using context clues."
                },
                {
                  "no": "09",
                  "topic": "Poems, Rhymes and Rhythm",
                  "whatWeCover": "Spot regular beats, alliteration, rhymes and repeated lines in poems and songs, and say how they add meaning."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise phonics, fluency and poetry. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Asking Questions About Texts",
                  "whatWeCover": "Ask and answer who, what, where, when, why and how questions to show you understood a story or article."
                },
                {
                  "no": "02",
                  "topic": "Retelling Stories and Central Message",
                  "whatWeCover": "Retell fables and traditional tales from different cultures, including First Nations, Metis and Inuit stories, and name the lesson or main message."
                },
                {
                  "no": "03",
                  "topic": "How Characters Respond to Challenges",
                  "whatWeCover": "Explain how characters react to big events and problems in a story, using details from the text."
                },
                {
                  "no": "04",
                  "topic": "Story Beginnings and Endings",
                  "whatWeCover": "Describe how a story starts, how the action builds and how it ends."
                },
                {
                  "no": "05",
                  "topic": "Character Voices and Perspectives",
                  "whatWeCover": "Notice that characters see events differently and show this with expression when reading dialogue aloud."
                },
                {
                  "no": "06",
                  "topic": "Main Topic of Informational Texts",
                  "whatWeCover": "Find the main topic of a multi-paragraph text and the focus of each paragraph."
                },
                {
                  "no": "07",
                  "topic": "Text Features",
                  "whatWeCover": "Use captions, bold print, headings and glossaries to find facts quickly."
                },
                {
                  "no": "08",
                  "topic": "Pictures and Diagrams",
                  "whatWeCover": "Use illustrations and diagrams to help explain what the words in a text say."
                },
                {
                  "no": "09",
                  "topic": "Comparing Two Texts",
                  "whatWeCover": "Compare two versions of a tale or two texts on the same topic and talk about what is alike and different."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise comprehension, text features and comparing texts. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Planning and Writing Narratives",
                  "whatWeCover": "Plan a story with characters, a setting and a problem, then write it with time-order words and a closing."
                },
                {
                  "no": "02",
                  "topic": "Writing Opinion Pieces",
                  "whatWeCover": "State an opinion, give reasons with linking words such as because, and add a concluding sentence."
                },
                {
                  "no": "03",
                  "topic": "Writing Informative Texts",
                  "whatWeCover": "Write a short report on a topic, such as a beaver or a polar bear, with facts, definitions and a conclusion."
                },
                {
                  "no": "04",
                  "topic": "Irregular Plurals and Past Tense Verbs",
                  "whatWeCover": "Use irregular plurals such as feet and children and irregular past tense verbs such as sat, hid and told."
                },
                {
                  "no": "05",
                  "topic": "Adjectives and Adverbs",
                  "whatWeCover": "Choose between adjectives and adverbs and use them to make sentences more descriptive."
                },
                {
                  "no": "06",
                  "topic": "Apostrophes in Contractions and Possessives",
                  "whatWeCover": "Use apostrophes in contractions such as can't and in possessives such as Mia's dog."
                },
                {
                  "no": "07",
                  "topic": "Context Clues and Shades of Meaning",
                  "whatWeCover": "Work out new words from context and tell apart words with close meanings, such as toss and throw."
                },
                {
                  "no": "08",
                  "topic": "Revising, Editing and Digital Tools",
                  "whatWeCover": "Revise and edit writing with a partner and use a keyboard or tablet, with adult help, to publish a piece."
                },
                {
                  "no": "09",
                  "topic": "Shared Research Project",
                  "whatWeCover": "Gather facts from several books or a short observation and write a short piece about what you learned."
                },
                {
                  "no": "10",
                  "topic": "Grade 2 Review and Grade 3 Readiness",
                  "whatWeCover": "Revise the year and preview Grade 3 reading and writing, when provincial assessments such as EQAO begin in Ontario. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-2/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value Foundations to 200",
                  "whatWeCover": "Read, write and show numbers to 200 with base ten blocks, place value charts and hundreds charts. Practise telling 103 from 130."
                },
                {
                  "no": "02",
                  "topic": "Number Lines and Skip Counting",
                  "whatWeCover": "Count to 200 and skip count by 2s, 5s, 10s and 25s on number lines. Place numbers and solve missing number puzzles."
                },
                {
                  "no": "03",
                  "topic": "Hundreds, Tens and Ones with Blocks",
                  "whatWeCover": "Build three-digit numbers to 200 with blocks and see that 146 means 1 hundred, 4 tens and 6 ones. Link each digit to its value."
                },
                {
                  "no": "04",
                  "topic": "Expanded Form and Number Names",
                  "whatWeCover": "Write numbers in standard form, expanded form and words, such as 148 = 100 + 40 + 8."
                },
                {
                  "no": "05",
                  "topic": "Comparing and Ordering Numbers",
                  "whatWeCover": "Compare and order numbers to 200 using place value and the symbols greater than, less than and equal to."
                },
                {
                  "no": "06",
                  "topic": "Facts Within 20 Fluency",
                  "whatWeCover": "Build quick recall of sums and differences within 20 with ten frames, doubles and make-a-ten strategies."
                },
                {
                  "no": "07",
                  "topic": "Odd and Even Numbers",
                  "whatWeCover": "Tell odd from even by pairing objects and write even numbers as doubles, such as 8 = 4 + 4."
                },
                {
                  "no": "08",
                  "topic": "Add and Subtract Within 100",
                  "whatWeCover": "Use place value strategies, hundreds charts and open number lines to add and subtract within 100."
                },
                {
                  "no": "09",
                  "topic": "Dollar Word Problems",
                  "whatWeCover": "Choose add or subtract for simple purchases using whole dollars, such as buying a $12 book with a $20 bill."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Check-In and Review",
                  "whatWeCover": "Revise place value, facts and strategies through mixed tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Mental Math: Add and Subtract 10",
                  "whatWeCover": "Add or subtract 10 in your head from numbers up to 200, using place value patterns."
                },
                {
                  "no": "02",
                  "topic": "Adding Within 100 with Regrouping",
                  "whatWeCover": "Add two-digit numbers and regroup ones as tens using blocks, drawings and written steps."
                },
                {
                  "no": "03",
                  "topic": "Subtracting Within 100 with Regrouping",
                  "whatWeCover": "Subtract two-digit numbers, unbundling a ten when needed, and check answers with addition."
                },
                {
                  "no": "04",
                  "topic": "Adding Three Two-Digit Numbers",
                  "whatWeCover": "Add up to three two-digit numbers by grouping tens and ones, such as adding points from a board game."
                },
                {
                  "no": "05",
                  "topic": "Add and Subtract Within 200",
                  "whatWeCover": "Add and subtract numbers up to 200 using blocks, drawings and place value, composing or decomposing tens and hundreds."
                },
                {
                  "no": "06",
                  "topic": "Why Strategies Work",
                  "whatWeCover": "Explain why an addition or subtraction strategy works, using place value and the properties of operations."
                },
                {
                  "no": "07",
                  "topic": "One-Step Word Problems",
                  "whatWeCover": "Solve add-to, take-from, put-together and compare problems and write a number sentence for each."
                },
                {
                  "no": "08",
                  "topic": "Two-Step Word Problems",
                  "whatWeCover": "Solve two-step stories, such as a school lunch order, with the unknown in any position."
                },
                {
                  "no": "09",
                  "topic": "Equal Groups and Arrays",
                  "whatWeCover": "Count objects in rectangular arrays up to 5 by 5 and write the total as repeated addition, such as 5 + 5 + 5."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise adding, subtracting, word problems and arrays. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Measuring with Rulers",
                  "whatWeCover": "Measure objects to the nearest unit using rulers, metre sticks and measuring tapes."
                },
                {
                  "no": "02",
                  "topic": "Centimetres and Metres",
                  "whatWeCover": "Measure the same object in centimetres and metres and see why a smaller unit gives a bigger number."
                },
                {
                  "no": "03",
                  "topic": "Estimating and Comparing Lengths",
                  "whatWeCover": "Estimate lengths in centimetres and metres, then work out how much longer one object is than another."
                },
                {
                  "no": "04",
                  "topic": "Length Word Problems on Number Lines",
                  "whatWeCover": "Solve length problems within 100 and show whole numbers as lengths from 0 on a number line."
                },
                {
                  "no": "05",
                  "topic": "Comparing Mass and Capacity",
                  "whatWeCover": "Compare and order objects by how heavy they are and how much they hold, using kilograms and litres in everyday examples."
                },
                {
                  "no": "06",
                  "topic": "Telling Time to Five Minutes",
                  "whatWeCover": "Tell and write time from analog and digital clocks to the nearest five minutes, such as 3:35."
                },
                {
                  "no": "07",
                  "topic": "a.m., p.m. and the Calendar",
                  "whatWeCover": "Use a.m. and p.m. to describe the school day, and read days, weeks and months on a calendar."
                },
                {
                  "no": "08",
                  "topic": "Canadian Coins",
                  "whatWeCover": "Name and count nickels, dimes, quarters, loonies and toonies and find their values, such as showing 85 cents in more than one way."
                },
                {
                  "no": "09",
                  "topic": "Dollars and Cents Problems",
                  "whatWeCover": "Solve word problems with Canadian coins and bills, such as paying for a snack at a school fundraiser."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise measuring, time and money. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Shapes and Their Attributes",
                  "whatWeCover": "Name shapes by sides and vertices and sort them by attributes such as the number of sides."
                },
                {
                  "no": "02",
                  "topic": "Triangles, Quadrilaterals, Pentagons and Hexagons",
                  "whatWeCover": "Recognize and draw shapes with a given number of sides or vertices, and find them around the home."
                },
                {
                  "no": "03",
                  "topic": "Cubes and 3D Objects",
                  "whatWeCover": "Spot cubes, prisms and other solid shapes by their faces and edges in everyday objects."
                },
                {
                  "no": "04",
                  "topic": "Patterns and Coding",
                  "whatWeCover": "Create and extend repeating and growing patterns, and write simple coding sequences to move a character along a path."
                },
                {
                  "no": "05",
                  "topic": "Halves, Fourths and Equal Shares",
                  "whatWeCover": "Split circles and rectangles into equal parts and name them halves and fourths."
                },
                {
                  "no": "06",
                  "topic": "Pictographs and Bar Graphs",
                  "whatWeCover": "Draw and read pictographs and bar graphs with up to four categories, such as favourite recess games."
                },
                {
                  "no": "07",
                  "topic": "Solving Problems with Graphs",
                  "whatWeCover": "Use a graph to solve put-together, take-apart and compare problems."
                },
                {
                  "no": "08",
                  "topic": "Mixed Word Problems and Math Modelling",
                  "whatWeCover": "Solve everyday problems that mix adding, subtracting, measuring and money, then explain the answer."
                },
                {
                  "no": "09",
                  "topic": "Fluency Games and Challenges",
                  "whatWeCover": "Practise facts within 20 and strategies within 100 through games, timed rounds and puzzles."
                },
                {
                  "no": "10",
                  "topic": "Grade 2 Review and Grade 3 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 3 math, including early multiplication. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-2/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Living and Non-Living Things",
                  "whatWeCover": "Sort things around us into living and non-living and explain how you can tell."
                },
                {
                  "no": "02",
                  "topic": "Animals Around Us",
                  "whatWeCover": "Group animals such as moose, loons, salmon and beetles by features like fur, feathers, scales and legs."
                },
                {
                  "no": "03",
                  "topic": "What Animals Need",
                  "whatWeCover": "Explore what animals need to survive, such as food, water, air, shelter and space."
                },
                {
                  "no": "04",
                  "topic": "Life Cycles",
                  "whatWeCover": "Follow how animals such as butterflies and frogs grow and change from egg to adult."
                },
                {
                  "no": "05",
                  "topic": "Growth of Mammals and Birds",
                  "whatWeCover": "Compare how a baby mammal and a baby bird grow, and what care they get from their parents."
                },
                {
                  "no": "06",
                  "topic": "Animal Body Parts and Their Jobs",
                  "whatWeCover": "Match body parts such as beaks, fur and webbed feet to what they help an animal do."
                },
                {
                  "no": "07",
                  "topic": "Animals and the Canadian Seasons",
                  "whatWeCover": "Find out how animals handle winter, such as bears sleeping in dens and geese migrating south."
                },
                {
                  "no": "08",
                  "topic": "Habitats Around Us",
                  "whatWeCover": "Compare animals in different habitats, such as a pond, a forest and a wetland."
                },
                {
                  "no": "09",
                  "topic": "Caring for Animals and Habitats",
                  "whatWeCover": "Explore simple ways to look after wildlife and green spaces in your neighbourhood."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise animals, life cycles and habitats. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Solids and Liquids",
                  "whatWeCover": "Sort materials into solids and liquids and explain how you can tell them apart."
                },
                {
                  "no": "02",
                  "topic": "Describing Properties",
                  "whatWeCover": "Describe materials by colour, shape, texture, hardness and how they flow."
                },
                {
                  "no": "03",
                  "topic": "Liquids Take the Shape of Their Container",
                  "whatWeCover": "Pour water and juice into different containers and see how the shape of a liquid changes."
                },
                {
                  "no": "04",
                  "topic": "Mixing Liquids and Solids",
                  "whatWeCover": "With adult guidance, mix materials such as sugar, sand and salt with water and see what happens."
                },
                {
                  "no": "05",
                  "topic": "Absorbing Liquids",
                  "whatWeCover": "Test which materials soak up water and which do not, such as paper towels, plastic and sponges."
                },
                {
                  "no": "06",
                  "topic": "Sink or Float",
                  "whatWeCover": "Predict and test whether solid objects sink or float in water."
                },
                {
                  "no": "07",
                  "topic": "Choosing Materials for a Job",
                  "whatWeCover": "Analyze test results to pick the best material for a purpose, such as a raincoat or snow boots."
                },
                {
                  "no": "08",
                  "topic": "Melting and Freezing",
                  "whatWeCover": "With adult guidance, watch how heating and cooling change materials such as ice, butter and chocolate."
                },
                {
                  "no": "09",
                  "topic": "Reuse and Recycling",
                  "whatWeCover": "Explore how reusing and recycling materials cuts down on waste at home and at school."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise solids, liquids and materials. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Water Around Us",
                  "whatWeCover": "Identify oceans, lakes, rivers, ice and groundwater, and name the water bodies nearest your home, such as the Great Lakes."
                },
                {
                  "no": "02",
                  "topic": "Water as a Solid, Liquid and Gas",
                  "whatWeCover": "Find out that water can be ice, liquid or vapour and where each is found."
                },
                {
                  "no": "03",
                  "topic": "A Simple Water Cycle",
                  "whatWeCover": "Show how water rises, forms clouds and falls again as rain or snow."
                },
                {
                  "no": "04",
                  "topic": "Rain, Snow and Ice",
                  "whatWeCover": "Observe how weather changes with the seasons and what happens to water in winter."
                },
                {
                  "no": "05",
                  "topic": "Air Is All Around Us",
                  "whatWeCover": "Show that air takes up space and that moving air is wind."
                },
                {
                  "no": "06",
                  "topic": "Using Wind and Water",
                  "whatWeCover": "Explore how people use wind and moving water, such as wind turbines and hydroelectric dams."
                },
                {
                  "no": "07",
                  "topic": "What Living Things Need from Air and Water",
                  "whatWeCover": "Link air and water to the needs of plants, animals and people."
                },
                {
                  "no": "08",
                  "topic": "Keeping Air and Water Clean",
                  "whatWeCover": "Find simple ways to keep air and water clean, such as reducing litter and saving water."
                },
                {
                  "no": "09",
                  "topic": "Planning a Fair Test",
                  "whatWeCover": "Decide what to change, what to measure and what to keep the same."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise water, air and weather. A termly mock test and parent report follow."
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
                  "whatWeCover": "Show how a push or a pull makes things start, stop or change direction."
                },
                {
                  "no": "02",
                  "topic": "Simple Machines",
                  "whatWeCover": "Meet ramps, levers, wheels and axles and see how they make work easier."
                },
                {
                  "no": "03",
                  "topic": "Ramps and Wheels",
                  "whatWeCover": "Test how the slope of a ramp and the size of a wheel change how far a toy car travels."
                },
                {
                  "no": "04",
                  "topic": "Levers and Pulleys",
                  "whatWeCover": "Try a seesaw lever and a simple pulley to lift a load and compare the effort needed."
                },
                {
                  "no": "05",
                  "topic": "Machines in Daily Life",
                  "whatWeCover": "Spot simple machines at home and on the playground, such as swings, slides and door handles."
                },
                {
                  "no": "06",
                  "topic": "Engineering: Define a Problem",
                  "whatWeCover": "Ask questions and gather information about a problem people want to solve."
                },
                {
                  "no": "07",
                  "topic": "Sketch and Model a Solution",
                  "whatWeCover": "Draw or build a model to show how the shape of an object helps it do its job."
                },
                {
                  "no": "08",
                  "topic": "Compare Two Designs",
                  "whatWeCover": "Test two designs for the same problem and compare their strengths and weaknesses."
                },
                {
                  "no": "09",
                  "topic": "Mini Science Project",
                  "whatWeCover": "Choose a question, test it fairly and share the results in a short presentation."
                },
                {
                  "no": "10",
                  "topic": "Grade 2 Review and Grade 3 Readiness",
                  "whatWeCover": "Revise the year's science and preview Grade 3 topics. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 2 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 3 Tutoring",
          "text": "Build on Grade 2 with Grade 3 Math, English and Science, 40 live lessons per subject matched to your province's curriculum.",
          "buttonText": "View Grade 3",
          "href": "/ca/subjects/grade-3"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-3": {
    "gradeNum": 3,
    "yearId": "grade-3",
    "meta": {
      "title": "Grade 3 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 3 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-3"
    },
    "hero": {
      "h1": "Grade 3 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from times tables to magnets.",
      "primaryBtn": "Try a Free Grade 3 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 3 is where schoolwork steps up, with times tables, chapter books and longer pieces of writing. Our structured program builds Math, English and Science skills step by step, with familiar Canadian examples, from rounding cash totals at the grocery store to soil in the garden.",
      "keyTopics": {
        "math": "place value to 1,000, times tables, fractions, Canadian money, and area and perimeter.",
        "english": "fluency, comprehension, and narrative, informational and persuasive writing.",
        "science": "plant life cycles, strong structures, magnets, gravity and soil."
      },
      "parentTip": "Make times tables part of the day. Skip count on the walk to school, play card games at the table and ask your child to explain one science idea in their own words. We make sure each idea clicks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 3, Your Child Will...",
      "items": [
        "Read, write, compare and round numbers to 1,000",
        "Multiply and divide with facts up to 7 by 7",
        "Read grade-level fiction and nonfiction with fluency and understanding",
        "Write clear paragraphs, stories, reports and persuasive pieces",
        "Explain what makes a structure strong and stable",
        "Plan a fair test, record results and share conclusions"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 3 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-3/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Phonics Review and Word Study",
                  "whatWeCover": "Revisit vowel teams, blends and spelling patterns to make reading and spelling more automatic."
                },
                {
                  "no": "02",
                  "topic": "Multisyllabic Words",
                  "whatWeCover": "Break longer words into syllables to read and spell them, such as fam-i-ly and ad-ven-ture."
                },
                {
                  "no": "03",
                  "topic": "Prefixes and Suffixes",
                  "whatWeCover": "Use prefixes and suffixes such as un-, re-, dis-, -ly and -ment to read words and work out their meanings."
                },
                {
                  "no": "04",
                  "topic": "Reading with Fluency",
                  "whatWeCover": "Read grade-level text with accuracy, a steady pace and expression, and track your own progress."
                },
                {
                  "no": "05",
                  "topic": "Main Idea and Details",
                  "whatWeCover": "Find the main idea of a passage and the details that support it."
                },
                {
                  "no": "06",
                  "topic": "Making Inferences",
                  "whatWeCover": "Use clues from the text and what you already know to work out what the author does not say."
                },
                {
                  "no": "07",
                  "topic": "Characters, Setting and Plot",
                  "whatWeCover": "Describe who is in a story, where it happens and how the problem is solved."
                },
                {
                  "no": "08",
                  "topic": "Fables, Folktales and Themes",
                  "whatWeCover": "Read traditional tales from many cultures and name the lesson or message."
                },
                {
                  "no": "09",
                  "topic": "Responding to Texts",
                  "whatWeCover": "Share opinions and connections to a text and back them up with details from the reading."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise word study, fluency and comprehension. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Sentences: Types and Parts",
                  "whatWeCover": "Tell statements, questions, commands and exclamations apart, and find the subject and predicate."
                },
                {
                  "no": "02",
                  "topic": "Nouns, Pronouns and Verbs",
                  "whatWeCover": "Use common and proper nouns, pronouns and action verbs correctly in sentences."
                },
                {
                  "no": "03",
                  "topic": "Adjectives and Adverbs",
                  "whatWeCover": "Add detail to writing with adjectives and adverbs and choose precise words."
                },
                {
                  "no": "04",
                  "topic": "Verb Tenses",
                  "whatWeCover": "Use past, present and future tense correctly and keep tenses consistent in a paragraph."
                },
                {
                  "no": "05",
                  "topic": "Punctuation: Commas and Quotation Marks",
                  "whatWeCover": "Use commas in lists and dates and quotation marks in dialogue."
                },
                {
                  "no": "06",
                  "topic": "Capital Letters and Canadian Spelling",
                  "whatWeCover": "Use capitals correctly and learn Canadian spelling patterns such as colour, neighbour, centre and favourite."
                },
                {
                  "no": "07",
                  "topic": "Paragraph Structure",
                  "whatWeCover": "Write a paragraph with a topic sentence, supporting details and a closing sentence."
                },
                {
                  "no": "08",
                  "topic": "Narrative Writing",
                  "whatWeCover": "Plan and write a story with a clear beginning, middle and end, using details and dialogue."
                },
                {
                  "no": "09",
                  "topic": "Revising and Editing",
                  "whatWeCover": "Improve drafts by checking ideas, word choice and conventions, alone and with a partner."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise grammar, spelling and paragraph writing. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Nonfiction Text Features",
                  "whatWeCover": "Use headings, captions, diagrams, maps and glossaries to find information quickly."
                },
                {
                  "no": "02",
                  "topic": "Main Idea in Nonfiction",
                  "whatWeCover": "Find the main idea of a nonfiction text and summarize it in your own words."
                },
                {
                  "no": "03",
                  "topic": "Fact and Opinion",
                  "whatWeCover": "Tell facts from opinions and spot words that signal each."
                },
                {
                  "no": "04",
                  "topic": "Writing an Informational Report",
                  "whatWeCover": "Research, organize and write a short report on a topic, such as the Canadian beaver."
                },
                {
                  "no": "05",
                  "topic": "Research Skills",
                  "whatWeCover": "Find information in library books and safe websites and note where it came from."
                },
                {
                  "no": "06",
                  "topic": "Persuasive Writing",
                  "whatWeCover": "State an opinion, give reasons and examples and write a strong closing, such as a letter asking for a new playground."
                },
                {
                  "no": "07",
                  "topic": "Writing Letters and Emails",
                  "whatWeCover": "Write a friendly letter or email with a greeting, a clear message and a closing."
                },
                {
                  "no": "08",
                  "topic": "Media Literacy: Ads, Posters and Websites",
                  "whatWeCover": "Look at the message, audience and purpose of everyday media, such as an ad or a poster."
                },
                {
                  "no": "09",
                  "topic": "Oral Communication: Short Presentations",
                  "whatWeCover": "Plan and give a short talk with a clear voice, good eye contact and visuals."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise nonfiction, persuasive writing and media literacy. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry: Rhyme, Rhythm and Imagery",
                  "whatWeCover": "Read and write poems that use rhyme, rhythm and sensory images."
                },
                {
                  "no": "02",
                  "topic": "Figurative Language",
                  "whatWeCover": "Spot and use similes, metaphors and onomatopoeia to make writing more vivid."
                },
                {
                  "no": "03",
                  "topic": "Context Clues and Vocabulary",
                  "whatWeCover": "Work out new words from context and build a word bank for reading and writing."
                },
                {
                  "no": "04",
                  "topic": "Synonyms, Antonyms and Homophones",
                  "whatWeCover": "Choose between words with similar, opposite or same-sounding meanings, such as their and there."
                },
                {
                  "no": "05",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare two texts on the same topic or theme and discuss how they are alike and different."
                },
                {
                  "no": "06",
                  "topic": "Reading Chapter Books",
                  "whatWeCover": "Track characters, plot and questions across chapters and keep a reading log."
                },
                {
                  "no": "07",
                  "topic": "Responding in Writing",
                  "whatWeCover": "Answer questions about a text in full sentences with evidence from the reading."
                },
                {
                  "no": "08",
                  "topic": "Reading and Writing Test Practice",
                  "whatWeCover": "Practise timed reading and writing tasks, including EQAO-style questions for Ontario families."
                },
                {
                  "no": "09",
                  "topic": "Publishing a Writing Project",
                  "whatWeCover": "Plan, draft, edit and publish a longer piece, then share it with an audience."
                },
                {
                  "no": "10",
                  "topic": "Grade 3 Review and Grade 4 Readiness",
                  "whatWeCover": "Revise the year and preview Grade 4 reading and writing. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-3/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to 1,000",
                  "whatWeCover": "Read, write and show numbers to 1,000 with base ten blocks and place value charts. Practise telling 408 from 480."
                },
                {
                  "no": "02",
                  "topic": "Number Lines and Skip Counting",
                  "whatWeCover": "Count forward and back by 2s, 3s, 5s, 10s, 25s and 100s on number lines and hundreds charts."
                },
                {
                  "no": "03",
                  "topic": "Expanded Form and Number Names",
                  "whatWeCover": "Write numbers in standard form, expanded form and words, such as 536 = 500 + 30 + 6."
                },
                {
                  "no": "04",
                  "topic": "Comparing and Ordering Numbers",
                  "whatWeCover": "Compare and order numbers to 1,000 using place value and the symbols greater than, less than and equal to."
                },
                {
                  "no": "05",
                  "topic": "Rounding to the Nearest 10 and 100",
                  "whatWeCover": "Round numbers using number lines and place value, such as rounding 347 to 350 and 300."
                },
                {
                  "no": "06",
                  "topic": "Addition Strategies Within 1,000",
                  "whatWeCover": "Add three-digit numbers using place value, compensation and open number lines, then check with estimates."
                },
                {
                  "no": "07",
                  "topic": "Subtraction Strategies Within 1,000",
                  "whatWeCover": "Subtract three-digit numbers by counting up, regrouping and using open number lines."
                },
                {
                  "no": "08",
                  "topic": "Estimating Sums and Differences",
                  "whatWeCover": "Estimate before you calculate and decide whether an answer makes sense."
                },
                {
                  "no": "09",
                  "topic": "Addition and Subtraction Word Problems",
                  "whatWeCover": "Solve one-step and two-step problems and write a number sentence for each, such as the total km on a road trip from Calgary to Banff."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Check-In and Review",
                  "whatWeCover": "Revise place value, rounding and addition and subtraction through mixed tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Equal Groups and Arrays",
                  "whatWeCover": "Show multiplication as equal groups and rectangular arrays, such as 4 rows of 6 seats in a classroom."
                },
                {
                  "no": "02",
                  "topic": "Repeated Addition and Skip Counting",
                  "whatWeCover": "Connect repeated addition and skip counting to multiplication sentences, such as 5 + 5 + 5 = 3 x 5."
                },
                {
                  "no": "03",
                  "topic": "Multiplication Facts for 2, 5 and 10",
                  "whatWeCover": "Build quick recall of the 2, 5 and 10 times tables with number lines, arrays and patterns."
                },
                {
                  "no": "04",
                  "topic": "Multiplication Facts for 3, 4 and 6",
                  "whatWeCover": "Learn the 3, 4 and 6 times tables using doubles, halving and known facts."
                },
                {
                  "no": "05",
                  "topic": "Multiplication Facts Up to 7 by 7",
                  "whatWeCover": "Reach fluency with facts up to 7 by 7 using strategies such as doubling and near facts."
                },
                {
                  "no": "06",
                  "topic": "Division as Sharing and Grouping",
                  "whatWeCover": "Share items equally and make equal groups to understand division, such as dividing 24 hockey cards among 4 friends."
                },
                {
                  "no": "07",
                  "topic": "Division Facts and Fact Families",
                  "whatWeCover": "Link multiplication and division facts in fact families, such as 3 x 7 = 21 and 21 / 3 = 7."
                },
                {
                  "no": "08",
                  "topic": "Multiplication and Division Word Problems",
                  "whatWeCover": "Choose the right operation for one-step problems and write a number sentence to match."
                },
                {
                  "no": "09",
                  "topic": "Patterns in the Multiplication Table",
                  "whatWeCover": "Spot patterns, such as even products and skip counting rows, and use them to remember facts."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise multiplication, division and word problems. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Fractions of a Whole",
                  "whatWeCover": "Name and show halves, thirds, fourths and other equal parts of shapes, such as slices of a pizza."
                },
                {
                  "no": "02",
                  "topic": "Fractions on a Number Line",
                  "whatWeCover": "Place fractions between 0 and 1 on number lines and see that each part is equal in size."
                },
                {
                  "no": "03",
                  "topic": "Fractions of a Set",
                  "whatWeCover": "Find a fraction of a group of objects, such as 1/4 of 12 stickers."
                },
                {
                  "no": "04",
                  "topic": "Comparing Fractions",
                  "whatWeCover": "Compare fractions with the same numerator or the same denominator using models and number lines."
                },
                {
                  "no": "05",
                  "topic": "Canadian Money",
                  "whatWeCover": "Count coins and bills, including loonies, toonies and $5, $10 and $20 bills, to find a total."
                },
                {
                  "no": "06",
                  "topic": "Making Change and Cash Rounding",
                  "whatWeCover": "Work out change and round cash totals to the nearest five cents, as stores do now that pennies are gone."
                },
                {
                  "no": "07",
                  "topic": "Telling Time and Elapsed Time",
                  "whatWeCover": "Tell time to the minute on analog and digital clocks and find how much time has passed, such as the length of a recess."
                },
                {
                  "no": "08",
                  "topic": "Length: Millimetres, Centimetres and Metres",
                  "whatWeCover": "Measure and estimate lengths in metric units and choose the best unit for the job."
                },
                {
                  "no": "09",
                  "topic": "Mass and Capacity",
                  "whatWeCover": "Measure and compare mass in grams and kilograms and capacity in millilitres and litres, such as a litre of milk."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise fractions, money, time and measurement. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Perimeter",
                  "whatWeCover": "Find the distance around shapes by adding side lengths, such as the edge of a school playground."
                },
                {
                  "no": "02",
                  "topic": "Area with Square Units",
                  "whatWeCover": "Cover shapes with square units and count them to find the area, then link to rows and columns."
                },
                {
                  "no": "03",
                  "topic": "2D Shapes and Their Properties",
                  "whatWeCover": "Sort and describe polygons by sides, vertices and angles."
                },
                {
                  "no": "04",
                  "topic": "Line Symmetry",
                  "whatWeCover": "Find and draw lines of symmetry in shapes, letters and designs."
                },
                {
                  "no": "05",
                  "topic": "3D Objects and Their Attributes",
                  "whatWeCover": "Describe cubes, prisms and pyramids by faces, edges and vertices."
                },
                {
                  "no": "06",
                  "topic": "Patterns, Equations and Coding",
                  "whatWeCover": "Extend patterns, find missing numbers in equations and write simple coding sequences with repeats."
                },
                {
                  "no": "07",
                  "topic": "Bar Graphs and Pictographs",
                  "whatWeCover": "Collect data, build bar graphs and pictographs with a scale and answer questions about them."
                },
                {
                  "no": "08",
                  "topic": "Likelihood of Events",
                  "whatWeCover": "Describe events as certain, likely, unlikely or impossible and test them with spinners and dice."
                },
                {
                  "no": "09",
                  "topic": "Mixed Problems and Test-Style Practice",
                  "whatWeCover": "Practise multi-step problems and explain your thinking, including EQAO-style questions for Ontario families."
                },
                {
                  "no": "10",
                  "topic": "Grade 3 Review and Grade 4 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 4 math, including multi-digit multiplication. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-3/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Plant Parts and Their Jobs",
                  "whatWeCover": "Name roots, stems, leaves and flowers and explain what each part does."
                },
                {
                  "no": "02",
                  "topic": "What Plants Need",
                  "whatWeCover": "Predict and test whether plants need light, water and air to grow."
                },
                {
                  "no": "03",
                  "topic": "Plant Life Cycles",
                  "whatWeCover": "Follow a plant from seed to adult plant and back to seed."
                },
                {
                  "no": "04",
                  "topic": "Seeds and Germination Investigation",
                  "whatWeCover": "Plan and run an investigation with bean seeds and record how they sprout and grow."
                },
                {
                  "no": "05",
                  "topic": "Plants in Canada",
                  "whatWeCover": "Explore trees, wildflowers and crops across Canada, such as the maple tree and prairie wheat."
                },
                {
                  "no": "06",
                  "topic": "Plants and the Seasons",
                  "whatWeCover": "Compare how deciduous and evergreen trees change through the Canadian seasons."
                },
                {
                  "no": "07",
                  "topic": "How People Use Plants",
                  "whatWeCover": "Look at how plants give us food, shelter, clothing and oxygen."
                },
                {
                  "no": "08",
                  "topic": "Caring for Plants",
                  "whatWeCover": "Learn how to grow and look after plants in a garden, school yard or community garden."
                },
                {
                  "no": "09",
                  "topic": "Plants and Animals Working Together",
                  "whatWeCover": "See how pollinators and seed spreaders and plants depend on each other."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise plant parts, needs and life cycles. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "What Is a Structure?",
                  "whatWeCover": "Sort structures into natural and human-made and describe what each is for."
                },
                {
                  "no": "02",
                  "topic": "Loads and Forces",
                  "whatWeCover": "Explore how weight and other forces act on a structure and what happens when it is too much."
                },
                {
                  "no": "03",
                  "topic": "Strong Shapes",
                  "whatWeCover": "Test triangles, squares and arches to see which shapes hold the most weight."
                },
                {
                  "no": "04",
                  "topic": "Materials for Structures",
                  "whatWeCover": "Compare materials such as wood, steel and paper for strength and flexibility."
                },
                {
                  "no": "05",
                  "topic": "Stability and Balance",
                  "whatWeCover": "Show how a wide base and a low centre of mass make a structure more stable."
                },
                {
                  "no": "06",
                  "topic": "Paper and Straw Challenge",
                  "whatWeCover": "Design and build a tall, stable structure using only paper and straws."
                },
                {
                  "no": "07",
                  "topic": "Bridges and Towers",
                  "whatWeCover": "Study famous structures, such as the CN Tower or the Confederation Bridge, and how they are built to be strong."
                },
                {
                  "no": "08",
                  "topic": "Test and Improve a Structure",
                  "whatWeCover": "Test a structure, find its weak points and redesign it."
                },
                {
                  "no": "09",
                  "topic": "Structures in Our Communities",
                  "whatWeCover": "Spot structures near you, such as shelters, bridges and playground equipment, and how they stay safe."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise structures, shapes and stability. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Forces Make Things Move",
                  "whatWeCover": "Explore how pushes and pulls start, stop and change the movement of objects."
                },
                {
                  "no": "02",
                  "topic": "Magnetic Force",
                  "whatWeCover": "Test which materials are magnetic and how a magnet pulls at a distance."
                },
                {
                  "no": "03",
                  "topic": "Magnets: Poles and Attraction",
                  "whatWeCover": "See how like and unlike poles push and pull, and map a magnet's strongest parts."
                },
                {
                  "no": "04",
                  "topic": "Static Electricity",
                  "whatWeCover": "Rub a balloon on hair and observe how static electricity attracts light objects."
                },
                {
                  "no": "05",
                  "topic": "Gravity",
                  "whatWeCover": "Find out how gravity pulls objects toward Earth and test dropping different objects."
                },
                {
                  "no": "06",
                  "topic": "Friction",
                  "whatWeCover": "Compare how different surfaces slow or speed up a moving object."
                },
                {
                  "no": "07",
                  "topic": "Contact and Non-Contact Forces",
                  "whatWeCover": "Sort forces by whether they need touching, such as a push versus a magnet."
                },
                {
                  "no": "08",
                  "topic": "Planning a Fair Test with Forces",
                  "whatWeCover": "Change one thing at a time, such as ramp height, and measure how far a toy car travels."
                },
                {
                  "no": "09",
                  "topic": "Forces in Everyday Life",
                  "whatWeCover": "Spot forces in sports and play, such as a puck sliding across ice or a ball rolling downhill."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise magnets, static electricity, gravity and friction. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "What Is Soil Made Of?",
                  "whatWeCover": "Look at the parts of soil: rock pieces, air, water and bits of dead plants and animals."
                },
                {
                  "no": "02",
                  "topic": "Types of Soil",
                  "whatWeCover": "Compare sand, silt, clay and loam by texture and how they hold water."
                },
                {
                  "no": "03",
                  "topic": "Soil Layers",
                  "whatWeCover": "Explore topsoil, subsoil and bedrock and how soil forms over a long time."
                },
                {
                  "no": "04",
                  "topic": "Soil and Water",
                  "whatWeCover": "Test how fast water drains through different soils and what it means for plants."
                },
                {
                  "no": "05",
                  "topic": "Living Things in Soil",
                  "whatWeCover": "Meet worms, insects and fungi and how they help soil stay healthy."
                },
                {
                  "no": "06",
                  "topic": "Soil and Farming",
                  "whatWeCover": "Find out why soil matters for farms across Canada, such as the prairie wheat belt."
                },
                {
                  "no": "07",
                  "topic": "Soil Erosion",
                  "whatWeCover": "Model how wind and water wash soil away and what protects it."
                },
                {
                  "no": "08",
                  "topic": "Caring for Soil",
                  "whatWeCover": "Explore composting, mulching and other simple ways people look after soil."
                },
                {
                  "no": "09",
                  "topic": "Mini Science Project",
                  "whatWeCover": "Choose a question, test it fairly and share the results in a short presentation."
                },
                {
                  "no": "10",
                  "topic": "Grade 3 Review and Grade 4 Readiness",
                  "whatWeCover": "Revise the year's science and preview Grade 4 topics. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 3 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 4 Tutoring",
          "text": "Build on Grade 3 with Grade 4 Math, English and Science, 40 live lessons per subject matched to your province's curriculum.",
          "buttonText": "View Grade 4",
          "href": "/ca/subjects/grade-4"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-4": {
    "gradeNum": 4,
    "yearId": "grade-4",
    "meta": {
      "title": "Grade 4 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 4 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-4"
    },
    "hero": {
      "h1": "Grade 4 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from fractions to food webs.",
      "primaryBtn": "Try a Free Grade 4 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 4 is when students gain independence, with bigger numbers, fractions and longer written responses. Our structured program builds Math, English and Science confidence with real Canadian examples, from tenths and hundredths on a price tag to food webs in the forest.",
      "keyTopics": {
        "math": "numbers to 10,000, multiplication and division, fractions and decimals, area, angles and grids.",
        "english": "vocabulary, comprehension, and opinion and report writing.",
        "science": "habitats, food webs, light, sound, and rocks and erosion."
      },
      "parentTip": "Spot tenths and hundredths at the grocery store: a $2.49 price is 2 dollars, 4 dimes and 9 cents. Ask your child to teach you one thing from each lesson. We make sure each idea clicks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 4, Your Child Will...",
      "items": [
        "Read, write, compare and round numbers to 10,000",
        "Find equivalent fractions and compare tenths and hundredths",
        "Make inferences, find the main idea and explain a story's theme",
        "Write organized stories, reports and opinion pieces with evidence",
        "Describe habitats, food webs and how animals adapt",
        "Identify rocks and minerals and explain how erosion changes land"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 4 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-4/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Word Study: Roots, Prefixes and Suffixes",
                  "whatWeCover": "Use common roots, prefixes and suffixes such as un-, pre-, -able and -tion to read and spell longer words."
                },
                {
                  "no": "02",
                  "topic": "Context Clues and Vocabulary",
                  "whatWeCover": "Work out new words from the sentences around them and build a word bank for reading and writing."
                },
                {
                  "no": "03",
                  "topic": "Reading with Fluency and Expression",
                  "whatWeCover": "Read grade-level text with accuracy, pace and expression, including poetry and dialogue."
                },
                {
                  "no": "04",
                  "topic": "Main Idea and Summarizing",
                  "whatWeCover": "Find the main idea and key details and summarize a text in a few clear sentences."
                },
                {
                  "no": "05",
                  "topic": "Making Inferences",
                  "whatWeCover": "Use clues from the text and what you already know to work out what the author does not say."
                },
                {
                  "no": "06",
                  "topic": "Story Elements and Plot",
                  "whatWeCover": "Track characters, setting, problem and solution and map the plot of a story."
                },
                {
                  "no": "07",
                  "topic": "Theme and Characters' Choices",
                  "whatWeCover": "Explain how a character's choices and changes point to the message of a story."
                },
                {
                  "no": "08",
                  "topic": "Point of View",
                  "whatWeCover": "Tell first-person from third-person narration and say how it changes what we know."
                },
                {
                  "no": "09",
                  "topic": "Responding to Texts",
                  "whatWeCover": "Share opinions and connections to a text and support them with evidence from the reading."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise vocabulary, comprehension and responding to texts. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Compound and Complex Sentences",
                  "whatWeCover": "Join ideas with and, but, because and although to build varied, clear sentences."
                },
                {
                  "no": "02",
                  "topic": "Parts of Speech Review",
                  "whatWeCover": "Use nouns, pronouns, verbs, adjectives, adverbs and prepositions correctly in writing."
                },
                {
                  "no": "03",
                  "topic": "Verb Tenses and Subject-Verb Agreement",
                  "whatWeCover": "Keep verb tenses consistent and make verbs agree with their subjects."
                },
                {
                  "no": "04",
                  "topic": "Punctuation: Commas, Quotation Marks and Apostrophes",
                  "whatWeCover": "Use commas in lists and clauses, quotation marks in dialogue and apostrophes in contractions and possessives."
                },
                {
                  "no": "05",
                  "topic": "Canadian Spelling Patterns",
                  "whatWeCover": "Learn Canadian spellings such as colour, neighbour, centre, theatre and defence, and when they differ from American ones."
                },
                {
                  "no": "06",
                  "topic": "Paragraphs and Transitions",
                  "whatWeCover": "Build paragraphs with a topic sentence, details and transition words that link ideas."
                },
                {
                  "no": "07",
                  "topic": "Narrative Writing: Plot and Description",
                  "whatWeCover": "Plan and write a story with a clear plot, vivid description and a satisfying ending."
                },
                {
                  "no": "08",
                  "topic": "Using Dialogue",
                  "whatWeCover": "Add dialogue with correct punctuation to show how characters think and feel."
                },
                {
                  "no": "09",
                  "topic": "Revising and Editing",
                  "whatWeCover": "Improve drafts by checking ideas, organization, word choice and conventions, alone and with a partner."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise grammar, spelling and narrative writing. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Nonfiction Text Features and Structure",
                  "whatWeCover": "Use headings, captions, diagrams and glossaries to find facts and see how a text is organized."
                },
                {
                  "no": "02",
                  "topic": "Cause and Effect, Compare and Contrast",
                  "whatWeCover": "Spot how nonfiction texts link ideas and use signal words such as because and however."
                },
                {
                  "no": "03",
                  "topic": "Fact, Opinion and Author's Purpose",
                  "whatWeCover": "Tell facts from opinions and decide why an author wrote a text."
                },
                {
                  "no": "04",
                  "topic": "Research Skills and Note-Taking",
                  "whatWeCover": "Find information in library books and safe websites, take notes in your own words and list sources."
                },
                {
                  "no": "05",
                  "topic": "Writing a Report",
                  "whatWeCover": "Organize research into paragraphs with a clear introduction, body and conclusion, such as a report on a Canadian animal."
                },
                {
                  "no": "06",
                  "topic": "Opinion Writing: Claim, Reasons and Evidence",
                  "whatWeCover": "State a claim, back it with reasons and examples and write a strong closing."
                },
                {
                  "no": "07",
                  "topic": "Writing Instructions and How-To Texts",
                  "whatWeCover": "Write clear, ordered steps with the right verbs and details, such as how to make a snowflake craft."
                },
                {
                  "no": "08",
                  "topic": "Media Texts: Audience and Purpose",
                  "whatWeCover": "Look at the message, audience and techniques in ads, websites and videos, and talk about staying safe online."
                },
                {
                  "no": "09",
                  "topic": "Oral Communication: Presentations and Discussions",
                  "whatWeCover": "Plan and give a short talk and take part in group discussions with respect for other views."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise nonfiction, opinion writing and media literacy. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry: Imagery and Sound Devices",
                  "whatWeCover": "Read and write poems that use imagery, rhyme and rhythm."
                },
                {
                  "no": "02",
                  "topic": "Figurative Language",
                  "whatWeCover": "Spot and use similes, metaphors, idioms and personification to make writing more vivid."
                },
                {
                  "no": "03",
                  "topic": "Word Choice and Voice",
                  "whatWeCover": "Choose precise words and a clear voice to match your audience and purpose."
                },
                {
                  "no": "04",
                  "topic": "Homophones and Word Relationships",
                  "whatWeCover": "Tell apart homophones, synonyms and antonyms, such as there, their and they're."
                },
                {
                  "no": "05",
                  "topic": "Comparing Texts and Themes",
                  "whatWeCover": "Compare two texts on the same theme or topic and discuss what is alike and different."
                },
                {
                  "no": "06",
                  "topic": "Reading Novels",
                  "whatWeCover": "Track plot, characters and questions across chapters and keep a reading log."
                },
                {
                  "no": "07",
                  "topic": "Writing in Response to Reading",
                  "whatWeCover": "Answer questions about a text in organized paragraphs with evidence."
                },
                {
                  "no": "08",
                  "topic": "Reading and Writing Test Practice",
                  "whatWeCover": "Practise timed reading and writing tasks, including FSA-style tasks for BC families."
                },
                {
                  "no": "09",
                  "topic": "Publishing a Writing Project",
                  "whatWeCover": "Plan, draft, edit and publish a longer piece, then share it with an audience."
                },
                {
                  "no": "10",
                  "topic": "Grade 4 Review and Grade 5 Readiness",
                  "whatWeCover": "Revise the year and preview Grade 5 reading and writing. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-4/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to 10,000",
                  "whatWeCover": "Read, write and show numbers to 10,000 with base ten blocks and place value charts. Practise telling 4,068 from 4,608."
                },
                {
                  "no": "02",
                  "topic": "Number Names, Expanded Form and Comparing",
                  "whatWeCover": "Write numbers in standard form, expanded form and words, then compare and order them, such as 6,205 = 6,000 + 200 + 5."
                },
                {
                  "no": "03",
                  "topic": "Rounding to the Nearest 10, 100 and 1,000",
                  "whatWeCover": "Round numbers using number lines and place value and use rounding to estimate."
                },
                {
                  "no": "04",
                  "topic": "Addition Within 10,000",
                  "whatWeCover": "Add four-digit numbers using place value, regrouping and estimation, then check the answer for sense."
                },
                {
                  "no": "05",
                  "topic": "Subtraction Within 10,000",
                  "whatWeCover": "Subtract four-digit numbers by regrouping and counting up, and check with addition."
                },
                {
                  "no": "06",
                  "topic": "Mental Math and Estimation",
                  "whatWeCover": "Use friendly numbers, compensation and breaking apart to calculate quickly in your head."
                },
                {
                  "no": "07",
                  "topic": "Multiples and Factors",
                  "whatWeCover": "Find multiples and factors of numbers to 100 and spot patterns in the multiplication table."
                },
                {
                  "no": "08",
                  "topic": "Patterns and Number Rules",
                  "whatWeCover": "Extend and describe growing patterns with a rule, and find missing numbers in equations."
                },
                {
                  "no": "09",
                  "topic": "Multi-Step Addition and Subtraction Problems",
                  "whatWeCover": "Solve problems with more than one step, such as comparing distances between Canadian cities, and explain the plan."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Check-In and Review",
                  "whatWeCover": "Revise place value, rounding and addition and subtraction through mixed tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Multiplication Facts to 10 by 10",
                  "whatWeCover": "Build quick recall of every times table to 10 by 10 using patterns, arrays and fact families."
                },
                {
                  "no": "02",
                  "topic": "Multiplying by 10 and 100",
                  "whatWeCover": "See how digits shift when you multiply by 10 and 100 and use it to multiply mentally."
                },
                {
                  "no": "03",
                  "topic": "Two-Digit by One-Digit Multiplication",
                  "whatWeCover": "Multiply with area models and partial products, such as 6 x 34, and then link to the standard method."
                },
                {
                  "no": "04",
                  "topic": "Multiplying Larger Numbers by One Digit",
                  "whatWeCover": "Multiply three-digit numbers by one digit and check answers with estimates."
                },
                {
                  "no": "05",
                  "topic": "Division Facts and Related Facts",
                  "whatWeCover": "Use multiplication facts to divide quickly, with fact families up to 100."
                },
                {
                  "no": "06",
                  "topic": "Dividing Two- and Three-Digit Numbers by One Digit",
                  "whatWeCover": "Divide using sharing, area models and partial quotients, and check by multiplying."
                },
                {
                  "no": "07",
                  "topic": "Remainders",
                  "whatWeCover": "Decide what a remainder means in a problem, such as how many vans are needed to carry 38 students."
                },
                {
                  "no": "08",
                  "topic": "Multiplication and Division Word Problems",
                  "whatWeCover": "Choose the right operation for one-step and two-step problems and write an equation for each."
                },
                {
                  "no": "09",
                  "topic": "Multi-Step Problems and Equations",
                  "whatWeCover": "Solve problems that mix operations and write equations with an unknown, such as 4 x n = 36."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise multiplication, division and word problems. A termly mock test and parent report follow."
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
                  "whatWeCover": "Find equal fractions with fraction strips and number lines, such as 1/2 = 2/4 = 4/8."
                },
                {
                  "no": "02",
                  "topic": "Comparing and Ordering Fractions",
                  "whatWeCover": "Compare and order fractions using benchmarks such as 0, 1/2 and 1, and common denominators."
                },
                {
                  "no": "03",
                  "topic": "Mixed Numbers and Improper Fractions",
                  "whatWeCover": "Show amounts greater than one as mixed numbers and improper fractions, and move between them."
                },
                {
                  "no": "04",
                  "topic": "Adding and Subtracting Fractions",
                  "whatWeCover": "Add and subtract fractions with like denominators using models and number lines."
                },
                {
                  "no": "05",
                  "topic": "Tenths and Hundredths",
                  "whatWeCover": "Link fractions to decimals with tenths and hundredths, using grids and money, such as $0.75."
                },
                {
                  "no": "06",
                  "topic": "Comparing and Ordering Decimals",
                  "whatWeCover": "Compare and order decimals to hundredths using place value charts and number lines."
                },
                {
                  "no": "07",
                  "topic": "Adding and Subtracting Decimals",
                  "whatWeCover": "Add and subtract decimals to hundredths, such as totalling prices in a store."
                },
                {
                  "no": "08",
                  "topic": "Decimals and Canadian Money",
                  "whatWeCover": "Solve money problems with dollars and cents, including making change and rounding cash totals to the nearest five cents."
                },
                {
                  "no": "09",
                  "topic": "Fractions, Decimals and Number Lines",
                  "whatWeCover": "Place fractions and decimals on the same number line and see how they connect."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise fractions, decimals and money. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Area of Rectangles",
                  "whatWeCover": "Find area using square units, then use length times width, such as the floor of a classroom."
                },
                {
                  "no": "02",
                  "topic": "Perimeter and Area Problems",
                  "whatWeCover": "Solve problems that mix perimeter and area, such as fencing a school garden."
                },
                {
                  "no": "03",
                  "topic": "Mass and Capacity",
                  "whatWeCover": "Measure, estimate and convert grams, kilograms, millilitres and litres in everyday examples."
                },
                {
                  "no": "04",
                  "topic": "Elapsed Time and 24-Hour Clocks",
                  "whatWeCover": "Read 12-hour and 24-hour clocks and find elapsed time, such as the length of a train ride."
                },
                {
                  "no": "05",
                  "topic": "Angles",
                  "whatWeCover": "Name right, acute and obtuse angles, compare them to a right angle and measure with a protractor."
                },
                {
                  "no": "06",
                  "topic": "Lines, Symmetry and Transformations",
                  "whatWeCover": "Spot parallel and perpendicular lines and show slides, flips and turns of shapes."
                },
                {
                  "no": "07",
                  "topic": "Coordinate Grids",
                  "whatWeCover": "Plot and read points on the first quadrant of a grid and describe a path with coordinates."
                },
                {
                  "no": "08",
                  "topic": "Graphs and Likelihood",
                  "whatWeCover": "Read and make bar graphs and line graphs, and describe the chance of events with simple fractions."
                },
                {
                  "no": "09",
                  "topic": "Mixed Problems and Test-Style Practice",
                  "whatWeCover": "Practise multi-step numeracy problems and explain your thinking, including FSA-style tasks for BC families."
                },
                {
                  "no": "10",
                  "topic": "Grade 4 Review and Grade 5 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 5 math, including decimals and volume. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-4/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Habitats and Communities",
                  "whatWeCover": "Explore what a habitat is and how plants and animals in a community depend on each other."
                },
                {
                  "no": "02",
                  "topic": "Producers, Consumers and Decomposers",
                  "whatWeCover": "Sort living things by how they get energy, such as a maple tree, a deer and a mushroom."
                },
                {
                  "no": "03",
                  "topic": "Food Chains and Food Webs",
                  "whatWeCover": "Build food chains and food webs for a Canadian habitat and see how energy moves."
                },
                {
                  "no": "04",
                  "topic": "Canadian Habitats",
                  "whatWeCover": "Compare the boreal forest, Arctic tundra, prairie grasslands and wetlands and the animals living in each."
                },
                {
                  "no": "05",
                  "topic": "Adaptations",
                  "whatWeCover": "See how traits such as thick fur, camouflage and webbed feet help animals survive."
                },
                {
                  "no": "06",
                  "topic": "Interdependence in Communities",
                  "whatWeCover": "Show how changes to one species, such as fewer beavers, affect the whole community."
                },
                {
                  "no": "07",
                  "topic": "Human Impact on Habitats",
                  "whatWeCover": "Look at how building, farming and pollution change habitats, for better and for worse."
                },
                {
                  "no": "08",
                  "topic": "Protecting Habitats",
                  "whatWeCover": "Explore how parks, wetlands and wildlife corridors help protect nature."
                },
                {
                  "no": "09",
                  "topic": "Species at Risk in Canada",
                  "whatWeCover": "Learn about species at risk, such as the beluga whale or the monarch butterfly, and how people help them."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise habitats, food webs and adaptations. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Sources of Light",
                  "whatWeCover": "Sort natural and artificial light sources and see how we see objects."
                },
                {
                  "no": "02",
                  "topic": "How Light Travels",
                  "whatWeCover": "Show that light travels in straight lines and makes shadows, and test what blocks it."
                },
                {
                  "no": "03",
                  "topic": "Reflection and Mirrors",
                  "whatWeCover": "Test how light bounces off mirrors and shiny surfaces and trace the path of a beam."
                },
                {
                  "no": "04",
                  "topic": "Refraction and Lenses",
                  "whatWeCover": "Observe how light bends through water and lenses, such as a magnifying glass."
                },
                {
                  "no": "05",
                  "topic": "Colour and Light",
                  "whatWeCover": "Explore how white light splits into colours, as in a rainbow, and why objects look coloured."
                },
                {
                  "no": "06",
                  "topic": "Sound and Vibration",
                  "whatWeCover": "Show that sound comes from vibrations using rulers, rubber bands and drums."
                },
                {
                  "no": "07",
                  "topic": "Pitch and Volume",
                  "whatWeCover": "Change pitch and volume with instruments and describe what changes in the sound."
                },
                {
                  "no": "08",
                  "topic": "How Sound Travels",
                  "whatWeCover": "Test how sound moves through air, water and solids and what absorbs it."
                },
                {
                  "no": "09",
                  "topic": "Light and Sound in Technology and Safety",
                  "whatWeCover": "Look at tools that use light and sound and ways to protect our eyes and ears."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise light, colour and sound. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Simple Machines Review",
                  "whatWeCover": "Revisit levers, ramps, wheels and axles and how they make work easier."
                },
                {
                  "no": "02",
                  "topic": "Pulleys",
                  "whatWeCover": "Test fixed and movable pulleys and see how they change the direction of a force."
                },
                {
                  "no": "03",
                  "topic": "Pulley Systems",
                  "whatWeCover": "Combine pulleys to lift a load and compare the effort needed."
                },
                {
                  "no": "04",
                  "topic": "Gears",
                  "whatWeCover": "Explore how toothed gears turn and pass motion from one part to another."
                },
                {
                  "no": "05",
                  "topic": "Gear Trains and Direction",
                  "whatWeCover": "Predict how gear size and number change speed and direction."
                },
                {
                  "no": "06",
                  "topic": "Mechanisms at Home and at Work",
                  "whatWeCover": "Spot pulleys and gears in tools, bikes and flagpoles."
                },
                {
                  "no": "07",
                  "topic": "Efficiency and Friction",
                  "whatWeCover": "Find out how friction affects how well a mechanism works and how oil or smooth surfaces help."
                },
                {
                  "no": "08",
                  "topic": "Design Challenge",
                  "whatWeCover": "Design and build a simple mechanism that moves a load."
                },
                {
                  "no": "09",
                  "topic": "Planning a Fair Test",
                  "whatWeCover": "Decide what to change, what to measure and what to keep the same when testing a design."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise pulleys, gears and mechanisms. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Rocks Around Us",
                  "whatWeCover": "Observe rocks near you and describe them by colour, texture and layers."
                },
                {
                  "no": "02",
                  "topic": "Three Types of Rock",
                  "whatWeCover": "Sort rocks into igneous, sedimentary and metamorphic and explain how each forms."
                },
                {
                  "no": "03",
                  "topic": "Minerals and Their Properties",
                  "whatWeCover": "Describe minerals by hardness, lustre, colour and streak."
                },
                {
                  "no": "04",
                  "topic": "Identifying Minerals",
                  "whatWeCover": "Test mineral samples with simple scratch and streak tests to name them."
                },
                {
                  "no": "05",
                  "topic": "Canadian Rocks and Minerals",
                  "whatWeCover": "Explore the Canadian Shield and Canadian minerals such as nickel, gold and potash."
                },
                {
                  "no": "06",
                  "topic": "Weathering and Erosion",
                  "whatWeCover": "Model how wind, water and ice wear rock down and move it."
                },
                {
                  "no": "07",
                  "topic": "Rocks and Minerals in Everyday Life",
                  "whatWeCover": "See how people use rocks and minerals in buildings, roads, phones and jewellery."
                },
                {
                  "no": "08",
                  "topic": "Mining and the Environment",
                  "whatWeCover": "Weigh the benefits of mining against its effects on land and water, and how it can be done responsibly."
                },
                {
                  "no": "09",
                  "topic": "Mini Science Project",
                  "whatWeCover": "Choose a question, test it fairly and share the results in a short presentation."
                },
                {
                  "no": "10",
                  "topic": "Grade 4 Review and Grade 5 Readiness",
                  "whatWeCover": "Revise the year's science and preview Grade 5 topics. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 4 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 5 Tutoring",
          "text": "Build on Grade 4 with Grade 5 Math, English and Science, 40 live lessons per subject matched to your province's curriculum.",
          "buttonText": "View Grade 5",
          "href": "/ca/subjects/grade-5"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-5": {
    "gradeNum": 5,
    "yearId": "grade-5",
    "meta": {
      "title": "Grade 5 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 5 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-5"
    },
    "hero": {
      "h1": "Grade 5 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from decimals to renewable energy.",
      "primaryBtn": "Try a Free Grade 5 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 5 brings decimals, percent, novels and the human body, and the pace picks up. Our structured program builds Math, English and Science skills with familiar Canadian examples, from GST on a shopping receipt to renewable energy in Canada.",
      "keyTopics": {
        "math": "numbers to 100,000, decimals, fractions, percent and GST, volume and angles.",
        "english": "word roots, novels, and descriptive and persuasive writing.",
        "science": "body systems, physical and chemical change, and renewable energy."
      },
      "parentTip": "Look at a flyer or receipt together and work out a 20% discount or the GST. Chat about the novel your child is reading. Short, real-life talk builds more confidence than long worksheets."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 5, Your Child Will...",
      "items": [
        "Multiply and divide larger numbers using methods that make sense",
        "Link fractions, decimals and percent and use them with Canadian money and GST",
        "Make inferences and support them with evidence from the text",
        "Write organized stories, reports and persuasive pieces",
        "Explain how the digestive, respiratory and circulatory systems work",
        "Compare renewable and nonrenewable energy sources in Canada"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 5 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-5/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Word Roots, Prefixes and Suffixes",
                  "whatWeCover": "Use Greek and Latin roots, prefixes and suffixes such as bio-, tele-, -able and -ology to read and spell longer words."
                },
                {
                  "no": "02",
                  "topic": "Context Clues and Vocabulary",
                  "whatWeCover": "Work out unfamiliar words from the text around them and build a personal word bank."
                },
                {
                  "no": "03",
                  "topic": "Reading with Fluency and Expression",
                  "whatWeCover": "Read grade-level text with accuracy, pace and expression, including poetry and scripts."
                },
                {
                  "no": "04",
                  "topic": "Main Idea and Summaries",
                  "whatWeCover": "Find the main idea and key details and write a concise summary in your own words."
                },
                {
                  "no": "05",
                  "topic": "Inferences and Evidence",
                  "whatWeCover": "Use clues from the text and what you already know to make inferences, and cite the lines that support them."
                },
                {
                  "no": "06",
                  "topic": "Plot, Setting and Characters",
                  "whatWeCover": "Track how characters change, how the setting matters and how the plot builds to a climax."
                },
                {
                  "no": "07",
                  "topic": "Theme and Author's Message",
                  "whatWeCover": "Explain a theme and the details that show it, in short stories and novels."
                },
                {
                  "no": "08",
                  "topic": "Point of View and Perspective",
                  "whatWeCover": "Compare how a story changes when told by different narrators and from different perspectives."
                },
                {
                  "no": "09",
                  "topic": "Responding to Literature",
                  "whatWeCover": "Share a reasoned opinion about a text and support it with evidence and connections."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise vocabulary, comprehension and responding to literature. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Sentence Variety, Fragments and Run-Ons",
                  "whatWeCover": "Write sentences of different lengths and fix fragments and run-on sentences."
                },
                {
                  "no": "02",
                  "topic": "Prepositions, Conjunctions and Interjections",
                  "whatWeCover": "Use prepositions, conjunctions and interjections to link ideas and add detail."
                },
                {
                  "no": "03",
                  "topic": "Verb Tenses and Subject-Verb Agreement",
                  "whatWeCover": "Keep tenses consistent and make verbs agree with their subjects, including with compound subjects."
                },
                {
                  "no": "04",
                  "topic": "Commas and Dialogue Punctuation",
                  "whatWeCover": "Use commas in complex sentences and punctuate dialogue with quotation marks."
                },
                {
                  "no": "05",
                  "topic": "Canadian Spelling and Common Errors",
                  "whatWeCover": "Master Canadian spellings such as colour, centre, licence and cheque, and fix common errors such as its and it's."
                },
                {
                  "no": "06",
                  "topic": "Paragraph Organization",
                  "whatWeCover": "Build paragraphs with a clear topic sentence, supporting details and smooth transitions."
                },
                {
                  "no": "07",
                  "topic": "Narrative Writing: Show, Don't Tell",
                  "whatWeCover": "Write stories that show feelings and action through detail, dialogue and pacing."
                },
                {
                  "no": "08",
                  "topic": "Descriptive Writing",
                  "whatWeCover": "Use sensory details and precise words to describe a place, a person or an event."
                },
                {
                  "no": "09",
                  "topic": "Revising and Editing",
                  "whatWeCover": "Improve drafts by checking ideas, organization, voice and conventions, alone and with a partner."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise grammar, spelling and narrative writing. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Nonfiction Text Structures",
                  "whatWeCover": "Spot description, sequence, cause and effect, compare and contrast and problem and solution in nonfiction."
                },
                {
                  "no": "02",
                  "topic": "Fact, Opinion and Author's Purpose",
                  "whatWeCover": "Tell facts from opinions, find bias and decide why an author wrote a text."
                },
                {
                  "no": "03",
                  "topic": "Charts, Maps and Diagrams",
                  "whatWeCover": "Read and use graphics, such as maps of Canada, to find and check information."
                },
                {
                  "no": "04",
                  "topic": "Research and Citing Sources",
                  "whatWeCover": "Find information in books and trusted websites, take notes in your own words and list sources."
                },
                {
                  "no": "05",
                  "topic": "Writing a Report",
                  "whatWeCover": "Organize research into an introduction, body and conclusion, such as a report on a Canadian explorer or inventor."
                },
                {
                  "no": "06",
                  "topic": "Persuasive Writing: Claim and Evidence",
                  "whatWeCover": "State a clear claim, support it with reasons and evidence and answer an opposing view."
                },
                {
                  "no": "07",
                  "topic": "Persuasive Letters and Speeches",
                  "whatWeCover": "Write a letter or short speech to persuade, such as a letter to a city councillor about a new park."
                },
                {
                  "no": "08",
                  "topic": "Media Literacy: Messages, Bias and Online Safety",
                  "whatWeCover": "Look at the message, audience and bias in ads, news and websites, and practise staying safe online."
                },
                {
                  "no": "09",
                  "topic": "Oral Communication: Debates and Presentations",
                  "whatWeCover": "Plan and deliver a talk and take part in a respectful class debate."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise nonfiction, persuasive writing and media literacy. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry: Forms and Imagery",
                  "whatWeCover": "Read and write haiku, free verse and narrative poems that use imagery and rhythm."
                },
                {
                  "no": "02",
                  "topic": "Figurative Language",
                  "whatWeCover": "Spot and use similes, metaphors, idioms, hyperbole and personification."
                },
                {
                  "no": "03",
                  "topic": "Word Choice and Tone",
                  "whatWeCover": "Choose precise words and a tone that fits your audience and purpose."
                },
                {
                  "no": "04",
                  "topic": "Synonyms, Antonyms and Idioms",
                  "whatWeCover": "Explore word relationships and common idioms, such as breaking the ice."
                },
                {
                  "no": "05",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare two texts on a topic or theme and discuss differences in approach and message."
                },
                {
                  "no": "06",
                  "topic": "Novel Study",
                  "whatWeCover": "Track plot, character change and themes across a whole novel and keep a reading log."
                },
                {
                  "no": "07",
                  "topic": "Writing About Reading",
                  "whatWeCover": "Write an organized response to a text with a claim, evidence and explanation."
                },
                {
                  "no": "08",
                  "topic": "Reading and Writing Test Practice",
                  "whatWeCover": "Practise timed reading and writing tasks in the style of provincial assessments."
                },
                {
                  "no": "09",
                  "topic": "Publishing a Writing Project",
                  "whatWeCover": "Plan, draft, edit and publish a longer piece, then share it with an audience."
                },
                {
                  "no": "10",
                  "topic": "Grade 5 Review and Grade 6 Readiness",
                  "whatWeCover": "Revise the year and preview Grade 6 reading and writing, including the Ontario EQAO year. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-5/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to 100,000",
                  "whatWeCover": "Read, write and show numbers to 100,000 with place value charts and number lines. Practise telling 45,206 from 45,260."
                },
                {
                  "no": "02",
                  "topic": "Rounding and Estimating Large Numbers",
                  "whatWeCover": "Round to the nearest 10, 100, 1,000 and 10,000 and use rounding to check answers."
                },
                {
                  "no": "03",
                  "topic": "Adding and Subtracting Large Numbers",
                  "whatWeCover": "Add and subtract numbers to 100,000 with place value strategies and the standard method, and check for sense."
                },
                {
                  "no": "04",
                  "topic": "Multiplying Two-Digit by Two-Digit Numbers",
                  "whatWeCover": "Multiply with area models and partial products, such as 34 x 26, and then link to the standard method."
                },
                {
                  "no": "05",
                  "topic": "Multiplying Three-Digit by Two-Digit Numbers",
                  "whatWeCover": "Extend multiplication to larger numbers and estimate first to spot mistakes."
                },
                {
                  "no": "06",
                  "topic": "Dividing Larger Numbers by One Digit",
                  "whatWeCover": "Divide up to four-digit numbers with partial quotients and long division, and check by multiplying."
                },
                {
                  "no": "07",
                  "topic": "Division with Two-Digit Divisors",
                  "whatWeCover": "Divide by two-digit numbers using estimation and multiples, and interpret remainders."
                },
                {
                  "no": "08",
                  "topic": "Order of Operations",
                  "whatWeCover": "Use brackets, multiplication, division, addition and subtraction in the right order."
                },
                {
                  "no": "09",
                  "topic": "Patterns, Equations and Word Problems",
                  "whatWeCover": "Write and solve equations with an unknown and use them for multi-step problems, such as the total attendance at a community hockey tournament."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Check-In and Review",
                  "whatWeCover": "Revise large numbers, multiplication and division through mixed tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Decimals to Thousandths",
                  "whatWeCover": "Read, write and show decimals to thousandths with place value charts and grids."
                },
                {
                  "no": "02",
                  "topic": "Comparing, Ordering and Rounding Decimals",
                  "whatWeCover": "Compare, order and round decimals using number lines and place value."
                },
                {
                  "no": "03",
                  "topic": "Adding and Subtracting Decimals",
                  "whatWeCover": "Add and subtract decimals to thousandths and line up the digits correctly."
                },
                {
                  "no": "04",
                  "topic": "Multiplying Decimals by Whole Numbers",
                  "whatWeCover": "Multiply decimals using area models and estimation, such as the cost of 6 items at $3.45 each."
                },
                {
                  "no": "05",
                  "topic": "Dividing Decimals by Whole Numbers",
                  "whatWeCover": "Divide decimals by whole numbers and use the answer in measurement and money problems."
                },
                {
                  "no": "06",
                  "topic": "Multiplying and Dividing by 10, 100 and 1,000",
                  "whatWeCover": "See how digits shift and use it to convert between metric units."
                },
                {
                  "no": "07",
                  "topic": "Fractions, Decimals and Percent",
                  "whatWeCover": "Link fractions, decimals and percent as parts of 100, such as 1/4 = 0.25 = 25%."
                },
                {
                  "no": "08",
                  "topic": "Using Percent in Real Life",
                  "whatWeCover": "Find simple percents of amounts, such as a 20% discount on a $50 jacket, and compare deals."
                },
                {
                  "no": "09",
                  "topic": "Money, Sales Tax and Budgets",
                  "whatWeCover": "Work out totals with GST and HST, compare prices and plan a simple budget in Canadian dollars."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise decimals, percent and money. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Equivalent Fractions and Simplest Form",
                  "whatWeCover": "Find equal fractions and write fractions in simplest form using models and factors."
                },
                {
                  "no": "02",
                  "topic": "Comparing and Ordering Fractions",
                  "whatWeCover": "Compare and order fractions and mixed numbers using benchmarks and common denominators."
                },
                {
                  "no": "03",
                  "topic": "Improper Fractions and Mixed Numbers",
                  "whatWeCover": "Move between improper fractions and mixed numbers with models and number lines."
                },
                {
                  "no": "04",
                  "topic": "Adding Fractions with Unlike Denominators",
                  "whatWeCover": "Add fractions by finding a common denominator and simplify the answer."
                },
                {
                  "no": "05",
                  "topic": "Subtracting Fractions with Unlike Denominators",
                  "whatWeCover": "Subtract fractions with unlike denominators using models and equivalent fractions."
                },
                {
                  "no": "06",
                  "topic": "Adding and Subtracting Mixed Numbers",
                  "whatWeCover": "Add and subtract mixed numbers with regrouping and check with estimates."
                },
                {
                  "no": "07",
                  "topic": "Fractions of a Whole Number",
                  "whatWeCover": "Find a fraction of an amount, such as 3/4 of 24 players on a hockey roster."
                },
                {
                  "no": "08",
                  "topic": "Multiplying a Fraction by a Whole Number",
                  "whatWeCover": "Use repeated addition and models to multiply fractions by whole numbers."
                },
                {
                  "no": "09",
                  "topic": "Fraction Word Problems",
                  "whatWeCover": "Solve multi-step problems with fractions, such as sharing a recipe or planning a trail walk."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise fractions and mixed numbers. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Perimeter and Area of Rectangles",
                  "whatWeCover": "Find perimeter and area with formulas and solve problems, such as the floor of a bedroom."
                },
                {
                  "no": "02",
                  "topic": "Area of Triangles and Parallelograms",
                  "whatWeCover": "Use base and height to find the area of triangles and parallelograms."
                },
                {
                  "no": "03",
                  "topic": "Volume of Rectangular Prisms",
                  "whatWeCover": "Build prisms with cubes and find volume in cubic centimetres and cubic metres."
                },
                {
                  "no": "04",
                  "topic": "Capacity and Mass: Metric Conversions",
                  "whatWeCover": "Convert between millilitres and litres and between grams and kilograms in everyday examples."
                },
                {
                  "no": "05",
                  "topic": "Angles and Triangles",
                  "whatWeCover": "Measure and draw angles with a protractor and sort triangles by sides and angles."
                },
                {
                  "no": "06",
                  "topic": "Transformations, Coordinate Grids and Coding",
                  "whatWeCover": "Plot points on a grid, show slides, flips and turns and write simple coding sequences."
                },
                {
                  "no": "07",
                  "topic": "Data: Mean, Median and Graphs",
                  "whatWeCover": "Read and make bar graphs and line graphs and find the mean, median and mode of a set of data."
                },
                {
                  "no": "08",
                  "topic": "Probability",
                  "whatWeCover": "Describe the likelihood of events with fractions and test them with spinners and dice."
                },
                {
                  "no": "09",
                  "topic": "Mixed Problems and Test-Style Practice",
                  "whatWeCover": "Practise multi-step numeracy problems and explain your thinking, in the style of provincial assessments."
                },
                {
                  "no": "10",
                  "topic": "Grade 5 Review and Grade 6 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 6 math, including ratios and the Ontario EQAO year. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-5/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Body Systems Overview",
                  "whatWeCover": "Meet the major body systems and how each helps us live, move and grow."
                },
                {
                  "no": "02",
                  "topic": "The Digestive System",
                  "whatWeCover": "Follow food from mouth to stomach to intestines and see how the body gets energy."
                },
                {
                  "no": "03",
                  "topic": "The Respiratory System",
                  "whatWeCover": "Explore how lungs and airways bring in oxygen and remove carbon dioxide."
                },
                {
                  "no": "04",
                  "topic": "The Circulatory System",
                  "whatWeCover": "Learn how the heart, blood and vessels carry oxygen and nutrients around the body."
                },
                {
                  "no": "05",
                  "topic": "How Body Systems Work Together",
                  "whatWeCover": "Show how systems cooperate, such as breathing and circulation during exercise."
                },
                {
                  "no": "06",
                  "topic": "Healthy Choices and Nutrition",
                  "whatWeCover": "Use ideas from Canada's Food Guide to plan balanced meals and snacks."
                },
                {
                  "no": "07",
                  "topic": "Exercise and the Body",
                  "whatWeCover": "Test how heart rate and breathing change with activity and what that tells us."
                },
                {
                  "no": "08",
                  "topic": "Sleep, Hygiene and Wellbeing",
                  "whatWeCover": "Explore habits that keep body systems healthy, such as sleep, handwashing and screen breaks."
                },
                {
                  "no": "09",
                  "topic": "Medical Technology",
                  "whatWeCover": "Look at tools such as stethoscopes and X-rays and Canadian inventions such as the pacemaker."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise body systems and healthy living. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Properties of Matter",
                  "whatWeCover": "Describe matter by mass, volume, colour, texture and state."
                },
                {
                  "no": "02",
                  "topic": "Solids, Liquids and Gases",
                  "whatWeCover": "Compare particles and behaviour in three states of matter and what happens at changes of state."
                },
                {
                  "no": "03",
                  "topic": "Measuring Mass and Volume",
                  "whatWeCover": "Use scales and measuring cylinders to measure mass and volume accurately."
                },
                {
                  "no": "04",
                  "topic": "Physical Changes",
                  "whatWeCover": "Explore changes such as melting, dissolving and cutting that do not make a new substance."
                },
                {
                  "no": "05",
                  "topic": "Chemical Changes",
                  "whatWeCover": "Look for signs of a chemical change, such as gas bubbles, colour change and heat, with safe examples."
                },
                {
                  "no": "06",
                  "topic": "Reversible and Irreversible Changes",
                  "whatWeCover": "Sort changes by whether they can be undone and explain why."
                },
                {
                  "no": "07",
                  "topic": "Conservation of Mass",
                  "whatWeCover": "Test whether total mass stays the same during a change."
                },
                {
                  "no": "08",
                  "topic": "Mixtures and Separating Them",
                  "whatWeCover": "Separate mixtures with filters, magnets and evaporation, such as sand and salt."
                },
                {
                  "no": "09",
                  "topic": "Safe Science and Fair Tests",
                  "whatWeCover": "Follow safety rules and plan fair tests with one changed variable."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise matter and changes in matter. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Forces on Structures",
                  "whatWeCover": "Explore how forces act on bridges, towers and buildings."
                },
                {
                  "no": "02",
                  "topic": "Internal and External Forces",
                  "whatWeCover": "Tell forces from inside a structure from forces that act on it, such as wind and snow load."
                },
                {
                  "no": "03",
                  "topic": "Tension and Compression",
                  "whatWeCover": "Show how parts of a structure are pulled or pushed and how shapes handle each force."
                },
                {
                  "no": "04",
                  "topic": "Torsion and Shear",
                  "whatWeCover": "Test twisting and sliding forces on simple models."
                },
                {
                  "no": "05",
                  "topic": "Mechanisms and Levers",
                  "whatWeCover": "See how levers and linkages move forces and make work easier."
                },
                {
                  "no": "06",
                  "topic": "Mechanical Systems",
                  "whatWeCover": "Explain how parts such as gears and pulleys work together as a system."
                },
                {
                  "no": "07",
                  "topic": "Strength of Materials",
                  "whatWeCover": "Test how different materials, such as wood, steel and plastic, resist forces."
                },
                {
                  "no": "08",
                  "topic": "Design: Strong and Stable Structures",
                  "whatWeCover": "Design and build a structure that holds a load and stays stable."
                },
                {
                  "no": "09",
                  "topic": "Test, Redesign and Fair Test",
                  "whatWeCover": "Test a design, find weak points and improve it."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise forces, structures and mechanisms. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Forms of Energy",
                  "whatWeCover": "Identify light, heat, sound, motion and electrical energy in everyday examples."
                },
                {
                  "no": "02",
                  "topic": "Energy Transformations",
                  "whatWeCover": "Follow energy as it changes form, such as a toaster or a wind turbine."
                },
                {
                  "no": "03",
                  "topic": "Renewable and Nonrenewable Energy in Canada",
                  "whatWeCover": "Compare hydro, wind, solar, natural gas and oil and where they are found across Canada."
                },
                {
                  "no": "04",
                  "topic": "Energy at Home",
                  "whatWeCover": "Look at how homes use energy for heating in winter and ways to cut waste."
                },
                {
                  "no": "05",
                  "topic": "Where Our Electricity Comes From",
                  "whatWeCover": "Trace electricity from a power source to your home and discuss the role of hydroelectric power in Canada."
                },
                {
                  "no": "06",
                  "topic": "Conserving Resources",
                  "whatWeCover": "Explore how reducing, reusing and recycling saves energy and materials."
                },
                {
                  "no": "07",
                  "topic": "Energy and Climate",
                  "whatWeCover": "Link energy use to greenhouse gases and discuss ways to reduce impact."
                },
                {
                  "no": "08",
                  "topic": "Energy Innovations and Careers",
                  "whatWeCover": "Look at new technologies, such as solar panels and electric buses, and the jobs behind them."
                },
                {
                  "no": "09",
                  "topic": "Mini Science Project",
                  "whatWeCover": "Choose a question, test it fairly and share the results in a short presentation."
                },
                {
                  "no": "10",
                  "topic": "Grade 5 Review and Grade 6 Readiness",
                  "whatWeCover": "Revise the year's science and preview Grade 6 topics. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 5 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 6 Tutoring",
          "text": "Build on Grade 5 with Grade 6 Math, English and Science, 40 live lessons per subject matched to your province's curriculum.",
          "buttonText": "View Grade 6",
          "href": "/ca/subjects/grade-6"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-6": {
    "gradeNum": 6,
    "yearId": "grade-6",
    "meta": {
      "title": "Grade 6 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 6 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-6"
    },
    "hero": {
      "h1": "Grade 6 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from ratios to the solar system.",
      "primaryBtn": "Try a Free Grade 6 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 6 is a year of growing independence, and the last step before Grade 7 and a possible change of school. Our structured program builds Math, English and Science confidence with real Canadian examples, from exchange rates on a trip to the phases of the Moon.",
      "keyTopics": {
        "math": "numbers to 1,000,000, integers, ratios and rates, algebra and surface area.",
        "english": "novels, informational and persuasive writing, media literacy and debate.",
        "science": "biodiversity, circuits, flight, and Earth, Sun and Moon."
      },
      "parentTip": "Check the outdoor temperature together and talk about how far below zero it is, then help your child set up a weekly planner for Grade 7. We make sure each idea clicks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 6, Your Child Will...",
      "items": [
        "Compute with whole numbers to 1,000,000 and integers",
        "Solve ratio and rate problems, including exchange rates",
        "Make inferences and support them with direct evidence from the text",
        "Write organized stories, reports and persuasive essays",
        "Classify living things and explain why biodiversity matters",
        "Build and explain series and parallel circuits"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 6 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-6/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Word Roots, Prefixes and Suffixes",
                  "whatWeCover": "Use Greek and Latin roots, prefixes and suffixes such as aqua-, port-, -ology and -ment to unlock longer words."
                },
                {
                  "no": "02",
                  "topic": "Context Clues and Vocabulary",
                  "whatWeCover": "Work out unfamiliar words from context and build a personal word bank."
                },
                {
                  "no": "03",
                  "topic": "Reading with Fluency and Expression",
                  "whatWeCover": "Read grade-level text with accuracy, pace and expression, including poetry and scripts."
                },
                {
                  "no": "04",
                  "topic": "Main Idea and Summaries",
                  "whatWeCover": "Find the main idea and key details and write a concise summary in your own words."
                },
                {
                  "no": "05",
                  "topic": "Inferences and Evidence",
                  "whatWeCover": "Make inferences and support them with direct quotations and details from the text."
                },
                {
                  "no": "06",
                  "topic": "Plot Structure and Conflict",
                  "whatWeCover": "Map exposition, rising action, climax and resolution and identify types of conflict."
                },
                {
                  "no": "07",
                  "topic": "Theme and Author's Message",
                  "whatWeCover": "Explain a theme and the details that develop it across a story or novel."
                },
                {
                  "no": "08",
                  "topic": "Narrator and Point of View",
                  "whatWeCover": "Compare first-person and third-person narration and how each changes what readers know."
                },
                {
                  "no": "09",
                  "topic": "Responding to Literature",
                  "whatWeCover": "Share a reasoned opinion about a text and support it with evidence and connections."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise vocabulary, comprehension and responding to literature. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Simple, Compound and Complex Sentences",
                  "whatWeCover": "Build varied sentences using conjunctions and clauses, and fix fragments and run-ons."
                },
                {
                  "no": "02",
                  "topic": "Clauses and Phrases",
                  "whatWeCover": "Spot independent and dependent clauses and use phrases to add detail."
                },
                {
                  "no": "03",
                  "topic": "Verb Tenses and Active and Passive Voice",
                  "whatWeCover": "Keep tenses consistent and choose between active and passive voice for effect."
                },
                {
                  "no": "04",
                  "topic": "Commas, Colons and Dialogue Punctuation",
                  "whatWeCover": "Use commas, colons and quotation marks to make writing clear."
                },
                {
                  "no": "05",
                  "topic": "Canadian Spelling and Homophones",
                  "whatWeCover": "Master Canadian spellings such as colour, centre, licence and cheque and tricky homophones such as affect and effect."
                },
                {
                  "no": "06",
                  "topic": "Paragraphs and Transitions",
                  "whatWeCover": "Build paragraphs with a clear topic sentence, supporting details and smooth transitions."
                },
                {
                  "no": "07",
                  "topic": "Narrative Writing",
                  "whatWeCover": "Write a story with a strong plot, setting and character development."
                },
                {
                  "no": "08",
                  "topic": "Descriptive Writing and Voice",
                  "whatWeCover": "Use sensory details, strong verbs and a clear voice to bring a scene to life."
                },
                {
                  "no": "09",
                  "topic": "Revising and Editing",
                  "whatWeCover": "Improve drafts by checking ideas, organization, voice and conventions, alone and with a partner."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise grammar, spelling and narrative writing. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Text Structures and Features",
                  "whatWeCover": "Spot how nonfiction is organized and use headings, captions and indexes to navigate."
                },
                {
                  "no": "02",
                  "topic": "Bias and Author's Purpose",
                  "whatWeCover": "Find bias, tell fact from opinion and decide why an author wrote a text."
                },
                {
                  "no": "03",
                  "topic": "Reading Charts, Maps and Graphs",
                  "whatWeCover": "Read and interpret graphics, such as a map of the provinces and territories, and link them to the text."
                },
                {
                  "no": "04",
                  "topic": "Research and Citing Sources",
                  "whatWeCover": "Find information in books and trusted websites, take notes in your own words and list sources."
                },
                {
                  "no": "05",
                  "topic": "Informational Writing",
                  "whatWeCover": "Write a report with an introduction, body paragraphs and a conclusion, such as a report on a Canadian historical figure."
                },
                {
                  "no": "06",
                  "topic": "Persuasive Essay Structure",
                  "whatWeCover": "Write a thesis, support it with reasons and evidence and address a counterargument."
                },
                {
                  "no": "07",
                  "topic": "Open-Response Questions",
                  "whatWeCover": "Answer reading questions in full paragraphs with evidence, in the style of provincial assessments."
                },
                {
                  "no": "08",
                  "topic": "Media Literacy: News and Social Media",
                  "whatWeCover": "Look at the message, bias and purpose of news and social media, and practise checking sources."
                },
                {
                  "no": "09",
                  "topic": "Oral Communication: Debates and Presentations",
                  "whatWeCover": "Plan and deliver a talk and take part in a respectful class debate."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise nonfiction, persuasive writing and media literacy. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry: Forms and Imagery",
                  "whatWeCover": "Read and write poems that use imagery, rhythm and different forms."
                },
                {
                  "no": "02",
                  "topic": "Figurative Language and Symbolism",
                  "whatWeCover": "Spot and use similes, metaphors, symbolism and personification and explain their effect."
                },
                {
                  "no": "03",
                  "topic": "Tone, Mood and Style",
                  "whatWeCover": "Describe how word choice creates tone and mood and use them in your own writing."
                },
                {
                  "no": "04",
                  "topic": "Idioms, Synonyms and Antonyms",
                  "whatWeCover": "Explore word relationships and idioms, and choose the best word for the meaning."
                },
                {
                  "no": "05",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare two texts on the same topic or theme and discuss how each author approaches it."
                },
                {
                  "no": "06",
                  "topic": "Novel Study",
                  "whatWeCover": "Track plot, character change and themes across a whole novel and keep a reading log."
                },
                {
                  "no": "07",
                  "topic": "Writing a Literary Analysis Paragraph",
                  "whatWeCover": "Write a paragraph with a claim, evidence and explanation about a text."
                },
                {
                  "no": "08",
                  "topic": "Reading and Writing Test Practice",
                  "whatWeCover": "Practise timed reading and writing tasks, including EQAO-style questions for Ontario's Grade 6 assessment."
                },
                {
                  "no": "09",
                  "topic": "Publishing a Writing Project",
                  "whatWeCover": "Plan, draft, edit and publish a longer piece, then share it with an audience."
                },
                {
                  "no": "10",
                  "topic": "Grade 6 Review and Grade 7 Readiness",
                  "whatWeCover": "Revise the year and preview Grade 7 reading and writing, including BC's Grade 7 FSA. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-6/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Place Value to 1,000,000",
                  "whatWeCover": "Read, write and show numbers to 1,000,000 with place value charts and number lines. Practise telling 506,040 from 560,040."
                },
                {
                  "no": "02",
                  "topic": "Rounding and Estimating",
                  "whatWeCover": "Round large numbers to any place and use estimates to check that answers make sense."
                },
                {
                  "no": "03",
                  "topic": "Multiplying Whole Numbers",
                  "whatWeCover": "Multiply multi-digit numbers with area models and the standard method, and estimate first."
                },
                {
                  "no": "04",
                  "topic": "Dividing Whole Numbers",
                  "whatWeCover": "Divide multi-digit numbers using partial quotients and long division, and interpret remainders."
                },
                {
                  "no": "05",
                  "topic": "Order of Operations",
                  "whatWeCover": "Use brackets, exponents, multiplication, division, addition and subtraction in the right order."
                },
                {
                  "no": "06",
                  "topic": "Factors, Multiples and Prime Numbers",
                  "whatWeCover": "Find factors and multiples, spot prime and composite numbers and use them to simplify problems."
                },
                {
                  "no": "07",
                  "topic": "Integers and Negative Numbers",
                  "whatWeCover": "Meet negative numbers through everyday cases, such as a winter temperature of -25 degrees Celsius."
                },
                {
                  "no": "08",
                  "topic": "Comparing and Ordering Integers",
                  "whatWeCover": "Compare and order positive and negative numbers on number lines and thermometers."
                },
                {
                  "no": "09",
                  "topic": "Multi-Step Word Problems",
                  "whatWeCover": "Plan and solve problems with more than one step and explain each decision."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Check-In and Review",
                  "whatWeCover": "Revise whole numbers, operations and integers through mixed tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Decimals to Thousandths",
                  "whatWeCover": "Read, write, compare and order decimals to thousandths with place value charts."
                },
                {
                  "no": "02",
                  "topic": "Multiplying Decimals",
                  "whatWeCover": "Multiply decimals using area models and estimation, such as the cost of 2.5 kg of apples."
                },
                {
                  "no": "03",
                  "topic": "Dividing Decimals",
                  "whatWeCover": "Divide decimals by whole numbers and by decimals and use the result in money and measurement problems."
                },
                {
                  "no": "04",
                  "topic": "Equivalent Fractions and Mixed Numbers",
                  "whatWeCover": "Find equal fractions, simplify them and move between mixed numbers and improper fractions."
                },
                {
                  "no": "05",
                  "topic": "Adding and Subtracting Fractions",
                  "whatWeCover": "Add and subtract fractions and mixed numbers with unlike denominators and simplify answers."
                },
                {
                  "no": "06",
                  "topic": "Multiplying Fractions",
                  "whatWeCover": "Multiply a fraction by a whole number and by another fraction using area models."
                },
                {
                  "no": "07",
                  "topic": "Fraction Word Problems",
                  "whatWeCover": "Solve multi-step problems with fractions, such as scaling a recipe or sharing a trail mix."
                },
                {
                  "no": "08",
                  "topic": "Fractions, Decimals and Percent",
                  "whatWeCover": "Convert between fractions, decimals and percent and place them on the same number line."
                },
                {
                  "no": "09",
                  "topic": "Percent, Discounts and Tax",
                  "whatWeCover": "Find percent of an amount, such as a 30% discount, and work out totals with GST and HST."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise decimals, fractions and percent. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Ratios and Equivalent Ratios",
                  "whatWeCover": "Compare quantities with ratios and build equivalent ratios with tables and models."
                },
                {
                  "no": "02",
                  "topic": "Unit Rates",
                  "whatWeCover": "Find rates such as price per kilogram or speed in kilometres per hour and compare deals."
                },
                {
                  "no": "03",
                  "topic": "Ratio and Rate Problems",
                  "whatWeCover": "Solve problems with ratios and rates, such as scaling a recipe or a road trip of 600 km."
                },
                {
                  "no": "04",
                  "topic": "Money and Exchange Rates",
                  "whatWeCover": "Convert between Canadian and U.S. dollars with an exchange rate and see why rates change."
                },
                {
                  "no": "05",
                  "topic": "Variables and Expressions",
                  "whatWeCover": "Use letters to stand for unknowns and write expressions from word problems."
                },
                {
                  "no": "06",
                  "topic": "Equations and Unknowns",
                  "whatWeCover": "Solve one-step and two-step equations and check the answer."
                },
                {
                  "no": "07",
                  "topic": "Patterns and Relations",
                  "whatWeCover": "Describe growing patterns with tables of values and rules."
                },
                {
                  "no": "08",
                  "topic": "Coding with Variables and Loops",
                  "whatWeCover": "Write simple code that uses variables and repeats to solve a problem."
                },
                {
                  "no": "09",
                  "topic": "Algebra Word Problems",
                  "whatWeCover": "Translate real-life situations into equations and solve them."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise ratios, rates and algebra. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Area of Triangles and Parallelograms",
                  "whatWeCover": "Use base and height to find the area of triangles and parallelograms, and solve area problems."
                },
                {
                  "no": "02",
                  "topic": "Volume of Prisms",
                  "whatWeCover": "Find volume of rectangular and triangular prisms in cubic centimetres and cubic metres."
                },
                {
                  "no": "03",
                  "topic": "Surface Area of Prisms",
                  "whatWeCover": "Use nets to find the surface area of prisms and see how it differs from volume."
                },
                {
                  "no": "04",
                  "topic": "Angles and Triangles",
                  "whatWeCover": "Measure and draw angles, find unknown angles in triangles and classify triangles."
                },
                {
                  "no": "05",
                  "topic": "Transformations and the Coordinate Grid",
                  "whatWeCover": "Plot points in all four quadrants and show slides, flips and turns of shapes."
                },
                {
                  "no": "06",
                  "topic": "Data: Mean, Median, Mode and Graphs",
                  "whatWeCover": "Read and make graphs and find mean, median, mode and range of a data set."
                },
                {
                  "no": "07",
                  "topic": "Probability",
                  "whatWeCover": "Find the probability of simple events as fractions, decimals and percent and test with experiments."
                },
                {
                  "no": "08",
                  "topic": "Mixed Problems and EQAO-Style Practice",
                  "whatWeCover": "Practise multi-step problems and explain your thinking, including EQAO-style questions for Ontario's Grade 6 assessment."
                },
                {
                  "no": "09",
                  "topic": "Math Modelling Project",
                  "whatWeCover": "Plan a budget for a class trip, using rates, percent and estimates, and present the plan."
                },
                {
                  "no": "10",
                  "topic": "Grade 6 Review and Grade 7 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 7 math, including BC's Grade 7 FSA numeracy. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-6/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "What Is Biodiversity?",
                  "whatWeCover": "Explore the variety of life in an ecosystem and why it matters."
                },
                {
                  "no": "02",
                  "topic": "Classifying Living Things",
                  "whatWeCover": "Sort living things into groups using shared traits and simple keys."
                },
                {
                  "no": "03",
                  "topic": "Vertebrates and Invertebrates",
                  "whatWeCover": "Compare animals with and without backbones and how each group lives."
                },
                {
                  "no": "04",
                  "topic": "Plants and Fungi",
                  "whatWeCover": "Look at the diversity of plants and fungi in Canadian ecosystems, from boreal forest to prairie."
                },
                {
                  "no": "05",
                  "topic": "Variation Within a Species",
                  "whatWeCover": "See how members of the same species differ and why that variation helps survival."
                },
                {
                  "no": "06",
                  "topic": "Why Biodiversity Matters",
                  "whatWeCover": "Link biodiversity to healthy ecosystems, food, clean water and human wellbeing."
                },
                {
                  "no": "07",
                  "topic": "Threats to Biodiversity",
                  "whatWeCover": "Explore habitat loss, pollution, climate change and invasive species such as zebra mussels and emerald ash borer in Canada."
                },
                {
                  "no": "08",
                  "topic": "Protecting Biodiversity",
                  "whatWeCover": "Look at national parks, protected areas and community projects that conserve species."
                },
                {
                  "no": "09",
                  "topic": "Indigenous Knowledge and Land Stewardship",
                  "whatWeCover": "Learn how Indigenous Peoples in Canada have cared for land and species, with respectful examples."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise biodiversity and classification. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Static Electricity",
                  "whatWeCover": "Explore charge and how static electricity attracts and repels."
                },
                {
                  "no": "02",
                  "topic": "Current Electricity and Circuits",
                  "whatWeCover": "Build simple circuits with a cell, wires and a bulb and see why they need a complete loop."
                },
                {
                  "no": "03",
                  "topic": "Series and Parallel Circuits",
                  "whatWeCover": "Compare how bulbs behave in series and parallel circuits."
                },
                {
                  "no": "04",
                  "topic": "Conductors and Insulators",
                  "whatWeCover": "Test which materials let electricity flow and which block it."
                },
                {
                  "no": "05",
                  "topic": "Electrical Devices and Switches",
                  "whatWeCover": "Explore how switches and devices such as buzzers and motors work in a circuit."
                },
                {
                  "no": "06",
                  "topic": "Energy Transformations in Circuits",
                  "whatWeCover": "Follow electrical energy as it turns into light, heat, sound and motion."
                },
                {
                  "no": "07",
                  "topic": "Generating Electricity",
                  "whatWeCover": "Compare hydro, wind, solar and fossil fuel generation and how each is used across Canada."
                },
                {
                  "no": "08",
                  "topic": "Electrical Safety",
                  "whatWeCover": "Learn safe habits around outlets, cords and power lines."
                },
                {
                  "no": "09",
                  "topic": "Saving Electricity at Home",
                  "whatWeCover": "Use EnerGuide labels and simple habits to cut electricity use."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise static and current electricity. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Flight in Nature",
                  "whatWeCover": "Explore how birds, insects and seeds fly or glide."
                },
                {
                  "no": "02",
                  "topic": "The Four Forces of Flight",
                  "whatWeCover": "Describe lift, weight, thrust and drag and how they balance."
                },
                {
                  "no": "03",
                  "topic": "Wings and Airfoils",
                  "whatWeCover": "Test wing shapes and see how air moving over a wing creates lift."
                },
                {
                  "no": "04",
                  "topic": "Paper Planes and Gliders",
                  "whatWeCover": "Build and test gliders and change one feature at a time."
                },
                {
                  "no": "05",
                  "topic": "Types of Aircraft",
                  "whatWeCover": "Compare gliders, planes, helicopters and drones and how each flies."
                },
                {
                  "no": "06",
                  "topic": "Canada and Flight",
                  "whatWeCover": "Look at Canadian aviation, from bush planes in the North to modern airliners."
                },
                {
                  "no": "07",
                  "topic": "Design a Flying Device",
                  "whatWeCover": "Design, build and test a device that flies a set distance."
                },
                {
                  "no": "08",
                  "topic": "Fair Testing in Flight",
                  "whatWeCover": "Plan fair tests that change one variable, such as wing size or weight."
                },
                {
                  "no": "09",
                  "topic": "Air Travel and the Environment",
                  "whatWeCover": "Discuss how flying affects the environment and ways to reduce its impact."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise flight and aircraft design. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "The Earth, Sun and Moon System",
                  "whatWeCover": "Model how Earth, the Sun and the Moon move and how they relate."
                },
                {
                  "no": "02",
                  "topic": "Day, Night and Seasons",
                  "whatWeCover": "Explain day and night and seasons, including why Canadian summer days are so long and winter days so short."
                },
                {
                  "no": "03",
                  "topic": "Phases of the Moon",
                  "whatWeCover": "Observe and model the Moon's phases over a month."
                },
                {
                  "no": "04",
                  "topic": "The Solar System",
                  "whatWeCover": "Compare the planets by size, distance and features."
                },
                {
                  "no": "05",
                  "topic": "Stars and Constellations",
                  "whatWeCover": "Find star patterns, such as the Big Dipper, and learn how people have used stars to navigate and tell stories."
                },
                {
                  "no": "06",
                  "topic": "Space Exploration",
                  "whatWeCover": "Look at space missions and Canadian contributions such as the Canadarm and Canadian astronauts."
                },
                {
                  "no": "07",
                  "topic": "Satellites and Space Technology",
                  "whatWeCover": "Explore how satellites help with weather, mapping and communication across Canada."
                },
                {
                  "no": "08",
                  "topic": "Living in Space",
                  "whatWeCover": "Consider how people live and work on the International Space Station."
                },
                {
                  "no": "09",
                  "topic": "Mini Science Project",
                  "whatWeCover": "Choose a question, test it fairly and share the results in a short presentation."
                },
                {
                  "no": "10",
                  "topic": "Grade 6 Review and Grade 7 Readiness",
                  "whatWeCover": "Revise the year's science and preview Grade 7 topics. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 6 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 7 Tutoring",
          "text": "Build on Grade 6 with Grade 7 Math, English and Science, 40 live lessons per subject matched to your province's curriculum.",
          "buttonText": "View Grade 7",
          "href": "/ca/subjects/grade-7"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-7": {
    "gradeNum": 7,
    "yearId": "grade-7",
    "meta": {
      "title": "Grade 7 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 7 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-7"
    },
    "hero": {
      "h1": "Grade 7 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from GST and HST to earthquakes.",
      "primaryBtn": "Try a Free Grade 7 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 7 is a big step, with a possible new school, more teachers and heavier workloads. Our structured program builds Math, English and Science skills step by step, with familiar Canadian examples, from GST, HST and tips to earthquakes and Earth's crust.",
      "keyTopics": {
        "math": "integers, percent, ratios, GST and HST, equations, circles and probability.",
        "english": "critical reading, essays, poetry, drama and media texts.",
        "science": "ecosystems, mixtures, WHMIS, mechanical systems, heat and the Earth's crust."
      },
      "parentTip": "A new school brings new routines. Help your child use a planner, check homework each week and work out the tip and tax on a restaurant bill together. We make sure each idea clicks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 7, Your Child Will...",
      "items": [
        "Compute with integers, fractions, decimals and percent",
        "Work out discounts, GST, HST and tips",
        "Write organized essays with a clear thesis and evidence",
        "Spot bias and check sources in media texts",
        "Explain energy flow and interactions in Canadian ecosystems",
        "Separate mixtures and handle materials safely using WHMIS symbols"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 7 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-7/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Roots, Affixes and Word Origins",
                  "whatWeCover": "Use Greek and Latin roots and affixes, and trace word origins, to work out meaning and spelling."
                },
                {
                  "no": "02",
                  "topic": "Context Clues and Academic Vocabulary",
                  "whatWeCover": "Work out unfamiliar words from context and build a bank of academic words."
                },
                {
                  "no": "03",
                  "topic": "Reading Critically: Inference",
                  "whatWeCover": "Read between the lines and support inferences with direct evidence from the text."
                },
                {
                  "no": "04",
                  "topic": "Main Idea, Summary and Paraphrase",
                  "whatWeCover": "Find the main idea, write a concise summary and paraphrase a passage without copying."
                },
                {
                  "no": "05",
                  "topic": "Plot, Conflict and Character Development",
                  "whatWeCover": "Analyze how conflict drives plot and how characters change."
                },
                {
                  "no": "06",
                  "topic": "Theme and Author's Message",
                  "whatWeCover": "Identify themes and explain how the details and events develop them."
                },
                {
                  "no": "07",
                  "topic": "Point of View and Narrator Reliability",
                  "whatWeCover": "Compare narrators and decide how reliable they are and how that shapes the story."
                },
                {
                  "no": "08",
                  "topic": "Reading Short Stories",
                  "whatWeCover": "Read and discuss short stories from a range of authors, including Canadian writers."
                },
                {
                  "no": "09",
                  "topic": "Responding to Literature",
                  "whatWeCover": "Share a reasoned opinion about a text and support it with evidence and connections."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise vocabulary, comprehension and responding to literature. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Sentence Structure and Variety",
                  "whatWeCover": "Build varied simple, compound and complex sentences and fix fragments and run-ons."
                },
                {
                  "no": "02",
                  "topic": "Phrases and Clauses",
                  "whatWeCover": "Use phrases and clauses to add detail and combine ideas."
                },
                {
                  "no": "03",
                  "topic": "Verb Tenses, Voice and Agreement",
                  "whatWeCover": "Keep tenses consistent, choose active or passive voice and make subjects and verbs agree."
                },
                {
                  "no": "04",
                  "topic": "Semicolons, Colons and Hyphens",
                  "whatWeCover": "Use semicolons, colons and hyphens to make writing clear and varied."
                },
                {
                  "no": "05",
                  "topic": "Canadian Spelling and Confused Words",
                  "whatWeCover": "Master Canadian spellings such as colour, centre, licence and cheque and tricky pairs such as affect and effect."
                },
                {
                  "no": "06",
                  "topic": "Paragraphs and Essay Structure",
                  "whatWeCover": "Write a clear introduction, body paragraphs and conclusion with smooth transitions."
                },
                {
                  "no": "07",
                  "topic": "Narrative Writing",
                  "whatWeCover": "Write a story with a strong plot, setting and character development."
                },
                {
                  "no": "08",
                  "topic": "Descriptive Writing and Voice",
                  "whatWeCover": "Use sensory details, strong verbs and a clear voice to bring a scene to life."
                },
                {
                  "no": "09",
                  "topic": "Revising and Editing",
                  "whatWeCover": "Improve drafts by checking ideas, organization, voice and conventions, alone and with a partner."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise grammar, spelling and narrative writing. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Nonfiction Text Structures",
                  "whatWeCover": "Spot how nonfiction is organized and use text features to navigate and compare sources."
                },
                {
                  "no": "02",
                  "topic": "Bias, Perspective and Fact versus Opinion",
                  "whatWeCover": "Find bias and perspective and tell fact from opinion in articles and editorials."
                },
                {
                  "no": "03",
                  "topic": "Reading Charts, Maps and Graphs",
                  "whatWeCover": "Read and interpret graphics and link them to the text they support."
                },
                {
                  "no": "04",
                  "topic": "Research and Citing Sources",
                  "whatWeCover": "Find reliable sources, take notes, paraphrase and list sources."
                },
                {
                  "no": "05",
                  "topic": "Informational Essay",
                  "whatWeCover": "Write an essay with a clear thesis, organized evidence and a conclusion, such as an essay on a Canadian innovation."
                },
                {
                  "no": "06",
                  "topic": "Persuasive Essay and Counterarguments",
                  "whatWeCover": "Write a thesis, support it with reasons and evidence and address a counterargument."
                },
                {
                  "no": "07",
                  "topic": "Writing in Response to Reading",
                  "whatWeCover": "Answer reading questions in organized paragraphs with evidence, in the style of provincial assessments."
                },
                {
                  "no": "08",
                  "topic": "Media Literacy: News, Ads and Social Media",
                  "whatWeCover": "Look at the message, bias and purpose of media and practise checking sources."
                },
                {
                  "no": "09",
                  "topic": "Oral Communication: Debates and Presentations",
                  "whatWeCover": "Plan and deliver a talk and take part in a respectful class debate."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise nonfiction, persuasive writing and media literacy. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Poetry: Forms and Imagery",
                  "whatWeCover": "Read and write poems that use imagery, rhythm and different forms."
                },
                {
                  "no": "02",
                  "topic": "Figurative Language and Symbolism",
                  "whatWeCover": "Spot and use similes, metaphors, symbolism and irony and explain their effect."
                },
                {
                  "no": "03",
                  "topic": "Tone, Mood and Style",
                  "whatWeCover": "Describe how word choice and structure create tone and mood and use them in your own writing."
                },
                {
                  "no": "04",
                  "topic": "Reading Drama and Scripts",
                  "whatWeCover": "Read scripts aloud, analyze dialogue and stage directions and write a short scene."
                },
                {
                  "no": "05",
                  "topic": "Comparing Texts",
                  "whatWeCover": "Compare two texts on the same topic or theme and discuss how each author approaches it."
                },
                {
                  "no": "06",
                  "topic": "Novel Study",
                  "whatWeCover": "Track plot, character change and themes across a whole novel and keep a reading log."
                },
                {
                  "no": "07",
                  "topic": "Literary Analysis Essay",
                  "whatWeCover": "Write an essay with a claim, evidence and explanation about a text."
                },
                {
                  "no": "08",
                  "topic": "Reading and Writing Test Practice",
                  "whatWeCover": "Practise timed reading and writing tasks, including FSA-style tasks for BC's Grade 7 assessment."
                },
                {
                  "no": "09",
                  "topic": "Publishing a Writing Project",
                  "whatWeCover": "Plan, draft, edit and publish a longer piece, then share it with an audience."
                },
                {
                  "no": "10",
                  "topic": "Grade 7 Review and Grade 8 Readiness",
                  "whatWeCover": "Revise the year and preview Grade 8 reading and writing. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-7/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Adding and Subtracting Integers",
                  "whatWeCover": "Add and subtract positive and negative numbers with number lines and counters, such as temperature changes in a Canadian winter."
                },
                {
                  "no": "02",
                  "topic": "Multiplying and Dividing Integers",
                  "whatWeCover": "Multiply and divide integers and learn the sign rules through patterns and models."
                },
                {
                  "no": "03",
                  "topic": "Order of Operations with Integers",
                  "whatWeCover": "Apply brackets, exponents, multiplication, division, addition and subtraction to expressions with integers."
                },
                {
                  "no": "04",
                  "topic": "Adding and Subtracting Fractions",
                  "whatWeCover": "Add and subtract fractions and mixed numbers with unlike denominators and simplify answers."
                },
                {
                  "no": "05",
                  "topic": "Multiplying and Dividing Fractions",
                  "whatWeCover": "Multiply and divide fractions and mixed numbers using models, and explain why dividing by a fraction works."
                },
                {
                  "no": "06",
                  "topic": "Operations with Decimals",
                  "whatWeCover": "Add, subtract, multiply and divide decimals and estimate to check answers."
                },
                {
                  "no": "07",
                  "topic": "Rational Numbers: Fractions, Decimals and Percent",
                  "whatWeCover": "Convert between fractions, decimals and percent and compare and order rational numbers."
                },
                {
                  "no": "08",
                  "topic": "Squares, Square Roots and Powers",
                  "whatWeCover": "Work with perfect squares, square roots and powers and spot patterns."
                },
                {
                  "no": "09",
                  "topic": "Multi-Step Problems",
                  "whatWeCover": "Plan and solve problems with more than one step and explain each decision."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Check-In and Review",
                  "whatWeCover": "Revise integers, fractions and decimals through mixed tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Ratios and Equivalent Ratios",
                  "whatWeCover": "Compare quantities with ratios and build equivalent ratios using tables and double number lines."
                },
                {
                  "no": "02",
                  "topic": "Rates and Unit Rates",
                  "whatWeCover": "Find unit rates such as price per 100 g or fuel use per 100 km and compare deals."
                },
                {
                  "no": "03",
                  "topic": "Proportional Reasoning",
                  "whatWeCover": "Solve proportions with tables, scale factors and cross-multiplying, and check with estimates."
                },
                {
                  "no": "04",
                  "topic": "Finding Percent of a Quantity",
                  "whatWeCover": "Find percent of an amount, including percents less than 1 and greater than 100."
                },
                {
                  "no": "05",
                  "topic": "Discounts, Taxes and Tips",
                  "whatWeCover": "Work out sale prices, GST and HST and tips, and compare final prices."
                },
                {
                  "no": "06",
                  "topic": "Percent Increase and Decrease",
                  "whatWeCover": "Find the percent change in price, population or score and explain what it means."
                },
                {
                  "no": "07",
                  "topic": "Scale Drawings and Maps",
                  "whatWeCover": "Use scale factors to read maps and plans, such as the distance between two Canadian cities on a map."
                },
                {
                  "no": "08",
                  "topic": "Currency and Rate Problems",
                  "whatWeCover": "Convert between Canadian and U.S. dollars and solve rate problems such as gas price per litre."
                },
                {
                  "no": "09",
                  "topic": "Financial Literacy: Budgets and Income",
                  "whatWeCover": "Plan a simple budget, compare income and expenses and see how taxes affect take-home pay."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise ratios, rates and percent. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Variables and Algebraic Expressions",
                  "whatWeCover": "Use letters to stand for unknowns and write expressions from situations and patterns."
                },
                {
                  "no": "02",
                  "topic": "Simplifying Expressions",
                  "whatWeCover": "Combine like terms and use the distributive property to simplify expressions."
                },
                {
                  "no": "03",
                  "topic": "Solving One-Step Equations",
                  "whatWeCover": "Solve one-step equations with inverse operations and check the answer."
                },
                {
                  "no": "04",
                  "topic": "Solving Two-Step Equations",
                  "whatWeCover": "Solve two-step equations, including with fractions and integers, and check the answer."
                },
                {
                  "no": "05",
                  "topic": "Equations with Brackets",
                  "whatWeCover": "Solve equations that need expanding or collecting like terms before solving."
                },
                {
                  "no": "06",
                  "topic": "Patterns and Linear Relations",
                  "whatWeCover": "Describe patterns with words, tables and equations and predict later terms."
                },
                {
                  "no": "07",
                  "topic": "Tables, Graphs and Linear Relations",
                  "whatWeCover": "Plot linear relations on a coordinate grid and describe slope as a rate of change."
                },
                {
                  "no": "08",
                  "topic": "Coding with Variables, Conditionals and Loops",
                  "whatWeCover": "Write programs that use variables, if statements and loops to solve a problem."
                },
                {
                  "no": "09",
                  "topic": "Algebra Word Problems",
                  "whatWeCover": "Translate real-life situations into equations and solve them."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise algebra and linear relations. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Angle Properties and Triangles",
                  "whatWeCover": "Find unknown angles using angle sums, supplementary and vertical angles."
                },
                {
                  "no": "02",
                  "topic": "Properties of Triangles and Quadrilaterals",
                  "whatWeCover": "Classify triangles and quadrilaterals and use their properties to solve problems."
                },
                {
                  "no": "03",
                  "topic": "Circles: Circumference and Area",
                  "whatWeCover": "Find circumference and area of circles using pi and apply them to wheels, pizzas and tracks."
                },
                {
                  "no": "04",
                  "topic": "Area of Composite Shapes",
                  "whatWeCover": "Break complex shapes into simple ones to find area, such as a rink or a floor plan."
                },
                {
                  "no": "05",
                  "topic": "Volume and Surface Area of Prisms and Cylinders",
                  "whatWeCover": "Use nets and formulas to find volume and surface area of prisms and cylinders."
                },
                {
                  "no": "06",
                  "topic": "Transformations and the Coordinate Plane",
                  "whatWeCover": "Show translations, reflections and rotations in all four quadrants."
                },
                {
                  "no": "07",
                  "topic": "Data: Mean, Median, Mode and Graphs",
                  "whatWeCover": "Read and make graphs and find mean, median, mode and range, and compare data sets."
                },
                {
                  "no": "08",
                  "topic": "Probability and Tree Diagrams",
                  "whatWeCover": "Find the probability of independent events with tree diagrams and tables."
                },
                {
                  "no": "09",
                  "topic": "Mixed Problems and Test-Style Practice",
                  "whatWeCover": "Practise multi-step numeracy problems and explain your thinking, including FSA-style tasks for BC's Grade 7 assessment and puzzles in the style of the University of Waterloo's Gauss contest."
                },
                {
                  "no": "10",
                  "topic": "Grade 7 Review and Grade 8 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 8 math, including the Pythagorean theorem. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-7/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Ecosystems and Their Parts",
                  "whatWeCover": "Explore the living and non-living parts of an ecosystem and how they interact."
                },
                {
                  "no": "02",
                  "topic": "Biotic and Abiotic Factors",
                  "whatWeCover": "Sort factors such as light, water, soil, plants and animals and see how each affects an ecosystem."
                },
                {
                  "no": "03",
                  "topic": "Energy Flow and Food Webs",
                  "whatWeCover": "Trace energy from the Sun through producers and consumers in a Canadian food web."
                },
                {
                  "no": "04",
                  "topic": "Cycles in Ecosystems",
                  "whatWeCover": "Follow water, carbon and nutrients as they cycle through living and non-living things."
                },
                {
                  "no": "05",
                  "topic": "Populations and Carrying Capacity",
                  "whatWeCover": "Explore how population size changes and what limits it."
                },
                {
                  "no": "06",
                  "topic": "Canadian Ecosystems",
                  "whatWeCover": "Compare the Great Lakes, boreal forest and prairie ecosystems and what lives in each."
                },
                {
                  "no": "07",
                  "topic": "Human Impact and Climate Change",
                  "whatWeCover": "Look at how human activity, including climate change, affects ecosystems and what can be done."
                },
                {
                  "no": "08",
                  "topic": "Invasive Species and Conservation",
                  "whatWeCover": "Explore how invasive species such as sea lamprey and zebra mussels harm the Great Lakes and how people respond."
                },
                {
                  "no": "09",
                  "topic": "Stewardship and Sustainability",
                  "whatWeCover": "Explore actions, from recycling to habitat restoration, that help ecosystems recover."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise ecosystems and human impact. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Pure Substances and Mixtures",
                  "whatWeCover": "Sort materials into pure substances and mixtures and describe their properties."
                },
                {
                  "no": "02",
                  "topic": "Solutions and Solubility",
                  "whatWeCover": "Explore how substances dissolve and what changes solubility, such as temperature."
                },
                {
                  "no": "03",
                  "topic": "Concentration",
                  "whatWeCover": "Compare weak and strong solutions and see how concentration is measured."
                },
                {
                  "no": "04",
                  "topic": "Separating Mixtures",
                  "whatWeCover": "Separate mixtures with filtration, evaporation, distillation and magnets."
                },
                {
                  "no": "05",
                  "topic": "Maple Syrup: Mixtures in Action",
                  "whatWeCover": "See how boiling sap concentrates sugar and makes maple syrup, a classic Canadian example."
                },
                {
                  "no": "06",
                  "topic": "Water Treatment",
                  "whatWeCover": "Explore how water is cleaned for drinking and why clean water matters across Canada."
                },
                {
                  "no": "07",
                  "topic": "Physical Properties and Density",
                  "whatWeCover": "Measure properties such as density and boiling point and use them to identify substances."
                },
                {
                  "no": "08",
                  "topic": "Safe Handling and WHMIS Symbols",
                  "whatWeCover": "Learn WHMIS hazard symbols and safe habits for handling household chemicals."
                },
                {
                  "no": "09",
                  "topic": "Fair Tests and Lab Reports",
                  "whatWeCover": "Plan fair tests, record results and write a short lab report."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise mixtures and solutions. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Form and Function",
                  "whatWeCover": "Explore how the shape of an object suits its job, from a snow shovel to a bridge."
                },
                {
                  "no": "02",
                  "topic": "Systems and Efficiency",
                  "whatWeCover": "See how parts work together as a system and how efficiency is measured."
                },
                {
                  "no": "03",
                  "topic": "Levers and Mechanical Advantage",
                  "whatWeCover": "Test how levers reduce the effort needed and calculate mechanical advantage."
                },
                {
                  "no": "04",
                  "topic": "Gears, Pulleys and Linkages",
                  "whatWeCover": "Combine gears, pulleys and linkages to change speed, force and direction."
                },
                {
                  "no": "05",
                  "topic": "Fluid Systems",
                  "whatWeCover": "Explore how hydraulic and pneumatic systems move force through liquids and air."
                },
                {
                  "no": "06",
                  "topic": "The Design Process",
                  "whatWeCover": "Define a problem, brainstorm, plan, build, test and improve a design."
                },
                {
                  "no": "07",
                  "topic": "Materials and Sustainability",
                  "whatWeCover": "Choose materials for a design by comparing strength, cost and environmental impact."
                },
                {
                  "no": "08",
                  "topic": "Build a Prototype",
                  "whatWeCover": "Build a model that solves a problem, such as a lift or a grabber."
                },
                {
                  "no": "09",
                  "topic": "Test, Evaluate and Improve",
                  "whatWeCover": "Test your prototype, collect results and redesign it."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise form, function and mechanical systems. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Heat and Temperature",
                  "whatWeCover": "Tell heat from temperature and measure temperature accurately."
                },
                {
                  "no": "02",
                  "topic": "Heat Transfer",
                  "whatWeCover": "Compare conduction, convection and radiation with everyday examples."
                },
                {
                  "no": "03",
                  "topic": "Heat and Weather",
                  "whatWeCover": "Link heat transfer to wind, lake-effect snow and weather across Canada."
                },
                {
                  "no": "04",
                  "topic": "Insulation and Heating Homes",
                  "whatWeCover": "Test insulating materials and look at how Canadian homes stay warm in winter."
                },
                {
                  "no": "05",
                  "topic": "Heat, Climate and the Greenhouse Effect",
                  "whatWeCover": "Explore how trapped heat shapes climate and what affects it."
                },
                {
                  "no": "06",
                  "topic": "Earth's Crust and Plates",
                  "whatWeCover": "Look at Earth's layers, the crust and how plates move."
                },
                {
                  "no": "07",
                  "topic": "Earthquakes and Volcanoes",
                  "whatWeCover": "Explore how plate movement causes earthquakes and volcanoes, including along Canada's west coast."
                },
                {
                  "no": "08",
                  "topic": "Geothermal and Renewable Heat",
                  "whatWeCover": "Look at how people use heat from the Earth and the Sun for energy."
                },
                {
                  "no": "09",
                  "topic": "Mini Science Project",
                  "whatWeCover": "Choose a question, test it fairly and share the results in a short presentation."
                },
                {
                  "no": "10",
                  "topic": "Grade 7 Review and Grade 8 Readiness",
                  "whatWeCover": "Revise the year's science and preview Grade 8 topics. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 7 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 8 Tutoring",
          "text": "Build on Grade 7 with Grade 8 Math, English and Science, 40 live lessons per subject matched to your province's curriculum.",
          "buttonText": "View Grade 8",
          "href": "/ca/subjects/grade-8"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-8": {
    "gradeNum": 8,
    "yearId": "grade-8",
    "meta": {
      "title": "Grade 8 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 8 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-8"
    },
    "hero": {
      "h1": "Grade 8 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from algebra to cells.",
      "primaryBtn": "Try a Free Grade 8 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 8 is the final year of elementary or junior high for many students, and the algebra, essay and science skills built now carry straight into high school. Our structured program keeps all three strong, with clear steps and familiar Canadian examples.",
      "keyTopics": {
        "math": "rational and irrational numbers, exponents, linear relations, the Pythagorean theorem and congruence.",
        "english": "language and identity, literary analysis, persuasive writing and research.",
        "science": "cells and organ systems, plate tectonics, the rock cycle, energy and matter."
      },
      "parentTip": "Grade 8 is a major algebra and essay foundation year. A little revision each week keeps linear equations, close reading and science vocabulary fresh before high school. We make sure each idea clicks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 8, Your Child Will...",
      "items": [
        "Simplify, expand and factor linear expressions and solve equations and inequalities",
        "Apply the Pythagorean theorem, congruence and similarity to spatial problems",
        "Analyze how language, context and word choice shape meaning",
        "Write cohesive analytical and persuasive pieces supported by evidence",
        "Explain how cells, tissues and organ systems work together",
        "Describe plate tectonics and the rock cycle with evidence"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 8 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-8/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Language, Identity and Belonging",
                  "whatWeCover": "Explore how language shapes identity, belonging and social roles through texts and discussion."
                },
                {
                  "no": "02",
                  "topic": "Language, Place and Culture",
                  "whatWeCover": "Look at how language reflects culture and place in Canada, including English, French and Indigenous languages."
                },
                {
                  "no": "03",
                  "topic": "Figurative Language: Simile, Metaphor and Irony",
                  "whatWeCover": "Analyze how figurative language creates evaluation and meaning, and tell literal from implied meaning."
                },
                {
                  "no": "04",
                  "topic": "Purpose, Genre and Hybrid Texts",
                  "whatWeCover": "See how purpose and audience shape structure in narratives, speeches and blended forms."
                },
                {
                  "no": "05",
                  "topic": "Paragraph Cohesion and Evidence",
                  "whatWeCover": "Strengthen paragraphs with examples and quotations, using model paragraphs and checklists."
                },
                {
                  "no": "06",
                  "topic": "Semicolons, Colons and Hyphens",
                  "whatWeCover": "Use semicolons, colons and hyphens to extend ideas and clarify meaning."
                },
                {
                  "no": "07",
                  "topic": "Sentence Expansion with Clauses",
                  "whatWeCover": "Use main, dependent and embedded clauses to add detail and control."
                },
                {
                  "no": "08",
                  "topic": "Formal Tone and Nominalization",
                  "whatWeCover": "See how turning verbs into nouns creates a formal, academic tone, and practise it."
                },
                {
                  "no": "09",
                  "topic": "Comprehension Strategies for Meaning",
                  "whatWeCover": "Apply predicting, inferring and questioning, and use images to support understanding."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise reading, language and an integrated reading-to-writing task. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Ideas, Values and Contexts in Literature",
                  "whatWeCover": "Analyze how texts reflect values shaped by their time and place."
                },
                {
                  "no": "02",
                  "topic": "Personal and Critical Responses",
                  "whatWeCover": "Form justified opinions about texts and compare them with published interpretations."
                },
                {
                  "no": "03",
                  "topic": "How Authors Position Readers",
                  "whatWeCover": "Analyze how language and images position readers in text, film and pictures."
                },
                {
                  "no": "04",
                  "topic": "Allusion and Intertextuality",
                  "whatWeCover": "Spot allusion and quotation and link prior knowledge to meaning."
                },
                {
                  "no": "05",
                  "topic": "Tone, Syntax and Imagery",
                  "whatWeCover": "Analyze how tone, sentence patterns and imagery build mood in passages."
                },
                {
                  "no": "06",
                  "topic": "Creating Literary Texts",
                  "whatWeCover": "Write short literary pieces with dialogue and imagery, then draft and revise."
                },
                {
                  "no": "07",
                  "topic": "Spelling, Roots and Word Learning",
                  "whatWeCover": "Explore prefixes, roots and Canadian spelling patterns to learn new words."
                },
                {
                  "no": "08",
                  "topic": "Academic Vocabulary and Precision",
                  "whatWeCover": "Compare formal and informal language and choose precise words."
                },
                {
                  "no": "09",
                  "topic": "Organizing Ideas in Texts",
                  "whatWeCover": "Analyze how authors organize ideas to shape meaning and apply it in your own writing."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise literary analysis and an analytical writing task. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Texts, Context and Representation",
                  "whatWeCover": "Analyze how texts reflect social and cultural context and who is represented."
                },
                {
                  "no": "02",
                  "topic": "Evaluative Language in Persuasion",
                  "whatWeCover": "See how persuasive texts express judgment directly and indirectly."
                },
                {
                  "no": "03",
                  "topic": "Argument Structure and Cohesion",
                  "whatWeCover": "Build cohesive arguments with structured paragraphs and linking words."
                },
                {
                  "no": "04",
                  "topic": "Sentence Variety for Impact",
                  "whatWeCover": "Vary sentence structure to influence emphasis and tone."
                },
                {
                  "no": "05",
                  "topic": "Formal Language in Arguments",
                  "whatWeCover": "Use formal vocabulary and nominalization to condense and strengthen arguments."
                },
                {
                  "no": "06",
                  "topic": "Visual and Intertextual Persuasion",
                  "whatWeCover": "Analyze how visual texts use symbols and references to persuade."
                },
                {
                  "no": "07",
                  "topic": "Speaking to Persuade",
                  "whatWeCover": "Practise persuasive speaking with eye contact, pace and tone."
                },
                {
                  "no": "08",
                  "topic": "Planning Persuasive Writing",
                  "whatWeCover": "Plan persuasive texts with outlines, evidence and chosen vocabulary."
                },
                {
                  "no": "09",
                  "topic": "Multimodal Persuasion",
                  "whatWeCover": "Design a persuasive presentation that combines visuals, voice and text."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise persuasion and a persuasive writing or speaking task. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Comparing Texts and Perspectives",
                  "whatWeCover": "Compare ideas and opinions across texts and discuss similarities and differences."
                },
                {
                  "no": "02",
                  "topic": "Organizing Extended Texts",
                  "whatWeCover": "Evaluate how organization works in longer texts and apply it to your writing."
                },
                {
                  "no": "03",
                  "topic": "Style, Mood and Vocabulary",
                  "whatWeCover": "Refine word choice to create mood and tone and analyze style in published writing."
                },
                {
                  "no": "04",
                  "topic": "Literary Style and Aesthetic Appeal",
                  "whatWeCover": "Analyze how authors develop a distinctive style and appeal to readers."
                },
                {
                  "no": "05",
                  "topic": "Creating Hybrid Texts",
                  "whatWeCover": "Create texts that combine forms, such as a letter within a story."
                },
                {
                  "no": "06",
                  "topic": "Research and Source Integration",
                  "whatWeCover": "Integrate sources into analytical writing with paraphrase and citation."
                },
                {
                  "no": "07",
                  "topic": "Planning Extended Writing",
                  "whatWeCover": "Plan long analytical or persuasive pieces and organize ideas logically."
                },
                {
                  "no": "08",
                  "topic": "Drafting Extended Responses",
                  "whatWeCover": "Draft extended responses that apply the year's skills in cohesion and style."
                },
                {
                  "no": "09",
                  "topic": "Editing and Publishing",
                  "whatWeCover": "Edit and polish final pieces for grammar, punctuation and style."
                },
                {
                  "no": "10",
                  "topic": "Grade 8 Review and Grade 9 Readiness",
                  "whatWeCover": "Revise the year and preview Grade 9 English, including the literacy skills tested later in high school. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-8/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Rational and Irrational Numbers",
                  "whatWeCover": "Sort numbers as rational or irrational and place square roots and pi on a number line."
                },
                {
                  "no": "02",
                  "topic": "Exponent Laws",
                  "whatWeCover": "Use product, quotient, power and zero exponent laws with whole-number exponents."
                },
                {
                  "no": "03",
                  "topic": "Terminating and Repeating Decimals",
                  "whatWeCover": "Convert fractions to decimals and tell terminating from repeating and non-terminating decimals."
                },
                {
                  "no": "04",
                  "topic": "Operations with Integers",
                  "whatWeCover": "Add, subtract, multiply and divide positive and negative integers and explain the sign rules."
                },
                {
                  "no": "05",
                  "topic": "Operations with Rational Numbers",
                  "whatWeCover": "Compute with fractions and decimals using efficient written, mental and digital strategies."
                },
                {
                  "no": "06",
                  "topic": "Percent, Discounts and Percent Change",
                  "whatWeCover": "Solve percent increase and decrease problems, such as sale prices, mark-ups and GST and HST."
                },
                {
                  "no": "07",
                  "topic": "Financial Literacy: Taxes, Tips and Interest",
                  "whatWeCover": "Model real money situations in Canadian dollars, including taxes, tips, income and simple interest."
                },
                {
                  "no": "08",
                  "topic": "Simplifying Linear Expressions",
                  "whatWeCover": "Simplify and rearrange linear expressions by collecting like terms and using number properties."
                },
                {
                  "no": "09",
                  "topic": "Expanding and Factoring Linear Expressions",
                  "whatWeCover": "Use the distributive property to expand expressions and factor out common terms."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise number, percent and early algebra through mixed tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Solving Linear Equations",
                  "whatWeCover": "Solve multi-step equations with inverse operations and check solutions by substitution."
                },
                {
                  "no": "02",
                  "topic": "Solving Linear Inequalities",
                  "whatWeCover": "Solve one-variable inequalities and show solutions on number lines."
                },
                {
                  "no": "03",
                  "topic": "Tables and Graphs of Linear Relations",
                  "whatWeCover": "Build tables of values, plot linear relations and spot constant rates of change."
                },
                {
                  "no": "04",
                  "topic": "Slope and Initial Value",
                  "whatWeCover": "Read slope and the y-intercept from graphs and equations in real settings, such as a taxi fare or data plan."
                },
                {
                  "no": "05",
                  "topic": "Linear Modelling",
                  "whatWeCover": "Build linear models for situations, such as a cell phone plan in Canadian dollars, and judge whether the model fits."
                },
                {
                  "no": "06",
                  "topic": "Exploring Linear Relations with Technology",
                  "whatWeCover": "Use a spreadsheet or code to change the slope and intercept and describe the effect on the graph."
                },
                {
                  "no": "07",
                  "topic": "Area and Perimeter of Composite Shapes",
                  "whatWeCover": "Find area and perimeter of irregular shapes by splitting them into simple ones."
                },
                {
                  "no": "08",
                  "topic": "Volume and Capacity of Prisms and Cylinders",
                  "whatWeCover": "Find volume and capacity of prisms and cylinders and convert between cubic units and litres."
                },
                {
                  "no": "09",
                  "topic": "Circles: Circumference and Area",
                  "whatWeCover": "Use formulas for circumference and area and work backward to find a radius or diameter."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise linear relations and measurement. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Time, Duration and Time Zones",
                  "whatWeCover": "Solve duration problems with 12-hour and 24-hour clocks across Canada's six time zones, from Pacific to Newfoundland."
                },
                {
                  "no": "02",
                  "topic": "Rates and Unit Rates",
                  "whatWeCover": "Compare quantities in different units, such as pay per hour, cost per kilogram and speed in km/h."
                },
                {
                  "no": "03",
                  "topic": "The Pythagorean Theorem",
                  "whatWeCover": "Find unknown sides of right triangles and solve real problems, such as the diagonal of a hockey rink."
                },
                {
                  "no": "04",
                  "topic": "Ratios, Proportion and Scale",
                  "whatWeCover": "Solve proportions in maps, plans, recipes and mixtures and apply scale factors."
                },
                {
                  "no": "05",
                  "topic": "Modelling with Ratios and Rates",
                  "whatWeCover": "Build and test models using ratios and rates and explain whether the result is reasonable."
                },
                {
                  "no": "06",
                  "topic": "Congruent Triangles",
                  "whatWeCover": "Use side and angle conditions to decide when triangles are congruent and justify the reasoning."
                },
                {
                  "no": "07",
                  "topic": "Similar Figures and Transformations",
                  "whatWeCover": "Connect similarity to enlargements, reflections, rotations and translations."
                },
                {
                  "no": "08",
                  "topic": "Properties of Quadrilaterals",
                  "whatWeCover": "Use the properties of squares, rectangles, parallelograms, rhombuses and trapezoids to reason about shapes."
                },
                {
                  "no": "09",
                  "topic": "Coordinates in Two and Three Dimensions",
                  "whatWeCover": "Describe location with coordinates in 2D and 3D and compare map grids to Cartesian planes."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise rates, Pythagoras and geometry. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Collecting Data: Census, Samples and Surveys",
                  "whatWeCover": "Compare ways to collect data and discuss accuracy, bias and ethics."
                },
                {
                  "no": "02",
                  "topic": "Random and Non-Random Sampling",
                  "whatWeCover": "Compare random, systematic, stratified and convenience samples and what each can show."
                },
                {
                  "no": "03",
                  "topic": "Sample Variation and Sample Size",
                  "whatWeCover": "See how repeated samples vary and how sample size affects the result."
                },
                {
                  "no": "04",
                  "topic": "Mean, Median, Mode and Spread",
                  "whatWeCover": "Compare data sets with measures of centre and range and see how outliers change them."
                },
                {
                  "no": "05",
                  "topic": "Probability and Sample Spaces",
                  "whatWeCover": "List outcomes systematically and describe chance with probability language."
                },
                {
                  "no": "06",
                  "topic": "Compound Events and Tree Diagrams",
                  "whatWeCover": "Use lists, tables and tree diagrams for multi-step chance events."
                },
                {
                  "no": "07",
                  "topic": "Experimental Probability",
                  "whatWeCover": "Run repeated trials, use relative frequency and compare with theoretical probability."
                },
                {
                  "no": "08",
                  "topic": "Simulations and Statistics Investigation",
                  "whatWeCover": "Use digital tools to simulate chance and plan a short data investigation."
                },
                {
                  "no": "09",
                  "topic": "Mixed Problems and Contest-Style Practice",
                  "whatWeCover": "Practise multi-step problems and puzzles in the style of the University of Waterloo's Gauss contest."
                },
                {
                  "no": "10",
                  "topic": "Grade 8 Review and Grade 9 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 9 math, including Ontario's Grade 9 EQAO year. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-8/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Cells: The Basic Units of Life",
                  "whatWeCover": "Meet cells as the basic units of living things and explore how microscopes show their scale."
                },
                {
                  "no": "02",
                  "topic": "Plant and Animal Cells",
                  "whatWeCover": "Compare plant and animal cells and name the nucleus, membrane, cytoplasm, cell wall and chloroplasts."
                },
                {
                  "no": "03",
                  "topic": "Specialized Cells and Adaptations",
                  "whatWeCover": "See how specialized cells, such as nerve and root hair cells, are built for their jobs."
                },
                {
                  "no": "04",
                  "topic": "From Cells to Tissues and Organs",
                  "whatWeCover": "Build the levels from cells to tissues, organs and organ systems with models."
                },
                {
                  "no": "05",
                  "topic": "Animal Organ Systems",
                  "whatWeCover": "Investigate one animal organ system and how its organs work together."
                },
                {
                  "no": "06",
                  "topic": "Plant Organ Systems",
                  "whatWeCover": "Examine roots, stems and leaves and relate their structure to function."
                },
                {
                  "no": "07",
                  "topic": "Comparing Plant and Animal Systems",
                  "whatWeCover": "Compare similar plant and animal systems and what they have in common."
                },
                {
                  "no": "08",
                  "topic": "Disorders and Medical Technology",
                  "whatWeCover": "Explore how cell and tissue disorders affect organs and how technology, such as pacemakers and artificial organs, helps."
                },
                {
                  "no": "09",
                  "topic": "Biology Investigation Skills",
                  "whatWeCover": "Develop an investigable question, plan variables and record careful observations."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise cells, organ systems and inquiry through data and models. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Earth's Dynamic Crust and Plate Tectonics",
                  "whatWeCover": "Meet tectonic plates and the evidence for plate movement, and connect it to maps of Canada's geology."
                },
                {
                  "no": "02",
                  "topic": "Divergent Plate Boundaries",
                  "whatWeCover": "Model divergent boundaries and seafloor spreading and link them to landforms."
                },
                {
                  "no": "03",
                  "topic": "Convergent Plate Boundaries",
                  "whatWeCover": "Compare subduction and continental collision and how they build mountains, such as the Rockies, and trenches."
                },
                {
                  "no": "04",
                  "topic": "Transform Boundaries and Earthquakes",
                  "whatWeCover": "Explain transform faults and read earthquake maps, including the risk along Canada's west coast."
                },
                {
                  "no": "05",
                  "topic": "Evidence for Plate Tectonics",
                  "whatWeCover": "Trace the evidence from continental fit to seafloor mapping and modern GPS data."
                },
                {
                  "no": "06",
                  "topic": "Tectonic Hazards and Engineering",
                  "whatWeCover": "Evaluate how earthquakes, volcanoes and tsunamis affect communities and how buildings are designed to cope."
                },
                {
                  "no": "07",
                  "topic": "Rocks and the Rock Cycle",
                  "whatWeCover": "Describe weathering, erosion, melting, crystallization, uplift, heat and pressure in the rock cycle."
                },
                {
                  "no": "08",
                  "topic": "Igneous, Sedimentary and Metamorphic Rocks",
                  "whatWeCover": "Compare rock properties and formation and use simple identification keys."
                },
                {
                  "no": "09",
                  "topic": "Rocks, Fossils and Resources",
                  "whatWeCover": "Use rock and fossil evidence to infer history and see how people use rocks and minerals, including from the Canadian Shield."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise plate tectonics and the rock cycle through maps, models and data. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Forms of Energy: Kinetic and Potential",
                  "whatWeCover": "Sort energy into kinetic and potential and spot energy stores and changes."
                },
                {
                  "no": "02",
                  "topic": "Energy Transfers and Transformations",
                  "whatWeCover": "Use flow diagrams to follow energy through systems such as a roller coaster."
                },
                {
                  "no": "03",
                  "topic": "Energy in Electrical Systems",
                  "whatWeCover": "Use simple circuits to explain how electrical energy becomes light, heat, sound and motion."
                },
                {
                  "no": "04",
                  "topic": "Efficiency, Heat and Systems",
                  "whatWeCover": "Tell useful energy from wasted energy and analyze the efficiency of a device."
                },
                {
                  "no": "05",
                  "topic": "Matter: Elements, Compounds and Mixtures",
                  "whatWeCover": "Classify matter as elements, compounds or mixtures using particle ideas."
                },
                {
                  "no": "06",
                  "topic": "Representing Elements and Compounds",
                  "whatWeCover": "Read element symbols and formulas and use 2D and 3D particle models."
                },
                {
                  "no": "07",
                  "topic": "Mixtures, Solutions, Suspensions and Colloids",
                  "whatWeCover": "Compare types of mixtures and use percent to describe concentration."
                },
                {
                  "no": "08",
                  "topic": "Physical and Chemical Change",
                  "whatWeCover": "Use evidence from properties to tell physical from chemical changes."
                },
                {
                  "no": "09",
                  "topic": "Indicators of Chemical Change",
                  "whatWeCover": "Investigate gas, precipitate, colour and temperature changes in safe reactions."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise energy and matter in unfamiliar systems and data. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "How Scientific Knowledge Changes",
                  "whatWeCover": "See how new evidence and new perspectives change scientific knowledge, through historical examples."
                },
                {
                  "no": "02",
                  "topic": "Culture, Worldviews and Science",
                  "whatWeCover": "Explore how cultural views, including Indigenous knowledge in Canada, shape what and how people investigate."
                },
                {
                  "no": "03",
                  "topic": "Science, Society and Current Issues",
                  "whatWeCover": "Examine science responses to issues such as organ donation and sustainable materials."
                },
                {
                  "no": "04",
                  "topic": "Communicating Science",
                  "whatWeCover": "See how science communication shapes public opinion and policy."
                },
                {
                  "no": "05",
                  "topic": "Questions, Predictions and Hypotheses",
                  "whatWeCover": "Develop investigable questions, predictions and hypotheses and tell correlation from cause."
                },
                {
                  "no": "06",
                  "topic": "Planning Reproducible Investigations",
                  "whatWeCover": "Design fair investigations with independent, dependent and controlled variables."
                },
                {
                  "no": "07",
                  "topic": "Precision, Measurement and Digital Tools",
                  "whatWeCover": "Choose equipment, record data with the right units and precision and use digital probes."
                },
                {
                  "no": "08",
                  "topic": "Tables, Graphs and Data Analysis",
                  "whatWeCover": "Build tables, graphs and models and look for patterns in data."
                },
                {
                  "no": "09",
                  "topic": "Evaluating Evidence and Claims",
                  "whatWeCover": "Spot assumptions, errors and conflicting evidence and build evidence-based claims."
                },
                {
                  "no": "10",
                  "topic": "Grade 8 Review and Grade 9 Readiness",
                  "whatWeCover": "Revise the year's science with an integrated assessment and preview Grade 9 topics. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 8 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 9 Tutoring",
          "text": "Build on Grade 8 with Grade 9 Math, English and Science, 40 live lessons per subject matched to your province's curriculum.",
          "buttonText": "View Grade 9",
          "href": "/ca/subjects/grade-9"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-9": {
    "gradeNum": 9,
    "yearId": "grade-9",
    "meta": {
      "title": "Grade 9 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 9 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-9"
    },
    "hero": {
      "h1": "Grade 9 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from quadratics to atoms.",
      "primaryBtn": "Try a Free Grade 9 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 9 is the start of high school for many students, with new subjects, new teachers and higher expectations. Our structured program builds Math, English and Science confidence with clear steps, from quadratics and trigonometry to atoms and chemical reactions.",
      "keyTopics": {
        "math": "real numbers, factoring, quadratics, slope, trigonometry and interest.",
        "english": "language and power, analytical essays, bias and symbolism.",
        "science": "body regulation, the carbon cycle, energy, atoms and chemical reactions."
      },
      "parentTip": "Grade 9 sets up every senior course. Encourage your child to plan homework, ask questions early and keep a tidy set of notes for each subject. We make sure each idea clicks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 9, Your Child Will...",
      "items": [
        "Expand and factor polynomials and solve quadratic equations",
        "Find surface area and volume and use right-angle trigonometry",
        "Write analytical paragraphs and essays with quotations and citations",
        "Spot bias and perspective in media and persuasion",
        "Trace carbon through Earth's systems and explain the greenhouse effect",
        "Describe atoms, isotopes and half-life"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 9 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-9/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Language, Power and Group Identity",
                  "whatWeCover": "Examine how language shapes identity, power and belonging in texts and in everyday life."
                },
                {
                  "no": "02",
                  "topic": "Representation of People and Places",
                  "whatWeCover": "Analyze how people, places and groups are represented in texts and media."
                },
                {
                  "no": "03",
                  "topic": "Analytical Paragraph Writing",
                  "whatWeCover": "Write analytical paragraphs with a clear claim, evidence and explanation."
                },
                {
                  "no": "04",
                  "topic": "Quoting and Citing Sources",
                  "whatWeCover": "Introduce quotations, cite sources in a standard style and avoid plagiarism."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary, Tone and Mood",
                  "whatWeCover": "Choose words that create tone and mood and analyze how authors do it."
                },
                {
                  "no": "06",
                  "topic": "Abstraction and Nominalization",
                  "whatWeCover": "Turn actions into abstract nouns to build formal, academic sentences."
                },
                {
                  "no": "07",
                  "topic": "Comparing Ideas Across Texts",
                  "whatWeCover": "Compare ideas, values and approaches across two or more texts."
                },
                {
                  "no": "08",
                  "topic": "Reader Response and Preference",
                  "whatWeCover": "Explain what you like or dislike in a text and back it with evidence."
                },
                {
                  "no": "09",
                  "topic": "Discussion: Language and Identity",
                  "whatWeCover": "Take part in structured discussion about language and identity with respect for other views."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise analytical writing, representation and an integrated mini-assessment. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Evaluative Language",
                  "whatWeCover": "See how texts signal judgment through word choice and tone."
                },
                {
                  "no": "02",
                  "topic": "Perspective and Bias",
                  "whatWeCover": "Spot perspective and bias in news, opinion and social media."
                },
                {
                  "no": "03",
                  "topic": "Writing a Persuasive Paragraph",
                  "whatWeCover": "Write persuasive paragraphs with a claim, reasons and evidence."
                },
                {
                  "no": "04",
                  "topic": "Paragraph and Text Organization",
                  "whatWeCover": "Organize ideas within and across paragraphs with clear links."
                },
                {
                  "no": "05",
                  "topic": "Evaluative Vocabulary",
                  "whatWeCover": "Build a bank of precise words to judge and evaluate."
                },
                {
                  "no": "06",
                  "topic": "Sentence Variation for Effect",
                  "whatWeCover": "Vary sentence length and structure for pace and emphasis."
                },
                {
                  "no": "07",
                  "topic": "Comparing Viewpoints",
                  "whatWeCover": "Compare how different authors treat the same issue."
                },
                {
                  "no": "08",
                  "topic": "Personal Response to Text",
                  "whatWeCover": "Write a personal response that connects ideas to evidence and experience."
                },
                {
                  "no": "09",
                  "topic": "Structured Debate",
                  "whatWeCover": "Prepare and take part in a structured debate with evidence and rebuttals."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise persuasion, perspective and an argument skills assessment. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Experimenting with Text Structure",
                  "whatWeCover": "Try different structures, such as flashbacks and multiple narrators, in your own writing."
                },
                {
                  "no": "02",
                  "topic": "Authorial Style and Appeal",
                  "whatWeCover": "Analyze how authors build a distinctive style that appeals to readers."
                },
                {
                  "no": "03",
                  "topic": "Creative Adaptation",
                  "whatWeCover": "Adapt a text into a new form, such as a story into a script."
                },
                {
                  "no": "04",
                  "topic": "Editing for Effect",
                  "whatWeCover": "Edit for rhythm, precision and impact."
                },
                {
                  "no": "05",
                  "topic": "Literary Diction and Imagery",
                  "whatWeCover": "Analyze how word choice and imagery create meaning in prose and poetry."
                },
                {
                  "no": "06",
                  "topic": "Symbolism in Visuals",
                  "whatWeCover": "Read symbols in images, film stills and graphic texts."
                },
                {
                  "no": "07",
                  "topic": "Reading a Longer Text",
                  "whatWeCover": "Study a novel or play, tracking plot, character and theme across chapters or acts."
                },
                {
                  "no": "08",
                  "topic": "Hybrid Literary Text",
                  "whatWeCover": "Write a text that combines forms, such as diary entries with poems."
                },
                {
                  "no": "09",
                  "topic": "Multimodal Interpretation",
                  "whatWeCover": "Interpret texts that mix words, images and sound."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise literary skills and a literary assessment task. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Advanced Cohesion",
                  "whatWeCover": "Link ideas smoothly within and between paragraphs in longer writing."
                },
                {
                  "no": "02",
                  "topic": "Representation Across Contexts",
                  "whatWeCover": "Compare how the same group or issue is shown in different times and places."
                },
                {
                  "no": "03",
                  "topic": "Extended Analytical Response",
                  "whatWeCover": "Write a multi-paragraph analytical response with a thesis and a range of evidence."
                },
                {
                  "no": "04",
                  "topic": "Canadian Spelling for Effect",
                  "whatWeCover": "Use Canadian spelling and word choice consistently and correct common errors."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary Precision",
                  "whatWeCover": "Choose exact words to improve clarity and style."
                },
                {
                  "no": "06",
                  "topic": "Nominalization Mastery",
                  "whatWeCover": "Use nominalization with control for a formal, academic voice."
                },
                {
                  "no": "07",
                  "topic": "Media Persuasion",
                  "whatWeCover": "Analyze persuasive techniques in advertising, news and social media."
                },
                {
                  "no": "08",
                  "topic": "Final Polished Piece",
                  "whatWeCover": "Plan, draft and polish a final piece of writing."
                },
                {
                  "no": "09",
                  "topic": "Formal Multimodal Presentation",
                  "whatWeCover": "Plan and deliver a formal presentation that combines speech, visuals and text."
                },
                {
                  "no": "10",
                  "topic": "Grade 9 Review and Grade 10 Readiness",
                  "whatWeCover": "Revise the year and preview Grade 10 English, including the literacy skills tested in Ontario's Grade 10 literacy test. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-9/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "The Real Number System",
                  "whatWeCover": "Tell natural numbers, integers, rational and irrational numbers apart and show exact and approximate values."
                },
                {
                  "no": "02",
                  "topic": "Integer Exponents and Exponent Laws",
                  "whatWeCover": "Apply exponent laws with positive, zero and negative integer exponents."
                },
                {
                  "no": "03",
                  "topic": "Scientific Notation",
                  "whatWeCover": "Write and calculate with very large and very small quantities, such as the distance from Earth to the Sun."
                },
                {
                  "no": "04",
                  "topic": "Simplifying Algebraic Expressions",
                  "whatWeCover": "Simplify expressions with constants, variables and exponent laws, showing each algebraic step."
                },
                {
                  "no": "05",
                  "topic": "Expanding Binomial Products",
                  "whatWeCover": "Expand products of binomials and see how factors connect to quadratic expressions."
                },
                {
                  "no": "06",
                  "topic": "Factoring Simple Quadratics",
                  "whatWeCover": "Factor trinomials with integer factors and link factoring to expanding."
                },
                {
                  "no": "07",
                  "topic": "Slope of a Line",
                  "whatWeCover": "Calculate and interpret slope as a constant rate of change from graphs and equations."
                },
                {
                  "no": "08",
                  "topic": "Midpoint and Distance on the Grid",
                  "whatWeCover": "Find the midpoint and distance between points using coordinates and the Pythagorean theorem."
                },
                {
                  "no": "09",
                  "topic": "Linear Relations and Modelling Change",
                  "whatWeCover": "Model real and financial situations with linear equations, tables and graphs, such as a gym fee in Canadian dollars."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise number, algebra and coordinate geometry through multi-step problems. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Introduction to Quadratic Relations",
                  "whatWeCover": "Spot quadratic relations through constant second differences and name key features of parabolas."
                },
                {
                  "no": "02",
                  "topic": "Graphing Quadratic Relations",
                  "whatWeCover": "Graph quadratics with digital tools and read symmetry, vertex and intercepts."
                },
                {
                  "no": "03",
                  "topic": "Solving Quadratics by Graphs and Tables",
                  "whatWeCover": "Use graphs and tables to solve quadratic equations and read x-intercepts as solutions."
                },
                {
                  "no": "04",
                  "topic": "Solving Quadratics by Factoring",
                  "whatWeCover": "Solve quadratic equations with integer roots by factoring and the zero product property."
                },
                {
                  "no": "05",
                  "topic": "Transformations of Linear Graphs",
                  "whatWeCover": "Change a and b in y = ax + b and describe the effect on slope and position."
                },
                {
                  "no": "06",
                  "topic": "Transformations of Parabolas",
                  "whatWeCover": "Explore how stretches and shifts change a parabola and link them to the equation."
                },
                {
                  "no": "07",
                  "topic": "Linear versus Quadratic Models",
                  "whatWeCover": "Choose between linear and quadratic models for a situation and justify the choice."
                },
                {
                  "no": "08",
                  "topic": "Surface Area of Prisms and Cylinders",
                  "whatWeCover": "Use nets and formulas to find surface area and solve practical problems."
                },
                {
                  "no": "09",
                  "topic": "Volume of Prisms and Cylinders",
                  "whatWeCover": "Find volume and capacity and solve design problems, such as a rink water tank."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise quadratics, transformations and measurement through mixed and modelling tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Very Large and Very Small Measurements",
                  "whatWeCover": "Solve measurement problems with extreme scales, scientific notation and time scales."
                },
                {
                  "no": "02",
                  "topic": "Pythagorean Theorem in Spatial Problems",
                  "whatWeCover": "Apply the Pythagorean theorem to real spatial problems and coordinate distances."
                },
                {
                  "no": "03",
                  "topic": "Right-Angle Trigonometry",
                  "whatWeCover": "Use sine, cosine and tangent to find unknown sides and angles in right triangles."
                },
                {
                  "no": "04",
                  "topic": "Similarity, Scale and Angle Properties",
                  "whatWeCover": "Use similarity, scale factors and angle properties to solve spatial problems."
                },
                {
                  "no": "05",
                  "topic": "Measurement Error",
                  "whatWeCover": "Find absolute, relative and percent error and see why measured values are approximate."
                },
                {
                  "no": "06",
                  "topic": "Bounds and Accuracy",
                  "whatWeCover": "Set upper and lower bounds for measurements and judge how errors build up."
                },
                {
                  "no": "07",
                  "topic": "Direct Proportion",
                  "whatWeCover": "Model direct variation and solve problems with pay rates, conversions and ratios."
                },
                {
                  "no": "08",
                  "topic": "Rates, Ratio and Scale Modelling",
                  "whatWeCover": "Model problems with rates, ratios and scale, such as fuel use, density and construction plans."
                },
                {
                  "no": "09",
                  "topic": "Financial Literacy: Simple and Compound Interest",
                  "whatWeCover": "Compare simple and compound interest on savings and loans in Canadian dollars."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise trigonometry, proportion and financial modelling. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Compound Events and Sample Spaces",
                  "whatWeCover": "List outcomes of multi-step chance events with lists, tables, arrays and tree diagrams."
                },
                {
                  "no": "02",
                  "topic": "With and Without Replacement",
                  "whatWeCover": "Compare events with and without replacement and assign probabilities."
                },
                {
                  "no": "03",
                  "topic": "Tree Diagrams and Multi-Stage Probability",
                  "whatWeCover": "Build and read tree diagrams for two-stage and three-stage events."
                },
                {
                  "no": "04",
                  "topic": "Relative Frequency",
                  "whatWeCover": "Calculate relative frequencies from data and use them to estimate probabilities."
                },
                {
                  "no": "05",
                  "topic": "Probability of And Events",
                  "whatWeCover": "Use tables, diagrams and reasoning to find probabilities of events happening together."
                },
                {
                  "no": "06",
                  "topic": "Inclusive and Exclusive Or",
                  "whatWeCover": "Tell inclusive from exclusive or and calculate the matching probabilities."
                },
                {
                  "no": "07",
                  "topic": "Probability Simulations",
                  "whatWeCover": "Design and run repeated trials and digital simulations, and compare theoretical and experimental results."
                },
                {
                  "no": "08",
                  "topic": "Scatter Plots and Lines of Best Fit",
                  "whatWeCover": "Plot two-variable data, describe the relationship and draw a line of best fit."
                },
                {
                  "no": "09",
                  "topic": "Mixed Problems and Test-Style Practice",
                  "whatWeCover": "Practise multi-step problems and explain your thinking, including EQAO-style questions for Ontario's Grade 9 math assessment and puzzles in the style of the University of Waterloo's Pascal contest."
                },
                {
                  "no": "10",
                  "topic": "Grade 9 Review and Grade 10 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 10 math, including trigonometry and analytic geometry. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-9/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Stimuli, Responses and Body Regulation",
                  "whatWeCover": "Explore how the body senses and responds to stimuli and which systems help."
                },
                {
                  "no": "02",
                  "topic": "Nervous and Endocrine Coordination",
                  "whatWeCover": "Compare fast nerve impulses with slower hormone signals."
                },
                {
                  "no": "03",
                  "topic": "Negative Feedback Mechanisms",
                  "whatWeCover": "Model receptor, control centre and effector pathways that keep the body stable, such as temperature control in cold weather."
                },
                {
                  "no": "04",
                  "topic": "Feedback Disorders and Health",
                  "whatWeCover": "Look at what happens when feedback systems fail and how science helps with treatment."
                },
                {
                  "no": "05",
                  "topic": "Reproductive Systems and Gametes",
                  "whatWeCover": "Describe the structure and function of reproductive organs and gametes in a factual, age-appropriate way."
                },
                {
                  "no": "06",
                  "topic": "Sexual and Asexual Reproduction",
                  "whatWeCover": "Compare sexual and asexual reproduction and how each affects variation and survival."
                },
                {
                  "no": "07",
                  "topic": "Plant Reproduction",
                  "whatWeCover": "Compare reproductive strategies in plants and how they suit different environments."
                },
                {
                  "no": "08",
                  "topic": "Animal Reproductive Strategies",
                  "whatWeCover": "Analyze how environment, number of offspring and parental care are linked."
                },
                {
                  "no": "09",
                  "topic": "Biology Inquiry and Data Skills",
                  "whatWeCover": "Form hypotheses, plan valid investigations and analyze secondary data."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise regulation, feedback and reproduction through models and data. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Earth as an Interacting System",
                  "whatWeCover": "Name the geosphere, biosphere, hydrosphere and atmosphere and how matter and energy move between them."
                },
                {
                  "no": "02",
                  "topic": "The Carbon Cycle",
                  "whatWeCover": "Show carbon stores and flows through photosynthesis, respiration, decomposition and combustion, including in Canada's boreal forest."
                },
                {
                  "no": "03",
                  "topic": "Combustion and Human Impacts on Carbon",
                  "whatWeCover": "Analyze how burning fuels and human activity change atmospheric carbon dioxide."
                },
                {
                  "no": "04",
                  "topic": "Greenhouse Effect and Climate Connections",
                  "whatWeCover": "Explain the greenhouse effect and the role of carbon dioxide in climate."
                },
                {
                  "no": "05",
                  "topic": "Carbon Storage and Solutions",
                  "whatWeCover": "Investigate natural and technological carbon storage and ways to cut carbon footprints."
                },
                {
                  "no": "06",
                  "topic": "Heat: The Particle Model",
                  "whatWeCover": "Use the particle model to explain conduction and convection, such as home heating in winter."
                },
                {
                  "no": "07",
                  "topic": "Sound Energy and Waves",
                  "whatWeCover": "Model sound as a wave and see how materials change how it travels."
                },
                {
                  "no": "08",
                  "topic": "Electricity: Current and Voltage",
                  "whatWeCover": "Use particle ideas to explain static electricity, current and voltage."
                },
                {
                  "no": "09",
                  "topic": "Light and Electromagnetic Radiation",
                  "whatWeCover": "Use wave and particle models to explain light and the electromagnetic spectrum."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise the carbon cycle and energy transfer in unfamiliar contexts. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Conservation of Energy",
                  "whatWeCover": "Apply the law of conservation of energy and tell transfer from transformation."
                },
                {
                  "no": "02",
                  "topic": "Efficiency and Sankey Diagrams",
                  "whatWeCover": "Compare energy inputs, useful outputs and waste and read Sankey diagrams."
                },
                {
                  "no": "03",
                  "topic": "Energy Technologies and Efficiency",
                  "whatWeCover": "Compare efficiency in power generation, appliances and machines, including hydroelectric power in Canada."
                },
                {
                  "no": "04",
                  "topic": "Development of the Atomic Model",
                  "whatWeCover": "Trace how new evidence for electrons, protons and neutrons changed models of the atom."
                },
                {
                  "no": "05",
                  "topic": "Atomic Structure and Isotopes",
                  "whatWeCover": "Compare subatomic particles and explain isotopes and stability."
                },
                {
                  "no": "06",
                  "topic": "Radioactive Decay and Half-Life",
                  "whatWeCover": "Describe alpha, beta and gamma decay and use graphs to model half-life."
                },
                {
                  "no": "07",
                  "topic": "Applications of Radioisotopes",
                  "whatWeCover": "Examine uses of radioactivity in medicine, industry and dating and weigh benefits and risks."
                },
                {
                  "no": "08",
                  "topic": "Chemical Reactions: Atoms Rearranged",
                  "whatWeCover": "Identify reactants and products and use particle models to show atoms rearranging."
                },
                {
                  "no": "09",
                  "topic": "Word and Balanced Equations",
                  "whatWeCover": "Write word equations and simple balanced equations and explain balancing."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise energy, atoms and chemical reactions. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "How Science Is Validated",
                  "whatWeCover": "See how evidence, publication and peer review validate and refine knowledge."
                },
                {
                  "no": "02",
                  "topic": "Science and Technology Advance Together",
                  "whatWeCover": "Explore how imaging, communications and monitoring tools and science move each other forward."
                },
                {
                  "no": "03",
                  "topic": "Adoption of Science in Society",
                  "whatWeCover": "Analyze what affects whether scientific ideas are adopted, such as evidence, cost and culture."
                },
                {
                  "no": "04",
                  "topic": "Societal Values and Research Priorities",
                  "whatWeCover": "See how social needs, environmental concerns, funding and values shape research."
                },
                {
                  "no": "05",
                  "topic": "Questions, Hypotheses and Models",
                  "whatWeCover": "Form testable questions and hypotheses and build explanatory models."
                },
                {
                  "no": "06",
                  "topic": "Validity, Reproducibility and Ethics",
                  "whatWeCover": "Plan valid, repeatable investigations, control variables and manage risk and ethics."
                },
                {
                  "no": "07",
                  "topic": "Precision, Sample Size and Data",
                  "whatWeCover": "Choose equipment, record data with suitable precision and use enough trials."
                },
                {
                  "no": "08",
                  "topic": "Data Representation and Relationships",
                  "whatWeCover": "Build tables, graphs and models and find mathematical relationships in data."
                },
                {
                  "no": "09",
                  "topic": "Analyzing and Evaluating Evidence",
                  "whatWeCover": "Spot patterns, trends, anomalies and uncertainty and judge validity."
                },
                {
                  "no": "10",
                  "topic": "Grade 9 Review and Grade 10 Readiness",
                  "whatWeCover": "Build an evidence-based argument, communicate findings for an audience and preview Grade 10 science. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 9 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "NEXT GRADE",
          "title": "Grade 10 Tutoring",
          "text": "Build on Grade 9 with Grade 10 Math, English and Science, 40 live lessons per subject matched to your province's curriculum.",
          "buttonText": "View Grade 10",
          "href": "/ca/subjects/grade-10"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  },
  "grade-10": {
    "gradeNum": 10,
    "yearId": "grade-10",
    "meta": {
      "title": "Grade 10 Tutoring Canada | Math, English, Science",
      "description": "Online Grade 10 tutoring in Canada for Math, English and Science. Live 1-on-1 or small group lessons matched to your province's curriculum. Free trial.",
      "canonical": "https://www.tutorexel.com/ca/subjects/grade-10"
    },
    "hero": {
      "h1": "Grade 10 Math, English and Science Tutoring in Canada",
      "subheading": "Forty live online lessons per subject, matched to your province's curriculum. Taught in personalized 1-on-1 or small group classes by qualified tutors, from trigonometry to DNA.",
      "primaryBtn": "Try a Free Grade 10 Lesson",
      "secondaryBtn": "Book Free Assessment"
    },
    "intro": {
      "text": "Grade 10 is a key year on the road to graduation and the bridge to senior courses. Our structured program builds the Math, English and Science skills that Grades 11 and 12 rely on, from compound interest in Canadian dollars to Newton's laws.",
      "keyTopics": {
        "math": "factoring, systems of equations, exponential growth, trigonometry and boxplots.",
        "english": "media representation, analytical paragraphs, satire, rhetoric and persuasive essays.",
        "science": "DNA, evolution, the Big Bang, climate, Newton's laws and reaction rates."
      },
      "parentTip": "Grade 10 decides how smoothly Grades 11 and 12 go. Help your child keep up a steady study routine and practise test-style questions little and often. We make sure each idea clicks before moving on."
    },
    "outcomes": {
      "eyebrow": "What Your Child Will Master",
      "h2": "By Term 4 of Grade 10, Your Child Will...",
      "items": [
        "Expand, factor and solve quadratic expressions and equations",
        "Use trigonometry and similar triangles to solve measurement problems",
        "Write analytical paragraphs and literary responses with evidence",
        "Plan and write an extended persuasive essay",
        "Explain DNA, mitosis, meiosis and simple inheritance",
        "Apply Newton's laws to motion, safety and engineering"
      ]
    },
    "curriculum": {
      "eyebrow": "4 school terms. 10 lessons each. Mapped to provincial curricula.",
      "h2": "Grade 10 Curriculum: Math, English and Science",
      "subjects": [
        {
          "id": "english",
          "label": "English",
          "href": "/ca/subjects/grade-10/english",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Inclusive and Exclusive Language",
                  "whatWeCover": "Explore how word choices include, exclude or label groups, including respectful terms used in Canada's diverse communities."
                },
                {
                  "no": "02",
                  "topic": "Representation in Media Texts",
                  "whatWeCover": "Analyze how people, places and communities are represented in Canadian news and media."
                },
                {
                  "no": "03",
                  "topic": "Analytical Paragraph Writing",
                  "whatWeCover": "Build analytical paragraphs with a topic sentence, evidence, explanation and link."
                },
                {
                  "no": "04",
                  "topic": "Sentence Focus and Syntax",
                  "whatWeCover": "See how sentence structure shapes emphasis, including active and passive voice and sentence variety."
                },
                {
                  "no": "05",
                  "topic": "Vocabulary and Inference",
                  "whatWeCover": "Grow academic vocabulary and practise inferring meaning from context and tone."
                },
                {
                  "no": "06",
                  "topic": "Nominalization and Abstraction",
                  "whatWeCover": "Learn how turning verbs into nouns, such as decide to decision, creates formal, abstract writing."
                },
                {
                  "no": "07",
                  "topic": "Short Story: Identity and Voice",
                  "whatWeCover": "Read a short story and analyze how voice and choices shape a character's identity."
                },
                {
                  "no": "08",
                  "topic": "Persuasive Writing Task",
                  "whatWeCover": "Write a persuasive response on an issue of representation or power, using clear evidence."
                },
                {
                  "no": "09",
                  "topic": "Speaking: Media Bias Debate",
                  "whatWeCover": "Prepare and deliver a short debate on media bias using rhetorical devices."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise analytical writing, representation and an integrated mini-assessment. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Text Structures Across Modes",
                  "whatWeCover": "Compare how structure and features change across print and digital texts."
                },
                {
                  "no": "02",
                  "topic": "Interpreting Literary Meaning",
                  "whatWeCover": "Compare more than one interpretation of the same text and support your own with evidence."
                },
                {
                  "no": "03",
                  "topic": "Literary Response Writing",
                  "whatWeCover": "Write an analytical response to a key moment in a text with a clear thesis."
                },
                {
                  "no": "04",
                  "topic": "Paragraph Variation and Cohesion",
                  "whatWeCover": "See how authors vary paragraph length and structure for effect and link ideas smoothly."
                },
                {
                  "no": "05",
                  "topic": "Reading Strategies for Complex Texts",
                  "whatWeCover": "Use visualizing, questioning and inferring to work through dense passages."
                },
                {
                  "no": "06",
                  "topic": "Visual Features and Representation",
                  "whatWeCover": "Analyze still and moving images from film and graphic novels, including framing, light and angle."
                },
                {
                  "no": "07",
                  "topic": "Comparing Literary Voices",
                  "whatWeCover": "Compare voice in poetry, prose and film through tone, rhythm and perspective."
                },
                {
                  "no": "08",
                  "topic": "Creative Voice Experiment",
                  "whatWeCover": "Write a short piece in a sustained voice, adapting structure and devices on purpose."
                },
                {
                  "no": "09",
                  "topic": "Spoken Interpretation",
                  "whatWeCover": "Listen to monologues or spoken word and analyze how delivery shapes meaning."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise literary skills and a literary assessment task. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Values in Language",
                  "whatWeCover": "Spot how evaluative language reveals values, both stated and implied."
                },
                {
                  "no": "02",
                  "topic": "Ethical Positions in Literature",
                  "whatWeCover": "Examine the moral stance a text takes and the values behind it."
                },
                {
                  "no": "03",
                  "topic": "Argument Writing Structure",
                  "whatWeCover": "Plan an extended argument with a clear claim, structured paragraphs and a strong close."
                },
                {
                  "no": "04",
                  "topic": "Punctuation for Effect",
                  "whatWeCover": "See how colons, semicolons and ellipses create pause, emphasis and tone."
                },
                {
                  "no": "05",
                  "topic": "Persuasive Reading Strategies",
                  "whatWeCover": "Find claims, evidence and bias in persuasive texts."
                },
                {
                  "no": "06",
                  "topic": "Organizing Ideas in Texts",
                  "whatWeCover": "Compare how pamphlets, articles and speeches organize ideas for effect."
                },
                {
                  "no": "07",
                  "topic": "Satire and Interpretation",
                  "whatWeCover": "Study satire, cartoons and parody and the devices that add a second layer of meaning."
                },
                {
                  "no": "08",
                  "topic": "Extended Persuasive Essay",
                  "whatWeCover": "Write a full persuasive essay on a current issue with evidence and rhetoric."
                },
                {
                  "no": "09",
                  "topic": "Debate and Rhetoric",
                  "whatWeCover": "Prepare and deliver a structured debate using rhetorical devices to persuade."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise argument, values and persuasion through a term assessment task. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Multimodal Structures",
                  "whatWeCover": "See how documentaries and webpages combine words, images and sound."
                },
                {
                  "no": "02",
                  "topic": "Creating a Sustained Voice",
                  "whatWeCover": "Start a creative project with a consistent voice and chosen structure."
                },
                {
                  "no": "03",
                  "topic": "Integrating Images and Text",
                  "whatWeCover": "Study how images and paragraphs work together on websites and graphic texts."
                },
                {
                  "no": "04",
                  "topic": "Academic Vocabulary in Writing",
                  "whatWeCover": "Grow technical and academic vocabulary and use it with precision."
                },
                {
                  "no": "05",
                  "topic": "Multimodal Comprehension",
                  "whatWeCover": "Read complex multimodal texts and practise literacy test-style questions on predicting, inferring and summarizing."
                },
                {
                  "no": "06",
                  "topic": "Visual Representation",
                  "whatWeCover": "Analyze how light, angle and composition build meaning in images."
                },
                {
                  "no": "07",
                  "topic": "Editing for Purpose and Canadian Spelling",
                  "whatWeCover": "Revise drafts for structure, cohesion and Canadian spelling such as colour, centre and licence."
                },
                {
                  "no": "08",
                  "topic": "Creative Portfolio",
                  "whatWeCover": "Build a set of short creative texts that explore one idea in different forms."
                },
                {
                  "no": "09",
                  "topic": "Spoken Performance",
                  "whatWeCover": "Rehearse and deliver a creative or persuasive presentation with rhetorical devices."
                },
                {
                  "no": "10",
                  "topic": "Grade 10 Review and Grade 11 Readiness",
                  "whatWeCover": "Revise the year and practise literacy test-style reading and writing tasks, such as Ontario's OSSLT, then preview Grade 11. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "math",
          "label": "Math",
          "href": "/ca/subjects/grade-10/math",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "Exact Values, Approximation and Error",
                  "whatWeCover": "Compare exact and rounded values and see how rounding early can grow into large errors in later steps."
                },
                {
                  "no": "02",
                  "topic": "Exponent Laws with Algebraic Expressions",
                  "whatWeCover": "Apply exponent laws to products, quotients and powers of variables, including negative and zero exponents."
                },
                {
                  "no": "03",
                  "topic": "Expanding and Simplifying Expressions",
                  "whatWeCover": "Expand and simplify polynomial expressions using the distributive property and exponent laws."
                },
                {
                  "no": "04",
                  "topic": "Factoring and Completing the Square",
                  "whatWeCover": "Factor expressions and connect expanding, factoring and completing the square for quadratics."
                },
                {
                  "no": "05",
                  "topic": "Solving Algebraic Equations",
                  "whatWeCover": "Solve equations by factoring, simplifying and inverse operations, and check each solution."
                },
                {
                  "no": "06",
                  "topic": "Linear Inequalities",
                  "whatWeCover": "Solve linear inequalities and show solutions on number lines and graphs, such as a monthly phone data limit."
                },
                {
                  "no": "07",
                  "topic": "Systems of Linear Equations",
                  "whatWeCover": "Solve two linear equations in two variables by graphing, substitution and elimination, and interpret the answer in context."
                },
                {
                  "no": "08",
                  "topic": "Exponential Relations",
                  "whatWeCover": "Spot exponential patterns in tables and link equations to graphs with digital tools."
                },
                {
                  "no": "09",
                  "topic": "Solving Exponential Equations",
                  "whatWeCover": "Solve exponential equations using tables, graphs and digital tools to find unknown values."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise approximation, algebra, inequalities, systems and exponential relations through multi-step problems. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "Linear, Quadratic and Exponential Models",
                  "whatWeCover": "Tell the three relations apart using first and second differences, tables and graphs."
                },
                {
                  "no": "02",
                  "topic": "Growth and Decay Modelling",
                  "whatWeCover": "Model growth and decay, including doubling time and half-life, and judge how well a model fits."
                },
                {
                  "no": "03",
                  "topic": "Compound Interest and Financial Modelling",
                  "whatWeCover": "Use compound interest in Canadian dollars, such as a savings account or student loan, and compare it with simple interest."
                },
                {
                  "no": "04",
                  "topic": "Functions, Relations and Digital Conjectures",
                  "whatWeCover": "Explore functions with digital graphing tools, find where graphs meet and test conjectures."
                },
                {
                  "no": "05",
                  "topic": "Composite Surface Area",
                  "whatWeCover": "Find the surface area of objects built from prisms, cylinders, cones and spheres, such as a grain bin."
                },
                {
                  "no": "06",
                  "topic": "Composite Volume",
                  "whatWeCover": "Find the volume of composite objects and solve practical storage and capacity problems in cubic metres and litres."
                },
                {
                  "no": "07",
                  "topic": "Logarithmic Scales",
                  "whatWeCover": "Read and use scales that jump by powers of ten, such as earthquake magnitude, pH and decibels."
                },
                {
                  "no": "08",
                  "topic": "Pythagoras and Right-Angle Trigonometry",
                  "whatWeCover": "Use the Pythagorean theorem and sine, cosine and tangent to solve two and three-dimensional problems."
                },
                {
                  "no": "09",
                  "topic": "Bearings, Elevation and Depression",
                  "whatWeCover": "Solve direction and height problems with bearings and angles of elevation and depression, such as the height of the CN Tower."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise growth models, composite measurement, logarithmic scales and trigonometry through multi-step tasks. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Measurement Error and Accuracy",
                  "whatWeCover": "See how instruments and rounding affect results and judge how reliable a measurement is."
                },
                {
                  "no": "02",
                  "topic": "Proportion and Scaling Models",
                  "whatWeCover": "Use proportion and scale to solve problems with plans, maps and scale drawings."
                },
                {
                  "no": "03",
                  "topic": "Geometric Proof and Deductive Reasoning",
                  "whatWeCover": "Tell a demonstration from a proof and build logical proofs about lines, angles and polygons."
                },
                {
                  "no": "04",
                  "topic": "Congruence and Similar Triangles",
                  "whatWeCover": "Use congruence, similarity and angle properties to prove results and solve measurement problems."
                },
                {
                  "no": "05",
                  "topic": "Analytic Geometry: Lines and Segments",
                  "whatWeCover": "Use slope, midpoint and distance on the coordinate plane to describe lines and line segments."
                },
                {
                  "no": "06",
                  "topic": "Analytic Geometry: Verifying Shapes",
                  "whatWeCover": "Use coordinates to check properties of triangles and quadrilaterals, such as whether a shape is a rectangle."
                },
                {
                  "no": "07",
                  "topic": "Spatial Algorithms and Efficient Routes",
                  "whatWeCover": "Use step-by-step thinking and digital tools to plan efficient routes, such as a delivery run across a city."
                },
                {
                  "no": "08",
                  "topic": "Scale Design and Digital Spatial Solutions",
                  "whatWeCover": "Design and test a scale model or floor plan, state assumptions and justify choices."
                },
                {
                  "no": "09",
                  "topic": "Statistics in the Media: Claims and Bias",
                  "whatWeCover": "Question statistical claims for misleading graphs, biased samples and weak evidence."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise proof, similar triangles, analytic geometry and statistical reasoning through applied problems. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Five-Number Summary and Boxplots",
                  "whatWeCover": "Find the minimum, quartiles, median and maximum and build and read boxplots."
                },
                {
                  "no": "02",
                  "topic": "Comparing Data Distributions",
                  "whatWeCover": "Compare data sets using boxplots, histograms and dot plots and explain differences in centre and spread."
                },
                {
                  "no": "03",
                  "topic": "Scatter Plots and Association",
                  "whatWeCover": "Build scatter plots and describe the direction, strength and shape of the association."
                },
                {
                  "no": "04",
                  "topic": "Association versus Causation and Lines of Best Fit",
                  "whatWeCover": "Tell association from cause and effect and use a line of best fit to make careful predictions."
                },
                {
                  "no": "05",
                  "topic": "Two-Way Tables and Categorical Association",
                  "whatWeCover": "Build two-way tables and use counts and percentages to study links between categories."
                },
                {
                  "no": "06",
                  "topic": "Bivariate Statistical Investigations",
                  "whatWeCover": "Plan and run an investigation on two variables, then analyze and report the findings."
                },
                {
                  "no": "07",
                  "topic": "Conditional Probability Language",
                  "whatWeCover": "Read and write conditional statements using given, if and of, and show them with tables and diagrams."
                },
                {
                  "no": "08",
                  "topic": "Dependent and Independent Events",
                  "whatWeCover": "Compare dependent and independent events and see how dependence changes probability."
                },
                {
                  "no": "09",
                  "topic": "Conditional Probability Simulations",
                  "whatWeCover": "Run repeated trials and digital simulations to model conditional probability, plus Cayley-style contest problems."
                },
                {
                  "no": "10",
                  "topic": "Grade 10 Review and Grade 11 Readiness",
                  "whatWeCover": "Revise the year's key skills and preview Grade 11 math, including functions. A termly mock test and parent report follow."
                }
              ]
            }
          ]
        },
        {
          "id": "science",
          "label": "Science",
          "href": "/ca/subjects/grade-10/science",
          "terms": [
            {
              "termKey": "term-1",
              "termTitle": "Term 1",
              "topics": [
                {
                  "no": "01",
                  "topic": "DNA, Genes, Chromosomes and the Genome",
                  "whatWeCover": "Explain how DNA, genes, chromosomes and the genome relate and use models to show them."
                },
                {
                  "no": "02",
                  "topic": "Mitosis and Growth",
                  "whatWeCover": "Explain how mitosis supports growth, repair and cell replacement."
                },
                {
                  "no": "03",
                  "topic": "Meiosis, Fertilization and Variation",
                  "whatWeCover": "Explain how meiosis and fertilization mix genetic information from two parents."
                },
                {
                  "no": "04",
                  "topic": "Mendelian Inheritance",
                  "whatWeCover": "Use dominant and recessive alleles and Punnett squares to predict simple inheritance ratios."
                },
                {
                  "no": "05",
                  "topic": "Pedigrees, Sex-Linked Traits and Genetic Disorders",
                  "whatWeCover": "Read pedigree diagrams and link changes in DNA or chromosomes to inherited conditions, keeping the tone factual."
                },
                {
                  "no": "06",
                  "topic": "Evolution by Natural Selection",
                  "whatWeCover": "Explain variation, selection pressure, survival and reproduction in evolution."
                },
                {
                  "no": "07",
                  "topic": "Evidence for Evolution",
                  "whatWeCover": "Weigh fossil, anatomical, chemical and geographic evidence, including Canada's Burgess Shale fossils."
                },
                {
                  "no": "08",
                  "topic": "Adaptation, Selection and Biodiversity",
                  "whatWeCover": "Link inherited traits to survival and show how selection shapes biodiversity."
                },
                {
                  "no": "09",
                  "topic": "Genetics and Evolution Inquiry",
                  "whatWeCover": "Analyze inheritance or evolution data and build an evidence-based explanation."
                },
                {
                  "no": "10",
                  "topic": "Term 1 Review",
                  "whatWeCover": "Revise heredity, inheritance, natural selection and evidence through problem solving. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-2",
              "termTitle": "Term 2",
              "topics": [
                {
                  "no": "01",
                  "topic": "The Universe: Scale, Components and Measurement",
                  "whatWeCover": "Describe the parts of the universe and use astronomical units and light-years."
                },
                {
                  "no": "02",
                  "topic": "The Big Bang Model and Cosmic Timeline",
                  "whatWeCover": "Describe the Big Bang model and build a timeline from the early universe to stars and galaxies."
                },
                {
                  "no": "03",
                  "topic": "Evidence for the Big Bang",
                  "whatWeCover": "Analyze redshift, cosmic microwave background radiation and Hubble's observations."
                },
                {
                  "no": "04",
                  "topic": "Stars, Spectra and Astronomical Technologies",
                  "whatWeCover": "Explain how spectra and brightness reveal star properties, including telescopes such as CHIME in British Columbia."
                },
                {
                  "no": "05",
                  "topic": "Earth's Climate System and Energy Flow",
                  "whatWeCover": "Model energy flow among the atmosphere, oceans, living things and land."
                },
                {
                  "no": "06",
                  "topic": "Evidence and Indicators of Climate Change",
                  "whatWeCover": "Analyze changes in temperature, sea level, ice and species ranges, including Arctic sea ice."
                },
                {
                  "no": "07",
                  "topic": "Ocean Circulation, Energy Balance and Climate Patterns",
                  "whatWeCover": "Explain how solar energy and ocean currents shape climate patterns."
                },
                {
                  "no": "08",
                  "topic": "Climate Modelling, Prediction and Responses",
                  "whatWeCover": "Use data and models to make predictions and weigh ways to reduce climate change."
                },
                {
                  "no": "09",
                  "topic": "Science, Technology and Earth-Space Research",
                  "whatWeCover": "See how satellites and computing expand what we know about Earth and space."
                },
                {
                  "no": "10",
                  "topic": "Term 2 Review",
                  "whatWeCover": "Revise cosmology and climate evidence through a supported scientific argument. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-3",
              "termTitle": "Term 3",
              "topics": [
                {
                  "no": "01",
                  "topic": "Motion: Distance, Time, Speed and Acceleration",
                  "whatWeCover": "Analyze motion with distance, time, speed and acceleration, using graphs and calculations."
                },
                {
                  "no": "02",
                  "topic": "Newton's First Law and Inertia",
                  "whatWeCover": "Investigate inertia and balanced and unbalanced forces, such as a puck gliding on ice."
                },
                {
                  "no": "03",
                  "topic": "Newton's Second Law: Force, Mass and Acceleration",
                  "whatWeCover": "Use F = ma with data, graphs and algebra to solve force and motion problems."
                },
                {
                  "no": "04",
                  "topic": "Newton's Third Law and Interacting Forces",
                  "whatWeCover": "Explain action and reaction pairs in sport, rockets and transport."
                },
                {
                  "no": "05",
                  "topic": "Newton's Laws in Safety and Engineering",
                  "whatWeCover": "Apply the laws to seatbelts, airbags, winter tires and crumple zones."
                },
                {
                  "no": "06",
                  "topic": "Atomic Structure and the Periodic Table",
                  "whatWeCover": "Use the Bohr model to link electron arrangement to the layout of the periodic table."
                },
                {
                  "no": "07",
                  "topic": "Periodic Trends, Groups and Properties",
                  "whatWeCover": "Spot patterns in groups and periods and link outer electrons to similar properties."
                },
                {
                  "no": "08",
                  "topic": "Types of Chemical Reactions",
                  "whatWeCover": "Identify and write synthesis, decomposition and displacement reactions with word and balanced equations."
                },
                {
                  "no": "09",
                  "topic": "Predicting Products and Reaction Patterns",
                  "whatWeCover": "Use reaction patterns to classify reactions and predict products."
                },
                {
                  "no": "10",
                  "topic": "Term 3 Review",
                  "whatWeCover": "Revise motion, forces, atoms and reactions through calculations and investigations. A termly mock test and parent report follow."
                }
              ]
            },
            {
              "termKey": "term-4",
              "termTitle": "Term 4",
              "topics": [
                {
                  "no": "01",
                  "topic": "Rates of Reaction",
                  "whatWeCover": "Investigate how temperature, concentration, surface area and catalysts change reaction rate, such as road salt and rust."
                },
                {
                  "no": "02",
                  "topic": "How Science Is Validated and Refined",
                  "whatWeCover": "Explain peer review, replication and evidence using examples from genetics and astronomy."
                },
                {
                  "no": "03",
                  "topic": "Science and Technology: Mutual Development",
                  "whatWeCover": "See how computing, satellites, gene technology and new materials push science forward."
                },
                {
                  "no": "04",
                  "topic": "Science Adoption, Values and Society",
                  "whatWeCover": "Examine why scientific ideas are adopted or contested and how values and needs shape them."
                },
                {
                  "no": "05",
                  "topic": "Questions, Predictions and Hypotheses",
                  "whatWeCover": "Write investigable questions and hypotheses about motion, reaction rates and inheritance."
                },
                {
                  "no": "06",
                  "topic": "Planning Valid and Reproducible Investigations",
                  "whatWeCover": "Control variables, manage error and risk and design fair, repeatable methods."
                },
                {
                  "no": "07",
                  "topic": "Precision, Calibration and Sample Size",
                  "whatWeCover": "Choose and calibrate equipment, record precise data and plan sample sizes."
                },
                {
                  "no": "08",
                  "topic": "Data, Graphs and Mathematical Models",
                  "whatWeCover": "Organize data with tables, graphs, statistics and equations and model relationships."
                },
                {
                  "no": "09",
                  "topic": "Patterns, Anomalies and Uncertainty",
                  "whatWeCover": "Find patterns and anomalies in data, make predictions and describe uncertainty."
                },
                {
                  "no": "10",
                  "topic": "Grade 10 Review and Grade 11 Readiness",
                  "whatWeCover": "Revise genetics, space, climate, forces and chemistry in an integrated task and preview Grade 11 science. A termly mock test and parent report follow."
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
      "buttonText": "Try a Free Grade 10 Lesson"
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
      "h2": "Keep Exploring",
      "cards": [
        {
          "tag": "PREVIOUS GRADE",
          "title": "Grade 9 Tutoring",
          "text": "Review Grade 9 foundations in Math, English and Science with our structured curriculum.",
          "buttonText": "View Grade 9",
          "href": "/ca/subjects/grade-9"
        },
        {
          "tag": "PRICING",
          "title": "Clear CAD Pricing",
          "text": "Simple monthly plans in Canadian dollars. No hidden fees and no lock-in contracts. Choose one subject or all three.",
          "buttonText": "See Pricing",
          "href": "/ca/pricing"
        }
      ]
    },
    "finalCta": {
      "h2": "Ready to Help Your Child Excel?",
      "text": "Join the Canadian families who trust TutorExel with their child's learning. Book your free trial class today, no credit card required.",
      "buttonText": "Book My Free Trial",
      "phone": "+1 (206) 797 7387",
      "phoneHref": "https://wa.me/12067977387"
    }
  }
};
