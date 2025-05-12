import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tutor | ApprentIQ',
  description: 'Get personalized learning assistance with our AI tutor.',
};

export default function AITutorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 overflow-hidden bg-gray-900">
      {children}
    </main>
  );
} 