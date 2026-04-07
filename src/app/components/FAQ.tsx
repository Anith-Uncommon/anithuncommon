import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ArrowLeft, HelpCircle, Mail, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

interface FAQProps {
  onBack: () => void;
}

export function FAQ({ onBack }: FAQProps) {
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

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D9D7CC] mb-6">
            <HelpCircle className="w-8 h-8 text-[#0A1926]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A1926]">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 bg-[#626E73]" />
          <p className="text-xl max-w-2xl mx-auto text-[#626E73]">
            Get answers to common questions about AnithUncommon
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Card className="p-8 border-2 border-[#D9D7CC]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#0A1926] hover:text-[#0B1F26]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#626E73] leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 text-center bg-[#F9F9F7] border-2 border-[#D9D7CC]">
            <h2 className="text-2xl font-bold mb-4 text-[#0A1926]">
              Still have questions?
            </h2>
            <p className="text-lg text-[#626E73] mb-6">
              We're here to help! Reach out to us through any of these channels:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#0A1926] text-[#D9D7CC] hover:bg-[#0B1F26]"
                onClick={() => window.location.href = 'mailto:anithuncommon@gmail.com'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <Button 
                variant="outline"
                className="border-[#626E73] text-[#626E73] hover:bg-[#626E73] hover:text-white"
                onClick={() => window.open('https://instagram.com/anithuncommon', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram DM
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
