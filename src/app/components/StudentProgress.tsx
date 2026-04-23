import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Camera, Users, FileText, ExternalLink, Instagram, TreePine, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface StudentProgressProps {
  onBack: () => void;
}

export function StudentProgress({ onBack }: StudentProgressProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "individual" | "achievements">("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Empty placeholder images for gallery
  const meetingPhotos: string[] = [];

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

  const goToFaq = () => {
    setMobileMenuOpen(false);
    navigate("/faq");
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-[#0a1b2b]" style={{ backgroundColor: "#FFF9FB" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(10, 27, 43, 0.2) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#94B1C8] opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a1b2b] opacity-10 rounded-full blur-3xl" />

      <header
        className="fixed top-0 inset-x-0 z-30"
        style={{
          backgroundColor: "rgba(255, 249, 251, 0.94)",
          borderBottom: "1px solid rgba(10, 27, 43, 0.14)",
        }}
      >
        <div className="relative flex justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto items-center min-[1440px]:grid min-[1440px]:grid-cols-[1fr_auto_1fr]">
          <button
            onClick={goToHome}
            className="text-3xl tracking-tight md:justify-self-start md:-ml-1"
            aria-label="Go to homepage"
            style={{
              color: "#0a1b2b",
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            AnithUncommon
          </button>

          <nav className="hidden min-[1440px]:flex items-center justify-self-center gap-6 text-sm tracking-wide font-medium">
            <button onClick={() => goToHomeSection("about")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              About Us
            </button>
            <button onClick={() => goToHomeSection("subjects")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              Subjects
            </button>
            <button onClick={() => goToHomeSection("collaborate")} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              Collaborate
            </button>
            <button onClick={goToTeam} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              Our Team
            </button>
            <button className="transition-colors" style={{ color: "#0a1b2b" }}>
              Student Progress
            </button>
            <button onClick={goToFaq} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              FAQ
            </button>
          </nav>

          <div className="min-[1440px]:hidden" />

          <Button
            variant="ghost"
            size="sm"
            className="min-[1440px]:hidden liquid-glass rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: "#0a1b2b" }}
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
              className="absolute right-0 top-0 z-[122] h-full w-[82%] max-w-sm bg-[#FFF9FB] border-l-2 border-[#0a1b2b] shadow-[-10px_0_0_rgba(10, 27, 43, 0.4)] p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: "#0a1b2b" }}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center">
                <button onClick={() => goToHomeSection("about")} className="text-lg" style={{ color: "#0a1b2b" }}>
                  About Us
                </button>
                <button onClick={() => goToHomeSection("subjects")} className="text-lg" style={{ color: "#0a1b2b" }}>
                  Subjects
                </button>
                <button onClick={() => goToHomeSection("collaborate")} className="text-lg" style={{ color: "#0a1b2b" }}>
                  Collaborate
                </button>
                <button onClick={goToTeam} className="text-lg" style={{ color: "#0a1b2b" }}>
                  Our Team
                </button>
                <button className="text-lg" style={{ color: "#0a1b2b" }}>
                  Student Progress
                </button>
                <button onClick={goToFaq} className="text-lg" style={{ color: "#0a1b2b" }}>
                  FAQ
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-14 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#0a1b2b]" style={{ backgroundColor: "#94B1C8" }}>
            <span className="text-xs tracking-[0.22em] font-semibold" style={{ color: "#0a1b2b" }}>
              STUDENT PROGRESS
            </span>
          </div>
          <p className="text-xl max-w-2xl mx-auto text-[#0a1b2b]">
            Track student achievements and explore our community moments
          </p>
        </div>

        {/* Meeting Photos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Camera className="w-6 h-6 text-[#0a1b2b]" />
            <h2 className="text-3xl font-editorial-serif font-semibold text-[#0a1b2b]">Meeting Photos</h2>
            <div className="grow h-px bg-[#94B1C8]" />
          </div>

          {meetingPhotos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetingPhotos.map((photo, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img 
                    src={photo} 
                    alt={`Meeting photo ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              ))}
            </div>
          ) : (
            // Empty State for Photos
            <Card className="p-12 text-center border-2 border-dashed border-[#0a1b2b] rounded-[26px] bg-[#f7f4eb]">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F9F9F7] mb-6">
                <Camera className="w-10 h-10 text-[#0a1b2b]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A1926]">
                Meeting Photos Coming Soon
              </h3>
              <p className="text-lg text-[#0a1b2b] max-w-md mx-auto">
                We'll be sharing photos from our community meetings and events here soon.
              </p>
            </Card>
          )}
        </div>

        {/* Student Progress Tabs Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-6 h-6 text-[#0a1b2b]" />
            <h2 className="text-3xl font-editorial-serif font-semibold text-[#0a1b2b]">Student Progress Tracking</h2>
            <div className="grow h-px bg-[#94B1C8]" />
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b border-[#0a1b2b] overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === "overview"
                  ? "text-[#0a1b2b]"
                  : "text-[#4e5e68] hover:text-[#0a1b2b]"
              }`}
            >
              Overview
              {activeTab === "overview" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0a1b2b]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("individual")}
              className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === "individual"
                  ? "text-[#0a1b2b]"
                  : "text-[#4e5e68] hover:text-[#0a1b2b]"
              }`}
            >
              Individual Progress
              {activeTab === "individual" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0a1b2b]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === "achievements"
                  ? "text-[#0a1b2b]"
                  : "text-[#4e5e68] hover:text-[#0a1b2b]"
              }`}
            >
              Achievements
              {activeTab === "achievements" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0a1b2b]" />
              )}
            </button>
          </div>

          {/* Tab Content - Empty State with Stats */}
          <Card className="p-12 text-center border-2 border-dashed border-[#0a1b2b] rounded-[26px] bg-[#f7f4eb]">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F9F9F7] mb-6">
              <FileText className="w-10 h-10 text-[#0a1b2b]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#0A1926]">
              {activeTab === "overview" && "Progress Overview Coming Soon"}
              {activeTab === "individual" && "Individual Tracking Coming Soon"}
              {activeTab === "achievements" && "Achievement System Coming Soon"}
            </h3>
            <p className="text-lg text-[#0a1b2b] max-w-md mx-auto mb-8">
              {activeTab === "overview" && "We're building a comprehensive dashboard to track overall student progress and engagement."}
              {activeTab === "individual" && "Individual student progress tracking will allow you to see detailed learning journeys for each student."}
              {activeTab === "achievements" && "Celebrate student milestones with our upcoming achievement and badge system."}
            </p>
          </Card>
        </div>
      </div>

      <footer
        className="py-12 transition-colors duration-[1200ms] relative overflow-hidden"
        style={{ backgroundColor: "#0a1b2b" }}
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
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#cedae3" }}>
                Directory
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <button onClick={() => goToHomeSection("about")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  About Us
                </button>
                <button onClick={() => goToHomeSection("subjects")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Subjects
                </button>
                <button onClick={() => goToHomeSection("collaborate")} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Collaborate
                </button>
                <button onClick={goToTeam} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Our Team
                </button>
                <button className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Student Progress
                </button>
                <button onClick={goToFaq} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  FAQ
                </button>
              </div>
            </div>

            <div className="text-left space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#cedae3" }}>
                Get In Touch
              </h3>
              <p className="text-sm" style={{ color: "#94B1C8" }}>
                anithuncommon@gmail.com
              </p>
              <Button
                className="w-full sm:w-auto rounded-full border-2 border-[#94B1C8]"
                style={{ backgroundColor: "#0a1b2b", color: "#cedae3" }}
                onClick={() => (window.location.href = "mailto:anithuncommon@gmail.com")}
              >
                Contact
              </Button>
            </div>

            <div className="text-left space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "#cedae3" }}>
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
                <input type="text" name="newsletterName" required placeholder="First Name" className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none" style={{ backgroundColor: "#FFF9FB", color: "#0a1b2b" }} />
                <input type="email" name="newsletterEmail" required placeholder="Email" className="w-full h-10 rounded-xl border-2 border-[#94B1C8] px-3 text-sm focus:outline-none" style={{ backgroundColor: "#FFF9FB", color: "#0a1b2b" }} />
                <Button type="submit" className="w-full rounded-full border-2 border-[#94B1C8]" style={{ backgroundColor: "#0a1b2b", color: "#cedae3" }}>
                  Submit
                </Button>
              </form>
            </div>

            <div className="text-left lg:text-right space-y-4 lg:justify-self-end">
              <div className="flex items-center justify-start lg:justify-end gap-3 mb-5">
                <a href="https://instagram.com/anithuncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linktr.ee/anithuncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  <TreePine className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/anith-uncommon" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.14em] uppercase mb-2" style={{ color: "#cedae3" }}>
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



