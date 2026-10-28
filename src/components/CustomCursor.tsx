'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'view' | 'open' | 'enter' | 'visit' | 'explore' | 'text'>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth slight spring for subtle organic response without lag
  const springConfig = { damping: 32, stiffness: 600, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only enable on desktop with fine pointer and no reduced-motion
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || isTouch || isReduced) {
      return;
    }

    setMounted(true);
    document.documentElement.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Text input detection
      if (target.closest('input, textarea, [contenteditable="true"]')) {
        setCursorState('text');
        return;
      }

      // Explicit data-cursor inspection
      const tagged = target.closest('[data-cursor]') as HTMLElement | null;
      if (tagged) {
        const val = tagged.getAttribute('data-cursor');
        if (val === 'view') {
          setCursorState('view');
          return;
        }
        if (val === 'open') {
          setCursorState('open');
          return;
        }
        if (val === 'enter') {
          setCursorState('enter');
          return;
        }
      }

      // Check external links
      const link = target.closest('a') as HTMLAnchorElement | null;
      if (link && link.target === '_blank') {
        setCursorState('visit');
        return;
      }

      // Check buttons or tabs
      if (target.closest('button, a, [role="button"], [role="tab"]')) {
        setCursorState('explore');
        return;
      }

      setCursorState('default');
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, visible]);

  if (!mounted || !visible || cursorState === 'text') return null;

  const isInteractive = cursorState !== 'default';
  const labelMap: Record<string, string> = {
    view: 'VIEW',
    open: 'OPEN',
    enter: 'ENTER',
    visit: 'VISIT',
    explore: 'SELECT',
  };
  const activeLabel = labelMap[cursorState] || 'OPEN';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <motion.div
          animate={{
            scale: isPressed ? 0.86 : 1,
            rotate: isPressed ? -3 : 0,
          }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          {isInteractive ? (
            /* Interactive State: Expanded Folio Pill with Action Label */
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1 px-3 py-1 bg-[#d4ff32] text-[#070709] rounded-sm shadow-[0_4px_16px_rgba(212,255,50,0.45)] border border-[#e2ff5b]"
              style={{
                transform: 'translate(-10px, -10px)',
              }}
            >
              {/* Precision corner indicator */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#070709]" />
              <span className="text-[10px] font-mono font-extrabold tracking-widest uppercase">
                {activeLabel}
              </span>
            </motion.div>
          ) : (
            /* Default State: Clipped-corner Folio Tab with 'A' Monogram */
            <div
              className="relative w-6 h-7"
              style={{
                transform: 'translate(0px, 0px)',
              }}
            >
              {/* Precision hotspot crosshair at (0, 0) */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 flex items-center justify-center pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32] ring-2 ring-[#070709]" />
              </div>

              {/* Clipped-corner folio tab body */}
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                {/* Folio polygon with chamfered top-right corner */}
                <path
                  d="M1 1H17L23 7V27H1V1Z"
                  fill="#0c0c14"
                  stroke="#d4ff32"
                  strokeWidth="1.5"
                />
                {/* Chamfer crease */}
                <path
                  d="M17 1V7H23"
                  stroke="#d4ff32"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                />
                {/* Monogram 'A' */}
                <text
                  x="12"
                  y="20"
                  textAnchor="middle"
                  fill="#d4ff32"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  A
                </text>
              </svg>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
