import React from 'react';
import { Layers, Server, Activity, Wrench, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/projects';
import { SectionHeader } from '../components/SectionHeader';
import { MotionReveal } from '../components/MotionReveal';

const projectCategoryIcons: Record<string, React.ReactNode> = {
  'Внутренние сервисы & Автоматизация': <Layers className="w-5 h-5 text-terminal-green" />,
  'Системы учёта & Диагностика': <Wrench className="w-5 h-5 text-terminal-cyan" />,
  'Инфраструктурный мониторинг': <Activity className="w-5 h-5 text-terminal-green" />,
  'Корпоративная виртуализация': <Server className="w-5 h-5 text-terminal-cyan" />,
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-graphite-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal direction="up" distance={30}>
          <SectionHeader
            badge="// 04. PROJECTS"
            title="Инженерные решения"
            description="Реализованные внутренние сервисы, конфигурации систем мониторинга и виртуализации, подтверждённые профессиональным опытом."
          />
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <MotionReveal
              key={project.id}
              direction="up"
              distance={45}
              delay={idx % 2 === 0 ? 0 : 0.12}
              scale
            >
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-graphite-900/90 border border-slate-800 hover:border-slate-700 hover:bg-graphite-850/80 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-glow-green hover:-translate-y-2">
                <div>
                  {/* Top Card Bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-graphite-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-slate-700 transition-colors">
                        {projectCategoryIcons[project.category] || (
                          <Layers className="w-5 h-5 text-terminal-green" />
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    {project.statusLabel && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-950/60 text-terminal-green border border-terminal-green/30">
                        {project.statusLabel}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-terminal-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Architecture & Engineering Highlights */}
                  <div className="space-y-2.5 mb-6 bg-graphite-950/60 p-4 rounded-xl border border-slate-850">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Инженерные особенности:
                    </div>
                    {project.architectureHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-terminal-green shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-graphite-950 text-slate-300 border border-slate-800/90 group-hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
