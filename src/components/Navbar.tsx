import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { navigationItems } from '../data/navigation';
import { profileData } from '../data/profile';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Briefcase, Boxes, Compass, FolderKanban, GraduationCap, Mail, type LucideIcon } from 'lucide-react';

const navigationIcons: Record<string, LucideIcon> = {
  experience: Briefcase,
  competencies: Boxes,
  projects: FolderKanban,
  education: GraduationCap,
  about: Compass,
  contacts: Mail,
};

interface NavbarProps { themeToggle: React.ReactNode }

export const Navbar: React.FC<NavbarProps> = ({ themeToggle }) => {
  const [atPageBottom, setAtPageBottom] = useState(false);
  const frame = useRef(0);
  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const checkBottom = () => {
      frame.current = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      setAtPageBottom((previous) => previous === atBottom ? previous : atBottom);
    };
    const scheduleCheck = () => {
      if (!frame.current) frame.current = window.requestAnimationFrame(checkBottom);
    };
    checkBottom();
    window.addEventListener('scroll', scheduleCheck, { passive: true });
    window.addEventListener('resize', scheduleCheck);
    return () => {
      window.removeEventListener('scroll', scheduleCheck);
      window.removeEventListener('resize', scheduleCheck);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

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
      animate={{ y: atPageBottom ? 100 : 0, opacity: atPageBottom ? 0 : 1 }}
      transition={{ type: 'spring', stiffness: 130, damping: 22, delay: atPageBottom ? 0 : .2 }}
      style={{ pointerEvents: atPageBottom ? 'none' : 'auto' }}
      aria-hidden={atPageBottom}
      className="bottom-dock-wrap"
    >
      <div className="bottom-dock glass-panel">
        <nav className="bottom-dock-links" aria-label="Основная навигация">
          {navigationItems.map((item) => {
            const Icon = navigationIcons[item.id];
            return <a
                key={item.id}
                href={item.href}
                className={`bottom-dock-link ${activeSection === item.id ? 'is-active' : ''}`}
                aria-label={item.label}
                title={item.label}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
              </a>;
          })}
        </nav>
      </div>
    </motion.div>
    </>
  );
};
