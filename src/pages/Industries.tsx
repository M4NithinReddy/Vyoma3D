import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Car, Heart, Factory, Beaker, Leaf, GraduationCap } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { siteConfig } from '../config/site.config';

const iconMap: Record<string, any> = {
  'Aerospace & Defense': Rocket,
  'Automotive': Car,
  'Healthcare': Heart,
  'Industrial Manufacturing': Factory,
  'Research & Development': Beaker,
  'Agriculture': Leaf,
  'Education': GraduationCap
};

const descriptionMap: Record<string, string> = {
  'Aerospace & Defense': 'Lightweight components, rapid prototyping, and certification support',
  'Automotive': 'Tooling, fixtures, and functional prototypes for faster time-to-market',
  'Healthcare': 'Medical devices, surgical guides, and anatomical models',
  'Industrial Manufacturing': 'Jigs, fixtures, and custom tooling to optimize production',
  'Research & Development': 'Complex prototypes and validation for cutting-edge innovations',
  'Agriculture': 'Agri-equipment parts, fixtures, and custom components for field-ready validation',
  'Education': 'Academic labs, training models, and prototyping for research and teaching'
};

const industries = (siteConfig.nav.main.find(i => i.label === 'Industries')?.megaMenu || []).map(item => ({
  icon: iconMap[item.label] || Factory,
  title: item.label,
  href: item.href,
  description: descriptionMap[item.label] || 'Specialized solutions tailored to your domain'
}));

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
