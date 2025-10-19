import { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, Droplet, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const processes = [
  { id: 'sla', icon: Droplet, title: 'SLA - Stereolithography', description: 'High-detail resin prints with smooth surface finish', resolution: '25-100 microns', materials: ['Standard Resin', 'Tough Resin', 'Flexible', 'Castable'], useCases: ['Prototypes', 'Jewelry', 'Dental models'] },
  { id: 'fdm', icon: Layers, title: 'FDM - Fused Deposition', description: 'Durable thermoplastic parts for functional testing', resolution: '100-300 microns', materials: ['PLA', 'ABS', 'PETG', 'Nylon', 'TPU'], useCases: ['Functional prototypes', 'Tooling', 'End-use parts'] },
  { id: 'dlp', icon: Printer, title: 'DLP - Digital Light Processing', description: 'Fast, high-precision prints with excellent detail', resolution: '35-75 microns', materials: ['Engineering Resin', 'Biocompatible', 'High-Temp'], useCases: ['Medical devices', 'Precision parts', 'Master molds'] }
];

export const Services3DPrinting = () => {
  const [activeTab, setActiveTab] = useState('sla');
  const active = processes.find(p => p.id === activeTab)!;

  return (
    <>
      <SEO title="3D Printing Services - SLA, FDM, DLP" description="Professional 3D printing services with SLA, FDM, and DLP technologies. Fast turnaround and premium quality." />

      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeader badge="3D Printing" title="Precision Additive Manufacturing" description="From concept validation to production runs, we deliver high-quality 3D printed parts." />

          <div className="max-w-5xl mx-auto">
            <div className="flex gap-4 mb-8 flex-wrap justify-center">
              {processes.map((proc) => (
                <button
                  key={proc.id}
                  onClick={() => setActiveTab(proc.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === proc.id
                      ? 'bg-violet-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {proc.title.split(' - ')[0]}
                </button>
              ))}
            </div>

            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card>
                <div className="flex items-start gap-6 mb-6">
                  <active.icon className="text-violet-400 flex-shrink-0" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{active.title}</h3>
                    <p className="text-gray-400">{active.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Resolution</h4>
                    <p className="text-gray-400">{active.resolution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Materials</h4>
                    <ul className="space-y-1">
                      {active.materials.map(m => <li key={m} className="text-gray-400 text-sm">{m}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Use Cases</h4>
                    <ul className="space-y-1">
                      {active.useCases.map(u => <li key={u} className="text-gray-400 text-sm">{u}</li>)}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <div className="mt-12 text-center">
              <Button size="lg" onClick={() => window.location.href = '/get-a-quote'}>
                Upload Files for Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
