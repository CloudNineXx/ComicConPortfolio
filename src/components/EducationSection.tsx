import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useState } from "react";

export function EducationSection() {
  const [stackedCards, setStackedCards] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('education');
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // When 60% of the section is visible, trigger unstacking (much later)
        if (rect.top < viewportHeight * 0.4 && rect.bottom > viewportHeight * 0.2) {
          setStackedCards(false);
        } else if (rect.top > viewportHeight * 0.6) {
          setStackedCards(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const education = [
    {
      institution: "Singapore Polytechnic",
      degree: "Specialist Diploma in User Experience and Digital Product Design (UI UX)",
      period: "Oct 2025 - Sep 2026",
      status: "Currently studying",
      icon: "🎨",
      color: "from-purple-600 to-indigo-700"
    },
    {
      institution: "Republic Polytechnic",
      degree: "Diploma in Business Applications, Business IT",
      period: "2017 - 2020",
      status: "Graduated",
      icon: "💼",
      color: "from-blue-600 to-cyan-700"
    },
    {
      institution: "Jurong Secondary School",
      degree: "Cambridge 'O' Levels",
      period: "2013 - 2016",
      status: "Graduated",
      icon: "📚",
      color: "from-emerald-600 to-teal-700"
    }
  ];

  return (
    <section id="education" className="min-h-[100vh] flex flex-col justify-start pt-16 pb-8 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 relative z-30">
      {/* Comic Con Academic Achievement Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3C!-- Classic academic shields --%3E%3Cpath d='M75 10 L95 25 L100 55 L75 80 L50 55 L55 25 Z' fill='%23000000' opacity='0.4' stroke='%23000000' stroke-width='3'/%3E%3Cpath d='M20 20 L35 30 L40 45 L20 55 L0 45 L5 30 Z' fill='%23000000' opacity='0.35' stroke='%23000000' stroke-width='2'/%3E%3Cpath d='M130 95 L145 105 L150 120 L130 130 L110 120 L115 105 Z' fill='%23000000' opacity='0.35' stroke='%23000000' stroke-width='2'/%3E%3C!-- Achievement graduation caps --%3E%3Cpath d='M30 70 L55 60 L80 70 L67 78 L55 74 L43 78 Z' fill='%23000000' opacity='0.5' stroke='%23000000' stroke-width='2'/%3E%3Crect x='50' y='74' width='10' height='10' fill='%23000000' opacity='0.5'/%3E%3Cpath d='M95 40 L120 30 L145 40 L132 48 L120 44 L108 48 Z' fill='%23000000' opacity='0.45' stroke='%23000000' stroke-width='2'/%3E%3Crect x='115' y='44' width='10' height='10' fill='%23000000' opacity='0.45'/%3E%3C!-- Academic achievement lightning --%3E%3Cpath d='M10 130 L20 142 L15 142 L25 150 L10 146 L15 146 L5 134 Z' fill='%23000000' opacity='0.6'/%3E%3Cpath d='M140 15 L150 27 L145 27 L155 35 L140 31 L145 31 L135 19 Z' fill='%23000000' opacity='0.6'/%3E%3C!-- Knowledge books --%3E%3Cg fill='%23000000' opacity='0.4'%3E%3Crect x='8' y='90' width='20' height='3' rx='1'/%3E%3Crect x='8' y='95' width='18' height='3' rx='1'/%3E%3Crect x='8' y='100' width='22' height='3' rx='1'/%3E%3Crect x='122' y='5' width='20' height='3' rx='1'/%3E%3Crect x='122' y='10' width='18' height='3' rx='1'/%3E%3Crect x='122' y='15' width='22' height='3' rx='1'/%3E%3C/g%3E%3C!-- Academic stars --%3E%3Cpath d='M75 30 L79 37 L87 37 L81 42 L83 50 L75 46 L67 50 L69 42 L63 37 L71 37 Z' fill='%23000000' opacity='0.6'/%3E%3Cpath d='M35 35 L39 42 L47 42 L41 47 L43 55 L35 51 L27 55 L29 47 L23 42 L31 42 Z' fill='%23000000' opacity='0.5'/%3E%3Cpath d='M115 115 L119 122 L127 122 L121 127 L123 135 L115 131 L107 135 L109 127 L103 122 L111 122 Z' fill='%23000000' opacity='0.5'/%3E%3C!-- Comic text --%3E%3Ctext x='2' y='12' font-family='Arial Black' font-size='10' fill='%23000000' opacity='0.6'%3ELEARN!%3C/text%3E%3Ctext x='110' y='148' font-family='Arial Black' font-size='9' fill='%23000000' opacity='0.7'%3EGROW!%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-16 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-24 right-16 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 transform rotate-45 opacity-30 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-12 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-30 animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-30">
        {/* Section Header - Keep in same position */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-6">
            <div className="relative inline-block mb-3">
              <div className="bg-white border-6 border-black rounded-3xl px-6 py-3 transform -rotate-1 shadow-2xl relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
                
                <h2 className="typography-heading-xl text-red-600 relative z-10 text-comic-shadow transform skew-x-1">
                  EDUCATION
                </h2>
                
                {/* Comic book action lines */}
                <div className="absolute -top-4 -right-4 w-16 h-1 bg-cyan-400 transform rotate-45 animate-pulse"></div>
                <div className="absolute -top-2 -right-6 w-12 h-1 bg-pink-500 transform rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-4 -left-4 w-14 h-1 bg-yellow-400 transform -rotate-45 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Education Timeline with Stacking Effect - Centralized Content Container */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl mx-auto h-auto min-h-[300px] mb-6">
            {education.map((edu, index) => {
              // Calculate stacking positions - Compact spacing
              const stackOffset = stackedCards ? (index * 15) : (index * 90);
              const stackRotation = stackedCards ? (index * 1.5 - 1.5) : 0;
              const stackScale = stackedCards ? (1 - index * 0.04) : 1;
              const stackZ = stackedCards ? (education.length - index) : 1;
              const stackOpacity = stackedCards && index > 0 ? 0.85 : 1;

              return (
                <div
                  key={index}
                  className={`absolute w-full transition-all duration-1000 ease-out ${
                    stackedCards ? 'top-0' : `top-0`
                  }`}
                  style={{
                    transform: `translateY(${stackOffset}px) rotate(${stackRotation}deg) scale(${stackScale})`,
                    zIndex: stackZ,
                    opacity: stackOpacity,
                    top: stackedCards ? '0px' : `${index * 90}px`,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <Card className="border-4 border-black shadow-xl bg-gradient-to-br from-gray-50 to-white overflow-hidden rounded-xl hover:scale-102 transition-all duration-300 relative">
                    
                    {/* Status Badge - Compact */}
                    <div className="absolute top-2 right-2 z-20">
                      <Badge className={`px-2 py-0.5 text-xs border-2 border-black shadow-md ${
                        edu.status === "Currently studying" 
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white animate-pulse" 
                          : "bg-gradient-to-r from-gray-600 to-gray-700 text-white"
                      }`}>
                        {edu.status}
                      </Badge>
                    </div>

                    {/* Education Header - Compact */}
                    <CardHeader className={`bg-gradient-to-r ${edu.color} text-white py-3 pb-3 relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full" style={{
                          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>
                      
                      <div className="relative z-10 flex items-start gap-3">
                        {/* Institution Icon - Compact */}
                        <div className="text-3xl bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center border-2 border-white shadow-lg flex-shrink-0">
                          {edu.icon}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <CardTitle className="typography-heading-sm text-white text-comic-shadow mb-1 leading-tight">
                            {edu.institution}
                          </CardTitle>
                          <p className="typography-body text-gray-100 mb-1 leading-snug">
                            {edu.degree}
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full border border-gray-300 typography-body-sm font-medium">
                              📅 {edu.period}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal spacer */}
        <div className={`transition-all duration-1000 ${stackedCards ? 'h-2' : 'h-4'}`}></div>
      </div>
    </section>
  );
}