'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MetricCard } from '@/components/custom/MetricCard';
import { Button } from '@/components/ui/button';

const metrics = [
  { label: 'Safety Coverage', value: 85, suffix: '%' },
  { label: 'Active Users', value: 212, suffix: '+' },
  { label: 'Products Shipped', value: 3, suffix: '' },
  { label: 'Years Experience', value: 8, suffix: '' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-12 max-w-7xl mx-auto pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight"
        >
          Technical Product Manager
          <br />
          <span className="text-blue-600">
            Building Developer Tools That Ship Safer Cars
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto md:mx-0"
        >
          8 years transforming how 200+ BMW engineers build, test, and deploy
          automotive software. Technical PM specializing in ADAS platforms and
          developer productivity tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto md:mx-0"
        >
          {metrics.map((metric, i) => (
            <MetricCard key={i} {...metric} delay={0.4 + i * 0.1} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link href="/case-studies">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 transition-colors px-8 py-3 text-base"
            >
              View Case Studies
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-black text-black hover:bg-black hover:text-white transition-colors px-8 py-3 text-base"
          >
            Download 1-Pager
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
