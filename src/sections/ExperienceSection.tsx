import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import { experienceData } from '../data/experience';
import { SectionHeader } from '../components/SectionHeader';
import { MotionReveal } from '../components/MotionReveal';

export const ExperienceSection: React.FC = () => {
  // Current job is expanded by default
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'turing-machines': true,
    nestle: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded = experienceData.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({ 'turing-machines': true });
  };

  return (
    <section id="experience" className="py-20 bg-graphite-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal direction="up" distance={30}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <SectionHeader
              badge="// 03. EXPERIENCE"
              title="Опыт работы"
              description="Хронология профессиональной деятельности в системном администрировании, сопровождении инфраструктуры и автоматизации."
              className="mb-0"
            />

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={expandAll}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-graphite-900 hover:bg-graphite-850 text-slate-300 border border-slate-800 transition-colors"
              >
                Развернуть все
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-graphite-900 hover:bg-graphite-850 text-slate-400 border border-slate-800 transition-colors"
              >
                Свернуть
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 border-l-2 border-slate-800/80 space-y-8 sm:space-y-10 my-8">
          {experienceData.map((item, idx) => {
            const isExpanded = !!expandedIds[item.id];
            const isCurrent = !!item.isCurrent;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-4 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    isCurrent
                      ? 'bg-terminal-green border-terminal-green shadow-glow-green scale-110'
                      : 'bg-graphite-950 border-slate-700 group-hover:border-terminal-cyan'
                  }`}
                />

                {/* Experience Card (Relic emerging from bottom on scroll) */}
                <MotionReveal
                  direction="up"
                  distance={45}
                  delay={idx === 0 ? 0 : 0.05}
                  scale
                >
                  <div
                    className={`rounded-2xl transition-all duration-300 border ${
                      isCurrent
                        ? 'bg-gradient-to-b from-graphite-900/95 to-graphite-900 border-terminal-green/50 shadow-glow-green hover:border-terminal-green'
                        : 'bg-graphite-900/60 hover:bg-graphite-900/90 border-slate-800 hover:border-slate-700 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {/* Card Header (Clickable for quick expand/collapse) */}
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="p-5 sm:p-6 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-terminal-green text-slate-950 shadow-sm">
                              <Sparkles className="w-3 h-3" />
                              Текущее место работы
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.period}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.location}</span>
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                          <span>{item.role}</span>
                          <span className="text-slate-500 font-normal">/</span>
                          <span className="text-slate-200 font-medium">
                            {item.company}
                          </span>
                        </h3>

                        {item.tagline && (
                          <p className="text-xs sm:text-sm text-slate-400 mt-1">
                            {item.tagline}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-label={isExpanded ? 'Скрыть подробности' : 'Раскрыть подробности'}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-graphite-850 hover:bg-graphite-800 border border-slate-750 transition-colors"
                        >
                          <span>{isExpanded ? 'Свернуть' : 'Подробнее'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Body: Responsibilities & Key Tech */}
                    {isExpanded && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/80 animate-in fade-in duration-200">
                        {/* Duties list */}
                        <div className="mb-5">
                          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                            Обязанности и ключевые задачи:
                          </div>
                          <ul className="space-y-2 text-sm text-slate-300">
                            {item.duties.map((duty, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-terminal-green mt-2 shrink-0" />
                                <span className="leading-relaxed">{duty}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies badges */}
                        {item.keyTechnologies && item.keyTechnologies.length > 0 && (
                          <div className="pt-4 border-t border-slate-800/50 flex flex-wrap items-center gap-1.5">
                            <span className="text-[11px] font-mono text-slate-400 mr-1">
                              Стек:
                            </span>
                            {item.keyTechnologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono px-2 py-0.5 rounded bg-graphite-950 text-slate-300 border border-slate-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </MotionReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
