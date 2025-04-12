'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCalendarAlt, FaCode, FaLaptopCode, FaUsersCog, FaTrophy } from 'react-icons/fa';

// Timeline events data
const timelineEvents = [
  {
    icon: <FaCalendarAlt className="w-5 h-5" />,
    date: 'April 4th, 2025',
    title: 'Opening Ceremony & Registration',
    description: 'Submission for all Mini Events and the Registration for the Hackathon Starts',
    color: 'neon-cyan',
  },
  {
    icon: <FaCode className="w-5 h-5" />,
    date: 'April 8th, 2025',
    title: 'Hacking Period Starts!',
    description: 'Get ready to code, create, and innovate!',
    color: 'neon-purple',
  },
  {
    icon: <FaLaptopCode className="w-5 h-5" />,
    date: 'April 12th, 2025',
    title: 'Hacking Period Ends',
    description: 'Make sure to wrap up your projects and prepare for submission.',
    color: 'neon-pink',
  },
  {
    icon: <FaUsersCog className="w-5 h-5" />,
    date: 'April 13th, 2025',
    title: 'Mentorship Round Starts',
    description: 'Providing mentorship and feedback for every submitted project.',
    color: 'neon-blue',
  },
  {
    icon: <FaTrophy className="w-5 h-5" />,
    date: 'April 15th, 2025',
    title: 'Final pitching and closing ceremony',
    description: "Don't miss out on this memorable event!",
    color: 'neon-yellow',
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the backdrop
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="timeline" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-neon-grid bg-[length:40px_40px] opacity-5 z-0 animate-cyberpunk-background"></div>

      {/* Floating backdrop elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-neon-blue/10 filter blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-neon-purple/10 filter blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
      />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Mark your calendar for these key dates in the Devcation'25 journey
          </p>
        </motion.div>

        {/* Timeline content */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"></div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Content side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`p-6 bg-black/40 backdrop-blur-gradient border border-${event.color}/20 rounded-lg shadow-lg relative overflow-hidden group`}
                >
                  {/* Corner glitch effect */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-${event.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 skew-x-12 -translate-x-8 -translate-y-8`}></div>

                  {/* Date badge */}
                  <span className="inline-block px-3 py-1 text-xs text-white bg-black/60 rounded-full mb-3 backdrop-blur-sm">
                    {event.date}
                  </span>

                  <h3 className={`text-xl font-orbitron font-bold mb-2 text-${event.color} group-hover:translate-x-1 transition-transform duration-300`}>
                    {event.title}
                  </h3>

                  <p className="text-gray-300">
                    {event.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-${event.color}/50 w-0 group-hover:w-full transition-all duration-500`}></div>
                </motion.div>
              </div>

              {/* Center icon */}
              <div className="w-2/12 flex justify-center relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-black border-2 border-${event.color} text-${event.color} relative`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Pulsing glow effect */}
                  <div className={`absolute inset-0 rounded-full bg-${event.color}/20 animate-pulse-glow`}></div>

                  {/* Icon */}
                  {event.icon}
                </motion.div>
              </div>

              {/* Empty side (for alignment) */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
