import { useEffect, useRef, useState } from 'react';

interface ScrollRevealCSSProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  className?: string;
}

export function ScrollRevealCSS({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = '' 
}: ScrollRevealCSSProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          console.log(`ScrollRevealCSS triggered for direction: ${direction}, delay: ${delay}ms`);
          setHasTriggered(true);
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [delay, hasTriggered, direction]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (direction) {
      case 'left':
        return 'scroll-reveal-left';
      case 'right':
        return 'scroll-reveal-right';
      case 'up':
        return 'scroll-reveal-up';
      case 'scale':
        return 'scroll-reveal-scale';
      default:
        return 'scroll-reveal-up';
    }
  };

  const getInitialStyle = () => {
    if (isVisible) return {};

    switch (direction) {
      case 'left':
        return { opacity: 0, transform: 'translateX(100px)' };
      case 'right':
        return { opacity: 0, transform: 'translateX(-100px)' };
      case 'up':
        return { opacity: 0, transform: 'translateY(60px)' };
      case 'scale':
        return { opacity: 0, transform: 'scale(0.7)' };
      default:
        return { opacity: 0, transform: 'translateY(60px)' };
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={getInitialStyle()}
    >
      {children}
    </div>
  );
}