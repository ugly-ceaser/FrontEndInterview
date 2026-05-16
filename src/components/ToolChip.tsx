import React from 'react';
import { showcaseTools } from '../data/tools';

export const ToolChip = ({ tool }: { tool: typeof showcaseTools[0] }) => (
  <div className="bg-elevated/40 border border-white/5 px-6 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:scale-[1.05] hover:bg-elevated/80 hover:border-primary/30 hover:shadow-glow-violet cursor-default">
    <span className="text-2xl">{tool.icon}</span>
    <div className="flex flex-col">
      <span className="text-text-primary font-bold font-sans">{tool.name}</span>
      <span className="font-mono text-[10px] text-text-ghost uppercase tracking-wider">from ${tool.price}/gen</span>
    </div>
  </div>
);
