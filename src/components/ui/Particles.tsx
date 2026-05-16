import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const Particles = ({ count = 20 }: { count?: number }) => {
  const isReducedMotion = useReducedMotion();
  if (isReducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{ 
            y: [null, '-20px', '0px'],
            opacity: [null, 0.7, 0.3]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            backgroundColor: i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-secondary)' : 'white',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};
