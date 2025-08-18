'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
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
                onClick={closeMobileMenu}
              >
                PM Portfolio
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
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

            {/* Mobile menu button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:hidden"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={toggleMobileMenu}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 min-w-[44px] min-h-[44px] p-2"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: 45 } : { rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 flex flex-col justify-center items-center"
                >
                  <motion.span
                    animate={
                      isMobileMenuOpen
                        ? { rotate: 90, y: 0 }
                        : { rotate: 0, y: -2 }
                    }
                    transition={{ duration: 0.2 }}
                    className="block w-4 h-0.5 bg-gray-700 mb-1"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block w-4 h-0.5 bg-gray-700 mb-1"
                  />
                  <motion.span
                    animate={
                      isMobileMenuOpen
                        ? { rotate: -90, y: 0 }
                        : { rotate: 0, y: 2 }
                    }
                    transition={{ duration: 0.2 }}
                    className="block w-4 h-0.5 bg-gray-700"
                  />
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[80vw] bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <span className="font-bold text-lg text-gray-900">Menu</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={closeMobileMenu}
                    className="min-w-[44px] min-h-[44px] p-2"
                    aria-label="Close mobile menu"
                  >
                    <motion.div
                      initial={{ rotate: 45 }}
                      className="w-5 h-5 flex items-center justify-center"
                    >
                      <span className="block w-4 h-0.5 bg-gray-700 rotate-45 absolute" />
                      <span className="block w-4 h-0.5 bg-gray-700 -rotate-45 absolute" />
                    </motion.div>
                  </Button>
                </div>

                {/* Mobile menu links */}
                <nav className="flex flex-col flex-1 p-6 space-y-4">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-3 border-b border-gray-100 min-h-[44px] flex items-center"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-3 border-b border-gray-100 min-h-[44px] flex items-center"
                    onClick={closeMobileMenu}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-3 border-b border-gray-100 min-h-[44px] flex items-center"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 min-h-[44px]"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
