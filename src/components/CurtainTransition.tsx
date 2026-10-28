'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CurtainContextType {
  triggerTransition: (targetHash?: string, label?: string) => void;
  isTransitioning: boolean;
}

const CurtainContext = createContext<CurtainContextType>({
  triggerTransition: () => {},
  isTransitioning: false,
});

export const useCurtain = () => useContext(CurtainContext);

export function CurtainProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [curtainLabel, setCurtainLabel] = useState<string>('');

  const triggerTransition = useCallback((targetHash?: string, label?: string) => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (targetHash) {
        const el = document.querySelector(targetHash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setCurtainLabel(label || (targetHash ? targetHash.replace('#', '').toUpperCase() : 'NAVIGATION'));
    setIsTransitioning(true);

    // Scroll at the exact midpoint when the curtain covers the viewport
    setTimeout(() => {
      if (targetHash) {
        const el = document.querySelector(targetHash);
        el?.scrollIntoView({ behavior: 'auto' });
      }
    }, 220);

    // Complete transition quickly
    setTimeout(() => {
      setIsTransitioning(false);
    }, 480);
  }, []);

  return (
    <CurtainContext.Provider value={{ triggerTransition, isTransitioning }}>
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <div
            className="fixed inset-0 z-[100] pointer-events-none flex flex-col justify-between"
            aria-hidden="true"
          >
            {/* Top Shutter Layer */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.24,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ transformOrigin: 'top' }}
              className="w-full h-1/2 bg-[#09090e] border-b border-[#d4ff32]/40 relative flex items-end justify-center pb-4"
            >
              <div className="font-mono text-[10px] tracking-widest text-[#d4ff32] uppercase opacity-70">
                ADITYA S. SHEREGAR // {curtainLabel}
              </div>
            </motion.div>

            {/* Bottom Shutter Layer */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.24,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ transformOrigin: 'bottom' }}
              className="w-full h-1/2 bg-[#09090e] border-t border-[#d4ff32]/40 relative flex items-start justify-center pt-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32] animate-ping" />
                <span className="font-mono text-[9px] tracking-widest text-[#727284] uppercase">
                  SYSTEM TRANSITION ACTIVE
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </CurtainContext.Provider>
  );
}

