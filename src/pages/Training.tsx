import { motion } from 'framer-motion';
import { GraduationCap, Users, Globe, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { trainingCourses } from '../data/training';
import { useNavigate } from 'react-router-dom';

const formatINR = (amount: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

const formats = [
  { icon: Users, title: 'Corporate Training', description: 'On-site training customized for your team' },
  { icon: Globe, title: 'Online Live', description: 'Interactive sessions with expert instructors' },
  { icon: Calendar, title: 'Weekend Bootcamps', description: 'Intensive hands-on workshops' }
];

export const Training = () => {
  const navigate = useNavigate();
  return (
    <>
      <SEO title="CAD/CAE Training & Workshops" description="Professional training programs in SolidWorks, ANSYS, 3D printing, and advanced simulation tools." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Training" title="Upskill Your Engineering Team" description="Hands-on training programs led by industry experts with 10+ years experience." />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {formats.map((format, i) => (
              <motion.div key={format.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="text-center">
                  <format.icon className="mx-auto text-violet-400 mb-3" size={36} />
                  <h3 className="font-bold text-white mb-2">{format.title}</h3>
                  <p className="text-gray-400 text-sm">{format.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <SectionHeader title="Training Tracks" />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {trainingCourses.map((track, i) => (
              <motion.div key={track.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{track.title}</h3>
                      <p className="text-sm text-gray-400">{track.level} • {track.duration}</p>
                    </div>
                    <span className="text-2xl font-bold text-violet-400">{formatINR(track.priceInr)}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {track.topics.map(topic => (
                      <li key={topic} className="text-gray-300 text-sm flex items-center gap-2">
                        <GraduationCap size={16} className="text-violet-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate(`/training/syllabus/${track.slug}`)}
                  >
                    View Syllabus
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => window.location.href = '/get-a-quote'}>
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
