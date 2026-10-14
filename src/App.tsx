import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { CompetenciesSection } from './sections/CompetenciesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactsSection } from './sections/ContactsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink-950 text-white flex flex-col">
      <Navbar />
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
  );
};

export default App;
