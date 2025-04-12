'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaLaptopCode, FaUsers, FaNetworkWired } from 'react-icons/fa';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <FaRocket className="w-6 h-6 text-neon-cyan" />,
      title: "Innovation Hub",
      description: "A center for cutting-edge tech innovation, where ideas transform into impactful solutions through hands-on collaboration."
    },
    {
      icon: <FaLaptopCode className="w-6 h-6 text-neon-purple" />,
      title: "Skill Development",
      description: "Enhance your technical abilities through workshops, knowledge transfer sessions, and practical development challenges."
    },
    {
      icon: <FaUsers className="w-6 h-6 text-neon-pink" />,
      title: "Diverse Community",
      description: "Connect with a diverse community of tech enthusiasts, professionals, and innovators from across the globe."
    },
    {
      icon: <FaNetworkWired className="w-6 h-6 text-neon-yellow" />,
      title: "Industry Exposure",
      description: "Gain exposure to industry trends and practices through sessions led by experienced professionals and mentors."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-neon-grid bg-[length:50px_50px] opacity-10 z-0"></div>
      <motion.div
        className="absolute -top-[10%] -right-[5%] w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />
      <motion.div
        className="absolute -bottom-[10%] -left-[5%] w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
      />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-neon-cyan neon-text-cyan">About</span> GDG IGDTUW
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            We explore technology and use it to build products that bring about positive change in society.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* About Content */}
          <motion.div
            className="space-y-6"
            style={{ y, opacity }}
          >
            <p className="text-gray-300">
              Here at GDG IGDTUW, we explore technology and use it to build products that brings about positive change in society. We conduct mentorship sessions, workshops, knowledge transfer sessions, hackathons, coding contests, open source programs, etc. where students from across the globe get to showcase their knowledge and develop their skillset.
            </p>
            <p className="text-gray-300">
              We have helped more than 7000+ university students to expand their technical knowledge and skills, and continue to create an inclusive environment for all tech enthusiasts.
            </p>
            <div className="pt-4">
              <motion.div
                className="inline-block px-6 py-3 bg-black/50 border border-neon-purple/30 rounded-md backdrop-blur-sm text-neon-purple"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(170, 0, 255, 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                Join us in our technical journey!
              </motion.div>
            </div>
          </motion.div>

          {/* Image or Visual Element */}
          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden glass-card p-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
            <img
              src="https://ext.same-assets.com/844291147/2018733539.svg"
              alt="GDG IGDTUW"
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Stats overlay */}
            <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-sm rounded-md px-4 py-2 border border-neon-cyan/30">
              <p className="text-white text-sm">
                <span className="text-neon-cyan font-bold">7000+ </span>
                <span className="text-gray-300">students guided</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* About Devcation Section */}
        <motion.div
          className="text-center mt-24 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-neon-pink neon-text-pink">About</span> Devcation'25
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-12">
            A week-long technical festival designed to spark creativity and innovation.
          </p>

          <div className="bg-black/40 backdrop-blur-gradient border border-neon-pink/20 rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-gray-300 leading-relaxed">
              Devcation is a week-long technical festival organized by Google Developer Groups -
              Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain.
              During the week, we have the Devcation'25 hackathon. These events are designed to spark your creativity,
              encourage innovative thinking, and help you craft tech solutions that stand out.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-gradient border border-neon-blue/20 rounded-lg p-6 group hover:border-neon-cyan/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-gradient-to-br from-black to-gray-900 border border-gray-800 group-hover:border-neon-cyan/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
