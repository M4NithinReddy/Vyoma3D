import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

const values = [
  { icon: Award, title: 'PRECISION', description: 'Excellence in every detail, accuracy in every solution. Delivering engineering solutions and 3D printed parts with exacting standards. Maintaining rigorous quality control throughout all processes. Ensuring every project meets or exceeds specifications.' },
  { icon: Eye, title: 'INNOVATION', description: 'Pushing boundaries, creating possibilities. Continuously advancing our technical capabilities and methodologies. Embracing new technologies and creative problem-solving approaches. Leading industry transformation through breakthrough solutions.' },
  { icon: Users, title: 'EMPOWERMENT', description: 'Enabling our clients to achieve more. Providing tools, knowledge, and support that amplify our clients\' capabilities. Making advanced engineering and 3D printing accessible to all business sizes. Building long-term partnerships that drive mutual success.' },
  { icon: Target, title: 'INTEGRITY', description: 'Honest, transparent, and reliable in all we do. Delivering on our commitments with consistency and transparency. Building trust through ethical business practices. Communicating openly and taking responsibility for our work.' },
  { icon: Users, title: 'COLLABORATION', description: 'Achieving excellence through partnership. Working closely with clients to understand and solve their unique challenges. Fostering teamwork internally and with external partners. Sharing knowledge and expertise to drive industry advancement.' },
  { icon: Award, title: 'SUSTAINABILITY', description: 'Engineering for today and tomorrow. Promoting environmentally responsible manufacturing practices. Optimizing material usage and minimizing waste through advanced 3D printing. Supporting clients in achieving their sustainability goals.' }
];

const team = [
  { name: 'Kiran bolisetty', role: 'Co-founder & Technical Director', bio: '12 years of experience in Automotive and Heavy vehicle industries CAE', image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761237565/WhatsApp_Image_2025-10-23_at_6.49.03_PM_hgwsyf.jpg' },
  { name: 'Dr M.AjayKumar', role: 'Founder and Managing director', bio: 'PhD', image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761238362/WhatsApp_Image_2025-10-23_at_10.20.18_PM_wudzhv.jpg' }
];

const milestones = [
  { year: '2018', event: 'Founded VYOMA3D' },
  { year: '2019', event: 'Started branches in Bangalore and Tirupati' },
  { year: '2021', event: 'Expanded to 3D printing services' },
  { year: '2023', event: '500+ projects delivered' },
  { year: '2025', event: 'Opened training academy' }
];

export const About = () => {
  return (
    <>
      <SEO title="About Us" description="Vision, Mission, and Core Values of VYOMA3D." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="About Us" title="Engineering Possibilities" description="Transforming how the world designs, creates, and innovates through precision technology and limitless imagination." />

          <div className="grid md:grid-cols-2 gap-12 mb-24 max-w-5xl mx-auto">
            <Card>
              <Eye className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">Vision Statement</h3>
              <p className="text-gray-400">To unlock infinite possibilities in engineering and manufacturing, transforming how the world designs, creates, and innovates through precision technology and limitless imagination.</p>
            </Card>
            <Card>
              <Target className="text-violet-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">Mission Statement</h3>
              <p className="text-gray-400">We empower innovators, engineers, and businesses to bring their boldest ideas to life through exceptional engineering services and advanced 3D printing solutions. By combining technical expertise, cutting-edge technology, and unwavering commitment to quality, we accelerate innovation from concept to reality.</p>
            </Card>
          </div>

          <SectionHeader title="Our Values" />
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="text-center">
                  <v.icon className="mx-auto text-orange-400 mb-3" size={36} />
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm">{v.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <SectionHeader title="Leadership Team" />
          <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-3xl mx-auto justify-items-center">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="text-center w-80 h-72 flex flex-col justify-start">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-violet-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <SectionHeader title="Our Journey" />
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 mb-8">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-violet-400">{m.year}</span>
                </div>
                <div className="flex-grow">
                  <Card className="py-4">
                    <p className="text-white font-medium">{m.event}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
