import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-850 border border-slate-800 text-xs font-mono text-terminal-green mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse"></span>
        <span>{badge}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
