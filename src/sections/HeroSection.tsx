import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { InfrastructureDiagram } from '../components/InfrastructureDiagram';

export const HeroSection: React.FC = () => (
  <section id="hero" className="relative min-h-[94vh] flex items-center pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 hero-grid pointer-events-none" />
    <div className="hero-orb float-slow w-[27rem] h-[27rem] -top-32 right-[8%] bg-[var(--glow-a)] blur-[90px]" />
    <div className="hero-orb soft-pulse w-[22rem] h-[22rem] bottom-[7%] left-[15%] bg-[var(--glow-b)] blur-[90px]" />
    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.1fr_.9fr] gap-14 xl:gap-24 items-center">
      <div>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="inline-flex items-center gap-4 glass-inset rounded-full px-5 py-3 mb-8">
          <span className="status-dot role-status-pulse" />
          <span className="hero-role-label">{profileData.roleBadge}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .08, ease: [.22, 1, .36, 1] }} className="display-title text-[clamp(3.5rem,8vw,7.8rem)] mb-7">
          <span className="hero-word">Строю.</span><span className="hero-word">Связываю.</span><span className="hero-word">Упрощаю.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .3 }} className="max-w-xl text-[var(--muted)] text-base sm:text-lg leading-relaxed mb-9">
          {profileData.heroSubtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }} className="flex flex-wrap items-center gap-4">
          <a href="#contacts" className="glass-action">Обсудить задачу <ArrowUpRight size={16} /></a>
          <a href="#experience" className="glass-link inline-flex items-center gap-2 text-sm">Мой опыт <ArrowDownRight size={15} /></a>
        </motion.div>
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5">
          {profileData.stats.slice(0, 2).map((stat) => <div key={stat.label} className="flex items-baseline gap-2"><strong className="font-display text-2xl tracking-tight">{stat.value}</strong><span className="text-xs text-[var(--muted)]">{stat.label}</span></div>)}
        </div>
      </div>

      <div className="w-full min-w-0 lg:pl-1"><InfrastructureDiagram /></div>
    </div>
  </section>
);
