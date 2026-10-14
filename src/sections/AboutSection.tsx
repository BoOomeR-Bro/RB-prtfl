import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Boxes, Code2, Network, Server, ShieldCheck, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';

const icons: Record<string, React.ReactNode> = { Server:<Server size={18}/>, Terminal:<Terminal size={18}/>, Network:<Network size={18}/>, Boxes:<Boxes size={18}/>, Activity:<ShieldCheck size={18}/>, Code2:<Code2 size={18}/> };

export const AboutSection: React.FC = () => (
  <section id="about" className="section-shell">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeader title="Инфраструктура, которой можно доверять" description="Соединяю системное мышление, инженерную дисциплину и автоматизацию — чтобы сложные среды оставались понятными и управляемыми." badge="Подход" />
      <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-8 xl:gap-16 items-start">
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.65 }} className="glass-panel rounded-[2rem] p-7 sm:p-9">
          <span className="eyebrow">Обо мне</span>
          <div className="mt-6 space-y-5 text-[var(--ink-2)] leading-[1.85] text-[15px]">
            {profileData.about.paragraphs.map((p) => <p key={p.slice(0,40)}>{p}</p>)}
          </div>
          <div className="mt-8 pt-6 border-t border-[var(--stroke)] flex items-center justify-between gap-4">
            <div><span className="block text-[10px] uppercase tracking-[.15em] text-[var(--muted)]">Принцип</span><strong className="block mt-1.5 text-sm font-medium">Надёжность через ясность</strong></div>
            <span className="glass-inset rounded-full p-3 text-[var(--accent)]"><ArrowUpRight size={17}/></span>
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-3">
          {profileData.about.focusAreas.map((area, index) => <motion.article key={area.title} initial={{ opacity:0,y:18 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:.5, delay:index*.055 }} className="glass-panel motion-card rounded-[1.45rem] p-5 sm:p-6 min-h-[12rem] flex flex-col justify-between">
            <div className="flex justify-between items-start"><span className="glass-inset rounded-xl p-2.5 text-[var(--accent)]">{icons[area.icon] || <Server size={18}/>}</span><span className="text-[10px] font-mono text-[var(--muted)]">0{index+1}</span></div>
            <div className="mt-7"><h3 className="text-base font-semibold tracking-tight">{area.title}</h3><p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">{area.description}</p></div>
          </motion.article>)}
        </div>
      </div>
    </div>
  </section>
);
