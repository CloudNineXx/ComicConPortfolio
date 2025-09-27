import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
}

interface Enhanced3DCarouselProps {
  images: CarouselImage[];
}

export function Enhanced3DCarousel({ images }: Enhanced3DCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play with slower timing
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4-second intervals - 1 second faster

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getTransformStyle = (index: number) => {
    const diff = index - currentIndex;
    
    // Card Stack/Fan Layout Style
    if (Math.abs(diff) === 0) {
      // Active card - center front
      return {
        transform: `translateZ(150px) scale(1.1)`,
        opacity: 1,
        zIndex: 10
      };
    } else if (Math.abs(diff) === 1) {
      // Adjacent cards - slightly behind and to sides
      const side = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${side * 200}px) translateZ(50px) rotateY(${side * -25}deg) scale(0.9)`,
        opacity: 0.8,
        zIndex: 5
      };
    } else {
      // Background cards - further back and more angled
      const side = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${side * 350}px) translateZ(-50px) rotateY(${side * -45}deg) scale(0.7)`,
        opacity: 0.5,
        zIndex: 1
      };
    }
  };

  return (
    <div 
      className="relative w-full h-[24rem] bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl border-6 border-black p-4 shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 60%, #475569 90%)',
        boxShadow: '0 0 30px rgba(15, 23, 42, 0.2), inset 0 0 40px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Simple techy grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] rounded-3xl">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 30 L60 30 M30 0 L30 60'/%3E%3Ccircle cx='30' cy='30' r='1' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* 3D Carousel Container */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div 
          className="relative w-full h-full max-w-4xl" 
          style={{ 
            perspective: '1200px',
            perspectiveOrigin: 'center center',
            transformStyle: 'preserve-3d'
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-[26rem] h-72 cursor-pointer transition-all duration-1000 ease-in-out"
              style={{
                ...getTransformStyle(index),
                transformOrigin: 'center center',
                marginLeft: '-208px',
                marginTop: '-144px'
              }}
              onClick={() => goToSlide(index)}
            >
              <div 
                className="w-full h-full bg-white p-1.5 rounded-2xl border-4 border-black shadow-2xl hover:border-yellow-400 transition-all transform-gpu" 
                style={{ 
                  boxShadow: Math.abs(index - currentIndex) === 0 
                    ? '0 30px 60px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)' 
                    : Math.abs(index - currentIndex) === 1
                    ? '0 15px 35px -8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.2)'
                    : '0 8px 20px -5px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              

            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black bg-opacity-80 px-6 py-3 rounded-full border-3 border-white">
        <Button
          onClick={prevSlide}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-4 py-2 rounded-full border-2 border-white shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black px-4 py-2 rounded-full border-2 border-white shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-6 right-6 flex items-center gap-2 bg-black bg-opacity-80 px-3 py-2 rounded-full border-2 border-white">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
        <span className="text-white font-bold text-xs">
          {isAutoPlaying ? 'AUTO' : 'MANUAL'}
        </span>
      </div>

      {/* Current image info */}
      <div className="absolute top-6 left-6 bg-gradient-to-r from-slate-200 to-slate-300 text-black px-4 py-2 rounded-xl border-3 border-black shadow-lg">
        <div className="font-black text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}