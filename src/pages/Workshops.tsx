import { motion } from 'framer-motion';
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

export const Workshops = () => {
  return (
    <>
      <SEO title="Engineering Workshops" description="Intensive hands-on workshops in CAD, CAE, and additive manufacturing." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Workshops" title="Intensive Hands-On Learning" description="Small-group workshops with real-world projects and expert guidance." />

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
                  <Button className="w-full mt-auto">Register Now</Button>
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
    </>
  );
};
