import { Metadata } from 'next';
import SituationalTest from '@/components/SituationalTest/SituationalTest';

export const metadata: Metadata = {
  title: 'Situational Judgement Test | ApprentIQ',
  description: 'Test your workplace decision-making skills and professional judgment',
};

export default function SituationalPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <SituationalTest />
    </div>
  );
} 