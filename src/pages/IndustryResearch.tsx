import { Beaker } from 'lucide-react';
import { IndustryTemplate } from '../components/IndustryTemplate';

export const IndustryResearch = () => (
  <IndustryTemplate
    industry="Research & Development"
    icon={<Beaker className="text-cyan-400" size={48} />}
    description="Enable breakthrough innovations with rapid iteration and advanced simulation capabilities."
    challenges={[
      { problem: 'Complex concept validation', solution: 'Multi-physics simulation and rapid prototyping' },
      { problem: 'Limited R&D budgets', solution: 'Cost-effective virtual testing before physical prototypes' },
      { problem: 'Interdisciplinary collaboration', solution: 'Comprehensive CAD/CAE services under one roof' }
    ]}
    caseHighlights={[
      { title: 'Novel Heat Exchanger', result: 'CFD optimization, 30% efficiency gain' },
      { title: 'Composite Structure', result: 'FEA validation, patent support' },
      { title: 'Bio-inspired Design', result: 'Generative design, 15 iterations in 2 weeks' }
    ]}
  />
);
