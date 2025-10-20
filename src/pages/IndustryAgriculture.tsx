import { Leaf } from 'lucide-react';
import { IndustryTemplate } from '../components/IndustryTemplate';

export const IndustryAgriculture = () => (
  <IndustryTemplate
    industry="Agriculture"
    icon={<Leaf className="text-cyan-400" size={48} />}
    description="Rapid development of customized agri-equipment parts, fixtures, and enclosures for field-ready validation and durability."
    challenges={[
      { problem: 'Harsh field conditions causing premature failures', solution: 'Material selection and FEA to validate strength, impact, and weather resistance' },
      { problem: 'Long lead times for spare parts and custom attachments', solution: 'On-demand 3D printing of spares and customized adapters with fast turnaround' },
      { problem: 'Ergonomics and fit issues in prototypes', solution: 'Iterative prototyping with design-for-manufacture feedback to refine fit and usability' }
    ]}
    caseHighlights={[
      { title: 'Seed Drill Component', result: 'Reduced weight by 28% and improved serviceability' },
      { title: 'Irrigation Enclosure', result: 'IP-rated housing validated with CFD airflow checks' },
      { title: 'Tractor Attachment Jig', result: 'Cut assembly time by 35% with robust jigs' }
    ]}
  />
);
