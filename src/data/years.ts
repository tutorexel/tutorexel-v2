export interface YearLevel {
  id: string;
  label: string;
  year: number;
  ages: string;
  description: string;
  subjects: SubjectInfo[];
  featured?: boolean;
}

export interface SubjectInfo {
  id: string;
  label: string;
}

export interface LearningOutcome {
  text: string;
}

export interface CurriculumTopic {
  topic: string;
  description: string;
}

export interface SubjectData {
  yearId: string;
  subjectId: string;
  yearLabel: string;
  subjectLabel: string;
  ages: string;
  heroSubtitle: string;
  learningOutcomes: LearningOutcome[];
  curriculum: Record<string, CurriculumTopic[]>;
}

export const yearLevels: YearLevel[] = [
  {
    id: "year-2",
    year: 2,
    label: "Year 2",
    ages: "Ages 7-8",
    description:
      "Maths: Number & place value, addition, subtraction, fractions, 2D shapes, patterns. English: Phonics, reading comprehension, narrative writing, grammar basics, spelling patterns.",
    subjects: [
      { id: "english", label: "English" },
      { id: "maths", label: "Maths" },
      { id: "science", label: "Science" },
    ],
  },
  {
    id: "year-3",
    year: 3,
    label: "Year 3",
    ages: "Ages 8-9",
    description:
      "Maths: Place value to 1000, regrouping, skip counting, angles, symmetry, chance. English: Reading fluency, informative writing, parts of speech, persuasive language, poetry.",
    subjects: [
      { id: "english", label: "English" },
      { id: "maths", label: "Maths" },
      { id: "science", label: "Science" },
    ],
    featured: true,
  },
  {
    id: "year-4",
    year: 4,
    label: "Year 4",
    ages: "Ages 9-10",
    description:
      "Maths: Multiplication & division strategies, fractions, money, 3D objects, capacity, data interpretation. English: Creative writing, text types, verb tenses, inference, context clues.",
    subjects: [
      { id: "english", label: "English" },
      { id: "maths", label: "Maths" },
      { id: "science", label: "Science" },
    ],
  },
  {
    id: "year-5",
    year: 5,
    label: "Year 5",
    ages: "Ages 10-11",
    description:
      "Maths: Multi-digit operations, decimals, perimeter & area, probability, financial maths. English: Persuasive writing, critical thinking, literature study, media literacy, report writing.",
    subjects: [
      { id: "english", label: "English" },
      { id: "maths", label: "Maths" },
      { id: "science", label: "Science" },
    ],
  },
  {
    id: "year-6",
    year: 6,
    label: "Year 6",
    ages: "Ages 11-12",
    description:
      "Maths: Fractions & decimals, algebra, geometry, data analysis, multi-step problem solving. English: Narrative & persuasive essays, advanced grammar, research skills, reading analysis.",
    subjects: [
      { id: "english", label: "English" },
      { id: "maths", label: "Maths" },
      { id: "science", label: "Science" },
    ],
  },
  {
    id: "year-7",
    year: 7,
    label: "Year 7",
    ages: "Ages 12-13",
    description:
      "Maths: Integers, ratios, equations, coordinate geometry, statistics. English: Analytical writing, literary analysis, complex text types, advanced punctuation, oral presentations.",
    subjects: [
      { id: "english", label: "English" },
      { id: "maths", label: "Maths" },
      { id: "science", label: "Science" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Full curriculum data for Year 2 Maths (real data)                  */
/* ------------------------------------------------------------------ */

const year2MathsCurriculum: Record<string, CurriculumTopic[]> = {
  "Term 1": [
    { topic: "Number & Place Value", description: "Recognise, model, represent and order numbers to at least 1000" },
    { topic: "Addition Strategies", description: "Explore and use addition strategies including jump and split methods" },
    { topic: "Subtraction Strategies", description: "Develop efficient subtraction strategies using number lines and partitioning" },
    { topic: "Patterns & Algebra", description: "Describe patterns with numbers and identify missing elements in sequences" },
    { topic: "2D Shapes", description: "Describe and draw two-dimensional shapes, with and without digital technologies" },
    { topic: "Data Representation", description: "Collect, organise and represent data using lists, tables, and picture graphs" },
    { topic: "Length & Area", description: "Compare and order objects using informal units for length and area" },
    { topic: "Time", description: "Tell time to the quarter hour on analogue and digital clocks" },
    { topic: "Fractions", description: "Recognise and interpret common uses of halves, quarters and eighths" },
    { topic: "Term 1 Revision & Test", description: "Comprehensive review and assessment of all Term 1 topics" },
  ],
  "Term 2": [
    { topic: "Multiplication Concepts", description: "Recognise and represent multiplication as repeated addition and arrays" },
    { topic: "Division Concepts", description: "Recognise and represent division as grouping into equal sets" },
    { topic: "Money", description: "Count and order small collections of Australian coins and notes" },
    { topic: "3D Shapes", description: "Describe the features of three-dimensional objects using formal language" },
    { topic: "Location & Transformation", description: "Interpret simple maps and give and follow directional instructions" },
    { topic: "Capacity & Volume", description: "Compare and order volumes and capacities using informal units" },
    { topic: "Mass", description: "Compare and order masses using informal and formal units of measurement" },
    { topic: "Data Analysis", description: "Interpret and compare data displays to draw simple conclusions" },
    { topic: "Number Sentences", description: "Use number sentences involving addition, subtraction and equals signs" },
    { topic: "Term 2 Revision & Test", description: "Comprehensive review and assessment of all Term 2 topics" },
  ],
  "Term 3": [
    { topic: "Place Value to 1000", description: "Recognise, model and order numbers to at least 1000 using place value" },
    { topic: "Addition with Regrouping", description: "Solve addition problems with regrouping using formal written methods" },
    { topic: "Subtraction with Regrouping", description: "Solve subtraction problems with regrouping using place value understanding" },
    { topic: "Skip Counting", description: "Investigate number sequences involving skip counting by 2s, 5s, and 10s" },
    { topic: "Angles", description: "Identify and describe half and quarter turns in everyday situations" },
    { topic: "Symmetry", description: "Identify symmetry in the environment and create symmetrical patterns" },
    { topic: "Temperature", description: "Read and interpret temperature on a thermometer to the nearest degree" },
    { topic: "Chance", description: "Identify practical activities and everyday events that involve chance" },
    { topic: "Problem Solving", description: "Use a range of strategies for solving addition and subtraction word problems" },
    { topic: "Term 3 Revision & Test", description: "Comprehensive review and assessment of all Term 3 topics" },
  ],
  "Term 4": [
    { topic: "Multiplication Facts", description: "Recall multiplication facts for 2, 5 and 10 times tables fluently" },
    { topic: "Division Facts", description: "Recall division facts related to multiplication tables for 2, 5 and 10" },
    { topic: "Fractions & Decimals", description: "Recognise and interpret halves, thirds, quarters and eighths of shapes and collections" },
    { topic: "Perimeter", description: "Measure and calculate the perimeter of simple regular and irregular shapes" },
    { topic: "Area", description: "Measure area using informal and formal units such as square centimetres" },
    { topic: "Calendars & Duration", description: "Name and order months and seasons, and use calendars to locate dates" },
    { topic: "Data Investigation", description: "Collect data, organise into categories and create displays including bar graphs" },
    { topic: "Number Patterns", description: "Describe and continue patterns involving addition, subtraction and multiplication" },
    { topic: "Year Review", description: "Comprehensive review of all key topics covered across the year" },
    { topic: "Stage Exam", description: "End-of-year stage examination covering all curriculum areas for Year 2" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Placeholder curriculum generator for other years/subjects          */
/* ------------------------------------------------------------------ */

function generatePlaceholderCurriculum(yearLabel: string, subjectLabel: string): Record<string, CurriculumTopic[]> {
  if (subjectLabel === "Maths") {
    return {
      "Term 1": [
        { topic: "Number & Place Value", description: `Explore place value concepts appropriate for ${yearLabel} level` },
        { topic: "Addition & Subtraction", description: "Develop fluency with addition and subtraction strategies" },
        { topic: "Patterns & Algebra", description: "Identify, describe and create number and spatial patterns" },
        { topic: "2D Shapes & Properties", description: "Classify and describe properties of two-dimensional shapes" },
        { topic: "Data Collection", description: "Collect, record and display data using tables and graphs" },
        { topic: "Measurement - Length", description: "Estimate, measure and compare lengths using formal units" },
        { topic: "Time & Duration", description: "Read clocks and calculate elapsed time in everyday contexts" },
        { topic: "Fractions Introduction", description: "Recognise, model and compare common fractions" },
        { topic: "Problem Solving Strategies", description: "Apply mathematical strategies to solve real-world word problems" },
        { topic: "Term 1 Revision & Test", description: "Comprehensive review and assessment of all Term 1 topics" },
      ],
      "Term 2": [
        { topic: "Multiplication Strategies", description: "Develop efficient strategies for multiplication problems" },
        { topic: "Division Strategies", description: "Understand and apply division as sharing and grouping" },
        { topic: "Money & Financial Maths", description: "Solve problems involving money and simple transactions" },
        { topic: "3D Objects", description: "Investigate and describe features of three-dimensional objects" },
        { topic: "Location & Direction", description: "Use grid references and compass directions for navigation" },
        { topic: "Capacity & Volume", description: "Measure and compare capacity using standard units" },
        { topic: "Mass & Weight", description: "Estimate, measure and compare mass using formal units" },
        { topic: "Data Interpretation", description: "Read and interpret various data displays and draw conclusions" },
        { topic: "Number Sentences & Equations", description: "Write and solve simple number sentences and equations" },
        { topic: "Term 2 Revision & Test", description: "Comprehensive review and assessment of all Term 2 topics" },
      ],
      "Term 3": [
        { topic: "Advanced Place Value", description: `Extend place value understanding to ${yearLabel}-appropriate numbers` },
        { topic: "Multi-digit Addition", description: "Solve multi-digit addition problems using efficient written methods" },
        { topic: "Multi-digit Subtraction", description: "Solve multi-digit subtraction problems with regrouping" },
        { topic: "Number Sequences", description: "Investigate and describe number sequences and their rules" },
        { topic: "Angles & Turns", description: "Identify, compare and classify angles in shapes and turns" },
        { topic: "Symmetry & Transformation", description: "Explore line symmetry, reflection and simple transformations" },
        { topic: "Temperature & Weather Data", description: "Read thermometers and analyse temperature data" },
        { topic: "Chance & Probability", description: "Describe the likelihood of everyday events using probability language" },
        { topic: "Multi-step Problem Solving", description: "Solve multi-step word problems using a variety of strategies" },
        { topic: "Term 3 Revision & Test", description: "Comprehensive review and assessment of all Term 3 topics" },
      ],
      "Term 4": [
        { topic: "Multiplication & Division Facts", description: "Build fluency with multiplication and division fact families" },
        { topic: "Fractions & Decimals", description: "Compare, order and perform operations with fractions and decimals" },
        { topic: "Perimeter & Area", description: "Calculate the perimeter and area of regular and irregular shapes" },
        { topic: "Measurement Applications", description: "Apply measurement skills to solve practical problems" },
        { topic: "Data Investigation Project", description: "Plan, collect, display and analyse data for a class investigation" },
        { topic: "Financial Mathematics", description: "Solve problems involving money, budgets and simple transactions" },
        { topic: "Geometry Review", description: "Review and consolidate understanding of shapes, angles and spatial reasoning" },
        { topic: "Number Patterns & Algebra", description: "Extend understanding of patterns and introduce algebraic thinking" },
        { topic: "Year Review", description: `Comprehensive review of all ${yearLabel} Maths curriculum topics` },
        { topic: "Stage Exam", description: `End-of-year stage examination covering all ${yearLabel} Maths curriculum areas` },
      ],
    };
  }

  if (subjectLabel === "Science") {
    return {
      "Term 1": [
        { topic: "Living Things & Classification", description: `Identify, classify and compare living things appropriate for ${yearLabel}` },
        { topic: "Life Cycles", description: "Explore life cycles of plants and animals through observation and recording" },
        { topic: "Habitats & Environments", description: "Investigate how living things depend on their habitats for survival" },
        { topic: "Human Body & Health", description: "Understand basic body systems and the importance of nutrition and hygiene" },
        { topic: "Food Chains & Ecosystems", description: "Explore how energy flows through food chains in different environments" },
        { topic: "Adaptations", description: "Investigate how plants and animals adapt to survive in their environments" },
        { topic: "Observing & Recording", description: "Use scientific methods to observe, measure and record findings accurately" },
        { topic: "Scientific Inquiry Skills", description: "Ask questions, make predictions and conduct simple fair tests" },
        { topic: "Environmental Awareness", description: "Discuss how human actions affect the natural environment" },
        { topic: "Term 1 Review & Assessment", description: "Consolidate understanding of biological sciences through investigation tasks" },
      ],
      "Term 2": [
        { topic: "Properties of Materials", description: "Explore and compare properties of different materials (hard, soft, flexible, transparent)" },
        { topic: "States of Matter", description: "Investigate solids, liquids and gases and how they behave differently" },
        { topic: "Changing Materials", description: "Explore reversible and irreversible changes through safe experiments" },
        { topic: "Mixtures & Separation", description: "Investigate methods for separating mixtures (filtering, sieving, evaporation)" },
        { topic: "Water & Its Properties", description: "Explore the water cycle and how water changes between states" },
        { topic: "Heat & Temperature", description: "Understand how heat energy transfers between objects and affects materials" },
        { topic: "Materials in Everyday Life", description: "Discuss why specific materials are chosen for different purposes" },
        { topic: "Fair Testing & Variables", description: "Plan investigations with controlled variables and record results systematically" },
        { topic: "Safety in Science", description: "Learn safe handling practices for materials and equipment during experiments" },
        { topic: "Term 2 Review & Assessment", description: "Consolidate understanding of chemical and physical sciences through practical tasks" },
      ],
      "Term 3": [
        { topic: "Earth & Space", description: "Explore Earth's place in the solar system and the movement of celestial bodies" },
        { topic: "Day, Night & Seasons", description: "Understand how Earth's rotation and tilt cause day/night and seasonal changes" },
        { topic: "Weather & Climate", description: "Investigate weather patterns, collect data and discuss climate zones" },
        { topic: "Rocks, Soil & Erosion", description: "Explore types of rocks, soil composition and how erosion shapes the landscape" },
        { topic: "Natural Resources", description: "Discuss how humans use Earth's resources and the importance of sustainability" },
        { topic: "Light & Shadow", description: "Investigate how light travels, reflects and creates shadows" },
        { topic: "Sound & Vibrations", description: "Explore how sound is produced and travels through different materials" },
        { topic: "Forces & Motion", description: "Investigate push, pull, friction and gravity and how they affect movement" },
        { topic: "Energy Sources", description: "Identify different sources of energy and how they are used in daily life" },
        { topic: "Term 3 Review & Assessment", description: "Consolidate understanding of Earth, space and physical sciences" },
      ],
      "Term 4": [
        { topic: "Electrical Circuits", description: "Build simple circuits and understand how electricity flows through conductors" },
        { topic: "Magnets & Magnetism", description: "Investigate magnetic forces, poles and everyday uses of magnets" },
        { topic: "Simple Machines", description: "Explore how levers, pulleys and inclined planes make work easier" },
        { topic: "Design & Technology", description: "Apply scientific understanding to design and build solutions to problems" },
        { topic: "Data Collection & Analysis", description: "Collect scientific data, create graphs and draw evidence-based conclusions" },
        { topic: "Science in the Real World", description: "Explore how science and technology are used in everyday life and careers" },
        { topic: "Environmental Investigation", description: "Conduct a guided investigation into a local environmental topic" },
        { topic: "Communication of Findings", description: "Present scientific findings using reports, diagrams and oral presentations" },
        { topic: "Year Review", description: `Comprehensive review of all ${yearLabel} Science curriculum topics` },
        { topic: "Stage Assessment", description: `End-of-year assessment covering all ${yearLabel} Science curriculum areas` },
      ],
    };
  }

  // English curriculum
  return {
    "Term 1": [
      { topic: "Reading Comprehension", description: "Develop strategies for understanding fiction and non-fiction texts" },
      { topic: "Phonics & Word Study", description: `${yearLabel}-appropriate phonics patterns and high-frequency words` },
      { topic: "Narrative Writing", description: "Plan and write engaging narrative texts with a clear structure" },
      { topic: "Grammar - Sentence Structure", description: "Construct grammatically correct simple and compound sentences" },
      { topic: "Spelling Patterns", description: "Learn and apply common spelling rules and patterns" },
      { topic: "Punctuation", description: "Use capital letters, full stops, commas and question marks correctly" },
      { topic: "Vocabulary Building", description: "Expand vocabulary through reading, context clues and word families" },
      { topic: "Speaking & Listening", description: "Develop oral presentation skills and active listening strategies" },
      { topic: "Handwriting & Presentation", description: "Practise consistent, legible handwriting and neat presentation" },
      { topic: "Term 1 Revision & Test", description: "Comprehensive review and assessment of all Term 1 English topics" },
    ],
    "Term 2": [
      { topic: "Informative Writing", description: "Write informative texts with clear topic sentences and supporting details" },
      { topic: "Reading - Main Idea", description: "Identify main ideas and supporting details in a range of texts" },
      { topic: "Grammar - Parts of Speech", description: "Identify and use nouns, verbs, adjectives and adverbs correctly" },
      { topic: "Persuasive Language", description: "Recognise and use persuasive techniques in writing and speech" },
      { topic: "Poetry", description: "Read, analyse and write poems using literary devices" },
      { topic: "Spelling - Word Families", description: "Group and learn words by common patterns and word families" },
      { topic: "Reading Fluency", description: "Develop reading speed, accuracy and expression through guided reading" },
      { topic: "Research Skills", description: "Locate, select and use information from a variety of sources" },
      { topic: "Editing & Proofreading", description: "Review and improve own writing for spelling, grammar and clarity" },
      { topic: "Term 2 Revision & Test", description: "Comprehensive review and assessment of all Term 2 English topics" },
    ],
    "Term 3": [
      { topic: "Narrative Elements", description: "Analyse characters, settings and plot development in stories" },
      { topic: "Persuasive Writing", description: "Write persuasive texts with clear arguments and supporting evidence" },
      { topic: "Grammar - Verb Tenses", description: "Use past, present and future tenses correctly in writing" },
      { topic: "Reading - Inference", description: "Make inferences and predictions based on text clues and prior knowledge" },
      { topic: "Vocabulary - Context Clues", description: "Determine word meanings using context clues and dictionaries" },
      { topic: "Spelling Strategies", description: "Apply morphemic knowledge to spell unfamiliar words" },
      { topic: "Creative Writing", description: "Write imaginative texts experimenting with language and structure" },
      { topic: "Text Types & Features", description: "Identify and compare features of different text types" },
      { topic: "Oral Presentations", description: "Plan, rehearse and deliver oral presentations with confidence" },
      { topic: "Term 3 Revision & Test", description: "Comprehensive review and assessment of all Term 3 English topics" },
    ],
    "Term 4": [
      { topic: "Report Writing", description: "Write factual reports with headings, subheadings and organised paragraphs" },
      { topic: "Reading - Critical Thinking", description: "Evaluate texts for purpose, audience and reliability" },
      { topic: "Grammar Review", description: "Consolidate understanding of sentence structure and parts of speech" },
      { topic: "Spelling Consolidation", description: "Review and apply all spelling patterns and rules learned this year" },
      { topic: "Writing Process", description: "Apply the full writing process: plan, draft, edit, publish" },
      { topic: "Literature Study", description: "Respond to and analyse a variety of literary texts" },
      { topic: "Media Literacy", description: "Identify how images and text combine to create meaning in media" },
      { topic: "Punctuation & Grammar Review", description: "Review and consolidate all grammar and punctuation skills" },
      { topic: "Year Review", description: `Comprehensive review of all ${yearLabel} English curriculum topics` },
      { topic: "Stage Exam", description: `End-of-year stage examination covering all ${yearLabel} English curriculum areas` },
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Learning outcomes by subject                                       */
/* ------------------------------------------------------------------ */

const mathsOutcomes: Record<string, LearningOutcome[]> = {
  "year-2": [
    { text: "Confidently work with numbers up to 1000 and beyond" },
    { text: "Solve addition and subtraction problems using efficient strategies" },
    { text: "Understand and apply multiplication and division concepts" },
    { text: "Recognise fractions and decimals in everyday contexts" },
    { text: "Describe, compare and measure shapes, lengths, and areas" },
    { text: "Read and interpret data from graphs, tables, and charts" },
  ],
  "year-3": [
    { text: "Fluently recall multiplication and division facts for 2, 3, 5 and 10" },
    { text: "Solve multi-step addition and subtraction problems" },
    { text: "Compare and order fractions with the same denominator" },
    { text: "Measure and calculate perimeter using standard units" },
    { text: "Interpret and create data displays including bar graphs" },
    { text: "Use formal units to measure length, mass and capacity" },
  ],
  "year-4": [
    { text: "Recall multiplication facts up to 10 x 10 with fluency" },
    { text: "Add and subtract fractions with the same denominator" },
    { text: "Use place value to solve problems with numbers beyond 10,000" },
    { text: "Calculate area and perimeter of rectangles" },
    { text: "Classify angles as acute, right, obtuse or reflex" },
    { text: "Interpret data displays and calculate simple statistics" },
  ],
  "year-5": [
    { text: "Multiply and divide whole numbers fluently using written methods" },
    { text: "Add and subtract fractions and decimals with understanding" },
    { text: "Convert between common metric units of measurement" },
    { text: "Describe transformations including reflection and rotation" },
    { text: "Use grid coordinates and compass directions accurately" },
    { text: "Evaluate chance experiments and list possible outcomes" },
  ],
  "year-6": [
    { text: "Solve problems involving all four operations with large numbers" },
    { text: "Multiply and divide fractions and decimals confidently" },
    { text: "Calculate area, volume and surface area of simple shapes" },
    { text: "Use order of operations to solve complex number sentences" },
    { text: "Interpret and create a range of data displays" },
    { text: "Apply algebraic thinking to identify and describe patterns" },
  ],
  "year-7": [
    { text: "Work confidently with integers, fractions, decimals and percentages" },
    { text: "Solve linear equations and simplify algebraic expressions" },
    { text: "Calculate area, volume and surface area of composite shapes" },
    { text: "Analyse and interpret statistical data using mean, median and mode" },
    { text: "Apply geometric reasoning with angles and transformations" },
    { text: "Use ratios and rates to solve practical problems" },
  ],
};

const englishOutcomes: Record<string, LearningOutcome[]> = {
  "year-2": [
    { text: "Read and comprehend a variety of fiction and non-fiction texts fluently" },
    { text: "Write well-structured narratives with beginning, middle and end" },
    { text: "Use correct grammar, punctuation and spelling in everyday writing" },
    { text: "Expand vocabulary through reading and word study activities" },
    { text: "Present ideas clearly through speaking and listening activities" },
    { text: "Edit and improve own writing for clarity and correctness" },
  ],
  "year-3": [
    { text: "Read independently with fluency, accuracy and comprehension" },
    { text: "Write persuasive and informative texts with clear structure" },
    { text: "Apply spelling rules and patterns to unknown words" },
    { text: "Use paragraphs to organise ideas in written texts" },
    { text: "Make inferences and predictions when reading" },
    { text: "Present oral reports with confidence and clarity" },
  ],
  "year-4": [
    { text: "Analyse character development and themes in literary texts" },
    { text: "Write structured persuasive arguments with evidence" },
    { text: "Use complex sentences with correct punctuation" },
    { text: "Apply morphemic knowledge to spell challenging words" },
    { text: "Research and synthesise information from multiple sources" },
    { text: "Participate in group discussions with reasoned opinions" },
  ],
  "year-5": [
    { text: "Critically evaluate texts for purpose, audience and bias" },
    { text: "Write extended narratives with well-developed characters" },
    { text: "Use a range of clause structures and punctuation accurately" },
    { text: "Apply vocabulary strategies to understand subject-specific words" },
    { text: "Plan and deliver persuasive oral presentations" },
    { text: "Edit writing for cohesion, clarity and grammatical accuracy" },
  ],
  "year-6": [
    { text: "Analyse how authors use language to influence readers" },
    { text: "Write sustained, well-structured texts across multiple genres" },
    { text: "Use advanced grammar including passive voice and modality" },
    { text: "Compare and contrast information across multiple sources" },
    { text: "Create multimedia presentations combining text and visuals" },
    { text: "Apply critical and creative thinking to text responses" },
  ],
  "year-7": [
    { text: "Analyse literary techniques and their effects on readers" },
    { text: "Write coherent analytical essays with thesis statements" },
    { text: "Use sophisticated vocabulary and varied sentence structures" },
    { text: "Evaluate reliability and credibility of sources critically" },
    { text: "Construct well-reasoned arguments in formal debates" },
    { text: "Respond creatively and critically to a range of literary texts" },
  ],
};

const scienceOutcomes: Record<string, LearningOutcome[]> = {
  "year-2": [
    { text: "Identify living and non-living things" },
    { text: "Understand basic life cycles" },
    { text: "Observe and describe changes in the environment" },
    { text: "Recognise simple materials and their uses" },
    { text: "Ask questions and explore the world scientifically" },
  ],
  "year-3": [
    { text: "Explain life cycles of plants and animals" },
    { text: "Understand basic properties of soil and rocks" },
    { text: "Recognise heat and how it affects objects" },
    { text: "Identify solids and liquids" },
    { text: "Record and explain simple observations" },
  ],
  "year-4": [
    { text: "Understand food chains and ecosystems" },
    { text: "Explain the water cycle" },
    { text: "Identify different forces and their effects" },
    { text: "Compare materials and their uses" },
    { text: "Apply science to everyday situations" },
  ],
  "year-5": [
    { text: "Explain how plants and animals adapt to environments" },
    { text: "Understand Earth's surface changes" },
    { text: "Describe how light behaves" },
    { text: "Understand basic particle theory" },
    { text: "Analyse simple scientific problems" },
  ],
  "year-6": [
    { text: "Understand how environmental conditions affect living things" },
    { text: "Explain Earth's movement and space patterns" },
    { text: "Build and understand electrical circuits" },
    { text: "Differentiate types of material changes" },
    { text: "Conduct and analyse simple experiments" },
  ],
  "year-7": [
    { text: "Classify organisms using scientific systems" },
    { text: "Understand ecosystems and energy flow" },
    { text: "Explain seasons, tides, and space cycles" },
    { text: "Analyse forces and motion" },
    { text: "Apply particle theory to matter" },
    { text: "Conduct and evaluate scientific investigations" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Get subject data helper                                            */
/* ------------------------------------------------------------------ */

export function getSubjectData(yearId: string, subjectId: string): SubjectData | null {
  const yearLevel = yearLevels.find((y) => y.id === yearId);
  if (!yearLevel) return null;

  const subject = yearLevel.subjects.find((s) => s.id === subjectId);
  if (!subject) return null;

  const yearLabel = yearLevel.label;
  const subjectLabel = subject.label;

  // Use real data for Year 2 Maths; placeholder for everything else
  let curriculum: Record<string, CurriculumTopic[]>;
  if (yearId === "year-2" && subjectId === "maths") {
    curriculum = year2MathsCurriculum;
  } else {
    curriculum = generatePlaceholderCurriculum(yearLabel, subjectLabel);
  }

  const outcomeMap =
    subjectId === "maths" ? mathsOutcomes
      : subjectId === "science" ? scienceOutcomes
      : englishOutcomes;
  const outcomes = outcomeMap[yearId] ?? outcomeMap["year-2"];

  return {
    yearId,
    subjectId,
    yearLabel,
    subjectLabel,
    ages: yearLevel.ages,
    heroSubtitle: `40 structured sessions covering the complete ${yearLabel} ${subjectLabel} curriculum. Delivered live through 1-on-1 or small group online sessions.`,
    learningOutcomes: outcomes,
    curriculum,
  };
}

/* ------------------------------------------------------------------ */
/*  Generate all year/subject combinations for static params           */
/* ------------------------------------------------------------------ */

export function getAllSubjectParams(): { yearId: string; subjectId: string }[] {
  const params: { yearId: string; subjectId: string }[] = [];
  for (const year of yearLevels) {
    for (const subject of year.subjects) {
      params.push({ yearId: year.id, subjectId: subject.id });
    }
  }
  return params;
}
