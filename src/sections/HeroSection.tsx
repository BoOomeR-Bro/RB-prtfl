import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { InfrastructureDiagram } from '../components/InfrastructureDiagram';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center space-x-3"
          >
            <span className="w-12 h-[1px] bg-accent-cobalt" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-base-500">
              {profileData.roleBadge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="display-title text-6xl md:text-8xl lg:text-9xl mb-10 text-white"
          >
            {profileData.heroHeadline.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em] last:mr-0">
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-base-400 max-w-xl leading-relaxed mb-12 text-balance"
          >
            {profileData.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-12"
          >
            <a
              href="#contacts"
              className="group flex items-center space-x-4 text-xs font-bold tracking-widest uppercase transition-all"
            >
              <span className="bg-white text-black px-6 py-4 group-hover:bg-accent-cobalt group-hover:text-white transition-colors">
                Collaborate
              </span>
              <Mail className="w-5 h-5 text-base-500 group-hover:text-white transition-colors" />
            </a>
            
            <div className="flex space-x-8">
              {profileData.stats.slice(0, 2).map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-mono font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-base-500 font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
          >
            <InfrastructureDiagram />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-4"
        >
          <span className="h-16 w-[1px] bg-base-800" />
          <span className="text-[9px] uppercase tracking-[0.4em] font-black [writing-mode:vertical-lr] text-base-600">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
};
