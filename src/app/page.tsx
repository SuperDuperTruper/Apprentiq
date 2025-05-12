import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
