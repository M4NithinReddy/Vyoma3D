import { motion } from 'framer-motion';
import { FileText, Box, RotateCcw, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { staggerContainer } from '../lib/animations';

const capabilities = [
  { icon: Box, title: '3D Product Design & Development', description: 'Complete product conceptualization to detailed design' },
  { icon: FileText, title: '2D Technical Drawings', description: 'Engineering drawings, assembly drawings, part drawings' },
  { icon: RotateCcw, title: '3D to 2D Conversion', description: 'Converting 3D models to technical drawings' },
  { icon: RotateCcw, title: '2D to 3D Model Creation', description: 'Building 3D models from sketches, images, or blueprints' },
  { icon: CheckCircle, title: 'Assembly Design', description: 'Multi-part assembly modeling and documentation' },
  { icon: CheckCircle, title: 'Reverse Engineering', description: 'Recreating CAD models from physical parts' },
  { icon: CheckCircle, title: 'Design Optimization', description: 'Performance enhancement and cost reduction' },
  { icon: CheckCircle, title: 'Product Visualization & Rendering', description: 'Photorealistic renderings and animations' }
];

const deliverables = ['Native CAD files (STEP, IGES, Parasolid)', 'PDF drawings with GD&T', 'Bill of Materials (BOM)', '3D PDF for review', 'Assembly instructions'];

export const ServicesCAD = () => {
  return (
    <>
      <SEO title="CAD Services - 3D Design, Drawings, Reverse Engineering" description="3D product design, 2D drawings, 2D↔3D conversions, reverse engineering, optimization, and rendering." />

      <div className="section-padding pt-32">
        <div className="container mx-auto container-padding">
          <SectionHeader
            badge="CAD Services"
            title="Precision CAD for Product Development"
            description="3D design, 2D drawings, conversions, reverse engineering, optimization, and visualization."
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {capabilities.map((cap) => (
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
