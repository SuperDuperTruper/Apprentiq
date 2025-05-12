'use client';

import Link from 'next/link';

const courseTools = [
  {
    title: 'Interview Simulator',
    description: 'Practice technical interviews with AI-powered feedback',
    icon: '🎯',
    href: '/dashboard/courses/interview-sim',
    color: 'from-[#00ff94] to-[#00b8ff]',
  },
  {
    title: 'AI Tutor',
    description: 'Get personalized learning assistance and instant answers',
    icon: '🤖',
    href: '/dashboard/courses/ai-tutor',
    color: 'from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    title: 'CV Builder',
    description: 'Create and optimize your professional resume',
    icon: '📝',
    href: '/dashboard/courses/cv-builder',
    color: 'from-[#4158D0] to-[#C850C0]',
  },
  {
    title: 'Numerical Reasoning',
    description: 'Practice data interpretation and financial analysis',
    icon: '📊',
    href: '/dashboard/courses/numerical',
    color: 'from-[#43E97B] to-[#38F9D7]',
  },
  {
    title: 'Logical Reasoning',
    description: 'Master pattern recognition and abstract thinking',
    icon: '🧩',
    href: '/dashboard/courses/logical',
    color: 'from-[#FA8BFF] to-[#2BD2FF]',
  },
  {
    title: 'Situational Judgment',
    description: 'Handle work scenarios and decision-making challenges',
    icon: '⚡',
    href: '/dashboard/courses/situational',
    color: 'from-[#FEE140] to-[#FA709A]',
  },
];

export default function CoursesPage() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Learning Hub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group block"
            >
              <div className="bg-gray-800 rounded-lg p-6 h-full hover:bg-gray-700 transition-all duration-200 border border-gray-700 hover:border-gray-600">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00ff94] transition-colors duration-200">
                  {tool.title}
                </h3>
                <p className="text-gray-400">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-[#00ff94] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Get Started</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white mb-4">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['System Design Practice', 'Mock Assessments', 'Peer Reviews'].map((title) => (
              <div
                key={title}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 opacity-60"
              >
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl mb-4">
                  🔜
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400">Coming soon...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 