import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cog, Zap, Box, Users } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

const services = [
  {
    icon: Cog,
    title: 'CAD Services',
    description: '3D product design, assemblies, drawings, conversions, reverse engineering, and optimization.',
    href: '/services/cad',
    features: ['3D Product Design & Development', '2D Technical Drawings', '2D↔3D Conversions', 'Reverse Engineering']
  },
  {
    icon: Zap,
    title: 'CAE Services',
    description: 'FEA, CFD, fatigue, crash, modal, thermal, and design validation with ANSYS/HyperMesh/OptiStruct.',
    href: '/services/cae',
    features: ['FEA & Optimization', 'CFD & Heat Transfer', 'Crash/Impact & Modal', 'Design Validation']
  },
  {
    icon: Box,
    title: '3D Printing Services',
    description: 'SLA, FDM, and DLP printing with engineering resins and functional thermoplastics, plus pro finishing.',
    href: '/services/3d-printing',
    features: ['SLA Resin Printing', 'FDM Functional Parts', 'DLP High-Detail', 'Post-Processing & QA']
  },
  {
    icon: Users,
    title: 'Specialized Consulting',
    description: 'Taguchi analysis, optimization, digital twin, Industry 4.0, and cost reduction studies.',
    href: '/services/specialized',
    features: ['Taguchi & DOE', 'Optimization Studies', 'Digital Twin & I4.0', 'Cost Reduction Analysis']
  }
];

export const Services = () => {
  return (
    <>
      <SEO
        title="Engineering Services - CAD, CAE, 3D Printing & Consulting"
        description="Comprehensive CAD/CAE services, advanced 3D printing, and specialized consulting—from concept to production."
      />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Engineering Portfolio"
            description="CAD/CAE, 3D printing, and consulting—accelerating innovation from concept to reality with uncompromising quality."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={service.href}>
                  <Card className="h-full hover:border-violet-500/50">
                    <service.icon className="text-violet-400 mb-4" size={40} />
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-gray-300 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
