import React from 'react';
import { AIToolsGrid } from '../components/AIToolsGrid';
import { ToolChip } from '../components/ToolChip';
import { showcaseTools } from '../data/tools';

export const Tools = () => {
  return (
    <>
      <section id="ai-tools" className="py-24 bg-void">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              AI GENERATION TOOLS
            </span>
            <h2 className="font-syne text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Every tool you need.{"\n"}One credit balance.
            </h2>
            <p className="font-sans text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Access the world's best AI image, video, and audio models. 
              Try before you buy. Pay only for what you generate.
            </p>
          </div>

          {/* Filter Tabs */}
          <AIToolsGrid />

          {/* Request Banner */}
          <div className="mt-24 p-8 md:p-12 rounded-3xl bg-surface border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h3 className="font-syne text-2xl font-bold text-text-primary mb-2">Missing a tool?</h3>
              <p className="text-text-secondary">We add new models every week based on creator requests.</p>
            </div>
            <button className="px-8 py-4 rounded-full border border-subtle text-text-secondary font-bold hover:text-text-primary hover:border-text-primary/20 transition-all duration-300">
              Request a Tool
            </button>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee Row */}
      <section id="tools-marquee" className="py-24 bg-void overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-ghost block mb-4">
            TOOLS YOU CAN ACCESS TODAY
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {/* First Row: Scrolling Right */}
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee gap-6 whitespace-nowrap py-4">
              {[...showcaseTools, ...showcaseTools].map((tool, i) => (
                <ToolChip key={`${tool.name}-${i}`} tool={tool} />
              ))}
            </div>
          </div>

          {/* Second Row: Scrolling Left */}
          <div className="flex overflow-hidden group">
            <div className="flex animate-marquee-reverse gap-6 whitespace-nowrap py-4">
              {[...showcaseTools, ...showcaseTools].map((tool, i) => (
                <ToolChip key={`${tool.name}-rev-${i}`} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
