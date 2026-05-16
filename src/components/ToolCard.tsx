import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Waveform } from './Waveform';
import { showcaseTools } from '../data/tools';

export const ToolCard = ({ tool, index }: { tool: typeof showcaseTools[0], index: number }) => {
  const isReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 15 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (isReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      layout
      initial={{ y: 40, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ 
        rotateX: isReducedMotion ? 0 : rotateX, 
        rotateY: isReducedMotion ? 0 : rotateY, 
        perspective: 1000 
      }}
      className="group bg-elevated border border-white/5 rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-glow-violet transition-all duration-300"
    >
    {/* Preview Zone */}
    <div className="aspect-video relative bg-surface overflow-hidden">
      {tool.image ? (
        <img 
          src={tool.image} 
          alt={tool.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <div className={`absolute inset-0 opacity-40 ${
          tool.category === 'Video' ? 'bg-gradient-to-br from-indigo-900 to-black' :
          tool.category === 'Image' ? 'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500' :
          'bg-void'
        }`} />
      )}
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {tool.category === 'Video' && (
          <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-2xl">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-current border-b-[10px] border-b-transparent ml-1" />
          </div>
        )}
        {tool.category === 'Audio' && <Waveform />}
        {tool.category === 'Image' && !tool.image && (
          <div className="w-full h-full opacity-20" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        )}
      </div>

      <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
        <span className="text-sm font-bold text-text-primary tracking-wide">Preview Output →</span>
      </div>
    </div>

    {/* Bottom Panel */}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{tool.icon}</span>
        <h4 className="font-syne font-bold text-text-primary">{tool.name}</h4>
      </div>
      <p className="text-text-secondary text-sm mb-4 line-clamp-1">{tool.desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tool.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold text-text-ghost uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="font-mono text-xs text-text-secondary">
          from <span className="text-text-primary font-bold">{tool.price}</span> ⚡/gen
        </div>
        <button className="text-primary text-sm font-bold flex items-center gap-1 group/btn transition-all">
          Try Now 
          <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </motion.div>
  );
};
