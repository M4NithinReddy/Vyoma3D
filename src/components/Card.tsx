import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { hoverLift } from '../lib/animations';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? hoverLift : {}}
      className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl ${className}`}>
      {children}
    </div>
  );
};
