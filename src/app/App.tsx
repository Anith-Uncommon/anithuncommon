import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SubjectCard } from "@/app/components/SubjectCard";
import { TopicDetail } from "@/app/components/TopicDetail";
import { MeetOurTeam } from "@/app/components/MeetOurTeam";
import { JoinUs } from "@/app/components/JoinUs";
import { MentorProfile } from "@/app/components/MentorProfile";
import { LoginModal } from "@/app/components/LoginModal";
import { FAQ } from "@/app/components/FAQ";
import { StudentProgress } from "@/app/components/StudentProgress";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  GraduationCap,
  Users,
  Globe,
  Handshake,
  FileText,
  Sparkles,
  Instagram,
  Mail,
  TreePine,
  Menu,
  X,
  ChevronDown,
  Lock,
  Eye,
  Award,
} from "lucide-react";
import {
  getMentorById,
  getMentorByName,
  type MentorData,
} from "@/app/data/mentors";

interface Subchapter {
  id: string;
  title: string;
  locked: boolean;
}

interface Chapter {
  id: string;
  title: string;
  chapterNumber: number;
  mentor?: string; // Mentor name for this chapter
  subchapters: Subchapter[];
}

interface Topic {
  title: string;
  description: string;
  content: {
    section: string;
    text: string;
  }[];
  resources: {
    type: string;
    title: string;
    description: string;
  }[];
  difficulty: "Básico" | "Intermedio" | "Avanzado";
  estimatedTime: string;
}

interface Subject {
  id: string;
  title: string;
  description: string;
  image: string;
  topics: string[];
  color: string;
  mentors: string[];
  topicsData: { [key: string]: Topic };
  chapters?: Chapter[];
}

type Page =
  | "home"
  | "team"
  | "subject"
  | "topic"
  | "joinus"
  | "mentor"
  | "faq"
  | "progress";

const LANDING_STATS = [
  {
    icon: Eye,
    target: 90,
    suffix: "K+",
    label: "Impressions",
    bgColor: "#E3DFCE",
    chipColor: "#4C050C",
    chipText: "#E3DFCE",
  },
  {
    icon: Globe,
    target: 20,
    suffix: "+",
    label: "Countries",
    bgColor: "#0a1b2b",
    chipColor: "#E3DFCE",
    chipText: "#0a1b2b",
  },
  {
    icon: Users,
    target: 35,
    suffix: "+",
    label: "Members",
    bgColor: "#E3DFCE",
    chipColor: "#4C050C",
    chipText: "#E3DFCE",
  },
  {
    icon: Award,
    target: 10,
    suffix: "+",
    label: "Students",
    bgColor: "#0a1b2b",
    chipColor: "#E3DFCE",
    chipText: "#0a1b2b",
  },
] as const;

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedSubject, setSelectedSubject] =
    useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] =
    useState<Topic | null>(null);
  const [selectedMentor, setSelectedMentor] =
    useState<MentorData | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<{
    [key: string]: boolean;
  }>({});
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const subjects: Subject[] = [
    {
      id: "economics",
      title: "Economics",
      description:
        "Understand the systems that shape our lives. Learn economics through practical examples — from personal finance to global inequality — and gain tools to analyze real-world issues critically.",
      image:
        "https://images.unsplash.com/photo-1737703638422-2cfa152cdcb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pY3MlMjBmaW5hbmNlJTIwZ3JhcGh8ZW58MXx8fHwxNzY4ODY4MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Microeconomics",
        "Macroeconomics",
        "Personal Finance",
        "Global Markets",
        "Economic Justice",
      ],
      color: "bg-[#0B1F26] text-[#D9D7CC]",
      mentors: ["Lee Xin Ying, Megan", "Martina Marques"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "biology",
      title: "Biology",
      description:
        "Discover the science of life. From cellular processes to ecosystems, explore how living organisms function, evolve, and interact with their environments. Taught by multiple expert mentors.",
      image:
        "https://images.unsplash.com/photo-1636386689060-37d233b5d345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9sb2d5JTIwbWljcm9zY29wZSUyMGNlbGxzfGVufDF8fHx8MTc3NDMzMzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Cell Biology",
        "Genetics",
        "Evolution",
        "Ecology",
        "Human Biology",
        "Molecular Biology",
        "Biochemistry",
        "Neuroscience",
      ],
      color: "bg-[#A1A6A5] text-[#0A1926]",
      mentors: [
        "Yassmin Mahmoud",
        "Trista",
        "Kenneth Viorenzo",
      ],
      topicsData: {},
      chapters: [],
    },
    {
      id: "physics",
      title: "Physics",
      description:
        "Uncover the fundamental laws of the universe. Study energy, motion, forces, and the principles that govern everything from atoms to galaxies.",
      image:
        "https://images.unsplash.com/photo-1768328591735-4b28d850b42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNzJTIwZW5lcmd5JTIwbW90aW9ufGVufDF8fHx8MTc3NDQxMDAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Mechanics",
        "Electromagnetism",
        "Thermodynamics",
        "Quantum Physics",
        "Relativity",
      ],
      color: "bg-[#A1A6A5] text-[#0A1926]",
      mentors: ["Trista", "Yassmin Mahmoud", "Avighnaa Ramesh"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "chemistry",
      title: "Chemistry",
      description:
        "Explore the building blocks of matter. Understand chemical reactions, molecular structures, and how chemistry shapes everything around us.",
      image:
        "https://images.unsplash.com/photo-1608037222022-62649819f8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBsYWJvcmF0b3J5JTIwZXhwZXJpbWVudHxlbnwxfHx8fDE3NzQzNDc1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Chemical Bonding",
        "Reactions",
      ],
      color: "bg-[#626E73] text-white",
      mentors: [
        "Vihaan Amin",
        "Trista",
        "Yassmin Mahmoud",
        "Avighnaa Ramesh",
      ],
      topicsData: {},
      chapters: [],
    },
    {
      id: "english",
      title: "English",
      description:
        "Master the fundamentals of English language skills. Develop writing, reading, comprehension, and communication abilities.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGFuZ3VhZ2V8ZW58MXx8fHwxNzY4ODY4MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Grammar",
        "Writing Skills",
        "Comprehension",
        "Vocabulary",
        "Communication",
      ],
      color: "bg-[#D9D7CC] text-[#0A1926]",
      mentors: ["Ishraq", "Lakshya Shree"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "english-literature",
      title: "English Literature",
      description:
        "Immerse yourself in the richness of English literary tradition. Analyze texts, develop interpretive skills, and explore diverse voices and narratives.",
      image:
        "https://images.unsplash.com/photo-1652711475965-61d2e00904e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3MlMjByZWFkaW5nfGVufDF8fHx8MTc3NDMzNjMyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "British Literature",
        "American Literature",
        "Shakespeare",
        "Poetry Analysis",
        "Modern Fiction",
      ],
      color: "bg-[#0B1F26] text-[#D9D7CC]",
      mentors: ["Ishraq", "Lakshya Shree"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "maths",
      title: "Maths",
      description:
        "Master the language of logic and patterns. From foundational concepts to advanced problem-solving, build mathematical confidence and analytical thinking skills.",
      image:
        "https://images.unsplash.com/photo-1770719269462-d3c1ed7e184f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGVxdWF0aW9ucyUyMG51bWJlcnN8ZW58MXx8fHwxNzc0NDEwMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Algebra",
        "Calculus",
        "Geometry",
        "Statistics",
        "Problem Solving",
      ],
      color: "bg-[#0A1926] text-[#D9D7CC]",
      mentors: ["Vihaan Amin"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "history",
      title: "History",
      description:
        "Go beyond memorization. Explore history through untold stories, global perspectives, and critical analysis, connecting past events to today's social and political realities.",
      image:
        "https://images.unsplash.com/photo-1548735186-d7115f0b84fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwbXVzZXVtJTIwYXJjaGl2ZXN8ZW58MXx8fHwxNzY4ODY4MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Ancient Civilizations",
        "Modern History",
        "Historical Analysis",
        "Global Perspectives",
      ],
      color: "bg-[#D9D7CC] text-[#0A1926]",
      mentors: [
        "Lakshya Shree",
        "Akshiti Bhardwaj",
        "Ojas Dhaundiyal",
      ],
      topicsData: {},
      chapters: [],
    },
    {
      id: "physical-geology",
      title: "Physical Geology",
      description:
        "Explore Earth's physical processes and structures. Study rocks, minerals, plate tectonics, and the dynamic forces that shape our planet.",
      image:
        "https://images.unsplash.com/photo-1668364804296-8a33c09dc576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9sb2d5JTIwcm9ja3MlMjBlYXJ0aHxlbnwxfHx8fDE3Njg4NjgxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Rock Formations",
        "Plate Tectonics",
        "Mineralogy",
        "Volcanology",
        "Earth Systems",
      ],
      color: "bg-[#626E73] text-white",
      mentors: ["Lakshya Shree", "Yognya Gunti"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "political-theory",
      title: "Political Theory",
      description:
        "Examine power, governance, and justice. Explore political systems, ideologies, and theories that shape societies and influence global politics.",
      image:
        "https://images.unsplash.com/photo-1668706971199-37e30a4e6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjB0aGVvcnklMjBnb3Zlcm5tZW50fGVufDF8fHx8MTc3NDQxMDAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Democracy",
        "Political Ideologies",
        "International Relations",
        "Justice Theory",
        "State & Power",
      ],
      color: "bg-[#0A1926] text-[#D9D7CC]",
      mentors: [
        "Martina Marques",
        "Yognya Gunti",
        "Akshiti Bhardwaj",
      ],
      topicsData: {},
      chapters: [],
    },
    {
      id: "world-history",
      title: "World History",
      description:
        "Journey across continents and centuries. Understand how civilizations rose and fell, how cultures interacted, and how past events continue to shape our present.",
      image:
        "https://images.unsplash.com/photo-1759767851913-a32f8bf21cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGhpc3RvcnklMjBhbmNpZW50JTIwY2l2aWxpemF0aW9uc3xlbnwxfHx8fDE3NzQ0MTAwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Ancient Empires",
        "Medieval History",
        "Colonialism",
        "World Wars",
        "Modern Globalization",
      ],
      color: "bg-[#A1A6A5] text-[#0A1926]",
      mentors: [
        "Yognya Gunti",
        "Lakshya Shree",
        "Akshiti Bhardwaj",
        "Ojas Dhaundiyal",
      ],
      topicsData: {},
      chapters: [],
    },
    {
      id: "geology",
      title: "Geology",
      description:
        "Explore the science of the Earth beyond textbooks. Learn how our planet works and understand the world beneath your feet through real-world applications.",
      image:
        "https://images.unsplash.com/photo-1668364804296-8a33c09dc576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9sb2d5JTIwcm9ja3MlMjBlYXJ0aHxlbnwxfHx8fDE3Njg4NjgxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Earth Sciences",
        "Geomorphology",
        "Environmental Geology",
        "Hydrogeology",
      ],
      color: "bg-[#D9D7CC] text-[#0A1926]",
      mentors: ["Lakshya Shree", "Yognya Gunti"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "art-history",
      title: "Art History",
      description:
        "Journey through centuries of artistic expression. Analyze how art reflects culture, politics, and human emotion across different periods and movements.",
      image:
        "https://images.unsplash.com/photo-1763772426662-bbb5045392d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBoaXN0b3J5JTIwbXVzZXVtJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzc0NDEwMDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Renaissance Art",
        "Modern Art",
        "Contemporary Art",
        "Art Movements",
        "Visual Analysis",
      ],
      color: "bg-[#0B1F26] text-[#D9D7CC]",
      mentors: ["Lee Xin Ying, Megan", "Yognya Gunti", "Ojas Dhaundiyal"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "geography",
      title: "Geography",
      description:
        "Understand the world around you. Study physical landscapes, human-environment interactions, and how geography shapes cultures and societies.",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9ncmFwaHklMjBtYXAlMjB3b3JsZHxlbnwxfHx8fDE3Njg4NjgxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Physical Geography",
        "Human Geography",
        "Cultural Geography",
        "Environmental Systems",
      ],
      color: "bg-[#626E73] text-white",
      mentors: ["Lakshya Shree"],
      topicsData: {},
      chapters: [],
    },
    {
      id: "philosophy",
      title: "Philosophy",
      description:
        "Question everything. Explore fundamental questions about existence, knowledge, ethics, and the human condition through classical and modern philosophical traditions.",
      image:
        "https://images.unsplash.com/photo-1600779547364-2fe8fe3c45c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsb3NvcGh5JTIwdGhpbmtpbmclMjBtaW5kfGVufDF8fHx8MTc3NDQxMDAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: [
        "Ethics",
        "Logic",
        "Metaphysics",
        "Epistemology",
        "Existentialism",
      ],
      color: "bg-[#0A1926] text-[#D9D7CC]",
      mentors: ["Martina Marques"],
      topicsData: {},
      chapters: [],
    },
  ];

  const heroSpotlightImage =
    subjects.find((subject) => subject.id === "history")?.image ??
    subjects[0]?.image;

  const homeTheme: CSSProperties = {
    "--background": "44 32% 88%",
    "--foreground": "15 49% 7%",
    "--muted-foreground": "206 8% 41%",
    "--primary": "355 88% 16%",
    "--primary-foreground": "44 32% 88%",
    "--secondary": "206 35% 69%",
    "--muted": "44 20% 84%",
    "--accent": "206 35% 69%",
    "--border": "15 49% 7%",
    "--input": "15 49% 7%",
    "--font-display": "'Instrument Serif', serif",
    "--font-body": "'Space Grotesk', sans-serif",
    backgroundColor: "hsl(var(--background))",
    fontFamily: "var(--font-body)",
  };

  const testimonials = [
    {
      quote:
        "Working in AnithUncommon as a Curriculum Mentor has been an extremely fulfilling experience. Every team member is motivated, and committed to the goal of making education accessible regardless of background. Through my lessons with my students, I have been able to apply the teaching content to real-life scenarios from their diverse backgrounds. This student-led organisation has immense potential to create tangible change in today’s global education landscape, and its members are already heading towards that goal.",
      name: "Megan",
      role: "Curriculum Mentor",
    },
    {
      quote:
        "AnithUncommon has been a great experience so far. We get access to mentors for free in different subjects and are always supported and heard. Not only that, but we are growing together, which is what matters the  most.",
      name: "Alina",
      role: "Student",
    },
    {
      quote:
        "Tutoring with AnithUncommon has really changed how I see learning. I’ve worked with students from all over the world, all with different backgrounds and ways of thinking, which has pushed me to explain things in new and clearer ways. It’s awesome to see something finally click for someone, and it’s helped me grow both in my understanding and how I communicate. Seeing a student go from confused to confident is one of the most rewarding parts of the experience. Joining AnithUncommon has allowed me to help students while improving myself at the same time.",
      name: "Vihaan",
      role: "STEM Mentor",
    },
    {
      quote:
        "Being student at AnithUncommon really change my mind about STEM. It makes me see that STEM is not just  about complicated formula, but solving real world problem. This is  because the mentors at AnithUncommon break down the lessons so clearly and easy to understand. Even if we still don't understand we can ask the mentor to repeat the lesson again",
      name: "Mahansa",
      role: "Student",
    },
    {
      quote:
        "Mentoring with AnithUncommon has been such an eye-opening and beautiful journey–both at the same time. I've now come to realise the starking contrast between the words \"tutoring\" and \"mentoring\". I now have come to know that mentoring is about making a personal bond and relationship with your students. It's two people coming together, gaining equal benefits. The student learning something new, and the mentor getting an 'interlocutor' to discuss dilemmas with in their subject. I love being part of this tight-knit, warm community which is increasingly becoming a space where all can grow–whether mentor or student.",
      name: "Akshiti",
      role: "Humanities Subject Mentor",
    },
  ];

  const ORBITAL_ITEMS = [
    {
      title: "Academic\nPerformance",
      description: "",
    },
    {
      title: "Confidence &\nSelf-Belief",
      description: "",
    },
    {
      title: "Career\nDirection",
      description: "",
    },
    {
      title: "Personal\nIdentity",
      description: "",
    },
    {
      title: "Motivation\nto Learn",
      description: "",
    },
  ] as const;
  const ORBITAL_ANGLES = ORBITAL_ITEMS.map((_, index) =>
    -90 + index * (360 / ORBITAL_ITEMS.length),
  );

  const getOrbitalLayout = (viewportWidth: number) => {
    if (viewportWidth < 420) {
      return { radius: 105, nodeSize: 74, centerMultiplier: 0.96 };
    }
    if (viewportWidth < 640) {
      return { radius: 122, nodeSize: 82, centerMultiplier: 0.92 };
    }
    if (viewportWidth < 768) {
      return { radius: 145, nodeSize: 104, centerMultiplier: 0.8 };
    }
    if (viewportWidth < 1024) {
      return { radius: 175, nodeSize: 118, centerMultiplier: 0.76 };
    }
    if (viewportWidth < 1280) {
      return { radius: 200, nodeSize: 128, centerMultiplier: 0.75 };
    }
    return { radius: 224, nodeSize: 140, centerMultiplier: 0.74 };
  };

  const [orbitalLayout, setOrbitalLayout] = useState(() =>
    getOrbitalLayout(
      typeof window === "undefined" ? 1440 : window.innerWidth,
    ),
  );

  const [animatedStats, setAnimatedStats] = useState<number[]>(
    LANDING_STATS.map(() => 0),
  );
  const headerRef = useRef<HTMLElement | null>(null);
  const statsSectionRef = useRef<HTMLElement | null>(null);
  const statsAnimatedOnceRef = useRef(false);

  useEffect(() => {
    const section = statsSectionRef.current;
    if (!section) return;

    const rafIds: number[] = [];
    const timeoutIds: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting || statsAnimatedOnceRef.current) {
          return;
        }

        statsAnimatedOnceRef.current = true;

        LANDING_STATS.forEach((stat, index) => {
          const timeoutId = window.setTimeout(() => {
            const start = performance.now();
            const duration = 900;

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased =
                1 - Math.pow(1 - progress, 3);
              const value = Math.round(stat.target * eased);

              setAnimatedStats((prev) => {
                const next = [...prev];
                next[index] = value;
                return next;
              });

              if (progress < 1) {
                const id = requestAnimationFrame(tick);
                rafIds.push(id);
              }
            };

            const id = requestAnimationFrame(tick);
            rafIds.push(id);
          }, index * 140);

          timeoutIds.push(timeoutId);
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timeoutIds.forEach((id) => window.clearTimeout(id));
      rafIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  useEffect(() => {
    const updateOrbitalLayout = () => {
      setOrbitalLayout(getOrbitalLayout(window.innerWidth));
    };

    updateOrbitalLayout();
    window.addEventListener("resize", updateOrbitalLayout);

    return () => {
      window.removeEventListener("resize", updateOrbitalLayout);
    };
  }, []);

  const handleExploreSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentPage("subject");
    navigate(`/subject/${encodeURIComponent(subject.id)}`);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedSubject(null);
    setSelectedTopic(null);
    setSelectedMentor(null);
    setMobileMenuOpen(false);
    navigate("/");
  };

  const handleGoToTeam = () => {
    navigate("/team");
    setMobileMenuOpen(false);
  };

  const handleGoToFaq = () => {
    navigate("/faq");
    setMobileMenuOpen(false);
  };

  const handleGoToProgress = () => {
    navigate("/progress");
    setMobileMenuOpen(false);
  };

  const handleGoToJoinUs = () => {
    navigate("/joinus");
    setMobileMenuOpen(false);
  };

  const handleGoToMentor = (mentorName: string) => {
    const mentor = getMentorByName(mentorName);
    if (mentor) {
      setSelectedMentor(mentor);
      setCurrentPage("mentor");
      navigate(`/mentor/${encodeURIComponent(mentor.id)}`);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = (headerRef.current?.offsetHeight ?? 0) + 12;
      const targetTop =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;
      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });
    }
  };

  const goToHomeSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    navigate("/");

    window.setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const headerOffset = 96;
      const targetTop =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });
    }, 140);
  };

  const [heroPointer, setHeroPointer] = useState({
    x: 0,
    y: 0,
    isActive: false,
  });

  const handleHeroMouseMove = (
    event: ReactMouseEvent<HTMLElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHeroPointer({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      isActive: true,
    });
  };

  const routeSubjectId = location.pathname.startsWith("/subject/")
    ? decodeURIComponent(location.pathname.replace("/subject/", ""))
    : null;
  const activeSubject = routeSubjectId
    ? subjects.find((subject) => subject.id === routeSubjectId) ??
      selectedSubject
    : null;

  if (location.pathname === "/team") {
    return <MeetOurTeam onBack={handleBackToHome} />;
  }

  if (location.pathname === "/joinus") {
    return <JoinUs onBack={handleBackToHome} />;
  }

  if (location.pathname === "/faq") {
    return <FAQ onBack={handleBackToHome} />;
  }

  if (location.pathname === "/progress") {
    return <StudentProgress onBack={handleBackToHome} />;
  }

  if (location.pathname.startsWith("/mentor/")) {
    const mentorId = decodeURIComponent(
      location.pathname.replace("/mentor/", ""),
    );
    const mentor = getMentorById(mentorId);

    if (mentor) {
      return <MentorProfile mentor={mentor} onBack={handleBackToHome} />;
    }
  }

  if (
    selectedTopic &&
    activeSubject &&
    location.pathname.startsWith("/subject/")
  ) {
    return (
      <div className="min-h-screen relative overflow-hidden text-[#1A0905]" style={{ backgroundColor: "#E3DFCE" }}>
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(26, 9, 5, 0.2) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#94B1C8] opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4C050C] opacity-10 rounded-full blur-3xl" />

        <header
          className="fixed top-0 inset-x-0 z-30"
          style={{
            backgroundColor: "rgba(227, 223, 206, 0.94)",
            borderBottom: "1px solid rgba(26, 9, 5, 0.14)",
          }}
        >
          <div className="relative flex justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto items-center min-[1440px]:grid min-[1440px]:grid-cols-[1fr_auto_1fr]">
            <button
              onClick={handleBackToHome}
              className="text-3xl tracking-tight md:justify-self-start md:-ml-1"
              aria-label="Go to homepage"
              style={{
                color: "#1A0905",
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              AnithUncommon
            </button>

            <nav className="hidden min-[1440px]:flex items-center justify-self-center gap-6 text-sm tracking-wide font-medium">
              <button onClick={() => goToHomeSection("about")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                About Us
              </button>
              <button onClick={() => goToHomeSection("subjects")} className="transition-colors" style={{ color: "#1A0905" }}>
                Subjects
              </button>
              <button onClick={() => goToHomeSection("collaborate")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Collaborate
              </button>
              <button onClick={handleGoToTeam} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Our Team
              </button>
              <button onClick={handleGoToProgress} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Student Progress
              </button>
              <button onClick={handleGoToFaq} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                FAQ
              </button>
            </nav>

            <div className="min-[1440px]:hidden" />

            <Button
              variant="ghost"
              size="sm"
              className="min-[1440px]:hidden liquid-glass rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: "#1A0905" }}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div
              className="min-[1440px]:hidden fixed inset-0 z-[120] isolate"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="absolute inset-0 z-[121] bg-black/35" />
              <nav
                className="absolute right-0 top-0 z-[122] h-full w-[82%] max-w-sm bg-[#E3DFCE] border-l-2 border-[#1A0905] shadow-[-10px_0_0_rgba(26,9,5,0.4)] p-6 flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "#1A0905" }}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center">
                  <button onClick={() => goToHomeSection("about")} className="text-lg" style={{ color: "#1A0905" }}>
                    About Us
                  </button>
                  <button onClick={() => goToHomeSection("subjects")} className="text-lg" style={{ color: "#1A0905" }}>
                    Subjects
                  </button>
                  <button onClick={() => goToHomeSection("collaborate")} className="text-lg" style={{ color: "#1A0905" }}>
                    Collaborate
                  </button>
                  <button onClick={handleGoToTeam} className="text-lg" style={{ color: "#1A0905" }}>
                    Our Team
                  </button>
                  <button onClick={handleGoToProgress} className="text-lg" style={{ color: "#1A0905" }}>
                    Student Progress
                  </button>
                  <button onClick={handleGoToFaq} className="text-lg" style={{ color: "#1A0905" }}>
                    FAQ
                  </button>
                </div>
              </nav>
            </div>
          )}
        </header>

        <main className="container mx-auto px-4 pt-36 pb-10 relative z-10">
          <TopicDetail
            subject={activeSubject.title}
            topic={selectedTopic}
            onBack={() => setSelectedTopic(null)}
          />
        </main>
      </div>
    );
  }

  if (activeSubject && location.pathname.startsWith("/subject/")) {
    const toggleChapter = (chapterId: string) => {
      setExpandedChapters((prev) => ({
        ...prev,
        [chapterId]: !prev[chapterId],
      }));
    };

    const handleSubchapterClick = (subchapter: Subchapter) => {
      if (subchapter.locked) {
        setShowLoginModal(true);
      }
    };

    const handleChapterClick = (chapter: Chapter) => {
      // Chapters 4+ require login
      if (chapter.chapterNumber > 3 && !isLoggedIn) {
        setShowLoginModal(true);
        return;
      }
      toggleChapter(chapter.id);
    };

    const handleLogin = (email: string, password: string) => {
      // Simple login - store in localStorage
      setIsLoggedIn(true);
      setShowLoginModal(false);
      localStorage.setItem(
        "anithuncommon_user",
        JSON.stringify({
          email,
          loggedInAt: new Date().toISOString(),
        }),
      );
    };

    return (
      <div className="min-h-screen relative overflow-hidden text-[#1A0905]" style={{ backgroundColor: "#E3DFCE" }}>
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(26, 9, 5, 0.2) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#94B1C8] opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4C050C] opacity-10 rounded-full blur-3xl" />

        <header
          className="fixed top-0 inset-x-0 z-30"
          style={{
            backgroundColor: "rgba(227, 223, 206, 0.94)",
            borderBottom: "1px solid rgba(26, 9, 5, 0.14)",
          }}
        >
          <div className="relative flex justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto items-center min-[1440px]:grid min-[1440px]:grid-cols-[1fr_auto_1fr]">
            <button
              onClick={handleBackToHome}
              className="text-3xl tracking-tight md:justify-self-start md:-ml-1"
              aria-label="Go to homepage"
              style={{
                color: "#1A0905",
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              AnithUncommon
            </button>

            <nav className="hidden min-[1440px]:flex items-center justify-self-center gap-6 text-sm tracking-wide font-medium">
              <button onClick={() => goToHomeSection("about")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                About Us
              </button>
              <button onClick={() => goToHomeSection("subjects")} className="transition-colors" style={{ color: "#1A0905" }}>
                Subjects
              </button>
              <button onClick={() => goToHomeSection("collaborate")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Collaborate
              </button>
              <button onClick={handleGoToTeam} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Our Team
              </button>
              <button onClick={handleGoToProgress} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Student Progress
              </button>
              <button onClick={handleGoToFaq} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                FAQ
              </button>
            </nav>

            <div className="min-[1440px]:hidden" />

            <Button
              variant="ghost"
              size="sm"
              className="min-[1440px]:hidden liquid-glass rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: "#1A0905" }}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div
              className="min-[1440px]:hidden fixed inset-0 z-[120] isolate"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="absolute inset-0 z-[121] bg-black/35" />
              <nav
                className="absolute right-0 top-0 z-[122] h-full w-[82%] max-w-sm bg-[#E3DFCE] border-l-2 border-[#1A0905] shadow-[-10px_0_0_rgba(26,9,5,0.4)] p-6 flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "#1A0905" }}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center">
                  <button onClick={() => goToHomeSection("about")} className="text-lg" style={{ color: "#1A0905" }}>
                    About Us
                  </button>
                  <button onClick={() => goToHomeSection("subjects")} className="text-lg" style={{ color: "#1A0905" }}>
                    Subjects
                  </button>
                  <button onClick={() => goToHomeSection("collaborate")} className="text-lg" style={{ color: "#1A0905" }}>
                    Collaborate
                  </button>
                  <button onClick={handleGoToTeam} className="text-lg" style={{ color: "#1A0905" }}>
                    Our Team
                  </button>
                  <button onClick={handleGoToProgress} className="text-lg" style={{ color: "#1A0905" }}>
                    Student Progress
                  </button>
                  <button onClick={handleGoToFaq} className="text-lg" style={{ color: "#1A0905" }}>
                    FAQ
                  </button>
                </div>
              </nav>
            </div>
          )}
        </header>
        <main className="container mx-auto px-4 pt-36 pb-10 relative z-10">
          <div className="mb-8">
            <h1
              className="text-5xl md:text-6xl font-editorial-serif font-semibold mb-4"
              style={{ color: "#1A0905" }}
            >
              {activeSubject.title}
            </h1>
            <p className="text-xl" style={{ color: "#1A0905" }}>
              {activeSubject.description}
            </p>
          </div>

          {activeSubject.chapters &&
          activeSubject.chapters.length > 0 ? (
            <div className="space-y-6 max-w-3xl">
              {/* Group chapters by mentor */}
              {(() => {
                const mentorGroups: {
                  [key: string]: Chapter[];
                } = {};
                activeSubject.chapters.forEach((chapter) => {
                  const mentorKey = chapter.mentor || "General";
                  if (!mentorGroups[mentorKey]) {
                    mentorGroups[mentorKey] = [];
                  }
                  mentorGroups[mentorKey].push(chapter);
                });

                return Object.entries(mentorGroups).map(
                  ([mentorName, chapters]) => (
                    <div key={mentorName}>
                      {mentorName !== "General" && (
                        <div
                          className="mb-4 pb-3 border-b-2"
                          style={{ borderColor: "#D9D7CC" }}
                        >
                          <h2
                            className="text-2xl font-bold flex items-center gap-2"
                            style={{ color: "#0A1926" }}
                          >
                            <Users className="w-6 h-6" />
                            Taught by {mentorName}
                          </h2>
                        </div>
                      )}
                      <div className="space-y-4">
                        {chapters.map((chapter) => (
                          <Card
                            key={chapter.id}
                            className="overflow-hidden rounded-[24px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.52)]"
                          >
                            <div
                              className="p-6 cursor-pointer hover:bg-[#F9F9F7] transition-colors"
                              onClick={() =>
                                handleChapterClick(chapter)
                              }
                            >
                              <div className="flex items-center justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-1">
                                    <h3
                                      className="text-xl font-semibold"
                                      style={{
                                        color: "#0A1926",
                                      }}
                                    >
                                      Chapter{" "}
                                      {chapter.chapterNumber}:{" "}
                                      {chapter.title}
                                    </h3>
                                    {chapter.chapterNumber >
                                      3 &&
                                      !isLoggedIn && (
                                        <div
                                          className="px-3 py-1 rounded-full flex items-center gap-1"
                                          style={{
                                            backgroundColor:
                                              "#626E73",
                                          }}
                                        >
                                          <Lock
                                            className="w-3 h-3"
                                            style={{
                                              color: "#ffffff",
                                            }}
                                          />
                                          <span
                                            className="text-xs font-semibold"
                                            style={{
                                              color: "#ffffff",
                                            }}
                                          >
                                            Login Required
                                          </span>
                                        </div>
                                      )}
                                  </div>
                                  <p
                                    className="text-sm"
                                    style={{ color: "#626E73" }}
                                  >
                                    {chapter.subchapters.length}{" "}
                                    subchapters available
                                  </p>
                                </div>
                                <div className="flex items-center gap-3">
                                  <ChevronDown
                                    className={`w-5 h-5 transition-transform ${expandedChapters[chapter.id] ? "rotate-180" : ""}`}
                                    style={{ color: "#626E73" }}
                                  />
                                </div>
                              </div>
                            </div>

                            {expandedChapters[chapter.id] && (
                              <div className="px-6 pb-6 space-y-2">
                                {chapter.subchapters.map(
                                  (subchapter, index) => (
                                    <div
                                      key={subchapter.id}
                                      className={`p-4 rounded-lg border-2 transition-all ${
                                        subchapter.locked
                                          ? "cursor-pointer hover:border-[#0A1926]"
                                          : "border-[#D9D7CC] bg-[#F9F9F7]"
                                      }`}
                                      style={{
                                        borderColor:
                                          subchapter.locked
                                            ? "#D9D7CC"
                                            : "#D9D7CC",
                                      }}
                                      onClick={() =>
                                        handleSubchapterClick(
                                          subchapter,
                                        )
                                      }
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                          <span
                                            className="font-medium"
                                            style={{
                                              color: "#626E73",
                                            }}
                                          >
                                            {index + 1}
                                          </span>
                                          <span
                                            style={{
                                              color: "#0A1926",
                                            }}
                                          >
                                            {subchapter.title}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          {subchapter.locked && (
                                            <div className="flex items-center gap-2">
                                              <Lock
                                                className="w-4 h-4"
                                                style={{
                                                  color:
                                                    "#626E73",
                                                }}
                                              />
                                              <span
                                                className="text-sm"
                                                style={{
                                                  color:
                                                    "#626E73",
                                                }}
                                              >
                                                Locked
                                              </span>
                                            </div>
                                          )}
                                          {!subchapter.locked && (
                                              <div
                                                className="px-3 py-1 rounded-full"
                                                style={{
                                                  backgroundColor:
                                                    "#0A1926",
                                                }}
                                              >
                                                <span
                                                  className="text-xs"
                                                  style={{
                                                    color:
                                                      "#D9D7CC",
                                                  }}
                                                >
                                                  Available
                                                </span>
                                              </div>
                                            )}
                                        </div>
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                            )}
                          </Card>
                        ))}
                      </div>
                    </div>
                  ),
                );
              })()}

              {/* Resources Section */}
              {subjectResources.length > 0 && (
                <Card className="mt-8 p-6 rounded-[24px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.52)]">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText
                      className="w-5 h-5"
                      style={{ color: "#0A1926" }}
                    />
                    <h2
                      className="text-2xl font-bold"
                      style={{ color: "#0A1926" }}
                    >
                      Available Resources
                    </h2>
                  </div>
                  <p
                    className="mb-6"
                    style={{ color: "#626E73" }}
                  >
                    Study materials and resources provided by
                    your mentors
                  </p>
                  <div className="space-y-4">
                    {subjectResources.map((resource, index) => (
                      <div
                        key={index}
                        className="border-2 rounded-lg p-4 hover:border-[#0A1926] transition-colors"
                        style={{ borderColor: "#D9D7CC" }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-[#0A1926] text-[#D9D7CC]">
                                {resource.type.toUpperCase()}
                              </Badge>
                              <span
                                className="text-sm cursor-pointer hover:underline transition-all"
                                style={{ color: "#626E73" }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleGoToMentor(
                                    resource.mentorName,
                                  );
                                }}
                              >
                                by {resource.mentorName}
                              </span>
                            </div>
                            <h3
                              className="font-semibold text-lg mb-1"
                              style={{ color: "#0A1926" }}
                            >
                              {resource.title}
                            </h3>
                            <p
                              className="text-sm"
                              style={{ color: "#626E73" }}
                            >
                              {resource.description}
                            </p>
                          </div>
                          {resource.type === "pdf" && (
                            <a
                              href={`/${resource.file}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-lg transition-colors"
                              style={{
                                backgroundColor: "#D9D7CC",
                                color: "#0A1926",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "#0A1926";
                                e.currentTarget.style.color =
                                  "#D9D7CC";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "#D9D7CC";
                                e.currentTarget.style.color =
                                  "#0A1926";
                              }}
                            >
                              View PDF
                            </a>
                          )}
                          {resource.type === "image" && (
                            <a
                              href={
                                resource.file.startsWith(
                                  "figma:asset",
                                )
                                  ? resource.file
                                  : `/${resource.file}`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <img
                                src={
                                  resource.file.startsWith(
                                    "figma:asset",
                                  )
                                    ? resource.file
                                    : `/${resource.file}`
                                }
                                alt={resource.title}
                                className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeSubject.topics.map((topic) => (
                <Card
                  key={topic}
                  className="p-6 rounded-[24px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.52)] transition-all duration-500 hover:-translate-y-1 cursor-pointer group"
                >
                  <h3
                    className="text-xl font-semibold mb-2 group-hover:text-[#626E73] transition-colors"
                    style={{ color: "#0A1926" }}
                  >
                    {topic}
                  </h3>
                  <p
                    className="mb-4"
                    style={{ color: "#626E73" }}
                  >
                    Coming soon - Explore this topic in depth
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </main>

        <footer
          className="py-12 transition-colors duration-[1200ms] relative overflow-hidden"
          style={{ backgroundColor: "#1A0905" }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148, 177, 200, 0.4) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 items-start lg:[&>*]:w-full pb-10">
              <div className="text-left space-y-4">
                <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#E3DFCE" }}>
                  Directory
                </h3>
                <div className="flex flex-col gap-2 text-sm">
                  <button onClick={() => goToHomeSection("about")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    About Us
                  </button>
                  <button onClick={() => goToHomeSection("subjects")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    Subjects
                  </button>
                  <button onClick={() => goToHomeSection("collaborate")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    Collaborate
                  </button>
                  <button onClick={handleGoToTeam} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    Our Team
                  </button>
                  <button onClick={handleGoToProgress} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    Student Progress
                  </button>
                  <button onClick={handleGoToFaq} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    FAQ
                  </button>
                </div>
              </div>

              <div className="text-left space-y-4">
                <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#E3DFCE" }}>
                  Get In Touch
                </h3>
                <p className="text-sm" style={{ color: "#94B1C8" }}>
                  anithuncommon@gmail.com
                </p>
                <Button
                  className="w-full sm:w-auto rounded-full border-2 border-[#94B1C8]"
                  style={{ backgroundColor: "#4C050C", color: "#E3DFCE" }}
                  onClick={() => (window.location.href = "mailto:anithuncommon@gmail.com")}
                >
                  Contact
                </Button>
              </div>

              <div className="text-left space-y-4">
                <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#E3DFCE" }}>
                  Join Our Newsletter
                </h3>
                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("newsletterName");
                    const email = formData.get("newsletterEmail");
                    const mailtoLink = `mailto:anithuncommon@gmail.com?subject=Newsletter Signup&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}`)}`;
                    window.location.href = mailtoLink;
                  }}
                >
                  <input type="text" name="newsletterName" required placeholder="First Name" className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none" style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }} />
                  <input type="email" name="newsletterEmail" required placeholder="Email" className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none" style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }} />
                  <Button type="submit" className="w-full rounded-full border-2 border-[#94B1C8]" style={{ backgroundColor: "#4C050C", color: "#E3DFCE" }}>
                    Submit
                  </Button>
                </form>
              </div>

              <div className="text-left lg:text-right space-y-4 lg:justify-self-end">
                <div className="flex items-center justify-start lg:justify-end gap-3 mb-5">
                  <a href="https://instagram.com/anithuncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://linktr.ee/anithuncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    <TreePine className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/anith-uncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold tracking-[0.14em] uppercase mb-2" style={{ color: "#E3DFCE" }}>
                    Colophon
                  </h3>
                  <p className="text-sm" style={{ color: "#94B1C8" }}>
                    Designed by
                  </p>
                  <p className="text-sm" style={{ color: "#94B1C8" }}>
                    Ximena Clímaco
                  </p>
                  <p className="text-sm mb-2" style={{ color: "#94B1C8" }}>
                    Amr Shaikh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t" style={{ borderColor: "rgba(161, 166, 165, 0.2)" }}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
              <p className="text-center md:text-left" style={{ color: "#94B1C8" }}>
                © AnithUncommon. Empowering students beyond the classroom.
              </p>
            </div>
          </div>
        </footer>

        {/* Signup Modal */}
        {showSignupModal && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSignupModal(false)}
          >
            <Card
              className="max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-2xl"
                style={{ color: "#626E73" }}
                onClick={() => setShowSignupModal(false)}
              >
                ×
              </button>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#D9D7CC" }}
                >
                  <Lock
                    className="w-8 h-8"
                    style={{ color: "#0A1926" }}
                  />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#0A1926" }}
                >
                  Sign up to get complete resources for free
                </h2>
                <p
                  className="mb-6"
                  style={{ color: "#626E73" }}
                >
                  Join AnithUncommon to unlock all subchapters
                  and access our full library of educational
                  resources completely free.
                </p>
                <Button
                  className="w-full text-lg mb-3"
                  style={{
                    backgroundColor: "#0A1926",
                    color: "#D9D7CC",
                  }}
                  onClick={handleGoToJoinUs}
                >
                  Sign Up Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowSignupModal(false)}
                >
                  Maybe Later
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Login Modal */}
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[#1A0905] transition-colors duration-[1200ms]" style={homeTheme}>
      <section
        className="relative min-h-screen overflow-hidden"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={() =>
          setHeroPointer((prev) => ({
            ...prev,
            isActive: false,
          }))
        }
        style={
          {
            "--mouse-x": `${heroPointer.x}px`,
            "--mouse-y": `${heroPointer.y}px`,
            backgroundColor: "#E3DFCE",
          } as CSSProperties & Record<string, string>
        }
      >
        <div className="hero-dots-base absolute inset-0 z-0 pointer-events-none" />
        <div
          className={`hero-dots-reveal absolute inset-0 z-[1] pointer-events-none ${heroPointer.isActive ? "hero-dots-reveal-active" : ""}`}
        />

        {/* Header */}
        <header
          ref={headerRef}
          className="fixed top-0 inset-x-0 z-30 transition-colors duration-300"
          style={{
            backgroundColor: hasScrolled ? "rgba(227, 223, 206, 0.94)" : "transparent",
            borderBottom: hasScrolled
              ? "1px solid rgba(26, 9, 5, 0.14)"
              : "1px solid transparent",
          }}
        >
          <div
            className="relative flex justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto items-center min-[1440px]:grid min-[1440px]:grid-cols-[1fr_auto_1fr]"
          >
            <button
              onClick={handleBackToHome}
              className="text-3xl tracking-tight md:justify-self-start md:-ml-1"
              aria-label="Go to homepage"
              style={{
                color: "#1A0905",
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              AnithUncommon
            </button>

            <nav className="hidden min-[1440px]:flex items-center justify-self-center gap-6 text-sm tracking-wide font-medium">
              <button onClick={() => scrollToSection("about")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                About Us
              </button>
              <button onClick={() => scrollToSection("subjects")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Subjects
              </button>
              <button onClick={() => scrollToSection("collaborate")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Collaborate
              </button>
              <button onClick={handleGoToTeam} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Our Team
              </button>
              <button onClick={handleGoToProgress} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                Student Progress
              </button>
              <button onClick={handleGoToFaq} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
                FAQ
              </button>
            </nav>

            <div className="hidden min-[1440px]:flex items-center justify-self-end gap-3 md:mr-1">
              {isLoggedIn ? (
                <Button
                  size="sm"
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem("anithuncommon_user");
                  }}
                  className="rounded-full px-6 py-2.5 text-sm border-2 border-[#1A0905] shadow-none"
                  style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                >
                  Sign Out
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => setShowLoginModal(true)}
                  className="rounded-full px-6 py-2.5 text-sm border-2 border-[#1A0905] shadow-none"
                  style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                >
                  Sign In
                </Button>
              )}

              <Button
                size="sm"
                onClick={handleGoToJoinUs}
                className="rounded-full px-6 py-2.5 text-sm border-2 border-[#1A0905] shadow-none"
                style={{ backgroundColor: "#4C050C", color: "#E3DFCE" }}
              >
                Join Us
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="min-[1440px]:hidden liquid-glass rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: "#1A0905" }}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div
              className="min-[1440px]:hidden fixed inset-0 z-[120] isolate"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="absolute inset-0 z-[121] bg-black/35" />
              <nav
                className="absolute right-0 top-0 z-[122] h-full w-[82%] max-w-sm bg-[#E3DFCE] border-l-2 border-[#1A0905] shadow-[-10px_0_0_rgba(26,9,5,0.4)] p-6 flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "#1A0905" }}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center">
                  <button onClick={() => scrollToSection("about")} className="text-lg" style={{ color: "#1A0905" }}>
                    About Us
                  </button>
                  <button onClick={() => scrollToSection("subjects")} className="text-lg" style={{ color: "#1A0905" }}>
                    Subjects
                  </button>
                  <button onClick={() => scrollToSection("collaborate")} className="text-lg" style={{ color: "#1A0905" }}>
                    Collaborate
                  </button>
                  <button onClick={handleGoToTeam} className="text-lg" style={{ color: "#1A0905" }}>
                    Our Team
                  </button>
                  <button
                    onClick={() => {
                      handleGoToProgress();
                    }}
                    className="text-lg"
                    style={{ color: "#1A0905" }}
                  >
                    Student Progress
                  </button>
                  <button
                    onClick={() => {
                      handleGoToFaq();
                    }}
                    className="text-lg"
                    style={{ color: "#1A0905" }}
                  >
                    FAQ
                  </button>
                </div>

                <div className="space-y-3 pt-6">
                  {isLoggedIn ? (
                    <Button
                      size="sm"
                      onClick={() => {
                        setIsLoggedIn(false);
                        localStorage.removeItem("anithuncommon_user");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full rounded-full border-2 border-[#1A0905] shadow-none"
                      style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => {
                        setShowLoginModal(true);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full rounded-full border-2 border-[#1A0905] shadow-none"
                      style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                    >
                      Sign In
                    </Button>
                  )}

                  <Button
                    size="sm"
                    onClick={handleGoToJoinUs}
                    className="w-full rounded-full border-2 border-[#1A0905] shadow-none"
                    style={{ backgroundColor: "#4C050C", color: "#E3DFCE" }}
                  >
                    Join Us
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 min-h-screen">
          <h1
            className="hero-prism-text text-5xl sm:text-7xl md:text-8xl leading-[1.02] pb-2 tracking-[-2.46px] max-w-6xl font-normal"
            style={{
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            Learning Beyond Classrooms,<br />
            Led by Students.
          </h1>

          <p
            className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
            style={{
              color: "#1A0905",
            }}
          >
            We are a non-profit youth community opening uncommon
            subjects to everyone. Study what sparks your curiosity,
            with global peers and mentors who get it.
          </p>

          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 mt-12">
            <Button
              size="lg"
              className="rounded-full px-12 py-5 text-base w-full sm:w-auto border-2 border-[#1A0905]"
              style={{ backgroundColor: "#4C050C", color: "#E3DFCE" }}
              onClick={() => scrollToSection("subjects")}
            >
              Explore Subjects
            </Button>
            <Button
              size="lg"
              className="rounded-full px-12 py-5 text-base w-full sm:w-auto border-2 border-[#1A0905]"
              style={{ backgroundColor: "#94B1C8", color: "#1A0905" }}
              onClick={handleGoToJoinUs}
            >
              Join Community
            </Button>
          </div>
        </div>

        {/* Marquee Banner */}
        <section className="-mt-8 border-y-2 border-[#1A0905] bg-[#94B1C8] overflow-hidden relative z-10">
          <marquee
            behavior="scroll"
            direction="left"
            scrollAmount={8}
            className="py-3 text-sm font-semibold tracking-[0.12em]"
            style={{ color: "#1A0905" }}
          >
            STUDENT-LED • GLOBAL • NON-PROFIT • STUDENT-LED • GLOBAL •
            NON-PROFIT • STUDENT-LED • GLOBAL • NON-PROFIT
          </marquee>
        </section>
      </section>

      {/* Impact Stats Section */}
      <section
        ref={statsSectionRef}
        className="py-20 border-b-2 border-[#1A0905] relative overflow-hidden"
        style={{ backgroundColor: "#ede9da" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(26, 9, 5, 0.16) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div
              className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#1A0905]"
              style={{ backgroundColor: "#94B1C8" }}
            >
              <span
                className="text-xs tracking-[0.22em] font-semibold"
                style={{ color: "#1A0905" }}
              >
                OUR IMPACT
              </span>
            </div>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#1A0905" }}
            >
              A quick look at the community growth students
              have built together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDING_STATS.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <Card
                  key={stat.label}
                  className={`group p-6 border-2 border-[#1A0905] rounded-[24px] shadow-[7px_7px_0px_rgba(26,9,5,0.72)] transition-all duration-500 hover:-translate-y-1 ${
                    index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                  }`}
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <div className="flex items-start gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#1A0905]"
                      style={{ backgroundColor: stat.chipColor }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: stat.chipText }}
                      />
                    </div>
                  </div>

                  <div
                    className="text-4xl font-bold leading-none mb-2"
                    style={{ color: stat.bgColor === "#0a1b2b" ? "#E3DFCE" : "#1A0905" }}
                  >
                    {animatedStats[index]}
                    {stat.suffix}
                  </div>
                  <p
                    className="text-sm font-semibold tracking-[0.08em] uppercase mb-4"
                    style={{ color: stat.bgColor === "#0a1b2b" ? "#E3DFCE" : "#1A0905" }}
                  >
                    {stat.label}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 relative transition-colors duration-[1200ms] border-b-2 border-[#1A0905]"
      >
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#94B1C8]/25 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#1A0905] shadow-[3px_3px_0px_rgba(26,9,5,0.28)]" style={{ backgroundColor: "#94B1C8" }}>
                <span
                  className="text-xs tracking-[0.22em] font-semibold"
                  style={{ color: "#1A0905" }}
                >
                  ABOUT US
                </span>
              </div>

            </div>

            <Card className="p-8 md:p-12 rounded-[30px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[10px_10px_0px_0px_rgba(26,9,5,0.9)] relative overflow-hidden mb-8">
              {/* Decorative corner element */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-[#0A1926] opacity-5"
                style={{
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                }}
              />

              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#1A0905" }}
              >
                AnithUncommon is a youth-led, non-profit
                community based in Indonesia, founded in May
                2025 by two students. We noticed that while STEM
                subjects are widely available in schools,
                humanities subjects are often limited or missing
                entirely.
              </p>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#1A0905" }}
              >
                Many students are forced to study subjects they
                don't enjoy, simply because they have no other
                options. We wanted to change that.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#1A0905" }}
              >
                AnithUncommon exists to reduce educational
                inequality by giving students access to subjects
                their schools don't offer. We act as a bridge to
                learning what students actually want to learn.
                In AnithUncommon, we turn the Uncommon into the
                Common. A community built by students for
                students.
              </p>

            </Card>

            {/* Mission and Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[6px_6px_0px_rgba(26,9,5,0.65)] hover:translate-y-[-2px] transition-all duration-500">
                <h3
                  className="text-3xl font-editorial-serif font-semibold mb-4"
                  style={{ color: "#1A0905" }}
                >
                  Our Mission
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "#1A0905" }}
                >
                  To empower and support students throughout
                  their individual learning journeys through
                  mentorship, high-quality resources, and a
                  supportive global community — so no one has to
                  navigate growth alone.
                </p>
              </Card>

              <Card className="p-6 rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[6px_6px_0px_rgba(26,9,5,0.65)] hover:translate-y-[-2px] transition-all duration-500">
                <h3
                  className="text-3xl font-editorial-serif font-semibold mb-4"
                  style={{ color: "#1A0905" }}
                >
                  Our Vision
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "#1A0905" }}
                >
                  Creating a digital environment where students
                  can explore interests outside the traditional
                  curriculum. Interests that are not widely or
                  generally taught in classrooms will be taught
                  here, expanding access to these topics.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Orbital Concept Section */}
      <section
        className="py-20 border-b-2 border-[#1A0905] relative overflow-hidden"
        style={{ backgroundColor: "#ede9da" }}
      >
        <style>{`
          @keyframes orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes orbit-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>

        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(26, 9, 5, 0.16) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center xl:items-start">
            <div className="w-full flex justify-center xl:justify-start">
              <div
                className="relative aspect-square"
                style={{
                  width: Math.min(
                    orbitalLayout.radius * 2 + orbitalLayout.nodeSize + 20,
                    560,
                  ),
                }}
              >
                <div className="absolute inset-0 z-10">
                  <svg
                    viewBox={`-10 -10 ${
                      orbitalLayout.radius * 2 + orbitalLayout.nodeSize + 20
                    } ${orbitalLayout.radius * 2 + orbitalLayout.nodeSize + 20}`}
                    className="absolute inset-0 w-full h-full"
                    style={{ overflow: "visible" }}
                  >
                    {ORBITAL_ITEMS.map((item, index) => {
                      const angle = ORBITAL_ANGLES[index] ?? 0;
                      const rad = (angle * Math.PI) / 180;
                      const offset = orbitalLayout.nodeSize / 2;
                      const center = orbitalLayout.radius + offset;
                      const x =
                        center + orbitalLayout.radius * Math.cos(rad);
                      const y =
                        center + orbitalLayout.radius * Math.sin(rad);
                      const [lineOne = "", lineTwo = ""] =
                        item.description.split("\n");

                      return (
                        <g
                          key={item.title}
                          style={{
                            transformOrigin: `${center}px ${center}px`,
                            animation: "orbit 50s linear infinite",
                          }}
                        >
                          <line
                            x1={center}
                            y1={center}
                            x2={x}
                            y2={y}
                            stroke="rgba(26, 9, 5, 0.12)"
                            strokeWidth="1.5"
                          />
                          <g transform={`translate(${x}, ${y})`}>
                            <circle
                              cx="0"
                              cy="0"
                              r={orbitalLayout.nodeSize / 2}
                              fill="#f7f4eb"
                              stroke="#1A0905"
                              strokeWidth="2"
                              style={{
                                filter:
                                  "drop-shadow(4px 4px 0 rgba(26, 9, 5, 0.26))",
                              }}
                            />
                            <g
                              transform={`rotate(${-angle}, 0, 0)`}
                              style={{
                                transformOrigin: "0px 0px",
                                animation:
                                  "orbit-reverse 50s linear infinite",
                              }}
                            >
                              <text
                                x="0"
                                y="0"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{
                                  fill: "#1A0905",
                                  fontSize:
                                    orbitalLayout.nodeSize >= 120
                                      ? "11px"
                                      : orbitalLayout.nodeSize >= 100
                                      ? "10px"
                                      : "9px",
                                  fontWeight: 600,
                                  letterSpacing: "0.06em",
                                  textTransform: "uppercase",
                                }}
                              >
                                {item.title.split("\n").map((line, idx) => (
                                  <tspan key={idx} x="0" dy={idx === 0 ? "-6" : "12"}>
                                    {line}
                                  </tspan>
                                ))}
                              </text>
                              <text
                                x="0"
                                y="0"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                style={{
                                  fill: "#626E73",
                                  fontSize:
                                    orbitalLayout.nodeSize >= 120
                                      ? "9px"
                                      : orbitalLayout.nodeSize >= 100
                                      ? "8px"
                                      : "7.5px",
                                  lineHeight: "1.2",
                                }}
                              >
                                <tspan x="0" dy="8">
                                  {lineOne}
                                </tspan>
                                <tspan x="0" dy="10">
                                  {lineTwo}
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div
                    className="rounded-full border-2 border-[#1A0905] shadow-[10px_10px_0px_rgba(26,9,5,0.58)] flex flex-col items-center justify-center text-center px-5"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 24%, #8D5B4A 0%, #6A372B 42%, #4C050C 100%)",
                      boxShadow:
                        "inset 0 12px 20px rgba(227, 223, 206, 0.12), inset 0 -12px 20px rgba(26, 9, 5, 0.3), 0 0 0 1px rgba(26, 9, 5, 0.12), 0 18px 34px rgba(26, 9, 5, 0.24)",
                      width: orbitalLayout.radius * (orbitalLayout.centerMultiplier ?? 0.74),
                      height: orbitalLayout.radius * (orbitalLayout.centerMultiplier ?? 0.74),
                    }}
                  >
                    <p
                      className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                      style={{ color: "#E3DFCE" }}
                    >
                      Subject Accessibility
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto xl:mx-0 text-center xl:text-left">
              <div
                className="inline-block px-4 py-2 rounded-full mb-5 border-2 border-[#1A0905] mx-auto xl:mx-0"
                style={{ backgroundColor: "#94B1C8" }}
              >
                <span
                  className="text-xs tracking-[0.22em] font-semibold"
                  style={{ color: "#1A0905" }}
                >
                  THE ACCESS GAP
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-editorial-serif font-semibold leading-[1.06] mb-6"
                style={{ color: "#1A0905" }}
              >
                What Students Can Learn Shapes Who They Become
              </h2>

              <p className="text-lg leading-relaxed mb-4" style={{ color: "#1A0905" }}>
                In many schools, students are limited by what subjects are offered to them. While STEM is often prioritized, many humanities and interest-based areas remain out of reach.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#1A0905" }}>
                But subject access does not just affect what students study - it shapes how they perform, how confident they feel, and the paths they believe are possible for them.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#1A0905" }}>
                That's why AnithUncommon exists - to expand access through free, student-led learning, giving students the freedom to explore what truly matters to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section
        id="subjects"
        className="py-20 transition-colors duration-[1200ms] border-b-2 border-[#1A0905] relative overflow-hidden"
        style={{ backgroundColor: "#ede9da" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148, 177, 200, 0.32) 1px, transparent 1px)",
            backgroundSize: "44px 100%",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#1A0905] shadow-[3px_3px_0px_rgba(26,9,5,0.28)]" style={{ backgroundColor: "#94B1C8" }}>
              <span
                className="text-xs tracking-[0.22em] font-semibold"
                style={{ color: "#1A0905" }}
              >
                OUR SUBJECTS
              </span>
            </div>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "#1A0905" }}
            >
              Explore topics that spark your curiosity. All
              taught by students, for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div
                key={subject.id}
                className={`relative transition-transform duration-300 ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="rounded-[30px] border-2 border-[#1A0905] shadow-[8px_8px_0px_rgba(26,9,5,0.78)] overflow-hidden bg-[#f7f4eb]">
                  <SubjectCard
                    title={subject.title}
                    description={subject.description}
                    image={subject.image}
                    topics={subject.topics}
                    color={subject.color}
                    mentors={subject.mentors}
                    onExplore={() =>
                      handleExploreSubject(subject)
                    }
                    onMentorClick={handleGoToMentor}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-b-2 border-[#1A0905] relative overflow-x-hidden" style={{ backgroundColor: "#ede9da" }}>
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div
              className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#1A0905]"
              style={{ backgroundColor: "#94B1C8" }}
            >
              <span
                className="text-xs tracking-[0.22em] font-semibold"
                style={{ color: "#1A0905" }}
              >
                TESTIMONIALS
              </span>
            </div>
            <p className="text-lg" style={{ color: "#1A0905" }}>
              Real feedback from mentors and learners in our community.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-x-hidden overflow-y-visible pt-2 pb-5">
          <div className="testimonial-track flex items-stretch gap-6 px-4 md:px-8 animate-testimonial-scroll">
            {[...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <Card
                  key={`${testimonial.name}-${index}`}
                  className="w-[320px] sm:w-[360px] h-full flex flex-col flex-shrink-0 p-6 border-2 border-[#1A0905] rounded-[24px] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.82)] transition-all duration-500 hover:-translate-y-1"
                >
                  <p className="text-base leading-relaxed mb-5 flex-1" style={{ color: "#1A0905" }}>
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={`${import.meta.env.BASE_URL}feedback-images/${encodeURIComponent(testimonial.name)}.jpg`}
                      alt={`${testimonial.name} feedback`}
                      className="w-12 h-12 rounded-full border-2 border-[#1A0905] object-cover bg-[#D9D7CC]"
                    />
                    <div>
                      <p className="font-semibold" style={{ color: "#4C050C" }}>
                        {testimonial.name}
                      </p>
                      <p className="text-sm" style={{ color: "#626E73" }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 relative overflow-hidden transition-colors duration-[1200ms] border-b-2 border-[#1A0905]" style={{ backgroundColor: "#ede9da" }}>
        {/* Decorative geometric shapes */}
        <div
          className="absolute top-10 right-0 w-40 h-40"
          style={{
            backgroundColor: "#D9D7CC",
            opacity: 0.3,
            clipPath:
              "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />
        <div className="absolute bottom-10 left-0 w-32 h-32 bg-[#626E73] opacity-10 rotate-45" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-editorial-serif font-semibold mb-4" style={{ color: "#1A0905" }}>
              Why Join Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_0px_rgba(26,9,5,0.8)] transition-all duration-700 relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#0A1926] opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#D9D7CC" }}
                >
                  <Globe
                    className="w-8 h-8"
                    style={{ color: "#0A1926" }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#0A1926" }}
                >
                  Global Community
                </h3>
                <p style={{ color: "#626E73" }}>
                  Connect with students from around the world,
                  gain new perspectives, and learn in a truly
                  international environment.
                </p>
              </div>
            </Card>

            <Card className="p-6 text-center rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_0px_rgba(26,9,5,0.8)] transition-all duration-700 relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#0A1926] opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#D9D7CC" }}
                >
                  <Handshake
                    className="w-8 h-8"
                    style={{ color: "#0A1926" }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#0A1926" }}
                >
                  Meaningful Collaboration
                </h3>
                <p style={{ color: "#626E73" }}>
                  Work with peers and partner organizations on
                  projects that create real educational impact.
                </p>
              </div>
            </Card>

            <Card className="p-6 text-center rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_0px_rgba(26,9,5,0.8)] transition-all duration-700 relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#0A1926] opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#D9D7CC" }}
                >
                  <FileText
                    className="w-8 h-8"
                    style={{ color: "#0A1926" }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#0A1926" }}
                >
                  Free Learning Resources
                </h3>
                <p style={{ color: "#626E73" }}>
                  Access high-quality, student-driven
                  educational content at no cost — driven by
                  curiosity, not curriculum limits.
                </p>
              </div>
            </Card>

            <Card className="p-6 text-center rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_0px_rgba(26,9,5,0.8)] transition-all duration-700 relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#0A1926] opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#D9D7CC" }}
                >
                  <Sparkles
                    className="w-8 h-8"
                    style={{ color: "#0A1926" }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#0A1926" }}
                >
                  Leadership & Growth
                </h3>
                <p style={{ color: "#626E73" }}>
                  Develop leadership skills, earn volunteer
                  hours, and strengthen your academic and
                  personal profile.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section id="collaborate" className="py-20 transition-colors duration-[1200ms]" style={{ backgroundColor: "#E3DFCE" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-editorial-serif font-semibold mb-6" style={{ color: "#1A0905" }}>
                Contact/Collaborate with Us
              </h2>
              <p
                className="text-lg mb-6"
                style={{ color: "#1A0905" }}
              >
                At AnithUncommon, we believe impact grows
                through collaboration. Whether you're an
                individual, student group, or organization,
                we're always open to working with those who
                share our values and vision for accessible
                education.
              </p>
            </div>

            {/* Contact Form */}
            <Card className="p-8 md:p-12 rounded-[30px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[10px_10px_0px_rgba(26,9,5,0.78)]">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(
                    e.currentTarget,
                  );
                  const firstName = formData.get("firstName");
                  const lastName = formData.get("lastName");
                  const email = formData.get("email");
                  const message = formData.get("message");

                  // Create mailto link with form data
                  const mailtoLink = `mailto:anithuncommon@gmail.com?subject=Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#0A1926" }}
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-[#1A0905] focus:outline-none transition-colors"
                      style={{ backgroundColor: "#ede9da" }}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#0A1926" }}
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-2xl border-2 border-[#1A0905] focus:outline-none transition-colors"
                      style={{ backgroundColor: "#ede9da" }}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#0A1926" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[#1A0905] focus:outline-none transition-colors"
                    style={{ backgroundColor: "#ede9da" }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#0A1926" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[#1A0905] focus:outline-none transition-colors resize-none"
                    style={{ backgroundColor: "#ede9da" }}
                    placeholder="Tell us about yourself and your ideas for collaboration..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg rounded-full border-2 border-[#1A0905]"
                  style={{
                    backgroundColor: "#4C050C",
                    color: "#E3DFCE",
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <div
                className="mt-8 pt-8 border-t"
                style={{ borderColor: "#D9D7CC" }}
              >
                <p
                  className="text-center mb-4"
                  style={{ color: "#626E73" }}
                >
                  Or reach out directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-2 border-[#1A0905] rounded-full"
                    style={{
                      backgroundColor: "#94B1C8",
                      color: "#1A0905",
                    }}
                    onClick={() =>
                      (window.location.href =
                        "mailto:anithuncommon@gmail.com")
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    anithuncommon@gmail.com
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-[#1A0905] rounded-full"
                    style={{
                      backgroundColor: "#94B1C8",
                      color: "#1A0905",
                    }}
                    onClick={() =>
                      window.open(
                        "https://instagram.com/anithuncommon",
                        "_blank",
                      )
                    }
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    @anithuncommon
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Now Section - Links to Join Us page */}
      <section
        className="py-20 relative overflow-hidden transition-colors duration-[1200ms]"
        style={{ backgroundColor: "#ede9da" }}
      >
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#0A1926] opacity-5 rounded-full" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#626E73] opacity-5 rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#1A0905] shadow-[3px_3px_0px_rgba(26,9,5,0.28)]" style={{ backgroundColor: "#94B1C8" }}>
              <span
                className="text-xs tracking-[0.22em] font-semibold"
                style={{ color: "#1A0905" }}
              >
                JOIN OUR COMMUNITY
              </span>
            </div>
            <p
              className="text-xl max-w-2xl mx-auto mb-8"
              style={{ color: "#1A0905" }}
            >
              Join our global community of student educators and
              help make education accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Card
              className="p-8 rounded-[28px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.76)] hover:shadow-[11px_11px_0px_rgba(26,9,5,0.76)] transition-all duration-700 cursor-pointer group relative overflow-hidden"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdR1Hxmx7tRA4PcqC0q6HKLW8yjMR6AIEwXHrogZCkwGgy1Hg/viewform?pli=1",
                  "_blank",
                )
              }
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A1926] opacity-0 group-hover:opacity-5 rounded-full transition-opacity" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#0A1926" }}
                >
                  <Users
                    className="w-8 h-8"
                    style={{ color: "#D9D7CC" }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#0A1926" }}
                >
                  Become a Member
                </h3>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "#626E73" }}
                >
                  Join our core team and contribute to
                  curriculum development, mentorship, and
                  building a global educational community.
                </p>
                <div
                  className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                  style={{ color: "#0A1926" }}
                >
                  Apply Now
                  <FileText className="w-4 h-4" />
                </div>
              </div>
            </Card>

            <Card
              className="p-8 rounded-[28px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.76)] hover:shadow-[11px_11px_0px_rgba(26,9,5,0.76)] transition-all duration-700 cursor-pointer group relative overflow-hidden"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSehxqBfkhZjxUkXtYzg4JRYpWJguRFgEjdeP3UeV9PTCgJr-Q/viewform",
                  "_blank",
                )
              }
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#626E73] opacity-0 group-hover:opacity-5 rounded-full transition-opacity" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#626E73" }}
                >
                  <Sparkles
                    className="w-8 h-8"
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#0A1926" }}
                >
                  Speaker/Volunteer
                </h3>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "#626E73" }}
                >
                  Share your expertise through workshops and
                  mentoring, or support our initiatives with
                  flexible volunteer opportunities.
                </p>
                <div
                  className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                  style={{ color: "#0A1926" }}
                >
                  Apply Now
                  <FileText className="w-4 h-4" />
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-lg px-8 rounded-full border-2 border-[#1A0905]"
              style={{
                backgroundColor: "#4C050C",
                color: "#E3DFCE",
              }}
              onClick={handleGoToJoinUs}
            >
              View All Opportunities
              <FileText className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 transition-colors duration-[1200ms] relative overflow-hidden"
        style={{ backgroundColor: "#1A0905" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148, 177, 200, 0.4) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 items-start lg:[&>*]:w-full pb-10">

            <div className="text-left space-y-4">
              <h3
                className="text-xs font-semibold tracking-[0.14em] uppercase"
                style={{ color: "#E3DFCE" }}
              >
                Directory
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <button
                  onClick={() => scrollToSection("about")}
                  className="transition-colors text-left sm:text-left text-center"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("subjects")}
                  className="transition-colors text-left sm:text-left text-center"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  Subjects
                </button>
                <button
                  onClick={() => scrollToSection("collaborate")}
                  className="transition-colors text-left sm:text-left text-center"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  Collaborate
                </button>
                <button
                  onClick={handleGoToTeam}
                  className="transition-colors text-left sm:text-left text-center"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  Our Team
                </button>
                <button
                  onClick={handleGoToProgress}
                  className="transition-colors text-left sm:text-left text-center"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  Student Progress
                </button>
                <button
                  onClick={handleGoToFaq}
                  className="transition-colors text-left sm:text-left text-center"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  FAQ
                </button>
              </div>
            </div>

            <div className="text-left space-y-4">
              <h3
                className="text-xs font-semibold tracking-[0.14em] uppercase"
                style={{ color: "#E3DFCE" }}
              >
                Get In Touch
              </h3>
              <p className="text-sm" style={{ color: "#94B1C8" }}>
                anithuncommon@gmail.com
              </p>
              <Button
                className="w-full sm:w-auto rounded-full border-2 border-[#94B1C8]"
                style={{
                  backgroundColor: "#4C050C",
                  color: "#E3DFCE",
                }}
                onClick={() =>
                  (window.location.href =
                    "mailto:anithuncommon@gmail.com")
                }
              >
                Contact
              </Button>
            </div>

            <div className="text-left space-y-4">
              <h3
                className="text-xs font-semibold tracking-[0.14em] uppercase"
                style={{ color: "#E3DFCE" }}
              >
                Join Our Newsletter
              </h3>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("newsletterName");
                  const email = formData.get("newsletterEmail");
                  const mailtoLink = `mailto:anithuncommon@gmail.com?subject=Newsletter Signup&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}`)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <input
                  type="text"
                  name="newsletterName"
                  required
                  placeholder="First Name"
                  className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none"
                  style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                />
                <input
                  type="email"
                  name="newsletterEmail"
                  required
                  placeholder="Email"
                  className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none"
                  style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                />
                <Button
                  type="submit"
                  className="w-full rounded-full border-2 border-[#94B1C8]"
                  style={{
                    backgroundColor: "#4C050C",
                    color: "#E3DFCE",
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>

            <div className="text-left lg:text-right space-y-4 lg:justify-self-end">
              <div className="flex items-center justify-start lg:justify-end gap-3 mb-5">
                <a
                  href="https://instagram.com/anithuncommon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linktr.ee/anithuncommon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  <TreePine className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/anith-uncommon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: "#94B1C8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E3DFCE")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94B1C8")
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              <div>
                <h3
                  className="text-xs font-semibold tracking-[0.14em] uppercase mb-2"
                  style={{ color: "#E3DFCE" }}
                >
                  Colophon
                </h3>
                <p className="text-sm" style={{ color: "#94B1C8" }}>
                  Designed by
                </p>
                <p className="text-sm" style={{ color: "#94B1C8" }}>
                  Ximena Clímaco
                </p>
                <p className="text-sm mb-2" style={{ color: "#94B1C8" }}>
                  Amr Shaikh
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t"
          style={{ borderColor: "rgba(161, 166, 165, 0.2)" }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
            <p className="text-center md:text-left" style={{ color: "#94B1C8" }}>
              © AnithUncommon. Empowering students beyond the
              classroom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}