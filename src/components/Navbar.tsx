'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonStyles } from '@/styles/shared';

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Apprentiq
          </Link>
          <Link 
            href="/dashboard" 
            className={`${buttonStyles.glass} hover:scale-105 transition-transform`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
} 