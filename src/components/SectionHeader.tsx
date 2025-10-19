import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/animations';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ badge, title, description, align = 'center' }: SectionHeaderProps) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={`max-w-3xl ${alignClass} mb-16`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
};
