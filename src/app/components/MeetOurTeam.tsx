import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { FileText, ExternalLink, Mail, Instagram, TreePine, Menu, X } from "lucide-react";
import { TeamMember } from "./TeamMember";

interface MeetOurTeamProps {
  onBack: () => void;
}

export function MeetOurTeam({ onBack }: MeetOurTeamProps) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const goToHome = () => {
    setMobileMenuOpen(false);
    onBack();
  };

  const goToHomeSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    onBack();

    window.setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const headerOffset = 96;
      const targetTop =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });
    }, 140);
  };

  const goToFaq = () => {
    setMobileMenuOpen(false);
    navigate("/faq");
  };

  const goToProgress = () => {
    setMobileMenuOpen(false);
    navigate("/progress");
  };

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
          image: "Ishraq.jpeg",
          bio: "I wish to be a bird",
          instagram: "ihsrqa",
          colorAccent: "bg-[#0B1F26]"
        },
        {
          name: "Savera Sidhu",
          role: "Humanities Mentor",
          image: "savera.jpeg",
          bio: "",
          colorAccent: "bg-[#0A1926]"
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
    <div className="min-h-screen relative overflow-hidden text-[#1A0905]" style={{ backgroundColor: "#E3DFCE" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26, 9, 5, 0.2) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#94B1C8] opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4C050C] opacity-10 rounded-full blur-3xl" />

      <header
        className="fixed top-0 inset-x-0 z-30"
        style={{
          backgroundColor: "rgba(227, 223, 206, 0.94)",
          borderBottom: "1px solid rgba(26, 9, 5, 0.14)",
        }}
      >
        <div className="relative flex justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto items-center min-[1440px]:grid min-[1440px]:grid-cols-[1fr_auto_1fr]">
          <button
            onClick={goToHome}
            className="text-3xl tracking-tight md:justify-self-start md:-ml-1"
            aria-label="Go to homepage"
            style={{
              color: "#1A0905",
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            AnithUncommon
          </button>

          <nav className="hidden min-[1440px]:flex items-center justify-self-center gap-6 text-sm tracking-wide font-medium">
            <button onClick={() => goToHomeSection("about")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              About Us
            </button>
            <button onClick={() => goToHomeSection("subjects")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              Subjects
            </button>
            <button onClick={() => goToHomeSection("collaborate")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              Collaborate
            </button>
            <button className="transition-colors" style={{ color: "#1A0905" }}>
              Our Team
            </button>
            <button onClick={goToProgress} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              Student Progress
            </button>
            <button onClick={goToFaq} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              FAQ
            </button>
          </nav>

          <div className="min-[1440px]:hidden" />

          <Button
            variant="ghost"
            size="sm"
            className="min-[1440px]:hidden liquid-glass rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: "#1A0905" }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div
            className="min-[1440px]:hidden fixed inset-0 z-[120] isolate"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 z-[121] bg-black/35" />
            <nav
              className="absolute right-0 top-0 z-[122] h-full w-[82%] max-w-sm bg-[#E3DFCE] border-l-2 border-[#1A0905] shadow-[-10px_0_0_rgba(26,9,5,0.4)] p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: "#1A0905" }}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center">
                <button onClick={() => goToHomeSection("about")} className="text-lg" style={{ color: "#1A0905" }}>
                  About Us
                </button>
                <button onClick={() => goToHomeSection("subjects")} className="text-lg" style={{ color: "#1A0905" }}>
                  Subjects
                </button>
                <button onClick={() => goToHomeSection("collaborate")} className="text-lg" style={{ color: "#1A0905" }}>
                  Collaborate
                </button>
                <button className="text-lg" style={{ color: "#1A0905" }}>
                  Our Team
                </button>
                <button onClick={goToProgress} className="text-lg" style={{ color: "#1A0905" }}>
                  Student Progress
                </button>
                <button onClick={goToFaq} className="text-lg" style={{ color: "#1A0905" }}>
                  FAQ
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-14 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#1A0905]" style={{ backgroundColor: "#94B1C8" }}>
            <span className="text-xs tracking-[0.22em] font-semibold" style={{ color: "#1A0905" }}>
              OUR TEAM
            </span>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#1A0905]">
            A diverse group of passionate students from around the world working together to make education uncommon.
          </p>
        </div>

        {Object.values(departments).map((dept, index) => (
          <div key={index} className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-editorial-serif font-semibold text-[#1A0905]">{dept.title}</h2>
              <div className="grow h-px bg-[#94B1C8]" />
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
        <div className="relative overflow-hidden rounded-[30px] p-12 text-center mb-12 border-2 border-[#1A0905] bg-[#4C050C] shadow-[10px_10px_0px_rgba(26,9,5,0.75)]">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#D9D7CC] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#626E73] opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-editorial-serif font-semibold mb-4 text-[#E3DFCE]">
              Want to Join Our Team?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[#E3DFCE]">
              We're always looking for passionate students who want to make a difference. 
              If you share our vision, we'd love to hear from you.
            </p>
            <Button 
              size="lg" 
              className="text-lg bg-[#E3DFCE] text-[#1A0905] hover:bg-white transition-colors border-2 border-[#94B1C8]"
              onClick={() => window.location.href = 'mailto:anithuncommon@gmail.com'}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Application Forms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Member Application */}
          <div className="relative overflow-hidden rounded-[26px] p-8 border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[6px_6px_0px_rgba(26,9,5,0.6)] transition-all hover:shadow-[9px_9px_0px_rgba(26,9,5,0.6)]">
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
                className="w-full bg-[#4C050C] text-[#E3DFCE] hover:bg-[#2f0308] border-2 border-[#1A0905]"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdR1Hxmx7tRA4PcqC0q6HKLW8yjMR6AIEwXHrogZCkwGgy1Hg/viewform?pli=1', '_blank')}
              >
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Speaker/Volunteer Application */}
          <div className="relative overflow-hidden rounded-[26px] p-8 border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[6px_6px_0px_rgba(26,9,5,0.6)] transition-all hover:shadow-[9px_9px_0px_rgba(26,9,5,0.6)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#626E73] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#626E73]">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#1A0905]">
                Speaker/Volunteer Opportunities
              </h3>
              <p className="mb-6 leading-relaxed text-[#626E73]">
                Share your expertise as a speaker or support our initiatives as a volunteer.
              </p>
              <Button 
                className="w-full bg-[#94B1C8] text-[#1A0905] hover:bg-[#7ea3bf] border-2 border-[#1A0905]"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSehxqBfkhZjxUkXtYzg4JRYpWJguRFgEjdeP3UeV9PTCgJr-Q/viewform', '_blank')}
              >
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

      </div>

      <footer
        className="py-12 transition-colors duration-[1200ms] relative overflow-hidden"
        style={{ backgroundColor: "#1A0905" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148, 177, 200, 0.4) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 items-start lg:[&>*]:w-full pb-10">

            <div className="text-left space-y-4">
              <h3
                className="text-xs font-semibold tracking-[0.14em] uppercase"
                style={{ color: "#E3DFCE" }}
              >
                Directory
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <button onClick={() => goToHomeSection("about")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  About Us
                </button>
                <button onClick={() => goToHomeSection("subjects")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Subjects
                </button>
                <button onClick={() => goToHomeSection("collaborate")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Collaborate
                </button>
                <button className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Our Team
                </button>
                <button onClick={goToProgress} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Student Progress
                </button>
                <button onClick={goToFaq} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  FAQ
                </button>
              </div>
            </div>

            <div className="text-left space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#E3DFCE" }}>
                Get In Touch
              </h3>
              <p className="text-sm" style={{ color: "#94B1C8" }}>
                anithuncommon@gmail.com
              </p>
              <Button
                className="w-full sm:w-auto rounded-full border-2 border-[#94B1C8]"
                style={{
                  backgroundColor: "#4C050C",
                  color: "#E3DFCE",
                }}
                onClick={() =>
                  (window.location.href =
                    "mailto:anithuncommon@gmail.com")
                }
              >
                Contact
              </Button>
            </div>

            <div className="text-left space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#E3DFCE" }}>
                Join Our Newsletter
              </h3>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("newsletterName");
                  const email = formData.get("newsletterEmail");
                  const mailtoLink = `mailto:anithuncommon@gmail.com?subject=Newsletter Signup&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}`)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <input
                  type="text"
                  name="newsletterName"
                  required
                  placeholder="First Name"
                  className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none"
                  style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                />
                <input
                  type="email"
                  name="newsletterEmail"
                  required
                  placeholder="Email"
                  className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none"
                  style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                />
                <Button
                  type="submit"
                  className="w-full rounded-full border-2 border-[#94B1C8]"
                  style={{
                    backgroundColor: "#4C050C",
                    color: "#E3DFCE",
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>

            <div className="text-left lg:text-right space-y-4 lg:justify-self-end">
              <div className="flex items-center justify-start lg:justify-end gap-3 mb-5">
                <a href="https://instagram.com/anithuncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linktr.ee/anithuncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  <TreePine className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/anith-uncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.14em] uppercase mb-2" style={{ color: "#E3DFCE" }}>
                  Colophon
                </h3>
                <p className="text-sm" style={{ color: "#94B1C8" }}>
                  Designed by
                </p>
                <p className="text-sm" style={{ color: "#94B1C8" }}>
                  Ximena Clímaco
                </p>
                <p className="text-sm mb-2" style={{ color: "#94B1C8" }}>
                  Amr Shaikh
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "rgba(161, 166, 165, 0.2)" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
            <p className="text-center md:text-left" style={{ color: "#94B1C8" }}>
              © AnithUncommon. Empowering students beyond the classroom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
