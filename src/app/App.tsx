import { useState } from "react";
import { SubjectCard } from "@/app/components/SubjectCard";
import { TopicDetail } from "@/app/components/TopicDetail";
import { MeetOurTeam } from "@/app/components/MeetOurTeam";
import { JoinUs } from "@/app/components/JoinUs";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { GraduationCap, BookOpen, Users, Globe, Handshake, FileText, Sparkles, Instagram, Mail, Menu, X } from "lucide-react";

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
  topicsData: { [key: string]: Topic };
}

type Page = 'home' | 'team' | 'subject' | 'topic';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const subjects: Subject[] = [
  {
    id: "mathematics",
    title: "Mathematics",
    description: "Explore algebra, geometry, calculus...",
    image: "...",
    topics: ["Algebra", "Geometry", "Calculus"],
    mentors: ["Trista", "Kenneth Viorenzo"],
    color: "bg-[#0B1F26] text-[#D9D7CC]",
    topicsData: {}
  },
  {
    id: "english-literature",
    title: "English Literature",
    description: "Analyze novels, poetry...",
    image: "...",
    topics: ["Poetry", "Novels"],
    mentors: ["Ishraq", "Ojas Dhaundiyal"],
    color: "bg-[#A1A6A5] text-[#0A1926]",
    topicsData: {}
  },
  {
    id: "biology",
    title: "Biology",
    description: "Study living organisms...",
    image: "...",
    topics: ["Genetics", "Cells"],
    mentors: ["Yassmin Mahmoud", "Avighnaa Ramesh"],
    color: "bg-[#0B1F26] text-[#D9D7CC]",
    topicsData: {}
  },
  {
    id: "physics",
    title: "Physics",
    description: "Understand motion...",
    image: "...",
    topics: ["Mechanics"],
    mentors: ["Kenneth Viorenzo", "Avighnaa Ramesh"],
    color: "bg-[#A1A6A5] text-[#0A1926]",
    topicsData: {}
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description: "Understand matter...",
    image: "...",
    topics: ["Reactions"],
    mentors: ["Avighnaa Ramesh"],
    color: "bg-[#0A1926] text-[#D9D7CC]",
    topicsData: {}
  },

  /* HUMANITIES */

  {
    id: "history",
    title: "History",
    description: "Explore global events...",
    image: "...",
    topics: ["World History"],
    mentors: ["Savera Sidhu", "Martina Marqués"],
    color: "bg-[#D9D7CC] text-[#0A1926]",
    topicsData: {}
  },
  {
    id: "philosophy",
    title: "Philosophy",
    description: "Explore fundamental questions...",
    image: "...",
    topics: ["Ethics"],
    mentors: ["Ojas Dhaundiyal"],
    color: "bg-[#0B1F26] text-[#D9D7CC]",
    topicsData: {}
  },
  {
    id: "political-theory",
    title: "Political Theory",
    description: "Analyze political ideas...",
    image: "...",
    topics: ["Ideologies"],
    mentors: ["Martina Marqués"],
    color: "bg-[#0B1F26] text-[#D9D7CC]",
    topicsData: {}
  },
  {
    id: "economics",
    title: "Economics",
    description: "Understand systems...",
    image: "...",
    topics: ["Markets"],
    mentors: ["Martina Marqués"], // más lógico aquí que en math
    color: "bg-[#0A1926] text-[#D9D7CC]",
    topicsData: {}
  },

  /* MIXED / OPTIONAL */

  {
    id: "art-history",
    title: "Art History",
    description: "Study artistic movements...",
    image: "...",
    topics: ["Art"],
    mentors: ["Savera Sidhu"], // humanities general
    color: "bg-[#A1A6A5] text-[#0A1926]",
    topicsData: {}
  },
  {
    id: "criminology",
    title: "Criminology",
    description: "Study crime and justice...",
    image: "...",
    topics: ["Crime"],
    mentors: ["Martina Marqués"], // lo más cercano
    color: "bg-[#A1A6A5] text-[#0A1926]",
    topicsData: {}
  },
  {
    id: "physiology",
    title: "Physiology",
    description: "Understand body systems...",
    image: "...",
    topics: ["Organs"],
    mentors: ["Yassmin Mahmoud"],
    color: "bg-[#0A1926] text-[#D9D7CC]",
    topicsData: {}
  },
  {
    id: "geology",
    title: "Geology",
    description: "Study Earth systems...",
    image: "...",
    topics: ["Rocks"],
    mentors: ["Avighnaa Ramesh"], // STEM general
    color: "bg-[#D9D7CC] text-[#0A1926]",
    topicsData: {}
  }
];

  const handleExploreSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentPage('subject');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedSubject(null);
    setSelectedTopic(null);
    setMobileMenuOpen(false);
  };

  const handleGoToTeam = () => {
    setCurrentPage('team');
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentPage === 'team') {
    return <MeetOurTeam onBack={handleBackToHome} />;
  }

  if (selectedTopic && selectedSubject) {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-white shadow-sm sticky top-0 z-50" style={{ borderBottom: '1px solid rgba(98, 110, 115, 0.2)' }}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToHome}>
              <GraduationCap className="w-8 h-8" style={{ color: '#0A1926' }} />
              <span className="text-xl font-bold" style={{ color: '#0A1926' }}>AnithUncommon</span>
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

  if (selectedSubject && currentPage === 'subject') {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-white shadow-sm sticky top-0 z-50" style={{ borderBottom: '1px solid rgba(98, 110, 115, 0.2)' }}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToHome}>
              <GraduationCap className="w-8 h-8" style={{ color: '#0A1926' }} />
              <span className="text-xl font-bold" style={{ color: '#0A1926' }}>AnithUncommon</span>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={handleBackToHome}
            className="mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Subjects
          </Button>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#0A1926' }}>{selectedSubject.title}</h1>
            <p className="text-xl" style={{ color: '#626E73' }}>{selectedSubject.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedSubject.topics.map((topic) => (
              <Card 
                key={topic}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#626E73] transition-colors" style={{ color: '#0A1926' }}>
                  {topic}
                </h3>
                <p className="mb-4" style={{ color: '#626E73' }}>
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
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative background elements */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#D9D7CC] opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#0B1F26] opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50" style={{ borderBottom: '1px solid rgba(98, 110, 115, 0.2)' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8" style={{ color: '#0A1926' }} />
              <span className="text-xl font-bold" style={{ color: '#0A1926' }}>AnithUncommon</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="transition-colors" style={{ color: '#626E73' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0A1926'} onMouseLeave={(e) => e.currentTarget.style.color = '#626E73'}>
                About Us
              </button>
              <button onClick={() => scrollToSection('subjects')} className="transition-colors" style={{ color: '#626E73' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0A1926'} onMouseLeave={(e) => e.currentTarget.style.color = '#626E73'}>
                Subjects
              </button>
              <button onClick={handleGoToTeam} className="transition-colors" style={{ color: '#626E73' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0A1926'} onMouseLeave={(e) => e.currentTarget.style.color = '#626E73'}>
                Our Team
              </button>
              <button onClick={() => scrollToSection('collaborate')} className="transition-colors" style={{ color: '#626E73' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0A1926'} onMouseLeave={(e) => e.currentTarget.style.color = '#626E73'}>
                Collaborate
              </button>
              <Button size="sm" style={{ backgroundColor: '#0A1926', color: '#D9D7CC' }}>
                Join Us
              </Button>
            </nav>

            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection('about')} className="text-left" style={{ color: '#626E73' }}>
                About Us
              </button>
              <button onClick={() => scrollToSection('subjects')} className="text-left" style={{ color: '#626E73' }}>
                Subjects
              </button>
              <button onClick={handleGoToTeam} className="text-left" style={{ color: '#626E73' }}>
                Our Team
              </button>
              <button onClick={() => scrollToSection('collaborate')} className="text-left" style={{ color: '#626E73' }}>
                Collaborate
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1926 0%, #0B1F26 100%)' }}>
        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-32 h-32 border-2 rounded-full opacity-20" style={{ borderColor: '#D9D7CC' }} />
        <div className="absolute bottom-20 left-10 w-48 h-48 border-2 rounded-full opacity-10" style={{ borderColor: '#A1A6A5' }} />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-[#626E73] opacity-10 rounded-full blur-xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Small decorative line */}
            <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: '#D9D7CC' }} />
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#D9D7CC' }}>
              Empowering Students Beyond the Classroom
            </h1>
            <p className="text-xl mb-8" style={{ color: '#A1A6A5' }}>
              Student-run. Non-profit. Global. We believe education should not be limited by school systems, geography, or access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" style={{ backgroundColor: '#D9D7CC', color: '#0A1926' }}>
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Subjects
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2" style={{ borderColor: '#D9D7CC', color: '#D9D7CC', backgroundColor: 'transparent' }}>
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>

            {/* Decorative dots */}
            <div className="mt-12 flex justify-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9D7CC' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A1A6A5' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#626E73' }} />
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
              <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#D9D7CC' }}>
                <span className="text-sm font-semibold" style={{ color: '#0A1926' }}>ABOUT US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A1926' }}>
                Our Story
              </h2>
              <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#626E73' }} />
            </div>

            <Card className="p-8 md:p-12 shadow-xl relative overflow-hidden mb-8">
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A1926] opacity-5" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#626E73' }}>
                AnithUncommon is a youth-led, non-profit community based in Indonesia, founded in May 2025 by two students. 
                We noticed that while STEM subjects are widely available in schools, humanities subjects are often limited or missing entirely.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#626E73' }}>
                Many students are forced to study subjects they don't enjoy, simply because they have no other options. We wanted to change that.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#626E73' }}>
                AnithUncommon exists to reduce educational inequality by giving students access to subjects their schools don't offer. 
                We act as a bridge to learning what students actually want to learn. In AnithUncommon, we turn the Uncommon into the Common. 
                A community built by students for students.
              </p>

              {/* Decorative bottom accent */}
              <div className="mt-8 flex gap-2">
                <div className="flex-1 h-1" style={{ backgroundColor: '#0A1926' }} />
                <div className="flex-1 h-1" style={{ backgroundColor: '#626E73' }} />
                <div className="flex-1 h-1" style={{ backgroundColor: '#D9D7CC' }} />
              </div>
            </Card>

            {/* Mission and Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1926' }}>Our Mission</h3>
                <p className="leading-relaxed" style={{ color: '#626E73' }}>
                  To empower and support students throughout their individual learning journeys through mentorship, 
                  high-quality resources, and a supportive global community — so no one has to navigate growth alone.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A1926' }}>Our Vision</h3>
                <p className="leading-relaxed" style={{ color: '#626E73' }}>
                  Creating a digital environment where students can explore interests outside the traditional curriculum. 
                  Interests that are not widely or generally taught in classrooms will be taught here, expanding access to these topics.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-20" style={{ backgroundColor: '#F9F9F7' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#0A1926' }}>
              <span className="text-sm font-semibold" style={{ color: '#D9D7CC' }}>OUR SUBJECTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1926' }}>
              Our Subjects
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#626E73' }}>
              Explore topics that spark your curiosity. All taught by students, for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={subject.id} style={{ animationDelay: `${index * 100}ms` }}>
                <SubjectCard
                  title={subject.title}
                  description={subject.description}
                  image={subject.image}
                  topics={subject.topics}
                  color={subject.color}
                  onExplore={() => handleExploreSubject(subject)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative geometric shapes */}
        <div className="absolute top-10 right-0 w-40 h-40" style={{ backgroundColor: '#D9D7CC', opacity: 0.3, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        <div className="absolute bottom-10 left-0 w-32 h-32 bg-[#626E73] opacity-10 rotate-45" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1926' }}>
              Why Join Us
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#626E73' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-xl transition-all relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#0A1926] opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D9D7CC' }}>
                  <Globe className="w-8 h-8" style={{ color: '#0A1926' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0A1926' }}>Global Community</h3>
                <p style={{ color: '#626E73' }}>
                  Connect with students from around the world, gain new perspectives, and learn in a truly international environment.
                </p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#0A1926] opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D9D7CC' }}>
                  <Handshake className="w-8 h-8" style={{ color: '#0A1926' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0A1926' }}>Meaningful Collaboration</h3>
                <p style={{ color: '#626E73' }}>
                  Work with peers and partner organizations on projects that create real educational impact.
                </p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#0A1926] opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D9D7CC' }}>
                  <FileText className="w-8 h-8" style={{ color: '#0A1926' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0A1926' }}>Free Learning Resources</h3>
                <p style={{ color: '#626E73' }}>
                  Access high-quality, student-driven educational content at no cost — driven by curiosity, not curriculum limits.
                </p>
              </div>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#0A1926] opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D9D7CC' }}>
                  <Sparkles className="w-8 h-8" style={{ color: '#0A1926' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0A1926' }}>Leadership & Growth</h3>
                <p style={{ color: '#626E73' }}>
                  Develop leadership skills, earn volunteer hours, and strengthen your academic and personal profile.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section id="collaborate" className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F26 0%, #0A1926 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#D9D7CC' }}>
              Collaborate with Us
            </h2>
            <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: '#A1A6A5' }} />
            <p className="text-lg mb-6" style={{ color: '#A1A6A5' }}>
              At AnithUncommon, we believe impact grows through collaboration. Whether you're an individual, student group, or organization, we're always open to working with those who share our values and vision for accessible education.
            </p>
            <p className="text-lg mb-8" style={{ color: '#A1A6A5' }}>
              If you're interested in collaborating, reach out to us with:
            </p>
            <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#D9D7CC' }} />
                <span style={{ color: '#A1A6A5' }}>A short introduction of yourself or your organization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#D9D7CC' }} />
                <span style={{ color: '#A1A6A5' }}>Your ideas for collaboration</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg"
                style={{ backgroundColor: '#D9D7CC', color: '#0A1926' }}
                onClick={() => window.location.href = 'mailto:anithuncommon@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                anithuncommon@gmail.com
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg border-2"
                style={{ borderColor: '#D9D7CC', color: '#D9D7CC', backgroundColor: 'transparent' }}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Send us a DM
              </Button>
            </div>
            <p className="mt-6 text-sm" style={{ color: '#626E73' }}>
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Apply Now Section - Links to Join Us page */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F9F7' }}>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#0A1926] opacity-5 rounded-full" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#626E73] opacity-5 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#0A1926' }}>
              <span className="text-sm font-semibold" style={{ color: '#D9D7CC' }}>JOIN OUR COMMUNITY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0A1926' }}>
              Ready to Make a Difference?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#626E73' }} />
            <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: '#626E73' }}>
              Join our global community of student educators and help make education accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <Card className="p-8 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden" onClick={handleGoToJoinUs}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A1926] opacity-0 group-hover:opacity-5 rounded-full transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#0A1926' }}>
                  <Users className="w-8 h-8" style={{ color: '#D9D7CC' }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0A1926' }}>
                  Become a Member
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: '#626E73' }}>
                  Join our core team and contribute to curriculum development, mentorship, and building a global educational community.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: '#0A1926' }}>
                  Apply Now
                  <FileText className="w-4 h-4" />
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden" onClick={handleGoToJoinUs}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#626E73] opacity-0 group-hover:opacity-5 rounded-full transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#626E73' }}>
                  <Sparkles className="w-8 h-8" style={{ color: '#ffffff' }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0A1926' }}>
                  Speaker/Volunteer
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: '#626E73' }}>
                  Share your expertise through workshops and mentoring, or support our initiatives with flexible volunteer opportunities.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: '#0A1926' }}>
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
              style={{ backgroundColor: '#0A1926', color: '#D9D7CC' }}
              onClick={handleGoToJoinUs}
            >
              View All Opportunities
              <FileText className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#0A1926' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8" style={{ color: '#D9D7CC' }} />
              <span className="text-2xl font-bold" style={{ color: '#D9D7CC' }}>AnithUncommon</span>
            </div>
            <p className="mb-2" style={{ color: '#A1A6A5' }}>
              Student-run | Non-profit | Global
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <a href="mailto:anithuncommon@gmail.com" className="flex items-center gap-2 transition-colors" style={{ color: '#A1A6A5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#D9D7CC'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A6A5'}>
                <Mail className="w-4 h-4" />
                <span>anithuncommon@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Globe className="w-4 h-4" style={{ color: '#A1A6A5' }} />
              <span style={{ color: '#A1A6A5' }}>Follow us:</span>
              <a 
                href="https://instagram.com/anithuncommon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition-colors"
                style={{ color: '#A1A6A5' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D9D7CC'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#A1A6A5'}
              >
                <Instagram className="w-4 h-4" />
                <span>@anithuncommon</span>
              </a>
            </div>
          </div>

          <div className="border-t pt-6 text-center" style={{ borderColor: 'rgba(161, 166, 165, 0.2)' }}>
            <p style={{ color: '#626E73' }}>
              © AnithUncommon. Empowering students beyond the classroom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}