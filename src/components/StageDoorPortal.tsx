'use client';

import { ArrowRight, Calendar, Shield, Cpu, Sparkles } from 'lucide-react';
import MaskReveal from './MaskReveal';

export default function StageDoorPortal() {
  const openArchive = () => {
    window.dispatchEvent(new CustomEvent('open-experience-space'));
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-32 relative border-t border-[#262626] bg-[#171717] overflow-hidden scroll-mt-20"
      aria-label="Experience &amp; Stage Door Portal"
    >
      {/* Ambient backstage stage-light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-[#a31c1b]/12 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#a31c1b] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b] animate-pulse" />
              <span>Stage Door Entrance</span>
            </div>
            <MaskReveal as="h2" className="text-2xl sm:text-5xl font-extrabold text-[#f4f4f7] tracking-tight">
              Step Behind the Curtain.
            </MaskReveal>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#8a8a9a] max-w-md leading-relaxed">
            The backstage space where event organizing, student chapter governance, and proven engineering competencies come together.
          </p>
        </div>

        {/* Stage Door Proscenium Frame Banner */}
        <div className="relative rounded-2xl border border-[#14291e] bg-gradient-to-b from-[#06110c] to-[#0a1811] p-4 sm:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Subtle proscenium grid */}
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

          {/* Top Registration Bar */}
          <div className="flex items-center justify-between border-b border-[#14291e] pb-3 sm:pb-4 mb-6 sm:mb-8 text-[10px] sm:text-[11px] font-mono text-[#8a8a9a]">
            <span className="text-[#a31c1b] font-semibold flex items-center gap-1.5 sm:gap-2 truncate max-w-[65%]">
              <span className="w-2 h-2 rounded-sm bg-[#a31c1b] shrink-0" />
              <span className="truncate">THE BACKSTAGE FIELD ARCHIVE</span>
            </span>
            <span className="text-[#9696aa] shrink-0">3 CATEGORIES</span>
          </div>

          {/* 3 Categories Teaser Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Card 1: Events */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#06110c] border border-[#14291e] space-y-2">
              <div className="flex items-center gap-2 text-[#a31c1b] text-xs font-mono">
                <Calendar size={14} />
                <span className="font-bold">01 // Events &amp; Operations</span>
              </div>
              <h3 className="text-sm font-bold text-[#f4f4f7]">Hackathons &amp; Contests</h3>
              <p className="text-xs text-[#8a8a9e] leading-relaxed">
                24H Inter-College Hackathon core lead, 1st Place Bharat-ID-Shield champion, and IEEE quiz moderation.
              </p>
            </div>

            {/* Card 2: Leadership */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#06110c] border border-[#14291e] space-y-2">
              <div className="flex items-center gap-2 text-[#a31c1b] text-xs font-mono">
                <Shield size={14} />
                <span className="font-bold">02 // Experience &amp; Roles</span>
              </div>
              <h3 className="text-sm font-bold text-[#f4f4f7]">Leadership Governance</h3>
              <p className="text-xs text-[#8a8a9e] leading-relaxed">
                IEEE RAS Chapter Chair and ACM-DSU Tech Head driving developer workshops and university operations.
              </p>
            </div>

            {/* Card 3: Skills */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#06110c] border border-[#14291e] space-y-2">
              <div className="flex items-center gap-2 text-[#a31c1b] text-xs font-mono">
                <Cpu size={14} />
                <span className="font-bold">03 // Skills &amp; Evidence</span>
              </div>
              <h3 className="text-sm font-bold text-[#f4f4f7]">Interactive Cross-Linking</h3>
              <p className="text-xs text-[#8a8a9e] leading-relaxed">
                Bidirectional connections: click any skill to see the exact projects and roles where it was demonstrated.
              </p>
            </div>
          </div>

          {/* Action CTA to Enter the Stage Door */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-[#14291e]">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#8a8a9e]">
              <Sparkles size={13} className="text-[#a31c1b] shrink-0" />
              <span>Full-screen interactive dossier with verified records</span>
            </div>
            <button
              onClick={openArchive}
              data-cursor="enter"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#a31c1b] text-[#ffffff] font-mono font-bold text-xs hover:bg-[#bd2423] shadow-[0_0_24px_rgba(163,28,27,0.35)] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] group min-h-[44px]"
            >
              <span>Step Through Stage Door</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
