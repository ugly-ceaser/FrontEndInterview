import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, ChevronDown, X, ShieldCheck } from 'lucide-react';

export const Pricing = () => {
  const [generations, setGenerations] = useState(30);
  const [showComparison, setShowComparison] = useState(false);
  const isSubscriptionRecommended = generations >= 40;

  return (
    <section id="pricing" className="py-24 md:py-32 bg-void relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-fire mb-4 block">
            SIMPLE PRICING
          </span>
          <h2 className="font-syne text-4xl md:text-6xl font-bold text-text-primary">
            Start free.{"\n"}Scale when you're ready.
          </h2>
        </div>

        {/* Usage Calculator */}
        <div className="max-w-xl mx-auto mb-20 p-8 rounded-3xl bg-elevated border border-white/5 shadow-2xl relative">
          <label className="block text-text-primary font-bold mb-6 text-center">
            How many AI generations do you make per week?
          </label>
          
          <div className="relative mb-10 mt-4">
            <input 
              type="range" 
              min="5" 
              max="200" 
              value={generations} 
              onChange={(e) => setGenerations(parseInt(e.target.value))}
              className="w-full h-3 bg-void rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between mt-2 text-[10px] font-mono text-text-ghost uppercase tracking-widest">
              <span>5 GEN</span>
              <span>200 GEN</span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-text-primary font-medium">
              At <span className="text-primary font-bold text-lg">{generations}</span> generations/week, you'd spend ~<span className="text-text-primary font-bold">${(generations * 4 * 0.10).toFixed(2)}</span>/month on credits.
            </p>
            <div className="flex flex-col items-center">
              <p className="text-secondary text-sm font-bold">
                {generations >= 40 
                  ? `The Subscription plan saves you ~$${(generations * 4 * 0.10 - 39).toFixed(2)} vs paying per credit.`
                  : `The "Save on Credits" plan is your best starting point.`}
              </p>
              <p className="text-secondary text-[11px] italic font-medium opacity-90 mt-1">
                You save ~$153/month vs buying separately
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto mb-16">
          {/* Card 2: Subscription (Featured, first on mobile) */}
          <motion.div
            animate={isSubscriptionRecommended ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              background: 'linear-gradient(to bottom, rgba(124, 92, 252, 0.12), rgba(0, 240, 200, 0.06))'
            }}
            className={`relative flex flex-col p-8 md:p-10 rounded-3xl border-2 transition-all duration-500 order-first md:order-last ${
              isSubscriptionRecommended ? 'border-primary shadow-glow-violet' : 'border-primary/20 opacity-90 hover:opacity-100'
            }`}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-primary text-text-primary text-[13px] font-bold uppercase tracking-widest shadow-glow-violet z-20 flex items-center gap-2">
              ⭐ Most Popular
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-syne text-5xl font-bold text-text-primary">$39</span>
                <span className="text-text-secondary text-sm">/month</span>
              </div>
              <p className="text-text-ghost text-[10px] mb-2 uppercase font-bold tracking-wider">easily cancel anytime</p>
              <p className="text-secondary text-sm font-bold leading-tight">
                Get $49 in credits every month + 10% off additional credits
              </p>
            </div>

            <ul className="space-y-4 flex-1 mb-10">
              {[
                "Everything in Credits plan",
                "$49 AI credits included monthly",
                "20% lifetime credit bonus",
                "10% off any credit top-ups",
                "100,000+ asset template library",
                "Faster generation speeds",
                "Multiple simultaneous generations",
                "Priority support"
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-text-primary text-sm font-semibold">
                  <Check size={16} className="text-secondary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-primary text-text-primary font-bold hover:shadow-glow-violet transition-all duration-300">
              Start Subscription
            </button>
          </motion.div>

          {/* Card 1: One-time */}
          <motion.div
            animate={!isSubscriptionRecommended ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`flex flex-col p-8 md:p-10 rounded-3xl bg-elevated border transition-all duration-500 order-last md:order-first ${
              !isSubscriptionRecommended ? 'border-primary/40 shadow-glow-violet' : 'border-white/5 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="mb-8">
              <span className="px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-[10px] font-bold text-secondary uppercase tracking-widest mb-4 inline-block">
                No Monthly Commitments
              </span>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-syne text-5xl font-bold text-text-primary">$98</span>
                <span className="text-text-secondary text-sm">one-time</span>
              </div>
              <p className="text-secondary text-sm font-bold italic">Get $110 worth of AI credits</p>
            </div>

            <ul className="space-y-4 flex-1 mb-10">
              {[
                "10% bonus on first purchase",
                "Use credits on any AI tool",
                "Credits never expire",
                "No subscription required",
                "Try every tool before committing",
                "Top up anytime"
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary text-sm font-medium">
                  <Zap size={14} className="text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-elevated border border-primary text-primary font-bold hover:bg-primary/5 transition-all duration-300">
              Claim Credits
            </button>
          </motion.div>
        </div>

        {/* Comparison Toggle */}
        <div className="text-center mb-16">
          <button 
            onClick={() => setShowComparison(!showComparison)}
            className="text-text-ghost hover:text-text-primary flex items-center gap-2 mx-auto transition-colors font-bold text-sm"
          >
            Compare plans in detail <ChevronDown size={16} className={`transition-transform duration-300 ${showComparison ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-8"
              >
                <div className="max-w-3xl mx-auto rounded-3xl bg-surface border border-white/5 p-6">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="py-4 text-text-ghost uppercase text-[10px] font-bold tracking-widest">Feature</th>
                        <th className="py-4 text-center text-text-ghost uppercase text-[10px] font-bold tracking-widest">Credits</th>
                        <th className="py-4 text-center text-text-ghost uppercase text-[10px] font-bold tracking-widest">Sub</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { f: "Access to All AI Tools", c: true, s: true },
                        { f: "Credits Never Expire", c: true, s: true },
                        { f: "Template Library Access", c: false, s: true },
                        { f: "Lifetime Bonus Multiplier", c: "10%", s: "20%" },
                        { f: "Priority Gen Queue", c: false, s: true },
                        { f: "Support Level", c: "Standard", s: "Priority" },
                      ].map((row, i) => (
                        <tr key={i} className="group hover:bg-white/5 transition-colors">
                          <td className="py-4 text-text-primary font-medium">{row.f}</td>
                          <td className="py-4 text-center font-mono">
                            {typeof row.c === 'boolean' ? (row.c ? <Check size={14} className="mx-auto text-secondary/60" /> : <X size={14} className="mx-auto text-text-ghost" />) : <span className="text-text-secondary">{row.c}</span>}
                          </td>
                          <td className="py-4 text-center font-mono">
                            {typeof row.s === 'boolean' ? (row.s ? <Check size={14} className="mx-auto text-secondary" /> : <X size={14} className="mx-auto text-text-ghost" />) : <span className="text-secondary font-bold">{row.s}</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Payment Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-20 grayscale mb-12">
          {['Apple Pay', 'Visa', 'Mastercard', 'Amex', 'PayPal', 'Google Pay'].map(logo => (
            <span key={logo} className="font-syne font-bold text-text-primary text-sm tracking-tighter">{logo}</span>
          ))}
        </div>

        {/* Guarantee */}
        <div className="max-w-2xl mx-auto p-4 rounded-full bg-elevated border border-yellow-500/10 flex items-center gap-4 justify-center">
          <ShieldCheck className="text-yellow-500 flex-shrink-0" size={20} />
          <p className="text-[11px] md:text-xs text-text-secondary font-medium">
            <span className="text-text-primary font-bold">100% Money-Back Guarantee</span> — Cancel anytime. Full refund within 30 days on unused credits.
          </p>
        </div>
      </div>
    </section>
  );
};
