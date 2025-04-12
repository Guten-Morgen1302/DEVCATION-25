'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

// Judges Data
const judges = [
  {
    name: 'Kartik Mathur',
    image: 'https://ext.same-assets.com/844291147/1743763944.svg',
    role: 'Lead Judge',
    linkedIn: 'https://www.linkedin.com/in/kartik-mathur/',
    bio: 'Experienced tech professional with expertise in system architecture and AI applications.'
  },
  {
    name: 'Vani Chitkara',
    image: 'https://ext.same-assets.com/844291147/1354271685.svg',
    role: 'Technical Judge',
    linkedIn: 'https://www.linkedin.com/in/vani-chitkara/',
    bio: 'Specialist in software engineering and emerging tech innovations.'
  },
  {
    name: 'Aarnav Jindal',
    image: 'https://ext.same-assets.com/844291147/395157150.svg',
    role: 'Industry Judge',
    linkedIn: 'https://www.linkedin.com/in/aarnavjindal/',
    bio: 'Industry leader focusing on market impact and business viability.'
  },
];

// Mentors Data
const mentors = [
  {
    name: 'Radhika Bansal',
    image: 'https://ext.same-assets.com/844291147/1443725800.svg',
    linkedIn: 'https://www.linkedin.com/in/radhika403/',
    expertise: 'Frontend Development'
  },
  {
    name: 'Sanidhya Goel',
    image: 'https://ext.same-assets.com/844291147/3114313562.svg',
    linkedIn: 'https://www.linkedin.com/in/sanidhyagoel18/',
    expertise: 'Machine Learning'
  },
  {
    name: 'Tejaswi Tyagi',
    image: 'https://ext.same-assets.com/844291147/409235749.svg',
    linkedIn: 'https://www.linkedin.com/in/tejaswi-tyagi/',
    expertise: 'UI/UX Design'
  },
  {
    name: 'Akanksha Jha',
    image: 'https://ext.same-assets.com/844291147/2781346206.svg',
    linkedIn: 'https://www.linkedin.com/in/akanksha-jha-8609a422a',
    expertise: 'Backend Development'
  },
  {
    name: 'Vikranth Udandarao',
    image: 'https://ext.same-assets.com/844291147/3225579771.svg',
    linkedIn: 'https://www.linkedin.com/in/vikranth-udandarao/',
    expertise: 'Cloud Computing'
  },
  {
    name: 'Rudra Pratap Dash',
    image: 'https://ext.same-assets.com/844291147/286459257.svg',
    linkedIn: 'https://www.linkedin.com/in/rudra-pratap-dash-b2ab16267/',
    expertise: 'DevOps'
  },
  {
    name: 'Aishvi Guleria',
    image: 'https://ext.same-assets.com/844291147/2895575613.svg',
    linkedIn: 'https://www.linkedin.com/in/aishvi-guleria-09a04222b',
    expertise: 'Mobile Development'
  },
  {
    name: 'Pratham Batra',
    image: 'https://ext.same-assets.com/844291147/3160495444.svg',
    linkedIn: 'https://www.linkedin.com/in/pratham1908/',
    expertise: 'Data Science'
  },
];

// Judge Card Component
function JudgeCard({ judge, index }: { judge: typeof judges[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card className="h-full bg-black/40 backdrop-blur-gradient border-neon-pink/20 overflow-hidden relative group neon-border">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>

        {/* Image with glow effect */}
        <div className="p-4 flex justify-center">
          <div className="relative w-36 h-36 rounded-full overflow-hidden group-hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all duration-300">
            {/* Glowing border on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <img
              src={judge.image}
              alt={judge.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <CardContent className="text-center pt-2 pb-4">
          <h3 className="text-xl font-orbitron font-bold text-white mb-1">{judge.name}</h3>
          <p className="text-neon-pink text-sm">{judge.role}</p>
          <p className="text-gray-400 text-sm mt-3 px-4">{judge.bio}</p>
        </CardContent>

        <CardFooter className="flex justify-center pb-4 pt-0">
          <a
            href={judge.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink hover:bg-neon-pink/20 transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Mentor Card Component
function MentorCard({ mentor, index }: { mentor: typeof mentors[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + (index * 0.05) }}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-full aspect-square overflow-hidden rounded-md relative group">
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

              {/* Mentor image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md z-20"></div>

              {/* Glowing corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-md z-20"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-md z-20"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-md z-20"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-md z-20"></div>

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                <h3 className="text-white font-orbitron text-sm">{mentor.name}</h3>
                <p className="text-neon-cyan text-xs">{mentor.expertise}</p>
              </div>
            </div>
          </motion.div>
        </HoverCardTrigger>

        <HoverCardContent className="w-72 bg-black/90 border-neon-cyan/30 backdrop-blur-lg">
          <div className="flex items-center space-x-4">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-16 h-16 rounded-full object-cover border border-neon-cyan/30"
            />
            <div>
              <h4 className="text-white font-orbitron">{mentor.name}</h4>
              <p className="text-neon-cyan text-sm">{mentor.expertise}</p>
              <a
                href={mentor.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-2 space-x-1 text-gray-400 hover:text-neon-cyan text-xs transition-colors duration-300"
              >
                <FaLinkedin className="w-3 h-3" />
                <span>View LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
}

export function JudgesMentorsSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Judges Section */}
      <section id="judges" className="py-20 relative">
        {/* Circuit board background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiI+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHJ4PSIxIi8+PHBhdGggZD0iTTIwIDEwaDEwbTEwIDBoMTBtMTAgMGgxME0yMCAyMHYxMG0yMC0yMHYxMG0yMC0xMHYxME0zMCAyMGgxMG0yMCAwaDAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="text-neon-pink neon-text-pink">Judges</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              Meet our expert judges who will evaluate your innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <JudgeCard key={judge.name} judge={judge} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-20 relative">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="text-neon-cyan neon-text-cyan">Mentors</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              Our industry experts will guide you throughout your hackathon journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {mentors.map((mentor, index) => (
              <MentorCard key={mentor.name} mentor={mentor} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
