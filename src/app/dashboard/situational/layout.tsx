import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Situational Judgement Test | ApprentIQ',
  description: 'Test your workplace decision-making skills and professional judgment',
};

export default function SituationalTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 