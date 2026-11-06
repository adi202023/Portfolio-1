'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, Award, MapPin } from 'lucide-react';
import InteractiveNetwork from './InteractiveNetwork';
import { useCurtain } from './CurtainTransition';

export default function Hero() {
  const { triggerTransition } = useCurtain();
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden subtle-lines scroll-mt-20"
      aria-label="Hero Introduction"
    >
      {/* Interactive Neural/Safety Network Graphic */}
      <InteractiveNetwork />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Main Editorial Text (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status Telemetry Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#262626] bg-[#06110c]/90 backdrop-blur-md shadow-sm max-w-full"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a31c1b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a31c1b]" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#a4a4b8] truncate">
                B.Tech CSE · Dayananda Sagar University
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f4f4f7] leading-[1.08] sm:leading-[1.05]">
                Engineering{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e85d5c] via-[#bd2423] to-[#a31c1b]">
                  Intelligent
                </span>{' '}
                &amp; Resilient Systems.
              </h1>
            </motion.div>

            {/* Accurate Tagline based on actual profile */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-lg text-[#9595a8] max-w-xl leading-relaxed"
            >
              I&apos;m <span className="text-[#f4f4f7] font-medium">Aditya S. Sheregar</span>, an AI-ML Engineer and Full Stack Developer based in Bengaluru.
              I combine rigorous software engineering with machine learning and cryptography to build practical, real-world solutions—from privacy-first safety infrastructure to decentralized voting.
            </motion.p>

            {/* Interactive CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  triggerTransition('#projects', 'SELECTED WORK');
                }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#a31c1b] text-[#ffffff] font-bold text-sm tracking-tight transition-all duration-200 hover:bg-[#bd2423] hover:shadow-[0_0_24px_rgba(163,28,27,0.4)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[44px]"
              >
                <span>Explore Selected Work</span>
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  triggerTransition('#contact', 'CONTACT');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#262626] bg-[#06110c] text-[#e0e0ea] text-sm font-semibold hover:border-[#a31c1b] hover:text-[#ffffff] hover:bg-[#171717] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[44px]"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Quick telemetry stats / proof points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="grid grid-cols-3 gap-2 sm:gap-6 pt-5 sm:pt-6 border-t border-[#262626]"
            >
              <div className="group">
                <div className="font-mono text-sm sm:text-xl md:text-2xl font-bold text-[#f4f4f7] flex items-center gap-1 group-hover:text-[#a31c1b] transition-colors truncate">
                  <ShieldCheck size={15} className="text-[#a31c1b] shrink-0" />
                  <span className="truncate">Saarthi</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#7e7e92] font-mono mt-0.5 truncate">Privacy Infra</p>
              </div>

              <div className="group">
                <div className="font-mono text-sm sm:text-xl md:text-2xl font-bold text-[#f4f4f7] flex items-center gap-1 group-hover:text-[#a31c1b] transition-colors truncate">
                  <Award size={15} className="text-[#a31c1b] shrink-0" />
                  <span className="truncate">1st Place</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#7e7e92] font-mono mt-0.5 truncate">Bharat-ID</p>
              </div>

              <div className="group">
                <div className="font-mono text-sm sm:text-xl md:text-2xl font-bold text-[#f4f4f7] flex items-center gap-1 group-hover:text-[#a31c1b] transition-colors truncate">
                  <Terminal size={15} className="text-[#a31c1b] shrink-0" />
                  <span className="truncate">IEEE RAS</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#7e7e92] font-mono mt-0.5 truncate">Chapter Chair</p>
              </div>
            </motion.div>
          </div>

          {/* Art-Directed Profile & Architectural Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative mx-auto max-w-[280px] sm:max-w-[360px] p-3 sm:p-4 rounded-xl border border-[#14291e] bg-gradient-to-b from-[#06110c] via-[#0a1811] to-[#06110c] shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#a31c1b] rounded-tl-sm" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#a31c1b] rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#a31c1b] rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#a31c1b] rounded-br-sm" />

              {/* Photo Box */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#0a1811] border border-[#14291e] group">
                <Image
                  src="/profile-photo.jpg"
                  alt="Aditya S. Sheregar"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 360px"
                  className="object-cover object-top grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06110c] via-transparent to-transparent opacity-75 pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] sm:text-xs font-mono">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#06110c]/90 border border-[#14291e] backdrop-blur-md text-[#a31c1b] shadow-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b]" />
                    <span>AI-ML &amp; Web</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2 sm:py-1 rounded-md bg-[#06110c]/90 border border-[#14291e] text-[#9a9aab]">
                    <MapPin size={11} />
                    <span>Bengaluru</span>
                  </div>
                </div>
              </div>

              {/* Telemetry caption */}
              <div className="pt-3 sm:pt-4 px-1 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#8a8a9a]">
                <span className="truncate max-w-[65%]">CORE: Python · C++ · React</span>
                <span className="text-[#a31c1b] font-semibold shrink-0">SYSTEM ACTIVE</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
