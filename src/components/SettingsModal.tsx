import React, { useState } from 'react';
import { X, Save, RotateCcw, Link2, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { AppSettings, LanguageKey } from '../types';
import { DEFAULT_SETTINGS } from '../data/mockData';
import { translations } from '../data/translations';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onSave: (newSettings: AppSettings) => void;
  currentLang: LanguageKey;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
  currentLang,
}) => {
  const [formData, setFormData] = useState<AppSettings>(settings);
  const t = translations[currentLang];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(DEFAULT_SETTINGS);
    onSave(DEFAULT_SETTINGS);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#14151e] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#191a26]">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600/20 text-red-400">
              <Link2 className="h-4 w-4" />
            </div>
            <h3 className="text-base font-bold text-white">
              {t.settingsTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-200">
            <span className="font-bold flex items-center gap-1 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Adsterra Smartlink / Monetization Configuration
            </span>
            All action buttons on this page ("Watch Video Now", "Watch In-Page", "Copy Link", banners) point to this destination link.
          </div>

          {/* Direct Link URL */}
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1">
              Direct Link / Smartlink Destination URL
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={formData.directLinkUrl}
                onChange={(e) => setFormData({ ...formData, directLinkUrl: e.target.value })}
                placeholder="https://auctionr.org/4/0994e60099ebb463e5f4ec9f2e341447"
                className="w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 font-mono"
              />
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">Current active direct link</span>
              <a
                href={formData.directLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-red-400 hover:underline inline-flex items-center gap-0.5"
              >
                <span>Test Link</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>

          {/* Display Domain */}
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1">
              Safe Link Display Domain
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.displayDomain}
                onChange={(e) => setFormData({ ...formData, displayDomain: e.target.value })}
                placeholder="auctionr.org"
                className="w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 font-mono"
              />
            </div>
            <span className="text-[11px] text-gray-400">
              Shown next to "Safe Video Link •" badge at the top
            </span>
          </div>

          {/* Video Title */}
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1">
              Video Title
            </label>
            <input
              type="text"
              value={formData.videoTitle}
              onChange={(e) => setFormData({ ...formData, videoTitle: e.target.value })}
              className="w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Duration & Live Viewers Count */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                Video Duration
              </label>
              <input
                type="text"
                value={formData.videoDuration}
                onChange={(e) => setFormData({ ...formData, videoDuration: e.target.value })}
                placeholder="24:18"
                className="w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-gray-500 focus:border-red-500 focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                Online Viewers Count
              </label>
              <input
                type="number"
                value={formData.liveViewersCount}
                onChange={(e) => setFormData({ ...formData, liveViewersCount: parseInt(e.target.value) || 1200 })}
                className="w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-gray-500 focus:border-red-500 focus:outline-none font-mono"
              />
            </div>
          </div>

          {/* Thumbnail URL Option */}
          <div>
            <label className="block text-xs font-bold text-gray-300 mb-1">
              Custom Video Thumbnail URL (optional)
            </label>
            <input
              type="url"
              value={formData.thumbnailUrl}
              onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
              className="w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder-gray-500 focus:border-red-500 focus:outline-none text-ellipsis"
            />
          </div>

          {/* Modal Actions */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 rounded-xl border border-white/10 px-3 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{t.resetDefaults}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-red-600/40 hover:bg-red-500 transition-colors"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{t.saveChanges}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
