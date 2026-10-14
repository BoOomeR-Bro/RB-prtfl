import React from 'react';
import { Moon, Sun } from 'lucide-react';

export type Theme = 'light' | 'dark';
interface ThemeToggleProps { theme: Theme; onToggle: () => void }

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => (
  <button
    type="button"
    role="switch"
    aria-checked={theme === 'light'}
    onClick={onToggle}
    className={`theme-switch ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
    aria-label={`Переключить на ${theme === 'dark' ? 'светлую' : 'тёмную'} тему`}
    title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
  >
    <Sun className="theme-switch-sun" size={14} strokeWidth={1.8} />
    <Moon className="theme-switch-moon" size={13} strokeWidth={1.8} />
    <span className="theme-switch-thumb" />
  </button>
);
