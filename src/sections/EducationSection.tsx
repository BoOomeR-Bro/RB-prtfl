import React from 'react';
import {
  GraduationCap,
  Award,
  Globe,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import {
  educationData,
  additionalTrainingData,
  languagesData,
} from '../data/education';
import { SectionHeader } from '../components/SectionHeader';
import { MotionReveal } from '../components/MotionReveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-graphite-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal direction="up" distance={30}>
          <SectionHeader
            badge="// 05. EDUCATION & QUALIFICATION"
            title="Образование и квалификация"
            description="Фундаментальная подготовка в области программной инженерии, сетей и компьютерных систем."
          />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Education: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <MotionReveal direction="up" distance={20} delay={0.05}>
              <h3 className="text-sm font-mono text-terminal-green uppercase tracking-wider flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Базовое образование</span>
              </h3>
            </MotionReveal>

            <div className="space-y-4">
              {educationData.map((item, idx) => (
                <MotionReveal
                  key={item.id}
                  direction="up"
                  distance={40}
                  delay={0.1 + idx * 0.1}
                  scale
                >
                  <div className="p-6 rounded-2xl bg-graphite-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-md hover:shadow-glow-cyan hover:-translate-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-graphite-950 text-terminal-cyan border border-slate-800">
                        {item.degree}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {item.institution}
                    </h4>

                    <div className="text-sm text-slate-300 font-medium mb-1">
                      Специальность: <span className="text-white">{item.major}</span>
                    </div>

                    {item.details && (
                      <p className="text-xs font-mono text-slate-400">
                        {item.details}
                      </p>
                    )}
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>

          {/* Additional Training & Languages: 5 cols */}
          <div className="lg:col-span-5 space-y-8">
            {/* Additional Courses */}
            <div className="space-y-4">
              <MotionReveal direction="up" distance={20} delay={0.15}>
                <h3 className="text-sm font-mono text-terminal-cyan uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Дополнительное обучение и курсы</span>
                </h3>
              </MotionReveal>

              <MotionReveal direction="up" distance={40} delay={0.2} scale>
                <div className="p-6 rounded-2xl bg-graphite-900/80 border border-slate-800 space-y-4 shadow-md hover:border-slate-700 transition-colors">
                  {additionalTrainingData.map((training) => (
                    <div
                      key={training.id}
                      className="flex items-start gap-3 pb-3 border-b border-slate-800/60 last:border-none last:pb-0"
                    >
                      <CheckCircle2 className="w-4 h-4 text-terminal-green shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-slate-200">
                          {training.title}
                        </div>
                        <div className="text-xs font-mono text-slate-400 mt-0.5 flex items-center gap-2">
                          {training.organization && <span>{training.organization}</span>}
                          <span>•</span>
                          <span>{training.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionReveal>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <MotionReveal direction="up" distance={20} delay={0.25}>
                <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Владение языками</span>
                </h3>
              </MotionReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {languagesData.map((lang, idx) => (
                  <MotionReveal
                    key={lang.language}
                    direction="up"
                    distance={30}
                    delay={0.3 + idx * 0.1}
                    scale
                  >
                    <div className="h-full p-4 rounded-xl bg-graphite-900/80 border border-slate-800 flex flex-col justify-between shadow-sm hover:border-slate-700 hover:-translate-y-1 transition-all duration-200">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-bold text-white font-mono">
                            {lang.language}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                              lang.native
                                ? 'bg-terminal-green/10 text-terminal-green border border-terminal-green/30'
                                : 'bg-terminal-cyan/10 text-terminal-cyan border border-terminal-cyan/30'
                            }`}
                          >
                            {lang.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">
                          {lang.level}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
