import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export const AnimatedSection = ({ children, className = '', stagger = false }: AnimatedSectionProps) => {
  if (stagger) {
    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);
