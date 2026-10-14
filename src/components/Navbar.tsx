import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navigationItems } from '../data/navigation';
import { profileData } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-lg border-b border-ink-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Name as logo */}
          <a
            href="#"
            className="text-sm font-bold text-white tracking-tight hover:text-lime transition-colors"
            aria-label="Главная"
          >
            {profileData.fullNameEn.toUpperCase()}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-lime font-medium'
                    : 'text-ink-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.resume.downloadUrl}
              download={profileData.resume.fileName}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-ink-950 bg-lime hover:bg-lime/90 transition-colors"
              aria-label="Скачать резюме"
            >
              <Download className="w-3.5 h-3.5" />
              CV
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink-400 hover:text-white transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="md:hidden bg-ink-950 border-b border-ink-800 px-6 pb-6"
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 text-sm transition-colors ${
                  activeSection === item.id
                    ? 'text-lime font-medium'
                    : 'text-ink-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-ink-800">
              <a
                href={profileData.resume.downloadUrl}
                download={profileData.resume.fileName}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-lime text-ink-950 text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                Скачать резюме
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
