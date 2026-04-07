import { Card } from "@/app/components/ui/card";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  country?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
  colorAccent: string;
}

export function TeamMember({ name, role, image, bio, country, linkedin, instagram, email, colorAccent }: TeamMemberProps) {
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
          {image && (
            <div className="relative mb-4">
              {/* Image container with geometric frame */}
              <div className="relative w-32 h-32 mx-auto">
                <div className={`absolute inset-0 ${colorAccent} opacity-20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform`} />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <ImageWithFallback 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <h3 className="text-xl font-bold mb-1" style={{ color: '#0A1926' }}>{name}</h3>
            <p className="text-sm mb-1" style={{ color: '#626E73' }}>{role}</p>
            {country && (
              <p className="text-xs mb-3" style={{ color: '#A1A6A5' }}>{country}</p>
            )}
            {bio && (
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#626E73' }}>{bio}</p>
            )}

            <div className="flex justify-center gap-3">
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
              {instagram && (
                <a 
                  href={instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#D9D7CC' }}
                >
                  <Instagram className="w-4 h-4" style={{ color: '#0A1926' }} />
                </a>
              )}
              {email && (
                <a 
                  href={`mailto:${email}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#D9D7CC' }}
                >
                  <Mail className="w-4 h-4" style={{ color: '#0A1926' }} />
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