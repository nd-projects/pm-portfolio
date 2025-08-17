'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/"
              className="font-bold text-xl text-gray-900 hover:text-gray-700 transition-colors"
            >
              PM Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/case-studies"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Blog
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Contact
            </Button>
          </motion.div>

          {/* Mobile menu button - placeholder for future mobile menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden"
          >
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
