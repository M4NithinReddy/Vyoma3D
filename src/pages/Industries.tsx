import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Car, Heart, Factory, Beaker } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

const industries = [
  { icon: Rocket, title: 'Aerospace & Defense', href: '/industries/aerospace-defense', description: 'Lightweight components, rapid prototyping, and certification support' },
  { icon: Car, title: 'Automotive', href: '/industries/automotive', description: 'Tooling, fixtures, and functional prototypes for faster time-to-market' },
  { icon: Heart, title: 'Healthcare', href: '/industries/healthcare', description: 'Medical devices, surgical guides, and anatomical models' },
  { icon: Factory, title: 'Industrial Manufacturing', href: '/industries/industrial-manufacturing', description: 'Jigs, fixtures, and custom tooling to optimize production' },
  { icon: Beaker, title: 'Research & Development', href: '/industries/research-development', description: 'Complex prototypes and validation for cutting-edge innovations' }
];

export const Industries = () => {
  return (
    <>
      <SEO title="Industries We Serve" description="Specialized engineering solutions for aerospace, automotive, healthcare, manufacturing, and R&D." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Industries" title="Domain Expertise Across Sectors" description="Deep industry knowledge combined with technical excellence." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, i) => (
              <motion.div key={industry.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={industry.href}>
                  <Card className="h-full hover:border-cyan-500/50 transition-all">
                    <industry.icon className="text-cyan-400 mb-4" size={40} />
                    <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                    <p className="text-gray-400">{industry.description}</p>
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
