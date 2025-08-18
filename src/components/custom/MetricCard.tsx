'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

interface MetricCardProps {
  label: string;
  value: number;
  suffix: string;
  delay?: number;
}

export function MetricCard({
  label,
  value,
  suffix,
  delay = 0,
}: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Memoize animation configuration
  const animationConfig = useMemo(
    () => ({
      increment: value / 50,
      interval: 30,
    }),
    [value]
  );

  // Optimized cleanup with useCallback
  const cleanupTimer = useCallback((timer: NodeJS.Timeout) => {
    clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const timer = setInterval(() => {
        start += animationConfig.increment;
        if (start > value) {
          setCount(value);
          cleanupTimer(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, animationConfig.interval);

      return () => cleanupTimer(timer);
    }
  }, [isInView, value, animationConfig, cleanupTimer]);

  // Memoize animation props
  const animationProps = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.5 },
      animate: isInView ? { opacity: 1, scale: 1 } : {},
      transition: { duration: 0.5, delay },
    }),
    [isInView, delay]
  );

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className="p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
    >
      <div className="text-2xl sm:text-3xl font-bold text-gray-900">
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
