import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';

const items = [
  // Videos
  { type: 'video', url: 'https://res.cloudinary.com/dqnmk3s8t/video/upload/v1761064434/WhatsApp_Video_2025-10-21_at_9.40.33_PM_rgjmyq.mp4', caption: 'Shop floor walk-through' },
  { type: 'video', url: 'https://res.cloudinary.com/dqnmk3s8t/video/upload/v1761064437/WhatsApp_Video_2025-10-21_at_9.40.34_PM_i4f9fz.mp4', caption: 'Machine in operation' },
  { type: 'video', url: 'https://res.cloudinary.com/dqnmk3s8t/video/upload/v1761064439/WhatsApp_Video_2025-10-21_at_11.58.22_AM_-_Copy_jneoxw.mp4', caption: 'Process overview' },
  { type: 'video', url: 'https://res.cloudinary.com/dqnmk3s8t/video/upload/v1761064438/WhatsApp_Video_2025-10-21_at_9.40.37_PM_zkmp8s.mp4', caption: 'Outdoor test clip' },
  
  // Photos

  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063283/WhatsApp_Image_2025-10-21_at_21.40.32_e77c8b49_okvkcz.jpg', caption: 'Geethanjali College of Engineering and Technology – RFDP Program' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760874648/IMG_9352_bvxbgz.jpg', caption: 'BITS Warangal – 3D Printing Workshop' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760874645/IMG_9353_pjxjde.jpg', caption: 'JNTUH College of Engineering – 3D Printing Workshop' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760874635/IMG_9354_aiiyqo.jpg', caption: 'JNTUH College of Engineering – 3D Printing Workshop' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760872632/IMG_9344_y2gpmf.jpg', caption: 'Geethanjali College of Engineering and Technology – RFDP Program' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760872636/IMG_8647_sospm7.jpg', caption: 'Kaveri University – Workshops' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760874633/IMG_9348_go4vxi.jpg', caption: 'MLR Institute of Engineering and Technology – FDP Program' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760872631/IMG_9345_hoz31l.jpg', caption: 'Geethanjali College of Engineering and Technology – RFDP Program' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871345/IMG_8660_vhzzpl.jpg', caption: 'Kaveri University – Workshops' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871344/IMG_8645_oiz7lc.jpg', caption: 'Kaveri University – Workshops' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871344/IMG_8650_ecdtit.jpg', caption: 'Kaveri University – Workshops' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871343/IMG_9349_ti7zuy.jpg', caption: '3D Printing World Award – Trinity Media' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871342/IMG_9351_zdjoqd.jpg', caption: 'DRDO School RCI – 3D Printing Workshop' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871342/da9b8445-d678-4f78-8538-90c09cc61158_gvsgsr.jpg', caption: 'Kaveri University – Workshops' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871341/IMG_9350_ap6kpj.jpg', caption: '3D Printing World Award – Trinity Media' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063285/WhatsApp_Image_2025-10-21_at_21.37.09_3b6b26a1_g0c7e8.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063284/WhatsApp_Image_2025-10-21_at_21.40.29_107125f0_vdcxre.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063284/WhatsApp_Image_2025-10-21_at_21.37.25_a0edc21c_hjzhwe.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063284/WhatsApp_Image_2025-10-21_at_21.37.26_a05337c5_ppoej2.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063283/WhatsApp_Image_2025-10-21_at_21.40.28_81cc5c50_rda2hx.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063283/WhatsApp_Image_2025-10-21_at_21.40.30_98921d4d_sf1pnr.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063284/WhatsApp_Image_2025-10-21_at_21.37.26_abde6c88_rwwxdp.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063283/WhatsApp_Image_2025-10-21_at_21.40.28_c1331077_fpgct7.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063283/WhatsApp_Image_2025-10-21_at_21.40.33_5ab45161_w7qymn.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063283/WhatsApp_Image_2025-10-21_at_21.40.32_d34eae6d_qzgvsc.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063283/WhatsApp_Image_2025-10-21_at_21.40.31_38e54e2e_s7nskp.jpg', caption: 'Prototypes & Products' },
  { type: 'photo', url: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761063282/WhatsApp_Image_2025-10-21_at_21.40.31_41a65f08_oys13g.jpg', caption: 'Prototypes & Products' },
  
];

export const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? items : items.filter(i => i.type === filter);

  return (
    <>
      <SEO title="Project Gallery" description="Explore our portfolio of CAD designs, CAE simulations, and 3D printed parts." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Gallery" title="Our Work in Action" description="A showcase of precision engineering and manufacturing excellence." />

          <div className="flex gap-3 mb-16 justify-center flex-wrap">
            {['all', 'photo', 'video'].map(f => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300 ${
                  filter === f
                    ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300'
                }`}
              >
                {f === 'all' ? 'All' : f === 'photo' ? 'Photos' : 'Videos'}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative w-full aspect-[4/3]">
                    {item.type === 'photo' ? (
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        src={item.url}
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        playsInline
                        preload="metadata"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
