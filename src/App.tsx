/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PromoBanner } from './components/PromoBanner';
import { SponsoredAdBanner } from './components/SponsoredAdBanner';
import { SponsoredCard } from './components/SponsoredCard';
import { MainVideoPlayer } from './components/MainVideoPlayer';
import { FloatingBottomBar } from './components/FloatingBottomBar';
import { PlayerModal } from './components/PlayerModal';
import { SettingsModal } from './components/SettingsModal';
import { ShareModal } from './components/ShareModal';
import { RelatedVideos } from './components/RelatedVideos';
import { CommentsSection } from './components/CommentsSection';
import { Toast } from './components/Toast';

import { AppSettings, LanguageKey } from './types';
import { DEFAULT_SETTINGS, INITIAL_RELATED_VIDEOS, INITIAL_COMMENTS, ADSTERRA_DIRECT_LINK } from './data/mockData';
import { translations } from './data/translations';
import { Shield, Play, Lock, CheckCircle2, Server, HelpCircle, AlertCircle } from 'lucide-react';

export default function App() {
  // Load settings from localStorage if available, ensuring updated Adsterra link is active
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const saved = localStorage.getItem('videohub_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        // If old link was saved in storage, upgrade to new Adsterra link
        if (!parsed.directLinkUrl || parsed.directLinkUrl.includes('profitableratecpmnetwork.com')) {
          parsed.directLinkUrl = ADSTERRA_DIRECT_LINK;
          parsed.displayDomain = 'auctionr.org';
          localStorage.setItem('videohub_settings', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return DEFAULT_SETTINGS;
  });

  const [currentLang, setCurrentLang] = useState<LanguageKey>('bn'); // default to Bangla or Bengali as requested
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [liveCount, setLiveCount] = useState(settings.liveViewersCount || 4892);

  const t = translations[currentLang];

  // Helper to always open Adsterra link in a new tab
  const openAdsterraLinkInNewTab = () => {
    const targetUrl = settings.directLinkUrl || ADSTERRA_DIRECT_LINK;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Save settings when updated
  const handleSaveSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    setLiveCount(newSettings.liveViewersCount);
    try {
      localStorage.setItem('videohub_settings', JSON.stringify(newSettings));
    } catch {
      // ignore
    }
    showToast('Settings updated successfully!');
  };

  // Helper to show transient toast message
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Live counter fluctuation for realism
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCount((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4;
        return Math.max(1200, prev + delta);
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 1. "Watch Video Now" (main red button) -> Open in new tab
  const handleWatchVideoNow = () => {
    openAdsterraLinkInNewTab();
  };

  // 2. "Watch In-Page" -> Open in new tab
  const handleWatchInPage = () => {
    openAdsterraLinkInNewTab();
  };

  // 3. "Copy Link" -> Copy to clipboard AND open in new tab
  const handleCopyLink = async () => {
    const targetUrl = settings.directLinkUrl || ADSTERRA_DIRECT_LINK;
    try {
      await navigator.clipboard.writeText(targetUrl);
      setIsCopied(true);
      showToast(t.copiedSuccess);
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      showToast(t.copiedSuccess);
    }
    // Also open in new tab as requested
    openAdsterraLinkInNewTab();
  };

  // 4. "Share Link" -> Open in new tab
  const handleShareLink = () => {
    openAdsterraLinkInNewTab();
  };

  // 5. Top promotional "Watch" button -> Open in new tab
  const handlePromoWatch = () => {
    openAdsterraLinkInNewTab();
  };

  // 6. Bottom floating "Open" button -> Open in new tab
  const handleFloatingOpen = () => {
    openAdsterraLinkInNewTab();
  };

  // 7. Update thumbnail from device gallery / file upload
  const handleThumbnailChange = (newUrl: string) => {
    const updated = { ...settings, thumbnailUrl: newUrl };
    setSettings(updated);
    try {
      localStorage.setItem('videohub_settings', JSON.stringify(updated));
    } catch {
      // ignore
    }
    showToast('Thumbnail updated successfully!');
  };

  return (
    <div
      className={`min-h-screen text-gray-100 flex flex-col transition-colors duration-300 pb-20 sm:pb-24 ${
        isCinemaMode ? 'bg-[#050507]' : 'bg-[#0d0e12]'
      }`}
    >
      {/* Toast Notification */}
      <Toast message={toastMessage} />

      {/* 1. Top Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={(lang) => {
          setCurrentLang(lang);
          showToast(`Language set to ${lang === 'bn' ? 'বাংলা' : lang.toUpperCase()}`);
        }}
        liveViewers={liveCount}
        onOpenSettings={() => setIsSettingsOpen(true)}
        isCinemaMode={isCinemaMode}
        onToggleCinemaMode={() => {
          setIsCinemaMode(!isCinemaMode);
          showToast(isCinemaMode ? 'Cinema Mode Off' : 'Cinema Mode On');
        }}
        onLogoClick={handleWatchVideoNow}
      />

      {/* 2. Top Promotional Banner */}
      <PromoBanner
        bannerText={t.promoBannerText}
        buttonText={t.promoWatchBtn}
        onWatchClick={handlePromoWatch}
      />

      {/* Main Container: Mobile-First Max-Width 4xl */}
      <main className="mx-auto w-full max-w-4xl px-3 sm:px-4 py-3 sm:py-5 flex-1">
        {/* 3. Sponsored Ad Section (728x90 desktop / 320x50 mobile style banner) */}
        <SponsoredAdBanner
          onAdClick={handleWatchVideoNow}
          tagText={t.sponsoredTag}
          titleText={t.sponsoredAdTitle}
          subtitleText={t.sponsoredAdSubtitle}
          buttonText={t.sponsoredAdBtn}
        />

        {/* 4. Main Video Player Section */}
        <MainVideoPlayer
          settings={settings}
          currentLang={currentLang}
          onWatchVideoNow={handleWatchVideoNow}
          onWatchInPage={handleWatchInPage}
          onCopyLink={handleCopyLink}
          onShareLink={handleShareLink}
          onThumbnailChange={handleThumbnailChange}
          isCopied={isCopied}
        />

        {/* 5. Another Sponsored Card */}
        <SponsoredCard
          onCardClick={handleWatchVideoNow}
          title={t.sponsoredCardTitle}
          subtitle={t.sponsoredCardSubtitle}
          buttonText={t.sponsoredCardBtn}
        />

        {/* Server Switcher Pill Box (Increases credibility & click trigger) */}
        <div className="my-4 rounded-xl border border-white/10 bg-[#14151f] p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
              <Server className="h-3.5 w-3.5 text-red-500" />
              <span>{t.serverSelection}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-medium">99.9% Uptime CDN</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={handleWatchVideoNow}
              className="flex items-center justify-between rounded-lg border border-red-500/50 bg-red-950/30 px-3 py-2 text-xs font-bold text-red-300 hover:bg-red-900/40 transition-colors"
            >
              <span className="flex items-center gap-1.5 truncate">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Server 1 (Fast CDN)</span>
              </span>
              <span className="text-[10px] bg-red-600 text-white rounded px-1.5 py-0.2">BEST</span>
            </button>

            <button
              onClick={handleWatchVideoNow}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-1.5 truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Server 2 (Mirror 1080p)</span>
              </span>
              <span className="text-[10px] text-gray-400">Direct</span>
            </button>

            <button
              onClick={handleWatchVideoNow}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="flex items-center gap-1.5 truncate">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Server 3 (VIP 4K)</span>
              </span>
              <span className="text-[10px] text-amber-400">VIP</span>
            </button>
          </div>
        </div>

        {/* 6. Related Recommended Videos */}
        <RelatedVideos
          videos={INITIAL_RELATED_VIDEOS}
          onVideoClick={handleWatchVideoNow}
          currentLang={currentLang}
        />

        {/* 7. Authentic Comments Section */}
        <CommentsSection
          comments={INITIAL_COMMENTS}
          currentLang={currentLang}
        />

        {/* Trust Badges & Disclaimer Section */}
        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-gray-400">
          <div className="mb-3 flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-400">
            <span className="flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>SSL 256-bit Encrypted Stream</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
              <span>Safe Link Verified</span>
            </span>
            <span className="flex items-center gap-1">
              <Lock className="h-3.5 w-3.5 text-gray-400" />
              <span>Zero Malware Direct Mirror</span>
            </span>
          </div>

          <p className="text-[11px] text-gray-400 max-w-xl mx-auto leading-relaxed">
            VideoHub provides high-speed direct mirror streams. Content is distributed via decentralized CDN nodes. All rights and trademarks belong to their respective copyright holders.
          </p>

          <p className="mt-2 text-[10px] text-gray-400">
            © {new Date().getFullYear()} VideoHub Network. All Rights Reserved.
          </p>
        </div>
      </main>

      {/* 8. Floating Bottom Sponsored Bar */}
      <FloatingBottomBar
        onOpenClick={handleFloatingOpen}
        currentLang={currentLang}
      />

      {/* 9. Player Buffer Simulation Modal */}
      <PlayerModal
        isOpen={isPlayerModalOpen}
        onClose={() => setIsPlayerModalOpen(false)}
        settings={settings}
        currentLang={currentLang}
        onDirectLinkClick={handleWatchVideoNow}
      />

      {/* 10. Settings Configuration Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={handleSaveSettings}
        currentLang={currentLang}
      />

      {/* 11. Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        directUrl={settings.directLinkUrl}
        videoTitle={settings.videoTitle}
        currentLang={currentLang}
        onCopySuccess={handleCopyLink}
        isCopied={isCopied}
      />
    </div>
  );
}
