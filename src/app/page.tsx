import { Hero } from '@/components/sections/Hero';
import { Timeline } from '@/components/sections/Timeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Timeline />
    </main>
  );
}
