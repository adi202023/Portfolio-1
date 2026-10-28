import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070709] text-[#e8e8ed] flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs text-[#d4ff32] uppercase tracking-widest mb-2">404 // Error</span>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-[#f4f4f7]">Page Not Found</h1>
      <p className="text-sm text-[#78788a] max-w-md mb-8">
        The requested transmission point could not be located in the current sector.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-[#d4ff32] text-[#070709] font-mono font-bold text-xs rounded-sm hover:bg-[#e8ff6b] transition-colors"
      >
        Return to Folio
      </Link>
    </div>
  );
}

