import React from 'react';
import { X, Copy, Check, MessageCircle, Send, Share2 } from 'lucide-react';
import { translations } from '../data/translations';
import { LanguageKey } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  directUrl: string;
  videoTitle: string;
  currentLang: LanguageKey;
  onCopySuccess: () => void;
  isCopied: boolean;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  directUrl,
  videoTitle,
  currentLang,
  onCopySuccess,
  isCopied,
}) => {
  const t = translations[currentLang];
  if (!isOpen) return null;

  const shareText = `Watch ${videoTitle} in Full HD 1080p:`;

  const shareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${directUrl}`)}`, '_blank');
  };

  const shareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(directUrl)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(directUrl)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(directUrl)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl border border-white/15 bg-[#14151e] shadow-2xl p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Share2 className="h-4 w-4 text-red-500" />
            <h3 className="text-sm font-bold text-white">{t.shareModalTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Share buttons grid */}
        <div className="grid grid-cols-4 gap-2 my-4 text-center">
          <button
            onClick={shareWhatsApp}
            className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:scale-105 transition-transform"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
              <MessageCircle className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-semibold">WhatsApp</span>
          </button>

          <button
            onClick={shareTelegram}
            className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-400 hover:scale-105 transition-transform"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm">
              <Send className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-semibold">Telegram</span>
          </button>

          <button
            onClick={shareTwitter}
            className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 hover:scale-105 transition-transform"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white border border-white/20 shadow-sm font-bold text-sm">
              𝕏
            </div>
            <span className="text-[10px] font-semibold">X/Twitter</span>
          </button>

          <button
            onClick={shareFacebook}
            className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-400 hover:scale-105 transition-transform"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm font-bold text-sm">
              f
            </div>
            <span className="text-[10px] font-semibold">Facebook</span>
          </button>
        </div>

        {/* Copy input box */}
        <div className="rounded-xl border border-white/10 bg-black/60 p-2 flex items-center justify-between gap-2">
          <input
            type="text"
            readOnly
            value={directUrl}
            className="w-full bg-transparent text-xs text-gray-300 font-mono focus:outline-none truncate"
          />
          <button
            onClick={onCopySuccess}
            className="shrink-0 flex items-center gap-1 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-500 transition-colors shadow-xs"
          >
            {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{isCopied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
