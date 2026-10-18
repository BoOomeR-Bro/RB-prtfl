import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { experienceData } from '../data/experience';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollTone } from '../components/ScrollTone';

export const ExperienceSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({ 'turing-machines': true, nestle: true });
  const toggle = (id: string) => setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  return <section id="experience" className="section-shell">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeader title="Путь в инфраструктуре" description="Опыт эксплуатации систем, развития внутренних сервисов и выстраивания устойчивых инженерных процессов." badge="Опыт работы" />
      <div className="relative max-w-5xl mx-auto">
        <div className="timeline-line absolute left-[1.05rem] sm:left-[1.35rem] top-7 bottom-7 w-px" />
        <div className="space-y-5">
          {experienceData.map((item, idx) => {
            const open = !!expandedIds[item.id];
            return <ScrollTone key={item.id}><motion.article initial={{ opacity:0,x:idx%2?54:-54,y:38,rotateX:15,rotateY:idx%2?-12:12,scale:.86 }} whileInView={{ opacity:1,x:0,y:0,rotateX:0,rotateY:0,scale:1 }} viewport={{ once:true,margin:'-50px',amount:.15 }} transition={{ duration:.75,delay:idx*.1,ease:[.22,1,.36,1] }} style={{transformPerspective:1000}} className="relative pl-12 sm:pl-16 scroll-depth">
              <span className={`absolute left-[.67rem] sm:left-[.98rem] top-7 w-3 h-3 rounded-full border-[3px] ${item.isCurrent?'bg-[var(--accent)] border-[var(--accent)] shadow-[0_0_0_6px_var(--glow-a)]':'bg-[var(--page)] border-[var(--muted)]'}`} />
              <div className="glass-panel rounded-[1.65rem] overflow-hidden">
                <button type="button" onClick={()=>toggle(item.id)} aria-expanded={open} className="w-full text-left p-5 sm:p-7 flex items-start justify-between gap-5">
                  <div>
                    <div className="flex flex-wrap gap-2 items-center mb-3">
                      {item.isCurrent && <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-wash)] text-[var(--accent)] px-2.5 py-1 text-[9px] uppercase tracking-wider"><Sparkles size={11}/> Сейчас</span>}
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--muted)]"><Calendar size={13}/>{item.period}</span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--muted)]"><MapPin size={13}/>{item.location}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{item.role}</h3>
                    <p className="mt-1 text-sm text-[var(--accent)]">{item.company}</p>
                    {item.tagline && <p className="mt-2 text-xs text-[var(--muted)]">{item.tagline}</p>}
                  </div>
                  <span className="glass-inset p-2.5 rounded-full text-[var(--muted)] shrink-0"><motion.span animate={{rotate:open?180:0}} className="block"><ChevronDown size={16}/></motion.span></span>
                </button>
                <AnimatePresence initial={false}>
                  {open && <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3,ease:'easeInOut'}} className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-6 pt-1 border-t border-[var(--stroke)]">
                      <p className="eyebrow !text-[9px] mt-5 mb-4">Зоны ответственности</p>
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[var(--ink-2)]">
                        {item.duties.map((duty,i)=><li key={i} className="flex items-start gap-2.5"><span className="mt-[.55rem] w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"/><span className="leading-relaxed">{duty}</span></li>)}
                      </ul>
                      {!!item.keyTechnologies?.length && <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[var(--stroke)]">{item.keyTechnologies.map(tech=><span key={tech} className="glass-inset rounded-full px-3 py-1.5 text-[10px] text-[var(--ink-2)]">{tech}</span>)}</div>}
                    </div>
                  </motion.div>}
                </AnimatePresence>
              </div>
            </motion.article></ScrollTone>;
          })}
        </div>
      </div>
    </div>
  </section>;
};
