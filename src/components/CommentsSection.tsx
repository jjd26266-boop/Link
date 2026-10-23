import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { UserComment, LanguageKey } from '../types';
import { translations } from '../data/translations';

interface CommentsSectionProps {
  comments: UserComment[];
  currentLang: LanguageKey;
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments: initialComments,
  currentLang,
}) => {
  const [commentList, setCommentList] = useState<UserComment[]>(initialComments);
  const [newText, setNewText] = useState('');
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const t = translations[currentLang];

  const handleLike = (id: string) => {
    setLikedIds((prev) => {
      const isCurrentlyLiked = !!prev[id];
      const updated = { ...prev, [id]: !isCurrentlyLiked };

      setCommentList((list) =>
        list.map((c) =>
          c.id === id ? { ...c, likes: c.likes + (isCurrentlyLiked ? -1 : 1) } : c
        )
      );

      return updated;
    });
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;

    const newComment: UserComment = {
      id: `c-${Date.now()}`,
      author: 'You (Anonymous)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      timeAgo: 'Just now',
      likes: 1,
      content: newText.trim(),
      verified: false,
    };

    setCommentList([newComment, ...commentList]);
    setNewText('');
  };

  return (
    <div className="mt-6 mb-8 rounded-2xl border border-white/10 bg-[#121318] p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
        <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-red-500" />
          <span>{t.comments}</span>
          <span className="rounded-full bg-white/10 px-2 py-0.2 text-xs font-semibold text-gray-300">
            {commentList.length}
          </span>
        </h3>
        <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Live Feed
        </span>
      </div>

      {/* Add comment input */}
      <form onSubmit={handleAddComment} className="mb-4 flex gap-2">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder={t.addComment}
          className="flex-1 rounded-xl border border-white/10 bg-black/50 px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center gap-1 rounded-xl bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-500 transition-colors shadow-xs"
        >
          <span>{t.postComment}</span>
          <Send className="h-3 w-3" />
        </button>
      </form>

      {/* Comment Items */}
      <div className="space-y-3">
        {commentList.map((c) => (
          <div key={c.id} className="flex gap-2.5 sm:gap-3 rounded-xl bg-[#171822] p-3 border border-white/5">
            <img
              src={c.avatar}
              alt={c.author}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-white/15"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white truncate">{c.author}</span>
                  {c.verified && (
                    <CheckCircle2 className="h-3 w-3 text-red-500 fill-red-500/20" />
                  )}
                </div>
                <span className="text-[10px] text-gray-400">{c.timeAgo}</span>
              </div>
              <p className="mt-1 text-xs text-gray-300 leading-relaxed break-words">
                {c.content}
              </p>
              <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-400">
                <button
                  onClick={() => handleLike(c.id)}
                  className={`flex items-center gap-1 font-semibold transition-colors ${
                    likedIds[c.id] ? 'text-red-400 font-bold' : 'hover:text-white'
                  }`}
                >
                  <ThumbsUp className="h-3 w-3" />
                  <span>{c.likes}</span>
                </button>
                <span>•</span>
                <span className="text-emerald-400 font-medium text-[10px]">Verified Viewer</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
