'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu } from 'react-icons/hi';
import { FaDiscord } from 'react-icons/fa';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Judges', href: '#judges' },
  { name: 'Mentors', href: '#mentors' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        if (section === '') return window.scrollY < 100;
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActiveSection(current === '' ? 'home' : current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'w-full fixed top-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-black/60 backdrop-blur-lg py-2 border-b border-neon-blue/20'
        : 'bg-transparent py-4'
    )}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-orbitron font-bold text-white neon-text">
              DEV<span className="text-neon-cyan neon-text-cyan">CATION</span> <span className="text-neon-pink neon-text-pink">'25</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm rounded-md transition-all duration-300 hover:text-neon-cyan relative group',
                  activeSection === (item.href === '#' ? 'home' : item.href.replace('#', ''))
                    ? 'text-neon-cyan'
                    : 'text-gray-300'
                )}
              >
                {item.name}
                <span className={cn(
                  'absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
                  activeSection === (item.href === '#' ? 'home' : item.href.replace('#', ''))
                    ? 'bg-neon-cyan scale-x-100'
                    : 'bg-neon-cyan/70'
                )}></span>
              </Link>
            ))}
          </nav>

          <Button asChild className="ml-4 bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 neon-border neon-border-cyan">
            <Link href="https://discord.gg/eG4YP3gA48" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaDiscord className="w-4 h-4" />
              <span>Join Discord</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <HiMenu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/90 border-neon-blue/20 backdrop-blur-lg">
              <nav className="flex flex-col space-y-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-lg rounded-md transition-all duration-300 hover:text-neon-cyan relative',
                      activeSection === (item.href === '#' ? 'home' : item.href.replace('#', ''))
                        ? 'text-neon-cyan'
                        : 'text-gray-300'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <Button asChild className="mt-4 w-full bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                  <Link href="https://discord.gg/eG4YP3gA48" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                    <FaDiscord className="w-4 h-4" />
                    <span>Join Discord</span>
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
