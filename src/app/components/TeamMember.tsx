import { Card } from "@/app/components/ui/card";
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  country?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  email?: string;
  colorAccent: string;
}

export function TeamMember({ name, role, image, bio, country, linkedin, instagram, twitter, email, colorAccent: _colorAccent }: TeamMemberProps) {
  const resolveImagePath = (imagePath: string): string => {
    if (/^https?:\/\//i.test(imagePath)) {
      return imagePath;
    }

    const normalizedBase = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    const normalizedImagePath = imagePath.startsWith("/")
      ? imagePath.slice(1)
      : imagePath;

    return `${normalizedBase}${normalizedImagePath}`;
  };

  return (
    <div className="group h-full">
      <Card className="relative h-full overflow-hidden rounded-[24px] border-2 border-[#0a1b2b] bg-[#fff9fb] shadow-[8px_8px_0px_rgba(10, 27, 43, 0.52)] transition-all duration-500 hover:-translate-y-1">
        <div className="p-6 h-full flex flex-col">
          {image && (
            <div className="mb-5">
              <div className="relative w-32 h-32 mx-auto">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#0a1b2b] shadow-[4px_4px_0px_rgba(10, 27, 43, 0.45)]">
                  <ImageWithFallback 
                    src={resolveImagePath(image)} 
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="text-center flex-1 flex flex-col">
            <h3 className="text-2xl font-editorial-serif font-semibold mb-1" style={{ color: "#0a1b2b" }}>
              {name}
            </h3>
            <p className="text-sm mb-1" style={{ color: "#2F3A40" }}>
              {role}
            </p>
            {country && (
              <p className="text-xs mb-3 tracking-wide uppercase" style={{ color: "#626E73" }}>
                {country}
              </p>
            )}
            {bio && (
              <p className="text-sm mb-5 leading-relaxed flex-1 font-editorial-serif italic" style={{ color: "#626E73" }}>
                {bio}
              </p>
            )}

            <div className="flex justify-center gap-3 mt-auto pt-1">
              {linkedin && (
                <a 
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#FFF9FB", border: "2px solid #0a1b2b" }}
                >
                  <Linkedin className="w-4 h-4" style={{ color: "#0a1b2b" }} />
                </a>
              )}
              {instagram && (
                <a 
                  href={instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#FFF9FB", border: "2px solid #0a1b2b" }}
                >
                  <Instagram className="w-4 h-4" style={{ color: "#0a1b2b" }} />
                </a>
              )}
              {twitter && (
                <a 
                  href={twitter.startsWith('http') ? twitter : `https://twitter.com/${twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#FFF9FB", border: "2px solid #0a1b2b" }}
                >
                  <Twitter className="w-4 h-4" style={{ color: "#0a1b2b" }} />
                </a>
              )}
              {email && (
                <a 
                  href={`mailto:${email}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#FFF9FB", border: "2px solid #0a1b2b" }}
                >
                  <Mail className="w-4 h-4" style={{ color: "#0a1b2b" }} />
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
