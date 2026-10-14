import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Boxes,
  Network,
  Activity,
  Cpu,
  Code2,
  ShieldCheck,
} from 'lucide-react';
import { competencyCategories } from '../data/competencies';
import { SectionHeader } from '../components/SectionHeader';

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
  return (
    <section id="competencies" className="py-32 bg-base-950 relative border-t border-base-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Technical Infrastructure"
          description="A specialized stack for high-availability environments, cloud-native deployments, and industrial-grade automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-base-900 border border-base-900">
          {competencyCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-base-950 p-10 hover:bg-white/[0.01] transition-colors group"
            >
              <div className="flex items-center space-x-4 mb-10">
                <div className="text-base-600 group-hover:text-accent-cobalt transition-colors">
                  {categoryIcons[category.iconName] || <Terminal className="w-6 h-6" />}
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-baseline space-x-3 group/item">
                    <span className="text-[10px] font-mono text-base-700 group-hover/item:text-accent-cobalt">→</span>
                    <span className="text-sm font-medium text-base-400 group-hover/item:text-base-200 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
