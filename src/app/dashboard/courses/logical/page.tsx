'use client';

import { useState } from 'react';
import LogicalTest from '@/components/LogicalTest/LogicalTest';

export default function LogicalTestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Logical Reasoning Test</h1>
      <div className="bg-gray-800 rounded-lg">
        <LogicalTest />
      </div>
    </div>
  );
} 