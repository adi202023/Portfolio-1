'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

    // Auto-resolve in ~1.8s
    timerRef.current = setTimeout(() => {
      dismiss();
    }, 1800);

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
    setTimeout(() => setShow(false), 900);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Designed Stage Proscenium Opening"
          className="fixed inset-0 z-[300] overflow-hidden select-none pointer-events-auto bg-[#06110c]"
        >
          {/* Proscenium Outer Arch Trim (Top Header Bar) */}
          <div className="absolute top-0 inset-x-0 z-30 h-9 sm:h-10 bg-[#06110c] border-b border-[#14291e] px-3 sm:px-6 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#8a8a9a]">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#a31c1b] truncate max-w-[55%]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b] animate-pulse shrink-0" />
              <span className="font-bold tracking-widest uppercase truncate">PROSCENIUM // STAGE 01</span>
            </div>
            <span className="tracking-widest hidden md:inline text-[#666675]">
              SEC: DSU-RAS // BENGALURU, IN
            </span>
            <span className="text-[#a0a0b2] shrink-0 font-medium">ADITYA S. SHEREGAR</span>
          </div>

          {/* LEFT CURTAIN PANEL with layered drapery folds */}
          <motion.div
            className="absolute top-9 sm:top-10 bottom-0 left-0 w-1/2 curtain-fabric-left flex flex-col justify-center items-end pr-3 sm:pr-14 border-r border-dashed border-[#a31c1b]/35 z-10"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: '-102%' }}
            transition={{ duration: 0.82, ease: EASE_PROSCENIUM, delay: 0 }}
          >
            {/* Subtle fabric sheen catching warm moving light */}
            <motion.div
              initial={{ opacity: 0.3, y: '-100%' }}
              animate={{ opacity: [0.2, 0.55, 0.2], y: ['-50%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-r from-transparent via-[#a31c1b]/10 to-transparent pointer-events-none"
            />

            {/* Left Content (First part of Title) */}
            <div className="text-right max-w-[150px] sm:max-w-md space-y-1 sm:space-y-2">
              <span className="text-[8px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#a31c1b] block font-semibold truncate">
                [ Selected Work ]
              </span>
              <h1 className="text-xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4f4f7] leading-none">
                ADITYA S.
              </h1>
              <p className="text-[9px] sm:text-sm font-mono text-[#8a8a9e] line-clamp-1">
                IEEE RAS Chair
              </p>
            </div>
          </motion.div>

          {/* TRAVELING WARM LIGHT BEAM ALONG CENTER SEAM */}
          <div className="absolute inset-y-9 sm:inset-y-10 left-1/2 -translate-x-1/2 w-px z-20 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              className="w-1.5 -ml-[2px] h-32 sm:h-48 bg-gradient-to-b from-transparent via-[#a31c1b] to-transparent shadow-[0_0_14px_#a31c1b]"
            />
          </div>

          {/* RIGHT CURTAIN PANEL with layered drapery folds */}
          <motion.div
            className="absolute top-9 sm:top-10 bottom-0 right-0 w-1/2 curtain-fabric-right flex flex-col justify-center items-start pl-3 sm:pl-14 border-l border-dashed border-[#a31c1b]/35 z-10"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: '102%' }}
            transition={{ duration: 0.82, ease: EASE_PROSCENIUM, delay: 0.03 }}
          >
            {/* Subtle fabric sheen catching warm moving light */}
            <motion.div
              initial={{ opacity: 0.3, y: '-100%' }}
              animate={{ opacity: [0.2, 0.55, 0.2], y: ['-50%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-transparent via-[#a31c1b]/10 to-transparent pointer-events-none"
            />

            {/* Right Content (Second part of Title & Actions) */}
            <div className="text-left max-w-[155px] sm:max-w-md space-y-1.5 sm:space-y-3">
              <span className="text-[8px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#8a8a9a] block truncate">
                Folio Dossier
              </span>
              <div className="text-xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#a31c1b] leading-none">
                SHEREGAR
              </div>
              <p className="text-[9px] sm:text-sm font-mono text-[#a0a0b6] line-clamp-1">
                AI-ML &amp; Full Stack
              </p>

              {/* Immediate Controls: Stack cleanly on mobile without overflowing */}
              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-4">
                <button
                  onClick={dismiss}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded bg-[#a31c1b] text-[#ffffff] font-mono font-bold text-[10px] sm:text-xs hover:bg-[#bd2423] shadow-[0_0_20px_rgba(163,28,27,0.35)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
                  autoFocus
                >
                  <span>ENTER STAGE</span>
                  <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={dismiss}
                  className="text-[9px] sm:text-xs font-mono text-[#8a8a9e] hover:text-[#f4f4f7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent py-0.5"
                >
                  Skip →
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
              className="absolute inset-0 z-40 bg-gradient-to-r from-transparent via-[#a31c1b]/20 to-transparent pointer-events-none"
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
