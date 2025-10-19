import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const text = "VYOMA3D";
  const tagline = "Precision Engineering in 3D";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-950 z-[100] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950" />

      <div className="text-center relative z-10">
        <div className="relative inline-block mb-12">
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-cyan-600 to-violet-600 rounded-3xl opacity-30 blur-2xl animate-pulse" />

          <motion.div
            className="relative w-32 h-32 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
              <motion.div
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
              <span className="text-4xl font-bold text-white tracking-wider relative z-10">V3D</span>
            </div>
          </motion.div>
        </div>

        <div className="mb-6 overflow-hidden">
          <motion.h2 className="text-4xl font-bold mb-2 flex justify-center gap-1">
            {text.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.1,
                  ease: "easeOut"
                }}
                className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-gray-400 text-sm tracking-widest uppercase"
          >
            {tagline.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 1.5 + i * 0.03
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <div className="w-80 mx-auto mb-6 space-y-3">
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent">
              <motion.div
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-violet-600 via-cyan-600 to-violet-600 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-center text-xs"
          >
            <span className="text-gray-500 uppercase tracking-wider">Initializing</span>
            <span className="text-violet-400 font-mono font-bold text-base">{progress}%</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-gray-600 text-xs"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 border-2 border-gray-600 border-t-violet-400 rounded-full"
          />
          <span className="uppercase tracking-wider">Loading Experience</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
