import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** @deprecated Kept for backward compat, only opacity+y used now */
  direction?: string;
  /** @deprecated Kept for backward compat */
  distance?: number;
  /** @deprecated Kept for backward compat */
  scale?: boolean;
  once?: boolean;
  viewportMargin?: string;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  className = '',
  once = true,
  viewportMargin = '-40px',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
