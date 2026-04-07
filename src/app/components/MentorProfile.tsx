import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ArrowLeft, Mail, FileText, BookOpen } from "lucide-react";
import { type MentorData } from "@/app/data/mentors";

interface MentorProfileProps {
  mentor: MentorData;
  onBack: () => void;
}

export function MentorProfile({ mentor, onBack }: MentorProfileProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Decorative background shapes */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-[#D9D7CC] opacity-20 rounded-full blur-3xl" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-[#0B1F26] opacity-10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 hover:bg-[#D9D7CC]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl font-bold" style={{ backgroundColor: '#0A1926', color: '#D9D7CC' }}>
              {mentor.name.charAt(0).toUpperCase()}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A1926' }}>
              {mentor.name}
            </h1>
            <p className="text-xl mb-4" style={{ color: '#626E73' }}>
              {mentor.role}
            </p>
            {mentor.email && (
              <Button 
                variant="outline"
                onClick={() => window.location.href = `mailto:${mentor.email}`}
                className="border-2"
                style={{ borderColor: '#0A1926', color: '#0A1926' }}
              >
                <Mail className="w-4 h-4 mr-2" />
                {mentor.email}
              </Button>
            )}
          </div>

          {/* Subjects Section */}
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6" style={{ color: '#0A1926' }} />
              <h2 className="text-2xl font-bold" style={{ color: '#0A1926' }}>
                Teaching Subjects
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {mentor.subjects.map((subject, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#0A1926', color: '#D9D7CC' }}
                >
                  {subject}
                </span>
              ))}
            </div>
          </Card>

          {/* Bio Section */}
          {mentor.bio && (
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0A1926' }}>
                About
              </h2>
              <p className="leading-relaxed text-lg" style={{ color: '#626E73' }}>
                {mentor.bio}
              </p>
            </Card>
          )}

          {/* Resources Section - Always show placeholder */}
          <Card className="p-8 text-center" style={{ backgroundColor: '#F9F9F7' }}>
            <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: '#626E73', opacity: 0.5 }} />
            <p style={{ color: '#626E73' }}>
              Teaching resources coming soon!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}