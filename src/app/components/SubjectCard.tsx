import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { BookOpen, ArrowRight, Users } from "lucide-react";

interface SubjectCardProps {
  title: string;
  description: string;
  image: string;
  topics: string[];
  color: string;
  mentors?: string[];
  onExplore: () => void;
  onMentorClick?: (mentorName: string) => void;
}

export function SubjectCard({ title, description, image, topics, color, mentors, onExplore, onMentorClick }: SubjectCardProps) {
  return (
    <Card className="overflow-hidden rounded-3xl border-0 bg-[#f6f3e9] shadow-[0_16px_40px_-28px_rgba(10, 27, 43, 0.45)] hover:shadow-[0_24px_48px_-30px_rgba(10, 27, 43, 0.55)] transition-all duration-700 group relative">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b2b]/70 via-[#0a1b2b]/20 to-transparent" />
        <h3 className="absolute bottom-5 left-5 text-[#cedae3] text-4xl font-semibold font-editorial-serif tracking-wide">{title}</h3>
      </div>
      
      <div className="p-7 relative">
        <p className="mb-5 leading-relaxed font-editorial-sans" style={{ color: '#0a1b2b' }}>{description}</p>
        
        {mentors && mentors.length > 0 && (
          <div className="mb-5 p-4 rounded-2xl bg-[#FFF9FB] shadow-inner">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4" style={{ color: '#0a1b2b' }} />
              <span className="text-sm font-semibold font-editorial-sans" style={{ color: '#0a1b2b' }}>Mentor Offerings</span>
            </div>
            <p className="text-xs mb-3 italic font-editorial-sans" style={{ color: '#0a1b2b' }}>
              Click on mentor names to view their profiles, resources & curriculum
            </p>
            <div className="flex flex-wrap gap-2">
              {mentors.map((mentor, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1.5 rounded-full cursor-pointer transition-all duration-500 hover:scale-[1.03] flex items-center gap-1 font-editorial-sans"
                  style={{ backgroundColor: '#94B1C8', color: '#0a1b2b' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onMentorClick && onMentorClick(mentor);
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0a1b2b'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#94B1C8'}
                  onMouseOver={(e) => e.currentTarget.style.color = '#cedae3'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#0a1b2b'}
                >
                  {mentor}
                  <ArrowRight className="w-3 h-3 ml-0.5" />
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4" style={{ color: '#0a1b2b' }} />
            <span className="text-sm font-medium font-editorial-sans" style={{ color: '#0a1b2b' }}>Topics Available:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.slice(0, 4).map((topic, index) => (
              <Badge key={index} className={`${color} border-0 font-editorial-sans`}>
                {topic}
              </Badge>
            ))}
            {topics.length > 4 && (
              <Badge variant="outline" className="font-editorial-sans" style={{ borderColor: '#94B1C8', color: '#0a1b2b' }}>+{topics.length - 4} more</Badge>
            )}
          </div>
        </div>
        
        <Button 
          onClick={onExplore} 
          className="w-full group/btn transition-all duration-500 rounded-2xl py-5 font-editorial-sans"
          style={{ backgroundColor: '#0a1b2b', color: '#cedae3' }}
        >
          Explore Subject
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}


