'use client';

import Link from 'next/link';
import { buttonStyles, containerStyles, textStyles, backgroundStyles } from '@/styles/shared';

export default function CTA() {
  return (
    <section className={containerStyles.section}>
      {/* Background effects */}
      <div className={backgroundStyles.gradient} />
      <div className={backgroundStyles.glow} />
      <div className={backgroundStyles.glowSecondary} />

      <div className={containerStyles.content}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={textStyles.heading}>
            Ready to <span className={textStyles.gradient}>Transform</span> Your Learning Journey?
          </h2>
          
          <p className={textStyles.subheading}>
            Join thousands of learners who have accelerated their growth with our AI-powered platform.
            Start your journey today with a free trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/signup"
              className={buttonStyles.primary}
            >
              Start Free Trial
            </Link>
            
            <Link
              href="/contact"
              className={buttonStyles.secondary}
            >
              Contact Sales
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16">
            <p className="text-sm text-gray-400 mb-6">Trusted by leading companies worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
              {/* Replace these with actual company logos */}
              <div className="h-8 w-32 bg-white/10 rounded" />
              <div className="h-8 w-32 bg-white/10 rounded" />
              <div className="h-8 w-32 bg-white/10 rounded" />
              <div className="h-8 w-32 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 