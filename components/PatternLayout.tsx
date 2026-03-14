import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export default function PatternLayout({
  title,
  children,
}: Props) {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      <div className="space-y-10">{children}</div>
    </main>
  );
}
