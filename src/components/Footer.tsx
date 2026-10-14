import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { navigationItems } from '../data/navigation';

export const Footer: React.FC = () => <footer className="relative border-t border-[var(--stroke)] py-8 sm:py-10">
  <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
    <a href="#" className="flex items-center gap-3"><span className="glass-inset grid place-items-center w-9 h-9 rounded-xl text-xs font-semibold">{profileData.shortLogo}</span><span><strong className="block text-xs font-medium">{profileData.name}</strong><span className="text-[10px] text-[var(--muted)]">Инженер ИТ-инфраструктуры</span></span></a>
    <nav className="flex flex-wrap gap-x-5 gap-y-2">{navigationItems.map(item=><a key={item.id} href={item.href} className="text-[10px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors">{item.label}</a>)}</nav>
    <a href="#hero" className="glass-inset rounded-full p-2.5 text-[var(--accent)] hover:-translate-y-1 transition-transform" aria-label="Наверх"><ArrowUpRight size={16}/></a>
  </div>
</footer>;
