import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logical Reasoning Test | ApprentIQ',
  description: 'Enhance your abstract thinking and pattern recognition abilities',
};

export default function LogicalTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 