import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, animate, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown, Check, Zap, ShieldCheck, Wallet, Star, Plus, Youtube, Instagram, Twitter } from 'lucide-react';

import heroImg from './assets/hero.png';
import veoImg from './assets/veo.png';
import klingImg from './assets/kling.png';
import nanobananaImg from './assets/nanobanana.png';
import fluxImg from './assets/flux.png';
import ideogramImg from './assets/ideogram.png';
import grokImg from './assets/grok.png';
import libraryImg from './assets/library.png';
import hildaImg from './assets/hilda.png';
import mattImg from './assets/matt.png';
import dariusImg from './assets/darius.png';
import priyaImg from './assets/priya.png';
import jamieImg from './assets/jamie.png';
import bradyImg from './assets/brady.png';






const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} className="nav-link text-sm font-medium" onClick={onClick}>
    {children}
  </a>
);

const ScrollProgress = ({ scaleX }: { scaleX: any }) => (
  <motion.div 
    className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary z-[100] origin-left"
    style={{ scaleX }}
  />
);

const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (isReducedMotion) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[90] hidden lg:block"
      style={{
        background: useMotionTemplate`radial-gradient(120px circle at ${springX}px ${springY}px, rgba(124,92,252,0.15), transparent 80%)`
      }}
    />
  );
};

const Particles = ({ count = 20 }: { count?: number }) => {
  const isReducedMotion = useReducedMotion();
  if (isReducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{ 
            y: [null, '-20px', '0px'],
            opacity: [null, 0.7, 0.3]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            backgroundColor: i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-secondary)' : 'white',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

const FadeDivider = ({ from = "bg-void", to = "bg-surface" }: { from?: string, to?: string }) => (
  <div className={`h-20 w-full bg-gradient-to-b ${from} ${to} pointer-events-none`} />
);


const showcaseTools = [
  { id: 1, name: 'Veo', category: 'Video', icon: '🎬', desc: 'Google DeepMind text-to-video', tags: ['Text-to-Video', 'Cinematic'], price: '0.12', image: veoImg },
  { id: 2, name: 'Kling', category: 'Video', icon: '🦙', desc: 'Realistic motion video gen', tags: ['High-Fidelity', 'Pro'], price: '0.15', image: klingImg },
  { id: 3, name: 'Nano Banana Pro', category: 'Video', icon: '🍌', desc: 'Fast short-form video', tags: ['Social', 'Fast'], price: '0.08', image: nanobananaImg },
  { id: 4, name: 'Flux', category: 'Image', icon: '🖼️', desc: 'Ultra-realistic image gen', tags: ['Stable Diffusion', 'Art'], price: '0.05', image: fluxImg },
  { id: 5, name: 'Ideogram', category: 'Image', icon: '🎨', desc: 'Text-in-image specialist', tags: ['Typography', 'Layout'], price: '0.05', image: ideogramImg },
  { id: 6, name: 'Grok Aurora', category: 'Image', icon: '💎', desc: 'Creative image gen', tags: ['X.ai', 'Modern'], price: '0.04', image: grokImg },
  { id: 7, name: 'ElevenLabs', category: 'Audio', icon: '🔊', desc: 'AI voice cloning & voiceovers', tags: ['Voice', 'HQ'], price: '0.02' },
  { id: 8, name: 'Suno', category: 'Audio', icon: '🎵', desc: 'AI music generation', tags: ['Music', 'Full Songs'], price: '0.05' },
  { id: 9, name: 'HeyGen', category: 'Audio', icon: '🎭', desc: 'AI avatar video', tags: ['Avatar', 'Lip-sync'], price: '0.50' },
  { id: 10, name: 'Magic Refine', category: 'Plugins', icon: '✂️', desc: 'Auto-enhance video quality', tags: ['Upscale', 'AI'], price: '0.05' },
  { id: 11, name: 'Subtitle Gen', category: 'Plugins', icon: '💬', desc: 'Dynamic burned-in captions', tags: ['Social', 'Fast'], price: '0.01' },
];

const testimonials = [
  { name: 'Hilda S.', role: 'Online Course Creator', quote: 'I cancelled 6 subscriptions the week I joined PromptEdit. I use it every single day now.', image: hildaImg },
  { name: 'Matt L.', role: 'ContentCreator.com', quote: 'My videos wouldn\'t look half as good without this. I lean on it for every edit I do.', image: mattImg },
  { name: 'Darius K.', role: 'Ad Creative Director', quote: 'Kling AI through PromptEdit is insane. The video quality blew my entire team away.', image: dariusImg },
  { name: 'Priya M.', role: 'TikTok Creator, 2.1M followers', quote: 'The fact that I can access Veo AND ElevenLabs from one dashboard, one credit balance — game changer.', image: priyaImg },
  { name: 'Jamie R.', role: 'YouTube Shorts Creator', quote: 'Nano Banana for short-form content is stupid fast. I\'m publishing twice as much.', image: jamieImg },
  { name: 'Brady H.', role: 'ContentCreator.com student', quote: 'Honestly the Content Creator Templates Library alone is worth it. But the AI tools are what keep me subscribed.', image: bradyImg },
];

const faqs = [
  { q: "What is PromptEdit.com?", a: "A pay-per-use AI marketplace giving creators access to 20+ AI generation tools including Veo, Kling, Nano Banana, ElevenLabs, and Suno — from one dashboard, one credit balance." },
  { q: "How do AI credits work?", a: "Credits are like fuel. You buy them once and spend them across any tool. 1 image generation might cost 5 credits. 1 video generation might cost 40. You see the cost before you generate. Credits never expire." },
  { q: "Can I use what I create commercially?", a: "Yes. Everything generated through PromptEdit is yours to use commercially, including in client work, YouTube videos, ads, and courses." },
  { q: "Is there a difference in quality vs going direct?", a: "No. PromptEdit connects directly to the official APIs of each model. You get identical quality to the source platform." },
  { q: "What happens to my templates if I cancel?", a: "You keep everything you downloaded. Your generated AI content is yours permanently. Only ongoing access to the library is paused." },
  { q: "Will the templates work in my editing platform?", a: "Yes. All templates are compatible with Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, and CapCut." },
  { q: "Can I cancel anytime?", a: "Absolutely. No lock-in, no questions asked. Cancel from your dashboard in one click." },
  { q: "Do you add new AI tools regularly?", a: "Yes — we integrate new models as they launch. If a tool you need isn't there, you can request it." },
];

const Waveform = () => (
  <div className="flex items-center justify-center gap-1.5">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ height: [12, 32, 16, 40, 12] }}
        transition={{ 
          duration: 1.2, 
          repeat: Infinity, 
          delay: i * 0.1, 
          ease: "easeInOut" 
        }}
        className="w-1 bg-primary/60 rounded-full"
      />
    ))}
  </div>
);

const ToolCard = ({ tool, index }: { tool: typeof showcaseTools[0], index: number }) => {
  const isReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 15 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (isReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      layout
      initial={{ y: 40, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ 
        rotateX: isReducedMotion ? 0 : rotateX, 
        rotateY: isReducedMotion ? 0 : rotateY, 
        perspective: 1000 
      }}
      className="group bg-elevated border border-white/5 rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-glow-violet transition-all duration-300"
    >
    {/* Preview Zone */}
    <div className="aspect-video relative bg-surface overflow-hidden">
      {tool.image ? (
        <img 
          src={tool.image} 
          alt={tool.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      ) : (
        <div className={`absolute inset-0 opacity-40 ${
          tool.category === 'Video' ? 'bg-gradient-to-br from-indigo-900 to-black' :
          tool.category === 'Image' ? 'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500' :
          'bg-void'
        }`} />
      )}
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {tool.category === 'Video' && (
          <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-2xl">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-current border-b-[10px] border-b-transparent ml-1" />
          </div>
        )}
        {tool.category === 'Audio' && <Waveform />}
        {tool.category === 'Image' && !tool.image && (
          <div className="w-full h-full opacity-20" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        )}
      </div>

      <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
        <span className="text-sm font-bold text-text-primary tracking-wide">Preview Output →</span>
      </div>
    </div>

    {/* Bottom Panel */}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{tool.icon}</span>
        <h4 className="font-syne font-bold text-text-primary">{tool.name}</h4>
      </div>
      <p className="text-text-secondary text-sm mb-4 line-clamp-1">{tool.desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tool.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold text-text-ghost uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="font-mono text-xs text-text-secondary">
          from <span className="text-text-primary font-bold">{tool.price}</span> ⚡/gen
        </div>
        <button className="text-primary text-sm font-bold flex items-center gap-1 group/btn transition-all">
          Try Now 
          <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </motion.div>
  );
};

const AIToolsGrid = () => {
  const [activeTab, setActiveTab] = useState('All Tools');
  const categories = ['All Tools', 'Image', 'Video', 'Audio', 'Plugins'];

  const filteredTools = activeTab === 'All Tools' 
    ? showcaseTools 
    : showcaseTools.filter(t => t.category === activeTab);

  return (
    <>
      <div className="sticky top-24 z-30 flex justify-center mb-16 px-4">
        <div className="flex bg-elevated/80 backdrop-blur-xl p-1.5 rounded-full border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-full">
          <div className="flex shrink-0">
            {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                activeTab === cat ? 'text-white' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredTools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const StatItem = ({ value, label, prefix = '', suffix = '', decimals = 0 }: { value: number, label: string, prefix?: string, suffix?: string, decimals?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        animate(count, value, { duration: 2, ease: "easeOut" });
      }}
      className="text-center"
    >
      <motion.h3 className="font-syne text-4xl md:text-5xl font-bold text-text-primary mb-2">
        {rounded}
      </motion.h3>
      <p className="text-text-secondary text-sm font-medium">{label}</p>
    </motion.div>
  );
};

const FAQItem = ({ q, a, index }: { q: string, a: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group rounded-2xl bg-elevated border transition-all duration-500 overflow-hidden ${
        isOpen ? 'border-primary' : 'border-white/5 hover:border-white/10'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <span className="font-sans font-bold text-text-primary pr-8">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-primary text-text-primary' : 'bg-white/5 text-text-ghost'
          }`}
        >
          <Plus size={18} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 text-text-secondary text-sm leading-relaxed max-w-xl">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ToolChip = ({ tool }: { tool: typeof showcaseTools[0] }) => (
  <div className="bg-elevated/40 border border-white/5 px-6 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:scale-[1.05] hover:bg-elevated/80 hover:border-primary/30 hover:shadow-glow-violet cursor-default">
    <span className="text-2xl">{tool.icon}</span>
    <div className="flex flex-col">
      <span className="text-text-primary font-bold font-sans">{tool.name}</span>
      <span className="font-mono text-[10px] text-text-ghost uppercase tracking-wider">from ${tool.price}/gen</span>
    </div>
  </div>
);

export default function App() {

  const isReducedMotion = useReducedMotion();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [generations, setGenerations] = useState(30);
  const [showComparison, setShowComparison] = useState(false);
  const isSubscriptionRecommended = generations >= 40;

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Transition navbar from transparent to frosted glass
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(13, 13, 20, 0)', 'rgba(13, 13, 20, 0.8)']
  );
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ['rgba(124, 92, 252, 0)', 'rgba(124, 92, 252, 0.15)']
  );
  const navBlur = useTransform(
    scrollY,
    [0, 80],
    ['blur(0px)', 'blur(12px)']
  );

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'AI Tools', href: '#tools' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Templates', href: '#templates' },
    { name: 'Creators', href: '#creators' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="min-h-screen bg-void selection:bg-primary/30 grain-overlay">
      <ScrollProgress scaleX={scaleX} />
      <CursorGlow />
      
      {/* Navigation */}
      <motion.nav
        style={{ 
          backgroundColor: navBg, 
          borderBottomColor: navBorder,
          backdropFilter: navBlur 
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-syne text-2xl font-bold tracking-tight">
              <span className="text-text-primary">Prompt</span>
              <span className="text-primary">Edit</span>
              <span className="text-text-secondary text-lg">.com</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-text-primary px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-glow-violet active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-surface md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 h-20 border-b border-white/5">
              <div className="font-syne text-2xl font-bold">
                <span className="text-text-primary">Prompt</span>
                <span className="text-primary">Edit</span>
              </div>
              <button 
                className="text-text-primary p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-8 px-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-syne font-bold text-text-primary flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                </motion.a>
              ))}
            </div>

            <div className="p-10 border-t border-white/5">
              <button className="w-full bg-primary text-text-primary py-4 rounded-2xl text-lg font-bold shadow-glow-violet">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main>
        <section id="hero" className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
          {/* Background Layers */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Radial Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(124,92,252,0.15)_0%,transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_center,rgba(0,240,200,0.08)_0%,transparent_70%)]" />
            
            {/* Dot Grid */}
            <div 
              className="absolute inset-0 opacity-[0.15]" 
              style={{ 
                backgroundImage: `radial-gradient(var(--text-ghost) 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />

            {/* Floating Orbs */}
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

          {/* Floating Particles */}
          <Particles count={20} />

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
            {/* Top Badge */}
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

            {/* Headline */}
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

            {/* Subheadline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 font-sans leading-relaxed"
            >
              Access Veo, Kling, Nano Banana, ElevenLabs, Suno and 20+ more AI tools. 
              Pay per generation. No monthly commitments.
            </motion.p>

            {/* CTA Buttons */}
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

            {/* Social Proof */}
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

            {/* Hero Dashboard Preview */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              className="mt-12 w-full max-w-6xl relative px-4"
            >
              {/* Active Generation Badge Pill (Overlapping) */}
              <div className="absolute -top-3 left-10 z-30 px-3 py-1.5 rounded-full bg-surface border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(0,240,200,0.6)]" />
                <span className="text-[10px] font-bold text-text-primary uppercase tracking-[0.1em]">Active Generation: Kling v2</span>
              </div>

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
                  <div className="w-12" /> {/* Spacer */}
                </div>

                <div className="relative">
                  {/* Bottom Gradient Fade */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void via-void/60 to-transparent z-10" />
                  
                  <img 
                    src={heroImg} 
                    alt="PromptEdit Dashboard" 
                    className="w-full h-auto scale-[1.01] group-hover:scale-[1.03] transition-transform duration-1000 block"
                  />
                </div>
              </div>

              {/* Decorative elements behind the image */}
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

        <FadeDivider from="from-void" to="to-surface" />
        
        {/* Value Prop: Before / After */}
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

        <FadeDivider from="from-surface" to="to-void" />

        {/* Section C: AI Tools Showcase */}
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

        <FadeDivider from="from-void" to="to-void" />

        {/* Section D: Pricing */}
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

        {/* Section E: Social Proof */}
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

        {/* Section B: Tool Logos Marquee */}



        <section id="tools" className="py-24 bg-void overflow-hidden border-y border-white/5">
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
        <FadeDivider from="from-void" to="to-surface" />

        {/* Section H: Templates Library */}
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

        <FadeDivider from="from-surface" to="to-surface" />

        {/* Section F: FAQ */}
        <section id="faq" className="py-24 md:py-32 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">
                COMMON QUESTIONS
              </span>
              <h2 className="font-syne text-4xl font-bold text-text-primary">Everything you need to know.</h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} {...faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        <FadeDivider from="from-surface" to="to-void" />

        {/* Section G: Final CTA Hero */}
        <section className="relative py-32 md:py-48 bg-void overflow-hidden text-center">
          {/* Reusing Hero Background */}
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

        <FadeDivider from="from-void" to="to-surface" />

        {/* Footer */}
        <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-1">
                <div className="font-syne text-2xl font-bold mb-6">
                  <span className="text-text-primary">Prompt</span>
                  <span className="text-primary">Edit</span>
                </div>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  The AI marketplace for video creators. All the world's best models in one place.
                </p>
                <p className="text-text-ghost text-xs">
                  © 2025 Paul Xavier International LLC
                </p>
              </div>

              <div>
                <h4 className="text-text-primary font-bold mb-6">Product</h4>
                <ul className="space-y-4">
                  {['AI Tools', 'Pricing', 'Templates Library', 'Request a Tool'].map(link => (
                    <li key={link}><a href="#" className="text-text-secondary text-sm hover:text-primary transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-text-primary font-bold mb-6">Company</h4>
                <ul className="space-y-4">
                  {['About', 'Terms & Conditions', 'Privacy Policy', 'Earnings Disclaimer'].map(link => (
                    <li key={link}><a href="#" className="text-text-secondary text-sm hover:text-primary transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-text-primary font-bold mb-6">Connect</h4>
                <p className="text-text-secondary text-sm mb-6">Built for creators, by creators.</p>
                <div className="flex gap-4">
                  {[Youtube, Instagram, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-primary/20 hover:text-primary transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                <p className="text-text-ghost text-[10px] mt-6 italic">Not affiliated with Facebook / Meta.</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] text-text-ghost leading-relaxed text-center max-w-4xl mx-auto opacity-50">
                DISCLAIMER: This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. We believe in being fully transparent with you. We do not believe in “get rich quick” programs. We believe in hard work, adding value and serving others. And that’s what our programs are designed to help you do. As stated by law, we can not and do not make any guarantees about your own ability to get results or earn any money with our ideas, information, programs or strategies. We don’t know you and, besides, your results in life are up to you. Agreed? We’re here to help by giving you our greatest strategies to move you forward, faster. However, nothing on this page or any of our websites or emails is a promise or guarantee of future earnings. Any financial numbers referenced here, or on any of our sites or emails, are simply estimates or projections or past results, and should not be considered exact, actual or as a promise of potential earnings - all numbers are illustrative only.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
