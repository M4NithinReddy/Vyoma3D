import { Car } from 'lucide-react';
import { IndustryTemplate } from '../components/IndustryTemplate';

export const IndustryAutomotive = () => (
  <IndustryTemplate
    industry="Automotive"
    icon={<Car className="text-cyan-400" size={48} />}
    description="Accelerate product development with rapid prototyping, tooling, and validation services."
    challenges={[
      { problem: 'Costly tooling for low-volume production', solution: '3D printed jigs and fixtures at a fraction of traditional costs' },
      { problem: 'Crash safety validation delays', solution: 'Virtual crash simulations with LS-DYNA and Abaqus' },
      { problem: 'Thermal management issues', solution: 'CFD analysis for cooling systems and heat exchangers' }
    ]}
    caseHighlights={[
      { title: 'Dashboard Prototype', result: 'Delivered in 5 days, 80% cost savings' },
      { title: 'Engine Mount Design', result: 'Optimized for vibration reduction' },
      { title: 'Assembly Fixture', result: '60% faster production cycle' }
    ]}
  />
);
