import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
  scale?: boolean;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 35,
  className = '',
  viewportMargin = '-60px',
  once = true,
  scale = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
    ...(scale ? { scale: 0.96 } : {}),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale ? { scale: 1 } : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
