import { useState } from "react";
import { SubjectCard } from "@/app/components/SubjectCard";
import { TopicDetail } from "@/app/components/TopicDetail";
import { MeetOurTeam } from "@/app/components/MeetOurTeam";
import { JoinUs } from "@/app/components/JoinUs";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { GraduationCap, BookOpen, Users, Globe, Handshake, FileText, Sparkles, Instagram, Mail, Menu, X } from "lucide-react";

interface Topic { /* ...igual que antes... */ }
interface Subject { /* ...igual que antes... */ }
type Page = 'home' | 'team' | 'subject' | 'topic' | 'join-us';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const subjects: Subject[] = [ /* ...igual que antes... */ ];

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

  const handleGoToJoinUs = () => {
    setCurrentPage('join-us');
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  if (currentPage === 'team') return <MeetOurTeam onBack={handleBackToHome} />;
  if (currentPage === 'join-us') return <JoinUs onBack={handleBackToHome} />;

  if (selectedTopic && selectedSubject) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header y TopicDetail igual que antes */}
      </div>
    );
  }

  if (selectedSubject && currentPage === 'subject') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header y listado de topics igual que antes */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header, hero, about, subjects, why join us, collaborate */}

      <Button 
        size="lg" 
        className="text-lg px-8"
        style={{ backgroundColor: '#0A1926', color: '#D9D7CC' }}
        onClick={handleGoToJoinUs}
      >
        View All Opportunities
        <FileText className="w-5 h-5 ml-2" />
      </Button>

      {/* Footer igual que antes */}
    </div>
  );
}