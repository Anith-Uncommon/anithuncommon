import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import {
  FileText,
  ExternalLink,
  Users,
  Sparkles,
  Globe,
  Heart,
  Instagram,
  TreePine,
  Mail,
  Menu,
  X,
} from "lucide-react";

interface JoinUsProps {
  onBack: () => void;
}

export function JoinUs({ onBack }: JoinUsProps) {
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
    <div className="min-h-screen relative overflow-x-hidden text-[#0a1b2b]" style={{ backgroundColor: "#FFF9FB", fontFamily: "'Space Grotesk', sans-serif" }}>
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
            <button className="transition-colors" style={{ color: "#0a1b2b" }}>
              Collaborate
            </button>
            <button onClick={goToTeam} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              Our Team
            </button>
            <button onClick={goToProgress} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
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
                <button className="text-lg" style={{ color: "#0a1b2b" }}>
                  Collaborate
                </button>
                <button onClick={goToTeam} className="text-lg" style={{ color: "#0a1b2b" }}>
                  Our Team
                </button>
                <button onClick={goToProgress} className="text-lg" style={{ color: "#0a1b2b" }}>
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
              JOIN OUR COMMUNITY
            </span>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#0a1b2b" }}>
            Be part of a global community of student educators making education accessible to everyone.
          </p>
        </div>

        {/* Why Join Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-editorial-serif font-semibold text-center mb-12" style={{ color: "#0a1b2b" }}>
            Why Join Our Community?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 rounded-[24px] border-2 border-[#0a1b2b] bg-[#f7f4eb] shadow-[6px_6px_0px_rgba(10, 27, 43, 0.55)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#0A1926" }}>
                <Globe className="w-8 h-8" style={{ color: "#D9D7CC" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a1b2b" }}>
                Global Impact
              </h3>
              <p className="text-sm" style={{ color: "#2F3A40" }}>
                Connect with students worldwide and make a difference in education
              </p>
            </Card>

            <Card className="text-center p-6 rounded-[24px] border-2 border-[#0a1b2b] bg-[#f7f4eb] shadow-[6px_6px_0px_rgba(10, 27, 43, 0.55)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#626E73" }}>
                <Sparkles className="w-8 h-8" style={{ color: "#ffffff" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a1b2b" }}>
                Skill Development
              </h3>
              <p className="text-sm" style={{ color: "#2F3A40" }}>
                Develop leadership, teaching, and organizational skills
              </p>
            </Card>

            <Card className="text-center p-6 rounded-[24px] border-2 border-[#0a1b2b] bg-[#f7f4eb] shadow-[6px_6px_0px_rgba(10, 27, 43, 0.55)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#0A1926" }}>
                <Users className="w-8 h-8" style={{ color: "#D9D7CC" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a1b2b" }}>
                Community
              </h3>
              <p className="text-sm" style={{ color: "#2F3A40" }}>
                Be part of a supportive network of student educators
              </p>
            </Card>

            <Card className="text-center p-6 rounded-[24px] border-2 border-[#0a1b2b] bg-[#f7f4eb] shadow-[6px_6px_0px_rgba(10, 27, 43, 0.55)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#626E73" }}>
                <Heart className="w-8 h-8" style={{ color: "#ffffff" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a1b2b" }}>
                Make a Difference
              </h3>
              <p className="text-sm" style={{ color: "#2F3A40" }}>
                Help students access education they wouldn't otherwise have
              </p>
            </Card>
          </div>
        </div>

        {/* Application Forms Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-editorial-serif font-semibold text-center mb-12" style={{ color: "#0a1b2b" }}>
            Apply Now
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Member Application */}
            <div className="relative overflow-hidden rounded-[28px] p-10 border-2 border-[#0a1b2b] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(10, 27, 43, 0.76)] transition-all duration-700 hover:shadow-[11px_11px_0px_rgba(10, 27, 43, 0.76)] group">
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#0A1926" }}>
                  <FileText className="w-8 h-8" style={{ color: "#D9D7CC" }} />
                </div>
                <h3 className="text-3xl font-editorial-serif font-semibold mb-4" style={{ color: "#0a1b2b" }}>
                  Become a Member
                </h3>
                <p className="mb-6 leading-relaxed text-lg" style={{ color: "#2F3A40" }}>
                  Join our core team and help shape the future of accessible education. As a member, you'll contribute to curriculum development, mentorship, and community building.
                </p>
                
                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#0A1926" }} />
                    <span style={{ color: "#2F3A40" }}>Commit to regular contributions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#0A1926" }} />
                    <span style={{ color: "#2F3A40" }}>Join a department that matches your skills</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#0A1926" }} />
                    <span style={{ color: "#2F3A40" }}>Be part of decision-making processes</span>
                  </div>
                </div>

                <Button 
                  className="w-full text-lg py-6 group/btn"
                  style={{ backgroundColor: "#0a1b2b", color: "#cedae3" }}
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdR1Hxmx7tRA4PcqC0q6HKLW8yjMR6AIEwXHrogZCkwGgy1Hg/viewform?pli=1', '_blank')}
                >
                  Apply for Membership
                  <ExternalLink className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Speaker/Volunteer Application */}
            <div className="relative overflow-hidden rounded-[28px] p-10 border-2 border-[#0a1b2b] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(10, 27, 43, 0.76)] transition-all duration-700 hover:shadow-[11px_11px_0px_rgba(10, 27, 43, 0.76)] group">
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#626E73" }}>
                  <Users className="w-8 h-8" style={{ color: "#ffffff" }} />
                </div>
                <h3 className="text-3xl font-editorial-serif font-semibold mb-4" style={{ color: "#0a1b2b" }}>
                  Speaker/Volunteer
                </h3>
                <p className="mb-6 leading-relaxed text-lg" style={{ color: "#2F3A40" }}>
                  Share your expertise through workshops, mentoring sessions, or volunteer support. Perfect for those who want to contribute without long-term commitments.
                </p>

                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#626E73" }} />
                    <span style={{ color: "#2F3A40" }}>Flexible time commitment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#626E73" }} />
                    <span style={{ color: "#2F3A40" }}>Share your unique skills and knowledge</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "#626E73" }} />
                    <span style={{ color: "#2F3A40" }}>Support specific events or initiatives</span>
                  </div>
                </div>

                <Button 
                  className="w-full text-lg py-6 group/btn"
                  style={{ backgroundColor: "#626E73", color: "#ffffff" }}
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSehxqBfkhZjxUkXtYzg4JRYpWJguRFgEjdeP3UeV9PTCgJr-Q/viewform', '_blank')}
                >
                  Apply as Speaker/Volunteer
                  <ExternalLink className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-[30px] p-12 text-center border-2 border-[#0a1b2b] bg-[#0a1b2b] shadow-[10px_10px_0px_rgba(10, 27, 43, 0.75)]">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#D9D7CC] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#626E73] opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-editorial-serif font-semibold mb-4" style={{ color: "#cedae3" }}>
              Questions?
            </h2>
            <p className="text-lg mb-8" style={{ color: "#cedae3" }}>
              If you have any questions about joining AnithUncommon, feel free to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg border-2 border-[#0a1b2b]"
                style={{ backgroundColor: "#FFF9FB", color: "#0a1b2b" }}
                onClick={() => window.location.href = 'mailto:anithuncommon@gmail.com'}
              >
                Email Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg border-2 border-[#cedae3]"
                style={{ color: "#cedae3", backgroundColor: "transparent" }}
                onClick={() => window.open('https://linktr.ee/anithuncommon', '_blank')}
              >
                All Links
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
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
                <button className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Collaborate
                </button>
                <button onClick={goToTeam} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Our Team
                </button>
                <button onClick={goToProgress} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
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


