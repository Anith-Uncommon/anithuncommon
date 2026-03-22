import { Button } from "@/app/components/ui/button";
import { ArrowLeft, FileText, ExternalLink, Users, Sparkles, Globe, Heart } from "lucide-react";

interface JoinUsProps {
  onBack: () => void;
}

export function JoinUs({ onBack }: JoinUsProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Decorative background shapes */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-[#D9D7CC] opacity-20 rounded-full blur-3xl" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-[#0B1F26] opacity-10 rounded-full blur-3xl" />
      <div className="fixed top-1/2 left-1/3 w-48 h-48 bg-[#626E73] opacity-10 rounded-full blur-3xl" />
      
      {/* Additional creative geometric shapes */}
      <div className="fixed top-40 left-20 w-32 h-32 border-2 border-[#0A1926] opacity-10 rounded-full" />
      <div className="fixed bottom-40 right-32 w-24 h-24 bg-[#A1A6A5] opacity-10 rotate-45" />

      <div className="relative container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 hover:bg-[#D9D7CC]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#0A1926] opacity-20" />
          
          <div className="absolute top-0 left-1/4 w-4 h-4 bg-[#626E73] rounded-full opacity-30" />
          <div className="absolute top-10 right-1/4 w-6 h-6 border-2 border-[#0A1926] opacity-20 rounded-full" />
          <div className="absolute -top-5 right-1/3 w-3 h-3 bg-[#D9D7CC] rotate-45" />
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#0A1926' }}>
            Join AnithUncommon
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#626E73' }} />
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#626E73' }}>
            Be part of a global community of student educators making education accessible to everyone.
          </p>

          {/* Geometric decoration */}
          <div className="mt-8 flex justify-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0A1926' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#626E73' }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D9D7CC' }} />
          </div>
        </div>

        {/* Why Join Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#0A1926' }}>
            Why Join Our Community?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#F9F9F7' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#0A1926' }}>
                <Globe className="w-8 h-8" style={{ color: '#D9D7CC' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0A1926' }}>
                Global Impact
              </h3>
              <p className="text-sm" style={{ color: '#626E73' }}>
                Connect with students worldwide and make a difference in education
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#F9F9F7' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#626E73' }}>
                <Sparkles className="w-8 h-8" style={{ color: '#ffffff' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0A1926' }}>
                Skill Development
              </h3>
              <p className="text-sm" style={{ color: '#626E73' }}>
                Develop leadership, teaching, and organizational skills
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#F9F9F7' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#0A1926' }}>
                <Users className="w-8 h-8" style={{ color: '#D9D7CC' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0A1926' }}>
                Community
              </h3>
              <p className="text-sm" style={{ color: '#626E73' }}>
                Be part of a supportive network of student educators
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl transition-all hover:shadow-lg" style={{ backgroundColor: '#F9F9F7' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#626E73' }}>
                <Heart className="w-8 h-8" style={{ color: '#ffffff' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0A1926' }}>
                Make a Difference
              </h3>
              <p className="text-sm" style={{ color: '#626E73' }}>
                Help students access education they wouldn't otherwise have
              </p>
            </div>
          </div>
        </div>

        {/* Application Forms Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#0A1926' }}>
            Apply Now
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Member Application */}
            <div className="relative overflow-hidden rounded-3xl p-10 border-2 transition-all hover:shadow-2xl group" style={{ borderColor: '#0A1926', backgroundColor: '#F9F9F7' }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0A1926] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#626E73] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#0A1926' }}>
                  <FileText className="w-8 h-8" style={{ color: '#D9D7CC' }} />
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#0A1926' }}>
                  Become a Member
                </h3>
                <p className="mb-6 leading-relaxed text-lg" style={{ color: '#626E73' }}>
                  Join our core team and help shape the future of accessible education. As a member, you'll contribute to curriculum development, mentorship, and community building.
                </p>
                
                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#0A1926' }} />
                    <span style={{ color: '#626E73' }}>Commit to regular contributions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#0A1926' }} />
                    <span style={{ color: '#626E73' }}>Join a department that matches your skills</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#0A1926' }} />
                    <span style={{ color: '#626E73' }}>Be part of decision-making processes</span>
                  </div>
                </div>

                <Button 
                  className="w-full text-lg py-6 group/btn"
                  style={{ backgroundColor: '#0A1926', color: '#D9D7CC' }}
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdR1Hxmx7tRA4PcqC0q6HKLW8yjMR6AIEwXHrogZCkwGgy1Hg/viewform?pli=1', '_blank')}
                >
                  Apply for Membership
                  <ExternalLink className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Speaker/Volunteer Application */}
            <div className="relative overflow-hidden rounded-3xl p-10 border-2 transition-all hover:shadow-2xl group" style={{ borderColor: '#626E73', backgroundColor: '#F9F9F7' }}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#626E73] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0A1926] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#626E73' }}>
                  <Users className="w-8 h-8" style={{ color: '#ffffff' }} />
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#0A1926' }}>
                  Speaker/Volunteer
                </h3>
                <p className="mb-6 leading-relaxed text-lg" style={{ color: '#626E73' }}>
                  Share your expertise through workshops, mentoring sessions, or volunteer support. Perfect for those who want to contribute without long-term commitments.
                </p>

                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#626E73' }} />
                    <span style={{ color: '#626E73' }}>Flexible time commitment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#626E73' }} />
                    <span style={{ color: '#626E73' }}>Share your unique skills and knowledge</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#626E73' }} />
                    <span style={{ color: '#626E73' }}>Support specific events or initiatives</span>
                  </div>
                </div>

                <Button 
                  className="w-full text-lg py-6 group/btn"
                  style={{ backgroundColor: '#626E73', color: '#ffffff' }}
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
        <div className="relative overflow-hidden rounded-3xl p-12 text-center" style={{ backgroundColor: '#0A1926' }}>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#D9D7CC] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#626E73] opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#D9D7CC' }}>
              Questions?
            </h2>
            <p className="text-lg mb-8" style={{ color: '#A1A6A5' }}>
              If you have any questions about joining AnithUncommon, feel free to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg"
                style={{ backgroundColor: '#D9D7CC', color: '#0A1926' }}
                onClick={() => window.location.href = 'mailto:anithuncommon@gmail.com'}
              >
                Email Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg border-2"
                style={{ borderColor: '#D9D7CC', color: '#D9D7CC', backgroundColor: 'transparent' }}
                onClick={() => window.open('https://linktr.ee/anithuncommon', '_blank')}
              >
                All Links
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
