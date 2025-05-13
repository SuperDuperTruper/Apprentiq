'use client';

import NumericalTest from '@/components/NumericalTest/NumericalTest';
import { motion } from 'framer-motion';
import { backgroundStyles, containerStyles } from '@/styles/shared';

export default function NumericalTestPage() {
  return (
    <div className="relative min-h-screen bg-black pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black" />
      <motion.div 
        className={backgroundStyles.gradient}
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className={backgroundStyles.glowSecondary}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className={`${containerStyles.content} relative z-10 w-full max-w-4xl mx-auto px-4`}>
          <NumericalTest />
        </div>
      </div>
    </div>
  );
} 