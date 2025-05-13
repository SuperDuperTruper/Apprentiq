'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, FileText, Calculator, Brain, Users } from 'lucide-react';

const features = [
  {
    title: "Interview Simulator",
    description: "Practice technical interviews with AI-powered feedback",
    benefits: [
      "Get instant feedback on your responses",
      "Practice with industry-specific questions",
      "Improve your communication clarity",
      "Build interview confidence"
    ],
    icon: MessageSquare,
    link: "/dashboard/interview-sim",
    color: "text-yellow-500",
    gradient: "from-yellow-600/20 to-yellow-800/20"
  },
  {
    title: "AI Tutor",
    description: "Get personalized learning assistance and instant answers",
    benefits: [
      "Receive detailed explanations for complex topics",
      "Get step-by-step problem-solving guidance",
      "Access 24/7 learning support",
      "Learn at your own pace"
    ],
    icon: Bot,
    link: "/dashboard/ai-tutor",
    color: "text-cyan-500",
    gradient: "from-cyan-600/20 to-cyan-800/20"
  },
  {
    title: "CV Builder",
    description: "Create and optimize your professional resume",
    benefits: [
      "Choose from 10 professional templates",
      "Get industry-specific formatting",
      "Export to PDF instantly",
      "Tailored for different career stages"
    ],
    icon: FileText,
    link: "/dashboard/cv-builder",
    color: "text-indigo-500",
    gradient: "from-indigo-600/20 to-indigo-800/20"
  },
  {
    title: "Numerical Reasoning",
    description: "Test your mathematical and analytical skills with real-world scenarios",
    benefits: [
      "Practice data interpretation and analysis",
      "Work with graphs, charts, and numerical information",
      "Improve problem-solving speed and accuracy",
      "Learn to handle time-pressured calculations"
    ],
    icon: Calculator,
    link: "/dashboard/numerical",
    color: "text-blue-500",
    gradient: "from-blue-600/20 to-blue-800/20"
  },
  {
    title: "Logical Reasoning",
    description: "Enhance your abstract thinking and pattern recognition abilities",
    benefits: [
      "Master pattern completion challenges",
      "Develop sequence recognition skills",
      "Practice spatial reasoning",
      "Improve analogical thinking"
    ],
    icon: Brain,
    link: "/dashboard/logical",
    color: "text-purple-500",
    gradient: "from-purple-600/20 to-purple-800/20"
  },
  {
    title: "Situational Judgement",
    description: "Learn to handle workplace scenarios and professional interactions",
    benefits: [
      "Practice decision-making in work environments",
      "Develop conflict resolution strategies",
      "Improve time management skills",
      "Master professional communication"
    ],
    icon: Users,
    link: "/dashboard/situational",
    color: "text-green-500",
    gradient: "from-green-600/20 to-green-800/20"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Learning Hub</h1>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={item}>
                <Link
                  href={feature.link}
                  className="block h-full"
                >
                  <div className="bg-gray-800 rounded-lg p-6 h-full hover:bg-gray-700 transition-all duration-200 border border-gray-700 hover:border-gray-600">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
              </motion.div>
            );
          })}
        </motion.div>

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