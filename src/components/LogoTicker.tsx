import { motion } from 'framer-motion';

const tools = [
  'SolidWorks', 'CATIA', 'AutoCAD', 'ANSYS', 'Abaqus',
  'HyperMesh', 'LS-DYNA', 'COMSOL', 'Inventor', 'Creo'
];

export const LogoTicker = () => {
  return (
    <div className="overflow-hidden py-8 bg-white/5">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-12 items-center"
      >
        {[...tools, ...tools, ...tools].map((tool, i) => (
          <div
            key={i}
            className="px-8 py-4 bg-gray-800/50 border border-white/10 rounded-xl whitespace-nowrap"
          >
            <span className="text-gray-300 font-medium">{tool}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
