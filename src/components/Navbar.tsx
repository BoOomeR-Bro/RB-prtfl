import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navigationItems } from '../data/navigation';
import { profileData } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display font-black text-xl tracking-tightest">
          {profileData.shortLogo}
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-accent-cobalt'
                  : 'text-base-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <a
            href={profileData.resume.downloadUrl}
            className="hidden sm:block text-[10px] font-bold tracking-widest uppercase border border-base-700 px-4 py-2 hover:bg-white hover:text-black transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.header>
  );
};
