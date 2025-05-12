'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Brain, 
  Users, 
  MessageSquare, 
  Bot, 
  BarChart, 
  Trophy,
  Clock,
  FileText,
  Sparkles
} from 'lucide-react';

interface FeatureCard {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<any>;
  link: string;
  color: string;
  gradient: string;
}

const features: FeatureCard[] = [
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
    link: "/dashboard/courses/numerical",
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
    link: "/dashboard/courses/logical",
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
    link: "/dashboard/courses/situational",
    color: "text-green-500",
    gradient: "from-green-600/20 to-green-800/20"
  },
  {
    title: "Interview Simulator",
    description: "Practice common interview questions with AI-powered feedback",
    benefits: [
      "Get instant feedback on your responses",
      "Practice with industry-specific questions",
      "Improve your communication clarity",
      "Build interview confidence"
    ],
    icon: MessageSquare,
    link: "/dashboard/courses/interview-sim",
    color: "text-yellow-500",
    gradient: "from-yellow-600/20 to-yellow-800/20"
  },
  {
    title: "AI Tutor",
    description: "Get personalized learning support and explanations",
    benefits: [
      "Receive detailed explanations for complex topics",
      "Get step-by-step problem-solving guidance",
      "Access 24/7 learning support",
      "Learn at your own pace"
    ],
    icon: Bot,
    link: "/dashboard/courses/ai-tutor",
    color: "text-cyan-500",
    gradient: "from-cyan-600/20 to-cyan-800/20"
  },
  {
    title: "CV Builder",
    description: "Create professional CVs with expert templates and guidance",
    benefits: [
      "Choose from 10 professional templates",
      "Get industry-specific formatting",
      "Export to PDF instantly",
      "Tailored for different career stages"
    ],
    icon: FileText,
    link: "/dashboard/courses/cv-builder",
    color: "text-indigo-500",
    gradient: "from-indigo-600/20 to-indigo-800/20"
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
    <div className="p-8 min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-8"
      >
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
        </div>
        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="flex items-center p-4">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Practice Time</p>
                  <p className="text-lg font-semibold text-white">2.5 hrs</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="flex items-center p-4">
                <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Tests Completed</p>
                  <p className="text-lg font-semibold text-white">12</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="flex items-center p-4">
                <BarChart className="w-5 h-5 text-green-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Avg. Score</p>
                  <p className="text-lg font-semibold text-white">76%</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={item}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={feature.link}>
              <Card className={`h-full cursor-pointer border-gray-700 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm hover:shadow-lg transition-all duration-300 group`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${feature.color.replace('text', 'bg')}/10 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-white group-hover:text-opacity-90">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <span className={`w-1.5 h-1.5 rounded-full ${feature.color.replace('text-', 'bg-')} mr-2`} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-4 bg-gradient-to-r ${feature.gradient.replace('/20', '')} hover:opacity-90 text-white shadow-md group-hover:shadow-lg transition-all duration-300`}
                  >
                    Start Practice
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 