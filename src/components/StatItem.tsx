import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export const StatItem = ({ value, label, prefix = '', suffix = '', decimals = 0 }: { value: number, label: string, prefix?: string, suffix?: string, decimals?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(count, value, { duration: 2, ease: "easeOut" });
      }}
      className="text-center"
    >
      <motion.h3 className="font-syne text-4xl md:text-5xl font-bold text-text-primary mb-2">
        {rounded}
      </motion.h3>
      <p className="text-text-secondary text-sm font-medium">{label}</p>
    </motion.div>
  );
};
