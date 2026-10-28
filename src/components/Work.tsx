'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, CheckCircle2, Layers, ShieldCheck, Terminal, Award, ArrowUpRight, X, ArrowRight, Eye, Cpu, Radio, Hash } from 'lucide-react';

interface Project {
  id: string;
  index: string;
  code: string;
  title: string;
  subtitle: string;
  domain: 'security' | 'decentralized' | 'mobile';
  domainLabel: string;
  category: string;
  description: string;
  contribution: string;
  architectureDetails: string[];
  securityGuarantees: string[];
  features: string[];
  tech: string[];
  github: string;
  live?: string;
  badge?: string;
  status: string;
  telemetry: string;
}

const projects: Project[] = [
  {
    id: 'saarthi',
    index: '01',
    code: 'SYS-SRT',
    title: 'Saarthi',
    subtitle: 'Privacy-First Digital Safety Infrastructure',
    domain: 'security',
    domainLabel: 'Privacy & Safety',
    category: 'System Architecture · Cryptography · Real-Time Web',
    description:
      'A privacy-first platform built to enhance personal safety using cryptographic identity, secure emergency escalation, and intelligent route monitoring. Uses cryptographic proofs to protect user identity while providing resilient emergency protection and real-time tactical tracking.',
    contribution:
      'Engineered the end-to-end platform: integrated Web Crypto API for RSA-signed distress signals, built real-time geo-fenced route anomaly detection with Leaflet and Turf.js, and implemented Socket.io emergency dispatcher dashboards for police and transit operators.',
    architectureDetails: [
      'Zero-knowledge identity vault using client-side SHA-256 and Web Crypto API',
      'Continuous spatial deviation calculation via Turf.js geo-fencing polygon buffers',
      'Dual-simplex Socket.io tactical channel for live police/first-responder escalation',
      'OSRM automated dynamic risk scoring on simulated transit pathways',
    ],
    securityGuarantees: [
      'Zero PII persistence on public routing nodes',
      'Cryptographically signed distress envelopes impossible to spoof',
      'Real-time automated incident escalation on perimeter breach',
    ],
    features: [
      'Cryptographic Identity Vault — Store hashed proofs without leaking PII',
      'Safe Route Monitoring — Geo-fenced tracking with instant deviation triggers',
      'Emergency Escalation — RSA-signed distress signals with tamper protection',
      'Tactical Dashboards — Live tactical police portal with route telemetry',
      'Cab Portal — Simulated OSRM routing with dynamic risk scoring',
    ],
    tech: ['React', 'TypeScript', 'Web Crypto API', 'Node.js', 'Socket.io', 'Leaflet', 'Turf.js', 'OSRM', 'Tailwind CSS'],
    github: 'https://github.com/adi202023/Saarthi',
    live: 'https://saarthi-teal.vercel.app',
    badge: 'Flagship Platform',
    status: 'Live & Operational',
    telemetry: 'LAT 12.9716° N / LON 77.5946° E',
  },
  {
    id: 'bharat-id-aidevote',
    index: '02',
    code: 'SYS-BID',
    title: 'Bharat-ID-AiDeVote',
    subtitle: 'AI-Powered Decentralized Voting System',
    domain: 'decentralized',
    domainLabel: 'Decentralized & AI',
    category: 'Machine Learning · Computer Vision · Blockchain',
    description:
      'A blockchain-based democratic voting system engineered to prevent electoral fraud through AI-driven facial recognition, automated document validation, and encrypted audit trails.',
    contribution:
      'Architected the verification workflow: trained and integrated TensorFlow computer vision models for live facial identity matching, and developed a decentralized audit ledger guaranteeing immutable, verifiable ballot counting.',
    architectureDetails: [
      'TensorFlow facial landmark vectorization for anti-spoofing liveness checks',
      'Flask microservice pipeline processing encrypted identity documents',
      'Tamper-evident blockchain block hashing ensuring non-repudiation of ballots',
      'Decentralized state verification allowing zero voter identity duplication',
    ],
    securityGuarantees: [
      'Biometric cryptographic hashing preventing double voting',
      'Immutable Merkle-tree ballot validation for public auditability',
      'Encrypted ballot store ensuring voter secrecy at all times',
    ],
    features: [
      'Blockchain-based fraud prevention & immutable ballot record',
      'AI facial biometric matching and document authenticity checks',
      'Encrypted vote storage preventing unauthorized observation',
      'Full cryptographic auditability for transparent democracy',
    ],
    tech: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'ReactJS', 'Blockchain Architecture'],
    github: 'https://github.com/adi202023/Bharat-ID-Shield',
    badge: '1st Place Winner',
    status: 'Christ Univ. Award',
    telemetry: 'BLOCK-HEIGHT #1042 // SHA-256 VERIFIED',
  },
  {
    id: 'securevote',
    index: '03',
    code: 'SYS-SCV',
    title: 'SecureVote',
    subtitle: 'Blockchain-Powered Voting System',
    domain: 'decentralized',
    domainLabel: 'Decentralized & AI',
    category: 'Full-Stack Web · Distributed Systems',
    description:
      'A comprehensive, secure digital voting platform built with Next.js, TypeScript, and blockchain technology. Features Aadhaar verification, end-to-end encryption, offline support, real-time analytics, and government database integration.',
    contribution:
      'Designed the full Next.js App Router user experience, established strict cryptographic authentication with JWT, and configured client-side IndexedDB persistence to support offline ballot caching with delayed sync.',
    architectureDetails: [
      'Aadhaar tokenized identity verification with serverless API isolation',
      'IndexedDB fault-tolerant offline storage for low-bandwidth polling stations',
      'Cryptographically hashed electoral ledger with instant verification receipts',
      'Next.js App Router SSR delivering sub-100ms dashboard latency',
    ],
    securityGuarantees: [
      'Air-gapped offline queueing with cryptographic timestamp proofs',
      'One-voter-one-token strict cryptographic boundary',
      'End-to-end encrypted transit via TLS 1.3 + payload salting',
    ],
    features: [
      'Aadhaar & Voter ID verification pipelines',
      'Immutable blockchain ledger with verifiable voter hashing',
      'Real-time live election analytics dashboard',
      'Fault-tolerant offline ballot submission via IndexedDB',
    ],
    tech: ['Next.js', 'TypeScript', 'Ethereum / Blockchain', 'Node.js', 'Express', 'JWT', 'IndexedDB', 'Tailwind CSS'],
    github: 'https://github.com/adi202023/Voting',
    status: 'Open Source',
    telemetry: 'LEDGER SYNC: 100% // OFFLINE READY',
  },
  {
    id: 'reel-2-reality',
    index: '04',
    code: 'APP-R2R',
    title: 'Reel 2 Reality',
    subtitle: 'Social Challenge Platform',
    domain: 'mobile',
    domainLabel: 'Mobile Apps',
    category: 'Mobile Application · Social & Gamification',
    description:
      'A social engagement platform where people get rewarded for completing real-world tasks curated by cafe and restaurant owners. Users browse challenges, capture verifiable proof submissions, and celebrate with friends.',
    contribution:
      'Developed cross-platform mobile views using React Native and Expo SDK, implementing camera hardware capture, multi-stage friend task assignment, and delightful gamification animations.',
    architectureDetails: [
      'Expo Camera hardware integration for instant photo proof compression',
      'Dynamic feed aggregation using local merchant geo-indexing',
      'Gamified rewards engine with micro-animations and voucher redemption state',
      'Cross-platform React Navigation architecture with zero frame-drop transitions',
    ],
    securityGuarantees: [
      'Client-side image sanitization before cloud upload',
      'Anti-cheat cooldown timers on task completions',
      'Merchant-validated QR redemption tokens',
    ],
    features: [
      'Real-time challenge feed from local cafes and businesses',
      'Friend selection and peer verification tasks',
      'In-app camera integration for photo proof submission',
      'Celebration micro-interactions and digital coupon redemption',
    ],
    tech: ['React Native', 'Expo SDK', 'React Navigation', 'Expo Image Picker', 'Ionicons', 'Vercel'],
    github: 'https://github.com/adi202023/Reel-2-Reality.git',
    live: 'https://reel-2-reality.vercel.app/',
    status: 'Production Preview',
    telemetry: 'EXPO 51 // REACT NATIVE CORE',
  },
];

type FilterType = 'all' | 'security' | 'decentralized' | 'mobile';

export default function Work() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.domain === filter);

  const filterCategories: { id: FilterType; label: string; count: number }[] = [
    { id: 'all', label: 'All Works', count: projects.length },
    { id: 'security', label: 'Privacy & Safety', count: projects.filter((p) => p.domain === 'security').length },
    { id: 'decentralized', label: 'Decentralized & AI', count: projects.filter((p) => p.domain === 'decentralized').length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter((p) => p.domain === 'mobile').length },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 relative border-t border-[#181824]" aria-label="Projects Work Board">
      <div className="max-w-6xl mx-auto px-6">
        {/* Board Header & Controls: Clean, connected, zero empty void */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#1b1b26]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#d4ff32]">
              <Layers size={13} />
              <span>Project Work Board</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f7] tracking-tight leading-none">
              Systems Built for Reality.
            </h2>

            <p className="text-xs sm:text-sm font-mono text-[#828294] max-w-xl leading-relaxed">
              A curated catalog of verified production systems, security architectures, and distributed applications.
            </p>
          </div>

          {/* Board Domain Filters: placed beside or directly below header */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0e0e15] border border-[#1e1e2d] shadow-inner shrink-0"
            role="tablist"
            aria-label="Filter projects by domain"
          >
            {filterCategories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive
                      ? 'bg-[#181824] text-[#d4ff32] font-semibold border border-[#2a2a3e] shadow-sm'
                      : 'text-[#828294] hover:text-[#e2e2ec]'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Board Cards Stack: Shows project cards immediately beneath */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-xl border border-[#20202e] bg-[#0c0c13] space-y-3">
              <p className="text-sm font-mono text-[#828294]">
                No projects found in this domain.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="px-4 py-2 text-xs font-mono bg-[#d4ff32] text-[#070709] rounded-md font-bold hover:bg-[#e0ff54] transition-colors"
              >
                Reset to All Works ({projects.length})
              </button>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-xl border border-[#20202e] bg-[#0c0c13] hover:border-[#383852] transition-all duration-300 p-6 sm:p-7 shadow-lg focus-within:border-[#d4ff32] focus-within:ring-1 focus-within:ring-[#d4ff32]/30"
                >
                {/* Top Board Docket / Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#1b1b28]">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="font-bold text-[#d4ff32] px-2 py-0.5 rounded bg-[#161622] border border-[#242436]">
                      {project.code}
                    </span>
                    <span className="text-[#4b4b60]">/</span>
                    <span className="text-[#8c8ca0] uppercase tracking-wider hidden sm:inline">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {project.badge && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#d4ff32]/10 border border-[#d4ff32]/30 text-[#d4ff32]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32]" />
                        <span>{project.badge}</span>
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-[#767688] bg-[#12121a] border border-[#20202e]">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Main Card Content Grid */}
                <div className="grid lg:grid-cols-12 gap-8 pt-6 items-start">
                  {/* Left Column: Titles, Summary & Contribution (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f4f4f7] group-hover:text-white transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#d4ff32] font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#9595a8] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture / Contribution Panel */}
                    <div className="p-4 rounded-lg bg-[#11111a] border border-[#1f1f2e] space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#d4ff32] font-semibold">
                        <Terminal size={12} />
                        <span>Core Engineering & Contribution</span>
                      </div>
                      <p className="text-xs text-[#a2a2b8] leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Visual Schematic Preview with Mask Reveal & Cue (5 cols) */}
                  <div className="lg:col-span-5 space-y-5 lg:pl-3">
                    {/* Interactive Architectural Visual Box */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                      role="button"
                      tabIndex={0}
                      data-cursor="view"
                      aria-label={`Open architecture details for ${project.title}`}
                      className="relative rounded-lg overflow-hidden border border-[#222232] bg-[#0f0f18] p-4 cursor-pointer group/preview transition-all duration-300 hover:border-[#d4ff32]/50 hover:shadow-[0_0_24px_rgba(212,255,50,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {/* Sliding mask overlay on load / reveal */}
                      <motion.div
                        initial={{ x: '0%' }}
                        whileInView={{ x: '102%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 bg-[#0c0c13] z-20 pointer-events-none"
                      />

                      {/* Schematic Display Content */}
                      <div className="space-y-3 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-[#78788c] border-b border-[#1b1b28] pb-2">
                          <span className="flex items-center gap-1 text-[#d4ff32]">
                            <Cpu size={12} />
                            <span>{project.code} ARCHITECTURE</span>
                          </span>
                          <span className="text-[10px] text-[#555566]">{project.telemetry}</span>
                        </div>

                        {/* Visual Node Diagram Mockup */}
                        <div className="py-2 flex items-center justify-between gap-2 text-[#9999ab]">
                          <div className="p-2 rounded bg-[#151522] border border-[#242436] flex-1 text-center truncate">
                            <span className="text-[10px] text-[#6b6b7f] block">INGRESS</span>
                            <span className="text-[#e2e2ec] font-bold text-xs">{project.tech[0]}</span>
                          </div>
                          <span className="text-[#d4ff32] font-bold">→</span>
                          <div className="p-2 rounded bg-[#151522] border border-[#242436] flex-1 text-center truncate">
                            <span className="text-[10px] text-[#6b6b7f] block">CORE LOGIC</span>
                            <span className="text-[#e2e2ec] font-bold text-xs">{project.tech[1]}</span>
                          </div>
                          <span className="text-[#d4ff32] font-bold">→</span>
                          <div className="p-2 rounded bg-[#151522] border border-[#242436] flex-1 text-center truncate">
                            <span className="text-[10px] text-[#6b6b7f] block">PERSISTENCE</span>
                            <span className="text-[#e2e2ec] font-bold text-xs">{project.tech[2]}</span>
                          </div>
                        </div>

                        {/* Interactive Project Cue that slides in on hover/focus */}
                        <div className="pt-1 flex items-center justify-between">
                          <span className="text-[10px] text-[#58586c]">CLICK TO INSPECT DOCKET</span>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#d4ff32]/10 border border-[#d4ff32]/30 text-[#d4ff32] font-bold text-[10px] tracking-wider transition-all duration-200 group-hover/preview:bg-[#d4ff32] group-hover/preview:text-[#070709]">
                            <span>INSPECT DOCKET</span>
                            <ArrowRight size={11} className="transition-transform group-hover/preview:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#66667a] block mb-2 font-semibold">
                        Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tactile Action Buttons */}
                    <div className="flex items-center gap-3 pt-1">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md bg-[#d4ff32] text-[#070709] hover:bg-[#e0ff54] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          aria-label={`Visit live deployment of ${project.title}`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md bg-[#161622] border border-[#272738] text-[#e0e0ea] hover:border-[#d4ff32] hover:text-[#d4ff32] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          aria-label={`View ${project.title} source on GitHub`}
                        >
                          <Github size={13} />
                          <span>View Source</span>
                          <ArrowUpRight size={12} className="opacity-60" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
          )}
        </div>
      </div>

      {/* Connected Project Detail Modal with Sequence Reveal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#07070a]/85 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Container */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl rounded-2xl border border-[#28283a] bg-[#0c0c13] p-6 sm:p-10 shadow-2xl z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1c1c28]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#d4ff32] px-2.5 py-1 rounded bg-[#161624] border border-[#27273c]">
                    {selectedProject.code}
                  </span>
                  <span className="font-mono text-xs uppercase text-[#88889c]">
                    {selectedProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg border border-[#20202e] text-[#8e8e9f] hover:text-[#f4f4f7] hover:border-[#d4ff32] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Close project modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title Sequence */}
              <div>
                <h3 id="modal-title" className="text-2xl sm:text-4xl font-extrabold text-[#f4f4f7] tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-semibold text-[#d4ff32] font-mono mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#9e9eb2] leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Architectural Pipelines */}
              <div className="space-y-3 p-5 rounded-xl bg-[#111119] border border-[#1e1e2d]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4ff32] font-semibold flex items-center gap-2">
                  <Cpu size={14} />
                  <span>Architectural Pipelines & Specifications</span>
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#a8a8bc]">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-[10px] text-[#d4ff32] font-bold mt-0.5">0{idx + 1}</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security & Integrity Guarantees */}
              <div className="space-y-3 p-5 rounded-xl bg-[#111119] border border-[#1e1e2d]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4ff32] font-semibold flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span>Security & Resilience Guarantees</span>
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#a8a8bc]">
                  {selectedProject.securityGuarantees.map((guarantee, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-[#d4ff32] shrink-0 mt-0.5" />
                      <span>{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#1c1c28]">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#d4ff32] text-[#070709] font-bold text-xs hover:bg-[#e0ff54] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span>Launch Live App</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#161624] border border-[#28283c] text-[#e0e0ea] hover:border-[#d4ff32] hover:text-[#d4ff32] transition-colors text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Github size={14} />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
