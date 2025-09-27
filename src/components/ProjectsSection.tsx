import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Enhanced3DCarousel } from "./Enhanced3DCarousel";
import { ScrollReveal } from "./ScrollReveal";
import splashInterface1 from "figma:asset/ef4554dfbd1a51364a70bcb5d2a2c060bb881c85.png";
import splashInterface2 from "figma:asset/5199a7a26562ef7762c5c9afd41fafd8a5d8b826.png";
import splashInterface3 from "figma:asset/60379d370239f608e885fd23c859f45640d8f77d.png";
import openaiInterface1 from "figma:asset/6554fc67aa9e90b2fe30fefa85066f5bb5eb1982.png";
import openaiInterface2 from "figma:asset/ab7e27bd0ebefe3d90f5b7e9708ca654bb85f91f.png";
import openaiInterface3 from "figma:asset/bf64dfae35d85180aab80a27868c546624c651da.png";
import tipsInterface1 from "figma:asset/79635a88d0c83b551ebfc1efbae4c1d6b8266278.png";
import tipsInterface2 from "figma:asset/13db314b16dbca6934491802f5828d9abb489e2a.png";
import tipsInterface3 from "figma:asset/1896aef51e8c4cd8ac345be190f21f7c2aef0ba4.png";

export function ProjectsSection() {
  const projects = [
    {
      title: "OpenAI-Powered Module Syllabus Information Extractor",
      achievements: [
        "🚀 Overcame GovTech & Microsoft Copilot file upload limits (10–20 files)",
        "📊 Streamlined results directly into Excel for fast review & record-keeping",
        "🎯 Fully customisable for institutional needs",
        "🔍 AI-powered recognition of complex academic structures",
        "⚙️ Advanced GPT technology with human-like understanding"
      ],
      techStack: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "OpenAI GPT-4 API", "Mammoth.js (DOCX parsing)"],
      icon: "🤖",
      color: "from-blue-600 to-purple-700",
      images: [
        {
          src: openaiInterface1,
          alt: "Module Syllabus AI Landing Page",
          title: "AI-Powered Document Transformation"
        },
        {
          src: openaiInterface2,
          alt: "Module Syllabus AI Features",
          title: "Advanced AI Feature Set"
        },
        {
          src: openaiInterface3,
          alt: "Module Syllabus AI Results",
          title: "Structured Data Output"
        }
      ]
    },
    {
      title: "Theory of Inventive Problem Solving GPT Webpage",
      achievements: [
        "🧠 Developed chatbot trained on TRIZ methodology",
        "🎓 Assists students and faculty in generating innovative solutions",
        "🔧 Provides structured problem-solving guidance",
        "📚 Integrated into library-hosted webpage as on-demand AI assistant",
        "🎯 Smart problem categorization and solution generation",
        "🔄 Interactive learning through AI-powered guidance"
      ],
      techStack: ["Microsoft Copilot Chatbot", "Frontend", "HTML", "CSS", "JavaScript"],
      icon: "💡",
      color: "from-amber-500 to-orange-600",
      images: [
        {
          src: tipsInterface1,
          alt: "TIPS AI-Tutor Main Interface",
          title: "AI-Powered TRIZ Assistant"
        },
        {
          src: tipsInterface2,
          alt: "TIPS Chatbot Features",
          title: "Interactive Learning Features"
        },
        {
          src: tipsInterface3,
          alt: "TIPS About Page",
          title: "TRIZ Methodology Integration"
        }
      ]
    },
    {
      title: "SPLASH! (Singapore Polytechnic Library AI Self-Help)",
      achievements: [
        "🔬 Benchmarking conversational AI capabilities in academic setting",
        "📚 Embedded eBooks with interactive chatbot features",
        "❓ AI-generated revision questions for self-testing",
        "🎨 Enhanced UI/UX for intuitive user experience",
        "⚙️ Improved chatbot performance and reliability",
        "🎯 Smart content filtering by category and subject",
        "📖 Automated digital logic introductions and explanations",
        "🏆 **TOP 28 WINNER** ⭐ *Great Project Prize Achievement*",
        "🏅 **CERTIFICATE OF PARTICIPATION** 🎯 *Official Competition Recognition*",
        "🎖️ **CERTIFICATE OF RECOGNITION** 💫 *Excellence Acknowledgment*"
      ],
      techStack: ["React JS", "HTML", "CSS", "JavaScript", "OpenAI API", "Node.js", "MySQL", "Apache Web Server"],
      icon: "🌊",
      color: "from-emerald-600 to-teal-700",
      images: [
        {
          src: splashInterface1,
          alt: "SPLASH Library Interface",
          title: "Smart Library Interface"
        },
        {
          src: splashInterface2,
          alt: "SPLASH AI Content Generation",
          title: "AI-Powered Content Generation"
        },
        {
          src: splashInterface3,
          alt: "SPLASH Revision Assistant",
          title: "Interactive Revision Assistant"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Enhanced background pattern - consistent with skills */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' opacity='0.4'%3E%3Cpath d='M50 10 L70 30 L50 50 L30 30 Z'/%3E%3Cpath d='M10 50 L30 70 L50 50 L30 30 Z'/%3E%3Cpath d='M90 50 L70 70 L50 50 L70 30 Z'/%3E%3Cpath d='M50 90 L70 70 L50 50 L30 70 Z'/%3E%3C/g%3E%3Cg fill='%23ffff00' opacity='0.6'%3E%3Ccircle cx='25' cy='25' r='3'/%3E%3Ccircle cx='75' cy='25' r='3'/%3E%3Ccircle cx='25' cy='75' r='3'/%3E%3Ccircle cx='75' cy='75' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating elements - consistent with skills */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 transform rotate-45 opacity-30 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-10 w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-30 animate-bounce"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-16">
            {/* New Comic Book Speech Bubble Heading */}
            <div className="relative inline-block mb-8">
              <div className="bg-white border-8 border-black rounded-3xl px-12 py-6 transform -rotate-1 shadow-2xl relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
                
                {/* Main heading text */}
                <h2 className="typography-heading-xl text-red-600 relative z-10 text-comic-shadow transform skew-x-1">
                  PROJECTS
                </h2>
                
                {/* Comic book action lines */}
                <div className="absolute -top-4 -right-4 w-16 h-1 bg-cyan-400 transform rotate-45 animate-pulse"></div>
                <div className="absolute -top-2 -right-6 w-12 h-1 bg-pink-500 transform rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-4 -left-4 w-14 h-1 bg-yellow-400 transform -rotate-45 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid - Increased Vertical Spacing */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 200}>
              <Card className="border-6 border-black shadow-2xl bg-gradient-to-br from-gray-50 to-white overflow-hidden rounded-xl hover:scale-102 transition-all duration-300 max-w-6xl mx-auto">
                
                {/* Project Header - Centered with Larger Title */}
                <CardHeader className={`bg-gradient-to-r ${project.color} text-white py-1.5 relative`}>
                  <div className="relative z-10 text-center">
                    <CardTitle className="typography-heading-sm text-white text-comic-shadow">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="p-2.5 space-y-1">
                  {/* Project Images - Ultra Compact */}
                  <div>
                    <Enhanced3DCarousel images={project.images} />
                  </div>

                  {/* Tech Stack - Ultra Compact */}
                  <div className="border-3 border-black rounded-xl p-2 bg-gray-50 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h4 className="typography-body font-bold text-gray-800">🛠️ TECH STACK</h4>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <Badge 
                          key={i} 
                          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-1 typography-body-sm border-2 border-black hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all hover:scale-105 cursor-pointer shadow-lg"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}