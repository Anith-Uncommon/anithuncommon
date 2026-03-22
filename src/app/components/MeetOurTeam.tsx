export function MeetOurTeam({ onBack }: MeetOurTeamProps) {
const departments = {
  leadership: [
    {
      name: "Edith Hoeijaya",
      role: "CEO & Co-founder",
      bio: "After all, we are nothing more or less then we choose to reveal. - Sylvia Plath",
      country: "🇮🇩 Indonesia",
      linkedin: "#",
      colorAccent: "bg-[#0A1926]"
    },
    {
      name: "Angelina K Caumen",
      role: "COO and Co-Founder",
      bio: "\"Just because my dreams are different than yours doesn't mean they are important.\" - Meg March from the Little Women.",
      country: "🇮🇩 Indonesia",
      linkedin: "#",
      colorAccent: "bg-[#0B1F26]"
    }
  ],

  humanResources: [
    {
      name: "Nadine Leanna Vaehan",
      role: "Head of Human Resources",
      bio: "\"You're gonna find yourself somewhere, somehow\"",
      country: "🇮🇩 Indonesia",
      linkedin: "https://www.linkedin.com/in/nadine-leannavaehan/",
      colorAccent: "bg-[#626E73]"
    },
    {
      name: "Rey Fernando Hamfry",
      role: "Head of Human Resource",
      bio: "\"At the beach in every life\"",
      country: "🇮🇩 Indonesia",
      linkedin: "#",
      colorAccent: "bg-[#0A1926]"
    }
  ],

  publicRelations: [
    {
      name: "Ayaan",
      role: "Co-Head of Public Relations",
      bio: "\"1000 may fall your side 10,000 may fall near your right hand but it will not come near you.\" - Psalm 91:7",
      country: "🇦🇺 Australia",
      linkedin: "#",
      colorAccent: "bg-[#626E73]"
    },
    {
      name: "Musa Haroon Chaudhary",
      role: "Public Relations Officer",
      bio: "\"Above all, do not lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others.\" - Fyodor Dostoevsky",
      country: "🇵🇰 Pakistan",
      linkedin: "#",
      colorAccent: "bg-[#0A1926]"
    },
    {
      name: "Martina Marqués",
      role: "Public Relations team and Humanities Mentor",
      bio: "Estudiante de Ciencias Politicas y Analisis de Datos",
      country: "🇦🇷 Argentina",
      linkedin: "https://www.linkedin.com/in/martina-marques-61b226352",
      colorAccent: "bg-[#0B1F26]"
    }
  ],

  marketing: [
    {
      name: "Marianne",
      role: "Co-head of the Social Media Department",
      country: "🇭🇳 Honduras",
      linkedin: "#",
      colorAccent: "bg-[#0A1926]"
    },
    {
      name: "Ximena Clímaco",
      role: "Video Editor & Website Manager",
      bio: "Living between Elden Ring and Resident Evil",
      country: "🇸🇻 El Salvador",
      linkedin: "#",
      colorAccent: "bg-[#0B1F26]"
    },
    {
      name: "Yognya Gunti",
      role: "Graphic Designer and Humanities Mentor",
      bio: "Relying on others doesn’t weaken you — it makes you stronger. Learn from everyone around you, because growth never ends.",
      country: "🇮🇳 India",
      linkedin: "https://sites.google.com/view/memyselfandiyognyagunti/home",
      colorAccent: "bg-[#0A1926]"
    },
    {
      name: "Ruth Angelia Joy Purba",
      role: "Discord Moderator",
      bio: "WGTB – Yeshua Abraham",
      country: "🇮🇩 Indonesia",
      linkedin: "https://www.linkedin.com/in/ruth-purba-61210b31b/",
      colorAccent: "bg-[#626E73]"
    }
  ],

  stemAndHumanities: [
    {
      name: "Savera Sidhu",
      role: "Head of STEM and Humanities & Humanities Mentor",
      bio: "Hi, I’m Savera! I’m the Founder and CEO of Bright Start and a mentor and Head of STEM and Humanities at Anithuncommon. I’m passionate about youth wellbeing, leadership, and helping young people build confidence and resilience. I’m also a 1st Dan Black Belt and Regional Karate Judge who has represented New Zealand internationally, and I bring the same discipline and mindset from sport into the work I do with young people.",
      country: "🇳🇿 New Zealand",
      linkedin: "https://www.linkedin.com/in/savera-sidhu",
      colorAccent: "bg-[#0A1926]"
    },
    {
      name: "Yassmin Mahmoud",
      role: "Biology Mentor",
      bio: "",
      country: "🇸🇦 Saudi Arabia",
      linkedin: "https://www.linkedin.com/in/yassmin-younis-1309043b6",
      colorAccent: "bg-[#626E73]"
    },
    {
      name: "Kenneth Viorenzo",
      role: "STEM Mentor",
      bio: "A connoisseur of the abstract. Be sure to enjoy whatever it is you're doing and don't forget: \"What is created by a human mind can be solved by another human mind\" - Yuri Knorozov",
      country: "🇮🇩 Indonesia",
      linkedin: "https://www.linkedin.com/in/viorenzo-kenneth",
      colorAccent: "bg-[#0B1F26]"
    },
    {
      name: "Lakshya Shree",
      role: "Humanities Mentor",
      bio: "\"you are full of life to be somebody's maybe\"",
      country: "🇮🇳 India",
      linkedin: "https://www.linkedin.com/in/lakshya-shree-3895a0342/",
      colorAccent: "bg-[#0A1926]"
    },
    {
      name: "Ojas Dhaundiyal",
      role: "Humanities Mentor",
      bio: "\"The Universe Conspires\"",
      country: "🇮🇳 India",
      linkedin: "https://www.linkedin.com/in/ojas-dhaundiyal-89158a375",
      colorAccent: "bg-[#626E73]"
    },
    {
      name: "Avighnaa Ramesh",
      role: "STEM Mentor",
      bio: "Avighnaa is a STEM enthusiast and innovation-driven student from Malaysia who is passionate about using science and technology to solve real-world problems. He has developed projects such as the SpineAlign smart posture-correcting vest and Hydropower Nexus, an eco-friendly rainwater filtration and energy generation system for homes. Avighnaa has received several awards in the STEM field, including being a gold medalist in the International Youth Biology Olympiad (IYBO) and a silver medalist in the International Science Technology Engineering Competition (ISTEC).",
      country: "🇲🇾 Malaysia",
      linkedin: "https://www.linkedin.com/in/avighnaa-ramesh",
      colorAccent: "bg-[#0B1F26]"
    },
    {
      name: "Ishraq",
      role: "Humanities mentor for Literature",
      bio: "I wish to be a bird",
      country: "🇦🇪 UAE",
      linkedin: "#",
      colorAccent: "bg-[#0B1F26]"
    },
    {
      name: "Trista",
      role: "Mentor and Curriculum Developer",
      bio: "Hi! I love to explore fields in science, specifically biology and neuroscience.",
      country: "",
      linkedin: "#",
      colorAccent: "bg-[#626E73]" 
    },
    {
      name: "MJ",
      role: "Designer and Curriculum creator",
      bio: "No need to chase the moon! We already hold the stars in our hands",
      country: "🇮🇩 Indonesia",
      linkedin: "#",
      colorAccent: "bg-[#626E73]" 
    },
    {
      name: "Jaden",
      role: "Mentor",
      bio: "Guiding students to discover their potential and achieve their dreams.",
      country: "🇵🇭 Philippines",
      linkedin: "#",
      colorAccent: "bg-[#0B1F26]"
    }
  ]
};
return (
  <div>
    <h1>Meet Our Team</h1>
  </div>
);
}