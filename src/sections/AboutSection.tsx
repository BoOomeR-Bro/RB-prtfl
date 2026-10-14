import React from 'react';
import { motion } from 'framer-motion';
import { Server, Terminal, Network, Boxes, Activity, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';

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
    <section id="about" className="py-32 bg-base-950 relative border-t border-base-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title={profileData.about.title}
          description="Approach: Stability over speed. Automation over manual labor. Root causes over patches."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="space-y-8 text-base-300 leading-relaxed text-lg max-w-2xl">
              {profileData.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-balance">{p}</p>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-base-900 pt-12">
              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-accent-cobalt">Principles</span>
                <ul className="space-y-3 text-sm font-medium text-base-400">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-accent-cobalt" />
                    <span>Predictable Infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-accent-cobalt" />
                    <span>Zero-Trust Security</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-accent-cobalt" />
                    <span>End-to-End Automation</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-base-500">Methodology</span>
                <p className="text-sm text-base-500 leading-relaxed italic">
                  "Documentation is as important as the code. If it's not documented, it doesn't exist."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-1">
            {profileData.about.focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 border-b border-base-900 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center space-x-6">
                  <span className="text-xs font-mono text-base-700">0{idx + 1}</span>
                  <h3 className="text-sm font-bold tracking-tight text-white uppercase group-hover:text-accent-cobalt transition-colors">
                    {area.title}
                  </h3>
                </div>
                <div className="text-base-600 group-hover:text-white transition-colors">
                  {iconMap[area.icon] || <Server className="w-5 h-5" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
