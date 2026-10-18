import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

interface ScrollAssembleTextProps {
  text: string;
  className?: string;
}

interface ScrollCharacterProps {
  char: string;
  distance: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  reduceMotion: boolean;
}

const ScrollCharacter: React.FC<ScrollCharacterProps> = ({ char, distance, progress, reduceMotion }) => {
  const x = useTransform(progress, [0, 0.72, 1], [reduceMotion ? 0 : distance * 4.2, 0, 0]);
  const rotateX = useTransform(progress, [0, 0.72, 1], [reduceMotion ? 0 : distance * 3.1, 0, 0]);
  const y = useTransform(progress, [0, 0.72, 1], [reduceMotion ? 0 : Math.abs(distance) * 1.15, 0, 0]);
  const scale = useTransform(progress, [0, 0.72, 1], [reduceMotion ? 1 : 0.78, 1, 1]);

  return (
    <motion.span
      aria-hidden="true"
      className="scroll-assemble-char"
      style={{ x, y, rotateX, scale }}
    >
      {char === ' ' ? '\u00a0' : char}
    </motion.span>
  );
};

export const ScrollAssembleText: React.FC<ScrollAssembleTextProps> = ({ text, className = '' }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ['start 98%', 'center 48%'],
  });
  const reduceMotion = useReducedMotion() ?? false;
  const characters = Array.from(text);
  const centerIndex = Math.floor(characters.length / 2);

  return (
    <h2
      ref={headingRef}
      aria-label={text}
      className={`display-title scroll-assemble-title ${className}`}
      style={{ perspective: 700 }}
    >
      <span aria-hidden="true">
        {characters.map((char, index) => (
          <ScrollCharacter
            key={`${index}-${char}`}
            char={char}
            distance={index - centerIndex}
            progress={scrollYProgress}
            reduceMotion={reduceMotion}
          />
        ))}
      </span>
    </h2>
  );
};
