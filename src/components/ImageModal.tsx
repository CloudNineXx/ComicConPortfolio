import { useState } from "react";
import { Button } from "./ui/button";

interface ImageModalProps {
  src: string;
  alt: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ src, alt, title, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white font-black px-4 py-2 border-3 border-white rounded-full z-60 text-2xl shadow-2xl"
      >
        ✕
      </Button>

      {/* Modal content */}
      <div 
        className="relative max-w-7xl max-h-[95vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Comic book style frame */}
        <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 p-6 rounded-3xl border-8 border-black shadow-2xl">
          <div className="bg-white p-4 rounded-2xl border-6 border-black">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-contain max-h-[75vh] rounded-xl shadow-lg"
            />
            
            {/* Title overlay */}
            <div className="mt-6 bg-gradient-to-r from-black to-gray-800 text-white p-5 rounded-xl border-4 border-yellow-400 shadow-lg">
              <h3 className="font-black text-2xl text-center text-yellow-400">
                🖼️ {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full border-4 border-yellow-400 shadow-2xl">
          <p className="font-black text-base text-yellow-400">
            💥 Click outside or press ✕ to close 💥
          </p>
        </div>
      </div>
    </div>
  );
}

interface ClickableImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export function ClickableImage({ src, alt, title, className = "" }: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer hover:scale-105 transition-transform ${className}`}
        onClick={() => setIsModalOpen(true)}
        title={`Click to view: ${title}`}
      />
      
      <ImageModal
        src={src}
        alt={alt}
        title={title}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}