import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Activity, Wrench, Check, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { SectionHeader } from '../components/SectionHeader';

const icons: Record<string, React.ReactNode> = {
  'Внутренние сервисы & Автоматизация': <Layers size={19}/>,
  'Системы учёта & Диагностика': <Wrench size={19}/>,
  'Инфраструктурный мониторинг': <Activity size={19}/>,
  'Корпоративная виртуализация': <Server size={19}/>,
};

export const ProjectsSection: React.FC = () => <section id="projects" className="section-shell">
  <div className="max-w-7xl mx-auto px-5 sm:px-8">
    <SectionHeader title="Системы в работе" description="Практические решения на стыке инфраструктуры, наблюдаемости и внутренних продуктов." badge="Избранные проекты" />
    <div className="grid lg:grid-cols-2 gap-4">
      {projectsData.map((project,idx)=><motion.article key={project.id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55,delay:(idx%2)*.08}} className="glass-panel motion-card rounded-[1.8rem] p-6 sm:p-8 flex flex-col min-h-[29rem]">
        <div className="flex items-start justify-between gap-4">
          <div className="glass-inset rounded-2xl p-3.5 text-[var(--accent)]">{icons[project.category] || <Layers size={19}/>}</div>
          {project.statusLabel && <span className="rounded-full px-3 py-1.5 bg-[var(--accent-wash)] text-[var(--accent)] text-[9px] tracking-wider uppercase">{project.statusLabel}</span>}
        </div>
        <p className="mt-7 eyebrow !text-[9px]">{project.category}</p>
        <h3 className="mt-3 text-2xl sm:text-[1.7rem] font-semibold tracking-tight leading-tight">{project.title}</h3>
        <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">{project.description}</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-2">
          {project.architectureHighlights.map((h,i)=><div key={i} className="glass-inset rounded-xl p-3 flex items-start gap-2 text-[11px] leading-relaxed text-[var(--ink-2)]"><Check size={13} className="mt-0.5 shrink-0 text-[var(--accent)]"/>{h}</div>)}
        </div>
        <div className="mt-auto pt-6 flex flex-wrap gap-2">{project.technologies.map(tech=><span key={tech} className="rounded-full border border-[var(--stroke)] px-3 py-1.5 text-[10px] text-[var(--muted)]">{tech}</span>)}</div>
        <span className="absolute sr-only"><ArrowUpRight/></span>
      </motion.article>)}
    </div>
  </div>
</section>;
