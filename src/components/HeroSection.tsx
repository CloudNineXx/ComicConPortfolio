import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      {/* Comic book dots pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, #00ff41 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBzdXBlcmhlcm8lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjczODE1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tech superhero background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">


        {/* Main hero content */}
        <div className="space-y-6">
          <ScrollReveal direction="up" delay={200}>
            <h1 className="typography-display relative transform -skew-y-1 comic-bounce">
              {/* Main comic book title with enhanced effects */}
              <span className="relative z-10 text-yellow-400" style={{
                textShadow: '6px 6px 0px #000, -3px -3px 0px #000, 3px -3px 0px #000, -3px 3px 0px #000, 0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.4)',
                filter: 'drop-shadow(4px 4px 12px rgba(251, 191, 36, 0.6))',
                WebkitTextStroke: '2px #000'
              }}>
                SWEE MING
              </span>
              
              {/* Comic book burst effect background */}
              <div className="absolute inset-0 typography-display text-red-600 opacity-30 blur-sm transform translate-x-3 translate-y-3">
                SWEE MING
              </div>
              <div className="absolute inset-0 typography-display text-blue-600 opacity-20 blur-md transform translate-x-6 translate-y-6">
                SWEE MING
              </div>
              
              {/* Comic action lines around the name */}
              <div className="absolute -top-8 -left-8 w-24 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 animate-pulse"></div>
              <div className="absolute -top-4 -left-12 w-16 h-1 bg-gradient-to-r from-pink-400 to-red-500 transform rotate-45 animate-pulse delay-150"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-2 bg-gradient-to-r from-green-400 to-emerald-500 transform -rotate-45 animate-pulse delay-300"></div>
              <div className="absolute -bottom-4 -right-12 w-12 h-1 bg-gradient-to-r from-purple-400 to-violet-500 transform -rotate-45 animate-pulse delay-450"></div>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-gradient-to-r from-orange-600 to-orange-800 !text-white px-2.5 py-1 typography-heading-sm border-2 border-white transform rotate-1 hover:rotate-0 transition-transform shadow-lg text-comic-shadow">
                Systems & Tech Executive
              </Badge>
              <Badge className="bg-gradient-to-r from-violet-600 to-violet-800 !text-white px-2.5 py-1 typography-heading-sm border-2 border-white transform -rotate-1 hover:rotate-0 transition-transform shadow-lg text-comic-shadow">
                Gen AI Enthusiast
              </Badge>
              <Badge className="bg-gradient-to-r from-sky-600 to-sky-800 !text-white px-2.5 py-1 typography-heading-sm border-2 border-white transform rotate-1 hover:rotate-0 transition-transform shadow-lg text-comic-shadow">
                Digital Creator
              </Badge>
            </div>
          </ScrollReveal>

          {/* Stats section */}
          <ScrollReveal direction="up" delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 rounded-lg border-4 border-white transform hover:scale-105 transition-transform shadow-xl">
                <h3 className="typography-heading-sm text-white mb-1 text-comic-shadow font-bold">REACH</h3>
                <p className="typography-heading-lg text-yellow-400 text-comic-shadow font-bold">3M+</p>
                <p className="typography-button text-white text-comic-shadow whitespace-nowrap">TOTAL YOUTUBE IMPRESSIONS</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-lg border-4 border-white transform hover:scale-105 transition-transform shadow-xl">
                <h3 className="typography-heading-sm text-white mb-1 text-comic-shadow font-bold">EXPERIENCE</h3>
                <p className="typography-heading-lg text-yellow-400 text-comic-shadow font-bold">5+</p>
                <p className="typography-button text-white text-comic-shadow">YEARS CREATING</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 rounded-lg border-4 border-white transform hover:scale-105 transition-transform shadow-xl">
                <h3 className="typography-heading-sm text-white mb-1 text-comic-shadow font-bold">IMPACT</h3>
                <p className="typography-heading-lg text-yellow-400 text-comic-shadow font-bold">450K+</p>
                <p className="typography-button text-white text-comic-shadow whitespace-nowrap">TOTAL VIEWS GENERATED</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Call to action */}
          <ScrollReveal direction="scale" delay={500}>
            <div className="mt-12">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-black hover:bg-yellow-300 typography-body-lg font-black px-12 py-6 border-4 border-black transform hover:scale-105 transition-all shadow-lg rounded-lg"
                style={{ fontWeight: '900' }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Portfolio!
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-40">⚡</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-40">🔥</div>
    </section>
  );
}