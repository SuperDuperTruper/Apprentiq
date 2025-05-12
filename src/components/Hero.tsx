'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonStyles, containerStyles, textStyles, backgroundStyles } from '@/styles/shared';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        className={backgroundStyles.glow}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className={textStyles.gradient}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Apprentiq
          </motion.span>
          <br />
          <motion.span 
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your AI Learning Partner
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className={textStyles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Experience personalized learning powered by artificial intelligence. 
          Master new skills with adaptive guidance and real-time feedback.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link 
            href="/dashboard" 
            className={`${buttonStyles.primary} hover:scale-105 transition-transform`}
          >
            Get Started
          </Link>
          <Link
            href="/demo"
            className={`${buttonStyles.glass} hover:scale-105 transition-transform`}
          >
            Try Demo
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <motion.div 
            className={`${containerStyles.card} hover:scale-105 transition-transform`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="text-4xl font-bold text-gradient mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              100K+
            </motion.div>
            <div className={textStyles.body}>Active Users</div>
          </motion.div>
          <motion.div 
            className={`${containerStyles.card} hover:scale-105 transition-transform`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="text-4xl font-bold text-gradient mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              50+
            </motion.div>
            <div className={textStyles.body}>Learning Paths</div>
          </motion.div>
          <motion.div 
            className={`${containerStyles.card} hover:scale-105 transition-transform`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="text-4xl font-bold text-gradient mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              95%
            </motion.div>
            <div className={textStyles.body}>Success Rate</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 