import React from 'react';
import { motion } from 'framer-motion';
import { navigationItems } from '../data/navigation';
import { profileData } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface NavbarProps { themeToggle: React.ReactNode }

export const Navbar: React.FC<NavbarProps> = ({ themeToggle }) => {
  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <>
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: .1 }}
      className="top-bar-wrap"
    >
      <a href="#hero" className="top-bar-logo" aria-label={profileData.name}>{profileData.shortLogo}</a>
      <div className="top-bar-actions">
        {themeToggle}
        <a href={profileData.resume.downloadUrl} download={profileData.resume.fileName} className="glass-action resume-action">
          Скачать резюме
        </a>
      </div>
    </motion.header>
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: .2 }}
      className="bottom-dock-wrap"
    >
      <div className="bottom-dock glass-panel">
        <nav className="bottom-dock-links" aria-label="Основная навигация">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`bottom-dock-link ${
                activeSection === item.id
                  ? 'is-active'
                  : ''
              }`}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <span className="bottom-dock-divider" />
        {themeToggle}
      </div>
    </motion.div>
    </>
  );
};
