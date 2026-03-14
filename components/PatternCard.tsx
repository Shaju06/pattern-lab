import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function PatternCard({
  title,
  description,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-xl hover:-translate-y-1 hover:ring-indigo-500/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-sky-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100 group-hover:bg-indigo-600 transition-colors duration-300">
          <svg className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
      <div className="relative z-10 mt-6 flex items-center text-sm font-semibold text-indigo-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
        Explore Pattern 
        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
