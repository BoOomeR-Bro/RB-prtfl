import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Boxes, Code2, Cpu, Network, ShieldCheck, Terminal, type LucideIcon } from 'lucide-react';
import { competencyCategories } from '../data/competencies';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollTone } from '../components/ScrollTone';

const categoryIcons: Record<string, LucideIcon> = { Terminal, Boxes, Network, Activity, Cpu, Code2, ShieldCheck };

export const CompetenciesSection: React.FC = () => (
  <section id="competencies" className="section-shell">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeader title="Инструменты и системы" description="Практический стек для эксплуатации, наблюдаемости и автоматизации корпоративной инфраструктуры." badge="Компетенции" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {competencyCategories.map((category, idx) => {
          const Icon = categoryIcons[category.iconName] || Terminal;
          return <ScrollTone key={category.id} className={idx===0?'xl:col-span-2':''}><motion.article initial={{ opacity:0,x:idx%2?48:-48,y:46,rotateX:17,rotateY:idx%2?-13:13,scale:.82 }} whileInView={{ opacity:1,x:0,y:0,rotateX:0,rotateY:0,scale:1 }} viewport={{ once:true,amount:.18 }} transition={{ duration:.76, delay:(idx%3)*.11, ease:[.22,1,.36,1] }} style={{transformPerspective:900}} className="glass-panel motion-card scroll-depth rounded-[1.6rem] p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="glass-inset rounded-2xl p-3 text-[var(--accent)]"><Icon size={20}/></div>
              <span className="text-[10px] font-mono text-[var(--muted)]">STACK / 0{idx+1}</span>
            </div>
            <h3 className="mt-7 text-lg font-semibold tracking-tight">{category.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => <li key={skill} className="glass-inset rounded-full px-3 py-1.5 text-[11px] text-[var(--ink-2)]">{skill}</li>)}
            </ul>
          </motion.article></ScrollTone>;
        })}
      </div>
    </div>
  </section>
);
