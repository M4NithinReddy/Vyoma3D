import { Heart } from 'lucide-react';
import { IndustryTemplate } from '../components/IndustryTemplate';

export const IndustryHealthcare = () => (
  <IndustryTemplate
    industry="Healthcare"
    icon={<Heart className="text-cyan-400" size={48} />}
    description="Biocompatible medical devices, surgical guides, and anatomical models for improved patient outcomes."
    challenges={[
      { problem: 'Patient-specific surgical planning', solution: 'Anatomical models from CT/MRI scans for pre-surgical planning' },
      { problem: 'Custom implant design', solution: 'CAD design with biocompatible materials and FEA validation' },
      { problem: 'Regulatory compliance', solution: 'Documentation and design history file support' }
    ]}
    caseHighlights={[
      { title: 'Surgical Guide', result: 'Improved accuracy by 95%' },
      { title: 'Dental Aligner', result: 'Perfect fit, 2-day turnaround' },
      { title: 'Orthopedic Implant', result: 'FDA submission support' }
    ]}
  />
);
