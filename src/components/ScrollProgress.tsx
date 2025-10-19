import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      <div className="relative w-12 h-12">
        <svg className="transform -rotate-90 w-12 h-12">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: scrollProgress / 100 }}
            transition={{ duration: 0.2 }}
            style={{
              pathLength: scrollProgress / 100
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-violet-400">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
      <div className="w-0.5 h-20 bg-gradient-to-b from-violet-500/50 to-transparent rounded-full" />
    </div>
  );
};
