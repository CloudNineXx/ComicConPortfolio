import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useState, useRef } from "react";

export function HorizontalExperienceSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const accumulatedScroll = useRef(0);

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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = (e: WheelEvent) => {
      if (!isActive) return;

      e.preventDefault();
      e.stopPropagation();

      // Accumulate scroll delta
      accumulatedScroll.current += e.deltaY;

      // Each step requires 150px of scroll
      const scrollThreshold = 150;
      const newStep = Math.floor(accumulatedScroll.current / scrollThreshold);
      const clampedStep = Math.max(0, Math.min(experiences.length - 1, newStep));

      setCurrentStep(clampedStep);

      // If we've scrolled past all experiences and continue scrolling down
      if (accumulatedScroll.current > (experiences.length - 1) * scrollThreshold + 100 && e.deltaY > 0) {
        setIsActive(false);
        accumulatedScroll.current = 0;
        // Re-enable normal scrolling
        document.body.style.overflow = 'auto';
        // Continue normal page scroll after a brief delay
        setTimeout(() => {
          window.scrollBy({ top: 100, behavior: 'smooth' });
        }, 100);
      }

      // If scrolling up past the first experience
      if (accumulatedScroll.current < -50 && e.deltaY < 0) {
        setIsActive(false);
        accumulatedScroll.current = 0;
        document.body.style.overflow = 'auto';
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
          console.log('Section activated!'); // Debug log
          setIsActive(true);
          setCurrentStep(0);
          accumulatedScroll.current = 0;
          document.body.style.overflow = 'hidden';
        }
      },
      { 
        threshold: [0.7],
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    observer.observe(section);

    // Add scroll listener directly to the section
    section.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      observer.disconnect();
      section.removeEventListener('wheel', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isActive, experiences.length]);

  return (
    <div 
      ref={sectionRef}
      className={`${isActive ? 'h-screen sticky top-0' : 'min-h-screen'} bg-gradient-to-br from-cyan-600 via-blue-700 to-teal-800 relative overflow-hidden flex items-center`}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-12">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2300d4ff' stroke-width='1.5'%3E%3Cpath d='M20 20 L40 60 L80 40 L120 80 L160 60 L180 100 L160 140 L120 120 L80 160 L40 140 L20 180 L40 140 L80 160 L120 120 L160 140 L180 100'/%3E%3Ccircle cx='50' cy='50' r='10' fill='%2300d4ff' opacity='0.4'/%3E%3Ccircle cx='150' cy='50' r='10' fill='%2300d4ff' opacity='0.4'/%3E%3Ccircle cx='50' cy='150' r='10' fill='%2300d4ff' opacity='0.4'/%3E%3Ccircle cx='150' cy='150' r='10' fill='%2300d4ff' opacity='0.4'/%3E%3C/g%3E%3Cg fill='%23ffffff' opacity='0.6'%3E%3Cpath d='M100 20 L120 40 L100 60 L80 40 Z'/%3E%3Cpath d='M100 140 L120 160 L100 180 L80 160 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>

      <div className="absolute inset-0 opacity-8">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(90deg, #00d4ff 1px, transparent 1px), linear-gradient(0deg, #00d4ff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-18 h-18 bg-gradient-to-r from-sky-300 to-cyan-400 opacity-25 animate-pulse transform rotate-45 rounded-lg"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-10 w-14 h-14 bg-gradient-to-r from-teal-300 to-cyan-400 opacity-25 animate-bounce transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-blue-200 to-sky-300 rounded-full opacity-30 animate-float"></div>

      {/* Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative inline-block">
          <div className="bg-white border-8 border-black rounded-3xl px-8 py-4 transform rotate-1 shadow-2xl relative">
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
            </div>
            
            <h2 className="typography-heading-lg text-red-600 relative z-10 text-comic-shadow transform -skew-x-1">
              WORK EXPERIENCE
            </h2>
            
            <div className="absolute -top-4 -left-4 w-16 h-1 bg-green-400 transform -rotate-45 animate-pulse"></div>
            <div className="absolute -top-2 -left-6 w-12 h-1 bg-purple-500 transform -rotate-45 animate-pulse delay-150"></div>
            <div className="absolute -bottom-4 -right-4 w-14 h-1 bg-orange-500 transform rotate-45 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20">
        <div className="flex flex-col gap-4">
          {experiences.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-500 ${
                index <= currentStep ? 'bg-yellow-400 scale-125' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
        
        <div className="mt-6 text-white text-center">
          <div className="typography-caption">
            {currentStep + 1} / {experiences.length}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 right-8 z-20 text-white text-center">
        {isActive && currentStep < experiences.length - 1 && (
          <div className="animate-bounce">
            <div className="typography-caption">SCROLL DOWN</div>
            <div className="text-2xl">⬇️</div>
          </div>
        )}
        {isActive && currentStep === experiences.length - 1 && (
          <div className="animate-pulse text-yellow-400">
            <div className="typography-caption">CONTINUE SCROLLING</div>
            <div className="text-2xl">⬇️</div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="w-full h-full flex items-center justify-center px-8 relative z-10">
        <div className="max-w-6xl w-full relative">
          
          {/* Cards Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-out"
              style={{ 
                transform: `translateX(-${currentStep * 100}%)`,
              }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-8"
                >
                  <div className="flex items-start gap-8">
                    {/* Timeline dot */}
                    <div className={`w-20 h-20 ${getAccentColor(exp.type)} rounded-full flex items-center justify-center text-3xl shadow-xl flex-shrink-0 border-4 border-white`}>
                      {getTypeIcon(exp.type)}
                    </div>
                    
                    {/* Content Card */}
                    <Card className={`flex-1 ${getCardStyle(exp.type)} border-6 shadow-2xl rounded-2xl`}>
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
                        <div className="grid gap-1 max-h-96 overflow-y-auto">
                          {exp.achievements.map((achievement, i) => {
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
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}