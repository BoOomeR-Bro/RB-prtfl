import React, { useState } from 'react';
import {
  Terminal,
  Boxes,
  Network,
  Activity,
  Cpu,
  Code2,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { competencyCategories } from '../data/competencies';
import { SectionHeader } from '../components/SectionHeader';
import { MotionReveal } from '../components/MotionReveal';

const categoryIcons: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5 text-terminal-green" />,
  Boxes: <Boxes className="w-5 h-5 text-terminal-cyan" />,
  Network: <Network className="w-5 h-5 text-terminal-cyan" />,
  Activity: <Activity className="w-5 h-5 text-terminal-green" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
  Code2: <Code2 className="w-5 h-5 text-terminal-green" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-terminal-cyan" />,
};

export const CompetenciesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredCategories =
    activeFilter === 'all'
      ? competencyCategories
      : competencyCategories.filter((c) => c.id === activeFilter);

  return (
    <section id="competencies" className="py-20 bg-graphite-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal direction="up" distance={30}>
          <SectionHeader
            badge="// 02. COMPETENCIES"
            title="Технические компетенции"
            description="Реальные технологии и инструменты, с которыми работал в корпоративной инфраструктуре, сетях, виртуализации и разработке сервисов."
          />
        </MotionReveal>

        {/* Filter buttons (revealed smoothly) */}
        <MotionReveal direction="up" distance={25} delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800/80">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                activeFilter === 'all'
                  ? 'bg-terminal-green text-slate-950 font-semibold border-terminal-green shadow-sm'
                  : 'bg-graphite-900 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              Все категории ({competencyCategories.length})
            </button>
            {competencyCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  activeFilter === cat.id
                    ? 'bg-terminal-green text-slate-950 font-semibold border-terminal-green shadow-sm'
                    : 'bg-graphite-900 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </MotionReveal>

        {/* Categories Grid (Relic cards floating up from bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <MotionReveal
              key={category.id}
              direction="up"
              distance={40}
              delay={0.08 * (idx % 3)}
              scale
            >
              <div className="h-full p-6 rounded-2xl bg-graphite-900/90 border border-slate-800 hover:border-slate-700 hover:bg-graphite-850/80 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-glow-green hover:-translate-y-1.5">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-graphite-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-slate-700 transition-colors">
                      {categoryIcons[category.iconName] || (
                        <Terminal className="w-5 h-5 text-terminal-green" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-mono">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-graphite-950/80 hover:bg-graphite-950 text-slate-300 text-xs font-mono border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <Check className="w-3 h-3 text-terminal-green/80" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom technical footer */}
                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{category.skills.length} подтверждённых навыков</span>
                  <span className="text-terminal-green">OK</span>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
