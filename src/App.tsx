import React from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { NavLink } from './components/ui/NavLink';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CursorGlow } from './components/ui/CursorGlow';
import { FadeDivider } from './components/ui/FadeDivider';

import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ValueProp } from './sections/ValueProp';
import { Tools } from './sections/Tools';
import { Templates } from './sections/Templates';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  return (
    <div className="min-h-screen bg-void selection:bg-primary/30 grain-overlay">
      <ScrollProgress scaleX={scaleX} />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <FadeDivider from="from-void" to="to-surface" />
        <ValueProp />
        <FadeDivider from="from-surface" to="to-void" />
        <Tools />
        <FadeDivider from="from-void" to="to-void" />
        <Pricing />
        <Testimonials />
        <Templates />
        <FadeDivider from="from-surface" to="to-surface" />
        <FAQ />
        <FadeDivider from="from-surface" to="to-void" />
        <CTA />
        <FadeDivider from="from-void" to="to-surface" />
        <Footer />
      </main>
    </div>
  );
}
