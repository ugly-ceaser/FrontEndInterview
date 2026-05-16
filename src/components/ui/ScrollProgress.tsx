import React from 'react';
import { motion } from 'framer-motion';

export const ScrollProgress = ({ scaleX }: { scaleX: any }) => (
  <motion.div 
    className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary z-[100] origin-left"
    style={{ scaleX }}
  />
);
