'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FaStar, FaCode, FaUsers, FaUserAstronaut } from 'react-icons/fa';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  iconColor: string;
}

const stats = [
  { icon: <FaStar />, value: 4.6, label: 'Hacker rating', suffix: '+', delay: 0, iconColor: 'text-neon-yellow' },
  { icon: <FaCode />, value: 300, label: 'Hacks', suffix: '+', delay: 0.2, iconColor: 'text-neon-cyan' },
  { icon: <FaUsers />, value: 25, label: 'Speakers and mentors', suffix: '+', delay: 0.4, iconColor: 'text-neon-purple' },
  { icon: <FaUserAstronaut />, value: 500, label: 'Hackers', suffix: '+', delay: 0.6, iconColor: 'text-neon-pink' },
];

// Animated counter component
function StatCard({ icon, value, label, suffix = '', delay, iconColor }: StatCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // Duration in ms
      const increment = end / (duration / 50); // Update every 50ms

      // Don't start immediately, respect the delay
      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          start += increment;
          if (start > end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(start);
          }
        }, 50);

        return () => clearInterval(counter);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="w-full"
    >
      <Card className="h-full bg-black/40 backdrop-blur-gradient border-neon-blue/20 overflow-hidden relative group neon-border p-6 flex flex-col items-center justify-center">
        {/* Animated background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Top corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute rotate-45 bg-gradient-to-br from-neon-cyan/30 to-neon-blue/10 w-16 h-16 -top-8 -right-8"></div>
        </div>

        {/* Stats icon */}
        <div className={`text-3xl mb-2 ${iconColor}`}>
          {icon}
        </div>

        {/* Stats value with animated counter */}
        <h3 className="text-4xl font-orbitron font-bold text-white neon-text">
          {Number.isInteger(count) ? count.toFixed(0) : count.toFixed(1)}
          <span className="text-neon-cyan">{suffix}</span>
        </h3>

        {/* Stats label */}
        <p className="text-gray-400 text-sm uppercase tracking-wide mt-1">{label}</p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan/30 via-neon-purple/30 to-neon-pink/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </Card>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
