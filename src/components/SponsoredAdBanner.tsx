import React from 'react';
import { ExternalLink, Zap, ShieldCheck } from 'lucide-react';

interface SponsoredAdBannerProps {
  onAdClick: () => void;
  tagText?: string;
  titleText?: string;
  subtitleText?: string;
  buttonText?: string;
}

export const SponsoredAdBanner: React.FC<SponsoredAdBannerProps> = ({
  onAdClick,
  tagText = 'SPONSORED',
  titleText = 'Ultra 4K Ultra-Fast Streaming Network',
  subtitleText = 'No lag • Direct server connection • 0 buffering',
  buttonText = 'Stream Now',
}) => {
  return (
    <div className="w-full my-3 px-2 sm:px-0">
      {/* 728x90 on md+ and 320x50/fluid on mobile styled banner */}
      <div 
        onClick={onAdClick}
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-[#171922] via-[#1b1c26] to-[#14151b] p-2.5 sm:p-3 shadow-lg shadow-black/40 transition-all hover:border-red-500/40 hover:bg-[#1e202c]"
      >
        <div className="absolute top-1.5 right-2 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-gray-400">
          <ShieldCheck className="h-2.5 w-2.5 text-emerald-400" />
          <span>{tagText}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            {/* Ad Icon badge */}
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-600/20 to-amber-500/20 border border-red-500/30 text-red-400">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 fill-red-500/20 animate-pulse" />
            </div>

            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors truncate">
                {titleText}
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-400 truncate">
                {subtitleText}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAdClick();
            }}
            className="shrink-0 flex items-center gap-1 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold text-white shadow-md shadow-red-600/30 transition-all hover:brightness-110 active:scale-95"
          >
            <span>{buttonText}</span>
            <ExternalLink className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
