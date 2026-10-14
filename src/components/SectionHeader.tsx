import React from 'react';

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
  <div className={`mb-14 ${className}`}>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-lg text-ink-400 max-w-2xl leading-relaxed">
        {description}
      </p>
    )}
  </div>
);
