'use client';

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FaArrowRight } from 'react-icons/fa';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/gdsc_igdtuw' },
    { icon: FaFacebook, url: 'https://www.facebook.com/GDSCIGDTUW/' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/company/dscigdtuw/mycompany/' },
    { icon: FaInstagram, url: 'https://www.instagram.com/gdsc_igdtuw' },
    { icon: FaYoutube, url: 'https://www.youtube.com/@DSCIGDTUW' },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ['#0ff', '#f0f', '#88f'],
            },
            links: {
              color: '#88f',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-10">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent animate-scanline"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 mt-16 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h2 className="text-2xl font-orbitron font-medium text-neon-cyan neon-text-cyan">Welcome to</h2>
              <div className="glitch-effect">
                <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white">
                  <span className="neon-text">DEV</span>
                  <span className="text-neon-cyan neon-text-cyan">CATION</span>
                  <span className="text-neon-pink neon-text-pink">'25</span>
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg max-w-2xl"
            >
              A week-long technical festival organized by Google Developer Groups
              that celebrates diversity in the TechForGood Domain. Join us for a futuristic
              hackathon experience!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-medium py-6 px-8 rounded-md neon-border neon-border-cyan group">
                <a href="#register" className="flex items-center space-x-2">
                  <span>Register Now</span>
                  <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>

              <Button asChild variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 py-6 px-8 rounded-md">
                <a href="#about">Learn More</a>
              </Button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex space-x-4 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Hero Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative flex justify-center">
              <div className="w-full h-full max-w-md aspect-square rounded-full bg-neon-purple/20 flex items-center justify-center p-6 backdrop-blur-sm animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-neon-pink/10 backdrop-blur-sm flex items-center justify-center p-6">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 backdrop-blur-sm border border-white/10 flex items-center justify-center p-4">
                    <h2 className="text-5xl font-orbitron font-bold animate-float">
                      <span className="text-neon-cyan neon-text-cyan">DEV</span>
                      <span className="text-neon-pink neon-text-pink">'25</span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-neon-purple/30 rounded-full blur-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-8 -left-8 w-20 h-20 bg-neon-cyan/30 rounded-full blur-md"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 -right-4 w-12 h-12 bg-neon-pink/30 rounded-full blur-md"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
