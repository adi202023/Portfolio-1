'use client';

import { Sparkles } from 'lucide-react';

const tickerItems = [
  { name: 'Python', category: 'Language' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'TensorFlow', category: 'AI & ML' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Web Crypto API', category: 'Security' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Computer Vision', category: 'AI & ML' },
  { name: 'Leaflet & GIS', category: 'Mapping' },
  { name: 'Blockchain', category: 'Decentralized' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Reinforcement Learning', category: 'AI & ML' },
  { name: 'Turf.js', category: 'Spatial Analysis' },
  { name: 'Flask', category: 'Backend' },
  { name: 'OpenCV', category: 'Vision' },
  { name: 'Socket.io', category: 'Real-Time' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'C++', category: 'Language' },
  { name: 'Expo SDK', category: 'Mobile' },
  { name: 'OSRM Routing', category: 'Navigation' },
];

export default function TagTicker() {
  return (
    <aside
      className="relative w-full py-5 border-y border-[#262626] bg-[#06110c]/90 backdrop-blur-sm overflow-hidden"
      aria-label="Core technologies and domains ticker"
    >
      {/* Soft gradient edge masks for smooth fade in/out */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#06110c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#06110c] to-transparent z-10 pointer-events-none" />

      {/* Track container with pause-on-hover and pause-on-focus-within */}
      <div className="flex w-full select-none overflow-hidden">
        <div className="animate-ticker pause-hover flex items-center gap-3">
          {/* First run */}
          {tickerItems.map((item, index) => (
            <a
              key={`ticker-1-${item.name}-${index}`}
              href="#skills"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#9a9aab] hover:text-[#ffffff] hover:border-[#a31c1b] hover:bg-[#a31c1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] transition-all duration-200 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b] group-hover:bg-[#ffffff] transition-colors" />
              <span className="font-medium text-[#e2e2ec] group-hover:text-[#ffffff]">{item.name}</span>
              <span className="text-[10px] text-[#707080] group-hover:text-white/80 uppercase tracking-wider hidden sm:inline">
                {item.category}
              </span>
            </a>
          ))}

          {/* Duplicate set for completely seamless, unbroken infinite loop */}
          {tickerItems.map((item, index) => (
            <a
              key={`ticker-2-${item.name}-${index}`}
              href="#skills"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#9a9aab] hover:text-[#ffffff] hover:border-[#a31c1b] hover:bg-[#a31c1b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] transition-all duration-200 group"
              aria-hidden="true"
              tabIndex={-1}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b] group-hover:bg-[#ffffff] transition-colors" />
              <span className="font-medium text-[#e2e2ec] group-hover:text-[#ffffff]">{item.name}</span>
              <span className="text-[10px] text-[#707080] group-hover:text-white/80 uppercase tracking-wider hidden sm:inline">
                {item.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

