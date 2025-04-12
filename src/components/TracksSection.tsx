'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaLeaf, FaMoneyBillWave } from 'react-icons/fa';

const tracks = [
  {
    id: 'healthtech',
    title: 'HealthTech',
    icon: <FaHeartbeat className="w-6 h-6" />,
    color: 'text-neon-cyan',
    borderColor: 'border-neon-cyan',
    hoverGlow: 'group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]',
    description: 'Develop innovative solutions for healthcare challenges, from telemedicine apps to wearable health tech and AI diagnostic tools.',
    image: 'https://ext.same-assets.com/844291147/2750879449.png',
  },
  {
    id: 'edtech',
    title: 'EdTech',
    icon: <FaGraduationCap className="w-6 h-6" />,
    color: 'text-neon-blue',
    borderColor: 'border-neon-blue',
    hoverGlow: 'group-hover:shadow-[0_0_15px_rgba(100,200,255,0.3)]',
    description: 'Create platforms and tools that revolutionize learning, from interactive learning environments to personalized education solutions.',
    image: 'https://ext.same-assets.com/844291147/3625480128.png',
  },
  {
    id: 'sustainable',
    title: 'Sustainable Development',
    icon: <FaLeaf className="w-6 h-6" />,
    color: 'text-neon-yellow',
    borderColor: 'border-neon-yellow',
    hoverGlow: 'group-hover:shadow-[0_0_15px_rgba(255,255,0,0.3)]',
    description: 'Build solutions addressing environmental challenges, climate change, clean energy, waste management, and sustainable living.',
    image: 'https://ext.same-assets.com/844291147/738489222.png',
  },
  {
    id: 'fintech',
    title: 'FinTech',
    icon: <FaMoneyBillWave className="w-6 h-6" />,
    color: 'text-neon-pink',
    borderColor: 'border-neon-pink',
    hoverGlow: 'group-hover:shadow-[0_0_15px_rgba(255,0,255,0.3)]',
    description: 'Innovate in financial technology, from digital payment systems to blockchain applications, financial inclusion solutions, and more.',
    image: 'https://ext.same-assets.com/844291147/2317696455.png',
  },
];

export function TracksSection() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  return (
    <section id="tracks" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6TTM0IDI5aDR2MWgtNHYtMXptMC0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 pointer-events-none"></div>

      {/* Glowing circle background elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-neon-cyan/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-neon-pink/5 filter blur-3xl"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Tracks
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Choose your innovation pathway from these four cutting-edge tracks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${activeTrack === track.id ? 'scale-[1.02]' : ''}`}
              onMouseEnter={() => setActiveTrack(track.id)}
              onMouseLeave={() => setActiveTrack(null)}
            >
              <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm ${track.borderColor} ${activeTrack === track.id ? 'border-2' : 'border'} rounded-xl transition-all duration-300 ${track.hoverGlow}`}>
                {/* Track image as full background */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover animation gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-b from-transparent via-${track.color.replace('text-', '')} to-transparent`}></div>

                {/* Scanline effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 overflow-hidden pointer-events-none">
                  <div className="w-full h-2 bg-white/30 animate-scanline"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className={`${track.color} mb-4 flex justify-between items-center`}>
                  <div className="p-2 rounded-md bg-black/50 backdrop-blur-sm">
                    {track.icon}
                  </div>

                  {/* Small circuit pattern */}
                  <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-30">
                    <path d="M10 10h5v1h-5v-1zm12 0h5v1h-5v-1zm12 0h5v1h-5v-1zM10 20h5v1h-5v-1zm12 0h5v1h-5v-1zm12 0h5v1h-5v-1zM10 30h5v1h-5v-1zm12 0h5v1h-5v-1zm12 0h5v1h-5v-1z" className={track.color.replace('text-', 'fill-')}/>
                  </svg>
                </div>

                <h3 className={`text-xl md:text-2xl font-orbitron font-bold mb-3 ${track.color} transition-transform duration-300 group-hover:translate-x-1`}>
                  {track.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 transition-all duration-300 group-hover:text-gray-300">
                  {track.description}
                </p>

                {/* Arrow indicator that appears on hover */}
                <div className="mt-auto pt-4">
                  <motion.div
                    className={`w-8 h-8 rounded-full ${track.borderColor} border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <svg className={track.color} width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
