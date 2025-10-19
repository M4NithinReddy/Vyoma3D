import { motion } from 'framer-motion';
import { Network, TrendingUp, Cpu, DollarSign } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const services = [
  { icon: Network, title: 'Digital Twin Development', description: 'Create virtual replicas for real-time monitoring and predictive maintenance', benefits: ['Real-time monitoring', 'Predictive analytics', 'Reduced downtime'] },
  { icon: Cpu, title: 'Industry 4.0 Integration', description: 'Smart manufacturing solutions with IoT and AI integration', benefits: ['Process automation', 'Data-driven decisions', 'Quality control'] },
  { icon: TrendingUp, title: 'Process Optimization', description: 'Streamline workflows and eliminate inefficiencies', benefits: ['Increased throughput', 'Reduced cycle time', 'Better quality'] },
  { icon: DollarSign, title: 'Cost Reduction Analysis', description: 'Identify opportunities to reduce manufacturing costs', benefits: ['Material savings', 'Labor optimization', 'Waste reduction'] }
];

export const ServicesSpecialized = () => {
  return (
    <>
      <SEO title="Specialized Consulting - Digital Twin & Industry 4.0" description="Advanced consulting services including digital twin development, Industry 4.0 integration, and process optimization." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Consulting" title="Transform Your Manufacturing" description="Strategic consulting to modernize operations and drive competitive advantage." />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <svc.icon className="text-orange-400 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-gray-400 mb-4">{svc.description}</p>
                  <div className="space-y-2">
                    {svc.benefits.map(b => (
                      <div key={b} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        <span className="text-gray-300 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
