import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pattern Playground',
  description: 'Learn design patterns interactively',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-500">
                PatternLab
              </span>
            </div>
            <nav className="flex gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-indigo-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="https://github.com/Shaju06/pattern-lab"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium hover:text-indigo-600 transition-colors"
              >
                GitHub
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 flex flex-col relative">
          {children}
        </main>
      </body>
    </html>
  );
}
