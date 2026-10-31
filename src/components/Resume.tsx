'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Download, ExternalLink, GraduationCap, Users, Award, Code2 } from 'lucide-react';
import MaskReveal from './MaskReveal';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function TimelineItem({
  icon,
  label,
  title,
  subtitle,
  date,
  bullets,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle?: string;
  date: string;
  bullets?: string[];
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Vertical track */}
      <span className="absolute left-[15px] top-8 bottom-0 w-px bg-[#14291e] last:hidden" aria-hidden="true" />

      {/* Icon node */}
      <span className="absolute left-0 top-0 w-8 h-8 rounded-sm bg-[#171717] border border-[#262626] flex items-center justify-center text-[#a31c1b]">
        {icon}
      </span>

      <div className="bg-[#0a1811] border border-[#14291e] rounded-sm p-5 hover:border-[#1e3b2b] transition-colors group">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <span className="text-[10px] font-mono text-[#a31c1b] uppercase tracking-widest block mb-1 font-semibold">
              {label}
            </span>
            <h3 className="text-sm font-semibold text-[#f4f4f7] leading-tight">{title}</h3>
            {subtitle && (
              <p className="text-xs text-[#8a8a9a] font-mono mt-0.5">{subtitle}</p>
            )}
          </div>
          <span className="text-[11px] font-mono text-[#78788a] border border-[#14291e] px-2 py-0.5 rounded-sm shrink-0">
            {date}
          </span>
        </div>
        {bullets && bullets.length > 0 && (
          <ul className="space-y-1.5 mt-3 border-t border-[#14291e] pt-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-xs text-[#868698] leading-relaxed">
                <span className="text-[#a31c1b] mt-0.5 shrink-0 font-bold">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function Resume() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelInView = useInView(sectionRef, { once: true, margin: '-80px 0px' });

  return (
    <section
      id="resume"
      className="border-t border-[#14291e] bg-[#06110c] py-24 px-6"
      aria-label="Resume"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono text-[#a31c1b] uppercase tracking-widest font-semibold">
              06 // Professional Record
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-[#a31c1b]/30" />
          </div>
          <MaskReveal>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-none tracking-tight text-[#f4f4f7]">
              Resume
            </h2>
          </MaskReveal>
          <p className="mt-4 text-sm text-[#8a8a9a] max-w-lg leading-relaxed">
            AI &amp; ML Engineering student building intelligent systems and full-stack web applications.
            Focused on clean architecture, optimization, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline & Credentials — left 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <TimelineItem
              icon={<GraduationCap size={14} />}
              label="Education & Degree"
              title="B.Tech in Computer Science &amp; Engineering"
              subtitle="Dayananda Sagar University, Bengaluru"
              date="Expected Aug 2028"
              bullets={[
                'Specialisation in Artificial Intelligence &amp; Machine Learning Engineering.',
                'Core Foundations: Data Structures &amp; Algorithms, C, C++, Java, Python, Discrete Mathematics.',
                'Applied Research: Reinforcement Learning (Q-learning), NLP, and scalable backend microservices.',
              ]}
              delay={0}
            />

            {/* Backstage Field Archive Connection Card */}
            <div className="p-6 rounded-sm bg-[#0a1811] border border-[#14291e] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#a31c1b] uppercase tracking-widest font-semibold">
                  Field Operations &amp; Leadership Record
                </span>
                <span className="text-[10px] font-mono text-[#6c6c80]">INTERACTIVE ARCHIVE</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#f4f4f7]">
                IEEE Chapter Governance, Hackathons &amp; Awards
              </h3>
              <p className="text-xs text-[#8c8c9e] leading-relaxed">
                Detailed records for IEEE DSU-RAS Chapter Chair, 24-Hour Inter-College Hackathon core lead, ACM-DSU Tech Head, and 1st Place Bharat-ID-Shield Challenge are curated inside the dedicated Backstage Field Archive.
              </p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-experience-space'))}
                data-cursor="enter"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#171717] border border-[#262626] text-[#ffffff] hover:bg-[#a31c1b] hover:text-[#ffffff] hover:border-[#a31c1b] transition-all text-xs font-mono font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
              >
                <span>Step Behind the Stage Door →</span>
              </button>
            </div>
          </div>

          {/* Download panel — right 5 cols */}
          <div className="lg:col-span-5 lg:sticky lg:top-28" ref={sectionRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={panelInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
              className="bg-[#171717] border border-[#262626] rounded-sm overflow-hidden"
            >
              {/* Panel header */}
              <div className="px-6 pt-6 pb-5 border-b border-[#262626]">
                <p className="text-[10px] font-mono text-[#a31c1b] uppercase tracking-widest mb-2 font-semibold">
                  Document
                </p>
                <h3 className="text-base font-bold text-[#f4f4f7] leading-tight">
                  Aditya S. Sheregar
                </h3>
                <p className="text-xs text-[#8a8a9a] font-mono mt-1">
                  AI-ML Engineer · Full Stack Developer
                </p>
              </div>

              {/* Skills summary */}
              <div className="px-6 py-5 border-b border-[#262626] space-y-3">
                <p className="text-[10px] font-mono text-[#6c6c80] uppercase tracking-wider">Core Skills</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python', 'C / C++', 'Java',
                    'React.js', 'Next.js', 'Node.js', 'Flask',
                    'MongoDB', 'MySQL',
                    'TensorFlow', 'RL / ML',
                    'Git', 'Vercel', 'REST APIs',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="tech-badge text-[10px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="px-6 py-5 flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  download="Aditya_Sheregar_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#a31c1b] text-[#ffffff] font-bold text-xs font-mono tracking-wider rounded-sm hover:bg-[#bd2423] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
                >
                  <Download size={14} />
                  Download Resume
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-transparent border border-[#262626] text-[#e0e0ea] font-mono text-xs tracking-wider rounded-sm hover:border-[#a31c1b] hover:text-[#ffffff] hover:bg-[#a31c1b] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
                >
                  <ExternalLink size={13} />
                  View in Browser
                </a>
              </div>

              {/* Last updated hint */}
              <div className="px-6 pb-5">
                <p className="text-[10px] font-mono text-[#5a5a6a] text-center">
                  PDF · Oct 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

