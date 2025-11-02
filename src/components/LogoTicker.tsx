import { motion } from 'framer-motion';

const logos = [
  // New client logos (shown first)
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762091930/4_woaxyp.jpg', name: 'KL University' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762091930/1_gp0851.jpg', name: 'Kaveri University' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762091929/3_n5lklv.jpg', name: 'CBIT' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762091929/5_mzsceo.jpg', name: 'VNR VJIET' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762091928/2_h3b4pz.jpg', name: 'VIT-AP University' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1762091928/6_mhnf0t.jpg', name: 'KIIT' },
  // Original set
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760946020/IMG_9329_bzf0lh.jpg', name: 'MNR Scottsdale Institutions' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760946019/IMG_9323_fezrgc.jpg', name: 'JNTU Anantapur' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760946019/IMG_9320_kn0lq2.jpg', name: 'GRIET' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945878/IMG_9335_yhzvjd.jpg', name: 'BITS Narsampet' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945878/IMG_9334_ghon0i.jpg', name: 'Fortune Butterfly City' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945877/IMG_9330_cb095f.jpg', name: 'CMR Hospital' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945876/IMG_9333_poaswm.jpg', name: 'Sri Vijaya Ganapathi Avenues' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945876/IMG_9326_eoxsog.jpg', name: 'Geethanjali College' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945876/IMG_9332_qkttmx.jpg', name: 'Fortune Butterfly School & College' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945875/IMG_9321_obubw7.jpg', name: 'Bonam Venkata Chalamayya Group' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945873/IMG_9324_urepdh.jpg', name: 'CBIT' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945872/IMG_9322_h44icb.jpg', name: 'GGU' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945871/IMG_9319_hj31je.jpg', name: 'CMR' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945871/IMG_9318_yqnyii.jpg', name: 'CMR Group' },
  { src: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760945871/IMG_9317_okpbis.jpg', name: 'VNR VJIET' }
];

export const LogoTicker = () => {
  return (
    <div className="relative overflow-hidden py-8 bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-800/20 via-fuchsia-700/15 to-cyan-700/20 blur-3xl" />
      <motion.div
        animate={{ x: [0, -2400] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="flex gap-6 items-stretch"
      >
        {[...logos, ...logos, ...logos].map((item, i) => (
          <div key={i} className="shrink-0">
            <div className="relative w-56 h-40 flex flex-col items-center justify-center p-3">
              <img
                src={item.src}
                alt={item.name}
                className="relative z-10 max-w-full max-h-24 object-contain rounded-xl"
                loading="lazy"
              />
              <div className="mt-2 text-center text-gray-300 text-xs leading-snug px-1">
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
