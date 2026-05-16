import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Zap, Star } from 'lucide-react';
import { ToolChip } from '../components/ToolChip';
import { showcaseTools } from '../data/tools';

export const ValueProp = () => {
  return (
    <section id="value-prop" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">
            THE PROMPTEDIT DIFFERENCE
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-text-primary whitespace-pre-line">
            Stop juggling subscriptions.{"\n"}Start creating.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative items-center">
          {/* VS Badge */}
          <div className="flex absolute left-1/2 top-[48%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-elevated border border-white/10 items-center justify-center z-20 font-syne font-bold text-text-ghost text-xs md:text-base shadow-2xl">
            VS
          </div>

          {/* Before Card */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[#1a0a0a] border border-dashed border-red-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 text-red-500">
              <X size={24} />
            </div>
            <h3 className="font-syne text-xl font-bold mb-8 text-red-100/80 uppercase tracking-wider">Before PromptEdit</h3>
            
            <div className="space-y-4 mb-10">
              {[
                { name: 'Veo', price: '$25.99/mo' },
                { name: 'Kling', price: '$25.99/mo' },
                { name: 'ElevenLabs', price: '$22/mo' },
                { name: 'Suno', price: '$10/mo' },
                { name: 'ChatGPT', price: '$20/mo' },
                { name: 'Gemini', price: '$19.99/mo' },
                { name: 'Grok', price: '$30/mo' },
                { name: 'HeyGen', price: '$99/mo' },
              ].map((tool) => (
                <div key={tool.name} className="flex items-center justify-between group">
                  <span className="text-text-secondary font-medium">{tool.name}</span>
                  <div className="relative">
                    <span className="text-text-ghost font-mono text-sm">{tool.price}</span>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute top-1/2 left-0 h-[1.5px] bg-red-500/40 -rotate-2 origin-left"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-red-500/10">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-red-200/60 text-sm font-medium uppercase">Minimum Total</span>
                <span className="text-red-500 font-syne text-2xl font-bold">~$252/month</span>
              </div>
              <p className="text-red-900/60 text-xs font-medium">And you still don't own the content.</p>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[#040f0f] border border-secondary/20 rounded-3xl p-8 md:p-10 relative shadow-2xl shadow-secondary/5"
          >
            <div className="absolute top-6 right-6 text-secondary">
              <Check size={24} />
            </div>
            <h3 className="font-syne text-xl font-bold mb-8 text-secondary uppercase tracking-wider">After PromptEdit</h3>
            
            <ul className="space-y-6 mb-10">
              {[
                "One platform — all tools",
                "Pay per generation, not per month",
                "No subscriptions. Ever.",
                "All major AI models, always updated"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-secondary" />
                  </div>
                  <span className="text-text-primary font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-secondary/10">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-void/50 border border-white/5 mb-6 group transition-all duration-300 hover:border-primary/20">
                <div className="flex items-center gap-3">
                  <Zap size={18} className="text-primary animate-pulse" />
                  <span className="font-mono text-sm font-bold text-text-primary">847 credits remaining</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary shadow-glow-violet" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-secondary/60 text-sm font-medium uppercase">Start from</span>
                <span className="text-text-primary font-syne text-2xl font-bold">$98 one-time</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
