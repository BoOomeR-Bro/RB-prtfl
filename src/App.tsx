import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { CompetenciesSection } from './sections/CompetenciesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactsSection } from './sections/ContactsSection';
import { Footer } from './components/Footer';
import { ThemeToggle, type Theme } from './components/ThemeToggle';
import { AmbientGlareBackground } from './components/AmbientGlareBackground';

const getInitialTheme = (): Theme => {
  const saved = window.localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="site-shell min-h-screen flex flex-col">
      <AmbientGlareBackground />
      <div className="site-content">
        <Navbar themeToggle={<ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />} />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <CompetenciesSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
