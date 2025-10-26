import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { useState } from 'react';

const values = [
  { icon: Award, title: 'PRECISION', description: 'Excellence in every detail, accuracy in every solution. Delivering engineering solutions and 3D printed parts with exacting standards. Maintaining rigorous quality control throughout all processes. Ensuring every project meets or exceeds specifications.' },
  { icon: Eye, title: 'INNOVATION', description: 'Pushing boundaries, creating possibilities. Continuously advancing our technical capabilities and methodologies. Embracing new technologies and creative problem-solving approaches. Leading industry transformation through breakthrough solutions.' },
  { icon: Users, title: 'EMPOWERMENT', description: 'Enabling our clients to achieve more. Providing tools, knowledge, and support that amplify our clients\' capabilities. Making advanced engineering and 3D printing accessible to all business sizes. Building long-term partnerships that drive mutual success.' },
  { icon: Target, title: 'INTEGRITY', description: 'Honest, transparent, and reliable in all we do. Delivering on our commitments with consistency and transparency. Building trust through ethical business practices. Communicating openly and taking responsibility for our work.' },
  { icon: Users, title: 'COLLABORATION', description: 'Achieving excellence through partnership. Working closely with clients to understand and solve their unique challenges. Fostering teamwork internally and with external partners. Sharing knowledge and expertise to drive industry advancement.' },
  { icon: Award, title: 'SUSTAINABILITY', description: 'Engineering for today and tomorrow. Promoting environmentally responsible manufacturing practices. Optimizing material usage and minimizing waste through advanced 3D printing. Supporting clients in achieving their sustainability goals.' }
];

const team = [
  {
    name: 'Dr. M. Ajay Kumar',
    role: 'Founder & Managing Director, Vyoma3D',
    bio: 'Dr. M. Ajay Kumar is the Founder and Managing Director of Vyoma3D, a leading company in Additive Manufacturing and 3D Printing Solutions. With over 10 years of experience and a Ph.D. from KIIT University, he specializes in metal and polymer 3D printing, process optimization, and advanced materials development. He has trained hundreds of faculty members and over 5,000 students across India through workshops and faculty development programs (FDPs), fostering education, research, and industry adoption of additive manufacturing. Under his leadership, Vyoma3D delivers innovative, customized, and sustainable manufacturing solutions across aerospace, automotive, defense, and biomedical sectors.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761238362/WhatsApp_Image_2025-10-23_at_10.20.18_PM_wudzhv.jpg'
  },
  {
    name: 'Kiran Bollisetty',
    role: 'Co-Founder & Technical Director',
    bio: '10+ years of experience in automotive and heavy machinery sectors. Leading technical operations at VYOMA3D with specialized expertise in FEA modeling and analysis of automotive seats, BIW components, and construction equipment. Expertise in linear/non-linear analysis, implicit analysis, and optimization projects.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761237565/WhatsApp_Image_2025-10-23_at_6.49.03_PM_hgwsyf.jpg'
  },
  {
    name: 'Dr. Vasireddy Mani Chandana',
    role: 'Head – Agriculture Division | Ph.D. Agronomy',
    bio: 'Dr. Vasireddy Mani Chandana, Ph.D. in Agronomy from Banaras Hindu University (BHU), is the Head of the Agriculture Division with extensive experience in agronomic research, crop management, and agricultural extension. She has served as a Consultant at IRRI and MANAGE, Research Associate at KVK, Acharya N.G. Ranga Agricultural University, and Senior Research Fellow at IIOPR. Her work focuses on research, training, and capacity building, promoting sustainable agriculture and technology adoption across India.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761495983/WhatsApp_Image_2025-10-26_at_8.50.36_PM_egfr9d.jpg'
  },
  {
    name: 'N. Madhu Babu',
    role: 'Chief Operational Manager – Andhra Pradesh | M.Tech Gold Medalist | Operations & Project Management Specialist',
    bio: 'N. Madhu Babu, an M.Tech gold medalist from JNTUA, is the Chief Operational Manager for Vyoma3D in Andhra Pradesh. He oversees day-to-day operations, project execution, and client coordination, ensuring smooth workflows, timely delivery, and high-quality service across all regional projects.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761495982/WhatsApp_Image_2025-10-26_at_8.49.36_PM_v3wjgw.jpg'
  },
  {
    name: 'Mal Reddy',
    role: 'Design Lead & Branch Head – Bangalore | Additive Manufacturing Specialist',
    bio: 'Mal Reddy is the Design Lead and Branch Head of Vyoma3D’s Bangalore office, specializing in additive manufacturing, 3D printing, and product design. He leads the branch in overseeing design innovation, client projects, and delivering customized 3D printing solutions across multiple industries.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761495983/WhatsApp_Image_2025-10-26_at_8.33.01_PM_ihszch.jpg'
  },
  {
    name: 'B. Barath Kumar',
    role: 'Robotics Engineer, Vyoma3D',
    bio: 'B. Barath Kumar is a Robotics Engineer at Vyoma3D, specializing in robotic automation and additive manufacturing integration. He focuses on developing intelligent robotic systems, custom machine designs, and process automation to advance smart manufacturing at Vyoma3D.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761495982/WhatsApp_Image_2025-10-26_at_8.59.46_PM_e6tbhr.jpg'
  },
  {
    name: 'Sireesha A',
    role: 'HR and Digital Marketing Expert',
    bio: 'Sireesha is an accomplished HR and digital marketing expert, known for driving impactful talent strategies and online branding initiatives in fast-paced business environments. With comprehensive experience in recruitment, employee engagement, and digital campaign management, she excels at building high-performance teams while enhancing organizational visibility through innovative marketing solutions. As a leadership team member, Sireesha combines her people-centric HR approach with data-driven digital marketing expertise to foster a collaborative culture and propel company growth.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761495982/WhatsApp_Image_2025-10-26_at_9.01.52_PM_k4tldr.jpg'
  },
  {
    name: 'D. Shanthosh',
    role: 'Digital Marketing Lead – Vyoma3D',
    bio: 'D. Shanthosh is the Digital Marketing Lead at Vyoma3D, responsible for driving the company’s online presence, brand strategy, and digital campaigns. He specializes in social media marketing, content strategy, and digital outreach, ensuring Vyoma3D’s innovations reach a wide and engaged audience.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761495982/WhatsApp_Image_2025-10-26_at_9.07.43_PM_gxv8if.jpg'
  },
  {
    name: 'B. Madhukar',
    role: 'Rapid Prototyping Engineer, Vyoma3D',
    bio: 'B. Madhukar is a Rapid Prototyping Engineer at Vyoma3D, specializing in FDM, SLA, and SLS 3D printing technologies. He focuses on design validation, part optimization, and quick-turn prototyping to deliver high-quality, functional components for diverse industrial applications.',
    image: 'https://res.cloudinary.com/dqnmk3s8t/image/upload/v1761495982/WhatsApp_Image_2025-10-26_at_9.09.03_PM_di8qzf.jpg'
  }
];

const milestones = [
  { year: '2018', event: 'Founded VYOMA3D' },
  { year: '2019', event: 'Started branches in Bangalore and Tirupati' },
  { year: '2021', event: 'Expanded to 3D printing services' },
  { year: '2023', event: '500+ projects delivered' },
  { year: '2025', event: 'Opened training academy' }
];

export const About = () => {
  const [activeMember, setActiveMember] = useState<typeof team[number] | null>(null);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 max-w-7xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <button onClick={() => setActiveMember(member)} className="text-left">
                  <Card className="text-center w-full h-64 flex flex-col justify-start hover:shadow-violet-500/20 cursor-pointer">
                    <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                    <h3 className="font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-violet-400 text-sm">{member.role}</p>
                  </Card>
                </button>
              </motion.div>
            ))}
          </div>

          {activeMember && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActiveMember(null)}>
              <div className="bg-gray-900 border border-white/10 rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 flex items-center justify-center bg-black/40">
                    <img src={activeMember.image} alt={activeMember.name} className="w-56 h-56 rounded-xl object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{activeMember.name}</h3>
                    <p className="text-violet-400 mb-4 font-medium">{activeMember.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{activeMember.bio}</p>
                    <div className="mt-6 flex justify-end">
                      <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white" onClick={() => setActiveMember(null)}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
