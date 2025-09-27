import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollReveal } from "./ScrollReveal";
import { ScrollRevealCSS } from "./ScrollRevealCSS";
import certificate1 from "figma:asset/1cd05aa94fc7333af7622ec3533064a914750213.png";
import certificate2 from "figma:asset/871547358e81935296eca092ff5df46d8eacdf3c.png";
import certificate3 from "figma:asset/794d55b561b0c7ef4b3640dab716f870c369f47a.png";

export function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 relative overflow-hidden">
      {/* Comic book explosion pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpolygon points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Reduced spacing */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-10">
            {/* Comic Book Speech Bubble Heading */}
            <div className="relative inline-block mb-6">
              <div className="bg-white border-8 border-black rounded-3xl px-12 py-6 transform -rotate-1 shadow-2xl relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
                
                {/* Main heading text */}
                <h2 className="typography-heading-xl text-red-600 relative z-10 text-comic-shadow transform skew-x-1">
                  HACKATHON PARTICIPATIONS
                </h2>
                
                {/* Comic book action lines */}
                <div className="absolute -top-4 -right-4 w-16 h-1 bg-red-400 transform rotate-45 animate-pulse"></div>
                <div className="absolute -top-2 -right-6 w-12 h-1 bg-orange-500 transform rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-4 -left-4 w-14 h-1 bg-yellow-400 transform -rotate-45 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Hackathon Certificates - Compact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Syrotech MVP Global Hackathon - FIRST */}
          <ScrollRevealCSS direction="right" delay={100}>
            <Card className="border-6 border-black shadow-2xl bg-gradient-to-br from-green-100 to-white transform hover:scale-105 hover:rotate-2 transition-all duration-300 h-full">
              <CardContent className="p-5">
                <div className="mb-3 overflow-hidden rounded-lg border-2 border-black bg-gradient-to-br from-gray-100 to-white shadow-inner">
                  <img src={certificate1} alt="Syrotech Hackathon Certificate" className="w-full h-56 object-cover transition-all duration-300 cursor-pointer hover:scale-105" />
                </div>
                <h3 className="typography-heading-sm text-green-600 mb-2 text-center">🏆 SYROTECH MVP GLOBAL HACKATHON 2025</h3>
                <div className="flex justify-center items-center min-h-[3rem]">
                  <Badge className="relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-4 py-2 typography-caption text-center flex items-center justify-center min-h-[2.5rem] border-2 border-green-400 shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-105 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <span className="relative z-10 text-shadow-lg">Top 28 Winner (Great Project Prize)</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </ScrollRevealCSS>

          {/* Hack Social Hackathon - SECOND */}
          <ScrollRevealCSS direction="right" delay={250}>
            <Card className="border-6 border-black shadow-2xl bg-gradient-to-br from-purple-100 to-white transform hover:scale-105 hover:rotate-1 transition-all duration-300 h-full">
              <CardContent className="p-5">
                <div className="mb-3 overflow-hidden rounded-lg border-2 border-black bg-gradient-to-br from-gray-100 to-white shadow-inner">
                  <img src={certificate3} alt="Hack Social Certificate" className="w-full h-56 object-cover transition-all duration-300 cursor-pointer hover:scale-105" />
                </div>
                <h3 className="typography-heading-sm text-purple-600 mb-2 text-center">🌟 HACK SOCIAL HACKATHON</h3>
                <div className="flex justify-center items-center min-h-[3rem]">
                  <Badge className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-white px-4 py-2 typography-caption text-center flex items-center justify-center min-h-[2.5rem] border-2 border-purple-400 shadow-lg hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <span className="relative z-10 text-shadow-lg">Certificate of Recognition</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </ScrollRevealCSS>

          {/* HackVerse Global Hackathon - THIRD */}
          <ScrollRevealCSS direction="right" delay={400}>
            <Card className="border-6 border-black shadow-2xl bg-gradient-to-br from-blue-100 to-white transform hover:scale-105 hover:-rotate-2 transition-all duration-300 h-full">
              <CardContent className="p-5">
                <div className="mb-3 overflow-hidden rounded-lg border-2 border-black bg-gradient-to-br from-gray-100 to-white shadow-inner">
                  <img src={certificate2} alt="HackVerse Hackathon Certificate" className="w-full h-56 object-cover transition-all duration-300 cursor-pointer hover:scale-105" />
                </div>
                <h3 className="typography-heading-sm text-blue-600 mb-2 text-center">💻 HACKVERSE GLOBAL HACKATHON</h3>
                <div className="flex justify-center items-center min-h-[3rem]">
                  <Badge className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white px-4 py-2 typography-caption text-center flex items-center justify-center min-h-[2.5rem] border-2 border-blue-400 shadow-lg hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <span className="relative z-10 text-shadow-lg">Certificate of Participation</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </ScrollRevealCSS>
        </div>

        {/* Contact Information - Compact spacing */}
        <ScrollReveal direction="scale" delay={500}>
          <div className="text-center mb-8">
            <h3 className="typography-heading-lg text-white mb-6 text-comic-shadow">📞 CONTACTS</h3>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a 
                href="https://www.youtube.com/@ZealousZendeN" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ animationDelay: '100ms' }}
                className="animate-[fadeInLeft_0.6s_ease-out_forwards] opacity-0"
              >
                <Button 
                  size="lg" 
                  className="typography-button bg-red-600 hover:bg-red-700 text-white px-8 md:px-12 py-4 md:py-6 border-4 border-white transform hover:scale-110 transition-all shadow-2xl rounded-2xl"
                >
                  🎵 Gen AI YouTube Channel
                </Button>
              </a>
              
              <a 
                href="https://www.youtube.com/@KaiZuko" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ animationDelay: '200ms' }}
                className="animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
              >
                <Button 
                  size="lg" 
                  className="typography-button bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-4 md:py-6 border-4 border-white transform hover:scale-110 transition-all shadow-2xl rounded-2xl"
                >
                  🎮 Gaming YouTube Channel
                </Button>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/goh-swee-ming-瑞明-9a7662183" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ animationDelay: '300ms' }}
                className="animate-[fadeInRight_0.6s_ease-out_forwards] opacity-0"
              >
                <Button 
                  size="lg" 
                  className="typography-button bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-4 md:py-6 border-4 border-white transform hover:scale-110 transition-all shadow-2xl rounded-2xl"
                >
                  💼 LinkedIn Profile
                </Button>
              </a>
              
              <a 
                href="mailto:sweeming08@gmail.com"
                style={{ animationDelay: '400ms' }}
                className="animate-[fadeInScale_0.6s_ease-out_forwards] opacity-0"
              >
                <Button 
                  size="lg" 
                  className="typography-button bg-purple-600 hover:bg-purple-700 text-white px-8 md:px-12 py-4 md:py-6 border-4 border-white transform hover:scale-110 transition-all shadow-2xl rounded-2xl"
                >
                  📧 sweeming08@gmail.com
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating comic elements - Optimized positioning */}
      <div className="absolute top-8 left-8 text-6xl md:text-8xl animate-bounce">💥</div>
      <div className="absolute bottom-8 right-8 text-6xl md:text-8xl animate-pulse">⚡</div>

      <div className="absolute bottom-1/4 left-16 text-4xl md:text-6xl animate-pulse">🔥</div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl animate-bounce">💫</div>
    </section>
  );
}