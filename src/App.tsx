import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ComicExperienceSection } from "./components/ComicExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { ScrollReveal } from "./components/ScrollReveal";
import { Button } from "./components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    // Set dynamic comic book favicon
    const setFavicon = () => {
      const faviconSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#FF0000;stop-opacity:1" />
            </linearGradient>
          </defs>
          <!-- Background circle -->
          <circle cx="16" cy="16" r="15" fill="url(#grad1)" stroke="#000" stroke-width="2"/>
          <!-- Inner tech circle -->
          <circle cx="16" cy="16" r="11" fill="#000" stroke="#FFFF00" stroke-width="1"/>
          <!-- SM initials -->
          <text x="16" y="12" text-anchor="middle" font-family="Arial Black" font-size="8" fill="#FFFF00" font-weight="bold">SM</text>
          <!-- Lightning bolt -->
          <path d="M12 18 L16 14 L14 14 L18 10 L14 14 L16 14 L12 18 Z" fill="#FFFF00"/>
          <!-- Tech dots -->
          <circle cx="8" cy="8" r="1" fill="#FF0000"/>
          <circle cx="24" cy="8" r="1" fill="#FF0000"/>
          <circle cx="8" cy="24" r="1" fill="#FF0000"/>
          <circle cx="24" cy="24" r="1" fill="#FF0000"/>
        </svg>
      `;

      const favicon = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

      // Remove existing favicon
      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (existingFavicon) {
        existingFavicon.remove();
      }

      // Add new favicon
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      link.href = favicon;
      document.head.appendChild(link);

      // Also set the document title
      document.title = "Swee Ming | Portfolio";
    };

    setFavicon();

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      // Save scroll position to sessionStorage for page refresh persistence
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore scroll position on page load/refresh
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      // Use requestAnimationFrame to ensure DOM is fully loaded
      requestAnimationFrame(() => {
        window.scrollTo({
          top: parseInt(savedScrollPosition, 10),
          behavior: "auto", // Use 'auto' for instant restoration, 'smooth' for animated
        });
      });
    }

    // Save scroll position before page unload (refresh, navigation away, etc.)
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hover-Activated Navigation Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-16"
        onMouseEnter={() => setNavbarVisible(true)}
        onMouseLeave={() => setNavbarVisible(false)}
      >
        <nav
          className={`w-full bg-black backdrop-blur-md border-b-4 border-yellow-400 transition-all duration-500 transform ${
            navbarVisible
              ? "translate-y-0 bg-opacity-75"
              : "-translate-y-full bg-opacity-50"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
            <div className="flex justify-between items-center">
              {/* Simple Comic Logo */}
              <div className="relative flex items-center gap-2">
                <span
                  className="hidden sm:inline text-yellow-400 text-xl font-black transform -rotate-2 transition-transform hover:rotate-0"
                  style={{
                    textShadow:
                      "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    WebkitTextStroke: "1px #000",
                  }}
                >
                  COMIC-CON INSPIRED
                </span>
                <span
                  className="sm:hidden text-yellow-400 text-lg font-black transform -rotate-2"
                  style={{
                    textShadow:
                      "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                    WebkitTextStroke: "1px #000",
                  }}
                >
                  SM COMIC
                </span>

                {/* Simple comic star */}
                <span className="text-red-500 text-lg animate-pulse">★</span>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-3 lg:space-x-6">
                {[
                  { name: "HOME", href: "#" },
                  { name: "ABOUT", href: "#about" },
                  { name: "EXPERIENCE", href: "#experience" },
                  { name: "EDUCATION", href: "#education" },
                  { name: "PROJECTS", href: "#projects" },
                  { name: "SKILLS", href: "#skills" },
                  { name: "CONTACT", href: "#contact" },
                ].map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="text-white hover:text-yellow-400 text-sm lg:typography-button hover:bg-transparent comic-cursor-pow transition-colors duration-200 px-2 lg:px-4"
                    onClick={() => {
                      if (item.href === "#") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        document
                          .querySelector(item.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-yellow-400 hover:text-white transition-all duration-300 comic-cursor-pow transform hover:scale-110"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="text-xl">{mobileMenuOpen ? "✕" : "☰"}</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg transition-all duration-300 ${
              mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ top: "64px" }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {[
                  { name: "HOME", href: "#", icon: "🏠" },
                  { name: "ABOUT", href: "#about", icon: "👨‍💻" },
                  { name: "EXPERIENCE", href: "#experience", icon: "💼" },
                  { name: "EDUCATION", href: "#education", icon: "🎓" },
                  { name: "PROJECTS", href: "#projects", icon: "🚀" },
                  { name: "SKILLS", href: "#skills", icon: "⚡" },
                  { name: "CONTACT", href: "#contact", icon: "📞" },
                ].map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full text-left justify-start p-4 sm:p-6 text-white hover:text-yellow-400 hover:bg-yellow-400 hover:bg-opacity-10 border-2 border-transparent hover:border-yellow-400 rounded-xl transition-all duration-300 comic-cursor-pow"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (item.href === "#") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        document
                          .querySelector(item.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="flex items-center gap-3 sm:gap-4">
                      <span className="text-xl sm:text-2xl">{item.icon}</span>
                      <span className="text-lg sm:typography-heading-sm">
                        {item.name}
                      </span>
                    </span>
                  </Button>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-yellow-400 text-center">
                <div className="flex justify-center space-x-4 sm:space-x-6 text-2xl sm:text-3xl">
                  <span className="animate-bounce">⚡</span>
                  <span className="animate-pulse">🚀</span>
                  <span className="animate-bounce delay-300">💥</span>
                </div>
                <p className="mt-3 sm:mt-4 text-yellow-400 text-sm sm:typography-body">
                  Navigate with Comic Con Power!
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />

        <div id="about">
          <AboutSection />
        </div>

        <div id="experience">
          <ComicExperienceSection />
        </div>

        <div id="education">
          <EducationSection />
        </div>

        <div id="projects">
          <ProjectsSection />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Responsive Comic-style Footer */}
      <footer className="bg-black text-white py-4 sm:py-6 lg:py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, #00ff41 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-3 sm:mb-4">
              <h3 className="text-2xl sm:text-3xl lg:typography-heading-lg text-yellow-400 mb-2 sm:mb-3 transform -skew-x-6 text-comic-shadow">
                PASSION FOR GEN AI & TECHNOLOGY
              </h3>
              <p className="text-base sm:text-lg lg:typography-body-xl text-gray-300 max-w-3xl mx-auto">
                Learning and growing through collaborative innovation
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={200}>
            <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 mb-3 sm:mb-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl">⚡</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl">🚀</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl">💥</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl">🌟</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl">🔥</div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="border-t-2 sm:border-t-4 border-yellow-400 pt-3 sm:pt-4">
              <p className="text-sm sm:text-base lg:typography-body-lg text-gray-300">
                © {new Date().getFullYear()} Website Created by SWEE MING
              </p>
              <p className="text-sm sm:text-base lg:typography-body-lg text-yellow-400 font-semibold mt-1 max-w-2xl mx-auto">
                Committed to continuous learning and meaningful technological
                contributions
              </p>
            </div>
          </ScrollReveal>
        </div>
      </footer>

      {/* Responsive Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-40 bg-yellow-400 hover:bg-yellow-300 text-black font-black p-3 sm:p-4 rounded-full border-3 sm:border-4 border-black shadow-2xl transform hover:scale-110 transition-all comic-cursor-pow"
          size="lg"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      )}

      {/* Responsive Floating comic elements */}
      <div className="hidden sm:block fixed top-1/4 left-2 sm:left-4 text-xl sm:text-2xl z-10 pointer-events-none opacity-40 sm:opacity-60">
        💥
      </div>
      <div className="hidden sm:block fixed bottom-1/4 right-2 sm:right-4 text-xl sm:text-2xl z-10 pointer-events-none opacity-40 sm:opacity-60">
        ⚡
      </div>
    </div>
  );
}
