import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from 'framer-motion';

export const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (isReducedMotion) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[90] hidden lg:block"
      style={{
        background: useMotionTemplate`radial-gradient(120px circle at ${springX}px ${springY}px, rgba(124,92,252,0.15), transparent 80%)`
      }}
    />
  );
};
