import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X, Terminal } from 'lucide-react';
import { navigationItems } from '../data/navigation';
import { profileData } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-graphite-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-mono text-sm sm:text-base font-bold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-md"
            aria-label="Руслан Бабинов — Главная"
          >
            <div className="w-8 h-8 rounded-lg bg-graphite-900 border border-slate-800 group-hover:border-terminal-green flex items-center justify-center transition-colors">
              <Terminal className="w-4 h-4 text-terminal-green" />
            </div>
            <div className="flex flex-col">
              <span className="tracking-tight text-white group-hover:text-terminal-accent transition-colors">
                {profileData.fullNameEn.toUpperCase()}
              </span>
              <span className="text-[10px] text-slate-400 font-mono font-normal">
                INFRA_ENG // v2.4
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-terminal-green bg-terminal-green/10 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-graphite-850'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action: Download Resume Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.resume.downloadUrl}
              download={profileData.resume.fileName}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-terminal-green/10 hover:bg-terminal-green/20 text-terminal-green border border-terminal-green/40 hover:border-terminal-green text-xs sm:text-sm font-mono font-medium transition-all duration-200 shadow-sm hover:shadow-glow-green hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Скачать резюме в формате PDF"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Скачать резюме</span>
              <span className="sm:hidden">CV</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white bg-graphite-900 border border-slate-800 hover:border-slate-700 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Открыть мобильное меню"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-graphite-950/98 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl"
        >
          <nav className="flex flex-col space-y-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-terminal-green bg-terminal-green/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-graphite-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800">
              <a
                href={profileData.resume.downloadUrl}
                download={profileData.resume.fileName}
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-terminal-green text-slate-950 font-mono font-semibold text-sm hover:bg-terminal-accent transition-colors"
              >
                <Download className="w-4 h-4" />
                Скачать резюме (PDF)
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};
