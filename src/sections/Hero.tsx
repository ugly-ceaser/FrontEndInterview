import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Particles } from '../components/ui/Particles';
import heroImg from '../assets/hero.png';

export const Hero = () => {
  const isReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(124,92,252,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_center,rgba(0,240,200,0.08)_0%,transparent_70%)]" />
        
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(var(--text-ghost) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 80, -60, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 60, -80, 0],
            y: [0, 100, 60, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] mix-blend-screen"
        />
      </div>

      <Particles count={20} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-elevated/50 border-l-2 border-secondary/50 backdrop-blur-md"
        >
          <span className="text-secondary text-xs">✦</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">
            Trusted by 43,943+ Content Creators
          </span>
        </motion.div>

        <h1 className="font-syne font-bold text-4xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight">
          <motion.span
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block text-text-primary"
          >
            One Platform.
          </motion.span>
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="block text-text-primary"
          >
            Every AI Video Tool.
          </motion.span>
          <motion.span
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="block bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
          >
            Zero Subscriptions.
          </motion.span>
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 font-sans leading-relaxed"
        >
          Access Veo, Kling, Nano Banana, ElevenLabs, Suno and 20+ more AI tools. 
          Pay per generation. No monthly commitments.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <button className="group relative bg-primary text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-glow-violet hover:scale-[1.02] active:scale-95">
            Start Creating — From $0.10/gen
          </button>
          <button className="px-8 py-4 rounded-full font-bold text-lg text-text-secondary border border-subtle hover:text-text-primary hover:border-text-primary/20 transition-all duration-300">
            Watch How It Works <span className="ml-2">▶</span>
          </button>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full whitespace-nowrap hidden sm:block">
            <p className="text-text-ghost text-[10px] font-bold uppercase tracking-[0.3em]">
              No monthly commitments • Cancel anytime
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {['JD', 'AM', 'KL', 'SR', 'PT'].map((initials, i) => (
              <div 
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-void flex items-center justify-center text-[10px] font-bold text-white
                  ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-secondary' : i === 2 ? 'bg-fire' : i === 3 ? 'bg-indigo-500' : 'bg-purple-500'}`}
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-text-ghost text-sm font-medium tracking-wide uppercase">
            Join 43,943 creators already inside
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="mt-12 w-full max-w-4xl mx-auto relative px-4 overflow-hidden"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-glow-violet bg-elevated group">
            {/* Mock Browser Toolbar */}
            <div className="h-10 px-4 bg-elevated border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 max-w-xs mx-auto h-6 bg-void/40 rounded-md border border-white/5 flex items-center justify-center">
                <span className="text-[10px] text-text-ghost font-mono">promptedit.com/generate</span>
              </div>
              <div className="w-12" />
            </div>

            <div className="relative aspect-video max-h-[220px] sm:max-h-[320px] lg:max-h-[480px]">
              {/* Active Generation Badge Pill (Internal) */}
              <div className="absolute top-3 left-3 z-30 px-3 py-1.5 rounded-full bg-surface/80 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(0,240,200,0.6)]" />
                <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.1em]">Active Generation: Kling v2</span>
              </div>

              {/* Bottom Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-void to-transparent z-10" />
              
              <img 
                src={heroImg} 
                alt="PromptEdit Dashboard" 
                className="w-full h-full object-cover object-center scale-[1.01] group-hover:scale-[1.03] transition-transform duration-1000 block"
              />
            </div>
          </div>

          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-30" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-ghost cursor-pointer"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};
