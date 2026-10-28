'use client';

import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen, Terminal, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-[#181824] bg-[#09090e]" aria-label="About Aditya">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#d4ff32]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32]" />
              <span>About & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f4f4f7] tracking-tight leading-tight">
              Where Engineering Rigor Meets Practical Intelligence.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#9595a8] leading-relaxed">
              <p>
                Hello! I&apos;m <span className="text-[#f4f4f7] font-semibold">Aditya S. Sheregar</span>, a developer and engineering student based in Bengaluru.
                I build systems at the intersection of full-stack web architecture, machine learning, and cryptography.
              </p>
              <p>
                With strong foundations in <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#161622] border border-[#252536]">C</span>,{' '}
                <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#161622] border border-[#252536]">C++</span>,{' '}
                <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#161622] border border-[#252536]">Python</span>,{' '}
                <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#161622] border border-[#252536]">Java</span>, and{' '}
                <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#161622] border border-[#252536]">SQL</span>,
                I don&apos;t just string together APIs—I focus on the fundamentals: latency, data integrity, cryptographic zero-knowledge proofs, and intuitive human ergonomics.
              </p>
              <p>
                Whether designing emergency escalation systems like <strong className="text-[#f4f4f7]">Saarthi</strong> or training computer vision models for biometric voting fraud detection in <strong className="text-[#f4f4f7]">Bharat-ID-AiDeVote</strong>, my goal is to build technology that functions reliably under real-world pressure.
              </p>
            </div>

            {/* Principles Matrix */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg border border-[#1f1f2e] bg-[#0d0d14] hover:border-[#2e2e42] transition-colors space-y-1.5 group">
                <div className="flex items-center gap-2 text-xs font-mono text-[#d4ff32] font-semibold">
                  <Terminal size={14} className="group-hover:scale-110 transition-transform" />
                  <span>Foundational Engineering</span>
                </div>
                <p className="text-xs text-[#8e8ea2] leading-relaxed">
                  Deep respect for data structures, memory models, deterministic state, and low-level algorithms.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-[#1f1f2e] bg-[#0d0d14] hover:border-[#2e2e42] transition-colors space-y-1.5 group">
                <div className="flex items-center gap-2 text-xs font-mono text-[#d4ff32] font-semibold">
                  <Sparkles size={14} className="group-hover:scale-110 transition-transform" />
                  <span>Applied AI & Security</span>
                </div>
                <p className="text-xs text-[#8e8ea2] leading-relaxed">
                  Translating reinforcement learning, computer vision, and cryptographic verification into usable software.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education & Academic Credentials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-xl border border-[#232332] bg-[#0c0c12] p-6 sm:p-8 space-y-6 shadow-lg hover:border-[#2f2f44] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#161622] border border-[#28283a] flex items-center justify-center text-[#d4ff32]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#737385] block">
                    Academic Degree
                  </span>
                  <h3 className="text-lg font-bold text-[#f4f4f7]">
                    B.Tech in Computer Science & Engineering
                  </h3>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#1a1a26] text-xs font-mono">
                <div className="flex items-center justify-between text-[#a0a0b4]">
                  <span className="flex items-center gap-1.5 text-[#737385]">
                    <MapPin size={13} className="text-[#d4ff32]" />
                    Institution
                  </span>
                  <span className="font-semibold text-[#f4f4f7] text-right">
                    Dayananda Sagar University, Bengaluru
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#a0a0b4]">
                  <span className="flex items-center gap-1.5 text-[#737385]">
                    <Calendar size={13} className="text-[#d4ff32]" />
                    Timeline
                  </span>
                  <span className="text-[#d4ff32]">Expected Graduation: August 2028</span>
                </div>

                <div className="flex items-center justify-between text-[#a0a0b4]">
                  <span className="flex items-center gap-1.5 text-[#737385]">
                    <BookOpen size={13} className="text-[#d4ff32]" />
                    Specialization
                  </span>
                  <span className="text-[#f4f4f7]">Software Engineering & AI/ML</span>
                </div>
              </div>

              <p className="text-xs text-[#858599] leading-relaxed pt-2 border-t border-[#1a1a26]">
                Pursuing a comprehensive curriculum encompassing algorithmic problem solving, computer architecture, distributed computing, database management, and machine learning architectures.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
