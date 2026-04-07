import { useState } from "react";
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
  BookOpen,
  Users,
  Globe,
  Handshake,
  FileText,
  Sparkles,
  Instagram,
  Mail,
  Menu,
  X,
  ChevronDown,
  Lock,
} from "lucide-react";
import {
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

export default function App() {
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
        "Savera Sidhu",
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

  const handleExploreSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentPage("subject");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedSubject(null);
    setSelectedTopic(null);
    setSelectedMentor(null);
    setMobileMenuOpen(false);
  };

  const handleGoToTeam = () => {
    setCurrentPage("team");
    setMobileMenuOpen(false);
  };

  const handleGoToJoinUs = () => {
    setCurrentPage("joinus");
    setMobileMenuOpen(false);
  };

  const handleGoToMentor = (mentorName: string) => {
    const mentor = getMentorByName(mentorName);
    if (mentor) {
      setSelectedMentor(mentor);
      setCurrentPage("mentor");
    }
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (currentPage === "team") {
    return <MeetOurTeam onBack={handleBackToHome} />;
  }

  if (currentPage === "joinus") {
    return <JoinUs onBack={handleBackToHome} />;
  }

  if (currentPage === "faq") {
    return <FAQ onBack={handleBackToHome} />;
  }

  if (currentPage === "progress") {
    return <StudentProgress onBack={handleBackToHome} />;
  }

  if (selectedMentor && currentPage === "mentor") {
    return (
      <MentorProfile
        mentor={selectedMentor}
        onBack={() => {
          setSelectedMentor(null);
          setCurrentPage("home");
        }}
      />
    );
  }

  if (selectedTopic && selectedSubject) {
    return (
      <div className="min-h-screen bg-white">
        <header
          className="bg-white shadow-sm sticky top-0 z-50"
          style={{
            borderBottom: "1px solid rgba(98, 110, 115, 0.2)",
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleBackToHome}
            >
              <GraduationCap
                className="w-8 h-8"
                style={{ color: "#0A1926" }}
              />
              <span
                className="text-xl font-bold"
                style={{ color: "#0A1926" }}
              >
                AnithUncommon
              </span>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <TopicDetail
            subject={selectedSubject.title}
            topic={selectedTopic}
            onBack={() => setSelectedTopic(null)}
          />
        </main>
      </div>
    );
  }

  if (selectedSubject && currentPage === "subject") {
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
      <div className="min-h-screen bg-white">
        <header
          className="bg-white shadow-sm sticky top-0 z-50"
          style={{
            borderBottom: "1px solid rgba(98, 110, 115, 0.2)",
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleBackToHome}
            >
              <GraduationCap
                className="w-8 h-8"
                style={{ color: "#0A1926" }}
              />
              <span
                className="text-xl font-bold"
                style={{ color: "#0A1926" }}
              >
                AnithUncommon
              </span>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="mb-6"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Subjects
          </Button>

          <div className="mb-8">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#0A1926" }}
            >
              {selectedSubject.title}
            </h1>
            <p className="text-xl" style={{ color: "#626E73" }}>
              {selectedSubject.description}
            </p>
          </div>

          {selectedSubject.chapters &&
          selectedSubject.chapters.length > 0 ? (
            <div className="space-y-6 max-w-3xl">
              {/* Group chapters by mentor */}
              {(() => {
                const mentorGroups: {
                  [key: string]: Chapter[];
                } = {};
                selectedSubject.chapters.forEach((chapter) => {
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
                            className="overflow-hidden"
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
                <Card className="mt-8 p-6">
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
              {selectedSubject.topics.map((topic) => (
                <Card
                  key={topic}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
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
    <div className="min-h-screen bg-white">
      {/* Decorative background elements */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#D9D7CC] opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#0B1F26] opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header
        className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50"
        style={{
          borderBottom: "1px solid rgba(98, 110, 115, 0.2)",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap
                className="w-8 h-8"
                style={{ color: "#0A1926" }}
              />
              <span
                className="text-xl font-bold"
                style={{ color: "#0A1926" }}
              >
                AnithUncommon
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className="transition-colors"
                style={{ color: "#626E73" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#0A1926")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#626E73")
                }
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("subjects")}
                className="transition-colors"
                style={{ color: "#626E73" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#0A1926")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#626E73")
                }
              >
                Subjects
              </button>
              <button
                onClick={handleGoToTeam}
                className="transition-colors"
                style={{ color: "#626E73" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#0A1926")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#626E73")
                }
              >
                Our Team
              </button>
              <button
                onClick={() => setCurrentPage("faq")}
                className="transition-colors"
                style={{ color: "#626E73" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#0A1926")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#626E73")
                }
              >
                FAQ
              </button>
              <button
                onClick={() => setCurrentPage("progress")}
                className="transition-colors"
                style={{ color: "#626E73" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#0A1926")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#626E73")
                }
              >
                Student Progress
              </button>
              <button
                onClick={() => scrollToSection("collaborate")}
                className="transition-colors"
                style={{ color: "#626E73" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#0A1926")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#626E73")
                }
              >
                Collaborate
              </button>
              {isLoggedIn ? (
                <Button
                  size="sm"
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem(
                      "anithuncommon_user",
                    );
                  }}
                  variant="outline"
                  style={{
                    borderColor: "#0A1926",
                    color: "#0A1926",
                  }}
                >
                  Sign Out
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => setShowLoginModal(true)}
                  variant="outline"
                  style={{
                    borderColor: "#0A1926",
                    color: "#0A1926",
                  }}
                >
                  Sign In
                </Button>
              )}
              <Button
                size="sm"
                onClick={handleGoToJoinUs}
                style={{
                  backgroundColor: "#0A1926",
                  color: "#D9D7CC",
                }}
              >
                Join Us
              </Button>
            </nav>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left"
                style={{ color: "#626E73" }}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("subjects")}
                className="text-left"
                style={{ color: "#626E73" }}
              >
                Subjects
              </button>
              <button
                onClick={handleGoToTeam}
                className="text-left"
                style={{ color: "#626E73" }}
              >
                Our Team
              </button>
              <button
                onClick={() => {
                  setCurrentPage("faq");
                  setMobileMenuOpen(false);
                }}
                className="text-left"
                style={{ color: "#626E73" }}
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  setCurrentPage("progress");
                  setMobileMenuOpen(false);
                }}
                className="text-left"
                style={{ color: "#626E73" }}
              >
                Student Progress
              </button>
              <button
                onClick={() => scrollToSection("collaborate")}
                className="text-left"
                style={{ color: "#626E73" }}
              >
                Collaborate
              </button>
              {isLoggedIn ? (
                <Button
                  size="sm"
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem(
                      "anithuncommon_user",
                    );
                  }}
                  variant="outline"
                  className="w-full"
                  style={{
                    borderColor: "#0A1926",
                    color: "#0A1926",
                  }}
                >
                  Sign Out
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => setShowLoginModal(true)}
                  variant="outline"
                  className="w-full"
                  style={{
                    borderColor: "#0A1926",
                    color: "#0A1926",
                  }}
                >
                  Sign In
                </Button>
              )}
              <Button
                size="sm"
                onClick={handleGoToJoinUs}
                className="w-full"
                style={{
                  backgroundColor: "#0A1926",
                  color: "#D9D7CC",
                }}
              >
                Join Us
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A1926 0%, #0B1F26 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-10 right-20 w-32 h-32 border-2 rounded-full opacity-20"
          style={{ borderColor: "#D9D7CC" }}
        />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 border-2 rounded-full opacity-10"
          style={{ borderColor: "#A1A6A5" }}
        />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-[#626E73] opacity-10 rounded-full blur-xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Small decorative line */}
            <div
              className="w-16 h-1 mx-auto mb-6"
              style={{ backgroundColor: "#D9D7CC" }}
            />

            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "#D9D7CC" }}
            >
              Empowering Students Beyond the Classroom
            </h1>
            <p
              className="text-xl mb-8"
              style={{ color: "#A1A6A5" }}
            >
              Student-run. Non-profit. Global. We believe
              education should not be limited by school systems,
              geography, or access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg"
                style={{
                  backgroundColor: "#D9D7CC",
                  color: "#0A1926",
                }}
                onClick={() => scrollToSection("subjects")}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Subjects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-2"
                style={{
                  borderColor: "#D9D7CC",
                  color: "#D9D7CC",
                  backgroundColor: "transparent",
                }}
                onClick={handleGoToJoinUs}
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>

            {/* Decorative geometric shapes */}
            <div className="mt-12 flex justify-center gap-6">
              <div
                className="w-8 h-8 rotate-45"
                style={{
                  backgroundColor: "#D9D7CC",
                  opacity: 0.3,
                }}
              />
              <div
                className="w-8 h-8 rounded-full border-2"
                style={{ borderColor: "#A1A6A5", opacity: 0.4 }}
              />
              <div
                className="w-8 h-8"
                style={{
                  backgroundColor: "#626E73",
                  opacity: 0.3,
                  clipPath:
                    "polygon(50% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#0A1926] opacity-5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: "#D9D7CC" }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#0A1926" }}
                >
                  ABOUT US
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#0A1926" }}
              >
                Our Story
              </h2>
              <div
                className="w-20 h-1 mx-auto"
                style={{ backgroundColor: "#626E73" }}
              />
            </div>

            <Card className="p-8 md:p-12 shadow-xl relative overflow-hidden mb-8">
              {/* Decorative corner element */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-[#0A1926] opacity-5"
                style={{
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                }}
              />

              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#626E73" }}
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
                style={{ color: "#626E73" }}
              >
                Many students are forced to study subjects they
                don't enjoy, simply because they have no other
                options. We wanted to change that.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#626E73" }}
              >
                AnithUncommon exists to reduce educational
                inequality by giving students access to subjects
                their schools don't offer. We act as a bridge to
                learning what students actually want to learn.
                In AnithUncommon, we turn the Uncommon into the
                Common. A community built by students for
                students.
              </p>

              {/* Decorative geometric accents */}
              <div className="mt-8 flex justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full"
                  style={{
                    backgroundColor: "#0A1926",
                    opacity: 0.1,
                  }}
                />
                <div
                  className="w-12 h-12 rotate-45"
                  style={{
                    backgroundColor: "#626E73",
                    opacity: 0.1,
                  }}
                />
                <div
                  className="w-12 h-12"
                  style={{
                    backgroundColor: "#D9D7CC",
                    opacity: 0.2,
                    clipPath:
                      "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                />
              </div>
            </Card>

            {/* Mission and Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#0A1926" }}
                >
                  Our Mission
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "#626E73" }}
                >
                  To empower and support students throughout
                  their individual learning journeys through
                  mentorship, high-quality resources, and a
                  supportive global community — so no one has to
                  navigate growth alone.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#0A1926" }}
                >
                  Our Vision
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "#626E73" }}
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

      {/* Subjects Section */}
      <section
        id="subjects"
        className="py-20"
        style={{ backgroundColor: "#F9F9F7" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div
              className="inline-block px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: "#0A1926" }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: "#D9D7CC" }}
              >
                OUR SUBJECTS
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#0A1926" }}
            >
              Our Subjects
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "#626E73" }}
            >
              Explore topics that spark your curiosity. All
              taught by students, for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div
                key={subject.id}
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 relative overflow-hidden">
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
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#0A1926" }}
            >
              Why Join Us
            </h2>
            <div
              className="w-20 h-1 mx-auto"
              style={{ backgroundColor: "#626E73" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-xl transition-all relative group overflow-hidden">
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

            <Card className="p-6 text-center hover:shadow-xl transition-all relative group overflow-hidden">
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

            <Card className="p-6 text-center hover:shadow-xl transition-all relative group overflow-hidden">
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

            <Card className="p-6 text-center hover:shadow-xl transition-all relative group overflow-hidden">
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
      <section
        id="collaborate"
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #0B1F26 0%, #0A1926 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#D9D7CC" }}
              >
                Contact/Collaborate with Us
              </h2>
              <div
                className="w-20 h-1 mx-auto mb-8"
                style={{ backgroundColor: "#A1A6A5" }}
              />
              <p
                className="text-lg mb-6"
                style={{ color: "#A1A6A5" }}
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
            <Card className="p-8 md:p-12">
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
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-[#0A1926] transition-colors"
                      style={{ borderColor: "#D9D7CC" }}
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
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-[#0A1926] transition-colors"
                      style={{ borderColor: "#D9D7CC" }}
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
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-[#0A1926] transition-colors"
                    style={{ borderColor: "#D9D7CC" }}
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
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-[#0A1926] transition-colors resize-none"
                    style={{ borderColor: "#D9D7CC" }}
                    placeholder="Tell us about yourself and your ideas for collaboration..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg"
                  style={{
                    backgroundColor: "#D9D7CC",
                    color: "#0A1926",
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
                    className="border-2"
                    style={{
                      borderColor: "#0A1926",
                      color: "#0A1926",
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
                    className="border-2"
                    style={{
                      borderColor: "#0A1926",
                      color: "#0A1926",
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
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#F9F9F7" }}
      >
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#0A1926] opacity-5 rounded-full" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#626E73] opacity-5 rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div
              className="inline-block px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: "#0A1926" }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: "#D9D7CC" }}
              >
                JOIN OUR COMMUNITY
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#0A1926" }}
            >
              Ready to Make a Difference?
            </h2>
            <div
              className="w-20 h-1 mx-auto mb-6"
              style={{ backgroundColor: "#626E73" }}
            />
            <p
              className="text-xl max-w-2xl mx-auto mb-8"
              style={{ color: "#626E73" }}
            >
              Join our global community of student educators and
              help make education accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Card
              className="p-8 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
              onClick={handleGoToJoinUs}
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
              className="p-8 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
              onClick={handleGoToJoinUs}
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
              className="text-lg px-8"
              style={{
                backgroundColor: "#0A1926",
                color: "#D9D7CC",
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
        className="py-12"
        style={{ backgroundColor: "#0A1926" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap
                className="w-8 h-8"
                style={{ color: "#D9D7CC" }}
              />
              <span
                className="text-2xl font-bold"
                style={{ color: "#D9D7CC" }}
              >
                AnithUncommon
              </span>
            </div>
            <p className="mb-2" style={{ color: "#A1A6A5" }}>
              Student-run | Non-profit | Global
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <a
                href="mailto:anithuncommon@gmail.com"
                className="flex items-center gap-2 transition-colors"
                style={{ color: "#A1A6A5" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#D9D7CC")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#A1A6A5")
                }
              >
                <Mail className="w-4 h-4" />
                <span>anithuncommon@gmail.com</span>
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Globe
                  className="w-4 h-4"
                  style={{ color: "#A1A6A5" }}
                />
                <span style={{ color: "#A1A6A5" }}>
                  Connect with us:
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://instagram.com/anithuncommon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors"
                  style={{ color: "#A1A6A5" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D9D7CC")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#A1A6A5")
                  }
                >
                  <Instagram className="w-4 h-4" />
                  <span>@anithuncommon</span>
                </a>
                <a
                  href="https://linktr.ee/anithuncommon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors"
                  style={{ color: "#A1A6A5" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D9D7CC")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#A1A6A5")
                  }
                >
                  <Globe className="w-4 h-4" />
                  <span>Linktree</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/anith-uncommon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors"
                  style={{ color: "#A1A6A5" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D9D7CC")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#A1A6A5")
                  }
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="border-t pt-6 text-center"
            style={{ borderColor: "rgba(161, 166, 165, 0.2)" }}
          >
            <p style={{ color: "#626E73" }}>
              © AnithUncommon. Empowering students beyond the
              classroom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}