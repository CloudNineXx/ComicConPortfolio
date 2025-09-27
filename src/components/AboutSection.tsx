import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";
import { ScrollRevealCSS } from "./ScrollRevealCSS";
import profileImage from 'figma:asset/785dd521e7f0e390ff4cc6cdc10add582ee53505.png';
import hoverImage from 'figma:asset/c7c670d18fbb15f09a09d6a05707afa3f1fde522.png';

export function AboutSection() {
  return (
    <section id="about" className="min-h-[100vh] flex items-center py-16 bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 relative overflow-hidden">
      {/* Enhanced comic book patterns for yellow background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' opacity='0.5'%3E%3Cpath d='M60 10 L80 40 L110 30 L90 60 L120 80 L90 100 L60 90 L30 100 L0 80 L30 60 L10 30 L40 40 Z'/%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='90' cy='30' r='4'/%3E%3Ccircle cx='30' cy='90' r='4'/%3E%3Ccircle cx='90' cy='90' r='4'/%3E%3C/g%3E%3Cg fill='%23ff0000' opacity='0.4'%3E%3Crect x='20' y='20' width='8' height='8' transform='rotate(45 24 24)'/%3E%3Crect x='80' y='20' width='8' height='8' transform='rotate(45 84 24)'/%3E%3Crect x='20' y='80' width='8' height='8' transform='rotate(45 24 84)'/%3E%3Crect x='80' y='80' width='8' height='8' transform='rotate(45 84 84)'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      {/* Additional halftone comic pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, #000 2px, transparent 2px)`,
          backgroundSize: '25px 25px'
        }}></div>
      </div>

      {/* Comic book themed floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 opacity-20 animate-float" style={{
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
      }}></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/2 right-10 w-24 h-6 bg-gradient-to-r from-green-500 to-emerald-600 opacity-20 animate-pulse transform rotate-45" style={{
        clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Full Height Optimized */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-12">
            {/* Comic Book Speech Bubble Heading */}
            <div className="relative inline-block mb-6">
              <div className="bg-white border-8 border-black rounded-3xl px-10 py-6 transform -rotate-2 shadow-2xl relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
                
                {/* Main heading text */}
                <h2 className="typography-heading-xl text-red-600 relative z-10 text-comic-shadow transform skew-x-2">
                  ABOUT ME
                </h2>
                
                {/* Comic book action lines */}
                <div className="absolute -top-4 -right-4 w-16 h-1 bg-yellow-400 transform rotate-45 animate-pulse"></div>
                <div className="absolute -top-2 -right-6 w-12 h-1 bg-red-500 transform rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-4 -left-4 w-14 h-1 bg-blue-500 transform -rotate-45 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Enhanced Comic Book Image Frame */}
          <ScrollRevealCSS direction="right" delay={200}>
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
              
              {/* Main frame container - Full Height */}
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-6 rounded-2xl border-8 border-black shadow-3xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 group">
                
                {/* Inner decorative border */}
                <div className="absolute inset-4 border-4 border-yellow-400 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Comic book corner elements - Smaller */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 border-3 border-black rounded-full flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-3 border-black rounded-full flex items-center justify-center transform -rotate-45 group-hover:-rotate-90 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 border-3 border-black rounded-full flex items-center justify-center transform -rotate-45 group-hover:rotate-90 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 border-3 border-black rounded-full flex items-center justify-center transform rotate-45 group-hover:-rotate-90 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
                
                {/* Comic action lines - Simplified */}
                <div className="absolute -top-4 -right-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-0.5 bg-yellow-400 transform rotate-45 animate-pulse"></div>
                  <div className="w-6 h-0.5 bg-orange-500 transform rotate-45 mt-0.5 animate-pulse delay-150"></div>
                </div>
                
                {/* Main image container - Thin border */}
                <div className="relative overflow-hidden rounded-xl bg-white border border-black">
                  {/* Image overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Profile image with hover effect - Full Height Optimized */}
                  <div className="relative w-full h-[28rem] overflow-hidden rounded-lg">
                    {/* Default image */}
                    <img
                      src={profileImage}
                      alt="Swee Ming - Tech Professional & Gen AI Enthusiast"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
                    />
                    
                    {/* Hover image */}
                    <img
                      src={hoverImage}
                      alt="Swee Ming - Comic Con Experience"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-110"
                    />
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
          </ScrollRevealCSS>

          {/* Right side - Full Height Comic Styled Content */}
          <div className="space-y-6">
            {/* What I Do - Slides in from left - APPEARS FIRST */}
            <ScrollRevealCSS direction="left" delay={150}>
              <div className="relative">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-1 rounded-2xl border-4 border-black shadow-xl transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="bg-white rounded-xl p-4">
                    <div className="mb-4">
                      <div className="bg-red-600 text-white px-4 py-2 rounded-xl border-2 border-black inline-block transform -rotate-1">
                        <h3 className="typography-heading-sm text-white text-comic-shadow">🎯 What I Do</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="typography-body leading-relaxed text-gray-800">
                        I am a technology professional with a passion for learning and applying new technologies and Gen AI tools!
                      </p>
                      <p className="typography-body leading-relaxed text-gray-800">
                        Currently, I work as a <strong>"Systems & Technology" Executive</strong> at 
                        Singapore Polytechnic Library, where I focus on 
                        enhancing library operations and efficiency through technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollRevealCSS>

            {/* Digital Explorations - Slides in from left - APPEARS SECOND */}
            <ScrollRevealCSS direction="left" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-1 rounded-2xl border-4 border-black shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="bg-white rounded-xl p-3">
                    <div className="mb-3">
                      <div className="bg-blue-600 text-white px-3 py-1.5 rounded-xl border-2 border-black inline-block transform rotate-1">
                        <h3 className="typography-heading-sm text-white text-comic-shadow">🎬 Digital Explorations</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <p className="typography-body leading-relaxed text-gray-800">
                        I manage two YouTube channels exploring AI's creative potential, developing skills in video production, content strategy, and community engagement.
                      </p>
                    </div>
                    
                    {/* YouTube Channels - Inline Design */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="typography-body text-gray-800 font-semibold">
                        Channels:
                      </span>
                      
                      {/* Gen AI Channel Button */}
                      <a 
                        href="https://www.youtube.com/@ZealousZendeN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-lg border-2 border-black font-black text-sm transform hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-sm hover:shadow-md comic-cursor-pow"
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="text-sm">🤖</span>
                          <span className="typography-body-sm text-comic-shadow">Gen AI</span>
                        </span>
                      </a>
                      
                      {/* FIFA Gaming Channel Button */}
                      <a 
                        href="https://www.youtube.com/@KaiZuko" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-lg border-2 border-black font-black text-sm transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-sm hover:shadow-md comic-cursor-pow"
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="text-sm">🎮</span>
                          <span className="typography-body-sm text-comic-shadow">FIFA Gaming</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollRevealCSS>
          </div>
        </div>
      </div>
    </section>
  );
}