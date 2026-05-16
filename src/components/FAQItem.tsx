import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export const FAQItem = ({ q, a, index }: { q: string, a: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group rounded-2xl bg-elevated border transition-all duration-500 overflow-hidden ${
        isOpen ? 'border-primary/40 shadow-glow-violet' : 'border-white/5 hover:border-white/10'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left group/btn"
      >
        <span className="font-sans font-medium text-text-primary text-[17px] pr-8 transition-colors group-hover/btn:text-primary">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-primary text-text-primary' : 'bg-void text-primary border border-white/5'
          }`}
        >
          <Plus size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pt-3 pb-5 max-w-2xl">
              <p className="text-text-secondary text-[15px] leading-[1.7] border-l-2 border-primary pl-4">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
