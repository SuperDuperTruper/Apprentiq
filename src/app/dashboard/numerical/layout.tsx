import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Numerical Reasoning Test | ApprentIQ',
  description: 'Practice data interpretation and financial analysis with real-time feedback',
};

export default function NumericalTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 