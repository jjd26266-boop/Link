import React, { useState } from 'react';
import { ExternalLink, X, Film, Zap } from 'lucide-react';
import { translations } from '../data/translations';
import { LanguageKey } from '../types';

interface FloatingBottomBarProps {
  onOpenClick: () => void;
  currentLang: LanguageKey;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({
  onOpenClick,
  currentLang,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const t = translations[currentLang];

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3 pointer-events-none">
      <div className="mx-auto max-w-xl pointer-events-auto">
        <div className="relative flex items-center justify-between gap-2.5 rounded-2xl border border-red-500/30 bg-[#14151e]/95 p-2.5 sm:p-3 shadow-2xl shadow-red-950/50 backdrop-blur-xl">
          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 text-gray-400 border border-white/20 hover:text-white hover:bg-zinc-700 transition-colors"
            title="Dismiss"
            aria-label="Close banner"
          >
            <X className="h-3 w-3" />
          </button>

          {/* Left info */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 text-white shadow-md shadow-red-600/40">
              <Zap className="h-4 w-4 fill-white" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-red-600/20 px-1 py-0.2 text-[9px] font-black uppercase tracking-wider text-red-400 border border-red-500/30">
                  HD FAST
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold">1080p Stream</span>
              </div>
              <p className="text-xs font-bold text-white truncate leading-tight">
                {t.floatingBarText}
              </p>
            </div>
          </div>

          {/* Open Button */}
          <button
            onClick={onOpenClick}
            className="shrink-0 flex items-center gap-1 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-3.5 py-2 text-xs font-black uppercase tracking-wide text-white shadow-md shadow-red-600/40 transition-all hover:brightness-110 active:scale-95"
          >
            <span>{t.floatingBarBtn}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
