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
    description: '3D modeling, 2D drawings, reverse engineering, and product design optimization.',
    href: '/services/cad',
    features: ['3D Part & Assembly Design', '2D Technical Drawings', 'Reverse Engineering', 'Design for Manufacturing']
  },
  {
    icon: Zap,
    title: 'CAE Services',
    description: 'FEA, CFD, crash simulations, and multi-physics analysis for product validation.',
    href: '/services/cae',
    features: ['Finite Element Analysis', 'Computational Fluid Dynamics', 'Structural Optimization', 'Thermal Analysis']
  },
  {
    icon: Box,
    title: '3D Printing Services',
    description: 'High-precision additive manufacturing with SLA, FDM, and DLP technologies.',
    href: '/services/3d-printing',
    features: ['SLA Resin Printing', 'FDM Production', 'DLP High-Detail', 'Post-Processing']
  },
  {
    icon: Users,
    title: 'Specialized Consulting',
    description: 'Digital twin development, Industry 4.0 integration, and process optimization.',
    href: '/services/specialized',
    features: ['Digital Twin Solutions', 'Industry 4.0 Strategy', 'Process Improvement', 'Cost Reduction Analysis']
  }
];

export const Services = () => {
  return (
    <>
      <SEO
        title="Engineering Services - CAD, CAE & 3D Printing"
        description="Comprehensive CAD/CAE services, precision 3D printing, and specialized consulting for product development."
      />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Engineering Solutions"
            description="From concept to production, we provide end-to-end services to accelerate your product development cycle."
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
