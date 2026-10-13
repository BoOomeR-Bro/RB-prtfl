import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Cpu, Server, Network } from 'lucide-react';
import { profileData } from '../data/profile';
import { InfrastructureDiagram } from '../components/InfrastructureDiagram';

const easing = [0.21, 0.47, 0.32, 0.98];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background architectural glow and subtle grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easing }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Presentation & Value (Slides in from the Left & Bottom) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status indicator badge (Slides from left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easing }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-graphite-900 border border-slate-800 text-xs font-mono text-terminal-green mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green" />
              </span>
              <span className="tracking-wide uppercase font-semibold">
                {profileData.roleBadge}
              </span>
            </motion.div>

            {/* Main Headline (Slides in from left with slight delay) */}
            <motion.h1
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: easing }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
            >
              {profileData.heroHeadline}
            </motion.h1>

            {/* Subtitle (Floats up from bottom) */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: easing }}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {profileData.heroSubtitle}
            </motion.p>

            {/* CTA Action Buttons (Floats up from bottom with subtle bounce) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: easing }}
              className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto"
            >
              <a
                href="#contacts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-terminal-green text-slate-950 font-semibold font-mono text-sm hover:bg-terminal-accent transition-all duration-200 shadow-glow-green hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-graphite-950 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4" />
                <span>Связаться со мной</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-graphite-900 hover:bg-graphite-850 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold font-mono text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Посмотреть проекты</span>
                <ArrowDown className="w-4 h-4 text-terminal-cyan" />
              </a>
            </motion.div>

            {/* Key Facts / Highlights Grid (Relic cards floating up staggered) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-850">
              {profileData.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35 + idx * 0.1,
                    ease: easing,
                  }}
                  className="p-3 sm:p-3.5 rounded-xl bg-graphite-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-graphite-850/80 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-glow-green"
                >
                  <div className="text-lg sm:text-xl font-bold font-mono text-white mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-terminal-green mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Infrastructure Diagram (Slides in from the Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.15, ease: easing }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <InfrastructureDiagram />

            {/* Quick status telemetry strip under diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: easing }}
              className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-mono text-slate-400"
            >
              <div className="p-2 rounded-lg bg-graphite-900/40 border border-slate-850 flex items-center justify-center gap-1.5 hover:border-slate-750 transition-colors">
                <Server className="w-3.5 h-3.5 text-terminal-green" />
                <span>Linux & ESXi</span>
              </div>
              <div className="p-2 rounded-lg bg-graphite-900/40 border border-slate-850 flex items-center justify-center gap-1.5 hover:border-slate-750 transition-colors">
                <Network className="w-3.5 h-3.5 text-terminal-cyan" />
                <span>Cisco / Eltex</span>
              </div>
              <div className="p-2 rounded-lg bg-graphite-900/40 border border-slate-850 flex items-center justify-center gap-1.5 hover:border-slate-750 transition-colors">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>DevOps / Web</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
