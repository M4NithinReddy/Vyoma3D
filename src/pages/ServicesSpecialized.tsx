import { motion } from 'framer-motion';
import { Network, TrendingUp, Cpu, DollarSign, Beaker, Wrench } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const services = [
  { icon: Beaker, title: 'Taguchi / DOE Studies', description: 'Design of Experiments for robust, efficient process optimization', benefits: ['Parameter screening', 'Noise reduction', 'Data-driven control'] },
  { icon: TrendingUp, title: 'Optimization Studies', description: 'Multi-objective design & process optimization', benefits: ['Weight/strength trade-offs', 'Cycle-time minimization', 'Cost/performance balance'] },
  { icon: Wrench, title: 'Failure Analysis', description: 'Root cause investigation and corrective actions', benefits: ['Fractography & simulation', 'Process audits', 'CAPA implementation'] },
  { icon: Network, title: 'Digital Twin Development', description: 'Virtual replicas for real-time monitoring & prediction', benefits: ['Real-time monitoring', 'Predictive analytics', 'Reduced downtime'] },
  { icon: Cpu, title: 'Industry 4.0 Integration', description: 'IoT-enabled, data-driven manufacturing systems', benefits: ['Process automation', 'Quality control', 'Traceability'] },
  { icon: DollarSign, title: 'Cost Reduction Analysis', description: 'Identify and prioritize cost-saving opportunities', benefits: ['Material savings', 'Labor optimization', 'Waste reduction'] }
];

const digitalManufacturing = [
  { icon: Cpu, title: 'Industry 4.0 Integration', description: 'IoT-enabled manufacturing and data-driven workflows', bullets: ['Connected equipment', 'Real-time dashboards', 'Closed-loop control'] },
  { icon: Network, title: 'Digital Twin Development', description: 'Virtual product/process lifecycle replicas', bullets: ['Lifecycle simulation', 'Predictive maintenance', 'Throughput optimization'] },
  { icon: Wrench, title: 'Additive Manufacturing Consulting', description: 'Process selection and optimization for AM', bullets: ['Material/process selection', 'Build strategy', 'Cost & lead-time modeling'] },
  { icon: Beaker, title: 'Quality Assurance Systems', description: 'Dimensional inspection and validation frameworks', bullets: ['Inspection plans', 'Gauge R&R', 'Traceability & reports'] },
  { icon: TrendingUp, title: 'Supply Chain Integration', description: 'On-demand, distributed manufacturing enablement', bullets: ['Vendor onboarding', 'Digital workflows', 'Inventory reduction'] }
];

const consultingAdvisory = [
  { icon: Cpu, title: 'Technology Selection', description: 'Guidance on CAD/CAE/AM technology stacks', bullets: ['Requirements mapping', 'Tool capability fit', 'Roadmapping'] },
  { icon: Wrench, title: 'Process Improvement', description: 'Lean and throughput-focused enhancements', bullets: ['Bottleneck analysis', 'Standard work', 'OEE improvement'] },
  { icon: DollarSign, title: 'Cost Reduction Studies', description: 'Design and process optimization for cost', bullets: ['DfX methods', 'Material/utilization', 'Cycle-time cuts'] },
  { icon: Beaker, title: 'Feasibility Studies', description: 'Technical and commercial viability assessments', bullets: ['Risk analysis', 'Pilot builds', 'ROI modeling'] },
  { icon: Network, title: 'IP Development Support', description: 'Patent research and development assistance', bullets: ['Prior art scans', 'Claims alignment', 'Prototyping support'] }
];

export const ServicesSpecialized = () => {
  return (
    <>
      <SEO title="Specialized Services - Taguchi, Optimization, Digital Twin" description="Taguchi/DOE, optimization studies, failure analysis, digital twin, Industry 4.0 integration, and cost reduction consulting." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="Consulting" title="Specialized Engineering & Manufacturing Consulting" description="Taguchi/DOE, optimization, failure analysis, digital twin, Industry 4.0, and cost reduction to elevate performance." />

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

          <SectionHeader title="Digital Manufacturing Solutions" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {digitalManufacturing.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <item.icon className="text-orange-400 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <SectionHeader title="Consulting & Advisory" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {consultingAdvisory.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <item.icon className="text-orange-400 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
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
