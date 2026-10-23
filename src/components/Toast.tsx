import React from 'react';
import { CheckCircle2, Copy } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-[#121a16] px-4 py-2.5 text-xs font-bold text-emerald-300 shadow-2xl shadow-emerald-950/80 backdrop-blur-md animate-fade-in">
      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
      <span>{message}</span>
    </div>
  );
};
