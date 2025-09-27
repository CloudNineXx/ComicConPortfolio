import { ScrollReveal } from "./ScrollReveal";
import { ScrollRevealCSS } from "./ScrollRevealCSS";

export function SkillsSection() {
  // Organized skills by category with clear groupings
  const skillCategories = [
    {
      title: "Tech Stack",
      icon: "⚡",
      color: "from-blue-500 to-blue-600",
      border: "border-blue-600",
      skills: [
        { name: "React JS", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "HTML CSS JS", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "GSAP", icon: "🎬" },
        { name: "MySQL", icon: "🗄️" },
        { name: "API Integration", icon: "🔗" }
      ]
    },
    {
      title: "Content Creation",
      icon: "🎬",
      color: "from-red-500 to-red-600",
      border: "border-red-600",
      skills: [
        { name: "YouTube Strategy", icon: "📺" },
        { name: "Video Editing", icon: "🎥" },
        { name: "CapCut", icon: "✂️" },
        { name: "Shotcut", icon: "🎞️" },
        { name: "Google Ads", icon: "📢" },
        { name: "SEO", icon: "🔍" }
      ]
    },
    {
      title: "Frameworks",
      icon: "🧠",
      color: "from-green-500 to-green-600",
      border: "border-green-600",
      skills: [
        { name: "Design Thinking", icon: "💡" },
        { name: "Product Lifecycle", icon: "🔄" },
        { name: "Six Sigma", icon: "📊" },
        { name: "SCAMPER", icon: "🎯" },
        { name: "6 Thinking Hats", icon: "🎩" },
        { name: "TRIZ Level 1", icon: "🔬" },
        { name: "TRIZ Level 2", icon: "🎓" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-[100vh] flex flex-col justify-center py-8 md:py-12 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Comic Con Hero Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3C!-- Hero mask shapes --%3E%3Cpath d='M80 20 L100 40 L120 20 L140 40 L120 60 L140 80 L120 100 L140 120 L120 140 L100 120 L80 140 L60 120 L40 140 L20 120 L40 100 L20 80 L40 60 L20 40 L40 20 L60 40 L80 20 Z' fill='%23ffffff' opacity='0.15'/%3E%3C!-- Lightning bolts --%3E%3Cpath d='M40 10 L50 30 L45 30 L55 50 L40 40 L45 40 L35 20 Z' fill='%23fbbf24' opacity='0.4'/%3E%3Cpath d='M120 110 L130 130 L125 130 L135 150 L120 140 L125 140 L115 120 Z' fill='%23fbbf24' opacity='0.4'/%3E%3C!-- Comic burst shapes --%3E%3Cpath d='M30 80 L35 70 L40 80 L50 75 L40 85 L50 90 L40 95 L35 85 L25 90 L30 80 Z' fill='%23ffffff' opacity='0.3'/%3E%3Cpath d='M130 40 L135 30 L140 40 L150 35 L140 45 L150 50 L140 55 L135 45 L125 50 L130 40 Z' fill='%23ffffff' opacity='0.3'/%3E%3C!-- Hero emblems --%3E%3Ccircle cx='80' cy='80' r='12' fill='none' stroke='%23ffffff' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M80 72 L85 77 L95 67 L90 82 L105 77 L85 82 L90 97 L80 87 L70 97 L75 82 L55 77 L70 82 L65 67 L75 77 Z' fill='%23fbbf24' opacity='0.5'/%3E%3C!-- Small power symbols --%3E%3Ctext x='25' y='35' font-family='Arial Black' font-size='14' fill='%23ff4444' opacity='0.6'%3EPOW!%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px'
        }}></div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-16 h-4 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-500 transform rotate-45 opacity-30 animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-4 md:mb-6">
            {/* Comic Book Speech Bubble Heading */}
            <div className="relative inline-block mb-3 md:mb-4">
              <div className="bg-white border-6 md:border-8 border-black rounded-3xl px-6 md:px-10 py-3 md:py-6 transform rotate-2 shadow-2xl relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
                
                {/* Main heading text */}
                <h2 className="typography-heading-xl text-red-600 relative z-10 text-comic-shadow transform -skew-x-2">
                  SKILLS
                </h2>
                
                {/* Comic book action lines */}
                <div className="absolute -top-4 -left-4 w-16 h-1 bg-emerald-400 transform -rotate-45 animate-pulse"></div>
                <div className="absolute -top-2 -left-6 w-12 h-1 bg-indigo-500 transform -rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-4 -right-4 w-14 h-1 bg-rose-500 transform rotate-45 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills by Category - Full Height Layout */}
        <div className="space-y-3 md:space-y-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Enhanced Category Header */}
              <ScrollReveal direction="left" delay={100 + categoryIndex * 100}>
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className={`
                    relative flex items-center gap-2 md:gap-3 bg-gradient-to-r ${category.color} 
                    text-white px-4 md:px-6 py-2 md:py-3 rounded-2xl border-3 md:border-4 border-black shadow-2xl
                    transform hover:scale-110 hover:rotate-1 transition-all duration-500
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-2xl
                    after:absolute after:-inset-1 after:bg-gradient-to-r after:${category.color} after:rounded-2xl after:-z-10 after:blur-sm after:opacity-50
                    overflow-hidden
                  `}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' opacity='0.1'%3E%3Cpath d='M10 0 L15 5 L10 10 L5 5 Z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '10px 10px'
                      }}></div>
                    </div>
                    
                    <span className="text-xl md:text-2xl relative z-10 drop-shadow-lg">{category.icon}</span>
                    <span className="typography-button text-white text-comic-shadow relative z-10">{category.title.toUpperCase()}</span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Enhanced Decorative line with animation */}
                  <div className="flex-1 relative">
                    <div className={`h-1.5 md:h-2 bg-gradient-to-r ${category.color} rounded-full opacity-60 relative overflow-hidden`}>
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-x-full animate-pulse"></div>
                    </div>
                    {/* Secondary line for depth */}
                    <div className={`absolute top-0.5 md:top-1 left-1 right-0 h-1.5 md:h-2 bg-gradient-to-r ${category.color} rounded-full opacity-30 blur-sm`}></div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Category Skills Grid - Beautiful Comic Cubes */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-11 gap-1.5 md:gap-2 mb-1 md:mb-2">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 10 + skillIndex; // For staggered animation
                  return (
                    <ScrollRevealCSS key={skillIndex} direction="scale" delay={200 + globalIndex * 40}>
                      <div className="group perspective-1000">
                        {/* Enhanced 3D Cube Container */}
                        <div className={`
                          relative w-full aspect-square bg-gradient-to-br ${category.color} 
                          border ${category.border} rounded-xl shadow-lg
                          transform-gpu transition-all duration-500 ease-out
                          hover:scale-125 hover:rotate-3 hover:shadow-2xl
                          cursor-pointer comic-cursor-pow
                          preserve-3d overflow-hidden
                          before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/20 before:to-transparent before:rounded-xl
                          after:absolute after:inset-0 after:bg-gradient-to-bl after:from-transparent after:to-black/10 after:rounded-xl
                        `}>
                          
                          {/* Static Background Pattern */}
                          <div className="absolute inset-0 opacity-15">
                            <div className="w-full h-full" style={{
                              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px), radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
                              backgroundSize: '8px 8px',
                              backgroundPosition: '0 0, 4px 4px'
                            }}></div>
                          </div>

                          {/* Front Face - Enhanced */}
                          <div className="absolute inset-0.5 md:inset-1 bg-gradient-to-br from-white via-white to-gray-50 rounded-lg flex flex-col items-center justify-center p-0.5 md:p-1 shadow-inner backface-hidden border border-gray-200">
                            {/* Icon with basic effects */}
                            <div className="text-xs sm:text-sm md:text-lg mb-0.5 md:mb-1 filter drop-shadow-lg group-hover:animate-bounce group-hover:scale-110 transition-all duration-300">
                              {skill.icon}
                            </div>
                            
                            {/* Skill name with better typography */}
                            <div className="text-xs sm:text-xs md:text-sm text-center text-gray-800 leading-tight font-semibold px-0.5 hidden sm:block group-hover:text-gray-900 transition-colors duration-300">
                              {skill.name}
                            </div>
                            
                            {/* Mobile-only abbreviated name */}
                            <div className="text-xs text-center text-gray-800 leading-tight font-semibold px-0.5 sm:hidden">
                              {skill.name.split(' ')[0]}
                            </div>
                          </div>

                          {/* Enhanced Top Face (3D Effect) */}
                          <div className={`
                            absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 rounded-xl
                            transform -translate-y-1 -translate-x-1 -z-10
                            group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500
                            shadow-lg
                          `}></div>

                          {/* Enhanced Right Face (3D Effect) */}
                          <div className={`
                            absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 rounded-xl
                            transform translate-x-1 translate-y-1 -z-20
                            group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500
                            shadow-lg
                          `}></div>


                          
                          {/* Enhanced Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 whitespace-nowrap shadow-lg border border-yellow-400 sm:hidden">
                            <div className="text-center">
                              <div className="font-semibold">{skill.name}</div>
                              <div className="text-yellow-400 text-xs">{category.title}</div>
                            </div>
                            {/* Tooltip arrow */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
                          </div>
                        </div>
                      </div>
                    </ScrollRevealCSS>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}