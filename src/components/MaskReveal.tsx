'use client';

import React from 'react';
import { motion } from 'motion/react';

interface MaskRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

export default function MaskReveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: MaskRevealProps) {
  const Component = as;

  return (
    <Component className={className}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{
          duration: 0.4,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
