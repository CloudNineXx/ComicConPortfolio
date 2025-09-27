import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 1000, 
  className = '' 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          console.log(`ScrollReveal triggered for direction: ${direction}`);
          setHasTriggered(true);
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [delay, hasTriggered, direction]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(60px)';
      case 'down':
        return 'translateY(-60px)';
      case 'left':
        return 'translateX(100px)';
      case 'right':
        return 'translateX(-100px)';
      case 'scale':
        return 'scale(0.7)';
      default:
        return 'translateY(60px)';
    }
  };

  const getFinalTransform = () => {
    return 'translateX(0px) translateY(0px) scale(1)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}