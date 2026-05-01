import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Mail, Instagram, TreePine, Menu, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FAQProps {
  onBack: () => void;
}

export function FAQ({ onBack }: FAQProps) {
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

  const faqs = [
    {
      question: "Is AnithUncommon completely free?",
      answer: "Yes, we are a completely free programme for students and families worldwide. Our program is volunteer-based and is committed to making academic support and opportunities accessible to all."
    },
    {
      question: "How can I join as a mentor or student?",
      answer: "You may join through our registration forms available at the link attached in our Linktree. Instructions and details are included within the form."
    },
    {
      question: "How long are the sessions?",
      answer: "Sessions are typically 60–75 minutes long but can be extended depending on the agreement between the student and mentor. They are usually scheduled weekly or bi-weekly."
    },
    {
      question: "What platforms are you on?",
      answer: "We are currently on Instagram only, but we are preparing to expand to TikTok and Discord."
    },
    {
      question: "What proof of participation do I receive?",
      answer: "Each member, whether a student or staff member, will receive a certificate of participation."
    },
    {
      question: "How can we contact you?",
      answer: "You may contact us through Instagram DMs or via email at anithuncommon@gmail.com. If both options fail, you may reach out to our CEO at edith.hoeijaya@gmail.com."
    },
    {
      question: "What are the requirements as a mentor or student?",
      answer: "Fluent English literacy (speaking, listening, and reading) is preferred; however, discretion is given depending on individual circumstances. No prior experience is required."
    },
    {
      question: "Where do mentorship sessions take place?",
      answer: "Currently, all sessions are conducted virtually for flexibility and ease. In-person meetings may be arranged depending on mentor and mentee availability."
    },
    {
      question: "How are mentors matched with mentees?",
      answer: "An initial screening process selects up to 5 potential mentors per mentee. The mentee may choose to have trial sessions or leave the decision to us. Matches are based on academic needs, preferences, availability, and learning style."
    }
  ];

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
            <button onClick={goToProgress} className="transition-colors" style={{ color: "#2F3A40" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#0a1b2b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2F3A40")}>
              Student Progress
            </button>
            <button className="transition-colors" style={{ color: "#0a1b2b" }}>
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
                <button onClick={goToProgress} className="text-lg" style={{ color: "#0a1b2b" }}>
                  Student Progress
                </button>
                <button className="text-lg" style={{ color: "#0a1b2b" }}>
                  FAQ
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-32 pb-14 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full mb-4 border-2 border-[#0a1b2b]" style={{ backgroundColor: "#94B1C8" }}>
            <span className="text-xs tracking-[0.22em] font-semibold" style={{ color: "#0a1b2b" }}>
              FAQ
            </span>
          </div>
          <p className="text-xl max-w-2xl mx-auto text-[#0a1b2b]">
            Get answers to common questions about AnithUncommon
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Card className="p-8 border-2 border-[#0a1b2b] rounded-[26px] bg-[#f7f4eb] shadow-[8px_8px_0px_rgba(10, 27, 43, 0.65)]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#0a1b2b] hover:text-[#0a1b2b]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#0a1b2b] leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 text-center bg-[#f7f4eb] border-2 border-[#0a1b2b] rounded-[26px] shadow-[6px_6px_0px_rgba(10, 27, 43, 0.55)]">
            <h2 className="text-2xl font-editorial-serif font-semibold mb-4 text-[#0a1b2b]">
              Still have questions?
            </h2>
            <p className="text-lg text-[#0a1b2b] mb-6">
              We're here to help! Reach out to us through any of these channels:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#0a1b2b] text-[#cedae3] hover:bg-[#14314a] border-2 border-[#0a1b2b]"
                onClick={() => window.location.href = 'mailto:anithuncommon@gmail.com'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <Button 
                variant="outline"
                className="border-[#0a1b2b] text-[#0a1b2b] hover:bg-[#94B1C8] hover:text-[#0a1b2b]"
                onClick={() => window.open('https://instagram.com/anithuncommon', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram DM
              </Button>
            </div>
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
                <button onClick={goToProgress} className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
                  Student Progress
                </button>
                <button className="transition-colors text-left sm:text-left text-center" style={{ color: "#94B1C8" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#cedae3")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94B1C8")}>
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


