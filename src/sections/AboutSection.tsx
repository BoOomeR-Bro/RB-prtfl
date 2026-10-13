import React from 'react';
import { Server, Terminal, Network, Boxes, Activity, Code2, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { MotionReveal } from '../components/MotionReveal';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-5 h-5 text-terminal-green" />,
  Terminal: <Terminal className="w-5 h-5 text-terminal-green" />,
  Network: <Network className="w-5 h-5 text-terminal-cyan" />,
  Boxes: <Boxes className="w-5 h-5 text-terminal-cyan" />,
  Activity: <Activity className="w-5 h-5 text-terminal-green" />,
  Code2: <Code2 className="w-5 h-5 text-emerald-400" />,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-graphite-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal direction="up" distance={30}>
          <SectionHeader
            badge="// 01. ABOUT"
            title={profileData.about.title}
            description="Практический подход к системному администрированию, проектированию отказоустойчивых решений и устранению рутины."
          />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative text (Emerges from bottom with depth) */}
          <div className="lg:col-span-6">
            <MotionReveal direction="up" distance={45} delay={0.1} scale>
              <div className="p-6 sm:p-8 rounded-2xl bg-graphite-900/60 border border-slate-800/80 shadow-xl hover:border-slate-700 transition-colors">
                <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
                  {profileData.about.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Guiding engineering principles */}
                <div className="mt-8 pt-6 border-t border-slate-800 space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terminal-green shrink-0 mt-0.5" />
                    <span>Приоритет стабильности, безопасности и прозрачности процессов</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terminal-green shrink-0 mt-0.5" />
                    <span>Автоматизация рутинных задач через Docker, скрипты и веб-панели</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terminal-green shrink-0 mt-0.5" />
                    <span>Поиск первопричин инцидентов (Root Cause Analysis) вместо временных заплаток</span>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right column: 6 Technical focus area cards (Staggered bottom float-up like relics) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.about.focusAreas.map((area, idx) => (
              <MotionReveal
                key={idx}
                direction="up"
                distance={40}
                delay={0.15 + (idx % 4) * 0.08}
                scale
              >
                <div className="h-full group p-5 rounded-xl bg-graphite-900/80 hover:bg-graphite-850 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg hover:shadow-glow-green">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-graphite-950 border border-slate-800 flex items-center justify-center mb-3.5 group-hover:border-slate-700 transition-colors">
                      {iconMap[area.icon] || <Server className="w-5 h-5 text-terminal-green" />}
                    </div>
                    <h3 className="text-sm font-semibold text-white font-mono mb-2 group-hover:text-terminal-accent transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
