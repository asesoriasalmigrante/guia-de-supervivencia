import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const STORAGE_KEY = 'guia_visitor_count';

function getVisitorCount(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const count = saved ? parseInt(saved, 10) : 0;
    return isNaN(count) ? 0 : count;
  } catch {
    return 0;
  }
}

function incrementVisitorCount(): number {
  const count = getVisitorCount() + 1;
  try {
    localStorage.setItem(STORAGE_KEY, count.toString());
  } catch {}
  return count;
}

export function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const newCount = incrementVisitorCount();
    setCount(newCount);
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (count === 0) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-[#0a1526]/90 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/20">
        <div className="relative flex items-center justify-center">
          <Eye className="w-3.5 h-3.5 text-[#E79923]" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        </div>
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
          <span className="text-[#E79923] font-extrabold">{count.toLocaleString()}</span> visits
        </span>
      </div>
    </div>
  );
}
