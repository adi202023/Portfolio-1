import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aditya S. Sheregar — AI-ML Engineer & Full Stack Developer',
  description:
    'Portfolio of Aditya S. Sheregar. Computer Science student at Dayananda Sagar University building intelligent systems, privacy-first infrastructure, and scalable full-stack web applications.',
  keywords: [
    'Aditya Sheregar',
    'Aditya S. Sheregar',
    'AI-ML Engineer',
    'Full Stack Developer',
    'Machine Learning',
    'React',
    'Next.js',
    'Python',
    'Dayananda Sagar University',
    'Saarthi',
    'Portfolio',
  ],
  authors: [{ name: 'Aditya S. Sheregar' }],
  openGraph: {
    title: 'Aditya S. Sheregar — AI-ML Engineer & Full Stack Developer',
    description:
      'Passionate Full Stack Developer and Machine Learning Engineer. Explore projects in privacy-first security, blockchain voting, and mobile platforms.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Aditya S. Sheregar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya S. Sheregar — AI-ML Engineer & Full Stack Developer',
    description:
      'Full Stack Developer & AI-ML Engineer building robust, intelligent systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased bg-[#171717] text-[#e8e8ed] font-sans overflow-x-hidden selection:bg-[#a31c1b] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
