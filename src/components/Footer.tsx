'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useCurtain } from './CurtainTransition';

export default function Footer() {
  const [bengaluruTime, setBengaluruTime] = useState('');
  const { triggerTransition } = useCurtain();

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setBengaluruTime(timeStr);
      } catch {
        // fallback
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    triggerTransition('#home', 'TOP');
  };

  return (
    <footer className="border-t border-[#181824] bg-[#050508] text-[#868698] py-16" aria-label="Footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#161622]">
          {/* Identity (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded bg-[#121218] border border-[#242432] flex items-center justify-center font-mono font-bold text-xs text-[#d4ff32]">
                AS
              </span>
              <span className="text-sm font-bold text-[#f4f4f7] tracking-tight">
                Aditya S. Sheregar
              </span>
            </div>
            <p className="text-xs text-[#707082] max-w-sm leading-relaxed">
              AI-ML Engineer and Full Stack Developer studying Computer Science at Dayananda Sagar University, Bengaluru.
            </p>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#d4ff32] block font-semibold">
              Index
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerTransition('#projects', 'SELECTED WORK');
                  }}
                  className="hover:text-[#f4f4f7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                >
                  01 // Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerTransition('#about', 'ABOUT');
                  }}
                  className="hover:text-[#f4f4f7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                >
                  02 // About &amp; Background
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('open-experience-space'));
                  }}
                  className="hover:text-[#d4ff32] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm text-left font-mono"
                >
                  03 // Backstage Field Archive
                </button>
              </li>
              <li>
                <a
                  href="#resume"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerTransition('#resume', 'RESUME');
                  }}
                  className="hover:text-[#f4f4f7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                >
                  04 // Resume &amp; Record
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerTransition('#contact', 'CONTACT');
                  }}
                  className="hover:text-[#f4f4f7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
                >
                  05 // Transmit Message
                </a>
              </li>
            </ul>
          </div>

          {/* Telemetry (4 cols) */}
          <div className="md:col-span-4 space-y-3 md:text-right">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#d4ff32] block font-semibold">
              Bengaluru Time
            </span>
            <div className="font-mono text-sm text-[#f4f4f7] inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff32]" />
              <span>{bengaluruTime ? `${bengaluruTime} IST (UTC+5:30)` : 'Bengaluru, IN'}</span>
            </div>
            <p className="text-xs text-[#626274] font-mono">
              Status: Available for technical challenges & collaborations.
            </p>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5d5d6e]">
          <div>
            Copyright © {new Date().getFullYear()} Aditya S. Sheregar. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/adi202023"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff32] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-sheregar-4484b2326/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff32] transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#d4ff32] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
