'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Shield } from 'lucide-react';

const EASE_PROSCENIUM: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function FolioReveal() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // Check reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      return;
    }

    // Session check
    try {
      if (sessionStorage.getItem('folio-seen')) return;
    } catch {
      // ignore
    }

    setShow(true);

    // Auto-resolve in ~1.5s
    timerRef.current = setTimeout(() => {
      dismiss();
    }, 1500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setExiting(true);
    try {
      sessionStorage.setItem('folio-seen', '1');
    } catch {
      // ignore
    }
    // Allow proscenium curtain glide to complete
    setTimeout(() => setShow(false), 950);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Designed Stage Proscenium Opening"
          className="fixed inset-0 z-[300] overflow-hidden select-none pointer-events-auto bg-[#050508]"
        >
          {/* Proscenium Outer Arch Trim (Top Header Bar) */}
          <div className="absolute top-0 inset-x-0 z-30 h-10 bg-[#0c0c14] border-b border-[#222232] px-6 flex items-center justify-between text-[10px] font-mono text-[#767688]">
            <div className="flex items-center gap-2 text-[#d4ff32]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32] animate-pulse" />
              <span className="font-bold tracking-widest uppercase">PROSCENIUM ARCH // STAGE 01</span>
            </div>
            <span className="tracking-widest hidden sm:inline text-[#555568]">
              SEC: DSU-RAS // BENGALURU, IN
            </span>
            <span className="text-[#a0a0b2]">ADITYA S. SHEREGAR</span>
          </div>

          {/* LEFT CURTAIN PANEL with layered drapery folds */}
          <motion.div
            className="absolute top-10 bottom-0 left-0 w-1/2 curtain-fabric-left flex flex-col justify-center items-end pr-8 sm:pr-14 border-r border-dashed border-[#d4ff32]/35 z-10"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: '-102%' }}
            transition={{ duration: 0.85, ease: EASE_PROSCENIUM, delay: 0 }}
          >
            {/* Subtle fabric sheen catching warm moving light */}
            <motion.div
              initial={{ opacity: 0.3, y: '-100%' }}
              animate={{ opacity: [0.2, 0.55, 0.2], y: ['-50%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent via-[#d4ff32]/8 to-transparent pointer-events-none"
            />

            {/* Left Content (First part of Title) */}
            <div className="text-right max-w-md space-y-2">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4ff32] block font-semibold">
                [ Selected Work · 2024–2026 ]
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4f4f7] leading-none">
                ADITYA S.
              </h1>
              <p className="text-xs sm:text-sm font-mono text-[#7c7c90] hidden sm:block">
                IEEE RAS Chapter Chair
              </p>
            </div>
          </motion.div>

          {/* TRAVELING WARM LIGHT BEAM ALONG CENTER SEAM */}
          <div className="absolute inset-y-10 left-1/2 -translate-x-1/2 w-px z-20 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              className="w-1.5 -ml-[2px] h-48 bg-gradient-to-b from-transparent via-[#d4ff32] to-transparent shadow-[0_0_12px_#d4ff32]"
            />
          </div>

          {/* RIGHT CURTAIN PANEL with layered drapery folds */}
          <motion.div
            className="absolute top-10 bottom-0 right-0 w-1/2 curtain-fabric-right flex flex-col justify-center items-start pl-8 sm:pl-14 border-l border-dashed border-[#d4ff32]/35 z-10"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: '102%' }}
            transition={{ duration: 0.85, ease: EASE_PROSCENIUM, delay: 0.04 }}
          >
            {/* Subtle fabric sheen catching warm moving light */}
            <motion.div
              initial={{ opacity: 0.3, y: '-100%' }}
              animate={{ opacity: [0.2, 0.55, 0.2], y: ['-50%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent via-[#d4ff32]/8 to-transparent pointer-events-none"
            />

            {/* Right Content (Second part of Title & Actions) */}
            <div className="text-left max-w-md space-y-3">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#767688] block">
                Folio Dossier
              </span>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#d4ff32] leading-none">
                SHEREGAR
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#a0a0b6]">
                AI-ML Engineer · Full Stack Developer
              </p>

              {/* Immediate Controls */}
              <div className="pt-3 flex items-center gap-4">
                <button
                  onClick={dismiss}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#d4ff32] text-[#070709] font-mono font-bold text-xs hover:bg-[#e4ff57] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
                  autoFocus
                >
                  <span>ENTER STAGE</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={dismiss}
                  className="text-xs font-mono text-[#6c6c80] hover:text-[#f4f4f7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent px-2 py-1 rounded"
                >
                  Skip Intro →
                </button>
              </div>
            </div>
          </motion.div>

          {/* EXIT LIGHT FLARE CARRY-THROUGH */}
          {exiting && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: [0, 0.8, 0], scaleX: 1 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="absolute inset-0 z-40 bg-gradient-to-r from-transparent via-[#d4ff32]/15 to-transparent pointer-events-none"
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
