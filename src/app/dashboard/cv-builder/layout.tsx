import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV Builder | ApprentIQ',
  description: 'Create professional CVs with expert templates',
};

export default function CVBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 