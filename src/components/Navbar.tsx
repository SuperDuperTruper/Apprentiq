'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonStyles, textStyles } from '@/styles/shared';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Dashboard button on the right */}
          <div className="ml-auto">
            <Link 
              href="/dashboard" 
              className={`${buttonStyles.primary} px-8 py-2.5 min-w-[120px] text-center hover:scale-105 transition-all duration-300 animate-glow`}
            >
              Dashboard
            </Link>
          </div>
          
          {/* Centered logo */}
          {!isHome && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link 
                href="/" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff94] via-[#00ffff] to-[#00b8ff] text-xl font-bold opacity-100 hover:opacity-60 transition-opacity duration-300"
              >
                ApprentIQ
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 