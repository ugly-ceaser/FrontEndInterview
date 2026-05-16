import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const CTA = () => {
  const isReducedMotion = useReducedMotion();

  return (
    <section className="relative py-32 md:py-48 bg-void overflow-hidden text-center">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(124,92,252,0.15)_0%,transparent_70%)]" />
        
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-block px-4 py-1.5 rounded-full bg-elevated/50 border border-white/5 backdrop-blur-md"
        >
          <span className="text-text-secondary text-xs font-medium">✦ Limited-time offer for AI Creator Course students</span>
        </motion.div>

        <h2 className="font-syne font-bold text-4xl md:text-7xl text-text-primary mb-8 leading-[1.1] tracking-tight">
          {"Your AI creative studio is one click away.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <p className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-12">
          Stop paying for tools separately. Start with $98 in credits or go all-in with the subscription. 
          Either way — your first generation could be live in 60 seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-primary text-text-primary px-10 py-5 rounded-full font-bold text-lg shadow-glow-violet hover:scale-[1.02] active:scale-95 transition-all">
            Claim Your Credits — $98 One-Time
          </button>
          <button className="px-10 py-5 rounded-full font-bold text-lg text-text-secondary border border-subtle hover:text-text-primary transition-all">
            Start Subscription — $39/mo
          </button>
        </div>

        <p className="text-text-ghost text-xs flex items-center justify-center gap-2">
          <ShieldCheck size={14} /> 100% money-back guarantee · No hidden fees · Cancel anytime
        </p>
      </div>
    </section>
  );
};
