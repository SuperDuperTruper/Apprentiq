'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Developer',
    company: 'TechCorp',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content: 'This tool has completely transformed how I write code. The AI suggestions are incredibly accurate and have significantly improved my productivity.',
  },
  {
    name: 'James Wilson',
    role: 'Full Stack Engineer',
    company: 'StartupX',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    content: "The real-time collaboration features are game-changing. My team's productivity has increased by 40% since we started using this platform.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Developer',
    company: 'InnovateHub',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    content: 'The debugging tools are exceptional. What used to take hours now takes minutes. This is a must-have for any serious development team.',
  },
];

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Trusted by Developers
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what developers around the world are saying about our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-purple-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 