import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const workshops = [
  { title: 'Design for Additive Manufacturing', date: 'Nov 15-16, 2025', duration: '2 days', location: 'San Francisco', spots: '12 available', topics: ['Topology optimization', 'Lattice structures', 'Support strategies', 'Material selection'] },
  { title: 'ANSYS Workbench Intensive', date: 'Dec 1-3, 2025', duration: '3 days', location: 'Online', spots: '8 available', topics: ['Static structural', 'Modal & harmonic', 'Thermal steady-state', 'Optimization'] },
  { title: 'SolidWorks Surfacing', date: 'Jan 20-21, 2026', duration: '2 days', location: 'New York', spots: 'Filling fast', topics: ['Loft & boundary', 'Sweeps & blends', 'Surface repair', 'Class-A surfaces'] }
];

const sliderImages = [
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760874648/IMG_9352_bvxbgz.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760874645/IMG_9353_pjxjde.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760874635/IMG_9354_aiiyqo.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760874633/IMG_9348_go4vxi.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760872632/IMG_9344_y2gpmf.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760872631/IMG_9345_hoz31l.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871343/IMG_9349_ti7zuy.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871342/IMG_9351_zdjoqd.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871342/da9b8445-d678-4f78-8538-90c09cc61158_gvsgsr.jpg',
  'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1760871341/IMG_9350_ap6kpj.jpg'
];

export const Workshops = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  const openRegister = (title: string) => {
    setSelectedWorkshop(title);
    setShowRegister(true);
  };

  const closeRegister = () => {
    setShowRegister(false);
    setSelectedWorkshop(null);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    alert(`Registration submitted\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nWorkshop: ${data.get('workshop')}\nNotes: ${data.get('notes')}`);
    closeRegister();
  };

  return (
    <>
      <SEO title="Engineering Workshops" description="Intensive hands-on workshops in CAD, CAE, and additive manufacturing." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Workshops" title="Intensive Hands-On Learning" description="Small-group workshops with real-world projects and expert guidance." />

          <div className="overflow-hidden py-6">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 items-stretch"
            >
              {[...sliderImages, ...sliderImages].map((src, i) => (
                <div key={`${src}-${i}`} className="shrink-0 w-72 h-44 rounded-xl overflow-hidden border border-white/10 bg-black/40">
                  <img src={src} alt={`Workshop ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workshops.map((ws, i) => (
              <motion.div key={ws.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4">{ws.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} className="text-violet-400" />
                      {ws.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock size={16} className="text-violet-400" />
                      {ws.duration}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={16} className="text-violet-400" />
                      {ws.location}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium">
                      {ws.spots}
                    </span>
                  </div>
                  <ul className="space-y-1 mb-6 flex-grow">
                    {ws.topics.map(t => (
                      <li key={t} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-violet-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-auto" onClick={() => openRegister(ws.title)}>Register Now</Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Workshop?</h3>
              <p className="text-gray-400 mb-6">We can design tailored workshops for your team's specific needs.</p>
              <Button variant="outline">Request Custom Workshop</Button>
            </Card>
          </div>
        </div>
      </div>
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={closeRegister} />
          <div className="relative z-10 w-full max-w-lg mx-auto">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Workshop Registration</h3>
                <button onClick={closeRegister} className="text-gray-400 hover:text-white">✕</button>
              </div>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                  <input name="name" required className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500" placeholder="Your name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <input type="email" name="email" required className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Phone</label>
                    <input type="tel" name="phone" className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Workshop</label>
                  <input name="workshop" readOnly value={selectedWorkshop || ''} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Notes</label>
                  <textarea name="notes" rows={3} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500" placeholder="Any specific questions or requirements" />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <Button variant="outline" type="button" onClick={closeRegister}>Cancel</Button>
                  <Button type="submit">Submit Registration</Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};
