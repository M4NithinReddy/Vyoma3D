import { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const processes = [
  {
    id: 'dlp',
    icon: Printer,
    title: 'DLP - Digital Light Processing',
    description: 'Fast batch production with high detail and smooth finish',
    resolution: '35-75 microns',
    materials: ['Engineering Resin', 'Biocompatible', 'High-Temperature'],
    useCases: ['Dental Applications', 'High-Detail Miniatures', 'Precision Models']
  }
];

export const Services3DPrinting = () => {
  const [activeTab, setActiveTab] = useState('dlp');
  const active = processes.find(p => p.id === activeTab)!;

  return (
    <>
      <SEO title="3D Printing Services - DLP" description="DLP high-detail batch production and comprehensive post-processing." />

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

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <h3 className="text-xl font-bold text-white mb-3">Post-Processing Services</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>UV Curing & Heat Treatment</li>
                  <li>Sanding & Surface Finishing</li>
                  <li>Painting & Coating</li>
                  <li>Assembly Services</li>
                  <li>Quality Inspection</li>
                </ul>
              </Card>
              <Card>
                <h3 className="text-xl font-bold text-white mb-2">SLS – Future Expansion</h3>
                <p className="text-gray-400 text-sm mb-2">Nylon parts production and direct metal printing roadmap with no support structures required.</p>
                <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                  <li>Nylon parts production for strong, functional components</li>
                  <li>No support structures: complex geometries achievable</li>
                  <li>Metal part printing (DMLS) roadmap</li>
                </ul>
              </Card>
            </div>

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
