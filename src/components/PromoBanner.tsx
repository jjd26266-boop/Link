import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  bannerText: string;
  buttonText: string;
  onWatchClick: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  bannerText,
  buttonText,
  onWatchClick,
}) => {
  return (
    <div className="w-full bg-gradient-to-r from-red-950/70 via-[#1d1215] to-zinc-900 border-b border-red-500/20 py-2 px-3">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600/30 text-red-400">
            <Sparkles className="h-3 w-3 animate-pulse" />
          </span>
          <span className="font-semibold text-gray-200 tracking-tight truncate sm:text-xs text-[11.5px]">
            {bannerText}
          </span>
        </div>

        <button
          onClick={onWatchClick}
          className="group inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-3 py-1 text-[11px] font-bold text-white shadow-xs shadow-red-600/40 transition-all hover:brightness-110 active:scale-95"
        >
          <span>{buttonText}</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
