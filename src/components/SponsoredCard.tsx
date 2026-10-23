import React from 'react';
import { PlayCircle, ExternalLink, Sparkles, Wifi } from 'lucide-react';

interface SponsoredCardProps {
  onCardClick: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  tag?: string;
}

export const SponsoredCard: React.FC<SponsoredCardProps> = ({
  onCardClick,
  title = 'Online HD Video Streaming Experience',
  subtitle = 'Full 1080p 60FPS high bitrate playback on mobile & desktop',
  buttonText = 'Visit',
  tag = 'FEATURED SPONSOR',
}) => {
  return (
    <div
      onClick={onCardClick}
      className="group my-3 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#161720] to-[#111218] p-3.5 shadow-md shadow-black/50 transition-all hover:border-red-500/30 hover:shadow-red-950/20"
    >
      <div className="flex items-center justify-between pb-2">
        <span className="inline-flex items-center gap-1 rounded bg-red-600/15 border border-red-500/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-400">
          <Sparkles className="h-2.5 w-2.5 text-red-400" />
          {tag}
        </span>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
          <Wifi className="h-3 w-3" />
          Ultra Fast CDN
        </span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 shadow-md shadow-red-600/30 text-white">
            <PlayCircle className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-white transition-colors group-hover:text-red-400 leading-snug">
              {title}
            </h4>
            <p className="text-[11px] text-gray-400 truncate">
              {subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onCardClick();
          }}
          className="shrink-0 flex items-center gap-1 rounded-lg border border-red-500/40 bg-red-950/40 px-3.5 py-1.5 text-xs font-bold text-red-300 transition-all group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent active:scale-95 shadow-sm"
        >
          <span>{buttonText}</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};
