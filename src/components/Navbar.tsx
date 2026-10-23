import React, { useState } from 'react';
import { Play, Globe, Settings, Sun, Moon, Radio } from 'lucide-react';
import { LanguageKey } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: LanguageKey;
  onSelectLang: (lang: LanguageKey) => void;
  liveViewers: number;
  onOpenSettings: () => void;
  isCinemaMode: boolean;
  onToggleCinemaMode: () => void;
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  liveViewers,
  onOpenSettings,
  isCinemaMode,
  onToggleCinemaMode,
  onLogoClick,
}) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[currentLang];

  const languages: { key: LanguageKey; label: string; flag: string }[] = [
    { key: 'bn', label: 'বাংলা (Bengali)', flag: '🇧🇩' },
    { key: 'en', label: 'English', flag: '🇺🇸' },
    { key: 'hi', label: 'हिन्दी (Hindi)', flag: '🇮🇳' },
    { key: 'es', label: 'Español', flag: '🇪🇸' },
    { key: 'ar', label: 'العربية (Arabic)', flag: '🇸🇦' },
  ];

  const activeLangObj = languages.find((l) => l.key === currentLang) || languages[0];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0f0f12]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-3 sm:px-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onLogoClick}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="VideoHub Home"
          >
            {/* Red play button icon badge */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 to-red-500 shadow-md shadow-red-600/30 transition-transform group-hover:scale-105 active:scale-95">
              <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
            </div>

            {/* VideoHub typography */}
            <div className="flex items-baseline tracking-tight">
              <span className="text-xl font-extrabold text-white tracking-tight">Video</span>
              <span className="rounded bg-red-600 px-1 py-0.2 text-sm font-black uppercase tracking-wider text-white ml-0.5 shadow-sm">
                HUB
              </span>
            </div>
          </button>

          {/* Live counter badge */}
          <div className="ml-1 flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/40 px-2 py-0.5 text-[11px] font-semibold text-red-300 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            <span>{liveViewers.toLocaleString()}</span>
            <span className="hidden sm:inline font-normal text-red-400/80">{t.onlineNow}</span>
          </div>
        </div>

        {/* Right Action Icons: Language, Cinema/Theme, Settings */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#191a1f] px-2 py-1.5 text-xs font-medium text-gray-200 transition-colors hover:border-white/20 hover:bg-[#22242c]"
              aria-label="Select language"
            >
              <Globe className="h-3.5 w-3.5 text-gray-400" />
              <span className="font-semibold text-white">{activeLangObj.key === 'bn' ? 'বাংলা' : activeLangObj.key.toUpperCase()}</span>
            </button>

            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 z-40 w-44 rounded-xl border border-white/10 bg-[#16171c] p-1.5 shadow-2xl shadow-black/80 backdrop-blur-xl">
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Language / ভাষা
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.key}
                      onClick={() => {
                        onSelectLang(lang.key);
                        setLangDropdownOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                        currentLang === lang.key
                          ? 'bg-red-600/20 text-red-400 font-bold border border-red-500/30'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                      {currentLang === lang.key && (
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Cinema / Theme Toggle */}
          <button
            onClick={onToggleCinemaMode}
            title={t.themeToggle}
            className={`rounded-lg border p-1.5 text-xs transition-colors ${
              isCinemaMode
                ? 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400'
                : 'border-white/10 bg-[#191a1f] text-gray-300 hover:border-white/20 hover:bg-[#22242c]'
            }`}
            aria-label="Toggle Cinema Mode"
          >
            {isCinemaMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Settings Icon */}
          <button
            onClick={onOpenSettings}
            title="Landing Page Settings & Direct Link Configuration"
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#191a1f] p-1.5 text-gray-300 transition-colors hover:border-white/20 hover:bg-[#22242c] hover:text-white"
            aria-label="Settings"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
