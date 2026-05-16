import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { StatItem } from '../components/StatItem';
import { testimonials } from '../data/testimonials';

export const Testimonials = () => {
  return (
    <section id="creators" className="py-24 bg-void">
      {/* Stats Banner */}
      <div className="w-full bg-elevated/50 border-y border-white/5 py-16 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value={43943} label="Creators" suffix="+" />
          <StatItem value={20} label="AI Tools" suffix="+" />
          <StatItem value={100000} label="Templates" suffix="+" />
          <StatItem value={0.10} label="Min. per gen" prefix="$" decimals={2} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-text-primary mb-4">Creators love it.</h2>
          <p className="text-text-secondary font-medium">Don't take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
              className="p-8 rounded-3xl bg-elevated border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold text-sm">{t.name}</h4>
                  <p className="text-text-ghost text-[10px] uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-fire text-fire" />
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed italic">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-ghost font-bold block mb-8">
            As seen in / Creators from
          </span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-40">
            {['YouTube', 'TikTok', 'Instagram', 'Teachable', 'Kajabi', 'Skool'].map(brand => (
              <div key={brand} className="px-6 py-2 rounded-full border border-white/10 text-sm font-bold text-text-primary hover:opacity-100 transition-opacity cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
