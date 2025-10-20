import { motion } from 'framer-motion';

const images = [
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760946020/IMG_9329_bzf0lh.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760946019/IMG_9323_fezrgc.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760946019/IMG_9320_kn0lq2.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945878/IMG_9335_yhzvjd.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945878/IMG_9334_ghon0i.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945877/IMG_9330_cb095f.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945876/IMG_9333_poaswm.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945876/IMG_9326_eoxsog.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945876/IMG_9332_qkttmx.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945875/IMG_9321_obubw7.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945873/IMG_9324_urepdh.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945872/IMG_9322_h44icb.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945871/IMG_9319_hj31je.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945871/IMG_9318_yqnyii.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945871/IMG_9317_okpbis.jpg'
];

export const LogoTicker = () => {
  return (
    <div className="relative overflow-hidden py-8 bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-800/20 via-fuchsia-700/15 to-cyan-700/20 blur-3xl" />
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="flex gap-6 items-center"
      >
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} className="shrink-0">
            <div className="relative w-56 h-32 flex items-center justify-center p-3">
              <img
                src={src}
                alt={`slide-${i}`}
                className="relative z-10 max-w-full max-h-full object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
