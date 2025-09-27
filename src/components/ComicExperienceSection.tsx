import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollReveal } from "./ScrollReveal";
import { ScrollRevealCSS } from "./ScrollRevealCSS";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useMemo } from "react";

export function ComicExperienceSection() {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});
  
  const toggleSection = (expIndex: number, sectionIndex: number) => {
    const key = `${expIndex}-${sectionIndex}`;
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const experiences = useMemo(() => [
    {
      company: "Singapore Polytechnic",
      role: "Systems & Technology Executive",
      period: "Feb 2024 - Present",
      type: "current",
      direction: "left" as const,
      slideDirection: "left" as const,
      bubbleColor: "bg-red-400",
      icon: "⚙️",
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
      direction: "right" as const,
      slideDirection: "right" as const,
      bubbleColor: "bg-purple-400",
      icon: "🎬",
      achievements: [
        "🎥 **Content Creation & Performance**",
        "🏆 Achieved over 1 Million impressions in 6 months",
        "🏆 Generated more than 250,000 views within 6 months",
        "🎥 Produce AI-generated music covers and digital content",
        "🔥 Inspired by Singapore Polytechnic's AI initiatives",
        "🛠️ **Tools & Technology**",
        "🛠️ Tools Used: Suno AI, Sora AI, Kling AI, Replay AI, ElevenLabs, Jammable AI, Runway, CapCut, Photoshop AI"
      ]
    },
    {
      company: "YouTube - Gaming Channel",
      role: "FIFA Gaming Content Creator",
      period: "Jun 2020 - Present",
      type: "gaming",
      direction: "left" as const,
      slideDirection: "left" as const,
      bubbleColor: "bg-green-400",
      icon: "🎮",
      achievements: [
        "🎮 **Gaming Content & Performance**",
        "🎮 Singapore's fanciest FIFA player",
        "📈 Achieved over 200,000 total views",
        "🎬 Create FIFA Online 4 gaming videos, tutorials, and montages",
        "🛠️ **Tools & Production**",
        "🛠️ Tools Used: CapCut, FIFA Online 4, Canva, Shotcut"
      ]
    },
    {
      company: "Lenovo PCCW Solutions",
      role: "IT Engineer",
      period: "Oct 2022 - Jan 2024",
      type: "support",
      direction: "right" as const,
      slideDirection: "right" as const,
      bubbleColor: "bg-yellow-400",
      icon: "🔧",
      achievements: [
        "🏫 **Technical Support & Operations**",
        "🏫 Part of roaming IT engineer team supporting all five polytechnics",
        "📚 Library Support: Maintained AV equipment, CCTV, turnstiles",
        "🆘 Helpdesk: Provided walk-in counter and remote troubleshooting",
        "📋 **Documentation & Management**",
        "📋 Created user guides and managed hardware/software inventory"
      ]
    }
  ], []);

  // Process achievements into sections
  const processedExperiences = useMemo(() => {
    return experiences.map(exp => {
      const sections: { header: string; items: string[] }[] = [];
      let currentSection: { header: string; items: string[] } | null = null;
      
      exp.achievements.forEach((achievement) => {
        const isSectionHeader = achievement.includes('**');
        const cleanedAchievement = achievement.replace(/\*\*/g, '');
        
        if (isSectionHeader) {
          if (currentSection) {
            sections.push(currentSection);
          }
          currentSection = { header: cleanedAchievement, items: [] };
        } else if (currentSection) {
          currentSection.items.push(cleanedAchievement);
        }
      });
      
      if (currentSection) {
        sections.push(currentSection);
      }
      
      return { ...exp, sections };
    });
  }, [experiences]);

  return (
    <section className="py-10 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Professional Dark Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3C!-- Professional flowing cape pattern --%3E%3Cpath d='M25 25 L55 15 L85 35 L115 20 L145 40 L175 30 L165 60 L135 80 L165 110 L175 140 L145 160 L115 170 L85 150 L55 175 L25 155 L15 125 L45 105 L15 75 L25 45 Z' fill='%23ffffff' opacity='0.25' stroke='%2306b6d4' stroke-width='1'/%3E%3C!-- Corporate shield emblems --%3E%3Cpath d='M100 70 L118 52 L136 70 L118 98 Z' fill='%23ffffff' opacity='0.4' stroke='%2306b6d4' stroke-width='1.5'/%3E%3Cpath d='M64 130 L82 112 L100 130 L82 158 Z' fill='%23ffffff' opacity='0.4' stroke='%2306b6d4' stroke-width='1.5'/%3E%3C!-- Enhanced tech briefcase pattern --%3E%3Crect x='35' y='35' width='30' height='22' rx='4' fill='none' stroke='%23fbbf24' stroke-width='2.5' opacity='0.6'/%3E%3Crect x='135' y='135' width='30' height='22' rx='4' fill='none' stroke='%23fbbf24' stroke-width='2.5' opacity='0.6'/%3E%3Ccircle cx='50' cy='46' r='2' fill='%23fbbf24' opacity='0.8'/%3E%3Ccircle cx='150' cy='146' r='2' fill='%23fbbf24' opacity='0.8'/%3E%3C!-- Professional power lightning --%3E%3Cpath d='M150 80 L162 98 L156 98 L168 116 L150 110 L156 110 L144 92 Z' fill='%23fbbf24' opacity='0.7' stroke='%23ffffff' stroke-width='1'/%3E%3Cpath d='M50 160 L62 178 L56 178 L68 196 L50 190 L56 190 L44 172 Z' fill='%23fbbf24' opacity='0.7' stroke='%23ffffff' stroke-width='1'/%3E%3C!-- Advanced circuit connections --%3E%3Cg stroke='%23ffffff' stroke-width='2' opacity='0.35'%3E%3Cpath d='M70 70 L130 70 L130 130 L70 130 L70 70'/%3E%3Ccircle cx='85' cy='85' r='4' fill='%23ffffff' opacity='0.8'/%3E%3Ccircle cx='115' cy='85' r='4' fill='%23ffffff' opacity='0.8'/%3E%3Ccircle cx='100' cy='115' r='4' fill='%23ffffff' opacity='0.8'/%3E%3Cpath d='M85 85 L115 85 M100 85 L100 115' stroke-width='1.5'/%3E%3C/g%3E%3C!-- Professional achievement stars --%3E%3Cpath d='M40 100 L44 108 L52 108 L46 114 L48 122 L40 118 L32 122 L34 114 L28 108 L36 108 Z' fill='%2306b6d4' opacity='0.6'/%3E%3Cpath d='M160 60 L164 68 L172 68 L166 74 L168 82 L160 78 L152 82 L154 74 L148 68 L156 68 Z' fill='%2306b6d4' opacity='0.6'/%3E%3C!-- Dynamic action words --%3E%3Ctext x='20' y='110' font-family='Arial Black' font-size='13' fill='%2306b6d4' opacity='0.5'%3ETECH!%3C/text%3E%3Ctext x='140' y='55' font-family='Arial Black' font-size='11' fill='%23ffffff' opacity='0.6'%3EPRO!%3C/text%3E%3Ctext x='80' y='25' font-family='Arial Black' font-size='10' fill='%23fbbf24' opacity='0.7'%3ELEAD!%3C/text%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>
      
      {/* Additional depth layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      {/* Professional floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 transform rotate-45 opacity-20 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-10 w-14 h-14 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header - Consistent with Projects and Skills */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-8">
            {/* New Comic Book Speech Bubble Heading */}
            <div className="relative inline-block mb-8">
              <div className="bg-white border-8 border-black rounded-3xl px-12 py-6 transform rotate-1 shadow-2xl relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
                
                {/* Main heading text */}
                <h2 className="typography-heading-xl text-red-600 relative z-10 text-comic-shadow transform skew-x-1">
                  WORK EXPERIENCE
                </h2>
                
                {/* Comic book action lines */}
                <div className="absolute -top-4 -right-4 w-16 h-1 bg-cyan-400 transform rotate-45 animate-pulse"></div>
                <div className="absolute -top-2 -right-6 w-12 h-1 bg-pink-500 transform rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-4 -left-4 w-14 h-1 bg-yellow-400 transform -rotate-45 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="space-y-8">
          {processedExperiences.map((exp, index) => {
            // Alternating Slide Zigzag: Left, Right, Left, Right
            const zigzagDirection = index % 2 === 0 ? 'left' : 'right';
            const zigzagDelay = 100 + index * 100; // Much faster slide-in timing
            
            return (
              <ScrollRevealCSS key={index} direction={zigzagDirection} delay={zigzagDelay}>
                <div className={`flex items-start gap-6 ${
                  exp.direction === 'right' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                
                {/* Character Avatar with Tilt Effects */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-4 border-black shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300">
                    <div className="text-3xl">{exp.icon}</div>
                  </div>
                </div>

                {/* Main Speech Bubble with Slight Tilt Hover */}
                <div className="flex-1 relative max-w-4xl group cursor-pointer">
                  <div className={`${exp.bubbleColor} border-4 border-black rounded-xl p-1 shadow-xl transform ${
                    exp.direction === 'right' ? 'group-hover:rotate-2' : 'group-hover:-rotate-2'
                  } transition-all duration-300 group-hover:shadow-2xl`}>
                    
                    {/* Speech bubble tail */}
                    <div className={`absolute top-8 ${
                      exp.direction === 'right' ? 'right-[-16px]' : 'left-[-16px]'
                    }`}>
                      <div 
                        className={`w-0 h-0 ${
                          exp.direction === 'right' 
                            ? 'border-l-[20px] border-t-[12px] border-b-[12px] border-t-transparent border-b-transparent' 
                            : 'border-r-[20px] border-t-[12px] border-b-[12px] border-t-transparent border-b-transparent'
                        }`}
                        style={{ 
                          borderLeftColor: exp.direction === 'right' ? 
                            (exp.bubbleColor === 'bg-red-400' ? '#f87171' : 
                             exp.bubbleColor === 'bg-purple-400' ? '#a78bfa' : 
                             exp.bubbleColor === 'bg-green-400' ? '#4ade80' : '#facc15') : 'transparent',
                          borderRightColor: exp.direction === 'left' ? 
                            (exp.bubbleColor === 'bg-red-400' ? '#f87171' : 
                             exp.bubbleColor === 'bg-purple-400' ? '#a78bfa' : 
                             exp.bubbleColor === 'bg-green-400' ? '#4ade80' : '#facc15') : 'transparent'
                        }}
                      />
                    </div>

                    {/* Content Card with Tilt Hover */}
                    <Card className="bg-white border-2 border-black rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-4">
                        
                        {/* Job Header */}
                        <div className="mb-3">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h3 className="typography-heading-sm text-black mb-1">
                                {exp.role}
                              </h3>
                              <p className="typography-body-lg text-gray-700">
                                {exp.company}
                              </p>
                            </div>
                            <Badge className="bg-black text-white typography-body-sm px-2 py-1 ml-4">
                              {exp.period}
                            </Badge>
                          </div>
                        </div>

                        {/* Collapsible Sections */}
                        <div className="space-y-2">
                          {exp.sections.map((section, sectionIndex) => {
                            const key = `${index}-${sectionIndex}`;
                            const isOpen = openSections[key] || false; // Default to false (closed)
                            
                            return (
                              <Collapsible 
                                key={sectionIndex} 
                                open={isOpen} 
                                onOpenChange={() => toggleSection(index, sectionIndex)}
                              >
                                <CollapsibleTrigger className="w-full">
                                  <div className="bg-gradient-to-r from-red-500 to-purple-600 border-2 border-black rounded-lg p-2.5 cursor-pointer group hover:from-red-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    <div className="flex items-center justify-between">
                                      <h4 className="typography-body text-white text-left flex-1">
                                        {section.header}
                                      </h4>
                                      <div className="ml-2">
                                        {isOpen ? (
                                          <ChevronUp className="w-4 h-4 text-white transition-transform duration-300 rotate-0" />
                                        ) : (
                                          <ChevronDown className="w-4 h-4 text-white transition-transform duration-300 rotate-0" />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </CollapsibleTrigger>
                                
                                <CollapsibleContent className="mt-1.5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-up-1 data-[state=open]:slide-down-1 duration-300">
                                  <div className="space-y-1.5 pl-2">
                                    {section.items.map((item, itemIndex) => (
                                      <div key={itemIndex} className="p-2.5 bg-gray-50 border border-gray-300 rounded-md hover:bg-yellow-100 hover:border-yellow-400 transition-all duration-200 hover:scale-102 hover:shadow-md transform opacity-0 animate-fade-in-up" style={{animationDelay: `${itemIndex * 100}ms`, animationFillMode: 'forwards'}}>
                                        <p className="typography-body-sm text-gray-800">
                                          {item}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </CollapsibleContent>
                              </Collapsible>
                            );
                          })}
                        </div>
                        
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </ScrollRevealCSS>
          );
          })}
        </div>
      </div>
    </section>
  );
}