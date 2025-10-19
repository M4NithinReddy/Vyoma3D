import { Rocket } from 'lucide-react';
import { IndustryTemplate } from '../components/IndustryTemplate';

export const IndustryAerospace = () => (
  <IndustryTemplate
    industry="Aerospace & Defense"
    icon={<Rocket className="text-cyan-400" size={48} />}
    description="Mission-critical components with stringent quality standards and certification requirements."
    challenges={[
      { problem: 'Complex geometries with tight tolerances', solution: 'High-precision CAD modeling and advanced simulation to validate designs before manufacturing' },
      { problem: 'Lightweight structures without compromising strength', solution: 'Topology optimization and lattice structures using generative design' },
      { problem: 'Long lead times for custom components', solution: 'Rapid prototyping with SLA and metal 3D printing partnerships' }
    ]}
    caseHighlights={[
      { title: 'UAV Component', result: '40% weight reduction, 3-week turnaround' },
      { title: 'Satellite Bracket', result: 'Passed vibration testing, saved $15K' },
      { title: 'Turbine Blade Analysis', result: 'Identified stress concentration early' }
    ]}
  />
);
