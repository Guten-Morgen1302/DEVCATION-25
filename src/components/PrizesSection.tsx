'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGift, FaAward, FaMedal } from 'react-icons/fa';

const prizes = [
  {
    icon: <FaTrophy className="w-8 h-8" />,
    title: 'Hack & Solve Winners',
    description: 'Cash Prize with swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons.',
    color: 'neon-yellow',
    glowColor: 'from-yellow-400 to-amber-500',
    delay: 0,
  },
  {
    icon: <FaGift className="w-8 h-8" />,
    title: 'Mini Event Winners',
    description: 'Goodies, certificates, social media shoutouts, unstop coupons.',
    color: 'neon-purple',
    glowColor: 'from-purple-400 to-fuchsia-500',
    delay: 0.1,
  },
  {
    icon: <FaAward className="w-8 h-8" />,
    title: 'All Finalists',
    description: 'Exciting goodies, certificates, unstop coupons.',
    color: 'neon-cyan',
    glowColor: 'from-cyan-400 to-blue-500',
    delay: 0.2,
  },
  {
    icon: <FaMedal className="w-8 h-8" />,
    title: 'All Participants',
    description: 'Certificates and 50% unstop coupons and exclusive discount vouchers from IB for all.',
    color: 'neon-pink',
    glowColor: 'from-pink-400 to-rose-500',
    delay: 0.3,
  },
];

const sponsorLogos = [
  {
    name: 'RC IGDTUW',
    logo: 'https://ext.same-assets.com/844291147/190227351.png',
    url: 'https://sites.google.com/view/rcigdtuw/home'
  },
  {
    name: 'Unstop',
    logo: 'https://ext.same-assets.com/844291147/190227351.png',
    url: 'https://unstop.com/'
  },
  {
    name: 'GeekRoom',
    logo: 'https://ext.same-assets.com/844291147/190227351.png',
    url: 'https://www.geekroom.in/'
  },
  {
    name: 'Sprint India',
    logo: 'https://ext.same-assets.com/844291147/190227351.png',
    url: 'https://www.sprintindia.work/about-us/'
  },
  {
    name: 'Interview Buddy',
    logo: 'https://ext.same-assets.com/844291147/190227351.png',
    url: 'https://dev.interviewbuddy.in/'
  },
  {
    name: 'CodeCrafters',
    logo: 'https://ext.same-assets.com/844291147/190227351.png',
    url: 'https://codecrafters.io/'
  },
];

export function PrizesSection() {
  return (
    <>
      {/* Prizes Section */}
      <section id="prizes" className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="text-neon-yellow neon-text">Prizes</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              Win exciting rewards for your innovation and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: prize.delay }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative h-full"
              >
                {/* Card background with glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md rounded-xl border border-gray-800 group-hover:border-gray-700 overflow-hidden transition-colors duration-300">

                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${prize.glowColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Glowing corner effect */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-[100px]"></div>
                </div>

                {/* Card content */}
                <div className="relative p-8 h-full flex flex-col">
                  <div className={`text-${prize.color} mb-6 relative`}>
                    {/* Icon with glowing effect */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-${prize.color}/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      {prize.icon}
                    </div>
                  </div>

                  <h3 className={`text-xl font-orbitron font-bold mb-4 text-${prize.color} group-hover:translate-x-1 transition-transform duration-300`}>
                    {prize.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {prize.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${prize.color} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="text-neon-cyan neon-text-cyan">Sponsors</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              Meet the companies powering our hackathon experience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sponsorLogos.map((sponsor, index) => (
              <motion.a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)"
                }}
                className="bg-black/20 border border-gray-800 rounded-lg p-4 flex items-center justify-center aspect-video group hover:border-neon-cyan/50 transition-all duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 w-auto group-hover:brightness-110 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
