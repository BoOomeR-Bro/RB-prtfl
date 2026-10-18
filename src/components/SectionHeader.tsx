import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAssembleText } from './ScrollAssembleText';
import { ScrollTone } from './ScrollTone';

interface SectionHeaderProps { title: string; description?: string; className?: string; badge?: string }

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className = '', badge }) => (
  <ScrollTone>
    <motion.div
      initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65, ease: [.22, 1, .36, 1] }}
      className={`section-heading ${className}`}
    >
      <span className="eyebrow">{badge?.replace(/^\/\//, '').trim() || 'Профиль'}</span>
      <ScrollAssembleText text={title} />
      {description && <p>{description}</p>}
    </motion.div>
  </ScrollTone>
);
