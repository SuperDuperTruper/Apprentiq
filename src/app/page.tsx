import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="bg-black">
      <div className="space-y-24 md:space-y-32">
        <Hero />
        <Features />
        <CTA />
      </div>
    </div>
  );
}
