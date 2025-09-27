import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollReveal } from "./ScrollReveal";

export function ComicExperienceSectionV2() {
  const experiences = [
    {
      company: "Singapore Polytechnic",
      role: "Systems & Technology Executive",
      period: "Feb 2024 - Present",
      type: "current",
      direction: "left",
      panelStyle: "bg-gradient-to-br from-red-400 to-red-600",
      borderColor: "border-red-600",
      textColor: "text-red-900",
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
      direction: "right",
      panelStyle: "bg-gradient-to-br from-purple-400 to-purple-600",
      borderColor: "border-purple-600",
      textColor: "text-purple-900",
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
      direction: "left",
      panelStyle: "bg-gradient-to-br from-green-400 to-green-600",
      borderColor: "border-green-600",
      textColor: "text-green-900",
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
      direction: "right",
      panelStyle: "bg-gradient-to-br from-yellow-400 to-orange-500",
      borderColor: "border-orange-600",
      textColor: "text-orange-900",
      achievements: [
        "🏫 Part of roaming IT engineer team supporting all five polytechnics",
        "📚 Library Support: Maintained AV equipment, CCTV, turnstiles",
        "🆘 Helpdesk: Provided walk-in counter and remote troubleshooting",
        "📋 Created user guides and managed hardware/software inventory"
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'current': return '⚙️';
      case 'creator': return '🎬';
      case 'gaming': return '🎮';
      case 'support': return '🔧';
      default: return '💼';
    }
  };

  const getSuperPower = (type: string) => {
    switch (type) {
      case 'current': return 'TECH WIZARD!';
      case 'creator': return 'CONTENT MASTER!';
      case 'gaming': return 'GAMING LEGEND!';
      case 'support': return 'PROBLEM SOLVER!';
      default: return 'SUPER HERO!';
    }
  };

  const getActionWord = (index: number) => {
    const words = ['BOOM!', 'POW!', 'WOW!', 'BANG!'];
    return words[index] || 'WOW!';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Dynamic Comic Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M10 10 L30 30 M70 10 L90 30 M10 70 L30 90 M70 70 L90 90'/%3E%3Ccircle cx='50' cy='50' r='20' fill='%23ffff00' opacity='0.3'/%3E%3Cpolygon points='50,15 60,35 80,35 65,50 70,70 50,60 30,70 35,50 20,35 40,35' fill='%23ff0066' opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Action Words */}
      <div className="absolute top-16 left-8 text-6xl font-black text-yellow-400 opacity-20 transform rotate-12 animate-pulse">BOOM!</div>
      <div className="absolute top-32 right-12 text-5xl font-black text-red-400 opacity-25 transform -rotate-12 animate-bounce">POW!</div>
      <div className="absolute bottom-24 left-16 text-4xl font-black text-green-400 opacity-20 transform rotate-45 animate-float">WOW!</div>
      <div className="absolute bottom-40 right-20 text-7xl font-black text-purple-400 opacity-15 transform -rotate-25 animate-pulse">BANG!</div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Comic Book Title Panel */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-24">
            <div className="relative inline-block">
              {/* Title Panel Background */}
              <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 p-1 rounded-3xl transform -rotate-1 shadow-3xl">
                <div className="bg-white rounded-3xl px-16 py-12 relative">
                  {/* Jagged comic border effect */}
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: `linear-gradient(45deg, transparent 10px, #000 10px, #000 15px, transparent 15px),
                                linear-gradient(-45deg, transparent 10px, #000 10px, #000 15px, transparent 15px)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 0'
                  }}></div>
                  
                  <div className="relative z-10">
                    <h2 className="typography-display text-black text-comic-shadow mb-4 transform skew-x-3">
                      WORK EXPERIENCE
                    </h2>
                    <div className="flex justify-center items-center gap-4 text-4xl">
                      <span className="animate-bounce">💥</span>
                      <span className="animate-pulse">⚡</span>
                      <span className="animate-float">🌟</span>
                      <span className="animate-bounce delay-150">🚀</span>
                      <span className="animate-pulse delay-300">🔥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action lines radiating from title */}
              <div className="absolute -top-8 -left-8 w-24 h-1 bg-yellow-400 transform -rotate-45 animate-pulse"></div>
              <div className="absolute -top-6 -left-10 w-20 h-1 bg-red-500 transform -rotate-45 animate-pulse delay-150"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-1 bg-purple-500 transform rotate-45 animate-pulse delay-300"></div>
              <div className="absolute -bottom-6 -right-10 w-20 h-1 bg-green-500 transform rotate-45 animate-pulse delay-450"></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Comic Panel Grid */}
        <div className="max-w-7xl mx-auto space-y-24">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} direction={exp.direction} delay={200 + index * 200}>
              <div className={`flex items-stretch gap-8 ${
                exp.direction === 'right' ? 'flex-row-reverse' : 'flex-row'
              }`}>
                
                {/* Action Word Burst */}
                <div className="flex-shrink-0 flex items-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-8 border-black flex items-center justify-center shadow-3xl transform hover:scale-110 transition-all duration-300">
                      <div className="text-center">
                        <div className="text-5xl mb-1">{getTypeIcon(exp.type)}</div>
                        <div className="typography-caption text-black font-black">
                          {getActionWord(index)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Radiating lines */}
                    <div className="absolute inset-0 animate-spin-slow">
                      <div className="absolute top-0 left-1/2 w-1 h-8 bg-yellow-400 transform -translate-x-1/2 -translate-y-8"></div>
                      <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-red-500 transform -translate-x-1/2 translate-y-8"></div>
                      <div className="absolute left-0 top-1/2 h-1 w-8 bg-purple-500 transform -translate-y-1/2 -translate-x-8"></div>
                      <div className="absolute right-0 top-1/2 h-1 w-8 bg-green-500 transform -translate-y-1/2 translate-x-8"></div>
                    </div>

                    {/* Current role special effect */}
                    {exp.type === 'current' && (
                      <div className="absolute -top-4 -right-4 bg-green-500 border-4 border-black rounded-xl px-3 py-1 animate-bounce">
                        <span className="typography-caption text-white font-black">ACTIVE!</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Main Comic Panel */}
                <div className="flex-1 relative">
                  {/* Panel Frame */}
                  <div className={`${exp.panelStyle} border-8 ${exp.borderColor} rounded-3xl p-2 shadow-3xl transform ${
                    exp.direction === 'right' ? 'rotate-1' : '-rotate-1'
                  } hover:rotate-0 transition-all duration-500`}>
                    
                    {/* Inner Content Panel */}
                    <Card className="bg-white bg-opacity-95 border-4 border-black rounded-2xl h-full shadow-xl">
                      <CardContent className="p-8">
                        
                        {/* Header with Thought Bubble */}
                        <div className="relative mb-8">
                          {/* Main Role Title - Fixed typography */}
                          <div className="text-center mb-6">
                            <h3 className="typography-heading-md text-black text-comic-shadow mb-2 leading-tight">
                              {exp.role}
                            </h3>
                            <p className="typography-body-xl font-bold text-gray-700 mb-2">
                              {exp.company}
                            </p>
                            <Badge className={`${exp.panelStyle} text-white typography-body font-black px-6 py-2 text-lg border-4 border-black transform rotate-2 hover:rotate-0 transition-transform shadow-lg`}>
                              {exp.period}
                            </Badge>
                          </div>

                          {/* Thought Bubble with Super Power */}
                          <div className={`absolute ${
                            exp.direction === 'right' ? 'right-0 -top-4' : 'left-0 -top-4'
                          }`}>
                            <div className="relative bg-yellow-300 border-4 border-black rounded-2xl px-4 py-2 shadow-lg">
                              <span className="typography-caption text-black font-black">
                                {getSuperPower(exp.type)}
                              </span>
                              {/* Thought bubble tail */}
                              <div className={`absolute top-full ${
                                exp.direction === 'right' ? 'right-4' : 'left-4'
                              } space-y-1`}>
                                <div className="w-3 h-3 bg-yellow-300 border-2 border-black rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-300 border-2 border-black rounded-full ml-2"></div>
                                <div className="w-1 h-1 bg-yellow-300 border border-black rounded-full ml-3"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Achievement Panels */}
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, i) => {
                            const isSectionHeader = achievement.includes('**');
                            const cleanedAchievement = achievement.replace(/\*\*/g, '');
                            
                            return (
                              <div key={i} className={`relative ${
                                isSectionHeader ? 'mb-4 mt-6 first:mt-0' : ''
                              }`}>
                                {isSectionHeader ? (
                                  <div className="bg-gradient-to-r from-red-400 to-purple-500 border-4 border-black rounded-xl p-3 transform -skew-x-1 shadow-lg">
                                    <h4 className="typography-body-lg font-black text-white text-comic-shadow">
                                      {cleanedAchievement}
                                    </h4>
                                  </div>
                                ) : (
                                  <div className="flex items-start gap-3 p-3 bg-gray-50 border-2 border-gray-300 rounded-lg hover:bg-yellow-100 hover:border-yellow-400 transition-all transform hover:scale-105 hover:-skew-x-1">
                                    <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 animate-pulse border border-black"></div>
                                    <p className="typography-body-sm text-gray-800 leading-relaxed flex-1">
                                      {cleanedAchievement}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Comic Effect Elements */}
                        <div className="absolute -bottom-2 -left-2 text-3xl animate-bounce">💥</div>
                        <div className="absolute -top-2 -right-2 text-2xl animate-pulse">⭐</div>
                        
                      </CardContent>
                    </Card>
                  </div>

                  {/* Panel Shadow Effect */}
                  <div className={`absolute inset-0 ${exp.panelStyle} border-8 ${exp.borderColor} rounded-3xl transform translate-x-2 translate-y-2 -z-10 opacity-50`}></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Final Action Panel */}
        <ScrollReveal direction="scale" delay={1000}>
          <div className="text-center mt-32">
            <div className="relative inline-block">
              <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 border-8 border-black rounded-3xl px-16 py-8 transform rotate-2 shadow-3xl">
                <div className="text-center">
                  <h3 className="typography-heading-lg text-white text-comic-shadow mb-4">
                    READY FOR THE NEXT ADVENTURE!
                  </h3>
                  <div className="flex justify-center items-center gap-4 text-4xl">
                    <span className="animate-bounce">🚀</span>
                    <span className="animate-pulse">🌟</span>
                    <span className="animate-float">💫</span>
                  </div>
                </div>
                
                {/* Explosion lines */}
                <div className="absolute -top-6 -left-6 w-20 h-2 bg-yellow-400 transform -rotate-45 animate-pulse"></div>
                <div className="absolute -top-4 -left-8 w-16 h-2 bg-red-500 transform -rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-6 -right-6 w-18 h-2 bg-purple-500 transform rotate-45 animate-pulse delay-300"></div>
                <div className="absolute -bottom-4 -right-8 w-14 h-2 bg-green-500 transform rotate-45 animate-pulse delay-450"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}