'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCurtain } from './CurtainTransition';

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience', isBackstage: true },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { triggerTransition } = useCurtain();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['contact', 'resume', 'about', 'projects'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string,
    isBackstage?: boolean
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isBackstage) {
      window.dispatchEvent(new CustomEvent('open-experience-space'));
      return;
    }
    triggerTransition(href, label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#171717]/85 backdrop-blur-xl border-b border-[#262626] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              triggerTransition('#home', 'TOP');
            }}
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] rounded-sm"
            aria-label="Aditya S. Sheregar — Back to top"
          >
            <span className="w-8 h-8 rounded-sm bg-[#06110c] border border-[#14291e] group-hover:border-[#a31c1b] flex items-center justify-center font-mono font-bold text-xs text-[#a31c1b] transition-colors">
              AS
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-[#f4f4f7] group-hover:text-white transition-colors">
                Aditya S. Sheregar
              </span>
              <span className="text-[11px] font-mono text-[#8a8a9a] hidden sm:block">
                AI-ML & Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#06110c]/90 border border-[#14291e] px-3 py-1.5 rounded-full shadow-inner" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.label, item.isBackstage)}
                  data-cursor={item.isBackstage ? 'enter' : undefined}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#9a9aab] hover:text-[#f4f4f7]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#a31c1b] rounded-full -z-10 shadow-[0_2px_10px_rgba(163,28,27,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Hub */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/adi202023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-full border border-[#262626] bg-[#06110c] hover:border-[#a31c1b] hover:text-[#a31c1b] flex items-center justify-center text-[#9a9aab] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-sheregar-4484b2326/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-full border border-[#262626] bg-[#06110c] hover:border-[#a31c1b] hover:text-[#a31c1b] flex items-center justify-center text-[#9a9aab] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'CONTACT')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-[#06110c] border border-[#262626] text-[#f4f4f7] hover:border-[#a31c1b] hover:text-[#ffffff] hover:bg-[#a31c1b] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-[#262626] bg-[#06110c] text-[#e8e8ed] hover:border-[#a31c1b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#06110c]/98 backdrop-blur-2xl border-b border-[#14291e] p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.label, item.isBackstage)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-[#c4c4cf] hover:text-white hover:bg-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#14291e] flex items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href="https://github.com/adi202023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md border border-[#262626] bg-[#171717] text-[#9a9aab] hover:text-[#a31c1b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aditya-sheregar-4484b2326/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md border border-[#262626] bg-[#171717] text-[#9a9aab] hover:text-[#a31c1b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact', 'CONTACT')}
                  className="px-4 py-2.5 rounded-md bg-[#a31c1b] text-white hover:bg-[#bd2423] font-bold text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
