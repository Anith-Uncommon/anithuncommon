import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { FileText, Mail, Menu, X } from "lucide-react";

interface NewsletterPageProps {
  onBack: () => void;
}

const archives = [
  {
    title: "May 2026 Edition",
    summary:
      "First monthly issue highlighting academic tips, lifestyle hacks, and our team's journey.",
    status: "Latest",
  },
] as const;

export function NewsletterPage({ onBack }: NewsletterPageProps) {
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

  const goToNewsletter = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden text-[#0a1b2b]"
      style={{ backgroundColor: "#FFF9FB", fontFamily: "'Space Grotesk', sans-serif" }}
    >
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
            className="flex items-center gap-2 md:gap-2.5 md:justify-self-start md:-ml-1"
            aria-label="Go to homepage"
            style={{
              color: "#0a1b2b",
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}au-logo.png`}
              alt="AnithUncommon logo"
              className="h-8 w-8 md:h-9 md:w-9 object-contain shrink-0"
            />
            <span className="text-[1.9rem] md:text-[2.1rem] leading-[1] tracking-tight translate-y-[1px] md:translate-y-[2px]">
              AnithUncommon
            </span>
          </button>

          <nav className="hidden min-[1440px]:flex items-center justify-self-center gap-6 text-sm tracking-wide font-medium">
            <button
              onClick={() => goToHomeSection("about")}
              className="transition-colors"
              style={{ color: "#2F3A40" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}
            >
              About Us
            </button>
            <button
              onClick={() => goToHomeSection("subjects")}
              className="transition-colors"
              style={{ color: "#2F3A40" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}
            >
              Subjects
            </button>
            <button
              onClick={() => goToHomeSection("collaborate")}
              className="transition-colors"
              style={{ color: "#2F3A40" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}
            >
              Collaborate
            </button>
            <button
              onClick={goToTeam}
              className="transition-colors"
              style={{ color: "#2F3A40" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}
            >
              Our Team
            </button>
            <button
              onClick={goToProgress}
              className="transition-colors"
              style={{ color: "#2F3A40" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}
            >
              Student Progress
            </button>
            <button
              onClick={goToFaq}
              className="transition-colors"
              style={{ color: "#2F3A40" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}
            >
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
                <button
                  onClick={() => goToHomeSection("about")}
                  className="text-lg"
                  style={{ color: "#0a1b2b" }}
                >
                  About Us
                </button>
                <button
                  onClick={() => goToHomeSection("subjects")}
                  className="text-lg"
                  style={{ color: "#0a1b2b" }}
                >
                  Subjects
                </button>
                <button
                  onClick={() => goToHomeSection("collaborate")}
                  className="text-lg"
                  style={{ color: "#0a1b2b" }}
                >
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

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-14 relative z-10">
        <section className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#0a1b2b]" style={{ backgroundColor: "#94B1C8" }}>
            <span className="text-xs tracking-[0.22em] font-semibold" style={{ color: "#0a1b2b" }}>
              NEWSLETTER
            </span>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#0a1b2b" }}>
            Subscribe to receive each monthly release, plus highlights and archive updates from the community.
          </p>
        </section>

        <Card className="p-8 md:p-12 rounded-[30px] border-2 border-[#0a1b2b] bg-[#fff9fb] shadow-[10px_10px_0px_rgba(10, 27, 43, 0.78)] relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A1926] opacity-5 rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative z-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-editorial-serif font-semibold" style={{ color: "#0a1b2b" }}>
                Sign up for monthly releases
              </h2>
              <p className="leading-relaxed" style={{ color: "#0a1b2b" }}>
                We’ll send a concise newsletter with monthly releases, community notes, and the latest updates from AnithUncommon.
              </p>
              <ul className="space-y-2 text-sm md:text-base" style={{ color: "#626E73" }}>
                <li>• Monthly release roundup</li>
                <li>• Community highlights and announcements</li>
                <li>• Direct access to past editions</li>
              </ul>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get("newsletterEmail");
                const mailtoLink = `mailto:anithuncommon@gmail.com?subject=Newsletter Signup&body=${encodeURIComponent(`Email: ${email}`)}`;
                window.location.href = mailtoLink;
              }}
            >
              <div>
                <label
                  htmlFor="newsletterEmail"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#0A1926" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="newsletterEmail"
                  name="newsletterEmail"
                  required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-[#0a1b2b] focus:outline-none transition-colors"
                  style={{ backgroundColor: "#FFF9FB" }}
                  placeholder="your.email@example.com"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg rounded-full border-2 border-[#0a1b2b]"
                style={{ backgroundColor: "#0a1b2b", color: "#cedae3" }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </Card>

        <section>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#0a1b2b] shadow-[3px_3px_0px_rgba(10, 27, 43, 0.28)]" style={{ backgroundColor: "#94B1C8" }}>
              <span className="text-xs tracking-[0.22em] font-semibold" style={{ color: "#0a1b2b" }}>
                ARCHIVES
              </span>
            </div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#0a1b2b" }}>
              Browse past monthly releases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {archives.map((archive) => (
              <Card
                key={archive.title}
                className="p-6 rounded-[24px] border-2 border-[#0a1b2b] bg-[#FFF9FB] shadow-[8px_8px_0px_rgba(10, 27, 43, 0.65)] transition-all duration-500 hover:shadow-[10px_10px_0px_rgba(10, 27, 43, 0.78)]"
                onClick={() => window.open('/resources/newsletter/may-2026-edition.pdf', '_blank')}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#0a1b2b]" style={{ backgroundColor: "#94B1C8" }}>
                    <FileText className="w-5 h-5" style={{ color: "#0a1b2b" }} />
                  </div>
                  <span className="text-[0.7rem] tracking-[0.18em] font-semibold uppercase px-3 py-1 rounded-full border-2 border-[#0a1b2b]" style={{ backgroundColor: archive.status === "Latest" ? "#0a1b2b" : "#FFF9FB", color: archive.status === "Latest" ? "#cedae3" : "#0a1b2b" }}>
                    {archive.status}
                  </span>
                </div>

                <h3 className="text-2xl font-editorial-serif font-semibold mb-3" style={{ color: "#0a1b2b" }}>
                  {archive.title}
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: "#626E73" }}>
                  {archive.summary}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
