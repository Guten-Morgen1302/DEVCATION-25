'use client';

import Link from 'next/link';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="border-t border-neon-blue/20 bg-black/60 backdrop-blur-lg py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div className="space-y-4">
            <div className="text-2xl font-orbitron font-bold text-white neon-text">
              DEV<span className="text-neon-cyan neon-text-cyan">CATION</span> <span className="text-neon-pink neon-text-pink">'25</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              A week-long technical festival organized by Google Developer Groups celebrating diversity in the TechForGood Domain.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="https://twitter.com/gdsc_igdtuw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/GDSCIGDTUW/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/dscigdtuw/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/gdsc_igdtuw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@DSCIGDTUW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaYoutube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-orbitron text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Tracks', 'Judges', 'Mentors', 'Timeline'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-orbitron text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/eG4YP3gA48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center space-x-2"
                >
                  <FaDiscord className="w-4 h-4" />
                  <span>Discord Server</span>
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/KIlPsKeZZdo7KhKtilL8AT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  WhatsApp Group
                </a>
              </li>
              <li>
                <a
                  href="https://gdsc.community.dev/indira-gandhi-delhi-technical-university-for-women-delhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Join GDG Chapter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-orbitron text-white">Contact</h3>
            <p className="text-gray-400">
              Have questions? Reach out to us at:
            </p>
            <a
              href="mailto:dscigdtuw@gmail.com"
              className="text-neon-cyan hover:text-neon-blue transition-colors neon-text"
            >
              dscigdtuw@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-neon-blue/20 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Devcation. All rights reserved.</p>
          <p className="mt-1">Made with 💻 by GDG IGDTUW</p>
        </div>
      </div>
    </footer>
  );
}
