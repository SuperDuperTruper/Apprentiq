'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonStyles, textStyles } from '@/styles/shared';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationLinks = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: '🏠',
  },
  {
    name: 'Interview Simulator',
    href: '/dashboard/interview-simulator',
    icon: '💬',
  },
  {
    name: 'AI Tutor',
    href: '/dashboard/ai-tutor',
    icon: '🤖',
  },
  {
    name: 'Numerical Test',
    href: '/dashboard/numerical',
    icon: '🔢',
  },
  {
    name: 'Logical Test',
    href: '/dashboard/logical',
    icon: '🧩',
  },
  {
    name: 'Situational Test',
    href: '/dashboard/situational',
    icon: '🤝',
  },
  {
    name: 'CV Builder',
    href: '/dashboard/cv-builder',
    icon: '📄',
  },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 left-0 h-full w-64 bg-black border-r border-white/10 z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10">
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors ml-auto block"
              >
                ✕
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 space-y-2">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 w-1 h-8 bg-gradient-to-b from-[#00ff94] to-[#00b8ff] rounded-r"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/settings"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span className="text-xl">⚙️</span>
                  <span>Settings</span>
                </Link>
                <Link
                  href="/help"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span className="text-xl">❓</span>
                  <span>Help & Support</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 