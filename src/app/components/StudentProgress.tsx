import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { ArrowLeft, Camera, TrendingUp, Users, Globe, Eye, Award } from "lucide-react";
import { useState } from "react";

interface StudentProgressProps {
  onBack: () => void;
}

export function StudentProgress({ onBack }: StudentProgressProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "individual" | "achievements">("overview");

  // Empty placeholder images for gallery
  const meetingPhotos: string[] = [];

  // Statistics
  const stats = [
    {
      icon: Eye,
      value: "90K+",
      label: "Impressions",
      color: "#0A1926",
      bgColor: "#D9D7CC"
    },
    {
      icon: Globe,
      value: "20+",
      label: "Countries",
      color: "#D9D7CC",
      bgColor: "#0B1F26"
    },
    {
      icon: Users,
      value: "35+",
      label: "Members",
      color: "#0A1926",
      bgColor: "#A1A6A5"
    },
    {
      icon: Award,
      value: "10+",
      label: "Students",
      color: "#D9D7CC",
      bgColor: "#626E73"
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
            <TrendingUp className="w-8 h-8 text-[#0A1926]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A1926]">
            Student Progress & Community
          </h1>
          <div className="w-24 h-1 mx-auto mb-6 bg-[#626E73]" />
          <p className="text-xl max-w-2xl mx-auto text-[#626E73]">
            Track student achievements and explore our community moments
          </p>
        </div>

        {/* Statistics Section - Creative Highlight Metrics */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index}
                  className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ 
                    backgroundColor: stat.bgColor,
                    borderColor: stat.color,
                    borderWidth: '2px'
                  }}
                >
                  {/* Decorative circle */}
                  <div 
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
                    style={{ backgroundColor: stat.color }}
                  />
                  
                  <div className="relative p-6">
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                      style={{ backgroundColor: stat.color }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: stat.bgColor }}
                      />
                    </div>
                    <div 
                      className="text-4xl font-bold mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-lg font-medium uppercase tracking-wide"
                      style={{ color: stat.color, opacity: 0.8 }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Meeting Photos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Camera className="w-6 h-6 text-[#0A1926]" />
            <h2 className="text-3xl font-bold text-[#0A1926]">Meeting Photos</h2>
            <div className="grow h-px bg-[#D9D7CC]" />
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
            <Card className="p-12 text-center border-2 border-dashed border-[#D9D7CC]">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F9F9F7] mb-6">
                <Camera className="w-10 h-10 text-[#626E73]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A1926]">
                Meeting Photos Coming Soon
              </h3>
              <p className="text-lg text-[#626E73] max-w-md mx-auto">
                We'll be sharing photos from our community meetings and events here soon.
              </p>
            </Card>
          )}
        </div>

        {/* Student Progress Tabs Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-6 h-6 text-[#0A1926]" />
            <h2 className="text-3xl font-bold text-[#0A1926]">Student Progress Tracking</h2>
            <div className="grow h-px bg-[#D9D7CC]" />
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 border-b border-[#D9D7CC] overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === "overview"
                  ? "text-[#0A1926]"
                  : "text-[#626E73] hover:text-[#0A1926]"
              }`}
            >
              Overview
              {activeTab === "overview" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A1926]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("individual")}
              className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === "individual"
                  ? "text-[#0A1926]"
                  : "text-[#626E73] hover:text-[#0A1926]"
              }`}
            >
              Individual Progress
              {activeTab === "individual" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A1926]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`px-6 py-3 font-semibold transition-colors relative whitespace-nowrap ${
                activeTab === "achievements"
                  ? "text-[#0A1926]"
                  : "text-[#626E73] hover:text-[#0A1926]"
              }`}
            >
              Achievements
              {activeTab === "achievements" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A1926]" />
              )}
            </button>
          </div>

          {/* Tab Content - Empty State with Stats */}
          <Card className="p-12 text-center border-2 border-dashed border-[#D9D7CC]">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F9F9F7] mb-6">
              <TrendingUp className="w-10 h-10 text-[#626E73]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#0A1926]">
              {activeTab === "overview" && "Progress Overview Coming Soon"}
              {activeTab === "individual" && "Individual Tracking Coming Soon"}
              {activeTab === "achievements" && "Achievement System Coming Soon"}
            </h3>
            <p className="text-lg text-[#626E73] max-w-md mx-auto mb-8">
              {activeTab === "overview" && "We're building a comprehensive dashboard to track overall student progress and engagement."}
              {activeTab === "individual" && "Individual student progress tracking will allow you to see detailed learning journeys for each student."}
              {activeTab === "achievements" && "Celebrate student milestones with our upcoming achievement and badge system."}
            </p>

            {/* Mini Stats Display in Empty State */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 rounded-lg border-2"
                    style={{ borderColor: stat.bgColor }}
                  >
                    <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.bgColor }} />
                    <div className="text-2xl font-bold" style={{ color: stat.bgColor }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#626E73] uppercase">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
