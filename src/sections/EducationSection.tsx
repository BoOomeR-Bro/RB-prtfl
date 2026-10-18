import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Calendar, Check } from 'lucide-react';
import { educationData, additionalTrainingData, languagesData } from '../data/education';
import { SectionHeader } from '../components/SectionHeader';

export const EducationSection: React.FC = () => <section id="education" className="section-shell">
  <div className="max-w-7xl mx-auto px-5 sm:px-8">
    <SectionHeader title="Основа и развитие" description="Образование в программной инженерии дополняю прикладными курсами и постоянной практикой." badge="Образование" />
    <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-4 items-start">
      <div className="space-y-3">
        {educationData.map((item,i)=><motion.article key={item.id} initial={{opacity:0,x:-18}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}} className="glass-panel motion-card rounded-[1.6rem] p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4"><span className="eyebrow !text-[9px]"><GraduationCap size={14}/>{item.degree}</span><span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--muted)]"><Calendar size={13}/>{item.year}</span></div>
          <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.institution}</h3><p className="mt-2 text-sm text-[var(--ink-2)]">{item.major}</p>{item.details&&<p className="mt-3 text-xs text-[var(--muted)]">{item.details}</p>}
        </motion.article>)}
      </div>
      <div className="space-y-4">
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass-panel rounded-[1.6rem] p-6 sm:p-7">
          <span className="eyebrow !text-[9px]"><Award size={14}/>Дополнительное обучение</span>
          <div className="mt-6 space-y-4">{additionalTrainingData.map(training=><div key={training.id} className="flex gap-3 border-b border-[var(--stroke)] last:border-0 pb-4 last:pb-0"><span className="glass-inset rounded-lg p-1.5 text-[var(--accent)] h-fit"><Check size={13}/></span><div><h3 className="text-sm font-medium">{training.title}</h3><p className="mt-1 text-[10px] text-[var(--muted)]">{[training.organization,training.year].filter(Boolean).join(' · ')}</p></div></div>)}</div>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-3">{languagesData.map((lang,i)=><motion.div key={lang.language} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="glass-panel motion-card rounded-[1.4rem] p-5"><div className="flex justify-between items-start"><Globe size={16} className="text-[var(--accent)]"/><span className="text-[9px] uppercase tracking-wider text-[var(--muted)]">{lang.badge}</span></div><h3 className="mt-5 font-semibold">{lang.language}</h3><p className="mt-1 text-xs text-[var(--muted)]">{lang.level}</p></motion.div>)}</div>
      </div>
    </div>
  </div>
</section>;
