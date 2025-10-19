import { motion } from 'framer-motion';
import { FileText, Box, RotateCcw, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { staggerContainer } from '../lib/animations';

const capabilities = [
  { icon: Box, title: '3D Part Design', description: 'Complex geometries and parametric modeling' },
  { icon: FileText, title: '2D Drawings', description: 'GD&T compliant technical documentation' },
  { icon: RotateCcw, title: 'Reverse Engineering', description: 'From physical parts to CAD models' },
  { icon: CheckCircle, title: 'DFM Optimization', description: 'Design for manufacturing excellence' }
];

const deliverables = ['Native CAD files (STEP, IGES, Parasolid)', 'PDF drawings with GD&T', 'Bill of Materials (BOM)', '3D PDF for review', 'Assembly instructions'];

const software = ['SolidWorks', 'CATIA', 'AutoCAD', 'Inventor', 'Creo', 'NX'];

export const ServicesCAD = () => {
  return (
    <>
      <SEO title="CAD Services - 3D Design & Engineering" description="Expert CAD services including 3D modeling, 2D drawings, reverse engineering, and design optimization." />

      <div className="section-padding pt-32">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="CAD Services"
            title="Precision 3D Design & Engineering"
            description="Transform your concepts into production-ready CAD models with our expert design team."
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {capabilities.map((cap, i) => (
              <AnimatedItem key={cap.title}>
                <Card className="text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-600/20 border border-violet-500/20 flex items-center justify-center">
                    <cap.icon className="text-violet-400" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
                </Card>
              </AnimatedItem>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <AnimatedSection>
              <Card>
                <h3 className="text-2xl font-bold text-white mb-6">Deliverables</h3>
                <ul className="space-y-4">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            <AnimatedSection>
              <Card>
                <h3 className="text-2xl font-bold text-white mb-6">Software We Use</h3>
                <div className="grid grid-cols-2 gap-3">
                  {software.map((sw) => (
                    <motion.div
                      key={sw}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-3 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl text-gray-300 text-center font-medium hover:border-violet-500/30 transition-colors cursor-default"
                    >
                      {sw}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Button size="lg" onClick={() => window.location.href = '/get-a-quote'}>
                Request a Quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};
