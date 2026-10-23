import React, { useState } from 'react';
import {
  Play,
  ShieldCheck,
  Lock,
  ExternalLink,
  Copy,
  Check,
  Share2,
  Tv,
  Volume2,
  Maximize2,
  Settings as SettingsIcon,
  Eye,
  Heart,
  Sparkles,
  Camera,
  ImagePlus,
} from 'lucide-react';
import { AppSettings, LanguageKey } from '../types';
import { translations } from '../data/translations';

interface MainVideoPlayerProps {
  settings: AppSettings;
  currentLang: LanguageKey;
  onWatchVideoNow: () => void;
  onWatchInPage: () => void;
  onCopyLink: () => void;
  onShareLink: () => void;
  onThumbnailChange: (newUrl: string) => void;
  isCopied: boolean;
}

export const MainVideoPlayer: React.FC<MainVideoPlayerProps> = ({
  settings,
  currentLang,
  onWatchVideoNow,
  onWatchInPage,
  onCopyLink,
  onShareLink,
  onThumbnailChange,
  isCopied,
}) => {
  const t = translations[currentLang];
  const [isHovered, setIsHovered] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onThumbnailChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
      // Reset input value so selecting the same file triggers change
      e.target.value = '';
    }
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#121318] p-3 sm:p-5 shadow-2xl shadow-black/80">
      {/* 1. Green Safe-Link Verification Header */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" />
          </div>
          <span className="flex items-center gap-1">
            <span className="font-bold">{t.safeLinkPrefix}</span>
            <span className="text-gray-400">•</span>
            <span className="text-emerald-300 font-mono tracking-tight font-medium hover:underline cursor-pointer" onClick={onWatchVideoNow}>
              {settings.displayDomain}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <Lock className="h-2.5 w-2.5" />
          <span>{t.safeLinkBadge}</span>
        </div>
      </div>

      {/* Video Title and Metadata */}
      <div className="mb-2.5">
        <h1 className="text-base sm:text-lg font-extrabold text-white leading-snug tracking-tight">
          {settings.videoTitle}
        </h1>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1 text-gray-300 font-medium">
            <Eye className="h-3.5 w-3.5 text-red-500" />
            {settings.viewsCount} {t.views}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            {settings.likesPercentage} {t.likes}
          </span>
          <span>•</span>
          <span className="rounded bg-white/10 px-1.5 py-0.2 text-[10px] font-bold text-gray-200">
            1080p 60FPS
          </span>
        </div>
      </div>

      {/* 2. Large Video Thumbnail & Player Mockup */}
      <div
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/15 bg-black shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onWatchVideoNow}
      >
        {/* Aspect Ratio Container (16:9) */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={settings.thumbnailUrl}
            alt="Video Thumbnail"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />

          {/* Vignette & Dark Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40"></div>

          {/* Top Player Status Bar with Change Thumbnail Button */}
          <div className="absolute top-2.5 left-2.5 right-2.5 sm:left-3 sm:right-3 z-20 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-0.5 backdrop-blur-md border border-white/10 pointer-events-none">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider">LIVE HD STREAM</span>
            </div>

            {/* Change Thumbnail Button in top-right */}
            <label
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 rounded-lg bg-black/80 hover:bg-red-600 active:scale-95 px-2.5 py-1 text-[10.5px] sm:text-[11px] font-bold text-white backdrop-blur-md border border-white/30 transition-all cursor-pointer shadow-xl hover:shadow-red-600/30 select-none group/thumb-btn"
              title="Change video thumbnail from gallery"
            >
              <Camera className="h-3.5 w-3.5 text-red-400 group-hover/thumb-btn:text-white transition-colors" />
              <span>Change Thumbnail</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* 3. Big Red Circular Play Button Overlay in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Pulsing glow aura */}
            <div className="relative flex items-center justify-center">
              <span className="absolute h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-red-600/40 radar-ping"></span>
              <span className="absolute h-18 w-18 sm:h-22 sm:w-22 rounded-full bg-red-600/50 animate-pulse"></span>
              <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-tr from-red-600 to-rose-500 shadow-2xl shadow-red-600/80 transition-all duration-300 group-hover:scale-110 group-hover:from-red-500 group-hover:to-rose-400 group-active:scale-95 border-2 border-white/40">
                <Play className="ml-1 h-8 w-8 sm:h-10 sm:w-10 fill-white text-white drop-shadow-md" />
              </div>
            </div>
          </div>

          {/* 4. Bottom Player Controls & Duration Badge */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 bg-gradient-to-t from-black via-black/80 to-transparent">
            {/* Fake video timeline slider */}
            <div className="mb-2 relative h-1 w-full rounded-full bg-white/30 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2/5 bg-gradient-to-r from-red-600 to-rose-500"></div>
              <div className="absolute left-2/5 -top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-sm transition-transform group-hover:scale-125"></div>
            </div>

            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2 text-gray-300">
                <Play className="h-3.5 w-3.5 fill-white text-white" />
                <Volume2 className="h-3.5 w-3.5" />
                <span className="text-[11px] font-mono">00:00 / {settings.videoDuration}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-bold border border-white/20 text-gray-200">
                  HD 1080p
                </div>
                {/* Duration Badge */}
                <div className="rounded bg-red-600 px-2 py-0.5 text-xs font-black tracking-wide text-white shadow-sm">
                  {settings.videoDuration}
                </div>
                <Maximize2 className="h-3.5 w-3.5 text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Instruction text below thumbnail */}
      <div className="mt-3.5 mb-2 text-center">
        <p className="text-xs sm:text-sm font-semibold text-gray-300 flex items-center justify-center gap-1.5 animate-pulse">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500"></span>
          <span>{t.videoClickNotice}</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500"></span>
        </p>
      </div>

      {/* 6. Large Glowing Red Button: "▶ Watch Video Now" */}
      <div className="my-2.5">
        <button
          onClick={onWatchVideoNow}
          className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 bg-[length:200%_auto] px-5 py-3.5 text-center text-base sm:text-lg font-black text-white shadow-lg transition-all duration-300 hover:bg-right hover:scale-[1.015] active:scale-[0.985] animate-pulse-glow"
        >
          <div className="relative flex items-center justify-center gap-2.5 tracking-wide">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white group-hover:scale-110 transition-transform">
              <Play className="ml-0.5 h-4 w-4 fill-white" />
            </span>
            <span className="drop-shadow-sm uppercase font-extrabold">{t.watchVideoNowBtn}</span>
            <ExternalLink className="h-5 w-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>

      {/* 7. Two Secondary Buttons Side by Side */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 my-2.5">
        {/* Watch In-Page Button */}
        <button
          onClick={onWatchInPage}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#1a1b24] px-3 py-2.5 text-xs sm:text-sm font-bold text-gray-200 transition-all hover:border-red-500/50 hover:bg-[#232533] hover:text-white active:scale-95 shadow-sm"
        >
          <Tv className="h-4 w-4 text-red-500" />
          <span className="truncate">{t.watchInPageBtn}</span>
        </button>

        {/* Copy Link Button */}
        <button
          onClick={onCopyLink}
          className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-sm ${
            isCopied
              ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-400'
              : 'border-white/15 bg-[#1a1b24] text-gray-200 hover:border-white/30 hover:bg-[#232533] hover:text-white'
          }`}
        >
          {isCopied ? (
            <>
              <Check className="h-4 w-4 text-emerald-400" />
              <span className="truncate">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-gray-400" />
              <span className="truncate">{t.copyLinkBtn}</span>
            </>
          )}
        </button>
      </div>

      {/* 8. Full-Width "Share Link" Button */}
      <div className="my-2.5">
        <button
          onClick={onShareLink}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#161720] px-4 py-2.5 text-xs sm:text-sm font-bold text-gray-300 transition-all hover:border-white/25 hover:bg-[#20212e] hover:text-white active:scale-98 shadow-xs"
        >
          <Share2 className="h-4 w-4 text-gray-400" />
          <span>{t.shareLinkBtn}</span>
        </button>
      </div>

      {/* 9. Small URL Display at the bottom with copy icon */}
      <div className="mt-3 rounded-lg border border-white/10 bg-[#0d0e12] p-2 sm:p-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <Lock className="h-3 w-3 shrink-0 text-emerald-400" />
            <span className="text-[11px] font-mono text-gray-400 truncate select-all">
              {settings.directLinkUrl}
            </span>
          </div>

          <button
            onClick={onCopyLink}
            className="flex shrink-0 items-center gap-1 rounded bg-white/5 px-2 py-1 text-[11px] font-medium text-gray-300 hover:bg-white/15 hover:text-white transition-colors"
            title="Copy URL"
          >
            {isCopied ? (
              <Check className="h-3 w-3 text-emerald-400" />
            ) : (
              <Copy className="h-3 w-3 text-gray-400" />
            )}
            <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
