import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FAQItem } from '../components/FAQItem';
import { faqs } from '../data/faqs';

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-void relative overflow-hidden">
      {/* Subtle Atmosphere Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,92,252,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
          {/* Left Column: Sticky Header */}
          <div className="lg:sticky lg:top-32 flex flex-col items-start text-left">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">
              COMMON QUESTIONS
            </span>
            <h2 className="font-syne text-4xl md:text-[36px] font-bold text-text-primary mb-6 leading-tight">
              Everything you need to know.
            </h2>
            <p className="text-text-secondary font-sans leading-relaxed mb-8 max-w-sm">
              Can't find what you're looking for? Our support team responds within 2 hours.
            </p>
            
            <div className="flex flex-col items-start group">
              <a 
                href="#" 
                className="flex items-center gap-2 text-secondary font-bold text-sm hover:text-text-primary transition-all duration-300 py-2 border-b-2 border-secondary/0 hover:border-secondary/30"
              >
                Chat with us <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="w-[1px] h-[60px] bg-gradient-to-b from-primary to-transparent rounded-full mt-6 ml-4" />
            </div>
          </div>

          {/* Right Column: FAQ Items */}
          <div className="space-y-2 w-full">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
