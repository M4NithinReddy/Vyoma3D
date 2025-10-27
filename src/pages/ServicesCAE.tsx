import { motion } from 'framer-motion';
import { Zap, Wind, Thermometer, Activity } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const services = [
  { icon: Zap, title: 'Finite Element Analysis (FEA)', description: 'Structural, thermal, vibration, and optimization studies' },
  { icon: Wind, title: 'Computational Fluid Dynamics (CFD)', description: 'Fluid flow and heat transfer analysis' },
  { icon: Activity, title: 'Crash & Impact Testing', description: 'Virtual crash simulations and explicit dynamics' },
  { icon: Thermometer, title: 'Thermal Analysis', description: 'Steady-state and transient thermal stress evaluations' },
  { icon: Activity, title: 'Modal Analysis', description: 'Natural frequency and harmonic response studies' },
  { icon: Activity, title: 'Drop Test Simulations', description: 'Impact resistance and durability assessment' },
  { icon: Activity, title: 'Multi-Body Dynamics (MBD)', description: 'Kinematic and dynamic system simulations' },
  { icon: Zap, title: 'Fatigue & Durability', description: 'Life prediction and fatigue performance analysis' },
  { icon: Zap, title: 'Design Validation', description: 'Performance verification against specifications' }
];

export const ServicesCAE = () => {
  return (
    <>
      <SEO title="CAE Services - FEA, CFD, Crash, Modal, Thermal" description="FEA, CFD, crash/impact, fatigue, modal, thermal, MBD, and design validation." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="CAE Services" title="Validate Performance Before Production" description="FEA, CFD, crash/impact, fatigue, modal, thermal, and MBD—simulation-first design validation." />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="text-center h-full">
                  <svc.icon className="mx-auto text-cyan-400 mb-3" size={36} />
                  <h3 className="font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-gray-400 text-sm">{svc.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => window.open('https://wa.me/918142149666?text=' + encodeURIComponent('Hello! I want to discuss a CAE project.'))}>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
