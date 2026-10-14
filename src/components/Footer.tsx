import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 border-t border-ink-800 py-8">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="text-sm text-ink-500">
          © {currentYear} {profileData.name}
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-ink-500 hover:text-white transition-colors p-2"
          aria-label="Наверх"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
