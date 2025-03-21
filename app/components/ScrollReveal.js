'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = '',
  duration = 0.3,
  threshold = 0.1,
  distance = 30
}) {
  const controls = useAnimation();
  const ref = useRef(null);

  const getDirection = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    
    // Store ref.current in a variable for the cleanup function
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start({ 
              opacity: 1, 
              x: 0, 
              y: 0, 
              transition: { 
                duration: duration, 
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1.0]
              } 
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [controls, delay, duration, threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...getDirection() }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
} 