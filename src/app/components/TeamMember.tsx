import { Card } from "@/app/components/ui/card";
import { Mail, Linkedin, Globe } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
  colorAccent: string;
}

export function TeamMember({ name, role, image, bio, email, linkedin, colorAccent }: TeamMemberProps) {
  return (
    <div className="relative group">
      {/* Decorative geometric shapes */}
      <div className={`absolute -top-4 -right-4 w-24 h-24 ${colorAccent} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
      <div className={`absolute -bottom-4 -left-4 w-32 h-32 ${colorAccent} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
      
      <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
        {/* Decorative corner */}
        <div className={`absolute top-0 right-0 w-20 h-20 ${colorAccent} opacity-10`} 
             style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        
        <div className="p-6">
          <div className="relative mb-4">
            {/* Image container with geometric frame */}
            <div className="relative w-32 h-32 mx-auto">
              <div className={`absolute inset-0 ${colorAccent} opacity-20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform`} />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-1" style={{ color: '#0A1926' }}>{name}</h3>
            <p className="text-sm mb-3" style={{ color: '#626E73' }}>{role}</p>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: '#626E73' }}>{bio}</p>

            <div className="flex justify-center gap-3">
              {email && (
                <a 
                  href={`mailto:${email}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#D9D7CC' }}
                >
                  <Mail className="w-4 h-4" style={{ color: '#0A1926' }} />
                </a>
              )}
              {linkedin && (
                <a 
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#D9D7CC' }}
                >
                  <Linkedin className="w-4 h-4" style={{ color: '#0A1926' }} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className={`h-1 ${colorAccent} opacity-30`} />
      </Card>
    </div>
  );
}
