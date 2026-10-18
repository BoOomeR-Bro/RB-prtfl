import React, { useRef } from 'react';
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'framer-motion';

interface ScrollToneProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollTone: React.FC<ScrollToneProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 96%', 'center 48%'],
  });
  const brightness = useTransform(scrollYProgress, [0, 0.7, 1], [reduceMotion ? 1 : 0.48, 1, 1]);
  const saturation = useTransform(scrollYProgress, [0, 0.7, 1], [reduceMotion ? 1 : 0.58, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [reduceMotion ? 1 : 0.62, 1, 1]);
  const filter = useMotionTemplate`brightness(${brightness}) saturate(${saturation})`;

  return (
    <motion.div ref={ref} className={`scroll-tone ${className}`} style={{ filter, opacity }}>
      {children}
    </motion.div>
  );
};
