'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, Terminal, ArrowRight, ArrowUpRight, X, Cpu } from 'lucide-react';

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
    status: 'Research Prototype',
    telemetry: 'TENSORFLOW // SHA-256 LEDGER',
  },
  {
    id: 'blockchain-mobile-voting',
    index: '03',
    code: 'SYS-BMV',
    title: 'Mobile Secure Blockchain Voting',
    subtitle: 'Multi-Lingual Secure Mobile Voting Infrastructure',
    domain: 'mobile',
    domainLabel: 'Mobile Apps',
    category: 'React Native · Government Database Integration · Cryptography',
    description:
      'A mobile voting platform featuring multi-language localization (Hindi, Kannada, English, Marathi, Telugu), candidate bio-data inspection, and Aadhaar/voter ID database integration for authenticated, fraud-proof franchise participation.',
    contribution:
      'Designed the multi-lingual mobile UI with candidate bio-data exploration, integrated mock government authentication verification APIs, built the tamper-proof ledger client, and developed an administrative real-time analytics dashboard supporting offline and online ballot caching.',
    architectureDetails: [
      'Aadhaar and voter ID identity verification client-side pipeline',
      'Multi-language state localization matrix supporting 5 regional languages',
      'Local cryptographic ballot encryption cache supporting network-resilient offline voting',
      'Real-time analytics dashboard visualizing demographic turnout statistics',
    ],
    securityGuarantees: [
      'Aadhaar/voter ID single-credential verification constraint',
      'End-to-end cryptographic voter receipt generation',
      'Tamper-evident localized ledger replication',
    ],
    features: [
      'Multi-language support (Hindi, Kannada, English, Marathi, Telugu)',
      'Government credential database verification checks',
      'Immutable cryptographic transaction ledger',
      'Online & offline hybrid polling station support',
    ],
    tech: ['React Native', 'JavaScript', 'Blockchain', 'Node.js', 'Express', 'Cybersecurity'],
    github: 'https://github.com/adi202023',
    badge: 'Civic Tech Platform',
    status: 'Active Architecture',
    telemetry: 'REACT NATIVE // AADHAAR API',
  },
  {
    id: 'reel-2-reality',
    index: '04',
    code: 'SYS-R2R',
    title: 'Reel-2-Reality',
    subtitle: 'Cross-Platform Real-World Social Challenges',
    domain: 'mobile',
    domainLabel: 'Mobile Apps',
    category: 'React Native · Mobile Architecture · Hardware Integration',
    description:
      'A mobile app engineered to bridge digital interaction with offline reality by encouraging users to complete real-world challenges, submit photographic proof, and earn merchant vouchers.',
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

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

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
    <section id="projects" className="py-16 sm:py-24 relative border-t border-[#262626] bg-[#171717] scroll-mt-20" aria-label="Projects Work Board">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Board Header & Controls: Clean, connected, zero empty void */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#262626]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#a31c1b] font-semibold">
              <Layers size={13} />
              <span>Project Work Board</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f4f4f7] tracking-tight leading-tight">
              Systems Built for Reality.
            </h2>

            <p className="text-xs sm:text-sm font-mono text-[#8a8a9a] max-w-xl leading-relaxed">
              A curated catalog of verified production systems, security architectures, and distributed applications.
            </p>
          </div>

          {/* Board Domain Filters: placed beside or directly below header */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#06110c] border border-[#14291e] shadow-inner shrink-0"
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
                  className={`px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[36px] flex items-center ${
                    isActive
                      ? 'bg-[#a31c1b] text-white font-semibold shadow-sm border border-[#bd2423]'
                      : 'text-[#8a8a9a] hover:text-[#f4f4f7]'
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
            <div className="p-8 sm:p-12 text-center rounded-xl border border-[#14291e] bg-[#06110c] space-y-3">
              <p className="text-sm font-mono text-[#8a8a9a]">
                No projects found in this domain.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="px-4 py-2 text-xs font-mono bg-[#a31c1b] text-white rounded-md font-bold hover:bg-[#bd2423] transition-colors"
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
                  className="group relative rounded-xl border border-[#14291e] bg-[#06110c] hover:border-[#a31c1b]/50 transition-all duration-300 p-4 sm:p-7 shadow-lg focus-within:border-[#a31c1b] focus-within:ring-1 focus-within:ring-[#a31c1b]/30"
                >
                {/* Top Board Docket / Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-[#14291e]">
                  <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs">
                    <span className="font-bold text-white px-2 py-0.5 rounded bg-[#171717] border border-[#262626]">
                      {project.code}
                    </span>
                    <span className="text-[#3e5649]">/</span>
                    <span className="text-[#8c8ca0] uppercase tracking-wider text-[10px] sm:text-xs">
                      {project.domainLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.badge && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-[#a31c1b]/15 border border-[#a31c1b]/30 text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b]" />
                        <span>{project.badge}</span>
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-[#8a8a9a] bg-[#171717] border border-[#262626] hidden sm:inline-block">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Main Card Content Grid */}
                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 pt-5 sm:pt-6 items-start">
                  {/* Left Column: Titles, Summary & Contribution (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-3xl font-extrabold text-[#f4f4f7] group-hover:text-white transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#e05856] font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#9595a8] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture / Contribution Panel */}
                    <div className="p-3.5 sm:p-4 rounded-lg bg-[#0a1811] border border-[#14291e] space-y-1.5">
                      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#a31c1b] font-semibold">
                        <Terminal size={12} />
                        <span>Core Engineering &amp; Contribution</span>
                      </div>
                      <p className="text-xs text-[#a2a2b8] leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Visual Schematic Preview with Mask Reveal & Cue (5 cols) */}
                  <div className="lg:col-span-5 space-y-4 sm:space-y-5 lg:pl-3">
                    {/* Interactive Architectural Visual Box */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                      role="button"
                      tabIndex={0}
                      data-cursor="view"
                      aria-label={`Open architecture details for ${project.title}`}
                      className="relative rounded-lg overflow-hidden border border-[#14291e] bg-[#0a1811] p-3 sm:p-4 cursor-pointer group/preview transition-all duration-300 hover:border-[#a31c1b]/60 hover:shadow-[0_0_24px_rgba(163,28,27,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
                    >
                      {/* Sliding mask overlay on load / reveal */}
                      <motion.div
                        initial={{ x: '0%' }}
                        whileInView={{ x: '102%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 bg-[#06110c] z-20 pointer-events-none"
                      />

                      {/* Schematic Display Content */}
                      <div className="space-y-2.5 sm:space-y-3 font-mono text-[10px] sm:text-[11px]">
                        <div className="flex items-center justify-between text-[#8a8a9a] border-b border-[#14291e] pb-2">
                          <span className="flex items-center gap-1 text-[#a31c1b] font-semibold truncate max-w-[60%]">
                            <Cpu size={12} className="shrink-0" />
                            <span className="truncate">{project.code} ARCHITECTURE</span>
                          </span>
                          <span className="text-[9px] sm:text-[10px] text-[#6b6b7f] truncate">{project.telemetry}</span>
                        </div>

                        {/* Visual Node Diagram Mockup */}
                        <div className="py-1.5 flex items-center justify-between gap-1.5 text-[#9999ab]">
                          <div className="p-1.5 rounded bg-[#06110c] border border-[#14291e] flex-1 text-center truncate">
                            <span className="text-[8px] sm:text-[9px] text-[#6b6b7f] block truncate">INGRESS</span>
                            <span className="text-[#e2e2ec] font-bold text-[10px] sm:text-xs truncate block">{project.tech[0]}</span>
                          </div>
                          <span className="text-[#a31c1b] font-bold text-xs">→</span>
                          <div className="p-1.5 rounded bg-[#06110c] border border-[#14291e] flex-1 text-center truncate">
                            <span className="text-[8px] sm:text-[9px] text-[#6b6b7f] block truncate">CORE</span>
                            <span className="text-[#e2e2ec] font-bold text-[10px] sm:text-xs truncate block">{project.tech[1]}</span>
                          </div>
                          <span className="text-[#a31c1b] font-bold text-xs">→</span>
                          <div className="p-1.5 rounded bg-[#06110c] border border-[#14291e] flex-1 text-center truncate">
                            <span className="text-[8px] sm:text-[9px] text-[#6b6b7f] block truncate">STORE</span>
                            <span className="text-[#e2e2ec] font-bold text-[10px] sm:text-xs truncate block">{project.tech[2]}</span>
                          </div>
                        </div>

                        {/* Interactive Project Cue that slides in on hover/focus */}
                        <div className="pt-1 flex items-center justify-between">
                          <span className="text-[9px] sm:text-[10px] text-[#707080] truncate">INSPECT PIPELINE</span>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#a31c1b]/20 border border-[#a31c1b]/40 text-white font-bold text-[9px] sm:text-[10px] tracking-wider transition-all duration-200 group-hover/preview:bg-[#a31c1b] group-hover/preview:text-[#ffffff] shrink-0">
                            <span>DETAILS</span>
                            <ArrowRight size={10} className="transition-transform group-hover/preview:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#8a8a9a] block mb-1.5 font-semibold">
                        Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-badge text-[10px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tactile Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md bg-[#a31c1b] text-[#ffffff] hover:bg-[#bd2423] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[38px]"
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
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md bg-[#171717] border border-[#262626] text-[#e0e0ea] hover:border-[#a31c1b] hover:text-[#ffffff] hover:bg-[#a31c1b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[38px]"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#171717]/85 backdrop-blur-md"
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
              className="relative w-full max-w-3xl rounded-2xl border border-[#14291e] bg-[#06110c] p-4 sm:p-10 shadow-2xl z-10 space-y-5 sm:space-y-6 max-h-[85dvh] overflow-y-auto"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#14291e]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="font-mono text-xs font-bold text-white px-2.5 py-0.5 rounded bg-[#171717] border border-[#262626]">
                    {selectedProject.code}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs uppercase text-[#8a8a9a] truncate max-w-[200px]">
                    {selectedProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg border border-[#262626] bg-[#171717] text-[#9a9aab] hover:text-white hover:border-[#a31c1b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[38px] min-w-[38px] flex items-center justify-center"
                  aria-label="Close project modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title Sequence */}
              <div>
                <h3 id="modal-title" className="text-xl sm:text-4xl font-extrabold text-[#f4f4f7] tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#e05856] font-mono mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#9e9eb2] leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Architectural Pipelines */}
              <div className="space-y-3 p-4 sm:p-5 rounded-xl bg-[#0a1811] border border-[#14291e]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#a31c1b] font-semibold flex items-center gap-2">
                  <Cpu size={14} />
                  <span>Architectural Pipelines &amp; Specifications</span>
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#a8a8bc]">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-[10px] text-[#a31c1b] font-bold mt-0.5">0{idx + 1}</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security & Integrity Guarantees */}
              <div className="space-y-3 p-4 sm:p-5 rounded-xl bg-[#0a1811] border border-[#14291e]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#a31c1b] font-semibold flex items-center gap-2">
                  <span>Security &amp; Integrity Guarantees</span>
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#a8a8bc]">
                  {selectedProject.securityGuarantees.map((guarantee, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#a31c1b] font-bold mt-0.5">✓</span>
                      <span>{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal CTAs */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-[#14291e]">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#262626] bg-[#171717] text-xs font-mono font-semibold text-[#e0e0ea] hover:border-[#a31c1b] hover:text-white transition-colors min-h-[42px]"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#a31c1b] text-xs font-mono font-bold text-white hover:bg-[#bd2423] transition-colors min-h-[42px]"
                  >
                    <span>Launch Live System</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
