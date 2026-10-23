import React from 'react';
import { Play, Eye, Sparkles, Clock } from 'lucide-react';
import { RelatedVideo, LanguageKey } from '../types';
import { translations } from '../data/translations';

interface RelatedVideosProps {
  videos: RelatedVideo[];
  onVideoClick: () => void;
  currentLang: LanguageKey;
}

export const RelatedVideos: React.FC<RelatedVideosProps> = ({
  videos,
  onVideoClick,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <div className="mt-6 mb-4">
      <div className="mb-3.5 flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-red-500" />
          <span>{t.relatedVideos}</span>
        </h3>
        <span className="text-[11px] font-semibold text-gray-400">
          Auto-Play Enabled
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {videos.map((vid) => (
          <div
            key={vid.id}
            onClick={onVideoClick}
            className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#14151e] p-2 transition-all hover:border-red-500/40 hover:bg-[#1a1b26] hover:shadow-lg hover:shadow-red-950/30"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>

              {/* Play hover badge */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/90 text-white shadow-lg">
                  <Play className="ml-0.5 h-5 w-5 fill-white" />
                </div>
              </div>

              {/* Quality & Duration Badges */}
              <div className="absolute bottom-1.5 right-1.5 flex items-center gap-1">
                <span className="rounded bg-black/80 px-1.5 py-0.2 text-[9px] font-bold text-emerald-400 border border-emerald-500/30">
                  {vid.quality}
                </span>
                <span className="rounded bg-red-600 px-1.5 py-0.2 text-[10px] font-bold text-white shadow-xs">
                  {vid.duration}
                </span>
              </div>
            </div>

            {/* Video Meta */}
            <div className="mt-2 px-1">
              <h4 className="text-xs font-bold text-gray-200 group-hover:text-red-400 line-clamp-1 transition-colors">
                {vid.title}
              </h4>
              <div className="mt-1 flex items-center gap-2 text-[10px] text-gray-400">
                <span className="flex items-center gap-0.5">
                  <Eye className="h-3 w-3 text-red-500" />
                  {vid.views}
                </span>
                <span>•</span>
                <span className="flex items-center gap-0.5">
                  <Clock className="h-3 w-3 text-gray-400" />
                  {vid.timeAgo}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
