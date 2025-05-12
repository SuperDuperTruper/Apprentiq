'use client';

import { useState } from 'react';
import NumericalTest from '@/components/NumericalTest/NumericalTest';

export default function NumericalTestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Numerical Reasoning Test</h1>
      <div className="bg-gray-800 rounded-lg">
        <NumericalTest />
      </div>
    </div>
  );
} 