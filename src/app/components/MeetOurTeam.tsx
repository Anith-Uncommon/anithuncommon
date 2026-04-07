import { Button } from "@/app/components/ui/button";
import { ArrowLeft, FileText, ExternalLink, Linkedin, Mail, Instagram } from "lucide-react";
import { TeamMember } from "./TeamMember";

interface MeetOurTeamProps {
  onBack: () => void;
}

export function MeetOurTeam({ onBack }: MeetOurTeamProps) {
  const departments = {
    leadership: {
      title: "Leadership",
      members: [
        {
          name: "Edith Hoeijaya",
          role: "CEO & Co-founder",
          image: "edith.jpeg",
          bio: "\\\"After all, we are nothing more or less then we choose to reveal.\\\" - Sylvia Plath",
          instagram: "edith_hoeijaya",
          colorAccent: "bg-[#0A1926]"
        },
        {
          name: "Rey Fernando Hamfry",
          role: "COO",
          image: "rey.jpeg",
          bio: "\\\"At the beach in every life\\\"",
          instagram: "reyfhamfry",
          colorAccent: "bg-[#0B1F26]"
        }
      ]
    },
    humanResources: {
      title: "Human Resources",
      members: [
        {
          name: "Nadine Leanna Vaehan",
          role: "Chief of Human Resources",
          image: "nadine.jpeg",
          bio: "\\\"You're gonna find yourself somewhere, somehow\\\"",
          instagram: "nleannav",
          colorAccent: "bg-[#626E73]"
        },
        {
          name: "Ayaan",
          role: "Co-Chief of Human Resources",
          image: "Ayaan.png",
          bio: "\\\"1000 may fall at your side 10,000 may fall near your right hand but it will not come near you.\\\" - Psalm 91:7",
          linkedin: "#",
          colorAccent: "bg-[#0A1926]"
        }
      ]
    },
    humanities: {
      title: "Humanities",
      members: [
        {
          name: "Angelina K Caumen",
          role: "Chief of Humanities Subjects",
          image: "angel.jpeg",
          bio: "\\\"Just because my dreams are different than yours doesn't mean they are important.\\\" - Meg March from the Little Women.",
          instagram: "croissaxx",
          colorAccent: "bg-[#0B1F26]"
        }
      ]
    },
    pr: {
      title: "Public Relations",
      members: [
        {
          name: "Musa Haroon Chaudhary",
          role: "Chief of Public Relations",
          image: "musa.jpeg",
          bio: "\\\"Above all, do not lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others.\\\" - Fyodor Dostoevsky",
          linkedin: "https://www.linkedin.com/in/musa-haroon-21511-lpu",
          colorAccent: "bg-[#0A1926]"
        },
        {
          name: "Martina Marqués",
          role: "Public Relations & Humanities Mentor",
          image: "martu.jpeg",
          bio: "Estudiante de Ciencias Politicas y Analisis de Datos",
          linkedin: "https://www.linkedin.com/in/martina-marques-61b226352",
          colorAccent: "bg-[#0B1F26]"
        }
      ]
    },
    marketing: {
      title: "Marketing & Design",
      members: [
        {
          name: "Marianne",
          role: "Co-Head of Social Media Department",
          image: "marianne.jpeg",
          bio: "\\\"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.\\\" - Albert Einstein",
          linkedin: "#",
          colorAccent: "bg-[#0B1F26]"
        },
        {
          name: "Ximena Clímaco",
          role: "Video Editor & Website Manager",
          image: "ximena.jpeg",
          bio: "Living between Elden Ring and Resident Evil",
          instagram: "szyhazel",
          email: "xiaricli@gmail.com",
          colorAccent: "bg-[#0B1F26]"
        },
        {
          name: "Yognya Gunti",
          role: "Graphic Designer & Humanities Mentor",
          image: "yognya.jpeg",
          bio: "Relying on others doesn't weaken you — it makes you stronger. Learn from everyone around you, because growth never ends.",
          linkedin: "https://sites.google.com/view/memyselfandiyognyagunti/home",
          colorAccent: "bg-[#0A1926]"
        },
        {
          name: "Ruth Angelia Joy Purba",
          role: "Discord Moderator",
          image: "ruth.jpeg",
          bio: "WGTB – Yeshua Abraham",
          linkedin: "https://www.linkedin.com/in/ruth-purba-61210b31b/",
          colorAccent: "bg-[#626E73]"
        },
        {
          name: "MJ",
          role: "Designer and Curriculum creator",
          image: "mj.jpeg",
          bio: "No need to chase the moon! We already hold the stars in our hands",
          instagram: "https://www.instagram.com/miche_llejhope8?igsh=MWVrcHA4bXMydG0=",
          colorAccent: "bg-[#626E73]" 
        }
      ]
    },
    mentors: {
      title: "STEM & Humanities Mentors",
      members: [
        {
          name: "Yassmin Mahmoud",
          role: "Biology Mentor",
          image: "yassmin.jpeg",
          bio: "",
          linkedin: "https://www.linkedin.com/in/yassmin-younis-1309043b6",
          colorAccent: "bg-[#626E73]"
        },
        {
          name: "Kenneth Viorenzo",
          role: "STEM Mentor",
          image: "kenneth.jpeg",
          bio: "A connoisseur of the abstract. Be sure to enjoy whatever it is you're doing.",
          linkedin: "https://www.linkedin.com/in/viorenzo-kenneth",
          colorAccent: "bg-[#0B1F26]"
        },
        {
          name: "Vihaan Amin",
          role: "STEM Mentor and Curriculum Producer",
          image: "vihaan.jpeg",
          bio: " High school student passionate about engineering, math, and science.",
          linkedin: "https://www.linkedin.com/in/viorenzo-kenneth",
          colorAccent: "bg-[#0B1F26]"
        },
        {
          name: "Lakshya Shree",
          role: "Humanities Mentor",
          image: "lakshya.jpeg",
          bio: "\\\"you are full of life to be somebody's maybe\\\"",
          linkedin: "https://www.linkedin.com/in/lakshya-shree-3895a0342/",
          colorAccent: "bg-[#0A1926]"
        },
        {
          name: "Akshiti Bhardwaj",
          role: "Humanities Subject Mentor (History and Political Theory)",
          image: "akshiti.jpeg",
          bio: "\\\"If not us, then who, and if not now, then when\\\" — John F. Kennedy",
          linkedin: "https://www.linkedin.com/in/akshiti-bhardwaj-b053703b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          colorAccent: "bg-[#0A1926]"
        },
        {
          name: "Ojas Dhaundiyal",
          role: "Humanities Mentor",
          image: "ojas.jpeg",
          bio: "\\\"The Universe Conspires\\\"",
          linkedin: "https://www.linkedin.com/in/ojas-dhaundiyal-89158a375",
          colorAccent: "bg-[#626E73]"
        },
        {
          name: "Lee Xin Ying, Megan",
          role: "Humanities Mentor",
          image: "megan.jpg",
          bio: "unforgettable by french montana",
          linkedin: "#",
          colorAccent: "bg-[#626E73]"
        },
        {
          name: "Avighnaa Ramesh",
          role: "STEM Mentor",
          image: "avighnaa.jpeg",
          bio: "Avighnaa is a STEM enthusiast and innovation-driven student from Malaysia who is passionate about using science and technology to solve real-world problems.",
          linkedin: "https://www.linkedin.com/in/avighnaa-ramesh",
          colorAccent: "bg-[#0B1F26]"
        },
        {
          name: "Trista",
          role: "Mentor & Curriculum Developer",
          image: "Trista.jpeg",
          bio: "Hi! I love to explore fields in science, specifically biology and neuroscience.",
          linkedin: "#",
          colorAccent: "bg-[#0B1F26]"
        },
        {
          name: "Ishraq",
          role: "Humanities mentor for Literature",
          image: "ishraq.jpeg",
          bio: "I wish to be a bird",
          instagram: "ihsrqa",
          colorAccent: "bg-[#0B1F26]"
        }
      ]
    },
    studentRepresentative: {
      title: "Student Representatives",
      members: [
        {
          name: "Danielle",
          role: "Student Representative",
          bio: "",
          instagram: "daniellepeiyin",
          email: "dhurga.naveen09@gmail.com",
          image: "danielle.jpeg",
          colorAccent: "bg-[#0A1926]"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-white">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-[#D9D7CC] opacity-10 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-[#0B1F26] opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 hover:bg-[#D9D7CC] text-[#0A1926]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A1926]">
            Meet Our Team
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 bg-[#626E73]" />
          <p className="text-xl max-w-2xl mx-auto text-[#626E73]">
            A diverse group of passionate students from around the world working together to make education uncommon.
          </p>
        </div>

        {Object.values(departments).map((dept, index) => (
          <div key={index} className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold text-[#0A1926]">{dept.title}</h2>
              <div className="grow h-px bg-[#D9D7CC]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {dept.members.map((member, mIdx) => (
                <TeamMember 
                  key={mIdx}
                  {...member}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Join Us Section */}
        <div className="relative overflow-hidden rounded-3xl p-12 text-center mb-12 bg-[#0A1926]">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#D9D7CC] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#626E73] opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D9D7CC]">
              Want to Join Our Team?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[#A1A6A5]">
              We're always looking for passionate students who want to make a difference. 
              If you share our vision, we'd love to hear from you.
            </p>
            <Button 
              size="lg" 
              className="text-lg bg-[#D9D7CC] text-[#0A1926] hover:bg-white transition-colors"
              onClick={() => window.location.href = 'mailto:anithuncommon@gmail.com'}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Application Forms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Member Application */}
          <div className="relative overflow-hidden rounded-2xl p-8 border-2 border-[#0A1926] bg-[#F9F9F7] transition-all hover:shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A1926] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#0A1926]">
                <FileText className="w-6 h-6 text-[#D9D7CC]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0A1926]">
                Become a Member
              </h3>
              <p className="mb-6 leading-relaxed text-[#626E73]">
                Join our community of student educators and help make education accessible to everyone.
              </p>
              <Button 
                className="w-full bg-[#0A1926] text-[#D9D7CC] hover:bg-[#0B1F26]"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdR1Hxmx7tRA4PcqC0q6HKLW8yjMR6AIEwXHrogZCkwGgy1Hg/viewform?pli=1', '_blank')}
              >
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Speaker/Volunteer Application */}
          <div className="relative overflow-hidden rounded-2xl p-8 border-2 border-[#626E73] bg-[#F9F9F7] transition-all hover:shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#626E73] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#626E73]">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#0A1926]">
                Speaker/Volunteer Opportunities
              </h3>
              <p className="mb-6 leading-relaxed text-[#626E73]">
                Share your expertise as a speaker or support our initiatives as a volunteer.
              </p>
              <Button 
                className="w-full bg-[#626E73] text-white hover:bg-[#4A5458]"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSehxqBfkhZjxUkXtYzg4JRYpWJguRFgEjdeP3UeV9PTCgJr-Q/viewform', '_blank')}
              >
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="rounded-2xl p-8 mb-12 text-center bg-[#F9F9F7]">
          <h3 className="text-2xl font-bold mb-6 text-[#0A1926]">
            Connect With Us
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline"
              className="w-full sm:w-auto border-[#0A1926] text-[#0A1926] hover:bg-[#0A1926] hover:text-white"
              onClick={() => window.open('https://www.linkedin.com/company/anith-uncommon/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline"
              className="w-full sm:w-auto border-[#626E73] text-[#626E73] hover:bg-[#626E73] hover:text-white"
              onClick={() => window.open('https://linktr.ee/anithuncommon', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              All Links
            </Button>
          </div>
        </div>

        {/* Contact Footer Section */}
        <div className="text-center py-8 border-t border-[#626E73]/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:anithuncommon@gmail.com" 
              className="flex items-center gap-2 transition-colors text-[#626E73] hover:text-[#0A1926]" 
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">anithuncommon@gmail.com</span>
            </a>
            <div className="w-px h-6 hidden sm:block bg-[#626E73] opacity-30" />
            <a 
              href="https://instagram.com/anithuncommon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors text-[#626E73] hover:text-[#0A1926]"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-lg">@anithuncommon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
