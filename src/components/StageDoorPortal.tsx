'use client';

import { motion } from 'motion/react';
import { ArrowRight, Calendar, Shield, Cpu, Sparkles } from 'lucide-react';
import MaskReveal from './MaskReveal';

export default function StageDoorPortal() {
  const openArchive = () => {
    window.dispatchEvent(new CustomEvent('open-experience-space'));
  };

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative border-t border-[#181824] bg-[#07070a] overflow-hidden"
      aria-label="Experience & Stage Door Portal"
    >
      {/* Ambient backstage stage-light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-[#d4ff32]/8 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#d4ff32]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32] animate-pulse" />
              <span>Stage Door Entrance</span>
            </div>
            <MaskReveal as="h2" className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f7] tracking-tight">
              Step Behind the Curtain.
            </MaskReveal>
          </div>
          <p className="text-sm font-mono text-[#828294] max-w-md">
            The backstage space where event organizing, student chapter governance, and proven engineering competencies come together.
          </p>
        </div>

        {/* Stage Door Proscenium Frame Banner */}
        <div className="relative rounded-2xl border border-[#222234] bg-gradient-to-b from-[#0e0e16] to-[#07070a] p-6 sm:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Subtle proscenium grid */}
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

          {/* Top Registration Bar */}
          <div className="flex items-center justify-between border-b border-[#1c1c28] pb-4 mb-8 text-[11px] font-mono text-[#767688]">
            <span className="text-[#d4ff32] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#d4ff32]" />
              <span>THE BACKSTAGE FIELD ARCHIVE</span>
            </span>
            <span className="hidden sm:inline">IEEE DSU-RAS CHAPTER CHAIR · BENGALURU</span>
            <span className="text-[#9696aa]">3 VERIFIED CATEGORIES</span>
          </div>

          {/* 3 Categories Teaser Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1: Events */}
            <div className="p-5 rounded-xl bg-[#09090f] border border-[#1b1b26] space-y-2">
              <div className="flex items-center gap-2 text-[#d4ff32] text-xs font-mono">
                <Calendar size={14} />
                <span className="font-bold">01 // Events &amp; Operations</span>
              </div>
              <h3 className="text-sm font-bold text-[#f4f4f7]">Hackathons &amp; Contests</h3>
              <p className="text-xs text-[#7c7c90] leading-relaxed">
                24H Inter-College Hackathon core lead, 1st Place Bharat-ID-Shield champion, and IEEE quiz moderation.
              </p>
            </div>

            {/* Card 2: Leadership */}
            <div className="p-5 rounded-xl bg-[#09090f] border border-[#1b1b26] space-y-2">
              <div className="flex items-center gap-2 text-[#d4ff32] text-xs font-mono">
                <Shield size={14} />
                <span className="font-bold">02 // Experience &amp; Roles</span>
              </div>
              <h3 className="text-sm font-bold text-[#f4f4f7]">Leadership Governance</h3>
              <p className="text-xs text-[#7c7c90] leading-relaxed">
                IEEE RAS Chapter Chair and ACM-DSU Tech Head driving developer workshops and university operations.
              </p>
            </div>

            {/* Card 3: Skills */}
            <div className="p-5 rounded-xl bg-[#09090f] border border-[#1b1b26] space-y-2">
              <div className="flex items-center gap-2 text-[#d4ff32] text-xs font-mono">
                <Cpu size={14} />
                <span className="font-bold">03 // Skills &amp; Evidence</span>
              </div>
              <h3 className="text-sm font-bold text-[#f4f4f7]">Interactive Cross-Linking</h3>
              <p className="text-xs text-[#7c7c90] leading-relaxed">
                Bidirectional connections: click any skill to see the exact projects and roles where it was demonstrated.
              </p>
            </div>
          </div>

          {/* Action CTA to Enter the Stage Door */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1c1c28]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8a8a9e]">
              <Sparkles size={13} className="text-[#d4ff32]" />
              <span>Full-screen interactive dossier with keyboard navigation</span>
            </div>
            <button
              onClick={openArchive}
              data-cursor="enter"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-[#d4ff32] text-[#070709] font-mono font-bold text-xs hover:bg-[#e2ff58] shadow-[0_0_24px_rgba(212,255,50,0.25)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
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

