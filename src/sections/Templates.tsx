import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Plus, Zap } from 'lucide-react';
import libraryImg from '../assets/library.png';

export const Templates = () => {
  return (
    <section id="templates" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              ASSET LIBRARY
            </span>
            <h2 className="font-syne text-4xl md:text-6xl font-bold text-text-primary leading-tight">
              100,000+ Assets.{"\n"}Infinite possibilities.
            </h2>
          </div>
          <button className="px-8 py-4 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-text-primary transition-all duration-300 flex items-center gap-2 group">
            Browse Library <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Premiere Pro", desc: "Dynamic transitions & text presets", icon: "🎬", count: "42k+" },
            { title: "DaVinci Resolve", desc: "Pro color luts & fusion effects", icon: "💎", count: "28k+" },
            { title: "Final Cut Pro", desc: "Clean motion graphics & titles", icon: "🍎", count: "15k+" },
            { title: "CapCut", desc: "Viral effects & trending overlays", icon: "📱", count: "18k+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-elevated border border-white/5 group hover:border-primary/40 hover:shadow-glow-violet transition-all duration-500"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
              <h4 className="text-text-primary font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-text-secondary text-sm mb-6">{item.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-text-ghost font-bold">{item.count} assets</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-ghost group-hover:bg-primary/20 group-hover:text-primary transition-all">
                  <Plus size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Library Preview Strip */}
        <div className="mt-20 relative rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform">
              <Zap size={18} fill="black" /> Preview Library
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 w-full h-full opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
            <img 
              src={libraryImg} 
              alt="Template Library" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
