import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Boxes, Code2, Cpu, Network, ShieldCheck, Terminal, type LucideIcon } from 'lucide-react';
import { competencyCategories } from '../data/competencies';
import { SectionHeader } from '../components/SectionHeader';

const categoryIcons: Record<string, LucideIcon> = { Terminal, Boxes, Network, Activity, Cpu, Code2, ShieldCheck };

export const CompetenciesSection: React.FC = () => (
  <section id="competencies" className="section-shell">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeader title="Инструменты и системы" description="Практический стек для эксплуатации, наблюдаемости и автоматизации корпоративной инфраструктуры." badge="Компетенции" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {competencyCategories.map((category, idx) => {
          const Icon = categoryIcons[category.iconName] || Terminal;
          return <motion.article key={category.id} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.55, delay:(idx%3)*.07 }} className={`glass-panel motion-card rounded-[1.6rem] p-6 sm:p-7 ${idx===0?'xl:col-span-2':''}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="glass-inset rounded-2xl p-3 text-[var(--accent)]"><Icon size={20}/></div>
              <span className="text-[10px] font-mono text-[var(--muted)]">STACK / 0{idx+1}</span>
            </div>
            <h3 className="mt-7 text-lg font-semibold tracking-tight">{category.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => <li key={skill} className="glass-inset rounded-full px-3 py-1.5 text-[11px] text-[var(--ink-2)]">{skill}</li>)}
            </ul>
          </motion.article>;
        })}
      </div>
    </div>
  </section>
);
