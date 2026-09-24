import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';
import { createClient } from '@sanity/client';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const configPath = `${os.homedir()}/.config/sanity/config.json`;
if (!fs.existsSync(configPath)) {
  console.error('Missing Sanity CLI config file at:', configPath);
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const client = createClient({
  projectId: '9asz4y68',
  dataset: 'production',
  apiVersion: '2024-03-01',
  token: config.authToken,
  useCdn: false,
});

function genKey() {
  return randomUUID().replace(/-/g, '').slice(0, 12);
}

// Upload a local image asset from public/images/blog/
async function uploadBlogImage(filename) {
  const filePath = path.join(projectRoot, 'public', 'images', 'blog', filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Image file not found: ${filePath}`);
    return null;
  }
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('image', stream, { filename });
  return asset._id;
}

async function seed() {
  console.log('Starting seed of 3 region-specific sample articles (US, CA, NZ)...');

  // Upload or ensure 3 images for the articles
  console.log('Uploading featured images...');
  const usImgAssetId = await uploadBlogImage('blog1.jpg');
  const caImgAssetId = await uploadBlogImage('blog2.jpg');
  const nzImgAssetId = await uploadBlogImage('blog3.jpg');

  const today = new Date().toISOString();

  // ===========================================================================
  // 1. UNITED STATES (region: 'us')
  // ===========================================================================
  const usPost = {
    _id: 'post-sample-us',
    _type: 'post',

    // TAB: HERO
    title: 'Why US Students Need Personalized Math Support in 2025',
    slug: { _type: 'slug', current: 'sample-article-us' },
    dek: 'State assessments, larger classrooms, and evolving Common Core standards mean many children need structured practice beyond the school day. Here is what parents can do.',
    category: 'Parent Guides',
    mainImage: usImgAssetId
      ? {
          _type: 'image',
          alt: 'Why US Students Need Personalized Math Support in 2025',
          asset: { _type: 'reference', _ref: usImgAssetId },
        }
      : undefined,
    author: 'TutorExel Academic Team',
    publishedAt: today,
    region: 'us',
    featured: false,
    readTime: '6 min read',
    excerpt: 'Explore why elementary and middle school students in the United States benefit from targeted online math tutoring, structured homework habits, and state test preparation.',

    // TAB: INTRO
    introHeading: 'Understanding the Modern Demands of Elementary Math',
    introText: [
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          { _key: genKey(), _type: 'span', text: 'For millions of American parents, supporting a child through elementary school has become increasingly complicated. With rigorous state standards and computerized assessments like ', marks: [] },
          { _key: genKey(), _type: 'span', text: 'MAP and STAAR', marks: ['strong'] },
          { _key: genKey(), _type: 'span', text: ', students face academic accountability earlier than previous generations.', marks: [] },
        ],
      },
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          { _key: genKey(), _type: 'span', text: 'While dedicated classroom teachers work tirelessly, large class rosters make it difficult to provide individualized reinforcement. When foundational concepts such as place value, fractions, or word problem translation are missed, learning gaps compound rapidly.', marks: [] },
        ],
      },
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [
          { _key: 'linkUsAbout', _type: 'link', href: '/us/about' },
        ],
        children: [
          { _key: genKey(), _type: 'span', text: 'That is why thousands of US families turn to ', marks: [] },
          { _key: genKey(), _type: 'span', text: 'TutorExel specialized learning programs', marks: ['linkUsAbout'] },
          { _key: genKey(), _type: 'span', text: ': to replace evening homework stress with clear, systematic mastery and genuine self assurance.', marks: [] },
        ],
      },
    ],
    introPullQuote: 'Is standard classroom instruction alone enough to build lasting mathematical confidence?',

    // TAB: NUMBERED CARDS
    ncHeading: 'Key Pressures Facing US Students Today',
    ncIntro: 'From grade school fundamentals to statewide testing, American classrooms face distinct challenges:',
    ncItems: [
      {
        _key: genKey(),
        title: 'State Standardized Assessments',
        points: [
          'Tests like MAP, STAAR, and district benchmarks evaluate problem solving under tight time constraints.',
          'Students unfamiliar with computerized test formats often experience unnecessary anxiety.',
        ],
      },
      {
        _key: genKey(),
        title: 'Large Class Sizes in Public Schools',
        points: [
          'With 24 to 30 students per classroom, teachers cannot always pause for children who need another explanation.',
          'Quieter students often hesitate to raise their hands when confusion begins.',
        ],
      },
      {
        _key: genKey(),
        title: 'Conceptual vs. Procedural Learning',
        points: [
          'Modern math curricula demand that students explain why formulas work rather than just memorizing steps.',
          'Many children need extra guided dialogue to internalize abstract representations.',
        ],
      },
      {
        _key: genKey(),
        title: 'Cumulative Learning Gaps',
        points: [
          'A shaky understanding of fractions in Grade 4 directly impairs algebraic readiness in middle school.',
        ],
      },
    ],

    // TAB: ICON TILES
    tilesHeading: 'Where Traditional Classroom Instruction Leaves Gaps',
    tilesIntro: 'Even dedicated teachers face constraints that limit individualized attention during the school day:',
    tiles: [
      {
        _key: genKey(),
        icon: 'clock',
        title: 'Fixed Pacing Guides',
        text: 'Classrooms must maintain strict district schedules regardless of individual comprehension.',
      },
      {
        _key: genKey(),
        icon: 'eye',
        title: 'Diverse Learning Needs',
        text: 'Visual and hands on learners frequently need alternative representations to master abstract ideas.',
      },
      {
        _key: genKey(),
        icon: 'user',
        title: 'Minimal One on One Time',
        text: 'Group instruction rarely provides the personalized feedback required to correct misunderstandings immediately.',
      },
      {
        _key: genKey(),
        icon: 'home',
        title: 'Nightly Homework Stress',
        text: 'Without structured guidance, evening assignments can turn into stressful family arguments.',
      },
    ],
    tilesCalloutTitle: 'For US parents, these warning signs often appear as:',
    tilesCalloutPoints: [
      'Declining enthusiasm and increasing dread before math quizzes and unit tests.',
      'Spending over an hour on standard nightly homework worksheets.',
      'Persistent difficulty recalling foundational multiplication and division facts.',
    ],

    // TAB: TIMELINE
    tlHeading: 'How Systematic Tutoring Accelerates Student Progress',
    tlIntro: 'Structured online support bridges the gap between classroom theory and real world fluency:',
    tlSteps: [
      {
        _key: genKey(),
        title: 'Comprehensive Diagnostic Assessment',
        text: 'We pinpoint exact strengths and skill deficits across number sense, operations, and geometry.',
      },
      {
        _key: genKey(),
        title: 'Customized Term Roadmaps',
        text: 'Lessons mirror your district curriculum term by term, ensuring current classwork is reinforced.',
      },
      {
        _key: genKey(),
        title: 'Tiered Practice Questions',
        text: 'Worksheets progress through easy, medium, and challenging levels to build confidence incrementally.',
      },
      {
        _key: genKey(),
        title: 'Regular Standardized Test Prep',
        text: 'Targeted practice with authentic multiple choice and open response formats reduces test day stress.',
      },
      {
        _key: genKey(),
        title: 'Independent Study Habits',
        text: 'Students learn structured problem decomposition, verification routines, and self advocacy.',
      },
    ],
    midCtaHeading: 'Evaluate your child\'s math skills in one session',
    midCtaSubtext: 'Free diagnostic test followed by a personalized US learning plan.',
    midCtaButtonLabel: 'Take the free diagnostic test',
    midCtaButtonPath: '/us/free-assessment',

    // TAB: FEATURE GRID
    fgHeading: 'The TutorExel Advantage for US Families',
    fgIntro: 'Our live online tutoring program is designed specifically around the needs of busy households:',
    features: [
      {
        _key: genKey(),
        icon: 'doc',
        title: 'Free Initial Evaluation',
        text: 'Detailed analysis of grade level readiness before you enroll.',
      },
      {
        _key: genKey(),
        icon: 'calendar',
        title: '10 Structured Term Sessions',
        text: 'Organized modular pacing ensures full curriculum coverage without rushing.',
      },
      {
        _key: genKey(),
        icon: 'list',
        title: 'Extensive Question Bank',
        text: 'Hundreds of curated questions categorized by grade, topic, and difficulty.',
      },
      {
        _key: genKey(),
        icon: 'book',
        title: 'Tiered Printable Worksheets',
        text: 'Targeted practice packets for both guided classroom work and independent home study.',
      },
      {
        _key: genKey(),
        icon: 'chart',
        title: 'Monthly Growth Reports',
        text: 'Transparent performance metrics shared directly with parents each month.',
      },
      {
        _key: genKey(),
        icon: 'target',
        title: 'Personalized Instruction Pace',
        text: 'Every lesson adapts to your child, accelerating when ready or reviewing when needed.',
      },
    ],

    // TAB: QUOTES
    qHeading: 'What American Parents Share About Their Journey',
    qIntro: 'Families across the country tell us about the relief of finding consistent, skilled guidance:',
    quotes: [
      'My fifth grader went from dreading math tests to proudly explaining long division at the dinner table.',
      'The diagnostic test showed us exactly which multiplication facts were holding our daughter back. Within six weeks, her confidence surged.',
      'Having a patient, dedicated tutor each week eliminated the nightly homework battles in our house.',
    ],
    qClosing: 'These testimonials reflect what happens when instruction meets a child at their exact point of need. Consistent encouragement transforms frustration into genuine competence.',

    // TAB: TRIO
    trioHeading: 'A Balanced Approach to Sustainable Learning',
    trioIntro: 'We believe after school tutoring should enrich a child\'s life without causing burnout:',
    trioCards: [
      {
        _key: genKey(),
        title: 'Focused Sessions',
        text: 'Engaging, concentrated instruction that respects family dinner and activity schedules.',
      },
      {
        _key: genKey(),
        title: 'Active Participation',
        text: 'Students solve problems live on an interactive whiteboard rather than passively listening.',
      },
      {
        _key: genKey(),
        title: 'Balanced Lifestyle',
        text: 'Thoughtful pacing leaves ample time for sports, music, hobbies, and family relaxation.',
      },
    ],
    trioPullQuote: 'True academic excellence comes from confidence and steady mastery, not excess pressure.',

    // TAB: CHECKLIST
    clHeading: 'What You Can Expect With TutorExel US',
    clIntro: 'When you partner with our academic team, you gain reliable support every week:',
    clItems: [
      'Curriculum aligned lessons mapped to US state and Common Core frameworks.',
      'Continuous diagnostic tracking with clear, jargon free progress updates.',
      'Dedicated certified educators who understand elementary and middle school pedagogy.',
      'Flexible online scheduling tailored to Eastern, Central, Mountain, and Pacific time zones.',
    ],

    // TAB: END CTA
    endHeading: 'Start Your Child\'s Journey Toward Math Confidence',
    endText: 'Book a complimentary diagnostic session today. Discover where your child excels, uncover hidden gaps, and receive a customized learning roadmap.',
    endButtonLabel: 'Book Your Free US Assessment Today',
    endButtonPath: '/us/free-assessment',
    closingLine: 'In 2025 and beyond, academic success begins with the right support, one confident step at a time.',

    // TAB: SEO
    metaTitle: 'Why US Students Need Personalized Math Support in 2025 | TutorExel',
    metaDescription: 'Discover why US elementary and middle school students need structured math tutoring beyond the classroom to succeed in state tests and Common Core standards.',
    focusKeyword: 'online math tutoring us',
    noindex: false,
  };

  // ===========================================================================
  // 2. CANADA (region: 'ca')
  // ===========================================================================
  const caPost = {
    _id: 'post-sample-ca',
    _type: 'post',

    // TAB: HERO
    title: 'Why Canadian Students Need More Than Classroom Lessons in 2025',
    slug: { _type: 'slug', current: 'sample-article-ca' },
    dek: 'Provincial curriculum updates, EQAO benchmarks, and growing class sizes across Canadian schools make structured guidance essential for elementary achievement.',
    category: 'Parent Guides',
    mainImage: caImgAssetId
      ? {
          _type: 'image',
          alt: 'Why Canadian Students Need More Than Classroom Lessons in 2025',
          asset: { _type: 'reference', _ref: caImgAssetId },
        }
      : undefined,
    author: 'TutorExel Academic Team',
    publishedAt: today,
    region: 'ca',
    featured: false,
    readTime: '6 min read',
    excerpt: 'Learn why Canadian elementary students in Ontario, British Columbia, and Alberta benefit from curriculum aligned math tutoring, EQAO test readiness, and structured problem solving.',

    // TAB: INTRO
    introHeading: 'Navigating Changing Expectations in Canadian Classrooms',
    introText: [
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          { _key: genKey(), _type: 'span', text: 'Across Canadian provinces from Ontario to British Columbia and Alberta, mathematics curriculum expectations have shifted significantly. Modern programs prioritize deep analytical reasoning, spatial literacy, and multi step application over simple rote learning.', marks: [] },
        ],
      },
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          { _key: genKey(), _type: 'span', text: 'Provincial benchmarks like the ', marks: [] },
          { _key: genKey(), _type: 'span', text: 'Ontario EQAO assessments', marks: ['strong'] },
          { _key: genKey(), _type: 'span', text: ' evaluate students on their ability to explain their thinking in writing. For students who understand the arithmetic but struggle to express their methodology, scores can fall well short of their true capabilities.', marks: [] },
        ],
      },
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [
          { _key: 'linkCaAbout', _type: 'link', href: '/ca/about' },
        ],
        children: [
          { _key: genKey(), _type: 'span', text: 'Through structured weekly sessions with ', marks: [] },
          { _key: genKey(), _type: 'span', text: 'TutorExel Canadian programs', marks: ['linkCaAbout'] },
          { _key: genKey(), _type: 'span', text: ', young learners gain the guidance and step by step practice required to thrive under updated provincial guidelines.', marks: [] },
        ],
      },
    ],
    introPullQuote: 'Can regular school hours provide all the individual practice your child needs to truly excel?',

    // TAB: NUMBERED CARDS
    ncHeading: 'Key Academic Pressures Facing Canadian Families',
    ncIntro: 'From provincial testing to modernized math expectations, Canadian students encounter distinct milestones:',
    ncItems: [
      {
        _key: genKey(),
        title: 'Provincial Assessments and EQAO Testing',
        points: [
          'Standardized Grade 3 and Grade 6 assessments evaluate higher order thinking and multi step justification.',
          'Students who lack familiarity with open response formats frequently underperform despite knowing core concepts.',
        ],
      },
      {
        _key: genKey(),
        title: 'The Shift Toward Financial and Spatial Literacy',
        points: [
          'Updated curricula place heavy emphasis on coding concepts, financial math, and spatial reasoning.',
          'Many students require dedicated practice to connect these new modules with everyday problem solving.',
        ],
      },
      {
        _key: genKey(),
        title: 'Wide Variations in Class Demographics',
        points: [
          'Teachers manage broad ranges of abilities in single classrooms, making individual reinforcement difficult.',
        ],
      },
      {
        _key: genKey(),
        title: 'Post Pandemic Arithmetic Foundations',
        points: [
          'Gaps in early number sense often resurface when students confront ratios, percentages, and pre algebra.',
        ],
      },
    ],

    // TAB: ICON TILES
    tilesHeading: 'Why Classroom Instruction Alone Leaves Gaps',
    tilesIntro: 'While Canadian educators work tirelessly, structural factors limit what can happen in 50 minute blocks:',
    tiles: [
      {
        _key: genKey(),
        icon: 'clock',
        title: 'Pacing Constraints',
        text: 'Teachers must cover extensive provincial units within tight semester timelines.',
      },
      {
        _key: genKey(),
        icon: 'eye',
        title: 'Varied Learning Modalities',
        text: 'Children who benefit from visual modeling or inquiry often need more time to absorb concepts.',
      },
      {
        _key: genKey(),
        icon: 'user',
        title: 'Limited Individual Feedback',
        text: 'In a room of 26 learners, individual misconceptions can go unnoticed for weeks.',
      },
      {
        _key: genKey(),
        icon: 'home',
        title: 'Homework Frustrations',
        text: 'Parents often feel unprepared to guide modern math strategies introduced in recent curriculum revisions.',
      },
    ],
    tilesCalloutTitle: 'For Canadian parents, common warning signs include:',
    tilesCalloutPoints: [
      'Anxiety surfacing around mid term report cards and EQAO testing dates.',
      'Hesitation when calculating fractions, decimals, or word problems without assistance.',
      'A growing belief that they simply are not a math person.',
    ],

    // TAB: TIMELINE
    tlHeading: 'How Structured Tutoring Delivers Measurable Progress',
    tlIntro: 'A systematic approach helps Canadian students build robust mathematical intuition step by step:',
    tlSteps: [
      {
        _key: genKey(),
        title: 'Comprehensive Provincial Diagnostics',
        text: 'We assess student competence against official ministry expectations for their grade.',
      },
      {
        _key: genKey(),
        title: 'Curriculum Aligned Unit Planning',
        text: 'Every tutoring block corresponds directly to your child\'s current school units.',
      },
      {
        _key: genKey(),
        title: 'Graduated Worksheet Sets',
        text: 'Carefully scaffolded questions build confidence from basic operations to complex word problems.',
      },
      {
        _key: genKey(),
        title: 'Authentic Assessment Simulation',
        text: 'Regular practice with EQAO style items instills calm problem solving habits.',
      },
      {
        _key: genKey(),
        title: 'Lifelong Learning Habits',
        text: 'Students master independent verification, note organization, and confident self assessment.',
      },
    ],
    midCtaHeading: 'Discover your child\'s exact grade level standing',
    midCtaSubtext: 'Receive a complimentary diagnostic report mapped to Canadian provincial standards.',
    midCtaButtonLabel: 'Claim your free Canadian assessment',
    midCtaButtonPath: '/ca/free-assessment',

    // TAB: FEATURE GRID
    fgHeading: 'The TutorExel Approach for Canadian Learners',
    fgIntro: 'Our online tutoring program combines dedicated educator mentorship with proven pedagogical structures:',
    features: [
      {
        _key: genKey(),
        icon: 'doc',
        title: 'Zero Cost Initial Diagnostic',
        text: 'A thorough, stress free check of key mathematical skills and learning readiness.',
      },
      {
        _key: genKey(),
        icon: 'calendar',
        title: 'Ten Term Sessions',
        text: 'Structured weekly classes covering curriculum strands methodically throughout the school term.',
      },
      {
        _key: genKey(),
        icon: 'list',
        title: 'Extensive Practice Library',
        text: 'Curated questions aligned with Ontario and Western Canadian provincial curricula.',
      },
      {
        _key: genKey(),
        icon: 'book',
        title: 'Three Tiered Worksheets',
        text: 'Custom sheets graded easy, intermediate, and advanced for tailored homework practice.',
      },
      {
        _key: genKey(),
        icon: 'chart',
        title: 'Detailed Monthly Reports',
        text: 'Clear documentation of mastery percentages, attendance, and upcoming learning goals.',
      },
      {
        _key: genKey(),
        icon: 'target',
        title: 'Tailored Instructional Pacing',
        text: 'Instruction moves as quickly as your child masters concepts, never rushed and never stalled.',
      },
    ],

    // TAB: QUOTES
    qHeading: 'What Canadian Parents Are Saying',
    qIntro: 'Real feedback from families in Toronto, Vancouver, Calgary, and across the provinces:',
    quotes: [
      'The curriculum changes in Ontario left us feeling out of our depth. TutorExel gave our Grade 5 son total clarity and renewed confidence.',
      'Our daughter achieved a Level 4 on her EQAO assessment after working with her TutorExel tutor for two terms. We could not be happier.',
      'The weekly structured sessions made math homework enjoyable again instead of a nightly dispute.',
    ],
    qClosing: 'These stories demonstrate that with consistent, patient instruction, every student can find joy in mathematical discovery.',

    // TAB: TRIO
    trioHeading: 'Education Grounded in Balance and Joy',
    trioIntro: 'We design our tutoring schedule to complement Canadian family life, sports, and outdoor activities:',
    trioCards: [
      {
        _key: genKey(),
        title: 'Focused Classes',
        text: 'High efficiency live sessions designed to maximize retention without digital fatigue.',
      },
      {
        _key: genKey(),
        title: 'Interactive Whiteboards',
        text: 'Students write, draw, and manipulate visual models alongside their teacher.',
      },
      {
        _key: genKey(),
        title: 'Family Friendly',
        text: 'Convenient session times that fit around hockey, swimming, and family routines.',
      },
    ],
    trioPullQuote: 'Building mathematical competence is about fostering curiosity and confidence, not piling on stress.',

    // TAB: CHECKLIST
    clHeading: 'The TutorExel Canada Commitment',
    clIntro: 'Here is what every enrolled Canadian family receives:',
    clItems: [
      'Full alignment with Ontario, BC, and Alberta provincial curriculum requirements.',
      'Regular assessment preparation for EQAO and provincial standardized exams.',
      'Experienced educators who explain concepts with warmth, patience, and clarity.',
      'Flexible class times coordinated across Eastern, Central, and Pacific time zones.',
    ],

    // TAB: END CTA
    endHeading: 'Help Your Child Thrive in Canadian Math This Year',
    endText: 'Take the first step with our Free Diagnostic Assessment. In just one hour, you will understand your child\'s exact learning profile and clear next steps.',
    endButtonLabel: 'Book Your Free Canadian Assessment',
    endButtonPath: '/ca/free-assessment',
    closingLine: 'With the right guidance and encouragement, every Canadian child can become a confident problem solver.',

    // TAB: SEO
    metaTitle: 'Why Canadian Students Need More Than Classroom Lessons in 2025 | TutorExel',
    metaDescription: 'Learn how Canadian elementary students benefit from personalized online math tutoring, provincial curriculum alignment, and EQAO test preparation.',
    focusKeyword: 'online math tutoring canada',
    noindex: false,
  };

  // ===========================================================================
  // 3. NEW ZEALAND (region: 'nz')
  // ===========================================================================
  const nzPost = {
    _id: 'post-sample-nz',
    _type: 'post',

    // TAB: HERO
    title: 'Why New Zealand Students Benefit from Extra Maths Support in 2025',
    slug: { _type: 'slug', current: 'sample-article-nz' },
    dek: 'With revised curriculum refresh benchmarks, larger primary classrooms, and NCEA pathways ahead, structured maths guidance gives Kiwi students lasting confidence.',
    category: 'Parent Guides',
    mainImage: nzImgAssetId
      ? {
          _type: 'image',
          alt: 'Why New Zealand Students Benefit from Extra Maths Support in 2025',
          asset: { _type: 'reference', _ref: nzImgAssetId },
        }
      : undefined,
    author: 'TutorExel Academic Team',
    publishedAt: today,
    region: 'nz',
    featured: false,
    readTime: '6 min read',
    excerpt: 'Explore why New Zealand primary and intermediate students benefit from structured maths tutoring, curriculum refresh alignment, and supportive one on one guidance.',

    // TAB: INTRO
    introHeading: 'Understanding the Contemporary Demands of Primary Maths',
    introText: [
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          { _key: genKey(), _type: 'span', text: 'Education across New Zealand is experiencing important shifts with the phased rollout of the ', marks: [] },
          { _key: genKey(), _type: 'span', text: 'New Zealand Curriculum Refresh', marks: ['strong'] },
          { _key: genKey(), _type: 'span', text: '. From Year 2 through Year 8, schools are renewing their focus on structured mathematical progression, explicit number knowledge, and algebraic thinking.', marks: [] },
        ],
      },
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          { _key: genKey(), _type: 'span', text: 'For many parents, open plan classrooms and diverse syndicate sizes make it challenging to know whether their child is mastering each stage. When basic addition, subtraction, or multiplication facts are not automatic, students encounter frustration as problem solving becomes more complex.', marks: [] },
        ],
      },
      {
        _key: genKey(),
        _type: 'block',
        style: 'normal',
        markDefs: [
          { _key: 'linkNzAbout', _type: 'link', href: '/nz/about' },
        ],
        children: [
          { _key: genKey(), _type: 'span', text: 'That is where ', marks: [] },
          { _key: genKey(), _type: 'span', text: 'TutorExel New Zealand tuition programs', marks: ['linkNzAbout'] },
          { _key: genKey(), _type: 'span', text: ' step in: providing targeted individual attention, steady encouragement, and clear progress milestones.', marks: [] },
        ],
      },
    ],
    introPullQuote: 'Is standard school instruction on its own enough to secure deep mathematical numeracy?',

    // TAB: NUMBERED CARDS
    ncHeading: 'Key Challenges Facing Kiwi Learners Today',
    ncIntro: 'From foundation numeracy to intermediate transitions, New Zealand students encounter unique academic milestones:',
    ncItems: [
      {
        _key: genKey(),
        title: 'The New Zealand Curriculum Refresh',
        points: [
          'Updated expectations emphasize structured mathematical progression and explicit number knowledge.',
          'Students need solid conceptual grounding before moving into higher year levels.',
        ],
      },
      {
        _key: genKey(),
        title: 'Transition from Primary to Intermediate',
        points: [
          'Moving into Year 7 and Year 8 brings specialized subject rotations and higher expectations for independent work.',
          'Early intervention prevents minor numeracy gaps from compounding during intermediate years.',
        ],
      },
      {
        _key: genKey(),
        title: 'Composite Classrooms and Varying Paces',
        points: [
          'Many Kiwi schools operate multi level syndicate rooms where teachers divide attention across several stages.',
        ],
      },
      {
        _key: genKey(),
        title: 'Foundational Gaps in Number Knowledge',
        points: [
          'Students who hesitate with basic multiplication and place value struggle when algebra and geometry are introduced.',
        ],
      },
    ],

    // TAB: ICON TILES
    tilesHeading: 'Where School Lessons Alone Can Fall Short',
    tilesIntro: 'Even the most dedicated teachers face realities that make individualized mastery difficult:',
    tiles: [
      {
        _key: genKey(),
        icon: 'clock',
        title: 'Timetable Constraints',
        text: 'Class schedules leave little room for revisitation once a topic block is completed.',
      },
      {
        _key: genKey(),
        icon: 'eye',
        title: 'Individual Learning Styles',
        text: 'Some children require physical or visual diagrams while others excel through guided discussion.',
      },
      {
        _key: genKey(),
        icon: 'user',
        title: 'Large Syndicate Numbers',
        text: 'Open plan learning spaces can make it difficult for quiet students to ask for help.',
      },
      {
        _key: genKey(),
        icon: 'home',
        title: 'Homework Hesitation',
        text: 'Parents often feel unsure how to assist with modern numeracy strategies taught in schools.',
      },
    ],
    tilesCalloutTitle: 'For New Zealand parents, common indicators include:',
    tilesCalloutPoints: [
      'Hesitation and anxiety during maths assessments or PAT testing.',
      'Avoidance of maths homework in favour of reading or creative projects.',
      'Loss of confidence when encountering multi step word problems.',
    ],

    // TAB: TIMELINE
    tlHeading: 'How Systematic Tutoring Builds Strong Numeracy',
    tlIntro: 'A calm, structured approach ensures Kiwi students master core skills with certainty:',
    tlSteps: [
      {
        _key: genKey(),
        title: 'Comprehensive Diagnostic Check',
        text: 'We evaluate number knowledge, operational strategies, and spatial reasoning.',
      },
      {
        _key: genKey(),
        title: 'Term by Term Curriculum Mapping',
        text: 'Classes mirror current New Zealand curriculum units so schoolwork feels familiar and accessible.',
      },
      {
        _key: genKey(),
        title: 'Scaffolded Practice Materials',
        text: 'Worksheets progress smoothly from basic confidence builders to challenging extension problems.',
      },
      {
        _key: genKey(),
        title: 'Regular Numeracy Checkpoints',
        text: 'Ongoing reviews ensure concepts are remembered long term rather than forgotten after a single test.',
      },
      {
        _key: genKey(),
        title: 'Independent Thinking Habits',
        text: 'Students develop logical problem solving routines and self checking strategies.',
      },
    ],
    midCtaHeading: 'Check your child\'s numeracy progress today',
    midCtaSubtext: 'Book a free diagnostic session mapped against the New Zealand curriculum.',
    midCtaButtonLabel: 'Book your free NZ assessment',
    midCtaButtonPath: '/nz/free-assessment',

    // TAB: FEATURE GRID
    fgHeading: 'The TutorExel Approach for New Zealand Families',
    fgIntro: 'Our live online tutoring is crafted to support students across Auckland, Wellington, Christchurch, and regional NZ:',
    features: [
      {
        _key: genKey(),
        icon: 'doc',
        title: 'Free Diagnostic Session',
        text: 'An insightful assessment that pinpoints exact strengths and learning priorities.',
      },
      {
        _key: genKey(),
        icon: 'calendar',
        title: 'Ten Structured Lessons Per Term',
        text: 'Predictable, well planned lessons that systematically cover core numeracy strands.',
      },
      {
        _key: genKey(),
        icon: 'list',
        title: 'Extensive Question Bank',
        text: 'Rich selection of questions organized by year level, topic, and difficulty.',
      },
      {
        _key: genKey(),
        icon: 'book',
        title: 'Tiered Printable Worksheets',
        text: 'Structured practice sheets categorized into easy, medium, and extension levels.',
      },
      {
        _key: genKey(),
        icon: 'chart',
        title: 'Monthly Progress Reports',
        text: 'Clear reports keeping parents fully informed of achievements and next steps.',
      },
      {
        _key: genKey(),
        icon: 'target',
        title: 'Adaptive Learning Pace',
        text: 'The pace adjusts to the learner, ensuring thorough mastery before advancing.',
      },
    ],

    // TAB: QUOTES
    qHeading: 'What Kiwi Parents Tell Us',
    qIntro: 'Feedback from families across New Zealand who have seen their children flourish:',
    quotes: [
      'Our Year 5 daughter was falling behind in fractions and starting to doubt herself. Her tutor made maths fun and approachable.',
      'The shift to intermediate school was daunting, but TutorExel ensured our son felt completely prepared for Year 7 maths.',
      'Clear, structured lessons with zero stress. It has been the best investment in our child\'s primary education.',
    ],
    qClosing: 'These experiences show how supportive, individualized teaching can reignite a child\'s natural curiosity and love of learning.',

    // TAB: TRIO
    trioHeading: 'Tutoring That Fits the Kiwi Lifestyle',
    trioIntro: 'We understand that family life in New Zealand includes sports, outdoor adventures, and downtime:',
    trioCards: [
      {
        _key: genKey(),
        title: 'Focused Sessions',
        text: 'Concentrated learning that delivers maximum progress without encroaching on family life.',
      },
      {
        _key: genKey(),
        title: 'Interactive Tools',
        text: 'Live whiteboard participation ensures active engagement throughout every lesson.',
      },
      {
        _key: genKey(),
        title: 'Balanced Schedules',
        text: 'Convenient lesson times that fit smoothly alongside sports practices and family dinners.',
      },
    ],
    trioPullQuote: 'Meaningful progress comes from regular encouragement and steady practice, not high pressure.',

    // TAB: CHECKLIST
    clHeading: 'Our Promise to New Zealand Families',
    clIntro: 'Every family who joins TutorExel receives:',
    clItems: [
      'Full alignment with the refreshed New Zealand Curriculum standards.',
      'Regular assessment preparation supporting PAT and school based evaluations.',
      'Caring, expert tutors who communicate concepts clearly and patiently.',
      'Flexible class times tailored to New Zealand Standard Time.',
    ],

    // TAB: END CTA
    endHeading: 'Give Your Child the Gift of Maths Confidence',
    endText: 'Start with our Free Diagnostic Assessment. In just one session, uncover where your child stands and how we can support their journey.',
    endButtonLabel: 'Book Your Free NZ Assessment Today',
    endButtonPath: '/nz/free-assessment',
    closingLine: 'With thoughtful guidance and consistent encouragement, every Kiwi child can excel in maths.',

    // TAB: SEO
    metaTitle: 'Why New Zealand Students Benefit from Extra Maths Support in 2025 | TutorExel',
    metaDescription: 'Discover why New Zealand primary and intermediate students need structured maths tutoring to thrive under the refreshed curriculum.',
    focusKeyword: 'online maths tutoring nz',
    noindex: false,
  };

  console.log('Writing documents to Sanity (createOrReplace)...');
  const resUs = await client.createOrReplace(usPost);
  console.log(`[US Created] Document ID: ${resUs._id}, Region: ${resUs.region}, Slug: ${resUs.slug.current}`);

  const resCa = await client.createOrReplace(caPost);
  console.log(`[CA Created] Document ID: ${resCa._id}, Region: ${resCa.region}, Slug: ${resCa.slug.current}`);

  const resNz = await client.createOrReplace(nzPost);
  console.log(`[NZ Created] Document ID: ${resNz._id}, Region: ${resNz.region}, Slug: ${resNz.slug.current}`);

  console.log('\nAll 3 sample posts successfully created with all tabbed section fields populated!');
}

seed().catch((err) => {
  console.error('Seed script error:', err);
  process.exit(1);
});
