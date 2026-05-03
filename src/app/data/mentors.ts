// Mentor data structure
export interface MentorResource {
  title: string;
  type: "pdf" | "image" | "document";
  description: string;
  file: string; // Path to file in /public/resources/
  relatedTopics?: string[]; // Topics where this resource should appear
  isOutline?: boolean; // Indicates if this is a curriculum outline
}

export interface MentorData {
  id: string;
  name: string;
  email: string;
  role: string;
  country?: string;
  subjects: string[];
  bio?: string;
  resources: MentorResource[];
}

export const mentorsData: MentorData[] = [

  {
    id: "ishraq",
    name: "Ishraq",
    email: "ishraqmehjab@gmail.com",
    role: "Literature Mentor",
    subjects: ["Literature", "English Literature"],
    bio: "I wish to be a bird",
    resources: [
      {
        title: "Ishraq, Literature, 1.1-1.5 (Poetry)",
        type: "pdf",
        description: "Poetry lessons covering chapters 1.1 through 1.5.",
        file: "/resources/ishraq-literature-1.1-1.5-poetry.pdf",
        relatedTopics: ["Literature", "English Literature"]
      },
      {
        title: "Ishraq, Literature, 2.1-2.5 (Prose)",
        type: "pdf",
        description: "Prose lessons covering chapters 2.1 through 2.5.",
        file: "/resources/ishraq-literature-2.1-2.5-prose.pdf",
        relatedTopics: ["Literature", "English Literature"]
      },
      {
        title: "Ishraq, Literature, 3.1-3.3 (Drama)",
        type: "pdf",
        description: "Drama lessons covering chapters 3.1 through 3.3.",
        file: "/resources/ishraq-literature-3.1-3.3-drama.pdf",
        relatedTopics: ["Literature", "English Literature"]
      }
    ]
  },
  {
    id: "kenneth-viorenzo",
    name: "Kenneth Viorenzo",
    email: "viorenzokenneth@gmail.com",
    role: "STEM Mentor (Biology)",
    subjects: ["Biology"],
    bio: "A connoisseur of the abstract. Be sure to enjoy whatever it is you're doing.",
    resources: [
      {
        title: "1.1 Carbohydrates",
        type: "pdf",
        description: "Comprehensive guide to carbohydrates, their structures, types, and biological functions.",
        file: "/resources/kenneth-carbohydrates-1.1.pdf",
        relatedTopics: ["Biology"]
      },
      {
        title: "2.1 DNA & RNA",
        type: "pdf",
        description: "Detailed exploration of DNA and RNA structures, replication, and protein synthesis.",
        file: "/resources/kenneth-dna-and-rna-2.1.pdf",
        relatedTopics: ["Biology"]
      },
      {
        title: "3.1 Transport of Molecules",
        type: "pdf",
        description: "In-depth study of molecular transport mechanisms and membrane transport processes.",
        file: "/resources/kenneth-transport-in-molecules-3.1.pdf",
        relatedTopics: ["Biology"]
      }
    ]
  },
  {
    id: "trista",
    name: "Trista",
    email: "ttrista083@gmail.com",
    role: "STEM Curriculum Developer and Mentor",
    subjects: ["Biology", "Chemistry", "Physics"],
    bio: "Hi! I love to explore fields in science, specifically biology and neuroscience.",
    resources: []
  },
  {
    id: "lee-xin-ying-megan",
    name: "Lee Xin Ying, Megan",
    email: "leexinying.megan@gmail.com",
    role: "Humanities Mentor (Economics & Art History)",
    subjects: ["Economics", "Art History"],
    bio: "unforgettable by french montana",
    resources: []
  },
  {
    id: "vihaan-amin",
    name: "Vihaan Amin",
    email: "vihaanamin38@gmail.com",
    role: "STEM Mentor (Math and Chemistry)",
    subjects: ["Math", "Chemistry"],
    bio: "High school student passionate about engineering, math, and science.",
    resources: [
      {
        title: "IGCSE Math Extended 0580 - Unit 1: Numbers",
        type: "pdf",
        description: "Foundational Unit 1 sample covering numbers and core number operations.",
        file: "/resources/vihaan-numbers-1.pdf",
        relatedTopics: ["Math"]
      },
      {
        title: "IGCSE Math Extended 0580 - Unit 2: Algebra and Graphs",
        type: "pdf",
        description: "Unit 2 sample introducing algebraic techniques and graph interpretation.",
        file: "/resources/vihaan-algebra-and-graphs-2.pdf",
        relatedTopics: ["Math"]
      },
      {
        title: "IGCSE Math Extended 0580 - Unit 3: Algebra and Graphs",
        type: "pdf",
        description: "Unit 3 sample with additional algebra and graph practice material.",
        file: "/resources/vihaan-algebra-and-graphs-3.pdf",
        relatedTopics: ["Math"]
      }
    ]
  },
  {
    id: "lakshya-shree",
    name: "Lakshya Shree",
    email: "Lakshyashreep2011@gmail.com",
    role: "Humanities Mentor (Eng Lit, History, Geo)",
    subjects: ["English Literature", "History", "Geology", "World History", "Geography"],
    bio: "\"You are full of life to be somebody's maybe\"",
    resources: []
  },
  {
    id: "yognya-gunti",
    name: "Yognya Gunti",
    email: "yognyagunti@gmail.com",
    role: "Graphic Designer and Humanities Mentor",
    subjects: ["Geology", "Political Theory", "World History", "Art History"],
    bio: "Relying on others doesn't weaken you — it makes you stronger. Learn from everyone around you, because growth never ends.",
    resources: []
  },
  {
    id: "akshiti-bhardwaj",
    name: "Akshiti Bhardwaj",
    email: "akshitibhrj@gmail.com",
    role: "Humanities Mentor (History)",
    subjects: ["History", "World History", "Criminology", "Physiology"],
    bio: `"If not us, then who, and if not now, then when" — John F. Kennedy`,
    resources: [
      {
        title: "Political Theory Lesson 1 (Introduction to Political Theory)",
        type: "pdf",
        description: "Foundation course on political theory fundamentals, key concepts, and major thinkers.",
        file: "/resources/akshiti-introduction-to-political-theory-1.pdf",
        relatedTopics: ["Political Theory"]
      },
      {
        title: "Political Theory Lesson 2 (Freedom)",
        type: "pdf",
        description: "Political Theory Lesson 2 focused on the concept of freedom and its major interpretations.",
        file: "/resources/akshiti-freedom-2.pdf",
        relatedTopics: ["Political Theory"]
      },
      {
        title: "Political Theory Lesson 3 (Equality)",
        type: "pdf",
        description: "Political Theory Lesson 3 focused on equality and its major interpretations.",
        file: "/resources/akshiti-equality-3.pdf",
        relatedTopics: ["Political Theory"]
      }
    ]
  },
  {
    id: "yassmin-mahmoud",
    name: "Yassmin Mahmoud",
    email: "", 
    role: "STEM Mentor",
    subjects: ["Biology", "Physics", "Chemistry"],
    bio: "",
    resources: [
      {
        title: "Characteristics and Classification of Living Organisms",
        type: "pdf",
        description: "Study of the characteristics and classification systems used to organize living organisms.",
        file: "/resources/yassmin-characteristics-classification-1.pdf",
        relatedTopics: ["Biology"]
      },
      {
        title: "Cell",
        type: "pdf",
        description: "Comprehensive exploration of cell structure, function, and types.",
        file: "/resources/yassmin-cell-2.pdf",
        relatedTopics: ["Biology"]
      },
      {
        title: "Movement into and out of the Cell",
        type: "pdf",
        description: "Detailed study of cell transport mechanisms, diffusion, osmosis, and active transport.",
        file: "/resources/yassmin-cell-transport-3.pdf",
        relatedTopics: ["Biology"]
      }
    ]
  },
  {
    id: "avighnaa-ramesh",
    name: "Avighnaa Ramesh",
    email: "", 
    role: "Bio, Physics, Chem (combined) Mentor",
    subjects: ["Biology", "Physics", "Chemistry"],
    bio: "Comprehensive science mentor covering biology, physics, and chemistry.",
    resources: []
  },
  {
    id: "ojas-dhaundiyal",
    name: "Ojas Dhaundiyal",
    email: "",
    role: "HUMANITIES MENTOR",
    country: "INDIA",
    subjects: ["History", "World History", "Art History"],
    bio: `"असतो मा सद्गमय।
तमसो मा ज्योतिर्गमय।
मृत्योर्मा अमृतं गमय॥"
Translation:
"Lead me from the unreal to the real,
from darkness to light,
from mortality to immortality."
(From the Brihadaranyaka Upanishad)`,
    resources: []
  },
  {
    id: "lia",
    name: "Lia",
    email: "",
    role: "STEM Mentor",
    subjects: ["Biology"],
    bio: "New STEM mentor specializing in Biology.",
    resources: []
  },
  {
    id: "azalia-ratu",
    name: "Azalia Ratu",
    email: "azalia0302@mega.sch.id",
    role: "Biology Mentor",
    subjects: ["Biology"],
    bio: "",
    resources: [
      {
        title: "Azalia R, Biology 1.1 - 1.3 (Cell Structure and Function)",
        type: "pdf",
        description: "Lessons covering cell structure and function for Biology chapters 1.1 through 1.3.",
        file: "/resources/azalia-biology-1.1-1.3-cell-structure-and-function.pdf",
        relatedTopics: ["Biology"]
      },
      {
        title: "Azalia R, Biology 2.1 - 2.5 (Human Anatomy)",
        type: "pdf",
        description: "Lessons covering human anatomy for Biology chapters 2.1 through 2.5.",
        file: "/resources/azalia-biology-2.1-2.5-human-anatomy.pdf",
        relatedTopics: ["Biology"]
      },
      {
        title: "Azalia R, Biology 3.1 - 3.3 (Organism and Their Environments)",
        type: "pdf",
        description: "Lessons covering organisms and their environments for Biology chapters 3.1 through 3.3.",
        file: "/resources/azalia-biology-3.1-3.3-organisms-and-their-environments.pdf",
        relatedTopics: ["Biology"]
      }
    ]
  },
  {
    id: "sharia-shifa",
    name: "Sharia Shifa",
    email: "shariashifa2489@gmail.com",
    role: "Psychology Mentor",
    subjects: ["Psychology"],
    bio: "",
    resources: [
      {
        title: "Chp 1 - Research Methods (Research Methods)",
        type: "pdf",
        description: "Introduction to core psychology research methods and study design.",
        file: "/resources/sharia-psychology-1-research-methods.pdf",
        relatedTopics: ["Psychology"]
      },
      {
        title: "Chp 2 - The Biological Approach (The Biological Approach)",
        type: "pdf",
        description: "An overview of the biological approach in psychology and related concepts.",
        file: "/resources/sharia-psychology-2-the-biological-approach.pdf",
        relatedTopics: ["Psychology"]
      },
      {
        title: "Chp 3 - The Cognitive Approach (The Cognitive Approach)",
        type: "pdf",
        description: "An introduction to the cognitive approach in psychology and how it explains behavior.",
        file: "/resources/sharia-psychology-3-the-cognitive-approach.pdf",
        relatedTopics: ["Psychology"]
      }
    ]
  },
  {
    id: "savera-sidhu",
    name: "Savera Sidhu",
    email: "",
    role: "Humanities Mentor",
    subjects: ["Political Theory"],
    bio: "Humanities mentor supporting students in political theory.",
    resources: []
  }
];

// Helper functions
export function getMentorById(id: string): MentorData | undefined {
  return mentorsData.find(mentor => mentor.id === id);
}

export function getMentorByName(name: string): MentorData | undefined {
  const normalizeName = (value: string): string =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  const target = normalizeName(name);
  return mentorsData.find((mentor) => normalizeName(mentor.name) === target);
}

export function getMentorsBySubject(subject: string): MentorData[] {
  return mentorsData.filter(mentor => 
    mentor.subjects.some(s => s.toLowerCase() === subject.toLowerCase())
  );
}
