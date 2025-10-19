import { motion } from 'framer-motion';
import { Zap, Wind, Thermometer, Activity } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const services = [
  { icon: Zap, title: 'Finite Element Analysis', description: 'Structural, modal, and fatigue analysis' },
  { icon: Wind, title: 'Computational Fluid Dynamics', description: 'Flow simulation and optimization' },
  { icon: Activity, title: 'Crash & Impact', description: 'Explicit dynamics and safety validation' },
  { icon: Thermometer, title: 'Thermal Analysis', description: 'Heat transfer and thermal management' }
];

export const ServicesCAE = () => {
  return (
    <>
      <SEO title="CAE Services - FEA, CFD & Simulation" description="Advanced CAE services including FEA, CFD, crash simulation, and multi-physics analysis." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="CAE Services" title="Validate Performance Before Production" description="Reduce physical prototyping costs with accurate simulation and analysis." />

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

          <Card className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Simulation Software</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['ANSYS', 'Abaqus', 'HyperMesh', 'LS-DYNA', 'COMSOL', 'STAR-CCM+', 'Fluent', 'Nastran'].map((sw) => (
                <div key={sw} className="px-4 py-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl text-gray-300 text-center font-medium">
                  {sw}
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => window.location.href = '/get-a-quote'}>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
