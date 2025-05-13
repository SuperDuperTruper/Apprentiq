import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interview Simulator | ApprentIQ',
  description: 'Practice your interview skills with real-time feedback and AI-powered analysis.',
};

export default function InterviewSimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-900">
      {children}
    </main>
  );
} 