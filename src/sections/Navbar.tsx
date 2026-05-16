import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NavLink } from '../components/ui/NavLink';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

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
    <>
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
          <div className="flex items-center gap-2">
            <span className="font-syne text-2xl font-bold tracking-tight">
              <span className="text-text-primary">Prompt</span>
              <span className="text-primary">Edit</span>
              <span className="text-text-secondary text-lg">.com</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-text-primary px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-glow-violet active:scale-95">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

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
    </>
  );
};
