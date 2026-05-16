import React from 'react';
import { motion } from 'framer-motion';

export const Waveform = () => (
  <div className="flex items-center justify-center gap-1.5">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ height: [12, 32, 16, 40, 12] }}
        transition={{ 
          duration: 1.2, 
          repeat: Infinity, 
          delay: i * 0.1, 
          ease: "easeInOut" 
        }}
        className="w-1 bg-primary/60 rounded-full"
      />
    ))}
  </div>
);
