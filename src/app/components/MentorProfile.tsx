import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import {
  Mail,
  FileText,
  BookOpen,
  Instagram,
  TreePine,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { type MentorData } from "@/app/data/mentors";

interface MentorProfileProps {
  mentor: MentorData;
  onBack: () => void;
}

export function MentorProfile({ mentor, onBack }: MentorProfileProps) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const resolvePublicAssetPath = (assetPath: string): string => {
    if (/^https?:\/\//i.test(assetPath)) {
      return assetPath;
    }

    const normalizedBase = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    const normalizedAssetPath = assetPath.startsWith("/")
      ? assetPath.slice(1)
      : assetPath;

    return `${normalizedBase}${normalizedAssetPath}`;
  };

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

  const goToTeam = () => {
    setMobileMenuOpen(false);
    navigate("/team");
  };

  const goToProgress = () => {
    setMobileMenuOpen(false);
    navigate("/progress");
  };

  const goToFaq = () => {
    setMobileMenuOpen(false);
    navigate("/faq");
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
            <button onClick={goToTeam} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#1A0905")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
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
                <button onClick={goToTeam} className="text-lg" style={{ color: "#1A0905" }}>
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

      <main className="relative pt-36 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-28 h-28 rounded-full mx-auto mb-5 border-2 border-[#1A0905] flex items-center justify-center text-4xl font-editorial-serif font-semibold shadow-[8px_8px_0px_rgba(26,9,5,0.52)]" style={{ backgroundColor: "#4C050C", color: "#E3DFCE" }}>
                {mentor.name.charAt(0).toUpperCase()}
              </div>
              <h1 className="text-4xl md:text-5xl font-editorial-serif font-semibold mb-2" style={{ color: "#1A0905" }}>
                {mentor.name}
              </h1>
              <p className="text-lg" style={{ color: "#626E73" }}>
                {mentor.role}
              </p>
              {mentor.email && (
                <Button
                  className="mt-5 rounded-full border-2 border-[#1A0905]"
                  style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }}
                  onClick={() => (window.location.href = `mailto:${mentor.email}`)}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {mentor.email}
                </Button>
              )}
            </div>

            <Card className="p-7 mb-6 rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.52)]">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5" style={{ color: "#1A0905" }} />
                <h2 className="text-2xl font-editorial-serif font-semibold" style={{ color: "#1A0905" }}>
                  Teaching Subjects
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {mentor.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-semibold border-2 border-[#1A0905]"
                    style={{ backgroundColor: "#94B1C8", color: "#1A0905" }}
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </Card>

            {mentor.bio && (
              <Card className="p-7 mb-6 rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.52)]">
                <h2 className="text-2xl font-editorial-serif font-semibold mb-3" style={{ color: "#1A0905" }}>
                  About
                </h2>
                <p className="leading-relaxed" style={{ color: "#626E73" }}>
                  {mentor.bio}
                </p>
              </Card>
            )}

            <Card className="p-7 rounded-[26px] border-2 border-[#1A0905] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(26,9,5,0.52)]">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5" style={{ color: "#1A0905" }} />
                <h2 className="text-2xl font-editorial-serif font-semibold" style={{ color: "#1A0905" }}>
                  Teaching Resources
                </h2>
              </div>

              {mentor.resources.length > 0 ? (
                <div className="space-y-3">
                  {mentor.resources.map((resource, index) => (
                    <a
                      key={`${resource.title}-${index}`}
                      href={resolvePublicAssetPath(resource.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border-2 border-[#1A0905] p-4 transition-all duration-300 hover:bg-[#E3DFCE]"
                      style={{ backgroundColor: "#E3DFCE" }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold" style={{ color: "#1A0905" }}>
                            {resource.title}
                          </p>
                          <p className="text-sm mt-1" style={{ color: "#626E73" }}>
                            {resource.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 mt-1" style={{ color: "#1A0905" }} />
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border-2 border-dashed border-[#1A0905] p-8 text-center" style={{ backgroundColor: "#E3DFCE" }}>
                  <FileText className="w-10 h-10 mx-auto mb-3" style={{ color: "#626E73", opacity: 0.6 }} />
                  <p style={{ color: "#626E73" }}>Teaching resources coming soon!</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>

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
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#E3DFCE" }}>
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
                <button onClick={goToTeam} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#E3DFCE")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
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
                style={{ backgroundColor: "#4C050C", color: "#E3DFCE" }}
                onClick={() => (window.location.href = "mailto:anithuncommon@gmail.com")}
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
                <input type="text" name="newsletterName" required placeholder="First Name" className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none" style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }} />
                <input type="email" name="newsletterEmail" required placeholder="Email" className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none" style={{ backgroundColor: "#E3DFCE", color: "#1A0905" }} />
                <Button type="submit" className="w-full rounded-full border-2 border-[#94B1C8]" style={{ backgroundColor: "#4C050C", color: "#E3DFCE" }}>
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