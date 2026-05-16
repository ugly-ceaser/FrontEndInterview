import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToolCard } from './ToolCard';
import { showcaseTools } from '../data/tools';

export const AIToolsGrid = () => {
  const [activeTab, setActiveTab] = useState('All Tools');
  const categories = ['All Tools', 'Image', 'Video', 'Audio', 'Plugins'];

  const filteredTools = activeTab === 'All Tools' 
    ? showcaseTools 
    : showcaseTools.filter(t => t.category === activeTab);

  return (
    <>
      <div className="sticky top-24 z-30 flex justify-center mb-16 px-4">
        <div className="flex bg-elevated/80 backdrop-blur-xl p-1.5 rounded-full border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-full">
          <div className="flex shrink-0">
            {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                activeTab === cat ? 'text-white' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredTools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
