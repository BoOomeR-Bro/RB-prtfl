import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';

interface CopyButtonProps {
  textToCopy: string;
  itemKey: string;
  label?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  itemKey,
  label = 'Копировать',
  className = '',
}) => {
  const { copiedKey, copy } = useClipboard();
  const isCopied = copiedKey === itemKey;

  return (
    <button
      type="button"
      onClick={() => copy(textToCopy, itemKey)}
      aria-label={`${label}: ${textToCopy}`}
      title={isCopied ? 'Скопировано в буфер!' : label}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono transition-all duration-200 border ${
        isCopied
          ? 'bg-terminal-green/10 text-terminal-green border-terminal-green/40'
          : 'bg-graphite-850 hover:bg-graphite-800 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
      } ${className}`}
    >
      {isCopied ? (
        <>
          <Check className="w-3.5 h-3.5 text-terminal-green" />
          <span>Скопировано</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-slate-400" />
          <span>Копировать</span>
        </>
      )}
    </button>
  );
};
