import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2000) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = useCallback(
    async (text: string, key: string) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for non-https or older environments
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        setCopiedKey(key);
        setTimeout(() => {
          setCopiedKey((current) => (current === key ? null : current));
        }, timeout);
        return true;
      } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
      }
    },
    [timeout]
  );

  return { copiedKey, copy };
}
