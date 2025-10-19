import { motion } from 'framer-motion';
import { Box, Cog, Printer, Zap } from 'lucide-react';

const tools = [
  { Icon: Box, delay: 0, duration: 3 },
  { Icon: Cog, delay: 0.5, duration: 4 },
  { Icon: Printer, delay: 1, duration: 3.5 },
  { Icon: Zap, delay: 1.5, duration: 4.5 }
];

export const FloatingTools = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {tools.map((tool, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: tool.duration,
            repeat: Infinity,
            delay: tool.delay,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 20}%`
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
              <tool.Icon className="text-violet-400" size={32} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
