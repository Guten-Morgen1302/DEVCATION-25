'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/gdsc_igdtuw', color: 'text-blue-400 hover:text-blue-300' },
    { icon: FaFacebook, url: 'https://www.facebook.com/GDSCIGDTUW/', color: 'text-blue-600 hover:text-blue-500' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/company/dscigdtuw/mycompany/', color: 'text-blue-700 hover:text-blue-600' },
    { icon: FaInstagram, url: 'https://www.instagram.com/gdsc_igdtuw', color: 'text-pink-500 hover:text-pink-400' },
    { icon: FaYoutube, url: 'https://www.youtube.com/@DSCIGDTUW', color: 'text-red-600 hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-neon-grid bg-[length:30px_30px] opacity-5 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>

      {/* Glowing spots */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-neon-cyan/5 filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-neon-purple/5 filter blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-orbitron font-bold mb-4">
            <span className="text-neon-pink neon-text-pink">Contact Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Have questions? Reach out to us directly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black/30 border border-gray-800 rounded-xl p-8 backdrop-blur-gradient relative group">
              {/* Form header line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>

              {/* Form with neon inputs */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-orbitron font-bold mb-6 text-white">
                  Send us a message
                </h3>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Your Name
                  </label>
                  <div className="relative group/input">
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-gray-700 focus:border-neon-cyan text-white w-full px-4 py-3 rounded-md focus:outline-none transition-colors duration-300 group-hover/input:border-neon-cyan/50"
                      disabled={isSubmitting || submitted}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-cyan scale-x-0 group-focus-within/input:scale-x-100 group-hover/input:scale-x-100 transition-transform duration-300 origin-center"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Email Address
                  </label>
                  <div className="relative group/input">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-gray-700 focus:border-neon-cyan text-white w-full px-4 py-3 rounded-md focus:outline-none transition-colors duration-300 group-hover/input:border-neon-cyan/50"
                      disabled={isSubmitting || submitted}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-cyan scale-x-0 group-focus-within/input:scale-x-100 group-hover/input:scale-x-100 transition-transform duration-300 origin-center"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">
                    Your Message
                  </label>
                  <div className="relative group/input">
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-black/50 border border-gray-700 focus:border-neon-cyan text-white w-full px-4 py-3 rounded-md focus:outline-none transition-colors duration-300 group-hover/input:border-neon-cyan/50 resize-none"
                      disabled={isSubmitting || submitted}
                    ></textarea>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-cyan scale-x-0 group-focus-within/input:scale-x-100 group-hover/input:scale-x-100 transition-transform duration-300 origin-center"></div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-6 font-orbitron font-medium relative overflow-hidden group/button transition-all duration-300 ${
                    submitted
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-neon-pink hover:bg-neon-pink/90'
                  }`}
                >
                  {/* Button background animation */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover/button:opacity-30 transition-opacity duration-500"></span>

                  {/* Button text */}
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <svg className="animate-spinner h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : submitted ? (
                      'Message Sent!'
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/30 border border-gray-800 rounded-xl p-8 backdrop-blur-gradient h-full flex flex-col">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-white">
                Get in Touch
              </h3>

              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="text-sm uppercase text-gray-400 mb-2">Email</h4>
                  <a
                    href="mailto:dscigdtuw@gmail.com"
                    className="text-neon-cyan hover:text-neon-cyan/80 transition-colors text-lg block"
                  >
                    dscigdtuw@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-sm uppercase text-gray-400 mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 hover:text-neon-cyan transition-colors`}
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <link.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm uppercase text-gray-400 mb-2">Join Our Community</h4>
                  <p className="text-gray-300 mb-4">
                    Become part of our vibrant community of tech enthusiasts and innovators.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://discord.gg/eG4YP3gA48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-[#5865F2] hover:bg-[#4752c4] transition-colors rounded-md px-4 py-2 flex items-center justify-center w-full"
                    >
                      Join Discord Server
                    </a>
                    <a
                      href="https://gdsc.community.dev/indira-gandhi-delhi-technical-university-for-women-delhi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-[#4285F4] hover:bg-[#3367d6] transition-colors rounded-md px-4 py-2 flex items-center justify-center w-full"
                    >
                      Join GDG Chapter
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 text-center">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Devcation'25 | GDG IGDTUW
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
