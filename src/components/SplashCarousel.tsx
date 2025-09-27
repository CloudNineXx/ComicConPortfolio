import { useEffect, useState } from "react";
import { ClickableImage } from "./ImageModal";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
}

interface SplashCarouselProps {
  images: CarouselImage[];
}

export function SplashCarousel({ images }: SplashCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Slower auto-scroll every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const getTransformStyle = (index: number) => {
    const diff = index - currentIndex;
    const angle = diff * 120; // 120 degrees between images
    const translateZ = Math.abs(diff) === 0 ? 450 : Math.abs(diff) === 1 ? 320 : 200; // Much larger
    const scale = Math.abs(diff) === 0 ? 1.1 : Math.abs(diff) === 1 ? 0.85 : 0.65; // Bigger scaling
    const opacity = Math.abs(diff) === 0 ? 1 : Math.abs(diff) === 1 ? 0.8 : 0.5;
    
    return {
      transform: `rotateY(${angle}deg) translateZ(${translateZ}px) scale(${scale})`,
      opacity: opacity,
      zIndex: Math.abs(diff) === 0 ? 10 : Math.abs(diff) === 1 ? 5 : 1
    };
  };

  return (
    <div className="relative w-full h-[32rem] mb-8 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl border-6 border-black p-4 shadow-2xl">
      {/* Enhanced comic book pattern background */}
      <div className="absolute inset-0 opacity-15 rounded-3xl">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M40 10 L50 30 L70 25 L55 45 L75 55 L55 65 L70 85 L50 80 L40 100 L30 80 L10 85 L25 65 L5 55 L25 45 L10 25 L30 30 Z'/%3E%3C/g%3E%3Cg fill='%23ff0000' fill-opacity='0.2'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='65' cy='15' r='3'/%3E%3Ccircle cx='15' cy='65' r='3'/%3E%3Ccircle cx='65' cy='65' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div 
          className="relative w-full h-full max-w-5xl" 
          style={{ 
            perspective: '1600px',
            transformStyle: 'preserve-3d'
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-all duration-1500 ease-in-out"
              style={getTransformStyle(index)}
            >
              <div className="relative w-full h-full bg-white rounded-xl shadow-2xl border-6 border-black overflow-hidden">
                <ClickableImage
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                
                {/* Comic book style overlay */}
                <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full border-2 border-black text-sm font-black pointer-events-none">
                  {index + 1}/{images.length}
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div className="bg-black/90 text-white p-3 rounded-lg border-2 border-yellow-400">
                    <p className="font-black text-sm text-center text-yellow-400">
                      {image.title}
                    </p>
                  </div>
                </div>

                {/* Click to expand indicator */}
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full border-2 border-white text-xs font-black pointer-events-none">
                  🔍 CLICK
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots with comic style */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-3 border-black transition-all transform hover:scale-125 ${
              index === currentIndex 
                ? 'bg-yellow-400 shadow-lg animate-pulse' 
                : 'bg-white hover:bg-yellow-200'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full border-3 border-black font-black text-xl shadow-lg z-20 transition-all hover:scale-110"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full border-3 border-black font-black text-xl shadow-lg z-20 transition-all hover:scale-110"
      >
        →
      </button>
    </div>
  );
}