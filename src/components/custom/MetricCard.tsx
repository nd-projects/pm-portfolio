'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
    >
      <div className="text-3xl font-bold text-gray-900">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600 mt-1 font-medium">{label}</div>
    </motion.div>
  );
}
