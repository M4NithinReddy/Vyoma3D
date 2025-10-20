import { GraduationCap } from 'lucide-react';
import { IndustryTemplate } from '../components/IndustryTemplate';

export const IndustryEducation = () => (
  <IndustryTemplate
    industry="Education"
    icon={<GraduationCap className="text-cyan-400" size={48} />}
    description="Enable hands-on learning, rapid prototyping, and research validation with accessible CAD/CAE and additive manufacturing."
    challenges={[
      { problem: 'Limited access to industry-grade tools in labs', solution: 'Provide turnkey training models, templates, and best-practice workflows' },
      { problem: 'Slow iteration cycles for projects and research', solution: 'Rapid prototyping with SLA/FDM and simulation feedback loops' },
      { problem: 'Knowledge gaps in design for additive manufacturing', solution: 'Workshops and curriculum-aligned sessions for DfAM and simulation fundamentals' }
    ]}
    caseHighlights={[
      { title: 'Academic Lab Prototypes', result: 'Cut project iteration time by 50% across multiple cohorts' },
      { title: 'Research Fixture Set', result: 'Achieved repeatability and improved measurement confidence' },
      { title: 'Student Training Kits', result: 'Standardized teaching modules for CAD/CAE fundamentals' }
    ]}
  />
);
