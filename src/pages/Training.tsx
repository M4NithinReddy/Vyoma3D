import { motion } from 'framer-motion';
import { GraduationCap, Users, Globe, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { trainingCourses } from '../data/training';
import { useNavigate } from 'react-router-dom';

// price display removed; formatter no longer required

const formats = [
  { icon: Users, title: 'Corporate Training', description: 'On-site training customized for your team' },
  { icon: Globe, title: 'Online Live', description: 'Interactive sessions with expert instructors' },
  { icon: Calendar, title: 'Weekend Bootcamps', description: 'Intensive hands-on workshops' }
];

export const Training = () => {
  const navigate = useNavigate();
  return (
    <>
      <SEO title="CAD/CAE Training & Workshops" description="Professional, hands-on training programs across CAD, CAE, and 3D printing with industry-focused curricula." />

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

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            {trainingCourses.map((track, i) => (
              <motion.div key={track.slug} className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{track.title}</h3>
                      <p className="text-sm text-gray-400">{track.level} • {track.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4 flex-grow">
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
            <Button size="lg" onClick={() => window.location.href = '/enroll'}>
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
