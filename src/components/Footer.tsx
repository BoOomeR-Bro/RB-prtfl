import React from 'react';
import { ArrowUp, Terminal, Shield } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-graphite-950 border-t border-slate-900 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-graphite-900 border border-slate-800 flex items-center justify-center text-terminal-green">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {profileData.fullNameEn}
              </div>
              <div className="text-slate-400 text-xs">
                {profileData.roleBadge}
              </div>
            </div>
          </div>

          {/* System status pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-graphite-900 border border-slate-800 text-[11px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-terminal-green" />
            <span>Static Build // {currentYear} // All systems operational</span>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-graphite-900 hover:bg-graphite-850 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
            aria-label="Вернуться наверх страницы"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5 text-terminal-green" />
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>
            © {currentYear} {profileData.name}. Все права защищены.
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-terminal-green" />
            <span>Разработано на React 18, Vite и Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
