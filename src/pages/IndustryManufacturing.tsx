import { Factory } from 'lucide-react';
import { IndustryTemplate } from '../components/IndustryTemplate';

export const IndustryManufacturing = () => (
  <IndustryTemplate
    industry="Industrial Manufacturing"
    icon={<Factory className="text-cyan-400" size={48} />}
    description="Optimize production with custom tooling, fixtures, and process improvements."
    challenges={[
      { problem: 'Expensive metal tooling', solution: 'Durable 3D printed jigs and fixtures with engineering-grade materials' },
      { problem: 'Production line bottlenecks', solution: 'Process simulation and optimization analysis' },
      { problem: 'Quality control challenges', solution: 'Custom inspection fixtures and go/no-go gauges' }
    ]}
    caseHighlights={[
      { title: 'Assembly Jig', result: '70% cost reduction vs machined' },
      { title: 'End-of-Arm Tooling', result: 'Lightweight, increased throughput' },
      { title: 'Inspection Fixture', result: 'Reduced inspection time by 50%' }
    ]}
  />
);
