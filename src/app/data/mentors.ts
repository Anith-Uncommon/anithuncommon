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
  subjects: string[];
  bio?: string;
  resources: MentorResource[];
}

export const mentorsData: MentorData[] = [
  {
    id: "martina-marques",
    name: "Martina Marqués",
    email: "martinavmz25@gmail.com",
    role: "Humanities Mentor and Public Relation Operator",
    subjects: ["Philosophy", "Economics", "Political Theory"],
    bio: "Passionate about humanities and helping students explore philosophical and economic concepts.",
    resources: []
  },
  {
    id: "ishraq",
    name: "Ishraq",
    email: "ishraqmehjab@gmail.com",
    role: "Literature Mentor",
    subjects: ["Literature", "English Literature"],
    bio: "I wish to be a bird",
    resources: []
  },
  {
    id: "kenneth-viorenzo",
    name: "Kenneth Viorenzo",
    email: "viorenzokenneth@gmail.com",
    role: "STEM Mentor (Biology)",
    subjects: ["Biology"],
    bio: "A connoisseur of the abstract. Be sure to enjoy whatever it is you're doing.",
    resources: []
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
    resources: []
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
    resources: []
  },
  {
    id: "yassmin-mahmoud",
    name: "Yassmin Mahmoud",
    email: "", 
    role: "STEM Mentor",
    subjects: ["Biology", "Physics", "Chemistry"],
    bio: "",
    resources: []
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
  }
];

// Helper functions
export function getMentorById(id: string): MentorData | undefined {
  return mentorsData.find(mentor => mentor.id === id);
}

export function getMentorByName(name: string): MentorData | undefined {
  return mentorsData.find(mentor => mentor.name === name);
}

export function getMentorsBySubject(subject: string): MentorData[] {
  return mentorsData.filter(mentor => 
    mentor.subjects.some(s => s.toLowerCase() === subject.toLowerCase())
  );
}
