'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  MapPin,
  ExternalLink,
  Shield,
  Trophy,
  Terminal,
  Cpu,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  X,
  Code2,
  CheckCircle2,
  Layers,
  Link as LinkIcon,
} from 'lucide-react';

export interface ArchiveItem {
  id: string;
  category: 'events' | 'experience';
  title: string;
  badge: string;
  period: string;
  organization: string;
  location: string;
  summary: string;
  responsibilities: string[];
  skillsUsed: string[];
  externalLink?: {
    label: string;
    url: string;
  };
}

export interface SkillItem {
  id: string;
  title: string;
  badge: string;
  domain: string;
  skills: string[];
  summary: string;
  demonstratedIn: {
    title: string;
    targetTab: 'events' | 'experience';
    itemId: string;
    note: string;
  }[];
}

const eventsData: ArchiveItem[] = [
  {
    id: 'hackathon-24h',
    category: 'events',
    title: '24-Hour Inter-College Hackathon',
    badge: 'Core Organizing Lead',
    period: '2024',
    organization: 'Dayananda Sagar University',
    location: 'Bengaluru, India',
    summary:
      'Spearheaded and managed the core organizing team to plan, coordinate, and execute an intensive 24-hour inter-college hackathon with dozens of competing teams.',
    responsibilities: [
      'Directed event scheduling, participant onboarding, and technical resource allocation for over 24 hours of continuous innovation.',
      'Managed on-ground crisis resolution, mentor coordination, and live judging queues.',
      'Coordinated venue infrastructure, high-throughput network access, and team welfare throughout the sprint.',
    ],
    skillsUsed: ['Team Leadership', 'Event Architecture', 'Logistics Management', 'Git', 'Problem Solving'],
  },
  {
    id: 'bharat-shield-event',
    category: 'events',
    title: 'Bharat-ID-Shield Challenge',
    badge: '1st Place Winner · Champion',
    period: '2024',
    organization: 'Christ University Hackathon',
    location: 'Bengaluru, India',
    summary:
      'Secured first place by architecting and presenting a robust shield model for secure digital identities, integrating encryption, blockchain audit trails, and threat-detection logic.',
    responsibilities: [
      'Designed decentralized voter identity authentication using biometric facial and document verification.',
      'Engineered cryptographic hashing pipelines to guarantee zero-tampering audit records.',
      'Delivered high-pressure live architectural defense before faculty and industry adjudicators.',
    ],
    skillsUsed: ['Blockchain', 'Python / Flask', 'Threat Detection', 'TensorFlow', 'REST APIs', 'Cryptography'],
    externalLink: {
      label: 'View Repository',
      url: 'https://github.com/adi202023/Bharat-ID-Shield',
    },
  },
  {
    id: 'ieee-quiz-host',
    category: 'events',
    title: 'IEEE Signature Quiz Competition',
    badge: 'Host & Lead Coordinator',
    period: '2024',
    organization: 'Dayananda Sagar University (IEEE)',
    location: 'Bengaluru, India',
    summary:
      'Served as the master of ceremonies and lead organizer for the university-wide IEEE technical quiz competition, curating cutting-edge engineering questions.',
    responsibilities: [
      'Drafted interactive challenge rounds spanning artificial intelligence, computing history, and robotics.',
      'Orchestrated multi-round buzzer systems and automated participant scoring.',
      'Engaged an audience of 100+ engineering students with sharp technical moderation.',
    ],
    skillsUsed: ['Technical Moderation', 'Public Speaking', 'IEEE Governance', 'Audience Engagement'],
  },
  {
    id: 'acm-workshops',
    category: 'events',
    title: 'ACM-DSU Developer Workshops',
    badge: 'Technical Director',
    period: '2024 – Present',
    organization: 'ACM-DSU Student Chapter',
    location: 'Bengaluru, India',
    summary:
      'Designed and conducted hands-on technical sessions covering modern full-stack engineering, Git workflows, and hackathon preparation for fellow undergraduates.',
    responsibilities: [
      'Mentored junior students on repository hygiene, branch workflows, and API architectures.',
      'Maintained and iterated the student chapter’s official web platform.',
      'Curated problem statements for internal university hackathon trials.',
    ],
    skillsUsed: ['React.js', 'Next.js', 'Git / GitHub', 'System Architecture', 'Mentorship'],
  },
];

const experienceData: ArchiveItem[] = [
  {
    id: 'ieee-ras-chair',
    category: 'experience',
    title: 'IEEE RAS Chapter Chair',
    badge: 'Executive Leadership',
    period: '2024 – Present',
    organization: 'IEEE Robotics and Automation Society (DSU)',
    location: 'Bengaluru, India',
    summary:
      'Leading the student robotics and automation chapter, driving specialized workshops, industry sessions, and hands-on systems development.',
    responsibilities: [
      'Oversee chapter operations, technical project grants, and multidisciplinary student initiatives.',
      'Liaise with IEEE Bangalore Section leadership to align chapter deliverables and competitions.',
      'Foster an engineering culture around autonomous systems, computer vision, and machine intelligence.',
    ],
    skillsUsed: ['Technical Strategy', 'Robotics Systems', 'Resource Management', 'Team Leadership'],
  },
  {
    id: 'acm-tech-head',
    category: 'experience',
    title: 'Tech Head — ACM Student Chapter',
    badge: 'Technical Leadership',
    period: '2024 – Present',
    organization: 'ACM-DSU Student Chapter',
    location: 'Bengaluru, India',
    summary:
      'Heading technical decisions, software deployments, and code infrastructure for the ACM student chapter at Dayananda Sagar University.',
    responsibilities: [
      'Direct core organizing teams for inter-college competitive programming and hackathon circuits.',
      'Architected and published web properties with modern frontend and deployment pipelines.',
      'Championed open-source contribution and collaborative engineering among members.',
    ],
    skillsUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CI/CD Pipelines', 'Team Direction'],
  },
  {
    id: 'dsu-btech',
    category: 'experience',
    title: 'B.Tech in Computer Science & Engineering',
    badge: 'Academic Candidate',
    period: 'Expected Aug 2028',
    organization: 'Dayananda Sagar University',
    location: 'Bengaluru, India',
    summary:
      'Undergraduate studies focused on Artificial Intelligence and Machine Learning, computer architecture, algorithms, and full-stack software development.',
    responsibilities: [
      'Rigorous coursework in Data Structures, Discrete Math, C/C++, Java, and ML principles.',
      'Independent research and development in Reinforcement Learning (Q-learning) and decentralized voting frameworks.',
      'Consistently applying classroom theoretical paradigms to competitive hackathon projects.',
    ],
    skillsUsed: ['Python', 'C / C++', 'Java', 'Machine Learning', 'Data Structures', 'SQL'],
  },
];

const skillsArchiveData: SkillItem[] = [
  {
    id: 'skill-aiml',
    title: 'AI & Machine Learning Engine',
    badge: 'Core Discipline',
    domain: 'Intelligent Systems',
    skills: ['Reinforcement Learning', 'TensorFlow', 'ML Algorithms', 'NLP', 'Computer Vision', 'OpenCV'],
    summary:
      'Hands-on expertise designing, training, and deploying neural models, reinforcement learning agents, and facial/document verification pipelines.',
    demonstratedIn: [
      {
        title: 'Bharat-ID-Shield Challenge (1st Place)',
        targetTab: 'events',
        itemId: 'bharat-shield-event',
        note: 'Facial and document verification pipeline via TensorFlow & OpenCV.',
      },
      {
        title: 'Bharat-ID-AiDeVote System',
        targetTab: 'events',
        itemId: 'bharat-shield-event',
        note: 'AI-driven decentralized voter authentication model.',
      },
      {
        title: 'B.Tech CSE Machine Learning Focus',
        targetTab: 'experience',
        itemId: 'dsu-btech',
        note: 'Reinforcement learning research and predictive classification models.',
      },
    ],
  },
  {
    id: 'skill-frontend',
    title: 'Frontend & Reactive Interfaces',
    badge: 'Production Systems',
    domain: 'Client Architecture',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion/React', 'HTML5 / CSS3'],
    summary:
      'Architecting fluid, tactile digital interfaces with modern component architectures, fluid animation, and strict typography standards.',
    demonstratedIn: [
      {
        title: 'ACM-DSU Developer Workshops & Web',
        targetTab: 'events',
        itemId: 'acm-workshops',
        note: 'Official web properties and interactive student portal.',
      },
      {
        title: 'ACM Student Chapter Tech Head',
        targetTab: 'experience',
        itemId: 'acm-tech-head',
        note: 'Production Next.js deployment and reactive UI state management.',
      },
      {
        title: 'Aditya S. Sheregar Folio Stage',
        targetTab: 'experience',
        itemId: 'dsu-btech',
        note: 'Custom proscenium stage curtain, custom cursor, and dual-shutter curtain.',
      },
    ],
  },
  {
    id: 'skill-backend',
    title: 'Backend & Distributed Ledgers',
    badge: 'Architectural Layer',
    domain: 'Server & Security',
    skills: ['Python / Flask', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Blockchain', 'REST APIs'],
    summary:
      'Building resilient, secure RESTful backends with Python Flask, Node.js, and tamper-proof blockchain ledger architectures.',
    demonstratedIn: [
      {
        title: 'Bharat-ID-Shield Backend',
        targetTab: 'events',
        itemId: 'bharat-shield-event',
        note: 'Flask backend with cryptographic hashing and blockchain audit trails.',
      },
      {
        title: 'SecureVote Platform',
        targetTab: 'events',
        itemId: 'bharat-shield-event',
        note: 'Tamper-proof electoral ledger and offline IndexedDB synchronization.',
      },
    ],
  },
  {
    id: 'skill-languages',
    title: 'Foundational Programming',
    badge: 'Core Syntax',
    domain: 'Computational Foundations',
    skills: ['Python', 'C', 'C++', 'Java', 'SQL', 'JavaScript', 'TypeScript'],
    summary:
      'Proficiency across core systems and high-level programming languages for algorithmic efficiency and scalable software.',
    demonstratedIn: [
      {
        title: 'B.Tech CSE Core Coursework',
        targetTab: 'experience',
        itemId: 'dsu-btech',
        note: 'Data structures, algorithm optimization, and memory management in C/C++.',
      },
      {
        title: '24-Hour Inter-College Hackathon',
        targetTab: 'events',
        itemId: 'hackathon-24h',
        note: 'Rapid algorithmic prototyping and problem statement adjudication.',
      },
    ],
  },
  {
    id: 'skill-devops',
    title: 'DevOps & Development Tooling',
    badge: 'Engineering Pipeline',
    domain: 'Infrastructure & Workflows',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Netlify', 'VS Code', 'CI/CD Pipelines'],
    summary:
      'Modern engineering workflows with strict Git hygiene, automated deployment pipelines, API benchmarking, and cloud hosting.',
    demonstratedIn: [
      {
        title: 'ACM-DSU Developer Workshops',
        targetTab: 'events',
        itemId: 'acm-workshops',
        note: 'Hands-on mentorship on Git branch hygiene and CI/CD releases.',
      },
      {
        title: 'IEEE RAS Chapter Operations',
        targetTab: 'experience',
        itemId: 'ieee-ras-chair',
        note: 'Centralized repository management and collaborative tooling.',
      },
    ],
  },
];

export default function ExperienceSpace() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'events' | 'experience' | 'skills'>('events');
  const [selectedItemId, setSelectedItemId] = useState<string>('hackathon-24h');
  const [selectedSkillId, setSelectedSkillId] = useState<string>('skill-aiml');
  const [transitioning, setTransitioning] = useState(false);

  // Global listeners for opening/closing the space
  useEffect(() => {
    const handleOpen = () => {
      setTransitioning(true);
      setIsOpen(true);
      setTimeout(() => setTransitioning(false), 600);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    const handleHash = () => {
      if (window.location.hash === '#experience' || window.location.hash === '#field-archive') {
        handleOpen();
      }
    };

    window.addEventListener('open-experience-space', handleOpen);
    window.addEventListener('close-experience-space', handleClose);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHash);

    // Initial check
    if (window.location.hash === '#experience' || window.location.hash === '#field-archive') {
      handleOpen();
    }

    return () => {
      window.removeEventListener('open-experience-space', handleOpen);
      window.removeEventListener('close-experience-space', handleClose);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHash);
    };
  }, [isOpen]);

  const closeSpace = () => {
    setIsOpen(false);
    // remove hash cleanly without jumping
    if (window.location.hash === '#experience' || window.location.hash === '#field-archive') {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  // Bidirectional Cross-linking: from Event/Experience to Skill
  const navigateToSkill = (skillName: string) => {
    // Find matching skill category
    const found = skillsArchiveData.find((s) =>
      s.skills.some((sk) => sk.toLowerCase().includes(skillName.toLowerCase()) || skillName.toLowerCase().includes(sk.toLowerCase()))
    );
    if (found) {
      setActiveTab('skills');
      setSelectedSkillId(found.id);
    } else {
      setActiveTab('skills');
    }
  };

  // Bidirectional Cross-linking: from Skill to Event/Experience
  const navigateToExperience = (targetTab: 'events' | 'experience', itemId: string) => {
    setActiveTab(targetTab);
    setSelectedItemId(itemId);
  };

  if (!isOpen) return null;

  const currentArchiveList = activeTab === 'events' ? eventsData : experienceData;
  const activeArchiveItem =
    currentArchiveList.find((item) => item.id === selectedItemId) || currentArchiveList[0];
  const activeSkillItem =
    skillsArchiveData.find((item) => item.id === selectedSkillId) || skillsArchiveData[0];

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Backstage Field Archive: Experience and Skills"
        className="fixed inset-0 z-[250] overflow-y-auto bg-[#06110c] text-[#f4f4f7] selection:bg-[#a31c1b] selection:text-white"
      >
        {/* Stage Door Entrance Light Beam Sweep */}
        {transitioning && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: [1, 0.8, 0] }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[280] bg-gradient-to-r from-transparent via-[#a31c1b]/30 to-transparent pointer-events-none"
          />
        )}

        {/* Backstage Header Bar */}
        <header className="sticky top-0 z-40 bg-[#06110c]/90 backdrop-blur-xl border-b border-[#14291e] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#a31c1b] animate-ping" />
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-wider text-[#a31c1b] uppercase">
                STAGE DOOR // BACKSTAGE FIELD ARCHIVE
              </span>
              <span className="text-[11px] font-mono text-[#8a8a9a] hidden sm:block">
                Aditya S. Sheregar · Verified Operations, Roles &amp; Competencies
              </span>
            </div>
          </div>

          {/* Return to Stage Control */}
          <div className="flex items-center gap-3">
            <button
              onClick={closeSpace}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#262626] text-[#e2e2ec] hover:border-[#a31c1b] hover:text-white hover:bg-[#a31c1b] text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
              aria-label="Return to Main Folio Stage"
            >
              <ArrowLeft size={13} />
              <span>Return to Stage</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.2 rounded bg-[#262626] text-[10px] text-[#86869a]">
                ESC
              </kbd>
            </button>
          </div>
        </header>

        {/* Main Archive Workspace */}
        <div className="max-w-6xl mx-auto px-6 py-10 sm:py-16">
          {/* Section Introduction */}
          <div className="mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#a31c1b] font-semibold">
              <span>[ Backstage Dossier ]</span>
              <span>{'//'}</span>
              <span>Interactive Field Guide</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f4f7]">
              The Field Archive.
            </h1>
            <p className="text-sm font-mono text-[#8a8a9e] max-w-2xl leading-relaxed">
              Explore verified event leadership, student chapter governance, and proven engineering competencies. Selecting any experience highlights its applied skills, and selecting any skill connects to the real projects where it was demonstrated.
            </p>
          </div>

          {/* Navigation Category Tabs */}
          <div
            role="tablist"
            aria-label="Archive Categories"
            className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#0a1811] border border-[#14291e] mb-10"
          >
            {[
              { id: 'events', label: 'Events & Hackathons', count: eventsData.length, icon: Calendar },
              { id: 'experience', label: 'Experience & Leadership', count: experienceData.length, icon: Shield },
              { id: 'skills', label: 'Skills & Evidence Archive', count: skillsArchiveData.length, icon: Cpu },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#8a8a9a] hover:text-[#f4f4f7] hover:bg-[#14291e]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="archive-tab-pill"
                      className="absolute inset-0 bg-[#a31c1b] rounded-lg -z-10 shadow-[0_0_20px_rgba(163,28,27,0.35)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <Icon size={14} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#06110c]/40 text-white' : 'bg-[#171717] text-[#8a8a9a]'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* TAB 1 & 2: Events and Experience Workspace */}
          {activeTab !== 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Index List (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                {currentArchiveList.map((item, idx) => {
                  const isSelected = item.id === activeArchiveItem.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItemId(item.id)}
                      className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] ${
                        isSelected
                          ? 'bg-[#0a1811] border-[#a31c1b]/60 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
                          : 'bg-[#06110c] border-[#14291e] hover:border-[#1e3b2b] hover:bg-[#0a1811]'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="archive-item-active-border"
                          className="absolute inset-0 border-2 border-[#a31c1b] rounded-xl pointer-events-none"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}

                      <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-[#8a8a9a] mb-1.5">
                        <span className="flex items-center gap-1.5 text-[#a31c1b] font-semibold">
                          <span>0{idx + 1}</span>
                          <span>{'//'}</span>
                          <span className="uppercase">{item.badge}</span>
                        </span>
                        <span>{item.period}</span>
                      </div>

                      <h3
                        className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                          isSelected ? 'text-[#f4f4f7]' : 'text-[#c6c6d8] group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#8a8a9a] font-mono mt-1 line-clamp-1">
                        {item.organization}
                      </p>

                      {/* Applied skills preview */}
                      <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-[#14291e] text-[11px] font-mono">
                        <span className="text-[#646478] truncate max-w-[80%]">
                          {item.skillsUsed.slice(0, 3).join(' · ')}
                        </span>
                        <ChevronRight
                          size={13}
                          className={`transition-transform ${
                            isSelected
                              ? 'text-[#a31c1b] translate-x-0.5'
                              : 'text-[#485848] group-hover:translate-x-0.5'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Detailed Dossier Panel (7 cols) */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeArchiveItem.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-[#0a1811] border border-[#14291e] rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
                  >
                    <span className="absolute top-3 right-3 text-[10px] font-mono text-[#3e5649]">
                      + ARCHIVE RECORD
                    </span>

                    {/* Metadata Header */}
                    <div className="space-y-2 mb-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-[#a31c1b] font-semibold">
                          {activeArchiveItem.badge}
                        </span>
                        <span className="text-[#8a8a9a] flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{activeArchiveItem.period}</span>
                        </span>
                        <span className="text-[#8a8a9a] flex items-center gap-1">
                          <MapPin size={12} />
                          <span>{activeArchiveItem.location}</span>
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f4f4f7] tracking-tight">
                        {activeArchiveItem.title}
                      </h2>

                      <p className="text-xs sm:text-sm font-mono text-[#e05856]">
                        {activeArchiveItem.organization}
                      </p>
                    </div>

                    {/* Narrative Summary */}
                    <p className="text-xs sm:text-sm text-[#a2a2b6] leading-relaxed mb-6 pb-6 border-b border-[#14291e]">
                      {activeArchiveItem.summary}
                    </p>

                    {/* Verified Responsibilities */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#a31c1b] font-semibold flex items-center gap-2">
                        <Sparkles size={12} />
                        <span>Verified Responsibilities &amp; Outcomes</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {activeArchiveItem.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9292a6] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b] mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* BIDIRECTIONAL CROSS-LINK: Interactive Applied Skills */}
                    <div className="space-y-3 pt-6 border-t border-[#14291e]">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#8a8a9a] flex items-center gap-1.5 font-semibold">
                          <LinkIcon size={12} className="text-[#a31c1b]" />
                          <span>Applied Skills (Click to Cross-Reference)</span>
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeArchiveItem.skillsUsed.map((skill) => (
                          <button
                            key={skill}
                            onClick={() => navigateToSkill(skill)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#06110c] border border-[#14291e] text-xs font-mono text-[#e0e0ee] hover:border-[#a31c1b] hover:text-white hover:bg-[#a31c1b] transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#a31c1b]"
                            title={`Inspect ${skill} in Skills Archive`}
                          >
                            <span>{skill}</span>
                            <span className="text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              →
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* External Link */}
                    {activeArchiveItem.externalLink && (
                      <div className="mt-6 pt-5 border-t border-[#14291e] flex justify-end">
                        <a
                          href={activeArchiveItem.externalLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#a31c1b] text-white font-mono font-bold text-xs hover:bg-[#bd2423] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
                        >
                          <span>{activeArchiveItem.externalLink.label}</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* TAB 3: Skills Archive with Demonstrated Projects & Experiences */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Skill Categories (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                {skillsArchiveData.map((item, idx) => {
                  const isSelected = item.id === activeSkillItem.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedSkillId(item.id)}
                      className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] ${
                        isSelected
                          ? 'bg-[#0a1811] border-[#a31c1b]/60 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
                          : 'bg-[#06110c] border-[#14291e] hover:border-[#1e3b2b] hover:bg-[#0a1811]'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="skill-item-active-border"
                          className="absolute inset-0 border-2 border-[#a31c1b] rounded-xl pointer-events-none"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}

                      <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-[#8a8a9a] mb-1.5">
                        <span className="flex items-center gap-1.5 text-[#a31c1b] font-semibold">
                          <span>0{idx + 1}</span>
                          <span>{'//'}</span>
                          <span className="uppercase">{item.domain}</span>
                        </span>
                        <span className="text-[#646476]">{item.badge}</span>
                      </div>

                      <h3
                        className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                          isSelected ? 'text-[#f4f4f7]' : 'text-[#c6c6d8] group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>

                      <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-[#14291e] text-[11px] font-mono">
                        <span className="text-[#646478] truncate max-w-[80%]">
                          {item.skills.slice(0, 3).join(' · ')}
                        </span>
                        <ChevronRight
                          size={13}
                          className={`transition-transform ${
                            isSelected
                              ? 'text-[#a31c1b] translate-x-0.5'
                              : 'text-[#485848] group-hover:translate-x-0.5'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Skill Detail & Connected Evidence (7 cols) */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSkillItem.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-[#0a1811] border border-[#14291e] rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
                  >
                    <span className="absolute top-3 right-3 text-[10px] font-mono text-[#3e5649]">
                      + COMPETENCY DOSSIER
                    </span>

                    {/* Metadata Header */}
                    <div className="space-y-2 mb-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="px-2.5 py-1 rounded bg-[#171717] border border-[#262626] text-[#a31c1b] font-semibold">
                          {activeSkillItem.badge}
                        </span>
                        <span className="text-[#8a8a9a]">{activeSkillItem.domain}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f4f4f7] tracking-tight">
                        {activeSkillItem.title}
                      </h2>
                    </div>

                    {/* Narrative Summary */}
                    <p className="text-xs sm:text-sm text-[#a2a2b6] leading-relaxed mb-6 pb-6 border-b border-[#14291e]">
                      {activeSkillItem.summary}
                    </p>

                    {/* Verified Tools in this Cluster */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#8a8a9a] font-semibold">
                        Verified Technologies in this Cluster
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeSkillItem.skills.map((sk) => (
                          <span
                            key={sk}
                            className="px-3 py-1.5 rounded-md bg-[#06110c] border border-[#14291e] text-xs font-mono text-[#dcdce8]"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* BIDIRECTIONAL CROSS-LINK: Demonstrated In Works & Roles */}
                    <div className="space-y-3 pt-6 border-t border-[#14291e]">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#a31c1b] font-semibold flex items-center gap-2">
                        <LinkIcon size={12} />
                        <span>Demonstrated In (Click to Jump to Record)</span>
                      </h4>
                      <div className="space-y-2.5">
                        {activeSkillItem.demonstratedIn.map((demo, idx) => (
                          <button
                            key={idx}
                            onClick={() => navigateToExperience(demo.targetTab, demo.itemId)}
                            className="w-full text-left p-3.5 rounded-lg bg-[#06110c] border border-[#14291e] hover:border-[#a31c1b] transition-colors group flex items-start justify-between gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#a31c1b]"
                          >
                            <div className="space-y-1">
                              <span className="text-xs font-mono font-bold text-[#f4f4f7] group-hover:text-[#a31c1b] transition-colors flex items-center gap-1.5">
                                <span>{demo.title}</span>
                                <span className="text-[10px] text-[#646476] uppercase">
                                  [{demo.targetTab}]
                                </span>
                              </span>
                              <p className="text-xs text-[#8c8c9e] leading-relaxed">
                                {demo.note}
                              </p>
                            </div>
                            <span className="text-xs font-mono text-[#a31c1b] font-semibold shrink-0 mt-1">
                              View →
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
