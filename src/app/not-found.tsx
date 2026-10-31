import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#e8e8ed] flex flex-col items-center justify-center px-6 text-center selection:bg-[#a31c1b] selection:text-white">
      <span className="font-mono text-xs text-[#a31c1b] uppercase tracking-widest mb-2 font-semibold">404 // Error</span>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-[#f4f4f7]">Page Not Found</h1>
      <p className="text-sm text-[#9a9aab] max-w-md mb-8">
        The requested transmission point could not be located in the current sector.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-[#a31c1b] text-white font-mono font-bold text-xs rounded-sm hover:bg-[#bd2423] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b]"
      >
        Return to Folio
      </Link>
    </div>
  );
}

