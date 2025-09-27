import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollReveal } from "./ScrollReveal";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Singapore Polytechnic",
      role: "Systems & Technology Executive",
      period: "Feb 2024 - Present",
      type: "current",
      achievements: [
        "⚙️ **Technology & AI Integration**",
        "🔧 Implementing innovative solutions to enhance library services",
        "🔧 Researching and applying AI tools to streamline operational processes",
        "🔧 Developing and deploying chatbots trained on specific knowledge",
        "🔧 Exploring and building CustomGPTs for personalized applications",
        "🏗️ **Automation & System Management**",
        "🛠️ Utilizing RPA tools like Microsoft Power Automate",
        "🛠️ Managing and maintaining proxy servers for seamless library access",
        "🛠️ Assisting in maintaining the library's card access system",
        "👥 **User Support & Operations**",
        "🤝 Providing support at the library counter and conducting patrols",
        "🔬 Researching LLM models locally for enhanced data privacy"
      ]
    },
    {
      company: "YouTube - Gen AI Channel",
      role: "Digital Content Creator",
      period: "May 2024 - Present",
      type: "creator",
      achievements: [
        "🏆 Achieved over 1 Million impressions in 6 months",
        "🏆 Generated more than 250,000 views within 6 months",
        "🎥 Produce AI-generated music covers and digital content",
        "🛠️ Tools Used: Suno AI, Sora AI, Kling AI, Replay AI, ElevenLabs, Jammable AI, Runway, CapCut, Photoshop AI",
        "🔥 Inspired by Singapore Polytechnic's AI initiatives"
      ]
    },
    {
      company: "YouTube - Gaming Channel",
      role: "FIFA Gaming Content Creator",
      period: "Jun 2020 - Present",
      type: "gaming",
      achievements: [
        "🎮 Singapore's fanciest FIFA player",
        "📈 Achieved over 200,000 total views",
        "🎬 Create FIFA Online 4 gaming videos, tutorials, and montages",
        "🛠️ Tools Used: CapCut, FIFA Online 4, Canva, Shotcut"
      ]
    },
    {
      company: "Lenovo PCCW Solutions",
      role: "IT Engineer",
      period: "Oct 2022 - Jan 2024",
      type: "support",
      achievements: [
        "🏫 Part of roaming IT engineer team supporting all five polytechnics",
        "📚 Library Support: Maintained AV equipment, CCTV, turnstiles",
        "🆘 Helpdesk: Provided walk-in counter and remote troubleshooting",
        "📋 Created user guides and managed hardware/software inventory"
      ]
    }
  ];

  const getCardStyle = (type: string) => {
    switch (type) {
      case 'current': return 'border-black bg-red-50';
      case 'creator': return 'border-black bg-purple-50';
      case 'gaming': return 'border-black bg-green-50';
      case 'support': return 'border-black bg-yellow-50';
      default: return 'border-black bg-gray-50';
    }
  };

  const getAccentColor = (type: string) => {
    switch (type) {
      case 'current': return 'bg-red-500';
      case 'creator': return 'bg-purple-500';
      case 'gaming': return 'bg-green-500';
      case 'support': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'current': return '⚙️';
      case 'creator': return '🎬';
      case 'gaming': return '🎮';
      case 'support': return '🔧';
      default: return '💼';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-600 via-blue-700 to-teal-800 relative overflow-hidden">
      {/* Tech circuit pattern background - modern technology theme */}
      <div className="absolute inset-0 opacity-12">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300d4ff' stroke-width='1.5'%3E%3Cpath d='M20 20 L40 60 L80 40 L120 80 L160 60 L180 100 L160 140 L120 120 L80 160 L40 140 L20 180 L40 140 L80 160 L120 120 L160 140 L180 100'/%3E%3Ccircle cx='50' cy='50' r='10' fill='%2300d4ff' opacity='0.4'/%3E%3Ccircle cx='150' cy='50' r='10' fill='%2300d4ff' opacity='0.4'/%3E%3Ccircle cx='50' cy='150' r='10' fill='%2300d4ff' opacity='0.4'/%3E%3Ccircle cx='150' cy='150' r='10' fill='%2300d4ff' opacity='0.4'/%3E%3C/g%3E%3Cg fill='%23ffffff' opacity='0.6'%3E%3Cpath d='M100 20 L120 40 L100 60 L80 40 Z'/%3E%3Cpath d='M100 140 L120 160 L100 180 L80 160 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>

      {/* Digital grid overlay */}
      <div className="absolute inset-0 opacity-8">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(90deg, #00d4ff 1px, transparent 1px), linear-gradient(0deg, #00d4ff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating tech elements - modern cyan/blue theme */}
      <div className="absolute top-20 left-10 w-18 h-18 bg-gradient-to-r from-sky-300 to-cyan-400 opacity-25 animate-pulse transform rotate-45 rounded-lg"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-10 w-14 h-14 bg-gradient-to-r from-teal-300 to-cyan-400 opacity-25 animate-bounce transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-blue-200 to-sky-300 rounded-full opacity-30 animate-float"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - matching Projects/Skills/About style */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-16">
            {/* New Comic Book Speech Bubble Heading */}
            <div className="relative inline-block mb-8">
              <div className="bg-white border-8 border-black rounded-3xl px-12 py-6 transform rotate-1 shadow-2xl relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
                
                {/* Main heading text */}
                <h2 className="typography-heading-xl text-red-600 relative z-10 text-comic-shadow transform -skew-x-1">
                  WORK EXPERIENCE
                </h2>
                
                {/* Comic book action lines */}
                <div className="absolute -top-4 -left-4 w-16 h-1 bg-green-400 transform -rotate-45 animate-pulse"></div>
                <div className="absolute -top-2 -left-6 w-12 h-1 bg-purple-500 transform -rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-4 -right-4 w-14 h-1 bg-orange-500 transform rotate-45 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Layout with enhanced typography */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={200 + index * 100}>
              <div className="relative mb-12">

                
                <div className="flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className={`w-16 h-16 ${getAccentColor(exp.type)} rounded-full flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                    {getTypeIcon(exp.type)}
                  </div>
                  
                  {/* Content Card with improved typography */}
                  <Card className={`flex-1 ${getCardStyle(exp.type)} border-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-2xl`}>
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <CardTitle className="typography-heading-md text-gray-800 mb-2 leading-tight">
                            {exp.role}
                          </CardTitle>
                          <p className="typography-body-xl font-semibold text-gray-600">{exp.company}</p>
                        </div>
                        <div className="text-right ml-4">
                          <Badge className="bg-gray-800 text-white typography-caption px-3 py-1">
                            {exp.period}
                          </Badge>
                          {exp.type === 'current' && (
                            <div className="bg-green-500 text-white px-3 py-1 rounded typography-caption mt-2 text-center animate-pulse">
                              CURRENT
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="grid gap-1">
                        {exp.achievements.map((achievement, i) => {
                          // Check if this is a section header (starts with ** and ends with **)
                          const isSectionHeader = achievement.includes('**');
                          const cleanedAchievement = achievement.replace(/\*\*/g, '');
                          
                          return (
                            <div key={i} className={`flex items-start gap-2 p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all ${
                              isSectionHeader ? 'mt-2 first:mt-0' : ''
                            }`}>
                              <p className={`text-gray-700 leading-snug ${
                                isSectionHeader ? 'typography-body-lg font-bold' : 'typography-body-sm'
                              }`}>
                                {cleanedAchievement}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  );
}