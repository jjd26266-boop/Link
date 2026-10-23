import React, { useEffect, useState } from 'react';
import { Play, X, ShieldCheck, Zap, ExternalLink, Loader2, Server } from 'lucide-react';
import { AppSettings, LanguageKey } from '../types';
import { translations } from '../data/translations';

interface PlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  currentLang: LanguageKey;
  onDirectLinkClick: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({
  isOpen,
  onClose,
  settings,
  currentLang,
  onDirectLinkClick,
}) => {
  const [progress, setProgress] = useState(15);
  const [stage, setStage] = useState<'buffering' | 'ready'>('buffering');
  const t = translations[currentLang];

  useEffect(() => {
    if (!isOpen) {
      setProgress(15);
      setStage('buffering');
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          setStage('ready');
          return 100;
        }
        return prev + Math.floor(Math.random() * 22) + 12;
      });
    }, 280);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[#13141b] shadow-2xl shadow-black">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-[#181923]">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-200">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Ultra HD Video Player</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Video simulation preview box */}
        <div className="relative aspect-video w-full bg-black overflow-hidden">
          <img
            src={settings.thumbnailUrl}
            alt="Video Preview"
            className={`h-full w-full object-cover transition-all duration-700 ${
              stage === 'ready' ? 'brightness-90 scale-100' : 'brightness-40 blur-xs scale-105'
            }`}
          />
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Buffering animation or Ready action */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            {stage === 'buffering' ? (
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-10 w-10 text-red-500 animate-spin" />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t.bufferingTitle}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Direct mirror resolving: {Math.min(100, progress)}%
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-56 h-1.5 rounded-full bg-white/20 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-rose-400 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 animate-fade-in">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-red-600/60 animate-bounce">
                  <Play className="ml-0.5 h-7 w-7 fill-white" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    Stream Ready in Full HD (1080p)
                  </h3>
                  <p className="text-xs text-emerald-400 mt-0.5 font-medium">
                    CDN Connection Established • High Bitrate
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Panel */}
        <div className="p-4 sm:p-5 bg-[#14151e]">
          <div className="mb-3 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Server className="h-3.5 w-3.5 text-red-500" />
              <span>{t.fastCDN}</span>
            </span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              Safe Direct Link
            </span>
          </div>

          <button
            onClick={() => {
              onDirectLinkClick();
              onClose();
            }}
            className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 py-3.5 px-4 font-black text-white shadow-xl shadow-red-600/40 hover:brightness-110 active:scale-98 transition-all animate-pulse-glow"
          >
            <Play className="h-5 w-5 fill-white" />
            <span className="text-sm sm:text-base uppercase tracking-wide">
              {t.unlockStreamBtn}
            </span>
            <ExternalLink className="h-4 w-4" />
          </button>

          <p className="mt-2.5 text-center text-[11px] text-gray-400">
            Clicking unlocks instant uncompressed streaming with no signup needed.
          </p>
        </div>
      </div>
    </div>
  );
};
