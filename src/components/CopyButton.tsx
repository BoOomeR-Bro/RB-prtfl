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
      title={isCopied ? 'Скопировано!' : label}
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono transition-colors border ${
        isCopied
          ? 'bg-lime/10 text-lime border-lime/20'
          : 'bg-ink-900 text-ink-400 hover:text-white border-ink-800 hover:border-ink-700'
      } ${className}`}
    >
      {isCopied ? (
        <>
          <Check className="w-3 h-3" />
          <span>Скопировано</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          <span>Копировать</span>
        </>
      )}
    </button>
  );
};
