import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  /** @deprecated No longer rendered */
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = '',
}) => (
  <div className={`mb-16 ${className}`}>
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center space-x-4 mb-4"
    >
      <span className="w-8 h-[1px] bg-accent-cobalt" />
      <span className="text-[10px] font-black tracking-widest uppercase text-base-500">
        Section
      </span>
    </motion.div>
    <h2 className="display-title text-5xl md:text-7xl text-white mb-6">
      {title}
    </h2>
    {description && (
      <p className="text-base md:text-lg text-base-400 max-w-xl leading-relaxed text-balance">
        {description}
      </p>
    )}
  </div>
);
