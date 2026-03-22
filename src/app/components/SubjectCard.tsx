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
  mentors?: string[]; // Add mentors prop
  onExplore: () => void;
}

export function SubjectCard({ title, description, image, topics, color, mentors, onExplore }: SubjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group relative">
      {/* Decorative geometric element */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-[#D9D7CC] opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity" />
      
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10, 25, 38, 0.9), transparent)' }} />
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#D9D7CC] opacity-20" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
        
        <h3 className="absolute bottom-4 left-4 text-white text-3xl font-bold">{title}</h3>
      </div>
      
      <div className="p-6 relative">
        <p className="mb-4 leading-relaxed" style={{ color: '#626E73' }}>{description}</p>
        
        {/* Mentors Section */}
        {mentors && mentors.length > 0 && (
          <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#F9F9F7' }}>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4" style={{ color: '#0A1926' }} />
              <span className="text-sm font-medium" style={{ color: '#0A1926' }}>Mentors:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {mentors.map((mentor, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: '#D9D7CC', color: '#0A1926' }}
                >
                  {mentor}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4" style={{ color: '#626E73' }} />
            <span className="text-sm font-medium" style={{ color: '#0A1926' }}>Topics Available:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.slice(0, 4).map((topic, index) => (
              <Badge key={index} className={`${color} border-0`}>
                {topic}
              </Badge>
            ))}
            {topics.length > 4 && (
              <Badge variant="outline" style={{ borderColor: '#626E73', color: '#626E73' }}>+{topics.length - 4} more</Badge>
            )}
          </div>
        </div>
        
        <Button 
          onClick={onExplore} 
          className="w-full group/btn transition-all"
          style={{ backgroundColor: '#0A1926', color: '#D9D7CC' }}
        >
          Explore Subject
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
        
        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A1926] via-[#626E73] to-[#D9D7CC] opacity-30" />
      </div>
    </Card>
  );
}