'use client';

import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen, Terminal, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-[#14291e] bg-[#06110c]" aria-label="About Aditya">
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
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#a31c1b] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b]" />
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
                With strong foundations in <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#171717] border border-[#262626]">C</span>,{' '}
                <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#171717] border border-[#262626]">C++</span>,{' '}
                <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#171717] border border-[#262626]">Python</span>,{' '}
                <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#171717] border border-[#262626]">Java</span>, and{' '}
                <span className="text-[#e2e2ec] font-mono text-xs px-1.5 py-0.5 rounded bg-[#171717] border border-[#262626]">SQL</span>,
                I don&apos;t just string together APIs—I focus on the fundamentals: latency, data integrity, cryptographic zero-knowledge proofs, and intuitive human ergonomics.
              </p>
              <p>
                Whether designing emergency escalation systems like <strong className="text-[#f4f4f7]">Saarthi</strong> or training computer vision models for biometric voting fraud detection in <strong className="text-[#f4f4f7]">Bharat-ID-AiDeVote</strong>, my goal is to build technology that functions reliably under real-world pressure.
              </p>
            </div>

            {/* Principles Matrix */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg border border-[#14291e] bg-[#0a1811] hover:border-[#1e3b2b] transition-colors space-y-1.5 group">
                <div className="flex items-center gap-2 text-xs font-mono text-[#a31c1b] font-semibold">
                  <Terminal size={14} className="group-hover:scale-110 transition-transform" />
                  <span>Foundational Engineering</span>
                </div>
                <p className="text-xs text-[#8e8ea2] leading-relaxed">
                  Deep respect for data structures, memory models, deterministic state, and low-level algorithms.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-[#14291e] bg-[#0a1811] hover:border-[#1e3b2b] transition-colors space-y-1.5 group">
                <div className="flex items-center gap-2 text-xs font-mono text-[#a31c1b] font-semibold">
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
            <div className="rounded-xl border border-[#14291e] bg-[#0a1811] p-6 sm:p-8 space-y-6 shadow-lg hover:border-[#1e3b2b] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#171717] border border-[#262626] flex items-center justify-center text-[#a31c1b]">
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

              <div className="space-y-3 pt-2 border-t border-[#14291e] text-xs font-mono">
                <div className="flex items-center justify-between text-[#a0a0b4]">
                  <span className="flex items-center gap-1.5 text-[#737385]">
                    <MapPin size={13} className="text-[#a31c1b]" />
                    Institution
                  </span>
                  <span className="font-semibold text-[#f4f4f7] text-right">
                    Dayananda Sagar University, Bengaluru
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#a0a0b4]">
                  <span className="flex items-center gap-1.5 text-[#737385]">
                    <Calendar size={13} className="text-[#a31c1b]" />
                    Timeline
                  </span>
                  <span className="text-[#a31c1b] font-semibold">Expected Graduation: August 2028</span>
                </div>

                <div className="flex items-center justify-between text-[#a0a0b4]">
                  <span className="flex items-center gap-1.5 text-[#737385]">
                    <BookOpen size={13} className="text-[#a31c1b]" />
                    Specialization
                  </span>
                  <span className="text-[#f4f4f7]">Software Engineering & AI/ML</span>
                </div>
              </div>

              <p className="text-xs text-[#858599] leading-relaxed pt-2 border-t border-[#14291e]">
                Pursuing a comprehensive curriculum encompassing algorithmic problem solving, computer architecture, distributed computing, database management, and machine learning architectures.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
